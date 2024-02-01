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

// POPUP
$('#planet-game').click(() => window.open('https://www.oculus.com/experiences/quest/5670074199754026/','_blank'));
$('#new-game').click(() => alert("[COMING SOON] isn't out yet, come back later for access to the game."));
$('#wbs-game').click(() => window.open('https://sidequestvr.com/app/27597','_blank'));
$('#backrooms-game').click(() => alert("Welcome to the Backrooms isn't out yet, come back later for access to the game."));

// LINK TO THE HEIST
//$('#latest-game').click(() => window.open('https://www.oculus.com/experiences/quest/6808472739194566','_blank'));
$('#heist-game').click(() => window.open('https://www.oculus.com/experiences/quest/6808472739194566','_blank'));
$('#pillow-game').click(() => window.open('https://sidequestvr.com/app/10414/pillow-fight-vr','_blank'));
