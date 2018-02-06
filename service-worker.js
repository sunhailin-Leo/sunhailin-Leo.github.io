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

var precacheConfig = [["/2017/11/20/AlipayScrapy/index.html","598ab6032ce1dc6c6ee0991efc7a892c"],["/2017/11/25/PythonTips/index.html","7c2999f8212336b8a54ead6637d4ecdb"],["/2017/12/10/PythonInterestMethods/index.html","b3ebb2954582be121667d1cd7ab17c3f"],["/2017/12/13/PythonPsutils/index.html","ab5123638eb66df991e58433df986ae0"],["/2017/12/29/PythonPandasPivot_table/index.html","6597449537554506b3eefcabd96af5f2"],["/2017/12/29/PythonPandas_1/index.html","3e370b8b84d19492a9b1fc2e2905fa0b"],["/2017/12/31/summary_2017/index.html","2f160d9afa8efef0ce35cb5d7634ecb9"],["/2018/01/01/Hello_2018/index.html","010d96a5e58633e8f5fd08d281505d0c"],["/2018/01/30/Aliyun_Gitlab_configure/index.html","370c22314fcd06e30037971e031c1e3d"],["/2018/01/31/multi_python_configure_win/index.html","f06068d6dd01e2597f414007dcbf0c9a"],["/2018/02/06/Sanic_wx_dev_demo/index.html","499fe2e362e19b57e8fc975896089e39"],["/archives/2017/11/index.html","18a3b7f36c3903d1d676866a242a2a44"],["/archives/2017/12/index.html","aac8ae481b7b98c70eed601ed56476f3"],["/archives/2017/index.html","4d03f08a45be78813dbbf81098b22604"],["/archives/2018/01/index.html","227f07bbbfdf39bb2751f86f37f2dd3b"],["/archives/2018/02/index.html","47d9bee163fa7362744a40cce7b9ef9e"],["/archives/2018/index.html","587ba727a12de87a34aee05d9c67d931"],["/archives/index.html","4ed746336cc95aa9396454dae25e97c1"],["/archives/page/2/index.html","2215596e0eebd8f7167a5ac941e4ca49"],["/assets/algolia/algoliasearch.js","e12353469af755601c55c04d0fdf7704"],["/assets/algolia/algoliasearch.min.js","43bce911fc0d5e2bd4959b0c2690c2ff"],["/assets/algolia/algoliasearchLite.js","11b1f2489c561b5780e5d4158a14be7b"],["/assets/algolia/algoliasearchLite.min.js","321ff9a84a005b082c3e79b15838b08b"],["/categories/Python/index.html","9a09a98a046ddf28a3682c8d6d5cba6f"],["/categories/Summary/index.html","389dac625fede3685898dc80bc5659b9"],["/categories/index.html","09725c2bbead3533fd4049487090fa09"],["/categories/阿里云/index.html","bcebb6a65f32b0d7663191cf6c6b2457"],["/categories/风景/index.html","0228fad645f666bab9f89ef3c50828a8"],["/css/index.css","7ccb50708430a53c146a591e2e020bf8"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/index.html","a05963d289b207a7abe1e6fc1b7a2b67"],["/js/copy.js","e874c6f7e7a19bc720141c5e06060d29"],["/js/fancybox.js","db687a0462eee59b883fba807ace88d4"],["/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","b351f27620667af563f5b9fa3ca63bdf"],["/js/search/algolia.js","ea8ce28130bd4ce09d5fca2ca22ad168"],["/js/search/local-search.js","0f0737f61144676eebc9f0959dc60f01"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/page/2/index.html","bc649a39e137ebc42da6702ec9853fb0"],["/tags/2017/index.html","0df73b7b8c1f6ffc5b562f3950a3a252"],["/tags/Alipay/index.html","39f980f015b9633ec2b00552fe0056cd"],["/tags/Gitlab/index.html","69aa7a17ed492dceb542389deb88d101"],["/tags/Pandas/index.html","6bce8514e2ac93f8432634b0c16021c8"],["/tags/Sanic/index.html","949095a9917a39cf997fb985080c68f8"],["/tags/Scrapy/index.html","21927f4f2afd9bc0ed68ad897c244598"],["/tags/Tips/index.html","a70a4d253a6358afbe85694502cfb03b"],["/tags/index.html","b9e0e514d5b42342f0929e4979016bef"],["/tags/psutils/index.html","9ed98405d8d45645ae7807f8a4eea0ba"],["/tags/多版本共存/index.html","c16daa1119c8c0bb603e47553a4c7492"],["/tags/风景/index.html","d225c811808dd021281e616f6442622e"]];
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







