var CACHE_NAME='2022-03-21 09:11';var urlsToCache=["/tegaki-ime/","/tegaki-ime/worker.js","/tegaki-ime/index.js","/tegaki-ime/favicon/original.svg","/tegaki-ime/model/model.json","/tegaki-ime/model/group1-shard1of1.bin","https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js","https://cdn.jsdelivr.net/npm/signature_pad@4.0.3/dist/signature_pad.umd.min.js","https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css","https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@3.9.0/dist/tf.min.js",];self.addEventListener("install",function(event){event.waitUntil(caches.open(CACHE_NAME).then(function(cache){return cache.addAll(urlsToCache);}),);});self.addEventListener("fetch",function(event){event.respondWith(caches.match(event.request).then(function(response){if(response){return response;}
return fetch(event.request);}),);});self.addEventListener("activate",function(event){var cacheWhitelist=[CACHE_NAME];event.waitUntil(caches.keys().then(function(cacheNames){return Promise.all(cacheNames.map(function(cacheName){if(cacheWhitelist.indexOf(cacheName)===-1){return caches.delete(cacheName);}}),);}),);});