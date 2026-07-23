export interface SeoLandingPageData {
  id: string;
  slug: string;
  categoryGroup: "Eventos" | "Casamentos" | "Aniversários" | "Formaturas" | "Eventos Corporativos" | "Datas Especiais" | "Público";
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroImage: string;
  heroImageAlt: string;
  badge: string;
  description: string;
  introText: string[];
  features: { title: string; desc: string }[];
  recommendedCategorySlugs: string[];
  faq: { question: string; answer: string }[];
  eventTips: string[];
}

export const seoLandingPages: SeoLandingPageData[] = [
  // ==================== 1. EVENTOS ====================
  {
    id: "locacao-para-eventos-porto-alegre",
    slug: "locacao-para-eventos-porto-alegre",
    categoryGroup: "Eventos",
    title: "Locação para Eventos Porto Alegre",
    h1: "Locação para Eventos em Porto Alegre e Região Metropolitana",
    metaTitle: "Locação para Eventos em Porto Alegre | Aluguel de Materiais Fest Sul",
    metaDescription: "Empresa especializada em locação para eventos em Porto Alegre: aluguel de louças, taças, talheres, rechauds, toalhas, mesas e cadeiras com entrega pontual e higienização rigorosa.",
    keywords: ["locacao para eventos porto alegre", "aluguel de material para eventos porto alegre", "aluguel de mesas e cadeiras porto alegre", "locacao para festas rs"],
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO6vZEeGiFjNIt9DAktn6E4JpbpoMAwBCf9pJP035bDpciMX8VdQMe9JI&s=10",
    heroImageAlt: "Locação completa para eventos e festas em Porto Alegre - Fest Sul Locações",
    badge: "Soluções Completas para Eventos",
    description: "Tudo o que você precisa em aluguel de louças, taças, talheres, equipamentos de buffet, mesas e cadeiras para realizar eventos inesquecíveis em Porto Alegre.",
    introText: [
      "A Fest Sul Locações é referência no mercado de locação para eventos em Porto Alegre e região metropolitana. Atendemos desde recepções intimistas e reuniões familiares até grandes casamentos, formaturas e eventos corporativos de grande porte.",
      "Oferecemos um acervo completo de utensílios de mesa posta, como pratos de porcelana filetados, taças de cristal lapidado, talheres gourmet de aço inox polido, rechauds retangulares e redondos em banho-maria, toalhas de mesa em oxford e jacquard, além de mesas de banquete e cadeiras Tiffany elegantes.",
      "Todos os nossos materiais passam por um rigoroso processo de higienização industrial e são embalados com proteção especial para garantir conveniência, segurança e pontualidade na entrega no local do seu evento."
    ],
    features: [
      { title: "Acervo Variado e Higienizado", desc: "Produtos embalados e inspecionados item a item para pronto uso nas mesas." },
      { title: "Entrega e Retirada Agendadas", desc: "Pontualidade garantida nos principais salões, clubes, condomínios e residências de Porto Alegre." },
      { title: "Parcelamento Facilitado", desc: "Pagamento facilitado no cartão de crédito em até várias parcelas para o seu orçamento." },
      { title: "Atendimento Personalizado", desc: "Consultoria e auxílio direto no cálculo exato de itens por convidado." }
    ],
    recommendedCategorySlugs: ["locacao-loucas", "locacao-tacas-porto-alegre", "locacao-talheres", "locacao-rechaud-porto-alegre", "locacao-mesas-cadeiras"],
    faq: [
      { question: "Qual a antecedência ideal para reservar materiais de eventos?", answer: "Recomendamos solicitar o orçamento com 15 a 30 dias de antecedência para garantir a disponibilidade completa de quantidades, especialmente em datas festivas de fim de ano ou temporadas de casamentos." },
      { question: "A Fest Sul faz entrega em Canoas, Novo Hamburgo e Grande Porto Alegre?", answer: "Sim! Entregamos e recolhemos os materiais em Porto Alegre, Canoas, Esteio, Sapucaia, São Leopoldo, Novo Hamburgo, Gravataí, Cachoeirinha e Viamão." },
      { question: "Preciso lavar as louças e talheres antes de devolver?", answer: "Não é necessário lavar com detergente! Pedimos apenas para remover os restos de alimentos sólidos dos pratos antes do acondicionamento nas caixas de transporte." }
    ],
    eventTips: [
      "Calcule cerca de 1,5 a 2 taças por convidado dependendo das bebidas servidas (água, espumante, vinho).",
      "Reserve uma margem de segurança de 10% a 15% a mais de pratos e talheres para trocas durante o buffet.",
      "Certifique-se do espaço físico disponível para a montagem de mesas e movimentação de garçons."
    ]
  },
  {
    id: "material-para-eventos-porto-alegre",
    slug: "material-para-eventos-porto-alegre",
    categoryGroup: "Eventos",
    title: "Material para Eventos Porto Alegre",
    h1: "Aluguel de Material para Eventos em Porto Alegre",
    metaTitle: "Material para Eventos em Porto Alegre | Aluguel de Louças e Utensílios",
    metaDescription: "Procurando material para eventos em Porto Alegre? Alugue louças, copos, taças, talheres, toalhas de mesa e suportes na Fest Sul Locações. Solicite orçamento rápido via WhatsApp.",
    keywords: ["material para eventos porto alegre", "aluguel de loucas e copos porto alegre", "utensilios para festas porto alegre"],
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO6vZEeGiFjNIt9DAktn6E4JpbpoMAwBCf9pJP035bDpciMX8VdQMe9JI&s=10",
    heroImageAlt: "Material para eventos e mesa posta em Porto Alegre",
    badge: "Mesa Posta & Utensílios",
    description: "Fornecemos materiais de alta qualidade para servir seus convidados com sofisticação em Porto Alegre.",
    introText: [
      "Seja para um jantar formal, coquetel de lançamento, aniversário ou casamento, o material servido à mesa faz toda a diferença na experiência dos convidados.",
      "Na Fest Sul Locações, disponibilizamos pratos de porcelana branca, taças de cristal para diversos rótulos, copos para cerveja e chopp, faqueiros completos em inox e jogos de mesa higienizados."
    ],
    features: [
      { title: "Porcelana de Primeira Linha", desc: "Pratos rasos, fundos e de sobremesa resistentes e impecáveis." },
      { title: "Cristaleria e Vidraria", desc: "Taças brilhantes e sem marcas d'água." },
      { title: "Inox Polido", desc: "Talheres gourmet confortáveis e elegantes." }
    ],
    recommendedCategorySlugs: ["locacao-loucas", "locacao-talheres", "locacao-tacas-porto-alegre"],
    faq: [
      { question: "Como é calculado o valor do frete para entrega dos materiais?", answer: "O frete é calculado de acordo com o bairro e local do evento em Porto Alegre ou região metropolitana." }
    ],
    eventTips: ["Defina o cardápio (jantar empratado, buffet ou finger food) para determinar os materiais necessários."]
  },
  {
    id: "equipamentos-para-eventos",
    slug: "equipamentos-para-eventos",
    categoryGroup: "Eventos",
    title: "Equipamentos para Eventos",
    h1: "Locação de Equipamentos para Eventos e Buffet em Porto Alegre",
    metaTitle: "Equipamentos para Eventos Porto Alegre | Rechauds e Suportes de Buffet",
    metaDescription: "Aluguel de equipamentos para eventos em Porto Alegre: rechauds inox banho-maria, cubas duplas, travessas térmicas, javras e utensílios de servir para banquetes e festas.",
    keywords: ["equipamentos para eventos", "aluguel de rechaud porto alegre", "equipamentos de buffet para aluguel"],
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO6vZEeGiFjNIt9DAktn6E4JpbpoMAwBCf9pJP035bDpciMX8VdQMe9JI&s=10",
    heroImageAlt: "Rechauds e equipamentos de buffet para eventos",
    badge: "Estrutura de Buffet & Servir",
    description: "Equipamentos profissionais para manter pratos aquecidos e servidos com praticidade em banquetes.",
    introText: [
      "Manter a comida quente e saborosa ao longo de todo o evento é fundamental para o sucesso de qualquer comemoração. A Fest Sul oferece a melhor linha de rechauds e equipamentos de buffet em Porto Alegre.",
      "Disponibilizamos rechauds retangulares de 9 litros com cubas simples ou duplas, rechauds redondos para massas e molhos, travessas de servir e utensílios de apoio."
    ],
    features: [
      { title: "Aquecimento Uniforme", desc: "Sistema de banho-maria eficiente para conservar a temperatura." },
      { title: "Aço Inox de Alta Qualidade", desc: "Apresentação limpa, moderna e higiênica." }
    ],
    recommendedCategorySlugs: ["locacao-rechaud-porto-alegre", "locacao-loucas"],
    faq: [
      { question: "Os rechauds acompanham o acendedor/spirtus?", answer: "Orientamos sobre os insumos necessários e fornecemos rechauds completos com suporte para espiriteira e cubas de água e alimentos." }
    ],
    eventTips: ["Para eventos com mais de 50 pessoas, utilize pelo menos dois rechauds para agilizar a fila do buffet."]
  },
  {
    id: "estrutura-para-eventos",
    slug: "estrutura-para-eventos",
    categoryGroup: "Eventos",
    title: "Estrutura para Eventos",
    h1: "Locação de Estrutura, Mesas e Cadeiras para Eventos em Porto Alegre",
    metaTitle: "Estrutura para Eventos Porto Alegre | Aluguel de Mesas e Cadeiras",
    metaDescription: "Monte a estrutura perfeita para seu evento com a Fest Sul Locações. Aluguel de mesas redondas, pranchões, cadeiras Tiffany e toalhas nobres em Porto Alegre.",
    keywords: ["estrutura para eventos porto alegre", "locacao de mesas para festas", "cadeiras tiffany porto alegre"],
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO6vZEeGiFjNIt9DAktn6E4JpbpoMAwBCf9pJP035bDpciMX8VdQMe9JI&s=10",
    heroImageAlt: "Estrutura de mesas e cadeiras para eventos em Porto Alegre",
    badge: "Móveis & Estrutura de Recepção",
    description: "Estrutura completa de mobiliário e acomodação de convidados para eventos de pequeno, médio e grande porte.",
    introText: [
      "Uma estrutura bem planejada garante o conforto dos convidados e a fluidez do evento. A Fest Sul disponibiliza mobiliário de alto padrão para salões de festas, áreas externas, clubes e condomínios em Porto Alegre."
    ],
    features: [
      { title: "Mesas Redondas e Pranchões", desc: "Ideais para acomodar de 6 a 10 pessoas confortavelmente." },
      { title: "Cadeiras Tiffany e Bistrô", desc: "Design clássico, firmeza e elegância em todas as acomodações." }
    ],
    recommendedCategorySlugs: ["locacao-mesas-cadeiras", "locacao-toalhas-guardanapos"],
    faq: [
      { question: "Qual a capacidade de lugares das mesas redondas?", answer: "Nossas mesas redondas de 1,20m acomodam 6 pessoas e as de 1,50m acomodam 8 a 10 pessoas confortavelmente." }
    ],
    eventTips: ["Deixe pelo menos 1,20m de circulação entre as mesas para passagem de convidados e garçons."]
  },
  {
    id: "locacao-de-equipamentos-para-festas",
    slug: "locacao-de-equipamentos-para-festas",
    categoryGroup: "Eventos",
    title: "Locação de Equipamentos para Festas",
    h1: "Locação de Equipamentos e Utensílios para Festas em Porto Alegre",
    metaTitle: "Locação de Equipamentos para Festas em Porto Alegre | Fest Sul",
    metaDescription: "Precisa alugar equipamentos para sua festa? Oferecemos rechauds, jarras, baldes de gelo, taças e talheres com entrega rápida em Porto Alegre e região.",
    keywords: ["locacao de equipamentos para festas porto alegre", "aluguel de materiais de festa rs"],
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO6vZEeGiFjNIt9DAktn6E4JpbpoMAwBCf9pJP035bDpciMX8VdQMe9JI&s=10",
    heroImageAlt: "Equipamentos para festas e buffet em Porto Alegre",
    badge: "Equipamentos & Festas",
    description: "Soluções práticas e higienizadas para garantir um serviço impecável na sua comemoração.",
    introText: [
      "Simplifique a organização da sua festa com a locação de equipamentos profissionais da Fest Sul. Garantimos a pontualidade e o estado impecável de cada item contratado."
    ],
    features: [
      { title: "Equipamentos Testados e Limpos", desc: "Prontos para uso sem dores de cabeça no dia da festa." }
    ],
    recommendedCategorySlugs: ["locacao-rechaud-porto-alegre", "locacao-tacas-porto-alegre"],
    faq: [
      { question: "Possuem atendimento para festas em finais de semana?", answer: "Sim! Entregamos previamente ou no dia combinado conforme o cronograma do salão ou residência." }
    ],
    eventTips: ["Confirme a voltagem e os pontos de tomada caso utilize equipamentos elétricos adicionais."]
  },

  // ==================== 2. CASAMENTOS ====================
  {
    id: "locacao-para-casamento-porto-alegre",
    slug: "locacao-para-casamento-porto-alegre",
    categoryGroup: "Casamentos",
    title: "Locação para Casamento Porto Alegre",
    h1: "Aluguel de Material e Louças para Casamento em Porto Alegre",
    metaTitle: "Locação para Casamento em Porto Alegre | Louças, Taças e Cadeiras Tiffany",
    metaDescription: "Transforme o seu casamento com a Fest Sul Locações: aluguel de louças de porcelana filetadas a ouro, taças de cristal, talheres gourmet, toalhas jacquard e cadeiras Tiffany em Porto Alegre.",
    keywords: ["locacao para casamento porto alegre", "aluguel de loucas casamento", "cadeiras tiffany casamento porto alegre"],
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO6vZEeGiFjNIt9DAktn6E4JpbpoMAwBCf9pJP035bDpciMX8VdQMe9JI&s=10",
    heroImageAlt: "Mesa posta de casamento decorada com porcelana e taças em Porto Alegre",
    badge: "Casamento dos Sonhos",
    description: "Equipamos o seu casamento com louças nobres, taças de cristal lapidado e mobiliário elegante para uma celebração memorável.",
    introText: [
      "O dia do casamento exige perfeição em cada detalhe. A mesa posta é um dos pontos altos da recepção, transmitindo o cuidado e o carinho dos noivos aos convidados.",
      "A Fest Sul Locações fornece jogos completos de porcelana branca filetada, taças de cristal para espumante, vinho e água, faqueiros gourmet inox e toalhas com acabamento refinado para recepções de casamento em Porto Alegre e serra gaúcha.",
      "Crie composições deslumbrantes que valorizam a gastronomia do evento e encantam fotógrafos e convidados."
    ],
    features: [
      { title: "Linha Nobre para Noivas", desc: "Porcelanas filetadas a ouro e pratos fundos/rasos de alto padrão." },
      { title: "Taças de Cristal Elegantes", desc: "Proporções perfeitas para brinde de espumantes e serviço de vinhos finos." },
      { title: "Cadeiras Tiffany Brancas/Douradas", desc: "Acomodação charmosa e confortável para o jantar e cerimônia." },
      { title: "Entrega Cuidada no Cerimonial", desc: "Alinhamento com cerimonialistas e decoradores da região." }
    ],
    recommendedCategorySlugs: ["locacao-loucas", "locacao-tacas-porto-alegre", "locacao-talheres", "locacao-mesas-cadeiras", "locacao-toalhas-guardanapos"],
    faq: [
      { question: "É possível agendar uma amostra para teste de mesa posta com a decoradora?", answer: "Sim! Podemos separar unidades para verificação prévia de combinações com sousplats e arranjos florais." },
      { question: "Vocês atendem casamentos em sítios e fazendas na Região Metropolitana?", answer: "Sim, entregamos em quintas, sítios de eventos em Viamão, Eldorado do Sul, Gravataí e toda a região." }
    ],
    eventTips: [
      "Inclua 10% a mais de taças de espumante para o momento do brinde e cortesias durante a festa.",
      "Combine o tom das toalhas (off-white, branco ou jacquard) com a paleta de cores dos arranjos da mesa dos noivos."
    ]
  },
  {
    id: "aluguel-de-material-para-casamento",
    slug: "aluguel-de-material-para-casamento",
    categoryGroup: "Casamentos",
    title: "Aluguel de Material para Casamento",
    h1: "Aluguel de Material Completo para Casamento em Porto Alegre",
    metaTitle: "Aluguel de Material para Casamento Porto Alegre | Fest Sul",
    metaDescription: "Encontre todo o material para recepção de casamento em Porto Alegre: pratos, talheres, copos, taças de cristal, rechauds e toalhas engomadas com preço justo e facilidade.",
    keywords: ["aluguel de material para casamento porto alegre", "utensilios casamento aluguel"],
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO6vZEeGiFjNIt9DAktn6E4JpbpoMAwBCf9pJP035bDpciMX8VdQMe9JI&s=10",
    heroImageAlt: "Material sofisticado para aluguel de recepção de casamento",
    badge: "Recepção de Casamento",
    description: "Materiais higienizados e padronizados para garantir requinte e tranquilidade no seu grande dia.",
    introText: [
      "Planejar um casamento demanda muitos fornecedores. Simplifique contratando todo o acervo de louças, taças e talheres com a Fest Sul Locações.",
      "Garantimos padronização estética de todas as peças, embalagens higiênicas lacradas e pontualidade na entrega no local do evento."
    ],
    features: [
      { title: "Padronização Impecável", desc: "Todas as peças de uma mesma linha para harmonia visual das mesas." }
    ],
    recommendedCategorySlugs: ["locacao-loucas", "locacao-talheres", "locacao-tacas-porto-alegre"],
    faq: [
      { question: "Como funciona a devolução dos materiais pós-casamento?", answer: "Analisamos a data e horário de retirada junto ao local do evento, normalmente no dia seguinte pela manhã." }
    ],
    eventTips: ["Alinhe com o buffet o cardápio exato para definir o número de pratos de entrada, prato principal e sobremesa."]
  },
  {
    id: "loucas-para-casamento",
    slug: "loucas-para-casamento",
    categoryGroup: "Casamentos",
    title: "Louças para Casamento",
    h1: "Aluguel de Louças de Porcelana para Casamento em Porto Alegre",
    metaTitle: "Louças para Casamento em Porto Alegre | Pratos de Porcelana Finesse",
    metaDescription: "Aluguel de louças de porcelana para casamento em Porto Alegre. Pratos rasos, fundos e de sobremesa filetados para uma mesa posta inesquecível.",
    keywords: ["loucas para casamento porto alegre", "aluguel de pratos de porcelana casamento"],
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO6vZEeGiFjNIt9DAktn6E4JpbpoMAwBCf9pJP035bDpciMX8VdQMe9JI&s=10",
    heroImageAlt: "Louças de porcelana refinadas para casamento em Porto Alegre",
    badge: "Porcelanas de Casamento",
    description: "Pratos de porcelana branca com acabamento impecável para compor banquetes nupciais de prestígio.",
    introText: [
      "A porcelana branca é o clássico atemporal dos casamentos. Nossos pratos oferecem brilho, peso equilibrado e acabamento refinado para valorizar cada empratamento."
    ],
    features: [
      { title: "Acabamento Premium", desc: "Pratos impecáveis sem lascas ou riscos de uso." }
    ],
    recommendedCategorySlugs: ["locacao-loucas"],
    faq: [
      { question: "Possuem sousplats para acompanhar os pratos?", answer: "Consulte nosso atendimento sobre sousplats e combinações com nossas louças de porcelana." }
    ],
    eventTips: ["Use pratos rasos para o prato principal e pratos fundos caso haja sopas ou consumês na entrada."]
  },
  {
    id: "tacas-para-casamento",
    slug: "tacas-para-casamento",
    categoryGroup: "Casamentos",
    title: "Taças para Casamento",
    h1: "Aluguel de Taças de Cristal para Casamento em Porto Alegre",
    metaTitle: "Taças para Casamento em Porto Alegre | Cristal para Vinho, Espumante e Água",
    metaDescription: "Locação de taças de cristal para casamento em Porto Alegre. Taças flute para espumante, taças de vinho tinto e branco e taças de água de alta transparência.",
    keywords: ["tacas para casamento porto alegre", "aluguel de tacas de cristal casamento", "tacas espumante casamento"],
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO6vZEeGiFjNIt9DAktn6E4JpbpoMAwBCf9pJP035bDpciMX8VdQMe9JI&s=10",
    heroImageAlt: "Taças de cristal para brinde de casamento em Porto Alegre",
    badge: "Brinde Nupcial",
    description: "Cristaleria fina para proporcionar um brinde inesquecível ao casal e seus convidados.",
    introText: [
      "O som do brinde com taças de cristal verdadeiro marca o início de uma nova fase. Nossas taças possuem alta transparência, brilho límpido e acústica perfeita."
    ],
    features: [
      { title: "Linha Flute e Bojudas", desc: "Modelos específicos para preservar o perlage dos espumantes e o aroma dos vinhos." }
    ],
    recommendedCategorySlugs: ["locacao-tacas-porto-alegre"],
    faq: [
      { question: "As taças já vêm limpas e embaladas?", answer: "Sim! São lavadas em termo-desinfetadoras e embaladas em caixas plásticas higiênicas para imediato uso." }
    ],
    eventTips: ["Reserve taças de água para todas as mesas e distribua as taças de espumante próximo à hora do bolo e brinde."]
  },
  {
    id: "mesas-para-casamento",
    slug: "mesas-para-casamento",
    categoryGroup: "Casamentos",
    title: "Mesas para Casamento",
    h1: "Aluguel de Mesas Redondas e Comunitárias para Casamento em Porto Alegre",
    metaTitle: "Mesas para Casamento Porto Alegre | Aluguel de Mesas Redondas e Pranchões",
    metaDescription: "Aluguel de mesas para casamento em Porto Alegre: mesas redondas familiares, pranchões para mesas comunitárias e mesas de apoio para doces com entrega no local.",
    keywords: ["mesas para casamento porto alegre", "aluguel de mesas para festas de casamento"],
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO6vZEeGiFjNIt9DAktn6E4JpbpoMAwBCf9pJP035bDpciMX8VdQMe9JI&s=10",
    heroImageAlt: "Mesas redondas montadas para recepção de casamento em Porto Alegre",
    badge: "Mobiliário Nupcial",
    description: "Mesas resistentes e bem niveladas para acomodar familiares e amigos com conforto total.",
    introText: [
      "Crie a disposição perfeita no salão de recepção. Oferecemos mesas redondas para 6, 8 e 10 lugares, além de pranchões para compor a desejada mesa comunitária dos padrinhos."
    ],
    features: [
      { title: "Nivelamento Firme", desc: "Estruturas sólidas para suportar a mesa posta e arranjos de centro." }
    ],
    recommendedCategorySlugs: ["locacao-mesas-cadeiras", "locacao-toalhas-guardanapos"],
    faq: [
      { question: "Qual o tamanho da toalha ideal para mesa de 8 lugares?", answer: "Recomendamos toalhas de 2,80m ou 3,00m de diâmetro para ter caimento até próximo ao chão." }
    ],
    eventTips: ["Mesas de 8 lugares são as mais populares em casamentos por otimizarem espaço e conversa entre os convidados."]
  },
  {
    id: "cadeiras-tiffany-casamento",
    slug: "cadeiras-tiffany-casamento",
    categoryGroup: "Casamentos",
    title: "Cadeiras Tiffany Casamento",
    h1: "Aluguel de Cadeiras Tiffany para Casamento em Porto Alegre",
    metaTitle: "Cadeiras Tiffany Casamento Porto Alegre | Aluguel de Cadeiras de Luxo",
    metaDescription: "Locação de cadeiras Tiffany para casamento em Porto Alegre. Design clássico, resistentes e confortáveis com estofado para a cerimônia e salão de festa.",
    keywords: ["cadeiras tiffany casamento porto alegre", "aluguel de cadeiras tiffany rs", "cadeiras brancas casamento"],
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO6vZEeGiFjNIt9DAktn6E4JpbpoMAwBCf9pJP035bDpciMX8VdQMe9JI&s=10",
    heroImageAlt: "Cadeiras Tiffany alinhadas para cerimônia e recepção de casamento",
    badge: "Sofisticação & Estilo",
    description: "O modelo de cadeira mais desejado pelas noivas para compor o cenário da cerimônia e do jantar.",
    introText: [
      "A cadeira Tiffany é um ícone global de elegância em casamentos. Seu encastre harmônico e linhas finas proporcionam fotos memoráveis e um ambiente refinado."
    ],
    features: [
      { title: "Estofado Confortável", desc: "Assento acolchoado para garantir o bem-estar durante todo o jantar." }
    ],
    recommendedCategorySlugs: ["locacao-mesas-cadeiras"],
    faq: [
      { question: "Vocês possuem cadeiras Tiffany brancas ou transparentes?", answer: "Consulte a disponibilidade de cores no momento do orçamento para alinhamento com sua decoração." }
    ],
    eventTips: ["Defina um corredor amplo na cerimônia para a entrada da noiva com pelo menos 1,80m de largura."]
  },

  // ==================== 3. ANIVERSÁRIOS ====================
  {
    id: "locacao-para-aniversario-porto-alegre",
    slug: "locacao-para-aniversario-porto-alegre",
    categoryGroup: "Aniversários",
    title: "Locação para Aniversário Porto Alegre",
    h1: "Aluguel de Material e Louças para Aniversários em Porto Alegre",
    metaTitle: "Locação para Aniversário Porto Alegre | Aluguel de Louças e Mesas",
    metaDescription: "Vai comemorar seu aniversário em Porto Alegre? Alugue louças, copos de chopp/cerveja, taças de vinho, pratos de bolo, rechauds, mesas e cadeiras com a Fest Sul.",
    keywords: ["locacao para aniversario porto alegre", "aluguel de loucas festa de aniversario", "material para festa de aniversario porto alegre"],
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO6vZEeGiFjNIt9DAktn6E4JpbpoMAwBCf9pJP035bDpciMX8VdQMe9JI&s=10",
    heroImageAlt: "Festa de aniversário com louças e mesa decorada em Porto Alegre",
    badge: "Celebre com Estilo",
    description: "Praticidade completa para realizar seu aniversário em salões de condomínio, residências ou casas de festas em Porto Alegre.",
    introText: [
      "Comemorar mais um ano de vida rodeado de amigos e família merece uma infraestrutura impecável. Evite o uso de descartáveis e eleve o nível da sua festa com louças de porcelana e copos de vidro de alta qualidade.",
      "A Fest Sul Locações entrega jogos de pratos de bolo, pratos rasos para almoço/jantar, faqueiros inox, copos de chopp e whisky, rechauds para manter os salgados quentes e conjuntos de mesas e cadeiras dobráveis ou confortáveis."
    ],
    features: [
      { title: "Entrega em Condomínios e Casas", desc: "Agendamento flexível para alinhamento com o horário do salão." },
      { title: "Praticidade pós-festa", desc: "Devolva sem precisar lavar com sabão; apenas recolha o excesso de alimento." },
      { title: "Valores Acessíveis", desc: "Pacotes sob medida para a quantidade exata de convidados da sua lista." }
    ],
    recommendedCategorySlugs: ["locacao-loucas", "locacao-copos-eventos-porto-alegre", "locacao-rechaud-porto-alegre", "locacao-mesas-cadeiras"],
    faq: [
      { question: "É possível alugar itens para festas menores de 20 a 30 pessoas?", answer: "Com certeza! Atendemos desde pequenos almoços familiares até grandes comemorações de 15 anos e aniversários de adultos." }
    ],
    eventTips: ["Calcule pratos e garfos de sobremesa adicionais para a hora do bolo de aniversário."]
  },
  {
    id: "material-para-aniversario",
    slug: "material-para-aniversario",
    categoryGroup: "Aniversários",
    title: "Material para Aniversário",
    h1: "Locação de Material para Festa de Aniversário em Porto Alegre",
    metaTitle: "Material para Aniversário em Porto Alegre | Copos, Pratos e Talheres",
    metaDescription: "Tudo em material para aniversário em Porto Alegre: copos long drink, copos de chopp, pratos de porcelana, talheres inox e travessas para buffet.",
    keywords: ["material para aniversario porto alegre", "aluguel de copos para aniversario"],
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO6vZEeGiFjNIt9DAktn6E4JpbpoMAwBCf9pJP035bDpciMX8VdQMe9JI&s=10",
    heroImageAlt: "Conjunto de talheres e louças para aniversário",
    badge: "Mesa & Bar de Aniversário",
    description: "Utensílios práticos para servir bebidas geladas, salgados e doces com agilidade e elegância.",
    introText: [
      "Garanta que nada falte no bar ou no buffet da sua festa de aniversário. Nossos copos de vidro e talheres polidos enriquecem a recepção."
    ],
    features: [
      { title: "Variedade de Copos", desc: "Copos para cerveja, refrigerante, sucos, whisky e gin para o seu bar." }
    ],
    recommendedCategorySlugs: ["locacao-copos-eventos-porto-alegre", "locacao-talheres", "locacao-loucas"],
    faq: [
      { question: "Vocês possuem baldes de gelo ou jarras?", answer: "Sim! Temos jarras de suco/água em vidro e utensílios de apoio para bebidas." }
    ],
    eventTips: ["Copos de vidro mantêm as bebidas geladas por mais tempo que copos descartáveis."]
  },
  {
    id: "loucas-para-aniversario",
    slug: "loucas-para-aniversario",
    categoryGroup: "Aniversários",
    title: "Louças para Aniversário",
    h1: "Aluguel de Louças de Porcelana para Festa de Aniversário",
    metaTitle: "Louças para Aniversário Porto Alegre | Pratos de Almoço, Jantar e Bolo",
    metaDescription: "Alugue pratos de porcelana para seu aniversário em Porto Alegre. Pratos rasos para refeição e pratos menores de sobremesa para o bolo de aniversário.",
    keywords: ["loucas para aniversario porto alegre", "aluguel de pratos de bolo porto alegre"],
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO6vZEeGiFjNIt9DAktn6E4JpbpoMAwBCf9pJP035bDpciMX8VdQMe9JI&s=10",
    heroImageAlt: "Pratos de porcelana higienizados para festa de aniversário",
    badge: "Serviço de Mesa",
    description: "Louças higienizadas que garantem requinte na hora de servir o almoço, jantar ou o tradicional bolo.",
    introText: [
      "Sirva seus convidados com pratos brancos impecáveis. A porcelain da Fest Sul combina com qualquer tema decorativo de aniversário."
    ],
    features: [
      { title: "Resistência e Higiene", desc: "Peças higienizadas termicamente para total segurança dos convidados." }
    ],
    recommendedCategorySlugs: ["locacao-loucas"],
    faq: [
      { question: "Os pratos de sobremesa servem para o bolo?", answer: "Sim! Os pratos de sobremesa de 19cm são o tamanho exato para servir fatias de bolo e tortas." }
    ],
    eventTips: ["Separe pratos de sobremesa adicionais caso sirva docinhos finos na mesa principal."]
  },
  {
    id: "tacas-para-aniversario",
    slug: "tacas-para-aniversario",
    categoryGroup: "Aniversários",
    title: "Taças para Aniversário",
    h1: "Locação de Taças para Aniversário em Porto Alegre",
    metaTitle: "Taças para Aniversário Porto Alegre | Taças de Espumante e Vinho",
    metaDescription: "Aluguel de taças de cristal para comemoração de aniversário em Porto Alegre. Brinde seus 15, 30, 50 ou 60 anos com taças elegantes da Fest Sul.",
    keywords: ["tacas para aniversario porto alegre", "aluguel de tacas espumante aniversario"],
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO6vZEeGiFjNIt9DAktn6E4JpbpoMAwBCf9pJP035bDpciMX8VdQMe9JI&s=10",
    heroImageAlt: "Taças de cristal para brinde de aniversário em Porto Alegre",
    badge: "Brinde Especial",
    description: "Taças de cristal para brindar datas marcantes com amigos e familiares.",
    introText: [
      "Das comemorações de 15 anos aos marcantes 50 ou 60 anos, um brinde de aniversário merece taças de cristal verdadeiro com brilho e elegância."
    ],
    features: [
      { title: "Taças Flute e Copos de Gin", desc: "Escolhas perfeitas para drinks e brinde de espumante." }
    ],
    recommendedCategorySlugs: ["locacao-tacas-porto-alegre"],
    faq: [
      { question: "Qual a quantidade recomendada de taças por pessoa?", answer: "Recomendamos de 1,5 a 2 taças por convidado para cobrir água/refrigerante e bebidas alcoólicas." }
    ],
    eventTips: ["Mantenha as taças de espumante agrupadas na mesa do bolo antes da hora do 'Parabéns'."]
  },
  {
    id: "aluguel-de-mesas-para-aniversario",
    slug: "aluguel-de-mesas-para-aniversario",
    categoryGroup: "Aniversários",
    title: "Aluguel de Mesas para Aniversário",
    h1: "Aluguel de Mesas e Cadeiras para Aniversário em Porto Alegre",
    metaTitle: "Aluguel de Mesas para Aniversário Porto Alegre | Fest Sul Locações",
    metaDescription: "Precisa de mesas e cadeiras para sua festa de aniversário? Alugue conjuntos confortáveis e bem conservados com entrega pontual em Porto Alegre.",
    keywords: ["aluguel de mesas para aniversario porto alegre", "mesas para festa de aniversario"],
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO6vZEeGiFjNIt9DAktn6E4JpbpoMAwBCf9pJP035bDpciMX8VdQMe9JI&s=10",
    heroImageAlt: "Aluguel de mesas e cadeiras para festa de aniversário",
    badge: "Acomodação de Convidados",
    description: "Mobiliário ideal para garantir o conforto de adultos e crianças durante a celebração.",
    introText: [
      "Acomode todos os seus convidados com ergonomia e espaço. Dispomos de mesas de refeição e cadeiras resistentes e higienizadas."
    ],
    features: [
      { title: "Estruturas Limpas e Estáveis", desc: "Mesas prontas para receber toalhas e arranjos festivos." }
    ],
    recommendedCategorySlugs: ["locacao-mesas-cadeiras", "locacao-toalhas-guardanapos"],
    faq: [
      { question: "Entregam no salão de festas do meu prédio?", answer: "Sim! Fazemos a entrega no salão de festas do seu condomínio com agendamento." }
    ],
    eventTips: ["Considere colocar mesas para os convidados e uma mesa reservada para o bolo e doces."]
  },

  // ==================== 4. FORMATURAS ====================
  {
    id: "locacao-para-formatura",
    slug: "locacao-para-formatura",
    categoryGroup: "Formaturas",
    title: "Locação para Formatura",
    h1: "Locação de Materiais para Recepção de Formatura em Porto Alegre",
    metaTitle: "Locação para Formatura em Porto Alegre | Aluguel de Louças e Taças Fest Sul",
    metaDescription: "Comemore a conquista da graduação com sofisticação! Aluguel de louças, taças de cristal, faqueiros gourmet, rechauds e mesas para festa de formatura em Porto Alegre.",
    keywords: ["locacao para formatura porto alegre", "aluguel de material para formatura", "tacas de formatura porto alegre"],
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO6vZEeGiFjNIt9DAktn6E4JpbpoMAwBCf9pJP035bDpciMX8VdQMe9JI&s=10",
    heroImageAlt: "Recepção de formatura decorada com louças e taças em Porto Alegre",
    badge: "Conquista Inesquecível",
    description: "Estrutura e utensílios refinados para celebrar a colação de grau e a festa de formatura com imponência.",
    introText: [
      "A formatura é o coroamento de anos de dedicação e estudos. A recepção de formatura exige um ambiente festivo e acolhedor para receber professores, familiares e amigos.",
      "A Fest Sul Locações fornece jogos completos de taças de cristal para brinde de espumante, pratos de porcelana para jantar buffet ou empratado, rechauds de aço inox e mesas com toalhas nobres em Porto Alegre e cidades universitárias vizinhas."
    ],
    features: [
      { title: "Linha de Cristal Fino", desc: "Taças reluzentes para o brinde inesquecível do novo formando." },
      { title: "Acomodação de Grandes Grupos", desc: "Quantidade de acervo para atender festas individuais ou comemorações conjuntas." },
      { title: "Kits Completos para Buffet", desc: "Rechauds, travessas e talheres de serviço de garçom." }
    ],
    recommendedCategorySlugs: ["locacao-tacas-porto-alegre", "locacao-loucas", "locacao-talheres", "locacao-rechaud-porto-alegre"],
    faq: [
      { question: "Vocês atendem formaturas de Medicina, Direito e Engenharia com grande volume?", answer: "Sim! Possuímos amplo estoque para atender eventos com centenas de convidados com total padronização." }
    ],
    eventTips: ["Personalize a mesa posta utilizando guardanapos de tecido dobrados com a cor oficial do curso de graduação."]
  },
  {
    id: "material-para-formatura",
    slug: "material-para-formatura",
    categoryGroup: "Formaturas",
    title: "Material para Formatura",
    h1: "Aluguel de Material e Utensílios para Festa de Formatura",
    metaTitle: "Material para Formatura Porto Alegre | Copos, Taças e Pratos para Aluguel",
    metaDescription: "Precisa alugar material para sua recepção de formatura em Porto Alegre? Louças de porcelana, copos de vidro, taças de gin, espumante e talheres inox.",
    keywords: ["material para formatura porto alegre", "aluguel de copos formatura"],
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO6vZEeGiFjNIt9DAktn6E4JpbpoMAwBCf9pJP035bDpciMX8VdQMe9JI&s=10",
    heroImageAlt: "Material sofisticado para aluguel em recepção de formatura",
    badge: "Festa de Graduação",
    description: "Peças reluzentes que enriquecem a gastronomia e o serviço de bebidas na sua noite especial.",
    introText: [
      "Valorize seu jantar ou coquetel de formatura com utensílios higienizados e de alto padrão estético."
    ],
    features: [
      { title: "Opções para Bar de Drinks", desc: "Taças para gin tônica, copos de whisky e taças de vinho." }
    ],
    recommendedCategorySlugs: ["locacao-tacas-porto-alegre", "locacao-copos-eventos-porto-alegre"],
    faq: [
      { question: "A entrega pode ser feita no dia anterior à formatura?", answer: "Sim, mediante agendamento prévio facilitamos a entrega na véspera para montagem da decoração." }
    ],
    eventTips: ["Disponibilize copos de água e refrigerante nas mesas e taças de espumante no bar de recepção."]
  },
  {
    id: "tacas-para-formatura",
    slug: "tacas-para-formatura",
    categoryGroup: "Formaturas",
    title: "Taças para Formatura",
    h1: "Aluguel de Taças de Cristal para Formatura em Porto Alegre",
    metaTitle: "Taças para Formatura Porto Alegre | Cristal Flute para Espumante",
    metaDescription: "Locação de taças de cristal para formatura em Porto Alegre. Celebre o canudo com taças para espumante, vinho e gin tônica de máxima transparência.",
    keywords: ["tacas para formatura porto alegre", "aluguel de tacas espumante formatura"],
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO6vZEeGiFjNIt9DAktn6E4JpbpoMAwBCf9pJP035bDpciMX8VdQMe9JI&s=10",
    heroImageAlt: "Taças de cristal reluzentes para recepção de formatura",
    badge: "Brinde do Formando",
    description: "Taças de cristal refinadas para erguer o brinde da vitória com familiares e mestres.",
    introText: [
      "O momento da brinde da formatura fica eternizado em fotos e vídeos. Nossas taças de cristal flute destacam a efervescência das borbulhas."
    ],
    features: [
      { title: "Brilho e Acústica Límpida", desc: "Cristal puro sem imperfeições visuais." }
    ],
    recommendedCategorySlugs: ["locacao-tacas-porto-alegre"],
    faq: [
      { question: "Qual a taça indicada para o brinde oficial de formatura?", answer: "A taça modelo Flute (champanhe/espumante) é a mais tradicional e charmosa para este momento." }
    ],
    eventTips: ["Garanta pelo menos 2 taças por convidado para rotatividade no bar durante a festa."]
  },
  {
    id: "mesas-para-formatura",
    slug: "mesas-para-formatura",
    categoryGroup: "Formaturas",
    title: "Mesas para Formatura",
    h1: "Aluguel de Mesas e Cadeiras para Recepção de Formatura",
    metaTitle: "Mesas para Formatura Porto Alegre | Aluguel de Mesas e Toalhas Nobres",
    metaDescription: "Aluguel de mesas redondas e pranchões para festa de formatura em Porto Alegre. Monte a acomodação ideal para seus convidados com a Fest Sul.",
    keywords: ["mesas para formatura porto alegre", "aluguel de mesas para recepção de formatura"],
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO6vZEeGiFjNIt9DAktn6E4JpbpoMAwBCf9pJP035bDpciMX8VdQMe9JI&s=10",
    heroImageAlt: "Mesas postas preparadas para jantar de formatura em Porto Alegre",
    badge: "Acomodação de Gala",
    description: "Mobiliário firme e elegante acompanhado de toalhas de mesa em Oxford e Jacquard.",
    introText: [
      "Ofereça conforto máximo aos seus convidados em um jantar formal de formatura. Dispomos de mesas redondas e pranchões articulados."
    ],
    features: [
      { title: "Toalhas Longas até o Chão", desc: "Caimento impecável para dar tom solene ao salão de recepção." }
    ],
    recommendedCategorySlugs: ["locacao-mesas-cadeiras", "locacao-toalhas-guardanapos"],
    faq: [
      { question: "Vocês fornecem guardanapos de tecido combinando?", answer: "Sim! Guardanapos de tecido 100% algodão ou oxford engomados para dobra perfeita." }
    ],
    eventTips: ["Mantenha a mesa do formando no centro do salão com destaque na iluminação."]
  },

  // ==================== 5. EVENTOS CORPORATIVOS ====================
  {
    id: "locacao-para-evento-corporativo",
    slug: "locacao-para-evento-corporativo",
    categoryGroup: "Eventos Corporativos",
    title: "Locação para Evento Corporativo",
    h1: "Locação para Eventos Corporativos e Empresariais em Porto Alegre",
    metaTitle: "Locação para Evento Corporativo Porto Alegre | Material para Convenções e Jantares",
    metaDescription: "Soluções completas de locação para eventos corporativos em Porto Alegre: coffee breaks, convenções, jantares empresariais, palestras e feiras corporativas.",
    keywords: ["locacao para evento corporativo porto alegre", "aluguel de material para eventos empresariais", "coffee break corporativo porto alegre"],
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO6vZEeGiFjNIt9DAktn6E4JpbpoMAwBCf9pJP035bDpciMX8VdQMe9JI&s=10",
    heroImageAlt: "Ambiente corporativo montado com xícaras, louças e mesas em Porto Alegre",
    badge: "Excelência Corporativa",
    description: "Pontualidade britânica, nota fiscal emitida e acervo padronizado para representar sua marca com máxima seriedade.",
    introText: [
      "A imagem da sua empresa no mercado é refletida no cuidado prestado durante convenções, jantares de gala, reuniões de diretoria e palestras.",
      "A Fest Sul Locações atende corporações, multinacionais, agências de eventos e RHs em Porto Alegre com aluguel de xícaras e pires de porcelana para coffee break, taças para coquetéis, rechauds de inox para almoços empresariais, toalhas sóbrias e mesas de apoio."
    ],
    features: [
      { title: "Faturamento Corporativo", desc: "Emissão de Nota Fiscal e condições de pagamento para empresas." },
      { title: "Pontualidade de Entrega Rigorosa", desc: "Respeito absoluto aos horários pré-estabelecidos com a equipe do evento." },
      { title: "Acervo Neutro e Elegante", desc: "Louças brancas e inox polido que combinam com qualquer identidade visual corporativa." },
      { title: "Atendimento Logístico em Auditórios e Hotéis", desc: "Entrega direta no centro de convenções, hotel ou sede da empresa." }
    ],
    recommendedCategorySlugs: ["locacao-loucas", "locacao-tacas-porto-alegre", "locacao-rechaud-porto-alegre", "locacao-toalhas-guardanapos"],
    faq: [
      { question: "A empresa emite Nota Fiscal Eletrônica de Serviço para faturamento?", answer: "Sim! Somos uma empresa regularmente cadastrada e emitimos Nota Fiscal para todas as locações corporativas." },
      { question: "Atendem coffee breaks matutinos em auditórios de Porto Alegre?", answer: "Sim, agendamos a entrega das xícaras, pires e suportes na primeira hora da manhã." }
    ],
    eventTips: [
      "Para coffee breaks corporativos, calcule 1,5 xícara por participante para atender trocas durante os intervalos.",
      "Mantenha uma mesa separada para jarras de água e copos durante as palestras e apresentações."
    ]
  },
  {
    id: "material-para-evento-empresarial",
    slug: "material-para-evento-empresarial",
    categoryGroup: "Eventos Corporativos",
    title: "Material para Evento Empresarial",
    h1: "Aluguel de Material para Reuniões e Eventos Empresariais",
    metaTitle: "Material para Evento Empresarial Porto Alegre | Fest Sul Locações",
    metaDescription: "Alugue material para eventos empresariais em Porto Alegre: xícaras de café, copos de água, pratos de porcelana e talheres de inox com qualidade garantida.",
    keywords: ["material para evento empresarial porto alegre", "aluguel xicaras coffee break"],
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO6vZEeGiFjNIt9DAktn6E4JpbpoMAwBCf9pJP035bDpciMX8VdQMe9JI&s=10",
    heroImageAlt: "Xícaras e materiais corporativos para coffee break empresarial",
    badge: "Mesa Empresarial",
    description: "Utensílios para coffee break, brunch e almoço executivo em auditórios e escritórios.",
    introText: [
      "Receba clientes e parceiros com louças de porcelana limpas e alinhadas. O serviço de café e água em copos e xícaras de verdade demonstra respeito e atenção aos detalhes."
    ],
    features: [
      { title: "Praticidade para a Equipe de RH/Eventos", desc: "Entrega em caixas organizadas e identificadas." }
    ],
    recommendedCategorySlugs: ["locacao-loucas", "locacao-copos-eventos-porto-alegre"],
    faq: [
      { question: "Possuem xícaras de café e chá de porcelana branca?", answer: "Sim! Xícaras com pires em porcelana branca profissional para café espresso e chá." }
    ],
    eventTips: ["Coloque guardanapos e colheres de chá agrupados ao lado das garrafas térmicas de café."]
  },
  {
    id: "equipamentos-para-convencoes",
    slug: "equipamentos-para-convencoes",
    categoryGroup: "Eventos Corporativos",
    title: "Equipamentos para Convenções",
    h1: "Locação de Equipamentos para Convenções e Feiras em Porto Alegre",
    metaTitle: "Equipamentos para Convenções Porto Alegre | Rechauds e Suportes de Servir",
    metaDescription: "Locação de rechauds inox, jarras, baldes e equipamentos de apoio para convenções e feiras corporativas em Porto Alegre e FIERGS.",
    keywords: ["equipamentos para convencoes porto alegre", "aluguel rechaud convencoes fiergs"],
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO6vZEeGiFjNIt9DAktn6E4JpbpoMAwBCf9pJP035bDpciMX8VdQMe9JI&s=10",
    heroImageAlt: "Rechauds e equipamentos de buffet para convenções em Porto Alegre",
    badge: "Estrutura para Feiras",
    description: "Suporte completo para buffets de convenções, simpósios e feiras de negócios.",
    introText: [
      "Em grandes convenções de vendas e feiras comerciais, a logística de alimentação precisa fluir com velocidade. Nossos rechauds inox e travessas mantêm as refeições aquecidas."
    ],
    features: [
      { title: "Cubas Duplas e Simples", desc: "Permitem servir opções variadas de acompanhamentos no mesmo buffet." }
    ],
    recommendedCategorySlugs: ["locacao-rechaud-porto-alegre", "locacao-loucas"],
    faq: [
      { question: "Atendem estandes e ilhas no Centro de Eventos FIERGS?", answer: "Sim, entregamos no local indicado dentro das regras de acesso de montagem e desmontagem do pavilhão." }
    ],
    eventTips: ["Divida os rechauds em duas linhas paralelas de buffet para reduzir filas em convenções populosas."]
  },
  {
    id: "material-para-palestras",
    slug: "material-para-palestras",
    categoryGroup: "Eventos Corporativos",
    title: "Material para Palestras",
    h1: "Aluguel de Utensílios e Copos para Palestras e Workshops",
    metaTitle: "Material para Palestras Porto Alegre | Copos e Taças para Auditório",
    metaDescription: "Suporte em copos de água, xícaras para coffee break e mesas de recepção para palestras, seminários e workshops em Porto Alegre.",
    keywords: ["material para palestras porto alegre", "copos para workshop porto alegre"],
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO6vZEeGiFjNIt9DAktn6E4JpbpoMAwBCf9pJP035bDpciMX8VdQMe9JI&s=10",
    heroImageAlt: "Copos e garrafas em mesa de palestra e workshop",
    badge: "Palestras & Seminários",
    description: "Copos de cristal/vidro e xícaras para compor a mesa do palestrante e os intervalos dos participantes.",
    introText: [
      "Uma palestra de sucesso necessita de uma recepção organizada. Fornecemos copos cristalinos para a mesa dos palestrantes e xícaras para o welcome coffee."
    ],
    features: [
      { title: "Kits Rápidos de Envio", desc: "Atendimento ágil para demandas corporativas de última hora." }
    ],
    recommendedCategorySlugs: ["locacao-copos-eventos-porto-alegre", "locacao-loucas"],
    faq: [
      { question: "Qual o melhor copo para a mesa de palestrante?", answer: "Copos de vidro de água de 300ml a 350ml pesados e elegantes sobre uma jarra de vidro." }
    ],
    eventTips: ["Disponibilize jarras com água aromatizada e copos limpos na entrada do auditório."]
  },
  {
    id: "material-para-confraternizacao",
    slug: "material-para-confraternizacao",
    categoryGroup: "Eventos Corporativos",
    title: "Material para Confraternização",
    h1: "Locação de Materiais para Confraternizações de Empresa",
    metaTitle: "Material para Confraternização Empresarial Porto Alegre | Fest Sul",
    metaDescription: "Alugue pratos, copos de chopp, taças, rechauds e mesas para a festa de fim de ano e confraternização da sua empresa em Porto Alegre.",
    keywords: ["material para confraternizacao porto alegre", "aluguel para festa de fim de ano empresa"],
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO6vZEeGiFjNIt9DAktn6E4JpbpoMAwBCf9pJP035bDpciMX8VdQMe9JI&s=10",
    heroImageAlt: "Confraternização corporativa com buffet e chopp em Porto Alegre",
    badge: "Festa de Fim de Ano",
    description: "Tudo para o churrasco, almoço ou jantar de encerramento de ano da sua equipe.",
    introText: [
      "Celebre as metas alcançadas com a sua equipe! A Fest Sul entrega copos para chopp/cerveja, talheres de churrasco, pratos rasos, rechauds e mesas em sedes e sítios empresariais."
    ],
    features: [
      { title: "Atendimento a Grandes Volumes", desc: "Copos e pratos para centenas de colaboradores." }
    ],
    recommendedCategorySlugs: ["locacao-copos-eventos-porto-alegre", "locacao-rechaud-porto-alegre", "locacao-loucas"],
    faq: [
      { question: "Entregam em sítios de confraternização fora de Porto Alegre?", answer: "Sim, entregamos na região metropolitana mediante agendamento do frete." }
    ],
    eventTips: ["Reserve copos adicionais para consumo de chopp ao longo de toda a tarde."]
  },

  // ==================== 6. DATAS ESPECIAIS ====================
  {
    id: "locacao-para-bodas",
    slug: "locacao-para-bodas",
    categoryGroup: "Datas Especiais",
    title: "Locação para Bodas",
    h1: "Locação de Materiais para Bodas de Prata e Ouro em Porto Alegre",
    metaTitle: "Locação para Bodas Porto Alegre | Aluguel de Louças e Taças para Celebrações",
    metaDescription: "Comemore suas Bodas de Prata, Ouro ou Diamante com louças nobras filetadas, taças de cristal e toalhas refinadas em Porto Alegre. Fest Sul Locações.",
    keywords: ["locacao para bodas porto alegre", "aluguel de loucas bodas de prata", "bodas de ouro aluguel material"],
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO6vZEeGiFjNIt9DAktn6E4JpbpoMAwBCf9pJP035bDpciMX8VdQMe9JI&s=10",
    heroImageAlt: "Mesa elegante montada para comemoração de bodas de casamento",
    badge: "Renovação de Votos",
    description: "Detalhes de ouro e prata em louças e cristais para comemorar décadas de união com máxima elegância.",
    introText: [
      "Comemorar 25, 50 ou mais anos de casado é uma dádiva que merece uma festa inesquecível. Reúna filhos, netos e amigos queridos ao redor de uma mesa posta acolhedora e requintada.",
      "A Fest Sul oferece pratos de porcelana filetados a ouro, taças de cristal de corte impecável, talheres de inox e toalhas de jacquard para deixar a celebração de Bodas à altura dessa conquista histórica."
    ],
    features: [
      { title: "Porcelana Filetada em Ouro", desc: "Detalhes dourados que harmonizam com decorações de Bodas de Ouro." },
      { title: "Taças de Cristal para Brinde", desc: "Transparência límpida para brindar a longevidade do amor." }
    ],
    recommendedCategorySlugs: ["locacao-loucas", "locacao-tacas-porto-alegre", "locacao-toalhas-guardanapos"],
    faq: [
      { question: "Vocês possuem sugestões de combinações para Bodas de Prata?", answer: "Sim! Nossas louças brancas com talheres inox polido e taças límpidas criam uma composição prateada belíssima." }
    ],
    eventTips: ["Utilize um porta-guardanapo com fios metálicos combinando com a cor temática das bodas."]
  },
  {
    id: "locacao-para-cha-de-bebe",
    slug: "locacao-para-cha-de-bebe",
    categoryGroup: "Datas Especiais",
    title: "Locação para Chá de Bebê",
    h1: "Locação de Louças e Utensílios para Chá de Bebê em Porto Alegre",
    metaTitle: "Locação para Chá de Bebê Porto Alegre | Pratos de Bolo e Xícaras",
    metaDescription: "Aluguel de louças, pratos de bolo, xícaras de chá, copos e pratos para chá de bebê em Porto Alegre. Praticidade e delicadeza para a mamãe.",
    keywords: ["locacao para cha de bebe porto alegre", "aluguel de loucas cha de bebe"],
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO6vZEeGiFjNIt9DAktn6E4JpbpoMAwBCf9pJP035bDpciMX8VdQMe9JI&s=10",
    heroImageAlt: "Mesa delicada para recepção de chá de bebê em Porto Alegre",
    badge: "Chegada do Bebê",
    description: "Mesa doce e salgada montada com porcelana e cristais delicados para receber os convidados.",
    introText: [
      "A espera do bebê é repleta de carinho. Monte um chá da tarde delicado ou recepção com tortas, docinhos e salgados usando pratos de sobremesa e xícaras de porcelana branca."
    ],
    features: [
      { title: "Louças Clássicas e Limpas", desc: "Combinam perfeitamente com decorações em tons pastel ou neutros." }
    ],
    recommendedCategorySlugs: ["locacao-loucas", "locacao-copos-eventos-porto-alegre"],
    faq: [
      { question: "Quais os itens mais alugados para chá de bebê?", answer: "Pratos de sobremesa para bolo, xícaras de chá/café, garfos de sobremesa e copos para sucos e refrigerantes." }
    ],
    eventTips: ["Forre as mesas com toalhas neutras para que os detalhes da decoração do bebê ganhem destaque."]
  },
  {
    id: "locacao-para-cha-revelacao",
    slug: "locacao-para-cha-revelacao",
    categoryGroup: "Datas Especiais",
    title: "Locação para Chá Revelação",
    h1: "Aluguel de Material e Louças para Chá Revelação em Porto Alegre",
    metaTitle: "Locação para Chá Revelação Porto Alegre | Fest Sul Locações",
    metaDescription: "Organize seu chá revelação com elegância e praticidade em Porto Alegre: pratos de bolo, taças para brinde, copos e mesas com entrega no local.",
    keywords: ["locacao para cha revelacao porto alegre", "aluguel de pratos e copos cha revelacao"],
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO6vZEeGiFjNIt9DAktn6E4JpbpoMAwBCf9pJP035bDpciMX8VdQMe9JI&s=10",
    heroImageAlt: "Chá revelação com mesa posta delicada em Porto Alegre",
    badge: "Momento Emoção",
    description: "Equipamentos e utensílios para servir familiares e amigos no grande momento da revelação.",
    introText: [
      "Descobrir se é menino ou menina é uma festa emocionante! Receba todos com conforto e mesa posta refinada para registrar este momento em fotos."
    ],
    features: [
      { title: "Kits para Brinde da Revelação", desc: "Taças para o momento em que a cor da fumaça ou bolo é revelada." }
    ],
    recommendedCategorySlugs: ["locacao-tacas-porto-alegre", "locacao-loucas"],
    faq: [
      { question: "Quantas taças devo reservar para o brinde da revelação?", answer: "Uma taça por adulto participante para erguer ao mesmo tempo do anúncio." }
    ],
    eventTips: ["Mantenha as taças de espumante servidas momentos antes do anúncio oficial."]
  },
  {
    id: "locacao-para-batizado",
    slug: "locacao-para-batizado",
    categoryGroup: "Datas Especiais",
    title: "Locação para Batizado",
    h1: "Locação de Louças e Materiais para Almoço de Batizado",
    metaTitle: "Locação para Batizado Porto Alegre | Aluguel de Louças de Porcelana e Mesas",
    metaDescription: "Alugue louças de porcelana branca, taças de cristal, rechauds e toalhas para o almoço de batizado em Porto Alegre. Fest Sul Locações.",
    keywords: ["locacao para batizado porto alegre", "aluguel de loucas almoco batizado"],
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO6vZEeGiFjNIt9DAktn6E4JpbpoMAwBCf9pJP035bDpciMX8VdQMe9JI&s=10",
    heroImageAlt: "Almoço de batizado com mesa posta branca e angelical",
    badge: "Celebração Sagrada",
    description: "Mesa posta angelical com porcelana branca e detalhes puros para celebrar a bênção do batismo.",
    introText: [
      "O batizado é um sacramento de bênção e alegria familiar. O almoço de celebração reúne avós, padrinhos e parentes em uma mesa leve e pura.",
      "Oferecemos porcelana branca, taças de cristal transparente e toalhas brancas ou bege de Oxford com caimento harmonioso."
    ],
    features: [
      { title: "Estética Angelical Branca", desc: "Porcelana pura e cristais limpos sem interferências de cores." }
    ],
    recommendedCategorySlugs: ["locacao-loucas", "locacao-tacas-porto-alegre", "locacao-toalhas-guardanapos"],
    faq: [
      { question: "Vocês possuem rechaud para o almoço de batizado em casa?", answer: "Sim! Rechauds banho-maria perfeitos para manter arroz, carnes e pratos aquecidos no salão ou residência." }
    ],
    eventTips: ["Decore o centro da mesa com flores brancas e folhagens suaves para ressaltar a solenidade do batismo."]
  },
  {
    id: "locacao-para-confraternizacao",
    slug: "locacao-para-confraternizacao",
    categoryGroup: "Datas Especiais",
    title: "Locação para Confraternização",
    h1: "Locação para Confraternizações de Grupos e Amigos em Porto Alegre",
    metaTitle: "Locação para Confraternização Porto Alegre | Louças, Copos e Rechauds",
    metaDescription: "Reúna amigos e familiares com praticidade. Aluguel de pratos, copos de chopp, talheres, rechauds e mesas para confraternizações em Porto Alegre.",
    keywords: ["locacao para confraternizacao porto alegre", "aluguel de material para reuniao de amigos"],
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO6vZEeGiFjNIt9DAktn6E4JpbpoMAwBCf9pJP035bDpciMX8VdQMe9JI&s=10",
    heroImageAlt: "Confraternização de amigos ao redor de boa mesa em Porto Alegre",
    badge: "Encontro de Amigos",
    description: "Tudo para jantares de grupos, encontros de turmas e reuniões festivas com facilidade.",
    introText: [
      "Alugar o material para a confraternização evita que o anfitrião precise lavar pilhas de louças após a festa ou usar descartáveis frágeis."
    ],
    features: [
      { title: "Comodidade Total", desc: "Entregamos tudo pronto para uso nas caixas de transporte." }
    ],
    recommendedCategorySlugs: ["locacao-copos-eventos-porto-alegre", "locacao-loucas", "locacao-rechaud-porto-alegre"],
    faq: [
      { question: "Posso pegar os materiais no balcão ou somente entrega?", answer: "Oferecemos opção de entrega e retirada no seu endereço para máxima comodidade." }
    ],
    eventTips: ["Garanta copos sobressalentes para evitar misturar bebidas de diferentes convidados."]
  },
  {
    id: "locacao-para-natal",
    slug: "locacao-para-natal",
    categoryGroup: "Datas Especiais",
    title: "Locação para Natal",
    h1: "Locação de Louças e Rechauds para Ceia de Natal em Porto Alegre",
    metaTitle: "Locação para Natal Porto Alegre | Aluguel de Pratos e Rechauds de Ceia",
    metaDescription: "Garanta uma ceia de Natal inesquecível em Porto Alegre: aluguel de louças de porcelana, rechauds para peru e assados, taças de vinho e toalhas para a noite natalina.",
    keywords: ["locacao para natal porto alegre", "aluguel de loucas ceia de natal", "rechaud ceia natal porto alegre"],
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO6vZEeGiFjNIt9DAktn6E4JpbpoMAwBCf9pJP035bDpciMX8VdQMe9JI&s=10",
    heroImageAlt: "Mesa de ceia de Natal decorada com porcelana e taças em Porto Alegre",
    badge: "Ceia de Natal",
    description: "Sofisticação para a noite feliz de Natal: rechauds para perus e assados quentes, taças e porcelana branca.",
    introText: [
      "A Ceia de Natal é o momento de reunir toda a família ao redor da mesa festiva. Não passe a véspera de Natal lavando pratos ou preocupado com espaço na mesa.",
      "A Fest Sul fornece pratos rasos e de sobremesa de porcelana branca, rechauds inox para manter chester, peru, pernil e bacalhau bem aquecidos, taças de cristal para brinde e conjuntos de toalhas elegantes."
    ],
    features: [
      { title: "Rechauds para Assados", desc: "Mantenha as carnes e acompanhamentos aquecidos durante toda a ceia." },
      { title: "Devolução sem Estresse", desc: "Aproveite o feriado com a família sem preocupação de lavar pratos." }
    ],
    recommendedCategorySlugs: ["locacao-loucas", "locacao-rechaud-porto-alegre", "locacao-tacas-porto-alegre", "locacao-toalhas-guardanapos"],
    faq: [
      { question: "Com quanta antecedência devo reservar para a Ceia de Natal?", answer: "Como a demanda na semana do Natal é altíssima, recomendamos reservar com 20 a 30 dias de antecedência no mês de novembro ou início de dezembro." }
    ],
    eventTips: ["Reserve pelo menos 2 rechauds para acomodar o prato principal e os acompanhamentos aquecidos."]
  },
  {
    id: "locacao-para-ano-novo",
    slug: "locacao-para-ano-novo",
    categoryGroup: "Datas Especiais",
    title: "Locação para Ano Novo",
    h1: "Locação de Taças e Materiais para Réveillon em Porto Alegre",
    metaTitle: "Locação para Ano Novo Porto Alegre | Taças para Réveillon Fest Sul",
    metaDescription: "Celebre a virada de ano com taças de espumante em cristal, louças nobres e rechauds em Porto Alegre. Aluguel de materiais de Réveillon.",
    keywords: ["locacao para ano novo porto alegre", "aluguel de tacas reveillon porto alegre", "materiais para festa de ano novo"],
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO6vZEeGiFjNIt9DAktn6E4JpbpoMAwBCf9pJP035bDpciMX8VdQMe9JI&s=10",
    heroImageAlt: "Taças de cristal prontas para o brinde da virada de Ano Novo",
    badge: "Brinde de Réveillon",
    description: "Brinde o Ano Novo com taças de cristal reluzentes e mesa posta de prosperidade.",
    introText: [
      "A virada do ano pede espumante gelado e taças de cristal reluzentes para saudar os novos projetos e desejos de prosperidade.",
      "A Fest Sul Locações entrega taças modelo flute de cristal puro, copos para drinks e cerveja, pratos de porcelana e baldes para manter as garrafas trincando de geladas."
    ],
    features: [
      { title: "Cristaleria para Brinde de Meia-Noite", desc: "Taças reluzentes para registrar os sorrisos e fotos da virada." }
    ],
    recommendedCategorySlugs: ["locacao-tacas-porto-alegre", "locacao-loucas", "locacao-copos-eventos-porto-alegre"],
    faq: [
      { question: "Como funciona a entrega para as festas de Réveillon?", answer: "Entregamos nos dias que antecedem o dia 31 de dezembro com horário agendado com a nossa logística." }
    ],
    eventTips: ["Coloque o espumante para gelar algumas horas antes e tenha baldes de gelo distribuídos nas mesas dos convidados."]
  },

  // ==================== 7. PÚBLICO ====================
  {
    id: "locacao-para-empresas",
    slug: "locacao-para-empresas",
    categoryGroup: "Público",
    title: "Locação para Empresas",
    h1: "Locação de Materiais e Equipamentos para Empresas em Porto Alegre",
    metaTitle: "Locação para Empresas Porto Alegre | Faturamento CNPJ Fest Sul",
    metaDescription: "Atendimento corporativo completo para empresas de Porto Alegre e região: aluguel de louças, xícaras de coffee break, rechauds e móveis com Emissão de Nota Fiscal.",
    keywords: ["locacao para empresas porto alegre", "aluguel de materiais cnpj porto alegre", "locacao corporativa fest sul"],
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO6vZEeGiFjNIt9DAktn6E4JpbpoMAwBCf9pJP035bDpciMX8VdQMe9JI&s=10",
    heroImageAlt: "Materiais de locação corporativa para empresas em Porto Alegre",
    badge: "Solução B2B Corporativa",
    description: "Atendimento ágil para demandas corporativas, agências, fornecedores e RHs com nota fiscal e contrato de locação.",
    introText: [
      "Oferecemos um canal de atendimento direto para empresas, corporações e órgãos privados em Porto Alegre. Atendemos reuniões de diretoria, treinamentos, lançamentos de produtos e festas de fim de ano com total profissionalismo.",
      "Com a Fest Sul, sua empresa conta com emissão de Nota Fiscal Eletrônica, faturamento cadastral prévio, pontualidade rigorosa e atendimento logístico diretamente na sede da empresa ou auditório contratado."
    ],
    features: [
      { title: "Cadastro e Emissão de Nota Fiscal", desc: "Facilidade para o setor financeiro e de compras do seu negócio." },
      { title: "Atendimento Continuado", desc: "Contratos para eventos recorrentes e reuniões periódicas." },
      { title: "Materiais Higienizados Industrialmente", desc: "Garantia de segurança sanitária e apresentação impecável perante executivos." }
    ],
    recommendedCategorySlugs: ["locacao-loucas", "locacao-copos-eventos-porto-alegre", "locacao-rechaud-porto-alegre"],
    faq: [
      { question: "A Fest Sul aceita pagamento faturado para empresas cadastradas?", answer: "Sim! Realizamos análise cadastral para faturamento via boleto ou PIX corporativo." }
    ],
    eventTips: ["Consulte nossa equipe comercial para contratos de locação recorrente em coffee breaks executivos."]
  },
  {
    id: "locacao-para-condominios",
    slug: "locacao-para-condominios",
    categoryGroup: "Público",
    title: "Locação para Condomínios",
    h1: "Locação para Salões de Festas em Condomínios de Porto Alegre",
    metaTitle: "Locação para Condomínios Porto Alegre | Aluguel de Pratos, Copos e Mesas",
    metaDescription: "Precisa complementar o salão de festas do seu prédio? Alugamos louças, talheres, copos, rechauds e mesas para moradores e síndicos em Porto Alegre.",
    keywords: ["locacao para condominios porto alegre", "aluguel de pratos para salao de festas predio"],
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO6vZEeGiFjNIt9DAktn6E4JpbpoMAwBCf9pJP035bDpciMX8VdQMe9JI&s=10",
    heroImageAlt: "Salão de festas de condomínio equipado com louças e rechauds Fest Sul",
    badge: "Comodidade no seu Prédio",
    description: "Complemente os utensílios do salão de festas do seu condomínio com louças limpas e sofisticadas.",
    introText: [
      "Muitos salões de festas residenciais possuem poucos utensílios ou louças desparelhadas. A Fest Sul entrega o número exato de pratos, copos e rechauds diretamente no seu condomínio com horário marcado na portaria."
    ],
    features: [
      { title: "Entrega Direta na Portaria/Salão", desc: "Sintonizado com os horários autorizados pela regulação do condomínio." }
    ],
    recommendedCategorySlugs: ["locacao-loucas", "locacao-talheres", "locacao-copos-eventos-porto-alegre", "locacao-rechaud-porto-alegre"],
    faq: [
      { question: "O entregador leva os materiais até o salão de festas?", answer: "Sim, fazemos o descarregamento no salão de festas dentro dos acessos permitidos da garagem ou portaria." }
    ],
    eventTips: ["Informe o zelador ou portaria sobre o agendamento de entrega para liberação do entregador."]
  },
  {
    id: "locacao-para-igrejas",
    slug: "locacao-para-igrejas",
    categoryGroup: "Público",
    title: "Locação para Igrejas",
    h1: "Locação de Materiais para Eventos Comunitários e Igrejas",
    metaTitle: "Locação para Igrejas Porto Alegre | Rechauds, Louças e Mesas para Eventos",
    metaDescription: "Atendimento dedicado a igrejas e comunidades religiosas em Porto Alegre: aluguel de rechauds banho-maria, pratos, talheres, copos e mesas com ótimas condições.",
    keywords: ["locacao para igrejas porto alegre", "aluguel de rechaud para almoco de igreja"],
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO6vZEeGiFjNIt9DAktn6E4JpbpoMAwBCf9pJP035bDpciMX8VdQMe9JI&s=10",
    heroImageAlt: "Equipamentos de buffet e rechauds para almoço comunitário de igreja",
    badge: "Comunidade & Fé",
    description: "Suporte para almoços comunitários, banquetes beneficentes e encontros de confraternização religiosa.",
    introText: [
      "Apoie os banquetes e celebrações da sua comunidade religiosa com rechauds inox para servir a todos com comida quentinha, além de pratos e talheres reforçados e padronizados."
    ],
    features: [
      { title: "Atendimento Comunitário", desc: "Agilidade na montagem de buffets para grandes grupos de fieis." }
    ],
    recommendedCategorySlugs: ["locacao-rechaud-porto-alegre", "locacao-loucas", "locacao-talheres"],
    faq: [
      { question: "A Fest Sul entrega em salões paroquiais e centros comunitários?", answer: "Sim! Entregamos em salões de igrejas em toda a Porto Alegre e região metropolitana." }
    ],
    eventTips: ["Utilize rechauds banho-maria de cuba dupla para otimizar o tempo de servimento de almoços com massas e molhos."]
  },
  {
    id: "locacao-para-escolas",
    slug: "locacao-para-escolas",
    categoryGroup: "Público",
    title: "Locação para Escolas",
    h1: "Locação de Materiais para Eventos Escolares e Universitários",
    metaTitle: "Locação para Escolas Porto Alegre | Festivais e Formaturas Escolares",
    metaDescription: "Suporte de locação para escolas e colégios em Porto Alegre: coquetéis de formaturas, reuniões de pais, jantares comemorativos e mesas para eventos escolares.",
    keywords: ["locacao para escolas porto alegre", "aluguel de mesas e loucas para eventos escolares"],
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO6vZEeGiFjNIt9DAktn6E4JpbpoMAwBCf9pJP035bDpciMX8VdQMe9JI&s=10",
    heroImageAlt: "Estrutura e louças para eventos em colégios e universidades",
    badge: "Institucional Escolar",
    description: "Materiais para jantares de formaturas de 9º ano, ensino médio, reuniões corporativas e eventos de docentes.",
    introText: [
      "Atendemos colégios públicos e privados, faculdades e associações de pais e mestres em Porto Alegre com materiais limpos e faturamento facilitado."
    ],
    features: [
      { title: "Atendimento B2B com Nota Fiscal", desc: "Documentação completa para aprovação em tesourarias e APMs." }
    ],
    recommendedCategorySlugs: ["locacao-loucas", "locacao-copos-eventos-porto-alegre", "locacao-mesas-cadeiras"],
    faq: [
      { question: "É possível agendar entrega no horário sem aulas?", answer: "Sim, alinhamos os horários de carga e descarga nos portões da instituição." }
    ],
    eventTips: ["Programe a entrega com antecedência em relação ao horário de entrada e saída dos alunos."]
  },
  {
    id: "locacao-para-clubes",
    slug: "locacao-para-clubes",
    categoryGroup: "Público",
    title: "Locação para Clubes",
    h1: "Locação de Materiais para Eventos em Clubes de Porto Alegre",
    metaTitle: "Locação para Clubes Porto Alegre | Louças, Taças e Rechauds Fest Sul",
    metaDescription: "Parceiro ideal para eventos em salões de clubes em Porto Alegre (Grêmio Náutico União, Leopoldina Juvenil, Veleiros, AABB, Sogipa): louças de luxo e taças.",
    keywords: ["locacao para clubes porto alegre", "aluguel de loucas leopoldina juvenil gnu sogipa"],
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO6vZEeGiFjNIt9DAktn6E4JpbpoMAwBCf9pJP035bDpciMX8VdQMe9JI&s=10",
    heroImageAlt: "Evento social em salão de clube de Porto Alegre decorado com requinte",
    badge: "Clubes Sociais & Esportivos",
    description: "Aluguel de utensílios que atendem aos rígidos padrões estéticos dos principais salões sociais da capital gaúcha.",
    introText: [
      "Realizar um evento nos salões nobres de clubes tradicionais de Porto Alegre como GNU, Leopoldina Juvenil, AABB, Sogipa ou Veleiros do Sul exige um acervo impecável.",
      "A Fest Sul Locações fornece pratos de porcelana brilhantes, taças de cristal lapidado, talheres gourmet e cadeiras Tiffany que complementam perfeitamente esses salões nobres."
    ],
    features: [
      { title: "Experiência com Cerimoniais de Clubes", desc: "Conhecemos as rotas de docas e horários de carga dos principais clubes da cidade." }
    ],
    recommendedCategorySlugs: ["locacao-loucas", "locacao-tacas-porto-alegre", "locacao-talheres", "locacao-mesas-cadeiras"],
    faq: [
      { question: "Vocês possuem liberação para entrega nos clubes de Porto Alegre?", answer: "Sim, efetuamos a entrega nas docas e setores de apoio seguindo as normas internas do clube." }
    ],
    eventTips: ["Consulte a assessoria do clube sobre o horário exato liberado para descarga e montagem das mesas."]
  },
  {
    id: "locacao-para-saloes-de-festa",
    slug: "locacao-para-saloes-de-festa",
    categoryGroup: "Público",
    title: "Locação para Salões de Festa",
    h1: "Locação para Salões e Casas de Festa em Porto Alegre",
    metaTitle: "Locação para Salões de Festa Porto Alegre | Fest Sul Locações",
    metaDescription: "Completamos a infraestrutura do seu salão de festas em Porto Alegre. Aluguel de louças, taças de cristal, talheres, rechauds e móveis com agilidade.",
    keywords: ["locacao para saloes de festa porto alegre", "aluguel de loucas para casa de festas rs"],
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO6vZEeGiFjNIt9DAktn6E4JpbpoMAwBCf9pJP035bDpciMX8VdQMe9JI&s=10",
    heroImageAlt: "Salão de festas decorado com louças e mesas para recepção em Porto Alegre",
    badge: "Casas de Festa & Espaços",
    description: "Locação sob medida para decoradores, ecônomos, bufeteiros e organizadores que atuam em espaços de festa.",
    introText: [
      "Complementamos a estrutura de buffets, ecônomos e casas de eventos em Porto Alegre com jogos de porcelana, cristais, inox e rechauds de alta durabilidade e apresentação."
    ],
    features: [
      { title: "Parceria com Bufeteiros e Cerimonialistas", desc: "Preços competitivos e frota dedicada para atendimento do setor." }
    ],
    recommendedCategorySlugs: ["locacao-loucas", "locacao-talheres", "locacao-rechaud-porto-alegre", "locacao-tacas-porto-alegre"],
    faq: [
      { question: "Fazem parcerias com cerimonialistas e buffets?", answer: "Sim! Trabalhamos em parceria estreita com os melhores profissionais do mercado de eventos da grande Porto Alegre." }
    ],
    eventTips: ["Mantenha uma lista de conferência rápida de entrega e recolhimento com a equipe de recepção do salão."]
  }
];
