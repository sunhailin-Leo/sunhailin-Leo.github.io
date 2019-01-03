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

var precacheConfig = [["/2017/11/25/PythonTips/index.html","6812c988867bf1c723bf497ebb12eb5c"],["/2017/12/10/PythonInterestMethods/index.html","f20159cc13c53555f2c7a6f61dbdadda"],["/2017/12/13/PythonPsutils/index.html","780e11f40089cccd1b4298cb5095d7c0"],["/2017/12/29/PythonPandasPivot_table/index.html","d28dc7fbff4cbfabcc760d8d8947f6a4"],["/2017/12/29/PythonPandas_1/index.html","f25dbed1ea20fd4c1f73df992b4daca3"],["/2017/12/31/summary_2017/index.html","07bc754ea71b4d37a4bde2d7edd853bc"],["/2018/01/01/Hello_2018/index.html","501f955f76abb3d0f5eec76d18499e55"],["/2018/01/30/Aliyun_Gitlab_configure/index.html","669993778e0069d0b6d83bc4b2e509d6"],["/2018/01/31/multi_python_configure_win/index.html","eb9cf5a93d9f4a56239ced7238466cb5"],["/2018/02/04/AlipayScrapy/index.html","ec58322c0ae1fdcd3bb3a07466e82081"],["/2018/02/06/Sanic_wx_dev_demo/index.html","116e7525002bbc3061279b0bbcbbac4a"],["/2018/02/07/Scrapy_kafka/index.html","525d41513fa3e835febd9544da2e0c07"],["/2018/08/31/summary_2018_8/index.html","744348fa547d7402c54edb67cac866ba"],["/2019/01/02/AlipayScrapy/index.html","c8321ee6d2c7b6a63d355fe5a56aeae9"],["/archives/2017/11/index.html","47e7afe0d2dc1a7bd8bce19258042320"],["/archives/2017/12/index.html","4847652e21b6be6a6ac81488cb8bb9f1"],["/archives/2017/index.html","fead243305cb2cb067e616bffa4fe53b"],["/archives/2018/01/index.html","81e4084bd8a361b9fd460b3b16f852e6"],["/archives/2018/02/index.html","7133d4019a642fbfb3f6953470fde63d"],["/archives/2018/08/index.html","8d78487f548271e80b798ae49c33933e"],["/archives/2018/index.html","134ae72f976a99153b20f8e1a1111e6e"],["/archives/2019/01/index.html","0f8c75d7bd3b8562f71eec7f55026061"],["/archives/2019/index.html","53b7e8758199c0cc5556f01bf5cc73a7"],["/archives/index.html","aa656cd1602a24a897a8da61bd2866a2"],["/archives/page/2/index.html","1482363098d6a337d5ca840a0b5b5893"],["/assets/algolia/algoliasearch.js","e12353469af755601c55c04d0fdf7704"],["/assets/algolia/algoliasearch.min.js","43bce911fc0d5e2bd4959b0c2690c2ff"],["/assets/algolia/algoliasearchLite.js","11b1f2489c561b5780e5d4158a14be7b"],["/assets/algolia/algoliasearchLite.min.js","321ff9a84a005b082c3e79b15838b08b"],["/categories/Python/index.html","9a5d109b87e3c0bc3a747822997ed960"],["/categories/Summary/index.html","7630512a83bc10d0f0c5a3a59bab9f3c"],["/categories/index.html","ab8a9fdfb17743b46a5e348f0afd9462"],["/categories/总结/index.html","aaafb9f3b125e9667aeade9308c14a42"],["/categories/阿里云/index.html","e8b8554665f4e3e058849a2a08fb6b05"],["/categories/风景/index.html","6f5812bd0dd9ce850a58342f487fa9a8"],["/css/index.css","7ccb50708430a53c146a591e2e020bf8"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/index.html","c2230111c8ec3be3d94cb9607521f8fe"],["/js/copy.js","e874c6f7e7a19bc720141c5e06060d29"],["/js/fancybox.js","db687a0462eee59b883fba807ace88d4"],["/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","b351f27620667af563f5b9fa3ca63bdf"],["/js/search/algolia.js","ea8ce28130bd4ce09d5fca2ca22ad168"],["/js/search/local-search.js","0f0737f61144676eebc9f0959dc60f01"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/page/2/index.html","4e76fbd2c5c4823b552a4528308f0dde"],["/tags/2017/index.html","17a8a66bcbfc09c74531eb7ddbec3d5f"],["/tags/Alipay/index.html","0a38d939578f626b25815237fa099db1"],["/tags/Gitlab/index.html","479ca8d972c9b5a6654b77df54326204"],["/tags/Kafka/index.html","b22c2fe7b37356e91880bdb39801fc21"],["/tags/Pandas/index.html","af2245c053b49f8b73a49ec3757ef896"],["/tags/Sanic/index.html","1f59cd013ac78f9dd83006cf91b386be"],["/tags/Scrapy/index.html","597b615d3c2b24c926fe908378bd1f46"],["/tags/Tips/index.html","b76ceb3bcbe4d18533abf70dcd96858d"],["/tags/index.html","dfbfd648c10cfe53671d8ba5964c3a77"],["/tags/psutils/index.html","ca74d19c9d95ba3db19b1581b530bb69"],["/tags/多版本共存/index.html","ae5fc713a9d96cccc647544a1ba6b1db"],["/tags/总结/index.html","124f78b3539eac6a2d834d04695d0cce"],["/tags/风景/index.html","dc98f7c697a974c016d8d7e536758e36"]];
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







