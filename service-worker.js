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

var precacheConfig = [["/2017/11/20/AlipayScrapy/index.html","f8d56c1b8550398de040eb857a9e6c95"],["/2017/11/25/PythonTips/index.html","a9a617681f93a85ad3d3efaf82ccd0a5"],["/2017/12/10/PythonInterestMethods/index.html","47bac3ef71e167a47ebed0d632794013"],["/2017/12/13/PythonPsutils/index.html","482e41cf52f5d8390e2eb7a2e636722b"],["/2017/12/29/PythonPandasPivot_table/index.html","978409f13cb93020835887d03f5ed7b7"],["/2017/12/29/PythonPandas_1/index.html","7c87d1831a0e0c77c97f99c08c95197d"],["/2017/12/31/summary_2017/index.html","3b6c113d02c16367980247baad1e630c"],["/2018/01/01/Hello_2018/index.html","9b03e27535c9baa474621cbc80ca7ae3"],["/2018/01/30/Aliyun_Gitlab_configure/index.html","64483a6200ba6086ab277cc9bab19217"],["/2018/01/31/multi_python_configure_win/index.html","bb9c3bd1292dafe58909c8d1546dfb64"],["/2018/02/04/AlipayScrapy/index.html","d58bf0e45bda2a2c99a19042c1dd8c01"],["/2018/02/06/Sanic_wx_dev_demo/index.html","bc9951a58de91562bea058268994c7ae"],["/archives/2017/11/index.html","ebb6a5b07dbc303de5414a092b1bbf0a"],["/archives/2017/12/index.html","f3d8904d931d6c2c3f655899639ca503"],["/archives/2017/index.html","022c67a2b88808aa712ed78835c6f765"],["/archives/2018/01/index.html","33d871613eff7e13001c5456b98ee06a"],["/archives/2018/02/index.html","8a091afa7936aab5b7392d601e8aed90"],["/archives/2018/index.html","59c42e135f836f5ea9c56f8f3d38c7b7"],["/archives/index.html","842f05f5048ed69d9c9adc77ba5d780a"],["/archives/page/2/index.html","598fadaa0ce03280a5040e0d4e1267d9"],["/assets/algolia/algoliasearch.js","e12353469af755601c55c04d0fdf7704"],["/assets/algolia/algoliasearch.min.js","43bce911fc0d5e2bd4959b0c2690c2ff"],["/assets/algolia/algoliasearchLite.js","11b1f2489c561b5780e5d4158a14be7b"],["/assets/algolia/algoliasearchLite.min.js","321ff9a84a005b082c3e79b15838b08b"],["/categories/Python/index.html","247cfc8039a3eafbf70aa56269460c10"],["/categories/Summary/index.html","743fe9368d4083bfe67f593b7499a339"],["/categories/index.html","79d592fc9db60278a4be187dceb68f21"],["/categories/阿里云/index.html","2e1bde0ccbc224e8bfaa377ca99d5ce8"],["/categories/风景/index.html","d925cff5e665d5bd49bf8dc7534788ec"],["/css/index.css","7ccb50708430a53c146a591e2e020bf8"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/index.html","fe391308655c173b3bbe2cc366e3d34e"],["/js/copy.js","e874c6f7e7a19bc720141c5e06060d29"],["/js/fancybox.js","db687a0462eee59b883fba807ace88d4"],["/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","b351f27620667af563f5b9fa3ca63bdf"],["/js/search/algolia.js","ea8ce28130bd4ce09d5fca2ca22ad168"],["/js/search/local-search.js","0f0737f61144676eebc9f0959dc60f01"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/page/2/index.html","56898fcf8d017455c0d7b826f62d54c5"],["/tags/2017/index.html","d0c1df25787cb8a57634e3fd91b88558"],["/tags/Alipay/index.html","9b451e56def1965d0d79491c59721379"],["/tags/Gitlab/index.html","c4189a5b415d7c9d996fa51b4c7b7c92"],["/tags/Pandas/index.html","560454a654cd1909875b229e0b2788a9"],["/tags/Sanic/index.html","0ef5ef64310200e3e1c86ecae18e1cca"],["/tags/Scrapy/index.html","95b867048a8a89d5d4985737ddac7b77"],["/tags/Tips/index.html","0e28996f647f8f1ee5b95d8c8a99dcce"],["/tags/index.html","7dea4fead7a8aca8494530feef359e80"],["/tags/psutils/index.html","356657e4f2bd8bd3b8416a971a6b4015"],["/tags/多版本共存/index.html","b78bda92ca54f5da41003ea9138e4f2f"],["/tags/风景/index.html","bf71e17f26b7769cee815c2af9ae3ae6"]];
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







