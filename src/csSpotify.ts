namespace Spotify {
    console.log("YouTubeConnect loading...");
    window.addEventListener("load", startObserver);

    function startObserver(): void {
        var observer = new MutationObserver(function (mutations, me) {
            var found = document.querySelector("#global-nav-bar");
            if (found) {
                addCustomButtons(found);
                me.disconnect(); // stop observing
                return;
            }
        });

        console.log("YouTubeConnect start observing...");
        observer.observe(document, {
            childList: true,
            subtree: true
        });
    }

    function addCustomButtons(found: Element): void {
        console.log("YouTubeConnect found element", found);

        const target = found.querySelector("#global-nav-bar > div");
        console.log("YouTubeConnect targeting element for insert", target)

        const logoNative = found.querySelector<HTMLAnchorElement>("#global-nav-bar > div > a");
        console.log("YouTubeConnect found native logo", logoNative)

        if (logoNative)
            logoNative.style.marginRight = "0px"

        var imgGenius = document.createElement('img');
        imgGenius.src = chrome.runtime.getURL('img/genius_logo_transparent.svg');
        imgGenius.height = 32;
        imgGenius.width = imgGenius.height;
        imgGenius.style.cursor = "pointer";

        var imgWrapperGenius = document.createElement('div');
        imgWrapperGenius.style.width = '32px';
        imgWrapperGenius.style.height = '32px';
        imgWrapperGenius.style.borderRadius = '50%';
        imgWrapperGenius.style.overflow = 'hidden';
        imgWrapperGenius.style.backgroundColor = "#fff";
        imgWrapperGenius.style.display = "inline-block";
        imgWrapperGenius.style.display = "flex";
        imgWrapperGenius.style.alignItems = "center";
        imgWrapperGenius.style.justifyContent = "center";

        imgWrapperGenius.appendChild(imgGenius);

        var imgYouTube = document.createElement('img');
        imgYouTube.src = chrome.runtime.getURL('img/youtube_logo_transparent.svg');
        imgYouTube.height = 24;
        imgYouTube.width = imgYouTube.height;
        imgYouTube.style.cursor = "pointer";

        var imgWrapperYouTube = document.createElement('div');
        imgWrapperYouTube.style.width = '32px';
        imgWrapperYouTube.style.height = '32px';
        imgWrapperYouTube.style.borderRadius = '50%';
        imgWrapperYouTube.style.overflow = 'hidden';
        imgWrapperYouTube.style.backgroundColor = "#fff";
        imgWrapperYouTube.style.display = "inline-block";
        imgWrapperYouTube.style.display = "flex";
        imgWrapperYouTube.style.alignItems = "center";
        imgWrapperYouTube.style.justifyContent = "center";

        imgWrapperYouTube.appendChild(imgYouTube);

        target?.insertAdjacentElement('beforeend', imgWrapperGenius);
        target?.insertAdjacentElement('beforeend', imgWrapperYouTube);

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
        var nowPlayingBar = document.querySelector('[data-testid="now-playing-bar"]');
        if (nowPlayingBar == null) return;
        var artist = querySelectorNoChildren(nowPlayingBar, 'a[href^="\\/artist\\/"], a[href^="\\/show\\/"]')?.innerText ?? "";
        var song = querySelectorNoChildren(nowPlayingBar, 'a[href^="\\/album\\/"], a[href^="\\/episode\\/"]')?.innerText ?? "";
        return `${artist} ${song}`;
    }

    function querySelectorNoChildren(elem: Element, selector: string) {
        return <HTMLElement>[...elem.querySelectorAll(selector)].find(e => e.childElementCount == 0);
    };
}