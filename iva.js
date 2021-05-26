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