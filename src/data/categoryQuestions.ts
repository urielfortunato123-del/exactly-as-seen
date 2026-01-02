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
  notebook: [
    {
      id: "usage",
      question: "Para que você mais usa o notebook?",
      options: [
        { value: "basico", label: "Básico", description: "Navegação, documentos e vídeos" },
        { value: "trabalho", label: "Trabalho", description: "Programação, design ou office avançado" },
        { value: "intenso", label: "Intenso", description: "Jogos, edição de vídeo 4K, 3D" },
      ],
    },
    {
      id: "portability",
      question: "Portabilidade é importante?",
      options: [
        { value: "pouco", label: "Pouco", description: "Fica sempre em casa/escritório" },
        { value: "moderado", label: "Moderado", description: "Levo ocasionalmente" },
        { value: "muito", label: "Muito", description: "Uso em movimento diariamente" },
      ],
    },
    {
      id: "battery",
      question: "Quanto tempo precisa durar a bateria?",
      options: [
        { value: "curta", label: "Até 4h", description: "Uso sempre perto da tomada" },
        { value: "media", label: "4-8h", description: "Um dia normal de trabalho" },
        { value: "longa", label: "8h+", description: "O dia todo sem carregar" },
      ],
    },
    {
      id: "budget",
      question: "Qual sua faixa de orçamento?",
      options: [
        { value: "economico", label: "Econômico", description: "Até R$ 3.000" },
        { value: "intermediario", label: "Intermediário", description: "R$ 3.000 a R$ 6.000" },
        { value: "premium", label: "Premium", description: "Acima de R$ 6.000" },
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
  "maquina-lavar": [
    {
      id: "capacity",
      question: "Qual capacidade você precisa?",
      options: [
        { value: "pequena", label: "Até 10kg", description: "1-2 pessoas, lavagens leves" },
        { value: "media", label: "11-15kg", description: "Família média" },
        { value: "grande", label: "16kg+", description: "Família grande, edredons" },
      ],
    },
    {
      id: "type",
      question: "Qual tipo prefere?",
      options: [
        { value: "abertura_superior", label: "Abertura superior", description: "Tradicional, mais espaço" },
        { value: "frontal", label: "Frontal", description: "Economia de água, empilhável" },
        { value: "lava_seca", label: "Lava e Seca", description: "2 em 1, praticidade" },
      ],
    },
    {
      id: "features",
      question: "Quais recursos são importantes?",
      options: [
        { value: "basico", label: "Básico", description: "Programas essenciais" },
        { value: "inverter", label: "Inverter", description: "Silenciosa e econômica" },
        { value: "smart", label: "Smart", description: "WiFi e programação remota" },
      ],
    },
    {
      id: "budget",
      question: "Qual sua faixa de orçamento?",
      options: [
        { value: "economico", label: "Econômico", description: "Até R$ 2.000" },
        { value: "intermediario", label: "Intermediário", description: "R$ 2.000 a R$ 4.000" },
        { value: "premium", label: "Premium", description: "Acima de R$ 4.000" },
      ],
    },
  ],
  fone: [
    {
      id: "usage",
      question: "Como você usa seus fones?",
      options: [
        { value: "casual", label: "Casual", description: "Música e vídeos no dia a dia" },
        { value: "trabalho", label: "Trabalho", description: "Calls e reuniões frequentes" },
        { value: "profissional", label: "Profissional", description: "Produção musical, mixagem" },
      ],
    },
    {
      id: "type",
      question: "Qual formato prefere?",
      options: [
        { value: "intra", label: "In-ear", description: "Compactos e portáteis" },
        { value: "supra", label: "Over-ear", description: "Conforto e qualidade" },
        { value: "bone", label: "Condução óssea", description: "Para esportes ao ar livre" },
      ],
    },
    {
      id: "anc",
      question: "Cancelamento de ruído é importante?",
      options: [
        { value: "nao", label: "Não preciso", description: "Uso em ambientes calmos" },
        { value: "moderado", label: "Útil", description: "Para focar em tarefas" },
        { value: "essencial", label: "Essencial", description: "Trabalho em locais barulhentos" },
      ],
    },
    {
      id: "budget",
      question: "Qual sua faixa de orçamento?",
      options: [
        { value: "economico", label: "Econômico", description: "Até R$ 300" },
        { value: "intermediario", label: "Intermediário", description: "R$ 300 a R$ 1.000" },
        { value: "premium", label: "Premium", description: "Acima de R$ 1.000" },
      ],
    },
  ],
  smartwatch: [
    {
      id: "usage",
      question: "Para que você mais usaria?",
      options: [
        { value: "notificacoes", label: "Notificações", description: "Ver mensagens e ligações" },
        { value: "fitness", label: "Fitness", description: "Treinos e monitoramento" },
        { value: "saude", label: "Saúde", description: "ECG, SpO2, sono detalhado" },
      ],
    },
    {
      id: "ecosystem",
      question: "Qual seu ecossistema principal?",
      options: [
        { value: "apple", label: "Apple", description: "iPhone como celular principal" },
        { value: "android", label: "Android", description: "Samsung, Xiaomi, etc." },
        { value: "ambos", label: "Ambos", description: "Uso os dois ou troco sempre" },
      ],
    },
    {
      id: "battery",
      question: "Quanto tempo de bateria precisa?",
      options: [
        { value: "diaria", label: "1-2 dias", description: "Carrego todo dia" },
        { value: "semanal", label: "5-7 dias", description: "Uma carga por semana" },
        { value: "quinzenal", label: "14+ dias", description: "Bateria de longa duração" },
      ],
    },
    {
      id: "budget",
      question: "Qual sua faixa de orçamento?",
      options: [
        { value: "economico", label: "Econômico", description: "Até R$ 500" },
        { value: "intermediario", label: "Intermediário", description: "R$ 500 a R$ 2.000" },
        { value: "premium", label: "Premium", description: "Acima de R$ 2.000" },
      ],
    },
  ],
  camera: [
    {
      id: "usage",
      question: "Para que você usaria a câmera?",
      options: [
        { value: "casual", label: "Casual", description: "Viagens e fotos de família" },
        { value: "hobby", label: "Hobby", description: "Fotografia como passatempo sério" },
        { value: "profissional", label: "Profissional", description: "Trabalho e renda" },
      ],
    },
    {
      id: "type",
      question: "Qual tipo de câmera prefere?",
      options: [
        { value: "compacta", label: "Compacta", description: "Portátil e simples" },
        { value: "mirrorless", label: "Mirrorless", description: "Leve com lentes trocáveis" },
        { value: "dslr", label: "DSLR", description: "Robusta e versátil" },
      ],
    },
    {
      id: "video",
      question: "Gravação de vídeo é importante?",
      options: [
        { value: "nao", label: "Não muito", description: "Foco em fotografia" },
        { value: "moderado", label: "Moderado", description: "Vídeos ocasionais" },
        { value: "muito", label: "Muito", description: "Vídeo é prioridade igual" },
      ],
    },
    {
      id: "budget",
      question: "Qual sua faixa de orçamento?",
      options: [
        { value: "economico", label: "Econômico", description: "Até R$ 3.000" },
        { value: "intermediario", label: "Intermediário", description: "R$ 3.000 a R$ 8.000" },
        { value: "premium", label: "Premium", description: "Acima de R$ 8.000" },
      ],
    },
  ],
  videogame: [
    {
      id: "platform",
      question: "Qual plataforma você prefere?",
      options: [
        { value: "playstation", label: "PlayStation", description: "Exclusivos Sony" },
        { value: "xbox", label: "Xbox", description: "Game Pass e exclusivos Microsoft" },
        { value: "nintendo", label: "Nintendo", description: "Portabilidade e exclusivos Nintendo" },
      ],
    },
    {
      id: "usage",
      question: "Quanto você joga por semana?",
      options: [
        { value: "casual", label: "Casual", description: "Algumas horas nos fins de semana" },
        { value: "regular", label: "Regular", description: "Algumas horas por dia" },
        { value: "hardcore", label: "Hardcore", description: "Jogo diariamente, competitivo" },
      ],
    },
    {
      id: "games",
      question: "Que tipo de jogos você prefere?",
      options: [
        { value: "singleplayer", label: "Single-player", description: "Histórias e aventuras" },
        { value: "multiplayer", label: "Multiplayer", description: "Online com amigos" },
        { value: "familia", label: "Família", description: "Jogos para toda família" },
      ],
    },
    {
      id: "budget",
      question: "Qual sua faixa de orçamento?",
      options: [
        { value: "economico", label: "Econômico", description: "Até R$ 2.500" },
        { value: "intermediario", label: "Intermediário", description: "R$ 2.500 a R$ 4.000" },
        { value: "premium", label: "Premium", description: "Acima de R$ 4.000" },
      ],
    },
  ],
  monitor: [
    {
      id: "usage",
      question: "Para que você mais usa o monitor?",
      options: [
        { value: "trabalho", label: "Trabalho", description: "Office, programação, navegação" },
        { value: "design", label: "Design", description: "Edição de fotos e vídeos" },
        { value: "games", label: "Games", description: "Jogos competitivos ou casuais" },
      ],
    },
    {
      id: "size",
      question: "Qual tamanho ideal?",
      options: [
        { value: "pequeno", label: "Até 24\"", description: "Espaço limitado" },
        { value: "medio", label: "27-32\"", description: "Tamanho versátil" },
        { value: "grande", label: "34\"+ ou ultrawide", description: "Produtividade máxima" },
      ],
    },
    {
      id: "panel",
      question: "O que prioriza na tela?",
      options: [
        { value: "cores", label: "Cores", description: "IPS com cores precisas" },
        { value: "velocidade", label: "Velocidade", description: "Alta taxa de atualização" },
        { value: "contraste", label: "Contraste", description: "OLED ou VA para pretos" },
      ],
    },
    {
      id: "budget",
      question: "Qual sua faixa de orçamento?",
      options: [
        { value: "economico", label: "Econômico", description: "Até R$ 1.000" },
        { value: "intermediario", label: "Intermediário", description: "R$ 1.000 a R$ 3.000" },
        { value: "premium", label: "Premium", description: "Acima de R$ 3.000" },
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