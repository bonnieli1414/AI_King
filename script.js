// 回到頂端
const toTopFn = () => {
    $('html, body').scrollTop(0);
}
$('.to-top').on('click', toTopFn)

// 動態往上
let toUpIndex = 0;
const distance = ['-200px', '-10px', '0px', '200px', '210px'];
const animationToUp = (dom) => {
    dom.css('bottom', distance[toUpIndex % distance.length])
    toUpIndex++;
    console.log(distance[toUpIndex % distance.length])
    if (distance[toUpIndex % distance.length]==="-200px" || distance[toUpIndex % distance.length]==="-10px"){
        dom.css('opacity', 0)
    }else {
        dom.css('opacity', 1)
    }
}
setIntervalId01 = setInterval(animationToUp, 1000, $($('.animation img')[0]));
setIntervalId02 = setInterval(animationToUp, 1000, $($('.animation img')[1]));
setIntervalId03 = setInterval(animationToUp, 1000, $($('.animation img')[2]));