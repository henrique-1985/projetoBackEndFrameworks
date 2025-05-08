const perguntas = [
    {

    }
];

let perguntaAtual =0;
let pontuacao = 0;

const pergunta = document.getElementById("pergunta");
const resposta = document.querySelectorAll(".botao-resposta");

function iniciarQuiz(){
    perguntaAtual = 0;
    pontuacao = 0;
    exibirPergunta();
}

function exibirPergunta(){
    resetar();
    const perguntasAtual= perguntas[perguntaAtual];
    pergunta.innerText = perguntaAtual.pergunta;
    botoesResposta.forEach((botao,index) =>{
        botao.innerText=perguntaAtual.respostas[index];
        botao.addEventListener("click", selecionarResposta);
    });
}

function resetar(){
    botaoProximo.style.display = "none";
    botoesResposta.forEach(botao =>{
        botao.disabled = false;
    botao.classList.remove("correto", "incorreto");
    });
}

function selecionarResposta(e){
    const botaoSelecionado = e.target;
    const respostaCorreta = botaoSelecionado.innerTect === perguntas[indicePerguntas].correta;
    if (respostaCorreta){
        botaoSelecionado.classList.add("correto");
        pontuacao ++
    } else{
        botaoSelecionado.classList.add("incorreto");

    }

    botoesResposta.forEach(botao => botao.disabled=true);
    botaoProximo.style.display="block";
}

function exibirResultado(){
    containerResultado.style.display="block";
    pontuacao.innerText='${potuacao} de ${perguntas.length}';
}

botaoProximo.addEventListener("click", ()=>{
    indicePerguntas++;
    if(indicePerguntas<perguntas.length){
        exibirPergunta();
    }else{
        exibirResultado();
    }
});

iniciarQuiz();