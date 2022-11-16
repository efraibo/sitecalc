function calculo() {
    // const qtdTonelada = 3;
    // const valorPorCubo = 0.18;

    let qtdTonelada = parseFloat(document.getElementById("qtdTonelada").value);
    let valorPorCubo = parseFloat(document.getElementById("ValCubo").value) / 100;

    let a = parseFloat(document.getElementById("A").value);
    let b = parseFloat(document.getElementById("B").value);
    let c = parseFloat(document.getElementById("C").value);
    let d = parseFloat(document.getElementById("D").value);

    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
        alert("Existe algum campo não preenchido!")
    } else {
        let calculoCubo = ((a + b) / 2) * ((c + d) / 2);
        let valorPago = calculoCubo * (qtdTonelada * valorPorCubo);
        let valor = valorPago.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
           
        alert("O valor da cubação é: " + calculoCubo + "\nO valor a ser pago é: " + valor);        
    }

}


