chrome.runtime.onInstalled.addListener(
	function (details) {
		chrome.storage.local.clear(() => {
			//todo look for global and union
			chrome.storage.local.set(
				{
					options: {
						yt_genius_open_exact: false,
						yt_spotify_match: "nothing",
						yt_title_format_rules: [
							{
								target: "ft.",
								replace: ""
							},
							{
								target: "feat.",
								replace: ""
							},
							{
								target: " x ",
								replace: " "
							},
							{
								target: " X ",
								replace: " "
							},
							{
								target: " - ",
								replace: " "
							},
						]
					}
				})
		});
	}
)

chrome.runtime.onMessage.addListener(
	function (request, sender, sendResponse) {
		if (request.type == "btSpotify_OnClick") {
			searchOnSpotify(request.title);
		}
		else if (request.type == "btGenius_OnClick") {
			searchOnGenius(request.title);
		}
		else if (request.type == "btYouTube_OnClick") {
			searchOnYouTube(request.title);
		}
	}
);

function searchOnSpotify(title: string): void {
	var newURL = "https://open.spotify.com/search/" + encodeURIComponent(title);
	chrome.tabs.create({ url: newURL });
}

function searchOnGenius(title: string): void {
	var newURL = "https://genius.com/search?q=" + encodeURIComponent(title);
	chrome.tabs.create({ url: newURL });
}

function searchOnYouTube(title: string): void {
	var newURL = "https://www.youtube.com/results?search_query=" + encodeURIComponent(title);
	chrome.tabs.create({ url: newURL });
}
