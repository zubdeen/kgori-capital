export type Locale = "en" | "tn";

export const locales: { code: Locale; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "tn", label: "Setswana", short: "SN" },
];

/**
 * Interface copy for the site chrome, the home page and the assistant.
 *
 * Setswana copy covers navigation, headings, calls to action and the assistant
 * interface. Regulated disclosure text, fund documents and article bodies stay
 * in English until a professional translation has been signed off.
 */
const en = {
  "utility.licensed": "Licensed by NBFIRA",
  "utility.location": "Gaborone, Botswana",

  "nav.about": "About",
  "nav.investments": "Investments",
  "nav.funds": "Funds",
  "nav.insights": "Insights",
  "nav.contact": "Contact",
  "nav.portal": "Client portal",
  "nav.invest": "Invest with us",
  "nav.menu": "Menu",
  "nav.close": "Close",
  "nav.language": "Language",

  "menu.about.company": "Company profile",
  "menu.about.companyNote": "Who we are and how we are owned",
  "menu.about.people": "Our people",
  "menu.about.peopleNote": "Executive team and board",
  "menu.about.governance": "Governance",
  "menu.about.governanceNote": "Regulation and King IV",
  "menu.about.responsibility": "Responsibility",
  "menu.about.responsibilityNote": "Stewardship and citizenship",

  "menu.invest.philosophy": "Our philosophy",
  "menu.invest.philosophyNote": "Active management, balanced risk",
  "menu.invest.process": "How we invest",
  "menu.invest.processNote": "Four steps, consistently applied",
  "menu.invest.capabilities": "Capabilities",
  "menu.invest.capabilitiesNote": "Five specialist strategies",
  "menu.invest.reporting": "Risk and reporting",
  "menu.invest.reportingNote": "How performance is explained",

  "menu.funds.cash": "Enhanced Cash Fund",
  "menu.funds.cashNote": "Low risk, local money market",
  "menu.funds.balanced": "Global Balanced Fund",
  "menu.funds.balancedNote": "Moderate risk, multi-asset",
  "menu.funds.usd": "USD Money Market Fund",
  "menu.funds.usdNote": "Low risk, US dollar liquidity",
  "menu.funds.compare": "Compare funds",
  "menu.funds.compareNote": "Risk, horizon and access",

  "mega.speak": "Speak to the team",
  "mega.pitch": "We will tell you honestly whether we are the right manager.",

  "hero.eyebrow": "Independent investment management",
  "hero.title": "Invest with pride.",
  "hero.body":
    "Kgori Capital is a Botswana-owned investment manager. We look after portfolios for pension funds, corporates, charities and private clients.",
  "hero.ctaFunds": "Our funds",
  "hero.ctaContact": "Speak to us",
  "hero.note":
    "Licensed by NBFIRA. Every portfolio is managed in Gaborone.",
  "hero.established": "Established 2012",

  "facts.founded": "Founded in Gaborone, Botswana",
  "facts.owned": "Owned and controlled by management and staff",
  "facts.experience": "Years of combined investment experience",
  "facts.funds": "Unit trusts, managed actively from Gaborone",

  "audience.eyebrow": "Start here",
  "audience.title": "Who are you investing for?",
  "audience.lead":
    "Four routes into the same process. Choose the one that sounds like you and we will point you to the right place.",
  "audience.private.title": "I am an individual",
  "audience.private.body":
    "Private clients, families and first-time investors from BWP 1,000.",
  "audience.private.cta": "See private client options",
  "audience.institution.title": "I am an institution",
  "audience.institution.body":
    "Pension funds, provident funds and retirement schemes with long-dated liabilities.",
  "audience.institution.cta": "Institutional mandates",
  "audience.corporate.title": "I am a corporate",
  "audience.corporate.body":
    "Treasury, surplus cash and employee savings held by a business or charity.",
  "audience.corporate.cta": "Talk to the team",
  "audience.advisor.title": "I am an adviser",
  "audience.advisor.body":
    "Financial planners and advisers placing client money with a local manager.",
  "audience.advisor.cta": "Partner with us",

  "funds.eyebrow": "Our funds",
  "funds.title": "Three funds, one process.",
  "funds.lead":
    "Actively managed unit trusts for cash, balanced growth and US dollar liquidity. No lock-in periods and no withdrawal penalties.",
  "funds.compare": "Compare all funds",
  "funds.view": "View fund",
  "funds.risk": "Risk",
  "funds.riskLow": "Low",
  "funds.riskModerate": "Moderate",

  "firm.eyebrow": "The firm",
  "firm.title": "Owned by the people who manage your money.",
  "firm.body":
    "Kgori Capital was founded in Gaborone in 2012. Every key member of the investment team is a significant owner of the firm, so our interests sit with our clients over the long term.",
  "firm.link": "About Kgori Capital",
  "firm.p1Title": "Ownership that aligns",
  "firm.p1Body":
    "We are not owned by a bank or a distributor. The people who make the investment decisions own the business, which keeps our focus on client outcomes rather than a quarterly sales target.",
  "firm.p2Title": "Risk is budgeted, not ignored",
  "firm.p2Body":
    "We pursue returns over the medium and long term without exposing clients to risk we cannot explain. Position sizes follow conviction and the mandate, not a house view.",
  "firm.p3Title": "Global markets, local judgement",
  "firm.p3Body":
    "Global events arrive in Gaborone with local consequences. We interpret both, and invest where value is rather than where the index happens to be weighted.",

  "botswana.eyebrow": "Our home market",
  "botswana.title": "Botswana is our home market, and our advantage.",
  "botswana.body":
    "We are close to the companies we own and free to invest where value is. That combination shapes every portfolio we run, from Botswana money market securities to global equities.",
  "botswana.link": "How we invest",

  "values.title": "What we stand for",
  "values.lead":
    "Five commitments, measured through our work rather than displayed on a wall.",
  "values.link": "Read the full values",

  "private.eyebrow": "Private clients",
  "private.title": "A private client account, run like an institutional mandate.",
  "private.body":
    "A private client account gives you the same investment process we run for institutions: disciplined, transparent and reported every month. Open an account from BWP 1,000.",
  "private.open": "Open an account",
  "private.ask": "Ask a question",

  "philosophy.eyebrow": "Investment philosophy",
  "philosophy.title": "Value first, price second.",
  "philosophy.lead":
    "We buy businesses, not headlines. Over time, share prices converge on the economics of what sits behind them, which is why we underwrite companies and wait for the market to agree.",
  "philosophy.linkApproach": "Read our approach",
  "philosophy.linkCapabilities": "Investment capabilities",
  "philosophy.linkResponsible": "Responsible investing",

  "philosophy.tabs.equities": "Equities",
  "philosophy.equities.title": "Quality businesses, bought below their worth.",
  "philosophy.equities.body":
    "We invest in companies that offer the highest potential upside in absolute terms over the long term, guided by in-depth fundamental research. Quality is measured by a business's ability to generate shareholder wealth consistently through the cycle.",
  "philosophy.equities.point1": "Intrinsic value estimated from sustainable earnings power",
  "philosophy.equities.point2": "A margin of safety for what we cannot see",
  "philosophy.equities.point3": "Businesses we understand, with durable economics",

  "philosophy.tabs.fixed": "Fixed income",
  "philosophy.fixed.title": "Paid for patience, protected by credit work.",
  "philosophy.fixed.body":
    "Fixed income valuations are driven by economic fundamentals over the long term, but short-term prices deviate from fair value. We invest across bonds, money market, credit, preference shares and listed property when the market price sits below intrinsic value.",
  "philosophy.fixed.point1": "Duration and credit managed separately",
  "philosophy.fixed.point2": "Diversification across issuers and sectors",
  "philosophy.fixed.point3": "Yield enhancement without hidden risk",

  "philosophy.tabs.multi": "Multi-asset",
  "philosophy.multi.title": "One portfolio, balanced against its purpose.",
  "philosophy.multi.body":
    "Our multi-asset strategies combine domestic and global equities, bonds, currencies, alternatives and commodities. Asset allocation is adjusted as relative valuations change, with the client's horizon and risk budget as the fixed points.",
  "philosophy.multi.point1": "Global diversification, managed locally",
  "philosophy.multi.point2": "Risk budget defined before positions are taken",
  "philosophy.multi.point3": "Reviewed continuously, reported every month",

  "feedback.eyebrow": "Client feedback",
  "feedback.previous": "Previous testimonial",
  "feedback.next": "Next testimonial",
  "feedback.disclosure":
    "Client feedback is shared with permission. It reflects one client's experience, is not a recommendation to invest, and is not a guarantee of future results.",
  "feedback.original": "Quote given in English.",

  "insights.eyebrow": "Insights",
  "insights.title": "Our latest thinking.",
  "insights.all": "All insights",

  "cta.eyebrow": "Next step",
  "cta.title": "Talk to us before you invest.",
  "cta.body":
    "Tell us what the money is for and when you will need it. We will tell you honestly whether we are the right manager for it.",
  "cta.book": "Send an enquiry",
  "cta.explore": "Explore the funds",

  "footer.description":
    "An independent, Botswana-owned investment manager. Internationally informed, locally invested since 2012.",
  "footer.company": "Company",
  "footer.investing": "Investing",
  "footer.resources": "Resources",
  "footer.about": "About Kgori",
  "footer.people": "Our people",
  "footer.governance": "Governance",
  "footer.responsibility": "Responsibility",
  "footer.contact": "Contact",
  "footer.philosophy": "Investment philosophy",
  "footer.process": "How we invest",
  "footer.funds": "Unit trusts",
  "footer.compare": "Compare funds",
  "footer.insights": "Insights",
  "footer.marketWatch": "Market watch",
  "footer.portal": "Client portal",
  "footer.newsletterTitle": "Newsletter",
  "footer.newsletterBody":
    "One considered email a month: market context, fund notes and company news.",
  "footer.directions": "Get directions",
  "footer.privacy": "Privacy",
  "footer.disclaimer": "Disclaimer",
  "footer.complaints": "Complaints",
  "footer.accessibility": "Accessibility",
  "footer.licensed": "Licensed by NBFIRA as an asset manager.",
  "footer.registration": "Registration No.",
  "footer.disclaimerText":
    "Unit trusts are collective investment schemes. The value of investments and the income from them can fall as well as rise, and past performance is not a reliable indicator of future results. Nothing on this website constitutes financial advice. Read the relevant prospectus and consult an adviser before investing.",

  "assistant.title": "Kgori Assistant",
  "assistant.subtitle": "General information, not financial advice",
  "assistant.welcome":
    "Dumela. I am the Kgori Capital assistant. Ask me about our funds, opening an account, withdrawals or the documents you need. For personal advice, I will connect you with a person.",
  "assistant.placeholder": "Ask about funds, withdrawals, documents…",
  "assistant.enterHint": "Enter to send. Shift + Enter for a new line.",
  "assistant.talk": "Talk to a person",
  "assistant.send": "Send message",
  "assistant.chip1": "Which fund suits me?",
  "assistant.chip2": "How do I start investing?",
  "assistant.chip3": "Can I withdraw at any time?",
  "assistant.chip4": "What documents do I need?",
  "assistant.launcher": "Ask Kgori",
  "assistant.launcherNote": "General information",
  "assistant.dialogLabel": "Kgori Capital assistant",
  "assistant.close": "Close assistant",
  "assistant.questionLabel": "Ask a question",
  "assistant.thinking": "Assistant is typing",
  "assistant.noAnswer": "I could not find an answer to that. Please rephrase your question.",
  "assistant.unreachable":
    "I could not reach the assistant just now. Please try again, or call the team on +267 3915990.",

  "a11y.skip": "Skip to content",
  "a11y.primaryNav": "Primary",
  "a11y.mobileNav": "Mobile",
  "a11y.pageNav": "On this page",
  "a11y.philosophyTabs": "Investment philosophy by asset class",
  "a11y.linkedin": "Kgori Capital on LinkedIn",
  "a11y.youtube": "Kgori Capital on YouTube",
};

export type Dict = { [K in keyof typeof en]: string };

const tn: Dict = {
  "utility.licensed": "E neilwe laesense ke NBFIRA",
  "utility.location": "Gaborone, Botswana",

  "nav.about": "Ka ga rona",
  "nav.investments": "Ditsenyo",
  "nav.funds": "Matlole",
  "nav.insights": "Dikakanyo",
  "nav.contact": "Ikgolaganye",
  "nav.portal": "Portal ya bareki",
  "nav.invest": "Tsenya madi le rona",
  "nav.menu": "Lenaneo",
  "nav.close": "Tswale",
  "nav.language": "Puo",

  "menu.about.company": "Kakaretso ya setheo",
  "menu.about.companyNote": "Re bo mang le kafa re rulilweng ka teng",
  "menu.about.people": "Batho ba rona",
  "menu.about.peopleNote": "Setlhopha sa botsamaisi le boto",
  "menu.about.governance": "Taolo",
  "menu.about.governanceNote": "Taolo le King IV",
  "menu.about.responsibility": "Boikarabelo",
  "menu.about.responsibilityNote": "Tlhokomelo le boagi",

  "menu.invest.philosophy": "Filosofi ya rona",
  "menu.invest.philosophyNote": "Taolo ka matsapa, kotsi e e lekanetseng",
  "menu.invest.process": "Kafa re tsenyang madi ka teng",
  "menu.invest.processNote": "Dikgato tse nne, ka metlha",
  "menu.invest.capabilities": "Bokgoni",
  "menu.invest.capabilitiesNote": "Ditirego tse tlhano tse di kgethegileng",
  "menu.invest.reporting": "Kotsi le pego",
  "menu.invest.reportingNote": "Kafa dipoelo di tlhalosiwang ka teng",

  "menu.funds.cash": "Letlole la Enhanced Cash",
  "menu.funds.cashNote": "Kotsi e e kwa tlase, mmaraka wa selegae",
  "menu.funds.balanced": "Letlole la Global Balanced",
  "menu.funds.balancedNote": "Kotsi e e magareng, dikarolo tse dintsi",
  "menu.funds.usd": "Letlole la USD Money Market",
  "menu.funds.usdNote": "Kotsi e e kwa tlase, madi a dolara",
  "menu.funds.compare": "Bapisa matlole",
  "menu.funds.compareNote": "Kotsi, nako le phitlhelelo",

  "mega.speak": "Bua le setlhopha",
  "mega.pitch": "Re tla go bolelela boammaaruri gore a re le batsamaisi ba ba siameng.",

  "hero.eyebrow": "Taolo e e ikemetseng ya ditsenyo",
  "hero.title": "Tsenya madi ka boikgodiso.",
  "hero.body":
    "Kgori Capital ke motshwareledi wa ditsenyo wa Botswana. Re tlhokomela dipotofolio tsa matlole a penshene, dikompone, mekgatlho ya thuso le bareki ba poraefete.",
  "hero.ctaFunds": "Matlole a rona",
  "hero.ctaContact": "Bua le rona",
  "hero.note":
    "E neilwe laesense ke NBFIRA. Potofolio nngwe le nngwe e tsamaisiwa kwa Gaborone.",
  "hero.established": "E tlhomilwe ka 2012",

  "facts.founded": "E tlhomilwe kwa Gaborone, Botswana",
  "facts.owned": "E rulilwe le go laolwa ke botsamaisi le badiredi",
  "facts.experience": "Dingwaga tsa boitseanape jo bo kopanetsweng",
  "facts.funds": "Matlole a ditokololo, a tsamaisiwa go tswa Gaborone",

  "audience.eyebrow": "Simolola fano",
  "audience.title": "O tsenya madi a ga mang?",
  "audience.lead":
    "Ditsela tse nne go tirego e le nngwe. Tlhopha e e go tshwanang, mme re tla go supa kwa go siameng.",
  "audience.private.title": "Ke motho a le mongwe",
  "audience.private.body":
    "Bareki ba poraefete, malapa le batsenyi ba ntlha go tswa BWP 1,000.",
  "audience.private.cta": "Bona ditlhopha tsa poraefete",
  "audience.institution.title": "Ke setheo",
  "audience.institution.body":
    "Matlole a penshene le ditlamelo tsa go rola tsa nako e telele.",
  "audience.institution.cta": "Ditirego tsa ditheo",
  "audience.corporate.title": "Ke kgwebo",
  "audience.corporate.body":
    "Madi a kgwebo, madi a a fetang le dipolokelo tsa badiredi.",
  "audience.corporate.cta": "Bua le setlhopha",
  "audience.advisor.title": "Ke moeletsi",
  "audience.advisor.body":
    "Barulaganyi ba matlotlo le baeletsi ba ba nayang bareki madi.",
  "audience.advisor.cta": "Dirisana le rona",

  "funds.eyebrow": "Matlole a rona",
  "funds.title": "Matlole a le mararo, tirego e le nngwe.",
  "funds.lead":
    "Matlole a ditokololo a a tsamaisiwang ka matsapa a madi, kgolo e e lekanetseng le madi a dolara. Ga go na nako ya go tshwarwa le ga go na dituelo tsa go ntsha madi.",
  "funds.compare": "Bapisa matlole otlhe",
  "funds.view": "Bona letlole",
  "funds.risk": "Kotsi",
  "funds.riskLow": "Tlase",
  "funds.riskModerate": "Magareng",

  "firm.eyebrow": "Setheo",
  "firm.title": "E rulilwe ke batho ba ba tsamaisang madi a gago.",
  "firm.body":
    "Kgori Capital e tlhomilwe kwa Gaborone ka 2012. Mongwe le mongwe wa setlhopha sa ditsenyo ke mong wa setheo, ka jalo dikgatlhego tsa rona di nna le bareki ba rona ka nako e telele.",
  "firm.link": "Ka ga Kgori Capital",
  "firm.p1Title": "Borui jo bo tsamaisanang",
  "firm.p1Body":
    "Ga re rulisiwe ke banka kgotsa morekisi. Batho ba ba dirang ditshwetso tsa ditsenyo ke bone beng ba kgwebo, mme seo se boloka tsholofelo ya rona mo dipholong tsa bareki, e seng mo dipalong tsa thekiso tsa kotara.",
  "firm.p2Title": "Kotsi e lekanyediwa, ga e itlhokomolosiwe",
  "firm.p2Body":
    "Re batla dipoelo mo nakong e e magareng le e telele, re sa baya bareki mo kotsing e re sa kgoneng go e tlhalosa. Bogolo jwa maemo bo latela tumelo le taelo, e seng kakanyo ya setheo.",
  "firm.p3Title": "Mmaraka wa lefatshe, katlholo ya selegae",
  "firm.p3Body":
    "Ditiragalo tsa lefatshe di fitlha kwa Gaborone le dipoelo tsa selegae. Re tlhalosa tse pedi, mme re tsenya madi kwa boleng bo leng teng, e seng kwa index e leng teng.",

  "botswana.eyebrow": "Mmaraka wa rona wa gae",
  "botswana.title": "Botswana ke mmaraka wa rona wa gae, e bile ke molemo wa rona.",
  "botswana.body":
    "Re gaufi le dikompone tse re nang le tsone mme re gololesegile go tsenya madi kwa boleng bo leng teng. Go kopana seo go bopa potofolio nngwe le nngwe e re e tsamaisang.",
  "botswana.link": "Kafa re tsenyang madi ka teng",

  "values.title": "Se re se emelang",
  "values.lead":
    "Dipoikarabelo tse tlhano, tse di lekanyediwang ka tiro ya rona e seng ka go di bontsha mo leboteng.",
  "values.link": "Bala dikemo ka botlalo",

  "private.eyebrow": "Bareki ba poraefete",
  "private.title": "Akhaonto ya moreki wa poraefete, e tsamaisiwa jaaka taelo ya setheo.",
  "private.body":
    "Akhaonto ya moreki wa poraefete e go naya tirego e e tshwanang ya ditsenyo le e re e tsamaisang ya ditheo: e e laolwang, e e pepeneng mme e begiwa kgwedi le kgwedi. Bula akhaonto go tswa BWP 1,000.",
  "private.open": "Bula akhaonto",
  "private.ask": "Botsa potso",

  "philosophy.eyebrow": "Filosofi ya ditsenyo",
  "philosophy.title": "Boleng pele, theko morago.",
  "philosophy.lead":
    "Re reka dikgwebo, e seng ditlhogoo. Fa nako e ntse e ya, theko ya dišere e kopana le ikonomi ya se se leng kwa morago ga tsone, ke ka moo re sekasekang dikompone mme re leta gore mmaraka o dumalane.",
  "philosophy.linkApproach": "Bala mokgwa wa rona",
  "philosophy.linkCapabilities": "Bokgoni jwa ditsenyo",
  "philosophy.linkResponsible": "Ditsenyo tse di ikarabelang",

  "philosophy.tabs.equities": "Dišere",
  "philosophy.equities.title": "Dikgwebo tsa boleng, di rekwa kwa tlase ga boleng jwa tsone.",
  "philosophy.equities.body":
    "Re tsenya madi mo dikomponeng tse di nayang poelo e e kwa godimo ka nako e telele, re tsamaisiwa ke patlisiso e e tseneletseng. Boleng bo lekanyediwa ka bokgoni jwa kgwebo go bopa khumo ya beng ba dišere ka metlha.",
  "philosophy.equities.point1": "Boleng bo lekanyediwa ka poelo e e tsitsitseng",
  "philosophy.equities.point2": "Sebaka sa polokego mo se re sa kgoneng go se bona",
  "philosophy.equities.point3": "Dikgwebo tse re di tlhaloganyang, tse di tsitsitseng",

  "philosophy.tabs.fixed": "Madi a sekoloto",
  "philosophy.fixed.title": "Go duelwa ka bopelotelele, go sirelediwa ka tiro ya sekoloto.",
  "philosophy.fixed.body":
    "Boleng jwa madi a sekoloto bo laolwa ke ikonomi ka nako e telele, mme theko ya nako e khutshwane e kgaogana le boleng jwa boammaaruri. Re tsenya madi mo dibonding, mmaraka wa madi, sekoloto le phuthego ya ditlhago fa theko e le kwa tlase ga boleng.",
  "philosophy.fixed.point1": "Nako le sekoloto di laolwa ka go kgaogana",
  "philosophy.fixed.point2": "Go farologana ga beng ba dikoloto le dikarolo",
  "philosophy.fixed.point3": "Go oketsa poelo ntle le kotsi e e fitlhilweng",

  "philosophy.tabs.multi": "Dikarolo tse dintsi",
  "philosophy.multi.title": "Potofolio e le nngwe, e lekanetseng le maikaelelo a yone.",
  "philosophy.multi.body":
    "Ditirego tsa rona tsa dikarolo tse dintsi di kopanya dišere tsa selegae le tsa lefatshe, dibondo, madi, dilo tse dingwe le dikhomoditi. Kabo ya dikarolo e fetolwa fa boleng bo fetoga, mme nako ya moreki le kotsi e e letetsweng e nna e le dikemo.",
  "philosophy.multi.point1": "Go farologana ga lefatshe, go laolwa mo gae",
  "philosophy.multi.point2": "Kotsi e lekanyediwa pele maemo a tsewa",
  "philosophy.multi.point3": "Go sekasekwa ka metlha, go begiwa kgwedi le kgwedi",

  "feedback.eyebrow": "Maikutlo a bareki",
  "feedback.previous": "Paki ya pele",
  "feedback.next": "Paki e e latelang",
  "feedback.disclosure":
    "Maikutlo a bareki a abelanwa ka tumelelo. A supa maitemogelo a moreki a le mongwe, ga se kgakololo ya go tsenya madi, mme ga se netefatso ya dipholo tsa isago.",
  "feedback.original": "Polelo e neilwe ka Sekgowa.",

  "insights.eyebrow": "Dikakanyo",
  "insights.title": "Dikakanyo tsa rona tsa bosheng.",
  "insights.all": "Dikakanyo tsotlhe",

  "cta.eyebrow": "Kgato e e latelang",
  "cta.title": "Bua le rona pele o tsenya madi.",
  "cta.body":
    "Re bolelele gore madi a a direlang eng le gore o tla a tlhoka leng. Re tla go bolelela boammaaruri gore a re le batsamaisi ba ba siameng.",
  "cta.book": "Romela potso",
  "cta.explore": "Sekaseka matlole",

  "footer.description":
    "Motshwareledi wa ditsenyo yo o ikemetseng wa Botswana. Re itsiwe kwa ntle, re tsenya madi mo gae go tswa 2012.",
  "footer.company": "Setheo",
  "footer.investing": "Go tsenya madi",
  "footer.resources": "Dithusa",
  "footer.about": "Ka ga Kgori",
  "footer.people": "Batho ba rona",
  "footer.governance": "Taolo",
  "footer.responsibility": "Boikarabelo",
  "footer.contact": "Ikgolaganye",
  "footer.philosophy": "Filosofi ya ditsenyo",
  "footer.process": "Kafa re tsenyang madi ka teng",
  "footer.funds": "Matlole a ditokololo",
  "footer.compare": "Bapisa matlole",
  "footer.insights": "Dikakanyo",
  "footer.marketWatch": "Tlhokomelo ya mmaraka",
  "footer.portal": "Portal ya bareki",
  "footer.newsletterTitle": "Lokwalo lwa dikgang",
  "footer.newsletterBody":
    "Emeile e le nngwe ka kgwedi: tikologo ya mmaraka, dikarolo tsa matlole le dikgang tsa setheo.",
  "footer.directions": "Bona tsela",
  "footer.privacy": "Sephiri",
  "footer.disclaimer": "Tlhagiso",
  "footer.complaints": "Dingongorego",
  "footer.accessibility": "Go nna bonolo go dirisiwa",
  "footer.licensed": "E neilwe laesense ke NBFIRA jaaka motshwareledi wa ditsenyo.",
  "footer.registration": "Nomoro ya boingodiso",
  "footer.disclaimerText":
    "Ditokololo ke dikgolagano tsa go tsenya madi mmogo. Boleng jwa ditsenyo le madi a a tswang mo go tsone bo ka fokotsega kgotsa bo oketsega, mme tiragatso ya nako e e fetileng ga e supe sepe ka dipoelo tsa isago. Ga go na sepe mo webosaeteng eno se se lekgolo la kgakololo ya matlotlo. Bala purospektuse e e maleba mme o buisane le moeletsi pele o tsenya madi.",

  "assistant.title": "Mothusi wa Kgori",
  "assistant.subtitle": "Kitso e e akaretsang, e seng kgakololo ya matlotlo",
  "assistant.welcome":
    "Dumela. Ke mothusi wa Kgori Capital. Mpotse ka matlole a rona, go bula akhaonto, go ntsha madi kgotsa dikwalo tse o di tlhokang. Fa o batla kgakololo ya sephiri, ke tla go golaganya le motho.",
  "assistant.placeholder": "Botsa ka matlole, go ntsha madi, dikwalo…",
  "assistant.enterHint": "Enter go romela. Shift + Enter go ya moleng o mosha.",
  "assistant.talk": "Bua le motho",
  "assistant.send": "Romela molaetsa",
  "assistant.chip1": "Ke letlole lefe le le siametseng nna?",
  "assistant.chip2": "Ke simolola jang go tsenya madi?",
  "assistant.chip3": "A nka ntsha madi nako nngwe le nngwe?",
  "assistant.chip4": "Ke tlhoka dikwalo dife?",
  "assistant.launcher": "Botsa Kgori",
  "assistant.launcherNote": "Kitso e e akaretsang",
  "assistant.dialogLabel": "Mothusi wa Kgori Capital",
  "assistant.close": "Tswale mothusi",
  "assistant.questionLabel": "Botsa potso",
  "assistant.thinking": "Mothusi o a kwala",
  "assistant.noAnswer": "Ga ke a bona karabo ya seo. Tsweetswee botsa potso e e tlhalositsweng botoka.",
  "assistant.unreachable":
    "Ga ke a kgona go fitlhelela mothusi jaanong. Tsweetswee leka gape, kgotsa o letsetse setlhopha kwa +267 3915990.",

  "a11y.skip": "Fetela go diteng",
  "a11y.primaryNav": "Lenaneo la konokono",
  "a11y.mobileNav": "Lenaneo la selefouno",
  "a11y.pageNav": "Mo tsebeng eno",
  "a11y.philosophyTabs": "Filosofi ya ditsenyo ka mofuta wa dikgetsi",
  "a11y.linkedin": "Kgori Capital mo LinkedIn",
  "a11y.youtube": "Kgori Capital mo YouTube",
};

export const dictionaries: Record<Locale, Dict> = { en, tn };

const COOKIE = "kgori_locale";

export function readLocaleCookie(): Locale | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE}=([^;]*)`));
  const value = match?.[1];
  return value === "tn" || value === "en" ? value : null;
}

export function writeLocaleCookie(locale: Locale) {
  if (typeof document === "undefined") return;
  document.cookie = `${COOKIE}=${locale}; path=/; max-age=31536000; samesite=lax`;
}

export function translate(locale: Locale, key: keyof Dict): string {
  return dictionaries[locale][key] ?? en[key];
}
