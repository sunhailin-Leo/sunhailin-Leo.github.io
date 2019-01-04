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

var precacheConfig = [["/2017/11/25/PythonTips/index.html","da67615c4d383d53baf0825212434f6c"],["/2017/12/10/PythonInterestMethods/index.html","f4bfe9bc683110132b3d4c70d6114f17"],["/2017/12/13/PythonPsutils/index.html","f944234a6bdb90afb38a889ba255fa79"],["/2017/12/29/PythonPandasPivot_table/index.html","5803d7bf3ca4dc155117ffa957632a32"],["/2017/12/29/PythonPandas_1/index.html","72e3d35a2a4b5f6fec7f98fabbbd56bb"],["/2017/12/31/summary_2017/index.html","a00a3a376be14b9573053eba18ee2cf7"],["/2018/01/01/Hello_2018/index.html","b4c3f7f3621743546e376c9e2b96ce64"],["/2018/01/30/Aliyun_Gitlab_configure/index.html","f05cf9f7420457e3708542987620e38e"],["/2018/01/31/multi_python_configure_win/index.html","b610363049d28314c2b050a509770a7a"],["/2018/02/06/Sanic_wx_dev_demo/index.html","a175485767aaab68fc8ce9e06462c26a"],["/2018/02/07/Scrapy_kafka/index.html","49f93817687105dfe23d85509d1a50b2"],["/2018/08/31/summary_2018_8/index.html","d3ff18544ac54105c00cccc3fcbda307"],["/2018/10/31/summary_2018_10/index.html","56659328ee491ed4e4565bef70b3ed8d"],["/2018/11/30/summary_2018_11/index.html","a4d5ed1fe482a8e398f932305613e60b"],["/2018/12/31/summary_2018_12/index.html","5e47cc3cd33ab253460d67cafa79d750"],["/2019/01/02/AlipayScrapy/index.html","78004a500cec50fe37d8e71430c69272"],["/archives/2017/11/index.html","29484f776a065a87465dc653e742f518"],["/archives/2017/12/index.html","5fe62ecf3ad55cba29038bbcb7025210"],["/archives/2017/index.html","9a9d3a1f324ac64cfc11c5c64163fc56"],["/archives/2018/01/index.html","342e2db29d4118c76d54791849a58a3a"],["/archives/2018/02/index.html","6a59cf97ba370009754ce340054f0a30"],["/archives/2018/08/index.html","61c51881ea3f9bce2999cedce572b43e"],["/archives/2018/10/index.html","a194e431c167c04a80355a24c118b9b2"],["/archives/2018/11/index.html","e61d7847000ca5aec89155be57e3e61b"],["/archives/2018/12/index.html","d93cba751263c29d53440cfcdb317f53"],["/archives/2018/index.html","c3053849c83081acad4c16279aeb857d"],["/archives/2019/01/index.html","f9574bf510f279480e023151cfb44707"],["/archives/2019/index.html","7a8dcee87d6f4befe6623b7c3bd71e83"],["/archives/index.html","30fa28bcd1ccbc60206368aeb92b41c9"],["/archives/page/2/index.html","8fe0efebd18076ac6e8e38c087b4d0d0"],["/assets/algolia/algoliasearch.js","e12353469af755601c55c04d0fdf7704"],["/assets/algolia/algoliasearch.min.js","43bce911fc0d5e2bd4959b0c2690c2ff"],["/assets/algolia/algoliasearchLite.js","11b1f2489c561b5780e5d4158a14be7b"],["/assets/algolia/algoliasearchLite.min.js","321ff9a84a005b082c3e79b15838b08b"],["/categories/Python/index.html","76c75f90d73bc6547c7b55deada0e68e"],["/categories/Summary/index.html","3ce8369f946ac10881982bc0120eb766"],["/categories/index.html","1343fc247966c3c5fe3b7189a8b06a33"],["/categories/总结/index.html","882decef73eabb1fec285faef6b75d20"],["/categories/阿里云/index.html","c2fe1dc41045467a0cd7e71ab1b92060"],["/categories/风景/index.html","01d96349c51d10a31583cad6e3261546"],["/css/index.css","c062942950c461bdf6b60dc7bb96bf2d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/index.html","ec75d999f9bd90f3a8ef884a569c25ae"],["/js/copy.js","f4607057c0513bd07a69fcac08121979"],["/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/page/2/index.html","c3fcb047b414334ecd4fc8fc13f0ffc3"],["/tags/2017/index.html","bebb8a2ed0a67bd0f7678452f6a080ec"],["/tags/Alipay/index.html","c3edba69307e2ae3d4675065d8452fec"],["/tags/Gitlab/index.html","7ab4e0a5531640cc27c720e955dfd2fb"],["/tags/Kafka/index.html","058c6104c9d0f04c6126bbc9e1461c6f"],["/tags/Pandas/index.html","5b9ae093915701cde5e320cabc478dda"],["/tags/Sanic/index.html","de22a8e8857010719c3d0793880521ae"],["/tags/Scrapy/index.html","37e579b171136ef97be17be02d7773c6"],["/tags/Tips/index.html","8f6e65ef2efca571283467ff200e9394"],["/tags/index.html","46aa53ad4e69222c21aa0628e46aa652"],["/tags/psutils/index.html","a033fc08b640d5e31f14190c3790a41c"],["/tags/多版本共存/index.html","8a3d43ad49c452b52b2fdc0d0b63ac10"],["/tags/总结/index.html","d808fb4d52973c166fa2dc3f7e20a88d"],["/tags/风景/index.html","1c41ee599ecef2146cab1666650bfe4f"]];
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







