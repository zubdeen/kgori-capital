/**
 * Page-level interface copy for every route.
 *
 * English is the source of truth for the shape; `pages-tn.ts` must mirror it
 * exactly, and TypeScript fails the build if a key is missing.
 */
export const pagesEn = {
  common: {
    source: "Source",
    enquire: "Enquire",
    read: "Read",
    minutes: (n: number) => `${n} min read`,
    article: "article",
    articles: "articles",
    emailApp: "Opens your email app",
  },

  notFound: {
    eyebrow: "404, page not found",
    title: "This page has moved on.",
    body:
      "Markets move, and so do websites. The page you were looking for is not here, but the funds, insights and our team are.",
    home: "Back to home",
    funds: "Explore the funds",
    popular: "Popular pages",
    links: [
      { label: "Unit trusts", href: "/funds" },
      { label: "Investment philosophy", href: "/investments" },
      { label: "Insights", href: "/insights" },
      { label: "Contact", href: "/contact" },
    ],
  },

  about: {
    hero: {
      eyebrow: "About Kgori Capital",
      title: "An independent firm, owned by the people who run it.",
      lead:
        "Kgori Capital provides client-driven local and international investment solutions to pension funds, corporates, charities and private clients.",
    },
    intro: {
      quote: "We are patriots who take the responsibility and trust bestowed upon us seriously.",
      p1:
        "Established in 2012, the firm has grown from humble beginnings into a leading investment manager in Botswana, managing significant assets on behalf of third-party clients.",
      p2:
        "We are conscious of our role in Botswana. That means playing a meaningful part in transforming the industry into one that produces excellent outcomes for clients, not simply competitive fees for managers.",
      p3:
        "Kgori Capital is wholly owned and controlled by management and staff, and operates as an independent firm focused solely on managing third-party assets.",
    },
    stats: [
      "Founded as an independent firm",
      "Owned by management and staff",
      "Institutional experience across the team",
    ],
    registered: {
      label: "Registered",
      regLabel: "Registration No.",
      licence: "Licensed by NBFIRA as an asset manager.",
    },
    teamPhoto: {
      alt: "The Kgori Capital team gathered in the firm's offices in Gaborone.",
      caption: "The team in Gaborone, where every portfolio is managed.",
    },
    story: {
      eyebrow: "Our story",
      title: "Built one mandate at a time.",
      lead:
        "The firm was not built on a single mandate or a single market cycle. It grew through research, service and client outcomes that could be checked.",
      items: [
        {
          year: "2012",
          title: "Kgori Capital is founded",
          body:
            "Kgori Capital opens as an independent, citizen-owned investment manager and becomes a signatory of the UN-supported Principles for Responsible Investment.",
        },
        {
          year: "2015",
          title: "Institutional mandates scale",
          body:
            "The firm grows into a trusted manager for pension funds, corporates and charities, built on research and client service rather than distribution scale.",
        },
        {
          year: "2019",
          title: "Digital access for every client",
          body:
            "A secure client portal brings portfolios, transactions, statements and personal details into one place, with two-factor authentication and OTP verification.",
        },
        {
          year: "Today",
          title: "A leading independent manager",
          body:
            "The same ownership model and investment process now serve pension funds, corporates, charities and private clients.",
        },
      ],
    },
    values: {
      eyebrow: "Our values",
      title: "PRIDE is how we work.",
      lead:
        "Passion, Reliability, Integrity, Dynamism and Excellence. The acronym is useful, but the standard behind it is the point.",
    },
    ownership: {
      eyebrow: "Ownership",
      title: "The people who do the work own the firm.",
      p1:
        "Our ownership philosophy is simple. The shareholding sits with the people who work in the firm and generate value for clients. It is rooted in a commitment to reflect the society we serve in the composition of our leadership and our team.",
      p2: "We are proud to be one of very few citizen-owned asset management firms in Botswana.",
      statLabel:
        "Botswana citizen owned. Wholly owned and controlled by management and staff.",
      indepLabel: "Independent by design",
      indepBody:
        "No parent bank. No product manufacturer. Our only business is managing the assets clients entrust to us.",
    },
    people: {
      eyebrow: "Our people",
      title: "Depth of team is a differentiator.",
      lead:
        "Investment management is a talent business. Every key member of the investment team is a significant owner of the firm.",
      executives: "Executive team",
      location: "Gaborone",
      board: "Board of directors",
      boardBody:
        "Our board brings expertise across portfolio management, strategy, legal and operations, with experience across African markets. The Managing Director sits on the board alongside independent non-executive directors.",
      note:
        "Members of the management team have an average of over 15 years' experience managing institutional funds in Botswana.",
      readProfile: "Read profile",
      boardNote:
        "The board is independent in the majority. Directors are vetted and approved by NBFIRA before appointment.",
    },
    governance: {
      eyebrow: "Governance",
      title: "Licensed, independent and accountable.",
      body:
        "The board sets the governance framework the organisation follows, based on strategy, the risk environment, regulation, internal controls and international best practice.",
      link: "Stewardship and ESG",
      framework: {
        eyebrow: "The framework",
        title: "Direction from the board. Challenge from outside it.",
        body:
          "Governance is not a document that sits on a shelf. It is the set of checks that decides who can act, what they can approve, and who reviews the result.",
        items: [
          {
            title: "The board",
            body:
              "Responsible for governance and direction. It sets strategy, approves the risk appetite and holds management to account. The Managing Director sits alongside independent non-executive directors, who form the majority.",
          },
          {
            title: "Audit, risk and compliance",
            body:
              "A board committee chaired by an independent non-executive director. It reviews financial reporting, the control environment, regulatory compliance and the risk register.",
          },
          {
            title: "The regulator",
            body:
              "NBFIRA licenses the firm as an asset manager and approves directors before appointment. Its capital markets requirements apply to every mandate we run.",
          },
        ],
      },
      practice: {
        eyebrow: "In practice",
        title: "What the framework means for clients.",
      },
      questions: {
        eyebrow: "Governance questions",
        title: "Asked, and answered.",
        items: [
          {
            q: "How is Kgori Capital governed?",
            a: "The board is responsible for governance and sets the framework the organisation follows. That framework is based on the firm's strategic direction, the risk environment, the regulatory environment, internal controls and international best practice, and is benchmarked against the King Code in line with NBFIRA and the Botswana Accountancy Oversight Authority.",
          },
          {
            q: "Who regulates the firm?",
            a: "Kgori Capital is licensed and regulated by the Non-Bank Financial Institutions Regulatory Authority (NBFIRA) as an asset manager. NBFIRA publishes its capital markets requirements at nbfira.org.bw.",
          },
          {
            q: "How are directors appointed?",
            a: "Directors are vetted and approved by NBFIRA before appointment. The board is independent in the majority, and the audit, risk and compliance committee is chaired by an independent non-executive director.",
          },
          {
            q: "Where is client money held?",
            a: "Assets are managed under mandate and held separately from the firm's own assets. Reporting is monthly and independently reconciled, so the record of what you own does not rest on our ledger alone.",
          },
          {
            q: "How do I raise a concern?",
            a: "Write to our Compliance Manager through the contact page, or follow the complaints procedure. If the matter is not resolved, you may raise it with NBFIRA, which publishes its complaints process at nbfira.org.bw.",
          },
        ],
      },
      rows: [
        {
          term: "Board committees",
          detail:
            "The board is supported by an audit, risk and compliance committee, chaired by an independent non-executive director.",
        },
        {
          term: "Governance code",
          detail:
            "Benchmarked against King IV, in line with NBFIRA and Botswana Accountancy Oversight Authority requirements.",
        },
        {
          term: "Responsible investment",
          detail:
            "A signatory of the UN-supported Principles for Responsible Investment since inception in 2012.",
        },
        {
          term: "Client money",
          detail:
            "Assets are managed under mandate and held separately from the firm. Reporting is monthly and independently reconciled.",
        },
      ],
      complaints: "Complaints handling",
      contactCompliance: "Contact compliance",
    },
    peopleLink: "Meet the team",
    governanceLink: "How we are governed",
  },

  funds: {
    hero: {
      eyebrow: "Unit trusts",
      title: "Three funds, one investment process.",
      lead:
        "Three actively managed funds, relevant to Botswana and priced transparently. No lock-in periods, no withdrawal penalties, and a statement in your inbox every month.",
      jump: [
        { label: "The funds", href: "#funds" },
        { label: "Compare", href: "/funds/compare" },
        { label: "Fees", href: "#fees" },
        { label: "Fund finder", href: "#finder" },
        { label: "FAQs", href: "#faqs" },
        { label: "Apply", href: "#forms" },
        { label: "Documents", href: "#documents" },
      ],
    },
    unitTrust: (n: string) => `Unit trust ${n}`,
    atGlance: "At a glance",
    allocation: "Strategic allocation",
    allocationNote:
      "Illustrative strategic allocation, not a current holdings report. See the latest fact sheet for current positioning and the date it was published.",
    apply: "Apply to invest",
    factSheet: "Fact sheet",
    riskLow: "Low",
    riskModerate: "Moderate",
    kinds: {
      "Fact sheet": "Fact sheet",
      Brochure: "Brochure",
      Prospectus: "Prospectus",
    } as Record<string, string>,
    compare: {
      eyebrow: "Compare",
      title: "The difference, in plain terms.",
      lead:
        "All three funds are actively managed, have no lock-in periods, process redemptions within 48 hours and issue statements monthly within the first five working days. The differences are the risk, the horizon and the currency.",
      scrollHint: "Scroll the table sideways to compare all three funds.",
      caption: "Comparison of Kgori Capital unit trusts",
      feature: "Feature",
      rows: {
        risk: "Risk profile",
        objective: "Objective",
        exposure: "Market exposure",
        horizon: "Suggested horizon",
      },
      objectives: ["Capital preservation and liquidity", "Long-term capital growth", "US dollar capital preservation"],
      exposures: ["100% Botswana", "Domestic and global", "US dollar instruments"],
      details: "Details",
      viewFund: "View fund",
      disclaimer:
        "Unit trust values can fall as well as rise. Past performance is not a reliable indicator of future results. Fees and minimum investments are set out in each prospectus.",
      shared: {
        eyebrow: "What they share",
        title: "The same firm, the same discipline.",
        body:
          "The differences are risk, horizon and currency. Everything below is common to all three funds.",
        items: [
          "Actively managed by the same investment team",
          "No lock-in periods and no withdrawal penalties",
          "Redemptions processed within 48 hours",
          "Statements within the first five working days of the month",
          "Access through the secure client portal",
        ],
      },
      choose: {
        eyebrow: "A starting point",
        title: "Three questions narrow the field.",
        body: "These are not recommendations. They are the questions our team would ask first.",
        items: [
          {
            question: "When do you need the money?",
            answer:
              "Within a year, liquidity matters more than growth. Three years or more, a multi-asset fund has time to work.",
            fund: "enhanced-cash",
            label: "Enhanced Cash",
          },
          {
            question: "Which currency is the goal in?",
            answer:
              "If the obligation is in dollars, holding a pula fund introduces currency risk you did not choose.",
            fund: "usd-money-market",
            label: "USD Money Market",
          },
          {
            question: "Can you accept a fall in value?",
            answer:
              "A balanced fund can fall in a bad year. If that would force a sale, the horizon or the fund is wrong.",
            fund: "global-balanced",
            label: "Global Balanced",
          },
        ],
      },
      questions: {
        eyebrow: "Choosing a fund",
        title: "Asked, and answered.",
        items: [
          {
            q: "What unit trusts does Kgori Capital offer?",
            a: "Three. The Enhanced Cash Fund invests in Botswana money market securities for capital preservation and liquidity. The Global Balanced Fund is a multi-asset strategy investing in domestic and global liquid asset classes for growth over three years or more. The USD Money Market Fund holds short-dated, high-quality dollar instruments for investors with dollar obligations.",
          },
          {
            q: "When can I make withdrawals?",
            a: "At any time. There are no lock-in periods and no charges or penalties for withdrawing. A valid redemption instruction is processed within 48 hours of receipt.",
          },
          {
            q: "How often do I get statements?",
            a: "At the end of every month, within the first five working days of the new month, by email or post. Statements are also available in the secure client portal.",
          },
          {
            q: "How can I compare performance?",
            a: "Every manager publishes statements, so similar funds can be compared over the same period. Weigh performance alongside client service and the consistency of the manager's process, not a single year's number.",
          },
        ],
      },
      finderLink: "Not sure? Use the fund finder",
    },
    fees: {
      eyebrow: "Fees and minimums",
      title: "What it costs, in the published documents.",
      lead:
        "We do not publish a single headline fee here, because the amount depends on the fund, the share class and the size of the investment. The binding figures are in each prospectus and the latest fact sheet, which set out the fee schedule, the minimum investment, the net asset value and past performance.",
      priceNote:
        "Unit trust prices and performance change with every valuation, so they are published in the fact sheets and in the client portal rather than reproduced here. Ask us for the current price if you need it before applying.",
      fundLabel: "Fund",
      documentsLabel: "Published figures",
      prospectus: "Read the prospectus",
      factSheet: "Read the fact sheet",
      documentsLink: "All fund documents",
      note:
        "If anything in a document is unclear, ask us before you invest. We will walk through the fee schedule and the minimum with you.",
    },
    finder: {
      eyebrow: "Find your fit",
      title: "Not sure where to start?",
      lead:
        "Answer three questions. We will suggest a starting point, then you can speak to a person before anything is opened.",
      ui: {
        eyebrow: "Fund finder",
        title: "How it works.",
        body:
          "This is an educational tool, not a personal recommendation. It narrows the field so a conversation with our team starts in the right place.",
        needPerson: "Need a person?",
        questions: [
          {
            legend: "When might you need this money?",
            hint: "Pick the earliest point you could need to withdraw.",
            options: ["Within a year", "One to three years", "Three years or more"],
          },
          {
            legend: "Your balance falls 10% in a year. What happens next?",
            hint: "There is no right answer, only an honest one.",
            options: ["I would lose sleep", "I would stay invested"],
          },
          {
            legend: "Which currency do you need?",
            hint: "Choose the currency of the goal, not the currency you earn.",
            options: ["Pula (BWP)", "US dollar"],
          },
        ],
        submit: "See my starting point",
        ready: "Ready when you are.",
        incomplete: "Answer all three to continue.",
        resultEyebrow: "Your starting point",
        mediumNote:
          "With a one-to-three-year horizon, you may also consider splitting the amount with the Global Balanced Fund for the portion you will not need soon.",
        horizon: "Horizon",
        access: "Access",
        accessValue: "Any time, without penalty",
        details: "View fund details",
        again: "Start again",
        disclaimer:
          "Past performance is not a reliable indicator of future results. Capital is not guaranteed. Speak to us before investing.",
      },
    },
    faqs: {
      eyebrow: "Questions",
      title: "Asked, and answered.",
      body:
        "If your question is not here, the client service team would rather answer it directly.",
      ask: "Ask a question",
    },
    forms: {
      eyebrow: "Apply",
      title: "What you need to open an account.",
      lead:
        "Complete the application form, attach the documents below, and email everything to info@kgoricapital.com. We will confirm receipt and issue your account details.",
      individuals: "Individuals",
      entities: "Legal entities",
      kycIndividuals: [
        "Certified ID document or passport",
        "Proof of address, less than three months old",
        "Stamped proof of bank details",
      ],
      kycEntities: [
        "Certificate of incorporation",
        "Proof of address, less than three months old",
        "Stamped bank confirmation or cancelled cheque",
        "Resolution to invest in a Kgori Capital unit trust",
      ],
      nextStep: "Next step",
      nextStepBody: "Send your completed application to our client service team.",
      conversationHint:
        "Prefer a conversation first? Call +267 3915990 or book a time through the contact page.",
      talk: "Talk to the team",
      applicationForms: "Application forms",
      documents: "Prospectuses, brochures and fact sheets",
      applications: [
        "Unit trust application (individual)",
        "Unit trust application (legal entities)",
        "Additional investment form",
        "Redemption application form",
      ],
    },
    fundPage: {
      approach: {
        eyebrow: "How it invests",
        title: "The mandate, in practice.",
      },
      fit: {
        eyebrow: "Fit",
        title: "Who the fund is built for.",
      },
      consider: {
        eyebrow: "Keep in mind",
        title: "What can move the outcome.",
      },
      documents: {
        eyebrow: "Documents",
        title: "The published record.",
        body:
          "The prospectus is the binding document. The fact sheet carries the latest published positioning, price and performance.",
      },
      questions: {
        eyebrow: "Fund questions",
        title: "Asked, and answered.",
        items: [
          {
            q: "How do I invest in this fund?",
            a: "Complete the individual or legal entity application form and email it with your KYC documents to info@kgoricapital.com. Our client service team confirms receipt and issues your account details.",
          },
          {
            q: "When can I withdraw?",
            a: "At any time. There are no lock-in periods and no charges or penalties for withdrawing. A valid redemption instruction is processed within 48 hours of receipt.",
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
            q: "Where can I see the current price and performance?",
            a: "Prices and performance change with every valuation, so they are published in the latest fact sheet and in the client portal rather than reproduced on this page. Ask us for the current price if you need it before applying.",
          },
          {
            q: "Is my capital guaranteed?",
            a: "No. Unit trust values can fall as well as rise, and past performance is not a reliable indicator of future results. Money market funds aim to preserve capital but are not risk-free.",
          },
        ],
      },
      allFunds: "All funds",
      compare: "Compare the funds",
      talk: "Speak to the team",
      next: {
        eyebrow: "Next step",
        title: "Open an account, or ask first.",
        body:
          "Applications are reviewed by our client service team. If you would rather talk it through, we will walk you through the documents before anything is signed.",
      },
    },
  },

  investments: {
    hero: {
      eyebrow: "Investment philosophy",
      title: "Value first, price second.",
      lead:
        "Independent research, valuation discipline and a risk budget agreed with the client. That is how every mandate is run.",
    },
    intro: {
      quote:
        "Our investment philosophy and process are what set us apart, and what will stand the test of time.",
      p1:
        "Our approach revolves around a single concept: optimising performance over the medium to long term without exposing clients to unnecessary risk. We believe in active management with a balanced focus on risk and reward, underpinned by the premise that fundamentals and valuations converge over time.",
      p2:
        "In practice that means we are willing to hold a position when the thesis is intact and the price is lower, and willing to sell when price has run ahead of value. Both decisions rest on the same foundation: proprietary research, applied consistently.",
      imageAlt:
        "An analyst annotating printed research and valuation work at a desk.",
      imageCaption:
        "Research is done in-house: company fundamentals, valuation and the risks we can see.",
    },
    dont: {
      label: "What we do not do",
      items: [
        "Chase momentum without a valuation case",
        "Promise capital guarantees we cannot fund",
        "Sell products manufactured by someone else",
        "Hide risk in a benchmark we did not choose",
      ],
    },
    process: {
      eyebrow: "How we invest",
      title: "Four steps, applied consistently.",
      lead:
        "The process does not change with the market. It is the consistency of the process, not the drama of a single call, that compounds over a client's horizon.",
      steps: {
        eyebrow: "Step by step",
        title: "Open a step to see what happens inside it.",
        body:
          "Each step produces something the next step depends on. That is why the sequence does not change.",
        items: [
          {
            body:
              "We start with the client's liabilities, not with a product. A pension fund has benefit payments to meet; a private investor has a goal and a date. The mandate records the return the client needs, the movement they can live with and the liquidity they require.",
            checks: [
              "Liability profile and cash-flow needs",
              "Time horizon and liquidity requirement",
              "The risk the client can genuinely carry",
            ],
          },
          {
            body:
              "Research is done in-house. We estimate what a business or a bond is worth through the cycle, using sustainable growth, operating performance and the quality of the franchise. Price is compared with that estimate, not with last year's price.",
            checks: [
              "Company fundamentals and quality of earnings",
              "Valuation through the cycle",
              "Balance sheet, management and governance",
            ],
          },
          {
            body:
              "A good idea is not a position until it is sized. We build portfolios against the risk budget, with limits on single holdings, sector concentration, credit quality and liquidity. Diversification is a requirement, not a preference.",
            checks: [
              "Position size against the risk budget",
              "Correlation and concentration limits",
              "Liquidity of the underlying assets",
            ],
          },
          {
            body:
              "Performance is reviewed continuously and explained in writing. Attribution shows what the process got right and wrong, and the review is the point at which the thesis is either confirmed or retired.",
            checks: [
              "Performance and attribution",
              "Risk against the agreed budget",
              "Whether the original thesis still holds",
            ],
          },
        ],
      },
      equities: {
        eyebrow: "Equities",
        title: "Buy quality businesses at our assessment of their intrinsic value.",
        quote:
          "Share prices ultimately reflect the true economics of a business, not its short-term performance.",
        p1:
          "We invest in companies that offer the highest potential upside in absolute terms over the long term, guided by in-depth fundamental research. We judge quality by a business's ability to generate shareholder wealth consistently.",
        p2:
          "We estimate value from sustainable growth and operating performance through the cycle. That makes us patient long-term investors, and it means we tend to favour businesses we understand, with good long-term economics.",
        points: [
          "Quality of the franchise",
          "Sustainable growth through the cycle",
          "Price below our estimate of intrinsic value",
        ],
      },
      fixedIncome: {
        eyebrow: "Fixed income",
        title: "Invest when the market price is less than intrinsic value.",
        quote:
          "In the short term, prices vary from fair value because markets are inefficient.",
        p1:
          "Fixed income valuations are driven by economic fundamentals over the long term, but short-term prices move around fair value. Our process looks for the most attractive opportunities across bonds, money market, credit, preference shares and listed property.",
        p2:
          "Investing across a wide range of fixed income sectors gives the portfolios risk diversification, yield enhancement and flexibility, rather than a single duration bet.",
        points: [
          "Credit quality and issuer fundamentals",
          "Yield against intrinsic value",
          "Diversification across sectors and maturities",
        ],
      },
      linkCapabilities: "See the strategies this process runs",
      linkReporting: "How we report on the result",
    },
    capabilities: {
      eyebrow: "Capabilities",
      title: "Five specialist strategies.",
      lead:
        "Built for the liabilities and horizons of institutional and private clients, managed from Gaborone with global reach.",
      enquire: "Enquire",
      note:
        "Institutional mandates are managed to a client's own investment policy statement. Private investors access our strategies through the unit trusts.",
      labels: {
        suits: "Who it suits",
        access: "How to access",
      },
      items: [
        {
          suits:
            "Institutions and private clients who want one portfolio diversified across Botswana and global markets.",
          access: "Institutional mandate, or the Global Balanced unit trust for private investors.",
        },
        {
          suits:
            "Clients whose liabilities are in pula and who want diversification without taking full global currency risk.",
          access: "Institutional mandate.",
        },
        {
          suits:
            "Investors who can accept equity market risk in exchange for long-term capital growth.",
          access: "Institutional mandate.",
        },
        {
          suits:
            "Clients who need income, capital preservation or a match for known future payments.",
          access: "Institutional mandate.",
        },
        {
          suits: "Clients who need liquidity and a return above a traditional deposit.",
          access: "Institutional mandate, or the Enhanced Cash unit trust.",
        },
      ],
      split: {
        eyebrow: "Two ways in",
        title: "Mandates for institutions. Unit trusts for individuals.",
        institutional: {
          title: "Institutional mandates",
          body:
            "Pension funds, corporates and charities invest through a mandate managed to their own investment policy statement. The strategy, benchmark and risk budget are agreed in writing before the portfolio is funded.",
          points: [
            "A defined mandate and benchmark",
            "Reporting to the board or investment committee",
            "Direct access to the investment team",
          ],
        },
        private: {
          title: "Private clients",
          body:
            "Private investors access the same research and process through the unit trusts. There is no lock-in period, no withdrawal penalty and a statement every month.",
          points: [
            "Enhanced Cash for liquidity",
            "Global Balanced for long-term growth",
            "USD Money Market for dollar holdings",
          ],
          link: "Explore the funds",
        },
      },
      links: {
        process: "How the process works",
        reporting: "Risk and reporting",
      },
    },
    essentials: {
      eyebrow: "Implementation",
      title: "The essentials.",
      body:
        "Consistent investment outcomes depend on the things clients rarely see: research depth, systems, risk control and people who stay.",
      items: [
        "A high-calibre team of investment analysts",
        "Experienced portfolio management",
        "ESG analysis integrated into research",
        "Best-in-industry information systems and broker networks",
        "Integrated risk management and reporting tools",
      ],
    },
    reporting: {
      eyebrow: "Risk and reporting",
      title: "What clients can expect.",
      body:
        "Clients should always know what they own, why they own it and how it is performing. We report in plain language, on a predictable cadence.",
      cards: [
        {
          title: "Risk is a budget",
          body:
            "Every mandate has a defined risk budget. We measure exposure against it continuously, so risk is managed rather than discovered.",
        },
        {
          title: "Reporting is a habit",
          body:
            "Monthly statements within five working days, monthly fact sheets, and quarterly insights on markets and positioning.",
        },
        {
          title: "Stewardship is active",
          body:
            "We vote and engage at the companies we own, and publish our stewardship policy and proxy voting activity.",
        },
      ],
      disclaimer:
        "Past performance is not a reliable indicator of future results. Unit trust values can fall as well as rise and capital is not guaranteed.",
      documents: "Fact sheets and reports",
      stewardship: "Stewardship policy",
      cadence: {
        eyebrow: "The cadence",
        title: "What arrives, and when.",
        body:
          "Reporting is only useful if it is predictable. This is the rhythm clients can plan around.",
        columns: ["When", "What arrives", "What it covers"],
        rows: [
          {
            when: "Monthly",
            what: "Statement",
            detail:
              "Sent within the first five working days of the new month, by email or post according to your preference. Also available in the client portal at any time.",
          },
          {
            when: "Monthly",
            what: "Fact sheet",
            detail:
              "Fund positioning, the strategic allocation and the published price and performance for the period.",
          },
          {
            when: "Quarterly",
            what: "Market insight",
            detail:
              "Our quarterly account of markets and positioning, published alongside the regular market watch.",
          },
          {
            when: "At tax filing",
            what: "Tax certificate",
            detail:
              "A certificate covering withholding tax paid on your behalf during the year.",
          },
          {
            when: "On request",
            what: "Mandate review",
            detail:
              "Institutional clients meet the investment team to review performance, attribution and the risk budget.",
          },
        ],
      },
      questions: {
        eyebrow: "Reporting questions",
        title: "Asked, and answered.",
        items: [
          {
            q: "How often do I get statements?",
            a: "At the end of every month, within the first five working days of the new month. They are sent by email or post depending on your preference, and are always available in the secure client portal.",
          },
          {
            q: "When can I withdraw?",
            a: "At any time. Kgori Capital unit trusts have no lock-in periods and no charges or penalties for withdrawing. A valid redemption instruction is processed within 48 hours of receipt.",
          },
          {
            q: "How do I deposit or withdraw?",
            a: "Use the transact-online feature in the secure client portal, or complete the additional investment form or redemption form and send it to our client service team.",
          },
          {
            q: "Do I pay tax on a unit trust?",
            a: "Gains made from a unit trust are taxed. Kgori Capital pays any withholding tax due on your behalf and issues a tax certificate at tax filing time. Amounts withheld appear on your transaction notes.",
          },
          {
            q: "How can I compare performance with other managers?",
            a: "Every manager publishes statements. Compare similar funds over the same period, and weigh performance alongside client service and the consistency of the process, not a single year's number.",
          },
        ],
      },
    },
  },

  responsibility: {
    hero: {
      eyebrow: "Responsibility",
      title: "Responsibility is not a department.",
      lead:
        "It sits inside research, inside voting, and inside the way we run the firm. Kgori Capital has been a signatory of the UN-supported Principles for Responsible Investment since our inception in 2012.",
    },
    pillars: [
      {
        title: "Corporate citizenship",
        body:
          "We approach business with a responsibility to protect the environment, uplift communities and maintain the integrity of decision-making structures within our firm and the companies we invest in.",
      },
      {
        title: "ESG integration",
        body:
          "Paying attention to environmental, social and governance considerations helps us make better long-term investment decisions. ESG analysis is part of research, not a screen applied afterwards.",
      },
      {
        title: "Investor stewardship",
        body:
          "We vote on resolutions and engage with the management of the companies we own, encouraging governance standards that create long-term value for clients.",
      },
    ],
    pri: {
      eyebrow: "Evidence and disclosure",
      title: "Principles, with evidence.",
      body:
        "Signing the Principles is the beginning of a commitment, not the end of one. Our assessment and transparency reports are public, including where we still have work to do.",
      assessment: "UNPRI assessment report",
      transparency: "Transparency report",
      documentsTitle: "Stewardship documents",
      documents: [
        "Investor Stewardship Policy",
        "Proxy voting & engagement report (Q3 2024, most recent published)",
        "NBFIRA capital markets regulation",
      ],
      photoAlt:
        "One person's hand reaching up to meet another against an open sky.",
      photoCaption: "Stewardship is an instruction to act, not a statement of intent.",
      documentsNote:
        "Documents open as PDFs in a new tab. The UNPRI assessment and transparency reports and the proxy voting report are the most recent published editions; we add new editions as they are released. If you would like an accessible format, please email info@kgoricapital.com.",
    },
    citizenship: {
      eyebrow: "Corporate citizenship",
      title: "Investing in Botswana's people.",
      lead:
        "Broader education and access have become focal points of our citizenship work, because a more informed market is a better market for everyone.",
      photoAlt:
        "Two children in a Botswana neighbourhood, part of the community the firm invests in.",
      schoolAlt:
        "A Kgori Capital team member crouching to greet a learner at the school gate, with other pupils arriving behind them.",
      schoolCaption:
        "Corporate citizenship in practice: a Kgori Capital team member greeting a learner on her way into school.",
      initiatives: [
        {
          title: "Kgori Internships",
          body:
            "Final-year students and recent graduates work directly with investment, operations and business development teams on live tasks and projects. Interns are paid a stipend and treated as part of the staff complement.",
          tag: "Education",
        },
        {
          title: "Kgori Business Press Club",
          body:
            "A platform that bridges media reporting and business, giving the public greater insight into business and government activity, and giving journalists access to the people making decisions.",
          tag: "Media",
        },
      ],
      enquire: "Enquire",
      reporting: "How we report",
      partner: "Partner with us",
    },
  },

  contact: {
    hero: {
      eyebrow: "Contact",
      title: "Start with a conversation.",
      lead:
        "Whether you are opening a unit trust, reviewing an institutional mandate or simply have a question, our team in Gaborone is ready to help.",
    },
    enquiry: {
      eyebrow: "Send an enquiry",
      title: "A member of our team will respond during business hours.",
    },
    det: {
      eyebrow: "Visit or call",
      photoCaption: "The client service team in Gaborone answers every enquiry.",
      headOffice: "Head office, Gaborone",
      address: "Address",
      phoneLabel: "Telephone",
      emailLabel: "Email",
      directions: "Get directions",
      fax: (value: string) => `Fax ${value}`,
      postal: "Postal address",
      existing: "Existing clients",
      existingBody:
        "View your portfolio, transact, download statements and update your details in the secure client portal.",
      portal: "Open the client portal",
      portalNote:
        "The portal uses two-factor authentication and OTP verification. For sign-in help, call {phone}.",
      hours: "Monday to Friday, 08:00–17:00 (Central Africa Time, UTC+2).",
    },
    faq: {
      eyebrow: "Before you write",
      title: "Questions we hear most.",
      all: "All FAQs",
      forms: "Application forms and KYC",
    },
  },

  contactForm: {
    name: "Full name",
    email: "Email address",
    phone: "Phone",
    optional: "(optional)",
    interest: "I am enquiring as",
    interests: [
      "Individual investor",
      "Institutional investor",
      "Existing client",
      "Financial adviser",
      "Media or careers",
    ],
    message: "How can we help?",
    messagePlaceholder: "Tell us what the money is for, your horizon, and any questions you have…",
    hint: "Please do not include account numbers or identity document copies in this form.",
    submit: "Send enquiry",
    sending: "Sending…",
    note: "Your message is sent to our client service team and stored securely. Prefer to write directly?",
    success:
      "Thank you. Your enquiry has reached our client service team and we will respond during business hours.",
    failure: "We could not send your message just now. Please try again, or email us directly at",
    errors: {
      name: "Please enter your full name.",
      email: "Enter a valid email address, for example name@company.co.bw.",
      message: "Tell us a little more, at least a sentence about what you need.",
      generic: "Something went wrong. Please try again.",
    },
  },

  newsletter: {
    label: "Email address",
    submit: "Subscribe",
    sending: "Subscribing…",
    hint: "Market watch and quarterly insights. One considered email a month.",
    success: "You are on the list. Look out for the next market watch.",
    failure: "We could not add you just now. Please try again.",
    error: "Enter a valid email address, for example name@company.co.bw.",
  },

  insights: {
    hero: {
      eyebrow: "Insights",
      title: "Market context, without the noise.",
      lead:
        "A periodic read on company, local and global market developments, our quarterly account of the market, and longer-form thinking on how we invest.",
    },
    featured: "Featured",
    readArticle: "Read the article",
    library: "The library",
    all: "All insights",
    archive: "Market watch archive",
    empty: "Nothing published in this category yet. Try another filter.",
    filter: "Filter insights by category",
    categories: {
      All: "All",
      "Market Watch": "Market Watch",
      "Quarterly Insights": "Quarterly insights",
      "Investment Insights": "Investment insights",
    } as Record<string, string>,
    categoriesList: ["All", "Market Watch", "Quarterly Insights", "Investment Insights"],
    article: {
      back: "All insights",
      publishedBy: "Published by",
      team: "Kgori Capital Investment Team",
      location: "Gaborone, Botswana",
      disclaimer: "This article is general information, not financial advice.",
      share: "Share",
      aboutAuthor: "About the author",
      teamBio:
        "The Kgori Capital investment team manages the firm's unit trusts and institutional mandates from Gaborone, combining local market research with global asset allocation.",
      funds: "Explore the funds",
      teamLink: "Speak to the investment team",
      keepReading: "Keep reading",
      notFound: "Insight not found",
    },
  },

  legal: {
    updated: "Last updated",
    updatedValue: "November 2026",
    privacy: {
      eyebrow: "Legal",
      title: "Privacy notice.",
      lead: "How we handle the information you share with us through this website.",
      sections: [
        {
          h: "Who we are",
          p: [
            "This website is operated by {legalName}, registration number {registration}, 1st Floor, Exponential Building, Plot 54351, CBD, Gaborone, Botswana. We are licensed by NBFIRA as an asset manager.",
          ],
        },
        {
          h: "Information you choose to share",
          p: [
            "The enquiry form on this website sends your message to our client service team. We receive the name, contact details and content you include, and use it only to respond to your enquiry and, where relevant, to administer a client relationship.",
            "Please do not send identity documents, bank details or account numbers through the enquiry form. We will tell you how to provide verification documents securely when you apply.",
          ],
        },
        {
          h: "Assistant conversations",
          p: [
            "Messages you send to the website assistant are used to generate a response. They are not stored in a client record. Where an AI model is enabled for the assistant, your message is processed by a contracted third-party provider solely to produce the reply. That provider may process the message outside Botswana. Do not include identity documents, account numbers or other confidential information in a chat.",
          ],
        },
        {
          h: "Newsletter",
          p: [
            "If you subscribe to our insights email, we use the email address you provide to send the newsletter you asked for. Every edition includes an unsubscribe link, and you can ask us to remove you at any time by writing to {email}.",
          ],
        },
        {
          h: "Cross-border processing",
          p: [
            "Some of our service providers, including the provider that supports the website assistant and our email delivery provider, may process personal information outside Botswana. Where that happens, we take reasonable steps to ensure the information receives an appropriate level of protection and is used only for the purpose for which the provider was engaged.",
          ],
        },
        {
          h: "Cookies and analytics",
          p: [
            "This website sets a single preference cookie to remember your language choice. It does not set advertising or analytics cookies and stores no tracking identifiers in your browser. Standard server logs may record technical information such as your IP address, browser type and the pages requested, for security and reliability purposes.",
          ],
        },
        {
          h: "How long we keep information",
          p: [
            "Enquiry correspondence is retained only as long as needed to deal with your enquiry and to meet our regulatory record-keeping obligations. Client records are kept in line with applicable financial services regulation.",
          ],
        },
        {
          h: "Your rights",
          p: [
            "You may ask us for a copy of the personal information we hold about you, request that it be corrected, or ask us to stop using it for a particular purpose where the law allows. Write to {email} and we will respond within a reasonable period.",
          ],
        },
        {
          h: "Complaints",
          p: [
            "If you are unhappy with how we have handled your information, please contact us first so we can resolve it. You may also raise the matter with the Non-Bank Financial Institutions Regulatory Authority (NBFIRA), which regulates our asset management licence and publishes its complaints process at nbfira.org.bw.",
          ],
        },
      ],
    },
    disclaimer: {
      eyebrow: "Legal",
      title: "Disclaimer.",
      lead: "Important information about this website and the products described on it.",
      sections: [
        {
          h: "General information only",
          p: [
            "The content on this website is provided for general information and does not constitute financial, investment, tax or legal advice. It does not take into account your objectives, financial situation or needs. You should read the relevant prospectus and consult an appropriately licensed adviser before making an investment decision.",
          ],
        },
        {
          h: "Investment risk",
          p: [
            "Unit trusts are collective investment schemes. The value of investments and the income from them can fall as well as rise, and you may get back less than you invested. Past performance is not a reliable indicator of future results. No capital guarantee is provided by Kgori Capital or any other party.",
            "Funds invested in foreign currencies and offshore assets are exposed to exchange rate movements, which may increase or decrease the value of your investment. Money market funds aim to preserve capital but are not risk-free.",
          ],
        },
        {
          h: "Performance and fees",
          p: [
            "Performance figures, where shown, are historical and net of the fees described in the relevant prospectus unless stated otherwise. Fees and minimum investment amounts are set out in each fund's prospectus and may change in accordance with that document.",
          ],
        },
        {
          h: "Regulation",
          p: [
            "{legalName} is licensed and regulated by the Non-Bank Financial Institutions Regulatory Authority (NBFIRA) as an asset manager. Regulation does not imply that an investment is safe or that performance will be favourable.",
          ],
        },
        {
          h: "External links",
          p: [
            "This website links to documents hosted by third parties and to external websites. We do not control, and are not responsible for, their content or availability.",
          ],
        },
        {
          h: "Contact",
          p: ["Questions about this disclaimer can be directed to {email} or {phone}."],
        },
      ],
    },
  },

  complaints: {
    eyebrow: "Legal",
    title: "Complaints.",
    lead: "How to raise a concern with us, and what happens next.",
    sections: [
      {
        h: "Our commitment",
        p: [
          "We want to put things right. If you are unhappy with our service, a fund, or how we have handled your personal information, please tell us.",
        ],
      },
      {
        h: "How to complain",
        p: [
          "Email {email} with your name, contact details and a short description of the issue. You can also call {phone}, or write to our Compliance Manager at the address in the footer. Please do not send original identity documents.",
        ],
      },
      {
        h: "What happens next",
        p: [
          "We acknowledge complaints promptly and aim to respond within a reasonable period. We keep a record of the complaint and the steps taken to resolve it, in line with our regulatory obligations.",
        ],
      },
      {
        h: "If you are still unhappy",
        p: [
          "You may raise the matter with the Non-Bank Financial Institutions Regulatory Authority (NBFIRA), which regulates our asset management licence. NBFIRA publishes its complaints process at nbfira.org.bw.",
        ],
      },
      {
        h: "Complaints about personal information",
        p: [
          "If your concern is about privacy, please read our privacy notice or write to {email}. You also have the right to raise the matter with NBFIRA.",
        ],
      },
    ],
    document: "Read our complaints handling procedure",
  },

  accessibility: {
    eyebrow: "Legal",
    title: "Accessibility.",
    lead: "Our aim is that everyone can use this website, whatever technology they use.",
    sections: [
      {
        h: "Our commitment",
        p: [
          "We want everyone to be able to use this website, including people who use screen readers, keyboard navigation, magnification or reduced motion.",
        ],
      },
      {
        h: "What we have done",
        p: [
          "The site uses semantic landmarks, a skip link, visible focus states, labelled forms, sufficient colour contrast and respect for the prefers-reduced-motion setting. Text can be enlarged to 200% without loss of content.",
        ],
      },
      {
        h: "Known limitations",
        p: [
          "Some documents linked from this site are PDFs supplied by third parties and may not be fully accessible. The website assistant needs JavaScript. The Setswana translation is maintained in-house and is being reviewed.",
        ],
      },
      {
        h: "Tell us",
        p: [
          "If you cannot access something, email {email} or call {phone}. Tell us the page and what you need, and we will provide the information in another format where we can.",
        ],
      },
      {
        h: "Standards",
        p: [
          "We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.2 at Level AA. This statement will be updated as the site changes.",
        ],
      },
    ],
  },
};

export type PageCopy = typeof pagesEn;
