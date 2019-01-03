/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2017/11/25/PythonTips/index.html","080b234bc2c3aa19ee273382be58b204"],["/2017/12/10/PythonInterestMethods/index.html","013e320536a11c7a717fb8e09bda54ab"],["/2017/12/13/PythonPsutils/index.html","7f038aedaa132d9e04ed8926f834dc75"],["/2017/12/29/PythonPandasPivot_table/index.html","c1a153106c159d191b70ae9b18df15b1"],["/2017/12/29/PythonPandas_1/index.html","b8fb5e22d5fdbe0bcec3ea6a6feedda0"],["/2017/12/31/summary_2017/index.html","7bdd8643f14ad784339770ab4a67f4bd"],["/2018/01/01/Hello_2018/index.html","aba18d31867695505370e30a2ecc037e"],["/2018/01/30/Aliyun_Gitlab_configure/index.html","f285a22f547fdeaa4461f41d01874e41"],["/2018/01/31/multi_python_configure_win/index.html","527b4f93cf18a05ee75f9ba5f5dfb761"],["/2018/02/06/Sanic_wx_dev_demo/index.html","dc995deb7ced085b71b92b04cbd4b6ee"],["/2018/02/07/Scrapy_kafka/index.html","c89dc1d283124942b6fc026452d852ce"],["/2018/08/31/summary_2018_8/index.html","a70e91b6f6e5173b6ca57684d3982ba3"],["/2018/10/31/summary_2018_10/index.html","4089a8d03254108e68f64a2e9524db03"],["/2018/11/30/summary_2018_11/index.html","fe7c3bb73764d9f2fd914eb93eab01a8"],["/2018/12/31/summary_2018_12/index.html","3aa9bb8758dc111c9155eb9bfff63b70"],["/2019/01/02/AlipayScrapy/index.html","1edbc4b41ff2606255754d9792d354ec"],["/2019/01/04/EuropeTrip-DE-AT-CS/index.html","4b1c0a0f0a116aee6527b1d1e9885b2e"],["/archives/2017/11/index.html","dbf690b796ed63099af3fb18991d57ab"],["/archives/2017/12/index.html","2ac8930e351de06b98e8ce601d66aba1"],["/archives/2017/index.html","ef2efdf94a91d43260c619e8a91a88d2"],["/archives/2018/01/index.html","642ad89c65e2436fcc32841b868e8536"],["/archives/2018/02/index.html","d9733498bf5e615839611e8f8c1587c2"],["/archives/2018/08/index.html","c3bdf2f671a2f194b3382876a0a31ba7"],["/archives/2018/10/index.html","7b402ab69fc55b6c5982751f31db460e"],["/archives/2018/11/index.html","3d8e24a6eb9c7da34b0cfffb656e430d"],["/archives/2018/12/index.html","bdfd2b80e09153b38672e158cdf3468d"],["/archives/2018/index.html","68f0f0795c6647cd04cc278122e88a19"],["/archives/2019/01/index.html","bb937b9f849a1480093505971a8e3bfd"],["/archives/2019/index.html","2f8ccd463fdc9de4111d1b74901a1c85"],["/archives/index.html","a01876c236517ae20643b2321b731427"],["/archives/page/2/index.html","d713e66c678d9c105d555dc500e3bb75"],["/assets/algolia/algoliasearch.js","e12353469af755601c55c04d0fdf7704"],["/assets/algolia/algoliasearch.min.js","43bce911fc0d5e2bd4959b0c2690c2ff"],["/assets/algolia/algoliasearchLite.js","11b1f2489c561b5780e5d4158a14be7b"],["/assets/algolia/algoliasearchLite.min.js","321ff9a84a005b082c3e79b15838b08b"],["/categories/Python/index.html","72e411c76a3fd763be919cefb3b3b049"],["/categories/Summary/index.html","9d738afa2ac71c5968e263dd861a28f8"],["/categories/index.html","065790ec9d31576555e2801b8d0ccbbb"],["/categories/总结/index.html","def0aa5b5675fa0aeba5a23d0855b567"],["/categories/阿里云/index.html","a2e98f8f25cb9c158946a1e609a882ea"],["/categories/风景/index.html","7ce9a515b0ba977cb86e18b11e8af8e3"],["/css/index.css","7ccb50708430a53c146a591e2e020bf8"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/index.html","00e7eb76bb3816f0843937f6ca8c0032"],["/js/copy.js","e874c6f7e7a19bc720141c5e06060d29"],["/js/fancybox.js","db687a0462eee59b883fba807ace88d4"],["/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","b351f27620667af563f5b9fa3ca63bdf"],["/js/search/algolia.js","ea8ce28130bd4ce09d5fca2ca22ad168"],["/js/search/local-search.js","0f0737f61144676eebc9f0959dc60f01"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/page/2/index.html","fd08f3738b0223b80cad2755a928a2d1"],["/tags/2017/index.html","1fc477a416418e09147ea99ddd5baaec"],["/tags/Alipay/index.html","2b7a8a313235e0fde7e48a7a787e0edc"],["/tags/Gitlab/index.html","ff2c592fa9f789cfa308340495c3d102"],["/tags/Kafka/index.html","2e88c1c481c755518e1d4dfc03772232"],["/tags/Pandas/index.html","7febd62192e0f07b2b4dcf743c5afc06"],["/tags/Sanic/index.html","c17688995a20c0c4ac6dbe5e54abc66d"],["/tags/Scrapy/index.html","3d225e4f89cd6d8c45f4d11628c16db2"],["/tags/Tips/index.html","729f12b7a32b619de850a89b1640b0ba"],["/tags/index.html","7821f605a08776c193e1e9cc56369ba3"],["/tags/psutils/index.html","fdfb844d59c7b2963451fdf172289e18"],["/tags/多版本共存/index.html","9fa544227e6c7574e3111c9a683a326b"],["/tags/总结/index.html","b07b07264f2d3c0515bee88c238019b7"],["/tags/风景/index.html","21badcfe00c4a68782dae40ab5e770c5"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







