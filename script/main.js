const traducciones = {
    es: {
        titulo: "Sara y Doniel",
        mensaje1: "¡Nos casamos!",
        dias:"Días",
        horas:"Horas",
        minutos: "Minutos",
        segundos: "Segundos",
        p1:"Estamos muy felices",
        p2:"de tenerte con nosotros",
        p3:"en este día",
        p4:"tan especial ...",
        info:"Infomación general",
        ubi:"Las Palmas de Gran Canaria",
        fecha:"05 de Diciembre de 2026"
  
    },

    it: {
        titulo: "Sara e Doniel",
        mensaje1: "Ci sposiamo!",
        dias:"Giorni",
        horas:"Ore",
        minutos: "minuti",
        segundos: "secondi",
        p1:"Siamo molto felici",
        p2:"di averti con noi",
        p3:"in questo giorno",
        p4:"così speciale...",
        info:"Informazioni generali",
        ubi:"Las Palmas de Gran Canaria",
        fecha:"05 dicembre 2026"

    },

};

function cambiarIdioma(idioma){
    document.getElementById("titulo").textContent =
    traducciones[idioma].titulo;

    document.getElementById("mensaje1").textContent =
    traducciones[idioma].mensaje1;

    document.getElementById("d").textContent =
    traducciones[idioma].dias;

    document.getElementById("h").textContent =
    traducciones[idioma].horas;

    document.getElementById("m").textContent =
    traducciones[idioma].minutos;

    document.getElementById("s").textContent =
    traducciones[idioma].segundos;

    document.getElementById("p1").textContent =
    traducciones[idioma].p1;

    document.getElementById("p2").textContent =
    traducciones[idioma].p2;

    document.getElementById("p3").textContent =
    traducciones[idioma].p3;

    document.getElementById("p4").textContent =
    traducciones[idioma].p4;

    document.getElementById("info").textContent =
    traducciones[idioma].info;

    document.getElementById("ubi").textContent =
    traducciones[idioma].ubi;

    document.getElementById("fecha").textContent =
    traducciones[idioma].fecha;


    document.documentElement.lang = idioma;

    //Guardar idioma elegido
    localStorage.setItem("idioma", idioma);
}

//Eventos para las bandera
document.querySelectorAll(".idiomas a")
.forEach(enlace => {
    enlace.addEventListener("click", function(e){
        e.preventDefault();

        const idioma = this.dataset.lang;

        cambiarIdioma(idioma);
    });
});

//Cargar idioma guardado
const idiomaGuardado = localStorage.getItem("idioma");

if(idiomaGuardado){

    cambiarIdioma(idiomaGuardado);

}else{

    //Si no hay idioma guardado usar navegador
    const idiomaUsuario = navigator.language;

    if(idiomaUsuario.startsWith("it")){
        cambiarIdioma("it");

    }else{
        cambiarIdioma("es");
    };
};

// CONTEO REGRESIVO

const fechaBoda = new Date("2026-12-05T12:00:00");

function actualizarContador(){
    const ahora = new Date();
    const diferencia = fechaBoda - ahora;

    if(diferencia<=0){
        document.querySelector(".contador").innerHTML =
        "<h2>¡Llegó el gran día!</h2>";

        return;
    }

    const dias = Math.floor(
        diferencia / (1000 * 60 * 60 *24)
    );

    const horas = Math.floor(
        (diferencia / (1000 * 60 * 60)) % 24
    );

    const minutos = Math.floor(
        (diferencia / (1000 * 60)) % 60
    );

    const segundos = Math.floor(
        (diferencia / 1000) % 60
    );

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;

}

actualizarContador();

setInterval(actualizarContador,1000);