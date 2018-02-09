const cuerpo = $("body");
const noche = $(".night");
const barranav = $(".navbar");
const barrabusq = $(".form-control");
const botonbusq = $(".botonbusq");
const card = $(".card");
const cardfooter = $(".card-footer");
const cardtitulo = $(".card-title");
const parrafos = $("p");
const titulos = $("h2");

var bandera = 0;


function changeDayNight(elemento,propiedad,valor) {
    elemento.css(propiedad,valor);
}

noche.on("click",function() {
    bandera++;
    
    if (bandera%2 != 0) {
        noche.html('<strong>Night Mode ON</strong>');
        changeDayNight(noche,"color","rgb(82, 209, 82)");
        changeDayNight(barranav,"background-color","rgb(9, 51, 105)");
        changeDayNight(cuerpo,"background-color","rgb(68, 69, 71)");
        changeDayNight(barrabusq,"background-color","rgb(68, 69, 71)");
        changeDayNight(barrabusq,"color","white");
        changeDayNight(card,"background-color","rgb(89, 90, 91)");
        changeDayNight(cardfooter,"background-color","rgb(47, 48, 48)");
        changeDayNight(cardtitulo,"color","rgb(196, 196, 196)");
        changeDayNight(parrafos,"color","white");
        botonbusq.removeClass("btn-outline-light").addClass("btn-outline-primary");
        changeDayNight(titulos,"color","rgb(88, 164, 235)");
    }
    else {
        noche.text('Night Mode OFF');
        changeDayNight(noche,"color","white");
        changeDayNight(barranav,"background-color","rgb(17, 73, 146)");
        changeDayNight(cuerpo,"background-color","white");
        changeDayNight(barrabusq,"background-color","white");
        changeDayNight(barrabusq,"color","initial");
        changeDayNight(card,"background-color","initial");
        changeDayNight(cardfooter,"background-color","initial");
        changeDayNight(cardtitulo,"color","initial");
        changeDayNight(parrafos,"color","initial");
        botonbusq.removeClass("btn-outline-primary").addClass("btn-outline-light");
        changeDayNight(titulos,"color","initial");
    }
    
    
});