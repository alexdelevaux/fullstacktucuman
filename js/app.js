const cuerpo = $("body");
const noche = $(".night");
const barranav = $(".navbar");
const barrabusq = $(".form-control");
const botonbusq = $(".botonbusq");
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
        
        botonbusq.removeClass("btn-outline-light").addClass("btn-outline-primary");
    }
    else {
        noche.text('Night Mode OFF');
        changeDayNight(noche,"color","white");
        changeDayNight(barranav,"background-color","rgb(17, 73, 146)");
        changeDayNight(cuerpo,"background-color","white");

        botonbusq.removeClass("btn-outline-primary").addClass("btn-outline-light");
    }
    
    
});