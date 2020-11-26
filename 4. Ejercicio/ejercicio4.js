// 4.	Dado un capital inicial P equivalente a $800.000, se desea encontrar el valor futuro F para las siguientes tasas de interés  (i1=0.02, i2=0.08) con períodos (n1= 5, n2=13) respectivamente. Tenga en cuenta que:   F = P(1 + i)n Donde:
// F = valor futuro P = capital inicial n = períodos i = tasa de interés


let p=800000
const i1=0.02
const i2=0.08
const n1=5
const n2=13

f1=futuro(p,i1,n1)
f2=futuro(p,i2,n2)

document.getElementById('Resultado').innerHTML = ("Valor futuro 1: "+f1+" y valor futuro 2: "+f2)

function futuro(p,i,n){
    let f
    f=p*(1+i)**n
    return f
}

