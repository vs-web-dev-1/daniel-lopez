let iva = 21;
let producto1 = {
    precio : 6,
    precioIva : this.precio * (1.00 + iva/100)
}
console.log ("Precio: " + producto1.precio + " €");
console.log ("IVA: " + iva + " %");
console.log ("Total: " + producto1.precioIva + " €");