// 回到頂端
const toTopFn = () => {
    $('html, body').scrollTop(0);
}
$('.to-top').on('click', toTopFn)

// 動態往上
let toUpIndex = 0;
const distance = ['-200px', '0px', '0px', '200px'];
const animationToUp = (dom) => {
    dom.css('bottom', distance[toUpIndex % distance.length])
toUpIndex++;

}
setIntervalId01 = setInterval(animationToUp, 1000, $($('.animation img')[0]));
setIntervalId02 = setInterval(animationToUp, 1000, $($('.animation img')[1]));
setIntervalId03 = setInterval(animationToUp, 1000, $($('.animation img')[2]));