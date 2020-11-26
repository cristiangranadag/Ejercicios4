let man;
let des;
let tot;
let pre;
let pre2;

document.getElementById('Factura').style.display = "none"

function Calcular() {
    man = Number(document.getElementById('Manazanas').value);
    pre = Number(document.getElementById('VlrPrecio').value);
    if (man >= 0 && man <= 2) {
        pre2 = pre * man;
        des = 0;
    } else if (man >= 3 && man <= 5) {
        pre2 = pre * man;
        des = pre2 * 0.1;
    } else if (man >= 6 && man <= 10) {
        pre2 = pre * man;
        des = pre2 * 0.15;
    } else {
        pre2 = pre * man;
        des = pre2 * 0.2;
    }
    tot = pre2 - des;
    document.getElementById('Factura').style.display = "block"
    document.getElementById('Precio').value = pre2;
    document.getElementById('Descuento').value = des;
    document.getElementById('Total').value = tot;
}