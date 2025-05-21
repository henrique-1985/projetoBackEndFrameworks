const perguntas = [ //Array que guarda cada grupo de pergunta e suas resposta.
    { //Pergunta 1
        pergunta: "O Feminismo é o movimento que busca a SUPERIORIDADE da mulher em relaçãoa outros gêneros.",
        respostas:["Verdadeiro", "Falso"],
        correta:"Falso"

    },

    { //Pergunta 2
        pergunta: "Identidade de Gênero é a mesma coisa que Orientação Sexual.",
        respostas:["Verdadeiro", "Falso"],
        correta:"Falso"

    },
    { //Pergunta 3
        pergunta: "A sigla LGBT+ inclui diversas identidades de gênero e orientações sexuais ALÉM de lésbicas, gays, bissexuais e transgêneros."   ,
        respostas:["Verdadeiro", "Falso"],
        correta:"Verdadeiro"

    },
    { //Pergunta 4
        pergunta: "Pessoas transgênero ESCOLHERAM ser de um gênero diferente do seu gênero de nascimento.",
        respostas:["Verdadeiro", "Falso"],
        correta:"Falso"

    },
    { //Pergunta 5
        pergunta: "A violência de gênero é um problema privado que NÃO afeta a sociedade como um todo.",
        respostas:["Verdadeiro", "Falso"],
        correta:"Falso"

    },
    { //Pergunta 6
        pergunta: "Crianças criadas por pais LGBT+ têm mais probabilidade de serem LGBT+ ou de ter problemas de desenvolvimento.",
        respostas:["Verdadeiro", "Falso"],
        correta:"Falso"

    },
    { //Pergunta 7
        pergunta: "Pessoas assexuais não sentem atração sexual por ninguém, mas podem sentir atração romântica.",
        respostas:["Verdadeiro", "Falso"],
        correta:"Verdadeiro"

    },
    { //Pergunta 8
        pergunta: "Em um relacionamento abusivo, a violência é sempre física.",
        respostas:["Verdadeiro", "Falso"],
        correta:"Falso"

    },
    { //Pergunta 9
        pergunta: "A discriminação de gênero afeta a saúde mental de homens e mulheres de maneiras diferentes.",
        respostas:["Verdadeiro", "Falso"],
        correta:"Verdadeiro"

    },
    { //Pergunta 10
        pergunta: "O termo 'feminicídio' refere-se ao assassinato de qualquer mulher, independentemente do motivo.",
        respostas:["Verdadeiro", "Falso"],
        correta:"Falso"

    },
    


];

let indicePerguntaAtual = 0; //Lenght
let pontuacao = 0;



//Vinculando class e id's html como const's js

const elementoPergunta = document.getElementById("pergunta");
const botoesResposta = document.querySelectorAll(".botao-resposta");
const botaoResultado = document.getElementById("botao-resultado");
const botaoProximo = document.getElementById("botao-proximo");
const containerResultado = document.getElementById("resultado");
const elementoPontuacao = document.getElementById("pontuacao");




function iniciarQuiz(){
    perguntaAtual = 0;
    pontuacao = 0;
    botaoProximo.style.display="none";
    botaoResultado.style.display="none"; //Não está visível
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
    botaoResultado.style.display="none";
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
    elementoPontuacao.value= pontuacao;
    botaoResultado.style.display="block"; //Pontuação final é inserida no texto
}

botaoProximo.addEventListener("click", ()=>{
    botaoProximo.style.display = "none";
    indicePerguntaAtual++; //contador do índice vinculado ao ARRAY
    if(indicePerguntaAtual<perguntas.length){ 
        botaoProximo.style.display="none";
        exibirPergunta();//Exibe pergunta posterior
    }else{
        exibirResultado(); 
        //Exibe resultado se o contador do índice chegar ao length do array.
    }
});



iniciarQuiz();