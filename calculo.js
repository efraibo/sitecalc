function calculo() {
    let a = parseInt(document.getElementById("A").value);
    let b = parseInt(document.getElementById("B").value);
    let c = parseInt(document.getElementById("C").value);
    let d = parseInt(document.getElementById("D").value);

    let calculoCubo = ((a + b) / 2) * ((c + d) / 2);
    let valorPago = calculoCubo * (3 * 0.17);
    let valor = valorPago.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    alert(valor);
}