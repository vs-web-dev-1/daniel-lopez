const numeros = [];
const MAX = 100;

function inicializarArray(){
    for (let i=1; i <= MAX; i++){
        numeros.push(i);
    }
}

function mostrarNumeros(){
    for (let i=0; i<numeros.length; i++){
        console.log(`En la posición ${i} tenemos ${numeros[i]}`);
    }
}

function mostrarPares() {
    for (let i=0;i<numeros.length;i++) {
        if (numeros[i]%2===0) {
            console.log(`En la posición ${i} tenemos el par ${numeros[i]}`);
        }
    }
}

export function obtenerCuadrados() {
    return numeros.map((numero)=> numero*numero);
}

export function obtenerCuadradosDePares(){
    return numeros.filter(esPar).map((par)=>par*par);
}

function esPar(numero){
    return numero % 2 === 0;
}

export const funcionesNumeros = {
    inicializar: inicializarArray,
    mostrar: mostrarNumeros,
    n: numeros,
    pares: mostrarPares,
};

//inicializarArray();
//mostrarNumeros();