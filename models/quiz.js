const perguntas = [
    { //Pergunta 1
        pergunta: "O céu é Azul.",
        respostas:["Verdadeiro", "Falso"],
        correta:"Verdadeiro"

    },

    { //Pergunta 2
        pergunta: "O céu é Azul.",
        respostas:["Verdadeiro", "Falso"],
        correta:"Verdadeiro"

    },
];

let indicePerguntas =0;
let pontuacaoFinal = 0;

const pergunta = document.getElementById("pergunta");
const botoesResposta = document.querySelectorAll(".botao-resposta");
const botaoProximo = document.getElementById("botao-proximo");
const containerResultdo = document.getElementById("resultado");
const pontuacao = document.getElementById("pontuacao")


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
        pontuacaoFinal ++
    } else{
        botaoSelecionado.classList.add("incorreto");

    }

    botoesResposta.forEach(botao => botao.disabled=true);
    botaoProximo.style.display="block";
}

function exibirResultado(){
    containerResultado.style.display="block";
    pontuacao.innerText='${potuacaoFinal} de ${perguntas.length}';
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