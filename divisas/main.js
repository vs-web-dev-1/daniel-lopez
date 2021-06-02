const url = "https://api.frankfurter.app/latest";


//promesas
fetch (url)
.then( (response) => response.json() )
.then((data) => {
    console.log(data);
    const fechaCadena = data.date;
    console.log(fechaCadena);
    const fechaNumber = Date.parse(fechaCadena);
    console.log("Unix:" + fechaNumber);
    const fecha = new Date (fechaNumber);
    console.log("ISO:" + fecha.toISOString());
    const spanFecha = document.getElementById("fecha");
    spanFecha.innerText = fecha;
    const objetoCotizaciones= data.rates;
    const ulCotizaciones=document.getElementById("cotizaciones");
   // ulCotizaciones.innerText=JSON.stringify(objetoCotizaciones);
    const divisas = Object.keys(objetoCotizaciones);
    divisas.forEach((divisa) => {
        const liDivisa = document.createElement("li");
        const cotizacion = objetoCotizaciones[divisa];
        liDivisa.innerText=divisa + " : " + cotizacion;
        ulCotizaciones.appendChild(liDivisa);
    });
});

/*async function obtenerDatos(){
    //esperas
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        console.log (data);
    } else {
        console.log("Error: " + response.statusText)
    }
}*/

//obtenerDatos();