'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js": "b9c2b82ccb98415a04f56b59cb5b599c",
"manifest.json": "40ed75704025e9892eaab9bb79e78e9b",
"index.html": "721edd1e41ec239e913700043f6dad33",
"/": "721edd1e41ec239e913700043f6dad33",
"version.json": "01bd51656f1ecd1fc4599fbb334cc599",
"favicon.png": "22f377db9eef23929639b14e706f70d5",
"flutter_bootstrap.js": "c27f1919bf53b2e906e98ecaa109ab91",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/logo.png": "22f377db9eef23929639b14e706f70d5",
"sqlite3.wasm": "fa7637a49a0e434f2a98f9981856d118",
"assets/fonts/MaterialIcons-Regular.otf": "aeae3b84fada37008758670175e4e990",
"assets/AssetManifest.bin.json": "750cf37da2f914648cd6256d8b24ced3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "df20ef76358150b41d5fd4011787550a",
"assets/AssetManifest.json": "e9a95cb4bbe3c8d67afa023abd6eb50f",
"assets/FontManifest.json": "4626d70bbdf3f6ba4e2f91c9d283a7b6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluent_ui/fonts/FluentIcons.ttf": "f3c4f09a37ace3246250ff7142da5cdd",
"assets/packages/fluent_ui/assets/AcrylicNoise.png": "81f27726c45346351eca125bd062e9a7",
"assets/assets/fonts/Vazirmatn-Light.ttf": "e1718753611a1da034b7e80ecc1523be",
"assets/assets/fonts/Vazir-Medium-UI.ttf": "d985a36591d6dd09345638d622372542",
"assets/assets/fonts/B_NAZANIN.TTF": "fe70eb00cc03165219440c4b13b6bc66",
"assets/assets/fonts/Vazirmatn-Regular.ttf": "e8e9648f5b8fc824da409750ff331221",
"assets/assets/fonts/Vazir-Light-UI.ttf": "2528a021de216c5f935c2892d67796d0",
"assets/assets/fonts/Vazir-Bold-UI.ttf": "9325e91e2bc3814b01def668846c9bf5",
"assets/assets/fonts/MaterialIcons-Regular.ttf": "b49bc3804a4d9f89ee18d962e6e6148f",
"assets/assets/fonts/Yekan.ttf": "52ce4de2efeeb8b18dcbd379711224f3",
"assets/assets/fonts/Lalezar-Regular.ttf": "b09134ac350e6345b0b6cd94f78f6ffc",
"assets/assets/fonts/Vazirmatn-Bold.ttf": "4ac4426bc38f337534dfc45b3dbd9283",
"assets/assets/fonts/Vazir-Print.ttf": "1ac3ecd3b480fa8693061aedb2783e8a",
"assets/assets/fonts/Iranian_Sans.ttf": "e59513c82578df5dafb6b8da951be9b6",
"assets/assets/pishran_logo.jpg": "68400bf692d2cbb919a3f639e119aad1",
"assets/assets/bubble_notifications.dll": "9e50d6f1b2827cf2d52035722f5f3e8a",
"assets/assets/invoice.svg": "ed6bd474d30a8d750aa924a78918b1ac",
"assets/assets/animations/file_transfer_animation.json": "c495744a1bf0c163e3b843e2f2ccd545",
"assets/assets/animations/error_animation.json": "2c4bd762831a20cb7b3e318265fe4988",
"assets/assets/animations/box_animation.json": "37d2f367cd2f52cd18cac152f3314581",
"assets/assets/animations/done_animation.json": "c2539d268f7cda1c60cee24f82f4bd0e",
"assets/assets/animations/writing.json": "40d7873db4f11cece957ee35e0af54b2",
"assets/assets/pishran_logo.png": "22f377db9eef23929639b14e706f70d5",
"assets/assets/footer.svg": "168610a1ac9fed3262b11ac1f7c058e0",
"assets/assets/resume.svg": "46677fc92c26b05ef05f6f57ee6cbf2f",
"assets/assets/alert_notification.wav": "e414eb9da516acf8009acc1fe6cb7094",
"assets/assets/mini_audio_dll.dll": "36a4257b3fda219943547db0ccf63eb0",
"assets/assets/header.svg": "0000be202dcf529ff9d60c2e9ea0b41e",
"assets/alert_notification.wav": "e414eb9da516acf8009acc1fe6cb7094",
"assets/NOTICES": "5ce34cca91d0b2ee564bc8d22eaf9bfa",
"drift_worker.js": "553fc7ecf77c015fbd55dbe8c3d08b67",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"local_notification.js": "197964fc7e9fa43328ac6cff42929184"};
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
