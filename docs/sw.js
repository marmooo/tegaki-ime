const CACHE_NAME="2024-06-15 10:56",urlsToCache=["/tegaki-ime/","/tegaki-ime/index.js","/tegaki-ime/worker.js","/tegaki-ime/model/model.json","/tegaki-ime/model/group1-shard1of1.bin","/tegaki-ime/favicon/favicon.svg","https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@4.20.0/dist/tf.min.js"];self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE_NAME).then(e=>e.addAll(urlsToCache)))}),self.addEventListener("fetch",e=>{e.respondWith(caches.match(e.request).then(t=>t||fetch(e.request)))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(e=>Promise.all(e.filter(e=>e!==CACHE_NAME).map(e=>caches.delete(e)))))})