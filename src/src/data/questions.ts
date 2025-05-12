export type Question = {
  text: string;
  section: string;
  info: string;
  help: string;
  subQuestions?: { text: string; subinfo: string; help: string }[];
};

export const questions: Question[] = [
  {
    text: "1) Comece se apresentando dizendo que está fazendo uma pesquisa de bench sobre [area].",
    section: "INTRODUÇÃO",
    help: "",
    info: "",
  },
  {
    text: "2) O que a sua empresa faz hoje e qual é o seu diferencial no mercado?",
    section: "ENTENDIMENTO DO NEGÓCIO",
    help: "",
    info: "Objetivo: Compreender o modelo de negócio atual e identificar os pontos fortes da empresa. Isso nos ajudará a entender melhor o contexto em que as soluções serão aplicadas e como podemos agregar valor ao negócio.",
  },
  {
    text: "3) Quais são os maiores desafios que vocês enfrentam hoje, especialmente nas áreas de operação e tecnologia?",
    section: "DESAFIOS",
    help: "",
    info: "Queremos identificar as principais dores e pontos de melhoria. Isso nos ajudará a entender onde podemos ter maior impacto com nossas soluções.",
  },
  {
    text: "4) Como esses desafios impactam diretamente os resultados (tempo, equipe, custo ou entrega)?",
    section: "IMPACTO",
    help: "",
    info: "Buscamos quantificar o impacto dos problemas identificados.",
  },
  {
    text: "5) Você já tentou resolver esses desafios antes? Se sim, o que funcionou e o que não funcionou?",
    section: "TENTATIVAS ANTERIORES",
    help: "",
    info: "",
  },
  {
    text: "6) Se você fosse contratar uma solução agora, o que mais valorizaria no parceiro ideal?",
    section: "CRITÉRIOS DE ESCOLHA",
    help: "",
    info: "",
  },
  {
    text: "7) Qual canal de comunicação costuma funcionar melhor para decisões estratégicas na sua empresa? (e-mail, WhatsApp, reunião presencial, etc.)",
    section: "COMUNICAÇÃO",
    help: "",
    info: "",
  },
  {
    text: "8) Hoje, há um orçamento mensal ou anual dedicado à inovação, tecnologia ou melhoria de processos?",
    section: "ORÇAMENTO",
    help: "",
    info: "",
  },
  {
    text: "9) Se você encontrasse uma solução que realmente resolvesse [dor], qual seria um investimento razoável para você nesse contexto?",
    section: "INVESTIMENTO",
    help: "",
    info: "",
  },
  {
    text: "9) Tem algo a mais que você ache importante complementar?",
    section: "EXTRA",
    help: "",
    info: "",
  },
];
