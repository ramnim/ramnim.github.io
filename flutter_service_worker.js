'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "920ffce3ef8a189635855229fb226857",
"assets/AssetManifest.json": "7a4555acf4fd1e75b9af4dc35e2c0248",
"assets/assets/images/c500_1.jpeg": "d4ddac2b13c3de96783de0a0555c9afa",
"assets/assets/images/c500_2.jpeg": "a9c1e1365627ce1f59fd76dcba5b31d9",
"assets/assets/images/c500_3.jpeg": "62e357d7146bf420061dbdc2598ae461",
"assets/assets/images/c500_4.jpeg": "e74e0658102f0e8517577e7d2202b85e",
"assets/assets/images/c500_5.jpeg": "aed3d406523229e0c8ea152d9e1b53f4",
"assets/assets/images/p1.jpeg": "674616cc5394f7ae986ed375e0c11374",
"assets/assets/images/p10.jpeg": "c144ed039c80641a08fb87713d1719be",
"assets/assets/images/p11.jpeg": "9c3210c0bcf8f2c84c22234af99bdf9b",
"assets/assets/images/p15.jpeg": "134838a1623f6e625d973c270230bfad",
"assets/assets/images/p16.jpeg": "f2d8d63e2dcd7159b8e6bbda1d37babd",
"assets/assets/images/p17.jpeg": "6201b91ea5dc0ba736b914ce81be323f",
"assets/assets/images/p18.jpeg": "5d173b12ba051e9976c89afc990318a5",
"assets/assets/images/p19.jpeg": "b3b92e0145ce9303ae6787c408fd8b7b",
"assets/assets/images/p2.jpeg": "f22111b0d04e1671a3d15e77affda4b9",
"assets/assets/images/p21.jpeg": "c823ce769d976e27988d204717886fe1",
"assets/assets/images/p22.jpeg": "94c90b44a0abb531b691fcf06b683057",
"assets/assets/images/p24.jpeg": "b22e79b102ca1bb101b494e8dd2b5b0f",
"assets/assets/images/p25.jpeg": "4713274dc6abdfda3400638fea371986",
"assets/assets/images/p27.jpeg": "103db10eab853351c31059b992f89e46",
"assets/assets/images/p28.jpeg": "27e7ee99da1695204aab6f181955da73",
"assets/assets/images/p29.jpeg": "136414b12f18fe56a4029a4c25c1ca69",
"assets/assets/images/p3.jpeg": "8e5ca7969f32ceb8b62571f0a3dd5258",
"assets/assets/images/p30.jpeg": "8055039c5a75f39c8d0ed3ebe9fbb852",
"assets/assets/images/p31.jpeg": "66a8a9dccc23c5cf2a41903b8e2c0c7f",
"assets/assets/images/p32.jpeg": "2e8972209e60709d6c9842ce76e8afc0",
"assets/assets/images/p33.jpeg": "74e671a069c38bdd4041ef2319307c6c",
"assets/assets/images/p34.jpeg": "4bdf7f4b7af5db7649f6d7094e7c2e55",
"assets/assets/images/p35.jpeg": "303c0220b8763c2af9aa7819ec4097e2",
"assets/assets/images/p36.jpeg": "a97f6e0d7debdeaad1f131177a1287c4",
"assets/assets/images/p37.jpeg": "e98e0019309b86d659fe86afe7df99fc",
"assets/assets/images/p38.jpeg": "088002dfb728389c43def12a5318d911",
"assets/assets/images/p39.jpeg": "92ff650f354451380d38af41373d6b0e",
"assets/assets/images/p4.jpeg": "72e551624c30655bdefb04d4b50aca8f",
"assets/assets/images/p40.jpeg": "c36968e2cd4393a7910a277c849f613f",
"assets/assets/images/p41.jpeg": "e1c1c97562caa7511fb3ffb292a53390",
"assets/assets/images/p42.jpeg": "aaae6873568eba84eb26d3eb81b17fcb",
"assets/assets/images/p44.jpeg": "35d39ef1330b65314eb696df4096a905",
"assets/assets/images/p45.jpeg": "e3834ea9d6b547ec4fd0bc5952853feb",
"assets/assets/images/p46.jpeg": "a0815a3f4493482697befcad9cd42124",
"assets/assets/images/p47.jpeg": "608616c69093ff1616c466d7298d16e0",
"assets/assets/images/p48.jpeg": "e0093853ac939b363582943b04ad4439",
"assets/assets/images/p49.jpeg": "f952f1ab78d1fcb6365e833c0f425eb8",
"assets/assets/images/p5.jpeg": "053f333b939fd6cbf29b5fe120570e40",
"assets/assets/images/p50.jpeg": "ad3ad7fd768b20399dfdae6d94ee9b46",
"assets/assets/images/p51.jpeg": "3ef23a22feaff04d5ba4a023b5b09540",
"assets/assets/images/p53.jpeg": "ac6c7275da4ea18f00ad1aa856c5f87a",
"assets/assets/images/p54.jpeg": "e385eac80b9d82e675ffe92252f37c7a",
"assets/assets/images/p6.jpeg": "baa82e016303b1335fc3fa6fc5194dc8",
"assets/assets/images/p7.jpeg": "25b007205506ca825c973c875f5983a3",
"assets/assets/images/p8.jpeg": "319a68682522fc8e74d129229f37cc19",
"assets/assets/images/p9.jpeg": "a3b2a4e7a46bbd97cdecfd6e1ef13f9a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1e409c3e7ff94e71f3f42e5e090825ec",
"assets/NOTICES": "0ab972967a04dd8ba84b95eaf2490e06",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/server/patients.json": "c7de26559ed6a904f63e572df5a60a26",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c42b139921ae59b6176ab39ee2475fcb",
"/": "c42b139921ae59b6176ab39ee2475fcb",
"main.dart.js": "4f5ce3f6e73546b0b2d5438fc3f0b72e",
"manifest.json": "8295f9c901dff01ea12cf230684bb818",
"simple-cors-http-server.py": "92d69a8dc323101f7349cb0f1510dd14",
"version.json": "6d3b3132c0d13666eb964075e68f3e2e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
