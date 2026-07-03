const traducciones = {
    es: {
        titulo: "¿Dónde y cuándo?",
        fecha: "05 de Diciembre de 2026",
        mensaje1:"Terraza del restaurante Barracuda",
        conf:"Confirmar asistencia",
        tiFoto:"Entrada del restaurante Barracuda",
        pp1:"Lo más importante para nosotros es poder compartir este día tan especial con ustedes y celebrar juntos un momento que recordaremos siempre.",
        pp2:"Por eso hemos preparado una celebración tipo cóctel pensada para disfrutar, brindar y crear recuerdos inolvidables: varios entrantes, paella y 5 horas de barra libre.",
        pp3:"La aportación para asistir será de 70€ por persona. Su presencia es el mejor regalo que podemos recibir, así que no hace falta ningún otro detalle.",
        pp4:"Les dejamos aquí nuestro número de cuenta:",
        pp5:"ES09 0182 6097 7102 0156 8286",
        pp6:"Por favor confirmar asistencia",
        pp7:"¡Solo te llevará un minuto!",
        pp8:"Invitados",
        pp9:"¿Vendrás a celebrar con nosotros?",
        rad1:"Sí",
        rad2:"No",
        alergias:"Intolerancias, alergias, vegetariano o vegano",
        boton:"Enviar respuesta",
        gracias1:"Gracias por confirmarnos tu asistencia",
        gracias2:"Estamos deseando compartir este día tan especial contigo.",
        fot1:"Comparte tus fotos",
        fot2:"Ayúdanos a guardar los recuerdos más especiales de este día. Comparte aquí las fotos y vídeos de esos momentos que merezca la pena recordar.❤️",
        fot3:"Subir fotos",
        dudas:"¿Tienes alguna duda?",
        dudas2:"Una vez más te damos gracias por formar parte de esto, si tienes alguna duda o necesitas hablar con nosotros aquí tienes nuestros números:",
        placeholder1:"Nombre y apellido",
        placeholder2:"Segundo invitado (opcional)",
        placeholder3:"Tercer invitado (opcional)"
    },
    it: {
        titulo: "Dove e quando?",
        fecha: "05 dicembre 2026",
        mensaje1: "Terrazza del ristorante Barracuda",
        conf: "Conferma la tua presenza",
        tiFoto: "Ingresso del ristorante Barracuda",
        pp1: "La cosa più importante per noi è poter condividere con voi questo giorno così speciale e festeggiare insieme un momento che ricorderemo per sempre.",
        pp2: "Per questo abbiamo organizzato una festa in stile cocktail, pensata per divertirci, brindare e creare ricordi indimenticabili: vari antipasti, paella e 5 ore di open bar.",
        pp3: "Il contributo per partecipare sarà di 70€ a persona. La vostra presenza è il regalo più bello che possiamo ricevere, quindi non è necessario alcun altro pensiero.",
        pp4: "Vi lasciamo qui il nostro numero di conto:",
        pp5: "ES09 0182 6097 7102 0156 8286",
        pp6: "Per favore, conferma la tua presenza",
        pp7: "Ci metterai solo un minuto!",
        pp8: "Invitati",
        pp9: "Verrai a festeggiare con noi?",
        rad1: "Sì",
        rad2: "No",
        alergias: "Intolleranze, allergie, vegetariano o vegano",
        boton: "Invia risposta",
        gracias1: "Grazie per aver confermato la tua presenza",
        gracias2: "Non vediamo l'ora di condividere questo giorno così speciale con te.",
        fot1: "Condividi le tue foto",
        fot2: "Aiutaci a conservare i ricordi più speciali di questo giorno. Condividi qui le foto e i video di quei momenti che vale la pena ricordare.❤️",
        fot3: "Carica foto",
        dudas: "Hai qualche dubbio?",
        dudas2: "Ancora una vez ti ringraziamo per far parte di tutto questo. Se hai qualche domanda o hai bisogno di parlare con noi, qui trovi i nostri numeri:",
        placeholder1: "Nome e cognome",
        placeholder2: "Secondo invitato (facoltativo)",
        placeholder3: "Terzo invitato (facoltativo)"
    }
};

function cambiarIdioma(idioma){
    document.getElementById("titulo").textContent = traducciones[idioma].titulo;
    document.getElementById("fecha").textContent = traducciones[idioma].fecha;
    document.getElementById("mensaje1").textContent = traducciones[idioma].mensaje1;
    document.getElementById("tiFoto").textContent = traducciones[idioma].tiFoto;
    document.getElementById("conf").textContent = traducciones[idioma].conf;
    document.getElementById("pp1").textContent = traducciones[idioma].pp1;
    document.getElementById("pp2").textContent = traducciones[idioma].pp2;
    document.getElementById("pp3").textContent = traducciones[idioma].pp3;
    document.getElementById("pp4").textContent = traducciones[idioma].pp4;
    document.getElementById("pp5").textContent = traducciones[idioma].pp5;
    document.getElementById("pp6").textContent = traducciones[idioma].pp6;
    document.getElementById("pp7").textContent = traducciones[idioma].pp7;
    document.getElementById("pp8").textContent = traducciones[idioma].pp8;
    document.getElementById("pp9").textContent = traducciones[idioma].pp9;
    document.getElementById("rad1").textContent = traducciones[idioma].rad1;
    document.getElementById("rad2").textContent = traducciones[idioma].rad2;
    document.getElementById("alergias").textContent = traducciones[idioma].alergias;
    document.getElementById("boton").textContent = traducciones[idioma].boton;
    document.getElementById("gracias1").textContent = traducciones[idioma].gracias1;
    document.getElementById("gracias2").textContent = traducciones[idioma].gracias2;
    document.getElementById("fot1").textContent = traducciones[idioma].fot1;
    document.getElementById("fot2").textContent = traducciones[idioma].fot2;
    document.getElementById("fot3").textContent = traducciones[idioma].fot3;
    document.getElementById("dudas").textContent = traducciones[idioma].dudas;
    document.getElementById("dudas2").textContent = traducciones[idioma].dudas2;

    document.getElementById("placeholder1").placeholder = traducciones[idioma].placeholder1;
    document.getElementById("placeholder2").placeholder = traducciones[idioma].placeholder2;
    document.getElementById("placeholder3").placeholder = traducciones[idioma].placeholder3;

    document.documentElement.lang = idioma;
    localStorage.setItem("idioma", idioma);
}

// Eventos para las banderas
document.querySelectorAll(".idiomas a").forEach(enlace => {
    enlace.addEventListener("click", function(e){
        e.preventDefault();
        const idioma = this.dataset.lang;
        cambiarIdioma(idioma);
    });
});

// Cargar idioma inicial
const idiomaGuardado = localStorage.getItem("idioma");
if(idiomaGuardado){
    cambiarIdioma(idiomaGuardado);
} else {
    const idiomaUsuario = navigator.language;
    if(idiomaUsuario.startsWith("it")){
        cambiarIdioma("it");
    } else {
        cambiarIdioma("es");
    }
}

// CONTROL DEL FORMULARIO E INTERFAZ
document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario-rsvp");
    const confirmarTexto = document.querySelector("section#confirmacion h2");
    const subtitulo = document.querySelector("section#confirmacion .subtitulo");
    const mensajeGracias = document.getElementById("gracias");
    const infoSi = document.getElementById("info-si");
    const textareaAlergias = infoSi.querySelector("textarea");
    const radios = document.querySelectorAll('input[name="asistencia"]');

    // Mostrar u ocultar intolerancias + manejo dinámico de 'required'
    radios.forEach(radio => {
        radio.addEventListener("change", () => {
            const respuesta = document.querySelector('input[name="asistencia"]:checked')?.value;
            if (respuesta === "Sí") {
                infoSi.style.display = "block";
                textareaAlergias.setAttribute("required", "required");
            } else {
                infoSi.style.display = "none";
                textareaAlergias.removeAttribute("required");
                textareaAlergias.value = ""; 
            }
        });
    });

    // Enviar datos de manera asíncrona hacia Google Apps Script
    formulario.addEventListener("submit", function(e) {
        e.preventDefault(); 

        const formData = new FormData(formulario);
        const botonSubmit = document.getElementById("boton");
        const textoOriginalBoton = botonSubmit.textContent;
        
        botonSubmit.textContent = "Enviando...";
        botonSubmit.disabled = true;

        fetch(formulario.action, {
            method: "POST",
            body: formData,
            mode: "no-cors" // Crucial para la integración con Web Apps de Google
        })
        .then(() => {
            formulario.style.display = "none";
            if (confirmarTexto) confirmarTexto.style.display = "none";
            if (subtitulo) subtitulo.style.display = "none";
            mensajeGracias.style.display = "block";
        })
        .catch(error => {
            console.error("Error al enviar:", error);
            alert("Hubo un problema al enviar tu respuesta. Por favor, inténtalo de nuevo.");
            botonSubmit.textContent = textoOriginalBoton;
            botonSubmit.disabled = false;
        });
    });
});