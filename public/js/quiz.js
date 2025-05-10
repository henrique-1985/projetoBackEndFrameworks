const perguntas = [ //Array que guarda cada grupo de pergunta e suas resposta.
    { //Pergunta 1
        pergunta: "O céu é Azul.",
        respostas:["Verdadeiro", "Falso"],
        correta:"Verdadeiro"

    },

    { //Pergunta 2
        pergunta: "O céu é Verde.",
        respostas:["Verdadeiro", "Falso"],
        correta:"Falso"

    }
];

let indicePerguntaAtual = 0; //Lenght
let pontuacao = 0;


//Vinculando class e id's html como const's js

const elementoPergunta = document.getElementById("pergunta");
const botoesResposta = document.querySelectorAll(".botao-resposta");
const botaoProximo = document.getElementById("botao-proximo");
const containerResultado = document.getElementById("resultado");
const elementoPontuacao = document.getElementById("pontuacao")


function iniciarQuiz(){
    perguntaAtual = 0;
    pontuacao = 0;
    botaoProximo.style.display="none"; //Não está visível
    containerResultado.style.display="none"; //Não está visível
    exibirPergunta(); //Inicializa função
}

function exibirPergunta(){
    resetar();
    const perguntaAtual= perguntas[indicePerguntaAtual]; //Atualiza perguntas de acordo com o índice do ARRAY
    elementoPergunta.innerText = perguntaAtual.pergunta;

    botoesResposta.forEach((botao,index) => { //Atualiza respostas de acordo com o índice do ARRAY
        botao.innerText=perguntaAtual.respostas[index];
        botao.addEventListener("click", selecionarResposta);
    });
}

function resetar(){
    botaoProximo.style.display = "none"; // Botão NÃO fica visível
    botoesResposta.forEach(botao => {
        botao.disabled = false;
        botao.classList.remove("correto", "incorreto");
    });
}

function selecionarResposta(e){
    const botaoSelecionado = e.target;
    const respostaCorreta = botaoSelecionado.innerText === perguntas[indicePerguntaAtual].correta;
    if (respostaCorreta) {
        botaoSelecionado.classList.add("correto"); 
        pontuacao++; //Aumenta pontuação em +1 ponto
    } else{
        botaoSelecionado.classList.add("incorreto");
    }
    botoesResposta.forEach(botao => botao.disabled=true);
    botaoProximo.style.display="block"; //Botão de Próxima Questão fica visível
    
}

function exibirResultado(){
    containerResultado.style.display="block"; //Container de Resultado fia visível
    elementoPontuacao.innerText= pontuacao; //Pontuação final é inserida no texto
}

botaoProximo.addEventListener("click", ()=>{
    indicePerguntaAtual++; //contador do índice vinculado ao ARRAY
    if(indicePerguntaAtual<perguntas.length){ 
        exibirPergunta();//Exibe pergunta posterior
    }else{
        exibirResultado(); //Exibe resultado se o contador do índice chegar ao length do array.
    }
});

iniciarQuiz();