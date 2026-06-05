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
    {
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
