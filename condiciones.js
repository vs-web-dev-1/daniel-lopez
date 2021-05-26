let saldo = 900;
let precio = 1000;
let canBuy = saldo > precio;
let creditoDisponible = 1000;

if (canBuy){
    console.log('Me lo compro');
    saldo=saldo-precio;
}else{
    console.log('Me aguanto');
    let necesito = precio - saldo;
    console.log("Necesito: " + necesito);
    let credito = necesito > creditoDisponible 
        ? "No puedo pedir crédito" 
        : creditoDisponible - necesito >100
        ? "Sí que pediré crédito"
        : "Puedo, pero no lo pediré";
    console.log(credito);
}

console.log ("Tengo: " + saldo);

let formaDePago = "Tarjeta";
/*if (formaDePago === "Tarjeta") {
    console.log("Pagaré con tarjeta");
} else if (formaDePago==="Bizum"){
    console.log("Pagaré con Bizum");
} else if (formaDePago==="Transferencia"){
    console.log("Pagaré con transferencia")
} else if (formaDePago==="Efectivoa"){
    console.log("Pagaré en efectivo")
} else {
    console.log("Medio no válido");
}*/

switch (formaDePago) {
    case "Tarjeta":
        console.log("Pagaré con tarjeta");
        break;
    case "Bizum":
        console.log("Pagaré con Bizum");
}