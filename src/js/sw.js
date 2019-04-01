const CACHE_CURRENT_VERSION = "my9m-v2";

self.addEventListener("install", e => {
	e.waitUntil(caches.open(CACHE_CURRENT_VERSION).then(cache => {
		return cache.addAll([
			"/",
			"/?utm_source=homescreen",
			"/index.html",
			"/index.html?utm_source=homescreen",
			"/img/icon-320.png",
			"/img/icon-192.png",
			"/css/default.css",
			"/js/app.js",
			"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
			"https://fonts.googleapis.com/css?family=Berkshire+Swash"
		]);
	}));
});

self.addEventListener("fetch", e => {
	e.respondWith(caches.match(e.request).then(response => {
		return response || fetch(e.request).then(response => {
			return caches.open(CACHE_CURRENT_VERSION).then(cache => {
				cache.put(e.request, response.clone());
				return response;
			});
		});
	}));
});

self.addEventListener("activate", e => {
	e.waitUntil(caches.keys().then(cacheNames => {
		return Promise.all(cacheNames.map(cacheName => {
			if( cacheName === CACHE_CURRENT_VERSION ) return;
			caches.delete(cacheName);
		}));
	}));
});
