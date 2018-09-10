self.addEventListener("install", e => {
	e.waitUntil(caches.open("v1").then(cache => {
		return cache.addAll([
			"/",
			"/?utm_source=homescreen",
			"/index.html",
			"/index.html?utm_source=homescreen",
			"/img/icon-320.png",
			"/img/icon-192.png",
			"/css/default.css?1536582556794",
			"/js/app.js?1536582556794",
			"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
			"https://fonts.googleapis.com/css?family=Berkshire+Swash"
		]);
	}));
});

self.addEventListener("fetch", e => {
	e.respondWith(caches.match(e.request).then(response => {
		return response || fetch(e.request).then(response => {
			return caches.open("v1").then(cache => {
				cache.put(e.request, response.clone());
				return response;
			});
		});
	}));
});
