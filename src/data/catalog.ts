import { Category } from "../types";

export const categories: Category[] = [
  {
    id: "loucas",
    slug: "locacao-loucas",
    aliases: [
      "locacao-de-loucas-porto-alegre",
      "aluguel-de-pratos-porto-alegre",
      "locacao-porcelanas",
      "locacao-de-porcelanas-porto-alegre",
      "aluguel-de-loucas"
    ],
    title: "Louças e Pratos de Porcelana",
    icon: "Utensils",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVnM-26ZQBGct2CA8dMOlAr7oGHyH-yrD7KHbW8G0DKg&s=10",
    imageAlt: "Porcelanas brancas filetadas em ouro e pratos nobres para aluguel em Porto Alegre",
    description: "Porcelanas brancas refinadas com acabamento impecável, filetados a ouro, pratos rasos, fundos, sobremesa e travessas higienizadas para casamentos e banquetes em Porto Alegre.",
    seoContent: {
      h1: "Locação de Louças e Aluguel de Pratos de Porcelana em Porto Alegre",
      h2Title: "Porcelanas de Alto Padrão para Casamentos, Formaturas, Aniversários e Eventos Corporativos",
      paragraphs: [
        "A Fest Sul é referência em Porto Alegre e Região Metropolitana no aluguel de louças e pratos de porcelana refinada. Oferecemos pratos rasos filetados em ouro 24k, pratos fundos para risotos e massas, pratos de sobremesa finos, travessas de buffet e porcelanas vitrificadas sob os mais altos padrões de higiene.",
        "A mesa posta é a alma do seu evento. Pratos reluzentes de porcelana branca agregam sofisticação à recepção e destacam o menu preparado pelos melhores chefs do Rio Grande do Sul.",
        "Entregamos em Porto Alegre, Canoas, Novo Hamburgo, São Leopoldo, Gravataí, Caxias do Sul e Região com embalagens individuais lacradas, total pontualidade e praticidade."
      ],
      eventTips: [
        "Calcule de 1,2 a 1,3 pratos rasos por pessoa para jantares no formato buffet livre.",
        "Reserve pratos de sobremesa dedicados para a mesa de doces finos e bolo dos noivos.",
        "Utilize travessas e réchauds de porcelana para valorizar a apresentação do buffet.",
        "Confira a metragem das louças junto ao cerimonial ou chef do evento."
      ],
      faq: [
        {
          question: "Como funciona a locação de louças em Porto Alegre pela Fest Sul?",
          answer: "Você seleciona os pratos e porcelanas desejados no site, adiciona ao seu orçamento online e nossa equipe envia a cotação detalhada com frete e entrega agendada diretamente no local do evento."
        },
        {
          question: "As louças de porcelana vêm higienizadas e prontas para o uso?",
          answer: "Sim! Todas as louças passam por lavagem industrial de alta temperatura (autoclave) e são entregues embaladas em caixas higiênicas lacradas."
        },
        {
          question: "Preciso lavar os pratos de porcelana antes de devolver?",
          answer: "Não é necessário lavar! Basta remover o excesso de resíduos sólidos antes de guardar nas caixas. A higienização completa pós-evento é 100% responsabilidade da Fest Sul."
        },
        {
          question: "Vocês atendem aluguel de pratos rasos, fundos e sobremesa separadamente?",
          answer: "Sim! Você pode alugar apenas as quantidades necessárias de pratos rasos, pratos fundos, pratos de sobremesa ou conjuntos completos."
        }
      ]
    },
    products: [
      {
        id: "louca-1",
        slug: "prato-raso-porcelana-filetado-ouro",
        aliases: ["aluguel-pratos-rasos", "aluguel-de-pratos-rasos", "prato-raso"],
        name: "Prato Raso de Porcelana Filetado a Ouro",
        description: "Prato raso nobre com borda filetada em ouro, essencial para jantares de gala e casamentos.",
        longDescription: "Design europeu clássico com borda filetada a ouro nobre. Produzido em porcelana branca pura vitrificada de alta durabilidade que preserva o brilho sob a iluminação do salão em Porto Alegre.",
        image: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&q=80&w=600",
        imageAlt: "Prato raso de porcelana branca com borda filetada em ouro em Porto Alegre",
        imageWidth: 600,
        imageHeight: 600,
        dimensions: "27 cm de diâmetro",
        material: "Porcelana Branca Premium com Filete Dourado",
        priceEstimate: 3.50,
        rating: 4.9,
        reviewCount: 54,
        specs: ["Filetado dourado nobre", "Apto para buffet aquecido", "Embalagem individual higiênica"]
      },
      {
        id: "louca-2",
        slug: "prato-fundo-porcelana-branca",
        aliases: ["aluguel-pratos-fundos", "aluguel-de-pratos-fundos", "prato-fundo"],
        name: "Prato Fundo de Porcelana Branca",
        description: "Concavidade ideal e brilho espelhado para o serviço impecável de sopas, massas e risotos.",
        longDescription: "Porcelana branca refratária de alta densidade. Possui aba larga e centro profundo para reter o calor de massas artesanais, consomés e risotos cremosos.",
        image: "https://images.unsplash.com/photo-1539130502911-d518a9a69027?auto=format&fit=crop&q=80&w=600",
        imageAlt: "Prato fundo de porcelana branca para massas e risotos em eventos",
        imageWidth: 600,
        imageHeight: 600,
        dimensions: "23 cm de diâmetro x 4 cm profundidade",
        material: "Porcelana Refratária Branca",
        priceEstimate: 3.00,
        rating: 4.8,
        reviewCount: 41,
        specs: ["Excelente retenção térmica", "Borda anatômica de serviço", "Higiene garantida em autoclave"]
      },
      {
        id: "louca-3",
        slug: "prato-sobremesa-porcelana-classica",
        aliases: ["aluguel-pratos-sobremesa", "aluguel-de-pratos-sobremesa", "prato-sobremesa"],
        name: "Prato de Sobremesa de Porcelana Clássica",
        description: "Tamanho harmônico para servir doces finos, tortas, bolos de noiva e entradas refinadas.",
        longDescription: "Essencial para a mesa de doces finos de casamentos e festas de 15 anos. Porcelana branca límpida de toque suave e brilho espelhado.",
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=600",
        imageAlt: "Prato de sobremesa de porcelana branca pura para festas em Porto Alegre",
        imageWidth: 600,
        imageHeight: 600,
        dimensions: "19 cm de diâmetro",
        material: "Porcelana Branca Clássica",
        priceEstimate: 2.50,
        rating: 5.0,
        reviewCount: 38,
        specs: ["Proporção exata para mesa de doces", "Aba lisa elegante", "Altíssima durabilidade"]
      },
      {
        id: "louca-4",
        slug: "conjunto-porcelanas-nobres-jantar",
        aliases: ["locacao-de-porcelanas", "locacao-porcelanas", "aluguel-porcelanas"],
        name: "Jogo de Porcelanas Finas para Aluguel",
        description: "Linha completa de porcelanas brancas vitrificadas para composição luxuosa de banquetes.",
        longDescription: "Coleção completa de louças de porcelana nacional e importada. Oferece padrão internacional de brilho e resistência mecânica para recepções em Porto Alegre.",
        image: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&q=80&w=600",
        imageAlt: "Locação de porcelanas para banquetes em Porto Alegre",
        imageWidth: 600,
        imageHeight: 600,
        dimensions: "Diversas medidas",
        material: "Porcelana Vitrificada Premium",
        priceEstimate: 3.20,
        rating: 4.9,
        reviewCount: 45,
        specs: ["Alta durabilidade", "Esterilizadas industrialmente", "Atende grandes banquetes"]
      },
      {
        id: "louca-5",
        slug: "travessa-retangular-porcelana",
        name: "Travessa Retangular de Porcelana para Buffet",
        description: "Peça de grande dimensão para arranjos de frios, saladas e travessas quentes na ilha gastronômica.",
        longDescription: "Travessa de porcelana refratária de altíssima resistência para montagem de saladas elaboradas, assados e travessas de buffet em Porto Alegre.",
        image: "https://images.unsplash.com/photo-1603180811123-8d26427d2c67?auto=format&fit=crop&q=80&w=600",
        imageAlt: "Travessa retangular grande de porcelana para buffet profissional",
        imageWidth: 600,
        imageHeight: 600,
        dimensions: "40 cm x 28 cm",
        material: "Porcelana Refratária Extra Forte",
        priceEstimate: 12.00,
        rating: 4.9,
        reviewCount: 22,
        specs: ["Ideal para buffet livre", "Paredes grossas de alta durabilidade", "Fácil limpeza"]
      },
      {
        id: "louca-6",
        slug: "xicara-cafe-pires-porcelana",
        name: "Xícara de Café com Pires de Porcelana",
        description: "Jogo sofisticado para fechar a noite com café expresso gourmet, petit fours e licores.",
        longDescription: "Jogo completo de xícara e pires em porcelana fina branca. Essencial para a mesa do café de encerramento em casamentos e reuniões empresariais.",
        image: "https://images.unsplash.com/photo-1517256064527-09c53b2d0ec6?auto=format&fit=crop&q=80&w=600",
        imageAlt: "Xícara de café com pires em porcelana branca em Porto Alegre",
        imageWidth: 600,
        imageHeight: 600,
        dimensions: "Capacidade 90 ml",
        material: "Porcelana Fina Branca",
        priceEstimate: 2.20,
        rating: 4.8,
        reviewCount: 29,
        specs: ["Acompanha pires ajustado", "Design clássico atemporal", "Esterilizadas"]
      }
    ]
  },
  {
    id: "talheres",
    slug: "locacao-talheres",
    aliases: [
      "aluguel-de-talheres-porto-alegre",
      "locacao-de-talheres-inox",
      "aluguel-talheres",
      "locacao-talheres-inox"
    ],
    title: "Talheres e Facas Gourmet Inox",
    icon: "ForkSpoon",
    image: "https://io.convertiez.com.br/m/feiradamadrugada/shop/products/images/418582935/large/conjunto-talher-c-24-pecas-inox-classic-garfo-faca-fratelli_182967.jpg",
    imageAlt: "Talheres de aço inox polido de luxo para aluguel de festas em Porto Alegre",
    description: "Aluguel de talheres inox em Porto Alegre, faqueiros completos para banquetes, facas gourmet de corte preciso e talheres para serviço de buffet.",
    seoContent: {
      h1: "Aluguel de Talheres e Locação de Faqueiros Inox em Porto Alegre",
      h2Title: "Garfos, Facas de Corte Laser, Colheres de Mesa, Faqueiros e Talheres para Buffet",
      paragraphs: [
        "A Fest Sul disponibiliza jogos completos de talheres em aço inoxidável cirúrgico com acabamento polido espelhado. Atendemos casamentos, formaturas, jantares de gala e serviços de buffet em Porto Alegre e Região Metropolitana.",
        "Nossos talheres possuem peso anatômico e lâminas de alta precisão que garantem conforto aos convidados e valorizam visualmente o sousplat e as louças de porcelana.",
        "Todos os jogos de garfos e facas passam por higienização ultrassônica térmica, sendo embalados em lotes limpos para facilidade no cerimonial."
      ],
      eventTips: [
        "A faca de mesa deve ser posicionada à direita do prato com a lâmina voltada para dentro.",
        "Inclua garfos e facas de sobremesa na parte superior do sousplat para eventos formais.",
        "Para buffets de travessas, inclua colheres e garfos grandes de servir."
      ],
      faq: [
        {
          question: "Como é feita a entrega dos talheres inox para o evento?",
          answer: "Os talheres são entregues higienizados e embalados em conjuntos estéreis por categoria, prontos para a montagem de mesas ou ilhas gastronômicas."
        },
        {
          question: "Vocês possuem faqueiros e talheres específicos para buffet?",
          answer: "Sim! Oferecemos desde talheres individuais para mesa posta até pegadores, conchas e colheres de servir para ilhas de buffet."
        }
      ]
    },
    products: [
      {
        id: "talher-1",
        slug: "faca-principal-inox-gourmet",
        name: "Faca Principal de Inox Gourmet",
        description: "Lâmina com microserrilha a laser de corte preciso e cabo ergonômico espelhado.",
        longDescription: "Faca de mesa em inox 18/10 com peso balanceado. A microserrilha a laser desliza sobre carnes nobres sem rasgar o alimento.",
        image: "https://images.unsplash.com/photo-1543510473-ac2c35329a28?auto=format&fit=crop&q=80&w=600",
        imageAlt: "Faca principal de mesa gourmet inox em Porto Alegre",
        imageWidth: 600,
        imageHeight: 600,
        dimensions: "22 cm de comprimento",
        material: "Aço Inoxidável 18/10 Espelhado",
        priceEstimate: 1.20,
        rating: 4.9,
        reviewCount: 62,
        specs: ["Serrilha a laser de alta precisão", "Polimento espelhado sem falhas", "Peso balanceado"]
      },
      {
        id: "talher-2",
        slug: "garfo-principal-inox-gourmet",
        name: "Garfo Principal de Inox Gourmet",
        description: "Dentes polidos individualmente e haste anatômica para jantares refinados.",
        longDescription: "Garfo de refeição principal em aço maciço. Dentes arredondados com polimento interno suave e brilho duradouro.",
        image: "https://images.unsplash.com/photo-1542382156909-9ae37b3f56fd?auto=format&fit=crop&q=80&w=600",
        imageAlt: "Garfo principal de inox para jantares de gala em Porto Alegre",
        imageWidth: 600,
        imageHeight: 600,
        dimensions: "21 cm de comprimento",
        material: "Aço Inox Polido Nobre",
        priceEstimate: 1.20,
        rating: 5.0,
        reviewCount: 55,
        specs: ["Dentes sem rebarbas", "Não entorta nem flexiona", "Livre de manchas"]
      },
      {
        id: "talher-3",
        slug: "colher-mesa-gourmet",
        name: "Colher de Mesa Gourmet",
        description: "Bojo oval de profundidade anatômica ideal para caldos, sopas e consumês.",
        longDescription: "Colher de mesa em aço inox cirúrgico. Formato ergométrico simétrico que garante o máximo conforto no consumo de pratos líquidos e cremosos.",
        image: "https://images.unsplash.com/photo-1594897030264-ab7d87efc473?auto=format&fit=crop&q=80&w=600",
        imageAlt: "Colher de mesa de inox para sopas e caldos em festas",
        imageWidth: 600,
        imageHeight: 600,
        dimensions: "20.5 cm de comprimento",
        material: "Aço Inoxidável Polido",
        priceEstimate: 1.20,
        rating: 4.8,
        reviewCount: 40,
        specs: ["Bojo simétrico perfeito", "Sensação suave nos lábios", "Polimento espelhado"]
      },
      {
        id: "talher-4",
        slug: "talheres-sobremesa-garfo-faca",
        name: "Talheres de Sobremesa (Garfo e Faca Inox)",
        description: "Dimensões proporcionais para o serviço refinado de tortas, doces finos e frutas.",
        longDescription: "Conjunto de garfo e faca de sobremesa em aço inox. Desenhados especialmente para cortes delicados de mil-folhas, tortas recheadas e bolos decorados.",
        image: "https://images.unsplash.com/photo-1543510473-ac2c35329a28?auto=format&fit=crop&q=80&w=600",
        imageAlt: "Talheres de sobremesa em inox para doces e tortas",
        imageWidth: 600,
        imageHeight: 600,
        dimensions: "18 cm de comprimento",
        material: "Aço Inox Espelhado",
        priceEstimate: 1.10,
        rating: 4.9,
        reviewCount: 36,
        specs: ["Proporções harmônicas para sobremesas", "Esterilizados em alta temperatura", "Design elegante"]
      },
      {
        id: "talher-5",
        slug: "faqueiro-inox-completo-luxo",
        aliases: ["aluguel-de-faqueiros", "aluguel-faqueiros"],
        name: "Faqueiro Inox Completo de Luxo",
        description: "Jogo harmônico de facas, garfos e colheres de inox polido para mesas de recepção.",
        longDescription: "Faqueiro de inox de alta gramatura com acabamento espelhado. Composição perfeita para casamentos e banquetes empresariais em Porto Alegre.",
        image: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&q=80&w=800",
        imageAlt: "Aluguel de faqueiros inox em Porto Alegre",
        imageWidth: 600,
        imageHeight: 600,
        dimensions: "Jogo completo",
        material: "Aço Inox 18/10",
        priceEstimate: 4.80,
        rating: 5.0,
        reviewCount: 48,
        specs: ["Completo e padronizado", "Sem manchas", "Higiene certificada"]
      },
      {
        id: "talher-6",
        slug: "jogo-talheres-inox-buffet",
        aliases: ["talheres-para-buffet", "talheres-buffet"],
        name: "Talheres de Inox para Serviço de Buffet",
        description: "Colheres grandes, garfão de assados, pegadores e conchas em inox reforçado.",
        longDescription: "Linha profissional de talheres para servir em pistas quentes e frias de buffet. Aço inox reforçado de fácil empunhadura e higiene impecável.",
        image: "https://images.unsplash.com/photo-1594897030264-ab7d87efc473?auto=format&fit=crop&q=80&w=600",
        imageAlt: "Talheres de inox para buffet em Porto Alegre",
        imageWidth: 600,
        imageHeight: 600,
        dimensions: "30 cm de comprimento",
        material: "Aço Inoxidável Reforçado",
        priceEstimate: 5.50,
        rating: 4.9,
        reviewCount: 32,
        specs: ["Empunhadura segura", "Resistente ao calor", "Ideal para buffet livre"]
      }
    ]
  },
  {
    id: "tacas",
    slug: "locacao-tacas-porto-alegre",
    aliases: [
      "aluguel-de-tacas-porto-alegre",
      "locacao-de-tacas-porto-alegre",
      "aluguel-de-tacas-de-cristal",
      "aluguel-tacas",
      "locacao-tacas"
    ],
    title: "Taças de Cristal de Luxo",
    icon: "Wine",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Taças de cristal para espumante, vinho tinto, vinho branco, água, gin e whisky para aluguel em Porto Alegre",
    description: "Locação e aluguel de taças de cristal em Porto Alegre: espumante, vinho tinto, vinho branco, água, gin tônica, whisky e taças especiais para casamentos.",
    seoContent: {
      h1: "Aluguel e Locação de Taças de Cristal em Porto Alegre - RS",
      h2Title: "Taças de Cristal para Casamentos, Espumante, Vinho, Água, Gin Tônica e Whisky",
      paragraphs: [
        "A Fest Sul possui o acervo de taças de cristal de alta pureza mais requisitado de Porto Alegre e Região Metropolitana. Oferecemos taças Flute para espumante e champanhe, taças grandes para vinho tinto e branco, taças lapidadas para água, taças bojudas para gin tônica e taças de degustação para whisky.",
        "O cristal nobre sem chumbo garante transparência cintilante e traz a sonoridade impecável do 'tim-tim' na hora do brinde dos noivos ou homenageados.",
        "Todas as taças são limpas com secagem técnica e entregues em caixas colmeia organizadoras de alta proteção."
      ],
      eventTips: [
        "Calcule de 2 a 3 taças de espumante por pessoa para festas com open bar.",
        "Posicione a taça de água à esquerda e a de espumante ou vinho à direita no sousplat.",
        "Para coquetéis de gin, utilize taças grandes de 600ml com espaço para pedras de gelo."
      ],
      faq: [
        {
          question: "Como contratar o aluguel de taças de cristal em Porto Alegre?",
          answer: "Basta navegar na categoria de taças, escolher os modelos desejados e clicar em 'Adicionar ao Orçamento' para receber atendimento rápido pelo WhatsApp."
        },
        {
          question: "As taças de cristal são resistentes para garçons e eventos grandes?",
          answer: "Sim! Trabalhamos com cristal de alta resistência técnica projetado especialmente para gastronomia e eventos sociais de grande porte."
        }
      ]
    },
    products: [
      {
        id: "taca-1",
        slug: "taca-cristal-espumante-champanhe-flute",
        aliases: ["tacas-para-espumante", "tacas-espumante"],
        name: "Taça de Cristal para Espumante / Champanhe (Flute)",
        description: "Modelo Flute com haste alongada e bojo esguio que preserva o perlage brilhante do espumante.",
        longDescription: "Taça Flute esguia produzida em cristal soprado de altíssima transparência. Mantém a efervescência e as borbulhas do espumante vivas por muito mais tempo em casamentos em Porto Alegre.",
        image: "https://images.unsplash.com/photo-1578002171561-90522113f548?auto=format&fit=crop&q=80&w=600",
        imageAlt: "Taça de cristal flute para espumante em casamentos de Porto Alegre",
        imageWidth: 600,
        imageHeight: 600,
        dimensions: "Capacidade 210 ml | Haste 22 cm",
        material: "Cristal Nobre sem Chumbo",
        priceEstimate: 2.80,
        rating: 5.0,
        reviewCount: 78,
        specs: ["Conserva perlage e efervescência", "Brilho intenso cristalino", "Sem rebarbas na borda"]
      },
      {
        id: "taca-2",
        slug: "taca-cristal-casamento-noivos",
        aliases: ["tacas-para-casamento", "tacas-casamento"],
        name: "Taça de Cristal Especial para Casamento",
        description: "Design romântico e requintado com transparência cristalina para a mesa dos noivos.",
        longDescription: "Taça de cristal nobre com pé delicado e acabamento impecável para o brinde inesquecível do casal na mesa de honra do casamento.",
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=600",
        imageAlt: "Taças de cristal para casamento em Porto Alegre",
        imageWidth: 600,
        imageHeight: 600,
        dimensions: "Capacidade 230 ml",
        material: "Cristal Premium",
        priceEstimate: 3.50,
        rating: 5.0,
        reviewCount: 65,
        specs: ["Modelo nobre para brinde", "Brilho cintilante", "Entregue em estojo protegido"]
      },
      {
        id: "taca-3",
        slug: "taca-cristal-vinho-tinto",
        aliases: ["tacas-para-vinho", "tacas-vinho"],
        name: "Taça de Cristal para Vinho Tinto e Branco",
        description: "Bojo amplo para oxigenação adequada dos grandes vinhos tintos da Serra Gaúcha e internacionais.",
        longDescription: "Desenvolvida para liberar os aromas complexos de vinhos nobres. Cristal fino com borda lapidada a laser para degustação perfeita.",
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=600",
        imageAlt: "Taça grande de cristal para vinho tinto em Porto Alegre",
        imageWidth: 600,
        imageHeight: 600,
        dimensions: "Capacidade 450 ml | Haste 21 cm",
        material: "Cristal Nobre de Alta Pureza",
        priceEstimate: 2.80,
        rating: 4.9,
        reviewCount: 64,
        specs: ["Bojo largo oxigenador", "Borda lapidada a laser", "Sonoridade cristalina"]
      },
      {
        id: "taca-4",
        slug: "taca-agua-cristal-lapidado",
        aliases: ["tacas-para-agua", "tacas-agua"],
        name: "Taça de Água de Cristal Lapidado",
        description: "Taça robusta com padrões lapidados reluzentes para água, refrigerante ou coquetéis.",
        longDescription: "A taça de água lapidada é o elemento central da mesa posta. O relevo lapidado reflete os pontos de luz do salão e cria um ambiente aristocrático.",
        image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=600",
        imageAlt: "Taça de água de cristal lapidado para centro de mesa posta",
        imageWidth: 600,
        imageHeight: 600,
        dimensions: "Capacidade 380 ml",
        material: "Cristal Lapidado Reforçado",
        priceEstimate: 3.00,
        rating: 4.9,
        reviewCount: 56,
        specs: ["Relevos lapidados marcantes", "Peça de imensa presença na mesa", "Muitíssimo firme"]
      },
      {
        id: "taca-5",
        slug: "taca-gin-tonica-cristal",
        aliases: ["tacas-para-gin", "tacas-gin"],
        name: "Taça de Cristal para Gin Tônica (Bojo Amplo)",
        description: "Bojo balão de 600ml para acomodar bastante gelo, botânicos e especiarias de gin.",
        longDescription: "Taça balão confeccionada em cristal de alta transparência. Perfeita para bar de drinks e coquetéis de gin tônica aromáticos.",
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800",
        imageAlt: "Taça de cristal para gin tônica em eventos de Porto Alegre",
        imageWidth: 600,
        imageHeight: 600,
        dimensions: "Capacidade 600 ml",
        material: "Cristal Soprado sem Chumbo",
        priceEstimate: 3.20,
        rating: 4.9,
        reviewCount: 42,
        specs: ["Capacidade generosa para gelo", "Transparência impecável", "Ideal para drinks decorados"]
      },
      {
        id: "taca-6",
        slug: "taca-whisky-cristal-degustacao",
        aliases: ["tacas-para-whisky", "tacas-whisky"],
        name: "Taça de Cristal para Whisky e Bourbon",
        description: "Formato tulipa fechado no topo para concentrar os maltes de whiskies envelhecidos.",
        longDescription: "Taça de degustação técnica para apreciar os aroma de whiskies single malt e bourbons em confraternizações e recepções VIP.",
        image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&q=80&w=600",
        imageAlt: "Taça de cristal de degustação de whisky em Porto Alegre",
        imageWidth: 600,
        imageHeight: 600,
        dimensions: "Capacidade 200 ml",
        material: "Cristal Lapidado",
        priceEstimate: 3.00,
        rating: 4.8,
        reviewCount: 30,
        specs: ["Formato concentrador de aromas", "Bordo delicado", "Design contemporâneo"]
      }
    ]
  },
  {
    id: "copos",
    slug: "locacao-copos-eventos-porto-alegre",
    aliases: [
      "aluguel-de-copos-porto-alegre",
      "locacao-de-copos-para-eventos",
      "aluguel-copos",
      "locacao-copos"
    ],
    title: "Copos de Vidro e Acrílico Nobre",
    icon: "GlassWater",
    image: "https://cdn.awsli.com.br/1983/1983803/produto/127755621b40f3fb09b.jpg",
    imageAlt: "Copos de vidro transparente long drink, whisky e cerveja para eventos em Porto Alegre",
    description: "Aluguel e locação de copos em Porto Alegre: copos long drink, copos whisky, copos de cerveja/chopp e copos de vidro transparente para festas e open bar.",
    seoContent: {
      h1: "Aluguel e Locação de Copos para Eventos em Porto Alegre - RS",
      h2Title: "Copos Long Drink, Copos Whisky On-the-Rocks, Copos Cerveja Tulipa e Copos de Vidro",
      paragraphs: [
        "Para atender ilhas de open bar, recepções e jantares descontraídos, a Fest Sul fornece o aluguel de copos de vidro reforçado e cristalino em Porto Alegre.",
        "Disponibilizamos copos Long Drink para refrigerante, sucos e drinks longos, copos On-the-Rocks para whisky e caipirinhas, tulipas de chopp e copos multiuso de vidro brilhante.",
        "Todos os copos são higienizados e entregues em caixas organizadoras plásticas para fácil contagem e manuseio da equipe de garçons."
      ],
      eventTips: [
        "Calcule de 3 a 4 copos por pessoa para eventos com bebidas variadas e open bar longo.",
        "Disponibilize copos whisky exclusivos no balcão do barman.",
        "Copos Long Drink são ideais para servir sucos, água tônica e coquetéis gelados."
      ],
      faq: [
        {
          question: "Como funciona a entrega dos copos de vidro para eventos em Porto Alegre?",
          answer: "Entregamos no local do evento com frota própria e caixas colmeias higienizadas, facilitando o recebimento pelo responsável ou cerimonial."
        }
      ]
    },
    products: [
      {
        id: "copo-1",
        slug: "copo-long-drink-vidro-nobre",
        aliases: ["copos-long-drink", "copo-long-drink"],
        name: "Copo Long Drink de Vidro Nobre",
        description: "Alto e elegante, ideal para gin tônica, coquetéis com gelo, refrigerantes e sucos.",
        longDescription: "Copo cilíndrico de base pesada reforçada. Produzido em vidro transparente de alta dureza, versátil para drinks elaborados e open bar em Porto Alegre.",
        image: "https://images.unsplash.com/photo-1569529465841-df8201f9c1c1?auto=format&fit=crop&q=80&w=600",
        imageAlt: "Copo long drink de vidro alto para drinks e refrigerantes",
        imageWidth: 600,
        imageHeight: 600,
        dimensions: "Capacidade 350 ml | Altura 15 cm",
        material: "Vidro Sódico-Cálcico Cristalino",
        priceEstimate: 1.80,
        rating: 4.8,
        reviewCount: 42,
        specs: ["Base densa estabilizadora", "Vidro grosso super resistente", "Transparência limpa"]
      },
      {
        id: "copo-2",
        slug: "copo-whisky-on-the-rocks-vidro",
        aliases: ["copos-whisky", "copo-whisky"],
        name: "Copo Whisky On-The-Rocks de Vidro Lapidado",
        description: "Copo baixo de base larga pesada para whisky com pedras de gelo, negroni e caipirinhas.",
        longDescription: "Copo estilo Old Fashioned de vidro transparente com relevo lapidado na base. Ideal para servir doses de whisky, negroni e destilados.",
        image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&q=80&w=600",
        imageAlt: "Copo de whisky on the rocks para festas em Porto Alegre",
        imageWidth: 600,
        imageHeight: 600,
        dimensions: "Capacidade 320 ml",
        material: "Vidro Cristalino de Alta Resistência",
        priceEstimate: 1.90,
        rating: 4.9,
        reviewCount: 38,
        specs: ["Fundo pesado antitombamento", "Acabamento lapidado", "Pode ir à lava-louças"]
      },
      {
        id: "copo-3",
        slug: "copo-cerveja-tulipa-chopp",
        aliases: ["copos-cerveja", "copo-cerveja"],
        name: "Copo Tulipa para Cerveja e Chopp",
        description: "Bojo anatômico que retém a espuma cremosa e realça a efervescência da cerveja.",
        longDescription: "Copo Tulipa clássico de 300ml em vidro cristalino. Projetado para servir chopp tirado na hora e cervejas artesanais geladas.",
        image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&q=80&w=600",
        imageAlt: "Copo tulipa de chopp e cerveja para festas em Porto Alegre",
        imageWidth: 600,
        imageHeight: 600,
        dimensions: "Capacidade 300 ml",
        material: "Vidro Nobre Transparente",
        priceEstimate: 1.80,
        rating: 4.8,
        reviewCount: 35,
        specs: ["Formato que preserva o colarinho", "Vidro límpido", "Higienizados"]
      },
      {
        id: "copo-4",
        slug: "copo-vidro-transparente-agua-suco",
        aliases: ["copos-de-vidro", "copos-vidro"],
        name: "Copo de Vidro Cilíndrico para Eventos",
        description: "Copo multiuso cristalino para servir água, refrigerantes e sucos na mesa posta.",
        longDescription: "Modelo clássico polivalente de vidro brilhante. Atende banquetes, almoços e reuniões empresariais com simplicidade e elegância.",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600",
        imageAlt: "Copos de vidro transparente para locação em Porto Alegre",
        imageWidth: 600,
        imageHeight: 600,
        dimensions: "Capacidade 300 ml",
        material: "Vidro Cristalino",
        priceEstimate: 1.60,
        rating: 4.7,
        reviewCount: 29,
        specs: ["Multiuso para qualquer bebida", "Base reforçada", "Esterilizado"]
      }
    ]
  },
  {
    id: "rechauds",
    slug: "locacao-rechaud-porto-alegre",
    aliases: [
      "aluguel-de-rechaud-porto-alegre",
      "locacao-de-rechaud",
      "rechaud-inox",
      "aluguel-rechaud",
      "locacao-rechauds-buffet"
    ],
    title: "Rechauds e Equipamentos de Buffet",
    icon: "ConciergeBell",
    image: "https://www.lojabrazil.com.br/blog/wp-content/uploads/2019/03/rechauds-5-motivos-para-usar-em-seu-buffet.jpg",
    imageAlt: "Aluguel de rechauds de inox banho-maria retangulares e redondos para buffet em Porto Alegre",
    description: "Aluguel e locação de rechaud em Porto Alegre: rechauds inox retangulares com cuba dupla, rechauds redondos para massas e molhos, e equipamentos de buffet.",
    seoContent: {
      h1: "Aluguel e Locação de Rechaud Inox em Porto Alegre - RS",
      h2Title: "Rechauds Banho-Maria Retangulares, Redondos, Cubas GN Inox e Equipamentos para Buffet",
      paragraphs: [
        "Garantir refeições bem aquecidas do início ao fim é fundamental para a satisfação dos seus convidados. Na Fest Sul, você encontra aluguel de rechauds banho-maria retangulares e redondos em aço inox polido.",
        "Nossos rechauds acompanham cubas gastronômicas GN e queimadores para fluido gel, mantendo arrozes, carnes, massas, molhos e estrogonofes na temperatura ideal de servir por horas.",
        "Equipamentos higienizados, testados e prontos para montagem em buffets de casamentos, formaturas e eventos corporativos em Porto Alegre e Região."
      ],
      eventTips: [
        "Utilize 1 rechaud retangular duplo para cada 30 a 40 convidados no buffet livre.",
        "Rechauds redondos são ideais para molhos quentes, risotos e sopas.",
        "Acenda os queimadores de gel 20 minutos antes de servir para aquecer a água do banho-maria."
      ],
      faq: [
        {
          question: "Os rechauds acompanham as cubas e os queimadores?",
          answer: "Sim! Todos os nossos rechauds são entregues completos com as cubas em aço inox e os suportes para acendedores de gel."
        },
        {
          question: "Quanto tempo o rechaud mantém o prato quente?",
          answer: "Com o banho-maria abastecido e os queimadores acesos, o rechaud conserva os alimentos aquecidos por 2 a 4 horas continuamente."
        }
      ]
    },
    products: [
      {
        id: "uten-1",
        slug: "rechaud-inox-retangular-duplo",
        aliases: ["rechaud-retangular", "rechaud-inox-retangular"],
        name: "Rechaud Inox Retangular com Cuba Dupla (Banho-maria)",
        description: "Sistema banho-maria com tampa basculante que preserva alimentos aquecidos sem queimar.",
        longDescription: "Rechaud retangular em aço inox polido com 2 cubas GN 1/2 de 9 Litros de capacidade total. Tampa basculante articulada com pegador que não esquenta a mão.",
        image: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&q=80&w=600",
        imageAlt: "Rechaud retangular em inox com cuba dupla para buffet em Porto Alegre",
        imageWidth: 600,
        imageHeight: 600,
        dimensions: "9 Litros de capacidade total",
        material: "Aço Inoxidável Heavy Duty Polido",
        priceEstimate: 45.00,
        rating: 5.0,
        reviewCount: 46,
        specs: ["Acompanha 2 cubas inox GN 1/2", "Acompanha 2 queimadores", "Tampa basculante com travamento"]
      },
      {
        id: "uten-2",
        slug: "rechaud-inox-redondo-banho-maria",
        aliases: ["rechaud-redondo", "rechaud-inox-redondo"],
        name: "Rechaud Inox Redondo com Tampa Basculante",
        description: "Modelo redondo para servir sopas, molhos quentes, risotos e estrogonofes.",
        longDescription: "Rechaud circular em aço inox cirúrgico com tampa basculante panorâmica e cuba redonda profunda. Perfeito para servir pratos cremosos mantendo o vapor quente.",
        image: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&q=80&w=800",
        imageAlt: "Rechaud redondo de inox para buffet em Porto Alegre",
        imageWidth: 600,
        imageHeight: 600,
        dimensions: "Capacidade 6 Litros",
        material: "Aço Inox Polido",
        priceEstimate: 42.00,
        rating: 4.9,
        reviewCount: 39,
        specs: ["Cuba redonda profunda", "Tampa de elevação suave", "Aquecimento homogêneo"]
      },
      {
        id: "uten-3",
        slug: "rechaud-inox-buffet-completo",
        aliases: ["rechaud-para-buffet", "rechaud-inox", "rechaud-buffet"],
        name: "Rechaud de Inox Profissional para Buffet",
        description: "Rechaud profissional com cuba inteira GN 1/1 de grande volume para ilhas quentes.",
        longDescription: "Rechaud gastronômico retangular com cuba inteira GN 1/1 para massas, carnes assadas e guarnições volumosas em banquetes de casamento.",
        image: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&q=80&w=600",
        imageAlt: "Aluguel de rechauds para buffet em Porto Alegre",
        imageWidth: 600,
        imageHeight: 600,
        dimensions: "10 Litros de capacidade",
        material: "Aço Inoxidável Cirúrgico",
        priceEstimate: 48.00,
        rating: 5.0,
        reviewCount: 52,
        specs: ["Cuba inteira GN 1/1", "Acompanha queimadores inox", "Higiene profissional"]
      },
      {
        id: "uten-4",
        slug: "balde-champagne-gelo-inox-escovado",
        name: "Balde de Champagne / Gelo de Inox com Pedestal",
        description: "Parede dupla isolante que resfria garrafas de espumante à beira da mesa com requinte.",
        longDescription: "Balde térmico para gelo e champanhe em aço inox escovado. Pode ser utilizado diretamente sobre a mesa ou acoplado ao pedestal alto de solo.",
        image: "https://images.unsplash.com/photo-1574966740632-47596ff1f893?auto=format&fit=crop&q=80&w=600",
        imageAlt: "Balde de gelo e champanhe em inox com pedestal em Porto Alegre",
        imageWidth: 600,
        imageHeight: 600,
        dimensions: "Capacidade 5 Litros | Pedestal 75cm",
        material: "Aço Inox Escovado Térmico",
        priceEstimate: 12.00,
        rating: 4.9,
        reviewCount: 35,
        specs: ["Isolamento térmico", "Pedestal de solo incluído", "Não acumula água externa"]
      }
    ]
  },
  {
    id: "mesas-cadeiras",
    slug: "locacao-mesas-cadeiras",
    aliases: [
      "aluguel-de-mesas-e-cadeiras-porto-alegre",
      "locacao-de-mesas-e-cadeiras-porto-alegre",
      "aluguel-cadeiras-tiffany-porto-alegre"
    ],
    title: "Mesas e Cadeiras",
    icon: "Armchair",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Locação de Cadeiras Tiffany Dourada, Cristal, Paris e Mesas Redondas em Porto Alegre",
    description: "Cadeiras Tiffany Dourada, Cristal e Paris em Madeira, além de Mesas Redondas de banquete e Bistrôs altos para layouts impecáveis.",
    seoContent: {
      h1: "Aluguel de Mesas e Cadeiras para Eventos em Porto Alegre - RS",
      h2Title: "Locação de Cadeiras Tiffany Dourada, Tiffany Cristal, Cadeira Paris e Mesas Redondas de Banquete",
      paragraphs: [
        "O mobiliário determina o conforto e a elegância cenográfica do seu evento. A Fest Sul é especialista no aluguel de cadeiras Tiffany Dourada, Tiffany Cristal em policarbonato, Cadeira Paris (Crossback) em madeira e Mesas Redondas para banquetes de 8 a 10 lugares em Porto Alegre.",
        "Nossas cadeiras acompanham assentos estofados anatômicos macios revestidos em couro ecológico branco, higienizados antes de cada montagem.",
        "Atendemos casamentos, formaturas, aniversários de 15 anos e feiras corporativas em Porto Alegre, Vale dos Sinos e Serra Gaúcha com logística precisa e montagem cuidadosa."
      ],
      eventTips: [
        "A Cadeira Tiffany Dourada traz um luxo atemporal para casamentos à noite.",
        "A Cadeira Tiffany Cristal proporciona leveza e amplia visualmente salões menores.",
        "Mesas redondas de 1,50m acomodam 8 convidados confortavelmente e 10 de forma compacta."
      ],
      faq: [
        {
          question: "Os assentos estofados estão inclusos no valor de locação da cadeira?",
          answer: "Sim! Todas as nossas cadeiras Tiffany e Paris acompanham o assento estofado macio higienizado em couro sintético sem nenhum custo adicional."
        },
        {
          question: "Vocês realizam a entrega e o descarregamento das mesas e cadeiras?",
          answer: "Sim! A equipe logística da Fest Sul realiza a entrega e o descarregamento no local do evento no horário combinado."
        }
      ]
    },
    products: [
      {
        id: "cadeira-1",
        slug: "cadeira-tiffany-dourada-resina",
        name: "Cadeira Tiffany Dourada com Assento Estofado",
        description: "Ícone mundial de elegância em casamentos. Acabamento ouro nobre com almofada estofada.",
        longDescription: "Cadeira Tiffany produzida em resina polimérica virgem com pintura dourada brilhante de alta fixação. Estrutura monobloco super firme com assento estofado branco incluso.",
        image: "https://images.unsplash.com/photo-1561677978-583a8c7a4b43?auto=format&fit=crop&q=80&w=600",
        imageAlt: "Cadeira tiffany dourada elegante para recepção de casamento em Porto Alegre",
        imageWidth: 600,
        imageHeight: 600,
        dimensions: "40cm x 42cm x 92cm (A)",
        material: "Resina Polimérica Injetada Dourada",
        priceEstimate: 9.50,
        rating: 5.0,
        reviewCount: 92,
        specs: ["Assento estofado branco incluso", "Capacidade até 180kg", "Pintura uniforme e sem riscos"]
      },
      {
        id: "cadeira-2",
        slug: "cadeira-tiffany-cristal-transparente",
        name: "Cadeira Tiffany Cristal (Transparente)",
        description: "Policarbonato virgem cristalino que reflete a luz do salão e traz extrema modernidade.",
        longDescription: "Transparência total impecável sem bolhas ou amarelado. Reflete os pontos de iluminação cênica do salão e proporciona um ambiente leve e requintado.",
        image: "https://images.unsplash.com/photo-1549497538-303791108f95?auto=format&fit=crop&q=80&w=600",
        imageAlt: "Cadeira tiffany cristal transparente em eventos em Porto Alegre",
        imageWidth: 600,
        imageHeight: 600,
        dimensions: "40cm x 42cm x 92cm (A)",
        material: "Policarbonato Cristal Virgem",
        priceEstimate: 10.50,
        rating: 4.9,
        reviewCount: 68,
        specs: ["100% transparente", "Acompanha almofada estofada branca", "Visual contemporâneo"]
      },
      {
        id: "cadeira-3",
        slug: "cadeira-estofada-paris-madeira-wood",
        name: "Cadeira Estofada Paris Crossback em Madeira",
        description: "Estilo rústico chique europeu com encosto em X e estrutura de madeira nobre envernizada.",
        longDescription: "Modelo Paris (Crossback) fabricada em madeira maciça com pintura envernizada e encosto anatômico em X. Perfeita para casamentos no campo, vinícolas e estéticas acolhedoras.",
        image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&q=80&w=600",
        imageAlt: "Cadeira paris crossback em madeira para eventos no RS",
        imageWidth: 600,
        imageHeight: 600,
        dimensions: "44cm x 45cm x 89cm (A)",
        material: "Madeira Maciça Envernizada",
        priceEstimate: 12.00,
        rating: 5.0,
        reviewCount: 51,
        specs: ["Encosto em X clássico", "Madeira maciça nobre", "Assento macio incluso"]
      },
      {
        id: "mesa-1",
        slug: "mesa-redonda-classica-8-lugares",
        name: "Mesa Redonda Clássica (8 a 10 lugares)",
        description: "Diâmetro de 1,50m com estrutura ultra estável para montagem de banquetes e toalhas longas.",
        longDescription: "Mesa circular reforçada com tampo de madeira naval e pés dobráveis de aço tratados. Projetada para sustentar o peso de louças, sousplats e arranjos florais altos.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600",
        imageAlt: "Mesa redonda grande de 1,50m para banquete de casamento em Porto Alegre",
        imageWidth: 600,
        imageHeight: 600,
        dimensions: "1,50m de diâmetro x 75cm altura",
        material: "Tampo de Madeira Naval e Pés de Aço",
        priceEstimate: 28.00,
        rating: 4.9,
        reviewCount: 44,
        specs: ["Acomoda 8 a 10 pessoas", "Dobrável e estável", "Ideal para toalhas compridas"]
      }
    ]
  },
  {
    id: "toalhas",
    slug: "locacao-toalhas-guardanapos",
    aliases: [
      "aluguel-de-toalhas-de-mesa-porto-alegre",
      "aluguel-guardanapos-tecido"
    ],
    title: "Toalhas de Mesa e Guardanapos",
    icon: "Grid",
    image: "https://static.wixstatic.com/media/597429_cbf4f114e91147a8bf38263e26653917.jpg/v1/fill/w_520,h_390,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/597429_cbf4f114e91147a8bf38263e26653917.jpg",
    imageAlt: "Toalhas de mesa compridas e guardanapos de tecido engomados para aluguel em Porto Alegre",
    description: "Toalhas de mesa jacquard e oxford com caimento até o chão, cobre-mesas e guardanapos de tecido 100% algodão engomados.",
    seoContent: {
      h1: "Aluguel de Toalhas de Mesa e Guardanapos de Tecido em Porto Alegre",
      h2Title: "Toalhas Longas até o Chão, Cobre-Mesas Jacquard e Guardanapos Engomados",
      paragraphs: [
        "A roupa de mesa vestida com perfeição transforma o visual de qualquer recepção. A Fest Sul disponibiliza toalhas de mesa redondas de 3,00m de diâmetro com caimento elegante até o chão, cobre-mesas em brocado e jacquard, além de guardanapos de tecido 100% algodão impecavelmente passados.",
        "Trabalhamos com tons clássicos como branco feno, fendi, fendi dourado, fendi prateado e preto nobre, higienizados e engomados para proporcionar toque macio e dobras estruturadas."
      ],
      eventTips: [
        "Toalhas de 3,00m cobrem totalmente os pés das mesas de 1,50m de diâmetro.",
        "Combine guardanapos em tons terrosos ou dourados para contrastar com toalhas neutras."
      ],
      faq: [
        {
          question: "As toalhas de mesa são entregues passadas e sem vincos?",
          answer: "Sim! Todas as nossas toalhas de mesa e guardanapos são passados em calandra industrial e entregues embalados sem amassados."
        }
      ]
    },
    products: [
      {
        id: "toalha-1",
        slug: "toalha-redonda-jacquard-3m-branca",
        name: "Toalha de Mesa Redonda 3,00m Jacquard Branca",
        description: "Caimento longo até o chão para mesas redondas de 1,50m de diâmetro com relevo florilégio sutil.",
        longDescription: "Toalha circular em tecido Jacquard de fiação nobre. Padrão adamascado com brilho acetinado sutil que não amassa e cobre os pés da mesa.",
        image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=600",
        imageAlt: "Toalha de mesa jacquard branca comprida para casamentos em Porto Alegre",
        imageWidth: 600,
        imageHeight: 600,
        dimensions: "3,00m de diâmetro",
        material: "Tecido Jacquard Saten",
        priceEstimate: 22.00,
        rating: 4.9,
        reviewCount: 38,
        specs: ["Caimento perfeito até o chão", "Toque acetinado", "Passada em calandra"]
      },
      {
        id: "toalha-2",
        slug: "guardanapo-tecido-algodao-engomado",
        name: "Guardanapo de Tecido 100% Algodão Engomado",
        description: "Toque macio e engomagem firme para dobras artísticas e anéis de guardanapo.",
        longDescription: "Guardanapo quadrado em tecido 100% algodão penteado. A engomagem suave garante firmeza para criar dobraduras em leque, bispo ou receber anéis porta-guardanapo.",
        image: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&q=80&w=600",
        imageAlt: "Guardanapo de tecido de algodão engomado em Porto Alegre",
        imageWidth: 600,
        imageHeight: 600,
        dimensions: "45cm x 45cm",
        material: "100% Algodão Penteado",
        priceEstimate: 1.80,
        rating: 5.0,
        reviewCount: 47,
        specs: ["Engomagem estruturada", "Barra embainhada com esmero", "Super absorvente"]
      }
    ]
  },
  {
    id: "servico",
    slug: "locacao-materiais-servico",
    aliases: [
      "aluguel-materiais-servico-garcom"
    ],
    title: "Materiais de Serviço e Garçom",
    icon: "ConciergeBell",
    image: "https://locnos.com.br/wp-content/uploads/2026/07/Bandeja-de-Garcom-400x384.webp",
    imageAlt: "Bandejas antiderrapantes e javras para serviço de garçons em Porto Alegre",
    description: "Bandejas antiderrapantes, jarras de cristal para água e suco, alicates de massa, pinças e pegadores higiênicos para garçons e coquetéis.",
    seoContent: {
      h1: "Aluguel de Materiais de Serviço e Garçom em Porto Alegre - RS",
      h2Title: "Bandejas Antiderrapantes, Jarras de Suco e Água, Pegadores Inox e Acessórios de Sala",
      paragraphs: [
        "A agilidade do serviço de garçons depende de ferramentas adequadas. A Fest Sul oferece aluguel de bandejas redondas antiderrapantes que impedem o tombamento de taças em movimento e jarras de água."
      ],
      eventTips: [
        "Considere 1 bandeja antiderrapante para cada 2 garçons de salão."
      ],
      faq: [
        {
          question: "As bandejas emborrachadas realmente impedem a queda de taças?",
          answer: "Sim! As bandejas contam com piso emborrachado antiderrapante que garante estabilidade."
        }
      ]
    },
    products: [
      {
        id: "servico-1",
        slug: "bandeja-garcom-redonda-antiderrapante",
        name: "Bandeja de Garçom Redonda Antiderrapante",
        description: "Revestimento emborrachado antiqueda para serviço seguro de canapés e taças.",
        longDescription: "Bandeja para garçom com diâmetro de 40cm. Revestimento vulcanizado de alto atrito que impede deslizamentos acidentais durante o serviço de pista.",
        image: "https://images.unsplash.com/photo-1581333100576-b73bbe79c955?auto=format&fit=crop&q=80&w=600",
        imageAlt: "Bandeja antiderrapante de garçom para servir taças em Porto Alegre",
        imageWidth: 600,
        imageHeight: 600,
        dimensions: "40cm de diâmetro",
        material: "Inox com Emborrachado Antiderrapante",
        priceEstimate: 6.00,
        rating: 4.8,
        reviewCount: 33,
        specs: ["Borda alta de retenção", "Piso de borracha vulcanizada", "Leveza extrema para o garçom"]
      }
    ]
  },
  {
    id: "decoracao",
    slug: "locacao-acessorios-decoracao",
    aliases: [
      "aluguel-sousplats-porto-alegre"
    ],
    title: "Acessórios e Decoração de Mesa",
    icon: "Sparkles",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Sousplats dourados, porta-guardanapos e castiçais para decoração de mesa em Porto Alegre",
    description: "Sousplats dourados, amadeirados e prateados, porta-guardanapos ornamentados e castiçais de vela para emoldurar a mesa posta do seu evento.",
    seoContent: {
      h1: "Aluguel de Sousplats e Acessórios de Mesa em Porto Alegre - RS",
      h2Title: "Sousplats Dourados, Sousplats Mdf e Vidro, Castiçais de Cristal e Porta-Guardanapos",
      paragraphs: [
        "O sousplat é a base cenográfica que emoldura o prato e demarca a postura do convidado à mesa. A Fest Sul disponibiliza locação de sousplats dourados filetados e porta-guardanapos em Porto Alegre."
      ],
      eventTips: [
        "O sousplat deve permanecer na mesa durante a entrada e o prato principal."
      ],
      faq: [
        {
          question: "Os sousplats são higienizados e entregues sem marcas de uso?",
          answer: "Sim! Todos os sousplats passam por verificação de pintura e limpeza antes de serem embalados."
        }
      ]
    },
    products: [
      {
        id: "deco-1",
        slug: "sousplat-dourado-arabesco-borda",
        name: "Sousplat Dourado com Borda em Arabescos",
        description: "Emoldura o prato de porcelana com imponência e acabamento dourado reluzente.",
        longDescription: "Sousplat em resina polida dourada com bordas ornamentadas em arabescos clássicos. Peça marcante para fotos e ambientações de jantares de casamento.",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600",
        imageAlt: "Sousplat dourado ornamentado em arabescos para mesa posta",
        imageWidth: 600,
        imageHeight: 600,
        dimensions: "33cm de diâmetro",
        material: "Resina Polida Dourada",
        priceEstimate: 4.50,
        rating: 5.0,
        reviewCount: 61,
        specs: ["Dourado real intenso", "Resistente a impacto", "Encaixe perfeito para pratos de 27cm"]
      }
    ]
  }
];
