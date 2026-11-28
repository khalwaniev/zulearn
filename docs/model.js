/* Shared production model: browser rendering and maintenance validation use these same rules. */
(function (root) {
  'use strict';
  const statuses = ['not_started', 'in_progress', 'completed_assisted', 'completed_independent', 'independently_mastered', 'review_required', 'completed_reported'];
  const evidence = ['independent', 'retention', 'transfer', 'accounted'];
  const done = status => ['completed_assisted', 'completed_independent', 'independently_mastered', 'completed_reported'].includes(status);
  const object = value => !!value && typeof value === 'object' && !Array.isArray(value);
  const own = (value, key) => Object.prototype.hasOwnProperty.call(value, key);
  const equal = (a, b) => {
    if (a === b) return true;
    if (Array.isArray(a) && Array.isArray(b)) return a.length === b.length && a.every((v, i) => equal(v, b[i]));
    if (object(a) && object(b)) return Object.keys(a).length === Object.keys(b).length && Object.keys(a).every(k => own(b, k) && equal(a[k], b[k]));
    return false;
  };
  const branches = d => d.resources.platforms.flatMap(p => p.categories.flatMap(c => c.branches));
  function legacyItems(d) {
    return [...d.curr.competencies, ...d.deep.concepts, ...d.lessons.lessons, ...d.checks.checkpoints, ...d.subs.subcompetencies,
      ...['bank', 'sheets', 'papers', 'tt', 'opening', 'assignments', 'registered', 'aggregates'].flatMap(key => d.extras[key] || [])];
  }
  function allItems(d) {
    const old = legacyItems(d), ids = new Set(old.map(x => x.id));
    return [...old, ...(d.extras.curated || []), ...branches(d).filter(b => !ids.has(b.id))];
  }
  function canonical(value) {
    try {
      const u = new URL(value);
      if (u.protocol !== 'https:' || u.username || u.password || u.hash) return null;
      if (['tensortonic.com', 'www.tensortonic.com'].includes(u.hostname) && /^\/problems\/[a-z0-9-]+\/?$/i.test(u.pathname)) {
        if ([...u.searchParams.keys()].some(k => !['studyPlan', 'roadmap', 'step'].includes(k))) return null;
        return 'https://www.tensortonic.com' + u.pathname.replace(/\/$/, '');
      }
      if (['leetcode.com', 'www.leetcode.com'].includes(u.hostname) && /^\/problems\/[a-z0-9-]+\/?$/i.test(u.pathname)) return 'https://leetcode.com' + u.pathname.replace(/\/$/, '') + '/';
      return u.search || u.pathname === '/' ? null : u.origin + u.pathname;
    } catch { return null; }
  }
  function resolveId(d, value) {
    const s = String(value).trim();
    if (allItems(d).some(x => x.id === s)) return s;
    const url = canonical(s);
    for (const x of [...d.extras.tt, ...d.extras.registered, ...d.extras.papers, ...(d.extras.curated || [])]) {
      if (x.source_observation === s || x.aliases?.includes(s) || (url && [x.url, ...(x.aliases || [])].some(v => canonical(v) === url))) return x.id;
    }
    return null;
  }
  function validRecord(id, r) {
    return object(r) && Object.keys(r).every(k => ['status', 'evidence'].includes(k)) && statuses.includes(r.status) && Array.isArray(r.evidence) && new Set(r.evidence).size === r.evidence.length && r.evidence.every(e => evidence.includes(e)) &&
      (!['completed_independent', 'independently_mastered'].includes(r.status) || r.evidence.includes('independent')) &&
      (r.status !== 'independently_mastered' || ['retention', 'transfer'].every(e => r.evidence.includes(e))) &&
      (!/^D\d{3}$/.test(id) || !done(r.status) || r.evidence.includes('accounted'));
  }
  function validSelection(b, s) {
    return !!b && b.trackable && object(s) && Object.keys(s).every(k => ['selected', 'scope_mode', 'scope'].includes(k)) &&
      typeof s.selected === 'boolean' && ['local_selection', 'provider_full', 'relevant_selection'].includes(s.scope_mode) &&
      typeof s.scope === 'string' && s.scope.trim().length >= 12 && s.scope.length <= 3000 &&
      (b.selection !== 'primary' || s.selected) && (s.scope_mode !== 'provider_full' || b.scope_mode === 'provider_full');
  }
  function validProgress(d, p) {
    const known = new Set(allItems(d).map(x => x.id)), by = new Map(branches(d).map(b => [b.id, b]));
    return object(p) && p.schema_version === 1 && object(p.records) && Object.keys(p).every(k => ['schema_version', 'records', 'next', 'selections'].includes(k)) &&
      Object.entries(p.records).every(([id, r]) => known.has(id) && validRecord(id, r)) &&
      (!own(p, 'next') || object(p.next) && Object.entries(p.next).every(([lane, id]) => /^[FCMLSRBD]$/.test(lane) && known.has(id))) &&
      (!own(p, 'selections') || object(p.selections) && Object.entries(p.selections).every(([id, s]) => validSelection(by.get(id), s)));
  }
  function selection(b, p) {
    return p.selections?.[b.id] || {selected: b.default_selected, scope_mode: b.scope_mode, scope: b.completion_scope};
  }
  function checklistStats(d, p, ids) {
    const set = ids ? new Set(ids) : null;
    const selected = branches(d).filter(b => b.trackable && (!set || set.has(b.id)) && selection(b, p).selected);
    return {total: selected.length, done: selected.filter(b => done(p.records[b.id]?.status)).length};
  }
  function validateHierarchy(d) {
    const ps = d.resources.platforms, bs = branches(d), ids = bs.map(x => x.id), known = new Set(allItems(d).map(x => x.id));
    const expected = [
      ['Deep-Path Everything','Learning Paths','Labs','Projects','Collections','Courses','Math','Intuition'],
      ['Study Plans & Roadmap','Projects','Research Paper Tracks','Labs','ML System Design','Articles'],
      ['Lessons','Problem Bank','Selected Courses','Research Papers']
    ];
    if (ps.length !== 3 || ps.map(p => p.name).join('|') !== 'Deep-ML|TensorTonic|Zulearn' || ps.some((p,i) => !equal(p.categories.map(c=>c.title),expected[i]))) return false;
    if (ids.length !== new Set(ids).size || bs.some(b => !known.has(b.id) || !b.title || !b.completion_scope || !Array.isArray(b.scope_ids) || b.scope_ids.some(k => !known.has(k)))) return false;
    const h = d.extras.hierarchy;
    if (h.schema_version !== 2 || Object.keys(h.manual).some(id => !ids.includes(id) || own(h.derived, id))) return false;
    if (bs.filter(b => b.default_selected && b.trackable).length !== Object.keys(h.manual).length || bs.some(b=>b.default_selected && b.trackable && !own(h.manual,b.id))) return false;
    const dp = ps[0].categories[0].branches;
    if (dp.length !== 14 || dp.some((b, i) => b.id !== 'UNIT-DP-' + String(i + 1).padStart(2, '0') || !h.manual[b.id] || !b.default_selected)) return false;
    if (!equal(Object.keys(h.derived),['UNIT-PATH-D']) || !equal(h.derived['UNIT-PATH-D'].children,dp.map(b=>b.id))) return false;
    if (d.deep.concepts.some(c => h.manual[c.id]) || Object.keys(h.manual).some(id => !id.startsWith('UNIT-') && !/^P\d{2}$/.test(id))) return false;
    const scopeOwners = new Map();
    for (const b of bs.filter(b => b.default_selected && b.trackable)) for (const id of b.scope_ids) {
      if (h.manual[id] || scopeOwners.has(id)) return false;
      scopeOwners.set(id, b.id);
    }
    if (d.deep.concepts.some(c => !scopeOwners.has(c.id))) return false;
    return h.aliases.every(a => known.has(a.id) && resolveId(d, a.alias) === a.id);
  }
  const auditStatuses = ['confirmed_complementary', 'independent_assessment', 'native_referral', 'deferred', 'unresolved'];
  function auditStats(audit) {
    const counts = Object.fromEntries(auditStatuses.map(s => [s, 0]));
    for (const entry of audit.entries || []) if (own(counts, entry.status)) counts[entry.status]++;
    return counts;
  }
  function validateAudit(d) {
    const a = d.audit, known = new Set(allItems(d).map(x => x.id));
    if (!object(a) || a.schema_version !== 2 || !Array.isArray(a.entries) || !object(a.status_counts)) return false;
    if (new Set(a.entries.map(x => x.id)).size !== a.entries.length || !equal(a.status_counts, auditStats(a))) return false;
    if (a.entries.some(x => !known.has(x.id) || !auditStatuses.includes(x.status) || !x.title || !x.gap || !x.provenance || !x.verification || !x.why_insufficient || !x.inspection_limit || !Array.isArray(x.provider_evidence) || !/^https:\/\//.test(x.url))) return false;
    const confirmed = a.entries.filter(x => x.status === 'confirmed_complementary');
    if (confirmed.some(x => !x.source_id || !x.gap_id || !Array.isArray(x.prerequisites) || !x.difficulty || !x.learning_depth || !x.lawful_access || !x.transfer_criterion || !x.complementarity_justification)) return false;
    const counts = auditStats(a);
    if (a.confirmed_complementary_count !== counts.confirmed_complementary || a.native_referral_count !== counts.native_referral || a.pending_count !== counts.unresolved || a.confirmed_gap_count !== new Set(confirmed.map(x => x.gap_id)).size || a.confirmed_unique_gap_count !== null) return false;
    // A branch may select confirmed practice only. Assessment availability never
    // silently activates an additional compulsory practice scope.
    return branches(d).filter(b => b.complementary_status === 'confirmed_bounded').every(b => b.trackable && b.scope_ids.length > 0 && b.scope_ids.every(id => confirmed.some(x => x.id === id)));
  }
  function validateRegistry(d) {
    const old = legacyItems(d), ids = old.map(x => x.id);
    if (new Set(allItems(d).map(x => x.id)).size !== allItems(d).length || new Set(ids).size !== ids.length || d.curr.competencies.length !== 109 || d.deep.concepts.length !== 112) return false;
    const aliases = new Map();
    for (const x of [...d.extras.tt, ...d.extras.registered]) {
      for (const alias of [x.url, x.source_observation, ...(x.aliases || [])].filter(Boolean)) {
        const key = canonical(alias) || alias;
        if (aliases.has(key) && aliases.get(key) !== x.id) return false;
        aliases.set(key, x.id);
      }
    }
    return validateHierarchy(d) && (!d.audit || validateAudit(d));
  }
  function batchDraft(d, p, edits, digest = '') {
    const changes = Object.entries(edits).map(([id, change]) => ({id, previous: p.records[id] || null, previous_selection: p.selections?.[id] || null, ...change}));
    const batch = {schema_version: 2, base_progress_sha256: digest, changes,
      instruction: 'Proposal only. After the learner explicitly authorizes publication, read latest docs/progress.json and production registry. Compare BOTH previous record and previous selection for every changed ID; stop on conflict. Validate with docs/model.js applyBatch. Merge only these branches, preserve all other records and next pointers. Commit with current GitHub blob SHA or expected branch SHA, then read back the committed file and verify these exact changes. No constituent activity completion or mastery is inferred.'};
    applyBatch(d, p, batch, {authorized: true});
    return batch;
  }
  function applyBatch(d, current, batch, options = {}) {
    if (options.authorized !== true) throw Error('Explicit learner authorization is required before committing progress.');
    if (!validProgress(d, current) || !object(batch) || batch.schema_version !== 2 || !Array.isArray(batch.changes) || batch.changes.length > branches(d).length) throw Error('Invalid progress or batch.');
    const by = new Map(branches(d).map(b => [b.id, b])), seen = new Set();
    const next = structuredClone(current);
    for (const c of batch.changes) {
      const b = by.get(c.id);
      if (!b?.trackable || seen.has(c.id) || !own(c, 'previous') || !own(c, 'previous_selection') || (!own(c, 'record') && !own(c, 'selection')) || Object.keys(c).some(k => !['id', 'previous', 'previous_selection', 'record', 'selection'].includes(k))) throw Error('Only distinct trackable first-level branches can be updated.');
      seen.add(c.id);
      if (!equal(current.records[c.id] || null, c.previous) || !equal(current.selections?.[c.id] || null, c.previous_selection)) throw Error('Conflict for ' + c.id + ': read the latest GitHub state and review the change.');
      if (own(c, 'selection')) {
        if (!validSelection(b, c.selection)) throw Error('Invalid selected learning scope.');
        // An old completion cannot silently certify a different scope.
        const old = selection(b, current);
        if ((!equal(old.scope, c.selection.scope) || old.scope_mode !== c.selection.scope_mode) && done(current.records[c.id]?.status) && (!own(c, 'record') || c.record.status !== 'not_started')) throw Error('Changing a completed scope requires an explicit reset to not_started.');
        next.selections ||= {};
        next.selections[c.id] = structuredClone(c.selection);
      }
      if (own(c, 'record')) {
        if (!selection(b, next).selected || !validRecord(c.id, c.record)) throw Error('Invalid branch record or unselected resource.');
        if (!['not_started', 'completed_reported'].includes(c.record.status) || c.record.evidence.length) throw Error('Branch batches support self-reported completion only; independent mastery needs separate reviewed evidence.');
        next.records[c.id] = structuredClone(c.record);
      }
    }
    if (!validProgress(d, next)) throw Error('Merged progress is invalid.');
    return next;
  }
  function committedMatches(d, previous, edits, latest) {
    if (!validProgress(d, latest)) return false;
    const by = new Map(branches(d).map(b=>[b.id,b]));
    return Object.entries(edits).every(([id,c]) => by.get(id)?.trackable &&
      equal(latest.records[id] || null, own(c,'record') ? c.record : previous.records[id] || null) &&
      equal(latest.selections?.[id] || null, own(c,'selection') ? c.selection : previous.selections?.[id] || null));
  }
  function rational(value) {
    const s = String(value).trim().replace(/−/g, '-');
    if (!/^[+-]?(?:\d{1,30}(?:\.\d{1,20})?|\.\d{1,20})(?:\s*\/\s*[+-]?\d{1,30})?$/.test(s)) return null;
    const [a, b] = s.split('/').map(x => x.trim());
    if (b !== undefined) return a.includes('.') || BigInt(b) === 0n ? null : [BigInt(a), BigInt(b)];
    if (!a.includes('.')) return [BigInt(a), 1n];
    const [i, f] = a.replace(/^[+-]/, '').split('.');
    return [(a.startsWith('-') ? -1n : 1n) * BigInt((i || '0') + f), 10n ** BigInt(f.length)];
  }
  function checkAnswer(value, expected) {
    const x = rational(value);
    return x === null ? null : x[0] * BigInt(expected[1]) === x[1] * BigInt(expected[0]);
  }
  const viewIds = ['resources', 'bank'];
  function routeView(hash, d) {
    let id; try { id = decodeURIComponent(String(hash || '').replace(/^#/, '')); } catch { id = ''; }
    if (id === 'bank') return {view: 'bank', target: 'bank'};
    const rawKey = id.replace(/^(item-|lesson-)/, '');
    const key = resolveId(d, rawKey) || rawKey;
    const bank = [...d.extras.bank, ...d.extras.sheets, ...d.extras.assignments, ...d.extras.registered, ...d.extras.tt, ...(d.extras.curated || [])];
    if (bank.some(x => x.id === key)) return {view: 'bank', target: 'exercise-' + encodeURIComponent(key), pending: d.audit ? d.audit.entries.find(x => x.id === key)?.status === 'unresolved' : !d.extras.tt.some(x => x.id === key)};
    const bs = branches(d);
    const b = bs.find(b => b.id === key || 'branch-' + b.id === id || b.scope_ids.includes(key));
    if (b) return {view: 'resources', target: 'branch-' + b.id};
    if (/^part-\d+$/.test(id)) return {view: 'resources', target: 'branch-UNIT-DP-' + String(Number(id.slice(5))).padStart(2, '0')};
    if (['progress', 'checklist'].includes(id)) return {view: 'resources', target: 'savePanel'};
    if (['challenges', 'tutor'].includes(id)) return {view: 'resources', target: 'legacyNotice', legacy: id};
    if (id.startsWith('category-') || id === 'savePanel' || id === 'legacyNotice') return {view: 'resources', target: id};
    return {view: 'resources', target: 'resources'};
  }
  const api = {statuses, done, equal, branches, legacyItems, allItems, canonical, resolveId, validRecord, validSelection, validProgress, selection, checklistStats, validateHierarchy, validateRegistry, auditStatuses, auditStats, validateAudit, batchDraft, applyBatch, committedMatches, rational, checkAnswer, viewIds, routeView};
  if (typeof module !== 'undefined') module.exports = api;
  else root.ZulearnModel = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
