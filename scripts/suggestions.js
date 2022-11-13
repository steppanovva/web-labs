const form = document.querySelector(".suggest-form");
const input = document.querySelector(".suggest-form-input");
const list = document.querySelector(".suggest-ol");
const localStorageKey = "suggestion";

function getSuggestions() {
    let suggestions = JSON.parse(localStorage.getItem(localStorageKey));
    if (!suggestions)
        return [];
    return suggestions;
}

function addSuggestionItem(value) {
    let suggestions = getSuggestions();
    suggestions.unshift(value);
    localStorage.setItem(localStorageKey, JSON.stringify(suggestions));
}

function deleteSuggestionItem(value) {
    let suggestions = getSuggestions();
    suggestions = suggestions.filter((item) => item !== value);
    localStorage.setItem(localStorageKey, JSON.stringify(suggestions));
}

function insertSuggestion(suggestion) {
    list.insertAdjacentHTML("beforeend",
        `<li class="suggest-ol-item">
                <p>${suggestion}</p>
                <button class="suggest-ol-item__deleteBtn">x</button>
              </li>`);
}

window.addEventListener("load", () => {
    let suggestions = getSuggestions();
    suggestions.forEach((suggestion) => {
        insertSuggestion(suggestion);
    });
    let deleteBtns = document.querySelectorAll(".suggest-ol-item__deleteBtn");
    deleteBtns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            deleteSuggestionItem(suggestions[i]);
            list.removeChild(btn.parentElement);
        });
    });
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let suggestion = input.value;
    if (!suggestion)
        return;
    insertSuggestion(suggestion);
    input.value = "";
    addSuggestionItem(suggestion);
    let deleteBtns = document.querySelectorAll(".suggest-ol-item__deleteBtn");
    deleteBtns[deleteBtns.length - 1].addEventListener("click", () => {
        deleteSuggestionItem(suggestion);
        list.removeChild(deleteBtns[deleteBtns.length - 1].parentElement);
    });
});