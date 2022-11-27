const preloader = document.querySelector(".preloader");
const reviews = document.querySelector(".reviews");
const reviewsList = document.querySelector(".reviews-list");
const error = document.querySelector(".error");


window.addEventListener("load", async () => {

    if (preloader.classList.contains('loaded'))
        preloader.classList.remove('loaded')

    reviews.style.display = "none";
    error.style.display = "none";


    fetch("https://jsonplaceholder.typicode.com/comments")
        .then((data) => data.json())
        .then((data) => {
            let filtrationConst = Math.floor(Math.random() * 100);
            let dataSlice = data.slice(filtrationConst * 5, (filtrationConst + 1) * 5);
            dataSlice.forEach(({email, name, body}) => {
                reviewsList.insertAdjacentHTML("afterbegin",
                    `<div class="reviews-list__item">
                          <p>${body}</p>
                          <p><b>${name}</b> (<i>${email}</i>)</p>
                          </div>`);
            });

            preloader.classList.add('loaded_hiding')
            window.setTimeout(function () {
                preloader.classList.add('loaded');
                preloader.classList.remove('loaded_hiding');
            }, 500);

            reviews.style.display = "block";
            error.style.display = "none";
        })

        .catch(() => {
            preloader.classList.add('loaded')
            reviews.style.display = "none";
            error.style.display = "block";
        });
});