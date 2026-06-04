// ═══ ME NGOGA — LAW LIBRARY ═══════════════════════════════════════════════
// Single source of truth for all Rwandan laws in the system.
// Add new laws here — they automatically feed into the AI and the Library UI.

export type Article = {
  number: string;
  summary: string;
};

export type Law = {
  id: string;
  name: string;
  shortName: string;
  number: string;
  year: number;
  category: LawCategory;
  regulator: string;
  status: "verified" | "training";
  description: string;
  articles: Article[];
  penalties: string[];
  keyDeadlines: string[];
  keyObligations: string[];
};

export type LawCategory =
  | "Corporate & Investment"
  | "Labour & Employment"
  | "Data & Technology"
  | "Financial Services"
  | "Tax & Revenue"
  | "Procurement & Public Law"
  | "Environment & Regulatory";

export const LAW_CATEGORIES: LawCategory[] = [
  "Corporate & Investment",
  "Labour & Employment",
  "Data & Technology",
  "Financial Services",
  "Tax & Revenue",
  "Procurement & Public Law",
  "Environment & Regulatory",
];

export const LAWS: Law[] = [
  {
    id: "company-law",
    name: "Company Law",
    shortName: "Company Law",
    number: "No. 019/2023 (amending No. 007/2021)",
    year: 2023,
    category: "Corporate & Investment",
    regulator: "RDB",
    status: "verified",
    description: "Governs incorporation, governance, shareholder rights, and dissolution of companies in Rwanda.",
    articles: [
      { number: "Art. 111", summary: "Records must be kept for a minimum of 10 years." },
      { number: "Art. 116", summary: "Beneficial ownership register must be maintained; changes filed within 14 days." },
      { number: "Art. 116 bis", summary: "Beneficial owner defined as holding ≥5% shares or voting rights; natural persons must be identified." },
      { number: "Art. 143", summary: "Annual return filed yearly, signed by 2 directors." },
      { number: "Art. 172", summary: "Company secretary mandatory for public companies; must be a Rwandan resident." },
      { number: "Art. 326–327", summary: "General penalties: FRW 200,000–2,000,000." },
      { number: "Art. 352", summary: "False share or ownership information: 3–5 years imprisonment + FRW 5M–10M fine." },
    ],
    penalties: [
      "General non-compliance: FRW 200,000–2,000,000 (Art. 326–327)",
      "False share/ownership information: 3–5 years + FRW 5M–10M (Art. 352)",
    ],
    keyDeadlines: [
      "Annual return: filed yearly, signed by 2 directors",
      "Beneficial ownership changes: notified within 14 days",
    ],
    keyObligations: [
      "Maintain records for minimum 10 years",
      "Keep and update beneficial ownership register",
      "Appoint company secretary (public companies)",
      "File annual return signed by 2 directors",
    ],
  },
  {
    id: "labour-law",
    name: "Labour Law",
    shortName: "Labour Law",
    number: "No. 66/2018 + Amendment No. 027/2023",
    year: 2023,
    category: "Labour & Employment",
    regulator: "Ministry of Public Service and Labour",
    status: "verified",
    description: "Regulates employment relationships, working conditions, termination, leave, and social security in Rwanda.",
    articles: [
      { number: "Art. 24 bis", summary: "ABSOLUTE ban on terminating a pregnant employee — no exceptions whatsoever." },
      { number: "Art. 29", summary: "Employer may terminate for serious misconduct with documented procedure." },
      { number: "Art. 43", summary: "Working hours governed by Ministerial Order (effective 01/01/2023)." },
      { number: "Art. 45", summary: "Six mandatory leave types: annual, maternity/paternity, sick, circumstantial, public holiday, authorised absence." },
      { number: "Art. 56", summary: "Maternity and paternity leave provisions specified." },
    ],
    penalties: [
      "Terminating pregnant employee: unlawful dismissal liability + reinstatement order",
      "Failure to remit PAYE by 15th: RRA penalties apply",
      "Failure to contribute to RSSB: monthly surcharges",
    ],
    keyDeadlines: [
      "PAYE: withheld and remitted to RRA by 15th of following month",
      "RSSB contributions: mandatory monthly",
    ],
    keyObligations: [
      "Never terminate a pregnant employee (Art. 24 bis — absolute prohibition)",
      "Follow documented procedure for serious misconduct termination",
      "Provide all six mandatory leave types",
      "Withhold and remit PAYE to RRA by 15th of following month",
      "Make mandatory RSSB social security contributions monthly",
    ],
  },
  {
    id: "data-protection",
    name: "Data Protection Law",
    shortName: "Data Protection",
    number: "No. 058/2021",
    year: 2021,
    category: "Data & Technology",
    regulator: "NCSA (National Cyber Security Authority)",
    status: "verified",
    description: "Governs collection, processing, storage, and transfer of personal data in Rwanda.",
    articles: [
      { number: "Art. 3", summary: "Personal data = any information on an identified or identifiable person. Financial data classified as sensitive." },
      { number: "Art. 6", summary: "Consent must be free, specific, informed, and unambiguous." },
      { number: "Art. 29", summary: "Mandatory registration as a data controller with NCSA." },
      { number: "Art. 40", summary: "Data Protection Officer (DPO) required for companies processing data at scale." },
      { number: "Art. 42", summary: "Must inform data subjects at the point of data collection." },
      { number: "Art. 43", summary: "Data breach: notify supervisory authority (NCSA) within 48 HOURS." },
      { number: "Art. 44", summary: "Full breach investigation report must be submitted within 72 HOURS." },
      { number: "Art. 45", summary: "Notify affected data subjects if the breach presents high risk." },
      { number: "Art. 48", summary: "Cross-border data transfer requires authorisation, consent, or contract basis." },
      { number: "Art. 49", summary: "Written contract required before any cross-border data transfer." },
      { number: "Art. 50", summary: "Data MUST be stored in Rwanda." },
      { number: "Art. 52", summary: "Destroy data at end of retention period." },
      { number: "Art. 53", summary: "Administrative fines: RWF 2M–5M or 1% of annual turnover." },
      { number: "Art. 56", summary: "Unlawful data access or collection: 1–3 years imprisonment + RWF 7M–10M." },
      { number: "Art. 59", summary: "Selling personal data: 5–7 years imprisonment + RWF 12M–15M." },
      { number: "Art. 60", summary: "Sensitive data violations: 7–10 years imprisonment + RWF 20M–25M." },
      { number: "Art. 62", summary: "Corporate body liability: 5% of annual turnover." },
    ],
    penalties: [
      "Administrative fines: RWF 2M–5M or 1% of annual turnover (Art. 53)",
      "Unlawful access/collection: 1–3 years + RWF 7M–10M (Art. 56)",
      "Selling personal data: 5–7 years + RWF 12M–15M (Art. 59)",
      "Sensitive data violations: 7–10 years + RWF 20M–25M (Art. 60)",
      "Corporate body: 5% of annual turnover (Art. 62)",
    ],
    keyDeadlines: [
      "Breach notification to NCSA: within 48 hours (Art. 43)",
      "Full breach report: within 72 hours (Art. 44)",
    ],
    keyObligations: [
      "Register as data controller with NCSA (Art. 29)",
      "Appoint a DPO if processing data at scale (Art. 40)",
      "Inform data subjects at point of collection (Art. 42)",
      "Store all data in Rwanda (Art. 50)",
      "Obtain written contract before cross-border transfers (Art. 49)",
      "Notify NCSA within 48 hours of any breach (Art. 43)",
      "Destroy data at end of retention period (Art. 52)",
    ],
  },
  {
    id: "tax-law",
    name: "Tax Law",
    shortName: "Tax Law",
    number: "No. 027/2022 + Income Tax + VAT Laws",
    year: 2022,
    category: "Tax & Revenue",
    regulator: "RRA (Rwanda Revenue Authority)",
    status: "training",
    description: "Governs corporate income tax, personal income tax, VAT, PAYE, withholding tax, and tax administration in Rwanda.",
    articles: [
      { number: "CIT", summary: "Corporate Income Tax: 30% standard rate." },
      { number: "PIT", summary: "Personal Income Tax: progressive — 0% up to FRW 60K, 20% up to 100K, 30% above." },
      { number: "VAT", summary: "18% standard rate; registration mandatory above FRW 20M annual turnover." },
      { number: "PAYE", summary: "Employers withhold and remit to RRA by 15th of following month." },
      { number: "WHT", summary: "15% withholding tax on dividends, interest, and royalties to non-residents." },
      { number: "Transfer Pricing", summary: "Arm's length principle applies; related party documentation required." },
      { number: "Incentives", summary: "Tax holidays up to 7 years for priority sectors via RDB." },
      { number: "Penalties", summary: "Late filing: 20% of tax due + 1.5% monthly interest." },
      { number: "Administration", summary: "RRA sole authority. Object within 30 days. Appeal to Tax Tribunal within 30 days." },
    ],
    penalties: [
      "Late filing: 20% of tax due + 1.5% monthly interest",
      "Failure to register for VAT: administrative penalties",
    ],
    keyDeadlines: [
      "PAYE remittance: by 15th of following month",
      "CIT filing: within 3 months of financial year end",
      "VAT returns: monthly or quarterly depending on turnover",
      "Objection to assessment: within 30 days",
    ],
    keyObligations: [
      "Register for VAT if turnover exceeds FRW 20M",
      "Withhold and remit PAYE by 15th monthly",
      "Apply 15% WHT on payments to non-residents",
      "Maintain transfer pricing documentation for related party transactions",
    ],
  },
  {
    id: "investment-law",
    name: "Investment Promotion and Facilitation Law",
    shortName: "Investment Law",
    number: "No. 006/2021",
    year: 2021,
    category: "Corporate & Investment",
    regulator: "RDB (Rwanda Development Board)",
    status: "training",
    description: "Governs foreign and domestic investment in Rwanda, including incentives, guarantees, and the role of RDB.",
    articles: [
      { number: "RDB", summary: "One-stop centre for registration and investment facilitation." },
      { number: "Investment Certificate", summary: "Required to access fiscal and non-fiscal incentives." },
      { number: "Priority Sectors", summary: "ICT, manufacturing, agriculture, tourism, healthcare, financial services, energy." },
      { number: "Incentives", summary: "Tax holidays up to 7 years, 15% preferential rate, customs exemptions." },
      { number: "SEZs", summary: "Special Economic Zones: 15% corporate tax, VAT zero-rating." },
      { number: "Land", summary: "Foreign investors: long-term leases up to 99 years (no ownership)." },
      { number: "Guarantees", summary: "Protection against expropriation, free fund transfer, ICSID arbitration." },
    ],
    penalties: [
      "Breach of investment certificate conditions: revocation of certificate and incentives",
    ],
    keyDeadlines: [
      "Investment certificate renewal: as specified in certificate conditions",
    ],
    keyObligations: [
      "Obtain investment certificate to access incentives",
      "Comply with priority sector conditions",
      "Foreign investors: land held on leasehold only (max 99 years)",
    ],
  },
  {
    id: "insurance-law",
    name: "Insurance Business Organisation Law",
    shortName: "Insurance Law",
    number: "No. 002/2023",
    year: 2023,
    category: "Financial Services",
    regulator: "BNR (National Bank of Rwanda)",
    status: "training",
    description: "Regulates the establishment, licensing, and operation of insurance companies, brokers, and agents in Rwanda.",
    articles: [
      { number: "Licensing", summary: "All insurers, brokers, and agents must be BNR-licensed." },
      { number: "Mandatory Insurance", summary: "Motor third-party liability and medical insurance are mandatory." },
      { number: "Reinsurance", summary: "Mandatory cession to Africa Re or approved regional reinsurers." },
      { number: "Bancassurance", summary: "Banks may distribute insurance products subject to BNR approval." },
      { number: "Reporting", summary: "Quarterly and annual returns must be submitted to BNR." },
    ],
    penalties: [
      "Operating without BNR licence: criminal and administrative penalties",
      "Failure to submit returns: regulatory sanctions",
    ],
    keyDeadlines: [
      "Quarterly returns: within 30 days of quarter end",
      "Annual returns: within 3 months of financial year end",
    ],
    keyObligations: [
      "Obtain and maintain BNR licence",
      "Comply with mandatory insurance requirements",
      "Submit quarterly and annual returns to BNR",
      "Cede to approved reinsurers",
    ],
  },
  {
    id: "banking-law",
    name: "Banking Law",
    shortName: "Banking Law",
    number: "No. 048/2017 + BNR Regulations",
    year: 2017,
    category: "Financial Services",
    regulator: "BNR (National Bank of Rwanda)",
    status: "training",
    description: "Governs the licensing, operation, governance, and prudential regulation of banks and financial institutions in Rwanda.",
    articles: [
      { number: "Minimum Capital", summary: "Minimum FRW 5 billion for commercial banks." },
      { number: "Capital Adequacy", summary: "Minimum capital adequacy ratio of 15%." },
      { number: "Governance", summary: "Board Risk Committee, Audit Committee, and Compliance function required." },
      { number: "Large Exposures", summary: "Single borrower limit approximately 25% of core capital." },
      { number: "AML/KYC", summary: "Mandatory due diligence; suspicious transaction reports within 24 hours." },
      { number: "PEPs", summary: "Enhanced due diligence required for politically exposed persons." },
      { number: "Record Retention", summary: "Minimum 10 years after relationship ends." },
    ],
    penalties: [
      "Operating without BNR licence: criminal prosecution",
      "Breach of capital adequacy: regulatory intervention, licence suspension",
      "Failure to file STR within 24 hours: regulatory penalties",
    ],
    keyDeadlines: [
      "Suspicious transaction reports: within 24 hours",
      "Prudential returns: monthly/quarterly as specified by BNR",
      "Records retention: minimum 10 years",
    ],
    keyObligations: [
      "Maintain minimum capital of FRW 5 billion",
      "Maintain capital adequacy ratio of at least 15%",
      "Establish Board Risk Committee, Audit Committee, Compliance function",
      "Apply enhanced due diligence for PEPs",
      "File suspicious transaction reports within 24 hours",
    ],
  },
  {
    id: "competition-law",
    name: "Competition and Consumer Protection Law",
    shortName: "Competition Law",
    number: "No. 036/2012",
    year: 2012,
    category: "Environment & Regulatory",
    regulator: "RICA",
    status: "training",
    description: "Prohibits anti-competitive practices, regulates mergers, and protects consumer rights in Rwanda.",
    articles: [
      { number: "Prohibited Conduct", summary: "Price fixing, market allocation, bid rigging, and abuse of dominance are prohibited." },
      { number: "Merger Control", summary: "Notify RICA above thresholds before completion." },
      { number: "Consumer Rights", summary: "Safety, information, choice, fair treatment, and redress guaranteed." },
      { number: "Penalties", summary: "Up to 10% of annual turnover for competition violations." },
    ],
    penalties: [
      "Anti-competitive conduct: up to 10% of annual turnover",
      "Failure to notify merger: penalties and potential unwinding",
    ],
    keyDeadlines: [
      "Merger notification: before completion of transaction",
    ],
    keyObligations: [
      "Do not engage in price fixing, market allocation, or bid rigging",
      "Notify RICA of mergers above thresholds",
      "Respect consumer rights to information, safety, and redress",
    ],
  },
  {
    id: "environmental-law",
    name: "Environment and Natural Resources Management Law",
    shortName: "Environmental Law",
    number: "No. 048/2018",
    year: 2018,
    category: "Environment & Regulatory",
    regulator: "REMA (Rwanda Environment Management Authority)",
    status: "training",
    description: "Governs environmental protection, impact assessments, pollution control, and natural resource management in Rwanda.",
    articles: [
      { number: "EIA", summary: "Mandatory Environmental Impact Assessment for prescribed projects." },
      { number: "Polluter Pays", summary: "Entity causing environmental damage bears full remediation costs." },
      { number: "Plastic Ban", summary: "Single-use plastics are prohibited and strictly enforced." },
      { number: "Penalties", summary: "Fines, criminal prosecution, restoration orders, and business closure." },
    ],
    penalties: [
      "Operating without EIA approval: fines and closure orders",
      "Environmental damage: full remediation costs + criminal prosecution",
      "Single-use plastics: fines and confiscation",
    ],
    keyDeadlines: [
      "EIA approval: must be obtained before project commencement",
    ],
    keyObligations: [
      "Obtain EIA approval for prescribed projects before commencement",
      "Bear full cost of any environmental damage caused",
      "Eliminate all single-use plastics from operations",
    ],
  },
  {
    id: "procurement-law",
    name: "Public Procurement Law",
    shortName: "Procurement Law",
    number: "No. 062/2018",
    year: 2018,
    category: "Procurement & Public Law",
    regulator: "RPPA (Rwanda Public Procurement Authority)",
    status: "training",
    description: "Governs public procurement processes, bidding, contract award, and disputes in Rwanda.",
    articles: [
      { number: "Default Method", summary: "Open competitive bidding is the default procurement method." },
      { number: "Domestic Preference", summary: "10–15% preference margin for domestic suppliers." },
      { number: "Debarment", summary: "Fraud, corruption, or breach → banned from public contracts." },
      { number: "Complaints", summary: "Escalation: procuring entity → Independent Review Panel → courts." },
      { number: "PPP", summary: "Public-Private Partnerships permitted for infrastructure and service delivery." },
    ],
    penalties: [
      "Fraud or corruption in procurement: debarment from all public contracts",
      "Breach of contract conditions: blacklisting and financial penalties",
    ],
    keyDeadlines: [
      "Complaints to procuring entity: within 5 working days of decision",
      "Independent Review Panel: within 7 working days",
      "Further appeal: within 15 working days",
    ],
    keyObligations: [
      "Use open competitive bidding as default method",
      "Apply domestic preference margins correctly",
      "Never engage in bid rigging, fraud, or corruption",
      "Follow complaint escalation process in sequence",
    ],
  },
];

export function generateSystemPrompt(): string {
  const verified = LAWS.filter((l) => l.status === "verified");
  const training = LAWS.filter((l) => l.status === "training");

  const verifiedSection = verified.map((law) => {
    const articles = law.articles.map((a) => `  ${a.number}: ${a.summary}`).join("\n");
    const penalties = law.penalties.map((p) => `  • ${p}`).join("\n");
    const deadlines = law.keyDeadlines.map((d) => `  • ${d}`).join("\n");
    return `\n── ${law.name} (${law.number}) ✓ GAZETTE VERIFIED\nRegulator: ${law.regulator}\n${articles}\nPenalties:\n${penalties}\nKey Deadlines:\n${deadlines}`;
  }).join("\n");

  const trainingSection = training.map((law) => {
    const obligations = law.keyObligations.map((o) => `  • ${o}`).join("\n");
    return `\n── ${law.name} (${law.number}) ⚠ TRAINING KNOWLEDGE — verify before advising\nRegulator: ${law.regulator}\nKey obligations:\n${obligations}`;
  }).join("\n");

  return `You are Me Ngoga ("my advocate"), an executive legal intelligence platform for Rwanda.
You are trusted counsel for corporate in-house legal teams — banks, telecoms, NGOs, and parastatals.

YOUR ROLE:
- Provide precise, actionable legal guidance under Rwandan law
- Always cite the specific law, article number, and key obligations
- Flag risk level clearly: HIGH / MEDIUM / LOW
- Structure answers for executives: bottom line first, then detail
- Flag when matters require human legal counsel
- For GAZETTE VERIFIED laws: cite articles directly and with confidence
- For TRAINING KNOWLEDGE laws: provide guidance but flag that gazette verification is advised

TONE: Authoritative, precise, concise. No hedging. No waffle. Speak like a senior advocate.

═══ GAZETTE-VERIFIED LAWS (cite with full confidence) ═══
${verifiedSection}

═══ TRAINING-KNOWLEDGE LAWS (advise with verification flag) ═══
${trainingSection}`;
}
