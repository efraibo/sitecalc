function calculo() {
    const qtdTonelada = 3;
    const valorPorCubo = 0.17;

    let a = parseFloat(document.getElementById("A").value);
    let b = parseFloat(document.getElementById("B").value);
    let c = parseFloat(document.getElementById("C").value);
    let d = parseFloat(document.getElementById("D").value);

    let calculoCubo = ((a + b) / 2) * ((c + d) / 2);
    let valorPago = calculoCubo * (qtdTonelada * valorPorCubo);
    let valor = valorPago.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
       
    alert("O valor a ser pago é: " + valor);    
}


