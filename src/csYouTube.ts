namespace YouTube {
    console.log("YouTubeConnect loading...");

    const spotifyLogo = 'M 12 0.0390625 C 5.390625 0.0390625 0.0351562 5.394531 0.0351562 12.003906 C 0.0351562 18.609375 5.390625 23.964844 12 23.964844 C 18.605469 23.964844 23.960938 18.609375 23.960938 12.003906 C 23.960938 5.394531 18.605469 0.0390625 12 0.0390625 Z M 17.484375 17.292969 C 17.269531 17.644531 16.8125 17.757812 16.460938 17.539062 C 13.652344 15.824219 10.113281 15.4375 5.949219 16.386719 C 5.550781 16.480469 5.148438 16.226562 5.058594 15.828125 C 4.964844 15.425781 5.214844 15.023438 5.617188 14.933594 C 10.175781 13.890625 14.085938 14.339844 17.238281 16.269531 C 17.589844 16.484375 17.703125 16.941406 17.484375 17.292969 Z M 18.949219 14.035156 C 18.679688 14.476562 18.105469 14.613281 17.667969 14.34375 C 14.453125 12.367188 9.550781 11.792969 5.746094 12.949219 C 5.253906 13.097656 4.730469 12.820312 4.582031 12.328125 C 4.433594 11.835938 4.710938 11.3125 5.203125 11.164062 C 9.546875 9.847656 14.949219 10.484375 18.644531 12.753906 C 19.082031 13.023438 19.21875 13.597656 18.949219 14.035156 Z M 19.074219 10.644531 C 15.21875 8.355469 8.859375 8.144531 5.175781 9.261719 C 4.585938 9.441406 3.960938 9.105469 3.78125 8.515625 C 3.601562 7.921875 3.9375 7.300781 4.527344 7.121094 C 8.753906 5.835938 15.777344 6.085938 20.21875 8.71875 C 20.75 9.035156 20.925781 9.722656 20.609375 10.253906 C 20.292969 10.785156 19.605469 10.960938 19.078125 10.644531 Z M 19.074219 10.644531';
    const geniusLogo = [
        'M 5.222656 5.226562 C 4.660156 5.820312 4.234375 6.59375 4.003906 7.410156 C 3.851562 7.960938 3.796875 8.980469 3.890625 9.546875 C 4.054688 10.578125 4.546875 11.570312 5.269531 12.324219 C 5.621094 12.6875 6.125 13.078125 6.25 13.078125 C 6.398438 13.078125 6.414062 12.9375 6.296875 12.570312 C 5.746094 10.84375 6.132812 8.953125 7.34375 7.445312 L 7.6875 7.023438 L 7.683594 6.039062 C 7.679688 5.246094 7.664062 5.046875 7.609375 4.992188 C 7.550781 4.9375 7.355469 4.921875 6.523438 4.921875 L 5.507812 4.921875 Z M 5.222656 5.226562',
        'M 11.65625 4.976562 C 11.59375 5.03125 11.582031 5.199219 11.570312 6.304688 L 11.554688 7.570312 L 11.40625 7.890625 C 11.132812 8.460938 10.589844 8.886719 9.984375 9 C 9.640625 9.066406 9.605469 9.109375 9.660156 9.398438 C 9.851562 10.421875 10.878906 11.148438 11.890625 10.96875 C 12.320312 10.898438 12.660156 10.726562 12.957031 10.433594 C 13.449219 9.957031 13.546875 9.625 13.546875 8.433594 C 13.546875 7.824219 13.566406 7.546875 13.601562 7.507812 C 13.636719 7.476562 13.800781 7.453125 14 7.453125 C 14.410156 7.453125 14.433594 7.425781 14.34375 7.046875 C 14.210938 6.460938 13.71875 5.460938 13.378906 5.085938 L 13.226562 4.921875 L 12.484375 4.921875 C 11.957031 4.921875 11.714844 4.941406 11.65625 4.976562 Z M 11.65625 4.976562',
        'M 17.5 5.046875 C 17.40625 5.082031 17.429688 5.230469 17.601562 5.785156 C 18.492188 8.578125 17.96875 11.617188 16.179688 13.953125 C 14.96875 15.542969 13.21875 16.703125 11.273438 17.199219 C 10.46875 17.40625 10.039062 17.457031 9.070312 17.457031 C 7.988281 17.457031 7.355469 17.367188 6.460938 17.082031 C 5.78125 16.867188 5.648438 16.84375 5.609375 16.941406 C 5.5625 17.058594 5.609375 17.125 5.949219 17.410156 C 7.085938 18.375 8.394531 19.027344 9.78125 19.3125 C 12.050781 19.777344 14.339844 19.320312 16.3125 18.007812 C 16.984375 17.5625 18.007812 16.5625 18.484375 15.890625 C 18.875 15.332031 19.402344 14.28125 19.613281 13.640625 C 20.179688 11.914062 20.179688 10.046875 19.613281 8.292969 C 19.40625 7.648438 18.882812 6.609375 18.492188 6.070312 C 18.183594 5.632812 17.644531 5.011719 17.585938 5.019531 C 17.570312 5.019531 17.527344 5.035156 17.5 5.046875 Z M 17.5 5.046875'
    ];

    let lastContextMenuButton: HTMLElement;
    document.addEventListener('mousemove', () => {
        var menu = document.querySelector('#actions-inner > div#menu > ytd-menu-renderer')
        if (menu) {
            addCustomButtonsVideo(menu);
        }

        var owner = document.querySelector("div#owner") as HTMLDivElement;
        if (owner) {
            owner.style.minWidth = "unset";
            owner.style.flex = '0 0 auto';
        }
    }, true);
    document.onmousedown = function (e) {
        if (e.target instanceof Element) {
            var parent = e.target.closest('button');
            if (parent && parent.id == "button" && parent.className == "style-scope yt-icon-button") {
                console.log("YouTubeConnect click on video registered", lastContextMenuButton);
                lastContextMenuButton = parent;
            }
        }
    };
    startObserver();

    function startObserver(): void {
        var dropdownObserver = new MutationObserver(function () {
            if (!document.querySelector('#itemSpotify')) {
                var contextMenuEntry = document.querySelector('#items > ytd-menu-service-item-renderer:last-child');
                if (contextMenuEntry) addCustomButtonsDropdown(contextMenuEntry);
                // dropdownObserver.disconnect();
            }
        });
        console.log("YouTubeConnect start observing...");
        dropdownObserver.observe(document, {
            childList: true,
            subtree: true
        });
    }

    function addCustomButtonsVideo(found: Element): void {
        createButton("button-spotify", [spotifyLogo], function btSpotify_OnClick() {
            getTitle().then(title => chrome.runtime.sendMessage({
                type: "btSpotify_OnClick",
                title: title
            }));
        });
        createButton("button-genius", geniusLogo, function btGenius_OnClick() {
            getTitle().then(title => chrome.runtime.sendMessage({
                type: "btGenius_OnClick",
                title: title
            }));
        });

        async function getTitle(): Promise<string> {
            var title = (<HTMLElement>document.querySelector("#container > h1 > yt-formatted-string"))?.innerText
            return formatTitle(title);
        }

        async function createButton(id: string, pathStrings: string[], onClick: ((this: HTMLButtonElement, ev: MouseEvent) => any)) {
            if (document.getElementById(id)) return;

            console.log("YouTubeConnect adding button", id);

            var buttonShape = document.createElement("yt-button-shape");
            buttonShape.id = id;
            buttonShape.style.marginLeft = "8px";
            buttonShape.style.flex = "none";

            var button = document.createElement("button");
            button.classList.add(
                "yt-spec-button-shape-next",
                "yt-spec-button-shape-next--tonal",
                "yt-spec-button-shape-next--mono",
                "yt-spec-button-shape-next--size-m",
                "yt-spec-button-shape-next--icon-button"
            );
            button.addEventListener("click", onClick);
            var spec = document.createElement("div");
            spec.classList.add("yt-spec-button-shape-next__icon");

            var icon = document.createElement("yt-icon");
            icon.style.height = "24px";
            icon.style.width = "24px";

            var svg = document.createElementNS('http://www.w3.org/2000/svg', "svg");
            svg.classList.add("style-scope", "yt-icon");
            svg.setAttribute("viewBox", "0 0 24 24");
            svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
            svg.setAttribute("focusable", "false");
            svg.setAttribute("style", "pointer-events: none; display: block; width: 100%; height: 100%;");

            var g = document.createElementNS('http://www.w3.org/2000/svg', "g");
            g.classList.add("style-scope", "yt-icon");

            var paths: SVGPathElement[] = [];
            pathStrings.forEach(pathString => {
                var path = document.createElementNS('http://www.w3.org/2000/svg', "path");
                path.setAttributeNS(null, "d", pathString);
                path.classList.add("style-scope", "yt-icon");
                paths.push(path);
            });

            var touch = document.createElement("yt-touch-feedback-shape");
            touch.style.borderRadius = "inherit";

            var response = document.createElement("div");
            response.classList.add("yt-spec-touch-feedback-shape", "yt-spec-touch-feedback-shape--touch-response");

            var stroke = document.createElement("div");
            stroke.classList.add("yt-spec-touch-feedback-shape__stroke");

            var fill = document.createElement("div");
            fill.classList.add("yt-spec-touch-feedback-shape__fill");

            found.appendChild(buttonShape);
            buttonShape.appendChild(button);
            button.appendChild(spec);
            button.appendChild(touch);
            spec.appendChild(icon);
            icon.appendChild(svg);
            svg.appendChild(g);
            paths.forEach(path => g.appendChild(path));
            touch.appendChild(response);
            response.appendChild(stroke);
            response.appendChild(fill);
        }
    }

    (window as any).addCustomButtonsDropdown = addCustomButtonsDropdown;
    function addCustomButtonsDropdown(contextMenuEntry: Element): void {
        console.log("YouTubeConnect found dropdown", contextMenuEntry);

        contextMenuEntry.setAttribute("has-separator", "");

        createItem("itemGenius", "Find on Genius", geniusLogo, function btSpotify_OnClick() {
            getTitle().then(title =>
                chrome.runtime.sendMessage(
                    {
                        type: "btGenius_OnClick",
                        title: title
                    }
                ));
        });

        createItem("itemSpotify", "Find on Spotify", [spotifyLogo], function btGenius_OnClick() {
            getTitle().then(title =>
                chrome.runtime.sendMessage(
                    {
                        type: "btSpotify_OnClick",
                        title: title
                    }
                ));
        });

        function createItem(id: string, text: string, pathStrings: string[], onClick: (this: HTMLElement, ev: MouseEvent) => any) {
            console.log("YouTubeConnect adding item", id, text);

            const renderer = document.createElement('ytd-menu-service-item-renderer');
            renderer.id = id;
            renderer.setAttribute('class', 'style-scope ytd-menu-popup-renderer');
            renderer.setAttribute('system-icons', '');
            renderer.setAttribute('role', 'menuitem');
            renderer.setAttribute('use-icons', '');
            renderer.setAttribute('tabindex', '-1');
            renderer.setAttribute('aria-selected', 'false');
            renderer.addEventListener("click", onClick);

            const paperItem = document.createElement('tp-yt-paper-item');
            paperItem.setAttribute('class', 'style-scope ytd-menu-service-item-renderer');
            paperItem.setAttribute('role', 'option');
            paperItem.setAttribute('tabindex', '0');
            paperItem.setAttribute('aria-disabled', 'false');

            const ytIcon = document.createElement('yt-icon');
            ytIcon.setAttribute('class', 'style-scope ytd-menu-service-item-renderer');

            const spanIconShape = document.createElement('span');
            spanIconShape.setAttribute('class', 'yt-icon-shape yt-spec-icon-shape');

            const divIcon = document.createElement('div');
            divIcon.setAttribute('style', 'width: 100%; height: 100%; display: block; fill: currentcolor;');

            const svgIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svgIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
            svgIcon.setAttribute('enable-background', 'new 0 0 24 24');
            svgIcon.setAttribute('height', '24');
            svgIcon.setAttribute('viewBox', '0 0 24 24');
            svgIcon.setAttribute('width', '24');
            svgIcon.setAttribute('focusable', 'false');
            svgIcon.setAttribute('aria-hidden', 'true');
            svgIcon.setAttribute('style', 'pointer-events: none; display: inherit; width: 100%; height: 100%;');

            var paths: SVGPathElement[] = [];
            pathStrings.forEach(pathString => {
                var path = document.createElementNS('http://www.w3.org/2000/svg', "path");
                path.setAttributeNS(null, "d", pathString);
                path.classList.add("style-scope", "yt-icon");
                paths.push(path);
            });

            const formattedString = document.createElement('yt-formatted-string');
            formattedString.setAttribute('class', 'style-scope ytd-menu-service-item-renderer');
            formattedString.textContent = text;

            paperItem.appendChild(ytIcon);
            paperItem.appendChild(formattedString);
            renderer.appendChild(paperItem);

            contextMenuEntry.insertAdjacentElement("afterend", renderer);

            var string = renderer.getElementsByTagName("yt-formatted-string")[0];
            if (string) {
                string.removeAttribute("is-empty");
                string.innerHTML = text;
            }

            paths.forEach(path => svgIcon.appendChild(path));
            divIcon.appendChild(svgIcon);
            spanIconShape.appendChild(divIcon);
            ytIcon.appendChild(spanIconShape);
        }

        async function getTitle(): Promise<string> {
            console.log("YouTubeConnect looking for title...");

            //get details div or the playlist element for playlists
            var detailsDiv = lastContextMenuButton.parentElement;
            while (isVideoContainer()) {
                if (detailsDiv?.parentElement != null)
                    detailsDiv = detailsDiv?.parentElement;
                else {
                    console.error("YouTubeConnect details were not found");
                    return "";
                }
            }

            var song = (<HTMLElement>detailsDiv?.querySelector('#video-title')).innerText;
            console.log("YouTubeConnect found title", song);

            // var authorElement = <HTMLElement>detailsDiv?.querySelector('#text > a')
            //     ?? <HTMLElement>detailsDiv?.querySelector("#byline")
            //     ?? <HTMLElement>detailsDiv?.querySelector("yt-formatted-string > #text");
            // var author = authorElement?.innerText;
            // var title = `${author} ${song}`;
            return await formatTitle(song);

            function isVideoContainer() {
                return detailsDiv?.id != 'details'
                    && detailsDiv?.nodeName != 'YTD-PLAYLIST-VIDEO-RENDERER'
                    && detailsDiv?.nodeName != 'YTD-PLAYLIST-PANEL-VIDEO-RENDERER'
                    && detailsDiv?.nodeName != 'YTD-COMPACT-VIDEO-RENDERER';
            }
        }
    }

    async function formatTitle(title: string): Promise<string> {
        console.log("YouTubeConnect formatting title...");

        //apply default format rules
        if (title.includes('('))
            title = title.slice(0, title.indexOf('('));

        if (title.includes('['))
            title = title.slice(0, title.indexOf('['));

        title = title.replace(/\s+/g, ' '); //remove multiple consecutive spaces
        title = title.trim();

        //apply custom format rules
        return new Promise<string>((resolve): void => {
            try {
                chrome.storage.local.get("options", options => {
                    var rules = options["options"].yt_title_format_rules as { target: string; replace: string; }[];
                    rules.forEach((rule) => title = title.replace(rule.target, rule.replace));
                    console.log("YouTubeConnect formatted title", title);
                    resolve(title);
                })
            }
            catch (error) {
                console.error("YouTubeConnect error while formatting title", error);
                resolve(title);
            }
        });
    }
}