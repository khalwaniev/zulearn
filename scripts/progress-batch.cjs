#!/usr/bin/env node
'use strict';
// Validate and merge a reviewed proposal. GitHub CAS and read-back remain required.
const fs = require('node:fs');
const path = require('node:path');
const M = require('../docs/model.js');
const root = path.resolve(__dirname, '..');
const json = file => JSON.parse(fs.readFileSync(file, 'utf8'));
function loadData() {
  const s = json(path.join(root,'docs/syllabus.json'));
  return {curr:s.files['data/curriculum.json'], deep:s.files['data/deep_path.json'], lessons:s.files['data/lessons.json'], checks:s.files['data/checkpoints.json'], subs:s.files['data/subcompetencies.json'], extras:json(path.join(root,'docs/activities.json')), resources:json(path.join(root,'docs/resources.json')), audit:json(path.join(root,'docs/complementary-audit.json'))};
}
if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length !== 4 || args[0] !== '--authorized') {
    console.error('Usage, only after explicit learner authorization: node scripts/progress-batch.cjs --authorized LATEST_PROGRESS.json BATCH.json OUTPUT.json');
    process.exit(2);
  }
  try {
    const [, current, batch, output] = args;
    if ([current, batch].some(file => path.resolve(file) === path.resolve(output))) throw Error('Write a separate reviewable output; do not overwrite the input or batch.');
    const d = loadData();
    if (!M.validateRegistry(d)) throw Error('Production registry failed validation.');
    const merged = M.applyBatch(d, json(current), json(batch), {authorized:true});
    fs.writeFileSync(output, JSON.stringify(merged,null,2)+'\n', {flag:'wx'});
    console.log('Validated merged proposal written. Commit using the latest GitHub blob/branch SHA, then read back and verify the committed content.');
  } catch (e) { console.error(e.message); process.exit(1); }
}
module.exports = {loadData};
