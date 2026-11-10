import type { PageCopy } from "./pages-en";

/**
 * Setswana page copy. Mirrors the English shape exactly; `PageCopy` makes any
 * missing or extra key a type error.
 */
export const pagesTn: PageCopy = {
  common: {
    source: "Motswedi",
    enquire: "Botsa",
    read: "Bala",
    minutes: (n: number) => `metsotso e ${n} ya go bala`,
    article: "setlhogo",
    articles: "ditlhogo",
    emailApp: "E bula tirišo ya gago ya emeile",
  },

  notFound: {
    eyebrow: "404, tsebe ga e a bonwa",
    title: "Tsebe eno e fetogile.",
    body:
      "Mmaraka o a tsamaya, mme le diwebosaete di a tsamaya. Tsebe e o neng o e batla ga e yo fano, mme matlole, dikakanyo le setlhopha sa rona di teng.",
    home: "Boela kwa lapeng",
    funds: "Sekaseka matlole",
    popular: "Ditsebe tse di itsegeng",
    links: [
      { label: "Matlole a ditokololo", href: "/funds" },
      { label: "Filosofi ya ditsenyo", href: "/investments" },
      { label: "Dikakanyo", href: "/insights" },
      { label: "Ikgolaganye", href: "/contact" },
    ],
  },

  about: {
    hero: {
      eyebrow: "Ka ga Kgori Capital",
      title: "Setheo se se ikemetseng, se rulilwe ke batho ba ba se tsamaisang.",
      lead:
        "Kgori Capital e naya ditharabololo tsa ditsenyo tsa selegae le tsa lefatshe tse di laolwang ke bareki, go matlole a penshene, dikompone, mekgatlho ya thuso le bareki ba poraefete.",
    },
    intro: {
      quote:
        "Re baagi ba ba ratang naga ya bone, mme re tsaya boikarabelo le tshepo e e beilweng mo go rona ka tlhoafalo.",
      p1:
        "E tlhomilwe ka 2012, mme setheo se goletse go tswa kwa tshimologong e e botlana go nna motsamaisi wa ditsenyo yo o kwa pele mo Botswana, o o tsamaisang madi a mantsi mo boemong jwa bareki ba bangwe.",
      p2:
        "Re lemoga karolo ya rona mo Botswana. Seo se raya go nna le seabe se se utlwalang go fetola indaseteri gore e nne e e nayang dipholo tse di molemo go bareki, e seng fela dituelo tse di gaisanang go batsamaisi.",
      p3:
        "Kgori Capital e rulilwe le go laolwa gotlhelele ke botsamaisi le badiredi, mme e dira jaaka setheo se se ikemetseng se se tsepameng fela mo go tsamaiseng madi a bareki ba bangwe.",
    },
    stats: [
      "E tlhomilwe jaaka setheo se se ikemetseng",
      "E rulilwe ke botsamaisi le badiredi",
      "Boitseanape jwa ditheo mo setlhopheng",
    ],
    registered: {
      label: "E kwadisitswe",
      regLabel: "Nomoro ya kwadiso",
      licence: "E neilwe laesense ke NBFIRA jaaka motsamaisi wa ditsenyo.",
    },
    teamPhoto: {
      alt: "Setlhopha sa Kgori Capital se kopane kwa diofising tsa setheo kwa Gaborone.",
      caption: "Setlhopha kwa Gaborone, kwa dipotofolio tsotlhe di tsamaisiwang teng.",
    },
    story: {
      eyebrow: "Hisitori ya rona",
      title: "E agilwe taelo nngwe ka nako.",
      lead:
        "Setheo ga se a agwa mo taelong e le nngwe kgotsa mo potsong e le nngwe ya mmaraka. Se goletse ka patlisiso, tirelo le dipholo tsa bareki tse di neng di ka tlhotlhomisiwa.",
      items: [
        {
          year: "2012",
          title: "Kgori Capital e a tlhomiwa",
          body:
            "Kgori Capital e bula jaaka motsamaisi wa ditsenyo yo o ikemetseng, wa baagi, mme e nna mosaeni wa Principles for Responsible Investment tse di tshegeditsweng ke UN.",
        },
        {
          year: "2015",
          title: "Ditirego tsa ditheo di oketsega",
          body:
            "Setheo se gola go nna motsamaisi yo o tshepiwang ke matlole a penshene, dikompone le mekgatlho ya thuso, se agilwe mo patlisisong le tirelong ya bareki, e seng mo bogolong jwa kabo.",
        },
        {
          year: "2019",
          title: "Phitlhelelo ya dijitale go moreki mongwe le mongwe",
          body:
            "Portal e e sireleditsweng ya bareki e kopanya dipotofolio, ditirisano, ditatemente le dintlha tsa motho mo lefelong le le lengwe, ka netefatso ya mokgwa wa bobedi le netefatso ya OTP.",
        },
        {
          year: "Gompieno",
          title: "Motsamaisi yo o kwa pele yo o ikemetseng",
          body:
            "Mokgwa o o tshwanang wa borui le tirego ya ditsenyo o direla matlole a penshene, dikompone, mekgatlho ya thuso le bareki ba poraefete.",
        },
      ],
    },
    values: {
      eyebrow: "Dikemo tsa rona",
      title: "PRIDE ke kafa re dirang ka teng.",
      lead:
        "Maatlamelo, Boikanyego, Boammaaruri, Maatla a go fetoga le Bokgoni jo bo kwa godimo. Khutshwafatso e a thusa, mme maemo a a leng kwa morago ga yone ke one a botlhokwa.",
    },
    ownership: {
      eyebrow: "Borui",
      title: "Batho ba ba dirang tiro ke bone beng ba setheo.",
      p1:
        "Filosofi ya rona ya borui e bonolo. Dišere di ntse mo bathong ba ba dirang mo setheong le ba ba bopang boleng go bareki. E theilwe mo boitlamong jwa go bontsha setšhaba se re se direlang mo sebopegong sa boeteledipele le setlhopha sa rona.",
      p2:
        "Re ipela ka go nna nngwe ya ditheo tse di se kae tsa Botswana tse di rulilweng ke baagi tse di tsamaisang madi.",
      statLabel: "E rulilwe ke baagi ba Botswana. E rulilwe le go laolwa gotlhelele ke botsamaisi le badiredi.",
      indepLabel: "E ikemetse ka boikgethelo",
      indepBody:
        "Ga go na banka e e e rulileng. Ga go na motlhagisi wa ditlhagiswa. Kgwebo ya rona fela ke go tsamaisa madi a bareki ba ba re tshepileng.",
    },
    people: {
      eyebrow: "Batho ba rona",
      title: "Bophara jwa setlhopha ke phapang.",
      lead:
        "Tsamaiso ya ditsenyo ke kgwebo ya bokgoni. Mongwe le mongwe yo o botlhokwa wa setlhopha sa ditsenyo ke mong yo o botlhokwa wa setheo.",
      executives: "Setlhopha sa botsamaisi",
      location: "Gaborone",
      board: "Boto ya balaodi",
      boardBody:
        "Boto ya rona e tla le boitseanape mo tsamaisong ya dipotofolio, togamaano, melao le ditiro, ka maitemogelo mo mmarakeng wa Aforika. Motsamaisi Mogolo o ntse mo botong mmogo le balaodi ba ba ikemetseng ba e seng ba khuduthamaga.",
      note:
        "Maloko a setlhopha sa botsamaisi a na le maitemogelo a a fetang dingwaga tse 15 ka palogare a tsamaisa matlole a ditheo mo Botswana.",
      readProfile: "Bala porofaele",
      boardNote:
        "Bontsi jwa boto bo ikemetse. Balaodi ba tlhotlhomisiwa mme ba amogelwe ke NBFIRA pele ba tlhomiwa.",
    },
    governance: {
      eyebrow: "Taolo",
      title: "E neilwe laesense, e ikemetse mme e ikarabelela.",
      body:
        "Boto e bea letlhomeso la taolo le setheo se le latelang, go ya ka togamaano, tikologo ya kotsi, melao, ditaolo tsa selegae le ditlwaelo tse di kwa godimo tsa lefatshe.",
      link: "Tlhokomelo le ESG",
      framework: {
        eyebrow: "Letlhomeso",
        title: "Kaelo go tswa mo botong. Tsheko go tswa kwa ntle ga yone.",
        body:
          "Taolo ga se lokwalo lo lo nnang mo šelofeng. Ke sete ya ditlhahlobo tse di swetsang gore ke mang yo a ka dirang, gore a ka amogela eng, le gore ke mang yo a tlhotlhomang dipholo.",
        items: [
          {
            title: "Boto",
            body:
              "E ikarabelela ka taolo le kaelo. E bea togamaano, e amogela sekgala sa kotsi mme e batla botsamaisi go ikarabela. Motsamaisi Mogolo o ntse le balaodi ba ba ikemetseng ba e seng ba khuduthamaga, ba ba dirang bontsi.",
          },
          {
            title: "Tlhotlhomiso, kotsi le go obamela melao",
            body:
              "Ke komiti ya boto e e eteletsweng pele ke motsamaisi yo o ikemetseng yo e seng wa khuduthamaga. E tlhotlhomisa pego ya madi, tikologo ya ditaolo, go obamela melao le rejisetara ya kotsi.",
          },
          {
            title: "Molaodi",
            body:
              "NBFIRA e naya setheo laesense ya motsamaisi wa madi mme e amogela balaodi pele ba tlhomiwa. Ditlhokego tsa yone tsa mmaraka wa madi di dira mo taelong nngwe le nngwe e re e tsamaisang.",
          },
        ],
      },
      practice: {
        eyebrow: "Mo tiragatsong",
        title: "Se letlhomeso le se rayang bareki.",
      },
      questions: {
        eyebrow: "Dipotso tsa taolo",
        title: "Di botsitswe, mme di arabilwe.",
        items: [
          {
            q: "Kgori Capital e laolwa jang?",
            a: "Boto e ikarabelela ka taolo mme e bea letlhomeso le setheo se le latelang. Letlhomeso leo le theilwe mo kaelong ya togamaano ya setheo, tikologo ya kotsi, tikologo ya melao, ditaolo tsa selegae le ditlwaelo tse di kwa godimo tsa lefatshe, mme le bapisiwa le Khoutu ya King go dumalana le NBFIRA le Botswana Accountancy Oversight Authority.",
          },
          {
            q: "Ke mang yo o laolang setheo?",
            a: "Kgori Capital e neilwe laesense mme e laolwa ke Non-Bank Financial Institutions Regulatory Authority (NBFIRA) jaaka motsamaisi wa madi. NBFIRA e phasalatsa ditlhokego tsa yone tsa mmaraka wa madi kwa nbfira.org.bw.",
          },
          {
            q: "Balaodi ba tlhomiwa jang?",
            a: "Balaodi ba tlhotlhomisiwa mme ba amogelwa ke NBFIRA pele ba tlhomiwa. Bontsi jwa boto bo ikemetse, mme komiti ya tlhotlhomiso, kotsi le go obamela melao e eteletswe pele ke motsamaisi yo o ikemetseng yo e seng wa khuduthamaga.",
          },
          {
            q: "Madi a bareki a tsholwa kae?",
            a: "Madi a tsamaisiwa ka taelo mme a tsholwa kwa thoko le madi a setheo. Pego e dirwa kgwedi le kgwedi mme e netefatswa ke batho ba ba ikemetseng, gore rekoto ya se o nang le sone e se ikaegile fela ka buka ya rona.",
          },
          {
            q: "Nka tlhagisa kgwetlho jang?",
            a: "Kwala kwa Motsamaising wa Melao ka tsebe ya ikgolaganyo, kgotsa latela tirego ya dingongorego. Fa kgwetlho e sa rarabololwe, o ka e isa kwa NBFIRA, e e phasalatsang tirego ya yone ya dingongorego kwa nbfira.org.bw.",
          },
        ],
      },
      rows: [
        {
          term: "Dikomiti tsa boto",
          detail:
            "Boto e tshegeditswe ke komiti ya tlhotlhomiso, kotsi le go obamela melao, e e eteletsweng pele ke motsamaisi yo o ikemetseng yo e seng wa khuduthamaga.",
        },
        {
          term: "Khoutu ya taolo",
          detail:
            "E bapisiwa le King IV, go dumalana le ditlhokego tsa NBFIRA le Botswana Accountancy Oversight Authority.",
        },
        {
          term: "Ditsenyo tse di ikarabelang",
          detail:
            "Mosaeni wa Principles for Responsible Investment tse di tshegeditsweng ke UN go tswa fa e tlhomilwe ka 2012.",
        },
        {
          term: "Madi a bareki",
          detail:
            "Madi a tsamaisiwa ka taelo mme a tsholwa kwa thoko le setheo. Pego e dirwa kgwedi le kgwedi mme e netefatswa ke batho ba ba ikemetseng.",
        },
      ],
      complaints: "Go rarabolola dingongorego",
      contactCompliance: "Ikgolaganye le melao",
    },
    peopleLink: "Kopana le setlhopha",
    governanceLink: "Kafa re laolwang ka teng",
  },

  funds: {
    hero: {
      eyebrow: "Matlole a ditokololo",
      title: "Matlole a le mararo, tirego e le nngwe ya ditsenyo.",
      lead:
        "Matlole a le mararo a a tsamaisiwang ka matsapa, a a leng botlhokwa mo Botswana mme theko ya one e bonala sentle. Ga go na nako ya go tshwarwa, ga go na dituelo tsa go ntsha madi, mme o amogela setatamente mo emeileng ya gago kgwedi le kgwedi.",
      jump: [
        { label: "Matlole", href: "#funds" },
        { label: "Bapisa", href: "/funds/compare" },
        { label: "Dituelo", href: "#fees" },
        { label: "Motsadi wa letlole", href: "#finder" },
        { label: "Dipotso", href: "#faqs" },
        { label: "Kopa", href: "#forms" },
        { label: "Dikwalo", href: "#documents" },
      ],
    },
    unitTrust: (n: string) => `Letlole la ditokololo ${n}`,
    atGlance: "Ka boripana",
    allocation: "Kabo ya setategi",
    allocationNote:
      "Kabo ya setategi e e bontshang, e seng pego ya dipholo tsa gompieno. Bona fact sheet ya bosheng go bona maemo a gompieno le letlha le e phasaladitsweng ka lone.",
    apply: "Kopa go tsenya madi",
    factSheet: "Fact sheet",
    riskLow: "Tlase",
    riskModerate: "Magareng",
    kinds: {
      "Fact sheet": "Fact sheet",
      Brochure: "Boroshure",
      Prospectus: "Prospectus",
    },
    compare: {
      eyebrow: "Bapisa",
      title: "Phapang, ka mafoko a a bonolo.",
      lead:
        "Matlole otlhe a le mararo a tsamaisiwa ka matsapa, ga a na nako ya go tshwarwa, a dira go ntsha madi mo diureng tse 48 mme a romela ditatemente kgwedi le kgwedi mo malatsing a matlhano a tiro a ntlha. Phapang ke kotsi, nako le madi.",
      scrollHint: "Sutha tafole kwa thoko go bapisa matlole otlhe a le mararo.",
      caption: "Papiso ya matlole a ditokololo a Kgori Capital",
      feature: "Karolo",
      rows: {
        risk: "Kamano ya kotsi",
        objective: "Maikaelelo",
        exposure: "Mmaraka",
        horizon: "Nako e e akanyediwang",
      },
      objectives: [
        "Go boloka madi le go nna le madi a a leng teng",
        "Kgolo ya madi ya nako e telele",
        "Go boloka madi a dolara",
      ],
      exposures: ["100% Botswana", "Selegae le lefatshe", "Dikwalo tsa dolara"],
      details: "Dintlha",
      viewFund: "Bona letlole",
      disclaimer:
        "Boleng jwa matlole a ditokololo bo ka fokotsega le go oketsega. Tiragatso ya nako e e fetileng ga se sesupo se se ikanyegang sa dipholo tsa isago. Dituelo le madi a ntlha a a tlhokegang di tlhalositswe mo prospectus nngwe le nngwe.",
      shared: {
        eyebrow: "Se ba se abelanang",
        title: "Setheo se le seng, tirego e le nngwe.",
        body:
          "Phapang ke kotsi, nako le madi. Dilo tsotlhe tse di fa tlase di tshwana mo matloleng otlhe a le mararo.",
        items: [
          "A tsamaisiwa ka matsapa ke setlhopha sa ditsenyo se le seng",
          "Ga a na nako ya go tshwarwa le dituelo tsa go ntsha madi",
          "Go ntsha madi go dirwa mo diureng tse 48",
          "Ditatemente mo malatsing a matlhano a tiro a kgwedi",
          "Phitlhelelo ka portaleng ya bareki",
        ],
      },
      choose: {
        eyebrow: "Motswedi",
        title: "Dipotso tse tharo di fokotsa dikarolo.",
        body: "Tse ga se dikakololo. Ke dipotso tse setlhopha sa rona se ka di botsang pele.",
        items: [
          {
            question: "O tlhoka madi leng?",
            answer:
              "Mo ngwageng, madi a a leng teng a botlhokwa go feta kgolo. Dingwaga tse tharo kgotsa go feta, letlole la dikarolo tse dintsi le na le nako ya go dira.",
            fund: "enhanced-cash",
            label: "Enhanced Cash",
          },
          {
            question: "Maikaelelo ke mo mading a fe?",
            answer:
              "Fa koloto e le mo madiring a dolara, go tshola letlole la pula go tlisa kotsi ya madi a dinaga e o sa e tlhophang.",
            fund: "usd-money-market",
            label: "USD Money Market",
          },
          {
            question: "A o ka amogela go fokotsega ga boleng?",
            answer:
              "Letlole la dikarolo tse dintsi le ka fokotsega mo ngwageng o o bosula. Fa seo se ka go gapeletsa go rekisa, nako kgotsa letlole ga se siama.",
            fund: "global-balanced",
            label: "Global Balanced",
          },
        ],
      },
      questions: {
        eyebrow: "Go tlhopha letlole",
        title: "Di botsitswe, mme di arabilwe.",
        items: [
          {
            q: "Kgori Capital e naya matlole afe a ditokololo?",
            a: "A le mararo. Letlole la Enhanced Cash le tsenya madi mo dikwalong tsa mmaraka wa madi wa Botswana go boloka madi le go nna le madi a a leng teng. Letlole la Global Balanced ke tategi ya dikarolo tse dintsi e e tsenyang madi mo dikarolong tsa selegae le tsa lefatshe tse di nang le madi a mantsi go bona kgolo mo dingwageng tse tharo kgotsa go feta. Letlole la USD Money Market le tshola dikwalwa tsa dolara tsa nako e khutshwane tse di boleng jo bo kwa godimo go batsenyi ba ba nang le dikoloto tsa dolara.",
          },
          {
            q: "Nka ntsha madi leng?",
            a: "Ka nako nngwe le nngwe. Ga go na nako ya go tshwarwa le ga go na dituelo kgotsa dikotlhao tsa go ntsha madi. Taelo e e siameng ya go ntsha madi e dirwa mo diureng tse 48 morago ga go amogelwa.",
          },
          {
            q: "Ke amogela ditatemente ga kae?",
            a: "Kwa bokhutlong jwa kgwedi nngwe le nngwe, mo malatsing a matlhano a tiro a kgwedi e ntšha, ka emeile kgotsa ka poso. Ditatemente di nna teng mo portaleng ya bareki.",
          },
          {
            q: "Nka bapisa tiragatso jang?",
            a: "Motsamaisi mongwe le mongwe o phasalatsa ditatemente, ka jalo matlole a a tshwanang a ka bapisiwa mo nakong e le nngwe. Lekanya tiragatso mmogo le tirelo ya bareki le go nna teng ga tirego ya motsamaisi, e seng palo ya ngwaga o le mongwe.",
          },
        ],
      },
      finderLink: "Ga o itse? Dirisa motsadi wa letlole",
    },
    fees: {
      eyebrow: "Dituelo le madi a ntlha",
      title: "Se se duelwang, mo dikwalong tse di phasaladitsweng.",
      lead:
        "Ga re bue dituelo tse di le nngwe fela fano, ka gonne madi a ikaegile ka letlole, mofuta wa karolo le bogolo jwa ditsenyo. Dipalo tse di tlamang di mo prospectus nngwe le nngwe le mo fact sheet ya bosheng, tse di tlhalosang lenaneo la dituelo, madi a ntlha a a tlhokegang, boleng jwa letlole le tiragatso ya nako e e fetileng.",
      priceNote:
        "Ditheko tsa matlole a ditokololo le tiragatso di fetoga ka tlhatlhobo nngwe le nngwe, ka jalo di phasaladiwa mo difact sheet le mo portaleng ya bareki, ga di bontshiwe fano. Re kope theko ya gompieno fa o e tlhoka pele o kopa.",
      fundLabel: "Letlole",
      documentsLabel: "Dipalo tse di phasaladitsweng",
      prospectus: "Bala prospectus",
      factSheet: "Bala fact sheet",
      documentsLink: "Dikwalo tsotlhe tsa matlole",
      note:
        "Fa go na le se se sa utlwaleng sentle mo lokwalong, re botse pele o tsenya madi. Re tla tsamaisa lenaneo la dituelo le madi a ntlha le wena.",
    },
    finder: {
      eyebrow: "Bona se se go siametseng",
      title: "Ga o itse kwa o ka simololang teng?",
      lead:
        "Araba dipotso tse tharo. Re tla go supa motswedi, mme o ka bua le motho pele go bulwa sepe.",
      ui: {
        eyebrow: "Motsadi wa letlole",
        title: "Kafa e dirang ka teng.",
        body:
          "Seno ke sediriswa sa thuto, e seng kgakololo ya motho. Se fokotsa dikarolo gore puisano le setlhopha sa rona e simolole kwa lefelong le le siameng.",
        needPerson: "O tlhoka motho?",
        questions: [
          {
            legend: "A o ka tlhoka madi ano leng?",
            hint: "Tlhopha nako e e gaufi e o ka tlhokang go ntsha madi ka yone.",
            options: ["Mo ngwageng o le mongwe", "Dingwaga tse 1 go ya go 3", "Dingwaga tse 3 kgotsa go feta"],
          },
          {
            legend: "Madi a gago a fokotsega ka 10% mo ngwageng. Go diragala eng?",
            hint: "Ga go na karabo e e siameng, go na le e e boammaaruri.",
            options: ["Nka tlhoka boroko", "Nka nna ke tsenye madi"],
          },
          {
            legend: "O tlhoka madi a fe?",
            hint: "Tlhopha madi a maikaelelo, e seng madi a o a bonang.",
            options: ["Pula (BWP)", "Dolara ya US"],
          },
        ],
        submit: "Bona motswedi wa me",
        ready: "Re ipaakanyeditse fa o le mašego.",
        incomplete: "Araba dipotso tsotlhe tse tharo go tswelela.",
        resultEyebrow: "Motswedi wa gago",
        mediumNote:
          "Ka nako ya dingwaga tse 1 go ya go 3, o ka akanya go kgaoganya madi le Letlole la Global Balanced go karolo e o sa tla e tlhoka ka bonako.",
        horizon: "Nako",
        access: "Phitlhelelo",
        accessValue: "Nako nngwe le nngwe, ntle le tefo",
        details: "Bona dintlha tsa letlole",
        again: "Simolola gape",
        disclaimer:
          "Tiragatso ya nako e e fetileng ga se sesupo se se ikanyegang sa dipholo tsa isago. Madi ga a netefalediwa. Bua le rona pele o tsenya madi.",
      },
    },
    faqs: {
      eyebrow: "Dipotso",
      title: "Di botsitswe, mme di arabilwe.",
      body:
        "Fa potso ya gago e se fano, setlhopha sa tirelo ya bareki se rata go e araba ka tlhamalalo.",
      ask: "Botsa potso",
    },
    forms: {
      eyebrow: "Kopa",
      title: "Se o se tlhokang go bula akhaonto.",
      lead:
        "Tlatsa foromo ya go kopa, o kgomaretsa dikwalo tse di fa tlase, mme o romela tsotlhe kwa info@kgoricapital.com. Re tla netefatsa go amogela le go go naya dintlha tsa akhaonto.",
      individuals: "Batho",
      entities: "Ditheo",
      kycIndividuals: [
        "ID kgotsa passport e e netefaditsweng",
        "Bosupi jwa aterese, e e sa fetang dikgwedi tse tharo",
        "Bosupi jwa dintlha tsa banka jo bo teisitsweng",
      ],
      kycEntities: [
        "Setifikeiti sa go tlhomamisa kgwebo",
        "Bosupi jwa aterese, e e sa fetang dikgwedi tse tharo",
        "Netefatso ya banka e e teisitsweng kgotsa tšheke e e phimotsweng",
        "Tshwetso ya go tsenya madi mo letloleng la ditokololo la Kgori Capital",
      ],
      nextStep: "Kgato e e latelang",
      nextStepBody: "Romela foromo ya gago e e tlatsitsweng kwa setlhopheng sa rona sa tirelo ya bareki.",
      conversationHint:
        "O rata puisano pele? Biletsa +267 3915990 kgotsa bea nako ka tsebe ya ikgolaganyo.",
      talk: "Bua le setlhopha",
      applicationForms: "Diformo tsa go kopa",
      documents: "Diprospectus, diboroshure le difact sheet",
      applications: [
        "Go kopa letlole la ditokololo (motho)",
        "Go kopa letlole la ditokololo (ditheo)",
        "Foromo ya go oketsa madi",
        "Foromo ya go ntsha madi",
      ],
    },
    fundPage: {
      approach: {
        eyebrow: "Kafa e tsenyang madi ka teng",
        title: "Taelo, mo tiragatsong.",
      },
      fit: {
        eyebrow: "Go siama",
        title: "Letlole le agetswe mang.",
      },
      consider: {
        eyebrow: "Gakologelwa",
        title: "Se se ka fetolang dipholo.",
      },
      documents: {
        eyebrow: "Dikwalo",
        title: "Rekoto e e phasaladitsweng.",
        body:
          "Prospectus ke lokwalo lo lo tlamang. Fact sheet e na le maemo, theko le tiragatso tse di phasaladitsweng tsa bosheng.",
      },
      questions: {
        eyebrow: "Dipotso tsa letlole",
        title: "Di botsitswe, mme di arabilwe.",
        items: [
          {
            q: "Nka tsenya madi mo letloleng leno jang?",
            a: "Tlatsa foromo ya go kopa ya motho kgotsa ya setheo mme o e romele le dikwalo tsa gago tsa KYC kwa info@kgoricapital.com. Setlhopha sa rona sa tirelo ya bareki se netefatsa go amogela mme se go naya dintlha tsa akhaonto.",
          },
          {
            q: "Nka ntsha madi leng?",
            a: "Ka nako nngwe le nngwe. Ga go na nako ya go tshwarwa le ga go na dituelo kgotsa dikotlhao tsa go ntsha madi. Taelo e e siameng ya go ntsha madi e dirwa mo diureng tse 48 morago ga go amogelwa.",
          },
          {
            q: "Ke amogela ditatemente ga kae?",
            a: "Kgwedi le kgwedi, mo malatsing a matlhano a tiro a kgwedi e ntšha. Ditatemente di nna teng mo portaleng ya bareki ka metlha.",
          },
          {
            q: "A ke duela sekhaka mo letloleng la ditokololo?",
            a: "Dipoelo tse di tswang mo letloleng la ditokololo di duela sekhaka. Kgori Capital e duela sekhaka sepe se se tlhokegang mo boemong jwa gago mme e naya setifikeiti sa sekhaka ka nako ya go duela sekhaka. Madi a a duetsweng a bonala mo dintlheng tsa gago tsa ditransakhene.",
          },
          {
            q: "Nka bona theko le tiragatso ya gompieno kae?",
            a: "Ditheko le tiragatso di fetoga ka tlhatlhobo nngwe le nngwe, ka jalo di phasaladiwa mo fact sheet ya bosheng le mo portaleng ya bareki, ga di bontshiwe mo tsebeng eno. Re kope theko ya gompieno fa o e tlhoka pele o kopa.",
          },
          {
            q: "A madi a me a netefaleditswe?",
            a: "Nnyaa. Boleng jwa matlole a ditokololo bo ka fokotsega le go oketsega, mme tiragatso ya nako e e fetileng ga se sesupo se se ikanyegang sa dipholo tsa isago. Matlole a mmaraka wa madi a ikaelela go boloka madi mme ga a na kotsi e e se nang sepe.",
          },
        ],
      },
      allFunds: "Matlole otlhe",
      compare: "Bapisa matlole",
      talk: "Bua le setlhopha",
      next: {
        eyebrow: "Kgato e e latelang",
        title: "Bula akhaonto, kgotsa botsa pele.",
        body:
          "Dikopo di tlhotlhomisiwa ke setlhopha sa rona sa tirelo ya bareki. Fa o rata go bua pele, re tla tsamaisa dikwalo le wena pele go saenwa sepe.",
      },
    },
  },

  investments: {
    hero: {
      eyebrow: "Filosofi ya ditsenyo",
      title: "Boleng pele, theko morago.",
      lead:
        "Patlisiso e e ikemetseng, boikanyego jwa tshekatsheko ya boleng le sekgalo sa kotsi se se dumalanweng le moreki. Ke kafa taelo nngwe le nngwe e tsamaisiwang ka teng.",
    },
    intro: {
      quote:
        "Filosofi ya rona ya ditsenyo le tirego ya rona ke tsone di re farologanyang, mme ke tsone di tla itshokela teko ya nako.",
      p1:
        "Mokgwa wa rona o dikologa kakanyo e le nngwe: go tokafatsa tiragatso mo nakong e e magareng le e telele ntle le go baya bareki mo kotsing e e sa tlhokegang. Re dumela mo botsamaising jo bo matlhagatlhaga jo bo lekalekanyang kotsi le poelo, jo bo theilweng mo ntlheng ya gore dikemo tsa ikonomi le boleng di kopana fa nako e ntse e ya.",
      p2:
        "Mo tiragatsong seo se raya gore re iketleela go tshola maemo fa kakanyo e ntse e le teng mme theko e le kwa tlase, le go iketleela go rekisa fa theko e fetile boleng. Ditshwetso tse pedi di theilwe mo letlhomesong le le tshwanang: patlisiso ya rona, e dirisiwang ka metlha.",
      imageAlt:
        "Mokasekase a kwala mo pampiring ya patlisiso le tshekatsheko ya boleng fa tafoleng ya tiro.",
      imageCaption:
        "Patlisiso e dirwa mo setheong: dintlha tsa dikompone, tshekatsheko ya boleng le dikotsi tse re di bonang.",
    },
    dont: {
      label: "Se re sa se dirang",
      items: [
        "Go latela metsamao ya mmaraka ntle le lebaka la boleng",
        "Go solofetsa netefatso ya madi e re sa kgoneng go e duelela",
        "Go rekisa ditlhagiswa tse di dirilweng ke batho ba bangwe",
        "Go fitlhila kotsi mo benchmark e re sa e tlhophang",
      ],
    },
    process: {
      eyebrow: "Kafa re tsenyang madi ka teng",
      title: "Dikgato tse nne, di dirisiwa ka metlha.",
      lead:
        "Tirego ga e fetoge le mmaraka. Ke go nna teng ga tirego ka metlha, e seng tiragatso ya tshwetso e le nngwe, go oketsang mo nakong ya moreki.",
      steps: {
        eyebrow: "Kgato ka kgato",
        title: "Bula kgato go bona se se diragalang mo go yone.",
        body:
          "Kgato nngwe le nngwe e tlhagisa se kgato e e latelang e se tlhokang. Ke ka gore tatelano ga e fetoge.",
        items: [
          {
            body:
              "Re simolola ka dikoloto tsa moreki, e seng ka setlhagiswa. Letlole la penshene le na le dituelo tsa melemo tse di tshwanetseng go duelwa; motsenyi wa poraefete o na le maikaelelo le letlha. Taelo e kwala poelo e moreki a e tlhokang, metsamao e a ka e itshokelang le madi a a tlhokang.",
            checks: [
              "Sebopego sa dikoloto le ditlhokego tsa madi",
              "Nako le tlhokego ya madi a a leng teng",
              "Kotsi e moreki a ka e itshokelang ka boammaaruri",
            ],
          },
          {
            body:
              "Patlisiso e dirwa mo setheong. Re lekanyetsa gore kgwebo kgotsa bond e boleng bofe mo nakong yotlhe, re dirisa kgolo e e tsitsitseng, tiragatso ya tiro le boleng jwa kgwebo. Theko e bapisiwa le tshekatsheko eo, e seng le theko ya ngwaga o o fetileng.",
            checks: [
              "Dintlha tsa kompone le boleng jwa poelo",
              "Tshekatsheko ya boleng mo nakong yotlhe",
              "Balance sheet, botsamaisi le taolo",
            ],
          },
          {
            body:
              "Kakanyo e e molemo ga se maemo go fitlha e lekanyeditswe. Re aga dipotofolio go ya ka sekgalo sa kotsi, ka melelwane mo maemong a le mongwe, go tshwaraganngwa ga dikarolo, boleng jwa sekoloto le madi a a leng teng. Go farologanya dikarolo ke tlhokego, e seng boikgethelo.",
            checks: [
              "Bogolo jwa maemo go ya ka sekgalo sa kotsi",
              "Melelwane ya go tshwaragana le go tshwaraganngwa",
              "Madi a a leng teng a dikwalwa tsa motheo",
            ],
          },
          {
            body:
              "Tiragatso e tlhotlhomisiwa ka metlha mme e tlhalosiwa ka go kwala. Kgaoganyo e bontsha se tirego e se dirileng sentle le se e se dirileng bosula, mme tlhotlhomiso ke nako e kakanyo e netefadiwang kgotsa e tlogelwang ka yone.",
            checks: [
              "Tiragatso le kgaoganyo",
              "Kotsi go ya ka sekgalo se se dumalanweng",
              "Gore kakanyo ya ntlha e ntse e le teng",
            ],
          },
        ],
      },
      equities: {
        eyebrow: "Dišere",
        title: "Reka dikgwebo tsa boleng ka tshekatsheko ya rona ya boleng jwa tsone.",
        quote:
          "Ditheko tsa dišere di bontsha ikonomi ya boammaaruri ya kgwebo, e seng tiragatso ya yone ya nako e khutshwane.",
        p1:
          "Re tsenya madi mo dikomponeng tse di nayang poelo e e kwa godimo e e ka nnang teng ka botlalo mo nakong e telele, re latela patlisiso e e tseneletseng ya dintlha. Re lekanya boleng jwa kgwebo ka bokgoni jwa yone jwa go bopa khumo ya beng ba dišere ka metlha.",
        p2:
          "Re lekanyetsa boleng go tswa mo kgolong e e tsitsitseng le tiragatso ya tiro mo nakong yotlhe. Seo se re dira batsenyi ba nako e telele ba ba pelotelele, mme se raya gore re rata dikgwebo tse re di tlhaloganyang, tse di nang le ikonomi e e molemo ya nako e telele.",
        points: [
          "Boleng jwa kgwebo",
          "Kgolo e e tsitsitseng mo nakong yotlhe",
          "Theko e kwa tlase ga tshekatsheko ya rona ya boleng",
        ],
      },
      fixedIncome: {
        eyebrow: "Madi a sekoloto",
        title: "Tsenya madi fa theko ya mmaraka e le kwa tlase ga boleng.",
        quote:
          "Mo nakong e khutshwane, ditheko di farologana le boleng ka gonne mmaraka ga o a siama.",
        p1:
          "Ditshekatsheko tsa madi a sekoloto di laolwa ke dintlha tsa ikonomi mo nakong e telele, mme ditheko tsa nako e khutshwane di dikologa boleng. Tirego ya rona e batla ditšhono tse di gaisang mo dibondong, mmaraka wa madi, sekoloto, dišere tse di ratwang le phaposi e e kwadisitsweng.",
        p2:
          "Go tsenya madi mo dikarolong tse dintsi tsa madi a sekoloto go naya dipotofolio go farologanya kotsi, go oketsa poelo le go nna le boikgethelo, e seng go bea madi fela mo nako e le nngwe.",
        points: [
          "Boleng jwa sekoloto le dintlha tsa motlamedi",
          "Poelo kgatlhanong le boleng",
          "Go farologanya dikarolo le nako",
        ],
      },
      linkCapabilities: "Bona ditategi tse tirego e di tsamaisang",
      linkReporting: "Kafa re begang ka dipholo",
    },
    capabilities: {
      eyebrow: "Bokgoni",
      title: "Ditategi tse di kgethegileng tse tlhano.",
      lead:
        "Di agetswe dikoloto le nako tsa bareki ba ditheo le ba poraefete, di tsamaisiwa go tswa Gaborone ka phitlhelelo ya lefatshe.",
      enquire: "Botsa",
      note:
        "Ditirego tsa ditheo di tsamaisiwa go ya ka setatamente sa pholisi ya ditsenyo sa moreki. Batsenyi ba poraefete ba fitlhelela ditategi tsa rona ka matlole a ditokololo.",
      labels: {
        suits: "E siametse mang",
        access: "Kafa o ka fitlhelelang",
      },
      items: [
        {
          suits:
            "Ditheo le bareki ba poraefete ba ba batlang potofolio e le nngwe e e farologaneng mo Botswana le mmarakeng wa lefatshe.",
          access: "Taelo ya setheo, kgotsa letlole la ditokololo la Global Balanced go batsenyi ba poraefete.",
        },
        {
          suits:
            "Bareki ba ba nang le dikoloto tsa pula mme ba batla go farologanya ntle le go tsaya kotsi yotlhe ya madi a dinaga.",
          access: "Taelo ya setheo.",
        },
        {
          suits:
            "Batsenyi ba ba ka amogelang kotsi ya mmaraka wa dišere go bona kgolo ya madi ya nako e telele.",
          access: "Taelo ya setheo.",
        },
        {
          suits:
            "Bareki ba ba tlhokang poelo, go boloka madi kgotsa go lekalekanya dituelo tse di itsegeng tsa isago.",
          access: "Taelo ya setheo.",
        },
        {
          suits: "Bareki ba ba tlhokang madi a a leng teng le poelo e e fetang deposit ya tlwaelo.",
          access: "Taelo ya setheo, kgotsa letlole la ditokololo la Enhanced Cash.",
        },
      ],
      split: {
        eyebrow: "Ditsela tse pedi",
        title: "Ditaelo go ditheo. Matlole a ditokololo go batho.",
        institutional: {
          title: "Ditaelo tsa ditheo",
          body:
            "Matlole a penshene, dikgwebo le ditheo tsa thuso di tsenya madi ka taelo e e tsamaisiwang go ya ka setatamente sa pholisi ya ditsenyo sa bone. Tategi, benchmark le sekgalo sa kotsi di dumalanwa ka go kwala pele potofolio e simolola.",
          points: [
            "Taelo le benchmark tse di tlhalositsweng",
            "Pego kwa botong kgotsa komiting ya ditsenyo",
            "Phitlhelelo e e tlhamalalo kwa setlhopheng sa ditsenyo",
          ],
        },
        private: {
          title: "Bareki ba poraefete",
          body:
            "Batsenyi ba poraefete ba fitlhelela patlisiso le tirego e e tshwanang ka matlole a ditokololo. Ga go na nako ya go tshwarwa, ga go na tefo ya go ntsha madi mme o amogela setatamente kgwedi le kgwedi.",
          points: [
            "Enhanced Cash go madi a a leng teng",
            "Global Balanced go kgolo ya nako e telele",
            "USD Money Market go madi a dolara",
          ],
          link: "Sekaseka matlole",
        },
      },
      links: {
        process: "Kafa tirego e dirang ka teng",
        reporting: "Kotsi le pego",
      },
    },
    essentials: {
      eyebrow: "Tiragatso",
      title: "Dilo tsa botlhokwa.",
      body:
        "Dipoelo tse di tsitsitseng tsa ditsenyo di ikaegile ka dilo tse bareki ba sa di boneng gantsi: boteng jwa patlisiso, dithulaganyo, taolo ya kotsi le batho ba ba ntsang nako e telele.",
      items: [
        "Setlhopha sa batlhotlhomisi ba ditsenyo ba maemo a kwa godimo",
        "Tsamaiso ya dipotofolio e e nang le maitemogelo",
        "Tshekatsheko ya ESG e kopantsweng mo patlisisong",
        "Dithulaganyo tsa tshedimosetso le maranyane a babaraka a maemo a kwa godimo",
        "Didiriswa tse di kopantsweng tsa taolo ya kotsi le pego",
      ],
    },
    reporting: {
      eyebrow: "Kotsi le pego",
      title: "Se bareki ba ka se solofelang.",
      body:
        "Bareki ba tshwanetse go itse ka metlha gore ba na le eng, gore ba na le yone ka goreng le gore e dira jang. Re bega ka puo e e bonolo, ka nako e e solofetsweng.",
      cards: [
        {
          title: "Kotsi ke sekgalo",
          body:
            "Taelo nngwe le nngwe e na le sekgalo sa kotsi se se tlhalositsweng. Re lekanya go bonala ga kotsi kgatlhanong le sone ka metlha, gore kotsi e laolwe e seng go bonwa morago.",
        },
        {
          title: "Pego ke tlwaelo",
          body:
            "Ditatamente tsa kgwedi mo malatsing a matlhano a tiro, difact sheet tsa kgwedi le dikakanyo tsa kotara ka mmaraka le maemo.",
        },
        {
          title: "Tlhokomelo e a dira",
          body:
            "Re vouta le go buisana mo dikomponeng tse re nang le tsone, mme re phasalatsa pholisi ya rona ya tlhokomelo le tiragatso ya go vouta ka boemedi.",
        },
      ],
      disclaimer:
        "Tiragatso ya nako e e fetileng ga se sesupo se se ikanyegang sa dipholo tsa isago. Boleng jwa matlole a ditokololo bo ka fokotsega le go oketsega mme madi ga a netefalediwa.",
      documents: "Difact sheet le dipego",
      stewardship: "Pholisi ya tlhokomelo",
      cadence: {
        eyebrow: "Nako",
        title: "Se se tlang, le leng.",
        body:
          "Pego e thusa fela fa e solofetswe. Ono ke mokgwa o bareki ba ka o rulaganyang.",
        columns: ["Leng", "Se se tlang", "Se se akaretsang"],
        rows: [
          {
            when: "Kgwedi le kgwedi",
            what: "Setatamente",
            detail:
              "Se romelwa mo malatsing a matlhano a tiro a kgwedi e ntšha, ka emeile kgotsa ka poso go ya ka boikgethelo jwa gago. Se nna teng mo portaleng ya bareki ka metlha.",
          },
          {
            when: "Kgwedi le kgwedi",
            what: "Fact sheet",
            detail:
              "Maemo a letlole, kabo ya setategi le theko le tiragatso tse di phasaladitsweng tsa nako eo.",
          },
          {
            when: "Kotara",
            what: "Kakanyo ya mmaraka",
            detail:
              "Pego ya rona ya kotara ka mmaraka le maemo, e e phasaladiwang mmogo le market watch ya tlwaelo.",
          },
          {
            when: "Nako ya go duela sekhaka",
            what: "Setifikeiti sa sekhaka",
            detail:
              "Setifikeiti se se bontshang sekhaka se se duetsweng mo boemong jwa gago mo ngwageng.",
          },
          {
            when: "Fa o kopa",
            what: "Tlhotlhomiso ya taelo",
            detail:
              "Bareki ba ditheo ba kopana le setlhopha sa ditsenyo go tlhotlhomisa tiragatso, kgaoganyo le sekgalo sa kotsi.",
          },
        ],
      },
      questions: {
        eyebrow: "Dipotso tsa pego",
        title: "Di botsitswe, mme di arabilwe.",
        items: [
          {
            q: "Ke amogela ditatemente ga kae?",
            a: "Kwa bokhutlong jwa kgwedi nngwe le nngwe, mo malatsing a matlhano a tiro a kgwedi e ntšha. Di romelwa ka emeile kgotsa ka poso go ya ka boikgethelo jwa gago, mme di nna teng mo portaleng ya bareki ka metlha.",
          },
          {
            q: "Nka ntsha madi leng?",
            a: "Ka nako nngwe le nngwe. Matlole a ditokololo a Kgori Capital ga a na nako ya go tshwarwa le ga a na dituelo kgotsa dikotlhao tsa go ntsha madi. Taelo e e siameng ya go ntsha madi e dirwa mo diureng tse 48 morago ga go amogelwa.",
          },
          {
            q: "Nka tsenya kgotsa go ntsha madi jang?",
            a: "Dirisa karolo ya transact-online mo portaleng ya bareki, kgotsa tlatsa foromo ya go oketsa madi kgotsa foromo ya go ntsha madi mme o e romele kwa setlhopheng sa rona sa tirelo ya bareki.",
          },
          {
            q: "A ke duela sekhaka mo letloleng la ditokololo?",
            a: "Dipoelo tse di tswang mo letloleng la ditokololo di duela sekhaka. Kgori Capital e duela sekhaka sepe se se tlhokegang mo boemong jwa gago mme e naya setifikeiti sa sekhaka ka nako ya go duela sekhaka. Madi a a duetsweng a bonala mo dintlheng tsa gago tsa ditransakhene.",
          },
          {
            q: "Nka bapisa tiragatso le batsamaisi ba bangwe jang?",
            a: "Motsamaisi mongwe le mongwe o phasalatsa ditatemente. Bapisa matlole a a tshwanang mo nakong e le nngwe, mme o lekanye tiragatso mmogo le tirelo ya bareki le go nna teng ga tirego, e seng palo ya ngwaga o le mongwe.",
          },
        ],
      },
    },
  },

  responsibility: {
    hero: {
      eyebrow: "Boikarabelo",
      title: "Boikarabelo ga se lefapha.",
      lead:
        "Bo ntse mo patlisisong, mo go vouteng le mo kafa re tsamaisang setheo ka teng. Kgori Capital e nne mosaeni wa Principles for Responsible Investment tse di tshegeditsweng ke UN go tswa fa e tlhomilwe ka 2012.",
    },
    pillars: [
      {
        title: "Boagi jwa kgwebo",
        body:
          "Re tsamaisa kgwebo ka boikarabelo jwa go sireletsa tikologo, go godisa ditšhaba le go boloka boikanyego jwa dikarolo tsa go tsaya ditshwetso mo setheong sa rona le mo dikomponeng tse re tsenyang madi mo go tsone.",
      },
      {
        title: "Go kopanya ESG",
        body:
          "Go ela tlhoko mabaka a tikologo, a loago le a taolo go re thusa go tsaya ditshwetso tse di botoka tsa ditsenyo tsa nako e telele. Tshekatsheko ya ESG ke karolo ya patlisiso, e seng setlhathoba se se dirisiwang morago.",
      },
      {
        title: "Tlhokomelo ya batsenyi",
        body:
          "Re vouta mo ditshwetsong mme re buisana le botsamaisi jwa dikompone tse re nang le tsone, re kgothatsa maemo a taolo a a bopang boleng jwa nako e telele go bareki.",
      },
    ],
    pri: {
      eyebrow: "Bosupi le pepenene",
      title: "Mekgwa, e e nang le bosupi.",
      body:
        "Go saena Mekgwa ke tshimologo ya boitlamo, e seng bokhutlo jwa jone. Dipego tsa rona tsa tshekatsheko le pepenene di bonala go botlhe, go akaretsa le kwa re sa ntse re na le tiro ya go e dira.",
      assessment: "Pego ya tshekatsheko ya UNPRI",
      transparency: "Pego ya pepenene",
      documentsTitle: "Dikwalo tsa tlhokomelo",
      documents: [
        "Pholisi ya Tlhokomelo ya Batsenyi",
        "Pego ya go vouta ka boemedi le dipuisano (Kotara ya 3, 2024, e phasaladitsweng bosheng)",
        "Melao ya mmaraka wa madi ya NBFIRA",
      ],
      photoAlt:
        "Seatla sa motho se ikgola go kopana le seatla se sengwe mo loaping.",
      photoCaption:
        "Tlhokomelo ke taelo ya go dira, e seng polelo ya maikaelelo.",
      documentsNote:
        "Dikwalo di bula jaaka di-PDF mo tsebeng e ntšhwa. Pego ya UNPRI ya tlhatlhobo le ya ponalo le pego ya go vouta ka proxy ke dikgatiso tsa bosheng tse di phasaladitsweng; re tlaleletsa dikgatiso tse disha fa di phasaladiwa. Fa o batla sebopego se se bonolo go se bala, romela emeile kwa info@kgoricapital.com.",
    },
    citizenship: {
      eyebrow: "Boagi jwa kgwebo",
      title: "Go tsenya madi mo bathong ba Botswana.",
      lead:
        "Thuto e e anameng le phitlhelelo e nnile dintlha tsa botlhokwa tsa tiro ya rona ya boagi, ka gonne mmaraka o o nang le kitso e e oketsegileng ke mmaraka o o botoka go botlhe.",
      photoAlt:
        "Bana ba babedi mo motseng wa Botswana, karolo ya setšhaba se setheo se tsenyang madi mo go sone.",
      schoolAlt:
        "Leloko la Kgori Capital le khubama go dumedisa moithuti kwa kgorong ya sekolo, mme bana ba bangwe ba tsena morago ga bone.",
      schoolCaption:
        "Boagi jwa kgwebo mo tiragalong: leloko la Kgori Capital le dumedisa moithuti fa a tsena sekolo.",
      initiatives: [
        {
          title: "Ditiro tsa Kgori tsa go ithuta",
          body:
            "Baithuti ba ngwaga wa bofelo le ba ba sa tswang go aloga ba dira ka tlhamalalo le ditlhopha tsa ditsenyo, ditiro le tlhabololo ya kgwebo mo ditirong le diporojekeng tsa boammaaruri. Baithuti ba duelwa mme ba tsewa jaaka karolo ya badiredi.",
          tag: "Thuto",
        },
        {
          title: "Kgori Business Press Club",
          body:
            "Lefelo le le kopanyang pego ya media le kgwebo, le le nayang setšhaba kitso e kgolo ka tiragatso ya kgwebo le puso, le go naya bakwadi ba dikgang phitlhelelo go batho ba ba tsayang ditshwetso.",
          tag: "Media",
        },
      ],
      enquire: "Botsa",
      reporting: "Kafa re begang ka teng",
      partner: "Dirisana le rona",
    },
  },

  contact: {
    hero: {
      eyebrow: "Ikgolaganye",
      title: "Simolola ka puisano.",
      lead:
        "Go sa kgathale gore o bula letlole la ditokololo, o sekaseka taelo ya setheo kgotsa o na le potso fela, setlhopha sa rona kwa Gaborone se ipaakanyeditse go thusa.",
    },
    enquiry: {
      eyebrow: "Romela potso",
      title: "Leloko la setlhopha sa rona le tla araba ka nako ya tiro.",
    },
    det: {
      eyebrow: "Etela kgotsa o biletsa",
      photoCaption:
        "Setlhopha sa tirelo ya bareki kwa Gaborone se araba potso nngwe le nngwe.",
      headOffice: "Ofisi e kgolo, Gaborone",
      address: "Aterese",
      phoneLabel: "Mogala",
      emailLabel: "Emeile",
      directions: "Bona tsela",
      fax: (value: string) => `Fekse ${value}`,
      postal: "Aterese ya poso",
      existing: "Bareki ba ba leng teng",
      existingBody:
        "Bona potofolio ya gago, dira ditirisano, folotsa ditatemente le go fetola dintlha tsa gago mo portal e e sireleditsweng ya bareki.",
      portal: "Bula portal ya bareki",
      portalNote:
        "Portal e dirisa netefatso ya mokgwa wa bobedi le netefatso ya OTP. Go bona thuso ya go tsena, biletsa {phone}.",
      hours: "Mantaga go ya go Labotlhano, 08:00–17:00 (nako ya Aforika Bogare, UTC+2).",
    },
    faq: {
      eyebrow: "Pele o kwala",
      title: "Dipotso tse re di utlwang gantsi.",
      all: "Dipotso tsotlhe",
      forms: "Diformo tsa go kopa le KYC",
    },
  },

  contactForm: {
    name: "Leina ka botlalo",
    email: "Aterese ya emeile",
    phone: "Mogala",
    optional: "(ga o patelediwe)",
    interest: "Ke botsa jaaka",
    interests: [
      "Motsenyi wa poraefete",
      "Motsenyi wa setheo",
      "Moreki yo o leng teng",
      "Moeletsi wa matlotlo",
      "Media kgotsa ditiro",
    ],
    message: "Re ka go thusa jang?",
    messagePlaceholder:
      "Re bolelele gore madi a a direlang eng, nako ya gago le dipotso tse o nang le tsone…",
    hint: "Tsweetswee o se ke wa akaretsa dinomoro tsa akhaonto kgotsa dikopi tsa lokwalo la boitseo mo foromong eno.",
    submit: "Romela potso",
    sending: "E a romela…",
    note:
      "Molaetsa wa gago o romelwa kwa setlhopheng sa rona sa tirelo ya bareki mme o bolokwa ka polokego. O rata go kwala ka tlhamalalo?",
    success:
      "Ke a leboga. Potso ya gago e fitlhile kwa setlhopheng sa rona sa tirelo ya bareki mme re tla araba ka nako ya tiro.",
    failure:
      "Ga re a kgona go romela molaetsa wa gago jaanong. Tsweetswee leka gape, kgotsa o re romelele emeile ka tlhamalalo kwa",
    errors: {
      name: "Tsweetswee kwala leina la gago ka botlalo.",
      email: "Kwala aterese ya emeile e e siameng, jaaka name@company.co.bw.",
      message: "Re bolelele go fetisa, bonyane polelo e le nngwe ka se o se tlhokang.",
      generic: "Go na le se se sa tsamayang sentle. Tsweetswee leka gape.",
    },
  },

  newsletter: {
    label: "Aterese ya emeile",
    submit: "Ikwadise",
    sending: "E a ikwadisa…",
    hint: "Tlhokomelo ya mmaraka le dikakanyo tsa kotara. Emeile e le nngwe ka kgwedi.",
    success: "O mo lenaneng. Lebela tlhokomelo ya mmaraka e e latelang.",
    failure: "Ga re a kgona go go oketsa jaanong. Tsweetswee leka gape.",
    error: "Kwala aterese ya emeile e e siameng, jaaka name@company.co.bw.",
  },

  insights: {
    hero: {
      eyebrow: "Dikakanyo",
      title: "Tikologo ya mmaraka, ntle le phuthego.",
      lead:
        "Palo ya nako le nako ya dikgang tsa dikompone le tsa mmaraka wa selegae le wa lefatshe, pego ya rona ya kotara ka mmaraka, le dikakanyo tse di telele ka kafa re tsenyang madi ka teng.",
    },
    featured: "E e tlhophilweng",
    readArticle: "Bala setlhogo",
    library: "Laeborari",
    all: "Dikakanyo tsotlhe",
    archive: "Laeborari ya tlhokomelo ya mmaraka",
    empty: "Ga go sepe se se phasaladitsweng mo karolong eno. Leka setlhathoba se sengwe.",
    filter: "Tlhathoba dikakanyo ka karolo",
    categories: {
      All: "Tsotlhe",
      "Market Watch": "Tlhokomelo ya mmaraka",
      "Quarterly Insights": "Dikakanyo tsa kotara",
      "Investment Insights": "Dikakanyo tsa ditsenyo",
    },
    categoriesList: ["All", "Market Watch", "Quarterly Insights", "Investment Insights"],
    article: {
      back: "Dikakanyo tsotlhe",
      publishedBy: "E phasaladitswe ke",
      team: "Setlhopha sa Ditsenyo sa Kgori Capital",
      location: "Gaborone, Botswana",
      disclaimer: "Setlhogo seno ke kitso e e akaretsang, e seng kgakololo ya matlotlo.",
      share: "Abelana",
      aboutAuthor: "Ka ga mokwadi",
      teamBio:
        "Setlhopha sa ditsenyo sa Kgori Capital se tsamaisa matlole a ditokololo le ditiro tsa ditheo go tswa Gaborone, se kopanya patlisiso ya mmaraka wa selegae le kabo ya dikarolo ya lefatshe.",
      funds: "Sekaseka matlole",
      teamLink: "Bua le setlhopha sa ditsenyo",
      keepReading: "Tswelela o bala",
      notFound: "Setlhogo ga se a bonwa",
    },
  },

  legal: {
    updated: "E fetotswe la bofelo",
    updatedValue: "Ngwanatsele 2026",
    privacy: {
      eyebrow: "Melao",
      title: "Kitsiso ya sephiri.",
      lead: "Kafa re tshwarang tshedimosetso e o e abelanang le rona ka yone mo webosaeteng eno.",
      sections: [
        {
          h: "Re bo mang",
          p: [
            "Webosaete eno e tsamaisiwa ke {legalName}, nomoro ya kwadiso {registration}, Mokatong wa 1, Exponential Building, Plot 54351, CBD, Gaborone, Botswana. Re neilwe laesense ke NBFIRA jaaka motsamaisi wa ditsenyo.",
          ],
        },
        {
          h: "Tshedimosetso e o tlhophang go e abelana",
          p: [
            "Foromo ya dipotso mo webosaeteng eno e romela molaetsa wa gago kwa setlhopheng sa rona sa tirelo ya bareki. Re amogela leina, dintlha tsa ikgolaganyo le mokgwa wa molaetsa o o o akaretsang, mme re di dirisa fela go araba potso ya gago le, fa go le maleba, go tsamaisa kamano ya moreki.",
            "Tsweetswee o se ke wa romela dikwalo tsa boitseo, dintlha tsa banka kgotsa dinomoro tsa akhaonto ka foromo ya dipotso. Re tla go bolelela kafa o ka nayang dikwalo tsa netefatso ka polokego fa o kopa.",
          ],
        },
        {
          h: "Dipuisano le mothusi",
          p: [
            "Melaetsa e o e romelang mothusi wa webosaete e dirisiwa go bopa karabo. Ga e bolokwe mo rekotong ya moreki. Fa mokgwa wa AI o dirisiwa ke mothusi, molaetsa wa gago o dirisiwa ke moneeladitirelo yo o tlhophilweng wa boraro fela go bopa karabo. Moneeladitirelo yoo a ka nna a dirisa molaetsa kwa ntle ga Botswana. O se ke wa akaretsa dikwalo tsa boitseo, dinomoro tsa akhaonto kgotsa tshedimosetso e nngwe ya sephiri mo puisong.",
          ],
        },
        {
          h: "Lokwalo lwa dikgang",
          p: [
            "Fa o ingwadisa mo emeileng ya rona ya dikakanyo, re dirisa aterese ya emeile e o e neelang go romela lokwalo lwa dikgang lo o lo kopileng. Kgatiso nngwe le nngwe e na le kgolagano ya go ikwadisa kwa ntle, mme o ka kopa gore re go tlose ka nako nngwe le nngwe ka go kwala kwa {email}.",
          ],
        },
        {
          h: "Go dirisiwa kwa ntle ga Botswana",
          p: [
            "Bangwe ba baneeladitirelo ba rona, go akaretsa moneeladitirelo yo o tshegetsang mothusi wa webosaete le moneeladitirelo wa rona wa emeile, ba ka dirisa tshedimosetso ya sephiri kwa ntle ga Botswana. Fa seo se diragala, re tsaya dikgato tse di lekanetseng go netefatsa gore tshedimosetso e bona tshireletso e e maleba mme e dirisiwa fela ka maikaelelo a moneeladitirelo yo o tlhophilweng.",
          ],
        },
        {
          h: "Dikuki le tshekatsheko",
          p: [
            "Webosaete eno e bea kuki e le nngwe ya boikgethelo go gakologa puo e o e tlhophileng. Ga e beye dikuki tsa papatso kgotsa tshekatsheko mme ga e boloke ditshupo tsa go latela mo browsereng ya gago. Dilo tsa tlwaelo tsa seve di ka nna tsa kwala tshedimosetso ya thekenoloji jaaka aterese ya IP, mofuta wa browser le ditsebe tse di kopilweng, ka mabaka a polokego le go ikanyega.",
          ],
        },
        {
          h: "Nako e re bolokang tshedimosetso ka yone",
          p: [
            "Mangwalo a dipotso a bolokwa fela ka nako e e tlhokegang go rarabolola potso ya gago le go diragatsa boikarabelo jwa rona jwa go boloka direkoto go ya ka melao. Direkoto tsa bareki di bolokwa go ya ka melao e e dirang ya ditirelo tsa matlotlo.",
          ],
        },
        {
          h: "Ditshwanelo tsa gago",
          p: [
            "O ka kopa khopi ya tshedimosetso ya sephiri e re nang le yone ka wena, go kopa gore e baakanyediwe, kgotsa go kopa gore re tlogele go e dirisa ka maikaelelo a itseng fa molao o letla. Kwala kwa {email} mme re tla araba ka nako e e lekanetseng.",
          ],
        },
        {
          h: "Dingongorego",
          p: [
            "Fa o sa itumelela kafa re tshwereng tshedimosetso ya gago ka teng, ikgolaganye le rona pele gore re e rarabolole. O ka bo o isa kgang kwa Non-Bank Financial Institutions Regulatory Authority (NBFIRA), e e laolang laesense ya rona ya motsamaisi wa ditsenyo mme e phasalatsa mokgwa wa yone wa dingongorego kwa nbfira.org.bw.",
          ],
        },
      ],
    },
    disclaimer: {
      eyebrow: "Melao",
      title: "Tlhagiso.",
      lead: "Tshedimosetso e e botlhokwa ka webosaete eno le ditlhagiswa tse di tlhalositsweng mo go yone.",
      sections: [
        {
          h: "Kitso e e akaretsang fela",
          p: [
            "Dikgang tse di mo webosaeteng eno di neelwa jaaka kitso e e akaretsang mme ga di kgakololo ya matlotlo, ditsenyo, sekhaka kgotsa melao. Ga di tseye maikaelelo a gago, maemo a gago a matlotlo kgotsa ditlhokego tsa gago. O tshwanetse go bala prospectus e e maleba le go buisana le moeletsi yo o neilweng laesense pele o tsaya tshwetso ya ditsenyo.",
          ],
        },
        {
          h: "Kotsi ya ditsenyo",
          p: [
            "Matlole a ditokololo ke dikgolagano tsa ditsenyo tsa setlhopha. Boleng jwa ditsenyo le poelo ya tsone bo ka fokotsega le go oketsega, mme o ka bona madi a a kwa tlase ga a o a tsenyileng. Tiragatso ya nako e e fetileng ga se sesupo se se ikanyegang sa dipholo tsa isago. Ga go na netefatso ya madi e e neelwang ke Kgori Capital kgotsa motho yo mongwe.",
            "Matlole a a tsenywang ka madi a dinaga le mo dikwalong tsa kwa ntle a lebana le metsamao ya madi a dinaga, e e ka oketsang kgotsa go fokotsa boleng jwa ditsenyo tsa gago. Matlole a mmaraka wa madi a ikaelela go boloka madi mme ga a se nang kotsi.",
          ],
        },
        {
          h: "Tiragatso le dituelo",
          p: [
            "Dipalo tsa tiragatso, kwa di bontshitsweng teng, ke tsa nako e e fetileng mme di boletse dituelo tse di tlhalositsweng mo prospectus e e maleba fa go sa bolelwa ka tsela e nngwe. Dituelo le madi a ntlha a a tlhokegang di tlhalositswe mo prospectus ya letlole lengwe le lengwe mme di ka fetoga go ya ka lokwalo loo.",
          ],
        },
        {
          h: "Taolo",
          p: [
            "{legalName} e neilwe laesense mme e laolwa ke Non-Bank Financial Institutions Regulatory Authority (NBFIRA) jaaka motsamaisi wa ditsenyo. Taolo ga e reye gore ditsenyo di sireletsegile kgotsa gore tiragatso e tla nna ntle.",
          ],
        },
        {
          h: "Dikgolagano tsa kwa ntle",
          p: [
            "Webosaete eno e kgolagana le dikwalo tse di tshwarwang ke batho ba bangwe le diwebosaete tsa kwa ntle. Ga re laole, mme ga re ikarabelele, mokgwa wa tsone kgotsa go nna teng ga tsone.",
          ],
        },
        {
          h: "Ikgolaganye",
          p: ["Dipotso ka tlhagiso eno di ka isiwa kwa {email} kgotsa {phone}."],
        },
      ],
    },
  },

  complaints: {
    eyebrow: "Melao",
    title: "Dingongorego.",
    lead: "Kafa o ka ntshang ngongorego ka teng le se se latelang.",
    sections: [
      {
        h: "Boikaelelo jwa rona",
        p: [
          "Re batla go baakanya dilo. Fa o sa itumelela tirelo ya rona, letlole, kgotsa kafa re tshwereng tshedimosetso ya gago ya sephiri ka teng, tsweetswee re bolelele.",
        ],
      },
      {
        h: "Kafa o ka ngongoregang ka teng",
        p: [
          "Romela emeile kwa {email} ka leina la gago, dintlha tsa ikgolaganyo le tlhaloso e khutshwane ya bothata. O ka bo o leletsa {phone}, kgotsa o kwala kwa Motsamaisi wa Melao kwa atereseng e e mo tlase. Tsweetswee o se ke wa romela dikwalo tsa boitseo tsa ntlha.",
        ],
      },
      {
        h: "Se se latelang",
        p: [
          "Re amogela dingongorego ka bonako mme re ikaelela go araba ka nako e e lekanetseng. Re boloka rekoto ya ngongorego le dikgato tse di tserweng go e rarabolola, go ya ka boikarabelo jwa rona jwa melao.",
        ],
      },
      {
        h: "Fa o sa ntse o sa itumelele",
        p: [
          "O ka isa kgang kwa Non-Bank Financial Institutions Regulatory Authority (NBFIRA), e e laolang laesense ya rona ya motsamaisi wa ditsenyo. NBFIRA e phasalatsa mokgwa wa yone wa dingongorego kwa nbfira.org.bw.",
        ],
      },
      {
        h: "Dingongorego ka tshedimosetso ya sephiri",
        p: [
          "Fa ngongorego ya gago e le ka sephiri, bala kitsiso ya rona ya sephiri kgotsa kwala kwa {email}. O na le tshwanelo ya go isa kgang kwa NBFIRA.",
        ],
      },
    ],
    document: "Bala mokgwa wa rona wa go rarabolola dingongorego",
  },

  accessibility: {
    eyebrow: "Melao",
    title: "Go nna bonolo go dirisiwa.",
    lead: "Maikaelelo a rona ke gore mongwe le mongwe a ka dirisa webosaete eno, go sa kgathalese gore o dirisa thekenoloji efe.",
    sections: [
      {
        h: "Boikaelelo jwa rona",
        p: [
          "Re batla gore mongwe le mongwe a kgone go dirisa webosaete eno, go akaretsa batho ba ba dirisang babadi ba seipone, go tsamaisa ka kiboto, go goloftsa mafoko kgotsa go fokotsa metsamao.",
        ],
      },
      {
        h: "Se re se dirileng",
        p: [
          "Webosaete e dirisa dikarolo tse di nang le bokao, kgolagano ya go tlola, maemo a a bonalang a go tsepama, diforomo tse di nang le maina, phapang e e lekanetseng ya mmala le go obamela maemo a go fokotsa metsamao. Mokwalo o ka gologa go 200% go sa latlhegelwe ke kitso.",
        ],
      },
      {
        h: "Dikgwetlho tse di itsiweng",
        p: [
          "Dingwe tsa dikwalo tse di kgolagantsweng mo webosaeteng eno ke di-PDF tse di tswang kwa bathong ba bangwe mme di ka nna tsa se nne bonolo go di dirisa. Mothusi wa webosaete o tlhoka JavaScript. Thanolo ya Setswana e tlhokomelwa ke rona mme e ntse e sekasekwa.",
        ],
      },
      {
        h: "Re bolelele",
        p: [
          "Fa o sa kgone go fitlhelela sengwe, romela emeile kwa {email} kgotsa o leletse {phone}. Re bolelele tsebe le se o se tlhokang, mme re tla neela tshedimosetso ka mokgwa o mongwe fa re kgona.",
        ],
      },
      {
        h: "Maemo",
        p: [
          "Re ikaelela go obamela Web Content Accessibility Guidelines (WCAG) 2.2 kwa maemong a AA. Polelo eno e tla ntšhwa fa webosaete e fetoga.",
        ],
      },
    ],
  },
};
