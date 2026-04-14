/**
 * @name HideActiveNow
 * @author axy
 * @authorLink https://github.com/axralty
 * @source https://github.com/axralty
 * @description Hides the "Active Now" panel on the right side of Discord.
 * @version 1.0.0
 */

module.exports = class HideActiveNow {
    constructor() {
        this.styleId = "HideActiveNowStyle";
    }

    start() {
        this.injectCSS();
    }

    stop() {
        this.removeCSS();
    }

    injectCSS() {
        if (document.getElementById(this.styleId)) return;

        const style = document.createElement("style");
        style.id = this.styleId;
        style.textContent = `
            /* Hide Active Now panel */
            [class*="nowPlayingColumn"],
            [class*="nowPlayingHeader"],
            [class*="activityPanel"],
            aside[class*="membersWrap"] [class*="nowPlaying"],
            [class*="container"] > [class*="nowPlayingColumn"],
            section[aria-label="Active Now"],
            [aria-label="Active Now"],
            [class*="friendsOnline"] [class*="scroller"] + [class*="nowPlaying"],
            /* Target the right sidebar panel that contains Active Now */
            [class^="nowPlayingColumn-"],
            [class*=" nowPlayingColumn-"] {
                display: none !important;
            }
        `;
        document.head.appendChild(style);
    }

    removeCSS() {
        const style = document.getElementById(this.styleId);
        if (style) style.remove();
    }
};
