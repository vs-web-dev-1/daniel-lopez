let radioMedio = 40;
const PI = 3.14;
let rueda = 2 * PI * radioMedio;

console.log('Rueda: ' + rueda);

const bici = {
    marca : 'BH',
    precio : 89,
    radio: radioMedio,
    rueda: 2 * PI * radioMedio
}

console.log(bici);
console.log ("Mi bici " + bici.marca + " tiene una rueda de " + bici.rueda + " cm.");
let biciRadioMedio=bici.radio==radioMedio;
console.log(biciRadioMedio);
let biciRadioMedio2=bici.radio==="40";
console.log(biciRadioMedio2);
let uno =1;
let dos = 2;
let mayor =dos > uno;
let menor = uno < dos;
let distinto = uno != dos;