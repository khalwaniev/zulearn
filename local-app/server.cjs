#!/usr/bin/env node
// SPDX-License-Identifier: AGPL-3.0-only
'use strict';
const http=require('node:http');const fs=require('node:fs');const path=require('node:path');const os=require('node:os');const crypto=require('node:crypto');
const {createEngine}=require('./engine.cjs');
function defaultDirectory(){return process.platform==='win32'?path.join(process.env.LOCALAPPDATA||os.homedir(),'Zulearn'):path.join(process.env.XDG_DATA_HOME||path.join(os.homedir(),'.local','share'),'zulearn');}
function providerFromEnvironment(env=process.env){
  if(!env.ZULEARN_AI_BASE_URL)return null;
  const url=new URL(env.ZULEARN_AI_BASE_URL);
  if(!['http:','https:'].includes(url.protocol)||url.username||url.password||url.search||url.hash)throw Error('AI base URL must be an explicit HTTP(S) endpoint without embedded credentials/query/fragment.');
  const local=['localhost','127.0.0.1','[::1]'].includes(url.hostname);
  if(!local&&url.protocol!=='https:')throw Error('Remote model endpoints must use HTTPS.');
  if(!env.ZULEARN_AI_MODEL)throw Error('Set ZULEARN_AI_MODEL explicitly. No model is selected silently.');
  return async ({system,messages,maxTokens,signal})=>{
    const response=await fetch(url.href.replace(/\/$/,'')+'/chat/completions',{method:'POST',redirect:'error',signal:signal?AbortSignal.any([signal,AbortSignal.timeout(30000)]):AbortSignal.timeout(30000),headers:{'Content-Type':'application/json',...(env.ZULEARN_AI_KEY?{'Authorization':'Bearer '+env.ZULEARN_AI_KEY}:{})},body:JSON.stringify({model:env.ZULEARN_AI_MODEL,messages:[{role:'system',content:system},...messages.map(m=>({role:m.role,content:m.text}))],max_tokens:maxTokens,stream:false})});
    if(!response.ok)throw Error('Model endpoint returned HTTP '+response.status+'; no answer was accepted.');
    const raw=await response.text();if(raw.length>100000)throw Error('Model response too large');
    const result=JSON.parse(raw);const choice=result.choices?.[0];if(!choice || choice.finish_reason==='length'||choice.finish_reason==='content_filter')throw Error('Model response incomplete or filtered.');
    if(typeof choice.message?.content!=='string')throw Error('Expected text-only model response');return choice.message.content;
  };
}
function createServer({dataDirectory=defaultDirectory(),assetDirectory=path.join(__dirname,'..'),modelAdapter=providerFromEnvironment(),port=Number(process.env.ZULEARN_PORT||8765)}={}){
  const engine=createEngine({dataDirectory,assetDirectory,modelAdapter});const token=crypto.randomBytes(24).toString('hex');
  const assets={'/app.js':['app.js','text/javascript; charset=utf-8'],'/styles.css':['styles.css','text/css; charset=utf-8']};
  let boundPort=port;
  const server=http.createServer(async(req,res)=>{
    const allowed=new Set([`127.0.0.1:${boundPort}`,`localhost:${boundPort}`]);
    const reply=(code,data,type='application/json; charset=utf-8')=>{res.writeHead(code,{'Content-Type':type,'Cache-Control':'no-store','X-Content-Type-Options':'nosniff','Referrer-Policy':'no-referrer','Content-Security-Policy':"default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'none'"});res.end(type.startsWith('application/json')?JSON.stringify(data):data);};
    try {
      if(!allowed.has(req.headers.host))return reply(403,{error:'Loopback host required'});
      const origin=req.headers.origin;if(origin && !allowed.has(new URL(origin).host))return reply(403,{error:'Same-origin requests only'});
      if(req.headers['sec-fetch-site']==='cross-site')return reply(403,{error:'Cross-site request refused'});
      const pathname=new URL(req.url,'http://127.0.0.1').pathname;
      if(req.method==='GET'&&pathname==='/'){
        const html=fs.readFileSync(path.join(__dirname,'index.html'),'utf8').replace('__TOKEN__',token);return reply(200,html,'text/html; charset=utf-8');
      }
      if(req.method==='GET'&&assets[pathname]){const [name,type]=assets[pathname];return reply(200,fs.readFileSync(path.join(__dirname,name)),type);}
      if(req.method==='POST'&&pathname.startsWith('/api/')){
        if(req.headers['x-zulearn-token']!==token)return reply(403,{error:'Local session token required'});
        if(!String(req.headers['content-type']||'').startsWith('application/json'))return reply(415,{error:'JSON required'});
        let bytes=0,chunks=[];for await(const chunk of req){bytes+=chunk.length;if(bytes>8*1024*1024)return reply(413,{error:'Request exceeds 8 MiB'});chunks.push(chunk);}
        const input=JSON.parse(Buffer.concat(chunks).toString('utf8')||'{}');const result=await engine.call(pathname.slice(5),input);return reply(200,result);
      }
      reply(404,{error:'Not found'});
    }catch(error){reply(error.status||400,{error:error.message});}
  });
  server.on('listening',()=>{boundPort=server.address().port;});
  return {server,engine,listen:()=>new Promise((resolve,reject)=>{server.once('error',reject);server.listen(port,'127.0.0.1',()=>resolve(server.address()));}),close:()=>new Promise(resolve=>server.close(()=>{engine.close();resolve();})),get token(){return token;}};
}
if(require.main===module){
  if(Number(process.versions.node.split('.')[0])<24){console.error('Use Node.js 24 or newer (built-in SQLite). No npm dependencies are needed.');process.exit(1);}
  const instance=createServer({dataDirectory:process.env.ZULEARN_DATA_DIR||defaultDirectory()});
  instance.listen().then(a=>{console.log(`Zulearn Local: http://127.0.0.1:${a.port}`);console.log('Private state: '+instance.engine.dbPath);console.log('Open the page and begin fractions. AI is optional; no model call is automatic.');}).catch(e=>{console.error(e.message);process.exit(1);});
  for(const sig of ['SIGINT','SIGTERM'])process.once(sig,()=>instance.close().then(()=>process.exit()));
}
module.exports={createServer,providerFromEnvironment,defaultDirectory};
