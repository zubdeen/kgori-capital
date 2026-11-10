export const company = {
  name: "Kgori Capital",
  legalName: "Kgori Capital Proprietary Limited",
  tagline: "Invest with pride.",
  founded: 2012,
  registration: "BW00000988897",
  regulator: "Non-Bank Financial Institutions Regulatory Authority (NBFIRA)",
  email: "info@kgoricapital.com",
  phone: "+267 3915990",
  phoneAlt: "+267 3992400",
  fax: "+267 3915980",
  addressLines: ["1st Floor, Exponential Building", "Plot 54351, CBD, Gaborone, Botswana"],
  postalLines: ["P.O. Box 1253 ABG, Sebele", "Gaborone, Botswana"],
  directions:
    "https://www.google.com/maps/dir//kgori+capital/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x1ebb5b9e0c765c2d:0xd2f4a8b47155d599",
  portal: "https://secure.kgoricapital.com/",
  linkedin: "https://www.linkedin.com/company/kgori-capital/",
  youtube: "https://www.youtube.com/channel/UCSK9SQPw3mEBLtuK69cdUrA",
} as const;

export const stats = [
  { value: "2012", label: "Founded in Gaborone, Botswana" },
  { value: "100%", label: "Owned and controlled by management and staff" },
  { value: "100+", label: "Combined investment experience across the team" },
  { value: "3", label: "Unit trusts, managed actively from Gaborone" },
] as const;

export type Fund = {
  slug: string;
  name: string;
  shortName: string;
  risk: "Low" | "Moderate";
  riskScore: number;
  horizon: string;
  summary: string;
  description: string;
  approach: string[];
  suits: string[];
  considerations: string[];
  facts: { label: string; value: string }[];
  holdings: { label: string; value: number }[];
  highlights: string[];
  documents: { label: string; href: string; kind: "Fact sheet" | "Brochure" | "Prospectus" }[];
};

export const funds: Fund[] = [
  {
    slug: "enhanced-cash",
    name: "Kgori Capital Enhanced Cash Fund",
    shortName: "Enhanced Cash",
    risk: "Low",
    riskScore: 2,
    horizon: "Any time, no lock-in",
    summary:
      "A highly liquid, low-risk solution for investors seeking to preserve capital while earning more than a traditional deposit.",
    description:
      "The Enhanced Cash Fund invests exclusively in Botswana money market securities: fixed deposits, commercial paper and short-dated bonds. It is built for capital preservation, daily accessibility and a return that competes with ordinary bank deposits, without exposing investors to equity market risk.",
    approach: [
      "Duration and credit quality are actively managed rather than left to a benchmark. The portfolio holds fixed deposits, commercial paper and short-dated bonds issued in Botswana.",
      "Because the assets are short-dated and locally issued, the fund's value does not depend on equity markets. The objective is capital preservation first, with a return that competes with ordinary bank deposits.",
    ],
    suits: [
      "You may need the money at short notice",
      "You want a home for cash while you decide on a longer-term investment",
      "You want Botswana pula exposure without equity market risk",
    ],
    considerations: [
      "Returns are not guaranteed and will vary with short-term interest rates",
      "The fund is invested 100% in Botswana, so it carries no foreign currency exposure",
      "It is not designed for long-term capital growth",
    ],
    facts: [
      { label: "Investment horizon", value: "Short term, any duration" },
      { label: "Market exposure", value: "100% Botswana" },
      { label: "Income treatment", value: "Withholding tax handled for you" },
    ],
    holdings: [
      { label: "Fixed deposits", value: 45 },
      { label: "Commercial paper", value: 30 },
      { label: "Short-dated bonds", value: 20 },
      { label: "Cash & equivalents", value: 5 },
    ],
    highlights: [
      "Capital preservation as the first objective",
      "Actively managed duration and credit quality",
    ],
    documents: [
      {
        label: "Enhanced Cash Fund fact sheet (July 2026)",
        href: "https://www.kgoricapital.com/wp-content/uploads/2026/09/Kgori-Capital_Enhanced-Cash-Fund-Factsheet_July-2026.pdf",
        kind: "Fact sheet",
      },
      {
        label: "Enhanced Cash Fund brochure",
        href: "https://www.kgoricapital.com/wp-content/uploads/2023/06/Kgori-Capital-Enhanced-Cash-Fund-Brochure.pdf",
        kind: "Brochure",
      },
      {
        label: "Enhanced Cash Fund prospectus",
        href: "https://www.kgoricapital.com/wp-content/uploads/2022/08/Prospectus-Kgori-Capital-Enhanced-Cash-Fund.pdf",
        kind: "Prospectus",
      },
    ],
  },
  {
    slug: "global-balanced",
    name: "Kgori Capital Global Balanced Fund",
    shortName: "Global Balanced",
    risk: "Moderate",
    riskScore: 3,
    horizon: "3 years or longer",
    summary:
      "A moderate-risk, multi-asset strategy for investors seeking long-term growth without the full force of equity market risk.",
    description:
      "The Global Balanced Fund invests across domestic and global liquid asset classes: equities, fixed income, currencies, alternatives and commodities. Our investment team actively adjusts the asset mix as valuations change, with the aim of compounding capital over the medium to long term while keeping risk within a defined band.",
    approach: [
      "The fund is a multi-asset strategy. It invests in domestic and global liquid asset classes, including equities, fixed income, currencies, alternatives and commodities.",
      "The investment team actively adjusts the asset mix as valuations change, aiming to compound capital over the medium to long term while keeping risk inside a defined band. The equity sleeve is run on the same valuation discipline as the firm's domestic equity mandates.",
    ],
    suits: [
      "Your goal is three years or more away",
      "You want growth and can accept some year-to-year movement in value",
      "You want global diversification from a manager based in Botswana",
    ],
    considerations: [
      "The value can fall as well as rise, and a three-year horizon matters",
      "Global assets carry currency risk as well as market risk",
      "Short-term withdrawals may crystallise a loss",
    ],
    facts: [
      { label: "Investment horizon", value: "3 years or longer" },
      { label: "Market exposure", value: "Botswana and global" },
      { label: "Strategy", value: "Multi-asset, actively managed" },
    ],
    holdings: [
      { label: "Domestic equity", value: 20 },
      { label: "Global equity", value: 30 },
      { label: "Bonds", value: 30 },
      { label: "Alternatives & commodities", value: 12 },
      { label: "Cash", value: 8 },
    ],
    highlights: [
      "Growth objective with a balanced risk budget",
      "Access to global markets from a local manager",
      "Disciplined valuation-led asset allocation",
      "Built for goals three years and beyond",
    ],
    documents: [
      {
        label: "Global Balanced Fund fact sheet (July 2026)",
        href: "https://www.kgoricapital.com/wp-content/uploads/2026/09/Kgori-Capital_Global-Balanced-Fund-Factsheet_July-2026.pdf",
        kind: "Fact sheet",
      },
      {
        label: "Global Balanced Fund brochure",
        href: "https://www.kgoricapital.com/wp-content/uploads/2023/06/Kgori-Capital-Global-Balanced-Fund-Brochure.pdf",
        kind: "Brochure",
      },
      {
        label: "Global Balanced Fund prospectus",
        href: "https://www.kgoricapital.com/wp-content/uploads/2022/08/Prospectus-Kgori-Capital-Balanced-Fund.pdf",
        kind: "Prospectus",
      },
    ],
  },
  {
    slug: "usd-money-market",
    name: "Kgori Capital USD Money Market Fund",
    shortName: "USD Money Market",
    risk: "Low",
    riskScore: 2,
    horizon: "Short term, any duration",
    summary:
      "A US dollar liquidity solution for investors and institutions who hold foreign currency obligations.",
    description:
      "The USD Money Market Fund gives Botswana investors a professionally managed way to hold US dollar liquidity, invested in short-dated, high-quality dollar instruments. It is designed for capital preservation in hard currency, with access to funds when they are needed.",
    approach: [
      "The fund gives Botswana investors a professionally managed way to hold US dollar liquidity. It invests in short-dated, high-quality dollar instruments, including treasury bills, bank deposits and commercial paper.",
      "Credit quality and duration are managed actively, with capital preservation in hard currency as the objective.",
    ],
    suits: [
      "You hold US dollar obligations, such as school fees or imports",
      "You want to keep savings in dollars rather than pula",
      "You need access to the money at short notice",
    ],
    considerations: [
      "Dollar interest rates and currency movements affect the return in pula terms",
      "It is a money market fund, not a guarantee",
      "It is not designed for long-term growth",
    ],
    facts: [
      { label: "Investment horizon", value: "Short term, any duration" },
      { label: "Currency", value: "US dollar" },
      { label: "Strategy", value: "Short-dated money market" },
    ],
    holdings: [
      { label: "Treasury bills", value: 45 },
      { label: "Bank deposits", value: 35 },
      { label: "Commercial paper", value: 15 },
      { label: "Cash & equivalents", value: 5 },
    ],
    highlights: [
      "Hard-currency capital preservation",
      "Managed credit and duration risk",
      "Useful for offshore obligations and travel",
      "Monthly reporting in US dollars",
    ],
    documents: [
      {
        label: "USD Money Market Fund fact sheet (July 2026)",
        href: "https://www.kgoricapital.com/wp-content/uploads/2026/09/Kgori-Capital_USD-Money-Market-Fund-Factsheet_July-2026.pdf",
        kind: "Fact sheet",
      },
    ],
  },
];

export const values = [
  {
    letter: "P",
    name: "Passion",
    body: "We bring wholehearted commitment to every mandate, every engagement and every client conversation.",
  },
  {
    letter: "R",
    name: "Reliability",
    body: "We ask, we listen, we introspect, so that we deliver on our promises every time, not occasionally.",
  },
  {
    letter: "I",
    name: "Integrity",
    body: "We act honestly and consistently with transparency, including when the answer is difficult.",
  },
  {
    letter: "D",
    name: "Dynamism",
    body: "Markets move. We stay prepared to respond to change and to see opportunity where others see noise.",
  },
  {
    letter: "E",
    name: "Excellence",
    body: "Only the highest standard of work, professionalism, compliance and governance is accepted here.",
  },
] as const;

export type Leader = {
  name: string;
  role: string;
  photo: string;
  bio: string;
};

export const leadership: { executives: Leader[]; board: Leader[] } = {
  executives: [
    {
      name: "Sharifa Noor",
      role: "Managing Director",
      photo: "/images/people/sharifa-noor-colour.webp",
      bio: "A founding partner of Kgori Capital with 21 years of industry experience. She led the unit trust business at BIFM and was an operations manager at Investec Asset Management Botswana before founding the firm, and has been central to the growth of unit trusts in Botswana. She holds an MBA from the University of South Africa and a BBA from the University of Botswana.",
    },
    {
      name: "Chandapiwa Moampe",
      role: "Senior Portfolio Manager",
      photo: "/images/people/chandapiwa-moampe-colour.webp",
      bio: "Provides oversight of the investment process and has more than 15 years managing multi-asset portfolios for institutional, high net worth and retail clients at portfolio manager and head of investments level. She holds a Bachelor of Commerce (Honours) from the University of the Witwatersrand, has passed CFA Level II and sits on the management committee.",
    },
    {
      name: "Sheila McHarg",
      role: "Chief Operations Officer",
      photo: "/images/people/sheila-mcharg-colour.webp",
      bio: "Chief Operations Officer with more than a decade in investment management. She joined Kgori Capital as an operations analyst, progressed to operations manager and now leads operations. She holds an honours degree in accounting and finance from the University of Derby and a postgraduate diploma from Stellenbosch Business School.",
    },
    {
      name: "Brandon Hartney",
      role: "Compliance Manager & Board Secretary",
      photo: "/images/people/brandon-hartney-colour.webp",
      bio: "Responsible for monitoring the firm's governance, risk and compliance framework and for reinforcing the culture of integrity and professionalism behind it. He has over 19 years in financial services, including senior compliance and chief operating roles, and holds an MSc in business strategy and a postgraduate compliance qualification from the University of Cape Town.",
    },
    {
      name: "Tiroyaone Brian Howard",
      role: "Head of Business Development",
      photo: "/images/people/tiroyaone-howard-colour.webp",
      bio: "The main contact for clients since 2021, responsible for retail and institutional sales and client service. He holds a Bachelor of Finance from the University of Botswana, a financial modelling and valuation certificate from the Corporate Finance Institute and a certificate in international wealth management from the Chartered Institute of Securities and Investments.",
    },
  ],
  board: [
    {
      name: "Motsile Sibanda",
      role: "Chairman, Independent Non-Executive Director",
      photo: "/images/people/motsile-sibanda-colour.webp",
      bio: "Vetted and approved by NBFIRA in 2018, with extensive human resources experience at Stanbic Botswana, the Standard Bank Group and BCL, where he helped establish the staff pension fund. He is HR Director at BUAN and serves on the board of Botswana Oil, and holds an MA in human resource management from the University of Leeds.",
    },
    {
      name: "Kennedy Melamu",
      role: "Non-Executive Director",
      photo: "/images/people/kennedy-melamu-colour.webp",
      bio: "A qualified attorney with 11 years in Botswana banking and more than 20 years at general management and executive level in telecommunications across Africa. He is currently Chief Operations Officer of MTN IranCell and serves on the board of MTN Sudan.",
    },
    {
      name: "Chabo Peo",
      role: "Independent Non-Executive Director",
      photo: "/images/people/chabo-peo-colour.webp",
      bio: "A corporate and commercial attorney with over 12 years of experience in governance, regulatory compliance, mergers and acquisitions and capital markets. She founded Peo Legal after serving as a partner at Bookbinder Business Law, and sits on the boards of Woolworths Botswana, The Cross Trainer and Neolife Botswana.",
    },
    {
      name: "Modiri Phekoyakgotla Seoke",
      role: "Independent Non-Executive Director",
      photo: "/images/people/modiri-seoke-colour.webp",
      bio: "A finance executive with more than 15 years of post-qualification experience across multinational and regional organisations, and chairs the board's audit, risk and compliance committee. He is Senior Finance Manager and Board Director at Barloworld Equipment, and holds an EMBA from Sheffield Hallam University together with CIMA, AAT, FCMA and CGMA qualifications.",
    },
  ],
};

export const capabilities = [
  { name: "Global Balanced", detail: "Multi-asset portfolios with global diversification." },
  { name: "Domestic Balanced", detail: "Botswana-centric multi-asset mandates." },
  { name: "Domestic Equity", detail: "Concentrated, valuation-led Botswana equities." },
  { name: "Domestic Fixed Income", detail: "Bonds, credit and listed property." },
  { name: "Domestic Money Market", detail: "Liquidity and capital preservation." },
] as const;

export const process = [
  {
    step: "01",
    title: "Understand the mandate",
    body: "We begin with the liability, the horizon and the risk the client can genuinely carry, not with a product.",
  },
  {
    step: "02",
    title: "Value the opportunity",
    body: "Proprietary research and valuation models estimate what a business or bond is worth through the cycle.",
  },
  {
    step: "03",
    title: "Build with discipline",
    body: "Positions are sized against risk, liquidity and correlation. Diversification is a requirement, not a preference.",
  },
  {
    step: "04",
    title: "Review and report",
    body: "Performance, attribution and risk are reviewed continuously and explained in writing, not just in numbers.",
  },
] as const;

export const faqs = [
  {
    q: "Who is Kgori Capital?",
    a: "Kgori Capital is a Botswana-focused investment manager providing client-driven local and international solutions to pension funds, corporates, charities, private and retail clients. The firm was established in 2012 and is wholly owned and controlled by its management and staff.",
  },
  {
    q: "Is Kgori Capital regulated?",
    a: "Yes. Kgori Capital is licensed and regulated by the Non-Bank Financial Institutions Regulatory Authority (NBFIRA) as an asset manager. Our governance framework is benchmarked against King IV and Botswana Accountancy Oversight Authority requirements.",
  },
  {
    q: "How do I start investing in a unit trust?",
    a: "Complete the individual or legal entity application form and email it with your KYC documents to info@kgoricapital.com. Our client service team confirms receipt and issues your account details. Forms are available under Documents on the Funds page.",
  },
  {
    q: "Which documents do I need?",
    a: "Individuals need a certified ID or passport, proof of address under three months old and stamped bank details. Legal entities also provide a certificate of incorporation and a board resolution to invest. The full checklist is in the application forms.",
  },
  {
    q: "Can I withdraw at any time?",
    a: "Yes. There are no lock-in periods or withdrawal penalties, and a valid instruction is processed within 48 hours.",
  },
  {
    q: "How often will I receive statements?",
    a: "Monthly, within the first five working days of the new month. Statements are also available in the secure client portal at any time.",
  },
  {
    q: "Do I pay tax on a unit trust?",
    a: "Gains from a unit trust are taxable. Kgori Capital pays any withholding tax due on your behalf and issues a tax certificate at filing time. Amounts withheld appear on your transaction notes.",
  },
  {
    q: "How does Kgori Capital approach responsible investing?",
    a: "We have been a signatory of the UN-supported Principles for Responsible Investment since 2012. ESG analysis is integrated into our research, and we vote and engage on material issues at the companies we own on behalf of clients.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Being customer-centric, Kgori Capital has managed to strategically penetrate and now lead the market through its digitalisation and marketing methods, breaking boundaries and setting new standards for efficient customer service. With their investments at their fingertips, customers are reassured of security and confidentiality.",
    name: "Lorato Masedi",
    role: "Financial Planner",
  },
  {
    quote:
      "From the very first day I signed up with Kgori Capital I have experienced stellar service. The application process went well, deductions were always on cue, and I receive monthly statements and fact sheets without asking. The portal is user friendly and I can navigate it without any hassle.",
    name: "Dreadson Mathemba",
    role: "Client",
  },
] as const;

export type Insight = {
  slug: string;
  title: string;
  category: "Market Watch" | "Quarterly Insights" | "Investment Insights";
  date: string;
  readMinutes: number;
  excerpt: string;
  /** Cover photograph. Decorative: the surrounding heading carries the meaning. */
  image?: string;
  featured?: boolean;
  body: { type: "p" | "h2" | "quote"; text: string }[];
};

export const insights: Insight[] = [
  {
    slug: "the-case-for-patience-in-botswana-equities",
    image: "/images/insights/delta.webp",
    title: "The case for patience in Botswana equities",
    category: "Investment Insights",
    date: "2026-10-14",
    readMinutes: 6,
    featured: true,
    excerpt:
      "Short-term price moves are noise. Over time, share prices converge on the economics of the businesses behind them, which is why we underwrite companies, not headlines.",
    body: [
      {
        type: "p",
        text: "Equity investing is often described as a competition of forecasts. We see it differently. Our job is not to predict the next quarter's numbers, but to estimate what a business is worth and to buy it when the market offers a discount to that value.",
      },
      {
        type: "p",
        text: "In a market as concentrated and as thinly traded as Botswana's, prices can drift away from fundamentals for longer than most investors are comfortable with. That is uncomfortable, and it is also the source of the opportunity. When liquidity is scarce, patience is a competitive advantage.",
      },
      { type: "h2", text: "What we look for" },
      {
        type: "p",
        text: "We look for businesses that can generate shareholder wealth consistently through a cycle: durable competitive positions, sensible capital allocation, transparent governance, and a balance sheet that can survive a bad year without needing to raise capital at the bottom.",
      },
      {
        type: "p",
        text: "Valuation then does the rest of the work. We estimate sustainable earnings power through the cycle rather than extrapolating a single good year, and we apply a margin of safety for the risks we cannot see.",
      },
      {
        type: "quote",
        text: "We are patient long-term investors because share prices ultimately reflect the true economics of a business, not its short-term performance.",
      },
      { type: "h2", text: "Why it matters for clients" },
      {
        type: "p",
        text: "Patience is not passivity. It is the discipline to hold a position when the thesis is intact and the price is lower, and the discipline to sell when the price has run ahead of value. Both decisions require the same foundation: research that is independent of the market's mood.",
      },
      {
        type: "p",
        text: "For clients with liabilities years into the future, that discipline is what converts volatility from a threat into a source of return.",
      },
    ],
  },
  {
    slug: "cash-is-not-a-strategy",
    image: "/images/insights/client-service.webp",
    title: "Cash is not a strategy, but it can be a position",
    category: "Investment Insights",
    date: "2026-09-22",
    readMinutes: 5,
    excerpt:
      "Holding cash feels safe in the moment. Over a long horizon, the real risk is what inflation quietly takes while you wait for certainty that never arrives.",
    body: [
      {
        type: "p",
        text: "There is a particular comfort in a bank balance. The number does not move, the statement is familiar, and nothing needs explaining. But comfort and safety are not the same thing, particularly when the objective is to fund a goal a decade away.",
      },
      {
        type: "p",
        text: "Inflation is the variable that turns cash from a safe asset into a slowly eroding one. The relevant question is not whether a deposit is stable in nominal terms, but whether it preserves purchasing power after tax and inflation.",
      },
      { type: "h2", text: "When cash earns its place" },
      {
        type: "p",
        text: "Cash and money market instruments are essential for liquidity, for near-term liabilities, and as dry powder when valuations become attractive. A money market fund can be a sensible home for an emergency reserve or for capital with a short, defined horizon.",
      },
      {
        type: "p",
        text: "But as a long-term growth strategy, cash has an unhelpful property: it offers certainty about the nominal outcome and almost no certainty about the real one. Time in the market, diversified across asset classes, has consistently been the more reliable route to real returns.",
      },
      {
        type: "quote",
        text: "The greatest risk for most long-term investors is not volatility. It is failing to be invested at all.",
      },
      {
        type: "p",
        text: "The answer is rarely all-or-nothing. It is matching the asset to the liability: money you need soon belongs in liquid, low-risk instruments; money you need in a decade belongs in a portfolio built to compound.",
      },
    ],
  },
  {
    slug: "why-active-management-still-earns-its-place",
    image: "/images/insights/market-watch.webp",
    title: "Why active management still earns its place in Botswana",
    category: "Quarterly Insights",
    date: "2026-08-30",
    readMinutes: 7,
    excerpt:
      "In markets where information is uneven and coverage is thin, research has a measurable edge. Our quarterly note on where active management adds value, and where it does not.",
    body: [
      {
        type: "p",
        text: "The debate between active and passive management is often conducted as if markets were uniformly efficient. They are not. Efficiency varies by market, by sector and by the size of the company. Botswana is a market where independent research still changes outcomes.",
      },
      { type: "h2", text: "Coverage creates opportunity" },
      {
        type: "p",
        text: "When few analysts follow a company, prices can remain disconnected from fundamentals for extended periods. Detailed, proprietary research that meets management, models the balance sheet and understands the local operating environment can identify these gaps before the wider market does.",
      },
      {
        type: "p",
        text: "The same is true in fixed income, where issue sizes are small, liquidity is episodic and credit work requires local judgement rather than a rating.",
      },
      { type: "h2", text: "The discipline that keeps it honest" },
      {
        type: "p",
        text: "Active management only creates value when it is constrained. We size positions against risk, we diversify across sectors and issuers, and we hold ourselves to a benchmark. Conviction without discipline is simply a larger bet.",
      },
      {
        type: "quote",
        text: "Our approach optimises performance over the medium to long term without exposing clients to unnecessary risk.",
      },
      {
        type: "p",
        text: "That balance, conviction within a risk budget, is the part of active management that is hardest to replicate, and the part that matters most to the pension funds, corporates and families who rely on us.",
      },
    ],
  },
  {
    slug: "market-watch-the-value-of-local-context",
    image: "/images/insights/local-context.webp",
    title: "The value of local context",
    category: "Market Watch",
    date: "2026-10-06",
    readMinutes: 4,
    excerpt:
      "A periodic read on company, local and global market developments, and why the interpretation of global events always has a Botswana-specific translation.",
    body: [
      {
        type: "p",
        text: "Global markets transmit quickly. Policy decisions in Washington, commodity moves in Asia and risk appetite in Europe all reach Gaborone within hours. What does not transmit as quickly is the local interpretation: how a stronger dollar affects a Botswana importer, or how a change in global risk appetite reaches the domestic bond market.",
      },
      { type: "h2", text: "What we monitor" },
      {
        type: "p",
        text: "Our market watch tracks domestic equity and fixed income activity alongside the global indicators that matter for local portfolios: currency moves, commodity prices, inflation expectations and offshore yields.",
      },
      {
        type: "p",
        text: "The purpose is not to react to every data point. It is to maintain an accurate picture of the environment in which our clients' capital is invested, so that when a genuine opportunity appears we recognise it quickly.",
      },
      {
        type: "quote",
        text: "Internationally informed. Locally invested.",
      },
      {
        type: "p",
        text: "Clients can access the full market watch and quarterly insights through our insights library, or speak with the investment team directly.",
      },
    ],
  },
  {
    slug: "governance-is-an-investment-decision",
    image: "/images/research.webp",
    title: "Governance is an investment decision",
    category: "Quarterly Insights",
    date: "2026-07-18",
    readMinutes: 5,
    excerpt:
      "How a company is governed determines how its cash flows are treated when management and minority shareholders disagree. We treat it as a valuation input, not a footnote.",
    body: [
      {
        type: "p",
        text: "Two companies with identical earnings can be worth very different amounts. The difference is often governance: who controls the cash, how capital is allocated, and whether minority shareholders have a real voice when decisions are made.",
      },
      { type: "h2", text: "The questions we ask" },
      {
        type: "p",
        text: "We examine board independence and composition, related-party transactions, disclosure quality, executive remuneration and the track record of capital allocation. Where governance is weak, we either demand a larger discount or decline the investment.",
      },
      {
        type: "p",
        text: "As stewards of our clients' capital, we also vote and engage. Stewardship is not a public relations exercise; it is one of the few levers long-term investors hold to protect value.",
      },
      {
        type: "quote",
        text: "Only the highest standard of work, professionalism, compliance and governance are accepted and delivered.",
      },
      {
        type: "p",
        text: "Our stewardship policy and proxy voting activity reports are published for clients who want to see how those responsibilities are exercised.",
      },
    ],
  },
  {
    slug: "building-a-portfolio-around-real-goals",
    image: "/images/insights/goals.webp",
    title: "Building a portfolio around real goals, not benchmarks",
    category: "Investment Insights",
    date: "2026-06-12",
    readMinutes: 6,
    excerpt:
      "A benchmark tells you how you did against the market. It does not tell you whether you can fund your child's education. We start with the liability.",
    body: [
      {
        type: "p",
        text: "Most investment conversations begin with a product. We prefer to begin with a question: what is this money for, and when will it be needed? The answer determines the horizon, the risk budget and the appropriate vehicle, in that order.",
      },
      { type: "h2", text: "Three questions that shape a portfolio" },
      {
        type: "p",
        text: "First, the horizon: is this capital needed in one year or in fifteen? Second, the constraint: how much of a drawdown can you tolerate without abandoning the plan? Third, the objective: is the goal to preserve purchasing power, generate income, or compound capital?",
      },
      {
        type: "p",
        text: "Only once those are clear does asset allocation follow. A portfolio that is well designed for someone else's goal is not well designed for yours, however impressive its recent returns.",
      },
      {
        type: "quote",
        text: "Investment is a responsibility, a gift for you and the futures of your loved ones.",
      },
      {
        type: "p",
        text: "This is why we offer solutions at different points on the risk spectrum, and why our client team spends time understanding the goal before discussing the fund.",
      },
    ],
  },
];

export const insightCategories = ["All", "Market Watch", "Quarterly Insights", "Investment Insights"] as const;
