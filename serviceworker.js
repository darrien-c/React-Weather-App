/* const CACHE_NAME = "version-1";
const urlsToCache = ['index.html', 'offline.html'];

//self means the SW itself
const self = this;

// Install SW

self.addEventListener('install', (event) => {

    //add urlsToCache into the cache
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then( (cache) => {
                console.log('opened Cache');

                return cache.addAll(urlsToCache);
            })
    )
});

// Listen for requests
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then( () => {
                return fetch(event.request)
                    .catch(() => caches.match('offline.htmAl'))
            })
    )
});

// Activate the SW
self.addEventListener('activate', (event) => {
    const cacheWhiteList = [];
    cacheWhiteList.push(CACHE_NAME);

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheNames) => {
                if(!cacheWhiteList.includes(cacheName)) {
                    return caches.delete(cacheName);
                }
            })
        )))
}); */