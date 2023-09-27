'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ee6d3267e057aa7fc8b76ee79638d6dd",
"assets/AssetManifest.json": "0e331e111d1840358d9dc7304b54553d",
"assets/assets/dashboard/addemp4.png": "c9e2893ef5f04389361ee18a25806f95",
"assets/assets/dashboard/addemployee_1.png": "78bf4f32a3e27cd23cb9942b8f7973ff",
"assets/assets/dashboard/addemployee_2.png": "7cca31ed7896147b2391caf4aff75c8f",
"assets/assets/dashboard/addemployee_3.png": "06387fb1e0800e7ae8a9f00c491bf900",
"assets/assets/dashboard/addevaluation.png": "871d747979a1d04664d7a6555ebbe1b7",
"assets/assets/dashboard/addevaluation2.png": "2448401487ab2a7725b6eb17028440b4",
"assets/assets/dashboard/department.png": "57e14f12df8b4840a81a2c33090ed3e0",
"assets/assets/dashboard/employee.png": "41d9a7bc618c947ca018044592a0b39c",
"assets/assets/dashboard/evaluation1.png": "30904b35b262b64240fd96d8c99a9827",
"assets/assets/dashboard/hr1.png": "f000363037c92e6d796f7b63eca1e02a",
"assets/assets/dashboard/jobType.png": "e790a10686b59dd36a6b8a5aee86abb7",
"assets/assets/dashboard/searchEmployee.png": "4371755a42f06cdee4f0c6b5f842a40e",
"assets/assets/dashboard/shiftType.png": "b4fabd5d7366c31f55fe98fe7653c4c3",
"assets/assets/dashboard/showemployee.png": "1cf1e90e7221aecfcf5794c2defcda68",
"assets/assets/images/aboutme.jpg": "bb6cf34065164f9e9368e72310b64bdb",
"assets/assets/images/analytics.png": "610a95aedc2c0c32d1316562dc8ec248",
"assets/assets/images/api.png": "fa3917f6b4c23098e954a5d81065c60e",
"assets/assets/images/backend.png": "b1fde05667b8b7d8f89bd01be0a04fd8",
"assets/assets/images/bloc.png": "b6b882a29d68c670caa05d9f0beafdc4",
"assets/assets/images/brush-stroke.png": "41854d93cc2b183ac9bf55e4b5097846",
"assets/assets/images/coding.png": "af1b456dad3dd6f43f14994963b57316",
"assets/assets/images/database.png": "9f54745fcf0298161aa678a172d03866",
"assets/assets/images/face.png": "3e569c0b44e18cf4ac36c2f52ca2c4fc",
"assets/assets/images/git.png": "7b08b14f30c2110a685bafcd33e8a480",
"assets/assets/images/git2.png": "62df7b3ff18594ae62ffd1c58fda68f8",
"assets/assets/images/in.png": "a65bf53ef6a1d1555120edfc1810f551",
"assets/assets/images/insta.png": "bd3f44e94e19e2cd2fed522e65f67657",
"assets/assets/images/mobile/1.png": "2ccd41adc5dddaeda6bca27f46eeadc0",
"assets/assets/images/mobile/10.png": "3823170081e63881eb1f297bb18b5935",
"assets/assets/images/mobile/11.png": "ad23342df8f0069324109b4fffc1bf89",
"assets/assets/images/mobile/12.png": "9cf676b1692173aefd0a69d57b6bb1fa",
"assets/assets/images/mobile/13.png": "dc778b54c6ef4237bd3aa3d77b91e298",
"assets/assets/images/mobile/2.png": "129a3c52441904af303b8fd1f2e6dceb",
"assets/assets/images/mobile/3.png": "ce519c837f631c6d6880761edf7e1117",
"assets/assets/images/mobile/4.png": "3d081f7b70fd4e66258acc7914de2605",
"assets/assets/images/mobile/5.png": "f5a8ef3fa27b9dab789d3683187d4868",
"assets/assets/images/mobile/6.png": "1e7a9f0bde7fe4e029dbce23470a438e",
"assets/assets/images/mobile/7.png": "620855d94cf47eb1508b26972011e344",
"assets/assets/images/mobile/8.png": "5137be3d3adf7d4c76d5dddf6558d905",
"assets/assets/images/mobile/9.png": "91fbd3499acdd072e332349d6a529975",
"assets/assets/images/mohamadAlkowatli_cv.pdf": "a95be9c30a4e54b0828c9480caa52ffa",
"assets/assets/images/portfolio.png": "4fbdaec2f7b0c4c6f7acf74fa2af1b02",
"assets/assets/images/pro.png": "a618dc4969d82a6d2ece39a7ee5d11f1",
"assets/assets/images/pro1.png": "0cd08ec9a063ef198a6c5f4f6207ed5d",
"assets/assets/images/setting.png": "6a6d40c8fb6991d35d58dd647fc235d0",
"assets/assets/images/share.png": "7d05af750cd03cdda7f247d7dc8b532e",
"assets/assets/images/work1.jpg": "58bbc11e54a3643754df21fd0d1e59a8",
"assets/assets/images/work2.jpg": "8ac2eef16dd7a05a53702e965891c948",
"assets/FontManifest.json": "e00171bfa9bab92b9c2a50352e16e8c9",
"assets/fonts/MaterialIcons-Regular.otf": "228a847c2f2a65937e91f9349e2b4a9e",
"assets/fonts/Montserrat-Italic.ttf": "761177c558bb3a0084aa85704315b990",
"assets/fonts/Montserrat-Regular.ttf": "3fe868a1a9930b59d94d2c1d79461e3c",
"assets/fonts/RubikMoonrocks-Regular.ttf": "d600125e8597b91eff5e33fa3ba79be8",
"assets/fonts/SignikaNegative-Bold.ttf": "2f9c7284cf29739530b46ebe5bd55c55",
"assets/fonts/SignikaNegative-Light.ttf": "39e2f173bebb27d5656dfab3cfe61c00",
"assets/fonts/SignikaNegative-Medium.ttf": "60ccb87c113c745a7bf3cc1bc4f09bed",
"assets/fonts/SignikaNegative-Regular.ttf": "5189e01abe7eb315d8a324ceb971b6ab",
"assets/fonts/SignikaNegative-SemiBold.ttf": "ae8e354eb18998e7559f3a188427a497",
"assets/NOTICES": "a4d48224c8ab69f2ac043aa7abc6b4ac",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/android-chrome-192x192.png": "3adf473adec53930fb7f718d7347450e",
"icons/android-chrome-512x512.png": "857e99a0486d331e41dafa013eadc87e",
"icons/apple-touch-icon.png": "2418735898f1610ec14659032aa17afc",
"index.html": "617f63f9b90e91eab78f20bc78128f64",
"/": "617f63f9b90e91eab78f20bc78128f64",
"logo.png": "3adf473adec53930fb7f718d7347450e",
"main.dart.js": "b8bd7faaa732c9d2de1f8892a3b76232",
"manifest.json": "9489fd5631ba1e20b033acee24aa6a18",
"version.json": "fb8d4678888024cd5f83d8522bb3a722"};
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
