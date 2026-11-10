/**
 * Setswana versions of the shared site data: firm facts, PRIDE values, people,
 * capabilities, the investment process, FAQs and client feedback.
 *
 * Direct client quotations are left in their original English. Rewriting a
 * named person's words would misrepresent what they said.
 */
export const statsTn = [
  { value: "2012", label: "E tlhomilwe ke setlhopha sa rona sa botsamaisi" },
  { value: "100%", label: "E rulilwe le go laolwa ke botsamaisi le badiredi" },
  { value: "100+", label: "Boitseanape jo bo kopanetsweng jwa ditsenyo mo setlhopheng" },
  { value: "3", label: "Matlole a ditokololo, a tsamaisiwa ka matsapa go tswa Gaborone" },
] as const;

export const valuesTn = [
  {
    letter: "P",
    name: "Maatlamelo",
    body:
      "Re naya tirisano e e tletseng mo taelong nngwe le nngwe, mo puisong nngwe le nngwe le mo potsong nngwe le nngwe ya moreki.",
  },
  {
    letter: "R",
    name: "Boikanyego",
    body:
      "Re botsa, re reetsa, re itlhotlhomisa, gore re diragatse ditlamelo tsa rona ka metlha, e seng ka dinako dingwe fela.",
  },
  {
    letter: "I",
    name: "Boammaaruri",
    body:
      "Re itshwara ka boammaaruri le ka pepenene ka metlha, go akaretsa le fa karabo e le thata.",
  },
  {
    letter: "D",
    name: "Maatla a go fetoga",
    body:
      "Mmaraka o a tsamaya. Re nna re ipaakanyeditse go fetola le go bona sebaka fa ba bangwe ba bona phuthego fela.",
  },
  {
    letter: "E",
    name: "Bokgoni jo bo kwa godimo",
    body:
      "Fano go amogelwa fela maemo a a kwa godimo a tiro, boitseanape, go obamela melao le taolo.",
  },
] as const;

export const leadershipTn = {
  executives: [
    {
      name: "Sharifa Noor",
      role: "Motsamaisi Mogolo",
      photo: "/images/people/sharifa-noor-colour.webp",
      bio: "Ke molekane yo o tlhomileng Kgori Capital, ka dingwaga di le 21 tsa boitseanelo mo ditsenyong. O ne a etelela pele kgwebo ya ditokololo kwa BIFM mme e ne e le motsamaisi wa ditiro kwa Investec Asset Management Botswana pele a tlhoma setheo, mme o nnile le seabe se segolo mo go gatleng ga ditokololo mo Botswana. O na le MBA ya University of South Africa le BBA ya University of Botswana.",
    },
    {
      name: "Chandapiwa Moampe",
      role: "Motsamaisi wa Potofolio yo Mogolo",
      photo: "/images/people/chandapiwa-moampe-colour.webp",
      bio: "O okamela mokgwa wa ditsenyo mme o na le dingwaga tse di fetang 15 a tsamaisa dipotofolio tsa dikarolo tse dintsi go bareki ba ditheo, ba madi a mantsi le ba poraefete. O na le Bachelor of Commerce (Honours) ya University of the Witwatersrand, o fetile CFA Level II mme o mo komiting ya botsamaisi.",
    },
    {
      name: "Sheila McHarg",
      role: "Mookamedi wa Ditiro",
      photo: "/images/people/sheila-mcharg-colour.webp",
      bio: "Mookamedi wa Ditiro yo o nang le dingwaga tse di fetang lesome mo tsamaisong ya ditsenyo. O tsene Kgori Capital jaaka mokasekase wa ditiro, a nna motsamaisi wa ditiro mme gompieno a etelela ditiro pele. O na le degree ya honours ya accounting le finance ya University of Derby le diploma ya morago ga degree ya Stellenbosch Business School.",
    },
    {
      name: "Brandon Hartney",
      role: "Motsamaisi wa Melao le Mongwadi wa Boto",
      photo: "/images/people/brandon-hartney-colour.webp",
      bio: "O ikarabella mo go lebeleleng ga letlhomeso la taolo, kotsi le go obamela melao, le mo go ageng setso sa boammaaruri le boitseanape se se ikaegileng ka lone. O na le dingwaga tse di fetang 19 mo mafapheng a matlotlo, go akaretsa maemo a go obamela melao le a motsamaisi mogolo, mme o na le MSc ya business strategy le dikwalopele tsa compliance tsa University of Cape Town.",
    },
    {
      name: "Tiroyaone Brian Howard",
      role: "Motsamaisi wa Tlhabololo ya Kgwebo",
      photo: "/images/people/tiroyaone-howard-colour.webp",
      bio: "Ke motho wa botlholo yo bareki ba ikgolaganyang le ene go tswa ka 2021, a ikarabella mo thekisong le tirelong ya bareki ya poraefete le ya ditheo. O na le Bachelor of Finance ya University of Botswana, setifikeiti sa financial modelling and valuation sa Corporate Finance Institute le setifikeiti sa international wealth management.",
    },
  ],
  board: [
    {
      name: "Motsile Sibanda",
      role: "Modulasetilo, Motsamaisi yo o Ikemetseng yo e seng wa Khuduthamaga",
      photo: "/images/people/motsile-sibanda-colour.webp",
      bio: "O tlhotlhomisitswe mme a amogelwa ke NBFIRA ka 2018, mme o na le boitseanape jo bontsi mo tsamaisong ya batho kwa Stanbic Botswana, Standard Bank Group le BCL, kwa a thusitseng go tlhoma letlole la penshene la badiredi. Ke Motsamaisi wa Batho kwa BUAN mme o mo botong ya Botswana Oil; o na le MA ya human resource management ya University of Leeds.",
    },
    {
      name: "Kennedy Melamu",
      role: "Motsamaisi yo e seng wa Khuduthamaga",
      photo: "/images/people/kennedy-melamu-colour.webp",
      bio: "Ke mmueledi yo o nang le dingwaga di le 11 mo bankeng ya Botswana le dingwaga tse di fetang 20 mo maemong a botsamaisi mo thelefonong mo Aforika. Gompieno ke Chief Operations Officer wa MTN IranCell mme o mo botong ya MTN Sudan.",
    },
    {
      name: "Chabo Peo",
      role: "Motsamaisi yo o Ikemetseng yo e seng wa Khuduthamaga",
      photo: "/images/people/chabo-peo-colour.webp",
      bio: "Ke mmueledi wa kgwebo le molaotheo yo o nang le dingwaga tse di fetang 12 mo taolong, go obamela melao, go kopanya dikompone le mebaraka ya madi. O tlhomile Peo Legal morago ga go nna molekane kwa Bookbinder Business Law, mme o mo botong ya Woolworths Botswana, The Cross Trainer le Neolife Botswana.",
    },
    {
      name: "Modiri Phekoyakgotla Seoke",
      role: "Motsamaisi yo o Ikemetseng yo e seng wa Khuduthamaga",
      photo: "/images/people/modiri-seoke-colour.webp",
      bio: "Ke motsamaisi wa matlotlo yo o nang le dingwaga tse di fetang 15 tsa boitseanelo morago ga dikwalopele, mme ke modulasetilo wa komiti ya boto ya tlhotlhomiso, kotsi le go obamela melao. Ke Senior Finance Manager le motsamaisi wa boto kwa Barloworld Equipment; o na le EMBA ya Sheffield Hallam University le dikwalopele tsa CIMA, AAT, FCMA le CGMA.",
    },
  ],
};

export const capabilitiesTn = [
  { name: "Tekatekano ya Lefatshe", detail: "Dipotofolio tsa dikarolo tse dintsi tse di farologaneng le lefatshe." },
  { name: "Tekatekano ya Selegae", detail: "Ditirego tsa dikarolo tse dintsi tse di tsepameng mo Botswana." },
  { name: "Dišere tsa Selegae", detail: "Dišere tsa Botswana tse di tsepameng, tse di latelang boleng." },
  { name: "Madi a Sekoloto a Selegae", detail: "Dibondo, sekoloto le phuthego ya ditlhago." },
  { name: "Mmaraka wa Madi wa Selegae", detail: "Madi a a leng teng le go boloka madi." },
] as const;

export const processTn = [
  {
    step: "01",
    title: "Tlhaloganya taelo",
    body:
      "Re simolola ka koloto, nako le kotsi e moreki a ka e itshokelang ka boammaaruri, e seng ka setlhagiswa.",
  },
  {
    step: "02",
    title: "Lekanya sebaka",
    body:
      "Patlisiso ya rona le mekgwa ya go lekanya boleng di akanyetsa gore kgwebo kgotsa bond e ka nna ya bo e le bokae mo nakong e e potlana.",
  },
  {
    step: "03",
    title: "Aga ka boikanyego",
    body:
      "Bogolo jwa maemo bo lekanyediwa ka kotsi, madi a a leng teng le kamano. Go farologana ga dikarolo ke tlhokego, e seng boikgethelo.",
  },
  {
    step: "04",
    title: "Sekaseka le go bega",
    body:
      "Poelo, mabaka a yone le kotsi di sekasekwa ka metlha mme di tlhalosiwa ka go kwala, e seng ka dipalo fela.",
  },
] as const;

export const faqsTn = [
  {
    q: "Kgori Capital ke mang?",
    a: "Kgori Capital ke motsamaisi wa ditsenyo yo o tsepameng mo Botswana, yo o nayang ditharabololo tsa selegae le tsa lefatshe tse di laolwang ke bareki, go matlole a penshene, dikompone, mekgatlho ya thuso le bareki ba poraefete. Setheo se tlhomilwe ka 2012 mme se rulilwe le go laolwa gotlhelele ke botsamaisi le badiredi ba sone.",
  },
  {
    q: "A Kgori Capital e laolwa?",
    a: "Ee. Kgori Capital e neilwe laesense mme e laolwa ke Non-Bank Financial Institutions Regulatory Authority (NBFIRA) jaaka motsamaisi wa ditsenyo. Letlhomeso la rona la taolo le bapisiwa le King IV le ditlhokego tsa Botswana Accountancy Oversight Authority.",
  },
  {
    q: "Ke simolola jang go tsenya madi mo letloleng la ditokololo?",
    a: "Tlatsa foromo ya go kopa ya motho a le mongwe kgotsa ya setheo, mme o e romele le dikwalo tsa KYC tse di tlhokegang kwa info@kgoricapital.com. Setlhopha sa rona sa tirelo ya bareki se netefatsa go amogela mme se go naya dintlha tsa akhaonto. Diforomo di teng kwa karolong ya Dikwalo mo tsebeng ya Matlole.",
  },
  {
    q: "Ke tlhoka dikwalo dife?",
    a: "Batho ba tlhoka ID kgotsa passport e e netefaditsweng, bosupi jwa aterese e e sa fetang dikgwedi tse tharo le dintlha tsa banka tse di teisitsweng. Ditheo di oketsa setifikeiti sa go tlhomamisa kgwebo le tshwetso ya boto ya go tsenya madi. Lenane le le tletseng le mo diforomong tsa go kopa.",
  },
  {
    q: "A nka ntsha madi nako nngwe le nngwe?",
    a: "Ee. Ga go na nako ya go tshwarwa kgotsa ditefo tsa go ntsha madi, mme taelo e e siameng e dirwa mo diureng tse 48.",
  },
  {
    q: "Ke tla amogela ditatemente ga kae?",
    a: "Kgwedi le kgwedi, mo malatsing a matlhano a tiro a kgwedi e ntšhwa. Ditatemente di gape di teng mo portal e e sireleditsweng ya bareki nako nngwe le nngwe.",
  },
  {
    q: "A ke duela sekhaka mo letloleng la ditokololo?",
    a: "Dipoelo tsa letlole la ditokololo di a duedisiwa sekhaka. Kgori Capital e duela tefo ya sekhaka e e tlhokegang mo boemong jwa gago mme e naya setifikeiti sa sekhaka ka nako ya go duela. Madi a a tshwerweng a bonala mo dintlheng tsa ditirisano tsa gago.",
  },
  {
    q: "Kgori Capital e tsamaisa jang ditsenyo tse di ikarabelang?",
    a: "Re saenne Principles for Responsible Investment tse di tshegeditsweng ke UN go tswa ka 2012. Tshekatsheko ya ESG e kopantswe mo patlisisong ya rona, mme re vouta le go buisana ka dikgang tse di botlhokwa mo dikomponeng tse re nang le tsone mo boemong jwa bareki.",
  },
] as const;

export const testimonialsTn = [
  {
    quote:
      "Being customer-centric, Kgori Capital has managed to strategically penetrate and now lead the market through its digitalisation and marketing methods, breaking boundaries and setting new standards for efficient customer service. With their investments at their fingertips, customers are reassured of security and confidentiality.",
    name: "Lorato Masedi",
    role: "Motsamaisi wa Matlotlo",
  },
  {
    quote:
      "From the very first day I signed up with Kgori Capital I have experienced stellar service. The application process went well, deductions were always on cue, and I receive monthly statements and fact sheets without asking. The portal is user friendly and I can navigate it without any hassle.",
    name: "Dreadson Mathemba",
    role: "Moreki",
  },
] as const;
