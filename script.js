// 滾輪條大於0觸發，改變header背景顏色
function changeHeaderBgColor() {
    $(window).scrollTop() > 0 ?
        $('header').addClass('bg-light').addClass('shadow-c') : $('header').removeClass('bg-light').removeClass('shadow-c')
}
// changeHeaderBgColor()