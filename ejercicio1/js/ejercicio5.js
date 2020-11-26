let seg
let parc1
let parc2
let nota

function Calcular() {
    seg = Number(document.getElementById('Seguimiento').value);
    parc1 = Number(document.getElementById('Parcial1').value);
    parc2 = Number(document.getElementById('Parcial2').value);

    nota = seg*0.5+parc1*0.25+parc2*0.25;

    if (nota >= 3.5){
        alert('Ganaste la materia')
    } else {
        alert('Perdiste la materia')
    }
}