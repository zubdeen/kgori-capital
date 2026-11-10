import type { Fund } from "@/lib/content";

/**
 * Setswana versions of the three unit trusts.
 *
 * Names, document labels and the fund identifiers stay stable; only the
 * explanatory copy is translated. The `risk` field keeps its canonical value so
 * the risk meter and comparison table continue to work.
 */
export const fundsTn: Fund[] = [
  {
    slug: "enhanced-cash",
    name: "Letlole la Kgori Capital la Enhanced Cash",
    shortName: "Enhanced Cash",
    risk: "Low",
    riskScore: 2,
    horizon: "Nako nngwe le nngwe, ga go na go tshwarwa",
    summary:
      "Tharabololo e e nang le madi a mantsi, e e kotsi e kwa tlase, go batsenyi ba ba batlang go boloka madi fa ba ntse ba bona poelo e e fetang deposit ya tlwaelo.",
    description:
      "Letlole la Enhanced Cash le tsenya madi fela mo dikwalong tsa mmaraka wa madi wa Botswana: di-deposit tse di beilweng, pampiri ya kgwebo le dibondo tsa nako e khutshwane. Le diretswe go boloka madi, go nna le phitlhelelo ya letsatsi le letsatsi le poelo e e ka gaisanang le di-deposit tsa banka, ntle le go baya batsenyi mo kotsing ya mmaraka wa dišere.",
    approach: [
      "Nako le boleng jwa sekoloto di laolwa ka matsapa, e seng go tlogelwa kwa benchmark. Potofolio e tshola di-deposit tse di beilweng, pampiri ya kgwebo le dibondo tsa nako e khutshwane tse di ntshitsweng kwa Botswana.",
      "Ka gonne dikwalwa ke tsa nako e khutshwane mme di ntshitswe mo nageng, boleng jwa letlole ga bo ikaegile ka mmaraka wa dišere. Maikaelelo ke go boloka madi pele, ka poelo e e ka gaisanang le di-deposit tsa banka.",
    ],
    suits: [
      "O ka tlhoka madi ka bonako",
      "O batla lefelo la madi fa o ntse o tsaya tshwetso ya ditsenyo tsa nako e telele",
      "O batla madi a pula ya Botswana ntle le kotsi ya mmaraka wa dišere",
    ],
    considerations: [
      "Dipoelo ga di a netefalediwa mme di tla fetoga le ditefiso tsa nako e khutshwane",
      "Letlole le tsenya madi 100% kwa Botswana, ka jalo ga le na kotsi ya madi a dinaga",
      "Ga le a direlwa kgolo ya madi ya nako e telele",
    ],
    facts: [
      { label: "Nako ya ditsenyo", value: "Nako e khutshwane" },
      { label: "Mmaraka", value: "100% Botswana" },
      { label: "Kgelelo ya poelo", value: "Tefo ya sekhaka e dirwa ke rona" },
    ],
    holdings: [
      { label: "Di-deposit tse di beilweng", value: 45 },
      { label: "Pampiri ya kgwebo", value: 30 },
      { label: "Dibondo tsa nako e khutshwane", value: 20 },
      { label: "Madi le se se lekanang", value: 5 },
    ],
    highlights: [
      "Go boloka madi ke maikaelelo a ntlha",
      "Nako le boleng jwa sekoloto di laolwa ka matsapa",
    ],
    documents: [
      {
        label: "Fact sheet ya Letlole la Enhanced Cash (Phukwi 2026)",
        href: "https://www.kgoricapital.com/wp-content/uploads/2026/09/Kgori-Capital_Enhanced-Cash-Fund-Factsheet_July-2026.pdf",
        kind: "Fact sheet",
      },
      {
        label: "Boroshure ya Letlole la Enhanced Cash",
        href: "https://www.kgoricapital.com/wp-content/uploads/2023/06/Kgori-Capital-Enhanced-Cash-Fund-Brochure.pdf",
        kind: "Brochure",
      },
      {
        label: "Prospectus ya Letlole la Enhanced Cash",
        href: "https://www.kgoricapital.com/wp-content/uploads/2022/08/Prospectus-Kgori-Capital-Enhanced-Cash-Fund.pdf",
        kind: "Prospectus",
      },
    ],
  },
  {
    slug: "global-balanced",
    name: "Letlole la Kgori Capital la Global Balanced",
    shortName: "Global Balanced",
    risk: "Moderate",
    riskScore: 3,
    horizon: "Dingwaga tse 3 kgotsa go feta",
    summary:
      "Mokgwa wa dikarolo tse dintsi wa kotsi e e magareng, go batsenyi ba ba batlang kgolo ya nako e telele ntle le maatla otlhe a kotsi ya mmaraka wa dišere.",
    description:
      "Letlole la Global Balanced le tsenya madi mo dikarolong tsa selegae le tsa lefatshe tse di nang le madi a mantsi: dišere, madi a sekoloto, madi, dilo tse dingwe le dikhomoditi. Setlhopha sa rona sa ditsenyo se fetola kabo ya dikarolo fa boleng bo fetoga, ka maikaelelo a go oketsa madi mo nakong e e magareng le e telele fa kotsi e ntse e le mo sekgaleng se se tlhalositsweng.",
    approach: [
      "Letlole ke tategi ya dikarolo tse dintsi. Le tsenya madi mo dikarolong tsa selegae le tsa lefatshe tse di nang le madi a mantsi, go akaretsa dišere, madi a sekoloto, madi, dilo tse dingwe le dikhomoditi.",
      "Setlhopha sa ditsenyo se fetola kabo ya dikarolo fa boleng bo fetoga, ka maikaelelo a go oketsa madi mo nakong e e magareng le e telele fa kotsi e ntse e le mo sekgaleng se se tlhalositsweng. Karolo ya dišere e tsamaisiwa ka tirego e e tshwanang le taelo ya dišere tsa selegae.",
    ],
    suits: [
      "Maikaelelo a gago a kwa dingwageng tse tharo kgotsa go feta",
      "O batla kgolo mme o ka amogela go fetoga ga boleng ngwaga le ngwaga",
      "O batla go farologanya dikarolo tsa lefatshe go tswa go motsamaisi wa Botswana",
    ],
    considerations: [
      "Boleng bo ka fokotsega le go oketsega, mme nako ya dingwaga tse tharo e botlhokwa",
      "Dikwalwa tsa lefatshe di na le kotsi ya madi a dinaga mmogo le kotsi ya mmaraka",
      "Go ntsha madi ka nako e khutshwane go ka baka tahlegelo",
    ],
    facts: [
      { label: "Nako ya ditsenyo", value: "Dingwaga tse 3 kgotsa go feta" },
      { label: "Mmaraka", value: "Botswana le lefatshe" },
      { label: "Mokgwa", value: "Dikarolo tse dintsi, di laolwa ka matsapa" },
    ],
    holdings: [
      { label: "Dišere tsa selegae", value: 20 },
      { label: "Dišere tsa lefatshe", value: 30 },
      { label: "Dibondo", value: 30 },
      { label: "Dilo tse dingwe le dikhomoditi", value: 12 },
      { label: "Madi", value: 8 },
    ],
    highlights: [
      "Maikaelelo a kgolo ka kotsi e e lekanetseng",
      "Phitlhelelo ya mmaraka wa lefatshe go tswa go motsamaisi wa selegae",
      "Kabo ya dikarolo e e latelang boleng",
      "E diretswe maikaelelo a dingwaga tse tharo le go feta",
    ],
    documents: [
      {
        label: "Fact sheet ya Letlole la Global Balanced (Phukwi 2026)",
        href: "https://www.kgoricapital.com/wp-content/uploads/2026/09/Kgori-Capital_Global-Balanced-Fund-Factsheet_July-2026.pdf",
        kind: "Fact sheet",
      },
      {
        label: "Boroshure ya Letlole la Global Balanced",
        href: "https://www.kgoricapital.com/wp-content/uploads/2023/06/Kgori-Capital-Global-Balanced-Fund-Brochure.pdf",
        kind: "Brochure",
      },
      {
        label: "Prospectus ya Letlole la Global Balanced",
        href: "https://www.kgoricapital.com/wp-content/uploads/2022/08/Prospectus-Kgori-Capital-Balanced-Fund.pdf",
        kind: "Prospectus",
      },
    ],
  },
  {
    slug: "usd-money-market",
    name: "Letlole la Kgori Capital la USD Money Market",
    shortName: "USD Money Market",
    risk: "Low",
    riskScore: 2,
    horizon: "Nako e khutshwane",
    summary:
      "Tharabololo ya madi a dolara go batsenyi le ditheo tse di nang le dikoloto tsa madi a dinaga.",
    description:
      "Letlole la USD Money Market le naya batsenyi ba Botswana tsela e e laolwang ke boitseanape ya go tshola madi a dolara, e e tsenyang madi mo dikwalong tsa dolara tsa nako e khutshwane tse di boleng jo bo kwa godimo. Le diretswe go boloka madi mo madi a dinaga, ka phitlhelelo ya madi fa a tlhokega.",
    approach: [
      "Letlole le naya batsenyi ba Botswana tsela e e laolwang ke boitseanape ya go tshola madi a dolara. Le tsenya madi mo dikwalong tsa dolara tsa nako e khutshwane tse di boleng jo bo kwa godimo, go akaretsa dikwaloto tsa puso, di-deposit tsa banka le pampiri ya kgwebo.",
      "Boleng jwa sekoloto le nako di laolwa ka matsapa, ka maikaelelo a go boloka madi mo mading a dinaga.",
    ],
    suits: [
      "O na le dikoloto tsa dolara, jaaka dituelo tsa sekolo kgotsa dithoto tse di tswang kwa ntle",
      "O batla go boloka madi a gago mo madiring a dolara, e seng mo pula",
      "O tlhoka phitlhelelo ya madi ka bonako",
    ],
    considerations: [
      "Ditefiso tsa dolara le metsamao ya madi di ama poelo ya gago mo mading a pula",
      "Ke letlole la mmaraka wa madi, e seng netefatso",
      "Ga le a direlwa kgolo ya nako e telele",
    ],
    facts: [
      { label: "Nako ya ditsenyo", value: "Nako e khutshwane" },
      { label: "Madi", value: "Dolara ya US" },
      { label: "Mokgwa", value: "Mmaraka wa madi wa nako e khutshwane" },
    ],
    holdings: [
      { label: "Dikwaloto tsa puso", value: 45 },
      { label: "Di-deposit tsa banka", value: 35 },
      { label: "Pampiri ya kgwebo", value: 15 },
      { label: "Madi le se se lekanang", value: 5 },
    ],
    highlights: [
      "Go boloka madi a dinaga",
      "Sekoloto le nako di laolwa ka matsapa",
      "Go thusa mo dikolotong tsa dinaga le maeto",
      "Pego ya kgwedi le kgwedi ka dolara",
    ],
    documents: [
      {
        label: "Fact sheet ya Letlole la USD Money Market (Phukwi 2026)",
        href: "https://www.kgoricapital.com/wp-content/uploads/2026/09/Kgori-Capital_USD-Money-Market-Fund-Factsheet_July-2026.pdf",
        kind: "Fact sheet",
      },
    ],
  },
];
