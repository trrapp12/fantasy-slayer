const CACHE_NAME = 'fantasy-slayer-v1';
const JS_CACHE = 'js-cache'
const currentCaches = [CACHE_NAME, JS_CACHE]
const ASSETS = [
  '/',
  '/index.html',
  '/css/critical.css',
  '/css/index.css',
  '/css/spell.css',
  '/js/index.js',
  '/js/utils.js',
  '/js/character-data.js',
  '/js/intro-handler.js',
  '/js/render-health-chart.js',
  '/assets/assets/soulforge.webp',
  '/assets/assets/naqualk.webp',
  '/assets/assets/mage.webp',
  '/assets/assets/ignisfatuus.webp',
  '/assets/assets/conscript.webp',
  '/assets/assets/zed-fire.webp',
  '/assets/AdobeStock_199937353-ec86d56f.webm',
  '/assets/assets/audio/fantasmi-dell-opera-a-loop_AdobeStock_526744294.wav',
  '/assets/assets/audio/EPIC-TRAILER-ACTION-ADVENTURE-(TENSE-NERVE)_AdobeStock_637559773.wav',
  '/assets/assets/AdobeStock_460700032.webp',
  '/assets/assets/audio/Under-Attack_AdobeStock_353737497.wav'

  // Add other assets required by your game
];

function isDevelopmentEnvironment() {
    return location.hostname === 'localhost' || location.hostname === '127.0.0.1';
  }

// Pre-cache game assets
self.addEventListener('install', event => {
    if (!isDevelopmentEnvironment()) {
      // Production environment: Cache the assets.
      event.waitUntil(
        (async () => {
          const cache = await caches.open(CACHE_NAME);
          // Cache all the assets except the JS files
          await cache.addAll(ASSETS.filter(asset => !asset.endsWith('.js')));
  
          const jsCache = await caches.open(JS_CACHE);
          // Cache only the JS files
          await jsCache.addAll(ASSETS.filter(asset => asset.endsWith('.js')));
  
          // Instruct the service worker to take control of the page immediately after installation
          self.skipWaiting();
        })()
      );
    } else {
      // Development environment: Skip caching and take control immediately.
      self.skipWaiting();
    }
  });
  
// Clean up old caches
self.addEventListener('activate', event => {
    const currentCaches = [CACHE_NAME, JS_CACHE];
    event.waitUntil(
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (!currentCaches.includes(cacheName)) {
              return caches.delete(cacheName);
            }
          })
        );
      }).then(() => self.clients.claim())
    );
  });
  
// Inside your service worker 'fetch' event listener
self.addEventListener('fetch', event => {
    // check to see if in DEV
    if(!isDevelopmentEnvironment()) {
        // check if JS file 
        if(event.request.url.endsWith('.js')) {
            event.respondWith(
                caches.open('js-cache').then(cache => {
                  return cache.match(event.request).then(response => {
                    if (response) {
                      // If the JS file is in the cache, return it
                      return response;
                    } else {
                      // Otherwise fetch the JS file from the network, cache it, and return it
                      return fetch(event.request).then(networkResponse => {
                        cache.put(event.request, networkResponse.clone());
                        return networkResponse;
                      });
                    }
                  });
                })
              );
        } else {
            // For non-JS files, just use a simple cache-first strategy
            event.respondWith(
                caches.match(event.request).then(cachedResponse => {
                return cachedResponse || fetch(event.request);
                })
            );
        }
    } else {
        // In development, always fetch from the network
        event.respondWith(fetch(event.request));
    }
  });

