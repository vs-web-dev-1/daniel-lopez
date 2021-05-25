const iva = 21;
const producto1 = {
    precio : 6.00,
    
}
producto1.precioIva = producto1.precio * (1.00 + (iva/100));
console.log ("Precio: " + producto1.precio + " €");
console.log ("IVA: " + iva + " %");
console.log ("Total: " + producto1.precioIva + " €");