function test() {
    let a = document.getElementById("A").value;
    let b = document.getElementById("B").value;
    let c = document.getElementById("C").value;
    let d = document.getElementById("D").value;

    let calculo = (a + b / 2) * (c + d / 2);
    var f = calculo.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    alert(f);
}