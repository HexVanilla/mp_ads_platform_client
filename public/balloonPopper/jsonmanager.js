var gdjs;(function(i){const a=new i.Logger("JSON Manager");class c{constructor(e,l){this._loadedJsons={};this._callbacks={};this._resources=e,this._resourcesLoader=l}setResources(e){this._resources=e}preloadJsons(e,l){const t=this._resources.filter(function(s){return(s.kind==="json"||s.kind==="tilemap"||s.kind==="tileset")&&!s.disablePreload});if(t.length===0)return l(t.length);let o=0;const n=function(s){s&&a.error("Error while preloading a json resource:"+s),o++,o===t.length?l(t.length):e(o,t.length)};for(let s=0;s<t.length;++s)this.loadJson(t[s].name,n)}loadJson(e,l){const r=this._resources.find(function(n){return(n.kind==="json"||n.kind==="tilemap"||n.kind==="tileset")&&n.name===e});if(!r){l(new Error(`Can't find resource with name: "`+e+'" (or is not a json resource).'),null);return}if(this._loadedJsons[e]){l(null,this._loadedJsons[e]);return}{const n=this._callbacks[e];if(n){n.push(l);return}else this._callbacks[e]=[l]}const t=this,o=new XMLHttpRequest;o.responseType="json",o.withCredentials=this._resourcesLoader.checkIfCredentialsRequired(r.file),o.open("GET",this._resourcesLoader.getFullUrl(r.file)),o.onload=function(){const n=t._callbacks[e];if(!!n){if(o.status!==200){for(const s of n)s(new Error("HTTP error: "+o.status+"("+o.statusText+")"),null);delete t._callbacks[e];return}t._loadedJsons[e]=o.response;for(const s of n)s(null,o.response);delete t._callbacks[e]}},o.onerror=function(){const n=t._callbacks[e];if(!!n){for(const s of n)s(new Error("Network error"),null);delete t._callbacks[e]}},o.onabort=function(){const n=t._callbacks[e];if(!!n){for(const s of n)s(new Error("Request aborted"),null);delete t._callbacks[e]}},o.send()}isJsonLoaded(e){return!!this._loadedJsons[e]}getLoadedJson(e){return this._loadedJsons[e]||null}}i.JsonManager=c})(gdjs||(gdjs={}));
//# sourceMappingURL=jsonmanager.js.map