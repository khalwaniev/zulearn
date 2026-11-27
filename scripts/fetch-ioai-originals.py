#!/usr/bin/env python3
"""Fetch original IOAI notebook bytes into a private setup directory; never execute them."""
import argparse, hashlib, json, pathlib, urllib.request
p=argparse.ArgumentParser(description=__doc__);p.add_argument('destination',type=pathlib.Path);args=p.parse_args()
root=pathlib.Path(__file__).resolve().parents[1];dest=args.destination.expanduser().resolve()
if dest.is_relative_to(root):p.error('Use a private destination outside this public repository.')
tasks=json.loads((root/'data/ioai_tasks.json').read_text())['tasks'];dest.mkdir(parents=True,exist_ok=True)
receipts=[]
for task in tasks:
    target=dest/task['path'];target.parent.mkdir(parents=True,exist_ok=True)
    url=f"https://raw.githubusercontent.com/IOAI-official/IOAI-2025/{task['source_commit']}/{task['path']}"
    request=urllib.request.Request(url,headers={'User-Agent':'Zulearn-original-archive-fetch/1'})
    with urllib.request.urlopen(request,timeout=30) as r: body=r.read(20*1024*1024+1)
    if len(body)>20*1024*1024:raise ValueError('Unexpectedly large notebook')
    actual=hashlib.sha1(b'blob '+str(len(body)).encode()+b'\0'+body).hexdigest()
    if actual!=task['git_blob_sha1']:raise ValueError(f"Original blob hash mismatch: {task['id']}")
    if target.exists() and target.read_bytes()!=body:raise ValueError(f'Refuse replacing different local file: {target}')
    target.write_bytes(body)
    receipts.append({'id':task['id'],'path':task['path'],'source_url':url,'git_blob_sha1':actual,'sha256':hashlib.sha256(body).hexdigest(),'bytes':len(body),'modified':False})
    print('Verified original',task['id'],len(body),'bytes')
(dest/'ORIGINAL_TASK_RECEIPT.json').write_text(json.dumps(receipts,indent=2)+'\n')
(dest/'ATTRIBUTION.md').write_text('# Original IOAI 2025 tasks\n\nSource: https://github.com/IOAI-official/IOAI-2025\nRevision: '+tasks[0]['source_commit']+'\n\nAuthors and attribution: original upstream README and notebook author lists.\nLicence: CC-BY-4.0, https://creativecommons.org/licenses/by/4.0/ .\nThese notebooks are unmodified; no original-task body has been adapted.\nOriginal repository notices and separate dataset/model terms still apply.\nThe download does not include or certify hidden tests, datasets, graders, runtime dependencies or external evaluators.\nDo not open reserved tasks before a held-out attempt.\n')
print('Original bytes saved. Nothing executed. Check original notices/assets before any simulation.')
