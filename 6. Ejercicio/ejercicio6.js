// // 6.	Un almacén de venta de ropa tiene las siguientes promociones para sus clientes, las cuales consisten en lo 
// // siguiente (pago en efectivo = E, pago con Tarjeta de Crédito = T): 
// // a.	Para ventas menores ó iguales a 100.000, con pago en efectivo se hace un descuento del 20% y si es con tarjeta 
// de crédito se hace el 10%.
// // b.	Para ventas mayores a 100.000 y menores o iguales a 200.0000, con pago en efectivo se hace un descuento del 30%, 
// con tarjeta de crédito se hace el 15%.
// // c.	Para ventas mayores a 200.000, con pago en efectivo se hace un descuento del 40% y con tarjeta de crédito se 
// hace el 20%.
// // Indique el valor del descuento y el total a pagar.

let tipo
let desc
let tot
let ven

document.getElementById('Factura').style.display = "none"

function Calcular() {

    ven = Number(document.getElementById('Venta').value);
    tipo = document.getElementById('Pago').value;

    
    if(ven<=100000){
        if(tipo == "E"){
            desc=ven*0.2
        } else {
            desc=ven*0.1
        }
    } else if(ven>100000 && ven<=200000){
        if(tipo == "E"){
            desc=ven*0.3
        } else {
            desc=ven*0.15
        }
    } else {
        if(tipo == "E"){
            desc=ven*0.4
        } else {
            desc=ven*0.2
        }
    }
    tot = ven - desc
    document.getElementById('Factura').style.display = "block"
    document.getElementById('Descuento').value = desc;
    document.getElementById('Total').value = tot;
}