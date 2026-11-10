import type { Insight } from "@/lib/content";

/**
 * Setswana versions of the insight articles.
 *
 * Slugs, dates, categories and read times are unchanged so links, filters and
 * the sitemap keep working. Category values stay canonical English strings; the
 * display labels are translated in the page copy.
 */
export const insightsTn: Insight[] = [
  {
    slug: "the-case-for-patience-in-botswana-equities",
    image: "/images/insights/delta.webp",
    title: "Lebaka la bopelotelele mo dišereng tsa Botswana",
    category: "Investment Insights",
    date: "2026-10-14",
    readMinutes: 6,
    featured: true,
    excerpt:
      "Metsamao ya theko ya nako e khutshwane ke phuthego fela. Fa nako e ntse e ya, theko ya dišere e kopana le ikonomi ya dikgwebo tse di leng kwa morago ga tsone, ke ka moo re sekasekang dikompone, e seng ditlhogoo.",
    body: [
      {
        type: "p",
        text: "Go tsenya madi mo dišereng gantsi go tlhalosiwa e le kgaisano ya dikakanyo tsa se tlang. Rona re bona ka tsela e e farologaneng. Tiro ya rona ga se go bolelela pele dipalo tsa kotara e e tlang, mme ke go lekanya gore kgwebo e ka nna ya bo e le bokae le go e reka fa mmaraka o naya phokoletso mo boleng joo.",
      },
      {
        type: "p",
        text: "Mo mmarakeng o o tsepameng le o o rekisang ka bonya jaaka wa Botswana, theko e ka nna kgakala le dikemo tsa ikonomi ka nako e telele go feta ka fa batsenyi ba lebaneng ba ka itshokelang ka gone. Seo ga se omosege, mme gape ke one motswedi wa sebaka. Fa madi a go reka le go rekisa a le kwa tlase, bopelotelele ke molemo mo kgaisanong.",
      },
      { type: "h2", text: "Se re se batlang" },
      {
        type: "p",
        text: "Re batla dikgwebo tse di kgonang go bopa khumo ya beng ba dišere ka metlha mo nakong e e potlana: maemo a a tsitsitseng a kgaisano, kabo ya madi e e nang le tlhaloganyo, taolo e e pepeneng le balance sheet e e ka itshokelang ngwaga o o maswe ntle le go tlhoka go oketsa madi kwa tlase.",
      },
      {
        type: "p",
        text: "Morago ga moo, go lekanya boleng go dira tiro e e setseng. Re lekanya maatla a poelo a a tsitsitseng mo nakong e e potlana, e seng go atolosa ngwaga o le mongwe o o molemo, mme re dirisa sebaka sa polokego go kotsi tse re sa kgoneng go di bona.",
      },
      {
        type: "quote",
        text: "Re batsenyi ba bopelotelele ba nako e telele ka gonne theko ya dišere kwa bofelong e bontsha ikonomi ya boammaaruri ya kgwebo, e seng tiragatso ya yone ya nako e khutshwane.",
      },
      { type: "h2", text: "Goreng se le botlhokwa go bareki" },
      {
        type: "p",
        text: "Bopelotelele ga se go idibala. Ke boikanyego jwa go tshola maemo fa kakanyo e ntse e le teng mme theko e le kwa tlase, le boikanyego jwa go rekisa fa theko e fetile boleng. Ditshwetso tse pedi di tlhoka letlhomeso le le tshwanang: patlisiso e e ikemetseng mo maikutlong a mmaraka.",
      },
      {
        type: "p",
        text: "Go bareki ba ba nang le dikoloto tsa dingwaga tse di tlang, boikanyego joo ke jone bo fetolang go fetofetoga ga mmaraka go tswa go nna kotsi go ya go nna motswedi wa poelo.",
      },
    ],
  },
  {
    slug: "cash-is-not-a-strategy",
    image: "/images/insights/client-service.webp",
    title: "Madi ga se togamaano, mme a ka nna maemo",
    category: "Investment Insights",
    date: "2026-09-22",
    readMinutes: 5,
    excerpt:
      "Go tshola madi go utlwala go sireletsegile ka nako eo. Mo nakong e telele, kotsi ya boammaaruri ke se theko ya dilo e se tsayang ka bonya fa o ntse o letetse bonnete jo bo sa tlang.",
    body: [
      {
        type: "p",
        text: "Go na le boitapoloso jo bo kgethegileng mo madi a a mo bankeng. Nomoro ga e tsamaye, setatamente se se itsege, mme ga go na se se tlhokang go tlhalosiwa. Mme boitapoloso le polokego ga se selo se le sengwe, segolo fa maikaelelo e le go duelela selo se se tla nna teng dingwaga di le lesome kwa pele.",
      },
      {
        type: "p",
        text: "Theko ya dilo ke yone e fetolang madi go tswa go nna selo se se sireletsegileng go ya go nna selo se se fokotsegang ka bonya. Potso e e botlhokwa ga se gore a deposit e tsitsitse ka dipalo, mme ke gore a e boloka maatla a go reka morago ga sekhaka le theko ya dilo.",
      },
      { type: "h2", text: "Fa madi a nna le maemo" },
      {
        type: "p",
        text: "Madi le dikwalo tsa mmaraka wa madi di botlhokwa go nna le madi a a leng teng, go dikoloto tsa nako e khutshwane le go nna madi a a emetseng fa boleng bo nna bo utlwala. Letlole la mmaraka wa madi e ka nna legae le le nang le tlhaloganyo go polokelo ya tshoganyetso kgotsa madi a nang le nako e e tlhalositsweng.",
      },
      {
        type: "p",
        text: "Mme jaaka togamaano ya kgolo ya nako e telele, madi a na le sebopego se se sa thuseng: a naya bonnete ka dipholo tsa dipalo mme a sa naye bonnete ka dipholo tsa boammaaruri. Nako mo mmarakeng, e farologanngwa mo dikarolong tse dintsi, ke yone tsela e e ikanyegang go dipeelo tsa boammaaruri.",
      },
      {
        type: "quote",
        text: "Kotsi e kgolo go batsenyi ba bantsi ba nako e telele ga se go fetofetoga ga mmaraka. Ke go se tsenye madi gotlhelele.",
      },
      {
        type: "p",
        text: "Karabo gantsi ga se ya go nna otlhe kgotsa sepe. Ke go bapisa selo le koloto: madi a o a tlhokang ka bonako a tshwanetse go nna mo dikwalong tse di nang le madi a mantsi le kotsi e kwa tlase; madi a o a tlhokang mo dingwageng tse lesome a tshwanetse go nna mo potofoliong e e agilweng go oketsa.",
      },
    ],
  },
  {
    slug: "why-active-management-still-earns-its-place",
    image: "/images/insights/market-watch.webp",
    title: "Goreng botsamaisi jo bo matlhagatlhaga bo sa ntse bo le botlhokwa mo Botswana",
    category: "Quarterly Insights",
    date: "2026-08-30",
    readMinutes: 7,
    excerpt:
      "Mo mmarakeng o kitso e sa lekalekanang mme patlisiso e le nnye, patlisiso e na le molemo o o ka lekanyediwang. Pego ya rona ya kotara ya gore botsamaisi jo bo matlhagatlhaga bo thusa kae, le gore bo sa thuse kae.",
    body: [
      {
        type: "p",
        text: "Kganetsano magareng ga botsamaisi jo bo matlhagatlhaga le jo bo sa direng sepe gantsi e dirwa jaaka e kete mmaraka otlhe o na le kitso e e lekanang. Ga go jalo. Bokgoni bo farologana ka mmaraka, ka karolo le ka bogolo jwa kgwebo. Botswana ke mmaraka o patlisiso e e ikemetseng e sa ntse e fetola dipholo.",
      },
      { type: "h2", text: "Patlisiso e bopa sebaka" },
      {
        type: "p",
        text: "Fa batlhotlhomisi ba le banyenyane ba ba latelang kgwebo, theko e ka nna kgakala le dikemo tsa ikonomi ka nako e telele. Patlisiso e e tseneletseng e e buisanang le botsamaisi, e lekanyang balance sheet le go tlhaloganya tikologo ya selegae e ka bona diphatlha tseo pele ga mmaraka otlhe.",
      },
      {
        type: "p",
        text: "Se se tshwanang se dira mo mading a sekoloto, kwa bogolo jwa dikwalo bo leng bonye, madi a go rekisa le go reka a sa nne teng ka metlha, mme tiro ya sekoloto e tlhoka katlholo ya selegae, e seng rating fela.",
      },
      { type: "h2", text: "Boikanyego jo bo bolokang bo siame" },
      {
        type: "p",
        text: "Botsamaisi jo bo matlhagatlhaga bo bopa boleng fela fa bo na le melelwane. Re lekanya bogolo jwa maemo ka kotsi, re farologanya dikarolo le beng ba dikoloto, mme re ipeela benchmark. Tumelo ntle le boikanyego ke go bega madi a mantsi fela.",
      },
      {
        type: "quote",
        text: "Mokgwa wa rona o tokafatsa tiragatso mo nakong e e magareng le e telele ntle le go baya bareki mo kotsing e e sa tlhokegang.",
      },
      {
        type: "p",
        text: "Tekatekano eo, tumelo mo sekgaleng sa kotsi, ke karolo ya botsamaisi jo bo matlhagatlhaga e e thata go e tshwantsha, mme ke yone e e botlhokwa thata go matlole a penshene, dikompone le malapa a a itshegileng mo go rona.",
      },
    ],
  },
  {
    slug: "market-watch-the-value-of-local-context",
    image: "/images/insights/local-context.webp",
    title: "Botlhokwa jwa tikologo ya selegae",
    category: "Market Watch",
    date: "2026-10-06",
    readMinutes: 4,
    excerpt:
      "Palo ya nako le nako ya dikgang tsa dikompone le tsa mmaraka wa selegae le wa lefatshe, le goreng tlhaloso ya ditiragalo tsa lefatshe e nna le thanolo ya Botswana.",
    body: [
      {
        type: "p",
        text: "Mmaraka wa lefatshe o fitlha ka bonako. Ditshwetso tsa melao kwa Washington, metsamao ya dikhomoditi kwa Asia le maikutlo a kotsi kwa Europe tsotlhe di fitlha kwa Gaborone mo diureng. Se se sa fitlheng ka bonako ke tlhaloso ya selegae: gore dolara e e matlhagatlhaga e ama jang morekisi wa Botswana, kgotsa gore fetogo ya maikutlo a kotsi a lefatshe e fitlha jang kwa mmarakeng wa dibondo wa selegae.",
      },
      { type: "h2", text: "Se re se tlhokomelang" },
      {
        type: "p",
        text: "Tlhokomelo ya rona ya mmaraka e latela tiragatso ya dišere tsa selegae le madi a sekoloto mmogo le ditshupo tsa lefatshe tse di botlhokwa go dipotofolio tsa selegae: metsamao ya madi, theko ya dikhomoditi, dikakanyo tsa theko ya dilo le dipoelo tsa kwa ntle.",
      },
      {
        type: "p",
        text: "Maikaelelo ga se go itlhabelela go ntlha nngwe le nngwe ya datha. Ke go nna le setshwantsho se se siameng sa tikologo e madi a bareki a rona a leng mo go yone, gore fa sebaka sa boammaaruri se tlhagelela re se bone ka bonako.",
      },
      { type: "quote", text: "Re itsiwe kwa ntle. Re tsenya madi mo gae." },
      {
        type: "p",
        text: "Bareki ba ka bona tlhokomelo yotlhe ya mmaraka le dikakanyo tsa kotara mo laeboraring ya rona ya dikakanyo, kgotsa ba bua le setlhopha sa ditsenyo ka tlhamalalo.",
      },
    ],
  },
  {
    slug: "governance-is-an-investment-decision",
    image: "/images/research.webp",
    title: "Taolo ke tshwetso ya ditsenyo",
    category: "Quarterly Insights",
    date: "2026-07-18",
    readMinutes: 5,
    excerpt:
      "Kafa kgwebo e laolwang ka teng go supa kafa madi a yone a tshwarwang ka teng fa botsamaisi le beng ba dišere ba sa dumalane. Re e tseela jaaka ntlha ya go lekanya boleng, e seng tlhaloso ya kwa tlase.",
    body: [
      {
        type: "p",
        text: "Dikgwebo tse pedi tse di nang le poelo e e tshwanang di ka nna le boleng jo bo farologaneng thata. Phapang gantsi ke taolo: gore ke mang yo o laolang madi, kafa madi a abiwang ka teng le gore a beng ba dišere ba bangwe ba na le lentswe la boammaaruri fa ditshwetso di tsewa.",
      },
      { type: "h2", text: "Dipotso tse re di botsang" },
      {
        type: "p",
        text: "Re sekaseka go ikemela le sebopego sa boto, ditirisano magareng ga boto le batho ba ba gaufi, boleng jwa go bontsha tshedimosetso, dituelo tsa botsamaisi le hisitori ya kabo ya madi. Kwa taolo e leng bokoa, re kopa phokoletso e kgolo kgotsa re gana go tsenya madi.",
      },
      {
        type: "p",
        text: "Jaaka batlhokomedi ba madi a bareki, re a vouta le go buisana. Tlhokomelo ga se tiragatso ya go itlhalosa mo setšhabeng; ke nngwe ya dithusa tse di se kae tse batsenyi ba nako e telele ba nang le tsone go sireletsa boleng.",
      },
      {
        type: "quote",
        text: "Fano go amogelwa fela maemo a a kwa godimo a tiro, boitseanape, go obamela melao le taolo.",
      },
      {
        type: "p",
        text: "Pholisi ya rona ya tlhokomelo le dipego tsa go vouta ka boemedi di phasaladiwa go bareki ba ba batlang go bona kafa ditiro tseo di dirwang ka teng.",
      },
    ],
  },
  {
    slug: "building-a-portfolio-around-real-goals",
    image: "/images/insights/goals.webp",
    title: "Go aga potofolio go dikologa maikaelelo a boammaaruri, e seng di-index",
    category: "Investment Insights",
    date: "2026-06-12",
    readMinutes: 6,
    excerpt:
      "Benchmark e go bolelela kafa o dirile ka teng kgatlhanong le mmaraka. Ga e go bolelele gore a o ka duelela thuto ya ngwana wa gago. Re simolola ka koloto.",
    body: [
      {
        type: "p",
        text: "Dipuisano tse dintsi tsa ditsenyo di simolola ka setlhagiswa. Rona re rata go simolola ka potso: madi a a direlang eng, mme a tla tlhokega leng? Karabo ke yone e laolang nako, sekgalo sa kotsi le selo se se siameng, ka go latelana.",
      },
      { type: "h2", text: "Dipotso tse tharo tse di bopang potofolio" },
      {
        type: "p",
        text: "Ntlha, nako: a madi a a tlhokega mo ngwageng o le mongwe kgotsa mo dingwageng tse lesome le botlhano? Bobedi, melelwane: a o ka itshokela go fokotsega go go kae ntle le go tlogela togamaano? Boraro, maikaelelo: a ke go boloka maatla a go reka, go naya poelo, kgotsa go oketsa madi?",
      },
      {
        type: "p",
        text: "Fela fa tseo di tlhaloganyega ke gone go abiwa ga dikarolo go latelang. Potofolio e e agilweng sentle go maikaelelo a motho yo mongwe ga e agelwa gago sentle, le fa dipholo tsa yone tsa bofelo di lebega di le molemo.",
      },
      {
        type: "quote",
        text: "Go tsenya madi ke boikarabelo, mpho go wena le go isago ya ba o ba ratang.",
      },
      {
        type: "p",
        text: "Ke ka moo re nayang ditharabololo mo mafelong a a farologaneng a sekgalo sa kotsi, le goreng setlhopha sa rona sa bareki se tsaya nako go tlhaloganya maikaelelo pele se bua ka letlole.",
      },
    ],
  },
];
