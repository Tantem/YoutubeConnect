namespace Genius {
    window.addEventListener("load", onLoad);

    if (location.href.includes("/search?q")) {
        var observer = new MutationObserver(function (mutations, me) {
            var found = document.querySelector("div.column_layout")
            if (found) {
                me.disconnect(); // stop observing
                addButtonsToSearchPage();
                return;
            }
        });

        // start observing
        observer.observe(document, {
            childList: true,
            subtree: true
        });
    }

    function onLoad(): void {
        if (location.href.endsWith("-lyrics")) {
            addButtonsToSongPage();
        }
    }

    function addButtonsToSearchPage(): void {
        let elements = document.getElementsByClassName("mini_card-title_and_subtitle");
        for (let i = 0; i < elements.length; i++) {
            var div = document.createElement('div');
            div.style.marginTop = "6px";

            var imgSpotify = document.createElement('img');
            imgSpotify.src = chrome.runtime.getURL('img/spotify_logo_yellow.png');
            imgSpotify.height = 20;
            imgSpotify.width = imgSpotify.height;
            imgSpotify.style.cursor = "pointer";
            imgSpotify.style.marginRight = "5px";

            var imgYouTube = document.createElement('img');
            imgYouTube.src = chrome.runtime.getURL('img/youtube_logo_yellow.png');
            imgYouTube.height = 20;
            imgYouTube.width = imgYouTube.height;
            imgYouTube.style.cursor = "pointer";

            div.appendChild(imgSpotify);
            div.appendChild(imgYouTube);

            elements[i].insertAdjacentElement('afterend', div);

            imgSpotify.addEventListener('click', function () {
                chrome.runtime.sendMessage(
                    {
                        type: "btSpotify_OnClick",
                        title: searchPageGetTitle(elements[i])
                    }
                );
            }, true);

            imgYouTube.addEventListener('click', function () {
                chrome.runtime.sendMessage(
                    {
                        type: "btYouTube_OnClick",
                        title: searchPageGetTitle(elements[i])
                    }
                );
            }, true);
        }
    }

    function searchPageGetTitle(elem: Element) {
        var artist = (<HTMLElement>elem.getElementsByClassName("mini_card-subtitle")[0]).innerText;
        var song = (<HTMLElement>elem.getElementsByClassName("mini_card-title")[0]).innerText;
        return `${artist} ${song}`;
    }

    function addButtonsToSongPage(): void {
        var imgSpotify = document.createElement('img');
        imgSpotify.src = chrome.runtime.getURL('img/spotify_logo_yellow.png');
        imgSpotify.height = 25;
        imgSpotify.width = imgSpotify.height;
        imgSpotify.style.cursor = "pointer";
        imgSpotify.style.marginLeft = "5px";
        imgSpotify.style.marginRight = "5px";

        var imgYouTube = document.createElement('img');
        imgYouTube.src = chrome.runtime.getURL('img/youtube_logo_yellow.png');
        imgYouTube.height = imgSpotify.height;
        imgYouTube.width = imgYouTube.height;
        imgYouTube.style.cursor = "pointer";

        let songElement = document.querySelector("main h1");

        songElement?.appendChild(imgSpotify);
        songElement?.appendChild(imgYouTube);

        var song = (<HTMLElement>songElement)?.innerText ?? "";
        var artist = (<HTMLElement>document.querySelector('main a[href*="\\/artists\\/"]')).innerText;
        var title = `${artist} ${song}`;

        imgSpotify.addEventListener('click', function () {
            chrome.runtime.sendMessage(
                {
                    type: "btSpotify_OnClick",
                    title: title
                }
            );
        }, true);

        imgYouTube.addEventListener('click', function () {
            chrome.runtime.sendMessage(
                {
                    type: "btYouTube_OnClick",
                    title: title
                }
            );
        }, true);
    }
}