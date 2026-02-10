'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"icons/Icon-512.png": "3b198f642809cef704c6adc84cfedac8",
"icons/Icon-maskable-512.png": "3b198f642809cef704c6adc84cfedac8",
"icons/Icon-192.png": "fd7b5d20fbcf8457c556b62776a6b9e9",
"icons/Icon-maskable-192.png": "fd7b5d20fbcf8457c556b62776a6b9e9",
"manifest.json": "df49973e98a88a7d4055be5869efdab0",
"index.html": "30243eb2a6008788685253eec5bc5390",
"/": "30243eb2a6008788685253eec5bc5390",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "77deccaf7fbe03771e2de2c58e638013",
"assets/assets/svg/image_file.svg": "58910c5275213c2693074ed2a66b8e1b",
"assets/assets/svg/error_404.svg": "a3fa03124a327cf6067994d783df5b43",
"assets/assets/svg/error_hexa.svg": "5a4968d15288e79b6c2b148d79cde1dd",
"assets/assets/svg/help_laptop.svg": "7860b8660c18870d259e027edf8a555b",
"assets/assets/svg/user_person_profile.svg": "739ebe1152a781dc845e1c66c4b47db6",
"assets/assets/svg/camera_only.svg": "8612572c09cb5568650c10a32fc9f007",
"assets/assets/svg/image_gallery.svg": "90861ccaa2ede3058f101d079318f236",
"assets/assets/svg/support_person.svg": "72a3a2afb8094dd75cd8566816745a06",
"assets/assets/logo/app_logo.png": "112b2ce6b21079ca660c5691d00e351b",
"assets/assets/animations/lottie/loading_1.json": "93cc8a057a539413f28b64337958aff1",
"assets/assets/animations/lottie/searching_file_lottie.json": "c567589847d302e0c1dd1c3b8e06d5b6",
"assets/assets/animations/lottie/search_employee.json": "de0436eade9512e9f045ebb54533a752",
"assets/assets/animations/lottie/reward_coin_lottie.json": "5836e6cc60b0713032237ccb33753924",
"assets/assets/animations/lottie/data_analysis.json": "6b050b20b50032a810878b5fcd36295f",
"assets/assets/animations/lottie/error_pc_lottie.json": "736ddf15993614136ee648616040098b",
"assets/assets/animations/lottie/reward_money_lottie.json": "8c0fb346ce263e8db681282c9cd5d284",
"assets/assets/animations/lottie/growth_chart.json": "2d2cfddaab64272626c6d6543ca4bdfd",
"assets/assets/animations/lottie/money.json": "c4c490ad606d3d0ca6443fa2f795a7a3",
"assets/assets/animations/lottie/loading_blue.json": "8c1ac511b3e89e0dbbc9a2d1cff802e1",
"assets/assets/animations/lottie/intitial_welcoming_lottie.json": "e0ad52a30babb2fe1170df331b0950fe",
"assets/assets/animations/lottie/data_analysis_lottie.json": "05e00dc163667c298c7d0bc992e861f6",
"assets/assets/animations/lottie/forget_password.json": "23e56e676ea711d12110bfc2831bdf56",
"assets/assets/animations/lottie/glow_loading.json": "09d3e8ef9e76c74b01f1f53b22177db6",
"assets/assets/animations/lottie/coin_3d.json": "e2f2166112725fafff6f159909b8d759",
"assets/assets/animations/lottie/check_animation.json": "d4a8a3e5b1ff47faa2f2ce88d9d2cea3",
"assets/assets/animations/lottie/loading_hand_lottie.json": "145521776d8fe37f752f858bbb9ed5f4",
"assets/assets/animations/lottie/loading_time_lottie.json": "6ae91446c9beea1ea3ed2937bd68ecb7",
"assets/assets/animations/lottie/loading_3.json": "fb54677f8458b0f168a60ec2f18bd3d4",
"assets/assets/animations/lottie/product_delivery_lottie.json": "e14f52b996173ac52077e11a700f1243",
"assets/assets/animations/lottie/no_data_found_lottie.json": "8d73e28fed89d8465b4b1752b802dda5",
"assets/assets/animations/lottie/check_lottie.json": "a7a2b7d2ca66ea697da7591e6272d66a",
"assets/assets/animations/lottie/loading_files.json": "ca374784b160bd0475d442d0df3c3596",
"assets/assets/animations/lottie/error_website_lottie.json": "7c291448d11013da469efdecb5676b3b",
"assets/assets/animations/lottie/search_document_lottie.json": "51b826fe77d6b709dec71e5a110fcf55",
"assets/assets/animations/lottie/loading_2.json": "4802a81baa0498bd960df7c0919741d6",
"assets/assets/animations/lottie/initial_talking_lottie.json": "15317654fb4b5bde36c4d3e3fdb8ddcb",
"assets/assets/animations/lottie/handshake_loop.json": "7554e4c416349957dc366d33cdf79dbc",
"assets/assets/animations/lottie/delivery_loading.json": "ffd911594290767c6559ffa4cf5d9418",
"assets/assets/animations/lottie/loading_mobile_lottie.json": "d5c0519a1296eb8c261041167e9aa1b5",
"assets/assets/animations/lottie/registro.json": "fb362c28261d94976e04a603af55daa0",
"assets/assets/animations/lottie/confirmed_handshake_lottie.json": "ab8ce64b56a203b44c5657c948cd7acf",
"assets/assets/animations/gifs/code_coding.gif": "f7ffdb74fb7d5eb76ca26ae71db61670",
"assets/assets/animations/gifs/dart_devtools.gif": "674961dbd13522a8b2b80b422716a2d4",
"assets/assets/animations/gifs/dev_working.gif": "413bedc7cedb100dc413cd47694b74cc",
"assets/assets/animations/gifs/mobile_app_dev.gif": "93bbf719e6c3e6df2ad0e6f00666f3ef",
"assets/assets/animations/gifs/isometric_uiux_landing.gif": "c0d1628f53172024b23378c4816a6d0b",
"assets/assets/animations/gifs/app_showcase.gif": "c41024421a3f6d6b0bff54d2cb329d05",
"assets/assets/animations/gifs/gdsc_modules.gif": "7f09897cd9984758d521fe6ad7f38cd1",
"assets/assets/animations/gifs/animated_dev.gif": "072261deecb2f25ddb63932f87377542",
"assets/assets/animations/gifs/coding.gif": "7bd0fbeff505c80db985f2d91eaa29d1",
"assets/assets/animations/gifs/flutter.gif": "8420ad53fca50985405d0d6f16ac3a28",
"assets/assets/animations/gifs/animated_dev_1.gif": "bd4ed327189c2a56695beb91cd534570",
"assets/fonts/MaterialIcons-Regular.otf": "f87e68b43f5d287464c713e8d1ce0995",
"assets/NOTICES": "4a005ed36a74ab9c240ca58a629992b4",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "f656c29785f5c7959177391ae5b3781b",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "1fcba7a59e49001aa1b4409a25d425b0",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "b2703f18eee8303425a5342dba6958db",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/FontManifest.json": "2a3f09429db12146b660976774660777",
"assets/AssetManifest.bin": "5601aaf938f6f2e042498d622b21e848",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"favicon.png": "9c6393509a47504a1f35454739dd4285",
"flutter_bootstrap.js": "bf1d6744c07b529d9f30c25c16a25371",
"version.json": "0f68685a0b3ba719c338f24b5813f5ec",
"main.dart.js": "36607e7fce3140546a4f9f3c2e8449dc"};
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
