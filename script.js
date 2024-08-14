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
                afirmacao: "Otimo segue abaixo algumas ações"
            },
            {
                texto: "Eu não sei o que poderia fazer",
                afirmacao: "Retome algumas dicas de ações dentro do nosso site"
            }
        ]
    },
    {
        enunciado: "Estão aqui duas opções para voce, que tal por enquanto começar com uma dessas?",
        alternativas: [
            {
                texto: "Economizar energia (quando for utilizar o celular pode desligar a tv, diminuir o tempo do chuveiro, são exemplos)",
                afirmacao: "Essa é uma simples ação, porém benéfica para o seu bolso"
            },
            {
                texto: "Descartar corretamente o lixo (não jogar na rua, terrenos baldios, separar o lixo em casa, também são exemplos)",
                afirmacao: "Ação crucial em relação ao meio ambiente"
            }
        ]
    },
    {
        enunciado: "São algumas dicas de saúde, que tal escolher uma delas?",
        alternativas: [
            {
                texto: "Horta caseira. Voce saiba que a horta caseira proporciona uma alimentação mais saudável e funciona como terapia para a mente já que o contato com a terra ajuda no controle do estresse e ansiedade.",
                afirmacao: "Livre de agrotóxicos"
            },
            {
                texto: "Compostagem. A compostagem ajuda na redução de CO2, melhora a qualidade do solo e também ajuda a reduzir a dependencia de fertilizantes químicos. Algumas empresas: Retec Resíduos - Composta Mais - Grupo Carbono.",
                afirmacao: "Ajuda na diminuição de lixos orgânicos"
            }
        ]
    },
    {
        enunciado: "Estão aqui algumas dicas para casa, escolha uma!",
        alternativas: [
           {
                texto:  "Uma boa dica e de não jogar óleos lubrificantes ou de cozinha na sua rede de esgoto.",
                afirmação: "Atitude crucial para o bem estar ambiental"
           },
           {
                texto:  "Outra dica é de tampar bem as panelas na hora de cozinhar",
                afirmação: "O alimento fica pronto mais depressa e você gasta menos gás"
           }
      
            ]
    },
    {
        enunciado: " Agora mais duas dicas. escolha!",
        alternativas: [
            {
                texto: "Descartar corretamente o lixo (não jogar na rua, terrenos baldios, separar o lixo em casa, também são exemplos)",
                afirmacao: "Ação crucial para o meio ambiente"
            },
            {
                texto: "Economizar energia (quando for utilizar o celular pode desligar a tv, diminuir o tempo do chuveiro, são exemplos)",
                afirmacao: "Essa é uma simples ação, porém benéfica para o seu bolso"
           
            }
            
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