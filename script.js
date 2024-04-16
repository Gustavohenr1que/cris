function crisEscolhe() {
    var opcao1 = document.getElementById("input1").value;
    var opcao2 = document.getElementById("input2").value;

    var opcoes = [opcao1, opcao2];

    var escolhaAleatoria = opcoes[Math.floor(Math.random() * opcoes.length)]
    console.log(escolhaAleatoria)

    document.getElementById("resultado").innerHTML = "O cris escolheu: " + escolhaAleatoria;

}
