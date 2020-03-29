'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/main.dart.js": "d67b6ea4e90a6b13a49e0fddd13a49d0",
"/assets/LICENSE": "954706ef951b9553ecb95d1a66a0f589",
"/assets/AssetManifest.json": "a805fdd25b7a2b55719eefc16bad7783",
"/assets/FontManifest.json": "4d0108c559d4dfa5a555031bdd556dbf",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/images/user_profile.png": "c4dc26b64218da9ec0abf5356d3cc966",
"/assets/assets/images/ahquedelicia_logo.jpg": "910e4cd577974a2d7a8895fd1bc62cb6",
"/assets/assets/images/recipe01.png": "efb22a365200868d52ffa63668a7a699",
"/assets/assets/images/recipe03.png": "2a5c4fe1bc6f2ce29571b8d03e405613",
"/assets/assets/images/recipe02.png": "3352b2f9fff9cb1cce7d2504615599d6",
"/assets/assets/images/beans.jpg": "b46b66c9e8bb66d05900f28bf328dd13",
"/assets/assets/images/rice.jpg": "4c76fe814ab023d0b369b07d2093fcf9",
"/assets/assets/images/massa.jpg": "6e5f5e6594a0d7f19dc84a6d65aadf68",
"/assets/assets/images/salad.jpg": "e687826557d2e8512f5c21951851bb29",
"/assets/assets/images/recipe_inlustration.jpg": "eaa56be5d5a6744c3a8e98581f2d978d",
"/assets/assets/fonts/Rubik-Regular.ttf": "db5c7abfb1b57df0ae8ff1c236cbd810"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
