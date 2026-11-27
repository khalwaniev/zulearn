// SPDX-License-Identifier: AGPL-3.0-only
import {mountApp} from './assets/app.js';
export function activate(ctx){
  ctx.registerView({id:'learning',name:'Zulearn',mount(container,signal){
    return mountApp(container,{signal,call:(name,input)=>ctx.call('zulearn',{name,input})});
  }});
  ctx.registerAction({id:'open-zulearn',name:'Continue Zulearn',run:()=>ctx.app.openView('learning')});
  ctx.placeAction({id:'zulearn-navigation',actionId:'open-zulearn',location:'sidebar'});
}
