// MOBILE MENU
let menuVisible = false;

$('#menu-icon').click(() => {
    console.log("MENU VISIBLE: " + menuVisible);
    menuVisible ? $('#menu-container').css({"display": "none"}) : $('#menu-container').css({"display": "flex"});
    menuVisible ? menuVisible = false : menuVisible = true;
});