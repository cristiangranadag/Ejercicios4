// 2.	Determinar el valor total a pagar por una llamada telefónica, de acuerdo a lo siguiente: 
// •	Toda llamada que dure menos de tres minutos tiene un costo de $500. 
// •	Cada minuto adicional-local a partir de los tres primeros, tiene un costo de $200. 
// •	Cada minuto adicional-nacional a partir de los tres primeros, tiene un costo de $300.


let min
let donde
let tot

function Calcular() {

    min = Number(document.getElementById('Minuto').value);

    if (min <= 3) {
        tot = 500
        document.getElementById('Resultado').innerHTML = (tot)
    } else {
        donde = document.getElementById('Donde').value;
        if (donde == 'local') {
            tot = 500 + (min - 3) * 200
            document.getElementById('Resultado').innerHTML = (tot)
        } else if (donde == 'nacional') {
            tot = 500 + (min - 3) * 300
            document.getElementById('Resultado').innerHTML = (tot)
        } 
    }
}
