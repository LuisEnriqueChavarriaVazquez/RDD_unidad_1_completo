//Para escritorio
$(".navOptionsContent").on("click", function () {

    $(".navOptionsContent").removeClass("activeLinkOptionsContentUnit1");
    $(this).addClass("activeLinkOptionsContentUnit1");

});

//Para mobiles
$(".navOptionsContentMobileMenu").on("click", function () {

    $(".navOptionsContentMobileMenu").removeClass("activeLinkOptionsContentUnit1Mobile");
    $(this).addClass("activeLinkOptionsContentUnit1Mobile");

});

//Toggle para los mobiles
let iconToggle1 = 'expand_more';
let iconToggle2 = 'expand_more';
let iconToggle3 = 'expand_more';
let iconToggle4 = 'expand_more';

function validateIconToggle(iconToggle){
    let newIcon;
    if(iconToggle == 'expand_more'){
        newIcon = 'expand_less';
    }else{
        newIcon = 'expand_more';
    }

    return newIcon;
}

$( "#primeraSeccion" ).click(function() {
    iconToggle1 = validateIconToggle(iconToggle1);
    $( "#primeraSeccionIcon" ).text(iconToggle1);
    $( ".primeraSeccionHide" ).toggle();
});

$( "#segundaSeccion" ).click(function() {
    iconToggle2 = validateIconToggle(iconToggle2);
    $( "#segundaSeccionIcon" ).text(iconToggle2);
    $( ".segundaSeccionHide" ).toggle();
});

$( "#terceraSeccion" ).click(function() {
    iconToggle3 = validateIconToggle(iconToggle3);
    $( "#terceraSeccionIcon" ).text(iconToggle3);
    $( ".terceraSeccionHide" ).toggle();
});

$( "#cuartaSeccion" ).click(function() {
    iconToggle4 = validateIconToggle(iconToggle4);
    $( "#cuartaSeccionIcon" ).text(iconToggle4);
    $( ".cuartaSeccionHide" ).toggle();
});