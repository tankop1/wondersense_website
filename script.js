// LOADING ANIMATION
readyToLoad = false;

setTimeout(() => {
    readyToLoad = true;
}, 2000);

$(document).ready(() => {
    if (readyToLoad) {
        $('#loading').css({'display': 'none'});
    }

    else {
        setTimeout(() => {
            $('#loading').css({'display': 'none'});
        }, 2500);
    }
});

// MOBILE MENU
let menuVisible = false;

$('#menu-icon').click(() => {
    console.log("MENU VISIBLE: " + menuVisible);
    menuVisible ? $('#menu-container').css({"display": "none"}) : $('#menu-container').css({"display": "flex"});
    menuVisible ? menuVisible = false : menuVisible = true;
});