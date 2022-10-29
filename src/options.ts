//get element references
const btnAddRule = document.getElementById("add_rule");
const btnRestoreDef = document.getElementById("restore_default");
const btnGetSync = document.getElementById("get_sync");
const btnSetSync = document.getElementById("set_sync");
const cbYtGeniusOpenExact = document.getElementById("openMatchGenius") as HTMLInputElement;

//addEventListeners
btnAddRule?.addEventListener("click", () => createListItem({ target: "", replace: "" }))
btnGetSync?.addEventListener("click", getOptionsSync);
btnSetSync?.addEventListener("click", saveOptionsSync);
btnRestoreDef?.addEventListener('click', restoreDefaults)
cbYtGeniusOpenExact?.addEventListener("change", set_yt_genius_open_exact);
(document.querySelectorAll('input[name="genderS"]') as NodeListOf<HTMLInputElement>).forEach(radio => radio.addEventListener("change", set_yt_spotify_match))

//init page with options from storage
chrome.storage.local.get("options", options => {
    createListItems(options);
    (document.querySelector(`input[value=${options["options"].yt_spotify_match}]`) as HTMLInputElement).checked = true;
    cbYtGeniusOpenExact.checked = options["options"].yt_genius_open_exact;
});

var oldInputValue: string;


function createListItems(options: { [key: string]: any; }): void {
    console.log(options["options"]);

    var rules = options["options"]?.yt_title_format_rules as any[];
    rules?.forEach((rule) => createListItem(rule));
}

function createListItem(rule: { target: string; replace: string; }) {
    // <li>
    var li = document.createElement("li");
    document.getElementById("title_format_list")?.appendChild(li);

    // <div class="listitem_container">
    var container = document.createElement("div");
    container.classList.add("listitem_container");
    li.appendChild(container);

    // <label style="padding-right: 6px;> Replace </label>
    var label1 = document.createElement("label");
    label1.innerText = "Replace";
    label1.style.paddingRight = "6px";
    container.appendChild(label1);

    // <input type="text" class="target" placeholder="enter text here"> rule.target </input>
    var input1 = document.createElement("input");
    input1.type = "text";
    input1.classList.add("target");
    input1.placeholder = "enter text here"
    input1.value = rule.target;
    container.appendChild(input1);
    input1.addEventListener("focus", function (this) { oldInputValue = this.value });
    input1.addEventListener("blur", set_yt_title_format_rules_target);

    // <label style = "padding: 0px 6px>with</label>
    var label2 = document.createElement("label");
    label2.innerText = "with";
    label2.style.padding = "0px 6px";
    container.appendChild(label2);

    // <input type="text" class="target" placeholder="nothing"> rule.replace </input>
    var input2 = document.createElement("input");
    input2.type = "text";
    input2.classList.add("replace");
    input2.placeholder = "nothing"
    input2.value = rule.replace;
    container.appendChild(input2);
    input2.addEventListener("blur", set_yt_title_format_rules_replace);

    // <div class="circle_button_container hidden-item">
    var divCircle = document.createElement("div");
    divCircle.classList.add("circle_button_container", "hidden-item");
    container.appendChild(divCircle);

    // <button class="fas fa-minus remove_rule_button" title = "Remove rule"></button>
    var btn = document.createElement("button");
    btn.addEventListener('click', deleteRule);
    btn.classList.add("fas", "fa-minus", "remove_rule_button");
    btn.title = "Remove rule";
    divCircle.appendChild(btn);


    function deleteRule(this: HTMLButtonElement, _ev: Event): void {
        chrome.storage.local.get("options", options => {
            var target = (this.parentElement?.parentElement?.querySelector(".target") as HTMLInputElement).value;
            li.remove();
            var rules = (options["options"].yt_title_format_rules as { target: string, replace: string }[]);
            options["options"].yt_title_format_rules = rules.filter(r => r.target != target);
            saveOptionsLocal(options);
        });
    }
}

function restoreDefaults(): void {
    var list = document.getElementById("title_format_list");
    while (list?.firstChild) list.removeChild(list.firstChild);
    chrome.storage.local.get("options", options => createListItems(options));
}

function set_yt_title_format_rules_target(this: HTMLInputElement, _ev: Event): void {
    chrome.storage.local.get("options", options => {
        var target = (this.parentElement?.querySelector(".target") as HTMLInputElement).value;
        var replace = (this.parentElement?.querySelector(".replace") as HTMLInputElement).value;

        var rules = (options["options"].yt_title_format_rules as { target: string, replace: string }[]);
        var rule = rules.find(r => r.target == oldInputValue);
        if (rule != null) rule.target = target;
        else rules.push({ target, replace });
        saveOptionsLocal(options);
    });
}

function set_yt_title_format_rules_replace(this: HTMLInputElement, ev: Event): void {
    chrome.storage.local.get("options", options => {
        var target = (this.parentElement?.querySelector(".target") as HTMLInputElement).value;
        var replace = (this.parentElement?.querySelector(".replace") as HTMLInputElement).value;

        var rules = (options["options"].yt_title_format_rules as { target: string, replace: string }[]);
        var rule = (options["options"].yt_title_format_rules as { target: string, replace: string }[]).find(r => r.target == target);
        if (rule != null) rule.replace = replace;
        else rules.push({ target, replace });
        saveOptionsLocal(options);
    });
}

function set_yt_spotify_match(): void {
    var value = (<HTMLInputElement>document.querySelector('input[name="genderS"]:checked'))?.value;
    chrome.storage.local.get("options", options => {
        options["options"].yt_spotify_match = value;
        saveOptionsLocal(options);
    });
}

function set_yt_genius_open_exact(): void {
    chrome.storage.local.get("options", options => {
        options["options"].yt_genius_open_exact = cbYtGeniusOpenExact.checked;
        saveOptionsLocal(options);
    });
}

function saveOptionsLocal(options: { [key: string]: any; }): void {
    chrome.storage.local.set({ "options": options["options"] });
}

function getOptionsSync(): void {
    chrome.storage.sync.get("options", options => {
        chrome.storage.local.set({ "options": options["options"] });
    });
}

function saveOptionsSync(): void {
    chrome.storage.local.get("options", options => {
        chrome.storage.sync.set({ "options": options["options"] });
    });
}