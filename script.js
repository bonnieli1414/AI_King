// 回到頂端
const toTopFn = () => {
    $('html, body').scrollTop(0);
}
$('.to-top').on('click', toTopFn)

// 動態往上
let toUpIndex = 0;
const distance = ['-200px', '0px', '0px', '200px', '200px', '400px'];
const animationToUp = (dom, index) => {
    // console.log(distance[toUpIndex], index)
    dom.css('bottom', distance[toUpIndex])
    toUpIndex++;
    if (distance[toUpIndex] >= '400px') {
        dom.css('display', 'none')
        toUpIndex = 0
    } else if (distance[toUpIndex] === '-200px') {
        dom.css('display', 'none')
    } else {
        dom.css('display', 'block')
    }
}

const animationImg = $('.animation img')
animationImg.each((index, element) => {
    setInterval(animationToUp, 1000, $(animationImg[element]), index)
});
setIntervalId01 = setInterval(animationToUp, 1000, $(animationImg[0]), 1);
setIntervalId02 = setInterval(animationToUp, 1000, $(animationImg[1]), 2);
setIntervalId03 = setInterval(animationToUp, 1000, $(animationImg[2]), 3);