// 7.	Se   desea   seleccionar un atleta   para   una   maratón internacional. Para seleccionarlo, este debe haber 
// terminado la maratón anterior, en un tiempo determinado:  los tiempos son 150 minutos para hombres menores 
// de 40 años; 175 minutos para hombres con una edad mayor o igual a 40 años y 180 minutos para mujeres. Los datos 
// a introducir son: sexo (F o M), edad y 	 en su maratón anterior.

let min
let edad
let sexo



function Calcular() {

    sexo = document.getElementById('Sexo').value;
    edad = parseInt(document.getElementById('Edad').value);
    min = parseInt(document.getElementById('Minuto').value);

    if (sexo == "F" && min <= 180) {
        document.getElementById('Resultado').innerHTML = ("Selecciona maratón internacional ")
    } else if (sexo == "F" && min > 180) {
        document.getElementById('Resultado').innerHTML = ("No selecciona maratón internacional ")
    } else if (sexo == "M" && edad >= 40 && min <= 175) {
        document.getElementById('Resultado').innerHTML = ("Selecciona maratón internacional ")
    } else if (edad < 40 && min <= 150) {
        document.getElementById('Resultado').innerHTML = ("Selecciona maratón internacional ")
    } else {
        document.getElementById('Resultado').innerHTML = ("No selecciona maratón internacional ")
    }
}