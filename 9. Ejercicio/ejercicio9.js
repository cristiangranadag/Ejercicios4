// 9.	Determinar el precio de un pasaje de ida y vuelta por avión, conociendo la distancia a recorrer, el número de 
// días de estancia y sabiendo que, si la distancia es superior a 1000 km, y el número de días de estancia es superior 
// a 7, la línea aérea le hace un descuento del 30%. El precio por kilómetro es de $89,50.

const precio=8950;
let km;
let dias;
let descuento;
let total;
let precioKm

document.getElementById('Factura').style.display = "none"

function Calcular() {
    km = parseFloat(document.getElementById('Km').value);
    dias = parseInt(document.getElementById('Dias').value);
    precioKm = precio * km
    if (km > 1000 && dias > 7){
        descuento = precioKm * 0.3
    } else {
        descuento = 0
    }
    total = precioKm - descuento
    document.getElementById('Factura').style.display = "block"
    document.getElementById('Precio').value = precioKm
    document.getElementById('Descuento').value = descuento
    document.getElementById('Total').value = total
}