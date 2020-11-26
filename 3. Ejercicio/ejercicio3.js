// 3.	Lea los tres lados de un triángulo y determine el tipo de triángulo que forma: equilátero, isósceles o escaleno.

let l1
let l2
let l3


function Calcular() {

    l1 = Number(document.getElementById('A').value);
    l2 = Number(document.getElementById('B').value);
    l3 = Number(document.getElementById('C').value);

    if (l1 == l2 && l1 == l3 && l2 == l3) {
        document.getElementById('Resultado').innerHTML = ("Equilátero")
    } else if (l1 != l2 && l1 != l3 && l2 != l3) {
        document.getElementById('Resultado').innerHTML = ("Escaleno")
    } else {
        document.getElementById('Resultado').innerHTML = ("Isósceles")
    }
}
