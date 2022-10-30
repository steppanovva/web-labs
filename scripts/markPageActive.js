function markPageActive() {
    let cur_page = document.location.pathname.split("/");
    let tableOfContent = document.getElementsByClassName("table-of-content");
    cur_page = cur_page[cur_page.length - 1];

    tableOfContent.forEach((i) => {
        if (i.includes(cur_page)) {
            tableOfContent.forEach((j) => {
                j.classList.remove("is-active")
            })
            i.classList.add("is-active")
        }
    })
}


document.addEventListener("DOMContentLoaded", markPageActive);