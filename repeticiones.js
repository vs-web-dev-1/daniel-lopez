/*for (let huevos = 1; huevos <= 6 ; huevos++) {
    console.log("Huevo: " + huevos);
    console.log("romper");
    console.log("vaciar");
}*/

let huevos=6;
let usados=0;
while (huevos>0){
    //console.log("Huevo: " + huevos);
    usados++;
    console.log(`Huevo Nº: ${huevos}; he usado ${usados + 5}`)
    console.log("romper");
    console.log("vaciar");
    huevos--;
}

let sabores = ["cebolla","tomate","chorizo","gulas"];
console.log(sabores[0]);
console.log(sabores[5]);
sabores.push("queso");
console.log(sabores[4]);
console.log(sabores);
console.log(sabores.length);

/*for (let i=0; i < sabores.length; i++) {
    console.log (sabores[i]);
}*/

let i=0;
while (i < sabores.length) {
    console.log(sabores[i]);
    i++;
}

function sumar (a,b){
    return a+b;
}

let agregar = function (a,b){
    return a+b;
}

let añadir = (a,b) => a+b;
añadir (2,3);

sabores.forEach((sabor) => console.log(`FOR EACH: ${sabor}`));