function refreshScrollPosition() {
    history.scrollRestoration = "manual";
    window.onbeforeunload = function() {
        window.scrollTo(0, 0);
    }
}

refreshScrollPosition();
// var scrollHeight = 0;


// setTimeout(() => {
//     startInterVal()
// }, 500);


// function startInterVal() {
//     scrollInterval = setInterval(() => {
//         isReachedScrollMaxHeight(scrollHeight)
//         console.log(scrollHeight)
//         scrollHeight += 5;
//         window.scrollTo(0, scrollHeight);
//     }, 25);
// }

// function isReachedScrollMaxHeight() {
//     const scrollMaxHeight = 750;
//     if (scrollHeight > scrollMaxHeight) {
//         clearInterval(scrollInterval)
//         window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
//         console.log("reached limit")
//     }
// }


setTimeout(() => {
    window.scrollTo(0, 150);
}, 2500);
setTimeout(() => {
    window.scrollTo(0, 300);
}, 3000);
setTimeout(() => {
    window.scrollTo(0, 450);
}, 3500);
setTimeout(() => {
    window.scrollTo(0, 600);
}, 4000);
setTimeout(() => {
    window.scrollTo(0, 750);
}, 5000);
setTimeout(() => {
    window.scrollTo(0, 900);
}, 6000);