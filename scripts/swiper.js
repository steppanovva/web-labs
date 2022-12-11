const swiper = new Swiper(".others-section-swiper", {
    // задаем элементы для навигации - перехода к следующему или предыдущему элементу
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // элемент для отображения пагинации
    pagination: {
        el: ".swiper-pagination",
    },

    // разрешим прокрутку с помощью колеса мыши и клавиатуры
    mousewheel: true,
    keyboard: true,
});