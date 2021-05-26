const iva = 21;
const producto1 = {
    precio : 6.00,
}
producto1.precioIva = producto1.precio * (1.00 + (iva/100));
console.log ("Precio: " + producto1.precio + " €");
console.log ("IVA: " + iva + " %");
console.log ("Total: " + producto1.precioIva + " €");

function calcularCuota(base, tipo=iva) {
    const cuota = base*tipo/100;
    return cuota;
}

const cuota = calcularCuota(producto1.precio);
console.log(cuota);

function calcularImporte(base,tipo){
    const cuota = calcularCuota(base,tipo)
    const importe = base + cuota;
    return importe;
}

const importe = calcularImporte (producto1.precio,iva);
console.log("El importe con IVA incluido es: " + importe);

function obtenerDesglose(base,tipo=iva){
    const desglose = {
        base: base,
        tipo: tipo,
        cuota: calcularCuota(base,tipo),
        importe: calcularImporte (base,tipo),
    };
    return desglose;
}

console.log (obtenerDesglose(producto1.precio));

let productos = [{nombre:"Libreta",base:2,exento:false}, {nombre:"Curso",base:300,exento:true}, {nombre:"Bolígrafo",base:1.5,exento:false}];

for (let item=0; item < productos.length; item++) {
    console.log ("Artículo: " + productos[item].nombre);
    console.log ("Base: " + productos[item].base + " €");
    if (productos[item].exento==true) {
        console.log ("Producto exento de IVA");
        console.log ("Total: " + productos[item].base + " €");
    } else {
        console.log ("Tipo de IVA: " + iva + " %");
        console.log ("Total: " + (productos[item].base * (1.00 + (iva/100))) + " €");
    }
}