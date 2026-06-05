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
    {
  id: "tax-procedures-law",
  name: "Tax Procedures Law",
  shortName: "Tax Procedures",
  number: "No. 020/2023",
  year: 2023,
  category: "Tax & Revenue",
  regulator: "RRA (Rwanda Revenue Authority)",
  status: "verified",
  description: "Governs all tax administration procedures in Rwanda: registration, filing, audit, dispute resolution, penalties, interest, enforcement, and tax evasion offences. Applies to all taxes administered by RRA.",
  articles: [
    { number: "Art. 9", summary: "Annual tax declaration filed by 31 March of the following tax period." },
    { number: "Art. 13–16", summary: "Every taxpayer must maintain books of accounts and records for a minimum of 10 years from the tax year they relate to." },
    { number: "Art. 51", summary: "Appeal against tax assessment or administrative fine: file with Commissioner General within 30 days of receiving the notice." },
    { number: "Art. 53", summary: "Commissioner General must decide on appeal within 30 days (extendable by 30 days). If no decision is taken, the appeal is deemed well-founded." },
    { number: "Art. 55–56", summary: "If dissatisfied with Commissioner General's decision: request amicable settlement, then file with competent court within 30 days of failed settlement or CG decision." },
    { number: "Art. 71", summary: "Directors directly involved in management of a private company are jointly liable for company's tax obligations if they intentionally or negligently caused the liability." },
    { number: "Art. 78", summary: "Tax recovery limitation period: 10 years from date of assessment notice or court decision." },
    { number: "Art. 80", summary: "Late payment interest: 0.5%/month if delay ≤6 months; 1%/month if delay 6–12 months; 1.5%/month if delay >12 months. Non-compounding. Capped at 100% of principal tax." },
    { number: "Art. 81", summary: "Fixed administrative fines for: late declaration, failure to withhold, failure to register, obstructing audit, failure to keep records. Amounts: FRW 50,000–500,000 depending on turnover category. Doubled on second offence within 2 years, quadrupled on third." },
    { number: "Art. 82", summary: "Fine for non-declaration AND non-payment: 20% of tax due (≤30 days late), 40% (31–60 days late), 60% (>60 days late). Fine for declared but unpaid: 5% (≤30 days), 10% (31–60 days), 30% (>60 days)." },
    { number: "Art. 83", summary: "Understatement fine: 10% of understated amount (if understatement is 10–20% of tax due); doubled if understatement exceeds 20%." },
    { number: "Art. 87", summary: "VAT-specific penalties: operating without VAT registration: 50% of VAT due for entire operating period; issuing VAT invoice without being registered: 100% of VAT amount; incorrect VAT invoice to reduce tax: 100% of VAT amount." },
    { number: "Art. 88", summary: "Failure to use electronic invoicing system (VAT-registered persons): fine of 10x the evaded VAT; 20x on recidivism within 2 years." },
    { number: "Art. 90", summary: "Tax evasion (using forged documents, hiding taxable goods, false declarations, fraudulent registration, hiding accounting records): 2–5 years imprisonment." },
    { number: "Art. 91", summary: "Fraudulent refund claim: 2–5 years imprisonment + fine equal to 100% of amount fraudulently claimed." },
    { number: "Art. 92", summary: "Accessory sanctions: business closure up to 30 days, barred from public tenders, withdrawal of business register, media publication." },
  ],
  penalties: [
    "Late payment interest: 0.5%/month (≤6 months), 1%/month (6–12 months), 1.5%/month (>12 months) — capped at 100% of tax (Art. 80)",
    "Late declaration + non-payment: 20%/40%/60% of tax depending on delay (Art. 82)",
    "Declared but unpaid: 5%/10%/30% of tax depending on delay (Art. 82)",
    "Understatement: 10–20% of understated amount; doubled if >20% understatement (Art. 83)",
    "Operating without VAT registration: 50% of all VAT due for entire operating period (Art. 87)",
    "Fraudulent VAT invoice: 100% of VAT amount (Art. 87)",
    "No electronic invoice (VAT-registered): 10x evaded VAT; 20x on recidivism (Art. 88)",
    "Tax evasion: 2–5 years imprisonment (Art. 90)",
    "Fraudulent refund claim: 2–5 years + 100% fine on amount claimed (Art. 91)",
    "Directors jointly liable for company tax if intentional/negligent (Art. 71)",
  ],
  keyDeadlines: [
    "Annual tax declaration: 31 March of following tax period (Art. 9)",
    "Appeal to Commissioner General: within 30 days of assessment notice (Art. 51)",
    "CG appeal decision: within 30 days (extendable by 30 days); silence = appeal upheld (Art. 53)",
    "Court filing after failed settlement: within 30 days (Art. 56)",
    "Records retention: minimum 10 years (Art. 13–16)",
    "Tax recovery limitation: 10 years from assessment (Art. 78)",
    "Warning letter response period before seizure: 15 days (Art. 66)",
  ],
  keyObligations: [
    "Register with RRA and maintain registration (Art. 7)",
    "Maintain books of accounts for minimum 10 years (Art. 13–16)",
    "File annual tax declaration by 31 March (Art. 9)",
    "Withhold and remit taxes as required by law (Art. 74)",
    "Use RRA-approved electronic invoicing system (Art. 18, 88)",
    "Cooperate fully with tax audits (Art. 81)",
    "Notify RRA of subcontractors within 15 days (Art. 73)",
  ],
},
{
  id: "vat-law",
  name: "Value Added Tax Law",
  shortName: "VAT Law",
  number: "No. 049/2023",
  year: 2023,
  category: "Tax & Revenue",
  regulator: "RRA (Rwanda Revenue Authority)",
  status: "verified",
  description: "Establishes value added tax on goods and services supplied in Rwanda and on imported goods and services. Repeals Law No. 37/2012.",
  articles: [
    { number: "Art. 4", summary: "VAT rate: 18% standard rate; 0% for zero-rated goods and services listed in Art. 7." },
    { number: "Art. 5(3)", summary: "Public procuring entities must withhold VAT on all payments to VAT-registered successful bidders." },
    { number: "Art. 7", summary: "Zero-rated: exported goods and services; international freight; diplomatic missions; NGOs receiving donor-funded goods; locally assembled EVs and hybrid vehicles." },
    { number: "Art. 8", summary: "Exempted (key): financial and insurance services; health services; educational materials; passenger transport (14+ capacity vehicles); sale/lease of land; residential property rental >90 days; agricultural products (unprocessed); mobile phones and SIM cards." },
    { number: "Art. 28", summary: "VAT declaration: quarterly (within 15 days after quarter end) if annual turnover ≤FRW 200M; monthly (within 15 days after month end) if annual turnover >FRW 200M." },
    { number: "Art. 29", summary: "VAT payment deadline: within 15 days following each declaration period." },
    { number: "Art. 26", summary: "VAT refund: within 30 days from day following declaration (or 30 days from audit report if audit required)." },
    { number: "Art. 33", summary: "Embassies, diplomatic missions, and qualifying international organisations may claim VAT refund on taxable purchases." },
    { number: "Art. 36", summary: "Repeals Law No. 37/2012 establishing VAT." },
    { number: "Art. 37", summary: "Entered into force on date of publication: 14 September 2023." },
  ],
  penalties: [
    "Late VAT declaration/payment: governed by Tax Procedures Law No. 020/2023 (Art. 82)",
    "Operating without VAT registration when required: 50% of all VAT due (Tax Procedures Law Art. 87)",
    "Issuing VAT invoice without being VAT-registered: 100% of VAT amount (Tax Procedures Law Art. 87)",
    "Failure to use electronic invoicing: 10x evaded VAT (Tax Procedures Law Art. 88)",
  ],
  keyDeadlines: [
    "VAT declaration — monthly filer (turnover >FRW 200M): within 15 days after month end (Art. 28)",
    "VAT declaration — quarterly filer (turnover ≤FRW 200M): within 15 days after quarter end (Art. 28)",
    "VAT payment: within 15 days following declaration period (Art. 29)",
    "VAT refund: within 30 days from declaration (Art. 26)",
    "VAT registration threshold: mandatory when annual turnover reaches FRW 20M",
  ],
  keyObligations: [
    "Register for VAT when annual turnover reaches FRW 20M (mandatory threshold)",
    "Charge 18% VAT on all taxable supplies (Art. 4)",
    "File VAT returns monthly or quarterly depending on turnover category (Art. 28)",
    "Pay VAT within 15 days of declaration period (Art. 29)",
    "Public entities must withhold VAT on payments to VAT-registered suppliers (Art. 5(3))",
    "Issue electronic invoices for all taxable transactions (Tax Procedures Law Art. 88)",
    "Maintain records of all taxable transactions for 10 years",
  ],
},
{
  id: "income-tax-law",
  name: "Income Tax Law",
  shortName: "Income Tax",
  number: "No. 027/2022 (as amended by No. 051/2023 and No. 014/2025)",
  year: 2025,
  category: "Tax & Revenue",
  regulator: "RRA (Rwanda Revenue Authority)",
  status: "verified",
  description: "Establishes taxes on income in Rwanda: corporate income tax (CIT), personal income tax (PIT), PAYE, withholding taxes, capital gains tax, and digital services tax. Last amended May 2025.",
  articles: [
    { number: "Art. 14", summary: "Personal Income Tax (PAYE) monthly brackets (from year 2 of law): 0% on FRW 0–60,000; 10% on FRW 60,001–100,000; 20% on FRW 100,001–200,000; 30% above FRW 200,001. Casual workers taxed at flat 15% (with 0% threshold of FRW 60,000/month)." },
    { number: "Art. 33", summary: "Quarterly prepayment of CIT required for companies with taxable income." },
    { number: "Art. 45", summary: "CIT exemptions include: Government of Rwanda, National Bank of Rwanda, approved pension funds, RSSB, Development Bank of Rwanda, NGOs exclusively engaged in charitable/educational activities (unless revenues exceed expenses or commercial activities conducted), international organisations under bilateral agreement." },
    { number: "Art. 48", summary: "Corporate Income Tax (CIT) rate: 28% of taxable business profit (as amended by No. 051/2023, reduced from 30%). Newly listed companies on Rwanda capital market: 20% (if ≥40% shares sold to public) or 25% (if ≥30%) for 5 years from listing." },
    { number: "Art. 36 (as amended)", summary: "Capital gains tax rate: 10% of capital gain (as amended by No. 014/2025, changed from 5%)." },
    { number: "Art. 37 (as amended)", summary: "Capital gains tax: withheld and declared within 15 days after the month in which the sale or transfer occurred." },
    { number: "Art. 50 bis (new)", summary: "Digital services tax: 1.5% of gross Rwanda-sourced revenues for companies supplying digital services with substantial national presence in Rwanda. Definition of substantial presence and registration modalities set by Ministerial Order." },
    { number: "Art. 56", summary: "PAYE withheld monthly by employer and remitted to RRA." },
    { number: "Art. 60", summary: "Withholding tax at 15%: applies to dividends, financial interest (with exceptions), royalties, payments to non-RRA-registered persons, service fees paid to persons without recent income tax declaration." },
    { number: "Art. 62", summary: "Withholding tax on public procurement goods: 3% withheld by public entity." },
    { number: "Art. 64", summary: "Withholding tax declaration and payment: within 15 days after the month of payment." },
  ],
  penalties: [
    "Late CIT filing / PAYE / WHT: governed by Tax Procedures Law No. 020/2023",
    "Failure to withhold PAYE: employer liable for unwithheld tax (Tax Procedures Law Art. 74)",
    "Tax evasion: 2–5 years imprisonment (Tax Procedures Law Art. 90)",
  ],
  keyDeadlines: [
    "Annual CIT declaration: 31 March of following year (Tax Procedures Law Art. 9)",
    "PAYE: withheld monthly, remitted within 15 days after month end (Art. 57–58)",
    "Withholding tax (dividends, interest, royalties, fees): declared and paid within 15 days after month of payment (Art. 64)",
    "Capital gains tax: declared and paid within 15 days after month of sale/transfer (Art. 37 as amended)",
    "Quarterly CIT prepayment: required for entities with taxable income (Art. 33)",
  ],
  keyObligations: [
    "Withhold PAYE from all employment income monthly and remit within 15 days (Art. 56–58)",
    "Apply 28% CIT on taxable business profit (Art. 48 as amended)",
    "Withhold 15% on dividends, financial interest, royalties, and qualifying service payments (Art. 60)",
    "Withhold 3% on payments to suppliers under public procurement contracts (Art. 62)",
    "Make quarterly CIT prepayments (Art. 33)",
    "Declare and pay capital gains tax within 15 days after month of transaction at 10% rate (Art. 36–37 as amended)",
    "Digital services companies with substantial Rwanda presence: register and pay 1.5% digital services tax on Rwanda-sourced gross revenues (Art. 50 bis — NEW, May 2025)",
    "NGOs: maintain accounts and submit financial statements by 31 March even if CIT-exempt (Art. 45 as amended)",
  ],
},
    {
  id: "investment-006-2021",
  name: "Investment Promotion and Facilitation Law",
  number: "No. 006/2021 of 05/02/2021",
  gazette: "Official Gazette No. 04 bis of 08/02/2021",
  regulator: "Rwanda Development Board (RDB)",
  summary: "Governs investment registration, investor guarantees, incentives, and facilitation in Rwanda. Applies to all registered investors — foreign and domestic — across all business sectors.",

  articles: [
    // CHAPTER ONE: GENERAL PROVISIONS
    { article: "1", title: "Purpose", summary: "Promotes and facilitates investment in Rwanda." },
    { article: "2", title: "Definitions", summary: "Defines 51 terms including: investor, registered investor, investment certificate, investment entity, capital, foreign investor (three categories: individual non-EAC/COMESA national; unregistered entity outside Rwanda; Rwanda-registered entity with ≥51% foreign capital from non-EAC/COMESA countries), strategic investment project, priority economic sectors, investment incentives, angel investor, start-up, venture capital, private equity, fund, fund manager, collective investment scheme, headquarters, regional office, pure holding company, philanthropic investor (≥USD 20M social impact), high net worth individual (≥USD 1M investment or ≥USD 500K luxury property), innovative foreign entrepreneur, manufacturing, value addition, special purpose vehicle, developer, export processing zone, and others." },

    // CHAPTER II: INVESTMENT FACILITATION
    { article: "3", title: "Openness to investment", summary: "All business sectors open to private investment regardless of investor origin. Investors encouraged to invest in priority economic sectors." },
    { article: "4", title: "Priority economic sectors", summary: "Twelve priority sectors eligible for investment incentives: (1) export; (2) manufacturing in textiles/apparel, electronics, ICT equipment, large-scale agriculture (excl. coffee/tea), pharmaceuticals, wood/glass/ceramics processing, mining value addition, agricultural equipment; (3) energy generation, transmission and distribution; (4) ICT, business process outsourcing, financial services; (5) mining exploration activities; (6) transport, logistics, electric mobility; (7) specialised innovation parks or industrial parks; (8) affordable housing; (9) tourism including hotels, adventure tourism, agro-tourism; (10) horticulture and high-value plants on RDB-approved list; (11) creative arts in film industry; (12) skills development in areas of limited capacity as determined by RDB. Additional sectors may be added by Ministerial Order." },
    { article: "5", title: "Strategic investment projects", summary: "Projects of national importance with strategic development impact, meeting at least one of: (a) anchor/first-mover investment; (b) significant value chain impact; (c) proof of concept for Rwanda/Africa/global markets; (d) market-creating innovations making products affordable; (e) significant scale in investment amount, production, and jobs; (f) other criteria set by Private Investment Committee." },
    { article: "6", title: "Investment incentives", summary: "Incentives in the Annex granted to registered investors meeting requirements. Additional incentives possible. Minister may set further incentives by Order." },
    { article: "7", title: "Cabinet investment incentives", summary: "Cabinet may grant additional incentives to registered investors in strategic investment projects, beyond what this Law provides." },
    { article: "8", title: "Approval of strategic projects and additional incentives", summary: "Strategic projects and corresponding additional incentives approved by Cabinet on proposal of Private Investment Committee. Proposal must state: sector, estimated investment amount, projected jobs, corresponding incentives, commercial/economic impact and cost-benefit analysis. Upon approval, investor and Government negotiate an agreement." },
    { article: "9", title: "Foreign investor treatment", summary: "Foreign investors authorised to invest and purchase shares in Rwanda. Treated equally to Rwandan investors on investment incentives and facilitation." },
    { article: "10", title: "Protection of investor's capital and assets", summary: "Investor has right to private property (individual or collective), which is inviolable. Investment, interest, or rights over investment property cannot be seized or confiscated except as provided by law. Expropriation in public interest requires fair compensation in accordance with relevant laws." },
    { article: "11", title: "Intellectual property protection", summary: "Investor's IP rights and legitimate technology transfer rights protected under relevant laws." },
    { article: "12", title: "Repatriation of capital and assets", summary: "After fulfilling Rwandan tax obligations, investor may repatriate: (1) capital; (2) profits from business activities; (3) debt and interest on foreign loans; (4) proceeds from liquidation; (5) other assets." },
    { article: "13", title: "Dispute settlement", summary: "Disputes between investor and State organ settled amicably first. If unresolved, parties refer to agreed arbitration institution or other agreed dispute settlement procedure. If no written agreement on procedure, parties refer to competent court." },
    { article: "14", title: "Other investor guarantees", summary: "RDB provides day-to-day facilitation for: (1) visas and work permits; (2) water and electricity connection; (3) sector licence where applicable; (4) environmental impact assessment certificate; (5) other investment-related support." },
    { article: "15", title: "Private Investment Committee", summary: "Established with duties: (1) review and approve strategic investment projects for Government negotiation; (2) review and approve proposed additional incentives; (3) discuss investor issues and propose acceleration measures; (4) identify additional priority sectors for Cabinet approval; (5) provide fast-track measures to increase competitiveness and private sector growth. Composition and functioning set by Prime Minister's Order." },
    { article: "16", title: "Role of RDB in investment promotion", summary: "RDB role includes: (1) regular monitoring of registered investor operations; (2) keeping records of investment certificates, work permits, visas; (3) monitoring that incentives go to qualifying projects per submitted business plan; (4) facilitating amicable dispute settlement; (5) representing Government in investment agreement negotiations; (6) maintaining investor confidentiality." },

    // CHAPTER III: INVESTMENT REGISTRATION AND CERTIFICATE
    { article: "17", title: "Application for investment registration", summary: "Commercial entity files application with RDB. Application file requires: (1) filled registration form; (2) certificate of incorporation; (3) business plan with at minimum: project name and details, action plan, commencement date, raw materials from Rwanda or locality, foreign financing/assets details and timeframe, market survey, technology and knowledge transfer details, five-year income projection table; (4) environmental impact assessment certificate; (5) projected employee numbers and categories; (6) proof of non-refundable registration fee payment; (7) sector licence. Registration form and fee set by Ministerial Order." },
    { article: "18", title: "Consideration of registration application", summary: "RDB reviews file and decides. If complete: registers investment and issues investment certificate within 2 working days of receipt. If incomplete: rejects application in writing with reasons within 2 working days of receipt." },
    { article: "19", title: "Validity of investment certificate", summary: "Investment certificate valid for 5 years from issuance date. Renewable on request for periods of 5 years (renewable). Renewal application filed with RDB with non-refundable renewal fee (amount set by Ministerial Order)." },
    { article: "20", title: "Renewal application content", summary: "Renewal file requires: (1) application letter to RDB Head; (2) certificate of incorporation; (3) five-year investment plan including estimated investment amount, employee numbers, raw material details, foreign financing details; (4) implementation report since certificate issuance and notarised copy of latest financial report; (5) project contact details including physical office and investor identification; (6) notarised copy of passport or identity card." },
    { article: "21", title: "Consideration of renewal application", summary: "RDB reviews and decides. If complete: renews certificate and issues new certificate showing renewal duration within 2 working days of receipt. If incomplete: rejects in writing with reasons within 2 working days." },
    { article: "22", title: "Grounds for cancellation", summary: "Investment certificate cancelled if: (1) issued on basis of false or fraudulent declarations; (2) material changes detrimental to investment occurred; (3) registered investor fails to fulfil obligations under this Law." },
    { article: "23", title: "Cancellation procedure", summary: "Before cancellation, RDB issues written notice with detailed grounds and requests investor explanations. Investor responds in writing within 10 working days of notice. If investor fails to respond in time or RDB is unsatisfied with response, RDB cancels the certificate." },
    { article: "24", title: "Appeal against cancellation", summary: "Registered investor may appeal to RDB Head within 10 working days of notification of cancellation decision. RDB Head decides on appeal within 10 working days of receipt." },
    { article: "25", title: "Effects of cancellation", summary: "If certificate cancelled due to false or fraudulent declarations, investor must refund amount equivalent to all investment incentives received as a registered investor." },

    // CHAPTER IV: OBLIGATIONS OF REGISTERED INVESTOR
    { article: "26", title: "Obligations of registered investor", summary: "Registered investor must: (1) implement project per submitted business plan; (2) keep financial and accounting records and submit financial report copy to RDB within 3 months after each financial year; (3) keep operational data for 5 years; (4) facilitate RDB employees in monitoring duties; (5) respond in writing to RDB queries within prescribed period; (6) register with Tax Administration and file tax returns even if entitled to exemptions." },

    // CHAPTER V: CHANGE, SUSPENSION AND TERMINATION
    { article: "27", title: "Notification of change, suspension or termination", summary: "Registered investor must notify RDB in writing within 30 days before: (1) changing nature of investment operations; (2) suspending operations (must also state suspension duration); (3) terminating operations. Notification may also be made by interested persons affected by suspension or termination." },
    { article: "28", title: "Board measures after change notification", summary: "If notified changes are not detrimental to investment and incentive qualification criteria: RDB amends certificate to reflect changes. If changes do not materially alter investor's commitments: changes recorded only in investor's file." },

    // CHAPTER VI: TRANSITIONAL AND FINAL PROVISIONS
    { article: "29", title: "Transitional period for incentives", summary: "Incentives granted under repealed Law No. 06/2015 that are not provided for by this Law or had no fixed expiry remain valid for 12 months from publication date of this Law. Agreements with fixed validity periods remain valid until their expiry." },
    { article: "30", title: "Drafting", summary: "Law drafted in English, considered and adopted in Kinyarwanda." },
    { article: "31", title: "Repealing provision", summary: "Law No. 06/2015 of 28/03/2015 on investment promotion and facilitation and all prior contrary legal provisions are repealed." },
    { article: "32", title: "Commencement", summary: "Comes into force on date of publication in Official Gazette of the Republic of Rwanda (08/02/2021)." },
  ],

  penalties: [
    "Art. 25: Cancellation due to false/fraudulent declarations — investor must refund full value of all investment incentives received as registered investor.",
    "Art. 23: Failure to respond to cancellation notice within 10 working days results in automatic cancellation of investment certificate.",
  ],

  keyDeadlines: [
    "Art. 18: RDB must issue investment certificate or rejection within 2 working days of receiving complete/incomplete application.",
    "Art. 19: Investment certificate valid for 5 years; renewable for successive 5-year periods.",
    "Art. 21: RDB must issue renewal or rejection within 2 working days of receiving renewal application.",
    "Art. 23: Investor has 10 working days to respond to cancellation notice from RDB.",
    "Art. 24: Appeal against cancellation must be filed within 10 working days of notification; RDB Head decides within 10 working days.",
    "Art. 26: Financial report must be submitted to RDB within 3 months after each financial year end.",
    "Art. 27: Investor must notify RDB at least 30 days before changing, suspending, or terminating operations.",
    "Art. 29: Prior incentives without fixed expiry remain valid for 12 months from 08/02/2021.",
  ],

  annex: {
    title: "Investment Incentives for Registered Investors",
    incentives: [
      {
        section: "I",
        title: "0% Corporate Income Tax",
        beneficiaries: [
          "International company with headquarters or regional office in Rwanda, if: (a) invests ≥USD 10M in tangible/intangible assets; (b) employs and trains Rwandans; (c) conducts international financial transactions ≥USD 5M/year through licensed Rwandan bank; (d) well experienced in its sector; (e) spends ≥USD 2M/year in Rwanda; (f) sets up actual administration and coordination in Rwanda and performs ≥3 of: procurement of raw materials/components, strategic planning and business development, marketing and sales promotion, information and data management, treasury management, research and development, training and personnel management, other shared services.",
          "Entity registered in Rwanda by a philanthropic investor (≥USD 20M) approved by Private Investment Committee.",
        ],
      },
      {
        section: "II",
        title: "3% Corporate Income Tax",
        beneficiaries: [
          "Pure holding company meeting: total net assets consolidated in Rwanda ≥USD 1M; annual Rwanda expenditure ≥USD 15K; physical office; ≥30% Rwandan professional staff; ≥25% directors resident in Rwanda; ≥50% board members present for meetings; strategic board meetings held in Rwanda; board resolutions kept in Rwanda; ≥2 professional/qualified Rwandan resident board members.",
          "Special purpose vehicle registered for investment purpose (projects >2 years) meeting similar governance criteria (assets ≥USD 1M, ≥USD 15K/year Rwanda expenditure).",
          "Collective Investment Scheme operator meeting: minimum fund size ≥USD 1M within first 3 years; ≥USD 50K/year Rwanda expenditure; manager, custodian and operator established in Rwanda; similar governance criteria.",
          "Global/paper trading entity: annual turnover ≥USD 10M; ≥USD 50K/year Rwanda expenditure; similar governance criteria. Rate applies to foreign-sourced trading income only.",
          "Intellectual property company: ≥USD 10K/year Rwanda expenditure; physical office; Rwandan bank account; ≥30% or 3 Rwandan staff (whichever higher); ≥1 or 25% Rwandan directors (whichever higher). Rate applies to foreign-sourced royalties only.",
        ],
      },
      {
        section: "III",
        title: "Philanthropic investor incentives",
        description: "Entity established by philanthropic investor approved by Private Investment Committee receives: (1) grants and funds for social impact activities not treated as revenue — exempt from VAT and corporate income tax; (2) locally procured goods and services zero-rated for VAT (list submitted to Tax Administration); (3) employment income tax exemption for foreign national employees (up to 30% of professional staff) ordinarily resident in Rwanda — foreign employees entitled to social security refund on permanent departure from Rwanda.",
      },
      {
        section: "IV",
        title: "15% Corporate Income Tax",
        beneficiaries: [
          "Energy generation/transmission/distribution (peat, solar, geothermal, hydro, biomass, methane, wind) — excludes EPC contractors on behalf of Government and fuel-powered generation.",
          "Freight transport: ≥5 trucks registered in investor's name, each ≥20 tonnes.",
          "Mass passenger/goods transport: ≥10 buses registered in investor's name, each ≥25 seats.",
          "Manufacturing in: textiles/apparel, electronics/ICT equipment, large-scale agriculture, wood/glass/ceramics, mining value addition and professional operations, agricultural equipment.",
          "ICT sector: services, manufacturing, or assembly — excludes ICT retail/wholesale, repair, and telecommunications.",
          "ICT innovation/training: R&D facilities, ICT training centres, software labs, specialised ICT higher learning institutions, business incubation centres.",
          "Licensed financial services operators: fund management, collective investment schemes, wealth management, financial advisory, family office services, fund administration, financial technology, captive insurance, private banking, mortgage finance, finance lease, asset-backed securities, reinsurance, trust and corporate service providers.",
          "Affordable housing construction (per relevant laws).",
          "Electric mobility investments (per relevant laws).",
          "Adventure tourism and agro-tourism (per relevant laws).",
          "Other priority sectors determined by Ministerial Order.",
        ],
      },
      {
        section: "V",
        title: "Preferential CIT rates for export investments",
        description: "For registered investors exporting goods and services: 25% CIT if 30%–49% of total turnover from exports; 15% CIT if ≥50% of total turnover from exports. Applicable for maximum 5 years from first year of reaching ≥30% export turnover. Eligibility determined annually by actual exports. Does NOT apply to exporters of unprocessed minerals, or tea/coffee without value addition.",
      },
      {
        section: "VI",
        title: "Customs duty exemption — export processing zones",
        description: "Registered investor in export processing zones exempt from customs taxes and duties per EAC Customs Management Act.",
      },
      {
        section: "VII",
        title: "Internationalisation incentives (150% tax deduction)",
        description: "Small/medium or emerging investors with export investment projects entitled to 150% tax deduction on qualifying internationalisation expenditures including: overseas marketing and PR, trade fairs not otherwise supported, overseas business development costs, market entry and research costs (legal entity establishment abroad, staff salary, market analysis, supply chain, entry requirements). Maximum deduction: USD 100K qualifying expenditure per year. Pre-approval required through joint RRA/RDB/Ministry of Trade review.",
      },
      {
        section: "VIII",
        title: "7-year corporate income tax holiday",
        description: "For registered investors (excluding private equity and venture capital) investing ≥USD 50M with ≥30% in equity form in: energy projects producing ≥25MW (excl. EPC Government contracts and fuel energy), manufacturing, tourism, health, ICT (services/manufacturing/assembly — excl. retail/wholesale/repair/telecoms), export-related projects, other Ministerial Order priority sectors. Full USD 50M must be invested within 7 years. Tax holiday begins first year after full investment. Maximum holiday: 7 years.",
      },
      {
        section: "IX",
        title: "5-year corporate income tax holiday",
        description: "Specialised innovation park developers and specialised industrial park developers: 5-year CIT holiday from first year of positive net income. Licensed microfinance institutions: 5-year CIT holiday from licence date (renewable per Ministerial Order conditions).",
      },
      {
        section: "X",
        title: "0% withholding tax",
        description: "On dividends, interest, and royalties paid by investors benefiting from 15% or 3% preferential CIT under Sections II and IV paragraph 7.",
      },
      {
        section: "XI",
        title: "5% withholding tax",
        description: "On dividends and interest paid to investors in companies listed on Rwanda Stock Exchange.",
      },
      {
        section: "XII",
        title: "10% withholding tax",
        description: "On: interest on foreign loans, dividends, royalties, and service fees (including management and technical service fees) paid by specialised innovation park developers or specialised industrial park developers.",
      },
      {
        section: "XIII",
        title: "Incentives for specialised park developers",
        description: "Specialised innovation park developers and specialised industrial park developers additionally receive: (1) property tax exemption for 5 years from construction permit date; (2) exemption from land transfer fees (provided transferor holds shares equivalent to value of transferred immovable property); (3) carry forward of accumulated tax losses in case of >25% ownership change — applicable only during construction phase before operationalisation, or for first such change post-operationalisation (subsequent changes not eligible); (4) loss carry-forward for 7 years (extendable by Tax Administration); (5) 50% accelerated depreciation in year 1 from construction commencement; (6) expedited VAT pre-approval and refunds for professional/technical services procured abroad; (7) 0% VAT on construction materials and finished goods for construction projects within parks; (8) exemption from domestic taxes including withholding tax and excise duty on imported construction materials and finished goods.",
      },
      {
        section: "XIV",
        title: "Start-up incentives",
        description: "Angel investors (excluding private equity and venture capital funds) investing ≤USD 500K in a start-up are eligible for: (a) capital gains tax exemption on sale of shares (provided shares were initially purchased as primary equity issuance by start-up); (b) withholding tax exemption on dividends for first 5 dividend issuances by start-up. Investment must remain in start-up for minimum 2 years.",
      },
      {
        section: "XV",
        title: "Research and development incentives (Seed Innovation Fund)",
        description: "Strategic investment projects, small/medium investors, or emerging investors may access Seed Innovation Fund (convertible grants, equity, debt) for: qualifying manpower costs, training costs, materials/equipment/software/technology acquisition, professional services, IP rights costs. Eligibility criteria and process set by Minister in charge of ICT and Innovation.",
      },
      {
        section: "XVI",
        title: "Mining sector incentives",
        description: "Registered investors with valid exploration licence may carry forward losses for 10 years from first loss year (in order incurred). Applicable only if mineral exploration expenditure accounts for ≥50% of total investor expenditure during loss years.",
      },
      {
        section: "XVII",
        title: "Film industry tax incentives",
        description: "Registered film investors in production/post-production activities receive: (1) 0% VAT on locally procured goods and services; (2) 0% withholding tax on qualifying foreign specialised services (list jointly approved by Rwanda Film Office and Rwanda Revenue Authority). Eligible investors: domestic film investors in production of eligible film/animation/TV series; domestic investors in post-production spending ≥USD 150K; domestic investors co-producing/co-post-producing with foreign investor where: foreign investor provides majority funding; ≥USD 500K spent on activities in Rwanda; ≥50% of principal photography filmed in Rwanda for minimum 4 weeks (certified by Rwanda Film Office). Qualifying expenditures: goods/services purchased in Rwanda for production/post-production; salaries paid to Rwandan tax residents (cast and crew).",
      },
      {
        section: "XVIII",
        title: "Capital gains tax exemption",
        description: "Registered investor does not pay capital gains tax. Exception: income from sale of commercial immovable property is included in investor's taxable income.",
      },
      {
        section: "XIX",
        title: "VAT refund",
        description: "VAT refund to investors within 15 days of Tax Administration receiving relevant documents. Does not apply to investors in VAT-exempt business sectors.",
      },
      {
        section: "XX",
        title: "Accelerated depreciation (50%)",
        description: "Registered investors in qualifying sectors entitled to flat 50% accelerated depreciation in year 1 for new or used assets worth ≥USD 50K each, operating in: export projects, manufacturing, telecommunications, agro-processing, education, health, transport (excl. passenger vehicles <9 seats), tourism investments ≥USD 1.8M, construction projects ≥USD 1.8M, other sectors with investment ≥USD 100K, other priority sectors per Ministerial Order. Investor must retain assets for 3 years after benefiting; must notify RRA Commissioner General of disposal before 3 years — if disposed early, investor pays back the tax reduction plus applicable penalties and interest. Exception: no liability if disposal caused by natural calamities, hazards, or other involuntary reasons.",
      },
      {
        section: "XXI",
        title: "Talent attraction incentives",
        description: "Start-up founders and innovative foreign entrepreneurs (and dependents) eligible for 2-year entrepreneurship visa. Qualifying international graduates from qualifying institutions eligible for 2-year talent visa from completion of studies. Qualifying remote workers in priority fields eligible for 2-year visa to live in Rwanda and work for foreign-registered employer or own company. Companies with headquarters or regional office in Rwanda may recruit foreign managerial/professional/technical staff (work permits), provided ≥30% of professional staff are Rwandan and company operates in a high-value talent-intensive sector (ICT, innovation). Talent-related visas processed within 2 weeks. High net worth individuals eligible for permanent residence (per relevant laws); after 5 years of permanent residence, eligible to apply for Rwandan citizenship by acquisition if still meeting: ≥USD 1M investment in Rwanda or ≥USD 500K luxury property in Rwanda.",
      },
      {
        section: "XXII",
        title: "Immigration incentives",
        description: "Registered investor investing ≥USD 250K may recruit 3 foreign employees without demonstrating skills shortage on Rwandan labour market.",
      },
    ],
  },
},
  id: "insurance-law",
  name: "Insurance Business Organisation Law",
  shortName: "Insurance Law",
  number: "No. 030/2021",
  year: 2021,
  category: "Financial Services",
  regulator: "BNR (National Bank of Rwanda)",
  status: "verified",
  description: "Governs the organisation of insurance business in Rwanda, including licensing of insurers and intermediaries, prudential requirements, market conduct, and liquidation. Repeals Law No. 52/2008.",
  articles: [
    { number: "Art. 2", summary: "Applies to all insurers (public and private), reinsurers, insurance intermediaries, health maintenance organisations, insurance contracts, and reinsurance contracts in Rwanda." },
    { number: "Art. 4", summary: "Insurance categories and classes determined by regulations." },
    { number: "Art. 5", summary: "The term 'insurance' is protected — no entity may use it without a licence." },
    { number: "Art. 6", summary: "No person may carry out insurance business without a licence from the Supervisory Authority (BNR)." },
    { number: "Art. 9", summary: "Licensing requirements for private insurers include: minimum paid-up capital, fit and proper board and management, sound financial projections, and solvency margin compliance." },
    { number: "Art. 11", summary: "Supervisory Authority must respond to licence application within a period set by regulation." },
    { number: "Art. 13", summary: "Insurers must treat consumers fairly at all times." },
    { number: "Art. 17", summary: "Insurers must comply with AML/CFT obligations." },
    { number: "Art. 20", summary: "Every private insurer must maintain minimum paid-up share capital as set by regulation at all times. All shares must be fully paid before commencing business." },
    { number: "Art. 21", summary: "Insurers must at all times meet solvency and capital adequacy requirements as set by regulation, scaled to nature, size, and complexity of the business." },
    { number: "Art. 22", summary: "Insurers must at all times maintain a minimum solvency margin as determined by regulation — specific amounts set per category of insurer." },
    { number: "Art. 23", summary: "Insurers must maintain prescribed solvency margin above the minimum — amount set by regulation." },
    { number: "Art. 25", summary: "If solvency margin falls below prescribed level: insurer must IMMEDIATELY notify BNR in writing, stating remedial measures taken. Every board member and senior manager who knows of non-compliance must also immediately notify BNR." },
    { number: "Art. 26", summary: "Failure to meet minimum capital or solvency requirements triggers remedial actions as specified in regulations." },
    { number: "Art. 27", summary: "Insurers must maintain appropriate and adequate technical provisions for each class of insurance business at all times." },
    { number: "Art. 28", summary: "Prudent investment rule applies — insurers must invest assets prudently." },
    { number: "Art. 32", summary: "Insurers must maintain proper accounting records." },
    { number: "Art. 35", summary: "Audited financial statements must be submitted to BNR within 3 months after end of financial year." },
    { number: "Art. 37", summary: "Every insurer must appoint an external auditor from BNR's accredited list." },
    { number: "Art. 43", summary: "Insurers must appoint actuaries as required by regulation." },
    { number: "Art. 46", summary: "Insurers must establish a risk management framework." },
    { number: "Art. 50", summary: "Board of Directors requirements and fit-and-proper obligations apply to all insurers." },
    { number: "Art. 182", summary: "BNR has power to impose administrative sanctions on insurers, intermediaries, and their senior managers for non-compliance. Specific faults and sanctions set by regulation." },
    { number: "Art. 183", summary: "Unlicensed insurance business / unlicensed intermediary activity / falsely claiming to be an insurer: 3–5 years imprisonment + FRW 7,000,000–10,000,000 fine, or one of these penalties." },
    { number: "Art. 184", summary: "Compulsory insurance types are determined by special laws (e.g. motor third-party liability is mandated separately)." },
    { number: "Art. 185", summary: "Unclaimed insurance funds after 10 years: insurer must notify last known address and publish notice. If no response within 3 months, funds treated as unclaimed." },
    { number: "Art. 190", summary: "Repeals Law No. 52/2008 of 10/09/2008 governing the organisation of insurance business." },
    { number: "Art. 191", summary: "Entered into force on date of publication: 02 August 2021. All insurers given 18 months transitional period to comply." },
  ],
  penalties: [
    "Unlicensed insurance / reinsurance business: 3–5 years imprisonment + FRW 7M–10M fine (Art. 183)",
    "Falsely claiming to be an insurer or intermediary: 3–5 years + FRW 7M–10M fine (Art. 183)",
    "Administrative sanctions for regulatory non-compliance: determined by BNR regulation (Art. 182)",
    "Failure to meet minimum capital or solvency: remedial actions under BNR regulation (Art. 26)",
  ],
  keyDeadlines: [
    "Audited financial statements: submit to BNR within 3 months of financial year end (Art. 35)",
    "Solvency margin breach: IMMEDIATELY notify BNR in writing (Art. 25)",
    "Unclaimed insurance funds: notify recipient after 10 years; if no response within 3 months, deemed unclaimed (Art. 185)",
    "Transitional compliance period for existing insurers: 18 months from 02 August 2021 (now expired) (Art. 186)",
  ],
  keyObligations: [
    "Obtain and maintain BNR insurance licence before commencing any insurance business (Art. 6)",
    "Maintain minimum paid-up capital as set by BNR regulation at all times (Art. 20)",
    "Maintain minimum and prescribed solvency margins at all times (Arts. 22–23)",
    "Immediately notify BNR in writing if solvency margin falls below prescribed level (Art. 25)",
    "Maintain appropriate technical provisions for each class of business at all times (Art. 27)",
    "Submit audited financial statements to BNR within 3 months of financial year end (Art. 35)",
    "Appoint BNR-accredited external auditor (Art. 37)",
    "Comply with AML/CFT obligations (Art. 17)",
    "Establish risk management framework (Art. 46)",
    "Board members and senior management must meet fit-and-proper requirements (Art. 50)",
  ],
},
  id: "banking-law",
  name: "Banking Law",
  shortName: "Banking Law",
  number: "No. 044/2024",
  year: 2024,
  category: "Financial Services",
  regulator: "BNR (National Bank of Rwanda)",
  status: "verified",
  description: "Governs the organisation, management, and supervision of banks operating in Rwanda. Repeals Law No. 47/2017.",
  articles: [
    { number: "Art. 4", summary: "Categories of banks determined by BNR regulation based on services, legal status, and mode of operations." },
    { number: "Art. 5", summary: "No person may receive public deposits without BNR authorisation." },
    { number: "Art. 7", summary: "Banking licence granted, suspended, or revoked exclusively by BNR." },
    { number: "Art. 8", summary: "Licensing requires: adequate paid-up capital, disclosed beneficial ownership, fit-and-proper board and management, sound financial projections, and transparent governance structure." },
    { number: "Art. 14", summary: "Licence revoked if: bank inactive for 6 months, licence obtained by fraud, AML/CFT violations, activities compromise financial sector soundness, or non-compliance with banking laws." },
    { number: "Art. 15", summary: "Minimum paid-up capital set by BNR regulation — not fixed in the statute itself." },
    { number: "Art. 17", summary: "Capital adequacy ratio maintained at all times as set by BNR regulation; capital buffer requirements also set by BNR regulation." },
    { number: "Art. 19", summary: "Liquidity ratio and requirements determined by BNR regulation." },
    { number: "Art. 20", summary: "No person (including related parties) may hold more than 25% of bank shares without BNR authorisation, unless a reputable financial institution, public company, or foreign government." },
    { number: "Art. 21", summary: "Prior BNR authorisation required before acquiring or transferring any significant or controlling interest in a bank. Unauthorised acquisitions are void." },
    { number: "Art. 28", summary: "No bank may declare or pay dividends until: all capitalised expenses written off, capital buffers considered, and adequate provisions made for non-performing loans — to BNR's satisfaction." },
    { number: "Art. 29", summary: "All transactions with bank-related parties must be on same terms as offered to the general public." },
    { number: "Art. 30", summary: "Bank may not grant credit to a shareholder using that shareholder's own shares as collateral." },
    { number: "Art. 38", summary: "Board of Directors responsible for strategy, risk oversight, internal controls, and ensuring compliance with this Law." },
    { number: "Art. 39", summary: "Board must establish committees as required by BNR regulation (including audit and risk committees)." },
    { number: "Art. 42", summary: "Board members and senior management require BNR approval (fit and proper assessment)." },
    { number: "Art. 44", summary: "Financial statements prepared in accordance with BNR-prescribed standards." },
    { number: "Art. 46", summary: "Bank must keep all records as required by BNR regulation." },
    { number: "Art. 47", summary: "Submission and disclosure of financial statements and other information at frequency determined by BNR." },
    { number: "Art. 50", summary: "External auditor of a bank must be approved; auditor reports to BNR." },
    { number: "Art. 59", summary: "Bank must submit all documents, financial statements, and information to BNR at frequency BNR determines. Professional secrecy cannot be invoked against BNR." },
    { number: "Art. 61", summary: "Every bank must develop and submit a recovery plan to BNR for approval." },
    { number: "Art. 100", summary: "Administrative sanctions for non-compliance determined by BNR regulation; appeals procedure also set by BNR regulation." },
    { number: "Art. 101", summary: "Unauthorised use of the term 'Bank' or derivatives: 1–3 years imprisonment + FRW 30M–50M fine (individual); FRW 70M–100M fine (corporate). Doubled on recidivism." },
    { number: "Art. 102", summary: "Unlicensed banking activities or unauthorised deposit-taking: 3–5 years imprisonment + FRW 30M–50M fine (individual); FRW 70M–100M fine (corporate). Doubled on recidivism." },
    { number: "Art. 103", summary: "Providing false information to BNR, obstructing supervision, or serving on board/management without BNR approval: 6 months–2 years imprisonment + FRW 40M–60M fine. Doubled on recidivism." },
    { number: "Art. 113", summary: "Repeals Law No. 47/2017 of 23/09/2017 governing banking organisation." },
    { number: "Art. 114", summary: "Entered into force on date of publication in Official Gazette: 10 June 2024." },
  ],
  penalties: [
    "Unauthorised use of 'Bank' name — individual: 1–3 years + FRW 30M–50M (Art. 101)",
    "Unauthorised use of 'Bank' name — corporate: FRW 70M–100M (Art. 101)",
    "Unlicensed banking / unauthorised deposits — individual: 3–5 years + FRW 30M–50M (Art. 102)",
    "Unlicensed banking / unauthorised deposits — corporate: FRW 70M–100M (Art. 102)",
    "False information to BNR / obstructing supervision / unapproved board member: 6 months–2 years + FRW 40M–60M (Art. 103)",
    "All penalties doubled on recidivism (Arts. 101–103)",
    "Administrative sanctions for regulatory non-compliance: set by BNR regulation (Art. 100)",
    "Licence revocation triggers forced liquidation (Art. 14)",
  ],
  keyDeadlines: [
    "Bank inactive for 6+ months: grounds for licence revocation (Art. 14)",
    "Provisional suspension of operations: maximum 6 working days, extendable once (Art. 109)",
    "Voluntary liquidation application: BNR must respond within 2 months (Art. 74)",
    "Reporting frequency for financial statements and information: set by BNR regulation (Art. 47)",
    "Recovery plan: must be developed and submitted to BNR (Art. 61)",
  ],
  keyObligations: [
    "Obtain and maintain BNR banking licence (Art. 7)",
    "Disclose beneficial ownership at licensing stage (Art. 8)",
    "Maintain capital adequacy ratio as set by BNR regulation at all times (Art. 17)",
    "Maintain liquidity ratio as set by BNR regulation (Art. 19)",
    "Obtain BNR prior approval before any significant shareholding transfer (Art. 21)",
    "Do not pay dividends until NPL provisions satisfy BNR (Art. 28)",
    "All board members and senior management must obtain BNR fit-and-proper approval (Art. 42)",
    "Submit financial statements and reports to BNR at BNR-prescribed frequency (Art. 47)",
    "Develop and submit bank recovery plan to BNR for approval (Art. 61)",
    "No professional secrecy may be invoked against BNR information requests (Art. 59)",
  ],
},
    {
  id: "competition-consumer-protection",
  shortName: "Competition & Consumer Protection Law",
  fullName: "Law No. 36/2012 of 21/09/2012 Relating to Competition and Consumer Protection",
  category: "competition",
  regulator: "Competition and Consumer Protection Regulatory Body (established by separate law per Article 5)",
  relevantFor: ["corporate", "commercial", "consumer", "mergers", "procurement", "all-sectors"],
  articles: [
    // CHAPTER I: GENERAL PROVISIONS
    {
      number: "1",
      title: "Purpose",
      summary: "Encourages competition by prohibiting anti-competitive practices; promotes and protects consumer interests."
    },
    {
      number: "2",
      title: "Definitions",
      summary: "Defines: supply contract, sale contract, goods/services, competition, enterprise (including branches/subsidiaries), dominant enterprise, anti-competitive conduct, merger, Minister (of Commerce), dominant position, consumer (personal/family use, non-commercial), Regulatory Body."
    },
    {
      number: "3",
      title: "Scope",
      summary: "Applies to all economic activity carried out or having effect within Rwanda, including State, parastatals and State-owned companies where their commercial activities are open to private enterprise participation."
    },
    {
      number: "4",
      title: "Exclusions",
      summary: "Does not apply to: employee protective activities; collective bargaining arrangements; trade union activities promoting members' employment conditions; IP agreements (copyright, patent, trademark); activities required under treaties Rwanda has ratified; trade union standards/population protection strategies; other activities excluded by Ministerial Order."
    },
    {
      number: "5",
      title: "Regulatory Body",
      summary: "A Competition and Consumer Protection Regulatory Body is established by a separate law."
    },

    // CHAPTER II: ANTI-COMPETITIVE PRACTICES
    {
      number: "6",
      title: "Anti-competitive practices — general prohibition",
      summary: "All agreements, decisions and concerted practices whose object is to undermine, prevent, restrict or distort competition are prohibited."
    },
    {
      number: "7",
      title: "Prohibited practices — specific list",
      summary: "Prohibited: (1) price-fixing agreements (written or unwritten); (2) limiting/controlling production, markets, technical development or investment; (3) market/supply sharing; (4) applying dissimilar conditions to equivalent transactions causing competitive disadvantage; (5) tying — requiring consumer to accept unrelated obligations; (6) collusive tendering and bid-rigging; (7) allocation of production/sales quotas; (8) collective enforcement of arrangements; (9) concerted refusals to supply or purchase; (10) collective denial of access to arrangements crucial to competition. Agreements made on these bases are null and void. Exception: enterprises under common control acting as a single entity."
    },
    {
      number: "8",
      title: "Determining dominant position",
      summary: "Dominance assessed by: relevant product and geographic market; level of actual/potential competition (number of competitors, capacity, demand); barriers to entry; historical competition and rivalry in the sector."
    },
    {
      number: "9",
      title: "Abuse of dominant position",
      summary: "A dominant enterprise harms competition if it: (1) restricts or likely restricts market entry; (2) prevents/deters any enterprise from competing; (3) eliminates or likely eliminates any enterprise from the market; (4) imposes unfair purchase/selling prices or restrictive practices; (5) limits production to consumer prejudice; (6) ties supplementary unrelated obligations to agreements; (7) exploits customers or suppliers frustrating expected competition benefits."
    },
    {
      number: "10",
      title: "Resale price maintenance",
      summary: "Resale price maintenance prohibited. Supplier/producer may recommend a minimum resale price but it is advisory only, not binding."
    },
    {
      number: "11",
      title: "Practices preventing competition",
      summary: "Enterprises must not: limit production to consumer prejudice; impose unrelated supplementary obligations; require exclusivity from suppliers or consumers; refuse supply to competitors where economically feasible; engage in tying; sell below marginal/average variable cost; buy up scarce intermediate goods needed by competitors; exploit customers or suppliers to frustrate market benefits."
    },
    {
      number: "12",
      title: "Price discrimination by dominant enterprise — prohibition",
      summary: "Dominant enterprise's sale of goods/services constitutes prohibited price discrimination if: it substantially prevents or lessens competition; involves equivalent transactions for same-grade goods to different consumers; involves discrimination in price charged, discounts/rebates/credits, or after-sale service terms."
    },
    {
      number: "13",
      title: "Derogation — permitted price differentiation",
      summary: "Differential treatment not prohibited price discrimination if dominant enterprise shows it: reflects reasonable cost differences (manufacture, distribution, delivery, quantity); is a good-faith response to competitor pricing; responds to changing market conditions including perishable goods deterioration, obsolescence, liquidation sale, or bona fide discontinuation of goods/services."
    },
    {
      number: "14",
      title: "Authorisation for anti-competitive arrangements",
      summary: "Regulatory Body may grant authorisation for otherwise anti-competitive arrangements if: public benefits outweigh the anti-competitive detriment; or to cover future parties to the contract. Application must name all known parties. During validity of authorisation, parties are not in violation of the Law."
    },

    // CHAPTER III: MERGERS
    {
      number: "15",
      title: "Merger modalities",
      summary: "Merger occurs when: (1) two or more enterprises join to form a new enterprise; or (2) one or more enterprises merge assets directly or indirectly through share purchase or asset acquisition of another company."
    },
    {
      number: "16",
      title: "Notification threshold",
      summary: "Merger must be notified to Regulatory Body if combined annual turnover meets or exceeds threshold set by the Regulatory Body. Regulatory Body may also require notification of below-threshold mergers if competition or public interest concerns arise."
    },
    {
      number: "17",
      title: "Notification deadline and requirements",
      summary: "Notifiable merger must be notified to Regulatory Body within 30 days of the parties' decision to merge. Regulatory Body prescribes form, content and fees. Merger notified contrary to this Law is null and void; rights/obligations under related agreements are unenforceable. Failure to notify may result in administrative sanctions."
    },
    {
      number: "18",
      title: "Standstill obligation and review period",
      summary: "Parties must not implement merger until approved (with or without conditions) by Regulatory Body. Regulatory Body conducts competition inquiry as needed; must notify all interested parties (including employees/representatives) before inquiry. Within 30 working days of complete notification, Regulatory Body may extend review by up to 15 additional working days with an extension certificate."
    },
    {
      number: "19",
      title: "Merger investigation procedure",
      summary: "Regulatory Body first determines whether merger likely prevents or undermines competition. If so, it assesses whether: (1) technological efficiency or competitive gains outweigh anti-competitive effects; (2) merger can be justified on public interest grounds."
    },
    {
      number: "20",
      title: "Criteria for merger assessment",
      summary: "Factors considered: level of import competition; freedom of market entry (tariff/regulatory barriers); supplier preferences and business partnerships; countervailing market power; likelihood of post-merger dominance; dynamic market characteristics (growth, innovation, product differentiation); nature and level of existing market concentration; viability of the merging business if not merged; likelihood of excluding honest competitors."
    },
    {
      number: "21",
      title: "Merger contrary to public interest",
      summary: "Merger contrary to public interest if it: substantially reduces competition at sector, national or regional level; creates or likely creates a dominant position contrary to public interest; likely has substantial negative employment effect; likely impairs small enterprises' competitiveness; has or likely has negative effect on national industries' international competitiveness."
    },
    {
      number: "22",
      title: "Criteria for public interest assessment",
      summary: "Regulatory Body considers: maintaining effective competition among producers/distributors; promoting consumer interests (prices, quality, variety); promoting cost reduction and new product development through competition; facilitating new market entrants."
    },
    {
      number: "23",
      title: "Remedies against anti-public-interest mergers",
      summary: "Regulatory Body may: (1) declare merger unlawful; (2) prohibit or restrict acquisition of enterprise or assets; (3) impose conduct conditions on parties; (4) take any other reasonable and necessary measures to terminate, prevent or alleviate effects of the merger."
    },
    {
      number: "24",
      title: "Consequences of anti-merger decisions",
      summary: "Decision may provide for: transfer or vesting of property, rights, liabilities and obligations; adjustment or discharge of contracts; creation, allotment, surrender or cancellation of shares/securities; establishment or winding up of any enterprise or amendment of its constitutional documents."
    },
    {
      number: "25",
      title: "Notification, amendment or revocation of decisions",
      summary: "Decisions must be in writing and notified to all concerned persons. Regulatory Body may amend or revoke a decision if it was based on incorrect information provided by a party, obtained by deceit, or if the enterprise has breached an obligation attached to the decision."
    },

    // CHAPTER IV: INVESTIGATIONS
    {
      number: "26",
      title: "Request for investigation",
      summary: "Any consumer association or other person may request investigation from Regulatory Body where there is reason to believe enterprise activities restrict or likely restrict competition. Request may be written or oral."
    },
    {
      number: "27",
      title: "Consultation process",
      summary: "Upon receipt of investigation request, Regulatory Body consults requestors and interested parties to determine jurisdiction and justification. Consultations must conclude within 30 days of request; extendable by up to 15 additional days with notice to parties."
    },
    {
      number: "28",
      title: "Confidentiality of information",
      summary: "Persons providing information to Regulatory Body may request confidentiality. Regulatory Body must establish procedures for using the information without prejudicing the informant."
    },
    {
      number: "29",
      title: "Investigation procedure",
      summary: "Where investigation proceeds, Regulatory Body must: (1) notify interested parties; (2) complete investigation within 90 days of request; (3) extend if warranted with notification. Where violation found, Regulatory Body notifies parties and affords opportunity to defend their interests."
    },
    {
      number: "30",
      title: "Investigative officers",
      summary: "Regulatory Body may designate staff as investigative officers. Each officer must carry a certificate of appointment to be shown on demand before exercising powers."
    },
    {
      number: "31",
      title: "Powers of investigative officers",
      summary: "Authorised investigative officers may: (1) enter any premises suspected to contain relevant information; (2) require any person on the premises to provide all information at their disposal."
    },
    {
      number: "32",
      title: "Notification of findings and response",
      summary: "At end of investigation, Regulatory Body notifies enterprise of its decisions. Enterprise has 20 days to respond disputing findings. Failure to respond within 20 days: Regulatory Body may impose sanctions or order immediate cessation of unlawful conduct and/or remedial measures. Enterprise may refer Regulatory Body decisions to courts."
    },

    // CHAPTER V: CONSUMER PROTECTION
    {
      number: "33",
      title: "Obligation to inform consumer",
      summary: "Seller must provide consumer with correct and necessary information on product/service characteristics and contract conditions no later than the time of contract conclusion, having regard to the consumer's stated use or reasonably foreseeable use."
    },
    {
      number: "34",
      title: "Consumer prejudice",
      summary: "Consumer is prejudiced where contract shows manifest imbalance in rights/obligations. Indicators include: hidden or incorporated-by-reference terms; seller disclaiming agent/employee commitments; seller reserving unilateral contract modification rights; seller holding sole right to determine conformity; consumer compelled to perform while seller has not; consumer deprived of compensation rights; consumer deprived of termination rights; seller holding unilateral termination right; seller retaining security on self-termination; contract with no validity period or termination notice period."
    },
    {
      number: "35",
      title: "Display of prices",
      summary: "All enterprises, fairs and exhibitions must display prices to consumers in Rwandan francs, Arabic numerals, legible characters, all taxes inclusive. Price displayed on product, package, placard attached to product, or single notice board (notice board only where labelling product is impossible)."
    },
    {
      number: "36",
      title: "Labelling — denomination and composition",
      summary: "Mandatory labelling, user manuals and warranty bulletins must be in the language(s) of the region where goods are marketed. Labelling must be clear, readable and distinct from advertising."
    },
    {
      number: "37",
      title: "Prohibited business practices",
      summary: "Any act contrary to commercial usage that prejudices consumers or other sellers is prohibited. Seller must not provide false or misleading information to consumers in any supply of goods or services, including promotional pricing."
    },
    {
      number: "38",
      title: "Prohibited advertising",
      summary: "Advertising that may encourage behaviour dangerous to health or personal safety is prohibited."
    },
    {
      number: "39",
      title: "Comparative advertising",
      summary: "Comparative advertising (explicit or implicit identification of competitor/products) is permitted only if: (1) not misleading or likely to mislead; (2) compares goods/services meeting the same needs or purpose; (3) objectively compares one or more characteristics."
    },
    {
      number: "40",
      title: "Invoicing",
      summary: "All commercial transactions by enterprises and professional service providers must be accompanied by invoices. Invoice must show: number, date, seller/buyer names, product/service specifications, quantity, unit price, totals per item, and total sales. Exemption: agricultural, animal husbandry, fisheries and craft product sales (exemption does not apply to industrial producers in those sectors). All VAT-registered traders must maintain invoicing records with the above details."
    },
    {
      number: "41",
      title: "Conformity with contract",
      summary: "Seller must deliver goods conforming to the contract. Goods conform if they: match description/sample shown by seller; fit the consumer's particular stated purpose accepted by seller; fit normal use for goods of that type; show quality and performance a consumer can reasonably expect, taking into account public statements by seller/producer in advertising or labelling."
    },
    {
      number: "42",
      title: "Consumer rights — non-conformity",
      summary: "Seller liable for any lack of conformity at time of delivery. Consumer entitled to: free repair or replacement; appropriate price reduction; or rescission of the contract."
    },
    {
      number: "43",
      title: "Time limits for non-conformity claims",
      summary: "Seller liable for lack of conformity appearing within 1 year of delivery of durable goods. Consumer must notify seller of non-conformity within 15 days of discovering it. Defects appearing within 6 months of delivery presumed to have existed at delivery unless incompatible with nature of goods/defect. List of durable goods determined by Ministerial Order."
    },
    {
      number: "44",
      title: "Guarantee",
      summary: "Guarantees are legally binding under their stated conditions and associated advertising. Guarantee must: state consumer's legal rights are not affected; set out in plain language the duration, guarantor's name and address, and claims procedure. May be provided in non-written form on consumer request."
    },
    {
      number: "45",
      title: "After-sale services",
      summary: "Enterprises supplying durable goods must provide after-sale services for those goods."
    },
    {
      number: "46",
      title: "Monitoring delivery of goods and services",
      summary: "Regulatory Body monitors whether suppliers deliver goods and services to consumers in compliance with this Law. Ministerial Order determines monitoring requirements."
    },
    {
      number: "47",
      title: "Goods safety",
      summary: "Enterprise must not supply goods intended or likely to be used by consumers if: goods do not meet consumer product safety standards; regulations declare goods may be unsafe; laws ban the goods. Person suffering damage from non-compliance deemed to have suffered loss caused by supplier."
    },
    {
      number: "48",
      title: "Product quality standards",
      summary: "Enterprise must not supply goods of a category subject to consumer protection standards unless it complies with those standards. Regulatory Body may prescribe standards covering: performance, composition, contents, manufacturing methods, design, packaging, expiry date; and the form in which that information must be disclosed."
    },
    {
      number: "49",
      title: "Unsafe or defective goods",
      summary: "Where enterprise supplies unsafe/defective goods harmful to health, failing quality standards or consumer expectations, Regulatory Body may: withdraw goods from market; issue public information; order repair; order substitution; require payment of price; reduce price; refer to courts."
    },
    {
      number: "50",
      title: "Civil actions for damages",
      summary: "Any person suffering loss from violation of consumer protection provisions may institute a court action. Registered consumer associations may also bring civil actions on consumer request or to seek compensation for damages."
    },

    // CHAPTER VI: SANCTIONS
    {
      number: "51",
      title: "Non-compliance with summons",
      summary: "Violation includes failing to appear before Regulatory Body when invited, or appearing but refusing to produce required books, documents or other items in one's possession or control."
    },
    {
      number: "52",
      title: "Administrative fines — general",
      summary: "Regulatory Body may impose administrative fines of 5% to 10% of the enterprise's annual turnover of the preceding fiscal year in which the violation occurred."
    },
    {
      number: "53",
      title: "Sanctions for illegal merger",
      summary: "Without prejudice to Article 52, for merger done in violation of this Law, Regulatory Body may: (1) order party to sell shares, interests or assets acquired through the merger; (2) declare all provisions of the merger agreement void."
    },
    {
      number: "54",
      title: "Sanctions for abuse of dominant position",
      summary: "Regulatory Body may order enterprise to sell part of its shares where it has abused its dominant position and is a repeat offender (recidivism)."
    },
    {
      number: "55",
      title: "Alternative fine — enterprises without disclosed turnover",
      summary: "Where enterprise or individual cannot reveal annual turnover, administrative fine of RWF 20,000 to RWF 5,000,000."
    },
    {
      number: "56",
      title: "Recourse to courts",
      summary: "Enterprise affected by Regulatory Body decision may appeal to competent court within 30 days of notification. Regulatory Body decision remains in force during appeal unless court suspends it on written application."
    },

    // CHAPTER VII: FINAL PROVISIONS
    {
      number: "57",
      title: "Drafting and adoption",
      summary: "Drafted in English, considered and adopted in Kinyarwanda."
    },
    {
      number: "58",
      title: "Repealing provision",
      summary: "Repeals Decree-law No. 41/63 of 24/02/1950 on punishment of unfair competition and all prior contrary provisions."
    },
    {
      number: "59",
      title: "Commencement",
      summary: "Enters into force on date of publication in the Official Gazette (12/11/2012)."
    }
  ],
  penalties: [
    "Administrative fine of 5%–10% of annual turnover of the preceding fiscal year (Article 52) — general violations",
    "Administrative fine of RWF 20,000–5,000,000 for enterprises unable to disclose annual turnover (Article 55)",
    "Illegal merger: order to sell acquired shares/interests/assets; declaration of merger agreement void (Article 53)",
    "Abuse of dominant position (recidivist): order to sell part of enterprise's shares (Article 54)",
    "Null and void: anti-competitive agreements (Article 7); mergers not notified per this Law (Article 17)"
  ],
  regulator_detail: "Competition and Consumer Protection Regulatory Body (established by separate legislation per Article 5). Minister of Commerce has residual Ministerial Order-making powers (Articles 4, 43, 46, 55).",
  keyDeadlines: [
    "30 days — notify Regulatory Body of notifiable merger from date of decision to merge (Article 17)",
    "30 working days — Regulatory Body initial merger review period from complete notification (Article 18)",
    "15 working days — maximum extension of merger review period (Article 18)",
    "30 days — Regulatory Body consultation on investigation request from date of request (Article 27)",
    "15 days — maximum extension of investigation consultation period (Article 27)",
    "90 days — Regulatory Body must complete investigation from date of request (Article 29)",
    "20 days — enterprise response period to investigation findings notification (Article 32)",
    "15 days — consumer must notify seller of non-conformity from date of discovery (Article 43)",
    "1 year — seller's liability for lack of conformity in durable goods from delivery (Article 43)",
    "6 months — defects presumed to have existed at delivery if appearing within this period (Article 43)",
    "30 days — enterprise appeal of Regulatory Body decision to competent court from notification (Article 56)"
  ]
}
  {
    {
  id: "environment",
  shortName: "Environment Law",
  fullName: "Law No. 48/2018 of 13/08/2018 on Environment",
  category: "environment",
  regulator: "Rwanda Environment Management Authority / REMA (referred to throughout as 'the Authority' / 'Ikigo'); Ministry of Environment (Ministerial Orders); City of Kigali and District staff (inspection)",
  relevantFor: ["corporate", "construction", "manufacturing", "mining", "agriculture", "waste-management", "esg", "project-finance", "all-sectors"],
  articles: [
    // CHAPTER I: GENERAL PROVISIONS
    {
      number: "1",
      title: "Purpose",
      summary: "Governs environmental protection, conservation and promotion in Rwanda."
    },
    {
      number: "2",
      title: "Definitions",
      summary: "Defines key terms used throughout the Law (specific definitions to be read from source text; law does not reproduce them in article summaries)."
    },

    // CHAPTER II: FUNDAMENTAL PRINCIPLES
    {
      number: "3",
      title: "Precautionary principle",
      summary: "Activities considered or suspected to have negative environmental impacts must not be implemented until scientific assessment rules out potential harm."
    },
    {
      number: "4",
      title: "Principle of environmental sustainability",
      summary: "Present and future generations must enjoy equal opportunities; the right to development must account for the needs of both current and future generations."
    },
    {
      number: "5",
      title: "Polluter pays principle",
      summary: "Any person whose behaviour or activities cause or may cause adverse environmental effects is either punished or ordered to make restitution; if restitution is impossible, ordered to rehabilitate the damaged environment."
    },
    {
      number: "6",
      title: "Principle of information dissemination and incentives",
      summary: "Every person has the right to be informed of the state of the environment and to participate in conservation strategies and activities."
    },
    {
      number: "7",
      title: "Principle of cooperation",
      summary: "Government emphasises international cooperation in environmental policy. Authorities, national and international NGOs, associations and private individuals are required to cooperate in protecting the environment."
    },

    // CHAPTER III: CONSERVATION AND PROTECTION OF NATURAL ENVIRONMENT
    // Section 1: Soil and Subsoil
    {
      number: "8",
      title: "Soil and subsoil conservation",
      summary: "Soil and subsoil are natural resources protected from all degradation; must be used sustainably in accordance with relevant laws."
    },
    {
      number: "9",
      title: "Use and management of soil and subsoil",
      summary: "Land exploitation projects for research, industry, urbanisation, rural settlement, infrastructure, intensive farming or mineral extraction require authorisation under relevant laws. Use is managed on a sustainable basis."
    },
    {
      number: "10",
      title: "Prerequisites for granting soil and subsoil exploitation licence",
      summary: "Licence issuance must consider: (1) significance and effectiveness of measures to prevent environmental degradation; (2) interests of the local community near the project; (3) obligation to rehabilitate damaged areas according to a pre-established rehabilitation plan approved by the competent authority."
    },

    // Section 2: Water Resources
    {
      number: "11",
      title: "Use of water resources",
      summary: "Rivers, streams, underground water, springs, ponds, swamps and lakes form part of the State's public domain. Their use is governed by law."
    },
    {
      number: "12",
      title: "Water resources protection",
      summary: "Water resources must be protected from all sources of pollution. Permanent water swamps with rich vegetation must receive special protection given their biodiversity conservation role."
    },

    // Section 3: Biodiversity
    {
      number: "13",
      title: "Introduction, importation and exportation of animal or plant species",
      summary: "Introduction into Rwanda, import and export of any animal or plant species must be conducted in accordance with relevant laws."
    },
    {
      number: "14",
      title: "Keeping of and trade in wild animals",
      summary: "Keeping of wild animals or their products; and hawking, sale, exchange and trade in wild animals all require prior permission from the organ in charge of tourism."
    },

    // Section 4: Atmosphere
    {
      number: "15",
      title: "Protection and conservation of the atmosphere",
      summary: "Installations likely to cause risks or pollution, vehicles, motor-driven machines, and commercial, craft or agricultural activities must operate in accordance with technical principles established by competent authorities to protect the atmosphere."
    },
    {
      number: "16",
      title: "Protection of the ozone layer",
      summary: "Use of air pollutants, ozone-depleting substances and substances likely to cause climatic changes is governed by a Ministerial Order."
    },

    // CHAPTER IV: CONSERVATION AND PROTECTION OF BUILT ENVIRONMENT
    {
      number: "17",
      title: "Liquid waste management",
      summary: "Collection, transport and disposal of wastewater follows regulations of the competent authority. Wastewater from chemical factories must be pre-treated before reaching treatment plants. Treated water meeting approved standards may be discharged into streams or lakes."
    },
    {
      number: "18",
      title: "Solid waste management",
      summary: "No person may discard solid waste in an inappropriate place. Solid waste must be sorted, collected, transported to an appropriate destination, and disposed of in an appropriate landfill or waste processing factory."
    },
    {
      number: "19",
      title: "Management of hazardous and toxic waste",
      summary: "All waste — especially from hospitals, health centres, clinics, research laboratories, industries and other hazardous or toxic sources — must be collected, treated and changed in a manner that does not degrade the environment. Management, disposal and trans-boundary movements of hazardous/toxic waste are governed by a Ministerial Order."
    },
    {
      number: "20",
      title: "Management of electronic waste",
      summary: "All electronic waste must be collected, treated and processed in an environmentally safe manner. No person may carry out collection, transportation, trading, import, dismantling or recycling of electronic waste without authorisation from the competent authority. Processing modalities determined by Ministerial Order."
    },

    // CHAPTER V: OBLIGATIONS OF STATE, DECENTRALISED ENTITIES AND LOCAL COMMUNITIES
    // Section 1: Common Obligations
    {
      number: "21",
      title: "Mainstreaming environment and climate change in development planning",
      summary: "Every socio-economic sector must mainstream environment and climate change in its policies, strategies, plans and programmes. Administrative entities, national and international NGOs, and individuals must conserve the environment and prevent adverse effects of climate change."
    },
    {
      number: "22",
      title: "Education on environment and climate change",
      summary: "State takes adequate measures for environmental education and climate change adaptation, integrating these into school curricula at all levels. Administrative entities and NGOs must sensitise the population on environmental and climate change issues."
    },
    {
      number: "23",
      title: "Green spaces",
      summary: "Government and decentralised entities must establish green spaces. Public organs in charge of housing and infrastructure must ensure green spaces are incorporated in master plans and individual construction plans."
    },
    {
      number: "24",
      title: "Climate change assessment and reporting",
      summary: "The authority in charge of climate change, with administrative entities and NGOs, must develop, regularly update, publish and make available: (1) national inventories of greenhouse gas emissions and removals; (2) national programmes for climate change mitigation; (3) national vulnerability assessments and adaptation programmes. Ministerial Order determines reporting procedure and responsibilities."
    },
    {
      number: "25",
      title: "Response measures on climate change and technology transfer",
      summary: "The authority in charge of climate change, after consulting administrative entities and NGOs, must promote and cooperate in development, application and diffusion — including technology transfer — of practices and processes that control, reduce or prevent anthropogenic greenhouse gas emissions and increase adaptive capacity."
    },

    // Section 2: Obligations of the State
    {
      number: "26",
      title: "General obligations of the State",
      summary: "State's general environmental obligations include: design and implement a general integrated environmental policy; conclude enforcement agreements with other organs; take measures to respect international environmental agreements; prohibit activities on its behalf that may degrade environment in other countries; cooperate with other states against trans-boundary pollution; protect and manage the environment using appropriate measures; establish national climate change policy and develop strategies to reduce greenhouse gas emissions and enhance adaptive capacity."
    },
    {
      number: "27",
      title: "Protection and conservation of soil",
      summary: "The State alone has supreme management power over all land on national territory. It protects and conserves soil by: (1) establishing measures to control soil erosion and pollution by chemicals, fertilisers and medicines; (2) establishing concrete measures for rehabilitation of degraded soils."
    },
    {
      number: "28",
      title: "Biodiversity protection",
      summary: "State obligations include: (1) establishing a list (by Ministerial Order) of animal and plant species to be protected based on ecosystem role, scarcity, aesthetic value, extinction threat, and economic/cultural/scientific importance; (2) identifying areas to be protected for conservation or rehabilitation of ecosystems, forests, biodiversity, protected zones, monuments, historical sites and landscapes."
    },
    {
      number: "29",
      title: "Energy use",
      summary: "State has obligations to promote effective energy use, focusing on: (1) promoting use of renewable energy; (2) promoting effective energy use; (3) promoting alternatives to wood-derived energy."
    },
    {
      number: "30",
      title: "Projects that must undergo Environmental Impact Assessment (EIA)",
      summary: "List of projects requiring EIA before obtaining authorisation for implementation established by Ministerial Order. Ministerial Order also issues instructions and procedures for conducting EIA. EIA is mandatory before any listed project may commence."
    },
    {
      number: "31",
      title: "Strategic Environmental Assessment (SEA)",
      summary: "Every policy, strategy, plan and programme must undergo a Strategic Environmental Assessment. Procedures determined by Ministerial Order."
    },
    {
      number: "32",
      title: "Environmental audit",
      summary: "Every project with significant potential environmental impact must undergo an environmental audit both during and after implementation. List of projects subject to environmental audit, and audit instructions and procedures, established by Ministerial Order."
    },
    {
      number: "33",
      title: "Consideration and approval of environmental studies",
      summary: "EIA, environmental audit and SEA must be approved by the Authority (REMA) or another State organ authorised in writing by the Authority. If approved by an authorised organ, it acts on behalf of the Authority, which remains responsible for audit oversight."
    },
    {
      number: "34",
      title: "Cost of environmental assessments",
      summary: "EIA and environmental audit consultancy costs are borne by the project initiator. SEA consultancy costs are borne by the recipient public institution. Ministerial Order determines fees for State-provided EIA and environmental audit services."
    },
    {
      number: "35",
      title: "Financing of environmental conservation activities",
      summary: "State sets financing mechanisms to support government initiatives, administrative entities, and national and international NGOs aiming at environmental protection and climate resilience."
    },
    {
      number: "36",
      title: "Facilitation for environment-friendly initiatives",
      summary: "Environment-friendly initiatives, import of environment-friendly materials, and factories using low-carbon technology benefit from facilitation arrangements in accordance with relevant laws."
    },
    {
      number: "37",
      title: "Water and sanitation",
      summary: "State obligations include: establishing public toilets; setting hygiene management policies for buildings, public places, roadsides and households; establishing regulations for water dams, sewerage systems, waste pipelines, landfills and treatment plants; protecting catchment areas around drinking water sources; identifying reserved areas for water system rehabilitation; and establishing effective water resource management."
    },
    {
      number: "38",
      title: "Prevention of adverse effects of climate change",
      summary: "State actions on climate change include: mainstreaming climate change into social, economic and environmental policies; promoting scientific and technological research on climate systems; and ensuring education, training and public awareness on climate change."
    },

    // Section 3: Obligations of Decentralised Entities and Communities
    {
      number: "39",
      title: "Obligations of decentralised entities",
      summary: "Decentralised entities must implement laws, policies, strategies and programmes for environmental protection in Rwanda. Specific duties include: land management and erosion control; afforestation and forest management; water body protection; efficient swamp management; protection of reserved areas and endangered species; designing domestic waste removal and collection plans; and determining hygiene/sanitation service fees."
    },
    {
      number: "40",
      title: "Obligations of the population",
      summary: "Population must: (1) protect, conserve and promote the environment individually or collectively; (2) inform competent authorities of any phenomenon that may affect the environment."
    },
    {
      number: "41",
      title: "Establishment of environment protection committees",
      summary: "Environment protection committees responsible for conservation, protection, promotion and climate change are established at the City of Kigali, District, Sector and Cell levels. Organisation, functioning and membership determined by Prime Minister's Order."
    },

    // CHAPTER VI: PROHIBITED ACTS AND PENALTIES
    // Section 1: Prohibited Acts
    {
      number: "42",
      title: "Prohibitions in wetlands and protected areas",
      summary: "Prohibited in wetlands and protected areas: dumping solid/liquid/hazardous gaseous waste in streams, rivers, swamps, ponds or lakes; damaging surface or underground water quality; depositing polluting materials in water; washing minerals in streams or lakes; building agricultural/livestock installations within 10m of streams/rivers or 50m of lakes; building cattle kraals, slaughterhouses or livestock markets within 60m of streams/rivers or 200m of lakes; building in water sources or their buffer zones (within 10m of streams, 50m of lakes); piling soil in wetlands; compacting or changing wetland nature; building within 20m of swamp boundaries; draining swamps without authorization; draining, diverting or blocking rivers without authorization; any activity in protected swamps except research/science; introducing plant or animal species into wetlands without authorization; dumping untreated hazardous waste or wastewater; depositing any substance in national waters. Exception: Minister may authorize tourism or water resource use after consultation."
    },
    {
      number: "43",
      title: "Prohibited acts related to harmful noise emission",
      summary: "Acts causing harmful or health-detrimental noise are prohibited. All noise emissions must comply with standards set by competent authority."
    },
    {
      number: "44",
      title: "Prohibited acts in protection of biodiversity",
      summary: "Prohibited: burning forests, national parks and reserved areas; burning swamps, grazing land, bushes or grass for agriculture or livestock; killing, injuring or capturing endangered species animals; destroying habitats, larvae, eggs or young of endangered species; causing death, burning, harvesting or destroying protected plants; transporting or selling remains of endangered animals or plants; cutting trees in forests, protected areas or national parks. Authority issues instructions on modalities for permitted open-air burning."
    },
    {
      number: "45",
      title: "Prohibited acts related to chemicals and waste",
      summary: "Prohibited: piling, disposing of or dumping waste in unauthorised public or inappropriate places; importing toxic waste and products harmful to human health and environment; buying, selling, importing, exporting, transiting, storing or piling chemicals or polluting/dangerous substances; using explosives, drugs, poisonous chemicals or baits in water that may harm fish; using drugs or poisonous substances to kill or render unfit for consumption wild animals; defecating, urinating, spitting or discarding human waste in inappropriate places; burning domestic waste, rubbish, tyres or plastic materials. List of prohibited chemicals determined by Ministerial Order."
    },

    // Section 2: Administrative Sanctions
    {
      number: "46",
      title: "Implementing a project without EIA clearance",
      summary: "Any person who implements a project requiring EIA without obtaining it faces: suspension of activities or closure of establishment; order to rehabilitate environmental, personal and property damage; administrative fine of 2% of total project cost."
    },
    {
      number: "47",
      title: "Polluting and damaging wetlands",
      summary: "Administrative fine of RWF 3,000,000 for: washing minerals in streams, rivers or lakes; draining swamps without authorization; draining, diverting or blocking rivers without authorization. Persons committing the latter two acts must also rehabilitate the damaged area."
    },
    {
      number: "48",
      title: "Change of nature of wetland",
      summary: "Administrative fine of RWF 5,000,000 plus mandatory rehabilitation for: compacting or changing wetland nature; conducting any activity (except research/science) in protected swamps."
    },
    {
      number: "49",
      title: "Violation of required setback distances",
      summary: "Administrative fine of RWF 500,000 plus demolition of installations for: building cattle kraal/slaughterhouse/livestock market within 60m of streams/rivers or 200m of lakes; building agricultural/livestock installation within 10m of streams/rivers or 50m of lakes; building within 20m of swamp boundaries; piling soil within restricted distances; dumping solid/liquid/hazardous gaseous waste in streams, rivers, lakes or their surroundings. If violation committed by owner of EIA-assessed project: rehabilitation of damaged ecosystem plus administrative fine of 2% of project cost."
    },
    {
      number: "50",
      title: "Polluting public and private areas",
      summary: "Piling, abandoning, disposing of waste or dumping wastewater in an unauthorised public or private place: administrative fine of RWF 50,000 plus order to remove substances or rehabilitate damage. If committed by an authorised waste treatment operator: administrative fine of RWF 5,000,000 and authorisation suspended or withdrawn."
    },
    {
      number: "51",
      title: "Polluting public or private area by human wastes",
      summary: "Defecating, urinating, spitting or discarding human waste in an inappropriate place: administrative fine of RWF 10,000; may also be compelled to clean the place."
    },
    {
      number: "52",
      title: "Burning waste",
      summary: "Unlawfully burning domestic waste, crop residues, tyres or plastic materials: administrative fine of RWF 25,000."
    },
    {
      number: "53",
      title: "Causing noise pollution",
      summary: "Causing noise pollution exceeding prescribed standards: administrative fine of RWF 500,000 (without prejudice to the Penal Code)."
    },
    {
      number: "54",
      title: "Hindering inspection",
      summary: "Wilfully delaying or hindering an inspection: administrative fine of RWF 500,000."
    },
    {
      number: "55",
      title: "Payment of fines",
      summary: "All fines under this Law are deposited in the bank account of the National Fund for Environment (FONERWA)."
    },

    // Section 3: Offences and Penalties (Criminal)
    {
      number: "56",
      title: "Trading, transportation and management of toxic waste — criminal offence",
      summary: "Buying, selling, importing, transiting, storing, immersing, burying, burning or using any means to decompose toxic waste in a harmful manner, or signing agreements authorising such activities: upon conviction, imprisonment of 7–10 years AND fine of RWF 100,000,000–200,000,000."
    },
    {
      number: "57",
      title: "Importing, immersing, burying, burning waste — criminal offence",
      summary: "Importing waste without authorisation; or immersing, burying, burning or using any other means to cause waste decomposition in a damp place: upon conviction, imprisonment of 3–5 years AND fine of RWF 5,000,000–10,000,000."
    },
    {
      number: "58",
      title: "Hunting, selling, injuring or killing protected animal species — criminal offence",
      summary: "Hunting, selling, injuring or killing a protected animal species or its products: upon conviction, imprisonment of 5–7 years AND fine of RWF 5,000,000–7,000,000."
    },
    {
      number: "59",
      title: "Uprooting or cutting protected plant species — criminal offence",
      summary: "Causing death of, destroying, harvesting or damaging protected plants: upon conviction, imprisonment of 3–5 years AND fine of RWF 1,000,000–3,000,000."
    },
    {
      number: "60",
      title: "Unauthorised introduction of plant or animal species into wetlands — criminal offence",
      summary: "Introducing any plant or animal species (alien or indigenous) into wetlands without prior authorisation of the competent authority: upon conviction, imprisonment of 3–5 years AND fine of RWF 1,000,000–3,000,000."
    },

    // CHAPTER VII: INSPECTION AND CRIMINAL INVESTIGATION
    {
      number: "61",
      title: "Staff with inspection capacity",
      summary: "Staff responsible for environmental management in their institutions have inspection authority. These are: (1) staff of the Authority (REMA); (2) staff of the City of Kigali and District offices. The Authority issues inspection procedure guidelines."
    },
    {
      number: "62",
      title: "Powers of inspectors",
      summary: "Inspectors may: (1) inspect installations, factories, stores, shops, construction, houses, machines, vehicles and products; (2) inspect factory operational records; (3) take samples of elements suspected of degrading the environment, measure and conduct required research; (4) provisionally suspend or ban activities or materials considered to degrade the environment; (5) impose administrative fines provided under this Law."
    },
    {
      number: "63",
      title: "Granting the power of criminal investigation",
      summary: "An Order of the Minister of Justice grants some Authority staff the power of criminal investigation in environmental matters."
    },

    // CHAPTER VIII: FINAL PROVISIONS
    {
      number: "64",
      title: "Drafting and adoption",
      summary: "Drafted in English, considered and adopted in Kinyarwanda."
    },
    {
      number: "65",
      title: "Repealing provision",
      summary: "All prior legal provisions contrary to this Law are repealed."
    },
    {
      number: "66",
      title: "Commencement",
      summary: "Enters into force on date of publication in the Official Gazette (21/09/2018)."
    }
  ],
  penalties: [
    // Administrative fines
    "RWF 10,000 — human waste in inappropriate place (Article 51)",
    "RWF 25,000 — unlawful burning of domestic waste, crop residues, tyres or plastics (Article 52)",
    "RWF 50,000 + removal/rehabilitation — dumping waste in unauthorised public/private area (Article 50)",
    "RWF 500,000 + demolition — violation of required setback distances from water bodies/wetlands (Article 49)",
    "RWF 500,000 — noise pollution (Article 53)",
    "RWF 500,000 — hindering inspection (Article 54)",
    "RWF 3,000,000 + rehabilitation — washing minerals in streams/lakes; draining/diverting/blocking rivers without authorisation (Article 47)",
    "RWF 5,000,000 + rehabilitation — compacting or altering wetland nature; conducting prohibited activities in protected swamps (Article 48)",
    "RWF 5,000,000 + authorisation suspended/withdrawn — waste dumping by authorised waste operator (Article 50)",
    "2% of total project cost + suspension/closure + rehabilitation — implementing project without required EIA (Article 46)",
    "2% of project cost + ecosystem rehabilitation — setback violations by EIA-assessed project owner (Article 49)",
    // Criminal penalties
    "7–10 years imprisonment + RWF 100,000,000–200,000,000 — trading, importing, managing toxic waste harmfully (Article 56)",
    "5–7 years imprisonment + RWF 5,000,000–7,000,000 — hunting/selling/injuring/killing protected animal species (Article 58)",
    "3–5 years imprisonment + RWF 5,000,000–10,000,000 — importing waste without authorisation; immersing/burying/burning waste in damp places (Article 57)",
    "3–5 years imprisonment + RWF 1,000,000–3,000,000 — destroying/uprooting protected plants (Article 59)",
    "3–5 years imprisonment + RWF 1,000,000–3,000,000 — unauthorised introduction of species into wetlands (Article 60)",
    "All administrative fines paid to FONERWA (National Fund for Environment) (Article 55)"
  ],
  regulator_detail: "Rwanda Environment Management Authority (REMA) — referred to as 'the Authority' / 'Ikigo'. Key powers: approves EIA, environmental audits and SEAs; issues inspection instructions; may authorise other State organs to approve environmental studies on its behalf; staff of REMA, City of Kigali and Districts have inspection powers. Minister of Justice grants criminal investigation powers to designated REMA staff (Article 63). Key Ministerial Orders required for: list of EIA-required projects (Art. 30); EIA procedures (Art. 30); SEA procedures (Art. 31); environmental audit list and procedures (Art. 32); EIA/audit fees (Art. 34); protected species list (Art. 28); prohibited chemicals list (Art. 45); hazardous waste management (Art. 19); electronic waste modalities (Art. 20); ozone/climate substances (Art. 16); climate reporting (Art. 24); environment committee structure (Art. 41 — Prime Minister's Order).",
  keyDeadlines: [
    "EIA must be completed BEFORE project launch — failure triggers 2% fine + suspension/closure (Article 46)",
    "SEA required for every policy, strategy, plan and programme before implementation (Article 31)",
    "Environmental audit required during AND after project implementation for significant-impact projects (Article 32)",
    "Merger/project notification: no specific statutory deadline in this law — refer to sector-specific licensing law",
    "Setback distances (absolute, not time-based): 10m from streams/rivers for agricultural installations; 50m from lakes for agricultural installations; 20m from swamp boundaries for construction; 60m from streams/rivers for livestock kraals/slaughterhouses/markets; 200m from lakes for same (Article 42 and 49)"
  ]
}
  {
    {
  id: "public-procurement",
  shortName: "Public Procurement Law",
  fullName: "Law No. 031/2022 of 21/11/2022 Governing Public Procurement",
  category: "procurement",
  regulator: "Rwanda Public Procurement Authority (RPPA) — referred to as 'the State organ in charge of public procurement'; Minister of Public Procurement (Ministerial Orders); Independent Review Panel (appeals)",
  relevantFor: ["corporate", "construction", "government-suppliers", "consulting", "all-sectors"],
  articles: [
    // CHAPTER I: GENERAL PROVISIONS
    {
      number: "1",
      title: "Purpose",
      summary: "Governs public procurement in Rwanda."
    },
    {
      number: "2",
      title: "Definitions",
      summary: "Defines: public tender committee, general instructions, framework agreement, procurement contract, public procurement, goods/supplies, collusive/fraudulent/obstructive practices, tender document, standard bidding document, legal entity, e-procurement, bid security, performance security, requirements document, terms of reference, bid/tender, study, open tender, tender for works, State-owned company, Minister (of Public Procurement), beneficial owner, force account, consultancy services, non-consultancy services, procurement officer, day (every calendar day including holidays unless tender document states otherwise), bidder, e-procurement portal, central purchasing body, procuring entity, signatory of tender contract (Chief Budget Manager), successful bidder."
    },
    {
      number: "3",
      title: "Scope of application",
      summary: "Applies to all procurement of works, goods/supplies and consultancy/non-consultancy services by procuring entities. Exceptions: Presidential Order governs classified defence/security procurement; Ministerial Order governs diplomatic mission procurement, State-owned companies with special financial status, emergency procurement, and innovation procurement. In case of conflict between this Law and a donor/partner agreement, the agreement prevails."
    },
    {
      number: "4",
      title: "Use of e-procurement system",
      summary: "All procuring entities must conduct procurement through the e-procurement system. RPPA may authorise procurement outside the system; criteria determined by Ministerial Order."
    },
    {
      number: "5",
      title: "Organisation of public procurement",
      summary: "Procurement is governed by this Law and by regulations, code of ethics and standard bidding documents established by Ministerial Order. RPPA is responsible for overall organisation and prepares general instructions, standard bidding documents and guidelines."
    },
    {
      number: "6",
      title: "Fundamental principles",
      summary: "Public procurement is governed by: (1) transparency; (2) competition; (3) economy; (4) professionalism; (5) fairness and inclusiveness; (6) efficiency and sustainability; (7) value for money and fast work; (8) accountability."
    },

    // CHAPTER II: AWARD OF PUBLIC PROCUREMENT
    // Section 1: Entities
    {
      number: "7",
      title: "Entities involved in public procurement",
      summary: "Three entities: (1) RPPA (State organ in charge of public procurement); (2) procuring entity; (3) independent review panel. Prime Minister may establish inter-institutional panels for specific tenders."
    },
    {
      number: "8",
      title: "Collaboration",
      summary: "Procuring entities, bidders, prospective bidders and contract executors must cooperate with RPPA in carrying out their respective duties."
    },
    {
      number: "9",
      title: "Public procuring entities",
      summary: "Procuring entities include: central government organs; specialised organs; national councils; public institutions; national commissions; government projects; decentralised administrative entities; State-owned companies; Rwandan diplomatic missions and representative agencies abroad; any other organ empowered by the Chief Budget Manager."
    },
    {
      number: "10",
      title: "Public tender committee and its responsibilities",
      summary: "Each procuring entity establishes a permanent public tender committee responsible for: evaluating bids; recommending tender awards; advising on all procurement matters; reviewing tender documents before publication; recommending non-open-tender methods; recommending contract amendments; opening bids not submitted via e-procurement. Composition and functioning determined by Ministerial Order. Ad hoc committees may be established by the supervising authority upon request for specific tenders."
    },
    {
      number: "11",
      title: "Procurement officer and responsibilities",
      summary: "Procurement officer(s) manage the full procurement process from planning to contract completion. Responsibilities include: drafting procurement plans and revisions; preparing tender documents; advertising and distributing tender notices; receiving and safe-keeping bids; seeking approvals for award recommendations; preparing award notifications; drafting contracts and amendments; monitoring contract execution."
    },
    {
      number: "12",
      title: "Responsibilities of user department",
      summary: "User department identifies procurement needs, prepares technical specifications and terms of reference, approves contract execution conformity, and participates in contract management."
    },
    {
      number: "13",
      title: "Responsibilities of legal adviser",
      summary: "Legal adviser provides advice on: tender document preparation; contract negotiation; contract drafting and amendments; issues arising from tender award or execution."
    },
    {
      number: "14",
      title: "Responsibilities of Chief Budget Manager",
      summary: "Chief Budget Manager appoints/dismisses tender committee members; approves and submits procurement plans to RPPA; approves tender documents before publication; approves tender committee reports, negotiation reports, award reports and contract management reports; signs the procurement contract; appoints contract manager or contract management team; ensures overall coordination of contract management; and reports to the head of entity, supervising authority and RPPA on plan implementation and due diligence."
    },
    {
      number: "15",
      title: "Responsibilities of Councils and Boards of Directors",
      summary: "Councils, Boards of Directors and similar organs must approve the public procurement plan and its revisions, and follow up their implementation."
    },

    // Section 3: Planning
    {
      number: "16",
      title: "Public procurement planning",
      summary: "After adoption of the State Finance Law, each procuring entity must prepare and submit via e-procurement an annual procurement plan to the Ministry and RPPA not later than 31 July of each year. Plan indicates activities, expected results and approved budget. Content, format and publication modalities determined by Ministerial Order."
    },
    {
      number: "17",
      title: "Revision of procurement plan",
      summary: "Procurement plan may be revised up to twice per fiscal year; more than twice only where necessary. Revision criteria determined by Ministerial Order."
    },
    {
      number: "18",
      title: "Factors in procurement planning",
      summary: "Plan is based on market price research. Budget must be confirmed before any tender launch. Tender cannot be solicited without budget in the adopted budget unless Minister approves otherwise. For multi-year tenders, each fiscal year's budget covers that year's activities. Works tender requires an approved detailed study before budget is included. Procuring entity may not award a tender before adoption of State budget, unless Minister of Finance approves commencement."
    },
    {
      number: "19",
      title: "Communication in public procurement",
      summary: "All procurement communications are via e-procurement. If e-procurement is unavailable, written (hard copy or electronic address) communication is used. Pre-tender meetings and site visits must be documented and shared with all prospective bidders. All procurement information must be provided within 5 working days of request."
    },
    {
      number: "20",
      title: "Confidentiality",
      summary: "During and after procurement, procuring entities and their staff may not disclose: information whose disclosure would impede law compliance or harm public interest; information prejudicing a bidder's commercial interests or fair competition; bid evaluation and comparison information; bid content. Exceptions: disclosure to contract signatory; legal compliance; appeal/investigation/audit purposes; court order."
    },

    // Section 4: Independent Review Panel
    {
      number: "21",
      title: "Independent review panel",
      summary: "Composed of at least 11 members drawn from public sector, private sector and civil society. At least 30% must be female. Composition, organisation, responsibilities, powers, functioning and members' terms determined by Ministerial Order."
    },

    // Section 5: Types and Methods
    {
      number: "22",
      title: "Types of public procurement",
      summary: "Four types: (1) works; (2) goods or supplies; (3) consultancy services; (4) non-consultancy services."
    },
    {
      number: "23",
      title: "Methods of procurement",
      summary: "Default method: open competition. Other methods permitted under law: (1) prequalification; (2) restricted tendering; (3) request for quotations; (4) single-source/direct contracting; (5) simplified methods; (6) force account; (7) community participation; (8) two-stage tendering; (9) reverse auctioning; (10) design contest; (11) turnkey; (12) competitive dialogue; (13) design-and-build; (14) pre-financing. Ministerial Order determines modalities, criteria and factors for national vs international open tender."
    },

    // Section 6: Tender Award Process
    {
      number: "24",
      title: "Tender document",
      summary: "Before preparing tender document, procurement officer confirms the tender is in the procurement plan and budget is available. Tender document prepared in accordance with this Law, implementing orders, RPPA regulations and instructions, and standard bidding document."
    },
    {
      number: "25",
      title: "Content of tender document",
      summary: "Tender document must contain: specific requirements and delivery/completion timelines; applicable Rwanda or international standards; quantity description and delivery period; study documents (except bill of quantities estimate for works); drawings and bills of quantities for works; general and specific conditions including performance security requirements; procuring entity reference number; instructions for bid preparation and submission (bid form, bid security requirements and amount, qualification evidence); bid validity period; evaluation and comparison criteria; clause permitting cancellation before signing; beneficial ownership disclosure requirements. Discriminatory clauses are prohibited."
    },
    {
      number: "26",
      title: "Description of specifications",
      summary: "Specifications must define expected results with objectivity and neutrality. Cannot refer to specific brand, trade name or origin unless no other way to describe characteristics — in that case 'or equivalent' must be added."
    },
    {
      number: "27",
      title: "Tender advertisement",
      summary: "All public tenders posted on e-procurement portal. Procuring entity may also use other channels for advertising, but procurement procedure itself is always conducted via e-procurement. Ministerial Order determines content of tender notice."
    },
    {
      number: "28",
      title: "Availability of tender document",
      summary: "Procuring entity makes tender document available as per the tender notice and charges a fee to prospective bidders. Fee determined by Ministerial Order."
    },
    {
      number: "29",
      title: "Clarifications on tender document",
      summary: "Prospective bidders may request clarifications within 2/3 of the bid submission period from publication date. Procuring entity must respond within 1/6 of the bid submission period from receipt of the last clarification request. Responses shared with all prospective bidders without identifying the requestor."
    },
    {
      number: "30",
      title: "Amendments to tender document",
      summary: "Procuring entity may amend tender document at any time before bid submission deadline via addendum. When amended, the submission deadline must be extended by at least 1/3 of the original preparation period from the amendment publication date (extension may not exceed the original period)."
    },

    // Bid Preparation
    {
      number: "31",
      title: "Time for preparation of bids",
      summary: "National open tender: minimum 21 calendar days from publication of tender notice. International open tender: minimum 30 calendar days from publication. Other methods: determined by Ministerial Order."
    },
    {
      number: "32",
      title: "Bid security",
      summary: "Required for all open tender proceedings. Amount, format and seizure modalities determined by Ministerial Order. Procuring entity returns bid security within 7 days of: tender cancellation; confirmation that no successful bidder was found; or signing of procurement contract."
    },
    {
      number: "33",
      title: "Submission and receipt of bids",
      summary: "Bids submitted and received via e-procurement or other ways approved by competent institutions. Submission requirements determined by Ministerial Order."
    },
    {
      number: "34",
      title: "Amendment to bid",
      summary: "Submitted bid may be amended before bid submission deadline, via e-procurement or otherwise. Modalities determined by Ministerial Order."
    },
    {
      number: "35",
      title: "Bid validity period",
      summary: "Determined by tender document; maximum 120 days from bids opening date. Procuring entity may request one extension not exceeding 60 days (unless authorised by RPPA). Bidder not wishing to extend is not obliged to accept."
    },
    {
      number: "36",
      title: "Bids opening",
      summary: "Opened via e-procurement or by other means for tenders outside e-procurement. Procedure determined by Ministerial Order."
    },
    {
      number: "37",
      title: "Evaluation of bids",
      summary: "Public tender committee evaluates and compares bids strictly based on criteria in the tender document — nothing may be added or removed. Evaluation report produced. Steps and modalities determined by Ministerial Order."
    },
    {
      number: "38",
      title: "Responsiveness of bids",
      summary: "A bid is responsive if it substantially conforms to all requirements specified in the tender document."
    },
    {
      number: "39",
      title: "Bidder qualification requirements",
      summary: "Qualified bidder must: have qualified personnel, equipment, experience and financial capacity; have legal capacity to contract; not be in liquidation, bankruptcy or winding up; not be debarred or suspended from public procurement; have provided accurate and appropriate evidence. Successful bidder is the qualified bidder with the lowest compliant price relative to market reality (excluding abnormally high or low prices)."
    },
    {
      number: "40",
      title: "Due diligence on bid content",
      summary: "After evaluation and before award, procuring entity conducts due diligence on the successful bidder's bid content. Results included in evaluation report. Bids with false, confusing or incomplete information are disqualified."
    },
    {
      number: "41",
      title: "Clarifications during evaluation",
      summary: "Procuring entity may request written clarifications from a prospective bidder to assist in evaluation. Clarifications cannot change the substance of the bid."
    },
    {
      number: "42",
      title: "Arithmetic errors",
      summary: "Any bid containing arithmetic errors is disqualified during evaluation."
    },
    {
      number: "43",
      title: "Rejection of all bids",
      summary: "Public tender committee must reject all bids if: all prices exceed available budget; all bids are substantially non-responsive; or all bids contain abnormally high or low prices."
    },
    {
      number: "44",
      title: "Cancellation of procurement proceedings",
      summary: "Procuring entity may cancel procurement if: expected award deadline exceeded; tender no longer needed; fraud or unfairness is established. All bidders must be notified in writing with reasons. Cancelled tender (due to being unnecessary) cannot be re-advertised without RPPA authorisation."
    },
    {
      number: "45",
      title: "Effects of rejection or cancellation",
      summary: "Procuring entity not liable for consequences of rejecting bids or cancelling proceedings under this Law, unless caused by its own negligence."
    },
    {
      number: "46",
      title: "Notification of tender award",
      summary: "Before bid validity expiry, procuring entity simultaneously notifies the successful bidder and all unsuccessful bidders of the provisional evaluation outcome. Notification specifies key award criteria and informs bidders they have 7 days to lodge a complaint before the contract is signed. Procuring entity cannot impose additional conditions not in the tender document as a prerequisite for award. After contract signing, all other bidders are notified of non-selection."
    },

    // Appeals
    {
      number: "47",
      title: "Right to request review",
      summary: "Any prospective or actual bidder may request review of any conduct in procurement proceedings that violates this Law, at any stage of proceedings."
    },
    {
      number: "48",
      title: "Request for review to procuring entity",
      summary: "Review request must be lodged with procuring entity within 7 days of the occurrence of the ground for review. Procuring entity head must suspend proceedings and issue a written decision within 7 days of receiving the request. If entity fails to respond or bidder is unsatisfied, bidder may appeal to the independent review panel within 7 days of notification of the entity's decision. Procuring entity must then wait 7 days after the bidder's notification before proceeding with award."
    },
    {
      number: "49",
      title: "Appeal to the independent review panel",
      summary: "Appeal must specify a specific act of omission or commission contravening this Law. Non-refundable filing fee required (amount by Ministerial Order). Bidder may be represented by an Advocate. Upon receipt, procurement proceedings are suspended until the panel's decision. Panel must decide within 15 days of receiving appeal; if unable, must notify parties and may extend by up to 15 additional days. Panel decisions are binding."
    },
    {
      number: "50",
      title: "Decision of independent review panel",
      summary: "Panel may: denounce a procurement action/decision contrary to law; require corrective action; cancel in whole or in part an unlawful decision or one that led to the contract; revise or substitute the procuring entity's decision (except the act of signing the contract itself); order bid re-evaluation with stated grounds; recommend payment of reasonable bid preparation costs where the panel finds the complainant should have won a signed contract; order cancellation of procurement proceedings."
    },
    {
      number: "51",
      title: "Publication of panel decision",
      summary: "Panel decision published on e-procurement portal and RPPA website (or RPPA website only for off-system tenders). No publication of information whose disclosure would be contrary to law, harm public interest, prejudice commercial interests or inhibit fair competition."
    },

    // Contract
    {
      number: "52",
      title: "Procurement contract",
      summary: "Successful bidder and procuring entity sign a written contract based on the tender document, winning bid, clarifications received and corrections made. Before signing, procuring entity verifies the successful bidder has no unsettled administrative fines and requests beneficial ownership disclosure."
    },
    {
      number: "53",
      title: "Contents of procurement contract",
      summary: "Contract must include all elements provided for in the tender document including technical specifications/terms of reference, prices, delivery or execution timelines, performance security and general/specific conditions. Determined by Ministerial Order."
    },
    {
      number: "54",
      title: "Contract amendments",
      summary: "Contract amendments may not change the nature of the original procurement or exceed thresholds and conditions set by Ministerial Order. Determined by Ministerial Order."
    },
    {
      number: "55",
      title: "Framework agreement",
      summary: "Framework agreement allows procuring entity to procure recurring works, services or goods at agreed prices over a specified period. Used by central purchasing body and other procuring entities. Duration determined by Ministerial Order."
    },
    {
      number: "56",
      title: "Duration of framework agreement",
      summary: "Duration of framework agreement determined by Ministerial Order."
    },
    {
      number: "57",
      title: "Tender price",
      summary: "Tender price is determined at contract signing and is fixed unless price adjustment provisions are included. Modalities determined by Ministerial Order."
    },
    {
      number: "58",
      title: "Price adjustment",
      summary: "Price adjustment in public procurement is governed by provisions of the tender document and determined by Ministerial Order."
    },
    {
      number: "59",
      title: "Price based on reimbursable costs",
      summary: "Modalities for cost-reimbursable pricing determined by Ministerial Order."
    },
    {
      number: "60",
      title: "Performance security",
      summary: "Successful bidder furnishes performance security before contract signing. Amount, format and conditions determined by Ministerial Order."
    },
    {
      number: "61",
      title: "Return of performance security",
      summary: "Performance security returned upon satisfactory completion of all contract obligations. Modalities and timelines determined by Ministerial Order."
    },

    // Consultancy Services
    {
      number: "62",
      title: "Shortlisting and expression of interest",
      summary: "For consultancy services, procuring entity shortlists qualified firms/individuals through an expression of interest process. Modalities determined by Ministerial Order."
    },
    {
      number: "63",
      title: "Submission of technical and financial proposals",
      summary: "For consultancy services, shortlisted bidders submit separate technical and financial proposals."
    },
    {
      number: "64",
      title: "Selection method and criteria for consultancy",
      summary: "Multiple selection methods for consultancy including quality and cost-based selection (QCBS), quality-based selection (QBS), fixed budget, least cost, and others. Determined by Ministerial Order."
    },
    {
      number: "65",
      title: "Evaluation of technical proposals",
      summary: "Technical proposals evaluated strictly on criteria in the tender document."
    },
    {
      number: "66",
      title: "Evaluation of financial proposals",
      summary: "Financial proposals evaluated after technical qualification confirmation."
    },
    {
      number: "67",
      title: "Negotiations for consultancy",
      summary: "Negotiations between procuring entity and top-ranked consultant before contract signing."
    },
    {
      number: "68",
      title: "Notification of consultancy award",
      summary: "Same notification and standstill requirements as goods/works (Article 46 applies)."
    },
    {
      number: "69",
      title: "Consultancy services for study of works",
      summary: "Study for works must be carried out by a qualified consultant or firm. Study content requirements determined by Ministerial Order."
    },
    {
      number: "70",
      title: "Responsibility for study of works",
      summary: "Consultant who prepared the study bears responsibility for its quality and accuracy. Liability provisions and modalities determined by Ministerial Order."
    },
    {
      number: "71",
      title: "Seizure of performance security",
      summary: "Procuring entity may seize performance security where successful bidder fails to perform contract obligations or fails to meet quality standards. Modalities determined by Ministerial Order."
    },
    {
      number: "72",
      title: "Effects of hindering security process",
      summary: "Consequences for hindrance of the security process determined by Ministerial Order."
    },
    {
      number: "73",
      title: "Exclusive and local preference",
      summary: "Preference margins may be applied in favour of local or national bidders under conditions determined by Ministerial Order."
    },
    {
      number: "74",
      title: "Currency used in public procurement",
      summary: "Procurement may be conducted in Rwandan francs or foreign currency; conditions determined by Ministerial Order."
    },
    {
      number: "75",
      title: "Joint venture",
      summary: "Bidders may participate in a joint venture. Conditions and requirements determined by Ministerial Order."
    },
    {
      number: "76",
      title: "Tender allotment",
      summary: "Procuring entity may divide a tender into lots to attract more competition or reduce risk. Conditions determined by Ministerial Order. Allotment to evade procurement thresholds or legal requirements is prohibited (Article 163)."
    },
    {
      number: "77",
      title: "Languages",
      summary: "Procurement documents may be prepared in Kinyarwanda, English or French. Determined by Ministerial Order."
    },
    {
      number: "78",
      title: "Anti-corruption measures",
      summary: "Procuring entities and bidders must comply with anti-corruption principles including prohibition of collusive, fraudulent and obstructive practices as defined in Article 2."
    },
    {
      number: "79",
      title: "Eligible bidders",
      summary: "Eligible bidders: any natural or legal person complying with requirements. Eligibility criteria, including nationality-based restrictions or requirements, determined by Ministerial Order."
    },
    {
      number: "80",
      title: "Conflict of interests",
      summary: "Persons with conflict of interest in a tender must disclose it and recuse themselves. Persons with conflict of interest are prohibited from participating in award proceedings. Definitions and conditions determined by Ministerial Order."
    },
    {
      number: "81",
      title: "Prohibited acts in public procurement",
      summary: "Prohibited: disclosing confidential procurement information; participating in a tender where a conflict of interest exists; accepting or providing gifts in connection with procurement; receiving commissions not provided for in the contract; submitting false qualifications; splitting tenders to avoid legal thresholds; bid rigging; and all acts defined as collusive, fraudulent or obstructive practices under Article 2."
    },

    // CHAPTER III: CONTRACT EXECUTION (GENERAL)
    {
      number: "82",
      title: "Supervision of works",
      summary: "Procuring entity is responsible for supervising works execution. Supervision may be done internally or through a supervision consultant. Supervision consultant must be contracted separately."
    },
    {
      number: "83",
      title: "Role of decentralised entity",
      summary: "Decentralised entities may play a role in monitoring contract execution within their jurisdiction."
    },
    {
      number: "84",
      title: "Cancellation of procurement contract",
      summary: "Contract may be cancelled in cases determined by this Law and the procurement contract terms. Modalities and effects determined by Ministerial Order."
    },
    {
      number: "85",
      title: "Sub-contracting",
      summary: "Sub-contracting permitted with procuring entity's written consent. Successful bidder remains fully responsible for sub-contracted activities. Conditions determined by Ministerial Order."
    },
    {
      number: "86",
      title: "Use of procurement contract as guarantee",
      summary: "Successful bidder may use procurement contract as security for a bank loan only with written authorisation from the procuring entity. Conditions determined by Ministerial Order."
    },
    {
      number: "87",
      title: "Claim for compensation",
      summary: "Successful bidder may claim compensation for losses attributable to the procuring entity in accordance with contract terms and this Law."
    },
    {
      number: "88",
      title: "Guarantee duration for works",
      summary: "Works guarantee duration and conditions determined by tender document and Ministerial Order."
    },
    {
      number: "89",
      title: "Compliance requirements",
      summary: "Successful bidder must comply with all applicable laws during contract execution including environmental, labour and safety regulations."
    },
    {
      number: "90",
      title: "Paying workers",
      summary: "Successful bidder must pay workers in accordance with applicable labour laws. Procuring entity may seize payment due to the successful bidder where it fails to pay its workers."
    },
    {
      number: "91",
      title: "Payment to contractor's supplier of materials",
      summary: "Procuring entity may make direct payment to material suppliers of a defaulting contractor under conditions determined by Ministerial Order."
    },
    {
      number: "92",
      title: "Execution of multiple procurement contracts",
      summary: "Where a successful bidder holds multiple public procurement contracts, execution of all must comply with timelines and quality standards."
    },

    // Works Execution (Articles 93-120)
    {
      number: "93",
      title: "Responsibility to validate the study",
      summary: "Successful bidder for works must review and validate the study before commencing works. Any errors identified must be reported to the procuring entity."
    },
    {
      number: "94",
      title: "Commencement of works",
      summary: "Works commence on a date agreed and notified in writing. Conditions determined by Ministerial Order."
    },
    {
      number: "95",
      title: "Accident insurance during works",
      summary: "Successful bidder must maintain accident insurance covering all workers during the works period."
    },
    {
      number: "96",
      title: "Planning for execution of works",
      summary: "Successful bidder submits a detailed works execution plan to procuring entity before commencement."
    },
    {
      number: "97",
      title: "Additional instructions by procuring entity",
      summary: "Procuring entity may issue additional instructions during works execution within the contract scope."
    },
    {
      number: "98",
      title: "Demarcating the site for works",
      summary: "Procuring entity must demarcate and hand over the work site to the successful bidder before commencement."
    },
    {
      number: "99",
      title: "Office of supervising official",
      summary: "Supervising official must have an office at or near the work site."
    },
    {
      number: "100",
      title: "Daily supervision of works",
      summary: "Works must be supervised daily. Supervision officer records all activities in the daily log book."
    },
    {
      number: "101",
      title: "Security at work site",
      summary: "Successful bidder is responsible for security at the work site throughout contract execution."
    },
    {
      number: "102",
      title: "Daily site log book",
      summary: "A daily log book must be maintained at the site recording all activities, instructions and events."
    },
    {
      number: "103",
      title: "Daily statement of work done",
      summary: "Daily statements of work done must be prepared and signed by both parties."
    },
    {
      number: "104",
      title: "Rubbles and materials from demolition",
      summary: "Ownership and disposal of demolition rubbles and materials determined by the contract or, where not specified, reverts to the procuring entity."
    },
    {
      number: "105",
      title: "Responsibility to transport rubbles",
      summary: "Successful bidder responsible for transporting and disposing of rubbles unless the contract provides otherwise."
    },
    {
      number: "106",
      title: "Discoveries during execution",
      summary: "Any discoveries (archaeological, mineral, etc.) during works must be reported immediately to the procuring entity. Work in that area may be suspended pending decision."
    },
    {
      number: "107",
      title: "Approval of materials",
      summary: "All materials used must be approved by the supervising official before incorporation into works."
    },
    {
      number: "108",
      title: "Fraud and defect",
      summary: "Any fraud or defect discovered during or after works must be rectified by the successful bidder at its own expense."
    },
    {
      number: "109",
      title: "Suspension of works",
      summary: "Works may be suspended by the procuring entity or the successful bidder under defined circumstances. Conditions and effects determined by the contract and Ministerial Order."
    },
    {
      number: "110",
      title: "Measures during suspension of works",
      summary: "During suspension, both parties take measures to preserve the works site and equipment."
    },
    {
      number: "111",
      title: "Foreseeable works",
      summary: "Quantities in the bill of quantities are estimates; variations within foreseeable ranges do not entitle to price renegotiation unless they exceed contractual thresholds."
    },
    {
      number: "112",
      title: "Unexpected circumstances and notification",
      summary: "Unexpected circumstances (beyond contract provisions) must be notified immediately by the affected party. Grounds and notification procedure determined by Ministerial Order."
    },
    {
      number: "113",
      title: "Rights of procuring entity in unexpected circumstances",
      summary: "Procuring entity retains rights to direct works continuation, modify scope or terminate contract in unexpected circumstances."
    },
    {
      number: "114",
      title: "Failure to execute the contract for works",
      summary: "Failure by the successful bidder to execute without valid reason triggers administrative and financial sanctions. Procuring entity reports to RPPA."
    },
    {
      number: "115",
      title: "Report of failure to execute",
      summary: "Procuring entity prepares and submits a formal failure report to RPPA for sanction proceedings."
    },
    {
      number: "116",
      title: "Effects of inability to complete works",
      summary: "Contract is terminated and the performance security is seized. New procurement must be launched; costs attributable to the defaulting contractor are recovered."
    },
    {
      number: "117",
      title: "Types of official acceptance of works",
      summary: "Two types: provisional acceptance (temporary, pending defect remediation during guarantee period) and final/definitive acceptance (after guarantee period). Conditions determined by Ministerial Order."
    },
    {
      number: "118",
      title: "Cleaning the site",
      summary: "Successful bidder must clean and restore the works site to its original or improved state before official acceptance."
    },
    {
      number: "119",
      title: "Final statement of works",
      summary: "Final works statement produced after definitive acceptance; basis for final payment. Modalities determined by Ministerial Order."
    },
    {
      number: "120",
      title: "Ten-year accountability",
      summary: "Successful bidder and supervising consultant are jointly liable for structural defects for ten (10) years from the date of definitive acceptance of works."
    },

    // Goods Execution (Articles 121-128)
    {
      number: "121",
      title: "Delivery period",
      summary: "Delivery period for goods/supplies is specified in the contract. Modalities for extensions determined by Ministerial Order."
    },
    {
      number: "122",
      title: "Planning for execution of supplies contract",
      summary: "Supplier must submit a delivery execution plan to procuring entity before commencement."
    },
    {
      number: "123",
      title: "Suspension of supplies contract",
      summary: "Supplies contract may be suspended under defined circumstances. Duration of suspension must not exceed limits in the contract."
    },
    {
      number: "124",
      title: "Delivery note",
      summary: "All deliveries must be accompanied by a signed delivery note specifying items, quantities and condition."
    },
    {
      number: "125",
      title: "Verification of goods or supplies",
      summary: "User department verifies quality and quantity of delivered goods against specifications. Verification report prepared."
    },
    {
      number: "126",
      title: "Rejection of delivered items",
      summary: "Non-conforming items must be returned to the supplier for replacement within the timeframe specified in the contract."
    },
    {
      number: "127",
      title: "After-sale service",
      summary: "Successful bidder must provide after-sale service as specified in the tender document and contract."
    },
    {
      number: "128",
      title: "Final statement for supplies contract",
      summary: "Final statement produced upon completion of all deliveries and verifications; basis for final payment."
    },

    // Consultancy Execution (Articles 129-131)
    {
      number: "129",
      title: "Code of conduct for consultancy bidder",
      summary: "Successful consultancy bidder must comply with ethics rules and maintain impartiality, especially when managing works supervision."
    },
    {
      number: "130",
      title: "Reports or documents to be produced",
      summary: "Consultancy service reports and documents must be produced as required in the terms of reference."
    },
    {
      number: "131",
      title: "Final statement of consultancy contract",
      summary: "Final statement produced upon completion and acceptance of all deliverables."
    },

    // Force Majeure (Articles 132-139)
    {
      number: "132",
      title: "Exemption from liability",
      summary: "Parties are exempted from liability for non-performance caused by force majeure, provided proper notification has been given."
    },
    {
      number: "133",
      title: "Loss, damage or destruction due to force majeure",
      summary: "Losses, damages and destruction caused by force majeure are borne by the affected party unless otherwise agreed in the contract."
    },
    {
      number: "134",
      title: "Communication of force majeure",
      summary: "The party affected by force majeure must notify the other party in writing within a specific period of occurrence. Notification period determined by the contract."
    },
    {
      number: "135",
      title: "Continuation of activities in case of force majeure",
      summary: "Upon cessation of force majeure, parties must resume obligations as soon as reasonably practicable."
    },
    {
      number: "136",
      title: "Extension or cancellation due to force majeure",
      summary: "Procuring entity may extend contract execution period or cancel the contract if force majeure persists beyond contractual limits."
    },
    {
      number: "137",
      title: "Act of Government (fait du prince)",
      summary: "Government decisions that unilaterally change contract conditions entitle the successful bidder to contract price revision or, where revision is impossible, to contract termination with appropriate compensation."
    },
    {
      number: "138",
      title: "Reasons for termination of contract",
      summary: "Grounds for termination include: force majeure; fundamental breach by either party; insolvency/liquidation of successful bidder; Act of Government; or mutual agreement. Effects and procedure determined by Ministerial Order."
    },
    {
      number: "139",
      title: "Successful bidder's death",
      summary: "In case of death of a natural person successful bidder, procuring entity may continue the contract with the estate/heirs or terminate. Modalities determined by Ministerial Order."
    },

    // Payment (Articles 140-144)
    {
      number: "140",
      title: "Time for effecting advance payment",
      summary: "Advance payment must be made within a period determined by the contract after performance security is furnished."
    },
    {
      number: "141",
      title: "Amount of advance payment and security",
      summary: "Advance payment amount and corresponding advance payment security determined by Ministerial Order."
    },
    {
      number: "142",
      title: "Refund of advance payment",
      summary: "Advance payment recovered through progressive deductions from invoices. Refund modalities and advance payment security return determined by Ministerial Order."
    },
    {
      number: "143",
      title: "Payment in instalments",
      summary: "Instalment payment schedule determined by the contract terms and Ministerial Order."
    },
    {
      number: "144",
      title: "Payment of invoices",
      summary: "Procuring entity must pay invoices within the period specified in the contract. Delay in payment entitles the successful bidder to interest as determined by Ministerial Order."
    },

    // CHAPTER IV: ADMINISTRATIVE SANCTIONS
    {
      number: "145",
      title: "Poor execution or non-execution of procurement contract",
      summary: "Successful bidder who poorly executes, fails to meet quality standards or fails to execute without cause attributable to the procuring entity: debarment from public procurement for 1 year + administrative fine of 5% of contract value + contract termination. If the bidder was already subject to 5% delay deduction, only the 1-year debarment applies. No new public contract while administrative fine remains unpaid."
    },
    {
      number: "146",
      title: "False information, fraud, collusion and causing State loss",
      summary: "Administrative fine of 5% of bidding price + contract termination for: making misrepresentations or providing false information; using collusive, fraudulent or obstructive practices to obtain a contract; making errors in study review causing State loss; causing State loss during contract execution; colluding with other bidders to interfere with fair competition; colluding with public servants in preparing the tender. No new public contract while fine unpaid."
    },
    {
      number: "147",
      title: "Recidivism",
      summary: "For recidivism under Articles 145 and 146: administrative fine and debarment period are doubled."
    },
    {
      number: "148",
      title: "Using false contract, bidding while debarred, or helping debarred person",
      summary: "Definitive (permanent) debarment from public procurement for: entering new procurement contract while debarred; using false procurement contract to obtain a bank loan; recidivism in Article 146 offence; using fraudulent means to evade a debarment sanction (including name change, indirect participation, creating new company, appearing in management of bidding entity while debarred); or an entity helping a debarred company continue to participate."
    },
    {
      number: "149",
      title: "Debarred person during contract execution",
      summary: "If debarred while executing a contract, the successful bidder continues execution until completion. Modifications to the contract require RPPA authorisation. Framework contracts with debarred persons cannot be renewed."
    },
    {
      number: "150",
      title: "Persons subject to sanctions",
      summary: "Sanctions apply to: the bidder/successful bidder in the bid name; shareholders/partners who interfere with entity management (1-year debarment first offence, 2 years second offence, permanent third offence); managing director; executive director; joint venture entities (jointly liable). Bidder cannot escape sanction by citing actions of its own employees acting on its behalf."
    },
    {
      number: "151",
      title: "Procedure for imposing sanctions",
      summary: "RPPA notifies bidder in writing of charges and hearing date via e-procurement or electronic address. National bidder summoned within 15 days of notification; foreign bidder within 30 days. If the summoned bidder provides valid reason for non-appearance, extension of 7 days (Rwanda) or 14 days (abroad). Upon notification of charges, bidder is prohibited from changing its name, management or shareholding. RPPA takes a decision within 45 days of the hearing. Decisions may be preceded by a provisional suspension of up to 90 days (renewable once) for investigation purposes. RPPA publishes and maintains a list of debarred bidders."
    },
    {
      number: "152",
      title: "Hearing modalities",
      summary: "During hearing, bidder has right to legal representation or assistance. Hearing is recorded in a signed affidavit, signed by the bidder, lawyer (if any) and investigator."
    },
    {
      number: "153",
      title: "Decision-making",
      summary: "RPPA decision issued within 45 days of the hearing. Decision takes effect from issuance until annulled by court or after sanction served. RPPA publishes list of debarred bidders on e-procurement portal and RPPA website."
    },
    {
      number: "154",
      title: "Administrative appeal (gracious recourse)",
      summary: "Sanctioned person may appeal to RPPA within 7 days of notification of the decision, before going to court. RPPA must decide within 45 days of receiving the appeal."
    },
    {
      number: "155",
      title: "Recourse to courts",
      summary: "Sanctioned person may file a court case within 30 days of notification of the appeal decision."
    },

    // Section 2: Delay Penalties
    {
      number: "156",
      title: "Delay in contract execution",
      summary: "Successful bidder who delays execution without lawful excuse incurs a daily penalty of 1‰ (one thousandth) of total contract value per day of delay. Penalty capped at 5% of contract value; if 5% is reached, contract may be terminated. For framework contracts, percentage based on purchase order or terms of reference value."
    },
    {
      number: "157",
      title: "Delay in correcting defects",
      summary: "Successful bidder must correct defects or replace non-conforming supplies within 15 days of request. Failure to comply within 15 days triggers daily penalty of 1‰ of the defective item's value; after the 15-day period, the rate increases by an additional 1‰ per day until correction. Penalties deducted from unpaid invoices or performance security."
    },
    {
      number: "158",
      title: "Termination for poor performance or delay",
      summary: "If cumulative penalties (delay + poor execution) reach the value of the performance security, contract is automatically terminated at the fault of the successful bidder."
    },
    {
      number: "159",
      title: "Payment of costs for new contract preparation",
      summary: "If contract is terminated due to successful bidder's breach, bidder bears cost of completing remaining works plus a lump sum of 1% of the new contract price for preparation. These amounts deducted from unpaid invoices or recovered by other means. Any price surplus between old and new contract belongs to procuring entity."
    },

    // Section 3: Sanctions on Public Servants
    {
      number: "160",
      title: "Failure by procuring entity staff",
      summary: "Procuring entity staff linked to procurement who: fail to communicate legally required documents/information; refuse or delay payment without reason; refuse to return security without reason; contribute to refusal/delay of acceptance without reason; fail to keep proper procurement records; contribute to contract breaches; fail to seize payments of non-paying contractors; contribute to awarding unplanned tenders; purchase expiring unused goods; participate in off-system procurement without reason; fail to report off-system tenders; award without bidder categorisation compliance; or purchase unnecessary goods — liable to suspension without pay for up to 3 months. More serious offences (awarding without budget, without study, without signed contract, or without supervision tender where required) — liable to dismissal."
    },
    {
      number: "161",
      title: "Breach of ethics by successful bidder",
      summary: "Successful bidder who violates procurement code of ethics faces contract cancellation plus other administrative sanctions under the code of ethics."
    },
    {
      number: "162",
      title: "Principle on administrative sanctions",
      summary: "Administrative sanctions for procurement faults do not preclude or are not precluded by criminal liability or prosecution under criminal laws."
    },

    // CHAPTER V: CRIMINAL OFFENCES
    {
      number: "163",
      title: "Illegal awarding of public procurement — criminal offence",
      summary: "Criminal offence for: disclosing technical specifications before publication; refusing to provide tender document without reason; influencing the tender committee to use non-document criteria; using non-document criteria to award; splitting tender to evade law requirements; awarding or recommending award to an entity without legal personality; awarding or recommending award to a debarred bidder; participating in award while having a conflict of interest; signing contract without prior performance security; failing to seize required securities; failing to apply value-for-money and transparency causing State loss; using unauthorised methods causing State loss; awarding without contract or additional contract where needed; managing contract contrary to law causing State loss. Upon conviction: imprisonment 5–7 years + fine RWF 2,000,000–5,000,000."
    },
    {
      number: "164",
      title: "Collusion in public procurement — criminal offence",
      summary: "Collusive practices in public procurement: upon conviction, imprisonment 5–7 years + fine RWF 2,000,000–5,000,000. If committed by an official acting under superior's orders: superior faces imprisonment 7–10 years + fine RWF 5,000,000–10,000,000."
    },
    {
      number: "165",
      title: "Unjustified advantages during contract execution — criminal offence",
      summary: "Committing contract amendments in violation of law; revising prices not provided for in tender document; approving/paying unexecuted, poorly executed or fictitious works; paying more than the contractual amount. Upon conviction: imprisonment 5–7 years + fine equal to 50% of State losses. If committed under superior's orders: superior faces imprisonment 7–10 years + fine equal to 50% of State losses."
    },
    {
      number: "166",
      title: "Influence peddling in public procurement — criminal offence",
      summary: "Using influence to cause a subordinate to make an unfair decision in procurement award or execution: upon conviction, imprisonment 5–7 years + fine RWF 5,000,000–10,000,000."
    },
    {
      number: "167",
      title: "Coercion in procurement participation — criminal offence",
      summary: "Management or staff of procuring entity who harm or threaten to harm a person, their work or property to force procurement participation or affect performance: upon conviction, imprisonment 5–7 years + fine RWF 5,000,000–10,000,000."
    },

    // CHAPTER VI: FINAL PROVISIONS
    {
      number: "168",
      title: "Validity of ongoing acts",
      summary: "All tenders in progress or completed but still under security period on the date of this Law's publication remain governed by the signed procurement contract."
    },
    {
      number: "169",
      title: "Orders in force",
      summary: "Orders made under Law No. 62/2018 remain in force for up to 12 months from publication of this Law, insofar as they are consistent with this Law."
    },
    {
      number: "170",
      title: "Drafting and adoption",
      summary: "Drafted in English, considered and adopted in Kinyarwanda."
    },
    {
      number: "171",
      title: "Repealing provision",
      summary: "Repeals Law No. 62/2018 of 25/08/2018 on public procurement and all prior contrary provisions."
    },
    {
      number: "172",
      title: "Commencement",
      summary: "Enters into force on date of publication in the Official Gazette (22/11/2022)."
    }
  ],
  penalties: [
    // Administrative — Bidder/Successful Bidder
    "Debarment 1 year + 5% of contract value + contract termination — poor execution, failure to meet quality standards, non-execution without cause (Article 145)",
    "Debarment 1 year only (if already subject to 5% delay deduction) — same offence (Article 145)",
    "5% of bidding price + contract termination — false information, fraud, collusion, causing State loss (Article 146)",
    "Double fine and double debarment period — recidivism in Articles 145 and 146 (Article 147)",
    "Permanent debarment — using false contract for bank loan; bidding while debarred; recidivist Art.146; evading debarment by name change, new company or indirect participation; entity helping debarred company (Article 148)",
    "Daily penalty of 1‰ of total contract value per day of delay, capped at 5% of contract value — delay in execution (Article 156)",
    "Daily penalty of 1‰ of defective item value (first 15 days), escalating by additional 1‰ per day thereafter — delay in correcting defects (Article 157)",
    "Automatic contract termination — when cumulative penalties reach performance security value (Article 158)",
    "1% of new contract price (lump sum) + cost of completing remaining works — contract terminated at bidder's fault (Article 159)",
    // Administrative — Public Servants
    "Suspension without pay up to 3 months — general procurement misconduct by procuring entity staff (Article 160)",
    "Dismissal — awarding without budget, without required study, without signed contract, or without required supervision tender (Article 160)",
    "Contract cancellation + ethics code sanctions — breach of ethics by successful bidder (Article 161)",
    // Criminal
    "5–7 years imprisonment + RWF 2,000,000–5,000,000 — illegal award of public procurement; collusion in public procurement (Articles 163, 164)",
    "5–7 years imprisonment + 50% of State losses — unjustified advantages during contract execution (Article 165)",
    "5–7 years imprisonment + RWF 5,000,000–10,000,000 — influence peddling; coercion in procurement (Articles 166, 167)",
    "7–10 years imprisonment + RWF 5,000,000–10,000,000 — superior whose subordinate commits collusion under orders (Article 164)",
    "7–10 years imprisonment + 50% of State losses — superior whose subordinate commits unjustified advantages under orders (Article 165)",
    "No new public contract while any administrative fine remains unpaid (Articles 145, 146)"
  ],
  regulator_detail: "Rwanda Public Procurement Authority (RPPA) — the State organ in charge of public procurement. Powers: organises procurement system; prepares general instructions, standard bidding documents and guidelines; manages e-procurement portal; imposes administrative sanctions; maintains and publishes list of debarred bidders; authorises off-system procurement and plan deviations. Independent Review Panel: handles appeals from bidders on procurement decisions (Article 49); binding decisions (Article 50); composed of at least 11 members (30%+ female) from public sector, private sector and civil society. Minister of Public Procurement: issues Ministerial Orders on procurement methods, plans, fees, bidding documents and other matters.",
  keyDeadlines: [
    "31 July — annual procurement plan submitted to Ministry and RPPA (Article 16)",
    "21 calendar days minimum — bid preparation period for national open tender from notice publication (Article 31)",
    "30 calendar days minimum — bid preparation period for international open tender from notice publication (Article 31)",
    "120 days maximum — bid validity period from bids opening date (Article 35); extendable once by up to 60 days",
    "7 days — procuring entity must return bid security after cancellation, no successful bidder found, or contract signing (Article 32)",
    "2/3 of bid submission period — deadline for prospective bidder to request clarifications (Article 29)",
    "1/6 of bid submission period — procuring entity must respond to clarifications from receipt of last request (Article 29)",
    "At least 1/3 of original preparation period — minimum extension when tender document is amended (Article 30)",
    "5 working days — maximum for providing any procurement information after request or occurrence (Article 19)",
    "7 days — complaint/review window for bidders after award notification, before contract signing (Article 46)",
    "7 days — deadline to lodge review request with procuring entity from occurrence of grounds (Article 48)",
    "7 days — procuring entity must issue written review decision after receiving review request (Article 48)",
    "7 days — bidder must appeal to independent review panel from notification of entity's review decision (Article 48)",
    "7 days — procuring entity standstill period after notifying bidder of review decision before proceeding (Article 48)",
    "15 days — independent review panel must issue decision from receipt of appeal; extendable by 15 days once (Article 49)",
    "45 days — RPPA must issue administrative sanction decision from date of hearing (Article 153)",
    "90 days — maximum provisional suspension pending investigation before formal debarment decision; renewable once (Article 153)",
    "7 days — appeal (gracious recourse) window from RPPA sanction notification before going to court (Article 154)",
    "45 days — RPPA must decide on gracious recourse from receipt (Article 154)",
    "30 days — sanctioned person must file court case from notification of appeal decision (Article 155)",
    "15 days — successful bidder must correct defects or replace non-conforming supplies from request (Article 157)",
    "10 years — contractor and supervision consultant ten-year accountability for structural defects from definitive acceptance (Article 120)",
    "12 months — prior Law No. 62/2018 orders remain in force for consistent provisions from publication of this Law (Article 169)"
  ]
}

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
