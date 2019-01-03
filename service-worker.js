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

var precacheConfig = [["/2017/11/25/PythonTips/index.html","7a21ad04283bcdfdcbd08fbaaaa6b9af"],["/2017/12/10/PythonInterestMethods/index.html","0d375070b5d95d81779cfa60a8dbc7a6"],["/2017/12/13/PythonPsutils/index.html","b0b6c32dd5148b28c85f2762ce3afc38"],["/2017/12/29/PythonPandasPivot_table/index.html","e3f5aa83b797131a9f9f5b7dcf2bb8d9"],["/2017/12/29/PythonPandas_1/index.html","64b2c0c7af628d87fc3ceb826049306e"],["/2017/12/31/summary_2017/index.html","bf5b3535c260a3ba9b64fac03305d51b"],["/2018/01/01/Hello_2018/index.html","a449e3b2066a7082f554615460b0b939"],["/2018/01/30/Aliyun_Gitlab_configure/index.html","21d093d605dd44b43f91f57675d6601d"],["/2018/01/31/multi_python_configure_win/index.html","1c5908bd8c7257c2632d806361d91cd5"],["/2018/02/06/Sanic_wx_dev_demo/index.html","fff650791879f36c187f3022331ec185"],["/2018/02/07/Scrapy_kafka/index.html","6d4bcae2d4c0e4a4d985844077c65a59"],["/2018/08/31/summary_2018_8/index.html","fe98f97ae30b4725ee37e0b4acf0ce36"],["/2018/10/31/summary_2018_10/index.html","7039116dcb44edf54f3fcb0e1b41f5ee"],["/2018/11/30/summary_2018_11/index.html","7b0b6cdae5cedf10ab656ad2f4e1aab6"],["/2018/12/31/summary_2018_12/index.html","4511d1e23b1a85add51c8bfed92b112d"],["/2019/01/02/AlipayScrapy/index.html","4bf40d60c880bea3ca4a56bac2493b1d"],["/2019/01/04/EuropeTrip-DE-AT-CS/index.html","942631684090113e2026e932a9d1b691"],["/archives/2017/11/index.html","f4de6b169e8e31d7cce4e353c5aa0c72"],["/archives/2017/12/index.html","e922ebc45a83cbf031a8fde71f640c30"],["/archives/2017/index.html","6044e4397994300b1f3514ba586f016b"],["/archives/2018/01/index.html","3927e8046e79f26e2bd7f6c0b55a97eb"],["/archives/2018/02/index.html","24bcf393ed10b181545c67fb6426f40f"],["/archives/2018/08/index.html","d3f73e633201bb66845438effa7e7812"],["/archives/2018/10/index.html","7f56da4e7e2f4af790028deca001914f"],["/archives/2018/11/index.html","11104e253fbe57a0336f5cb52f1d5d84"],["/archives/2018/12/index.html","b77cf2ef1c696a8f66e83b8c8f57d171"],["/archives/2018/index.html","bd8480589d5c2735b8ddbded925bd40f"],["/archives/2019/01/index.html","6c86c3bc0be91403e3e03d3a7d3a107f"],["/archives/2019/index.html","b7c4670e99b92ca291414ce2a02a8195"],["/archives/index.html","0f6ecd89f906a0a4fb7bb6b2f81c649b"],["/archives/page/2/index.html","aaf6bf8455d58c97edecc5a634fae26b"],["/assets/algolia/algoliasearch.js","e12353469af755601c55c04d0fdf7704"],["/assets/algolia/algoliasearch.min.js","43bce911fc0d5e2bd4959b0c2690c2ff"],["/assets/algolia/algoliasearchLite.js","11b1f2489c561b5780e5d4158a14be7b"],["/assets/algolia/algoliasearchLite.min.js","321ff9a84a005b082c3e79b15838b08b"],["/categories/Python/index.html","0f271c04f224ef060327ea861879da36"],["/categories/Summary/index.html","8bd78636a096bdacb5c347e76635b305"],["/categories/index.html","5fdfdcf261a7ba3e5c8d57303cb6c5b2"],["/categories/总结/index.html","a792ecd421c09cb98af84a21db368478"],["/categories/阿里云/index.html","7ab4183508969a3a0196400e8161e3a7"],["/categories/风景/index.html","a4868600931a38f38340f728e8d44d9b"],["/css/index.css","7ccb50708430a53c146a591e2e020bf8"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/index.html","82d44ae5f6197a85d1abf6edb70d25f9"],["/js/copy.js","e874c6f7e7a19bc720141c5e06060d29"],["/js/fancybox.js","db687a0462eee59b883fba807ace88d4"],["/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","b351f27620667af563f5b9fa3ca63bdf"],["/js/search/algolia.js","ea8ce28130bd4ce09d5fca2ca22ad168"],["/js/search/local-search.js","0f0737f61144676eebc9f0959dc60f01"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/page/2/index.html","5403686e916db8f8492de280490acdcc"],["/tags/2017/index.html","5622e5a60844020367ce348f71bb3362"],["/tags/Alipay/index.html","aa34a456237b9d804282ded59797a6c3"],["/tags/Gitlab/index.html","e834e3d7d9c38d0cf310eea72df5a924"],["/tags/Kafka/index.html","09a13bcd0e5e133ec95e1772ae90982c"],["/tags/Pandas/index.html","c7071ff32c5e0734c2e3972bb91ca2b7"],["/tags/Sanic/index.html","bf291f43c346b396ddd78ba0e66e5ad0"],["/tags/Scrapy/index.html","da38b80ba4cdcfc3adadac94effa47fd"],["/tags/Tips/index.html","ab8a7df03f3b56086c791b9cf7c9a2c7"],["/tags/index.html","4f1aa56908bcfee22e195ffb1416d935"],["/tags/psutils/index.html","1693c794d7dfc178683f693537239ed0"],["/tags/多版本共存/index.html","a91e410c5010e55ed64fae3fc6e51e95"],["/tags/总结/index.html","9a8512321215af32ea96c7029e9b1847"],["/tags/风景/index.html","6be3ddd4e5a65776a8d461af85720e55"]];
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







