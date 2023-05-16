// 回到頂端
const toTopFn = () => {
    $('html, body').scrollTop(0);
}
$('.to-top').on('click', toTopFn)

// 動態往上
let toUpIndex = 0;
const distance = ['-200px', '0px', '0px', '200px', '200px', '400px'];
const animationToUp = (dom) => {
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
    console.log($(animationImg[index]))
    setInterval(animationToUp, 1000, $(animationImg[index]))
});
setIntervalId01 = setInterval(animationToUp, 1000, $(animationImg[0]));
setIntervalId02 = setInterval(animationToUp, 1000, $(animationImg[1]));
setIntervalId03 = setInterval(animationToUp, 1000, $(animationImg[2]));