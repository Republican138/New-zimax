'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/chromium/5bc3cc51": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"flutter_bootstrap.js": "b17657ce9569ee1d6de038d78abe8cae",
"index.html": "5736d3c45d73bc452d3bc0a9d7955cb0",
"/": "5736d3c45d73bc452d3bc0a9d7955cb0",
"version.json": "e1bf7ef9865708a8c7faef4c2949ff4d",
"assets/assets/images/pfp2.jpg": "ebb52b0b8236bf7fa9663a4522769f00",
"assets/assets/images/pfp3.jpg": "8e0fb108feafa914de1192f7fda06dae",
"assets/assets/images/pfp4.jpg": "d8e45221c2b8d394029f340d91e4347b",
"assets/assets/images/pfp5.jpg": "697fb021a6bfab92502e96b47a2e0186",
"assets/assets/images/pfp6.jpg": "f22daf84159331a52b9c8cd3cf75e257",
"assets/assets/images/pfp7.jpg": "c43a4c5c90e7b9b3ec49d3189c820a59",
"assets/assets/images/pfp8.jpg": "b15992bc25b5ab63ee2fd97bab6dd829",
"assets/assets/images/pfp9.png": "f35b8992784b7b0afa947fa00aed77a3",
"assets/assets/images/pfp15.jpg": "312bec5acfccd14b37f506c3e2144878",
"assets/assets/new_image/2.jpg": "295ef950e3788e713f24dc4fd5735d02",
"assets/assets/new_image/3.jpg": "f1a6ad0bba01cb1be1fe57b249139ab2",
"assets/assets/new_image/9.jpg": "d1e4319faf8e6474783d7c3134db511f",
"assets/assets/new_image/15.jpg": "115155e5116dd8cd59ebfcbde75647d6",
"assets/assets/new_image/17.jpg": "7c59e97c2ee43daa5a7dbb15e104bf13",
"assets/assets/new_image/23.jpg": "f55fe5d68518606827672e3f5a7cdd8d",
"assets/assets/new_image/37.jpg": "c2a13c9e185e3548c79d0183a71aa51d",
"assets/assets/new_image/44.jpg": "ab5db90c36adbb38e32d585e3f715a29",
"assets/assets/new_image/45.jpg": "23f5abb5f0f693ef0f77e00c0799d512",
"assets/assets/new_image/47.jpg": "18c851c23755f820dc7fe97f6a6f7391",
"assets/assets/new_image/65446.jpg": "e2d3e855532280dcffbce05f30f0b425",
"assets/assets/new_image/blur.jpg": "6dea4d4b4e8f84be31bf5df701b4404c",
"assets/assets/new_image/flower.jpg": "58529b821aa5c5d3f630ae2be648ed58",
"assets/assets/new_image/image33.jpg": "e185fd5cb56d5249777da0a96a5797af",
"assets/assets/new_image/image34.jpg": "d0edeed9d9c55efcf9ccf6ba621f19f8",
"assets/assets/new_image/image35.jpg": "757bc7df82ba788c5e854573d1be52da",
"assets/assets/new_image/image36.jpg": "6dea4d4b4e8f84be31bf5df701b4404c",
"assets/assets/new_image/image37.jpg": "61b6195477ee43540d84f079fd7bcfaf",
"assets/assets/new_image/media1.jpg": "ccd7b987c539c0112d5421e77bf30f48",
"assets/assets/new_image/media2.jpg": "9b6a0cf72c46f56b77e2f69bce54338f",
"assets/assets/new_image/media3.jpg": "e385309f3e85f6c07b071b93208484ed",
"assets/assets/new_image/media4.jpg": "f0d562aba4526e17662f20fa22d93899",
"assets/assets/new_image/resource.jpg": "4f6800996e82d27ecb4733563540cc46",
"assets/assets/new_image/tti3.jpg": "c49aa2de8accaae0e0f8bd6f183f38a2",
"assets/assets/img1.png": "cf08a93beafaf120a2ec93be3f6a756e",
"assets/assets/img2.jpg": "551505b44f9988420c42be99e0193d7e",
"assets/assets/img4.jpeg": "c2854dcb3acc8a4ac6d8ea7139c16e31",
"assets/assets/ads.png": "4ec94b26fc404d3870edd2c9781d1ac4",
"assets/assets/events.png": "92b599fcb98ec5c57e5502a12241d795",
"assets/assets/chat.png": "2ccca4b25a0ea07a70b3caf603d654c1",
"assets/assets/link.png": "62260798a3011e5088bc78e6ffc3a8df",
"assets/assets/media.png": "ef4d4e179a289e85d6d88aed20b30ea4",
"assets/assets/images1.jpg": "b24bde3d320e2ebe95876aaeec5c46f9",
"assets/assets/images2.jpeg": "c82b9f1f59e7c83f87c525dbc2701700",
"assets/assets/images3.jpeg": "f8b5a54d90bdcef9d52cbad60789ab99",
"assets/assets/images4.jpeg": "ceb3de22a2727b3fbdd7131dce4f81c0",
"assets/assets/images5.jpeg": "1ae6e1b61a37d469f310864d17245b66",
"assets/assets/pfp1.jpeg": "0d9ffa7b5babf9562466a0f033499a69",
"assets/assets/pfp10.jpg": "2c9c329a3f9cddabc19030bae4ea1f60",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/fonts/MaterialIcons-Regular.otf": "82aa11e19890fe7fd72f52e0e0ee3e30",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "b81de916a8057e01e30658a49c7acaf1",
"assets/AssetManifest.bin": "8cf1918473eb20794896bbedff07f961",
"assets/AssetManifest.bin.json": "c6d073e35c48a826ec44113050eb7cff",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "63adce25aa0be4a7715975262b337014",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"main.dart.js": "7ffd224dd0866b5923baffac50ae4802",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "f5c095d708ddafc42a3267655499171e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
