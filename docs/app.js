/* Buildless application. GitHub is the only committed progress store. */
'use strict';
const M = globalThis.ZulearnModel;
const REPO = 'https://github.com/khalwaniev/zulearn';
const MAIN_PROGRESS = 'https://raw.githubusercontent.com/khalwaniev/zulearn/main/docs/progress.json';
const app = document.getElementById('app');
let data, progress, progressDigest = '', edits = {}, search = '', selectedOnly = false;
let bankSearch = '', expandedCategories = new Set(), selectionForms = new Set(), renderCount = 0;
const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const el = id => document.getElementById(id);
const safeURL = value => /^(https:\/\/|#)/.test(String(value)) ? value : '#resources';
const link = (url, text, cls = '') => '<a class="' + cls + '" href="' + esc(safeURL(url)) + '"' + (url?.startsWith('https:') ? ' target="_blank" rel="noopener noreferrer"' : '') + '>' + esc(text) + '</a>';
const branchMap = () => new Map(M.branches(data).map(b => [b.id, b]));
const itemMap = () => new Map(M.allItems(data).map(x => [x.id, x]));
const staged = b => edits[b.id]?.selection || M.selection(b, progress);
const stagedRecord = id => edits[id]?.record || progress.records[id];
const scopeLabel = mode => mode === 'provider_full' ? 'Full provider resource' : mode === 'relevant_selection' ? 'Relevant part scope' : 'Local selection';
const searchIcon = '<svg class="search-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><circle cx="8.5" cy="8.5" r="5.7"/><path d="m13 13 4 4"/></svg>';
function fieldSearch(id, value, placeholder) {
  return '<div class="search-wrap"><label class="visually-hidden" for="' + id + '">' + esc(placeholder) + '</label>' + searchIcon + '<input id="' + id + '" type="search" value="' + esc(value) + '" placeholder="' + esc(placeholder) + '" autocomplete="off"></div>';
}
function contents(b) {
  const items = itemMap();
  const rows = b.contents || b.scope_ids.map(id => ({title: items.get(id)?.title || id, url: items.get(id)?.url, id}));
  return rows.length ? '<p class="scope-label">Informational contents · no separate checkboxes</p><ul class="content-list">' + rows.map(x => '<li>' + (x.url ? link(x.url, x.title) : esc(x.title)) + (x.scope ? '<br><small>' + esc(x.scope) + '</small>' : '') + '</li>').join('') + '</ul>' : '';
}
function selectionForm(b) {
  if (!selectionForms.has(b.id)) return '';
  return '<form class="selection-form" data-select-form="' + esc(b.id) + '"><p class="fine">Choose a useful scope after checking the provider. This stays optional until you add it.</p>' +
    '<label>Completion scope<select name="scope_mode"><option value="local_selection" selected>Bounded complementary selection</option>' + (b.scope_mode === 'provider_full' ? '<option value="provider_full">Full provider resource</option>' : '') + '</select></label>' +
    '<label>What will you complete?<textarea name="scope" rows="3" minlength="12" maxlength="3000" required>' + esc(b.completion_scope) + '</textarea></label>' +
    '<p class="fine">For a selection, name the chapters, tasks, or stopping point. Confirm the resource identity and check for overlap with work already done.</p><div class="actions"><button type="submit" class="primary">Add this scope</button><button type="button" data-cancel-select="' + esc(b.id) + '">Cancel</button></div></form>';
}
function branchRow(b) {
  const s = staged(b), r = stagedRecord(b.id), checked = M.done(r?.status), committed = M.done(progress.records[b.id]?.status), pending = !!edits[b.id];
    const metadata = [b.observed_count, b.trackable ? s.selected ? scopeLabel(s.scope_mode) : 'Optional' : 'Reviewed · no confirmed practice scope'];
  if (checked) metadata.push(pending ? 'Completion staged' : 'Completed · committed');
  else if (pending) metadata.push('Change staged');
  let controls = '';
  if (b.trackable && s.selected) controls = '<label class="complete-control" title="' + esc('Stage self-reported completion: ' + b.title) + '"><span class="visually-hidden">Complete ' + esc(b.title) + '</span><input type="checkbox" data-unit="' + esc(b.id) + '" aria-label="' + esc('Complete ' + b.title) + '"' + (checked ? ' checked' : '') + '></label>';
  else if (b.trackable) controls = '<button type="button" class="link-button" data-select="' + esc(b.id) + '" aria-label="' + esc('Select ' + b.title) + '">Select</button>';
  else controls = link('#item-' + b.id, 'Review set', 'provider-link');
  return '<article class="branch" id="branch-' + esc(b.id) + '" data-branch="' + esc(b.id) + '"><div class="branch-top"><div class="branch-copy"><h3>' +
    (b.url ? link(b.url, b.title, 'branch-title') : '<span class="branch-title">' + esc(b.title) + '</span>') + '</h3><div class="branch-meta">' + metadata.filter(Boolean).map(t => '<span' + (t.includes('staged') ? ' class="pending-state"' : t.includes('committed') ? ' class="completion-state"' : '') + '>' + esc(t) + '</span>').join('') + '</div></div><div class="branch-controls">' + controls + '</div></div>' +
    '<details class="branch-details" id="scope-' + esc(b.id) + '"><summary>Scope & source</summary><div class="branch-detail-content"><p class="scope-label">' + esc(scopeLabel(s.scope_mode)) + '</p><p>' + esc(s.scope) + '</p>' + (b.note ? '<p>' + esc(b.note) + '</p>' : '') +
    '<p>' + link(b.url || b.source_url, b.url ? 'Open resource' : b.source_url.startsWith('#') ? 'Open Problem Bank' : 'Open provider category · individual URL unavailable') + '</p>' + contents(b) +
    (b.provider_sections ? '<p class="fine">Full provider plan: ' + b.provider_sections.length + ' chapters. Their individual tasks remain informational; this selection does not complete them.</p>' : '') +
    (s.selected && b.selection !== 'primary' ? '<button type="button" class="link-button" data-remove="' + esc(b.id) + '">Remove from selected learning</button>' : '') +
    (committed ? '<p class="fine">This records the branch’s reported scope. It does not mark any constituent activity complete or establish independent mastery.</p>' : '') + '</div></details>' + selectionForm(b) + '</article>';
}
function category(c) {
  let matches = c.branches.filter(b => (!selectedOnly || staged(b).selected) && (!search || (b.title + ' ' + c.title + ' ' + b.platform + ' ' + b.note).toLowerCase().includes(search.toLowerCase())));
  const selected = matches.filter(b => staged(b).selected), optional = matches.filter(b => !staged(b).selected);
  const limit = expandedCategories.has(c.id) || search ? optional.length : 8;
  const rows = [...selected, ...optional.slice(0, limit)];
  const stats = M.checklistStats(data, progress, c.branches.map(b => b.id));
  const shown = !search && !selectedOnly || matches.length;
  const count = stats.total ? stats.done + ' / ' + stats.total + ' complete' : c.branches.length + ' ' + (c.branches.some(b => !b.trackable) ? 'sets to review' : 'to explore');
  return '<details class="category" id="category-' + c.id + '"' + (!renderCount && c.id === 'dml-everything' || search && matches.length ? ' open' : '') + (!shown ? ' hidden' : '') + '><summary><span class="category-title">' + esc(c.title) + '</span><span class="category-count">' + esc(count) + '</span></summary><div class="category-body"><div class="category-context"><p>' + esc(c.note || 'Choose only what supports your learning. Optional resources add no completion obligation.') + '</p>' + link(c.url, c.url.startsWith('#') ? 'Open Problem Bank' : c.url.startsWith(REPO) ? 'Open GitHub sources' : 'Open provider', 'provider-link') + '</div>' +
    (c.catalogue_sections ? '<details class="branch-details" id="sections-' + c.id + '"><summary>Provider project categories</summary><ul class="content-list">' + c.catalogue_sections.map(x=>'<li>'+link(x.url,x.title)+'<br><small>'+esc(x.note)+'</small></li>').join('')+'</ul></details>' : '') +
    (rows.length ? rows.map(branchRow).join('') : '<p class="empty">No matching resources in this category.</p>') +
    (optional.length > limit ? '<button type="button" class="link-button show-more" data-more="' + c.id + '">Show all ' + optional.length + ' optional resources</button>' : '') + '</div></details>';
}
function resourcesHTML() {
  const stats = M.checklistStats(data, progress);
  return '<section id="resources" aria-labelledby="resourcesTitle"><div class="page-intro"><div><p class="eyebrow">A considered learning library</p><h1 id="resourcesTitle">Learning Resources</h1><p class="description">Choose a resource. Learn on the platform.<br>Keep track of the meaningful things you finish.</p></div><div class="intro-note"><strong>' + stats.done + '<span class="fine"> / ' + stats.total + '</span></strong>selected branches complete<br>Completion is self-reported.</div></div>' +
    '<div class="toolbar">' + fieldSearch('resourceSearch', search, 'Find a resource…') + '<div class="toolbar-right"><label class="visually-hidden" for="resourceFilter">Show resources</label><select id="resourceFilter"><option value="all">All resources</option><option value="selected"' + (selectedOnly ? ' selected' : '') + '>Selected learning</option></select><button type="button" class="review-button" data-review data-pending="' + !!Object.keys(edits).length + '">Review changes' + (Object.keys(edits).length ? ' (' + Object.keys(edits).length + ')' : '') + '</button></div></div>' +
    '<div id="legacyNotice" class="notice" hidden></div><div class="platforms">' + data.resources.platforms.map(p => {
      const ids = p.categories.flatMap(c => c.branches.map(b => b.id)), s = M.checklistStats(data, progress, ids);
      return '<section class="platform" data-platform="' + esc(p.name) + '" aria-label="' + esc(p.name) + '"><div class="platform-heading"><div class="platform-logo" aria-hidden="true">' + (p.name === 'Deep-ML' ? 'D' : p.name === 'TensorTonic' ? 'T' : 'z') + '</div><div><h2>' + esc(p.name) + '</h2><p>' + esc(p.note) + '</p></div><span class="platform-progress">' + (s.total ? s.done + ' / ' + s.total + ' selected branches' : 'Optional discovery') + '</span></div><div class="category-stack">' + p.categories.map(category).join('') + '</div></section>';
    }).join('') + '</div><p class="resource-footnote">One checkbox per selected branch. Concepts and problems stay on the provider. ' + link(REPO + '/blob/main/docs/README.md', 'Inventory & tracking notes') + '</p>' + savePanel() + '</section>';
}
function savePanel() {
  const keys = Object.keys(edits);
  let text = ''; try { text = JSON.stringify(M.batchDraft(data, progress, edits, progressDigest), null, 2); } catch (e) { text = e.message; }
  return '<details class="save-panel" id="savePanel"><summary>Save progress to GitHub<span>' + (keys.length ? keys.length + ' staged · not committed' : 'No staged changes') + '</span></summary><div class="save-body"><p>Checkboxes prepare a proposal in this tab. To save it, copy the batch into ChatGPT and explicitly ask to commit it. The website cannot commit to GitHub.</p>' +
    '<div class="pending-list">' + keys.map(id => '<div class="pending-row"><span>' + esc(branchMap().get(id)?.title || id) + '<br><small>' + esc(edits[id].record ? edits[id].record.status === 'not_started' ? 'Reset reported completion' : 'Report branch completion' : edits[id].selection.selected ? 'Add selected scope' : 'Remove selected scope') + '</small></span><button type="button" data-undo="' + esc(id) + '">Undo</button></div>').join('') + '</div>' +
    '<label for="batchText">Progress update batch</label><textarea class="batch-text" id="batchText" readonly rows="7" spellcheck="false">' + esc(text) + '</textarea><div class="save-actions"><button type="button" class="primary" data-copy-batch' + (!keys.length ? ' disabled' : '') + '>Copy batch</button><button type="button" data-discard' + (!keys.length ? ' disabled' : '') + '>Discard changes</button><button type="button" data-verify>Verify committed progress</button></div><output id="saveFeedback" class="feedback" aria-live="polite"></output><p class="fine">Publishing requires your explicit authorization. The writer must compare the latest records and scopes, protect against conflicts, preserve unrelated history, and verify the commit. Only theme preference is saved in this browser.</p></div></details>';
}
function auditDetails(a) {
  return '<details><summary>Gap, provenance & verification</summary><dl class="audit-list"><dt>Target skill or competency</dt><dd>' + esc(Array.isArray(a.target) ? a.target.join(', ') : a.target) + '</dd><dt>Candidate gap</dt><dd>' + esc(a.gap) + '</dd><dt>Provider evidence inspected</dt><dd>' + (a.provider_evidence.length ? a.provider_evidence.map(x => link(x.url, x.title || x.url) + ' · ' + esc(x.level) + (x.observation ? ' · ' + esc(x.observation) : '')).join('<br>') : 'No reliable item-level comparison available.') + '</dd><dt>Coverage decision</dt><dd>' + esc(a.why_insufficient) + ' ' + esc(a.inspection_limit) + '</dd><dt>Exact provenance</dt><dd>' + esc(a.provenance) + '</dd><dt>Evaluation or independent verification</dt><dd>' + esc(a.verification) + '</dd>' + (a.prerequisites ? '<dt>Prerequisites & learning depth</dt><dd>' + esc(a.prerequisites.join(', ') || 'Four basic operations; learn the target operation first') + ' · ' + esc(a.difficulty) + ' · ' + esc(a.learning_depth) + '</dd>' : '') + (a.transfer_criterion ? '<dt>Independent transfer</dt><dd>' + esc(a.transfer_criterion) + '</dd>' : '') + '</dl></details>';
}
function exercise(a) {
  const source = itemMap().get(a.id) || a, id = 'exercise-' + encodeURIComponent(a.id);
  let body = '';
  if (a.kind === 'bank') {
    body = '<p>' + esc(source.prompt) + '</p>' + (source.answer ? '<form class="answer-form" data-exercise="' + esc(a.id) + '"><label>Answer<input name="answer" required autocomplete="off" aria-label="' + esc('Answer for ' + source.title) + '" placeholder="Integer, decimal, or fraction"></label><button type="submit">Check answer</button><output aria-live="polite"></output></form>' : '<p class="fine">Work on paper or in your own editor. Use an independent reviewer for written reasoning.</p>') +
      '<details><summary>Hint</summary><p>' + esc(source.hint) + '</p></details><details><summary>Solution / evaluation criteria</summary><p>' + esc(source.solution) + '</p></details>';
  } else if (a.kind === 'sheets') {
    body = '<div class="worksheet">' + esc(source.body) + '</div><p>' + link(a.url, 'Open frozen worksheet source') + '</p><p class="fine">Independent review is required; arbitrary proofs and code are not automatically graded.</p>';
  } else {
    body = '<p>' + esc(a.gap || source.purpose || source.identity_evidence) + '</p><p>' + link(a.url, a.locator || (a.kind === 'assignments' ? source.locator : 'Open original problem')) + '</p><p class="fine">Link only. Read and solve at the original source; its rights and licensing apply.</p>';
  }
  return '<details class="exercise" id="' + esc(id) + '"><summary>' + esc(a.title) + '</summary><div class="exercise-body"><p class="provenance">' + esc(statusLabel(a.status)) + '</p>' + body + (a.kind !== 'bank' ? '<details><summary>Solution / evaluation rubric</summary><p>' + esc(a.verification) + '</p></details>' : '') + auditDetails(a) + '<p class="provenance">' + esc(a.provenance) + '</p></div></details>';
}
function statusLabel(status) {
  return {confirmed_complementary:'Confirmed complementary practice · bounded provider comparison', independent_assessment:'Independent assessment · optional after instruction', native_referral:'Native provider resource · conditional referral', deferred:'Deferred · preserved without added workload', unresolved:'Unresolved · not in the confirmed practice scope'}[status] || status;
}
function bankHTML() {
  const themes = [['F','Foundations & mathematical creativity'],['C','Algorithms, programming & formal reasoning'],['M','Research mathematics & uncertainty'],['L','Machine learning & evaluation'],['S','Scientific reasoning & reproducibility'],['R','Frontier AI & interpretability'],['B','AI for Science & domain validity']];
  const counts = M.auditStats(data.audit);
  const candidates = data.audit.entries.filter(x => !bankSearch || (x.title + ' ' + x.gap + ' ' + (Array.isArray(x.target) ? x.target.join(' ') : x.target) + ' ' + statusLabel(x.status)).toLowerCase().includes(bankSearch.toLowerCase()));
  const labels = {confirmed_complementary:'confirmed practice activities', independent_assessment:'optional independent assessments', native_referral:'conditional native referrals', deferred:'deferred activities', unresolved:'unresolved candidates'};
  function retained(rows, status, title, description) {
    const items = rows.filter(x => x.status === status);
    if (!items.length) return '';
    return '<details class="pending-disclosure" id="' + status + '-theme-' + rows[0].theme + '"><summary>' + esc(title) + ' · ' + items.length + '</summary><p class="fine">' + esc(description) + '</p>' + items.map(exercise).join('') + '</details>';
  }
  return '<section id="bank" aria-labelledby="bankTitle" hidden><div class="page-intro"><div class="bank-intro"><p class="eyebrow">Practice with a purpose</p><h1 id="bankTitle">Problem Bank</h1><p class="description">Find a missing skill, then choose a meaningful problem.<br>Use existing provider practice before adding more work.</p></div></div><div class="bank-summary">' + M.auditStatuses.map(status => '<span data-audit-status="' + status + '"><strong>' + counts[status] + '</strong> ' + labels[status] + '</span>').join('') + '</div><div class="notice"><p>Begin with the existing fraction lesson, then OpenStax Try It 4.1. The confirmed bridge supplies elementary practice before Python. Advance by demonstrated understanding; the whole pool is not an entrance requirement. Provider comparisons are bounded by inspected content; complete coverage and global exclusivity remain unresolved.</p></div><div class="toolbar">' + fieldSearch('bankSearch', bankSearch, 'Find a theme or problem…') + '</div><div class="bank-themes">' + themes.map(([key, title]) => {
    const rows = candidates.filter(x => x.theme === key), native = rows.filter(x => x.status === 'native_referral'), confirmed = rows.filter(x => x.status === 'confirmed_complementary');
    if (!rows.length) return '';
    const n = M.auditStats({entries:rows});
    const summary = M.auditStatuses.filter(status => n[status]).map(status => n[status] + ' ' + labels[status]).join(' · ');
    return '<details class="bank-theme" id="bank-theme-' + key + '"' + (bankSearch ? ' open' : '') + '><summary><span>' + title + '</span><span class="theme-count">' + esc(summary) + '</span></summary><div class="bank-theme-body">' +
      (confirmed.length ? '<h4>Confirmed complementary practice</h4>' + confirmed.map(exercise).join('') : '') +
      (native.length ? '<h4>Use the original provider resource</h4>' + native.map(a => {
        const x = itemMap().get(a.id) || a;
        return '<div class="source-referral" id="exercise-' + encodeURIComponent(a.id) + '"><div><strong>' + esc(a.title) + '</strong><p>' + esc(x.task || a.gap) + '</p><p>' + esc(x.purpose || a.why_insufficient) + '</p>' + auditDetails(a) + '</div>' + link(a.url, 'Open ' + (x.platform || 'provider')) + '</div>';
      }).join('') : '') +
      retained(rows, 'independent_assessment', 'Independent assessments', 'Optional unaided checks after instruction. They are separate from confirmed practice gaps and add no required branch. After viewing a solution, use a fresh task for unseen transfer.') +
      retained(rows, 'deferred', 'Deferred retained practice', 'Preserved historical material. Prefer the selected canonical or native resource; these items add no default workload and do not merge completion records.') +
      retained(rows, 'unresolved', 'Unresolved candidates', 'Evidence, source access or task specification is incomplete. These candidates are excluded from confirmed practice and cannot activate a checklist scope.') + '</div></details>';
  }).join('') + (!candidates.length ? '<p class="empty">No matching problems. Try a broader term.</p>' : '') + '</div><p class="resource-footnote">External statements stay at their lawful source. Solutions and rubrics are checked specifications, not evidence of learner mastery. ' + link(REPO + '/tree/main/' + data.audit.evidence_directory, 'Scientific evidence & coverage matrix') + '</p></section>';
}

function render() {
  const open = new Set([...app.querySelectorAll('details[open][id]')].map(e => e.id));
  const focused = document.activeElement?.id, focusUnit = document.activeElement?.dataset?.unit, cursor = document.activeElement?.selectionStart;
  app.innerHTML = resourcesHTML() + bankHTML();
  renderCount++;
  for (const id of open) if (el(id)) el(id).open = true;
  reveal(false);
  if (focused && el(focused)) {
    el(focused).focus({preventScroll: true});
    if (typeof cursor === 'number' && el(focused).setSelectionRange && el(focused).type !== 'search') el(focused).setSelectionRange(cursor, cursor);
  }
  else if (focusUnit) app.querySelector('[data-unit="' + focusUnit + '"]')?.focus({preventScroll:true});
}
function reveal(scroll = true) {
  const route = M.routeView(location.hash, data);
  for (const view of M.viewIds) el(view).hidden = route.view !== view;
  document.querySelectorAll('nav a').forEach(a => {
    if (a.getAttribute('href') === '#' + route.view) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  });
  document.title = 'Zulearn · ' + (route.view === 'resources' ? 'Learning Resources' : 'Problem Bank');
  // Old thematic set links land in the matching bank theme, never create a third page.
  const oldSet = location.hash.replace(/^#item-/, '');
  const b = branchMap().get(oldSet);
  let target = el(route.target);
  if (b?.category_id === 'zul-bank') {
    el('resources').hidden = true; el('bank').hidden = false;
    document.querySelectorAll('nav a').forEach(a => a.getAttribute('href') === '#bank' ? a.setAttribute('aria-current', 'page') : a.removeAttribute('aria-current'));
    document.title = 'Zulearn · Problem Bank';
    const key = b.id.startsWith('UNIT-LC-') ? 'C' : b.id.slice(-1);
    target = el('bank-theme-' + key);
  }
  if (route.legacy) {
    const n = el('legacyNotice'); n.hidden = false;
    n.innerHTML = route.legacy === 'challenges' ? 'Independent challenges are preserved in GitHub and deferred from this interface. ' + link(REPO + '/blob/main/assessment/CHALLENGE_PROTOCOL.md', 'Open challenge sources') : 'The teaching protocol is preserved in GitHub. ' + link(REPO + '/blob/main/learning/CHATGPT_TUTOR.md', 'Open teaching protocol');
  }
  if (target) {
    for (let n = target; n && n !== app; n = n.parentElement) if (n.tagName === 'DETAILS') n.open = true;
    if (scroll && location.hash) {
      target.scrollIntoView({block: 'start'}); target.setAttribute('tabindex', '-1'); target.focus({preventScroll: true});
    }
  }
}
function stage(id, change) {
  const b = branchMap().get(id);
  if (!b?.trackable) throw Error('Only selected first-level branches can be tracked.');
  const merged = {...(edits[id] || {}), ...change};
  if (merged.selection?.selected === false) delete merged.record;
  if (merged.record && M.equal(merged.record, progress.records[id] || {status:'not_started', evidence:[]})) delete merged.record;
  if (merged.selection && M.equal(merged.selection, M.selection(b, progress))) delete merged.selection;
  const next = {...edits};
  if (Object.keys(merged).length) next[id] = merged; else delete next[id];
  M.batchDraft(data, progress, next, progressDigest);
  edits = next;
  render();
}
async function digest(text) {
  if (!globalThis.crypto?.subtle) return '';
  return [...new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text)))].map(v => v.toString(16).padStart(2, '0')).join('');
}
async function readJSON(url) {
  const response = await fetch(url, {cache:'no-store'});
  if (!response.ok) throw Error('Could not load ' + url + ' (HTTP ' + response.status + ').');
  const text = await response.text(); return {value:JSON.parse(text), text};
}
async function verifyCommitted() {
  const output = el('saveFeedback'); output.textContent = 'Reading the latest committed GitHub progress…';
  try {
    const latest = await readJSON(MAIN_PROGRESS + '?verify=' + Date.now());
    if (!M.validProgress(data, latest.value)) throw Error('Latest GitHub progress does not match the validated registry.');
    if (!M.committedMatches(data, progress, edits, latest.value)) throw Error('The latest GitHub records and learning scopes do not exactly match this proposal. Review the staged branches before clearing them.');
    progress = latest.value; progressDigest = await digest(latest.text); edits = {}; render();
    el('savePanel').open = true;
    el('saveFeedback').textContent = 'Verified against the latest committed GitHub file. Displayed progress is up to date.';
  } catch (e) { output.textContent = 'Verification incomplete. ' + e.message + ' Your staged proposal is still available.'; }
}
function bind() {
  app.addEventListener('click', async event => {
    const button = event.target.closest('button'); if (!button) return;
    try {
      if (button.hasAttribute('data-review')) { el('savePanel').open = true; el('savePanel').scrollIntoView({block:'start'}); el('batchText').focus({preventScroll:true}); }
      else if (button.dataset.more) { expandedCategories.add(button.dataset.more); render(); }
      else if (button.dataset.select) { selectionForms.add(button.dataset.select); render(); el('branch-' + button.dataset.select).querySelector('textarea').focus(); }
      else if (button.dataset.cancelSelect) { selectionForms.delete(button.dataset.cancelSelect); render(); }
      else if (button.dataset.remove) { const b = branchMap().get(button.dataset.remove); stage(b.id, {selection:{...staged(b), selected:false}}); }
      else if (button.dataset.undo) { delete edits[button.dataset.undo]; render(); el('savePanel').open = true; }
      else if (button.hasAttribute('data-discard')) { edits = {}; selectionForms.clear(); render(); el('savePanel').open = true; }
      else if (button.hasAttribute('data-verify')) await verifyCommitted();
      else if (button.hasAttribute('data-copy-batch')) {
        try { await navigator.clipboard.writeText(el('batchText').value); el('saveFeedback').textContent = 'Copied. Paste into ChatGPT and explicitly ask to commit this progress batch.'; }
        catch { el('batchText').focus(); el('batchText').select(); el('saveFeedback').textContent = 'Clipboard unavailable. Copy the selected batch text, then explicitly ask ChatGPT to commit it.'; }
      }
    } catch (e) { el('savePanel').open = true; el('saveFeedback').textContent = e.message; }
  });
  app.addEventListener('change', event => {
    const node = event.target;
    if (node.dataset.unit) {
      const b = branchMap().get(node.dataset.unit);
      if (!b?.trackable || !staged(b).selected) { render(); return; }
      const current = progress.records[b.id];
      // Undoing a staged completion restores its exact previous record.
      if (!node.checked && !M.done(current?.status)) { const change = edits[b.id]; if (change) {delete change.record;if (!Object.keys(change).length) delete edits[b.id];} render(); }
      else stage(b.id, {record:{status:node.checked ? 'completed_reported' : 'not_started', evidence:[]}});
    } else if (node.id === 'resourceFilter') { selectedOnly = node.value === 'selected'; render(); }
  });
  app.addEventListener('input', event => {
    if (event.target.id === 'resourceSearch') { search = event.target.value; render(); }
    if (event.target.id === 'bankSearch') { bankSearch = event.target.value; render(); }
  });
  app.addEventListener('submit', event => {
    event.preventDefault(); const form = event.target;
    if (form.classList.contains('answer-form')) {
      const exercise = itemMap().get(form.dataset.exercise), result = M.checkAnswer(form.elements.answer.value, exercise.answer);
      form.querySelector('output').textContent = result === null ? 'Enter an integer, decimal, or fraction with a nonzero denominator.' : result ? 'Correct numerical value. Explain your reasoning; this does not record mastery.' : 'Try again. Check the units or open a hint.';
    } else if (form.dataset.selectForm) {
      const id = form.dataset.selectForm;
      try { selectionForms.delete(id); stage(id, {selection:{selected:true, scope_mode:form.elements.scope_mode.value, scope:form.elements.scope.value.trim()}}); }
      catch (e) { el('savePanel').open = true; el('saveFeedback').textContent = e.message; }
    }
  });
  window.addEventListener('hashchange', () => {
    const route = M.routeView(location.hash, data);
    if (!el(route.target) && route.target.startsWith('branch-')) { const b = branchMap().get(route.target.slice(7)); if (b) { expandedCategories.add(b.category_id); search=''; selectedOnly=false; render(); } }
    reveal();
  });
  window.addEventListener('beforeunload', event => { if (Object.keys(edits).length) { event.preventDefault(); event.returnValue=''; } });
}
function themeSetup() {
  const button = el('themeToggle');
  function refresh() { const dark = document.documentElement.dataset.theme === 'dark'; button.setAttribute('aria-pressed', String(dark)); button.setAttribute('aria-label', dark ? 'Use light mode' : 'Use dark mode'); button.title = dark ? 'Use light mode' : 'Use dark mode'; }
  refresh(); button.addEventListener('click', () => { const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'; document.documentElement.dataset.theme=theme; try {localStorage.setItem('zulearn-theme',theme);}catch{} refresh(); });
  document.querySelector('.skip').addEventListener('click', event => {event.preventDefault();app.focus();});
}
async function start() {
  themeSetup();
  try {
    const [s, extras, resources, audit, committed] = await Promise.all(['syllabus.json','activities.json','resources.json','complementary-audit.json','progress.json'].map(readJSON));
    data = {curr:s.value.files['data/curriculum.json'],deep:s.value.files['data/deep_path.json'],lessons:s.value.files['data/lessons.json'],checks:s.value.files['data/checkpoints.json'],subs:s.value.files['data/subcompetencies.json'],extras:extras.value,resources:resources.value,audit:audit.value};
    progress = committed.value; progressDigest=await digest(committed.text);
    if (!M.validateRegistry(data) || !M.validProgress(data,progress)) throw Error('The learning inventory or progress file failed validation.');
    const route = M.routeView(location.hash,data); if (route.target.startsWith('branch-')) {const b=branchMap().get(route.target.slice(7));if(b)expandedCategories.add(b.category_id);}
    render();bind();reveal();
    // Read-only diagnostics use the same actual data and functions as the interface.
    globalThis.ZulearnApp = {getData:()=>data,getProgress:()=>structuredClone(progress),getPending:()=>structuredClone(edits)};
  } catch (e) { app.innerHTML='<div class="loading"><h1>Resources could not load</h1><p>'+esc(e.message)+'</p><p>'+link(REPO+'/blob/main/learning/MASTER_PATH.md','Open the preserved resources in GitHub')+'</p><button type="button" onclick="location.reload()">Try again</button></div>'; }
}
start();
