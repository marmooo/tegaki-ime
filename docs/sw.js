var CACHE_NAME="2022-08-05 01:00",urlsToCache=["/tegaki-ime/","/tegaki-ime/index.js","/tegaki-ime/worker.js","/tegaki-ime/model/model.json","/tegaki-ime/model/group1-shard1of1.bin","/tegaki-ime/favicon/favicon.svg","https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js","https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css","https://cdn.jsdelivr.net/npm/signature_pad@4.0.7/dist/signature_pad.umd.min.js","https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@3.19.0/dist/tf.min.js"];self.addEventListener("install",function(a){a.waitUntil(caches.open(CACHE_NAME).then(function(a){return a.addAll(urlsToCache)}))}),self.addEventListener("fetch",function(a){a.respondWith(caches.match(a.request).then(function(b){return b||fetch(a.request)}))}),self.addEventListener("activate",function(a){var b=[CACHE_NAME];a.waitUntil(caches.keys().then(function(a){return Promise.all(a.map(function(a){if(b.indexOf(a)===-1)return caches.delete(a)}))}))})