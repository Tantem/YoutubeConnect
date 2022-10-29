namespace Spotify {
    window.addEventListener("load", startObserver);

    function startObserver(): void {
        var observer = new MutationObserver(function (mutations, me) {
            var found = document.querySelector("header > div > button:nth-of-type(2)");
            if (found) {
                addCustomButtons(found);
                me.disconnect(); // stop observing
                return;
            }
        });

        // start observing
        observer.observe(document, {
            childList: true,
            subtree: true
        });
    }

    function addCustomButtons(found: Element): void {
        var imgGenius = document.createElement('img');
        imgGenius.src = chrome.runtime.getURL('img/genius_logo_green.png');
        imgGenius.height = 32;
        imgGenius.width = imgGenius.height;
        imgGenius.style.cursor = "pointer";

        var imgYouTube = document.createElement('img');
        imgYouTube.src = chrome.runtime.getURL('img/youtube_logo_green.png');
        imgYouTube.height = 32;
        imgYouTube.width = imgYouTube.height;
        imgYouTube.style.cursor = "pointer";

        found.insertAdjacentElement('afterend', imgGenius);
        found.insertAdjacentElement('afterend', imgYouTube);

        imgGenius.addEventListener('click', function () {
            chrome.runtime.sendMessage(
                {
                    type: "btGenius_OnClick",
                    title: getTitle()
                }
            );
        }, true);

        imgYouTube.addEventListener('click', function () {
            chrome.runtime.sendMessage(
                {
                    type: "btYouTube_OnClick",
                    title: getTitle()
                }
            );
        }, true);
    }

    function getTitle() {
        var nowPlayingBar = document.querySelector('.Root__now-playing-bar')
        if (nowPlayingBar == null) return;
        var artist = querySelectorNoChildren(nowPlayingBar, 'a[href^="\\/artist\\/"], a[href^="\\/show\\/"]')?.innerText ?? "";
        var song = querySelectorNoChildren(nowPlayingBar, 'a[href^="\\/album\\/"], a[href^="\\/episode\\/"]')?.innerText ?? "";
        return `${artist} ${song}`;
    }

    function querySelectorNoChildren(elem: Element, selector: string) {
        return <HTMLElement>[...elem.querySelectorAll(selector)].find(e => e.childElementCount == 0);
    };
}