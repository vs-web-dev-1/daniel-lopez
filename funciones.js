const PI = 3.14
function saludar (){
    console.log("Hola mundo");
}

function saludarPorNombre(nombre) {
    console.log("Hola " + nombre);
}


let radio =5;
let circunferencia = calcularCircunferencia(radio);
console.log(circunferencia);

function calcularCircunferencia(r){
    const circunferencia = 2*PI*r
    return circunferencia
}

saludar();
saludarPorNombre("Daniel");