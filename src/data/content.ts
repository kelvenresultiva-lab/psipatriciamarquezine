// Todo o conteúdo textual e de contato do site fica centralizado aqui.
// Edite os valores abaixo para customizar o site sem precisar mexer nos componentes.

const addressLine1 = "Avenida Trinta e Um de Março, 1485, Sala 01";
const addressLine2 = "Colônia do Marçal, São João del-Rei - MG";
const addressLandmark = "em cima da Farmácia Santa Terezinha";
const fullAddress = `${addressLine1}, ${addressLine2}`;

export const siteConfig = {
  professionalName: "Patrícia Marquezini",
  professionalNameShort: "Patrícia Marquezini",
  crp: "CRP 05-34660 / CRP04-IS01426",
  title: "Psicóloga Clínica e Terapeuta Cognitivo-Comportamental",
  city: "São João del-Rei - MG",
  phoneDisplay: "(32) 99936-0607",
  phoneWhatsapp: "5532999360607",
  email: "paty.marquezini@gmail.com",
  instagramHandle: "@paty.marquezini",
  instagramUrl: "https://www.instagram.com/paty.marquezini",
  addressLine1,
  addressLine2,
  addressLandmark,
  // Link para abrir no app/site do Google Maps (usado em botões "ver no mapa").
  mapsLinkUrl: `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}`,
  // URL de embed (usada no <iframe> da seção de mapa).
  mapsEmbedUrl: `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`,
} as const;

export const navLinks = [
  { label: "Sobre mim", href: "#sobre" },
  { label: "Como funciona", href: "#abordagem" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
] as const;

export const headerCta = {
  label: "AGENDAR ATENDIMENTO",
  href: `https://wa.me/${siteConfig.phoneWhatsapp}`,
};

export const heroContent = {
  title: "Patrícia Marquezini",
  subtitle: "PSICÓLOGA CLÍNICA E TCC",
  taglineStart: "Um espaço de acolhimento e escuta para que você encontre novos caminhos",
  taglineHighlight: "e cuide de si com respeito e segurança.",
  bullets: [
    "Atendimento online e presencial.",
    "Psicoterapia para adultos e orientação vocacional.",
    "Convênios Unimed e Fusex.",
  ],
  primaryCta: {
    label: "MAIS INFORMAÇÕES",
    href: `https://wa.me/${siteConfig.phoneWhatsapp}`,
  },
  secondaryCta: { label: "SOBRE MIM", href: "#sobre" },
  image: {
    src: "/images/hero.png",
    alt: "Patrícia Marquezini em seu espaço de atendimento",
  },
};

export const introContent = {
  heading: "Um espaço para",
  headingHighlight: "cuidar de si com respeito e segurança.",
  paragraph:
    "A terapia é um convite para compreender suas emoções e desenvolver recursos para viver com mais equilíbrio. Aqui, você encontra um espaço seguro, sigiloso e livre de julgamentos, fundamentado na Terapia Cognitivo-Comportamental.",
  items: [
    {
      icon: "message-heart",
      title: "Escuta sem julgamentos",
      description: "Você fala, é ouvido e respeitado em sua singularidade.",
    },
    {
      icon: "users",
      title: "Cuidado técnico e humanizado",
      description: "Conhecimento técnico unido a uma escuta sensível e acolhedora.",
    },
    {
      icon: "user",
      title: "Cuidado individualizado",
      description: "Cada processo é único, feito sob medida para você.",
    },
  ],
};

export const aboutContent = {
  experienceBadge: "TERAPEUTA COGNITIVO-COMPORTAMENTAL",
  image: {
    src: "/images/sobre-foto.png",
    alt: "Retrato de Patrícia Marquezini",
  },
  formationIcon: "graduation-cap",
  formationText:
    "Psicóloga com especialização em Avaliação Psicológica e Terapia Cognitivo-Comportamental.",
  eyebrow: "OLÁ, SOU PATRÍCIA",
  heading: "Uma trajetória dedicada ao cuidado emocional",
  paragraphs: [
    "Sou psicóloga e, acima de tudo, acredito no poder da escuta e do acolhimento. Ao longo da minha trajetória, acompanho pessoas em seus processos de dor, mudança e crescimento, oferecendo um espaço seguro onde cada história é respeitada em sua singularidade.",
    "Meu trabalho é fundamentado na Terapia Cognitivo-Comportamental, unindo conhecimento técnico a uma escuta sensível e humanizada, para que cada pessoa possa compreender suas emoções e desenvolver recursos para viver com mais equilíbrio e bem-estar.",
    "Além da prática clínica, atuo como especialista em Avaliação Psicológica e Psicossocial, Orientadora Vocacional, Implementadora da NR-01, Analista de Recursos Humanos e especialista em Psicologia Hospitalar e da Saúde, integrando diferentes experiências em benefício de quem busca cuidado e orientação.",
  ],
  ctaLabel: "VAMOS CONVERSAR?",
};

export const galleryContent = {
  eyebrow: "AMBIENTE SEGURO E DE FÁCIL ACESSO",
  heading:
    "Meu espaço de atendimentos foi pensado para que se sinta acolhido e confortável.",
  subtext: `O consultório fica em Colônia do Marçal, ${siteConfig.city}, ${siteConfig.addressLandmark}.`,
  images: [
    {
      src: "/images/consultorio-3.jpg",
      alt: "Entrada do consultório",
      objectPosition: "center",
    },
    {
      src: "/images/consultorio-1.jpg",
      alt: "Sala de atendimento com chaise longue e poltronas",
      objectPosition: "center",
    },
    {
      src: "/images/consultorio-2.jpg",
      alt: "Canto acolhedor da sala de atendimento",
      objectPosition: "center",
    },
  ],
};

// ATENÇÃO: depoimentos fictícios — preenchidos a pedido da cliente apenas
// para não deixar a seção vazia. Substituir pelos depoimentos reais antes
// de publicar o site em definitivo (depoimentos inventados apresentados
// como reais podem ser considerados enganosos).
export const testimonialsContent = {
  heading: "O que dizem sobre meu trabalho:",
  summary: {
    name: siteConfig.professionalNameShort,
    subtitle: "Psicóloga | Atendimento Presencial e Online",
  },
  reviews: [
    {
      name: "Camila R.",
      avatar: "woman",
      timeAgo: "há 3 semanas",
      rating: 5,
      text: "A Patrícia me ajudou muito a entender padrões de pensamento que eu repetia há anos. A abordagem cognitivo-comportamental é bem prática, saio de cada sessão com algo pra colocar em prática.",
    },
    {
      name: "Fernanda S.",
      avatar: "mother",
      timeAgo: "há 1 mês",
      rating: 5,
      text: "Fiz orientação vocacional com ela num momento de troca de carreira e foi essencial. Profissional muito atenciosa, ética e organizada. Recomendo demais.",
    },
    {
      name: "Juliana M.",
      avatar: "young-woman",
      timeAgo: "há 2 meses",
      rating: 5,
      text: "Atendimento online funcionou super bem pra minha rotina. Me senti acolhida desde a primeira sessão, sem nenhum julgamento. Uso o convênio Unimed e o processo de reembolso foi tranquilo.",
    },
  ],
} as const;

export const approachContent = {
  eyebrow: "COMO FUNCIONA MEU TRABALHO:",
  heading: "Áreas de atuação",
  subtext:
    "Mais de 10 anos de experiência unindo Psicologia Clínica e Saúde Mental no Trabalho — da APAE a consultorias em NR-01 para empresas.",
  items: [
    {
      icon: "sofa",
      title: "Psicoterapia Clínica",
      description:
        "Acolhimento e escuta qualificada para compreender emoções, trabalhar desafios e promover bem-estar, em todas as idades.",
    },
    {
      icon: "compass",
      title: "Orientação Profissional e Vocacional",
      description:
        "Apoio na descoberta de caminhos, escolhas e transições profissionais com mais clareza e propósito.",
    },
    {
      icon: "clipboard-list",
      title: "Avaliação Psicológica e Psicossocial",
      description:
        "Processos éticos e criteriosos que contribuem para decisões mais seguras e conscientes.",
    },
    {
      icon: "briefcase",
      title: "Consultoria para Empresas e NR-01",
      description:
        "Soluções em saúde mental, implementação da NR-01 e bem-estar organizacional para equipes mais saudáveis e produtivas.",
    },
    {
      icon: "presentation",
      title: "Palestras e Capacitações",
      description:
        "Conteúdo relevante e prático sobre saúde mental, desenvolvimento pessoal e profissional.",
    },
    {
      icon: "shield-alert",
      title: "Consultoria em Segurança Patrimonial",
      description:
        "Avaliação e organização de medidas para proteger pessoas, bens e instalações, com rotinas e treinamentos.",
    },
  ],
  ctaLabel: "FALAR NO WHATSAPP",
  badge: {
    heading: "Atendimento online e presencial",
    subtext: "Com escuta, sigilo e respeito.",
  },
  image: {
    src: "/images/abordagem-foto.png",
    alt: "Patrícia Marquezini sorrindo",
  },
};

export const benefitsContent = {
  eyebrow: "ALGUNS BENEFÍCIOS DA PSICOTERAPIA",
  heading: "Ambiente seguro, respeitoso, sigiloso e livre de julgamentos",
  subtext:
    "A psicoterapia oferece benefícios que vão muito além da sessão, refletindo em diversas áreas da sua vida.",
  items: [
    {
      number: "01",
      icon: "heart-pulse",
      title: "Controle das emoções",
      description:
        "Desenvolva maior consciência e equilíbrio emocional diante dos desafios do dia a dia.",
    },
    {
      number: "02",
      icon: "users-round",
      title: "Melhora nas relações",
      description:
        "Construa vínculos mais saudáveis com família, amigos e colegas a partir do autoconhecimento.",
    },
    {
      number: "03",
      icon: "shield-check",
      title: "Diminuição da agressividade",
      description:
        "Compreenda a origem de reações impulsivas e aprenda formas mais saudáveis de lidar com elas.",
    },
    {
      number: "04",
      icon: "moon",
      title: "Diminuição da insônia",
      description:
        "Alivie a ansiedade e os pensamentos acelerados que impactam diretamente a qualidade do sono.",
    },
  ],
};

export const faqContent = {
  info: {
    eyebrow: "DÚVIDAS FREQUENTES",
    heading: "Por que fazer terapia?",
    paragraphs: [
      "A terapia é um espaço de cuidado com a sua saúde mental, assim como você cuida da sua saúde física. Ninguém precisa estar em crise para começar um processo terapêutico.",
      "Buscar ajuda profissional é um passo de coragem em direção ao autoconhecimento e ao bem-estar emocional.",
    ],
    ctaLabel: "MAIS INFORMAÇÕES",
  },
  questions: [
    {
      question: "Como são as sessões de psicoterapia?",
      answer:
        "As sessões têm duração de 50 minutos e acontecem semanalmente, de forma presencial ou online, respeitando o sigilo profissional e o ritmo de cada paciente.",
    },
    {
      question: "Possui convênio ou plano de saúde?",
      answer:
        "Atendo pelos convênios Unimed e Fusex. Também é possível o atendimento particular, com emissão de recibo para solicitar reembolso junto ao seu plano de saúde, quando aplicável.",
    },
    {
      question: "A partir de que idade você atende?",
      answer:
        "Atendo adultos que desejam iniciar um processo de autoconhecimento, individualmente ou em orientação vocacional — o importante é o desejo de começar.",
    },
    {
      question: "Qual o endereço do consultório?",
      answer: `${siteConfig.addressLine1}, ${siteConfig.addressLine2} (${siteConfig.addressLandmark}).`,
    },
  ],
};

export const contactBarContent = [
  {
    icon: "phone",
    label: "Telefone / WhatsApp",
    value: siteConfig.phoneDisplay,
    href: `https://wa.me/${siteConfig.phoneWhatsapp}`,
  },
  {
    icon: "map-pin",
    label: "Endereço",
    value: `${siteConfig.addressLine1} — ${siteConfig.addressLine2} (${siteConfig.addressLandmark})`,
    href: siteConfig.mapsLinkUrl,
  },
  {
    icon: "mail",
    label: "E-mail",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: "instagram",
    label: "Instagram",
    value: siteConfig.instagramHandle,
    href: siteConfig.instagramUrl,
  },
] as const;

export const footerContent = {
  quickLinks: [
    { label: "Home", href: "#topo" },
    { label: "Sobre mim", href: "#sobre" },
    { label: "Consultório", href: "#consultorio" },
    { label: "Benefícios", href: "#beneficios" },
  ],
  schedule: {
    heading: "Horário de Atendimento",
    lines: ["Segunda a Sexta: 8h às 18h"],
    note: "As consultas necessitam ser previamente agendadas.",
  },
  ctaLabel: "AGENDAR CONSULTA",
  developerCredit: "Desenvolvido com cuidado.",
};
