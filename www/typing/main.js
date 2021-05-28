const quote="En un lugar de La Mancha"
let inicio = Date.now();

const nodoMensaje = document.getElementById("message");
const nodoFrase = document.getElementById("quote");
const botonEmpezar = document.getElementById("start");
const inputKey = document.getElementById("typed-value");

nodoMensaje.innerText="";
nodoFrase.innerText=quote;

botonEmpezar.addEventListener("click", () => {
    inicio = Date.now();
    haTerminado=false;
});

inputKey.addEventListener("input", () => {
    if (haTerminado) return;
    const ahora=Date.now();
    const tiempo=ahora-inicio;
    const tecleado=inputKey.value;
    if (tecleado===quote){
        nodoMensaje.innerText="Felicidades, has tardado " + (tiempo/1000) + " segundos";
        haTerminado=true;
    }else{
        if (quote.startsWith (tecleado)){
            inputKey.classList.remove("mal");
            nodoMensaje.innerText = "Aún no va bien, llevas " + (tiempo/1000) + " segundos";
        }else{
            inputKey.classList.add("mal");
            nodoMensaje.innerText = "Vas mal, llevas " + (tiempo/1000) + " segundos";
        }
        
    }
})
