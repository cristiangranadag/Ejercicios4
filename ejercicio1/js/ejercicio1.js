let num;

document.getElementById('Mes').style.display = "none"

function Calcular() {
    
    num = Number(document.getElementById('Numero').value);
    if (num >=1 && num <=12){
        if(num == 1){
            num = "Enero"
            
        } else if(num == 2){
            num = "Febrero"
            
        } else if(num == 3){
            num = "Marzo"
           
        } else if(num == 4){
            num = "Abril"
           
        } else if(num == 5){
            num = "Mayo"
            
        } else if(num == 6){
            num = "Junio"
            
        } else if(num == 7){
            num = "Julio"
           
        } else if(num == 8){
            num = "Agosto"
            
        } else if(num == 9){
            num = "Septiembre"
            
        } else if(num == 10){
            num = "Octubre"
            
        } else if(num == 11){
            num = "Noviembre"
            
        } else {
            num = "Diciembre"
           
        }
    } else {
        num = "Error: solo nro 1 y 12"
    }
    document.getElementById('Mes').style.display = "block"
    document.getElementById('Nombre').value = num;
}


