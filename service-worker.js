                        importScripts("/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"/honors/2020/12/26/Honors-Unity-DOTS.html","revision":"fd4028e2603bc45dfdabab7740a91b43"},{"url":"/honors/2020/06/22/Fourth-Year-In-Review.html","revision":"c25e778f0fd30b049bb695600dfa5a4f"},{"url":"/honors/2017/07/28/Treachery.html","revision":"ef652f5b21d4d6aee24d1ec39ea09f77"},{"url":"/honors/2017/10/19/First-Year-in-Review.html","revision":"aeb59b7e75c567abb01aecbb0d890069"},{"url":"/honors/2017/10/19/Bearcat-Coders.html","revision":"64d1004ee90feb891ba21beb5623f5d3"},{"url":"/honors/2018/07/04/Japan-Trip.html","revision":"806ef49becc5c3857193aad27784d98d"},{"url":"/honors/2018/07/04/Second-Year-In-Review.html","revision":"df6492c86599bfd325efe88b5e4d03a5"},{"url":"/honors/2018/04/20/Accessibility-on-UC-Campus.html","revision":"3028bcfa626c4917cedf8d6b9e5898d8"},{"url":"/honors/2019/06/04/Third-Year-In-Review.html","revision":"b793e714dd32e48e8dc8dd5c799799e2"},{"url":"/honors/2016/12/01/Gateway-to-University-Honors.html","revision":"def56eeb4228cc8ec3d8b0694294429a"},{"url":"/bubble/report.html","revision":"55232535325ce8184bc9e3d9fd0a3a27"},{"url":"/bubble/index.html","revision":"d433d069c6f957949561e242af32b6fd"},{"url":"/service-worker.js","revision":"7e0dc2ed233c9924ec3f9a8437bdab9a"},{"url":"/honors.html","revision":"4a472bf73c2da229f6a168b3f6fac057"},{"url":"/professional.html","revision":"d1b90aa4d57f209ee3340e370c5a1901"},{"url":"/sw-register.js","revision":"0cd193e0f65d8f392a18d1b59f25d0e8"},{"url":"/assets/lib/jquery.min.js","revision":"dc5e7f18c8d36ac1d3d4753a87c98d0a"},{"url":"/assets/icons/linkedin.svg","revision":"36ed211fab1acfddbfc6d10b8b6bbfb2"},{"url":"/assets/icons/github.svg","revision":"218c31b5ff0a9fbe306f90af32e6725b"},{"url":"/assets/icons/japanIcon.svg","revision":"1f4a8082be8b7d79f3a35f52b9173553"},{"url":"/assets/icons/youtube.svg","revision":"23b5c26f56b3175582cce5e211d59177"},{"url":"/assets/icons/twitter.svg","revision":"a093ac97917793b031b599d9d4bffe7f"},{"url":"/assets/icons/facebook.svg","revision":"c2fc737afa1f096dc83689e7a00022f6"},{"url":"/assets/main.css","revision":"8b5e33a2c9b290fd7eafbb1b6e0cafef"},{"url":"/assets/scripts/showMores.js","revision":"4df9ea11ec1c2d1a1e4a019fa2ff9351"},{"url":"/assets/scripts/trigBanner.js","revision":"69f7ba4c5b0748fbf12e1a9ab8838614"},{"url":"/assets/scripts/top_button.js","revision":"e6dca4f1a355e741524c1a3c92644800"},{"url":"/assets/minima-social-icons.svg","revision":"3a70b871c930a7ed8af27caa162af123"},{"url":"/professional/2020/06/29/Microsoft.html","revision":"917020bcf717bbc9b110ced31d8dd9a4"},{"url":"/professional/2017/08/01/CCHMC-Research.html","revision":"a7d1572982a2309417bc64e1dacf605c"},{"url":"/professional/2018/04/20/Infinera-Hardware-Design-Engineer.html","revision":"0f42c729097607875f636b446096c296"},{"url":"/professional/2019/06/11/Intuit.html","revision":"cd613441c439a48ec312d93375ba7b10"},{"url":"/professional/2019/02/28/CCHMC-Co-op.html","revision":"f7201a0a25ff3aa18e2575d89800b5fe"},{"url":"/professional/2016/10/10/RET-Project.html","revision":"588d35f5437fadc1429ec3fafc363f60"},{"url":"/index.html","revision":"d3a39bd0f4f34975048e1bd3af036af2"},{"url":"/blog.html","revision":"447d2cd15596dd0fdd0b9b77c133cab1"},{"url":"/blog/2014/07/01/Minecraft-Playscape-Project.html","revision":"e8c12798f87a3f614078c5f5b48a5335"},{"url":"/blog/2014/04/01/Java-Projects.html","revision":"896db12d585ce0d0bd166cb95cc3bc57"},{"url":"/blog/2021/02/02/Project-Cage.html","revision":"4c0d6a2f0383487eff24cd7dbeb2dcaa"},{"url":"/blog/2018/08/20/Bark-Bark.html","revision":"384724398028dc15a4ea78c5cccb2853"},{"url":"/blog/2018/07/09/ISCB-2018-Poster.html","revision":"9dc23bec635b8dcabef9049f8600d0d1"},{"url":"/blog/2018/11/25/Grace-Hopper-Celebration.html","revision":"a152e1fbc92be13fa3d60cd1d6ca53b5"},{"url":"/blog/2019/03/11/Blender-Intro.html","revision":"d2881dd84a6c0148fa1ec4849aabc479"},{"url":"/blog/2019/02/28/OCWIC.html","revision":"b72ddb09c06959292f7781ab02aeb323"},{"url":"/blog/2016/12/16/Medina.html","revision":"93e62261c6e0490c06dc76c1c5f4302d"},{"url":"/blog/2016/10/10/Fake-Midi.html","revision":"d85a5f69c68bd576994aac03ab82e93a"},{"url":"/blog/2016/04/01/Player-Count-Message.html","revision":"14dbe7de8e86e9b957e48d7e30807124"},{"url":"/404.html","revision":"a97250cd72b0a573d2dec255fc9ea327"},{"url":"/logo.svg","revision":"674683e14ac64b8450ef5825d6e53695"},{"url":"/resume.html","revision":"34c2e054dd4d948bb558daacf44bdc63"},{"url":"/about.html","revision":"4e2a1269b66c5d1905121b1f1cb0c48d"},{"url":"/privacy.html","revision":"2eea07cb990c496f2876588ec23c9ad9"}];
            // service-worker.js

// set names for both precache & runtime cache
workbox.core.setCacheNameDetails({
    prefix: 'nick-maltbie',
    suffix: 'v1',
    precache: 'precache',
    runtime: 'runtime-cache'
});

// let Service Worker take control of pages ASAP
workbox.skipWaiting();
workbox.clientsClaim();

// let Workbox handle our precache list
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// use `networkFirst` strategy for `*.html`, like all my posts
workbox.routing.registerRoute(
    /\.html$/,
    workbox.strategies.networkFirst()
);

// use `cacheFirst` strategy for icons
workbox.routing.registerRoute(
    /\.ico$/,
    workbox.strategies.cacheFirst()
);

// use `cacheFirst` strategy for images
workbox.routing.registerRoute(
    /assets\/(projects|icons|imgs)/,
    workbox.strategies.cacheFirst()
);

// use `networkFirst` strategy for scripts
workbox.routing.registerRoute(
    /assets\/scripts\/\.js$/,
    workbox.strategies.networkFirst()
);

// use `networkFirst` strategy for style sheets
workbox.routing.registerRoute(
    /\.css$/,
    workbox.strategies.networkFirst()
);

// third party files
workbox.routing.registerRoute(
    /^https?:\/\/nickmaltbie.com/,
    workbox.strategies.staleWhileRevalidate()
);

