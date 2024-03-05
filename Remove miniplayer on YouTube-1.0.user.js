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
        // Close the miniplayer if it is open
        const closeButton = document.querySelector("ytd-miniplayer yt-icon-button[aria-label='Close player']");
        if (closeButton) {
            closeButton.click();
        }

        // Hide miniplayer button on the video player
        let miniplayerButton = document.querySelector('.ytp-miniplayer-button.ytp-button');
        if (miniplayerButton) {
            miniplayerButton.style.display = 'none';
        }
    };

    // Remove miniplayer on video page load
    removeMiniplayer();

    // Set up an event listener to handle dynamically loaded content
    document.body.addEventListener('yt-navigate-finish', removeMiniplayer);
})();
