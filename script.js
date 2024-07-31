const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quando voce ve reportagens, noticias sobre como o ecossistema vem sendo degradado, voce pensa em como pode ajudar?",
        alternativas: [
            {
                texto: "Sim, eu tenho ações para amenizar",
                afirmacao: "afirmação"
            },
            {
                texto: "Eu não sei o que poderia fazer",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Estão aqui duas opções para voce, que tal por enquanto começar com uma dessas?",
        alternativas: [
            {
                texto: "Economizar energia (quando for utilizar o celular pode desligar a tv, diminuir o tempo do chuveiro, são exemplos)",
                afirmacao: "afirmação"
            },
            {
                texto: "Descartar corretamente o lixo (não jogar na rua, terrenos baldios, separar o lixo em casa, também são exemplos)",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "São algumas dicas de saúde, que tal escolher uma delas?",
        alternativas: [
            {
                texto: "Horta caseira. Voce saiba que a horta caseira proporciona uma alimentação mais saudável e funciona como terapia para a mente já que o contato com a terra ajuda no controle do estresse e ansiedade.",
                afirmacao: "afirmação"
            },
            {
                texto: "Compostagem. A compostagem ajuda na redução de CO2, melhora a qualidade do solo e também ajuda a reduzir a dependencia de fertilizantes químicos. Algumas empresas: Retec Resíduos - Composta Mais - Grupo Carbono".",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Estão aqui alumas dicas para casa, escolha uma!",
        alternativas: [
            "Uma boa dica e de não jogar óleos lubrificantes ou de cozinha na sua rede de esgoto.",
            "Outra dica é de tampar bem as panelas na hora de cozinhar, (o alimento fica pronto mais depressa e você gasta menos gás)"
        ]
    },
    {
        enunciado: " Agora mais duas dicas. escolha!",
        alternativas: [
            "Evitar levar para casa embalagens plásticas e de papel que não serão novamente utilizadas. Escolha produtos que tenham a opção de refil, isso será de grande benefício.",
            "Usar ecobags quando for às compras ou reutilize os sacos plásticos;."
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();