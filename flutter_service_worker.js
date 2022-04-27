'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "63ec081ef7010d4ee8764e783b4aa74b",
"index.html": "d20460d12463dc9341069b8e520c6a7d",
"/": "d20460d12463dc9341069b8e520c6a7d",
"main.dart.js": "c172881dcc3144d50e203aa047d33a4d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "01ed60dfd94a35db076ea5138fcdd881",
"assets/AssetManifest.json": "7b47c46e200c305f739aa3ea9403beec",
"assets/NOTICES": "514d5388b77bc308224576a6be56e6a2",
"assets/FontManifest.json": "4520936bf87b4980bcad7b11dca82dc1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/svg/notes.svg": "9c891ae861e0311f11c76804a622fb0c",
"assets/assets/svg/mountainBg.svg": "66e16da3e2c4386d4656db06ec7c482a",
"assets/assets/svg/Logs0.svg": "56d4f2900448d1a7499cdc5ee724bdfa",
"assets/assets/svg/doc.svg": "d264db9fd454e5e1863b9d55bc7de28e",
"assets/assets/svg/inTransit1.svg": "0f577e9f78bbbe5b78677304601b56b9",
"assets/assets/svg/inTransit0.svg": "9a1938d566a5b8a159ab5380c3593a01",
"assets/assets/svg/docs1.svg": "f3f82c7db5d8a877c7918246057e7f43",
"assets/assets/svg/assigned0.svg": "19cc7b0abcad0fa5c06125ea7758d7b1",
"assets/assets/svg/assigned1.svg": "7b45bbe8aafb41f527e609d151aba3c0",
"assets/assets/svg/docs0.svg": "6d5f75c875dc21b236e781465edf35e4",
"assets/assets/svg/arrowCircleright1.svg": "7a20c2a5e0a3eeaf5149df0e463b7e3c",
"assets/assets/svg/loadDetails1.svg": "203695df012faf56c6d163a9b07c65ef",
"assets/assets/svg/loadDetails0.svg": "cad9816ba284d937b6b96dc8806d6e03",
"assets/assets/svg/completed1.png": "e0e2862f1680662d71468490f51a1a5e",
"assets/assets/svg/myProfile0.svg": "8ea79d1645ba961674a0b96260b03e99",
"assets/assets/svg/loads1.svg": "d4f3c98a1c4d04f2ced821bf3ed310d4",
"assets/assets/svg/bgScreen.svg": "02ea5516a1297922d4692e59ce99dccc",
"assets/assets/svg/truck1.svg": "5c0440d5f34230349da034a815cd5df8",
"assets/assets/svg/notification0.svg": "28795a0e9d99c47ad71e595502b5b302",
"assets/assets/svg/utilityIcon1.svg": "77505a1bd91ca6814ccfd517e36bb452",
"assets/assets/svg/truck_and_line.svg": "b94956642de99780974ff1bfb23ad603",
"assets/assets/svg/completed0.svg": "44cee3d8d1dc1b2379b10d404840ad5b",
"assets/assets/svg/upload.svg": "1ddf528f39e7a8f641f9b0adb6c2b051",
"assets/assets/svg/notes0.svg": "46e733d03027d9a1fd76c780959f66fb",
"assets/assets/svg/notes1.svg": "fca771014b0956e3cd305a6e9bcecefb",
"assets/assets/svg/lodxLogo.svg": "a8cd2859eed0272d9060cb76b185cc6a",
"assets/assets/svg/menu.svg": "4f238d005b58469c0744456fc512af3e",
"assets/assets/svg/completed1.svg": "97030ed7c090395ae38900f89785a534",
"assets/assets/svg/splash.svg": "e4d525f59a4f676b99d2dee07117e93f",
"assets/assets/images/photo.png": "dbadc9a4c0acaecf4758955021f4f301",
"assets/assets/images/test.png": "9a534ad6db24c13d99e6ccd4a91a0f4c",
"assets/assets/images/splash.png": "8cd4500833f9b03f106d762bb2571b4d",
"assets/assets/images/bgScreen.png": "a3bacb0a1ecb771f7e81a6c2fa45d837",
"assets/assets/fonts/segoe_ui/segoe_ui_bold.ttf": "65099f98c7cb19b3dac57b15a6a708cf",
"assets/assets/fonts/segoe_ui/segoe_ui_italic.ttf": "5eb716ee36ae3ea66de512bcb63af3d8",
"assets/assets/fonts/segoe_ui/segoe_ui.ttf": "0e7e9a9b5c4abaadef7bc8f4e4574084",
"assets/assets/fonts/segoe_ui/segoe_ui_bold_italic.ttf": "676a12075e14377f6f44a3e29b4d72af",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
