// SPDX-License-Identifier: AGPL-3.0-only
'use strict';
const path=require('node:path');
exports.activate=ctx=>{
  const {createEngine}=require('./assets/engine.cjs');
  const engine=createEngine({dataDirectory:ctx.dataDirectory,assetDirectory:path.join(ctx.directory,'assets','root'),
    modelAdapter:async({system,messages,maxTokens,signal})=>{
      const catalog=await ctx.inference.catalog();
      const model=catalog.defaults?.model;
      if(!model?.provider||!model?.id)throw Error('Configure the LearnHarness Strong model first. No paid fallback was selected.');
      const response=await ctx.inference.complete({model,purpose:'user',signal:signal?AbortSignal.any([ctx.signal,signal]):ctx.signal,options:{maxTokens,timeoutMs:30000,maxRetries:0},context:{systemPrompt:system,messages:[{role:'user',content:messages.map(m=>m.role+': '+m.text).join('\n\n'),timestamp:Date.now()}]}});
      if(response.stopReason==='error'||response.stopReason==='aborted')throw Error(response.errorMessage||'Model request failed or was cancelled.');
      if(response.stopReason==='length')throw Error('Model answer hit its output limit; no complete answer was accepted.');
      const output=(response.content||[]).filter(p=>p.type==='text').map(p=>p.text).join('\n');
      if(!output.trim())throw Error('Model returned no text');return output;
    }});
  ctx.handle('zulearn',async value=>{
    if(ctx.signal.aborted)throw Error('Zulearn plugin is disabled');
    if(!value||typeof value.name!=='string')throw Error('Operation name required');
    return engine.call(value.name,value.input||{});
  });
  ctx.cleanup(()=>engine.close());
};
