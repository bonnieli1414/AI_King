// 回到頂端
const toTopFn = () => {
    $('html, body').scrollTop(0);
}
$('.to-top').on('click', toTopFn)

// 引入swiper套件
var swiper = new Swiper(".mySwiper-partner", {
    watchSlidesProgress: true,
    slidesPerView: 5,
});
var swiper = new Swiper(".mySwiper-comment", {
    pagination: {
        el: ".swiper-pagination",
    },
});
