import { company } from "@/lib/content";

type Entry = {
  id: string;
  patterns: RegExp;
  keywords: string[];
  answer: string;
};

/**
 * Curated knowledge base for the website assistant.
 *
 * Every statement here is sourced from the published site content. Figures the
 * firm has not published (fees, minimums beyond the private-client entry point,
 * performance) are deliberately routed to the prospectus or the client service
 * team rather than guessed.
 */
const entries: Entry[] = [
  {
    id: "greeting",
    patterns: /^(hi|hello|hey|good (morning|afternoon|evening)|howzit|dumela|hallo)\b/i,
    keywords: ["hello", "dumela"],
    answer:
      "Dumela. Welcome to Kgori Capital. I can help with our funds, how to open an account, withdrawals, statements, documents, fees, regulation or our investment approach. What would you like to know?",
  },
  {
    id: "capabilities-bot",
    patterns: /\b(what can you do|help me|how can you help|what do you know|who are you)\b/i,
    keywords: ["what can you do", "help"],
    answer:
      "I can explain our three unit trusts, the documents needed to invest, how withdrawals and statements work, how we invest and how the firm is regulated. For a personal recommendation I will connect you with the client service team on +267 3915990.",
  },
  {
    id: "about",
    patterns:
      /\b(who are you|about kgori|about the company|what is kgori|company profile|history|founded|established|since when)\b/i,
    keywords: ["about", "history", "founded", "established", "2012", "company"],
    answer:
      "Kgori Capital is an independent investment manager based in Gaborone, established in 2012 and wholly owned and controlled by its management and staff. We manage local and international portfolios for pension funds, corporates, charities and private clients. [Read our story](/about)",
  },
  {
    id: "ownership",
    patterns: /\b(own|owner|ownership|shareholder|citizen owned|botswana owned|who owns)\b/i,
    keywords: ["own", "owner", "ownership", "shareholder", "citizen"],
    answer:
      "Kgori Capital is 100% Botswana citizen owned. The firm is wholly owned and controlled by management and staff, which we believe keeps our interests aligned with the clients we manage money for. [More on ownership](/about#ownership)",
  },
  {
    id: "team",
    patterns: /\b(team|people|management|executive|director|ceo|md|managing|who runs|leadership|sharifa)\b/i,
    keywords: ["team", "management", "executive", "leadership", "director", "sharifa"],
    answer:
      "Our executive team is led by Sharifa Noor (Managing Director), with Chandapiwa Moampe (Senior Portfolio Manager), Sheila McHarg (Chief Operations Officer), Brandon Hartney (Compliance Manager and Board Secretary) and Tiroyaone Brian Howard (Head of Business Development). Members of the management team have an average of over 15 years' experience managing institutional funds in Botswana. [Meet the team](/about/people)",
  },
  {
    id: "board",
    patterns: /\b(board|chairman|non-executive|independent director|governance structure)\b/i,
    keywords: ["board", "chairman", "non-executive", "director"],
    answer:
      "The board is chaired by Motsile Sibanda, an independent non-executive director, and includes Kennedy Melamu, Chabo Peo, Modiri Phekoyakgotla Seoke and Managing Director Sharifa Noor. Board composition, independence and committee terms are set out on our governance page. [Governance](/about/governance)",
  },
  {
    id: "regulation",
    patterns: /\b(regulat|nbfira|licen[cs]e|supervis|compliance|king iv)\b/i,
    keywords: ["regulated", "nbfira", "licence", "license", "compliance", "king iv"],
    answer:
      "Kgori Capital is licensed and regulated by the Non-Bank Financial Institutions Regulatory Authority (NBFIRA) as an asset manager. Our governance framework is benchmarked against King IV and Botswana Accountancy Oversight Authority requirements. [Governance details](/about/governance)",
  },
  {
    id: "funds",
    patterns: /\b(fund|funds|unit trust|product|offering|what do you offer|options)\b/i,
    keywords: ["fund", "funds", "unit trust", "product", "options"],
    answer:
      "We offer three unit trusts:\n\n• **Enhanced Cash Fund:** low risk, Botswana money market, built for capital preservation and liquidity.\n• **Global Balanced Fund:** moderate risk, multi-asset with domestic and global exposure, best for three years or longer.\n• **USD Money Market Fund:** low risk, US dollar liquidity for foreign-currency needs.\n\nAll three have no lock-in periods. [Compare the funds](/funds/compare)",
  },
  {
    id: "enhanced-cash",
    patterns: /\b(cash fund|enhanced cash|money market fund|preserv|emergency|low risk)\b/i,
    keywords: ["cash", "enhanced cash", "money market", "preservation", "emergency"],
    answer:
      "The **Enhanced Cash Fund** invests only in Botswana money market securities: fixed deposits, commercial paper and short-dated bonds. It targets capital preservation with a return above ordinary deposits, is 100% locally invested, and has no lock-in. [Enhanced Cash Fund details](/funds/enhanced-cash)",
  },
  {
    id: "global-balanced",
    patterns: /\b(global balanced|balanced fund|growth|moderate|long term|equity|offshore|international)\b/i,
    keywords: ["balanced", "global", "growth", "equity", "offshore", "international"],
    answer:
      "The **Global Balanced Fund** is a moderate-risk multi-asset strategy investing in domestic and global equities, fixed income, currencies, alternatives and commodities. It suits investors with a horizon of three years or longer who want growth without taking on the full force of equity risk. [Global Balanced Fund details](/funds/global-balanced)",
  },
  {
    id: "usd",
    patterns: /\b(usd|dollar|forex|foreign currency|hard currency)\b/i,
    keywords: ["usd", "dollar", "forex", "foreign currency", "hard currency"],
    answer:
      "The **USD Money Market Fund** is a US dollar liquidity solution invested in short-dated, high-quality dollar instruments. It is designed for capital preservation in hard currency, useful for offshore obligations or travel. [USD Money Market Fund details](/funds/usd-money-market)",
  },
  {
    id: "compare",
    patterns: /\b(compare|difference|which fund|suit me|best fund|recommend|choose|decide)\b/i,
    keywords: ["compare", "which fund", "suit me", "difference", "recommend", "choose"],
    answer:
      "A simple rule of thumb: money you may need within a year belongs in the **Enhanced Cash Fund**; money with a three-year-plus horizon and a tolerance for market movement belongs in the **Global Balanced Fund**; US dollar liquidity belongs in the **USD Money Market Fund**. Try the three-question fund finder on our funds page, or speak to the team for a personal view. [Compare funds](/funds/compare)",
  },
  {
    id: "finder",
    patterns: /\b(fund finder|quiz|questionnaire|three questions|3 questions)\b/i,
    keywords: ["fund finder", "quiz", "questionnaire"],
    answer:
      "The fund finder is a three-question tool on our funds page. It asks when you might need the money, how you would react to a 10% fall, and which currency you need. It is educational, not a personal recommendation, and it gives you a starting point to discuss with the team. [Open the fund finder](/funds#finder)",
  },
  {
    id: "minimum",
    patterns: /\b(minimum|how much|afford|start with|entry|amount|bwp\s?\d+)\b/i,
    keywords: ["minimum", "how much", "start with", "afford", "amount", "bwp", "1000", "500"],
    answer:
      "A private client account can be opened from BWP 1,000. Minimums that apply to a specific fund or to institutional mandates are set out in each prospectus, and the client service team can confirm the amount for your situation. [Speak to us](/contact)",
  },
  {
    id: "start",
    patterns:
      /\b(start|open an account|apply|application|invest now|sign up|onboard|on-board|how do i invest|join)\b/i,
    keywords: ["start", "open", "apply", "application", "sign up", "onboard", "join"],
    answer:
      "To open an account: complete the individual or legal entity application form, attach the KYC documents, and email everything to info@kgoricapital.com. Our client service team verifies the documents and issues your account details. Existing investors can contribute or withdraw through the secure client portal. [Application forms and KYC](/funds#forms)",
  },
  {
    id: "onboarding-time",
    patterns: /\b(how long|turnaround|processing time|when will i hear|how soon)\b/i,
    keywords: ["how long", "turnaround", "processing time", "how soon"],
    answer:
      "Once we receive a complete application and verified KYC documents, our client service team confirms receipt and issues your account details. If anything is missing we will tell you exactly what is needed. For a timeline on your specific file, call +267 3915990. [Send us a message](/contact)",
  },
  {
    id: "kyc",
    patterns: /\b(kyc|documents|proof of address|requirements|paperwork|what do i need)\b/i,
    keywords: ["kyc", "documents", "proof of address", "requirements", "paperwork"],
    answer:
      "**Individuals** need: a certified ID or passport, proof of address less than three months old, and stamped proof of bank details.\n\n**Legal entities** need: certificate of incorporation, proof of address, stamped bank confirmation or a cancelled cheque, and a resolution to invest in a Kgori Capital unit trust.\n\n[Full checklist and forms](/funds#forms)",
  },
  {
    id: "forms",
    patterns: /\b(form|forms|download|pdf|brochure|template|application form)\b/i,
    keywords: ["form", "forms", "download", "pdf", "brochure"],
    answer:
      "Application forms, fact sheets, brochures and prospectuses are on our funds page. If you would prefer the documents by email, write to info@kgoricapital.com and the team will send the right pack for your situation. [Fund documents and forms](/funds#forms)",
  },
  {
    id: "fees",
    patterns: /\b(fee|fees|cost|charge|expense ratio|ter|commission|pricing)\b/i,
    keywords: ["fees", "fee", "cost", "charges", "expense ratio", "ter"],
    answer:
      "Fees are set out in each fund's prospectus, and we would rather show you the exact figures than quote from memory. The prospectuses are on our funds page, or the client service team can walk you through the total cost for your amount. [Prospectuses](/funds#documents) · [Talk to us](/contact)",
  },
  {
    id: "documents",
    patterns: /\b(fact ?sheet|prospectus|report|document|annual report|financial statement)\b/i,
    keywords: ["fact sheet", "prospectus", "documents", "report"],
    answer:
      "Fact sheets, brochures and prospectuses for each fund are published on the funds page, together with the latest reporting. [Fund documents](/funds#documents)",
  },
  {
    id: "performance",
    patterns: /\b(performance|return|yield|interest rate|how much.*earn|track record|benchmark)\b/i,
    keywords: ["performance", "return", "returns", "yield", "interest", "benchmark"],
    answer:
      "We publish monthly fact sheets with performance and fund positioning, and quarterly insights on markets and strategy. Rather than quote a number that may be out of date, here are the latest documents: [fact sheets and reports](/funds#documents). Past performance is not a reliable indicator of future results.",
  },
  {
    id: "risk",
    patterns: /\b(risk|safe|safety|volatil|capital guarantee|guarantee|loss|lose money)\b/i,
    keywords: ["risk", "safe", "guarantee", "volatility", "loss"],
    answer:
      "Risk is managed at three levels: the mandate (what a fund may hold), the portfolio (position sizing, diversification and liquidity) and the firm (independent compliance and governance). No unit trust guarantees capital: values can fall as well as rise, and each fund's risk profile is stated plainly before you invest. [How we invest](/investments/process)",
  },
  {
    id: "withdrawals",
    patterns: /\b(withdraw|redemption|redeem|access my money|liquid|lock.?in|penalt|exit|sell)\b/i,
    keywords: ["withdraw", "withdrawal", "redemption", "redeem", "liquid", "lock-in", "penalty"],
    answer:
      "There are no lock-in periods and no charges or penalties for withdrawing from our unit trusts. Redemptions are processed within 48 hours of receiving a valid instruction, either through the secure client portal or on a redemption form. [Funds and forms](/funds#forms)",
  },
  {
    id: "statements",
    patterns: /\b(statement|how often|monthly|valuation|balance)\b/i,
    keywords: ["statement", "statements", "monthly", "valuation"],
    answer:
      "Statements are issued monthly, within the first five working days of the new month, by email or post depending on your preference. Fact sheets and fund brochures are on our funds page, and you can view statements at any time in the secure client portal. [Fund documents](/funds#documents)",
  },
  {
    id: "portal",
    patterns: /\b(portal|login|log in|statement online|two.factor|2fa)\b/i,
    keywords: ["portal", "login", "password", "two-factor", "2fa"],
    answer:
      "The secure client portal lets you view portfolios, transact, download statements and update your details. It uses two-factor authentication and OTP verification. Open the portal: https://secure.kgoricapital.com/. If you have trouble signing in, the client service team can help on +267 3915990.",
  },
  {
    id: "contributions",
    patterns: /\b(contribution|top.?up|deposit|debit order|monthly payment|add money|pay in)\b/i,
    keywords: ["contribution", "top up", "deposit", "debit order", "add money"],
    answer:
      "You can add to an existing investment by transferring to your Kgori Capital account and sending proof of payment to info@kgoricapital.com, or by debit order where one is in place. The client service team will confirm the reference and cut-off times that apply to your fund. [Contact us](/contact)",
  },
  {
    id: "tax",
    patterns: /\b(tax|taxed|withholding|tax certificate)\b/i,
    keywords: ["tax", "taxed", "withholding", "tax certificate"],
    answer:
      "Gains from a unit trust are taxable. Kgori Capital pays any withholding tax due on your behalf and issues a tax certificate at filing time; amounts withheld appear on your transaction notes. For advice on your personal tax position, please speak to a registered tax practitioner.",
  },
  {
    id: "beneficiaries",
    patterns: /\b(beneficiar|nomination|joint account|minor|child|estate|deceased|inherit)\b/i,
    keywords: ["beneficiary", "joint", "minor", "child", "estate", "deceased"],
    answer:
      "Accounts can be opened in individual or joint names, and investments for a child are usually held in a parent's or guardian's name with a note of the intended beneficiary. The application form records your nomination. For an estate or a deceased investor, the team will explain the documents required. [Contact us](/contact)",
  },
  {
    id: "institutional",
    patterns: /\b(institution|pension fund|provident|retirement fund|scheme|mandate|segregated|rfp)\b/i,
    keywords: ["institution", "pension", "provident", "retirement", "mandate", "segregated"],
    answer:
      "We manage segregated mandates for pension funds, provident funds and retirement schemes across global balanced, domestic balanced, domestic equity, domestic fixed income and domestic money market strategies. Mandates begin with a conversation about your liabilities, horizon and risk budget. [Capabilities](/investments/capabilities)",
  },
  {
    id: "corporate",
    patterns: /\b(corporate|company|charity|trust|society|treasury|surplus)\b/i,
    keywords: ["corporate", "company", "charity", "trust", "treasury", "surplus"],
    answer:
      "Companies, charities and trusts invest with us for treasury management, surplus cash and longer-term reserves. A legal-entity account needs the incorporation documents, proof of address, stamped bank confirmation and a resolution to invest. [Legal entity checklist](/funds#forms)",
  },
  {
    id: "advisers",
    patterns: /\b(adviser|advisor|financial planner|intermediary|broker|partner|referral)\b/i,
    keywords: ["adviser", "advisor", "financial planner", "intermediary", "broker"],
    answer:
      "Financial planners and advisers place client money with us through the same unit trusts, with documentation and reporting designed for adviser oversight. Talk to the business development team about how we work with intermediaries. [Contact us](/contact)",
  },
  {
    id: "esg",
    patterns: /\b(esg|responsible|sustainab|stewardship|pri|environment|community|internship|press club)\b/i,
    keywords: ["esg", "responsible", "stewardship", "pri", "community", "internship"],
    answer:
      "We have been a signatory of the UN-supported Principles for Responsible Investment since 2012. ESG analysis is integrated into our research, and we vote and engage at the companies we own. Our citizenship work includes graduate internships and the Kgori Business Press Club. [Responsibility](/responsibility)",
  },
  {
    id: "philosophy",
    patterns: /\b(philosophy|approach|strategy|active|passive|how do you invest|research)\b/i,
    keywords: ["philosophy", "approach", "strategy", "active", "passive", "process"],
    answer:
      "We are active managers with a balanced focus on risk and reward. The premise is simple: fundamentals and valuations converge over time. We buy quality businesses at our estimate of intrinsic value, assess fixed income on the same basis, and size positions against risk, liquidity and correlation. [Our investment philosophy](/investments)",
  },
  {
    id: "capabilities",
    patterns: /\b(capabilit|specialist|domestic equity|domestic fixed|money market strategy)\b/i,
    keywords: ["capabilities", "specialist", "domestic equity", "fixed income"],
    answer:
      "We manage five specialist strategies: global balanced, domestic balanced, domestic equity, domestic fixed income and domestic money market, for pension funds, corporates, charities and private clients. [See the capabilities](/investments/capabilities)",
  },
  {
    id: "insights",
    patterns: /\b(insight|market watch|newsletter|research note|quarterly|article|blog)\b/i,
    keywords: ["insights", "market watch", "newsletter", "quarterly", "article"],
    answer:
      "Our insights library carries market watch notes, quarterly insights and longer investment pieces, and clients can subscribe to a monthly email. [Read the insights](/insights)",
  },
  {
    id: "contact",
    patterns:
      /\b(contact|phone|call|email|address|office|where are you|directions|hours|open|appointment|meet|speak|talk)\b/i,
    keywords: ["contact", "phone", "email", "address", "office", "directions", "hours"],
    answer: `You can reach us on ${company.phone} or ${company.phoneAlt}, or email ${company.email}. Our office is on the 1st Floor, Exponential Building, Plot 54351, CBD, Gaborone. [Contact page and directions](/contact)`,
  },
  {
    id: "complaint",
    patterns: /\b(complain|complaint|dispute|unhappy|escalate|ombudsman)\b/i,
    keywords: ["complaint", "complain", "dispute", "escalate"],
    answer:
      "We take complaints seriously and have a documented complaints handling process. Email info@kgoricapital.com with the details, or call +267 3915990 and ask for the compliance team. If we cannot resolve it, you may escalate to NBFIRA.",
  },
  {
    id: "fraud",
    patterns: /\b(fraud|scam|phishing|whatsapp|social media|suspicious|impersonat|fake)\b/i,
    keywords: ["fraud", "scam", "phishing", "whatsapp", "suspicious", "impersonation", "otp"],
    answer:
      "Kgori Capital does not conduct or solicit business through social media or instant messaging platforms, and we will never ask for your password or OTP by message. If you are unsure whether a request is genuine, call +267 3915990 before acting. [Contact us](/contact)",
  },
  {
    id: "privacy",
    patterns: /\b(privacy|gdpr|data protection|personal information|cookies)\b/i,
    keywords: ["privacy", "data protection", "personal information", "cookies"],
    answer:
      "Our privacy notice explains what personal information we collect, why we collect it and how long we keep it, including how messages to this assistant are handled. [Privacy notice](/legal/privacy)",
  },
  {
    id: "disclaimer",
    patterns: /\b(disclaimer|not advice|terms|legal|liability)\b/i,
    keywords: ["disclaimer", "terms", "legal", "advice"],
    answer:
      "Nothing on this website is financial advice. Unit trusts are collective investment schemes, their value can fall as well as rise, and past performance is not a reliable indicator of future results. Read the relevant prospectus and speak to an adviser before investing. [Disclaimer](/legal/disclaimer)",
  },
  {
    id: "advice",
    patterns: /\b(should i|advice|advise|financial adviser|personal recommendation)\b/i,
    keywords: ["should i", "advice", "advise", "recommendation"],
    answer:
      "I can explain our funds and process, but I cannot give personal financial advice, because that requires understanding your full circumstances. Our client team can talk you through the options, and we will always tell you if a product is not right for your goal. [Speak to a person](/contact)",
  },
  {
    id: "careers",
    patterns: /\b(career|job|vacanc|graduate|internship|apply for work|cv)\b/i,
    keywords: ["career", "job", "vacancy", "graduate", "internship", "cv"],
    answer:
      "We run a graduate internship programme and post openings as they arise. Send your CV and a short note to info@kgoricapital.com and the team will keep it on file. [About the firm](/about)",
  },
  {
    id: "media",
    patterns: /\b(media|press|journalist|interview|comment|spokesperson)\b/i,
    keywords: ["media", "press", "journalist", "interview"],
    answer:
      "For media enquiries, email info@kgoricapital.com with your deadline and the subject, and the team will route it to the right person. [Contact us](/contact)",
  },
  {
    id: "language",
    patterns: /\b(language|setswana|english|translate|translation)\b/i,
    keywords: ["language", "setswana", "english"],
    answer:
      "You can switch the interface between English and Setswana using the EN / SN control in the header. Fund documents and legal notices are published in English.",
  },
  {
    id: "thanks",
    patterns: /\b(thanks|thank you|great|helpful|cheers|perfect|bye|goodbye)\b/i,
    keywords: ["thanks", "thank you", "bye", "goodbye"],
    answer:
      "You are welcome. If you would like a person to take it from here, the team is on +267 3915990 or at info@kgoricapital.com. [Contact us](/contact)",
  },
];

/** Kept for the opening suggestions in the chat panel. */
export const assistantChips = [
  "Which fund suits me?",
  "How do I start investing?",
  "Can I withdraw at any time?",
  "What documents do I need?",
];

const fallback =
  "I can help with our funds, how to invest, withdrawals, statements, fees, documents, regulation and our investment approach. For anything more specific, or a personal recommendation, the client service team is best placed to help on +267 3915990 or info@kgoricapital.com. [Contact us](/contact)";

function normalize(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function answerQuestion(input: string, pathname = "/"): string {
  const text = input.trim();
  if (!text) return fallback;

  const haystack = normalize(text);
  let best: { entry: Entry; score: number } | null = null;

  for (const entry of entries) {
    let score = 0;
    if (entry.patterns.test(text)) score += 6;
    for (const keyword of entry.keywords) {
      if (haystack.includes(normalize(keyword))) {
        score += keyword.includes(" ") ? 4 : 2;
      }
    }
    if (score > 0 && (!best || score > best.score)) best = { entry, score };
  }

  if (best && best.score >= 4) return best.entry.answer;

  if (pathname.startsWith("/funds")) {
    return "I did not quite catch that. I can explain the difference between the Enhanced Cash and Global Balanced funds, the documents needed to apply, or how withdrawals work. You can also [speak to the team](/contact).";
  }
  return fallback;
}

export const systemPrompt = `You are the Kgori Capital website assistant. Kgori Capital is an independent, Botswana-owned investment manager founded in 2012 in Gaborone, wholly owned by its management and staff, and licensed by NBFIRA as an asset manager.

Funds:
- Kgori Capital Enhanced Cash Fund: low risk (2/5), 100% Botswana money market securities, capital preservation, no lock-in, withdrawals processed within 48 hours.
- Kgori Capital Global Balanced Fund: moderate risk (3/5), multi-asset domestic and global (equities, bonds, currencies, alternatives, commodities), horizon 3+ years.
- Kgori Capital USD Money Market Fund: low risk, US dollar short-dated instruments.

Facts: management team led by MD Sharifa Noor; board chaired by Motsile Sibanda; more than 100 years of combined investment experience across the team, with members averaging over 15 years managing institutional funds in Botswana; UNPRI signatory since 2012; statements monthly within 5 working days; no withdrawal penalties; private client accounts from BWP 1,000; fees and fund minimums are in each prospectus; five specialist strategies (global balanced, domestic balanced, domestic equity, domestic fixed income, domestic money market); office at 1st Floor, Exponential Building, Plot 54351, CBD, Gaborone; phone +267 3915990 and +267 3992400; email info@kgoricapital.com; client portal at https://secure.kgoricapital.com/ with two-factor authentication.

Rules:
- Be concise, warm and precise. Two to four short sentences or a short list. British/Botswana English spelling.
- Reply in the language the user writes in. If they write in Setswana, answer in Setswana.
- Never invent performance figures, fees, minimums, guarantees or dates. Point to the fact sheet or prospectus instead.
- You are not a financial adviser: do not give personal recommendations; explain options and offer to connect the user with the client service team.
- Never ask for passwords, OTPs or bank details. Note that Kgori Capital does not conduct business through social media or instant messaging.
- Use markdown links to site pages where useful, e.g. [Compare funds](/funds/compare), [Contact us](/contact), [Investment philosophy](/investments), [Privacy notice](/legal/privacy).
- If asked something unrelated to Kgori Capital or investing, say briefly that you focus on Kgori Capital and offer the contact details.`;
