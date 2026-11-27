#!/usr/bin/env node
// SPDX-License-Identifier: AGPL-3.0-only
'use strict';
const fs=require('node:fs');const path=require('node:path');const os=require('node:os');
function install(target){
  const root=path.resolve(__dirname,'..');target=path.resolve(target);
  if(path.basename(target)!=='zulearn-local')throw Error('Target folder must be named zulearn-local. Use the plugins directory shown by LearnHarness Settings.');
  fs.mkdirSync(target,{recursive:true});const dist=path.join(target,'dist');
  if(fs.existsSync(dist)&&fs.lstatSync(dist).isSymbolicLink())throw Error('Refuse symlinked dist');
  if(fs.existsSync(path.join(dist,'data')))throw Error('Refuse a misplaced dist/data directory; private data must stay beside dist.');
  // Only generated code is replaced. Never delete the sibling private data/ directory.
  fs.rmSync(dist,{recursive:true,force:true});fs.mkdirSync(path.join(dist,'assets','root','local-app','content'),{recursive:true});
  const source=path.join(root,'integrations','learnharness');
  for(const f of ['manifest.json','main.js','backend.cjs'])fs.copyFileSync(path.join(source,f),path.join(dist,f));
  fs.copyFileSync(path.join(root,'local-app','styles.css'),path.join(dist,'styles.css'));
  for(const f of ['app.js','engine.cjs'])fs.copyFileSync(path.join(root,'local-app',f),path.join(dist,'assets',f));
  fs.cpSync(path.join(root,'data'),path.join(dist,'assets','root','data'),{recursive:true});
  fs.copyFileSync(path.join(root,'local-app','content','lessons.json'),path.join(dist,'assets','root','local-app','content','lessons.json'));
  fs.copyFileSync(path.join(root,'local-app','LICENSE'),path.join(dist,'LICENSE'));
  fs.copyFileSync(path.join(root,'local-app','NOTICE.md'),path.join(dist,'NOTICE.md'));
  console.log('Installed Zulearn code into '+dist);console.log('Open LearnHarness → Settings → Community plugins → Refresh → enable Zulearn Local; restart after code updates.');
  return dist;
}
if(require.main===module){if(!process.argv[2]){console.error('Usage: node scripts/install-learnharness-plugin.cjs "<plugins-directory>/zulearn-local"');process.exit(1);}install(process.argv[2]);}
module.exports={install};
