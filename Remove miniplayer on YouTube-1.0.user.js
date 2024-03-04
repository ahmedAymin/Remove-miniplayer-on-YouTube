// ==UserScript==
// @name         Remove miniplayer on YouTube
// @namespace    http://tampermonkey.net/
// @version      1.9
// @description  Remove YouTube miniplayer
// @author       Ahmed Elmasri
// @match        https://www.youtube.com/*
// @run-at       document-end
// ==/UserScript==

(function () {
    "use strict";

    const removeMiniplayer = function () {
        document.querySelector("ytd-miniplayer yt-icon-button[aria-label='Close player']").click();
        let miniplayerButton = document.querySelector('.ytp-miniplayer-button.ytp-button');
        if (miniplayerButton) {
            miniplayerButton.style.display = 'none';
        }
    };

    // Callback for mutations on the miniplayer
    const callback = function (mutationsList, observer) {
        for (const mutation of mutationsList) {
            if (mutation.attributeName === 'active') {
                removeMiniplayer();
            }
        }
    };

    // Observe mutations on the miniplayer
    const miniplayerObserver = new MutationObserver(callback);
    const miniplayerElement = document.querySelector("ytd-miniplayer");
    if (miniplayerElement) {
        miniplayerObserver.observe(miniplayerElement, { attributes: true });
    }

    // Remove miniplayer on video page load
    removeMiniplayer();
})();
