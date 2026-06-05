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
{
  id: "aml_cft_75_2019",
  shortName: "AML/CFT Law",
  fullName: "Law Nº 75/2019 of 29/01/2020 on Prevention and Punishment of Money Laundering, Financing of Terrorism and Financing of Proliferation of Weapons of Mass Destruction",
  gazette: "Official Gazette Nº 7 of 24/02/2020",
  articles: [
    {
      number: "1",
      summary: "Sets the purpose of the Law: to prevent and punish money laundering, financing of terrorism, and financing of proliferation of weapons of mass destruction."
    },
    {
      number: "2",
      summary: "Scope: applies to any individual or legal person who, in the course of their profession, conducts, controls or advises on transactions involving deposits, exchanges, investments, conversions or any other movement of capital or property."
    },
    {
      number: "3",
      summary: "Definitions: defines key terms including freezing/seizure, financing of proliferation of WMDs, financing of terrorism, predicate offence, casino, financial institution (with 14 listed activities), proceeds of crime, bearer negotiable instruments, money laundering (four limbs: conversion/transfer, concealment, acquisition, and participation), Coordination Council, Minister (Finance), beneficial owner, client, politically exposed person, legal entity, property or funds, Financial Intelligence Centre (the Centre), competent authority (6 sub-types), and supervisory authority."
    },
    {
      number: "4",
      summary: "Financial intelligence: conducted by the Financial Intelligence Centre (the Centre) for purposes of preventing and countering AML/CFT/proliferation financing."
    },
    {
      number: "5",
      summary: "Provisional measures: competent authority must immediately freeze or seize property/funds when there are reasonable grounds to suspect they are proceeds of crime; lists 6 categories of freezable assets including equivalent-value substitutes; freezing/seizure may be lifted by the authority or competent court."
    },
    {
      number: "6",
      summary: "Duration of Centre's freeze/seizure: maximum 3 working days; if suspicion is founded, the Centre refers the case to the investigation authority; if not founded, the freeze is lifted and the reporting person is notified."
    },
    {
      number: "7",
      summary: "Reporting persons: lists 12 categories obligated to report, including the National Bank of Rwanda, financial institutions, telecom companies providing money transfer, private legal practitioners (in specified non-litigation activities), auditors/accountants/tax advisors, real estate agents, dealers in precious metals/stones, money distributors, casinos and national lotteries, NGOs/faith-based organisations, trust and company service providers, and others designated by Ministerial Order. Competent authority may compel documents/information from any reporting person."
    },
    {
      number: "8",
      summary: "Obligations of reporting persons: must (1) identify, assess, monitor, manage and mitigate AML/CFT/proliferation risks using a risk-based approach; (2) develop and maintain AML programmes including policies, compliance monitoring, staff training, and permanent audit; (3) assess risks from new products, new technologies and non-face-to-face clients."
    },
    {
      number: "9",
      summary: "Triggers for client identification (CDD): must verify client identity and beneficial owner in 9 specified situations including: before establishing a business relationship, on occasional transactions above the Centre's threshold, on wire transfers without originator information, on suspicion, on doubt about prior data, on precious metals cash transactions at or above threshold, on real estate transactions, when lawyers/accountants act on specified financial transactions, and when trust/company service providers act for clients. Ongoing due diligence on existing relationships is required."
    },
    {
      number: "10",
      summary: "Client identification procedure: must verify identity using official identification documents and reliable sources; persons acting on behalf of clients must present authorisation and ID; if identification requirements cannot be met, reporting person may refuse to open account or transact. The Centre determines the modalities for CDD."
    },
    {
      number: "11",
      summary: "Due diligence on occasional clients: Articles 9–10 apply when transactions equal or exceed the Centre's threshold; also applies to sub-threshold transactions that appear to be part of a linked series whose aggregate meets or exceeds the threshold."
    },
    {
      number: "12",
      summary: "Due diligence on suspected clients: when uncertain whether a client acts on their own behalf, the reporting person must seek all available information; if doubt on beneficial ownership persists after verification, a suspicious transaction report must be submitted to the Centre within 24 hours of receiving the client."
    },
    {
      number: "13",
      summary: "Enhanced due diligence for Politically Exposed Persons (PEPs): in addition to standard CDD, reporting persons must (1) have risk management systems to identify PEPs; (2) obtain senior management approval before engaging; (3) take measures to establish source of funds; (4) conduct enhanced ongoing monitoring. The Centre determines which administrative positions qualify as PEP."
    },
    {
      number: "14",
      summary: "Casino obligations: must (1) prove lawful origin of startup funds to relevant authorities; (2) confirm identification of players buying/converting chips at or above the Centre's threshold; (3) record all such transactions chronologically with player identity; (4) record all inter-casino fund transfers. Gaming chips of a branch may not be redeemed by another branch."
    },
    {
      number: "15",
      summary: "Special monitoring of certain transactions: reporting persons must pay special attention to complex, unusual or exceptionally large transactions with no apparent economic purpose and report findings to the Centre; must also monitor transactions involving persons in countries that do not apply equivalent AML/CFT standards."
    },
    {
      number: "16",
      summary: "Declaration of cash transactions: reporting persons must report to the Centre all cash transactions at or above the Centre's threshold; also sub-threshold transactions that form part of a linked series reaching the threshold."
    },
    {
      number: "17",
      summary: "Suspicious transaction reporting (STR): whenever there are reasonable grounds to suspect links to money laundering, terrorism financing or WMD proliferation financing, the reporting person must immediately report to the Centre and subsequently provide any additional confirming or disconfirming information. The Centre sets time limits and modalities."
    },
    {
      number: "18",
      summary: "Cross-border cash declaration: any person entering or leaving Rwanda with cash or bearer negotiable instruments above the Centre's threshold must declare them to the competent authority."
    },
    {
      number: "19",
      summary: "Confidentiality (tipping-off prohibition): reporting persons must not disclose to clients or third parties that a suspicious transaction report or information has been submitted to the Centre."
    },
    {
      number: "20",
      summary: "Record-keeping: all client identification data, transaction records, analysis findings, account books, and casino records must be retained for at least 10 years (from end of business relationship, completion of transaction, or last casino transaction, as applicable). Records must be produced immediately upon request by a competent authority."
    },
    {
      number: "21",
      summary: "Exchange of information: competent authorities are obligated to share AML/CFT/proliferation information both domestically and internationally, subject to confidentiality obligations on recipients."
    },
    {
      number: "22",
      summary: "Exemption from liability: no criminal, civil or professional liability for reporting persons, board members, executive officers or employees who in good faith submit information or reports as required by this Law, even if no conviction results; and no liability for material or non-material losses arising from a transaction freeze."
    },
    {
      number: "23",
      summary: "Money transfer: international transfers at or above the Centre's threshold must be made through authorised financial institutions or their agents; the originator's accurate information must accompany the transfer throughout the payment chain. The Centre determines required payer information."
    },
    {
      number: "24",
      summary: "Transparency: registration authorities must maintain adequate, accurate and timely beneficial ownership information for legal persons and legal arrangements; such information must be accessible to competent authorities and reporting persons in a timely manner."
    },
    {
      number: "25",
      summary: "Prohibition of shell banks and anonymous accounts: reporting persons must (1) be physically present in Rwanda to operate; (2) not engage with institutions registered in places without physical presence; (3) not open or maintain anonymous, digitised or fictitious-name accounts; (4) ensure correspondent institutions comply with AML/CFT measures; (5) ensure correspondent accounts are not used by shell banks."
    },
    {
      number: "26",
      summary: "Supervisory authority responsibilities: must (1) ensure reporting persons comply with this Law; (2) impose administrative sanctions for non-compliance; (3) issue AML/CFT regulations consistent with this Law and international standards; (4) compel production of records and information to monitor compliance."
    },
    {
      number: "27",
      summary: "Coordination Council: established as the national inter-agency body for coordinating AML/CFT/proliferation prevention and countering. Members, organisation and functioning determined by Presidential Order."
    },
    {
      number: "28",
      summary: "Mission of the Coordination Council: (1) devise strategies, policies and actions; (2) monitor implementation; (3) coordinate activities and exchange information between members and other institutions."
    },
    {
      number: "29",
      summary: "Money laundering offence and penalty: carrying out money laundering acts under Article 3(9) or participating in an association for that purpose is an offence. Penalty: 7–10 years imprisonment plus a fine of 3–5 times the amount laundered. Facilitating a terrorist's access to laundered funds (by concealment, transfer or any related means): 10–15 years imprisonment."
    },
    {
      number: "30",
      summary: "Terrorism financing offence and penalty: carrying out terrorism financing under Article 3(3) or participating in an association for that purpose is an offence. Penalty: 20–25 years imprisonment plus a fine of 3–5 times the amount given. Applies also to persons who knowingly contract or benefit from arrangements intended to provide funds for terrorism."
    },
    {
      number: "31",
      summary: "WMD proliferation financing offence and penalty: carrying out acts under Article 3(2) is an offence. Penalty: 15–20 years imprisonment plus a fine of 5–10 times the amount given. Applies also to persons who knowingly contract or benefit from arrangements intended to provide funds for WMD proliferation."
    },
    {
      number: "32",
      summary: "Penalties against legal entities: a legal entity committing AML/CFT/proliferation financing through its representatives or members is liable to a fine of 10–20 times the laundered/contributed amount; representatives may additionally be liable as accomplices. The conviction decision is published in media."
    },
    {
      number: "33",
      summary: "Aggravating circumstances: penalties under Articles 29–31 are doubled if (1) the predicate offence carries a higher sentence; (2) the offence is committed as an occupation; (3) it is committed within an organised criminal conspiracy; or (4) there is recidivism."
    },
    {
      number: "34",
      summary: "Mitigating circumstances: penalties under Articles 29–31 may be reduced where the offender provides information otherwise unavailable that helps prevent or limit effects of the offence, identify other offenders, find evidence, or prevent further offences."
    },
    {
      number: "35",
      summary: "Ancillary offences and penalties: a person who (1) discloses an STR to clients/third parties; (2) knowingly destroys or conceals required records; (3) performs transactions under false identification; (4) tips off intelligence subjects; (5) submits truncated or erroneous documents to authorities; (6) violates information secrecy rules; (7) fails to submit an STR when circumstances require it; (8) makes or accepts cash payments above the threshold; or (9) violates international transfer rules — commits an offence. Penalty: 3–5 years imprisonment and a fine of FRW 3,000,000–5,000,000."
    },
    {
      number: "36",
      summary: "Confiscation: upon conviction for any offence under this Law, the court orders confiscation of (1) property/funds derived from the offence including revenues and advantages, from any holder (unless beneficial owner proves good faith acquisition); and (2) assets belonging directly or indirectly to the convicted person unless licit origin and property right are established. Confiscation order identifies and locates the assets."
    },
    {
      number: "37",
      summary: "Evidence of criminal intent: knowledge, intent or purpose required for AML/CFT/proliferation offences may be inferred from objective factual circumstances."
    },
    {
      number: "38",
      summary: "No prior conviction of predicate offence required: prosecution for money laundering, terrorism financing or WMD proliferation financing does not require a prior conviction for the predicate offence."
    },
    {
      number: "39",
      summary: "Drafting language: this Law was drafted in English, considered and adopted in Ikinyarwanda."
    },
    {
      number: "40",
      summary: "Repealing provision: repeals Law Nº 69/2018 of 31/08/2018 on prevention and punishment of money laundering and terrorism financing and all prior contrary provisions."
    },
    {
      number: "41",
      summary: "Commencement: enters into force on the date of publication in the Official Gazette (24 February 2020)."
    }
  ],
  penalties: [
    "Money laundering (Art. 29): 7–10 years imprisonment + fine of 3–5× the laundered amount.",
    "Facilitating terrorist access to laundered funds (Art. 29 para. 2): 10–15 years imprisonment.",
    "Terrorism financing (Art. 30): 20–25 years imprisonment + fine of 3–5× the amount given.",
    "WMD proliferation financing (Art. 31): 15–20 years imprisonment + fine of 5–10× the amount given.",
    "Legal entity conviction (Art. 32): fine of 10–20× the laundered/contributed amount; representatives additionally liable as accomplices; conviction published in media.",
    "Aggravating circumstances (Art. 33): all penalties under Arts. 29–31 doubled for organised crime, professional offending, recidivism, or higher-penalty predicate offences.",
    "Ancillary offences — tipping off, record destruction, false ID, STR failure, threshold cash violations, illegal transfers (Art. 35): 3–5 years imprisonment + FRW 3,000,000–5,000,000 fine.",
    "Confiscation (Art. 36): mandatory confiscation of all crime-derived assets and convicted person's assets of unexplained origin."
  ],
  regulator: "Financial Intelligence Centre (the Centre) — primary AML intelligence and STR receipt body. National Bank of Rwanda (BNR) and other sector-specific supervisory authorities — oversight of reporting persons in their respective sectors. Coordination Council — inter-agency national AML/CFT coordination body (established by Presidential Order).",
  keyDeadlines: [
    "STR submission (Art. 17): immediately upon reasonable grounds of suspicion arising.",
    "Suspected client report (Art. 12): within 24 hours of receiving the client where beneficial ownership doubt persists.",
    "Centre freeze/seizure duration (Art. 6): maximum 3 working days; referral to investigation authority if suspicion is founded.",
    "Record retention (Art. 20): minimum 10 years from end of business relationship, completion of transaction, or last casino transfer.",
    "Cross-border cash declaration (Art. 18): at the time of entry or exit from Rwanda when carrying amounts above the Centre's threshold."
  ]
}
  {
  id: "ict_law_24_2016",
  shortName: "ICT Law",
  fullName: "Law Nº 24/2016 of 18/06/2016 governing Information and Communication Technologies",
  gazette: "Official Gazette Nº 26 of 27/06/2016",
  articles: [
    {
      number: "1",
      summary: "Purpose: establishes a framework for ICT policy and regulation, promoting national ICT objectives, a licensing and regulatory framework, institution-building, Rwanda as a global ICT hub, infrastructure access, consumer protection, and convergence of technologies."
    },
    {
      number: "2",
      summary: "Scope: applies to all persons providing or using ICT services in Rwanda, including electronic communications networks and services, information society services, broadcasting, and postal services."
    },
    {
      number: "3",
      summary: "Definitions of general terms: defines key concepts including ICT, electronic communications, information society, broadcasting, postal service, operator, licensee, service provider, subscriber, consumer, infrastructure, and dominant operator."
    },
    {
      number: "4",
      summary: "Definitions relating to electronic communication: defines terms specific to telecom including network, interconnection, radio spectrum, frequency, roaming, leased line, and electronic communications equipment."
    },
    {
      number: "5",
      summary: "Definitions relating to Electronic Information Society: defines electronic records, electronic signatures, electronic transactions, certification service provider, certification authority, domain name, and related concepts."
    },
    {
      number: "6",
      summary: "Definitions relating to broadcasting: defines broadcasting, broadcast service, frequency assignment, broadcast licensee, content provider, free-to-air, pay television, and community broadcasting."
    },
    {
      number: "7",
      summary: "Definitions relating to postal services: defines postal service, postal item, universal postal service, postal operator, franking, and related terms."
    },
    {
      number: "8",
      summary: "Organs: identifies the two principal organs — the Ministry responsible for ICT (policy-making) and the Regulatory Authority (RURA — sector regulation)."
    },
    {
      number: "9",
      summary: "ICT policy-making organ: the Ministry responsible for ICT formulates national ICT policy, submits legislation, coordinates with international bodies, and promotes ICT development."
    },
    {
      number: "10",
      summary: "Regulatory Authority (RURA): an independent body responsible for licensing, regulation, and supervision of electronic communications, information society services, broadcasting, and postal services. Issues licences, monitors compliance, settles disputes, and imposes sanctions."
    },
    {
      number: "11",
      summary: "Regular review of ICT activities: the Regulatory Authority regularly reviews regulatory frameworks to adapt to technological changes and ensure relevance of regulations."
    },
    {
      number: "12",
      summary: "Reviewing regulatory burden: the Regulatory Authority periodically assesses whether regulatory requirements impose unnecessary burdens on operators and may simplify or eliminate requirements accordingly."
    },
    {
      number: "13",
      summary: "Provision of information: operators and service providers must supply any information the Regulatory Authority requires for the exercise of its functions, within specified timeframes."
    },
    {
      number: "14",
      summary: "Advisory committee on elderly persons and persons with disabilities: the Regulatory Authority establishes an advisory committee to advise on ICT accessibility and service needs for elderly and disabled persons."
    },
    {
      number: "15",
      summary: "Monitoring powers and administrative sanctions: the Regulatory Authority has the power to monitor licensee activities and impose administrative sanctions including fines, suspension, or revocation of licences for non-compliance."
    },
    {
      number: "16",
      summary: "Special Committee for dispute settlement: the Regulatory Authority establishes a special committee to resolve disputes between operators, service providers or between operators and consumers."
    },
    {
      number: "17",
      summary: "Right to refer matters to courts: any party dissatisfied with a decision of the Regulatory Authority may appeal to the competent court."
    },
    {
      number: "18",
      summary: "Universal Access Fund: establishes a Universal Access Fund to finance extension of ICT services to underserved areas and populations; funded by contributions from licensees and other sources as determined by the Regulatory Authority."
    },
    {
      number: "19",
      summary: "Purpose of electronic communications (Chapter II): chapter objectives include promoting competitive markets, efficient use of spectrum and infrastructure, affordable access, and protection of consumer rights in electronic communications."
    },
    {
      number: "20",
      summary: "Ministerial Orders for electronic communications: the Minister issues implementing orders for matters relating to electronic communications, including technical standards, numbering plans, and quality of service requirements."
    },
    {
      number: "21",
      summary: "Requirements for orders on networks and radio spectrum: before issuing orders on network functions or radio spectrum, the Regulatory Authority must consult stakeholders, assess impact, and comply with international obligations."
    },
    {
      number: "22",
      summary: "Suspension and restriction powers: the Regulatory Authority may suspend or restrict use of networks or services where there is misuse, public safety concerns, non-compliance with licence conditions, or a threat to security."
    },
    {
      number: "23",
      summary: "Guidelines and decisions: the Regulatory Authority issues guidelines and publishes all regulatory decisions to ensure transparency and public awareness."
    },
    {
      number: "24",
      summary: "International obligations: operators and the Regulatory Authority must comply with Rwanda's international ICT obligations, including ITU regulations and regional frameworks."
    },
    {
      number: "25",
      summary: "Impact assessment: the Regulatory Authority carries out impact assessments before introducing significant regulatory changes affecting operators or consumers."
    },
    {
      number: "26",
      summary: "Publishing timeframes: the Regulatory Authority publishes maximum timeframes within which it will process licence applications and complete regulatory transactions."
    },
    {
      number: "27",
      summary: "Electronic publications literacy: the Regulatory Authority promotes public literacy in electronic communications and online services."
    },
    {
      number: "28",
      summary: "Consumer research and consultation: the Regulatory Authority conducts research on consumers' needs and holds consultations before adopting major regulatory measures affecting consumers."
    },
    {
      number: "29",
      summary: "Consumer information: the Regulatory Authority publishes information enabling consumers to compare electronic communications services, including pricing, quality of service, and terms and conditions."
    },
    {
      number: "30",
      summary: "Responsibilities of the Regulatory Authority in electronic communications: comprehensive list including licensing, spectrum management, consumer protection, interconnection, tariff regulation, dispute resolution, and ensuring compliance with national and international obligations."
    },
    {
      number: "31",
      summary: "Monitoring licensed operators: the Regulatory Authority monitors performance of all licensees and produces periodic performance reports. Licensees must cooperate fully with monitoring activities."
    },
    {
      number: "32",
      summary: "Technical inspection powers: the Regulatory Authority may inspect the technical infrastructure, systems, and equipment of any licensee to verify compliance with technical standards and licence conditions."
    },
    {
      number: "33",
      summary: "Search and seizure powers: the Regulatory Authority, with appropriate authorisation, may search premises and seize equipment, records, or documents where there is evidence of a breach of this Law."
    },
    {
      number: "34",
      summary: "Claiming seized property: a person whose property is seized may apply to the Regulatory Authority or competent court for its return, subject to any ongoing investigation."
    },
    {
      number: "35",
      summary: "Assistance organs: the Regulatory Authority may seek assistance from other government bodies (police, customs, etc.) in carrying out its regulatory functions."
    },
    {
      number: "36",
      summary: "International obligations: Rwanda participates in international ICT bodies (ITU, UPU, regional bodies) and the Regulatory Authority must implement applicable international decisions and standards."
    },
    {
      number: "37",
      summary: "Obligation to resolve disputes: the Regulatory Authority must provide a mechanism and timeframe for resolving disputes between operators and between operators and consumers."
    },
    {
      number: "38",
      summary: "Incompatibility of duties: members of the Regulatory Authority's governance bodies may not simultaneously hold executive positions in any licensed ICT operator."
    },
    {
      number: "39",
      summary: "Licence types: three types — individual licences (specific obligations, individually negotiated), standard licences (general regulations, services riding on individual licensees' networks), and general authorisations (right to operate on meeting published requirements)."
    },
    {
      number: "40",
      summary: "Categories of licensees: four categories — (1) infrastructure operators that build and manage networks; (2) service providers using others' infrastructure; (3) value-added service providers; (4) equipment installation and maintenance service providers."
    },
    {
      number: "41",
      summary: "Network interconnection: all operators with individual licences must provide interconnection to other licensed operators on reasonable, non-discriminatory terms. The Regulatory Authority sets interconnection rules and resolves interconnection disputes."
    },
    {
      number: "42",
      summary: "Licensing requirements: any person intending to build an electronic communications network or provide electronic communications services must submit a written application to the Regulatory Authority."
    },
    {
      number: "43",
      summary: "General licensing requirements: applicants must demonstrate technical capability, financial capacity, legal standing, and compliance with national ICT policy objectives. The Regulatory Authority processes applications within published timeframes."
    },
    {
      number: "44",
      summary: "Special criteria for individual licences: additional requirements apply for individual licences, including detailed network rollout plans, minimum investment thresholds, coverage obligations, and quality-of-service commitments."
    },
    {
      number: "45",
      summary: "Accuracy of information: applicants must provide accurate and complete information. Submission of false or misleading information in a licence application is an offence."
    },
    {
      number: "46",
      summary: "Announcing available licences: where a licence is to be awarded through public tender, the Regulatory Authority publishes full details of available licences, tender procedures, evaluation criteria, and applicable fees."
    },
    {
      number: "47",
      summary: "Validity of radio communication licences: radio communication licences are valid for up to five years, subject to renewal. Continued operation after expiry is an offence."
    },
    {
      number: "49–50",
      summary: "Modification and transfer of licences: licence conditions may be modified by the Regulatory Authority with notice. Licences may not be transferred without prior written authorisation from the Regulatory Authority."
    },
    {
      number: "51",
      summary: "Suspension, cancellation, and revocation: the Regulatory Authority may suspend, cancel, or revoke a licence for serious breach of licence conditions, failure to pay fees, insolvency, national security grounds, or persistent non-compliance. The licensee must be given notice and an opportunity to rectify before revocation."
    },
    {
      number: "52",
      summary: "Licence fees: all licensees pay fees as determined by the Regulatory Authority. Fee schedules are published and may include application fees, annual fees, spectrum fees, and numbering fees."
    },
    {
      number: "53",
      summary: "Grounds for refusing a licence: the Regulatory Authority may refuse an application on grounds including insufficient technical or financial capacity, national security, spectrum unavailability, market saturation, or failure to meet published criteria."
    },
    {
      number: "104–106",
      summary: "Tariff regulation: operators with significant market power are subject to tariff control schemes. Tariffs must be cost-oriented, transparent, and non-discriminatory. Dominant operators must file tariffs with the Regulatory Authority before implementation. Changes require regulatory notification and approval."
    },
    {
      number: "109–112",
      summary: "Interconnection: operators must provide interconnection and access to their networks and services on terms that are non-discriminatory, transparent, and cost-oriented. Dominant operators must publish a Reference Interconnection Offer (RIO). The Regulatory Authority resolves interconnection disputes."
    },
    {
      number: "117",
      summary: "Principles of spectrum management: radio spectrum is a public resource managed by the Regulatory Authority. Allocation and assignment follow the national frequency plan and ITU Radio Regulations."
    },
    {
      number: "120",
      summary: "Standard contracts: licensed service providers must prepare standard subscriber contracts consistent with the Regulatory Authority's general regulations and use them for all subscriber agreements."
    },
    {
      number: "122",
      summary: "Itemised billing: licensed electronic communications providers must provide itemised bills to subscribers free of charge, detailing usage, charges, and any other relevant information."
    },
    {
      number: "124",
      summary: "Privacy protection: subscriber voice and data transmitted over any electronic communications network must remain confidential and not be disclosed to unauthorised persons, subject to lawful interception obligations."
    },
    {
      number: "126",
      summary: "Minister's powers on national sovereignty: the Minister may, in compliance with national legislation and international instruments, issue directives to the Regulatory Authority relating to national security and sovereignty in electronic communications."
    },
    {
      number: "128",
      summary: "Disaster management plans: the Regulatory Authority may require licensed electronic communications operators to develop disaster management and business continuity plans to ensure network resilience during emergencies."
    },
    {
      number: "129",
      summary: "Scope of Chapter III (Information Society): this chapter applies to all electronic transactions, electronic records, electronic signatures, computer misuse and cybercrime, personal data protection, certification services, and e-government."
    },
    {
      number: "132",
      summary: "Electronic records and signatures scope: provisions on electronic records and electronic signatures apply to transactions or automated transactions carried out electronically."
    },
    {
      number: "135",
      summary: "Conditions for electronic records: where a law requires information to be in writing, that requirement is satisfied by an electronic record if its contents are accessible for future reference."
    },
    {
      number: "137",
      summary: "Retention in original form: where a law requires information to be presented or retained in original form, an electronic record satisfies this if it reliably assures the integrity of the information and remains accessible."
    },
    {
      number: "139",
      summary: "Sending electronic records: where a law requires a document to be sent, the requirement is satisfied if the electronic record is sent in a form accessible to the recipient and reliably indicates the originator."
    },
    {
      number: "140",
      summary: "Attribution of electronic records: an electronic record is attributable to a person where it was the act of that person, or of an authorised agent, or of an automated information system programmed by or on behalf of the person."
    },
    {
      number: "151",
      summary: "Conduct of signatories: a signatory must not use an electronic signature device for purposes other than those for which it was issued, must keep it secure, and must promptly notify the certification service provider of any compromise."
    },
    {
      number: "152",
      summary: "Certification service providers: the Regulatory Authority's regulations govern the conduct of certification service providers, including their obligations on certificate issuance, management, suspension, and revocation."
    },
    {
      number: "153",
      summary: "Generating key pairs: subscribers generate key pairs using systems approved by a certification service provider. The public key is included in and covered by the certificate."
    },
    {
      number: "154",
      summary: "Acceptance of certificate: a subscriber is deemed to have accepted a certificate when they publish or authorise its publication. Acceptance creates obligations to maintain accuracy of information in the certificate."
    },
    {
      number: "159",
      summary: "Automated transactions: in an automated transaction, a contract may be formed between a person and an automated information system, or between two automated systems. The legal validity of such contracts is not denied solely because no human was involved."
    },
    {
      number: "162",
      summary: "Time of dispatch of electronic message: unless otherwise agreed, an electronic message is dispatched when it enters an information system outside the originator's control."
    },
    {
      number: "163",
      summary: "Time of receipt of electronic message: an electronic message is received when it enters the addressee's designated information system, or if no system is designated, when it comes to the addressee's attention."
    },
    {
      number: "165",
      summary: "Information to be provided in electronic commerce: providers of information society services must supply clear information about their identity, registered address, regulatory details, and the key characteristics and price of services offered."
    },
    {
      number: "167",
      summary: "Termination period for online agreements: consumers must be given a reasonable period to terminate online service agreements. Termination provisions must be clearly stated in standard contracts."
    },
    {
      number: "172",
      summary: "Lodging complaints: consumers may lodge complaints with the Regulatory Authority against electronic communications or information society service providers for non-compliance with their rights under this Law."
    },
    {
      number: "175",
      summary: "Electronic certification licence: any person providing electronic certification services (digital certificates, PKI) must obtain a licence from the Regulatory Authority."
    },
    {
      number: "181",
      summary: "Disclosure obligations: certification service providers must disclose their policies, practices, and certificate revocation status. They must maintain accurate records and notify relevant parties of any material changes."
    },
    {
      number: "182–185",
      summary: "Certificate management: certification service providers issue, suspend, and revoke certificates according to their published certification practice statements. Suspension is available where the accuracy of information is in doubt; revocation is permanent and immediate where required. Revocation without consent of the subscriber may occur in specified circumstances."
    },
    {
      number: "190",
      summary: "Caching liability limits: an electronic service provider is not liable for automatic, intermediate, or temporary caching of electronic records if it does not modify content, complies with access conditions, and acts promptly on orders to remove infringing content."
    },
    {
      number: "194",
      summary: "Limits on monitoring obligations: service providers are not required to monitor electronic records processed through their systems to determine whether processing constitutes an offence, unless required by a competent authority or by contract."
    },
    {
      number: "196",
      summary: "Domain name dispute resolution: the Regulatory Authority defines a mechanism for resolving disputes over use of Rwanda (.rw) domain names."
    },
    {
      number: "204",
      summary: "Disclosure of password: any person who knowingly discloses a password or access code enabling unauthorised access to another person's system commits an offence under this Law."
    },
    {
      number: "207",
      summary: "Cybersecurity regulations: the Minister issues a Ministerial Order specifically addressing cybersecurity, supplementing the general provisions of this Law."
    },
    {
      number: "208",
      summary: "Security of public electronic communications services: licensed operators must implement and maintain appropriate technical and organisational security measures to protect the integrity and confidentiality of their networks and services."
    },
    {
      number: "210",
      summary: "Subscriber registration: every licensed electronic communications service provider must register the full personal details of all subscribers and SIM card holders using their networks or services."
    },
    {
      number: "212",
      summary: "Confidentiality of communications: no person using an electronic communications network may store or access information transmitted over another subscriber's connection without that subscriber's informed consent, except as lawfully authorised."
    },
    {
      number: "214",
      summary: "Billing: the Regulatory Authority ensures that subscribers' right to itemised billing is reconciled with their right to privacy. On request, licensed providers must supply detailed call and usage records to subscribers."
    },
    {
      number: "218",
      summary: "Cooperation on line identification: electronic communications providers must comply with reasonable requests from other public network operators relating to calling or connected line identification facilities."
    },
    {
      number: "219",
      summary: "Tracing nuisance calls: electronic communications providers must disclose the calling line and identity of the caller to a subscriber who requests tracing of malicious or nuisance calls."
    },
    {
      number: "220",
      summary: "Emergency calls: all licensed electronic communications providers must ensure access to emergency call services and provide caller location information to emergency services where technically feasible."
    },
    {
      number: "226",
      summary: "Broadcasting licence: any person providing broadcasting services must hold a broadcasting licence issued by the Regulatory Authority. Licences specify the type of broadcasting service, coverage area, and content obligations."
    },
    {
      number: "228",
      summary: "Transfer and surrender of broadcasting licences: broadcasting licences may not be transferred without prior written approval from the Regulatory Authority. A licensee may surrender a licence with notice."
    },
    {
      number: "230",
      summary: "Obligations of broadcasting licensees: include compliance with content regulations, must-carry obligations, local content requirements, public interest broadcasting, and providing emergency broadcast services as directed."
    },
    {
      number: "235",
      summary: "Postal correspondence: postal items constitute private correspondence protected by law. Postal operators may not open or disclose contents except as authorised by law or by a competent authority."
    },
    {
      number: "237",
      summary: "Public postal service: the public postal service must be available throughout Rwanda on uniform terms. The operator designated to provide universal postal services must maintain adequate infrastructure and staffing."
    },
    {
      number: "239",
      summary: "Content of universal postal service: the universal postal service includes collection, sorting, transport, and delivery of postal items within and outside Rwanda, within defined quality and delivery timeframes."
    },
    {
      number: "240",
      summary: "Postal financial services: the universal postal service operator may provide financial services including money orders and postal savings, subject to applicable financial regulations."
    },
    {
      number: "244",
      summary: "Reserved postal services: certain postal services (domestic letters below a defined weight/price threshold) are reserved to the designated universal service operator. Competing operators may not provide reserved services without authorisation."
    },
    {
      number: "249",
      summary: "Designation of universal postal service operator: a Prime Minister's Order designates the postal operator responsible for the universal postal service and determines the duration of the designation."
    },
    {
      number: "252",
      summary: "Mail ownership: the sender retains ownership of postal items until delivery to the recipient, unless otherwise provided by law."
    },
    {
      number: "257",
      summary: "Types of postal licences: postal licences are issued for specific categories of postal services. Operators must hold the appropriate licence for each service type."
    },
    {
      number: "260",
      summary: "Revocation of postal licence: the Regulatory Authority may revoke a postal licence for serious or persistent breach of licence conditions, failure to maintain service standards, or national security grounds."
    },
    {
      number: "264",
      summary: "Regulatory Authority's mission in postal sector: RURA regulates the postal sector including licensing, monitoring service quality, protecting consumers, and ensuring compliance with universal service obligations and international postal conventions."
    },
    {
      number: "265",
      summary: "Operating without electronic communications licence (penalty): any person carrying out electronic communications business without a licence is liable to an administrative fine and suspension or prohibition of operations."
    },
    {
      number: "266",
      summary: "Unauthorised licence transfer — electronic communications (penalty): transferring an electronic communications licence without authority is an administrative offence."
    },
    {
      number: "267",
      summary: "Operating with expired licence (penalty): operating without renewing a licence is liable to a daily administrative fine of FRW 200,000–3,000,000 for each day of operation with an expired licence."
    },
    {
      number: "268",
      summary: "Failure to notify change of ownership (penalty): a licensee failing to notify a change of ownership as required is liable to an administrative fine of FRW 5,000,000–50,000,000."
    },
    {
      number: "269",
      summary: "Non-compliance with enforcement notice (penalty): a licensee failing to comply with an enforcement notice or regulatory directive is liable to a fine of FRW 500,000–15,000,000 per day of non-compliance, plus possible additional licence conditions."
    },
    {
      number: "270",
      summary: "Unlawful restriction of access to service (penalty): a licensee that unlawfully restricts a person's access to service is liable to an administrative fine of FRW 2,000,000–10,000,000 per day of non-compliance with the removal order."
    },
    {
      number: "271",
      summary: "Failure to comply with tariff control scheme (penalty): a dominant operator failing to comply with a tariff control scheme is liable to an administrative fine of FRW 5,000,000–15,000,000 per day of non-compliance."
    },
    {
      number: "272",
      summary: "Installing/using equipment without licence (penalty): installing or using electronic communications equipment without a licence results in impoundment of equipment plus an administrative fine of FRW 500,000–15,000,000. If national security is threatened, equipment is confiscated."
    },
    {
      number: "273",
      summary: "Unlawful use of radio spectrum (penalty): using radio spectrum contrary to this Law triggers a prohibition notice plus a fine of FRW 500,000–5,000,000. Continued unlawful use after a prohibition notice attracts a daily fine of FRW 500,000–10,000,000 and possible technical measures rendering the network unusable."
    },
    {
      number: "274",
      summary: "Continued use after licence expiry (penalty): continuing to use a radio communications licence after expiry is liable to an administrative fine of FRW 1,000,000; continued operation after a prohibition notice attracts a daily fine of FRW 500,000–5,000,000."
    },
    {
      number: "275",
      summary: "Failure to provide information on leased lines (penalty): failure to provide required leased-line information is liable to an administrative fine of FRW 1,000,000–5,000,000."
    },
    {
      number: "276",
      summary: "Failure to provide Reference Interconnection Offer (penalty): a dominant operator failing to provide a reference interconnection offer is liable to administrative sanctions."
    },
    {
      number: "278",
      summary: "Failure to register equipment installation services (penalty): providing equipment installation and maintenance services without registration is liable to a fine of FRW 200,000–1,000,000 plus a daily fine of FRW 50,000 until registration is completed."
    },
    {
      number: "279",
      summary: "Transferring permit without authorisation (penalty): transferring a permit without authorisation is liable to an administrative fine of FRW 500,000."
    },
    {
      number: "281",
      summary: "Prohibition of operations and licence revocation: where a licensee significantly and persistently breaches this Law and does not rectify within one month of notification, the Regulatory Authority may revoke the licence or prohibit part of the licensed activities."
    },
    {
      number: "282",
      summary: "Providing information society services without licence (penalty): liable to an administrative fine of FRW 1,000,000–5,000,000 and suspension of activities."
    },
    {
      number: "283",
      summary: "Non-compliance with enforcement notice — information society (penalty): liable to a fine of FRW 1,000,000–5,000,000; continued non-compliance attracts a daily fine of FRW 500,000 from the date of the enforcement notice."
    },
    {
      number: "284",
      summary: "Unauthorised transfer of information society licence (penalty): liable to an administrative fine of FRW 1,000,000–5,000,000; licence may be suspended."
    },
    {
      number: "285–288",
      summary: "Other information society offences (penalties): refusal to provide information, hindering inspection, use of false information for licence application, and non-compliant equipment each attract administrative fines in the range of FRW 500,000–5,000,000."
    },
    {
      number: "289",
      summary: "Sending unsolicited commercial communications (spam) (penalty): sending unsolicited commercial electronic communications is an administrative offence liable to a fine."
    },
    {
      number: "290",
      summary: "Failure to provide electronic commercial information (penalty): failing to provide required electronic commercial information to consumers is an administrative offence."
    },
    {
      number: "292–299",
      summary: "Broadcasting offences and penalties: providing broadcasting services without a licence, non-compliance with enforcement notices, unauthorised licence transfer, refusal to provide information, obstructing radio spectrum communications, hindering inspection, use of false information, and contravention of licence conditions are all administrative offences attracting fines and possible licence suspension or revocation."
    },
    {
      number: "300–306",
      summary: "Postal services offences and penalties: providing postal services without a licence, non-compliance with enforcement notices, unauthorised licence transfer, refusal to provide information, hindering inspection, use of false information, and contravention of licence conditions are administrative offences attracting fines and possible sanctions."
    },
    {
      number: "307",
      summary: "Transitional provision — existing licences: licences issued under prior laws remain valid until their expiry date, after which operators must apply for licences under this Law."
    },
    {
      number: "308",
      summary: "Drafting: this Law was drafted in English, considered and adopted in Ikinyarwanda."
    },
    {
      number: "309",
      summary: "Repealing provision: repeals Law Nº 44/2001 of 30/11/2001 on telecommunications, Law Nº 18/2010 of 12/05/2010 on electronic messages, electronic signatures and electronic transactions, and all prior contrary provisions."
    },
    {
      number: "310",
      summary: "Commencement: enters into force on the date of publication in the Official Gazette (27 June 2016)."
    }
  ],
  penalties: [
    "Operating electronic communications without licence (Art. 265): administrative fine + suspension/prohibition of operations.",
    "Operating with expired licence (Art. 267): daily fine of FRW 200,000–3,000,000 per day.",
    "Failure to notify change of ownership (Art. 268): FRW 5,000,000–50,000,000.",
    "Non-compliance with enforcement notice (Art. 269): FRW 500,000–15,000,000 per day.",
    "Unlawful restriction of service access (Art. 270): FRW 2,000,000–10,000,000 per day.",
    "Tariff control non-compliance — dominant operator (Art. 271): FRW 5,000,000–15,000,000 per day.",
    "Equipment installed/used without licence (Art. 272): impoundment + FRW 500,000–15,000,000; confiscation if national security threat.",
    "Unlawful radio spectrum use (Art. 273): FRW 500,000–5,000,000 initial fine; FRW 500,000–10,000,000 daily for continued unlawful use.",
    "Continued use after radio licence expiry (Art. 274): FRW 1,000,000; daily fine of FRW 500,000–5,000,000 after prohibition notice.",
    "Failure to provide leased line information (Art. 275): FRW 1,000,000–5,000,000.",
    "Unregistered equipment installation services (Art. 278): FRW 200,000–1,000,000 + FRW 50,000/day until registration.",
    "Information society services without licence (Art. 282): FRW 1,000,000–5,000,000 + suspension.",
    "Non-compliance with enforcement notice — information society (Art. 283): FRW 1,000,000–5,000,000 + FRW 500,000/day continued.",
    "Unauthorised licence transfer — information society (Art. 284): FRW 1,000,000–5,000,000 + possible suspension.",
    "Licence revocation (Art. 281): available for significant persistent breach; one month to rectify before revocation.",
    "Broadcasting and postal offences (Arts. 292–306): administrative fines, licence suspension, and revocation available across all sector offences."
  ],
  regulator: "Rwanda Utilities Regulatory Authority (RURA) — primary regulatory authority for all ICT sectors: electronic communications, information society services, broadcasting, and postal services. RURA licenses, monitors, enforces, resolves disputes, and manages radio spectrum. The Ministry responsible for ICT sets national ICT policy but does not regulate operators directly.",
  keyDeadlines: [
    "Licence renewal: must be renewed before expiry; operating post-expiry triggers daily fines from day one (Art. 267).",
    "Licence transfer notification: prior written authorisation from RURA required before any transfer (Arts. 49–50, 284, 294, 302).",
    "Change of ownership notification: must notify RURA promptly as required by licence conditions; failure attracts FRW 5,000,000–50,000,000 fine (Art. 268).",
    "Rectification period after enforcement notice: licensees must rectify non-compliance within one month of notification before licence revocation is possible (Art. 281).",
    "Mail without claimant disposal: postal items with no value are destroyed after 2 months; items of value are transferred to the universal service operator after 5 years (Art. 253).",
    "RURA processing timeframes: published by RURA for licence applications and regulatory transactions (Art. 26)."
  ]
}
{
  {
  id: "capital_markets_01_2011",
  shortName: "Capital Markets Law (Parent)",
  fullName: "Law Nº 01/2011 of 10/02/2011 regulating Capital Market in Rwanda (as modified by Law Nº 45/2018 of 13/08/2018)",
  gazette: "Official Gazette Nº 13bis of 28/03/2011",
  articles: [
    {
      number: "1",
      summary: "Purpose: regulates the capital market in Rwanda and establishes mechanisms for controlling and supervising its activities to maintain proper standards of conduct and acceptable practices."
    },
    {
      number: "2",
      summary: "Definitions: defines agent, approved person, Authority (CMA), Clearing House, capital market agreement, Credit Rating Agency, custodian, exempted person, Independent Review Panel, licenced person, market, Minister (Finance), person, securities depository, and securities exchange."
    },
    {
      number: "3",
      summary: "Scope: regulates capital market business conducted by brokers, dealers, sponsors, investment advisers, investment banks, investment managers, custodians, securities exchanges, clearing houses, credit rating agencies, registrars, and any other persons designated by Ministerial Order. The Minister's Order may also expand the list of capital market instruments in Annex I."
    },
    {
      number: "4",
      summary: "Capital market instruments and business: instruments are those defined in Annex I (shares in public companies, debt instruments, government securities, warrants, certificates representing instruments, options, future rights, contracts for difference, long-term insurance contracts, and rights/interests in capital market instruments). Business activities are defined in Annex II."
    },
    {
      number: "5",
      summary: "Person engaged in capital market business: a person is engaged if they carry out the business on a permanent basis from an appropriate place in Rwanda, engaging in one or more Annex II activities and complying with CMA regulations."
    },
    {
      number: "6",
      summary: "Restrictions on capital market: no person may carry out or purport to carry out capital market business in Rwanda unless licensed, approved or exempted under this Law. Foreign persons may be authorised if CMA is satisfied they are regulated by an equivalent foreign agency. CMA makes regulations on conditions for foreign persons to operate."
    },
    {
      number: "7",
      summary: "Licensed and approved persons: a person holding a CMA-issued licence is a licensed person; a person approved by CMA is an approved person. Both are authorised to carry out capital market business. Applications for licences or approvals must follow CMA licensing regulations."
    },
    {
      number: "8",
      summary: "Notification of refusal, suspension and withdrawal: CMA must notify the concerned person in writing of the legal grounds for any refusal, suspension or withdrawal of a licence or approval, and must inform them of their right to appeal to the Independent Review Panel. Where no appeal is lodged, CMA may also inform the public of the decision."
    },
    {
      number: "9",
      summary: "Withdrawal and suspension of licence or approval: CMA may at any time withdraw or suspend any licence or approval if it establishes that (1) the person is not fit and proper for the capital market business they conduct or seek, or (2) the person has violated any provision of this Law or its regulations, or provided false, inaccurate or misleading information. Suspension is for a specified period and ends when the cause is remedied."
    },
    {
      number: "10",
      summary: "Withdrawal of application: an application for a licence or approval may be withdrawn at any time before a decision is made. CMA may refuse withdrawal if it considers a prior investigation is necessary for public interest."
    },
    {
      number: "11",
      summary: "Return of licence or suspension of approval: CMA may return a licence or suspend an approval at the request of the licensed or approved person. CMA may refuse if a prior investigation is required. CMA may give public notice of any suspension or withdrawal."
    },
    {
      number: "12",
      summary: "Exempted persons: exempted persons are approved to carry out capital market business without a licence. The National Bank of Rwanda (BNR) is explicitly exempted for all its capital market activities. CMA may recognise exemption before the person begins activities."
    },
    {
      number: "13",
      summary: "Securities exchanges and clearing houses: any company may apply to CMA for approval to operate as a securities exchange or clearing house. Once approved, it is exempted but remains subject to CMA inspection, investigation, conduct and functioning regulations (Chapters V, VI and VII). CMA must not approve unless all licensing requirements are met."
    },
    {
      number: "14",
      summary: "Foreign securities exchanges and clearing houses: a company with its head office outside Rwanda may apply to be a foreign securities exchange or clearing house. Once approved, it is exempted but subject to CMA inspection, investigation and conduct regulations."
    },
    {
      number: "15",
      summary: "Credit Rating Agencies (CRA): any company may apply for CMA approval to operate as a CRA. Once approved, it is treated as exempted with respect to its capital market activities."
    },
    {
      number: "16",
      summary: "Foreign Credit Rating Agencies: any company with its head office outside Rwanda may apply to be a foreign CRA. Once CMA-approved, it is treated as an exempted person for its capital market activities."
    },
    {
      number: "17",
      summary: "Approval and notification requirements: CMA makes regulations determining the procedure for request, refusal, suspension and withdrawal of approvals. CMA also requires approved securities exchanges, clearing houses and CRAs to specify their business nature and establish minimum membership admission standards."
    },
    {
      number: "18",
      summary: "Power to extend or restrict exempted persons list: CMA may by regulation increase the number of categories of exempted persons or remove/restrict persons from the list."
    },
    {
      number: "19",
      summary: "Statement of principles (Chapter IV — Practices and Ethics): CMA issues statements of principles on ethics and financial standing required of licensed and approved persons. Failure to comply gives rise to disciplinary actions including: written warning, fine, seeking court injunction, withdrawal/suspension/termination of licence, or disqualification from the profession. Breach of principles does not invalidate transactions already completed."
    },
    {
      number: "20",
      summary: "Modification of statement of principles: on request of any interested person, CMA may adapt principles to the specific nature of a person's business or authorise non-compliance with a principle, provided this does not adversely affect any investor."
    },
    {
      number: "21",
      summary: "Regulations governing the profession: CMA issues regulations governing conduct of capital market business through principles and regulations. A person who fails to observe any provision of such laws or regulations is considered to have violated the statement of principles."
    },
    {
      number: "22",
      summary: "Business regulations: CMA makes regulations on the conduct of capital market business by licensed and approved persons, covering: promoting integrity and fair dealing; requiring due skill, care and diligence; separating own interests from clients' interests; attending to specific client needs; disclosure of transaction interests; information to be published; investor information for informed decisions; price stabilisation decisions; protection of third-party property; investor compensation; and record keeping."
    },
    {
      number: "23",
      summary: "Modification of business regulations: CMA may on request amend regulation requirements to adapt them to the specific needs or nature of a person's business, provided amendments are consistent with CMA's statutory objectives."
    },
    {
      number: "24",
      summary: "Employment of unqualified persons (Chapter V — Disciplinary Measures): it is prohibited to employ unqualified persons in capital market business. If CMA finds a licensed or approved person employing an unqualified person, it orders their suspension."
    },
    {
      number: "25",
      summary: "Public statement of misconduct: CMA may publish a statement of misconduct where a licensed or approved person has contravened statements of principles, regulations or code of practice by employing an unqualified person."
    },
    {
      number: "26",
      summary: "Court injunction to stop violation: on CMA's request, a court must grant an injunction restraining the violation where a person is conducting capital market business without a licence or approval, or where an unqualified person is employed."
    },
    {
      number: "27",
      summary: "Court injunction to remedy violation: on CMA's request, a court may grant an injunction to remedy the violation where any concerned person has contravened regulations, an unqualified person is employed, misleading information has been provided, or a person has contravened a securities exchange or clearing house's regulations."
    },
    {
      number: "28",
      summary: "Scope of CMA's intervention powers (Chapter VI): CMA exercises intervention powers against licensed or approved persons where (1) necessary to protect investors' interests; (2) the person no longer has capacity to carry out capital market business; or (3) the person has violated this Law or its regulations, or provided false, inaccurate or misleading information."
    },
    {
      number: "29",
      summary: "Prohibited transactions: CMA may prohibit a licensed or approved person from (1) entering into selling or buying transactions other than those licensed for; (2) engaging with persons involved in unauthorised activities; or (3) carrying out any prohibited capital market business. Prohibitions apply only to transactions connected with capital market business."
    },
    {
      number: "30",
      summary: "Vesting of assets in a trustee: CMA may, when necessary, impose requirements for all assets of licensed or approved persons or assets of investors held by them to be transferred to and held by a CMA-approved trustee. This may extend to assets held outside Rwanda."
    },
    {
      number: "31",
      summary: "Restrictions on using assets: CMA may, for public interest, prohibit a licensed or approved person from disposing of or dealing with their own assets or assets they administer as trustee. May apply to persons outside Rwanda."
    },
    {
      number: "32",
      summary: "Possession of assets: CMA may require a licensed or approved person to maintain assets in Rwanda of such value as CMA determines, to ensure they can meet their capital market liabilities."
    },
    {
      number: "33",
      summary: "Review or rescission of decisions: CMA may, on its own initiative or on request of the affected person, review or rescind a prohibition or requirement if it no longer appears necessary."
    },
    {
      number: "34",
      summary: "Notices: CMA exercises its prohibition and requirement powers by written notice served on the concerned person, effective from the date specified. If CMA refuses to rescind a prohibition, it must notify the person within 30 working days. Notices must state reasons and inform the person of their 15-day right to appeal to the Independent Review Panel."
    },
    {
      number: "35",
      summary: "Winding up order: on CMA's petition, a competent court may wind up a licensed or approved person if the person is insolvent or the court considers it just and equitable to do so."
    },
    {
      number: "36",
      summary: "Power to request information (Chapter VII): CMA may by written notice require any licensed or approved person, securities exchange, clearing house, CRA, or any other licensed or approved person to provide any information it reasonably requires for its functions, within a reasonable time."
    },
    {
      number: "37",
      summary: "Inspection powers: CMA may at any time and without notice enter any premises occupied by licensed or approved persons. Modalities for conducting inspections are determined by Ministerial Order."
    },
    {
      number: "38",
      summary: "Investigation powers: CMA has the power to carry out investigations on any capital market business issues where there are justifiable reasons. Investigation powers shall not be exercised against an exempted person unless requested by that person or they have acted fraudulently and are unwilling to rectify. Modalities for investigation are set by Ministerial Order."
    },
    {
      number: "39",
      summary: "Exercise of entry powers: on CMA's request, a court may grant CMA the right to enter premises if there are reasonable grounds to believe relevant documents are on the premises, and may order seizure if the person under investigation has refused to produce them. Entry authority is valid for one month. Seized documents are kept for 3 months or until the end of any proceedings."
    },
    {
      number: "40",
      summary: "Inside information (Chapter VIII): defined as price-sensitive information relating to capital market instruments which (1) relates to instruments or their issuer; (2) is specific or authentic and has not been made public; and (3) if made public would likely affect the price of capital market instruments."
    },
    {
      number: "41",
      summary: "Insiders: a person has insider information if (1) they know well it is inside information, and (2) they know it came from an inside source. Also an insider if they obtained the information through being a board member, employee or shareholder of a capital market instrument issuer; by virtue of employment, office or profession; or directly or indirectly from any such person."
    },
    {
      number: "42",
      summary: "Insider dealing: an individual engages in insider dealing by using insider information to deal in capital market instruments that can influence prices. This includes encouraging another person to deal (whether or not that person knows the information is price-sensitive) and disclosing employment/profession-related information to another who uses it in price-sensitive dealings."
    },
    {
      number: "43",
      summary: "Defence to insider dealing: a person is not deemed to have engaged in insider dealing if they prove: (1) they did not expect the dealing to result in a profit attributable to that information; (2) they reasonably believed every person was aware of the information and no one would be prejudiced; or (3) they would have done the same thing even without the information. These defences apply to dealing, encouraging another to deal, and disclosure."
    },
    {
      number: "44",
      summary: "Information made public: information is public if it is published per capital market regulations to inform investors and their advisers; kept in a way open to the public; or readily obtainable by those likely to deal in capital market instruments. Information communicated only to those needing it for their duties, only to a section of the public, or only against payment, is still treated as public."
    },
    {
      number: "45",
      summary: "Limits on insider dealing: insider dealing rules do not apply to actions by an individual acting on behalf of a public sector body in pursuit of monetary policy, exchange rate policy, foreign exchange reserves management, or public debt management. No contract is void or unenforceable merely because it results from insider dealing."
    },
    {
      number: "46",
      summary: "Market abuse: defined as behaviour by one or more persons acting alone or in concert in relation to the capital market that any person aware of market practice would regard as a breach of market standards. Characterised by: information not generally available to market users that would be relevant to transaction terms; creating a false or misleading impression as to supply, demand or price of capital market instruments; or behaviour that distorts the market as seen by regular users. CMA must issue regulations to prevent market abuse."
    },
    {
      number: "47",
      summary: "Register of licensed or approved persons (Chapter IX): CMA must properly maintain a register of all persons licensed or approved to carry out capital market business."
    },
    {
      number: "48",
      summary: "Inspection of the register: the register is open to inspection. CMA may publish the register information in any form it deems appropriate. The register must be properly kept to allow easy inspection."
    },
    {
      number: "49",
      summary: "Restrictions on disclosure of information: restricted information relating to the business or affairs of any person shall not be disclosed without that person's consent. Persons permitted to disclose without consent: CMA, compensation scheme administrators, BNR, members of the Independent Review Panel, persons appointed to conduct investigations, and officers of any of those bodies. Information obtained by those persons in the course of their duties under this Law is restricted."
    },
    {
      number: "50",
      summary: "Exemptions to information restrictions: restrictions on disclosure do not preclude disclosure for: criminal proceedings; civil or disciplinary proceedings or Independent Review Panel proceedings; assisting CMA to exercise its powers; assisting securities exchanges, clearing houses or compensation schemes; assisting the Ombudsman, Auditor General, Attorney General, BNR, an official receiver, a court-appointed investigator or auditor, or foreign agencies with equivalent missions."
    },
    {
      number: "51",
      summary: "Assistance to foreign regulatory authorities: subject to Article 52 conditions, CMA may assist foreign regulatory authorities in connection with any legal or regulatory requirement those authorities wish to enforce, including conducting investigations or providing information and opinions."
    },
    {
      number: "52",
      summary: "Conditions prior to assisting foreign regulators: before providing assistance, CMA must consider: whether the foreign authority is legally recognised; whether the assistance will be used for its official functions; whether reciprocal assistance would be available; whether the foreign authority will contribute to investigation costs; whether assistance is relevant to its capital market functions; whether it will comply with any conditions on information transmission; whether it will keep information confidential; whether assistance would enhance Rwanda's capital market reputation; and whether proceedings have already been initiated in Rwanda on the same information."
    },
    {
      number: "53",
      summary: "Prospectus: any prospectus for capital market instruments must comply with the laws and regulations on public issuance. Before publishing, a copy must be filed with CMA for prior approval."
    },
    {
      number: "54",
      summary: "Restrictions on prospectus: no person in Rwanda may offer capital market instruments for subscription or sale to the public or a section of the public unless a duly signed prospectus has been published and a copy filed with CMA for prior approval beforehand."
    },
    {
      number: "55",
      summary: "Compensation scheme (Chapter X): CMA must by regulation establish a scheme to compensate investors who suffer bankruptcy due to acts of licensed or approved persons or their employees. (Note: Article 55 was amended by Law Nº 45/2018 to extend coverage to defalcation or fraud by licensed persons or employees of a securities exchange.)"
    },
    {
      number: "56",
      summary: "Content of compensation regulations: must include: creation of a payment fund; governance and operational provisions; contribution payment modalities; terms and conditions for paying compensation and circumstances excluding the right to compensation; and mechanisms for CMA to recover amounts paid from the party who caused the loss."
    },
    {
      number: "57",
      summary: "Relations with other regulatory bodies (Chapter XI): information and actions from other regulatory bodies are relevant where a person's principal place of business or principal business is outside Rwanda and they are regulated by a competent authority in that country. CMA may declare certain requirements are fulfilled and may enter agreements with other regulatory bodies."
    },
    {
      number: "58",
      summary: "Enforcement of foreign regulatory decisions: CMA may exercise its disciplinary or intervention powers at the request of a foreign regulatory body, including withdrawal or suspension of licences, disqualification, public statements, court injunctions, and financial penalties. CMA must consider reciprocity, seriousness, impact on persons in Rwanda, and public interest. CMA may require the foreign authority to contribute to investigation costs."
    },
    {
      number: "59",
      summary: "Auditors (Chapter XII): CMA makes regulations requiring all licensed and approved persons to appoint an auditor meeting specified conditions."
    },
    {
      number: "60",
      summary: "Power to require a second audit: if CMA has reasonable grounds, it may direct a licensed or approved person to appoint a second auditor to review the first auditor's report, at the concerned person's expense and within the timeframe specified by CMA. The second auditor has all powers available to the first."
    },
    {
      number: "61",
      summary: "Auditor's duty to communicate with CMA: auditors must provide CMA with any information or opinion on matters arising in their capacity as auditors of licensed or approved persons, including matters relating to third parties. Good faith communication to CMA on request or voluntarily does not constitute a wrongful act. Where an auditor is not governed by satisfactory professional body rules, CMA may issue its own regulations for that auditor."
    },
    {
      number: "62",
      summary: "Failure by auditor to communicate with CMA: where CMA establishes an auditor failed to comply with the communication duty, it may disqualify them from being an auditor of licensed or approved persons. Disqualification may be removed if CMA finds the auditor has corrected their behaviour. Licensed persons may not hire a disqualified auditor."
    },
    {
      number: "63",
      summary: "Independent Review Panel (Chapter XIII): a Capital Market Independent Review Panel is hereby established. Its organisation, functioning and composition are determined by Ministerial Order. It hears appeals against CMA decisions and other capital market matters."
    },
    {
      number: "64",
      summary: "Operating without licence or approval (Chapter XIV — Offences and Penalties): conducting or purporting to conduct capital market business without a licence or approval is an offence. Penalty: 6 months to 2 years imprisonment and/or FRW 15,000,000–50,000,000 fine. (Note: Law Nº 45/2018 amended and renumbered these provisions — see Art. 66 of Law Nº 45/2018 for current version with increased penalties of 1–2 years and FRW 30,000,000–50,000,000.)"
    },
    {
      number: "65",
      summary: "Employing a disqualified person: any person who employs a disqualified person is liable to a fine of FRW 5,000,000."
    },
    {
      number: "66",
      summary: "Misleading practices and statements: making false, misleading or deceptive statements, promises or forecasts inducing another to enter or refrain from an investment agreement, or creating false impressions as to capital market instrument prices, is an offence. Defence available if accused proves they reasonably believed the act would not be false or misleading. Penalty: 6 months to 2 years imprisonment and/or FRW 10,000,000–50,000,000 fine."
    },
    {
      number: "67",
      summary: "Failure to comply with investigation requirements: without reasonable excuse, failing to comply with investigators' requirements is an offence. Penalty: 6 months to 2 years imprisonment and FRW 5,000,000 fine, or one of these penalties. Convicted persons may also be ordered to pay all investigation costs."
    },
    {
      number: "68",
      summary: "Obstruction of inspection: intentionally obstructing inspection by failing to provide required documents is an offence. Penalty: 6 months to 2 years imprisonment and/or FRW 20,000,000 fine."
    },
    {
      number: "69",
      summary: "Insider dealing and market abuse: any person who has insider information and uses it to deal in capital market instruments or to commit market abuse commits an offence. Penalty: 6 months to 2 years imprisonment and/or FRW 10,000,000–100,000,000 fine."
    },
    {
      number: "70",
      summary: "Providing false or misleading information to auditors: any licensed or approved person, or officer or manager of a licensed or approved body, who knowingly or recklessly provides an auditor with false or misleading information commits an offence. Penalty: 6 months to 2 years imprisonment and/or FRW 5,000,000 fine."
    },
    {
      number: "71",
      summary: "False statements for licensing or approval: providing false or misleading information to obtain a licence or approval, purporting to be licensed when not, or falsely claiming to be an approved securities exchange, clearing house or CRA, are all offences. Penalty: 6 months to 2 years imprisonment and/or FRW 10,000,000 fine."
    },
    {
      number: "72",
      summary: "Disclosure of restricted information: disclosing restricted information contrary to this Law is an offence. Penalty: 6 months to 2 years imprisonment and/or FRW 5,000,000 fine."
    },
    {
      number: "73",
      summary: "Annexes: the Annexes (I and II) form part of this Law."
    },
    {
      number: "74",
      summary: "Power to make regulations: CMA has full power to issue all required regulations, guidelines and directives necessary for the effective functioning of the capital market in Rwanda."
    },
    {
      number: "75",
      summary: "Transitional period: any individual or legal entity dealing in capital market business before this Law's publication has one year from publication to comply with its requirements."
    },
    {
      number: "76",
      summary: "Drafting: this Law was drafted in English, considered and adopted in Kinyarwanda."
    },
    {
      number: "77",
      summary: "Repealing provision: all prior legal provisions contrary to this Law are repealed."
    },
    {
      number: "78",
      summary: "Commencement: enters into force on the date of publication in the Official Gazette (28 March 2011)."
    }
  ],
  penalties: [
    "Original Art. 64 — operating without licence/approval: 6 months–2 years imprisonment and/or FRW 15,000,000–50,000,000. [Superseded by Law 45/2018 Art. 66: 1–2 years and/or FRW 30,000,000–50,000,000].",
    "Art. 65 — employing a disqualified person: FRW 5,000,000 fine. [Superseded by Law 45/2018 Art. 65: FRW 3,000,000–5,000,000].",
    "Art. 66 — misleading practices and statements: 6 months–2 years imprisonment and/or FRW 10,000,000–50,000,000.",
    "Art. 67 — non-compliance with investigation requirements: 6 months–2 years imprisonment and FRW 5,000,000 fine, or one of these; plus all investigation costs.",
    "Art. 68 — obstruction of inspection: 6 months–2 years imprisonment and/or FRW 20,000,000 fine.",
    "Art. 69 — insider dealing and market abuse: 6 months–2 years imprisonment and/or FRW 10,000,000–100,000,000 fine.",
    "Art. 70 — false/misleading information to auditor: 6 months–2 years imprisonment and/or FRW 5,000,000 fine.",
    "Art. 71 — false statements for licensing/approval or impersonation: 6 months–2 years imprisonment and/or FRW 10,000,000 fine.",
    "Art. 72 — disclosure of restricted information: 6 months–2 years imprisonment and/or FRW 5,000,000 fine.",
    "Disciplinary sanctions (Art. 19): written warning, fine, court injunction, withdrawal/suspension/termination of licence, or disqualification from the profession.",
    "NOTE: Law Nº 45/2018 increased penalties for several offences and added administrative fines — both law entries should be read together."
  ],
  regulator: "Capital Market Authority (CMA) — the Authority established as an independent public institution responsible for licensing, approving, supervising, inspecting and investigating all capital market participants in Rwanda. CMA issues all regulations, principles and guidelines; manages the register of licensed and approved persons; enforces compliance through administrative sanctions, court injunctions and referral for criminal prosecution; and coordinates with the Independent Review Panel, BNR, foreign regulatory bodies, and other domestic regulators. The Minister of Finance issues Orders on additional business activities and on inspection and investigation modalities.",
  keyDeadlines: [
    "Transitional period for existing operators: 1 year from publication (i.e. by 28 March 2012) to comply with all requirements (Art. 75).",
    "Appeal to Independent Review Panel: 15 days from receipt of a CMA notice (Art. 34).",
    "CMA response to application for review/rescission of prohibition: within 30 working days (Art. 34).",
    "Court entry authority: valid for 1 month from date of issue (Art. 39).",
    "Seized document retention: 3 months, or until end of proceedings if prosecution commenced (Art. 39).",
    "Prospectus: must be filed with CMA for prior approval before any public offer of capital market instruments (Art. 54).",
    "Commencement: 28 March 2011 (date of Official Gazette publication)."
  ]
}
  {
  id: "land_law_27_2021",
  shortName: "Land Law",
  fullName: "Law N° 27/2021 of 10/06/2021 Governing Land",
  gazettedDate: "2021-06-10",
  effectiveDate: "2021-06-10",
  repealedLaws: ["Law N° 43/2013", "Law N° 24/2012"],
  articles: [
    {
      number: "1",
      title: "Purpose",
      summary: "Determines modalities of acquisition, registration, allocation, possession, transfer, management and use of land."
    },
    {
      number: "2",
      title: "Definitions",
      summary: "Defines key terms including: special economic zone, land use consolidation, servitude, certificate of land registration, swamp, national roads, donation, escheat land, freehold (inkondabutaka), vacant land, land concession, land title, decentralised entities, strategic investment, fraudulent land acquisition, expropriation, Ministry, Minister, land register, agriculture and livestock, emphyteutic lease, land right, State land, land, competent authority, prescription, sub-lease, registrar of land titles, person, and foreigner."
    },
    {
      number: "3",
      title: "Land as a Common Heritage",
      summary: "Land is the common heritage of all Rwandans past, present and future. The State holds absolute management power over all land within national boundaries; only the State may grant rights of tenure and use."
    },
    {
      number: "4",
      title: "Rural and Urban Lands",
      summary: "Rural lands lie outside urban boundaries and are characterised by agricultural/livestock economies; urban lands lie within urban boundaries. A Ministerial Order determines their respective boundaries."
    },
    {
      number: "5",
      title: "Equal Right to Land",
      summary: "All discrimination in access to land or enjoyment of land rights is prohibited. Spousal land rights depend on the matrimonial property regime chosen."
    },
    {
      number: "6",
      title: "Right to Freehold",
      summary: "Rwandan nationals are entitled to freehold tenure. A Presidential Order may exceptionally grant freehold to a foreigner for strategic national interest. Private individual freehold cannot exceed 2 hectares per person unless a Ministerial Order provides otherwise. A Ministerial Order sets categories, modalities and compliance requirements for freehold."
    },
    {
      number: "7",
      title: "Land Allocated by Rwanda to Another Country",
      summary: "Land allocated by Rwanda to another country remains governed by this Law."
    },
    {
      number: "8",
      title: "Land Allocated to Rwanda by Another Country",
      summary: "Land allocated to Rwanda by another country is governed by that country's laws."
    },
    {
      number: "9",
      title: "Modalities of Land Tenure",
      summary: "Land acquired through inheritance, succession, purchase, donation, exchange, land sharing or legal grant is held under one of two tenure modalities: (1) emphyteutic lease or (2) freehold."
    },
    {
      number: "10",
      title: "Land Allocation, Emphyteutic Lease and Concession Period",
      summary: "The State also allocates land by emphyteutic lease and concession. Both cannot exceed 99 years and are renewable. A Rwandan's emphyteutic lease renews automatically on expiry without application. A Prime Minister's Order sets exact durations and renewal procedures."
    },
    {
      number: "11",
      title: "Concession on State Land",
      summary: "State land may be conceded for (1) social welfare improvement or (2) strategic investment — covering agriculture, livestock, forestry, tourism, social welfare, sports/leisure, mining, quarrying and scientific research. Concession period cannot exceed 49 years, renewable by agreement. The investor may not sell, transfer or mortgage the land itself, but may deal in concession rights over property on the land. Change of investment activities requires prior approval of the investment authority."
    },
    {
      number: "12",
      title: "State Lands Lease",
      summary: "State land lease is a private-domain lease between the State and a strategic investor for construction of commercial infrastructure (trade centres, hotels, real estate, restaurants, parks, tourism sites, schools, hospitals, transport stations, industries). Period cannot exceed 99 years, renewable. The investor may not sell or transfer the land but may mortgage it and developed assets. Change of purpose requires competent authority approval."
    },
    {
      number: "13",
      title: "Competition for State Land Concession or Lease",
      summary: "Concession or lease of State private-domain land for investment must go through a competitive process, unless Cabinet approves an exception. Awards are based on an approved business plan assessed for importance and investment value."
    },
    {
      number: "14",
      title: "Compliance Requirements for State Land Concession or Lease",
      summary: "The investor must use the land strictly in conformity with the contract, approved business plan and relevant laws. Non-compliance entitles the Government to repossess the land per contract terms."
    },
    {
      number: "15",
      title: "Certification of Emphyteutic Lease, Freehold or Concession",
      summary: "Certification of tenure type is a certificate of land registration issued by the registrar of land titles. A Prime Minister's Order sets the duties, powers and functioning of the registrar."
    },
    {
      number: "16",
      title: "Foreigner's Rights on Land",
      summary: "Without prejudice to Articles 6, 10, 11 and 12, a foreigner may obtain emphyteutic lease or land concession, but only for investment purposes. A Presidential Order may determine other modalities for foreign land possession."
    },
    {
      number: "17",
      title: "Land Registration and Cancellation",
      summary: "Every person — and the State — has an obligation to register their land. A Ministerial Order sets registration modalities, formalities and cancellation procedures."
    },
    {
      number: "18",
      title: "Certificate of Land Registration — Probative Value",
      summary: "The certificate is an original copy of the land register bearing the registrar's signature; it may be electronic or paper. It constitutes conclusive evidence of land rights where acquisition was lawful."
    },
    {
      number: "19",
      title: "Authenticity of Land-Related Deeds",
      summary: "The certificate, land register content and all deeds approved by the registrar are authentic and may only be used for lawful purposes. They lose validity if proven to be based on false information."
    },
    {
      number: "20",
      title: "Format and Content of the Land Register",
      summary: "The land register is the original data bank of all land records. All insertions, modifications and deletions are made exclusively by the registrar; all copies derive from it. A Ministerial Order sets the format."
    },
    {
      number: "21",
      title: "Right to Transfer Land Rights",
      summary: "Land rights may be transferred between persons by: (1) succession, (2) donation, (3) inheritance, (4) lease, (5) sale, (6) sub-lease, (7) exchange, (8) mortgage, (9) concession, or (10) any other lawful method."
    },
    {
      number: "22",
      title: "Consent to Transfer Land Rights",
      summary: "Transfer requires consent of all persons registered on the land title. Jointly held spousal land requires both spouses' consent even if one is not on the title. Persons lacking legal capacity or minors are represented per relevant laws."
    },
    {
      number: "23",
      title: "Formation of the Land Transfer Contract",
      summary: "Transfer contracts must be in writing, signed by both parties, and approved and witnessed by a land notary or notary recognised by the chief registrar. Electronic contracts using digital signatures granted by the competent organ are also valid."
    },
    {
      number: "24",
      title: "Validity of Land Rights Transfer",
      summary: "A transfer of land rights is only valid upon its registration in the land register."
    },
    {
      number: "25",
      title: "Land Services by Individuals",
      summary: "Private individuals may provide: (1) land surveying, (2) notary services, and (3) land valuation services. A Ministerial Order may add other services and modalities."
    },
    {
      number: "26",
      title: "Sub-Lease or Sub-Freehold Contracts",
      summary: "A holder of emphyteutic lease or freehold rights may sub-lease or sub-freehold with a written contract. A Ministerial Order sets modalities for sub-lease of agricultural, livestock and forest land."
    },
    {
      number: "27",
      title: "Sub-Lease on Behalf of Incapacitated Person",
      summary: "Sub-lease executed by a representative of a minor or legally incapacitated person must be in writing and cannot exceed 5 years (renewable). On reaching majority, a minor may continue or terminate. On restoration of capacity, the person may accept or terminate."
    },
    {
      number: "28",
      title: "Registration of Sub-Lease Rights",
      summary: "Sub-lease rights over agricultural, livestock or forestry land for 5 years or more must be registered in the land register. Registration is optional for sub-leases under 5 years."
    },
    {
      number: "29",
      title: "Classification of State Lands",
      summary: "State lands are classified as: (1) lands in public domain and (2) lands in private domain."
    },
    {
      number: "30",
      title: "Transfer of State Lands",
      summary: "Public-domain State land is inalienable; private-domain State land is alienable. Transfer from public to private domain is governed by this Law. A Ministerial Order may transfer private-domain land to a State-owned company or specialised State organ."
    },
    {
      number: "31",
      title: "State Lands in Public Domain",
      summary: "Public-domain lands include: lake and river beds, lake/river banks (up to distances set by the Minister for water resources), springs and wells, natural forests, national parks, protected swamps, State public gardens, tourist sites, islands, national roads and their boundaries, lands for public State activities and infrastructure, public cemeteries, and Genocide memorial sites. Except genocide memorial sites, all others may be transferred to private domain by a Prime Minister's Order."
    },
    {
      number: "32",
      title: "State Lands in Private Domain",
      summary: "Private-domain State lands include: (1) lands not reserved for public activities/infrastructure; (2) State-owned company lands (excluding public-use portions); (3) specialised organ-registered lands (excluding public-use portions); (4) lands not belonging to individuals. Categories include: vacant lands, escheat lands, repossessed lands, former public-domain lands now privatised, lands acquired by purchase/exchange/donation/expropriation, unprotected swamps, State forest lands, non-renewed foreign emphyteutic lease lands, and special cemetery lands."
    },
    {
      number: "33",
      title: "Swamp Lands Tenure",
      summary: "All swamp lands belong to the State and cannot be permanently allocated to private individuals; no person may claim prescriptive rights over swamps. Swamps may however be conceded to a person by agreement between the Ministry and concessionaire. A Prime Minister's Order lists swamp lands, their boundaries and management modalities."
    },
    {
      number: "34",
      title: "Protection of State Lands",
      summary: "Any person is prohibited from overriding or self-allocating any State land right."
    },
    {
      number: "35",
      title: "Identification of State Lands",
      summary: "The Ministry takes accurate geographic records of all State lands and maintains all related information. This information is public except for lands related to national security and sovereignty."
    },
    {
      number: "36",
      title: "Registration of State Lands",
      summary: "State lands are registered in the name of the State of Rwanda represented by the Ministry. State commercial lands may be registered under a State-owned company or specialised organ. Public institutions and decentralised entities must register land acquired by expropriation, donation, purchase or other means within 60 days of acquisition. State lands are registered under freehold; those used for commercial activities receive emphyteutic lease."
    },
    {
      number: "37",
      title: "Organ in Charge of State Land Management",
      summary: "State lands are managed by the Government represented by the Ministry. State commercial lands registered under State-owned companies or specialised organs are managed by those entities per relevant laws."
    },
    {
      number: "38",
      title: "Special Rights of Land Transfer",
      summary: "A State-owned company or specialised State organ under which private-domain State commercial land is registered may transfer that land in accordance with relevant laws."
    },
    {
      number: "39",
      title: "Rights to Use State Lands",
      summary: "Public institutions and decentralised entities have the right to use State lands needed for their mission. The land institution conducts annual inspections and submits inspection reports to the Ministry by 30 September each year. A Prime Minister's Order sets modalities and report format."
    },
    {
      number: "40",
      title: "Transfer of Rights to Use State Lands",
      summary: "Rights to use State land may be transferred between public institutions or between public institutions and decentralised entities. A Prime Minister's Order sets transfer modalities."
    },
    {
      number: "41",
      title: "Absolute Enjoyment of Land Rights",
      summary: "A land rights holder enjoys full rights to exploit land per legal provisions. The State grants free ownership and protects holders from dispossession except in cases of expropriation in the public interest per relevant laws."
    },
    {
      number: "42",
      title: "Presumption of Ownership of Property on Land",
      summary: "Buildings, crops and other property on land are presumed to belong to the land owner. A third party may own structures on another's land if permitted by law, other laws or contract. Unauthorised construction on another's land entitles the owner to demand removal and claim damages."
    },
    {
      number: "43",
      title: "Rights on Natural Resources",
      summary: "Notwithstanding personal land rights, all rights of ownership and control of natural resources on, under or above any land in Rwanda are vested exclusively in the State."
    },
    {
      number: "44",
      title: "Obligations for Protection, Conservation and Exploitation",
      summary: "Land rights holders have obligations to protect, conserve and exploit their land in accordance with its intended use. A Prime Minister's Order sets implementation modalities."
    },
    {
      number: "45",
      title: "Servitude",
      summary: "Land rights holders have an obligation of servitude (providing pathway access through their land where location necessitates it). A Ministerial Order sets servitude types and modalities."
    },
    {
      number: "46",
      title: "Productive Land Exploitation",
      summary: "Land rights holders must exploit land productively and in a value-increasing manner consistent with its nature and intended use. Lawful users of another's land must also maintain and use it productively. A Prime Minister's Order sets standards, guidelines, monitoring tools and criteria for assessing efficient exploitation."
    },
    {
      number: "47",
      title: "Non-Obstruction to Underground or Space Activities",
      summary: "Land holders must not obstruct public-interest activities conducted underground or in airspace above their land where done lawfully. Fair compensation is due if such activities cause loss to the land holder."
    },
    {
      number: "48",
      title: "Payment of Land Tax and Fees",
      summary: "Land rights holders have an obligation to pay all applicable land taxes and fees per relevant laws."
    },
    {
      number: "49",
      title: "Termination of Land Ownership Contract",
      summary: "The State may terminate a land ownership contract after issuing a written 90-day notice where the holder has not complied with contractual obligations. Termination is not permitted if the holder presents reasonable grounds for non-compliance. A Ministerial Order sets termination modalities."
    },
    {
      number: "50",
      title: "Land Rights by Prescription",
      summary: "A person who possesses land continuously, uninterruptedly, publicly and unequivocally for 30 years from acquisition may acquire rights by prescription. Sub-lease beneficiaries cannot invoke prescription. A Presidential Order may determine other prescriptive circumstances."
    },
    {
      number: "51",
      title: "Approval of Prescription",
      summary: "The local registrar of land titles approves prescription after reviewing the report of the land committee."
    },
    {
      number: "52",
      title: "Fraudulently Acquired Land",
      summary: "A person who fraudulently acquired vacant, escheat or another's land cannot invoke prescription regardless of duration of possession. Exception: persons given land during post-conflict land sharing (resettlement) and persons dispossessed due to political reasons and bad leadership (1959–1994) are not treated as fraudulent actors."
    },
    {
      number: "53",
      title: "Non-Prescription Among Family Members",
      summary: "Prescription cannot run between members of the same family. Family membership is determined by succession order per relevant laws."
    },
    {
      number: "54",
      title: "Planning of Land Use and Development",
      summary: "Land use planning is governed by this Law. All land use must be guided by the master plan applicable to the location of the land."
    },
    {
      number: "55",
      title: "Fundamental Principles of Land Use",
      summary: "Land use and development must: (1) contribute to sustainable development for present and future generations; (2) account for gender considerations; (3) minimise excessive land, energy and natural resource consumption; (4) prioritise higher population density and multi-family settlements; (5) prevent urban sprawl and maximise mixed/integrated zoning; (6) consider all categories of land use."
    },
    {
      number: "56",
      title: "Initiation of Draft Land Use Master Plan",
      summary: "The national land use master plan is initiated by the Minister of Land after consulting the Minister of Economic Planning. Other public entities or decentralised entities may request a specific sectorial master plan in writing. The Minister of Economic Planning must respond within 30 days of receiving the application."
    },
    {
      number: "57",
      title: "Development of Land Use Master Plan",
      summary: "The institution in charge of land management develops the land use master plan. The Ministry of Economic Planning coordinates all development activities."
    },
    {
      number: "58",
      title: "Adoption of Land Use Master Plan",
      summary: "The land use master plan is adopted by Cabinet. The City of Kigali or District Council adopts detailed plot and site development plans for implementation at their level."
    },
    {
      number: "59",
      title: "Establishment of Land Use Master Plan",
      summary: "The national master plan is established by Presidential Order. City of Kigali and District plans are established by Order of the Minister of Economic Planning. Sector-specific plans initiated by other public entities are also established by Order of the Minister of Economic Planning."
    },
    {
      number: "60",
      title: "Standards of the Land Use Master Plan",
      summary: "The master plan must: (1) conform to the fundamental principles of this Law; (2) specify land use per area according to its conditions; (3) give effect to integrated national policies and strategies; (4) comply with the master plan of a higher administrative level."
    },
    {
      number: "61",
      title: "Compliance with the Land Use Master Plan",
      summary: "All persons and organs using land must comply with the master plan. Land use permits must be granted in accordance with the master plan and standards set by a Prime Minister's Order. Any permit contrary to the master plan is null and void regardless of any prescription."
    },
    {
      number: "62",
      title: "Monitoring Compliance with Land Use Master Plan",
      summary: "The land management institution monitors compliance with the master plan. The Ministry of Economic Planning ensures that sector priorities and investments comply with the master plan."
    },
    {
      number: "63",
      title: "Change of Land Use",
      summary: "Changes of land use must be consistent with the master plan and approved by the land management institution. A Ministerial Order sets modalities."
    },
    {
      number: "64",
      title: "Lands for Special Economic Zones and Industrial Parks",
      summary: "A specific law governs lands designated for special economic zones and industrial parks."
    },
    {
      number: "65",
      title: "Use of Agricultural and Livestock Land",
      summary: "Agricultural and livestock land must be protected and conserved. All persons using such land must observe land use consolidation requirements. A Prime Minister's Order sets implementation modalities."
    },
    {
      number: "66",
      title: "National Land Management Institution",
      summary: "Land management and use at national level falls under the institution in charge of land management and use (currently Rwanda Land Management and Use Authority — RLMUA)."
    },
    {
      number: "67",
      title: "Decentralised Land Management",
      summary: "Land use management and monitoring at local level falls under the City of Kigali or the relevant District. All local land acts must comply with technical instructions from the national land institution; non-compliant acts are null and void."
    },
    {
      number: "68",
      title: "Land Committees",
      summary: "Land Committees are established to monitor land management and use. A Ministerial Order sets their organisation, functioning, responsibilities, composition and operational levels."
    },
    {
      number: "69",
      title: "Monitoring and Inspection of Land Use",
      summary: "Districts and City of Kigali must submit a cumulative annual land use inspection and monitoring report to the Minister by 30 September each year. The Minister reviews reports and takes appropriate measures to ensure productive land use."
    },
    {
      number: "70",
      title: "Temporary Requisition of Land",
      summary: "The Minister may order temporary requisition of agricultural, livestock or forestry land not being productively used without sound reason. A Ministerial Order sets criteria, modalities and management of requisitioned land."
    },
    {
      number: "71",
      title: "Repossession of Temporarily Requisitioned Land",
      summary: "The holder of rights over temporarily requisitioned land may apply in writing to the Minister for repossession. A Ministerial Order sets requirements and conditions for repossession."
    },
    {
      number: "72",
      title: "Allocation of Poorly Exploited State Private-Domain Land",
      summary: "The Minister may temporarily allocate poorly exploited State private-domain land to an interested and capable person for up to 5 years (renewable) by written agreement based on an agreed investment plan. The Minister may repossess early on payment of agreed compensation based on level of development made."
    },
    {
      number: "73",
      title: "Resolution of Land Boundary and Systematic Registration Disputes",
      summary: "Disputes on systematic land registration or boundary decisions are submitted to the District or City of Kigali, which must decide within 30 days. If unsatisfied or no decision within 30 days, the party may appeal to the national land institution within 30 days. The institution must issue a written decision within 45 days of receiving the appeal. The institution's decision is final administratively and bears an enforcement order if not challenged in court within 30 days of notification."
    },
    {
      number: "74",
      title: "Lodging and Cancellation of Caveat in Land Transfer",
      summary: "A person may apply in writing to the registrar to lodge a caveat if the land is subject to a claim or a court has ordered a caveat. The registrar cancels a caveat on a court order for removal or on application of the person who lodged it. For non-court caveats, the registrar may cancel after hearing both parties if the caveat is found baseless."
    },
    {
      number: "75",
      title: "Administrative Fault — Land Title Processing and Registry Maintenance",
      summary: "A registrar or land registration official who deliberately infringes regulations on processing/issuance of land titles or maintenance of the land registry commits a fault. Administrative fine: FRW 500,000 – FRW 1,000,000."
    },
    {
      number: "76",
      title: "Administrative Fault — Non-Compliance with Land Use Master Plan",
      summary: "An individual who does not comply with the land use master plan commits a fault. Administrative fine: FRW 1,000,000 – FRW 3,000,000. The person must also remove or pay the cost of removing any non-compliant activities/structures."
    },
    {
      number: "77",
      title: "Powers to Impose Administrative Fines",
      summary: "The national land institution, City of Kigali and Districts have power to impose administrative fines on those who violate this Law within their respective territorial jurisdiction. Fines are paid into the public treasury."
    },
    {
      number: "78",
      title: "Administrative Faults by Legal Entities",
      summary: "Where an Article 76 fault is committed by a State-owned company, non-public company, cooperative, national NGO, international NGO or faith-based organisation with legal personality, the administrative fine is multiplied by 10."
    },
    {
      number: "79",
      title: "Criminal Offence — Unlawful Use of Land Title",
      summary: "Using a land title for unlawful purposes is a criminal offence. Penalty upon conviction: 5–7 years imprisonment and/or a fine of 2–4 times the value of the concerned land."
    },
    {
      number: "80",
      title: "Criminal Offence — False Information in Land Matters",
      summary: "Providing false information to acquire land rights for oneself or others is a criminal offence. Penalty upon conviction: 1–3 months imprisonment and/or FRW 200,000 – FRW 500,000 fine."
    },
    {
      number: "81",
      title: "Criminal Offence — Obstruction of Underground or Space Activities",
      summary: "Obstructing lawful public-interest activities conducted underground or in airspace above one's land (where such activities do not interfere with land rights) is a criminal offence. Penalty: 1–3 months imprisonment and/or FRW 100,000 – FRW 300,000 fine."
    },
    {
      number: "82",
      title: "Criminal Offence — Self-Allocation of State Land",
      summary: "Self-allocating any State land right is a criminal offence. Penalty: 3–6 months imprisonment and/or a fine of 3–5 times the value of the land appropriated."
    },
    {
      number: "83",
      title: "Criminal Offences by Legal Entities",
      summary: "Where offences under Articles 79–82 are committed by a State-owned company, non-public company, cooperative, national NGO, international NGO or faith-based organisation with legal personality, the fine is multiplied by 10."
    },
    {
      number: "84",
      title: "Land Valuation",
      summary: "Land valuation is conducted in accordance with relevant laws."
    },
    {
      number: "85",
      title: "Land Surveying",
      summary: "Land surveying is conducted in accordance with relevant laws."
    },
    {
      number: "86",
      title: "Recognition of Free Land Transfers",
      summary: "Previously granted State land rights as restricted occupation/exploitation rights are recognised. For registration purposes, such rights are converted into emphyteutic lease after assessment."
    },
    {
      number: "87",
      title: "Orders in Force",
      summary: "All subsidiary legislation issued under the repealed Laws (No. 43/2013 and No. 24/2012) remains in force to the extent not inconsistent with this Law, for a transitional period of 9 months from its publication date."
    },
    {
      number: "88",
      title: "Drafting, Consideration and Adoption",
      summary: "This Law was drafted in English, considered and adopted in Kinyarwanda."
    },
    {
      number: "89",
      title: "Repealing Provision",
      summary: "Repeals Law N° 43/2013 of 16/06/2013, Law N° 24/2012 of 15/06/2012, and all prior inconsistent provisions."
    },
    {
      number: "90",
      title: "Commencement",
      summary: "This Law entered into force on 10 June 2021, the date of its publication in the Official Gazette."
    }
  ],
  penalties: [
    {
      provision: "Art. 75 — Deliberate infringement of land title processing/registry regulations (registrar/official)",
      type: "Administrative",
      amount: "FRW 500,000 – FRW 1,000,000"
    },
    {
      provision: "Art. 76 — Non-compliance with land use master plan (individual)",
      type: "Administrative",
      amount: "FRW 1,000,000 – FRW 3,000,000 + removal of non-compliant structures at own cost"
    },
    {
      provision: "Art. 78 — Non-compliance with land use master plan (legal entity)",
      type: "Administrative",
      amount: "Art. 76 fine × 10"
    },
    {
      provision: "Art. 79 — Unlawful use of a land title (individual)",
      type: "Criminal",
      amount: "5–7 years imprisonment and/or fine of 2–4× the value of the land"
    },
    {
      provision: "Art. 80 — Providing false information in land matters (individual)",
      type: "Criminal",
      amount: "1–3 months imprisonment and/or FRW 200,000 – FRW 500,000"
    },
    {
      provision: "Art. 81 — Obstruction of underground/space public-interest activities (individual)",
      type: "Criminal",
      amount: "1–3 months imprisonment and/or FRW 100,000 – FRW 300,000"
    },
    {
      provision: "Art. 82 — Self-allocation of State land (individual)",
      type: "Criminal",
      amount: "3–6 months imprisonment and/or fine of 3–5× the value of the land"
    },
    {
      provision: "Art. 83 — Offences under Arts. 79–82 committed by legal entity",
      type: "Criminal",
      amount: "Applicable fine × 10"
    }
  ],
  regulator: "Ministry of Environment (land portfolio) / Rwanda Land Management and Use Authority (RLMUA) at national level; City of Kigali and Districts at decentralised level; Registrar of Land Titles for registration matters",
  keyDeadlines: [
    "Art. 36 — Public institutions/decentralised entities must register newly acquired land within 60 days of acquisition",
    "Art. 39 — Land use inspection report must be submitted to the Ministry by 30 September each year",
    "Art. 56 — Minister of Economic Planning must respond to master plan initiation requests within 30 days of receipt",
    "Art. 69 — Districts and City of Kigali must submit annual land use inspection reports to the Minister by 30 September",
    "Art. 73 — District/City of Kigali must decide on land boundary dispute claims within 30 days; appeal to national land institution within 30 days of decision/expiry; institution must issue decision within 45 days; court challenge must be filed within 30 days of notification or decision bears enforcement order",
    "Art. 87 — Transitional orders under repealed laws remain valid for 9 months from 10 June 2021 (expired 10 March 2022)",
    "Art. 49 — State must give 90-day written notice before terminating a land ownership contract for non-compliance"
  ]
}
  {
  id: "mining-law-072-2024",
  title: "Law N° 072/2024 of 26/06/2024 on Mining and Quarry Operations",
  shortTitle: "Mining and Quarry Operations Law",
  category: "Natural Resources / Mining",
  gazettedDate: "24/07/2024",
  effectiveDate: "24/07/2024", // Art. 78: enters into force on date of publication
  repeals: "Law N° 58/2018 of 13/08/2018 on mining and quarry operations",
  articles: [
    // CHAPTER ONE: GENERAL PROVISIONS
    {
      number: "1",
      title: "Purpose",
      summary: "This Law governs mining and quarry operations in Rwanda."
    },
    {
      number: "2",
      title: "Interpretation",
      summary: "Defines key terms: 'minerals' (metallic/non-metallic substances extractable from soil, excluding hydrocarbons and water); 'radioactive minerals' (minerals containing ≥0.05% uranium or thorium by weight); 'mining operations' (exploration, extraction, processing or trading of minerals); 'quarry operations' (extraction, processing or trading of geological materials); 'exploration operations' (activities to identify potential mining areas, quantity, quality and economic value); 'small-scale', 'medium-scale' and 'large-scale mining' (categorised per competent organ regulations); 'controlling interest' (direct or indirect holding of >50% management control); 'competent organ' (State organ responsible for mines and quarries — i.e., RMB); 'licence' (document authorising exploration, mining or quarry activities)."
    },
    {
      number: "3",
      title: "General Principles",
      summary: "Establishes foundational principles: (a) ALL rights of ownership and control over minerals in, under or upon any land in Rwanda are vested in the State, notwithstanding private land ownership; (b) mining operations require a licence; (c) quarry operations require a licence; (d) competent organ may designate strategic minerals for exclusive Government rights; (e) competent organ may designate certain quarries for exclusive Government exploitation in the public interest; (f) mining and quarry operations must comply with social welfare and environmental protection principles; (g) operations must promote gender equality."
    },
    {
      number: "4",
      title: "Rights of Land Owner in a Licensed Area",
      summary: "Land owners/lawful occupiers retain full rights under relevant legislation. Before commencing mining, the licence holder must provide the land owner with fair compensation. Upon fair compensation, the acquired land is registered in the State's name. For exploration or quarry licences, the holder concludes a written lease contract with the land owner, and the land is returned upon completion of operations."
    },
    {
      number: "5",
      title: "Demarcation of Potential Mining Areas",
      summary: "The competent organ (RMB) demarcates economically viable potential mining areas. RMB regulations determine names, geographic coordinates, and conditions for exploration and exploitation."
    },
    {
      number: "6",
      title: "Establishment of the Licence Assessment Committee",
      summary: "A Committee is established to assess applications for mining and quarry licences. Structure, membership, and functioning are determined by an Order of the Prime Minister."
    },
    // CHAPTER II: LICENCE FOR MINING OPERATIONS
    {
      number: "7",
      title: "Types of Mining Licences",
      summary: "Four types of mining licences: (a) exploration operations licence; (b) mining licence — for small-scale, medium-scale, or large-scale mining; (c) mineral trading licence; (d) mineral processing licence. Categorisation criteria for mines are set by RMB regulations."
    },
    {
      number: "8",
      title: "Size of Licensed Mining Area",
      summary: "Licensed area consists of one or more contiguous blocks. Maximum block sizes: exploration — 400 ha; small-scale mining — 50 ha; medium-scale mining — 100 ha; large-scale mining — 400 ha. Each block must be independently reported per the business plan."
    },
    {
      number: "9",
      title: "Mining Licence Application and Response",
      summary: "Applicants apply to the competent organ (RMB). All applications and responses are processed through the One Stop Center. Modalities and requirements are set by RMB regulations."
    },
    {
      number: "10",
      title: "Acquiring Licence Through Open Competition",
      summary: "RMB may call for applications via open competition for exploration or mining licences. Modalities and requirements determined by RMB regulations."
    },
    {
      number: "11",
      title: "Granting of a Mining Licence",
      summary: "Mining licences are granted by RMB, based on the recommendation of the Licence Assessment Committee. Format and content of the licence are set by RMB regulations."
    },
    {
      number: "12",
      title: "Restrictions on Granting a Mining Licence",
      summary: "RMB cannot grant a mining licence over an area already covered by a licence of the same type. However, RMB may — in the national interest — authorise a second person to explore for different minerals in an already-licensed area. A licence holder cannot extract a different type of mineral from the licensed area without prior RMB authorisation."
    },
    {
      number: "13",
      title: "Duration of a Mining Licence",
      summary: "Exploration licence: initial period not exceeding 4 years. Mining licence: initial period not exceeding 15 years. Duration is determined by feasibility study and project implementation programme submitted to and approved by RMB."
    },
    {
      number: "14",
      title: "Application for Renewal of a Mining Licence",
      summary: "Exploration licence renewal application must include: operations report and costs to date; detailed report on work done with results/data; proposed work programme for renewal period; map of area to be renewed. Exploration licence renewable ONCE for up to 4 additional years (partial relinquishment may be required). Mining licence renewal application must be submitted within 90 days before expiry and must include: proved/estimated/inferred mineral reserves (verified by independent consultant approved by RMB); capital investment plan; proposed mining activities; expected changes to extraction/processing methods; likely social and environmental impacts with mitigation/compensation measures. Mining licence renewable more than once, each renewal up to 15 years."
    },
    {
      number: "15",
      title: "Renewal Decision and Continuity",
      summary: "Renewal decision must be notified in writing within 60 days of receiving the application. If the licence expires before a renewal decision is made, the holder may continue operations until the decision is notified. If renewal is refused, the holder is given a wind-down period determined by RMB."
    },
    {
      number: "16",
      title: "Transfer of a Mining Licence",
      summary: "A licence holder may transfer by assigning all or part of shares, but NOT before having invested at least 30% of the committed investment amount at licence grant. Prior written authorisation from RMB required. For private companies, transfer includes: assignment/sale/disposal of licence; pledge or seizure of pledged licence; transfer of any shareholder interest. For public companies, transfer = acquiring controlling interest (>50%). Upon registration of transfer, all rights and obligations immediately pass to the transferee."
    },
    {
      number: "17",
      title: "Requirements for Transfer",
      summary: "Documents required for transfer: written application by current licence holder; notarised shareholders meeting minutes approving the transfer; profile and mining experience of transferee; certificate of registration of transferee company; tax clearance certificate of former holder; document showing transaction value; disclosure of any other relationship between transferor and transferee; transferee's commitment to assume transferor's obligations."
    },
    {
      number: "18",
      title: "Decision on Transfer Application",
      summary: "Decision on transfer application must be notified in writing within 60 days of receiving the application."
    },
    {
      number: "19",
      title: "Mineral Processing Licence",
      summary: "Mineral processing requires a separate licence from RMB. Content and modalities are determined by RMB regulations."
    },
    {
      number: "20",
      title: "Mineral Trading Licence",
      summary: "Trading in minerals requires a mineral trading licence from RMB. Content and modalities are determined by RMB regulations."
    },
    // CHAPTER III: RIGHTS AND OBLIGATIONS OF MINING LICENCE HOLDERS
    {
      number: "21",
      title: "Rights of Exploration Licence Holder",
      summary: "Exploration licence holder may: explore licensed minerals; drill boreholes and make necessary excavations; collect mineral samples for analysis (within RMB-prescribed quantity limits); construct temporary buildings; receive priority right to apply for a mining licence where a deposit is discovered. If wishing to proceed to mining, must apply within 90 days before exploration licence expiry. If exploration licence expires before mining licence decision, holder may continue exploration until decision is made. If mining application is refused, holder gets 90-day notice to close operations."
    },
    {
      number: "22",
      title: "Obligations of Exploration Licence Holder",
      summary: "Holder must: commence operations within 90 days of licence issuance; submit six-monthly progress reports to RMB; recruit and manage staff per Rwanda Labour Law; immediately notify RMB of any unlicensed mineral deposit discovered; maintain records at Rwanda address (boreholes, strata, minerals discovered, geochemical/geophysical results, geological interpretation, expenditure); submit audited annual expenditure statement within 90 days of each anniversary of licence issuance; notify RMB of any amendments to exploration plan (RMB has 60 days to approve/reject); notify relevant public organ within 30 days of any historical/significant object found; remove temporary buildings within 90 days after licence expiry or termination; fill/secure boreholes and excavations; provide copies of documents on request."
    },
    {
      number: "23",
      title: "Rights of Mining Licence Holder",
      summary: "Mining licence holder may: extract licensed minerals and transport them; install equipment, plant, machinery and buildings at the mine; sell mineral products from the licensed area. May apply within 90 days to add newly discovered mineral types to the licence. May apply to RMB to amend the mining programme."
    },
    {
      number: "24",
      title: "Obligations of Mining Licence Holder",
      summary: "Holder must: develop and mine per approved mine development programme and environmental management plan; commence mining within 180 days of licence issuance; install boundary beacons; maintain complete technical records, geological reports and financial records at Rwanda address (with separate accounts if operating other businesses); permit authorised officers to inspect records; submit copies of books/records every six months and on demand; provide annual audited financial report within 90 days of financial year end; notify RMB one year in advance of permanent cessation, six months for temporary suspension, three months for curtailment; store and manage mine tailings per RMB regulations; compensate land and property damage; remove mineral waste per approved means; notify relevant organ within 30 days of significant/historical objects found; manage staff per Rwanda Labour Law; comply with health, safety and environmental standards including women's safety; immediately notify RMB of newly discovered different mineral types."
    },
    {
      number: "25",
      title: "Special Obligations — Radioactive Minerals",
      summary: "All activities involving radioactive minerals (exploration, extraction, processing, possession, transport, import, export) require a special licence from RMB. Holder must submit written monthly reports on radioactive mineral operations to RMB in the first week of every month."
    },
    {
      number: "26",
      title: "Relinquishment of Mining Licence Area",
      summary: "Holder wishing to relinquish all or part of a licensed mining area must: give at least 90 days' notice to RMB; comply with agreed licence conditions; provide a map with coordinates of area to be relinquished; submit a detailed activity report. Must also provide: tax clearance certificate; certificate of no employee liability (from district labour inspectorate); rehabilitation certificate (from environment authority). Relinquishment does not extinguish pre-existing liabilities."
    },
    {
      number: "27",
      title: "Records After Exploration Licence Cancellation or Expiry",
      summary: "Records and reports from exploration operations belong to the exploration licence holder. If the licence is cancelled or expires and the holder does not apply for renewal or a mining licence within 2 years, all records and reports become State property."
    },
    // CHAPTER IV: QUARRY LICENCE
    {
      number: "28",
      title: "Types of Quarry Licences",
      summary: "Three types: (a) non-commercial small-scale quarry licence; (b) commercial small-scale quarry licence; (c) industrial quarry licence. Categorisation criteria set by RMB regulations."
    },
    {
      number: "29",
      title: "Quarry Licence Application",
      summary: "Industrial quarry licence — apply to RMB. Commercial small-scale quarry licence — apply to Administrative Head of the District where quarry is located (copy to RMB). Non-commercial small-scale quarry licence — apply to Sector Executive Secretary (copy to District Administrative Head). Modalities and requirements set by RMB regulations."
    },
    {
      number: "30",
      title: "Duration of Quarry Licence",
      summary: "Non-commercial small-scale quarry licence: 1 year, renewable. Commercial small-scale quarry licence: 5 years, renewable. Industrial quarry licence: up to 15 years (based on feasibility study approved by relevant public organ), renewable."
    },
    {
      number: "31",
      title: "Renewal of Quarry Licence",
      summary: "Application for renewal submitted to the relevant official per the licence type (as per Art. 29). Modalities determined by RMB regulations."
    },
    {
      number: "32",
      title: "Transfer of Quarry Licence",
      summary: "Only commercial small-scale and industrial quarry licences may be transferred. Upon registration of transfer, the transferee assumes all rights, duties and liabilities. Requirements and modalities set by RMB regulations."
    },
    {
      number: "33",
      title: "Rights of Quarry Licence Holder",
      summary: "Commercial small-scale/industrial quarry licence holders may: conduct exploration, extract, transport, sell, use, process and add value to quarry products. Non-commercial small-scale licence holders may: extract, transport and use quarry products only (no trading)."
    },
    {
      number: "34",
      title: "Obligations of Quarry Licence Holder",
      summary: "Quarry licence holder must: submit reports per RMB regulations; pay leasing fees and compensation for land/property damage; comply with health, safety and environmental standards including women's safety; pay taxes and duties per relevant laws."
    },
    {
      number: "35",
      title: "Relinquishment of Quarry Licence Area",
      summary: "Holder relinquishing quarry area must give notice: at least 30 days for non-commercial small-scale; at least 60 days for other quarry licences. Must comply with licence terms; submit detailed activity report; provide map with coordinates. Before relinquishment must provide: tax clearance certificate; certificate of no employee liability. Relinquishment does not extinguish pre-existing liabilities."
    },
    {
      number: "36",
      title: "Coexistence of Quarry and Mining Licence",
      summary: "A quarry licence and a mining licence may be granted for the same area, provided RMB determines the two operations will not interfere with each other."
    },
    {
      number: "37",
      title: "Measures After Suspension or Cancellation",
      summary: "Provisional suspension: RMB notifies holder in writing of remedy period; once remedied, RMB authorises resumption in writing. Cancellation: RMB provides 90 days for the holder to complete site rehabilitation, clear liabilities, and carry out any other required activity."
    },
    // CHAPTER V: ENVIRONMENT, HEALTH AND SAFETY
    {
      number: "38",
      title: "Environmental Compliance Before Commencing Operations",
      summary: "Before commencing operations, holders of exploration, small/medium/large-scale mining, mineral processing, commercial small-scale quarry, and industrial quarry licences must submit an approved Environmental and Social Impact Assessment (ESIA) report to RMB. (Non-commercial small-scale quarry is not included in this requirement.)"
    },
    {
      number: "39",
      title: "Rehabilitation of Damaged Areas",
      summary: "Licence holders are obligated to rehabilitate all areas affected by their operations: reinstate boreholes and excavations, reforest, remove buildings, and level the land — in accordance with the ESIA and environmental law. RMB regulations may impose additional rehabilitation requirements."
    },
    {
      number: "40",
      title: "Rehabilitation Plan",
      summary: "All exploration, mining and quarry licence holders must have a rehabilitation plan with a budget. The holder remains liable for environmental protection until the environment authority issues a final rehabilitation certificate."
    },
    {
      number: "41",
      title: "Rehabilitation Guarantee",
      summary: "All exploration, mining and quarry licence holders must provide a rehabilitation guarantee. Nature, amount and modalities of deposit are determined by RMB regulations."
    },
    {
      number: "42",
      title: "Health and Safety of Workers",
      summary: "Licence holders must: ensure mines are commissioned, maintained and decommissioned without endangering workers or others; ensure all workers have necessary skills, competence and resources to work safely. Authorised officers may make urgent decisions (including immediate suspension of operations) if health/safety is at risk. Holder may appeal officer's decision to the head of the issuing organ."
    },
    {
      number: "43",
      title: "Use of Dynamites",
      summary: "Import, export, manufacture, transport, trade, transfer or use of dynamites in mining/quarry operations requires prior authorisation from the Minister in charge of Internal Security, upon RMB recommendation. Use of expired dynamites is prohibited. Requirements for authorisation are set by Ministerial Order of the Minister of Internal Security."
    },
    // CHAPTER VI: FINANCIAL PROVISIONS
    {
      number: "44",
      title: "Annual Financial Statement",
      summary: "Licence holders must submit to RMB and the Rwanda Revenue Authority an audited annual financial statement (per IFRS) within 3 months of the end of each financial year. Exemption: non-commercial small-scale quarry licence holders are excluded from this requirement."
    },
    {
      number: "45",
      title: "Separate Books of Accounts",
      summary: "If a licence holder carries on activities outside the licensed operations, separate books of accounts must be maintained for the licensed mining/quarry activities."
    },
    {
      number: "46",
      title: "Taxes and Royalties",
      summary: "Holders of mining or quarry licences pay all applicable taxes and royalties in accordance with relevant legislation (see Tax on Minerals Law N° 056/2024)."
    },
    {
      number: "47",
      title: "Service Fees",
      summary: "Service fees payable by applicants and licence holders for mining and quarry operations are set by RMB regulations."
    },
    {
      number: "48",
      title: "Government Investment",
      summary: "The Government may acquire shares in mining or quarry operations on terms agreed with the licence holder."
    },
    {
      number: "49",
      title: "Government Free Carried Interest",
      summary: "The grant of a mining licence may entitle the Government to free carried interest (equity without capital contribution). Number and modalities are determined by Ministerial Order of the Minister in charge of Government investment."
    },
    // CHAPTER VII: ADMINISTRATIVE FAULTS AND SANCTIONS
    {
      number: "50",
      title: "Fault — Failure to Indicate Origin of Minerals",
      summary: "Any person caught with minerals without proof of origin: administrative fine of 10% of the value of the minerals + confiscation of the minerals (to be auctioned by RMB)."
    },
    {
      number: "51",
      title: "Fault — Mining: Late/False Reports, Records, Suspension, Boundaries",
      summary: "Mining licence holder who: submits a late or false report; keeps operations documents outside the operations area; suspends mining without notifying RMB; fails to install boundary beacons/signposts: administrative fine of RWF 500,000."
    },
    {
      number: "52",
      title: "Fault — Mining: Non-payment, No Worker Insurance, Refusing Access",
      summary: "Mining licence holder who: fails to make required payments; refuses authorised officer/relevant official access to the mining area; fails to insure employees; fails to remunerate employees per law; fails to provide required protective equipment to employees: sanction of provisional suspension of the licence."
    },
    {
      number: "53",
      title: "Fault — Mining: Failure to Start, Fraud to Obtain Licence, Non-compliance with Suspension Terms, Unlawful Transfer",
      summary: "Mining licence holder who: fails without cause to start operations within the set period; fails without cause to meet payment obligations; fails to comply with licence terms; fails to comply with provisional suspension decision terms; transfers licence without following legal requirements: sanction of permanent cancellation of the licence."
    },
    {
      number: "54",
      title: "Fault — Mining: Tampering with Boundary Demarcations",
      summary: "Exploration/mining licence holder who destroys or removes boundary demarcations: administrative fine of RWF 5,000,000. Holder who displaces or crosses boundary demarcations: administrative fine of RWF 10,000,000."
    },
    {
      number: "55",
      title: "Fault — Mining: Failure to Rehabilitate",
      summary: "Mining licence holder who fails to rehabilitate (fill boreholes, reforest, remove buildings, level terrain) areas affected by exploration or mining: administrative fine of RWF 5,000,000–10,000,000 + ordered to make restitution. If the failure causes damage to infrastructure or community property: holder ordered to rehabilitate or compensate the damaged property."
    },
    {
      number: "56",
      title: "Fault — Quarry: Late/False Reports, Records, Suspension, Boundaries",
      summary: "Quarry licence holder who: submits a late or false report; keeps documents outside the operations area; suspends quarry without notifying RMB; fails to install boundary markers: administrative fine of RWF 300,000."
    },
    {
      number: "57",
      title: "Fault — Quarry: Non-payment, No Worker Insurance, Refusing Access",
      summary: "Quarry licence holder who: fails to make required payments; refuses authorised officer/relevant official access; fails to insure employees; fails to remunerate employees per law; fails to provide required protective equipment: sanction of provisional suspension of the licence."
    },
    {
      number: "58",
      title: "Fault — Quarry: Failure to Start, Non-compliance, Unlawful Transfer",
      summary: "Quarry licence holder who: fails without cause to start quarry operations within the set period; fails to comply with licence terms; fails to comply with provisional suspension decision terms; transfers licence without following legal requirements: sanction of permanent cancellation of the licence."
    },
    {
      number: "59",
      title: "Fault — Quarry: Tampering with Boundary Demarcations",
      summary: "Industrial quarry licence holder who destroys/removes or displaces/crosses boundary demarcations: administrative fine of RWF 1,000,000. Commercial small-scale quarry licence holder who does the same: administrative fine of RWF 500,000."
    },
    {
      number: "60",
      title: "Fault — Quarry: Failure to Rehabilitate",
      summary: "Quarry licence holder who fails to rehabilitate areas affected by quarry operations: administrative fine of RWF 3,000,000–5,000,000 + ordered to make restitution. If the failure causes damage to infrastructure or community property: holder ordered to rehabilitate or compensate."
    },
    {
      number: "61",
      title: "Common Fault — Unauthorised/Expired Dynamite Transfer or Use",
      summary: "Any person (in mining or quarry context) who transfers dynamites without authorisation or uses expired dynamites: administrative fine of RWF 5,000,000–10,000,000."
    },
    {
      number: "62",
      title: "Common Fault — Non-compliance with Health, Safety and Environmental Standards",
      summary: "Licence holder who fails to comply with health, safety and environmental protection standards: fine of RWF 1,000,000–3,000,000. If the non-compliance causes environmental destruction: fine of RWF 3,000,000–5,000,000."
    },
    // CHAPTER VIII: CRIMINAL OFFENCES AND PENALTIES
    {
      number: "63",
      title: "Offence — Mining Without a Licence",
      summary: "Individual: imprisonment 2–5 years + fine RWF 25,000,000–50,000,000 (or either penalty). Legal entity: fine RWF 60,000,000–80,000,000 + possible court-ordered dissolution. Court also orders: confiscation and auction of seized minerals; site rehabilitation; infrastructure and community property rehabilitation/compensation."
    },
    {
      number: "64",
      title: "Offence — Possessing Illegally Extracted Minerals",
      summary: "Individual: imprisonment 1–3 years + fine RWF 30,000,000–60,000,000 (or either penalty). Legal entity: fine RWF 70,000,000–90,000,000 + possible dissolution. Court also orders confiscation and auction of seized minerals."
    },
    {
      number: "65",
      title: "Offence — Trading in Illegally Extracted Minerals",
      summary: "Individual: imprisonment more than 5 years up to 10 years + fine RWF 60,000,000–120,000,000 (or either penalty). Legal entity: fine RWF 130,000,000–150,000,000 + possible dissolution. Court also orders confiscation and auction of seized minerals."
    },
    {
      number: "66",
      title: "Offence — Allowing Unlicensed Mining on Land",
      summary: "Individual who allows an unlicensed person to mine on their land: imprisonment 1–2 years + fine RWF 25,000,000–50,000,000 (or either penalty). Legal entity: fine RWF 60,000,000–80,000,000 + possible dissolution."
    },
    {
      number: "67",
      title: "Offence — Quarry Operations Without a Licence",
      summary: "Individual: imprisonment 2–6 months + fine RWF 1,000,000–3,000,000 (or either penalty). Legal entity: fine RWF 10,000,000–15,000,000 + possible dissolution. Court also orders: site rehabilitation; infrastructure and community property rehabilitation/compensation."
    },
    {
      number: "68",
      title: "Offence — Trading in Illegally Extracted Quarry Products",
      summary: "Individual: imprisonment 2–5 years + fine RWF 10,000,000–20,000,000 (or either penalty). Legal entity: fine RWF 30,000,000–50,000,000 + possible dissolution."
    },
    {
      number: "69",
      title: "Offence — Allowing Unlicensed Quarry Activity on Land",
      summary: "Individual: imprisonment 2–6 months + fine RWF 1,000,000–3,000,000 (or either penalty). Legal entity: fine RWF 4,000,000–6,000,000 + possible dissolution."
    },
    {
      number: "70",
      title: "Common Offence — Unauthorised Dynamite Activities",
      summary: "Any person who imports, exports, manufactures, uses, transports, or trades in dynamites without a permit: imprisonment 5–7 years + fine RWF 40,000,000–75,000,000. Legal entity: fine RWF 80,000,000–100,000,000 + possible dissolution."
    },
    // CHAPTER IX: MISCELLANEOUS
    {
      number: "71",
      title: "Provision of Private Services",
      summary: "RMB regulations govern the modalities for private operators providing services related to mining and quarry operations."
    },
    {
      number: "72",
      title: "Local Procurement Preference",
      summary: "Licence holders must give preference to: (a) Rwandan contractors for works and services (if competitive on price, quality and timeline); (b) materials made in Rwanda (if equivalent in quality, quantity and price). Holders must submit periodic compliance reports to RMB."
    },
    {
      number: "73",
      title: "Development Agreement with Licence Holder",
      summary: "RMB must enter into a formal agreement with holders of industrial mining or quarry licences to specify rights and obligations. Content of the agreement is governed by RMB regulations."
    },
    {
      number: "74",
      title: "Community Development Contribution",
      summary: "Mining or quarry licence holders must prepare a community development and social welfare plan in collaboration with the District administration where operations are located. This agreed plan must be submitted to the issuing authority."
    },
    // CHAPTER X: TRANSITIONAL AND FINAL PROVISIONS
    {
      number: "75",
      title: "Existing Licences",
      summary: "Licences granted under the repealed Law N° 58/2018 remain valid until their expiry date."
    },
    {
      number: "76",
      title: "Language",
      summary: "This Law was drafted, deliberated and adopted in Kinyarwanda."
    },
    {
      number: "77",
      title: "Repealing Provision",
      summary: "Law N° 58/2018 of 13/08/2018 on mining and quarry operations is hereby repealed."
    },
    {
      number: "78",
      title: "Entry into Force",
      summary: "This Law comes into force on the date of its publication in the Official Gazette — 24 July 2024."
    },
  ],

  penalties: [
    // ADMINISTRATIVE FAULTS (Chapter VII)
    "Art. 50 — Minerals without proof of origin: 10% of mineral value (administrative fine) + confiscation and auction of minerals",
    "Art. 51 — Mining: late/false report, records outside area, unsanctioned suspension, failure to fix boundaries: RWF 500,000 (administrative fine)",
    "Art. 52 — Mining: non-payment of fees, no worker insurance, denying access to inspectors, non-remuneration of workers, no protective equipment: provisional licence suspension",
    "Art. 53 — Mining: failure to start without cause, breach of licence terms, breach of suspension decision, unlawful transfer: permanent licence cancellation",
    "Art. 54 — Mining: destroying/removing boundary markers: RWF 5,000,000; displacing/crossing boundary markers: RWF 10,000,000",
    "Art. 55 — Mining: failure to rehabilitate: RWF 5,000,000–10,000,000 + compulsory restitution; if infrastructure/community damage caused: rehabilitation or compensation ordered",
    "Art. 56 — Quarry: late/false report, records outside area, unsanctioned suspension, failure to fix boundaries: RWF 300,000 (administrative fine)",
    "Art. 57 — Quarry: non-payment of fees, no worker insurance, denying access, non-remuneration, no protective equipment: provisional licence suspension",
    "Art. 58 — Quarry: failure to start without cause, breach of licence/suspension terms, unlawful transfer: permanent licence cancellation",
    "Art. 59 — Industrial quarry boundary tampering: RWF 1,000,000; commercial small-scale quarry boundary tampering: RWF 500,000",
    "Art. 60 — Quarry: failure to rehabilitate: RWF 3,000,000–5,000,000 + compulsory restitution; if infrastructure/community damage: rehabilitation or compensation ordered",
    "Art. 61 — Unauthorised dynamite transfer or use of expired dynamites: RWF 5,000,000–10,000,000",
    "Art. 62 — Non-compliance with health/safety/environmental standards: RWF 1,000,000–3,000,000; if environmental destruction caused: RWF 3,000,000–5,000,000",
    // CRIMINAL OFFENCES (Chapter VIII)
    "Art. 63 — Mining without a licence (individual): 2–5 years imprisonment + RWF 25,000,000–50,000,000 fine (or either); legal entity: RWF 60,000,000–80,000,000 + possible dissolution + confiscation/auction of minerals + site/infrastructure rehabilitation",
    "Art. 64 — Possessing illegally extracted minerals (individual): 1–3 years + RWF 30,000,000–60,000,000 (or either); legal entity: RWF 70,000,000–90,000,000 + possible dissolution + confiscation",
    "Art. 65 — Trading in illegally extracted minerals (individual): >5–10 years + RWF 60,000,000–120,000,000 (or either); legal entity: RWF 130,000,000–150,000,000 + possible dissolution + confiscation",
    "Art. 66 — Allowing unlicensed mining on land (individual): 1–2 years + RWF 25,000,000–50,000,000 (or either); legal entity: RWF 60,000,000–80,000,000 + possible dissolution",
    "Art. 67 — Quarry operations without a licence (individual): 2–6 months + RWF 1,000,000–3,000,000 (or either); legal entity: RWF 10,000,000–15,000,000 + possible dissolution + site/infrastructure rehabilitation",
    "Art. 68 — Trading in illegally extracted quarry products (individual): 2–5 years + RWF 10,000,000–20,000,000 (or either); legal entity: RWF 30,000,000–50,000,000 + possible dissolution",
    "Art. 69 — Allowing unlicensed quarry on land (individual): 2–6 months + RWF 1,000,000–3,000,000 (or either); legal entity: RWF 4,000,000–6,000,000 + possible dissolution",
    "Art. 70 — Unauthorised dynamite import/export/manufacture/use/transport/trade (individual): 5–7 years + RWF 40,000,000–75,000,000; legal entity: RWF 80,000,000–100,000,000 + possible dissolution",
  ],

  regulator: "RMB — Rwanda Mines, Petroleum and Gas Board (competent organ for all mining and quarry operations). Minister of Internal Security (dynamite authorisations). Environment authority (rehabilitation certificates). RRA — Rwanda Revenue Authority (tax compliance).",

  keyDeadlines: [
    "Art. 13 — Exploration licence: initial duration max 4 years; mining licence: initial duration max 15 years",
    "Art. 14(2) — Exploration licence renewable ONCE for up to 4 years",
    "Art. 14(3) — Mining licence renewal application: submit within 90 days before expiry",
    "Art. 14(4) — Mining licence renewable multiple times, each renewal up to 15 years",
    "Art. 15(2) — Renewal decision: notified within 60 days of application receipt",
    "Art. 16(1) — Licence transfer: minimum 30% of committed investment must be made before transfer is permitted",
    "Art. 18 — Transfer decision: notified within 60 days of application receipt",
    "Art. 21(2) — Exploration → mining transition: apply within 90 days before exploration licence expiry",
    "Art. 21(4) — Refusal of mining licence: 90 days' notice to close exploration operations",
    "Art. 22(a) — Exploration: commence operations within 90 days of licence issuance",
    "Art. 22(b) — Exploration: submit progress reports every 6 months",
    "Art. 22(f) — Exploration: submit annual audited expenditure within 90 days of each licence anniversary",
    "Art. 22(g) — Exploration: RMB has 60 days to approve/reject plan amendments",
    "Art. 22(h) — Exploration: notify relevant organ of historical objects within 30 days of discovery",
    "Art. 22(i) — Exploration: remove temporary buildings within 90 days of licence expiry/termination",
    "Art. 24(b) — Mining: commence operations within 180 days of licence issuance",
    "Art. 24(g) — Mining: annual financial report within 90 days of financial year end",
    "Art. 24(h)(i) — Mining: notify RMB 1 year in advance of permanent cessation",
    "Art. 24(h)(ii) — Mining: notify RMB 6 months in advance of temporary suspension",
    "Art. 24(h)(iii) — Mining: notify RMB 3 months in advance of curtailment of operations",
    "Art. 24(l) — Mining: notify relevant organ of historical objects within 30 days of discovery",
    "Art. 25(2) — Radioactive minerals: monthly written report to RMB (first week of each month)",
    "Art. 26(1)(a) — Mining relinquishment: give at least 90 days' notice to RMB",
    "Art. 27(2) — Exploration records become State property if no application for renewal/mining licence within 2 years of cancellation/expiry",
    "Art. 30 — Quarry licences: non-commercial small-scale = 1 year renewable; commercial small-scale = 5 years renewable; industrial = up to 15 years renewable",
    "Art. 35(1)(a) — Quarry relinquishment: at least 30 days' notice (non-commercial small-scale); at least 60 days' notice (others)",
    "Art. 37(2) — Licence cancellation: 90 days given for site rehabilitation and liability clearance",
    "Art. 44(1) — Annual financial statement (IFRS-compliant, audited): submit within 3 months of financial year end to RMB and RRA",
  ],
},
  {
  id: "tax-on-minerals-056-2024",
  title: "Tax on Minerals Law",
  citation: "Law N° 056/2024 of 26/06/2024",
  gazetteRef: "Official Gazette N° Special of 05/07/2024",
  repeals: "Law N° 55/2013 of 02/08/2013",
  articles: [
    {
      number: "1",
      title: "Purpose",
      summary: "Establishes the tax on minerals in Rwanda."
    },
    {
      number: "2",
      title: "Interpretation",
      summary: "Defines key terms: 'gross value' (value before deducting local processing costs); 'norm value' (international market value at date of sale certificate, excluding approved processing costs); 'gemstones' (precious stones used in jewellery); 'rare earth elements' (zirconium, uranium, thorium, monazite); 'energy minerals' (lithium, cobalt, manganese, graphite); 'platinum group metals' (ruthenium, rhodium, palladium, osmium, iridium, platinum); 'base metals' (copper, lead, zinc, nickel, aluminium, tin, iron, tungsten, molybdenum, tantalum, cobalt, bismuth, titanium, manganese, chromium, germanium, vanadium, gallium, hafnium, indium, niobium, thallium); 'mineral processing' (cutting, polishing, smelting, or other factory processing to create new products); 'international market value' (price set by a recognised global minerals pricing platform); 'grade' (measured mineral content by reference to payable factors in the form sold); 'tax avoidance arrangement' (arrangement whose sole/main purpose is a tax benefit, or using means not normally employed for genuine business purposes, or creating abnormal rights/obligations between non-arm's-length parties); 'competent authority' (State organ in charge of minerals, i.e. RMB); 'tax on minerals' (mining royalty tax or export tax on value of minerals produced in a Rwandan mine); 'local mineral processing facility' (RMB-licenced processing facility); 'taxpayer' (person liable to pay minerals tax under this Law)."
    },
    {
      number: "3",
      title: "Liability to Tax",
      summary: "Any person who sells minerals is liable to pay tax on those minerals."
    },
    {
      number: "4",
      title: "Mining Royalty Tax Rates",
      summary: "Mining royalty tax rates by mineral category: (a) Base metals: 3% of norm value; (b) Gemstones: 2% of gross value; (c) Platinum group metals: 2% of norm value; (d) Rare earth elements: 2% of norm value; (e) Energy minerals: 3% of norm value; (f) Gold: 0.5% of norm value."
    },
    {
      number: "5",
      title: "Export Tax (additional, raw minerals only)",
      summary: "Minerals exported in raw form are subject to an additional export tax on top of the mining royalty in Article 4, at the following rates: (a) Base metals: 2% of norm value; (b) Gemstones: 3% of norm value; (c) Platinum group metals: 2% of norm value; (d) Rare earth elements: 1% of norm value; (e) Energy minerals: 2% of norm value; (f) Gold: 0.5% of norm value. Note: export tax applies only to raw (unprocessed) minerals."
    },
    {
      number: "6",
      title: "Withholding, Declaration and Payment Obligations",
      summary: "A local mineral processing facility or exporter has the obligation to withhold mining royalty tax, declare, and remit it to the tax administration within the timeline prescribed by this Law. The withholding obligation does not apply where the miner and exporter are the same operator — in that case the operator pays both mining royalty tax and export tax directly. Tax on minerals is NOT a deductible expense and NOT an advance payment of income tax for purposes of calculating corporate income tax."
    },
    {
      number: "7",
      title: "Exemptions",
      summary: "Two exemptions apply: (1) Mineral samples exported for assay, analysis, or examination are exempt — quantity thresholds set by RMB regulation; (2) Processed minerals and imported minerals re-exported are exempt from tax on minerals at the point of export — except gold, which is not exempt."
    },
    {
      number: "8",
      title: "Tax Due Date",
      summary: "Tax on minerals becomes due on the date of exportation or the date a local mineral processing facility purchases the minerals. The date of customs export declaration is deemed to be the date of exportation."
    },
    {
      number: "9",
      title: "Grade, Value and Processing Charges",
      summary: "Grade, value, and processing charges for minerals are determined by the competent authority (RMB). RMB shall issue a regulation establishing the mechanism for their determination."
    },
    {
      number: "10",
      title: "Declaration and Payment Timelines",
      summary: "Export tax must be declared and paid BEFORE exportation of minerals. Mining royalty tax (withheld) must be declared and paid within 15 days following the end of the month in which it was withheld."
    },
    {
      number: "11",
      title: "Sales to Affiliated Companies (Transfer Pricing)",
      summary: "A licence holder selling minerals to affiliated companies must do so at a price at least equal to what would be obtained in an arm's-length transaction with unaffiliated buyers, on comparable terms. If the licence holder sells to affiliates below international market value, both RMB and the tax administration may use the international market value to determine the taxable value."
    },
    {
      number: "12",
      title: "Anti-Tax Avoidance Rules",
      summary: "Where a tax avoidance arrangement exists, the tax administration may make price adjustments by: (a) disregarding, combining, or re-characterising any transaction or part of the arrangement; (b) disregarding a person facilitating or involved in the arrangement; (c) treating related persons as a single person for tax purposes; or (d) reallocating gross income, capital accruals, or expenditure among the parties."
    },
    {
      number: "13",
      title: "Language",
      summary: "Law drafted in English, considered and adopted in Kinyarwanda."
    },
    {
      number: "14",
      title: "Repealing Provision",
      summary: "Repeals Law N° 55/2013 of 02/08/2013 on minerals tax in its entirety."
    },
    {
      number: "15",
      title: "Entry into Force",
      summary: "Comes into force on the date of publication in the Official Gazette (05/07/2024)."
    }
  ],
  penalties: "This Law contains no standalone penalties provisions. Penalties for non-declaration, late payment, and tax avoidance are governed by the Tax Procedures Law N° 020/2023 (general tax administration framework). Anti-avoidance adjustments under Article 12 allow the tax administration to re-characterise transactions and reassess tax; affiliated-party underpricing under Article 11 triggers revaluation at international market value.",
  regulator: "Rwanda Revenue Authority (RRA) — tax administration and collection. Rwanda Mines, Petroleum and Gas Board (RMB) — competent authority for minerals: determines grade, value, and processing charges (Art. 9); issues exemption quantity regulations (Art. 7(1)); licences local processing facilities (Art. 2(o)); co-operates with RRA on affiliated-party underpricing (Art. 11(2)).",
  keyDeadlines: [
    "Export tax: must be declared and paid BEFORE exportation of minerals (Art. 10(1)).",
    "Mining royalty tax (withheld): declared and paid within 15 days following the end of the month in which the tax was withheld (Art. 10(2)).",
    "Tax due date triggers: date of customs export declaration (for exported minerals) or date of purchase by local processing facility (Art. 8)."
  ],
  effectiveDate: "05/07/2024"
}
{
  id: "insolvency-075-2021",
  title: "Insolvency Law",
  citation: "Law N° 075/2021 of 06/12/2021",
  gazetteRef: "Official Gazette N° Special of 30/12/2021",
  repeals: "Law N° 23/2018 of 29/04/2018 relating to insolvency and bankruptcy (which had itself repealed Law N° 12/2009), and all other prior contrary legal provisions",
  articles: [
    {
      number: "1",
      title: "Purpose",
      summary: "Establishes proceedings for settling insolvency issues of companies, partnerships, and individuals, unless otherwise provided by other laws."
    },
    {
      number: "2",
      title: "Scope",
      summary: "Applies to: (1) voluntary mechanisms to avoid insolvency; (2) insolvency of companies, partnerships, and individuals; (3) liquidation of insolvent companies and partnerships; (4) voluntary liquidation of solvent companies and partnerships; (5) matters relating to insolvency practitioners; and (6) cross-border insolvency. Also governs insolvency-related matters not covered by other laws."
    },
    {
      number: "3",
      title: "Definitions",
      summary: "Key terms: 'insolvency' — inability to pay debts as they fall due, OR assets less than liabilities plus stated capital (two tests, either triggers); 'debtor' — company, partnership, or individual that is insolvent; 'creditors' — present, future, and contingent; 'secured creditor' — holds security over a debt or obligation; 'insolvency practitioner' — person qualified to act as provisional administrator, administrator, provisional liquidator, liquidator, proposed supervisor, supervisor, or bankruptcy trustee; 'debt arrangement' — composition or scheme of arrangement for individuals or companies; 'essential services' — electricity, water, and telecommunications; 'administration deed' — arrangement between provisional trustee and creditors on management of affairs; 'bankruptcy order' — court order declaring bankruptcy and appointing bankruptcy trustee; 'cell' — cell created by a protected cell company; 'foreign proceeding,' 'foreign main proceeding,' 'foreign non-main proceeding,' and 'foreign representative' — for cross-border insolvency regime; 'Minister' — Minister in charge of trade; 'competent authority' — regulatory authority."
    },
    {
      number: "4",
      title: "Responsibilities of Registrar General",
      summary: "Sets out RDB Registrar General's duties in insolvency proceedings, including provisional appointment of insolvency practitioners and oversight functions. Registrar General may not be appointed administrator by the court unless they were a party to the case in which the appointment order was made."
    },
    {
      number: "5",
      title: "Public or Individual Written Notice",
      summary: "Notice to creditors may be given: personally; by registered mail; electronically to a known address; or by written notice published in a widely-read national or international newspaper for a period of 30 days. All four modes are valid."
    },
    {
      number: "6",
      title: "Creditors' Right to Information",
      summary: "During insolvency proceedings, every creditor is entitled to request the insolvency practitioner to provide any information relating to the conduct of the proceedings."
    },
    {
      number: "7",
      title: "Grounds for Commencement of Insolvency Proceedings",
      summary: "Insolvency proceedings commence when either of two tests is met: (1) cash flow test — debtor is unable to pay debts as they fall due in the normal course of business; OR (2) balance sheet test — debtor's assets are less than its liabilities plus stated capital. Either ground is sufficient."
    },
    {
      number: "8",
      title: "Application for Commencement of Insolvency Proceedings",
      summary: "Application is filed with the competent court. Persons who may apply: creditors, the debtor, directors (or one of them), the Registrar General, shareholders or partners, or the regulatory authority. Secured creditors are summoned for hearing before the court decides. A creditor's application is admissible only if the creditor demonstrates an interest and establishes both the claim and the reason why proceedings should commence. Court will not appoint an insolvency practitioner if assets are manifestly insufficient to cover proceedings costs — in that case, court issues a declaration of insolvency and orders distribution of available assets to creditors."
    },
    {
      number: "9",
      title: "Appointment of Insolvency Practitioner",
      summary: "The court has sole competence to appoint an insolvency practitioner. However, the Registrar General may appoint on a provisional basis in any of these circumstances: to save assets from imminent loss; where a court-appointed practitioner has not been approved by the creditors' meeting; where a practitioner has resigned; where a practitioner has failed to execute duties; or any other circumstance the Registrar General deems necessary. A provisional practitioner appointed by the Registrar General is removed only by a further Registrar General decision or court order. When the court appoints a practitioner, the provisional one ceases and submits a handover report to the successor with a copy to the Registrar General."
    },
    {
      number: "10",
      title: "Content of Insolvency Proceedings Application",
      summary: "Without prejudice to commercial procedure laws, the application must include: a detailed list of debts and claims; relevant financial and accounting reports; and any other elements the applicant considers necessary."
    },
    {
      number: "11",
      title: "General Effects of Commencement of Insolvency Proceedings",
      summary: "Upon commencement, the following are automatically stayed: (1) commencement or continuation of individual actions or proceedings concerning the debtor's assets, rights, obligations, or liabilities; (2) execution of judgments related to the debtor's assets; (3) any counterparty's right to terminate contracts with the debtor; (4) any right to transfer, mortgage, or otherwise dispose of the debtor's assets. These stays do not prevent actions against individuals to protect debts owed by the debtor. Court may also ease the stay measures. NOTE: secured creditor rights are not stayed by default — see Art. 12."
    },
    {
      number: "12",
      title: "Stay on Secured Claims",
      summary: "Secured creditors' rights and rights of retention are NOT automatically stayed by the commencement of insolvency proceedings — they retain enforcement rights. EXCEPTION: where the debtor expressly states an intention to submit a reorganization plan together with the application, all claims including secured claims and rights of retention are stayed from the date of application. In that case: debtor must submit the reorganization plan to court within 3 months of filing; total stay period cannot exceed 6 months (inclusive of the 3-month plan preparation period); if the 6-month period lapses without a court decision, the secured creditor automatically becomes entitled to enforce the security under applicable laws. A secured creditor may also petition the court to lift the stay at any time on justifiable grounds. For reorganization proceedings specifically (Art. 87): the stay on secured creditor applications lasts 6 months from the date of the reorganization application, renewable by court order up to 3 times."
    },
    {
      number: "13",
      title: "Supply of Essential Services",
      summary: "Suppliers of essential services (electricity, water, telecommunications) may not: (1) refuse to supply to the liquidator or debtor because of pre-insolvency arrears; or (2) make supply conditional on payment of pre-insolvency arrears. Post-commencement essential service charges are treated as administration expenses with priority in distribution."
    },
    {
      number: "14",
      title: "Continuity of Current Obligations",
      summary: "Current contractual obligations continue during insolvency proceedings. The insolvency practitioner may elect to perform or disclaim contracts."
    },
    {
      number: "15",
      title: "Proposal for Debt Arrangement by Individual",
      summary: "An individual may propose a voluntary debt arrangement with creditors to avoid insolvency, by application to court for an interim order. Application must include full particulars of the arrangement proposal and nominate a proposed supervisor."
    },
    {
      number: "16",
      title: "Contents of Proposal for Arrangement with Creditors",
      summary: "The arrangement proposal must set out: full particulars of debts and assets; proposed terms of the arrangement; and the identity and consent of the proposed supervisor."
    },
    {
      number: "17",
      title: "Interim Order of Arrangement",
      summary: "Court may grant an interim order of arrangement, imposing a temporary stay on creditor proceedings against the individual while the proposal is considered."
    },
    {
      number: "18",
      title: "Effects of Interim Order of Debt Arrangement",
      summary: "During the interim order: no bankruptcy petition may be presented against the debtor; no legal proceedings may be commenced or continued against the debtor without court leave."
    },
    {
      number: "19",
      title: "Duties of a Debtor During Interim Order",
      summary: "The debtor must cooperate fully with the supervisor, submit all required financial information, and not dispose of assets without authorisation."
    },
    {
      number: "20",
      title: "Report to Court by Supervisor",
      summary: "The proposed supervisor reports to court on whether the arrangement proposal has a reasonable prospect of being approved and implemented. After reviewing the report, court may order the proposed supervisor to convene a creditors' meeting and may extend the interim order for that purpose."
    },
    {
      number: "21",
      title: "Creditors' Meeting to Consider Arrangement",
      summary: "Proposed supervisor must convene a creditors' meeting to consider the arrangement within 30 working days of the interim order being made. Notice of meeting, accompanied by a copy of the proposal, must be sent to creditors at least 10 working days before the meeting."
    },
    {
      number: "22",
      title: "Resolution at Creditors' Meeting on Proposed Arrangement",
      summary: "A proposed arrangement is approved if voted by at least 75% of the votes of all creditors having taken part in the vote. The creditors' meeting may not approve any arrangement before obtaining the consent of any affected preferential creditor if: (a) a preferential debt would be paid other than in priority over non-preferential debts; or (b) a preferential creditor would receive a smaller proportional payment on their preferential debt than another preferential creditor."
    },
    {
      number: "23",
      title: "Arrangement Order",
      summary: "Court makes an arrangement order giving legal effect to the approved debt arrangement."
    },
    {
      number: "24",
      title: "Effects of Arrangement Order",
      summary: "Arrangement order binds all creditors entitled to vote, whether or not they voted or were present. The debtor must comply with its terms."
    },
    {
      number: "25",
      title: "Creditors' Meeting During Arrangement",
      summary: "Supervisor may convene creditors' meetings during implementation to consider progress or proposed variations."
    },
    {
      number: "26",
      title: "Variation of Arrangement Order",
      summary: "Court may vary the arrangement order on application by the debtor or creditors."
    },
    {
      number: "27",
      title: "Termination of Arrangement Order",
      summary: "Court may terminate the arrangement order on application if the debtor defaults or the arrangement is no longer feasible."
    },
    {
      number: "28",
      title: "Notice of Termination of Arrangement",
      summary: "Supervisor must give notice of termination to all creditors and the Registrar General."
    },
    {
      number: "29",
      title: "Supervisor's Failure to Perform Duties",
      summary: "Court may replace a supervisor or take other action if the supervisor fails to perform duties."
    },
    {
      number: "30",
      title: "Vacancy in Office of Supervisor",
      summary: "Governs vacancy and replacement in the office of arrangement supervisor."
    },
    {
      number: "31",
      title: "Power to Propose Compromise with Creditors",
      summary: "A company, its directors, shareholders, liquidator, or provisional administrator may propose a compromise with creditors."
    },
    {
      number: "32",
      title: "Compromise Plan",
      summary: "Compromise plan must contain: full particulars of debts and assets; proposed terms; and the identity of the proposed supervisor."
    },
    {
      number: "33",
      title: "Notice of Proposed Compromise",
      summary: "Notice of proposed compromise must be given to all creditors, shareholders, and the Registrar General."
    },
    {
      number: "34",
      title: "Contents of Public and Individual Notices",
      summary: "Sets out required content of both public and individual notices for a proposed compromise."
    },
    {
      number: "35",
      title: "Approval of Compromise",
      summary: "Compromise is approved if accepted by creditors holding a prescribed majority by value; court sanction required."
    },
    {
      number: "36",
      title: "Costs of Preparing and Circulating Compromise",
      summary: "Costs of preparing and circulating compromise materials are borne by the proposing party."
    },
    {
      number: "37",
      title: "Powers of Court in Compromise Proceedings",
      summary: "Court may sanction, modify, or refuse the compromise and may give directions on implementation."
    },
    {
      number: "38",
      title: "Appointment of Supervisor of Compromise",
      summary: "Court appoints a supervisor to oversee implementation of the approved compromise."
    },
    {
      number: "39",
      title: "Effect of Compromise",
      summary: "Once sanctioned by court, compromise binds all creditors entitled to vote, the company, and its members."
    },
    {
      number: "40",
      title: "Cancellation of Binding Force of Compromise",
      summary: "Within 20 working days of the notice that a compromise was approved, a creditor who was entitled to vote may apply to court to be released from the compromise on the following grounds: (1) insufficient or non-compliant notice of the meeting was given; (2) there was some other material irregularity in obtaining approval; or (3) the compromise is unfairly prejudicial to that creditor or their class (applicable only to a creditor who voted against)."
    },
    {
      number: "41",
      title: "Request for Appointment of Provisional Administrator",
      summary: "The following persons may request the Registrar General to appoint a provisional administrator: the debtor, directors, an insolvency practitioner, a creditor, shareholders or partners, or the regulatory authority."
    },
    {
      number: "42",
      title: "Modalities for Appointment of Provisional Administrator",
      summary: "Registrar General appoints a provisional administrator within 5 working days of receipt of the application. If the Registrar General fails to appoint within that period, the applicant may file with the competent court. The appointment notice must certify that there is reason to believe the company is or will be unable to pay its debts. A provisional administrator cannot be appointed after the company has already gone into liquidation."
    },
    {
      number: "43",
      title: "Commencement of Appointment of Provisional Administrator",
      summary: "Appointment takes effect when the Registrar General holds: (1) a copy of the appointment notice (if court-appointed); (2) a copy of the provisional administrator's consent to act in prescribed form; and (3) a document containing the consent of any secured creditor holding a charge over the whole or substantially the whole of the company's property."
    },
    {
      number: "44",
      title: "Consideration and Approval of Provisional Administrator",
      summary: "Provisional administrator must convene a creditors' meeting to consider their appointment within 5 working days of commencement of the provisional administration. Notice — both public and individual written — must be given at least 2 working days before the meeting, containing the commencement date, the provisional administrator's full name and address. At that meeting, creditors may by resolution remove the provisional administrator and appoint another within 15 days; if no replacement is appointed within 15 days, the Registrar General appoints one."
    },
    {
      number: "45",
      title: "Notice of Provisional Administration",
      summary: "Provisional administrator must give public and individual written notice of appointment to all known creditors and the Registrar General."
    },
    {
      number: "46",
      title: "Duties of a Provisional Administrator",
      summary: "Provisional administrator must: take custody of debtor's assets; investigate the debtor's affairs; prepare a report on the financial position; and convene a creditors' meeting to consider a plan of administration."
    },
    {
      number: "47",
      title: "Powers of the Provisional Administrator",
      summary: "Powers include: managing and dealing with assets; carrying on the business; entering contracts; and taking any action necessary to preserve the estate. Powers exercised to: implement an administration deed; end the provisional administration; execute a compromise; achieve a more advantageous realisation of assets than liquidation would yield; realise assets to distribute to secured or preferential creditors; or any action believed on reasonable grounds to be in the best interests of creditors."
    },
    {
      number: "48",
      title: "Obligation of Debtor to Provide Information",
      summary: "The debtor must provide the provisional administrator with all information relating to the insolvency proceedings, whether requested by the court, the provisional administrator, or the creditors' committee. Must cooperate fully in the execution of the provisional administrator's duties."
    },
    {
      number: "49",
      title: "Establishment of Creditors' Committee",
      summary: "Creditors' meeting may establish a committee of creditors to assist and supervise the provisional administrator."
    },
    {
      number: "50",
      title: "Duties and Rights of Creditors' Committee",
      summary: "Creditors' committee assists and supervises the insolvency practitioner, inspects accounts, and has approval rights over major transactions."
    },
    {
      number: "51",
      title: "Grounds for Loss of Committee Membership",
      summary: "A committee member loses membership on bankruptcy, resignation, conflict of interest, or removal by creditors."
    },
    {
      number: "52",
      title: "Replacement of Committee Member",
      summary: "Creditors' meeting may replace a committee member who has lost membership or is unable to act."
    },
    {
      number: "53",
      title: "Effects of Provisional Administration",
      summary: "Upon provisional administration: directors' management powers are suspended; existing contracts may be continued or disclaimed; essential services continue; secured creditors are subject to stay only if the debtor has indicated intent to submit a reorganization plan (see Art. 12)."
    },
    {
      number: "54",
      title: "Provisional Administrator's Proposals",
      summary: "Within 20 working days of commencement of provisional administration, the provisional administrator must convene a creditors' meeting to consider proposals. Notice — public and individual written — must be given at least 5 working days before the meeting, accompanied by: a report on the company's business, property and financial circumstances; and a statement of the provisional administrator's opinion on each of the available courses of action (approval of proposals, ending of provisional administration, compromise, reorganization, or liquidation)."
    },
    {
      number: "55",
      title: "Consideration of Provisional Administrator's Proposals",
      summary: "Creditors' meeting votes on which course of action to adopt from the provisional administrator's proposals."
    },
    {
      number: "56",
      title: "Rights of Dissenting Creditors",
      summary: "Dissenting creditors may apply to court to challenge the resolution adopted by the creditors' meeting."
    },
    {
      number: "57",
      title: "Requirements of Administration Deed",
      summary: "Administration deed must contain: identity of parties; description of the debtor's affairs; the agreed plan of management; and obligations of each party."
    },
    {
      number: "58",
      title: "Execution of Administration Deed",
      summary: "Before execution of the administration deed, all parties — directors, secretary, shareholders, administrator and all creditors bound by the deed — are treated as if the deed had already been executed, for 21 days after the creditors' meeting (or such further period as the court allows on an application made within the 21-day period). The deed must be executed within this window."
    },
    {
      number: "59",
      title: "Termination of Provisional Administration",
      summary: "Provisional administration terminates when: (1) an administration deed is approved for execution; or (2) creditors resolve that it should end. Provisional administrator must convene the termination creditors' meeting within 20 working days of commencement of provisional administration (extendable by court on application)."
    },
    {
      number: "60",
      title: "Opening of Administration",
      summary: "Administration under an administration deed opens from the date the deed is executed."
    },
    {
      number: "61",
      title: "Effective Administration",
      summary: "Administration deed binds the debtor and all relevant creditors from the date of execution."
    },
    {
      number: "62",
      title: "Persons Bound by Administration Deed",
      summary: "The deed binds: the company, its officers, and all unsecured creditors."
    },
    {
      number: "63",
      title: "Notice of Administration Deed",
      summary: "Administrator must register the deed with the Registrar General and give public notice within the prescribed period."
    },
    {
      number: "64",
      title: "Prohibitions for Persons Bound by Administration Deed",
      summary: "Once the deed is in force: no creditor may commence or continue proceedings against the debtor without administrator's consent or court leave; no person may enforce security without consent."
    },
    {
      number: "65",
      title: "Duties of an Administrator",
      summary: "Administrator must: faithfully implement the deed; act in the interests of all creditors; maintain accounts; report to creditors; and give notice to the Registrar General of material events."
    },
    {
      number: "66",
      title: "Powers of the Administrator",
      summary: "Administrator has all powers necessary to implement the deed, including power to sell assets, enter contracts, and carry on business."
    },
    {
      number: "67",
      title: "Creditors' Meeting During Administration",
      summary: "Administrator may or must convene creditors' meetings to report on progress or seek approval for major decisions."
    },
    {
      number: "68",
      title: "Variation of Administration Deed",
      summary: "Creditors holding the required majority may vote to vary the terms of the administration deed."
    },
    {
      number: "69",
      title: "Administrator's Interaction with Court",
      summary: "Administrator may apply to court for directions on any matter arising in the administration."
    },
    {
      number: "70",
      title: "Role of Company's Officers",
      summary: "During administration, company officers must cooperate fully with the administrator and may not exercise management powers without the administrator's consent."
    },
    {
      number: "71",
      title: "Compliance Order During Administration",
      summary: "Court may issue a compliance order requiring any person to comply with the administrator's lawful directions."
    },
    {
      number: "72",
      title: "Disposal of Charged Property",
      summary: "Administrator may apply to court to dispose of property subject to a charge, provided the chargeholder is paid from proceeds in priority."
    },
    {
      number: "73",
      title: "Liabilities of a Provisional Administrator",
      summary: "Provisional administrator is personally liable for debts incurred in the administration unless acting as agent of the company or within authority."
    },
    {
      number: "74",
      title: "Relief from Liability",
      summary: "Court may relieve a provisional administrator or administrator from personal liability for acts done in good faith."
    },
    {
      number: "75",
      title: "Provisional Administrator's or Administrator's Report",
      summary: "Provisional administrator and administrator must submit periodic reports to creditors and the court on the state of the administration."
    },
    {
      number: "76",
      title: "Vacancy in Office of Provisional Administrator or Administrator",
      summary: "Governs vacancy and replacement where a provisional administrator or administrator dies, resigns, or is removed."
    },
    {
      number: "77",
      title: "Court Supervision of Administration",
      summary: "Court retains supervisory jurisdiction over administration proceedings and may give directions at any time."
    },
    {
      number: "78",
      title: "Enforcement of Provisional Administrator's Duties",
      summary: "Court may enforce performance of the provisional administrator's or administrator's duties on application by creditors."
    },
    {
      number: "79",
      title: "Transition to Liquidation Not Barred",
      summary: "Administration may transition to liquidation if the administration deed fails or if the debtor cannot be rehabilitated."
    },
    {
      number: "80",
      title: "Termination of Administration Deed",
      summary: "Administration deed terminates on: full performance; default leading to termination by court order; or other court-ordered grounds."
    },
    {
      number: "81",
      title: "Termination of Administration — Further Grounds",
      summary: "Administration also terminates upon court order for liquidation or when reorganization proceedings commence."
    },
    {
      number: "82",
      title: "Reasons for Termination of Administration",
      summary: "Specific grounds include: material default by debtor; impossibility of plan implementation; administration that is oppressive, unfairly prejudicial or discriminatory to creditors; revocation of the administrator's licence by their professional body; or other court-approved reason."
    },
    {
      number: "83",
      title: "Notice of Termination of Administration",
      summary: "Upon termination of administration, administrator must within 5 working days: give public notice of the termination; and deliver written notice of termination to every known creditor of the company."
    },
    {
      number: "84",
      title: "Application for Company Reorganization",
      summary: "Application for commencement of company reorganization may be made by: the company, its directors, creditors, shareholders, the Registrar General, or the regulatory authority. Filed with the competent court."
    },
    {
      number: "85",
      title: "Court Order Commencing Reorganization",
      summary: "Court may issue an order commencing reorganization proceedings and appoint a reorganization administrator."
    },
    {
      number: "86",
      title: "Vacancy in Office of Reorganization Administrator",
      summary: "Governs vacancy and replacement in the reorganization administrator's office."
    },
    {
      number: "87",
      title: "Effects of Commencement of Reorganization",
      summary: "From commencement of reorganization, no legal proceeding (including enforcement action) against the company, or in relation to any company property, may be commenced or continued. For secured creditors specifically: the stay on their enforcement applications lasts 6 months from the date of the reorganization application, renewable by court order up to 3 times. Extension of the stay on secured claims is decided by court based on established indicators strictly evaluated against the reorganization modalities, with either: (1) written consent of the company's administrator; or (2) court leave on suitable terms."
    },
    {
      number: "88",
      title: "Application for Relief from Stay on Secured Claim",
      summary: "A secured creditor may apply to court for relief from the stay under reorganization if: the secured asset may lose value, deteriorate, be destroyed, or is unnecessary to the business; or any other justifiable cause exists."
    },
    {
      number: "89",
      title: "Company Reorganization Plan",
      summary: "Within 45 days of the reorganization order, the administrator must prepare a reorganization plan — after consulting with creditors and the company's directors — to be considered and approved by creditors. The plan must describe the company's current position, set out proposed restructuring measures, identify claims to be compromised, and include a feasibility analysis."
    },
    {
      number: "90",
      title: "Notice of Creditors' Meeting to Approve Reorganization Plan",
      summary: "Within 15 working days of completing the reorganization plan, the administrator must convene a creditors' meeting to approve it. Administrator must give each known creditor both a public notice and an individual notice at least 10 working days before the meeting, indicating the intention to convene the meeting for the purpose of approving the proposed reorganization plan."
    },
    {
      number: "91",
      title: "Approval of Company Reorganization Plan",
      summary: "A reorganization plan is approved if voted by at least 75% of the votes of creditors (or each class of creditors who may be affected) having taken part in the vote. Where the resolution is put to more than one class of creditors, approval by each class is presumed to be conditional on approval by every other class, unless the resolution expressly states otherwise. Any distinct treatment of creditors within the same class requires the consent of all other creditors in that class, and the resolution must be accompanied by each such creditor's written consent."
    },
    {
      number: "92",
      title: "Equal Treatment of Creditors in the Same Class",
      summary: "Creditors within the same class must be offered equal treatment under the reorganization plan."
    },
    {
      number: "93",
      title: "Duties of Administrator of Company Reorganization",
      summary: "Administrator must: take custody and control of the company's business and property; manage the business and take appropriate measures to achieve reorganization in the interests of creditors and shareholders; implement the approved plan faithfully; and report to creditors periodically."
    },
    {
      number: "94",
      title: "Powers of Reorganization Administrator",
      summary: "Administrator has all powers necessary for reorganization, including power to sell assets, restructure liabilities, and bind the company to new arrangements."
    },
    {
      number: "95",
      title: "Court Supervision of Reorganization",
      summary: "Court supervises reorganization and may give directions, replace the administrator, or convert proceedings to liquidation."
    },
    {
      number: "96",
      title: "Termination of Company Reorganization",
      summary: "Company reorganization ends when: (1) the reorganization plan has been implemented; (2) creditors resolve that the reorganization should end; (3) creditors appoint a liquidator by resolution at a meeting to determine the company's future; (4) the company fails to implement the plan within the time allowed by court; or (5) the court appoints a liquidator."
    },
    {
      number: "97",
      title: "Business Rescue Finance",
      summary: "After commencement of any of the following — debt arrangement, compromise between company and creditors, administration, or reorganization — a debtor may apply for financing from existing creditors or other persons to maintain business activities. Rescue finance is approved by simple majority of votes validly cast by creditors or each relevant class (lower threshold than the 75% required for a reorganization plan). Claims relating to rescue finance are paid in priority over other pre-insolvency unsecured debts (but not above administration costs, secured creditors, or preferential creditors). Within 20 working days of approval, any creditor entitled to vote may apply to court to cancel the rescue finance on grounds of: procedural irregularity; other material irregularity in obtaining approval; or unfair prejudice (where that creditor voted against)."
    },
    {
      number: "98",
      title: "Creditors' Meeting to Consider Business Rescue Finance",
      summary: "The insolvency practitioner convenes a creditors' meeting to consider proposed rescue finance and gives written notice to creditors. The notice must include detailed information about the proposed financing and the date of the meeting."
    },
    {
      number: "99",
      title: "Approval of Business Rescue Finance",
      summary: "Rescue finance is approved by simple majority of votes validly cast by creditors or the relevant class. Where put to more than one class, approval by each class is presumed conditional on all other classes approving, unless the resolution states otherwise."
    },
    {
      number: "100",
      title: "Priority in Payment of Business Rescue Finance",
      summary: "Business rescue finance claims are paid in priority over all other pre-insolvency unsecured debts. They rank below: administration costs and expenses (priority tier 1 of Art. 212); secured creditors (tier 2); and retention creditors (tier 3). They rank above government taxes (tier 7) and ordinary unsecured creditors (tier 8)."
    },
    {
      number: "101",
      title: "Cancellation of Decision on Rescue Finance",
      summary: "Court may cancel a rescue finance decision if obtained by fraud, material irregularity, or if it unfairly prejudices a creditor who voted against it. Application must be made within 20 working days of the approval notice."
    },
    {
      number: "102",
      title: "Commencement of Liquidation",
      summary: "A company is put into liquidation by the appointment of a liquidator. The liquidator must be a qualified insolvency practitioner. Liquidation commences on the date of the liquidator's appointment."
    },
    {
      number: "103",
      title: "Appointment of Liquidator",
      summary: "Court appoints a liquidator upon commencement of compulsory or voluntary liquidation. Registrar General may appoint provisionally in urgent circumstances. Creditors may apply to court to change the appointed liquidator within 15 working days of appointment, on reasonable grounds."
    },
    {
      number: "104",
      title: "Circumstances for Court-Ordered Liquidation",
      summary: "Court orders compulsory liquidation when: the debtor meets either insolvency test (Art. 7); a creditor holds an unsatisfied judgment debt; just and equitable grounds exist; or the regulatory authority applies."
    },
    {
      number: "105",
      title: "Provisional Liquidator",
      summary: "Court or Registrar General may appoint a provisional liquidator pending the liquidation hearing to preserve the estate."
    },
    {
      number: "106",
      title: "Notice of Liquidation",
      summary: "Within 5 working days of commencement of liquidation duties, the liquidator must give public notice of liquidation and deliver a copy to the Registrar General. The public notice must state: the date of commencement of liquidation; the liquidator's full name; and the liquidator's full physical address. The liquidator must also ensure all invoices, orders for goods, and business letters issued by or on behalf of the company bear the words 'in liquidation' after the company name."
    },
    {
      number: "107",
      title: "Effects of Liquidation",
      summary: "Upon commencement of liquidation: all management powers of directors cease; no creditor may commence or continue enforcement without court leave; automatic stay applies to all claims; the company may not dispose of assets; all unpaid share capital becomes immediately payable; existing contracts continue subject to the liquidator's election to disclaim."
    },
    {
      number: "108",
      title: "Special Manager of the Company",
      summary: "Court may appoint a special manager to manage the company's business during liquidation where the liquidator requires specialist assistance."
    },
    {
      number: "109",
      title: "Completion of Liquidation",
      summary: "Liquidation is complete when all assets are realised and distributed and the liquidator submits the final report. Liquidator applies to court for a dissolution order."
    },
    {
      number: "110",
      title: "Liquidator's Preliminary Report",
      summary: "Within 20 working days of commencement of liquidation, the liquidator must prepare and send to every known creditor, every shareholder, and the supervisor: (1) a report on the state of the company's affairs, proposals for conducting the liquidation, and the estimated completion date; and (2) a notice stating the right of any creditor or shareholder to require the liquidator to convene a creditors' meeting."
    },
    {
      number: "111",
      title: "Liquidator's Interim Report",
      summary: "Within 20 working days after the end of each 6-month period following commencement of liquidation, the liquidator must prepare and send to every known creditor, every shareholder, and the Registrar General: a report on the conduct of the liquidation during the preceding 6 months and the liquidator's further proposals."
    },
    {
      number: "112",
      title: "Liquidator's Final Report",
      summary: "Final report submitted before dissolution, setting out all realisations, distributions, costs, and outcomes of investigations."
    },
    {
      number: "113",
      title: "Duties of a Liquidator",
      summary: "Liquidator must: take custody of all assets; identify and value assets; investigate the debtor's affairs and transactions; realise assets; ascertain and verify creditor claims; distribute proceeds in the prescribed priority order (Art. 212); and report to creditors and the court."
    },
    {
      number: "114",
      title: "Liquidator's Power to Obtain Information",
      summary: "Liquidator may require any person to produce books, records, or documents relating to the debtor's affairs. Court may enforce compliance."
    },
    {
      number: "115",
      title: "Powers of Liquidator to Deal with Assets",
      summary: "Liquidator has power to: sell assets by public auction or private treaty; enter new contracts for realisation purposes; borrow money on security of assets; and take any steps to maximise asset realisations."
    },
    {
      number: "116",
      title: "Liquidator's Power to Disclaim",
      summary: "Liquidator may disclaim any onerous or unprofitable contract, property, or obligation that would impose a liability on the estate."
    },
    {
      number: "117",
      title: "Duties of Directors, Secretary and Employees of Company",
      summary: "Upon commencement of liquidation, every present or former director, company secretary, and employee must: (1) fully and truthfully disclose to the liquidator all company property and details of any disposals outside the ordinary course of business; and (2) deliver to the liquidator, in accordance with the liquidator's directions, all company property in their custody or control."
    },
    {
      number: "118",
      title: "Notice of Liquidation or Dissolution of Foreign Company",
      summary: "Where a foreign company goes into liquidation or is dissolved at its place of incorporation, the company's authorised agent in Rwanda must notify the Registrar General upon commencement of liquidation. The liquidator of a dissolved foreign company has the powers of a liquidator in Rwanda."
    },
    {
      number: "119",
      title: "Procedure to be Applied by Liquidator",
      summary: "Sets out procedural steps for the liquidation process including asset realisation, claims verification, and distribution."
    },
    {
      number: "120",
      title: "Application to Court for Directions",
      summary: "Liquidator may apply to court for directions on any question arising in the liquidation."
    },
    {
      number: "121",
      title: "Compliance with Liquidator's Requirements",
      summary: "Where a person fails to comply with the liquidator's requirements during liquidation, the court may — on the liquidator's application — order that person to comply or make any other appropriate order. This is the enforcement mechanism for the liquidator's powers to obtain information and assets."
    },
    {
      number: "122",
      title: "Examination by the Court",
      summary: "On the liquidator's application, court may order any person with knowledge of the company's financial affairs to appear before the court and be examined on oath on any matter relating to the company. Testimony given in such an examination is not admissible as evidence in criminal proceedings against that person, except on a charge of perjury arising from the testimony itself. A person examined may apply to the court to be exculpated from allegations made against them."
    },
    {
      number: "123",
      title: "Prohibitions During Liquidation",
      summary: "Where a company is in liquidation, or an application has been made to put it into liquidation, no person concerned is permitted to: (1) leave or attempt to leave Rwanda to avoid paying money due to the company, to avoid examination on company affairs, or to avoid compliance with a court order or other obligation under this Law; (2) conceal or remove company property with the intent of preventing or delaying the liquidator's assumption of custody or control; or (3) destroy, conceal, or remove records or other documents of the company. Conduct falling under (1) and (2) also constitutes a criminal offence under Art. 264 (imprisonment 6 months–2 years AND/OR fine FRW 500,000–2,000,000)."
    },
    {
      number: "124",
      title: "Powers of Search and Seizure During Liquidation",
      summary: "Where there are reasonable grounds for believing a liquidation-related offence may be committed, the court may issue a search warrant — valid for one occasion within 14 days of issue — authorising the named person to search for and seize property, books, documents, or reports of the company and deliver them to the liquidator. Force may be used for entry and to break open items on the premises."
    },
    {
      number: "125",
      title: "Pooling of Assets of Related Companies",
      summary: "On application of the liquidator, a creditor, or a shareholder, the court may order pooling of assets and liabilities of related companies for distribution purposes where their affairs are so intermingled that individual accounts cannot be separated."
    },
    {
      number: "126",
      title: "Reasons for Pooling of Assets",
      summary: "Court orders pooling if the companies were operated as a single economic unit, if it is just and equitable to do so, or if individual creditors cannot be identified with specific companies."
    },
    {
      number: "127",
      title: "Vacancy in Office of Liquidator",
      summary: "Governs vacancy and replacement in the office of liquidator by court order."
    },
    {
      number: "167",
      title: "Application for Bankruptcy of Individual",
      summary: "A bankruptcy order against an individual may be applied for by: one or more creditors; the individual themselves; or the supervisor of an arrangement proposed by the individual. Application is presented to the competent court. Where made by the individual themselves, it must be accompanied by a full statement of affairs — creditors, debts, liabilities, assets, and other court-prescribed information. Application is admissible only if the individual: is ordinarily resident in Rwanda; is personally present in Rwanda on the day of application; or has carried on business (including as a partner or through an agent) in Rwanda at any time in the 3 years ending on the application date. No statutory minimum debt amount is prescribed — court has discretion to dismiss if there are grounds, including law violations."
    },
    {
      number: "168",
      title: "Interim Trustee",
      summary: "Court — on application by creditors, the debtor, the regulatory authority, or the Registrar General — may appoint an insolvency practitioner as interim trustee pending the bankruptcy hearing to preserve the individual's estate."
    },
    {
      number: "169",
      title: "Notice of Bankruptcy",
      summary: "Trustee must give public notice of the bankruptcy order and notify all known creditors within the prescribed period."
    },
    {
      number: "170",
      title: "Effects of Commencement of Bankruptcy",
      summary: "Upon bankruptcy order: all of the bankrupt's assets vest in the trustee; the bankrupt loses control over assets; automatic stay applies to all creditor enforcement; and the bankrupt must cooperate fully with the trustee."
    },
    {
      number: "171",
      title: "Special Management of Bankrupt's Estate",
      summary: "Court may appoint a special manager to manage the bankrupt's affairs during bankruptcy where the trustee requires specialist assistance."
    },
    {
      number: "172",
      title: "Termination of Bankruptcy",
      summary: "Bankruptcy terminates upon: grant of discharge; annulment of the bankruptcy order; or other court order."
    },
    {
      number: "173",
      title: "Effects of Discharge from Bankruptcy",
      summary: "Upon discharge: the bankrupt is released from all pre-bankruptcy debts (except prescribed exceptions). Discharge does not release guarantors or co-debtors from their own liabilities."
    },
    {
      number: "174",
      title: "Post-Discharge Restrictions",
      summary: "Court may impose post-discharge restrictions for a prescribed period where the bankrupt's conduct warrants it (e.g. fraud, recklessness)."
    },
    {
      number: "175",
      title: "Annulment of Bankruptcy Order",
      summary: "Court may annul a bankruptcy order where: all debts have been paid in full; or the order should not have been made."
    },
    {
      number: "176",
      title: "Effects of Annulment",
      summary: "Upon annulment: the bankrupt is restored to their pre-bankruptcy position as regards title to property; however, acts lawfully done by the trustee prior to annulment remain valid."
    },
    {
      number: "177",
      title: "Trustee's Notice to Creditors",
      summary: "Trustee must give notice to creditors upon appointment and at key stages of the bankruptcy administration."
    },
    {
      number: "178",
      title: "Bankrupt's Estate",
      summary: "The bankrupt's estate comprises all property belonging to or vested in the bankrupt at the date of the bankruptcy order, and property acquired before discharge."
    },
    {
      number: "179",
      title: "Seizure of Property Acquired or Charged After Bankruptcy",
      summary: "Trustee may seize property acquired by the bankrupt or charged to a third party after the bankruptcy order, where that property should form part of the estate."
    },
    {
      number: "180",
      title: "Notice of Acquired Property",
      summary: "Trustee gives notice of any property acquired after the bankruptcy order that forms part of the estate."
    },
    {
      number: "181",
      title: "Duties of a Trustee",
      summary: "Trustee must: take custody of the bankrupt's estate; investigate affairs and transactions; realise assets; verify and admit or reject creditor claims; distribute proceeds in the Art. 212 priority order; and report to creditors and the court."
    },
    {
      number: "182",
      title: "Statement of Affairs",
      summary: "Within 20 working days of commencement of bankruptcy (or such further period as the trustee or court allows), the bankrupt must submit to the trustee a statement of affairs containing full particulars of: creditors; debts and liabilities; assets; and any other information prescribed by law."
    },
    {
      number: "183",
      title: "Powers of Trustee in Bankruptcy",
      summary: "Trustee has all powers necessary to administer the estate, including power to: require any person with possession of books or documents relating to the estate to deliver them; sell assets; disclaim onerous contracts; and investigate transactions."
    },
    {
      number: "184",
      title: "Court's Power to Make Orders",
      summary: "Court may make any order necessary to facilitate the administration of the bankruptcy estate."
    },
    {
      number: "185",
      title: "Public Examination of Bankrupt",
      summary: "Court may order a public examination of the bankrupt on their conduct, dealings, and property."
    },
    {
      number: "186",
      title: "Inquiry into Bankrupt's Transactions",
      summary: "Trustee may investigate the bankrupt's transactions and dealings prior to bankruptcy."
    },
    {
      number: "187",
      title: "Search and Seizure During Bankruptcy",
      summary: "Court may issue a search and seizure warrant during bankruptcy proceedings on similar terms to Art. 124."
    },
    {
      number: "188",
      title: "Allowing Bankrupt to Manage Business",
      summary: "Court may allow a bankrupt to continue managing certain business activities on application and under specified conditions."
    },
    {
      number: "189",
      title: "Disclaimer of Onerous Property",
      summary: "Trustee may disclaim onerous property or unprofitable contracts that would impose a liability on the estate."
    },
    {
      number: "190",
      title: "Vacancy in Office of Trustee",
      summary: "Governs vacancy and replacement in the office of bankruptcy trustee."
    },
    {
      number: "191",
      title: "Creditors' Meeting During Bankruptcy",
      summary: "Trustee may convene creditors' meetings to report on progress and seek guidance on major decisions."
    },
    {
      number: "192",
      title: "Committee of Inspection During Bankruptcy",
      summary: "Creditors may establish a committee of inspection to supervise the trustee during bankruptcy."
    },
    {
      number: "193",
      title: "Powers of Committee of Inspection",
      summary: "Committee of inspection supervises the trustee, inspects accounts, and has approval rights over major transactions."
    },
    {
      number: "196",
      title: "Distribution by Dividend",
      summary: "Trustee distributes the bankrupt's estate to creditors by way of dividend, following the Art. 212 priority order."
    },
    {
      number: "199",
      title: "Final Distribution",
      summary: "After confirmation of the final distribution plan, the administrator remits any surplus to the debtor."
    },
    {
      number: "204",
      title: "Ascertainment of Amount of Claim",
      summary: "Claim amount is assessed as at the date of commencement of liquidation or bankruptcy. Interest accruing after commencement is not admissible as a claim."
    },
    {
      number: "205",
      title: "Claim of Uncertain Amount",
      summary: "Where a claim is subject to a contingency, is for damages, or is otherwise uncertain in amount, the liquidator or trustee may estimate the amount or refer the matter to court for determination. Any claimant aggrieved by the liquidator's or trustee's estimate may apply to court for a determination."
    },
    {
      number: "206",
      title: "Mutual Credit and Set-Off",
      summary: "Where there have been mutual credits, mutual debts, or other mutual dealings between a creditor and the debtor, the amounts are set off against each other. Only the net balance may be claimed in the insolvency proceedings or is payable to the estate."
    },
    {
      number: "207",
      title: "Claims by Unsecured Creditors",
      summary: "Unsecured creditors may make claims without formality unless the liquidator or trustee requires a formal claim verified by statutory declaration with supporting documents. Liquidator or trustee may admit or reject any claim in whole or in part, and may revoke or amend such decisions."
    },
    {
      number: "208",
      title: "Secured Claims and Right of Retention",
      summary: "Secured creditors are entitled to separate satisfaction from secured assets or to exercise a right of retention, in accordance with applicable laws. Key rule: priority of a charge depends on its date of registration, not the date the underlying debt arose — earlier registration ranks higher. Secured creditor rights under this Article do not apply where a recovery plan has been submitted to court."
    },
    {
      number: "212",
      title: "Priority Order for Distribution",
      summary: "Assets are distributed in the following strict order of preference — no tier may receive payment until all higher tiers are satisfied in full: (1) Costs of maintaining, conserving and selling assets; administrator's or liquidator's fees and expenses; costs of essential services post-commencement; wages of estate management staff; court costs and legal costs; (2) Secured creditors, ranked by security registration date (earlier registration ranks higher), with interest calculated in prescribed manner; (3) Creditors with right of retention in respect of improvements made to an item; (4) Funeral and testamentary expenses chargeable to a deceased debtor's estate; (5) Employees' salaries and wages for the 6 months preceding insolvency; accrued leave/holiday pay due in the year preceding insolvency; other paid leave for up to 3 months before the liquidation date; and severance pay due under law, contract, or regulations; (6) Social security contributions; (7) Government taxes; (8) Unsecured claims. Note: business rescue finance (Art. 100) ranks between tier 7 and tier 8 — above ordinary unsecured claims but below all preferential and secured tiers."
    },
    {
      number: "213",
      title: "Surplus Assets",
      summary: "After payment of all debts in full: in bankruptcy, surplus is returned to the bankrupt; in liquidation, surplus is distributed in accordance with the company's incorporation documents, partnership agreement, and applicable laws."
    },
    {
      number: "214",
      title: "Transactions of Particular Importance",
      summary: "Where the administrator or liquidator intends to enter transactions of particular importance in relation to the insolvency proceedings, the creditors' committee must be consulted and approve the transaction."
    },
    {
      number: "215",
      title: "Voidable Preferences",
      summary: "A transaction involving a transfer of property by a company or individual to another person is voidable on the insolvency practitioner's application to court if: (1) the transfer was made on account of antecedent debt; (2) the debtor was unable to pay debts when the transfer was made; (3) the transfer was made within the 1 year preceding commencement of liquidation or bankruptcy; and (4) the recipient received more than they would have received in the liquidation or bankruptcy. Safe harbour: where the debt was incurred in the ordinary course of business AND the transfer was made within 45 days of the debt being incurred, the transaction is not voidable on preference grounds. Presumption: a transfer made within 6 months preceding commencement is presumed (rebuttably) to have been made while the debtor was unable to pay due debts and on account of a debt incurred outside the ordinary course of business. No time limit: transfers made where there is evidence of actual fraudulent intent by the debtor AND the counterparty knew of that intent are void at any time — the 1-year lookback does not apply."
    },
    {
      number: "216",
      title: "Transactions at Undervalue",
      summary: "A transaction entered into by a company or individual is voidable (on the insolvency practitioner's application to court) if: (1) it was entered into within 1 year preceding commencement of insolvency proceedings; (2) the consideration received was significantly less than the consideration provided; and (3) when the transaction was entered, the debtor was unable to pay due debts, was engaged (or about to engage) in transactions for which financial resources were unreasonably small, or incurred an obligation knowing they could not perform when required."
    },
    {
      number: "217",
      title: "Voidable Charges",
      summary: "A charge over company or individual property created in respect of a debt is voidable on the insolvency practitioner's application, unless: (1) the charge secures the actual price or value of property sold or supplied to the debtor, or other valuable consideration given by the chargeholder before execution of the security, AND the debtor was able to pay due debts immediately after giving the charge; or (2) the charge is in substitution for a charge that was given more than 1 year before commencement of liquidation or bankruptcy. Presumption: a charge given within 6 months preceding commencement is presumed (rebuttably) to have been given at a time when the debtor was unable to pay due debts."
    },
    {
      number: "218",
      title: "Procedure for Setting Aside Voidable Transactions",
      summary: "Insolvency practitioner applies to court to set aside a voidable transaction. Court may restore parties to their original positions."
    },
    {
      number: "219",
      title: "Effects of Setting Aside Voidable Transactions",
      summary: "Upon court order setting aside a voidable transaction: the transaction is void; assets transferred must be returned to the estate; the transferee becomes an unsecured creditor for any consideration they paid."
    },
    {
      number: "220",
      title: "Acquired Rights During Insolvency",
      summary: "Rights acquired by third parties in good faith and for value prior to the setting-aside application are protected."
    },
    {
      number: "231",
      title: "Persons Qualified to Act as Insolvency Practitioners",
      summary: "Only persons meeting qualifications prescribed by the Registrar General are eligible to act as insolvency practitioners."
    },
    {
      number: "232",
      title: "Persons Disqualified — General Grounds",
      summary: "Disqualified persons include: undischarged bankrupts; persons convicted of fraud or dishonesty; persons with a conflict of interest; persons removed from practice by their professional body; and minors."
    },
    {
      number: "233",
      title: "Persons Disqualified — Additional Grounds",
      summary: "Further disqualification grounds as prescribed by Registrar General regulation."
    },
    {
      number: "234",
      title: "Prohibition Order",
      summary: "Court may issue a prohibition order preventing a disqualified or unsuitable person from acting as an insolvency practitioner."
    },
    {
      number: "235",
      title: "Insolvency Practitioner's Right to Remuneration",
      summary: "Insolvency practitioner is entitled to reasonable remuneration, approved by the creditors' committee or the court, payable from the estate as a first-priority administration expense (tier 1 of Art. 212)."
    },
    {
      number: "236",
      title: "Prescription",
      summary: "Sets out limitation periods applicable to actions and claims in insolvency proceedings."
    },
    {
      number: "237",
      title: "Application of Cross-Border Insolvency Regime",
      summary: "Chapter XII applies when: a foreign representative brings foreign proceedings to Rwanda for recognition; or Rwandan proceedings involve a debtor with cross-border assets or interests."
    },
    {
      number: "238",
      title: "Recognition of Cross-Border Insolvency Proceedings",
      summary: "Court may recognise a foreign insolvency proceeding on application by the foreign representative as either: a 'foreign main proceeding' (debtor's centre of main interests is in that foreign state) or a 'foreign non-main proceeding' (debtor has an establishment in that state)."
    },
    {
      number: "246",
      title: "Application for Recognition of Foreign Proceeding",
      summary: "Foreign representative applies to court for recognition; application must be accompanied by a certified copy of the order commencing the foreign proceeding and an affidavit from the foreign representative."
    },
    {
      number: "248",
      title: "Decision to Recognise Foreign Proceeding",
      summary: "Court recognises the foreign proceeding if satisfied of the prescribed requirements, as either a main or non-main proceeding."
    },
    {
      number: "249",
      title: "Effects of Recognition of Foreign Proceeding",
      summary: "Recognition of a foreign main proceeding: triggers an automatic stay on creditor enforcement actions in Rwanda; the insolvency practitioner's powers apply to Rwandan assets. Recognition of a non-main proceeding does not trigger the automatic stay but the court may grant discretionary relief."
    },
    {
      number: "253",
      title: "Protection of Creditors and Interested Persons",
      summary: "Court must ensure that recognition of a foreign proceeding and any relief granted does not prejudice the interests of Rwandan creditors."
    },
    {
      number: "258",
      title: "Commencement of Insolvency Proceedings in Coordination with Foreign Proceedings",
      summary: "Where both Rwandan and foreign insolvency proceedings are running concurrently, they are coordinated under Art. 259–260."
    },
    {
      number: "262",
      title: "Rule of Payment in Case of Multiple Proceedings (Hotchpot Rule)",
      summary: "Where both Rwandan and foreign proceedings are running: a creditor who has already received payment abroad may not receive further distribution from Rwandan assets until other creditors of the same rank have received a proportionally equivalent amount. This prevents creditors from 'double-dipping' across jurisdictions."
    },
    {
      number: "263",
      title: "Offence: Acting as Insolvency Practitioner Without Qualification",
      summary: "Any person who acts as an insolvency practitioner at a time when they are not qualified to do so commits an offence. Penalty on conviction: imprisonment of not less than 6 months but not exceeding 2 years AND/OR fine of not less than FRW 500,000 but not exceeding FRW 2,000,000."
    },
    {
      number: "264",
      title: "Offence: Absconding and Appropriating Assets During Insolvency Proceedings",
      summary: "During liquidation or bankruptcy proceedings (or when an application for such has been filed), any person who: (1) leaves or attempts to leave Rwanda to avoid obligations; (2) conceals or removes property to prevent or delay the trustee taking custody or control; or (3) destroys, conceals, or removes records with intent to defraud or conceal affairs — commits an offence. Penalty on conviction: imprisonment of not less than 6 months but not exceeding 2 years AND/OR fine of not less than FRW 500,000 but not exceeding FRW 2,000,000. NOTE: Art. 123 prohibitions during company liquidation (including concealing company assets or documents) are enforced through this provision."
    },
    {
      number: "265",
      title: "Offence: Obtaining Credit or Engaging in Business While Undischarged Bankrupt",
      summary: "An undischarged bankrupt who: (1) obtains credit (alone or jointly) without disclosing their bankruptcy status to the lender; or (2) engages in business under a name other than that under which they were adjudged bankrupt, without disclosing their bankruptcy to all business counterparties — commits an offence. Penalty on conviction: imprisonment of not less than 6 months but not exceeding 2 years AND/OR fine of not less than FRW 500,000 but not exceeding FRW 2,000,000."
    },
    {
      number: "266",
      title: "Offence: Failure to Keep Proper Business Accounts",
      summary: "A bankrupt who willfully engaged in business for 2 years before the bankruptcy petition and did not keep accounting records giving a true and fair view of the business's financial position and explaining its transactions commits an offence. Penalty on conviction: imprisonment of not less than 2 months but not exceeding 6 months AND/OR fine of not less than FRW 500,000 but not exceeding FRW 1,000,000."
    },
    {
      number: "267",
      title: "Offence: Failure to Submit Statement of Affairs to Trustee",
      summary: "A bankrupt who, without reasonable excuse, fails to submit the required statement of affairs (creditors, debts, assets, and prescribed information) to the trustee commits an offence. The statement is due within 20 working days of commencement of bankruptcy (Art. 182). Penalty on conviction: imprisonment of not less than 2 months but not exceeding 6 months AND/OR fine of not less than FRW 500,000 but not exceeding FRW 1,000,000."
    },
    {
      number: "268",
      title: "Offence: Trustee's Failure to Give Notice of Trusteeship",
      summary: "A trustee who fails to give notice of trusteeship commits an offence, unless they prove they did not know (and could not reasonably have been expected to know) of the failure, or that they took all reasonable steps to ensure compliance. Penalty on conviction: fine only, of not less than FRW 500,000 but not exceeding FRW 1,000,000 (no imprisonment)."
    },
    {
      number: "269",
      title: "Offence: Misappropriation, Concealment or Fraudulent Claim of Debtor's Property",
      summary: "Any liquidator or person who, directly or through a third party, misappropriates, conceals, or pretends to be the owner of the bankrupt's property, or fraudulently presents themselves as a creditor, commits an offence. This is the most serious offence in this Law. Penalty on conviction: imprisonment of not less than 3 years but not more than 5 years AND fine of not less than FRW 3,000,000 but not more than FRW 5,000,000 (both penalties are mandatory — no 'or')."
    },
    {
      number: "270",
      title: "Offence: Continuation of Business or Exercise of Managerial Power After Practitioner Appointment",
      summary: "A debtor or any person who, with full knowledge of the appointment of an insolvency practitioner, continues to conduct business or exercise managerial powers commits an offence. Penalty on conviction: imprisonment of not less than 6 months but not exceeding 1 year AND/OR fine of not less than FRW 1,000,000 but not exceeding FRW 2,000,000."
    },
    {
      number: "271",
      title: "Law Applicable to Pending Cases",
      summary: "All cases pending before courts at the time this Law comes into force are heard in accordance with the provisions of this Law."
    },
    {
      number: "272",
      title: "Language and Adoption",
      summary: "Law was drafted in English, considered and adopted in Kinyarwanda."
    },
    {
      number: "273",
      title: "Repealing Provision",
      summary: "Repeals Law N° 23/2018 of 29/04/2018 relating to insolvency and bankruptcy, and all other prior legal provisions contrary to this Law (which includes Law N° 12/2009 — the original commercial recovery law — previously repealed by 23/2018)."
    },
    {
      number: "274",
      title: "Entry into Force",
      summary: "Comes into force on the date of publication in the Official Gazette: 30/12/2021."
    }
  ],
  penalties: [
    "Art. 263 — Acting as insolvency practitioner without qualification: imprisonment 6 months–2 years AND/OR fine FRW 500,000–2,000,000.",
    "Art. 264 — Absconding, concealing/removing assets, or destroying records during insolvency proceedings (individual or company): imprisonment 6 months–2 years AND/OR fine FRW 500,000–2,000,000. Also enforces Art. 123 prohibitions for company liquidation scenarios.",
    "Art. 265 — Undischarged bankrupt obtaining credit or conducting business without disclosure: imprisonment 6 months–2 years AND/OR fine FRW 500,000–2,000,000.",
    "Art. 266 — Failure to keep proper business accounts (2 years pre-bankruptcy): imprisonment 2–6 months AND/OR fine FRW 500,000–1,000,000.",
    "Art. 267 — Failure to submit statement of affairs to trustee within 20 working days: imprisonment 2–6 months AND/OR fine FRW 500,000–1,000,000.",
    "Art. 268 — Trustee failure to give notice of trusteeship: fine only FRW 500,000–1,000,000 (no imprisonment).",
    "Art. 269 — Misappropriation, concealment, or fraudulent claiming of debtor's property (most serious offence — both penalties mandatory): imprisonment 3–5 years AND fine FRW 3,000,000–5,000,000.",
    "Art. 270 — Continuing business or exercising managerial powers after insolvency practitioner appointment: imprisonment 6 months–1 year AND/OR fine FRW 1,000,000–2,000,000."
  ],
  regulator: "Commercial courts — sole jurisdiction over all insolvency proceedings including appointment of practitioners, sanctioning plans, issuing stays, and all insolvency orders. Rwanda Development Board / Registrar General (RDB) — appoints provisional insolvency practitioners within 5 working days of application (Art. 42); appoints provisional interim trustees in bankruptcy (Art. 168); prescribes qualifications for insolvency practitioners (Arts. 231–233); receives and holds appointment documents (Art. 43); receives notice of liquidation commencement (Art. 106); receives interim and final liquidation reports (Art. 111). Regulatory authority (sector regulator, e.g. BNR for banks, RURA for telecoms) — may apply for commencement of insolvency proceedings against regulated entities (Art. 8); receives notice of insolvency proceedings (Art. 106). Minister in charge of Trade — general framework oversight.",
  keyDeadlines: [
    "Art. 5 — Public newspaper notice to creditors: must run for 30 days in a widely-read national or international newspaper.",
    "Art. 12 — Where debtor intends to submit reorganization plan with application: all claims (including secured) stayed from application date; debtor must submit plan within 3 months of filing; total stay cannot exceed 6 months (inclusive of 3-month plan period); on expiry without court decision, secured creditors automatically entitled to enforce.",
    "Art. 15/21 — Individual debt arrangement: proposed supervisor must convene creditors' meeting within 30 working days of interim order; notice to creditors at least 10 working days before the meeting.",
    "Art. 40 — Dissenting creditor application against compromise: within 20 working days of notice that compromise was approved.",
    "Art. 42 — Registrar General appointment of provisional administrator: within 5 working days of receipt of application.",
    "Art. 44 — Provisional administrator first creditors' meeting: within 5 working days of commencement; notice to creditors at least 2 working days before the meeting; creditors may replace provisional administrator within 15 days at that meeting.",
    "Art. 54 — Provisional administrator proposals creditors' meeting: within 20 working days of commencement of provisional administration; notice to creditors at least 5 working days before the meeting.",
    "Art. 58 — Execution of administration deed: within 21 days of the creditors' meeting (extendable by court order).",
    "Art. 59 — Provisional administrator termination meeting: within 20 working days of commencement (extendable by court).",
    "Art. 83 — Notice of termination of administration: within 5 working days of termination date — public notice plus individual written notice to all known creditors.",
    "Art. 87 — Secured creditor stay under reorganization: 6 months from reorganization application, renewable up to 3 times by court order.",
    "Art. 89 — Reorganization plan preparation: within 45 days of the reorganization order.",
    "Art. 90 — Creditors' meeting to approve reorganization plan: within 15 working days of plan completion; at least 10 working days' notice to creditors before the meeting.",
    "Art. 91 — Reorganization plan approval threshold: 75% of votes of creditors (or each class) participating.",
    "Art. 99 — Business rescue finance approval threshold: simple majority of votes cast (not 75%).",
    "Art. 101 — Creditor application to cancel rescue finance: within 20 working days of the approval notice.",
    "Art. 103 — Creditor application to change liquidator: within 15 working days of appointment.",
    "Art. 106 — Liquidator public notice and notice to Registrar General: within 5 working days of commencement of liquidation duties.",
    "Art. 110 — Liquidator's preliminary report to creditors, shareholders, and supervisor: within 20 working days of commencement of liquidation.",
    "Art. 111 — Liquidator's interim reports: within 20 working days after the end of each 6-month period from commencement.",
    "Art. 182 — Bankrupt's statement of affairs to trustee: within 20 working days of commencement of bankruptcy (extendable by trustee or court).",
    "Art. 204 — Claims assessed as at: date of commencement of liquidation or bankruptcy; post-commencement interest not admissible.",
    "Art. 212 — Priority waterfall: 8-tier order strictly mandatory for all distributions.",
    "Art. 215 — Voidable preference lookback: 1 year; 6-month rebuttable presumption of insolvency; 45-day safe harbour for ordinary course payments; fraudulent transfers void at any time.",
    "Art. 216 — Undervalue transaction lookback: 1 year.",
    "Art. 217 — Voidable charge lookback: 6-month rebuttable presumption; safe harbour if charge substitutes one given more than 1 year before commencement.",
    "Art. 271/274 — Pending cases: governed by this Law from 30/12/2021."
  ],
  effectiveDate: "30/12/2021",
  corporateKeyPoints: [
    "Art. 212 priority waterfall — employees (6 months wages) rank 5th; government taxes rank 7th; unsecured creditors rank last. Banks and secured lenders rank 2nd by registration date.",
    "Art. 208 — Security priority runs from REGISTRATION date, not debt origination date. Earlier registration = higher rank. Critical for banks and lenders.",
    "Art. 87/12 — Automatic stay on all enforcement actions upon reorganization commencement. Secured creditors' stay: 6 months, renewable up to 3 times. If debtor invokes reorganization plan intent at application stage, ALL claims (including secured) are stayed immediately.",
    "Art. 97/100 — Business rescue finance available after commencement of arrangement, compromise, administration, or reorganization. Approved by simple majority. Ranks above ordinary unsecured creditors.",
    "Art. 91 — 75% threshold for reorganization plan. Multi-class: each class approval presumed conditional on all other classes approving.",
    "Art. 125/126 — Pooling of related companies' assets. Material risk for corporate groups — court may merge estates of intermingled subsidiaries.",
    "Arts. 215–217 — Voidable transactions: 1-year lookback for preferences and undervalue; 6-month charge presumption. All transactions and security within 1 year before insolvency should be reviewed on appointment.",
    "Art. 262 — Hotchpot rule: creditors paid abroad cannot receive Rwandan distribution until other same-ranking creditors are paid equivalent proportions. Material for multinationals.",
    "Art. 269 — Misappropriation by liquidator: most serious offence, both imprisonment (3–5 years) and fine (FRW 3–5M) are mandatory on conviction.",
    "No statutory minimum debt for creditor bankruptcy application against individuals (Art. 167)."
  ]
}
    {
  id: "payment-system-061-2021",
  title: "Payment System Law",
  citation: "Law N° 061/2021 of 14/10/2021",
  gazetteRef: "Official Gazette N° 41 Bis of 01/11/2021",
  repeals:
    "Law N° 03/2010 of 26/02/2010 on payment system as amended to date, except Article 23 thereof (establishing the National Payment System Council, preserved in force). All other prior contrary legal provisions also repealed.",
  articles: [
    {
      number: "1",
      title: "Purpose",
      summary: "Governs the payment system in Rwanda.",
    },
    {
      number: "2",
      title: "Scope",
      summary:
        "Applies to the oversight, supervision, management, operation, and administration of payment systems and payment services, and their applicable regulations.",
    },
    {
      number: "3",
      title: "Definitions",
      summary:
        "Key terms defined: 'payment system' — set of payment instruments, rules, participants, principles and technologies used for fund transfer; 'payment services' — the eight types listed in Art. 15; 'payment service provider' — body corporate authorised by BNR to provide payment services to customers and businesses; 'payment instrument' — personalised device or set of procedures agreed between user and provider used to initiate a payment order; 'payment account' — account held in name of one or more consumers used for payment transactions; 'settlement' — act of discharging obligations by transferring funds, securities, or other financial instruments between two or more parties; 'clearing' — process of transmitting, reconciling and confirming transactions prior to settlement; 'netting' — conversion of different claims or obligations between participants into one net claim or obligation for settlement purposes; 'settlement account' — account in books of a settlement agent used for holding funds and financial instruments and settling transfer orders between payment system participants; 'settlement agent' — entity providing settlement accounts to participants and extending intraday credit for settlement purposes; 'operator' — entity in charge of operating or administering the payment system; 'participant' — entity with a role in the payment system or party to a system arrangement, including its operator; 'agent' — natural or legal person acting on behalf of a payment institution in providing payment services; 'access' — entity's entitlement or eligibility to participate in the payment system; 'access regime' — regime imposed by BNR setting terms and conditions of participation; 'rules' — document containing guidelines of the payment system, evidenced in writing; 'financial collateral' — cash, financial instruments, or precious metals; 'financial collateral arrangement' — title transfer or security financial collateral arrangement, whether or not under a master agreement; 'financial instruments' — shares, bonds, debt instruments, derivatives, and other negotiable capital market securities including collective investment scheme units and money market instruments, excluding payment instruments; 'collateral taker' — person receiving financial collateral; 'collateral provider' — person providing financial collateral; 'book entry' — transfer of securities without physical movement of paper; 'book entry collateral' — financial securities provided under a financial collateral arrangement, title evidenced by entries in a register or account; 'cash' — money credited to an account in any currency or similar repayment claims; 'enforcement event' — default or agreed event triggering collateral taker's right to realise or appropriate financial collateral, or activating close-out netting; 'safeguarding institution' — financial institution holding customer funds on behalf of a payment service provider; 'systemic risk' — risk that inability of one participant to meet obligations, or a system disruption, causes inability of other participants or financial institutions to meet their obligations as they fall due; 'insolvency proceeding' — any collective measure to wind up or reorganise a person or entity where it involves suspension or limitations on transfers or payments in Rwanda; 'certificate' — physical document evidencing ownership, indebtedness, or other outstanding obligations of the issuer; 'securities settlement system' — system enabling securities to be transferred and settled by book entry under predetermined multilateral rules.",
    },
    {
      number: "4",
      title: "BNR General Powers over Payment System",
      summary:
        "BNR has power to regulate, oversee, and supervise all payment systems and payment services operated in Rwanda.",
    },
    {
      number: "5",
      title: "BNR Investigative Powers",
      summary:
        "BNR may at any time request from payment service providers or operators any information, documents, clarifications, or proof it requires. BNR may appoint its own auditors or third parties to inspect payment systems and providers; auditors may seize or copy relevant documents. BNR may instruct external auditors to audit the payment system, operators, issuers of payment instruments, and participants. External audits are conducted on behalf of BNR but at the audited entity's expense. External auditors must cooperate with BNR and may not invoke professional secrecy against BNR.",
    },
    {
      number: "6",
      title: "BNR Responsibilities",
      summary:
        "BNR's responsibilities include: formulating policies for modernisation of the payment system; issuing licences to payment system operators and payment service providers; establishing general and individual standards, rules, and procedures and ensuring their application; providing a policy forum for mutual interest matters; issuing regulations, directives, and decisions governing payment system operation; collecting, compiling, and disseminating monetary and financial statistics; operating clearing and settlement systems and issuing payment instruments; and performing all other settlement obligations.",
    },
    {
      number: "7",
      title: "BNR Operational Role",
      summary:
        "BNR may provide settlement, clearing, and securities settlement infrastructure for the benefit of operators and participants. BNR may: establish, own, and operate settlement and securities settlement systems; open and hold cash accounts for operators and participants; hold securities on accounts for operators and participants; and extend intraday credit in cash or securities to financial institutions or entities participating in settlement, clearing, and securities settlement systems.",
    },
    {
      number: "8",
      title: "Designation of Payment Systems",
      summary:
        "Where BNR is of the opinion that a clearing and settlement system may pose a systemic risk and it is in the public interest, BNR may designate it by directive as a designated payment system. The designation directive specifies: the designated payment system; the documents evidencing its rules; the operator; and conditions of the designation. BNR issues general regulations governing the designation process.",
    },
    {
      number: "9",
      title: "Procedure for Designation",
      summary:
        "Designation may be initiated: by BNR advising the operator to apply; or voluntarily by the operator applying to BNR. BNR may issue a designation directive only if it is satisfied that deficiencies in the system's design, or disruption of its operation, would threaten the stability of or confidence in Rwanda's financial system, or have serious consequences for business or other interests in Rwanda.",
    },
    {
      number: "10",
      title: "Criteria for Designation",
      summary:
        "In designating a payment system, BNR considers: (1) the number and value of transactions the system presently processes or is likely to process in future; (2) the nature of the transactions processed; (3) whether those transactions could be handled by other payment systems; and (4) the relationship between the system and other systems.",
    },
    {
      number: "11",
      title: "Revocation of Designation Directive",
      summary:
        "A designation is effective until revoked. BNR may revoke a designation directive if the designated payment system no longer satisfies the Art. 10 criteria. BNR must consider a revocation request filed by the operator.",
    },
    {
      number: "12",
      title: "Principles, Rules and Directives of Payment System",
      summary:
        "BNR may by directive publish principles and codes of practice governing operators of designated payment systems. BNR requires the designated system operator to: establish rules; change rules in a specified way or to achieve a specified purpose; and notify BNR of any proposed rule change. Prior BNR approval is required before implementing any rule changes. BNR may give binding directives to the operator — requiring or prohibiting specified actions, and setting operational standards. Rules of a designated payment system are valid and binding on both the operator and all participants.",
    },
    {
      number: "13",
      title: "Forms of Payment System Rules",
      summary:
        "Payment system rules may be made under procedures, bylaws, written agreements, contracts, or other written documents that serve as the basis for: giving and receiving payment instructions; determining and calculating payment obligations; effecting settlements on a gross or clearing basis; and actions to be taken if a participant is or is likely to become unable to meet their obligations.",
    },
    {
      number: "14",
      title: "Access Regime",
      summary:
        "BNR may impose an access regime on the person who determines access to a payment system — whether a participant, operator, or settlement agent — on such terms as BNR considers appropriate. In assessing whether to impose an access regime, BNR considers: whether it is in the public interest; interests of current participants, operator, and settlement agent; interests of persons who may wish to access the system; and other relevant factors. BNR ensures any access regime imposed is fair, non-discriminatory, and proportionate. BNR may vary or revoke an access regime.",
    },
    {
      number: "15",
      title: "Types of Payment Services",
      summary:
        "Payment services include: (1) cash deposit and withdrawal services on a payment account, and all operations for managing a payment account; (2) execution of payment transactions including fund transfers — covering (a) direct debits including one-off direct debits, (b) payment card transactions, and (c) credit transfers including standing orders; (3) issuing of payment instruments; (4) acquiring of payment transactions — physically, online, or through a payment aggregator; (5) money remittance; (6) payment initiation services; (7) issuance and management of e-money services; and (8) other payment services as BNR may determine.",
    },
    {
      number: "16",
      title: "Categories of Payment Service Licences",
      summary:
        "BNR determines by regulation the categories of payment service licences and licensing requirements — these are NOT specified in this Law. Any person wishing to provide payment services must obtain the appropriate licence in writing from BNR. BNR determines the procedure and form for licence applications. NOTE FOR GC USE: Licence tiers, minimum capital requirements, and detailed licensing criteria are entirely in BNR regulations. This statute only establishes the licensing obligation and the exemptions in Art. 17.",
    },
    {
      number: "17",
      title: "Payment Service Licensing Exemptions",
      summary:
        "The following are exempt from the payment service licensing requirement and may provide payment services under their existing authorisation: (1) banks licensed by BNR — their banking licence covers payment services; (2) microfinance institutions authorised to provide payment services; and (3) such other persons or classes of persons as BNR may prescribe. PRACTICAL SIGNIFICANCE: A GC at a BNR-licensed bank does not need to obtain a separate payment service licence for the bank's payment activities. This is one of the most practically important articles for corporate in-house counsel.",
    },
    {
      number: "18",
      title: "Grounds for Withdrawal or Suspension of Licence",
      summary:
        "BNR may at any time withdraw or suspend a payment service provider's licence if: (1) the provider has not provided the services within 12 consecutive months from the licence date; (2) the provider has ceased providing services for more than 1 month; (3) the licence was obtained through forged documents or fraud; (4) applicable licensing criteria are no longer met; (5) the provision of payment services endangers the stability of Rwanda's financial system; (6) the provider enters insolvency proceedings; (7) the provider's holding company is undergoing liquidation that may adversely affect the provider; (8) BNR considers the system is no longer in public interest or no longer represents participants' interests; (9) the provider fails to comply with relevant legislation and regulations; or (10) any other ground BNR deems relevant.",
    },
    {
      number: "19",
      title: "Notice of Withdrawal, Suspension or Surrender of Licence",
      summary:
        "After deciding to withdraw or suspend a licence, BNR notifies the provider of its decision and publishes notice in a manner it considers appropriate. A licensed payment service provider may voluntarily surrender its licence by giving written notice in BNR-prescribed form; surrender is published by BNR.",
    },
    {
      number: "20",
      title: "Validity of Acts Performed Before Withdrawal, Suspension or Surrender",
      summary:
        "Withdrawal, suspension, or surrender of a licence does not affect: (1) any agreement, transaction, or arrangement relating to payment service provision entered into before the withdrawal, suspension, or surrender; or (2) any right, obligation, or liability arising under such agreement, transaction, or arrangement. Pre-existing transactions are protected — counterparties are not prejudiced by a provider's licence loss.",
    },
    {
      number: "21",
      title: "Duty of Payment Service Provider to Notify BNR of Certain Events",
      summary:
        "A payment service provider must notify BNR after the occurrence of any of the following: (1) any civil or criminal proceeding instituted against the provider, whether in Rwanda or abroad; (2) any event (including operational irregularity) that materially impedes or impairs the provider's operations; (3) the provider becomes or is likely to become insolvent, or unable to meet financial, statutory, contractual, or other payment service obligations; (4) disciplinary action taken by any regulatory authority other than BNR, in Rwanda or abroad; (5) significant change to regulatory requirements imposed by any authority other than BNR, in Rwanda or abroad; or (6) any other event specified by BNR by written notice. ENFORCEMENT: Failure to comply with Art. 21 notification obligations constitutes an administrative fault under Art. 49, subject to BNR administrative sanctions. It is NOT a criminal offence under Art. 50. The distinction matters: Art. 49 administrative sanctions are determined by BNR regulation (amounts not specified in this Law); Art. 50 criminal prosecution is reserved for the seven specific acts listed in that article.",
    },
    {
      number: "22",
      title: "Prohibition Against Solicitation",
      summary:
        "It is prohibited for any person — whether in Rwanda or abroad — to hold themselves out as a payment service provider and invite the public to use or advertise payment services without a BNR licence. Violation is a criminal offence under Art. 50(7).",
    },
    {
      number: "23",
      title: "Place of Business",
      summary:
        "A payment service provider must have a permanent place of business or registered office in Rwanda before starting to provide services. The provider must appoint at least one person to be present at the business address, on days and hours specified by BNR, to address queries or complaints from users or customers.",
    },
    {
      number: "24",
      title: "Fees Payable by Payment Service Provider",
      summary:
        "Every payment service provider pays an annual fee prescribed by BNR. BNR may prescribe different annual fees for different categories of providers depending on the type and number of licensed payment services, transaction volumes, and other relevant factors. Fee amounts are NOT specified in this Law — they are set by BNR regulation.",
    },
    {
      number: "25",
      title: "Interoperability of Payment Accounts",
      summary:
        "BNR establishes regulations governing procedures by which payment service providers enter into arrangements with operators to achieve interoperability of payment accounts with the payment system. In determining interoperability requirements, BNR considers: whether it is in the public interest; interests of current participants and operator; interests of persons who may be required to participate; and other relevant factors. NOTE FOR GC USE: This article is framework only. No mandatory connection obligations, technical standards, or specific interoperability timelines are in this statute. Actual interoperability requirements are in BNR regulations.",
    },
    {
      number: "26",
      title: "Exercise of Oversight Powers",
      summary:
        "BNR's oversight powers include: (1) gathering information from all designated payment systems and payment service providers to monitor the sector and identify emerging risks; (2) requiring systemically important payment systems to be designated; (3) setting standards and supervising designated payment systems, participants, and providers; and (4) establishing a crisis management and resolution framework for the payment system.",
    },
    {
      number: "27",
      title: "Regulatory Fees and Other Charges",
      summary:
        "BNR may impose regulatory fees and other charges: (1) to recover its direct and indirect costs of oversight, supervision, and regulatory services to providers, operators, and participants; and (2) for the provision of operational services and infrastructure.",
    },
    {
      number: "28",
      title: "Consumer Protection",
      summary:
        "Every payment service provider must protect consumers of payment services in accordance with relevant laws and regulations. NOTE FOR GC USE: This is the entire text of Art. 28 — one sentence. It contains no substantive consumer protection obligations. Rights regarding unauthorised transactions, failed payments, dispute resolution with customers, refunds, and complaint handling are NOT in this statute. They are governed by: BNR Consumer Protection Directive for payment services (BNR regulation); Competition and Consumer Protection Law N° 036/2012 (committed in Me Ngoga); and general contract law. Art. 52 dispute resolution in this Law covers only operator-to-participant disputes — NOT customer complaints.",
    },
    {
      number: "29",
      title: "Use of an Agent",
      summary:
        "A payment service provider wishing to use an agent to provide payment services must apply to BNR for approval before deploying the agent. BNR establishes regulations on requirements for using agents. The provider must ensure its agent informs consumers that they are acting as an agent.",
    },
    {
      number: "30",
      title: "Outsourcing of Important Operational Functions",
      summary:
        "A payment service provider or operator cannot outsource any operational functions without prior written BNR approval. Outsourcing must not materially impair the quality of the operator's or provider's internal controls, or BNR's ability to monitor compliance. A function is 'important' if a defect or failure in its performance would materially impair the operator's or provider's continuing compliance with licence requirements, financial performance, or soundness and continuity of services.",
    },
    {
      number: "31",
      title: "Compliance Requirements in Outsourcing",
      summary:
        "BNR ensures the following are not violated when outsourcing important operational functions: (1) senior management must not delegate its responsibilities to the outsourced party; (2) the relationship and obligations of the payment instrument issuer to its users must not be altered; (3) the conditions the operator or provider must meet to hold its licence must not be undermined; and (4) other conditions of the licence must not be removed or modified.",
    },
    {
      number: "32",
      title: "Liability for Outsourced Functions",
      summary:
        "Where a payment service provider or operator relies on third parties for important operational functions, it remains fully liable for all acts of its employees, agents, branches, or entities to which activities are outsourced. Outsourcing does not transfer legal liability.",
    },
    {
      number: "33",
      title: "Appointment of External Auditor",
      summary:
        "Every operator or payment service provider must designate at least one external auditor accredited by BNR. The auditor must appear on the list regularly maintained by the accounting professional regulatory body. Only a body corporate may act as external auditor.",
    },
    {
      number: "34",
      title: "Requirements for Disclosure of Information",
      summary:
        "BNR may disclose any information it considers necessary and in the public interest to protect the integrity, effectiveness, and security of the payment system. Confidentiality obligations do not apply to disclosures made in the performance of functions under this Law or the rules of a designated payment system, or when required by court. BNR does not publish or disclose information or data unless satisfied that adequate confidentiality protections exist.",
    },
    {
      number: "35",
      title: "Financial Collateral Arrangement",
      summary:
        "A financial collateral arrangement provides for: (1) the obligation to provide financial collateral; (2) additional financial collateral to reflect changes in value of the collateral and guaranteed obligations (top-up margin); and (3) the right to withdraw financial collateral through substitution or exchange. Delivery of financial collateral is valid and enforceable against third parties and any liquidator, and cannot be challenged on any ground whatsoever. A financial collateral arrangement is validly concluded once the collateral is transferred or registered on behalf of the collateral taker.",
    },
    {
      number: "36",
      title: "Evidence for Financial Collateral Arrangement",
      summary:
        "A financial collateral arrangement may be evidenced in writing or by any other legal means.",
    },
    {
      number: "37",
      title: "Realisation of Financial Collateral",
      summary:
        "On the occurrence of an enforcement event, the collateral taker immediately realises any financial collateral under the agreed terms, without any prior court notice or approval, and without any other formality required. The collateral taker's rights over the financial collateral prevail over the rights of any other creditor of the collateral provider — this is super-priority over all other creditors. INSOLVENCY INTERACTION: This provision works alongside Art. 38 to protect financial collateral from insolvency avoidance actions, and alongside Art. 40 to make close-out netting immediately enforceable against a liquidator. See insolvencyInteractionCluster below.",
    },
    {
      number: "38",
      title: "Non-Retroactive Effect on Acts Prior to Insolvency Proceedings",
      summary:
        "A financial collateral arrangement cannot be declared invalid or revisited because of the opening of insolvency proceedings, if the collateral was given before or on the day insolvency proceedings opened AND the collateral taker was unaware of the opening of insolvency proceedings. INSOLVENCY INTERACTION: This is a direct safe harbour overriding Insolvency Law N° 075/2021 Arts. 215–217 (voidable preferences, undervalue transactions, voidable charges) in the payment system context. Collateral given within the normal Insolvency Law lookback periods (1 year for preferences and undervalue; 6 months for charges) is protected here provided the collateral taker had no knowledge of the insolvency opening.",
    },
    {
      number: "39",
      title: "Netting Process",
      summary:
        "The netting process may take place on a bilateral or multilateral basis; with or without interposition of an operator, whether by novation or otherwise; regardless of whether or not the obligations constitute mutual credits, mutual debts, or other mutual dealings.",
    },
    {
      number: "40",
      title: "Validity and Enforceability of Netting and Close-Out Netting",
      summary:
        "Where the rules of a designated payment system provide for netting, any netting in accordance with those rules is valid and enforceable. Insolvency law provisions do NOT apply to netting effected under the rules of a designated settlement system — insolvency cannot unwind a completed netting. Exception: where the insolvent participant and another participant (both in the same designated system) also have mutual credits, debts, or dealings between them that are NOT netted under the system rules, the netted balance of those off-system dealings is subject to insolvency law. Close-out netting provisions are valid, enforceable, and binding on third parties including the liquidator, taking immediate effect without prior court application. The operator may effect netting of all obligations owed to or by a participant incurred before or on the day of a bankruptcy or winding-up order or voluntary winding-up resolution. A 'close-out netting provision' triggers on an enforcement event: (1) all obligations of both parties are accelerated and terminated, expressed as a net obligation to pay an amount representing current value; and (2) a net sum is payable by the party with the larger obligation.",
    },
    {
      number: "41",
      title: "Information Mechanisms on Insolvency of Participants",
      summary:
        "Where a competent authority opens insolvency proceedings against a payment system participant, it must immediately inform BNR. Where BNR itself authorises voluntary or forced liquidation of a participant, BNR must specify in its decision when the decision becomes effective. On notification from a competent authority (domestic or foreign), BNR puts in place means to implement the decision.",
    },
    {
      number: "42",
      title: "Duty to Notify Winding Up",
      summary:
        "No payment system participant can be wound up without prior notification to BNR. On winding up of a participant: a copy of the winding-up application AND the subsequent winding-up order (recording the exact minute, hour, and day it was made) must be lodged with BNR on the same business day and no later than the start of the next business day, and served on any settlement agent requiring notification. BNR immediately notifies all relevant domestic and foreign system operators of the winding-up proceedings. The payment system operator enforces the winding-up order upon BNR notification. Voluntary winding up: participant must notify all other participants within 24 hours of the winding-up resolution taking effect (requires prior BNR approval). BNR notifies relevant domestic and foreign operators and participants on the same business day, no later than start of next business day. ENFORCEMENT: Failure to notify BNR before winding up a participant is an administrative fault under Art. 49, also potentially a criminal offence under Art. 50(1) if the entity continued operating without compliance.",
    },
    {
      number: "43",
      title: "Definitive Character of Designated Payment Systems (Settlement Finality)",
      summary:
        "A settlement effected in accordance with this Law is final, irrevocable, and cannot be reversed or set aside. Insolvency proceedings opened against a participant do NOT have retroactive effect on their payment obligations if those obligations arose before the opening of insolvency proceedings. Insolvency proceedings are implemented from the time the operator is notified — NOT from the date of filing or the court order date. Payment instructions legally entered into a designated payment system before commencement of insolvency proceedings (or before netting) are valid and cannot be challenged on any ground, even if an operator is subsequently dissolved. System rules must define the time at which a payment instruction is considered entered into the system. CRITICAL GC NOTE: Whether a specific payment is protected depends on when it was 'entered' into the specific designated system used — defined by that system's rules, not this statute. The legal protection is system-specific. For RTGS, SWIFT, mobile money interswitch, and other systems, the entry time rules differ.",
    },
    {
      number: "44",
      title: "Credit or Debit of Settlement Account",
      summary:
        "Settlement obligations are discharged with BNR money through book entries in BNR's books. Notwithstanding insolvency proceedings against a participant, the settlement agent may — if authorised by contract — use funds or financial instruments on the participant's settlement account to settle any net debit balance after netting. During insolvency proceedings, the settlement agent may use credit lines granted to the participant or realise any collateral provided by the participant to pay obligations to other participants.",
    },
    {
      number: "45",
      title: "Prohibition of Attachment or Seizure of Settlement Accounts",
      summary:
        "Settlement account balances may not be subject to attachment or seizure, except by the operator or settlement agent themselves. All funds deposited in a trust or collection account: (1) are not available for payment of the payment service provider's own debts; and (2) cannot be paid or taken in execution under any court order or process. These are ring-fenced funds, fully insulated from the provider's insolvency and from court enforcement by third-party creditors.",
    },
    {
      number: "46",
      title: "Safeguarding of Funds Received from Customers",
      summary:
        "A payment service provider collecting customer funds must safeguard those funds in one of the following BNR-prescribed manners: (1) depositing the same amount in a trust account with a BNR-authorised safeguarding institution; (2) obtaining an undertaking from a safeguarding institution to be fully liable to the customer for the funds; (3) a guarantee from the safeguarding institution for the amount of collected funds; or (4) any other manner prescribed by BNR. The safeguarding institution and provider must maintain a separate book entry for each customer's funds. On the provider's insolvency: guarantee proceeds must be paid into a separately designated safeguarding account held by the provider, used only to hold proceeds on trust for the customers who provided the funds. PRACTICAL EFFECT: Customer funds (e.g. mobile wallet balances, prepaid card balances) are legally ring-fenced from the provider's estate on insolvency. Combined with Art. 45, this means customers are protected even if the provider fails.",
    },
    {
      number: "47",
      title: "Crisis Management Powers",
      summary:
        "Where BNR is of the opinion that an operator or payment service provider: (1) is or is likely to become insolvent, or unable to meet obligations, or has suspended or is about to suspend payments; (2) has contravened prescribed conditions; or (3) that action is in the public interest — BNR may: (a) require the operator or provider to immediately take any action or do or not do any specified act in relation to its business; (b) appoint one or more statutory advisers on terms BNR specifies, to advise on proper management; or (c) assume control of and manage the business of the operator or provider, or appoint one or more statutory managers to do so on specified terms. CRITICAL GAP FOR GC USE: This article contains no procedural safeguards — no prior notice requirement to the affected entity, no hearing, no judicial oversight, and no right of appeal on the face of this statute. BNR may act immediately and unilaterally. A GC at an operator subjected to a BNR intervention under Art. 47 has no statutory basis for challenge within this Law. Any challenge must proceed through general administrative law — High Court judicial review of administrative action — or through BNR's own governance framework if BNR has published an appeals procedure. This is the most consequential BNR power in this Law and it operates without statutory constraint on process.",
    },
    {
      number: "48",
      title: "Applicable Law in Case of Conflicting Laws Governing a Payment System",
      summary:
        "In the event of insolvency of a foreign participant in Rwanda, the following settlement-related rights and obligations are governed by Rwandan law: (1) rights and obligations arising from or connected to participation in the system; (2) requirements for perfecting a financial collateral arrangement relating to book entry securities collateral and its provision — enforceable against third parties; (3) a person's title to or interest in book entry securities collateral; and (4) steps required for realisation of book entry securities collateral. Conversely, the rights and obligations of a Rwandan participant in a foreign payment system are governed by the law of that foreign system.",
    },
    {
      number: "49",
      title: "Administrative Faults and Sanctions",
      summary:
        "Where BNR finds that a payment service provider, operator, a member of their board of directors, or a member of senior management violates any provision of this Law or its implementing regulations, BNR imposes administrative sanctions on them. SCOPE: Art. 49 is the enforcement mechanism for ALL compliance obligations under this Law that are not separately listed as criminal offences in Art. 50. This includes failures under: Art. 21 (duty to notify BNR of material events); Art. 23 (place of business and staffing requirements); Art. 25 (interoperability obligations); Art. 29 (agent approval requirements); Art. 30 (outsourcing prior approval); Art. 33 (external auditor appointment); Art. 34 (information disclosure obligations); Art. 46 (customer fund safeguarding); Art. 55 (AML/CFT compliance); and all BNR regulations made under this Law. CRITICAL DISTINCTION: Art. 49 administrative sanctions apply to regulatory compliance failures. Art. 50 criminal offences are a separate, exhaustive list of seven specific acts. For example, failing to notify BNR of approaching insolvency under Art. 21(3) triggers Art. 49 administrative sanctions — NOT criminal prosecution under Art. 50. AMOUNTS NOT IN THIS LAW: Specific administrative fault categories, sanction amounts, the procedure for imposing sanctions, and the appeal process are entirely delegated to BNR regulation and are NOT specified in this statute.",
    },
    {
      number: "50",
      title: "Criminal Offences in Payment System",
      summary:
        "The following are an exhaustive list of criminal offences under this Law — only these seven acts constitute criminal offences; all other violations are administrative faults under Art. 49: (1) operating as a payment system operator or service provider without a BNR licence; (2) failing to respond to BNR information requests, or knowingly providing false information to BNR; (3) damaging, destroying, altering, or falsifying accounts, books, or records of an operator or participant; (4) interfering in any way with BNR's audit activities or those of another competent auditor, or refusing document access; (5) falsely claiming to be a designated payment system operator without BNR designation; (6) misusing payment system information for personal or third-party advantage in violation of this Law; and (7) soliciting the public to use, or advertising, payment services without a licence. Penalties for individuals on conviction: imprisonment of 6 months to 1 year AND/OR fine of FRW 5,000,000 to FRW 10,000,000. Penalties for operators, payment service providers, companies, organisations, or legal persons on conviction: fine of 10 to 20 times the individual fine amount (FRW 50,000,000 to FRW 200,000,000) OR dissolution — this is among the highest corporate criminal exposure in Rwandan financial sector law.",
    },
    {
      number: "51",
      title: "Admissibility of Electronic and Optical Evidence",
      summary:
        "The enforceability and evidential value of electronic fund transfers and records are governed by relevant laws. Information stored, disseminated, or used by participants and operators is not denied legal effect solely because: (1) it is in electronic form; or (2) it is referenced in another electronic record rather than incorporated directly. Payment instruments already entered into a system, or their archives held in writing, electronic or optical form, or other durable medium ensuring traceability — including printouts — are admissible as evidence in all legal matters.",
    },
    {
      number: "52",
      title: "Dispute Settlement",
      summary:
        "Disputes between an operator and a participant, or between participants, arising from the operation of a payment system, are settled in accordance with BNR directives. A dissatisfied party may refer the matter to other competent organs. SCOPE LIMITATION: Art. 52 covers only industry-level disputes — operator versus participant, or participant versus participant — about payment system operation. It does NOT cover: customer complaints against payment service providers about failed transactions, unauthorised debits, delayed credits, or payment errors. Customer dispute rights are not addressed in this statute. They are governed by BNR consumer protection directives and Competition Law N° 036/2012.",
    },
    {
      number: "53",
      title: "Exchange of Information Between Regulators",
      summary:
        "No obligation of secrecy or restriction on disclosure of information — whether imposed by law or otherwise — prevents the exchange of information between regulators. Professional secrecy and data protection laws do not block inter-regulator information sharing in the payment system context.",
    },
    {
      number: "54",
      title: "Data Protection",
      summary:
        "Processing of personal data by payment systems and payment service providers is permitted where necessary to safeguard prevention, investigation, and detection of payment fraud. Processing and use of personal data must comply with relevant laws — primarily Data Protection Law N° 058/2021 (committed in Me Ngoga). Payment service providers may only access, process, and retain personal data necessary for providing their payment services, and only with the explicit consent of the payment service user.",
    },
    {
      number: "55",
      title: "AML/CFT Compliance",
      summary:
        "Every operator or payment service provider must: (1) comply with all obligations and requirements under Rwanda's AML/CFT and weapons proliferation financing laws and regulations; and (2) ensure that any agent or third party acting on its behalf also complies with those laws and regulations. NOTE FOR GC USE: Art. 55 is a pointer only — two paragraphs. It contains no substantive AML/CFT obligations. Specific CDD requirements, transaction monitoring thresholds, suspicious transaction reporting procedures, and record-keeping obligations for payment service providers are in AML/CFT Law N° 75/2019 (committed in Me Ngoga) and BNR's specific AML/CFT directives for payment service providers. A GC at a mobile money operator or fintech asking 'what are my specific KYC obligations for wallet customers?' will need the BNR AML/CFT directive, not this statute.",
    },
    {
      number: "56",
      title: "Retention of Records",
      summary:
        "BNR, participants, and payment service providers must retain all records obtained in the course of operating and administering the payment system, clearing, and settlement systems for 10 years from the date the record was obtained or produced.",
    },
    {
      number: "57",
      title: "Validity of Prior Acts",
      summary:
        "Acts performed under Law N° 03/2010 of 26/02/2010 on payment system as amended remain valid.",
    },
    {
      number: "58",
      title: "Existing Regulations — Transitional Period",
      summary:
        "BNR regulations made under Law N° 03/2010 remain in force in all provisions not inconsistent with this Law for a transitional period not exceeding 12 months from the date of publication of this Law — i.e. until 01/11/2022 at the latest. After 01/11/2022, any BNR regulation issued under the old law that is inconsistent with this Law ceased to be valid. BNR was expected to issue replacement regulations within this 12-month window.",
    },
    {
      number: "59",
      title: "Language",
      summary: "Law drafted in English, considered and adopted in Kinyarwanda.",
    },
    {
      number: "60",
      title: "Saving and Repealing Provision",
      summary:
        "Repeals Law N° 03/2010 of 26/02/2010 on payment system as amended, EXCEPT Article 23 thereof, which establishes the National Payment System Council. Art. 23 of the old law is expressly preserved. All other Articles of Law N° 03/2010 and all other prior contrary legal provisions are repealed.",
    },
    {
      number: "61",
      title: "Entry into Force",
      summary:
        "Comes into force on the date of publication in the Official Gazette: 01/11/2021.",
    },
  ],

  penalties: [
    "Art. 49 — Administrative sanctions: BNR imposes administrative sanctions on payment service providers, operators, board members, or senior management who violate ANY provision of this Law or its implementing regulations. This covers ALL compliance failures not separately listed in Art. 50. Specific fault categories, sanction amounts, imposition procedure, and appeal process are set entirely by BNR regulation — not in this statute.",
    "Art. 50 (individuals) — Seven exhaustive criminal offences (unlicensed operation; false information to BNR; falsifying records; obstructing audits; false designation claims; misusing payment information; unlicensed solicitation): imprisonment 6 months–1 year AND/OR fine FRW 5,000,000–10,000,000.",
    "Art. 50 (legal persons) — Same seven criminal offences committed by operators, payment service providers, companies, organisations, or legal persons: fine of 10–20 times the individual fine (FRW 50,000,000–200,000,000) OR dissolution. This is among the highest corporate criminal financial exposure in Rwandan financial sector law.",
  ],

  regulator:
    "National Bank of Rwanda (BNR) — sole regulator with comprehensive powers: licensing (Arts. 6, 16); designation of payment systems (Arts. 8–11); setting rules, standards, and directives (Arts. 12–13); access regime (Art. 14); oversight and supervision (Art. 26); investigative and audit powers (Art. 5); crisis management including assumption of control without prior notice or hearing (Art. 47); settlement finality enforcement (Art. 43); AML/CFT oversight (Art. 55); administrative sanctions for all Law violations (Art. 49). National Payment System Council — established by Art. 23 of the repealed Law N° 03/2010, expressly preserved by Art. 60 of this Law; policy and governance advisory role. Courts — criminal jurisdiction over Art. 50 offences. NOTE: No judicial oversight of BNR crisis management actions is provided for in this Law.",

  keyDeadlines: [
    "Art. 18(1) — Licence lapse trigger: provider has not provided services within 12 consecutive months from licence grant date → ground for licence withdrawal.",
    "Art. 18(2) — Suspension trigger: provider has ceased providing services for more than 1 month → ground for withdrawal.",
    "Art. 21 — Notification to BNR: must occur 'after' the occurrence of any listed event — no specific number of days stated in this Law. BNR regulation specifies timelines.",
    "Art. 42 — Winding-up of participant: (a) copy of winding-up application and order (with exact minute, hour, and day) lodged with BNR on same business day, no later than start of next business day; (b) voluntary winding-up: participant must notify all other participants within 24 hours of the resolution taking effect; (c) BNR notifies relevant operators and participants on same business day, no later than start of next business day.",
    "Art. 43 — Settlement finality cut-off: payment instructions 'entered into' the designated payment system before insolvency proceedings commence are protected. The precise entry-time is defined by each system's own rules — not this statute.",
    "Art. 56 — Record retention: 10 years from date the record was obtained or produced.",
    "Art. 58 — Transitional period: BNR regulations under old Law N° 03/2010 remained valid for maximum 12 months from 01/11/2021 (i.e. until 01/11/2022) for provisions not inconsistent with this Law.",
  ],

  insolvencyInteractionCluster: [
    "Art. 35 — Financial collateral delivery is valid and enforceable against any liquidator and cannot be challenged on any ground whatsoever.",
    "Art. 37 — Collateral taker's rights prevail over ALL other creditors of the collateral provider. Realisation on enforcement event requires no court approval.",
    "Art. 38 — Safe harbour: financial collateral given before or on the day insolvency proceedings opened cannot be voided under insolvency law, provided the collateral taker was unaware of the opening. DIRECTLY OVERRIDES Insolvency Law N° 075/2021 Arts. 215–217 (voidable preferences, undervalue transactions, and voidable charges) in this context.",
    "Art. 40 — Netting finality: insolvency law provisions do not apply to netting under designated payment system rules. Close-out netting is immediately enforceable against the liquidator without court application.",
    "Art. 43 — Settlement finality: settled transactions are final and irrevocable. Insolvency proceedings have no retroactive effect on pre-insolvency payment obligations. Insolvency proceedings take effect from when the OPERATOR IS NOTIFIED — not from the filing date or court order date.",
    "Art. 44 — Settlement agent may use participant's settlement account funds and collateral during insolvency proceedings to discharge obligations to other participants.",
    "Art. 45 — Settlement account balances and customer trust/collection account funds are completely ring-fenced: not available to creditors, not subject to court attachment or execution.",
    "Art. 46 — Customer funds safeguarded by trust account or guarantee are ring-fenced on provider insolvency and held on trust for customers.",
    "CLUSTER READING: Arts. 35, 37, 38, 40, 43, 44, 45, and 46 together create a comprehensive ring-fence around designated payment system transactions and customer funds from insolvency proceedings. They override Insolvency Law N° 075/2021 Arts. 215–217 in the payment system context and displace the general insolvency priority waterfall (Art. 212 of Insolvency Law) as to settlement accounts and customer funds. Both laws must be read together when advising on payment system transactions in an insolvency context.",
  ],

  statutoryGaps: [
    "Licence categories and capital requirements: entirely delegated to BNR regulation (Art. 16). This statute does not specify PSP licence tiers, minimum capital, or detailed licensing criteria. Source: BNR PSP Regulation.",
    "Administrative sanction amounts and appeal procedures: entirely delegated to BNR regulation (Art. 49). Source: BNR Administrative Sanctions Directive.",
    "Consumer complaint rights on failed or unauthorised transactions: Art. 28 is one sentence. Art. 52 covers operator-participant disputes only — NOT customer complaints. Source: BNR Consumer Protection Directive; Competition and Consumer Protection Law N° 036/2012 (committed).",
    "AML/CFT specific obligations for payment service providers: Art. 55 is a two-paragraph pointer. CDD thresholds, monitoring obligations, and reporting requirements for PSPs are in AML/CFT Law N° 75/2019 (committed) and BNR AML/CFT Directives for PSPs.",
    "Interoperability technical standards and mandatory connection timelines: Art. 25 is framework only. Source: BNR Interoperability Regulation.",
    "Appeal against BNR crisis management actions (Art. 47): no statutory appeal process. General administrative law — High Court judicial review — applies.",
    "Settlement finality entry-time determination (Art. 43): defined by each individual designated payment system's rules, not this statute. Varies by system (RTGS, mobile money interswitch, securities settlement, etc.).",
    "Agent banking requirements: Art. 29 requires BNR approval and refers to BNR regulations. Specific agent capital, training, geographic, and conduct requirements are in BNR Agent Banking Regulations.",
    "Annual licence fees: prescribed by BNR regulation, not in this statute (Art. 24).",
    "Regulatory fees for oversight services: prescribed by BNR, not in this statute (Art. 27).",
  ],

  corporateKeyPoints: [
    "Art. 17 — BNR-licensed banks and authorised MFIs are exempt from obtaining a separate payment service licence. A bank's existing BNR licence covers its payment activities. Critical for GC at any bank.",
    "Arts. 37–38 — Financial collateral super-priority and insolvency safe harbour: collateral taker prevails over all other creditors; realisation requires no court approval; collateral given before or on insolvency opening is protected from avoidance actions. Critical for bank treasury, collateral management, and interbank lending legal teams.",
    "Art. 40 — Close-out netting is enforceable against a liquidator immediately, without court application. Insolvency law does not apply to netting under designated system rules. Critical for capital markets and interbank transaction legal teams.",
    "Art. 43 — Settlement finality: insolvency takes effect from operator notification, not filing date. Pre-insolvency payment obligations survive. Whether a specific payment is protected depends on each system's own entry-time rules.",
    "Arts. 45–46 — Customer funds are ring-fenced from provider insolvency and court enforcement. Mobile wallet balances and e-money are protected. Critical for telecoms, fintechs, and banks offering mobile money.",
    "Art. 47 — BNR can assume direct control of a payment operator or provider without prior notice, hearing, or statutory appeal right. Most consequential regulatory risk in this Law for operators and providers.",
    "Art. 50 — Corporate criminal liability: legal persons convicted of payment system offences face fines of FRW 50M–200M OR dissolution. Senior management also personally liable under Art. 49 administrative sanctions.",
    "Art. 30/32 — Full liability for outsourced functions remains with the provider or operator regardless of outsourcing. BNR prior written approval required for all outsourcing of important functions.",
    "Art. 21 — Broad mandatory notification obligations to BNR including civil/criminal proceedings, material operational events, approaching insolvency, and regulatory actions by any authority worldwide. Failure = administrative sanctions under Art. 49.",
    "Art. 48 — In Rwanda, a foreign participant's insolvency-related rights are governed by Rwandan law. A Rwandan participant in a foreign system is governed by that system's law.",
  ],

  effectiveDate: "01/11/2021",
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
