// Category-specific questions for the smart questionnaire
export interface QuestionOption {
  value: string;
  label: string;
  description: string;
}

export interface Question {
  id: string;
  question: string;
  options: QuestionOption[];
}

export interface CategoryQuestions {
  [key: string]: Question[];
}

export const categoryQuestions: CategoryQuestions = {
  celular: [
    {
      id: "usage",
      question: "Como você usa seu celular no dia a dia?",
      options: [
        { value: "basico", label: "Básico", description: "Ligações, mensagens e redes sociais" },
        { value: "intermediario", label: "Intermediário", description: "Fotos, vídeos e apps variados" },
        { value: "intenso", label: "Intenso", description: "Jogos, edição de fotos/vídeos, trabalho" },
      ],
    },
    {
      id: "camera",
      question: "Qual a importância da câmera para você?",
      options: [
        { value: "baixa", label: "Baixa", description: "Fotos casuais são suficientes" },
        { value: "media", label: "Média", description: "Gosto de fotos com boa qualidade" },
        { value: "alta", label: "Alta", description: "Fotografia é prioridade máxima" },
      ],
    },
    {
      id: "battery",
      question: "Quanto tempo você passa longe do carregador?",
      options: [
        { value: "pouco", label: "Poucas horas", description: "Sempre tenho acesso a tomada" },
        { value: "medio", label: "O dia todo", description: "Carrego à noite" },
        { value: "muito", label: "Mais de um dia", description: "Preciso de bateria duradoura" },
      ],
    },
    {
      id: "budget",
      question: "Qual sua faixa de orçamento?",
      options: [
        { value: "economico", label: "Econômico", description: "Até R$ 1.500" },
        { value: "intermediario", label: "Intermediário", description: "R$ 1.500 a R$ 4.000" },
        { value: "premium", label: "Premium", description: "Acima de R$ 4.000" },
      ],
    },
  ],
  "ar-condicionado": [
    {
      id: "room_size",
      question: "Qual o tamanho do ambiente?",
      options: [
        { value: "pequeno", label: "Pequeno", description: "Até 15m² (quarto)" },
        { value: "medio", label: "Médio", description: "15 a 30m² (sala)" },
        { value: "grande", label: "Grande", description: "Acima de 30m² (ambiente amplo)" },
      ],
    },
    {
      id: "usage_hours",
      question: "Quantas horas por dia você usa?",
      options: [
        { value: "pouco", label: "Pouco", description: "Até 4 horas" },
        { value: "moderado", label: "Moderado", description: "4 a 8 horas" },
        { value: "muito", label: "Muito", description: "Mais de 8 horas" },
      ],
    },
    {
      id: "energy_concern",
      question: "Qual sua preocupação com consumo de energia?",
      options: [
        { value: "baixa", label: "Baixa", description: "Conforto é prioridade" },
        { value: "media", label: "Média", description: "Equilibrar conforto e economia" },
        { value: "alta", label: "Alta", description: "Economia é fundamental" },
      ],
    },
    {
      id: "features",
      question: "Quais recursos são importantes?",
      options: [
        { value: "basico", label: "Básico", description: "Apenas refrigerar" },
        { value: "inverter", label: "Inverter", description: "Economia e silêncio" },
        { value: "completo", label: "Completo", description: "WiFi, filtros, aquecimento" },
      ],
    },
  ],
  geladeira: [
    {
      id: "family_size",
      question: "Quantas pessoas moram na casa?",
      options: [
        { value: "pequena", label: "1-2 pessoas", description: "Família pequena ou casal" },
        { value: "media", label: "3-4 pessoas", description: "Família média" },
        { value: "grande", label: "5+ pessoas", description: "Família grande" },
      ],
    },
    {
      id: "freezer",
      question: "Como você usa o freezer?",
      options: [
        { value: "pouco", label: "Pouco", description: "Apenas gelo e sorvete" },
        { value: "moderado", label: "Moderado", description: "Algumas carnes e congelados" },
        { value: "muito", label: "Muito", description: "Muitos congelados e preparações" },
      ],
    },
    {
      id: "energy",
      question: "Selo de eficiência energética é importante?",
      options: [
        { value: "nao", label: "Não muito", description: "Preço é mais importante" },
        { value: "equilibrado", label: "Equilibrado", description: "Considero ambos" },
        { value: "sim", label: "Muito", description: "Selo A é essencial" },
      ],
    },
    {
      id: "type",
      question: "Qual tipo de geladeira prefere?",
      options: [
        { value: "simples", label: "Uma porta", description: "Compacta e econômica" },
        { value: "duplex", label: "Duplex", description: "Freezer em cima" },
        { value: "frost_free", label: "Frost Free", description: "Sem necessidade de degelo" },
      ],
    },
  ],
  tv: [
    {
      id: "size",
      question: "Qual tamanho ideal para seu ambiente?",
      options: [
        { value: "pequena", label: "Até 43\"", description: "Quartos e ambientes menores" },
        { value: "media", label: "50\" a 55\"", description: "Salas médias" },
        { value: "grande", label: "65\" ou mais", description: "Salas grandes, home theater" },
      ],
    },
    {
      id: "usage",
      question: "Para que você mais usa a TV?",
      options: [
        { value: "streaming", label: "Streaming", description: "Netflix, YouTube, etc." },
        { value: "games", label: "Games", description: "Jogos e consoles" },
        { value: "esportes", label: "Esportes", description: "Futebol, corridas, etc." },
      ],
    },
    {
      id: "quality",
      question: "Qual qualidade de imagem você busca?",
      options: [
        { value: "hd", label: "Full HD", description: "Suficiente para o dia a dia" },
        { value: "4k", label: "4K", description: "Alta definição" },
        { value: "premium", label: "OLED/QLED", description: "Melhor qualidade possível" },
      ],
    },
    {
      id: "smart",
      question: "Recursos smart são importantes?",
      options: [
        { value: "basico", label: "Básico", description: "Apenas apps principais" },
        { value: "completo", label: "Completo", description: "Assistente de voz, IoT" },
        { value: "nao", label: "Não preciso", description: "Uso dispositivo externo" },
      ],
    },
  ],
};

// Default questions for categories without specific ones
export const defaultQuestions: Question[] = [
  {
    id: "usage",
    question: "Qual é o seu perfil de uso?",
    options: [
      { value: "leve", label: "Leve", description: "Uso básico, ocasional" },
      { value: "moderado", label: "Moderado", description: "Uso diário regular" },
      { value: "intenso", label: "Intenso", description: "Uso profissional/intensivo" },
    ],
  },
  {
    id: "priority",
    question: "O que é mais importante para você?",
    options: [
      { value: "desempenho", label: "Desempenho", description: "Velocidade e potência" },
      { value: "durabilidade", label: "Durabilidade", description: "Vida útil longa" },
      { value: "economia", label: "Economia", description: "Menor custo total" },
    ],
  },
  {
    id: "timeline",
    question: "Qual a urgência da troca?",
    options: [
      { value: "urgente", label: "Urgente", description: "Preciso trocar agora" },
      { value: "planejado", label: "Planejado", description: "Nos próximos meses" },
      { value: "pesquisa", label: "Pesquisando", description: "Sem pressa, só analisando" },
    ],
  },
  {
    id: "budget",
    question: "Como está seu orçamento?",
    options: [
      { value: "limitado", label: "Limitado", description: "Preço é prioridade" },
      { value: "flexivel", label: "Flexível", description: "Posso investir mais se valer" },
      { value: "aberto", label: "Aberto", description: "Busco o melhor, sem limite" },
    ],
  },
];

export const getQuestionsForCategory = (category: string): Question[] => {
  return categoryQuestions[category] || defaultQuestions;
};