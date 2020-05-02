// ==UserScript==
// @name         微博自动展开评论
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  微博自动展开评论，网址如：https://weibo.com/*?type=comment
// @author       健康幸福
// @match        https://weibo.com/*?type=comment
// @require      http://cdn.bootcss.com/jquery/1.8.3/jquery.min.js
// @license      MIT
// @grant        none
// ==/UserScript==

function likeYou() {
    var daF = $(".WB_cardmore ")[0];
    daF.click();
}
(function () {
    'use strict';
    window.onload = window.setInterval(likeYou, 500);

})();