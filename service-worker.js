// Cache the website's resources
var CACHE_NAME = 'my-offline-website';
var urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/image.jpg'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

// Serve cached content when offline
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});



// const CACHE_NAME = 'my-offline-cache';

// self.addEventListener('install', function(event) {
//   event.waitUntil(
//     caches.open(CACHE_NAME)
//       .then(function(cache) {
//         console.log('Cache opened');
//         return cache.addAll([
//           '/',
//           '/index.html',
//           '/offline.html'
//         ]);
//       })
//   );
// });

// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     caches.match(event.request)
//       .then(function(response) {
//         if (response) {
//           return response;
//         } else {
//           return fetch(event.request)
//             .then(function(response) {
//               return response;
//             })
//             .catch(function() {
//               return caches.match('/offline.html');
//             });
//         }
//       })
//   );
// });
