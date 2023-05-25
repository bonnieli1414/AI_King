// 回到頂端
const toTopFn = () => {
    $('html, body').scrollTop(0);
}
$('.to-top').on('click', toTopFn)

// 引入swiper套件
var swiper = new Swiper(".mySwiper", {
    watchSlidesProgress: true,
    slidesPerView: 5,
});
