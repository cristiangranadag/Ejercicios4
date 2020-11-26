// // 10.	A partir de un valor ingresado de la hora, el número de horas al mes y el nombre del trabajador, se desea 
// obtener el salario neto mensual de un empleado,  cuyo trabajo se paga por horas mensuales de la siguiente forma: 
// // •	Las horas menores o iguales a 120 se paga normal (a lo que vale la hora). o Las horas por encima de 120, se 
// pagarán como extras (al doble de las normales).
// // •	La deducción de impuestos se hace con base en el salario básico, teniendo en cuenta el valor de las horas 
// normales + el valor de las horas extras (si las hay).
// // -	Si el salario básico es menor o igual a $380.000, se hace una deducción del 10%.
// // -	Si el salario básico es mayor a $380.000 y menor o igual $480.000, se hace una deducción del 20%.
// // -	Si el salario básico es mayor a $480.000, se hace una deducción del 30%.


const vHora = 3658
let nroHrsMes
let nombre
let basico
let neto
let deduccion

document.getElementById('Factura').style.display = "none"

function Calcular() {
    nombre = document.getElementById('Nombre').value
    nroHrsMes = parseFloat(document.getElementById('Horas').value)
    if (nroHrsMes<=120){
        basico = vHora * nroHrsMes
    } else {
        basico = vHora * nroHrsMes
        basico = basico * 2
    }
    
    if (basico <= 380000){
        deduccion = basico * 0.1
    } else if (basico > 380000 && basico <= 480000){
        deduccion = basico * 0.2
    } else {
        deduccion = basico * 0.3
    }
    
    neto = basico - deduccion
    document.getElementById('Factura').style.display = "block"
    document.getElementById('Valor').value = vHora;
    document.getElementById('Basico').value = basico;
    document.getElementById('Deduccion').value = deduccion;
    document.getElementById('Neto').value = neto;
    
}


