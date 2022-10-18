var numeroSecreto = parseInt(Math.random() * 11);

var chances = 3;


function chutar() {

    var resultado = document.getElementById("resultado");

    var chute = parseInt(document.getElementById("valor").value);

    parseInt(document.getElementById("valor").value = "");

    if (chute === numeroSecreto) {
        resultado.innerHTML = "Parabéns, Você Acertou";
    } else if (chute > 10 || chute < 0) {
        resultado.innerHTML = "Você deve digitar um número de 0 a 10";
    } else if (chute > numeroSecreto) {
        resultado.innerHTML = "Errou, o número secreto é menor que " + chute;
    } else {
        resultado.innerHTML = "Errou, o número secreto é maior que " + chute;
    }

    var denovoHtml = document.getElementById("denovo");

    var chancesHtml = document.getElementById("chances");

    if (chute !== numeroSecreto) {
        chances--;
        chancesHtml.innerHTML = "Você tem " + chances + " chances restantes";
    } 

    if (chances === 0) {
        chancesHtml.innerHTML = "Suas tentativas acabaram, o número secreto é o " + numeroSecreto;
        denovoHtml.innerHTML = "Atualize a página e tente denovo!!"
    }

  }

