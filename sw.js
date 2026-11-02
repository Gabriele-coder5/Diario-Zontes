/* Cache dell'app. I dati personali rimangono nel browser, non in questo file. */
const PREFIX = 'zontes-app:' + self.registration.scope;
const CACHE = PREFIX + ':eb66611e9d62';
const ASSETS = ['index.html','manifest.webmanifest','assets/icon-180.png','assets/icon-192.png','assets/icon-512.png'];
const atRoot = path => new URL(path,self.registration.scope).href;
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS.map(path=>new Request(atRoot(path),{cache:'reload'})))).then(()=>self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith(PREFIX+':')&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const req=event.request, url=new URL(req.url), root=new URL(self.registration.scope);
  if(req.method!=='GET'||url.origin!==root.origin||!url.pathname.startsWith(root.pathname))return;
  if(req.mode==='navigate'){
    event.respondWith((async()=>{
      const abort=new AbortController(), timer=setTimeout(()=>abort.abort(),3500);
      try{const response=await fetch(req,{signal:abort.signal});if(response.ok)return response;throw Error('offline');}
      catch{const cached=await caches.match(atRoot('index.html'),{cacheName:CACHE});return cached||new Response('Apri il diario una volta con una connessione attiva.',{status:503,headers:{'Content-Type':'text/plain;charset=utf-8'}});}
      finally{clearTimeout(timer);}
    })());
  }else if(ASSETS.some(path=>atRoot(path)===url.href)){
    event.respondWith(caches.match(req,{cacheName:CACHE}).then(cached=>cached||fetch(req)));
  }
});
