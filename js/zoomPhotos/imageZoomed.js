//Zoom manual
function zoom(e) {
    var zoomer = e.currentTarget;
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
    e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
    x = offsetX / zoomer.offsetWidth * 100
    y = offsetY / zoomer.offsetHeight * 100
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
}

//Carousel de imagenes (Con click)
fsLightboxInstances["vector1"].props.onOpen = function () {}
fsLightboxInstances["vector2"].props.onOpen = function () {}
fsLightboxInstances["vector3"].props.onOpen = function () {}
fsLightboxInstances["vector4"].props.onOpen = function () {}
fsLightboxInstances["vector5"].props.onOpen = function () {}
fsLightboxInstances["tabla1"].props.onOpen = function () {}
fsLightboxInstances["tabla2"].props.onOpen = function () {}


fsLightboxInstances["tuto1"].props.onOpen = function () {}
fsLightboxInstances["tuto2"].props.onOpen = function () {}
fsLightboxInstances["tuto3"].props.onOpen = function () {}
fsLightboxInstances["tuto4"].props.onOpen = function () {}
fsLightboxInstances["tuto5"].props.onOpen = function () {}
fsLightboxInstances["tuto6"].props.onOpen = function () {}