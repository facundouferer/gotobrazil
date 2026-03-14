// src/i18n/translations.ts
// Const types pattern for languages
export const LANGUAGES = {
  ES: "es",
  PT: "pt",
  EN: "en",
} as const;

export type Language = (typeof LANGUAGES)[keyof typeof LANGUAGES];

export const DEFAULT_LANGUAGE: Language = LANGUAGES.ES;

export const LANGUAGE_NAMES: Record<Language, string> = {
  [LANGUAGES.ES]: "Español",
  [LANGUAGES.PT]: "Português",
  [LANGUAGES.EN]: "English",
};

// Translations object
export const TRANSLATIONS = {
  [LANGUAGES.ES]: {
    // Navigation
    nav: {
      destinations: "Destinos",
      culture: "Cultura",
      gastronomy: "Gastronomía",
    },
    // Hero
    hero: {
      title: "ALMA",
      titleAccent: "VIBRANTE",
      cta: "Explora Brasil",
      quote: '"Una sinfonía de colores, una danza de culturas."',
      description:
        "Desde el corazón rítmico de la Amazonía hasta las arenas doradas de Río de Janeiro, Brasil es un país donde la naturaleza, cultura e historia se encuentran.",
    },
    // Curated Experiences
    experiences: {
      subtitle: "JORNADAS CURADAS",
      title: "La Esencia del Descubrimiento",
      badge: "Nuevas Exploraciones",
      nature: {
        tag: "Maravillas Naturales",
        title: "Amazonía & Iguazú",
        description:
          "Explora parques nacionales, cataratas majestosas como las Cataratas del Iguazú y playas paradisíacas a lo largo de más de 7.000 km de costa.",
        cta: "Explorar Naturaleza",
      },
      cities: {
        tag: "Ciudades Vibrantes",
        title: "Río & São Paulo",
      },
      culture: {
        tag: "Alma Cultural",
        title: "Carnaval & Samba",
        description:
          "Siente el pulso de Brasil a través de su música, danza y gastronomía legendaria.",
      },
    },
    // Editorial Section
    editorial: {
      subtitle: "LOS SABORES DE BRASIL",
      title: "Un Banquete para los Sentidos",
      description:
        "La gastronomía brasileña refleja la diversidad cultural del país. Ingredientes indígenas, africanos y europeos crearon platos únicos que varían de región en región.",
      stats: {
        states: "Estados + Distrito Federal",
        recipes: "Recetas Regionales",
      },
      card: {
        title: "Prueba la Cultura",
        description:
          "Descubre los sabores únicos de la cocina bahiana y el churrasco gaúcho.",
      },
    },
    // Destinations Page
    destinations: {
      hero: {
        title: "HORIZONTES",
        titleAccent: "SIN LÍMITES",
        cta: "Encuentra tu Destino",
        quote: '"El quinto país más grande del mundo, esperándote."',
        description: "De costas tropicales que se extienden por 7.000 km al corazón de la selva tropical más grande del mundo.",
      },
      featured: {
        subtitle: "DESTINOS ICÓNICOS",
        title: "Donde la Naturaleza Encuentra el Alma",
        badge: "Destacado",
      },
      rio: {
        tag: "Paraíso Costero",
        title: "Río de Janeiro",
        description: "Río de Janeiro encanta con sus playas icónicas como Copacabana e Ipanema, el Cristo Redentor y el Pan de Azúcar.",
        cta: "Descubrir Río",
      },
      amazon: {
        tag: "Maravillas Naturales",
        title: "La Amazonía",
      },
      stats: {
        title: "Brasil en Números",
        subtitle: "Datos Rápidos",
        coastline: "km de Costa",
        beaches: "Playas",
        parks: "Parques Nacionales",
        unesco: "Sitios UNESCO",
      },
      regions: {
        subtitle: "EXPLORACIÓN REGIONAL",
        title: "Cinco Regiones, Historias Infinitas",
        description: "Cada región de Brasil tiene un carácter distinto — desde las llanuras gaúchas del Sur hasta la costa salvaje del Nordeste.",
        northeast: {
          tag: "Tropical",
          title: "Nordeste",
          description: "Salvador, Recife, Fortaleza — costa soleada, arquitectura colonial y herencia afro-brasileña en cada esquina.",
          detail: "300+ días de sol",
        },
        south: {
          tag: "Patrimonio",
          title: "Sur",
          description: "Cataratas del Iguazú, Florianópolis y Gramado — encanto europeo encuentra grandeza subtropical en la región más templada de Brasil.",
          detail: "Cataratas del Iguazú",
        },
        southeast: {
          tag: "Cosmopolita",
          title: "Sudeste",
          description: "Río, São Paulo, Minas Gerais — potencia económica y cultural con museos, gastronomía y vida nocturna de clase mundial.",
          detail: "2 megaciudades",
        },
      },
      minas: {
        subtitle: "JOYA ESCONDIDA",
        title: "Minas Gerais: El Corazón de Brasil",
        description: "Más allá de la costa está el alma del país. Minas Gerais ofrece iglesias barrocas congeladas en el tiempo, algunas de las mejores plantaciones de café del mundo y una tradición culinaria que parece un abrazo cálido de una abuela que nunca conociste.",
        cardTitle: "Fuera del Camino Común",
        cardDescription: "Ciudades coloniales, senderos en las montañas y el calor de la hospitalidad mineira.",
        unescoCities: "Ciudades Patrimonio UNESCO",
        coffeeProducer: "Productor de Café de Brasil",
      },
    },
    // Culture Page
    culture: {
      hero: {
        title: "CULTURA",
        titleAccent: "VIVA",
        cta: "Sumérgete en la Cultura",
        quote: '"La cultura no es solo lo que vemos — es lo que sentimos."',
        description: "Tres continentes de herencia se encuentran en Brasil. Influencias indígenas, africanas y europeas se mezclan para crear una identidad cultural vibrante, llena de ritmo, colores y tradición.",
      },
      pillars: {
        subtitle: "PILARES CULTURALES",
        title: "El Ritmo de una Nación",
        description: "La cultura brasileña pulsa a través de la música, la danza, las celebraciones populares y las tradiciones que atraviesan generaciones. Cada región del país trae consigo una historia única.",
        badge: "Patrimonio",
      },
      carnival: {
        tag: "Famoso en el Mundo",
        title: "Carnaval",
        description: "El Carnaval brasileño es considerada la fiesta popular más grande del planeta. Durante varios días, millones de personas salen a las calles para celebrar con música, danza y fantasías. En Río de Janeiro, las escuelas de samba desfilan en el Sambódromo en espectáculos grandiosos. En Salvador y Recife, bloques de calle transforman la ciudad en un enorme escenario cultural.",
        cta: "Vive el Carnaval",
      },
      music: {
        tag: "Herencia Musical",
        title: "Samba & Bossa Nova",
        description: "El samba nació en las comunidades afro-brasileñas de Río de Janeiro y se convirtió en un símbolo nacional. La bossa nova, surgida en los años 1950, trajo una nueva estética musical que conquistó el mundo con artistas como Tom Jobim y João Gilberto.",
      },
      capoeira: {
        tag: "Tradiciones Vivas",
        title: "Capoeira",
        description: "Creada por esclavizados africanos en Brasil, la capoeira mezcla arte marcial, música, danza y resistencia cultural. Hoy reconocida como Patrimonio Cultural Inmaterial de la Humanidad por la UNESCO, representa libertad, identidad e historia.",
      },
      expressions: {
        subtitle: "EXPRESIONES CULTURALES",
        title: "Un Mosaico de Identidades",
        description: "La identidad cultural brasileña es resultado del encuentro entre pueblos indígenas, africanos y europeos. Esta diversidad creó una de las culturas más ricas y vibrantes del planeta.",
        afro: {
          title: "Herencia Afro-Brasileña",
          description: "La influencia africana está presente en la música, la cocina, las religiones y las fiestas populares. Expresiones como el Candomblé, la capoeira y el maracatu forman parte del alma cultural de Brasil, especialmente en estados como Bahia y Pernambuco.",
          tags: ["Salvador", "Bahia", "Recife"],
        },
        indigenous: {
          title: "Raíces Indígenas",
          description: "Más de 300 pueblos indígenas viven en Brasil, preservando lenguas, tradiciones y conocimientos ancestrales. Son los guardianes de una profunda conexión con la naturaleza, especialmente en la región amazónica.",
          tags: ["Amazonía", "Xingu"],
        },
        european: {
          title: "Influencia Europea",
          description: "La colonización portuguesa dejó marcas profundas en la arquitectura, el idioma y la religión. Ciudades históricas como Ouro Preto y Paraty preservan iglesias barrocas, calles de piedra y tradiciones culturales que atraviesan siglos.",
          tags: ["Ouro Preto", "Paraty", "Gramado"],
        },
      },
      art: {
        subtitle: "ARTE Y ARQUITECTURA",
        title: "Del Barroco al Modernismo",
        description: "La historia artística de Brasil atraviesa siglos. Desde las iglesias barrocas de Ouro Preto, creadas por el maestro Aleijadinho, hasta las curvas modernistas de Brasilia diseñadas por Oscar Niemeyer. Artistas contemporáneos como Vik Muniz y Beatriz Milhazes también pusieron a Brasil en el mapa global del arte.",
        cardTitle: "Arte en Todas Partes",
        cardDescription: "Arte callejero, galerías e instalaciones públicas transforman ciudades enteras en lienzos vivos.",
        museums: "Museos y Galerías",
        festivals: "Festivales Culturales por Año",
      },
      calendar: {
        title: "Calendario Cultural",
        description: "Las celebraciones que definen a Brasil a lo largo del año.",
        events: {
          bonfim: {
            month: "Enero",
            location: "Salvador",
            title: "Lavagem do Bonfim",
            description: "Una procesión religiosa tradicional donde baianas vestidas de blanco lavan las escaleras de la Iglesia del Bonfim. Mezcla fe católica y tradiciones afro-brasileñas.",
            type: "Ceremonia sagrada",
          },
          carnival: {
            month: "Febrero / Marzo",
            location: "Río de Janeiro · Salvador · Recife",
            title: "Carnaval",
            description: "El espectáculo cultural más grande de Brasil, con desfiles, bloques de calle, música y danza durante varios días.",
            type: "5 días de fiesta",
          },
          juninas: {
            month: "Junio",
            location: "Nordeste",
            title: "Festas Juninas",
            description: "Celebraciones tradicionales con danzas típicas, comidas regionales y hogueras. Especialmente populares en el Nordeste de Brasil.",
            type: "Todo el mes",
          },
          parintins: {
            month: "Septiembre",
            location: "Amazonas",
            title: "Festival de Parintins",
            description: "Una competición folclórica entre los bois Garantido y Caprichoso, con música, danza y espectáculos inspirados en las leyendas amazónicas.",
            type: "Espectáculo folclórico",
          },
        },
      },
    },
    // Gastronomy Page
    gastronomy: {
      hero: {
        badge: "Odisea Gastronómica",
        title: "Un Viaje Culinario por Brasil",
        description: "La gastronomía brasileña refleja la diversidad cultural del país. Ingredientes indígenas, africanos y europeos se encuentran para crear platos únicos que varían de región en región. Del pez fresco de la Amazonía a los asados del Sur, cada plato cuenta una historia de tradición, territorio e identidad.",
      },
      regions: {
        title: "Sabores Regionales",
        description: "Un país del tamaño de un continente con una cocina igualmente diversa. Cada región de Brasil presenta sabores, ingredientes y técnicas culinarias únicas que reflejan su historia y cultura.",
        amazon: {
          title: "Selva Amazónica",
          description: "La cocina amazónica nace de la biodiversidad de la selva. Ingredientes como açaí, tucupi, jambu y el legendario pez pirarucu forman parte de una tradición culinaria profundamente ligada a la naturaleza y las comunidades indígenas.",
          tags: ["Exótico", "Orgánico"],
        },
        south: {
          title: "Asado Gaúcho",
          description: "En el sur de Brasil, el asado es más que una comida — es un ritual social. Carnes seleccionadas se preparan lentamente al fuego abierto, manteniendo una tradición que viene de los antiguos gaúchos de las pampas.",
        },
        northeast: {
          title: "Sabores de Bahia",
          description: "La cocina bahiana es una de las más marcantes de Brasil. Platos como acarajé, moqueca y vatapá combinan influencias africanas e indígenas con ingredientes como dendê, coco y pimienta.",
        },
        minas: {
          title: "Herencia Mineira",
          description: "La capital de la comida casera. Famosa por quesos artesanales y el mejor pan de queso del mundo.",
        },
      },
      caipirinha: {
        title: "El Arte de la Caipirinha",
        description: "Más que una bebida, la caipirinha es un símbolo nacional. Hecha con cachaça, limón, azúcar y hielo, representa la sofisticada simplicidad de la cultura brasileña y acompaña desde encuentros informales hasta grandes celebraciones.",
        feature1: {
          title: "Cachaça Artesanal",
          description: "Destilada a partir de la caña de azúcar y producida tradicionalmente en alambiques por todo Brasil.",
        },
        feature2: {
          title: "Frescor Tropical",
          description: "Limón fresco y hielo triturado crean un equilibrio perfecto entre acidez, dulzura y frescura.",
        },
        cta: "Descubre la receta",
        badge: "Alma Brasileña",
      },
      tours: {
        title: "Top 5 Tours Gastronómicos",
        description: "Viajes curados para el viajero apasionado por los sabores.",
        tour1: {
          location: "Minas Gerais",
          title: "La Ruta del Café",
          description: "Explora plantaciones centenarias en las montañas de Minas Gerais y descubre el proceso completo del café brasileño, desde la cosecha hasta la tostado artesanal.",
          duration: "4 Días",
        },
        tour2: {
          location: "Salvador",
          title: "Sabores de Bahia",
          description: "Aprende a preparar platos tradicionales como acarajé, moqueca y vatapá con cocineras locales en las calles históricas del Pelourinho.",
          duration: "3 Días",
        },
        tour3: {
          location: "São Paulo",
          title: "Estrella Michelin Urbana",
          description: "Descubre la capital gastronómica de Brasil con visitas a restaurantes premiados, mercados tradicionales y experiencias culinarias innovadoras.",
          duration: "7 Días",
        },
        tour4: {
          location: "Amazonía",
          title: "Sabores de la Selva",
          description: "Una inmersión en la cocina amazónica con chefs locales, explorando ingredientes únicos de la selva y técnicas tradicionales indígenas.",
          duration: "5 Días",
        },
        tour5: {
          location: "Río de Janeiro",
          title: "Comida de Calle Carioca",
          description: "Un paseo por las mejores comidas de calle de Río, incluyendo pastel, caldo de caña, biscoito Globo y sándwiches tradicionales de las playas cariocas.",
          duration: "2 Días",
        },
      },
    },
    // Footer
    footer: {
      rights: "Diseñado y Desarrollado por ",
      tagline: "Definiendo el estándar de oro del turismo en Sudamérica. Experimenta lujo, naturaleza y alma.",
      explore: "Explorar",
      support: "Soporte",
      contact: "Contacto",
      sustainableTourism: "Turismo Sostenible",
      premiumExperience: "Experiencia Premium",
    },
  },
  [LANGUAGES.PT]: {
    // Navigation
    nav: {
      destinations: "Destinos",
      culture: "Cultura",
      gastronomy: "Gastronomia",
    },
    // Hero
    hero: {
      title: "ALMA",
      titleAccent: "VIBRANTE",
      cta: "Explore o Brasil",
      quote: '"Uma sinfonia de cores, uma dança de culturas."',
      description:
        "Do coração rítmico da Amazônia às areias douradas do Rio de Janeiro, o Brasil é um país onde natureza, cultura e história se encontram.",
    },
    // Curated Experiences
    experiences: {
      subtitle: "JORNADAS CURADAS",
      title: "A Essência da Descoberta",
      badge: "Novas Explorações",
      nature: {
        tag: "Maravilhas Naturais",
        title: "Amazônia & Iguaçu",
        description:
          "Explore parques nacionais, cataratas majestosas como as Cataratas do Iguaçu e praias paradisíacas ao longo de mais de 7.000 km de costa.",
        cta: "Explorar Natureza",
      },
      cities: {
        tag: "Cidades Vibrantes",
        title: "Rio & São Paulo",
      },
      culture: {
        tag: "Alma Cultural",
        title: "Carnaval & Samba",
        description:
          "Sinta o pulso do Brasil através da sua música, dança e gastronomia lendária.",
      },
    },
    // Editorial Section
    editorial: {
      subtitle: "OS SABORES DO BRASIL",
      title: "Um Banquete para os Sentidos",
      description:
        "A gastronomia brasileira reflete a diversidade cultural do país. Ingredientes indígenas, africanos e europeus criaram pratos únicos que variam de região para região.",
      stats: {
        states: "Estados + Distrito Federal",
        recipes: "Receitas Regionais",
      },
      card: {
        title: "Prove a Cultura",
        description:
          "Descubra os sabores únicos da culinária baiana e do churrasco gaúcho.",
      },
    },
    // Destinations Page
    destinations: {
      hero: {
        title: "HORIZONTES",
        titleAccent: "SEM LIMITES",
        cta: "Encontre Seu Destino",
        quote: '"O quinto maior país do mundo, esperando por você."',
        description: "De costas tropicais que se estendem por 7.000 km ao coração da maior floresta tropical do mundo.",
      },
      featured: {
        subtitle: "DESTINOS ICÔNICOS",
        title: "Onde a Natureza Encontra a Alma",
        badge: "Destaque",
      },
      rio: {
        tag: "Paraíso Costeiro",
        title: "Rio de Janeiro",
        description: "O Rio de Janeiro encanta com suas praias icônicas como Copacabana e Ipanema, o Cristo Redentor e o Pão de Açúcar.",
        cta: "Descobrir o Rio",
      },
      amazon: {
        tag: "Maravilhas Naturais",
        title: "A Amazônia",
      },
      stats: {
        title: "Brasil em Números",
        subtitle: "Dados Rápidos",
        coastline: "km de Costa",
        beaches: "Praias",
        parks: "Parques Nacionais",
        unesco: "Sítios UNESCO",
      },
      regions: {
        subtitle: "EXPLORAÇÃO REGIONAL",
        title: "Cinco Regiões, Histórias Infinitas",
        description: "Cada região do Brasil possui um caráter distinto — das planícies gaúchas do Sul ao litoral selvagem do Nordeste.",
        northeast: {
          tag: "Tropical",
          title: "Nordeste",
          description: "Salvador, Recife, Fortaleza — litoral ensolarado, arquitetura colonial e herança afro-brasileira em cada esquina.",
          detail: "300+ dias de sol",
        },
        south: {
          tag: "Patrimônio",
          title: "Sul",
          description: "Cataratas do Iguaçu, Florianópolis e Gramado — charme europeu encontra grandeza subtropical na região mais temperada do Brasil.",
          detail: "Cataratas do Iguaçu",
        },
        southeast: {
          tag: "Cosmopolita",
          title: "Sudeste",
          description: "Rio, São Paulo, Minas Gerais — potência econômica e cultural com museus, gastronomia e vida noturna de classe mundial.",
          detail: "2 megacidades",
        },
      },
      minas: {
        subtitle: "JOIA ESCONDIDA",
        title: "Minas Gerais: O Coração do Brasil",
        description: "Além do litoral está a alma do país. Minas Gerais oferece igrejas barrocas congeladas no tempo, algumas das melhores plantações de café do mundo e uma tradição culinária que parece um abraço caloroso de uma avó que você nunca conheceu.",
        cardTitle: "Fora do Caminho Comum",
        cardDescription: "Cidades coloniais, trilhas nas montanhas e o calor da hospitalidade mineira.",
        unescoCities: "Cidades Patrimônio UNESCO",
        coffeeProducer: "Produtor de Café do Brasil",
      },
    },
    // Culture Page
    culture: {
      hero: {
        title: "CULTURA",
        titleAccent: "VIVA",
        cta: "Mergulhe na Cultura",
        quote: '"A cultura não é apenas o que vemos — é o que sentimos."',
        description: "Três continentes de herança se encontram no Brasil. Influências indígenas, africanas e europeias se misturam para criar uma identidade cultural vibrante, cheia de ritmo, cores e tradição.",
      },
      pillars: {
        subtitle: "PILARES CULTURAIS",
        title: "O Ritmo de uma Nação",
        description: "A cultura brasileira pulsa através da música, da dança, das celebrações populares e das tradições que atravessam gerações. Cada região do país traz consigo uma história única.",
        badge: "Patrimônio",
      },
      carnival: {
        tag: "Famoso no Mundo",
        title: "Carnaval",
        description: "O Carnaval brasileiro é considerado a maior festa popular do planeta. Durante vários dias, milhões de pessoas saem às ruas para celebrar com música, dança e fantasias. No Rio de Janeiro, as escolas de samba desfilam no Sambódromo em espetáculos grandiosos. Em Salvador e Recife, blocos de rua transformam a cidade em um enorme palco cultural.",
        cta: "Viva o Carnaval",
      },
      music: {
        tag: "Herança Musical",
        title: "Samba & Bossa Nova",
        description: "O samba nasceu nas comunidades afro-brasileiras do Rio de Janeiro e se tornou um símbolo nacional. A bossa nova, surgida nos anos 1950, trouxe uma nova estética musical que conquistou o mundo com artistas como Tom Jobim e João Gilberto.",
      },
      capoeira: {
        tag: "Tradições Vivas",
        title: "Capoeira",
        description: "Criada por escravizados africanos no Brasil, a capoeira mistura arte marcial, música, dança e resistência cultural. Hoje reconhecida como Patrimônio Cultural Imaterial da Humanidade pela UNESCO, ela representa liberdade, identidade e história.",
      },
      expressions: {
        subtitle: "EXPRESSÕES CULTURAIS",
        title: "Um Mosaico de Identidades",
        description: "A identidade cultural brasileira é resultado do encontro entre povos indígenas, africanos e europeus. Essa diversidade criou uma das culturas mais ricas e vibrantes do planeta.",
        afro: {
          title: "Herança Afro-Brasileira",
          description: "A influência africana está presente na música, na culinária, nas religiões e nas festas populares. Expressões como o Candomblé, a capoeira e o maracatu fazem parte da alma cultural do Brasil, especialmente em estados como Bahia e Pernambuco.",
          tags: ["Salvador", "Bahia", "Recife"],
        },
        indigenous: {
          title: "Raízes Indígenas",
          description: "Mais de 300 povos indígenas vivem no Brasil, preservando línguas, tradições e conhecimentos ancestrais. Eles são os guardiões de uma profunda conexão com a natureza, especialmente na região amazônica.",
          tags: ["Amazônia", "Xingu"],
        },
        european: {
          title: "Influência Europeia",
          description: "A colonização portuguesa deixou marcas profundas na arquitetura, na língua e na religião. Cidades históricas como Ouro Preto e Paraty preservam igrejas barrocas, ruas de pedra e tradições culturais que atravessam séculos.",
          tags: ["Ouro Preto", "Paraty", "Gramado"],
        },
      },
      art: {
        subtitle: "ARTE E ARQUITETURA",
        title: "Do Barroco ao Modernismo",
        description: "A história artística do Brasil atravessa séculos. Das igrejas barrocas de Ouro Preto, criadas pelo mestre Aleijadinho, até as curvas modernistas de Brasília projetadas por Oscar Niemeyer. Artistas contemporâneos como Vik Muniz e Beatriz Milhazes também colocaram o Brasil no mapa global da arte.",
        cardTitle: "Arte em Todo Lugar",
        cardDescription: "Arte de rua, galerias e instalações públicas transformam cidades inteiras em telas vivas.",
        museums: "Museus e Galerias",
        festivals: "Festivais Culturais por Ano",
      },
      calendar: {
        title: "Calendário Cultural",
        description: "As celebrações que definem o Brasil ao longo do ano.",
        events: {
          bonfim: {
            month: "Janeiro",
            location: "Salvador",
            title: "Lavagem do Bonfim",
            description: "Uma tradicional procissão religiosa onde baianas vestidas de branco lavam as escadarias da Igreja do Bonfim. Mistura fé católica e tradições afro-brasileiras.",
            type: "Cerimônia sagrada",
          },
          carnival: {
            month: "Fevereiro / Março",
            location: "Rio de Janeiro · Salvador · Recife",
            title: "Carnaval",
            description: "O maior espetáculo cultural do Brasil, com desfiles, blocos de rua, música e dança durante vários dias.",
            type: "5 dias de festa",
          },
          juninas: {
            month: "Junho",
            location: "Nordeste",
            title: "Festas Juninas",
            description: "Celebrações tradicionais com danças típicas, comidas regionais e fogueiras. Especialmente populares no Nordeste do Brasil.",
            type: "O mês inteiro",
          },
          parintins: {
            month: "Setembro",
            location: "Amazonas",
            title: "Festival de Parintins",
            description: "Uma competição folclórica entre os bois Garantido e Caprichoso, com música, dança e espetáculos inspirados nas lendas amazônicas.",
            type: "Espetáculo folclórico",
          },
        },
      },
    },
    // Gastronomy Page
    gastronomy: {
      hero: {
        badge: "Odisseia Gastronômica",
        title: "Uma Jornada Culinária pelo Brasil",
        description: "A gastronomia brasileira reflete a diversidade cultural do país. Ingredientes indígenas, africanos e europeus se encontram para criar pratos únicos que variam de região para região. Do peixe fresco da Amazônia aos churrascos do Sul, cada prato conta uma história de tradição, território e identidade.",
      },
      regions: {
        title: "Sabores Regionais",
        description: "Um país do tamanho de um continente com uma cozinha igualmente diversa. Cada região do Brasil apresenta sabores, ingredientes e técnicas culinárias únicas que refletem sua história e cultura.",
        amazon: {
          title: "Floresta Amazônica",
          description: "A culinária amazônica nasce da biodiversidade da floresta. Ingredientes como açaí, tucupi, jambu e o lendário peixe pirarucu fazem parte de uma tradição culinária profundamente ligada à natureza e às comunidades indígenas.",
          tags: ["Exótico", "Orgânico"],
        },
        south: {
          title: "Churrasco Gaúcho",
          description: "No sul do Brasil, o churrasco é mais do que uma refeição — é um ritual social. Carnes selecionadas são preparadas lentamente no fogo aberto, mantendo uma tradição que vem dos antigos gaúchos das pampas.",
        },
        northeast: {
          title: "Sabores da Bahia",
          description: "A cozinha baiana é uma das mais marcantes do Brasil. Pratos como acarajé, moqueca e vatapá combinam influências africanas e indígenas com ingredientes como dendê, coco e pimenta.",
        },
        minas: {
          title: "Herança Mineira",
          description: "A capital da comida caseira. Famosa por queijos artesanais e o melhor pão de queijo do mundo.",
        },
      },
      caipirinha: {
        title: "A Arte da Caipirinha",
        description: "Mais do que uma bebida, a caipirinha é um símbolo nacional. Feita com cachaça, limão, açúcar e gelo, ela representa a simplicidade sofisticada da cultura brasileira e acompanha desde encontros informais até grandes celebrações.",
        feature1: {
          title: "Cachaça Artesanal",
          description: "Destilada a partir da cana-de-açúcar e produzida tradicionalmente em alambiques por todo o Brasil.",
        },
        feature2: {
          title: "Frescor Tropical",
          description: "Limão fresco e gelo triturado criam um equilíbrio perfeito entre acidez, doçura e refrescância.",
        },
        cta: "Descubra a receita",
        badge: "Alma Brasileira",
      },
      tours: {
        title: "Top 5 Tours Gastronômicos",
        description: "Jornadas curadas para o viajante apaixonado por sabores.",
        tour1: {
          location: "Minas Gerais",
          title: "A Corrida do Café",
          description: "Explore plantações centenárias nas montanhas de Minas Gerais e descubra o processo completo do café brasileiro, desde a colheita até a torra artesanal.",
          duration: "4 Dias",
        },
        tour2: {
          location: "Salvador",
          title: "Sabores da Bahia",
          description: "Aprenda a preparar pratos tradicionais como acarajé, moqueca e vatapá com cozinheiras locais nas ruas históricas do Pelourinho.",
          duration: "3 Dias",
        },
        tour3: {
          location: "São Paulo",
          title: "Estrela Michelin Urbana",
          description: "Descubra a capital gastronômica do Brasil com visitas a restaurantes premiados, mercados tradicionais e experiências culinárias inovadoras.",
          duration: "7 Dias",
        },
        tour4: {
          location: "Amazônia",
          title: "Sabores da Floresta",
          description: "Uma imersão na culinária amazônica com chefs locais, explorando ingredientes únicos da floresta e técnicas tradicionais indígenas.",
          duration: "5 Dias",
        },
        tour5: {
          location: "Rio de Janeiro",
          title: "Comida de Rua Carioca",
          description: "Um passeio pelas melhores comidas de rua do Rio, incluindo pastel, caldo de cana, biscoito Globo e sanduíches tradicionais das praias cariocas.",
          duration: "2 Dias",
        },
      },
    },
    // Footer
    footer: {
      rights: "Designed and Developed by ",
      tagline: "Definindo o padrão de ouro do turismo na América do Sul. Experimente luxo, natureza e alma.",
      explore: "Explorar",
      support: "Suporte",
      contact: "Contato",
      sustainableTourism: "Turismo Sustentável",
      premiumExperience: "Experiência Premium",
    },
  },
  [LANGUAGES.EN]: {
    // Navigation
    nav: {
      destinations: "Destinations",
      culture: "Culture",
      gastronomy: "Gastronomy",
    },
    // Hero
    hero: {
      title: "VIBRANT",
      titleAccent: "SOUL",
      cta: "Explore Brazil",
      quote: '"A symphony of colors, a dance of cultures."',
      description:
        "From the rhythmic heart of the Amazon to the golden sands of Rio de Janeiro, Brazil is a country where nature, culture, and history meet.",
    },
    // Curated Experiences
    experiences: {
      subtitle: "CURATED JOURNEYS",
      title: "The Essence of Discovery",
      badge: "New Explorations",
      nature: {
        tag: "Natural Wonders",
        title: "Amazon & Iguazu",
        description:
          "Explore national parks, majestic waterfalls like Iguazu Falls, and paradise beaches along more than 7,000 km of coastline.",
        cta: "Explore Nature",
      },
      cities: {
        tag: "Vibrant Cities",
        title: "Rio & São Paulo",
      },
      culture: {
        tag: "Cultural Soul",
        title: "Carnival & Samba",
        description:
          "Feel Brazil's pulse through its music, dance, and legendary gastronomy.",
      },
    },
    // Editorial Section
    editorial: {
      subtitle: "THE FLAVORS OF BRAZIL",
      title: "A Feast for the Senses",
      description:
        "Brazilian gastronomy reflects the country's cultural diversity. Indigenous, African, and European ingredients created unique dishes that vary from region to region.",
      stats: {
        states: "States + Federal District",
        recipes: "Regional Recipes",
      },
      card: {
        title: "Taste the Culture",
        description:
          "Discover the unique flavors of Bahian cuisine and Gaucho barbecue.",
      },
    },
    // Destinations Page
    destinations: {
      hero: {
        title: "HORIZONS",
        titleAccent: "WITHOUT LIMITS",
        cta: "Find Your Destination",
        quote: '"The fifth largest country in the world, waiting for you."',
        description: "From tropical coasts stretching 7,000 km to the heart of the world's largest tropical rainforest.",
      },
      featured: {
        subtitle: "ICONIC DESTINATIONS",
        title: "Where Nature Meets Soul",
        badge: "Featured",
      },
      rio: {
        tag: "Coastal Paradise",
        title: "Rio de Janeiro",
        description: "Rio de Janeiro enchants with its iconic beaches like Copacabana and Ipanema, Christ the Redeemer and Sugarloaf Mountain.",
        cta: "Discover Rio",
      },
      amazon: {
        tag: "Natural Wonders",
        title: "The Amazon",
      },
      stats: {
        title: "Brazil in Numbers",
        subtitle: "Quick Facts",
        coastline: "km of Coastline",
        beaches: "Beaches",
        parks: "National Parks",
        unesco: "UNESCO Sites",
      },
      regions: {
        subtitle: "REGIONAL EXPLORATION",
        title: "Five Regions, Infinite Stories",
        description: "Each region of Brazil has a distinct character — from the Gaucho plains of the South to the wild coastline of the Northeast.",
        northeast: {
          tag: "Tropical",
          title: "Northeast",
          description: "Salvador, Recife, Fortaleza — sunny coast, colonial architecture and Afro-Brazilian heritage on every corner.",
          detail: "300+ days of sun",
        },
        south: {
          tag: "Heritage",
          title: "South",
          description: "Iguazu Falls, Florianópolis and Gramado — European charm meets subtropical grandeur in Brazil's most temperate region.",
          detail: "Iguazu Falls",
        },
        southeast: {
          tag: "Cosmopolitan",
          title: "Southeast",
          description: "Rio, São Paulo, Minas Gerais — economic and cultural powerhouse with world-class museums, gastronomy and nightlife.",
          detail: "2 megacities",
        },
      },
      minas: {
        subtitle: "HIDDEN GEM",
        title: "Minas Gerais: The Heart of Brazil",
        description: "Beyond the coast lies the soul of the country. Minas Gerais offers baroque churches frozen in time, some of the world's best coffee plantations and a culinary tradition that feels like a warm hug from a grandmother you never knew.",
        cardTitle: "Off the Beaten Path",
        cardDescription: "Colonial towns, mountain trails and the warmth of Mineiro hospitality.",
        unescoCities: "UNESCO Heritage Cities",
        coffeeProducer: "Coffee Producer in Brazil",
      },
    },
    // Culture Page
    culture: {
      hero: {
        title: "LIVING",
        titleAccent: "CULTURE",
        cta: "Immerse in Culture",
        quote: '"Culture is not just what we see — it is what we feel."',
        description: "Three continents of heritage meet in Brazil. Indigenous, African and European influences blend to create a vibrant cultural identity full of rhythm, colors and tradition.",
      },
      pillars: {
        subtitle: "CULTURAL PILLARS",
        title: "The Rhythm of a Nation",
        description: "Brazilian culture pulses through music, dance, popular celebrations and traditions that span generations. Each region of the country brings its own unique story.",
        badge: "Heritage",
      },
      carnival: {
        tag: "World Famous",
        title: "Carnival",
        description: "Brazilian Carnival is considered the planet's largest popular festival. For several days, millions of people take to the streets to celebrate with music, dance and costumes. In Rio de Janeiro, samba schools parade at the Sambadrome in grand spectacles. In Salvador and Recife, street blocks transform the city into a huge cultural stage.",
        cta: "Experience Carnival",
      },
      music: {
        tag: "Musical Heritage",
        title: "Samba & Bossa Nova",
        description: "Samba was born in the Afro-Brazilian communities of Rio de Janeiro and became a national symbol. Bossa nova, emerging in the 1950s, brought a new musical aesthetic that conquered the world with artists like Tom Jobim and João Gilberto.",
      },
      capoeira: {
        tag: "Living Traditions",
        title: "Capoeira",
        description: "Created by enslaved Africans in Brazil, capoeira blends martial arts, music, dance and cultural resistance. Today recognized as Intangible Cultural Heritage of Humanity by UNESCO, it represents freedom, identity and history.",
      },
      expressions: {
        subtitle: "CULTURAL EXPRESSIONS",
        title: "A Mosaic of Identities",
        description: "Brazilian cultural identity results from the encounter between indigenous, African and European peoples. This diversity created one of the richest and most vibrant cultures on the planet.",
        afro: {
          title: "Afro-Brazilian Heritage",
          description: "African influence is present in music, cuisine, religions and popular festivals. Expressions like Candomblé, capoeira and maracatu are part of Brazil's cultural soul, especially in states like Bahia and Pernambuco.",
          tags: ["Salvador", "Bahia", "Recife"],
        },
        indigenous: {
          title: "Indigenous Roots",
          description: "Over 300 indigenous peoples live in Brazil, preserving languages, traditions and ancestral knowledge. They are guardians of a deep connection with nature, especially in the Amazon region.",
          tags: ["Amazon", "Xingu"],
        },
        european: {
          title: "European Influence",
          description: "Portuguese colonization left deep marks on architecture, language and religion. Historic cities like Ouro Preto and Paraty preserve baroque churches, cobblestone streets and cultural traditions that span centuries.",
          tags: ["Ouro Preto", "Paraty", "Gramado"],
        },
      },
      art: {
        subtitle: "ART & ARCHITECTURE",
        title: "From Baroque to Modernism",
        description: "Brazil's artistic history spans centuries. From the baroque churches of Ouro Preto, created by master Aleijadinho, to the modernist curves of Brasília designed by Oscar Niemeyer. Contemporary artists like Vik Muniz and Beatriz Milhazes also put Brazil on the global art map.",
        cardTitle: "Art Everywhere",
        cardDescription: "Street art, galleries and public installations transform entire cities into living canvases.",
        museums: "Museums & Galleries",
        festivals: "Cultural Festivals per Year",
      },
      calendar: {
        title: "Cultural Calendar",
        description: "The celebrations that define Brazil throughout the year.",
        events: {
          bonfim: {
            month: "January",
            location: "Salvador",
            title: "Lavagem do Bonfim",
            description: "A traditional religious procession where Baianas dressed in white wash the steps of the Church of Bonfim. Mixes Catholic faith and Afro-Brazilian traditions.",
            type: "Sacred ceremony",
          },
          carnival: {
            month: "February / March",
            location: "Rio de Janeiro · Salvador · Recife",
            title: "Carnival",
            description: "Brazil's largest cultural spectacle, with parades, street blocks, music and dance for several days.",
            type: "5 days of party",
          },
          juninas: {
            month: "June",
            location: "Northeast",
            title: "Festas Juninas",
            description: "Traditional celebrations with typical dances, regional foods and bonfires. Especially popular in Brazil's Northeast.",
            type: "The whole month",
          },
          parintins: {
            month: "September",
            location: "Amazonas",
            title: "Parintins Festival",
            description: "A folkloric competition between the Garantido and Caprichoso bulls, with music, dance and performances inspired by Amazonian legends.",
            type: "Folkloric spectacle",
          },
        },
      },
    },
    // Gastronomy Page
    gastronomy: {
      hero: {
        badge: "Gastronomic Odyssey",
        title: "A Culinary Journey Through Brazil",
        description: "Brazilian gastronomy reflects the country's cultural diversity. Indigenous, African and European ingredients come together to create unique dishes that vary from region to region. From fresh Amazonian fish to Southern barbecues, each dish tells a story of tradition, territory and identity.",
      },
      regions: {
        title: "Regional Flavors",
        description: "A continent-sized country with an equally diverse cuisine. Each region of Brazil presents unique flavors, ingredients and culinary techniques that reflect its history and culture.",
        amazon: {
          title: "Amazon Rainforest",
          description: "Amazonian cuisine is born from the forest's biodiversity. Ingredients like açaí, tucupi, jambu and the legendary pirarucu fish are part of a culinary tradition deeply connected to nature and indigenous communities.",
          tags: ["Exotic", "Organic"],
        },
        south: {
          title: "Gaucho Barbecue",
          description: "In southern Brazil, barbecue is more than a meal — it's a social ritual. Selected meats are slowly prepared over open fire, maintaining a tradition that comes from the ancient Gauchos of the pampas.",
        },
        northeast: {
          title: "Flavors of Bahia",
          description: "Bahian cuisine is one of Brazil's most distinctive. Dishes like acarajé, moqueca and vatapá combine African and indigenous influences with ingredients like dendê, coconut and pepper.",
        },
        minas: {
          title: "Mineira Heritage",
          description: "The capital of home cooking. Famous for artisanal cheeses and the world's best cheese bread.",
        },
      },
      caipirinha: {
        title: "The Art of Caipirinha",
        description: "More than a drink, caipirinha is a national symbol. Made with cachaça, lime, sugar and ice, it represents the sophisticated simplicity of Brazilian culture and accompanies everything from casual gatherings to grand celebrations.",
        feature1: {
          title: "Artisanal Cachaça",
          description: "Distilled from sugar cane and traditionally produced in alembics throughout Brazil.",
        },
        feature2: {
          title: "Tropical Freshness",
          description: "Fresh lime and crushed ice create a perfect balance between acidity, sweetness and refreshment.",
        },
        cta: "Discover the recipe",
        badge: "Brazilian Soul",
      },
      tours: {
        title: "Top 5 Gastronomic Tours",
        description: "Curated journeys for the flavor-passionate traveler.",
        tour1: {
          location: "Minas Gerais",
          title: "The Coffee Run",
          description: "Explore century-old plantations in the mountains of Minas Gerais and discover the complete process of Brazilian coffee, from harvest to artisanal roasting.",
          duration: "4 Days",
        },
        tour2: {
          location: "Salvador",
          title: "Flavors of Bahia",
          description: "Learn to prepare traditional dishes like acarajé, moqueca and vatapá with local cooks in the historic streets of Pelourinho.",
          duration: "3 Days",
        },
        tour3: {
          location: "São Paulo",
          title: "Urban Michelin Star",
          description: "Discover Brazil's gastronomic capital with visits to award-winning restaurants, traditional markets and innovative culinary experiences.",
          duration: "7 Days",
        },
        tour4: {
          location: "Amazon",
          title: "Flavors of the Forest",
          description: "An immersion in Amazonian cuisine with local chefs, exploring unique forest ingredients and traditional indigenous techniques.",
          duration: "5 Days",
        },
        tour5: {
          location: "Rio de Janeiro",
          title: "Carioca Street Food",
          description: "A tour of Rio's best street food, including pastel, sugarcane juice, Globo crackers and traditional sandwiches from the Carioca beaches.",
          duration: "2 Days",
        },
      },
    },
    // Footer
    footer: {
      rights: "Designed and Developed by ",
      tagline: "Defining the gold standard of tourism in South America. Experience luxury, nature, and soul.",
      explore: "Explore",
      support: "Support",
      contact: "Contact",
      sustainableTourism: "Sustainable Tourism",
      premiumExperience: "Premium Experience",
    },
  },
} as const;

// Type for translations
export type Translations = (typeof TRANSLATIONS)[Language];

// Helper to get nested translation values
export function getTranslation(
  lang: Language,
  path: string
): string | Record<string, string> {
  const keys = path.split(".");
  let value: unknown = TRANSLATIONS[lang];

  for (const key of keys) {
    if (value && typeof value === "object" && key in value) {
      value = (value as Record<string, unknown>)[key];
    } else {
      return path;
    }
  }

  return typeof value === "string" ? value : String(value);
}
