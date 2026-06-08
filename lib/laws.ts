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
  // ── 1. COMPANY LAW ──────────────────────────────────────────────────────
  {
    id: "company-law",
    name: "Company Law",
    shortName: "Company Law",
    number: "No. 019/2023 (amending No. 007/2021)",
    year: 2023,
    category: "Corporate & Investment",
    regulator: "RDB",
    status: "verified",
    description:
      "Governs incorporation, governance, shareholder rights, and dissolution of companies in Rwanda.",
    articles: [
      {
        number: "Art. 111",
        summary: "Records must be kept for a minimum of 10 years.",
      },
      {
        number: "Art. 116",
        summary:
          "Beneficial ownership register must be maintained; changes filed within 14 days.",
      },
      {
        number: "Art. 116 bis",
        summary:
          "Beneficial owner defined as holding ≥5% shares or voting rights; natural persons must be identified.",
      },
      {
        number: "Art. 143",
        summary: "Annual return filed yearly, signed by 2 directors.",
      },
      {
        number: "Art. 172",
        summary:
          "Company secretary mandatory for public companies; must be a Rwandan resident.",
      },
      {
        number: "Art. 326–327",
        summary: "General penalties: FRW 200,000–2,000,000.",
      },
      {
        number: "Art. 352",
        summary:
          "False share or ownership information: 3–5 years imprisonment + FRW 5M–10M fine.",
      },
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

  // ── 2. LABOUR LAW ───────────────────────────────────────────────────────
  {
    id: "labour-law",
    name: "Labour Law",
    shortName: "Labour Law",
    number: "No. 66/2018 + Amendment No. 027/2023",
    year: 2023,
    category: "Labour & Employment",
    regulator: "Ministry of Public Service and Labour",
    status: "verified",
    description:
      "Regulates employment relationships, working conditions, termination, leave, and social security in Rwanda.",
    articles: [
      {
        number: "Art. 24 bis",
        summary:
          "ABSOLUTE ban on terminating a pregnant employee — no exceptions whatsoever.",
      },
      {
        number: "Art. 29",
        summary:
          "Employer may terminate for serious misconduct with documented procedure.",
      },
      {
        number: "Art. 43",
        summary:
          "Working hours governed by Ministerial Order (effective 01/01/2023).",
      },
      {
        number: "Art. 45",
        summary:
          "Six mandatory leave types: annual, maternity/paternity, sick, circumstantial, public holiday, authorised absence.",
      },
      {
        number: "Art. 56",
        summary: "Maternity and paternity leave provisions specified.",
      },
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

  // ── 3. DATA PROTECTION ──────────────────────────────────────────────────
  {
    id: "data-protection",
    name: "Data Protection Law",
    shortName: "Data Protection",
    number: "No. 058/2021",
    year: 2021,
    category: "Data & Technology",
    regulator: "NCSA (National Cyber Security Authority)",
    status: "verified",
    description:
      "Governs collection, processing, storage, and transfer of personal data in Rwanda.",
    articles: [
      {
        number: "Art. 3",
        summary:
          "Personal data = any information on an identified or identifiable person. Financial data classified as sensitive.",
      },
      {
        number: "Art. 6",
        summary: "Consent must be free, specific, informed, and unambiguous.",
      },
      {
        number: "Art. 29",
        summary: "Mandatory registration as a data controller with NCSA.",
      },
      {
        number: "Art. 40",
        summary:
          "Data Protection Officer (DPO) required for companies processing data at scale.",
      },
      {
        number: "Art. 42",
        summary: "Must inform data subjects at the point of data collection.",
      },
      {
        number: "Art. 43",
        summary:
          "Data breach: notify supervisory authority (NCSA) within 48 HOURS.",
      },
      {
        number: "Art. 44",
        summary:
          "Full breach investigation report must be submitted within 72 HOURS.",
      },
      {
        number: "Art. 45",
        summary:
          "Notify affected data subjects if the breach presents high risk.",
      },
      {
        number: "Art. 48",
        summary:
          "Cross-border data transfer requires authorisation, consent, or contract basis.",
      },
      {
        number: "Art. 49",
        summary:
          "Written contract required before any cross-border data transfer.",
      },
      {
        number: "Art. 50",
        summary: "Data MUST be stored in Rwanda.",
      },
      {
        number: "Art. 52",
        summary: "Destroy data at end of retention period.",
      },
      {
        number: "Art. 53",
        summary: "Administrative fines: RWF 2M–5M or 1% of annual turnover.",
      },
      {
        number: "Art. 56",
        summary:
          "Unlawful data access or collection: 1–3 years imprisonment + RWF 7M–10M.",
      },
      {
        number: "Art. 59",
        summary:
          "Selling personal data: 5–7 years imprisonment + RWF 12M–15M.",
      },
      {
        number: "Art. 60",
        summary:
          "Sensitive data violations: 7–10 years imprisonment + RWF 20M–25M.",
      },
      {
        number: "Art. 62",
        summary: "Corporate body liability: 5% of annual turnover.",
      },
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

  // ── 4. TAX PROCEDURES ───────────────────────────────────────────────────
  {
    id: "tax-procedures-law",
    name: "Tax Procedures Law",
    shortName: "Tax Procedures",
    number: "No. 020/2023",
    year: 2023,
    category: "Tax & Revenue",
    regulator: "RRA (Rwanda Revenue Authority)",
    status: "verified",
    description:
      "Governs all tax administration procedures in Rwanda: registration, filing, audit, dispute resolution, penalties, interest, enforcement, and tax evasion offences. Applies to all taxes administered by RRA.",
    articles: [
      {
        number: "Art. 9",
        summary:
          "Annual tax declaration filed by 31 March of the following tax period.",
      },
      {
        number: "Art. 13–16",
        summary:
          "Every taxpayer must maintain books of accounts and records for a minimum of 10 years from the tax year they relate to.",
      },
      {
        number: "Art. 51",
        summary:
          "Appeal against tax assessment or administrative fine: file with Commissioner General within 30 days of receiving the notice.",
      },
      {
        number: "Art. 53",
        summary:
          "Commissioner General must decide on appeal within 30 days (extendable by 30 days). If no decision is taken, the appeal is deemed well-founded.",
      },
      {
        number: "Art. 55–56",
        summary:
          "If dissatisfied with Commissioner General's decision: request amicable settlement, then file with competent court within 30 days of failed settlement or CG decision.",
      },
      {
        number: "Art. 71",
        summary:
          "Directors directly involved in management of a private company are jointly liable for company's tax obligations if they intentionally or negligently caused the liability.",
      },
      {
        number: "Art. 78",
        summary:
          "Tax recovery limitation period: 10 years from date of assessment notice or court decision.",
      },
      {
        number: "Art. 80",
        summary:
          "Late payment interest: 0.5%/month if delay ≤6 months; 1%/month if delay 6–12 months; 1.5%/month if delay >12 months. Non-compounding. Capped at 100% of principal tax.",
      },
      {
        number: "Art. 81",
        summary:
          "Fixed administrative fines for: late declaration, failure to withhold, failure to register, obstructing audit, failure to keep records. Amounts: FRW 50,000–500,000 depending on turnover category. Doubled on second offence within 2 years, quadrupled on third.",
      },
      {
        number: "Art. 82",
        summary:
          "Fine for non-declaration AND non-payment: 20% of tax due (≤30 days late), 40% (31–60 days late), 60% (>60 days late). Fine for declared but unpaid: 5% (≤30 days), 10% (31–60 days), 30% (>60 days).",
      },
      {
        number: "Art. 83",
        summary:
          "Understatement fine: 10% of understated amount (if understatement is 10–20% of tax due); doubled if understatement exceeds 20%.",
      },
      {
        number: "Art. 87",
        summary:
          "VAT-specific penalties: operating without VAT registration: 50% of VAT due for entire operating period; issuing VAT invoice without being registered: 100% of VAT amount; incorrect VAT invoice to reduce tax: 100% of VAT amount.",
      },
      {
        number: "Art. 88",
        summary:
          "Failure to use electronic invoicing system (VAT-registered persons): fine of 10x the evaded VAT; 20x on recidivism within 2 years.",
      },
      {
        number: "Art. 90",
        summary:
          "Tax evasion (using forged documents, hiding taxable goods, false declarations, fraudulent registration, hiding accounting records): 2–5 years imprisonment.",
      },
      {
        number: "Art. 91",
        summary:
          "Fraudulent refund claim: 2–5 years imprisonment + fine equal to 100% of amount fraudulently claimed.",
      },
      {
        number: "Art. 92",
        summary:
          "Accessory sanctions: business closure up to 30 days, barred from public tenders, withdrawal of business register, media publication.",
      },
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

  // ── 5. VAT LAW ──────────────────────────────────────────────────────────
  {
    id: "vat-law",
    name: "Value Added Tax Law",
    shortName: "VAT Law",
    number: "No. 049/2023",
    year: 2023,
    category: "Tax & Revenue",
    regulator: "RRA (Rwanda Revenue Authority)",
    status: "verified",
    description:
      "Establishes value added tax on goods and services supplied in Rwanda and on imported goods and services. Repeals Law No. 37/2012.",
    articles: [
      {
        number: "Art. 4",
        summary:
          "VAT rate: 18% standard rate; 0% for zero-rated goods and services listed in Art. 7.",
      },
      {
        number: "Art. 5(3)",
        summary:
          "Public procuring entities must withhold VAT on all payments to VAT-registered successful bidders.",
      },
      {
        number: "Art. 7",
        summary:
          "Zero-rated: exported goods and services; international freight; diplomatic missions; NGOs receiving donor-funded goods; locally assembled EVs and hybrid vehicles.",
      },
      {
        number: "Art. 8",
        summary:
          "Exempted (key): financial and insurance services; health services; educational materials; passenger transport (14+ capacity vehicles); sale/lease of land; residential property rental >90 days; agricultural products (unprocessed); mobile phones and SIM cards.",
      },
      {
        number: "Art. 28",
        summary:
          "VAT declaration: quarterly (within 15 days after quarter end) if annual turnover ≤FRW 200M; monthly (within 15 days after month end) if annual turnover >FRW 200M.",
      },
      {
        number: "Art. 29",
        summary:
          "VAT payment deadline: within 15 days following each declaration period.",
      },
      {
        number: "Art. 26",
        summary:
          "VAT refund: within 30 days from day following declaration (or 30 days from audit report if audit required).",
      },
      {
        number: "Art. 33",
        summary:
          "Embassies, diplomatic missions, and qualifying international organisations may claim VAT refund on taxable purchases.",
      },
      {
        number: "Art. 36",
        summary: "Repeals Law No. 37/2012 establishing VAT.",
      },
      {
        number: "Art. 37",
        summary:
          "Entered into force on date of publication: 14 September 2023.",
      },
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

  // ── 6. INCOME TAX ───────────────────────────────────────────────────────
  {
    id: "income-tax-law",
    name: "Income Tax Law",
    shortName: "Income Tax",
    number: "No. 027/2022 (as amended by No. 051/2023 and No. 014/2025)",
    year: 2025,
    category: "Tax & Revenue",
    regulator: "RRA (Rwanda Revenue Authority)",
    status: "verified",
    description:
      "Establishes taxes on income in Rwanda: corporate income tax (CIT), personal income tax (PIT), PAYE, withholding taxes, capital gains tax, and digital services tax. Last amended May 2025.",
    articles: [
      {
        number: "Art. 14",
        summary:
          "Personal Income Tax (PAYE) monthly brackets: 0% on FRW 0–60,000; 10% on FRW 60,001–100,000; 20% on FRW 100,001–200,000; 30% above FRW 200,001. Casual workers taxed at flat 15% (with 0% threshold of FRW 60,000/month).",
      },
      {
        number: "Art. 33",
        summary:
          "Quarterly prepayment of CIT required for companies with taxable income.",
      },
      {
        number: "Art. 45",
        summary:
          "CIT exemptions include: Government of Rwanda, National Bank of Rwanda, approved pension funds, RSSB, Development Bank of Rwanda, NGOs exclusively engaged in charitable/educational activities, international organisations under bilateral agreement.",
      },
      {
        number: "Art. 48",
        summary:
          "Corporate Income Tax (CIT) rate: 28% of taxable business profit. Newly listed companies on Rwanda capital market: 20% (if ≥40% shares sold to public) or 25% (if ≥30%) for 5 years from listing.",
      },
      {
        number: "Art. 36 (as amended)",
        summary:
          "Capital gains tax rate: 10% of capital gain (as amended by No. 014/2025).",
      },
      {
        number: "Art. 37 (as amended)",
        summary:
          "Capital gains tax: withheld and declared within 15 days after the month in which the sale or transfer occurred.",
      },
      {
        number: "Art. 50 bis (new)",
        summary:
          "Digital services tax: 1.5% of gross Rwanda-sourced revenues for companies supplying digital services with substantial national presence in Rwanda.",
      },
      {
        number: "Art. 56",
        summary: "PAYE withheld monthly by employer and remitted to RRA.",
      },
      {
        number: "Art. 60",
        summary:
          "Withholding tax at 15%: applies to dividends, financial interest, royalties, payments to non-RRA-registered persons, service fees paid to persons without recent income tax declaration.",
      },
      {
        number: "Art. 62",
        summary:
          "Withholding tax on public procurement goods: 3% withheld by public entity.",
      },
      {
        number: "Art. 64",
        summary:
          "Withholding tax declaration and payment: within 15 days after the month of payment.",
      },
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
      "Digital services companies with substantial Rwanda presence: register and pay 1.5% digital services tax on Rwanda-sourced gross revenues (Art. 50 bis)",
      "NGOs: maintain accounts and submit financial statements by 31 March even if CIT-exempt (Art. 45 as amended)",
    ],
  },

  // ── 7. INVESTMENT PROMOTION LAW ─────────────────────────────────────────
  {
    id: "investment-006-2021",
    name: "Investment Promotion and Facilitation Law",
    shortName: "Investment Law",
    number: "No. 006/2021 of 05/02/2021",
    year: 2021,
    category: "Corporate & Investment",
    regulator: "Rwanda Development Board (RDB)",
    status: "verified",
    description:
      "Governs investment registration, investor guarantees, incentives, and facilitation in Rwanda. Applies to all registered investors — foreign and domestic — across all business sectors.",
    articles: [
      {
        number: "Art. 3",
        summary:
          "All business sectors open to private investment regardless of investor origin.",
      },
      {
        number: "Art. 4",
        summary:
          "Twelve priority sectors eligible for investment incentives including export, manufacturing, energy, ICT, mining exploration, transport, affordable housing, tourism, horticulture, creative arts, and skills development.",
      },
      {
        number: "Art. 6",
        summary:
          "Investment incentives in the Annex granted to registered investors meeting requirements. Additional incentives possible by Ministerial Order.",
      },
      {
        number: "Art. 9",
        summary:
          "Foreign investors authorised to invest and purchase shares in Rwanda; treated equally to Rwandan investors on investment incentives.",
      },
      {
        number: "Art. 10",
        summary:
          "Investor has right to private property which is inviolable. Expropriation in public interest requires fair compensation.",
      },
      {
        number: "Art. 12",
        summary:
          "After fulfilling Rwandan tax obligations, investor may repatriate capital, profits, debt and interest, liquidation proceeds, and other assets.",
      },
      {
        number: "Art. 13",
        summary:
          "Disputes between investor and State settled amicably first; if unresolved, referred to agreed arbitration or competent court.",
      },
      {
        number: "Art. 17",
        summary:
          "Investment registration application requires: filled form, certificate of incorporation, business plan, environmental impact assessment certificate, projected employee numbers, proof of fee payment, and sector licence.",
      },
      {
        number: "Art. 18",
        summary:
          "RDB issues investment certificate within 2 working days of receiving complete application; rejects incomplete application within 2 working days with reasons.",
      },
      {
        number: "Art. 19",
        summary:
          "Investment certificate valid for 5 years from issuance; renewable for successive 5-year periods.",
      },
      {
        number: "Art. 22",
        summary:
          "Certificate cancelled if issued on false/fraudulent declarations, material detrimental changes occurred, or investor fails to fulfil obligations.",
      },
      {
        number: "Art. 23",
        summary:
          "Before cancellation, RDB issues written notice; investor has 10 working days to respond.",
      },
      {
        number: "Art. 24",
        summary:
          "Registered investor may appeal cancellation to RDB Head within 10 working days; RDB Head decides within 10 working days.",
      },
      {
        number: "Art. 25",
        summary:
          "If certificate cancelled due to false/fraudulent declarations, investor must refund full value of all investment incentives received.",
      },
      {
        number: "Art. 26",
        summary:
          "Registered investor must: implement project per business plan; keep financial records; submit financial report to RDB within 3 months after each financial year; register with Tax Administration.",
      },
      {
        number: "Art. 27",
        summary:
          "Registered investor must notify RDB in writing within 30 days before changing, suspending, or terminating investment operations.",
      },
    ],
    penalties: [
      "Art. 25: Cancellation due to false/fraudulent declarations — investor must refund full value of all investment incentives received",
      "Art. 23: Failure to respond to cancellation notice within 10 working days results in automatic cancellation of investment certificate",
    ],
    keyDeadlines: [
      "RDB must issue investment certificate or rejection within 2 working days of receiving complete/incomplete application (Art. 18)",
      "Investment certificate valid for 5 years; renewable for successive 5-year periods (Art. 19)",
      "RDB must issue renewal or rejection within 2 working days of receiving renewal application (Art. 21)",
      "Investor has 10 working days to respond to cancellation notice from RDB (Art. 23)",
      "Appeal against cancellation: filed within 10 working days of notification; RDB Head decides within 10 working days (Art. 24)",
      "Financial report: submitted to RDB within 3 months after each financial year end (Art. 26)",
      "Investor must notify RDB at least 30 days before changing, suspending, or terminating operations (Art. 27)",
    ],
    keyObligations: [
      "Obtain and maintain investment certificate from RDB (Art. 18–19)",
      "Implement project in accordance with submitted business plan (Art. 26)",
      "Maintain financial and accounting records (Art. 26)",
      "Submit financial report to RDB within 3 months of each financial year end (Art. 26)",
      "Register with Tax Administration and file tax returns (Art. 26)",
      "Notify RDB 30 days before any change, suspension, or termination of operations (Art. 27)",
      "Keep operational data for 5 years (Art. 26)",
    ],
  },

  // ── 8. INSURANCE LAW ────────────────────────────────────────────────────
  {
    id: "insurance-law",
    name: "Insurance Business Organisation Law",
    shortName: "Insurance Law",
    number: "No. 030/2021",
    year: 2021,
    category: "Financial Services",
    regulator: "BNR (National Bank of Rwanda)",
    status: "verified",
    description:
      "Governs the organisation of insurance business in Rwanda, including licensing of insurers and intermediaries, prudential requirements, market conduct, and liquidation. Repeals Law No. 52/2008.",
    articles: [
      {
        number: "Art. 2",
        summary:
          "Applies to all insurers (public and private), reinsurers, insurance intermediaries, health maintenance organisations, insurance contracts, and reinsurance contracts in Rwanda.",
      },
      {
        number: "Art. 5",
        summary:
          "The term 'insurance' is protected — no entity may use it without a licence.",
      },
      {
        number: "Art. 6",
        summary:
          "No person may carry out insurance business without a licence from BNR.",
      },
      {
        number: "Art. 20",
        summary:
          "Every private insurer must maintain minimum paid-up share capital as set by regulation at all times. All shares must be fully paid before commencing business.",
      },
      {
        number: "Art. 21",
        summary:
          "Insurers must at all times meet solvency and capital adequacy requirements as set by regulation.",
      },
      {
        number: "Art. 22",
        summary:
          "Insurers must at all times maintain a minimum solvency margin as determined by regulation.",
      },
      {
        number: "Art. 25",
        summary:
          "If solvency margin falls below prescribed level: insurer must IMMEDIATELY notify BNR in writing, stating remedial measures taken.",
      },
      {
        number: "Art. 27",
        summary:
          "Insurers must maintain appropriate and adequate technical provisions for each class of insurance business at all times.",
      },
      {
        number: "Art. 35",
        summary:
          "Audited financial statements must be submitted to BNR within 3 months after end of financial year.",
      },
      {
        number: "Art. 37",
        summary:
          "Every insurer must appoint an external auditor from BNR's accredited list.",
      },
      {
        number: "Art. 46",
        summary: "Insurers must establish a risk management framework.",
      },
      {
        number: "Art. 50",
        summary:
          "Board of Directors requirements and fit-and-proper obligations apply to all insurers.",
      },
      {
        number: "Art. 183",
        summary:
          "Unlicensed insurance business / unlicensed intermediary activity / falsely claiming to be an insurer: 3–5 years imprisonment + FRW 7,000,000–10,000,000 fine, or one of these penalties.",
      },
      {
        number: "Art. 185",
        summary:
          "Unclaimed insurance funds after 10 years: insurer must notify last known address and publish notice. If no response within 3 months, funds treated as unclaimed.",
      },
      {
        number: "Art. 191",
        summary:
          "Entered into force on date of publication: 02 August 2021. All insurers given 18 months transitional period to comply.",
      },
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

  // ── 9. BANKING LAW ──────────────────────────────────────────────────────
  {
    id: "banking-law",
    name: "Banking Law",
    shortName: "Banking Law",
    number: "No. 044/2024",
    year: 2024,
    category: "Financial Services",
    regulator: "BNR (National Bank of Rwanda)",
    status: "verified",
    description:
      "Governs the organisation, management, and supervision of banks operating in Rwanda. Repeals Law No. 47/2017.",
    articles: [
      {
        number: "Art. 5",
        summary:
          "No person may receive public deposits without BNR authorisation.",
      },
      {
        number: "Art. 7",
        summary:
          "Banking licence granted, suspended, or revoked exclusively by BNR.",
      },
      {
        number: "Art. 8",
        summary:
          "Licensing requires: adequate paid-up capital, disclosed beneficial ownership, fit-and-proper board and management, sound financial projections, and transparent governance structure.",
      },
      {
        number: "Art. 14",
        summary:
          "Licence revoked if: bank inactive for 6 months, licence obtained by fraud, AML/CFT violations, activities compromise financial sector soundness, or non-compliance with banking laws.",
      },
      {
        number: "Art. 17",
        summary:
          "Capital adequacy ratio maintained at all times as set by BNR regulation; capital buffer requirements also set by BNR regulation.",
      },
      {
        number: "Art. 20",
        summary:
          "No person (including related parties) may hold more than 25% of bank shares without BNR authorisation, unless a reputable financial institution, public company, or foreign government.",
      },
      {
        number: "Art. 21",
        summary:
          "Prior BNR authorisation required before acquiring or transferring any significant or controlling interest in a bank. Unauthorised acquisitions are void.",
      },
      {
        number: "Art. 28",
        summary:
          "No bank may declare or pay dividends until: all capitalised expenses written off, capital buffers considered, and adequate provisions made for non-performing loans — to BNR's satisfaction.",
      },
      {
        number: "Art. 29",
        summary:
          "All transactions with bank-related parties must be on same terms as offered to the general public.",
      },
      {
        number: "Art. 42",
        summary:
          "Board members and senior management require BNR approval (fit and proper assessment).",
      },
      {
        number: "Art. 47",
        summary:
          "Submission and disclosure of financial statements and other information at frequency determined by BNR.",
      },
      {
        number: "Art. 59",
        summary:
          "Bank must submit all documents, financial statements, and information to BNR at frequency BNR determines. Professional secrecy cannot be invoked against BNR.",
      },
      {
        number: "Art. 61",
        summary:
          "Every bank must develop and submit a recovery plan to BNR for approval.",
      },
      {
        number: "Art. 101",
        summary:
          "Unauthorised use of the term 'Bank' or derivatives: 1–3 years imprisonment + FRW 30M–50M fine (individual); FRW 70M–100M fine (corporate). Doubled on recidivism.",
      },
      {
        number: "Art. 102",
        summary:
          "Unlicensed banking activities or unauthorised deposit-taking: 3–5 years imprisonment + FRW 30M–50M fine (individual); FRW 70M–100M fine (corporate). Doubled on recidivism.",
      },
      {
        number: "Art. 103",
        summary:
          "Providing false information to BNR, obstructing supervision, or serving on board/management without BNR approval: 6 months–2 years imprisonment + FRW 40M–60M fine. Doubled on recidivism.",
      },
      {
        number: "Art. 114",
        summary:
          "Entered into force on date of publication in Official Gazette: 10 June 2024.",
      },
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

  // ── 10. COMPETITION & CONSUMER PROTECTION ───────────────────────────────
  {
    id: "competition-consumer-protection",
    name: "Competition and Consumer Protection Law",
    shortName: "Competition & Consumer Protection",
    number: "No. 36/2012 of 21/09/2012",
    year: 2012,
    category: "Corporate & Investment",
    regulator: "Competition and Consumer Protection Regulatory Body",
    status: "verified",
    description:
      "Encourages competition by prohibiting anti-competitive practices; promotes and protects consumer interests. Applies to all economic activity carried out or having effect within Rwanda, including State entities where commercial activities are open to private enterprise.",
    articles: [
      {
        number: "Art. 6",
        summary:
          "All agreements, decisions and concerted practices whose object is to undermine, prevent, restrict or distort competition are prohibited.",
      },
      {
        number: "Art. 7",
        summary:
          "Prohibited practices: price-fixing; limiting production, markets, or investment; market/supply sharing; discriminatory conditions; tying arrangements; collusive tendering; bid-rigging; allocation of quotas; collective refusal to supply. Such agreements are null and void.",
      },
      {
        number: "Art. 9",
        summary:
          "Abuse of dominant position: a dominant enterprise harms competition if it restricts market entry, eliminates competitors, imposes unfair prices, limits production to consumer prejudice, or ties unrelated obligations to agreements.",
      },
      {
        number: "Art. 10",
        summary:
          "Resale price maintenance prohibited. Supplier may recommend a minimum resale price but it is advisory only, not binding.",
      },
      {
        number: "Art. 15",
        summary:
          "Merger occurs when two or more enterprises join or one acquires another's assets or shares directly or indirectly.",
      },
      {
        number: "Art. 16",
        summary:
          "Merger must be notified to Regulatory Body if combined annual turnover meets or exceeds threshold set by the Regulatory Body.",
      },
      {
        number: "Art. 17",
        summary:
          "Notifiable merger must be notified within 30 days of the parties' decision to merge. Merger notified contrary to this Law is null and void. Failure to notify may result in administrative sanctions.",
      },
      {
        number: "Art. 18",
        summary:
          "Parties must not implement merger until approved by Regulatory Body. Review period: 30 working days, extendable by 15 additional working days.",
      },
      {
        number: "Art. 33",
        summary:
          "Seller must provide consumer with correct and necessary information on product/service characteristics and contract conditions no later than time of contract conclusion.",
      },
      {
        number: "Art. 35",
        summary:
          "All enterprises must display prices to consumers in Rwandan francs, Arabic numerals, legible characters, all taxes inclusive.",
      },
      {
        number: "Art. 43",
        summary:
          "Seller liable for lack of conformity appearing within 1 year of delivery of durable goods. Consumer must notify seller of non-conformity within 15 days of discovering it.",
      },
      {
        number: "Art. 52",
        summary:
          "Regulatory Body may impose administrative fines of 5% to 10% of the enterprise's annual turnover of the preceding fiscal year for violations.",
      },
      {
        number: "Art. 56",
        summary:
          "Enterprise affected by Regulatory Body decision may appeal to competent court within 30 days of notification.",
      },
    ],
    penalties: [
      "Administrative fine of 5%–10% of annual turnover of the preceding fiscal year (Art. 52) — general violations",
      "Administrative fine of RWF 20,000–5,000,000 for enterprises unable to disclose annual turnover (Art. 55)",
      "Illegal merger: order to sell acquired shares/interests/assets; declaration of merger agreement void (Art. 53)",
      "Abuse of dominant position (recidivist): order to sell part of enterprise's shares (Art. 54)",
      "Null and void: anti-competitive agreements (Art. 7); mergers not notified per this Law (Art. 17)",
    ],
    keyDeadlines: [
      "30 days — notify Regulatory Body of notifiable merger from date of decision to merge (Art. 17)",
      "30 working days — Regulatory Body initial merger review period from complete notification (Art. 18)",
      "15 working days — maximum extension of merger review period (Art. 18)",
      "90 days — Regulatory Body must complete investigation from date of request (Art. 29)",
      "20 days — enterprise response period to investigation findings notification (Art. 32)",
      "15 days — consumer must notify seller of non-conformity from date of discovery (Art. 43)",
      "1 year — seller's liability for lack of conformity in durable goods from delivery (Art. 43)",
      "30 days — enterprise appeal of Regulatory Body decision to competent court from notification (Art. 56)",
    ],
    keyObligations: [
      "Refrain from anti-competitive agreements, price-fixing, bid-rigging, and market allocation (Art. 7)",
      "Do not abuse a dominant market position (Art. 9)",
      "Notify Regulatory Body of notifiable mergers within 30 days of decision to merge (Art. 17)",
      "Do not implement a notifiable merger until approved by Regulatory Body (Art. 18)",
      "Display prices in Rwandan francs, all taxes inclusive (Art. 35)",
      "Provide consumers with accurate product and contract information at point of sale (Art. 33)",
      "Ensure delivered goods conform to contract; remedy non-conformity within prescribed periods (Art. 43)",
    ],
  },

  // ── 11. ENVIRONMENT LAW ─────────────────────────────────────────────────
  {
    id: "environment",
    name: "Environment Law",
    shortName: "Environment Law",
    number: "No. 48/2018 of 13/08/2018",
    year: 2018,
    category: "Environment & Regulatory",
    regulator: "Rwanda Environment Management Authority (REMA)",
    status: "verified",
    description:
      "Governs environmental protection, conservation and promotion in Rwanda. Establishes EIA requirements, pollution controls, waste management obligations, biodiversity protection, and climate change responsibilities.",
    articles: [
      {
        number: "Art. 3",
        summary:
          "Precautionary principle: activities suspected to have negative environmental impacts must not be implemented until scientific assessment rules out potential harm.",
      },
      {
        number: "Art. 5",
        summary:
          "Polluter pays principle: any person whose activities cause adverse environmental effects is punished or ordered to make restitution or rehabilitate the damaged environment.",
      },
      {
        number: "Art. 18",
        summary:
          "No person may discard solid waste in an inappropriate place. Solid waste must be sorted, collected, transported, and disposed of in an appropriate landfill or processing facility.",
      },
      {
        number: "Art. 19",
        summary:
          "All waste from hospitals, health centres, research laboratories, industries, and other hazardous sources must be collected, treated, and managed in a manner that does not degrade the environment.",
      },
      {
        number: "Art. 20",
        summary:
          "All electronic waste must be collected, treated, and processed in an environmentally safe manner. No person may carry out collection, transportation, trading, import, or dismantling of electronic waste without authorisation.",
      },
      {
        number: "Art. 30",
        summary:
          "EIA is mandatory before any listed project may commence. List of projects requiring EIA established by Ministerial Order.",
      },
      {
        number: "Art. 31",
        summary:
          "Every policy, strategy, plan and programme must undergo a Strategic Environmental Assessment (SEA). Procedures determined by Ministerial Order.",
      },
      {
        number: "Art. 32",
        summary:
          "Every project with significant potential environmental impact must undergo an environmental audit both during and after implementation.",
      },
      {
        number: "Art. 42",
        summary:
          "Prohibited in wetlands and protected areas: dumping waste in streams/rivers/lakes; damaging water quality; building within prohibited setback distances; draining swamps without authorisation; any activity in protected swamps except research/science.",
      },
      {
        number: "Art. 46",
        summary:
          "Implementing a project requiring EIA without obtaining it: suspension of activities or closure; order to rehabilitate; administrative fine of 2% of total project cost.",
      },
      {
        number: "Art. 56",
        summary:
          "Trading, importing, managing toxic waste in a harmful manner: upon conviction, imprisonment of 7–10 years AND fine of RWF 100,000,000–200,000,000.",
      },
    ],
    penalties: [
      "RWF 10,000 — human waste in inappropriate place (Art. 51)",
      "RWF 25,000 — unlawful burning of domestic waste, crop residues, tyres or plastics (Art. 52)",
      "RWF 50,000 + removal/rehabilitation — dumping waste in unauthorised area (Art. 50)",
      "RWF 500,000 + demolition — violation of required setback distances from water bodies/wetlands (Art. 49)",
      "RWF 500,000 — noise pollution (Art. 53)",
      "RWF 500,000 — hindering inspection (Art. 54)",
      "RWF 3,000,000 + rehabilitation — washing minerals in streams/lakes; draining/diverting rivers without authorisation (Art. 47)",
      "RWF 5,000,000 + rehabilitation — compacting or altering wetland nature (Art. 48)",
      "2% of total project cost + suspension/closure + rehabilitation — implementing project without required EIA (Art. 46)",
      "7–10 years imprisonment + RWF 100,000,000–200,000,000 — trading/importing/managing toxic waste harmfully (Art. 56)",
      "5–7 years imprisonment + RWF 5,000,000–7,000,000 — hunting/selling/injuring/killing protected animal species (Art. 58)",
      "3–5 years imprisonment + RWF 5,000,000–10,000,000 — importing waste without authorisation (Art. 57)",
      "3–5 years imprisonment + RWF 1,000,000–3,000,000 — destroying/uprooting protected plants (Art. 59)",
      "All administrative fines paid to FONERWA (National Fund for Environment) (Art. 55)",
    ],
    keyDeadlines: [
      "EIA must be completed BEFORE project launch — failure triggers 2% fine + suspension/closure (Art. 46)",
      "SEA required for every policy, strategy, plan and programme before implementation (Art. 31)",
      "Environmental audit required during AND after project implementation for significant-impact projects (Art. 32)",
      "Setback distances (absolute): 10m from streams/rivers for agricultural installations; 50m from lakes; 20m from swamp boundaries for construction; 60m from streams/rivers for livestock kraals/slaughterhouses (Arts. 42, 49)",
    ],
    keyObligations: [
      "Obtain EIA approval before commencing any listed project (Art. 30)",
      "Conduct Strategic Environmental Assessment for all policies, plans, and programmes (Art. 31)",
      "Manage solid waste through appropriate sorting, collection, and disposal (Art. 18)",
      "Manage hazardous and electronic waste through authorised channels only (Arts. 19–20)",
      "Observe all setback distances from water bodies and protected wetlands (Art. 42)",
      "Comply with noise emission standards (Art. 43)",
      "Rehabilitate all areas damaged by operations (Arts. 47–49)",
      "Cooperate fully with REMA inspection officers (Art. 54)",
    ],
  },

  // ── 12. PUBLIC PROCUREMENT LAW ──────────────────────────────────────────
  {
    id: "public-procurement",
    name: "Public Procurement Law",
    shortName: "Public Procurement",
    number: "No. 031/2022 of 21/11/2022",
    year: 2022,
    category: "Procurement & Public Law",
    regulator: "Rwanda Public Procurement Authority (RPPA)",
    status: "verified",
    description:
      "Governs public procurement in Rwanda. Establishes procedures for award of public contracts, rights and obligations of bidders, sanctions for misconduct, and appeals through the Independent Review Panel.",
    articles: [
      {
        number: "Art. 6",
        summary:
          "Fundamental principles: transparency; competition; economy; professionalism; fairness and inclusiveness; efficiency and sustainability; value for money; accountability.",
      },
      {
        number: "Art. 16",
        summary:
          "Each procuring entity must prepare and submit annual procurement plan to Ministry and RPPA not later than 31 July of each year.",
      },
      {
        number: "Art. 31",
        summary:
          "National open tender: minimum 21 calendar days bid preparation. International open tender: minimum 30 calendar days.",
      },
      {
        number: "Art. 35",
        summary:
          "Bid validity period: maximum 120 days from bids opening date. Extendable once by up to 60 days.",
      },
      {
        number: "Art. 46",
        summary:
          "Procuring entity simultaneously notifies successful bidder and all unsuccessful bidders. Bidders have 7 days to lodge a complaint before contract signing.",
      },
      {
        number: "Art. 48",
        summary:
          "Review request must be lodged with procuring entity within 7 days of occurrence of grounds for review. Entity must issue written decision within 7 days.",
      },
      {
        number: "Art. 49",
        summary:
          "Appeal to Independent Review Panel must be filed within 7 days of entity's decision. Panel decides within 15 days; extendable once by 15 days. Panel decisions are binding.",
      },
      {
        number: "Art. 52",
        summary:
          "Before signing contract, procuring entity verifies successful bidder has no unsettled administrative fines and requests beneficial ownership disclosure.",
      },
      {
        number: "Art. 120",
        summary:
          "Contractor and supervision consultant are jointly liable for structural defects for 10 years from date of definitive acceptance of works.",
      },
      {
        number: "Art. 145",
        summary:
          "Poor execution or non-execution without cause: debarment 1 year + 5% of contract value + contract termination.",
      },
      {
        number: "Art. 146",
        summary:
          "False information, fraud, collusion, causing State loss: 5% of bidding price + contract termination.",
      },
      {
        number: "Art. 148",
        summary:
          "Permanent debarment for: using false contract for bank loan; bidding while debarred; evading debarment through name change or new company.",
      },
      {
        number: "Art. 156",
        summary:
          "Delay in contract execution: daily penalty of 1‰ of total contract value per day, capped at 5% of contract value.",
      },
      {
        number: "Art. 163",
        summary:
          "Illegal awarding of public procurement: 5–7 years imprisonment + FRW 2,000,000–5,000,000.",
      },
      {
        number: "Art. 164",
        summary:
          "Collusion in public procurement: 5–7 years imprisonment + FRW 2,000,000–5,000,000.",
      },
    ],
    penalties: [
      "Debarment 1 year + 5% of contract value + contract termination — poor execution, non-execution without cause (Art. 145)",
      "5% of bidding price + contract termination — false information, fraud, collusion, causing State loss (Art. 146)",
      "Double fine and double debarment period — recidivism (Art. 147)",
      "Permanent debarment — using false contract for bank loan; bidding while debarred; evading debarment (Art. 148)",
      "Daily penalty of 1‰ of total contract value per day, capped at 5% — delay in execution (Art. 156)",
      "Daily penalty of 1‰ of defective item value (first 15 days), escalating — delay in correcting defects (Art. 157)",
      "Suspension without pay up to 3 months — general procurement misconduct by procuring entity staff (Art. 160)",
      "Dismissal — awarding without budget, without required study, without signed contract (Art. 160)",
      "5–7 years imprisonment + FRW 2,000,000–5,000,000 — illegal award; collusion (Arts. 163, 164)",
      "5–7 years imprisonment + 50% of State losses — unjustified advantages during contract execution (Art. 165)",
      "No new public contract while any administrative fine remains unpaid (Arts. 145, 146)",
    ],
    keyDeadlines: [
      "31 July — annual procurement plan submitted to Ministry and RPPA (Art. 16)",
      "21 calendar days minimum — bid preparation for national open tender (Art. 31)",
      "30 calendar days minimum — bid preparation for international open tender (Art. 31)",
      "120 days maximum — bid validity period from bids opening date (Art. 35)",
      "7 days — procuring entity must return bid security after cancellation or contract signing (Art. 32)",
      "7 days — complaint window for bidders after award notification, before contract signing (Art. 46)",
      "7 days — deadline to lodge review request with procuring entity from occurrence of grounds (Art. 48)",
      "7 days — procuring entity must issue written review decision (Art. 48)",
      "7 days — bidder must appeal to Independent Review Panel from entity's review decision (Art. 48)",
      "15 days — Independent Review Panel must issue decision; extendable once by 15 days (Art. 49)",
      "45 days — RPPA must issue administrative sanction decision from date of hearing (Art. 153)",
      "15 days — successful bidder must correct defects or replace non-conforming supplies from request (Art. 157)",
      "10 years — contractor and supervision consultant accountability for structural defects from definitive acceptance (Art. 120)",
    ],
    keyObligations: [
      "Conduct all procurement through the e-procurement system (Art. 4)",
      "Submit annual procurement plan to RPPA by 31 July (Art. 16)",
      "Confirm budget availability before launching any tender (Art. 18)",
      "Disclose beneficial ownership before contract signing (Art. 52)",
      "Provide performance security before contract signing (Art. 60)",
      "Comply with all applicable laws during contract execution including environmental, labour, and safety regulations (Art. 89)",
      "Pay workers in accordance with applicable labour laws (Art. 90)",
      "Report any procurement misconduct to RPPA (Art. 115)",
    ],
  },

  // ── 13. AML/CFT LAW ─────────────────────────────────────────────────────
  {
    id: "aml_cft_75_2019",
    name: "AML/CFT Law",
    shortName: "AML/CFT Law",
    number: "Nº 75/2019 of 29/01/2020",
    year: 2020,
    category: "Financial Services",
    regulator:
      "Financial Intelligence Centre (FIC); BNR and other sector supervisory authorities",
    status: "verified",
    description:
      "Governs prevention and punishment of money laundering, financing of terrorism, and financing of proliferation of weapons of mass destruction in Rwanda. Applies to all financial institutions, telecom money transfer providers, lawyers, accountants, real estate agents, and other designated reporting persons.",
    articles: [
      {
        number: "Art. 7",
        summary:
          "Reporting persons: 12 categories including National Bank of Rwanda, financial institutions, telecom companies providing money transfer, private legal practitioners (non-litigation activities), auditors/accountants/tax advisors, real estate agents, dealers in precious metals/stones, casinos and national lotteries, NGOs, and trust and company service providers.",
      },
      {
        number: "Art. 8",
        summary:
          "Reporting persons must: identify, assess, monitor, manage and mitigate AML/CFT risks using a risk-based approach; develop and maintain AML programmes including policies, compliance monitoring, staff training, and permanent audit.",
      },
      {
        number: "Art. 9",
        summary:
          "Triggers for client identification (CDD): before establishing a business relationship; on occasional transactions above the Centre's threshold; on wire transfers without originator information; on suspicion; on doubt about prior data; and ongoing due diligence on existing relationships.",
      },
      {
        number: "Art. 12",
        summary:
          "Where beneficial ownership doubt persists after verification, a suspicious transaction report must be submitted to the Centre within 24 hours of receiving the client.",
      },
      {
        number: "Art. 13",
        summary:
          "Enhanced due diligence for Politically Exposed Persons (PEPs): obtain senior management approval before engaging; take measures to establish source of funds; conduct enhanced ongoing monitoring.",
      },
      {
        number: "Art. 17",
        summary:
          "Suspicious transaction reporting (STR): whenever there are reasonable grounds to suspect links to money laundering or terrorism financing, the reporting person must immediately report to the Centre.",
      },
      {
        number: "Art. 18",
        summary:
          "Cross-border cash declaration: any person entering or leaving Rwanda with cash or bearer negotiable instruments above the Centre's threshold must declare them.",
      },
      {
        number: "Art. 19",
        summary:
          "Confidentiality (tipping-off prohibition): reporting persons must not disclose to clients or third parties that a suspicious transaction report has been submitted.",
      },
      {
        number: "Art. 20",
        summary:
          "Record-keeping: all client identification data, transaction records, and analysis findings must be retained for at least 10 years from end of business relationship or completion of transaction.",
      },
      {
        number: "Art. 25",
        summary:
          "Prohibition of shell banks and anonymous accounts: reporting persons must not open or maintain anonymous, digitised, or fictitious-name accounts.",
      },
      {
        number: "Art. 29",
        summary:
          "Money laundering offence and penalty: 7–10 years imprisonment plus fine of 3–5 times the amount laundered.",
      },
      {
        number: "Art. 30",
        summary:
          "Terrorism financing offence and penalty: 20–25 years imprisonment plus fine of 3–5 times the amount given.",
      },
      {
        number: "Art. 35",
        summary:
          "Ancillary offences: tipping-off, record destruction, false identification, failing to submit STR, cash payments above threshold, illegal transfers: 3–5 years imprisonment + FRW 3,000,000–5,000,000.",
      },
    ],
    penalties: [
      "Money laundering (Art. 29): 7–10 years imprisonment + fine of 3–5× the laundered amount",
      "Facilitating terrorist access to laundered funds (Art. 29 para. 2): 10–15 years imprisonment",
      "Terrorism financing (Art. 30): 20–25 years imprisonment + fine of 3–5× the amount given",
      "WMD proliferation financing (Art. 31): 15–20 years imprisonment + fine of 5–10× the amount given",
      "Legal entity conviction (Art. 32): fine of 10–20× the laundered/contributed amount; conviction published in media",
      "Aggravating circumstances (Art. 33): all penalties doubled for organised crime, professional offending, or recidivism",
      "Ancillary offences — tipping off, record destruction, false ID, STR failure (Art. 35): 3–5 years + FRW 3,000,000–5,000,000",
      "Confiscation (Art. 36): mandatory confiscation of all crime-derived assets and convicted person's assets of unexplained origin",
    ],
    keyDeadlines: [
      "STR submission (Art. 17): immediately upon reasonable grounds of suspicion arising",
      "Suspected client report (Art. 12): within 24 hours of receiving client where beneficial ownership doubt persists",
      "Centre freeze/seizure duration (Art. 6): maximum 3 working days; referral to investigation authority if suspicion is founded",
      "Record retention (Art. 20): minimum 10 years from end of business relationship or completion of transaction",
      "Cross-border cash declaration (Art. 18): at time of entry or exit when carrying amounts above the Centre's threshold",
    ],
    keyObligations: [
      "Implement risk-based AML programme including policies, compliance monitoring, staff training, and audit (Art. 8)",
      "Conduct customer due diligence (CDD) at all prescribed trigger points (Art. 9)",
      "Apply enhanced due diligence for Politically Exposed Persons (Art. 13)",
      "Submit suspicious transaction reports immediately upon reasonable grounds of suspicion (Art. 17)",
      "Observe tipping-off prohibition — never disclose that an STR has been filed (Art. 19)",
      "Retain all client and transaction records for minimum 10 years (Art. 20)",
      "Do not open or maintain anonymous, fictitious-name, or shell bank accounts (Art. 25)",
      "Declare cross-border cash movements above threshold to competent authority (Art. 18)",
    ],
  },

  // ── 14. ICT LAW ─────────────────────────────────────────────────────────
  {
    id: "ict_law_24_2016",
    name: "Information and Communication Technologies Law",
    shortName: "ICT Law",
    number: "Nº 24/2016 of 18/06/2016",
    year: 2016,
    category: "Data & Technology",
    regulator:
      "Rwanda Utilities Regulatory Authority (RURA); Ministry responsible for ICT (policy)",
    status: "verified",
    description:
      "Establishes the framework for ICT policy and regulation in Rwanda. Governs licensing of electronic communications, information society services, broadcasting, and postal services. Establishes consumer rights, tariff regulation, spectrum management, and interconnection obligations.",
    articles: [
      {
        number: "Art. 10",
        summary:
          "RURA is an independent body responsible for licensing, regulation, and supervision of electronic communications, information society services, broadcasting, and postal services. Issues licences, monitors compliance, settles disputes, and imposes sanctions.",
      },
      {
        number: "Art. 39",
        summary:
          "Three types of licences: individual licences (specific obligations, individually negotiated); standard licences (general regulations); and general authorisations (right to operate on meeting published requirements).",
      },
      {
        number: "Art. 41",
        summary:
          "All operators with individual licences must provide interconnection to other licensed operators on reasonable, non-discriminatory terms.",
      },
      {
        number: "Art. 42",
        summary:
          "Any person intending to build an electronic communications network or provide services must submit a written application to RURA.",
      },
      {
        number: "Art. 47",
        summary:
          "Radio communication licences are valid for up to five years, subject to renewal. Operating after expiry is an offence.",
      },
      {
        number: "Art. 51",
        summary:
          "RURA may suspend, cancel, or revoke a licence for serious breach of licence conditions, failure to pay fees, insolvency, or national security grounds. Licensee must be given notice and opportunity to rectify before revocation.",
      },
      {
        number: "Art. 120",
        summary:
          "Licensed service providers must prepare standard subscriber contracts consistent with RURA's general regulations.",
      },
      {
        number: "Art. 210",
        summary:
          "Every licensed electronic communications service provider must register the full personal details of all subscribers and SIM card holders.",
      },
      {
        number: "Art. 267",
        summary:
          "Operating with expired licence: daily fine of FRW 200,000–3,000,000 per day.",
      },
      {
        number: "Art. 268",
        summary:
          "Failure to notify change of ownership: FRW 5,000,000–50,000,000.",
      },
      {
        number: "Art. 273",
        summary:
          "Unlawful radio spectrum use: FRW 500,000–5,000,000 initial fine; FRW 500,000–10,000,000 daily for continued unlawful use.",
      },
    ],
    penalties: [
      "Operating electronic communications without licence (Art. 265): administrative fine + suspension/prohibition of operations",
      "Operating with expired licence (Art. 267): daily fine of FRW 200,000–3,000,000 per day",
      "Failure to notify change of ownership (Art. 268): FRW 5,000,000–50,000,000",
      "Non-compliance with enforcement notice (Art. 269): FRW 500,000–15,000,000 per day",
      "Unlawful restriction of service access (Art. 270): FRW 2,000,000–10,000,000 per day",
      "Tariff control non-compliance — dominant operator (Art. 271): FRW 5,000,000–15,000,000 per day",
      "Equipment installed/used without licence (Art. 272): impoundment + FRW 500,000–15,000,000",
      "Unlawful radio spectrum use (Art. 273): FRW 500,000–5,000,000 initial; FRW 500,000–10,000,000 daily continued",
      "Information society services without licence (Art. 282): FRW 1,000,000–5,000,000 + suspension",
      "Licence revocation (Art. 281): available for significant persistent breach after one month rectification notice",
    ],
    keyDeadlines: [
      "Licence renewal: must be renewed before expiry; operating post-expiry triggers daily fines from day one (Art. 267)",
      "Licence transfer: prior written authorisation from RURA required before any transfer (Arts. 49–50)",
      "Change of ownership notification: must notify RURA promptly; failure attracts FRW 5,000,000–50,000,000 (Art. 268)",
      "Rectification period after enforcement notice: 1 month before licence revocation is possible (Art. 281)",
      "RURA processing timeframes: published by RURA for licence applications and regulatory transactions (Art. 26)",
    ],
    keyObligations: [
      "Obtain appropriate RURA licence before operating any electronic communications network or service (Art. 42)",
      "Renew licences before expiry; operating post-expiry is an offence attracting daily fines (Art. 267)",
      "Notify RURA before any transfer of licence (Art. 49–50)",
      "Provide interconnection to other licensed operators on reasonable, non-discriminatory terms (Art. 41)",
      "Register full personal details of all subscribers and SIM card holders (Art. 210)",
      "Comply with tariff control schemes if designated as a dominant operator (Art. 104–106)",
      "Maintain appropriate technical and organisational security measures for networks and services (Art. 208)",
      "Implement standard subscriber contracts consistent with RURA regulations (Art. 120)",
    ],
  },

  // ── 15. CAPITAL MARKETS LAW ─────────────────────────────────────────────
  {
    id: "capital_markets_01_2011",
    name: "Capital Market Law",
    shortName: "Capital Markets Law",
    number: "Nº 01/2011 of 10/02/2011 (as modified by Nº 45/2018 of 13/08/2018)",
    year: 2011,
    category: "Financial Services",
    regulator:
      "Capital Market Authority (CMA); Capital Market Independent Review Panel",
    status: "verified",
    description:
      "Regulates the capital market in Rwanda. Establishes mechanisms for controlling and supervising capital market activities to maintain proper standards of conduct and acceptable practices. Governs licensing of brokers, dealers, investment advisers, securities exchanges, and clearing houses.",
    articles: [
      {
        number: "Art. 6",
        summary:
          "No person may carry out or purport to carry out capital market business in Rwanda unless licensed, approved, or exempted under this Law.",
      },
      {
        number: "Art. 9",
        summary:
          "CMA may withdraw or suspend any licence or approval if the person is not fit and proper for capital market business, or has violated this Law or its regulations, or provided false or misleading information.",
      },
      {
        number: "Art. 19",
        summary:
          "CMA issues statements of principles on ethics and financial standing. Failure to comply gives rise to disciplinary actions including written warning, fine, court injunction, withdrawal/suspension of licence, or disqualification from the profession.",
      },
      {
        number: "Art. 34",
        summary:
          "CMA exercises prohibition and requirement powers by written notice. Notices must state reasons and inform the person of their 15-day right to appeal to the Independent Review Panel.",
      },
      {
        number: "Art. 40",
        summary:
          "Inside information: price-sensitive information relating to capital market instruments which has not been made public and which, if made public, would likely affect the price of capital market instruments.",
      },
      {
        number: "Art. 42",
        summary:
          "Insider dealing: using insider information to deal in capital market instruments, encouraging another to deal, or disclosing information enabling price-sensitive dealings.",
      },
      {
        number: "Art. 46",
        summary:
          "Market abuse: behaviour that creates a false or misleading impression as to supply, demand, or price of capital market instruments, or that distorts the market. CMA must issue regulations to prevent market abuse.",
      },
      {
        number: "Art. 53",
        summary:
          "No person in Rwanda may offer capital market instruments for subscription or sale to the public unless a duly signed prospectus has been published and a copy filed with CMA for prior approval.",
      },
      {
        number: "Art. 63",
        summary:
          "A Capital Market Independent Review Panel is established to hear appeals against CMA decisions.",
      },
      {
        number: "Art. 64",
        summary:
          "Operating without licence or approval: 1–2 years imprisonment and/or FRW 30,000,000–50,000,000 fine (as amended by Law Nº 45/2018).",
      },
      {
        number: "Art. 69",
        summary:
          "Insider dealing and market abuse: 6 months–2 years imprisonment and/or FRW 10,000,000–100,000,000 fine.",
      },
    ],
    penalties: [
      "Operating without licence/approval: 1–2 years imprisonment and/or FRW 30,000,000–50,000,000 (Art. 64, as amended by Law 45/2018)",
      "Employing a disqualified person: FRW 3,000,000–5,000,000 (Art. 65, as amended)",
      "Misleading practices and statements: 6 months–2 years imprisonment and/or FRW 10,000,000–50,000,000 (Art. 66)",
      "Non-compliance with investigation requirements: 6 months–2 years + FRW 5,000,000 + all investigation costs (Art. 67)",
      "Obstruction of inspection: 6 months–2 years and/or FRW 20,000,000 (Art. 68)",
      "Insider dealing and market abuse: 6 months–2 years and/or FRW 10,000,000–100,000,000 (Art. 69)",
      "False statements for licensing/approval: 6 months–2 years and/or FRW 10,000,000 (Art. 71)",
      "Disciplinary sanctions (Art. 19): written warning, fine, court injunction, withdrawal/suspension of licence, or disqualification",
    ],
    keyDeadlines: [
      "Appeal to Independent Review Panel: 15 days from receipt of a CMA notice (Art. 34)",
      "CMA response to application for review/rescission of prohibition: within 30 working days (Art. 34)",
      "Prospectus: must be filed with CMA for prior approval before any public offer of capital market instruments (Art. 54)",
      "Exhaust Independent Review Panel before court appeal (Art. 63)",
    ],
    keyObligations: [
      "Obtain CMA licence or approval before carrying out any capital market business (Art. 6)",
      "Comply with CMA statements of principles on ethics and financial standing (Art. 19)",
      "File prospectus with CMA for prior approval before any public offer of capital market instruments (Art. 53–54)",
      "Do not engage in insider dealing or market abuse (Arts. 42, 46)",
      "Appoint auditor meeting CMA-specified conditions (Art. 59)",
      "Cooperate fully with CMA inspections and investigations (Arts. 37–38)",
      "Maintain accurate register and comply with all CMA information requests (Arts. 36, 47)",
    ],
  },

  // ── 16. LAND LAW ────────────────────────────────────────────────────────
  {
    id: "land_law_27_2021",
    name: "Land Law",
    shortName: "Land Law",
    number: "No. 27/2021 of 10/06/2021",
    year: 2021,
    category: "Environment & Regulatory",
    regulator:
      "Ministry of Environment / Rwanda Land Management and Use Authority (RLMUA); City of Kigali and Districts at decentralised level; Registrar of Land Titles",
    status: "verified",
    description:
      "Determines modalities of acquisition, registration, allocation, possession, transfer, management and use of land in Rwanda. Repeals Law No. 43/2013 and Law No. 24/2012.",
    articles: [
      {
        number: "Art. 3",
        summary:
          "Land is the common heritage of all Rwandans. The State holds absolute management power over all land within national boundaries; only the State may grant rights of tenure and use.",
      },
      {
        number: "Art. 6",
        summary:
          "Rwandan nationals are entitled to freehold tenure. Private individual freehold cannot exceed 2 hectares per person unless a Ministerial Order provides otherwise.",
      },
      {
        number: "Art. 10",
        summary:
          "Emphyteutic lease and concession cannot exceed 99 years and are renewable. A Rwandan's emphyteutic lease renews automatically on expiry without application.",
      },
      {
        number: "Art. 16",
        summary:
          "A foreigner may obtain emphyteutic lease or land concession but only for investment purposes.",
      },
      {
        number: "Art. 17",
        summary:
          "Every person — and the State — has an obligation to register their land. A Ministerial Order sets registration modalities.",
      },
      {
        number: "Art. 23",
        summary:
          "Transfer contracts must be in writing, signed by both parties, and approved and witnessed by a land notary. Electronic contracts using digital signatures are also valid.",
      },
      {
        number: "Art. 24",
        summary:
          "A transfer of land rights is only valid upon its registration in the land register.",
      },
      {
        number: "Art. 36",
        summary:
          "Public institutions and decentralised entities must register land acquired by expropriation, donation, purchase, or other means within 60 days of acquisition.",
      },
      {
        number: "Art. 43",
        summary:
          "All rights of ownership and control of natural resources on, under or above any land in Rwanda are vested exclusively in the State.",
      },
      {
        number: "Art. 61",
        summary:
          "All persons and organs using land must comply with the master plan. Any permit contrary to the master plan is null and void.",
      },
      {
        number: "Art. 73",
        summary:
          "Land boundary disputes: submitted to District/City of Kigali which must decide within 30 days; appeal to national land institution within 30 days; institution must issue decision within 45 days.",
      },
      {
        number: "Art. 79",
        summary:
          "Unlawful use of a land title: 5–7 years imprisonment and/or fine of 2–4 times the value of the concerned land.",
      },
      {
        number: "Art. 82",
        summary:
          "Self-allocation of any State land right: 3–6 months imprisonment and/or fine of 3–5 times the value of the land.",
      },
    ],
    penalties: [
      "Art. 75 — Deliberate infringement of land title processing/registry regulations (registrar/official): FRW 500,000–1,000,000",
      "Art. 76 — Non-compliance with land use master plan (individual): FRW 1,000,000–3,000,000 + removal of non-compliant structures",
      "Art. 78 — Non-compliance with land use master plan (legal entity): Art. 76 fine × 10",
      "Art. 79 — Unlawful use of a land title: 5–7 years imprisonment and/or fine of 2–4× the value of the land",
      "Art. 80 — Providing false information in land matters: 1–3 months imprisonment and/or FRW 200,000–500,000",
      "Art. 82 — Self-allocation of State land: 3–6 months imprisonment and/or fine of 3–5× the value of the land",
      "Art. 83 — Offences under Arts. 79–82 committed by legal entity: applicable fine × 10",
    ],
    keyDeadlines: [
      "Art. 36 — Public institutions/decentralised entities must register newly acquired land within 60 days of acquisition",
      "Art. 39 — Land use inspection report must be submitted to Ministry by 30 September each year",
      "Art. 49 — State must give 90-day written notice before terminating a land ownership contract for non-compliance",
      "Art. 56 — Minister of Economic Planning must respond to master plan initiation requests within 30 days",
      "Art. 73 — District/City must decide on land boundary dispute within 30 days; appeal to national institution within 30 days; institution must issue decision within 45 days",
    ],
    keyObligations: [
      "Register all land interests in the land register (Art. 17)",
      "Ensure all land transfer contracts are in writing, signed by both parties, and approved by a land notary (Art. 23)",
      "Register land rights transfer — transfer is only valid upon registration (Art. 24)",
      "Comply with the applicable land use master plan at all times (Art. 61)",
      "Public institutions: register newly acquired land within 60 days of acquisition (Art. 36)",
      "Obtain prior RMB/relevant authority authorisation before exploiting natural resources on any land (Art. 43)",
      "Exploit land productively and in a value-increasing manner (Art. 46)",
      "Pay all applicable land taxes and fees (Art. 48)",
    ],
  },

  // ── 17. MINING LAW ──────────────────────────────────────────────────────
  {
    id: "mining-law-072-2024",
    name: "Mining and Quarry Operations Law",
    shortName: "Mining Law",
    number: "No. 072/2024 of 26/06/2024",
    year: 2024,
    category: "Environment & Regulatory",
    regulator:
      "Rwanda Mines, Petroleum and Gas Board (RMB); Rwanda Revenue Authority (RRA) for tax compliance; Environment authority for rehabilitation certificates",
    status: "verified",
    description:
      "Governs mining and quarry operations in Rwanda. All mineral rights vest in the State. Establishes four types of mining licences, rights and obligations of licence holders, environmental and rehabilitation requirements, and criminal penalties for unlicensed operations. Repeals Law No. 58/2018.",
    articles: [
      {
        number: "Art. 3",
        summary:
          "All rights of ownership and control over minerals in, under, or upon any land in Rwanda are vested in the State, notwithstanding private land ownership. Mining and quarry operations require a licence.",
      },
      {
        number: "Art. 7",
        summary:
          "Four types of mining licences: (a) exploration operations licence; (b) mining licence — small-scale, medium-scale, or large-scale; (c) mineral trading licence; (d) mineral processing licence.",
      },
      {
        number: "Art. 13",
        summary:
          "Exploration licence: initial period not exceeding 4 years. Mining licence: initial period not exceeding 15 years. Duration determined by feasibility study approved by RMB.",
      },
      {
        number: "Art. 16",
        summary:
          "Licence transfer is not permitted before the holder has invested at least 30% of the committed investment amount. Prior written RMB authorisation required.",
      },
      {
        number: "Art. 22",
        summary:
          "Exploration licence holder must: commence operations within 90 days of licence issuance; submit six-monthly progress reports; submit annual audited expenditure within 90 days of each licence anniversary.",
      },
      {
        number: "Art. 24",
        summary:
          "Mining licence holder must: commence mining within 180 days of licence issuance; notify RMB 1 year in advance of permanent cessation; submit annual audited financial report within 90 days of financial year end.",
      },
      {
        number: "Art. 38",
        summary:
          "Before commencing operations, holders of exploration, mining, and commercial/industrial quarry licences must submit an approved Environmental and Social Impact Assessment (ESIA) report to RMB.",
      },
      {
        number: "Art. 44",
        summary:
          "Licence holders must submit to RMB and RRA an audited annual financial statement (per IFRS) within 3 months of the end of each financial year.",
      },
      {
        number: "Art. 46",
        summary:
          "Holders of mining or quarry licences pay all applicable taxes and royalties in accordance with relevant legislation (Tax on Minerals Law No. 056/2024).",
      },
      {
        number: "Art. 63",
        summary:
          "Mining without a licence (individual): 2–5 years imprisonment + FRW 25,000,000–50,000,000 (or either). Legal entity: FRW 60,000,000–80,000,000 + possible dissolution.",
      },
      {
        number: "Art. 65",
        summary:
          "Trading in illegally extracted minerals (individual): more than 5 years up to 10 years + FRW 60,000,000–120,000,000 (or either). Legal entity: FRW 130,000,000–150,000,000 + possible dissolution.",
      },
    ],
    penalties: [
      "Art. 50 — Minerals without proof of origin: 10% of mineral value (administrative fine) + confiscation and auction",
      "Art. 51 — Mining: late/false report, records outside area, unsanctioned suspension: RWF 500,000",
      "Art. 52 — Mining: non-payment, no worker insurance, denying access to inspectors: provisional licence suspension",
      "Art. 53 — Mining: failure to start, breach of licence terms, unlawful transfer: permanent licence cancellation",
      "Art. 54 — Mining: destroying/removing boundary markers: RWF 5,000,000; displacing/crossing: RWF 10,000,000",
      "Art. 55 — Mining: failure to rehabilitate: RWF 5,000,000–10,000,000 + compulsory restitution",
      "Art. 62 — Non-compliance with health/safety/environmental standards: RWF 1,000,000–3,000,000; environmental destruction: RWF 3,000,000–5,000,000",
      "Art. 63 — Mining without a licence (individual): 2–5 years + RWF 25,000,000–50,000,000; legal entity: RWF 60,000,000–80,000,000 + possible dissolution",
      "Art. 64 — Possessing illegally extracted minerals (individual): 1–3 years + RWF 30,000,000–60,000,000; legal entity: RWF 70,000,000–90,000,000",
      "Art. 65 — Trading in illegally extracted minerals (individual): >5–10 years + RWF 60,000,000–120,000,000; legal entity: RWF 130,000,000–150,000,000",
      "Art. 70 — Unauthorised dynamite activities: 5–7 years + RWF 40,000,000–75,000,000; legal entity: RWF 80,000,000–100,000,000",
    ],
    keyDeadlines: [
      "Exploration licence: initial duration max 4 years; renewable ONCE for up to 4 additional years (Art. 13–14)",
      "Mining licence: initial duration max 15 years; renewable multiple times, each renewal up to 15 years (Art. 13–14)",
      "Mining licence renewal application: submit within 90 days before expiry (Art. 14)",
      "Renewal decision: notified within 60 days of application receipt (Art. 15)",
      "Transfer decision: notified within 60 days of application receipt (Art. 18)",
      "Exploration: commence operations within 90 days of licence issuance (Art. 22)",
      "Exploration: submit progress reports every 6 months (Art. 22)",
      "Mining: commence operations within 180 days of licence issuance (Art. 24)",
      "Mining: notify RMB 1 year in advance of permanent cessation (Art. 24)",
      "Annual financial statement (IFRS, audited): submit within 3 months of financial year end to RMB and RRA (Art. 44)",
      "Radioactive minerals: monthly written report to RMB in first week of each month (Art. 25)",
    ],
    keyObligations: [
      "Obtain appropriate RMB licence before commencing any mining, quarry, processing, or trading operation (Art. 3, 7)",
      "Submit approved ESIA report to RMB before commencing operations (Art. 38)",
      "Commence mining operations within 180 days of licence issuance (Art. 24)",
      "Submit audited annual financial statements to RMB and RRA within 3 months of financial year end (Art. 44)",
      "Pay all applicable taxes and royalties under Tax on Minerals Law No. 056/2024 (Art. 46)",
      "Maintain rehabilitation plan and guarantee for all areas affected by operations (Arts. 40–41)",
      "Give preference to Rwandan contractors and locally made materials where competitive (Art. 72)",
      "Prepare community development and social welfare plan in collaboration with relevant District (Art. 74)",
    ],
  },

  // ── 18. TAX ON MINERALS ─────────────────────────────────────────────────
  {
    id: "tax-on-minerals-056-2024",
    name: "Tax on Minerals Law",
    shortName: "Tax on Minerals",
    number: "No. 056/2024 of 26/06/2024",
    year: 2024,
    category: "Tax & Revenue",
    regulator:
      "Rwanda Revenue Authority (RRA) — tax administration; Rwanda Mines, Petroleum and Gas Board (RMB) — competent authority for minerals valuation",
    status: "verified",
    description:
      "Establishes the tax on minerals in Rwanda. Imposes mining royalty tax and export tax on minerals sold or exported. Includes anti-avoidance and transfer pricing rules for affiliated company sales. Repeals Law No. 55/2013.",
    articles: [
      {
        number: "Art. 3",
        summary: "Any person who sells minerals is liable to pay tax on those minerals.",
      },
      {
        number: "Art. 4",
        summary:
          "Mining royalty tax rates: Base metals: 3% of norm value; Gemstones: 2% of gross value; Platinum group metals: 2% of norm value; Rare earth elements: 2% of norm value; Energy minerals: 3% of norm value; Gold: 0.5% of norm value.",
      },
      {
        number: "Art. 5",
        summary:
          "Export tax on raw (unprocessed) minerals (additional to mining royalty): Base metals: 2% of norm value; Gemstones: 3% of norm value; Platinum group metals: 2% of norm value; Rare earth elements: 1% of norm value; Energy minerals: 2% of norm value; Gold: 0.5% of norm value.",
      },
      {
        number: "Art. 6",
        summary:
          "A local mineral processing facility or exporter has the obligation to withhold mining royalty tax, declare, and remit it. Tax on minerals is NOT a deductible expense and NOT an advance payment of income tax.",
      },
      {
        number: "Art. 7",
        summary:
          "Exemptions: (1) mineral samples exported for assay/analysis are exempt (quantity thresholds set by RMB); (2) processed minerals and imported minerals re-exported are exempt — except gold, which is not exempt.",
      },
      {
        number: "Art. 8",
        summary:
          "Tax due date: date of exportation or date a local mineral processing facility purchases the minerals. Date of customs export declaration is deemed the date of exportation.",
      },
      {
        number: "Art. 10",
        summary:
          "Export tax must be declared and paid BEFORE exportation. Mining royalty tax (withheld) must be declared and paid within 15 days following the end of the month in which it was withheld.",
      },
      {
        number: "Art. 11",
        summary:
          "Affiliated company sales: licence holder selling minerals to affiliated companies must do so at a price at least equal to the international market value. If sold below market value, RMB and RRA may use international market value to determine taxable value.",
      },
      {
        number: "Art. 12",
        summary:
          "Anti-tax avoidance rules: where a tax avoidance arrangement exists, the tax administration may re-characterise transactions, disregard parties, treat related persons as a single person, or reallocate income and expenditure.",
      },
    ],
    penalties: [
      "No standalone penalties in this Law — late payment, non-declaration, and tax avoidance penalties governed by Tax Procedures Law No. 020/2023",
      "Affiliated-party underpricing (Art. 11): triggers revaluation at international market value by RMB and RRA",
      "Tax avoidance arrangements (Art. 12): tax administration may re-characterise transactions and reassess tax",
    ],
    keyDeadlines: [
      "Export tax: must be declared and paid BEFORE exportation of minerals (Art. 10)",
      "Mining royalty tax (withheld): declared and paid within 15 days following the end of the month in which withheld (Art. 10)",
      "Tax due date triggers: date of customs export declaration (for exported minerals) or date of purchase by local processing facility (Art. 8)",
    ],
    keyObligations: [
      "Pay mining royalty tax at applicable rates on all mineral sales (Art. 4)",
      "Pay export tax on all minerals exported in raw form (Art. 5)",
      "Declare and pay export tax BEFORE exportation (Art. 10)",
      "Withholding entities (processors/exporters): withhold mining royalty tax, declare and remit within 15 days of month end (Art. 6, 10)",
      "Sell minerals to affiliated companies at arm's-length (international market value) prices (Art. 11)",
      "Maintain records sufficient to demonstrate compliance with transfer pricing rules (Art. 11–12)",
    ],
  },

  // ── 19. INSOLVENCY LAW ──────────────────────────────────────────────────
  {
    id: "insolvency-075-2021",
    name: "Insolvency Law",
    shortName: "Insolvency Law",
    number: "No. 075/2021 of 06/12/2021",
    year: 2021,
    category: "Corporate & Investment",
    regulator:
      "Commercial courts — sole jurisdiction over all insolvency proceedings; RDB Registrar General — provisional practitioner appointments; sector regulators (BNR, RURA) — may apply for commencement of proceedings",
    status: "verified",
    description:
      "Establishes proceedings for settling insolvency issues of companies, partnerships, and individuals. Governs voluntary mechanisms to avoid insolvency, reorganisation, administration, liquidation, bankruptcy, and cross-border insolvency. Repeals Law No. 23/2018.",
    articles: [
      {
        number: "Art. 7",
        summary:
          "Two insolvency tests — either is sufficient: (1) cash flow test — debtor unable to pay debts as they fall due; (2) balance sheet test — debtor's assets less than liabilities plus stated capital.",
      },
      {
        number: "Art. 12",
        summary:
          "Secured creditors' rights are NOT automatically stayed. EXCEPTION: where debtor expressly states intention to submit reorganization plan, all claims including secured are stayed. Debtor must submit plan within 3 months; total stay cannot exceed 6 months.",
      },
      {
        number: "Art. 91",
        summary:
          "Reorganization plan approval threshold: 75% of votes of creditors (or each class) participating in the vote.",
      },
      {
        number: "Art. 97",
        summary:
          "Business rescue finance approved by simple majority of votes validly cast by creditors. Claims relating to rescue finance paid in priority over other pre-insolvency unsecured debts.",
      },
      {
        number: "Art. 212",
        summary:
          "Priority order for distribution: (1) administration costs, liquidator fees, essential services post-commencement; (2) secured creditors ranked by registration date; (3) creditors with right of retention; (4) funeral/testamentary expenses; (5) employees' salaries (6 months), accrued leave, severance pay; (6) social security contributions; (7) government taxes; (8) unsecured claims. Business rescue finance ranks between tiers 7 and 8.",
      },
      {
        number: "Art. 208",
        summary:
          "Security priority runs from REGISTRATION date, not debt origination date. Earlier registration ranks higher.",
      },
      {
        number: "Art. 215",
        summary:
          "Voidable preferences: 1-year lookback; 45-day safe harbour for ordinary course payments; 6-month rebuttable presumption of insolvency. Transfers with fraudulent intent void at any time.",
      },
      {
        number: "Art. 216",
        summary:
          "Transactions at undervalue: voidable if entered within 1 year before commencement and consideration received was significantly less than consideration provided.",
      },
      {
        number: "Art. 217",
        summary:
          "Voidable charges: presumed (rebuttably) voidable if given within 6 months before commencement.",
      },
      {
        number: "Art. 269",
        summary:
          "Misappropriation, concealment, or fraudulent claiming of debtor's property: mandatory imprisonment 3–5 years AND fine FRW 3,000,000–5,000,000 (both penalties mandatory).",
      },
    ],
    penalties: [
      "Art. 263 — Acting as insolvency practitioner without qualification: imprisonment 6 months–2 years AND/OR fine FRW 500,000–2,000,000",
      "Art. 264 — Absconding, concealing/removing assets, or destroying records during insolvency: imprisonment 6 months–2 years AND/OR fine FRW 500,000–2,000,000",
      "Art. 265 — Undischarged bankrupt obtaining credit or conducting business without disclosure: imprisonment 6 months–2 years AND/OR fine FRW 500,000–2,000,000",
      "Art. 266 — Failure to keep proper business accounts (2 years pre-bankruptcy): imprisonment 2–6 months AND/OR fine FRW 500,000–1,000,000",
      "Art. 267 — Failure to submit statement of affairs to trustee within 20 working days: imprisonment 2–6 months AND/OR fine FRW 500,000–1,000,000",
      "Art. 269 — Misappropriation/concealment/fraudulent claiming of debtor's property (MOST SERIOUS — both penalties mandatory): imprisonment 3–5 years AND fine FRW 3,000,000–5,000,000",
      "Art. 270 — Continuing business after insolvency practitioner appointment: imprisonment 6 months–1 year AND/OR fine FRW 1,000,000–2,000,000",
    ],
    keyDeadlines: [
      "Art. 12 — Where debtor invokes reorganization plan: submit plan within 3 months; total stay on all claims cannot exceed 6 months",
      "Art. 42 — Registrar General appointment of provisional administrator: within 5 working days of application",
      "Art. 89 — Reorganization plan preparation: within 45 days of the reorganization order",
      "Art. 91 — Reorganization plan approval threshold: 75% of votes of participating creditors",
      "Art. 99 — Business rescue finance approval: simple majority (not 75%)",
      "Art. 101 — Creditor application to cancel rescue finance: within 20 working days of approval notice",
      "Art. 106 — Liquidator public notice and notice to Registrar General: within 5 working days of commencement",
      "Art. 110 — Liquidator's preliminary report: within 20 working days of commencement",
      "Art. 182 — Bankrupt's statement of affairs to trustee: within 20 working days of commencement",
      "Art. 215 — Voidable preference lookback: 1 year; 45-day safe harbour for ordinary course payments",
      "Art. 216 — Undervalue transaction lookback: 1 year",
      "Art. 217 — Voidable charge: 6-month rebuttable presumption",
    ],
    keyObligations: [
      "Directors: cooperate fully with insolvency practitioner and disclose all company property (Art. 117)",
      "Cease management activities immediately upon appointment of insolvency practitioner (Art. 270)",
      "Provide insolvency practitioner with all information relating to proceedings (Art. 48)",
      "Bankrupt: submit statement of affairs to trustee within 20 working days of bankruptcy commencement (Art. 182)",
      "Liquidator: give public notice of liquidation within 5 working days; submit preliminary report within 20 working days (Arts. 106, 110)",
      "Secured creditors: note that security priority is determined by registration date, not debt origination date (Art. 208)",
      "Creditors: review all transactions and security within 1 year before insolvency for voidability (Arts. 215–217)",
    ],
  },

  // ── 20. PAYMENT SYSTEM LAW ──────────────────────────────────────────────
  {
    id: "payment-system-061-2021",
    name: "Payment System Law",
    shortName: "Payment System Law",
    number: "No. 061/2021 of 14/10/2021",
    year: 2021,
    category: "Financial Services",
    regulator:
      "National Bank of Rwanda (BNR) — sole regulator with comprehensive powers including licensing, designation, oversight, and crisis management without prior notice",
    status: "verified",
    description:
      "Governs the payment system in Rwanda. Establishes BNR's regulatory and oversight powers, licensing requirements for payment service providers, settlement finality, financial collateral arrangements, customer fund safeguarding, and criminal offences. Repeals Law No. 03/2010 (except Art. 23).",
    articles: [
      {
        number: "Art. 15",
        summary:
          "Eight types of payment services: cash deposit/withdrawal on payment accounts; execution of payment transactions including direct debits, card transactions, and credit transfers; issuing payment instruments; acquiring payment transactions; money remittance; payment initiation services; issuance and management of e-money; and other services BNR may determine.",
      },
      {
        number: "Art. 17",
        summary:
          "BNR-licensed banks and authorised microfinance institutions are EXEMPT from obtaining a separate payment service licence — their existing BNR licence covers payment activities.",
      },
      {
        number: "Art. 18",
        summary:
          "Grounds for withdrawal/suspension of licence include: not providing services within 12 consecutive months; ceasing services for more than 1 month; licence obtained by fraud; licensing criteria no longer met; endangering financial system stability; or entering insolvency proceedings.",
      },
      {
        number: "Art. 21",
        summary:
          "Payment service provider must notify BNR of: civil or criminal proceedings; material operational events; approaching insolvency; disciplinary action by any other regulator; significant regulatory changes abroad.",
      },
      {
        number: "Art. 37",
        summary:
          "On enforcement event, collateral taker immediately realises financial collateral without prior court notice or approval. Collateral taker's rights prevail over ALL other creditors — super-priority.",
      },
      {
        number: "Art. 38",
        summary:
          "Financial collateral arrangement cannot be declared invalid because of insolvency proceedings if collateral was given before or on the day proceedings opened AND the collateral taker was unaware of the opening. DIRECTLY OVERRIDES Insolvency Law Arts. 215–217 in payment system context.",
      },
      {
        number: "Art. 40",
        summary:
          "Close-out netting is immediately enforceable against the liquidator without court application. Insolvency law provisions do NOT apply to netting under designated payment system rules.",
      },
      {
        number: "Art. 43",
        summary:
          "Settlement finality: settled transactions are final and irrevocable. Insolvency proceedings have no retroactive effect on pre-insolvency payment obligations. Proceedings take effect from when the OPERATOR IS NOTIFIED — not from the filing date.",
      },
      {
        number: "Art. 45",
        summary:
          "Settlement account balances and customer trust/collection account funds are completely ring-fenced: not available to creditors, not subject to court attachment or execution.",
      },
      {
        number: "Art. 46",
        summary:
          "Payment service provider must safeguard customer funds by depositing equivalent amounts in a trust account, obtaining safeguarding institution undertaking, or guarantee. Customer funds are ring-fenced on provider insolvency.",
      },
      {
        number: "Art. 47",
        summary:
          "BNR crisis management powers: BNR may require immediate action, appoint statutory advisers, or assume direct control of operator/provider WITHOUT prior notice, hearing, or statutory appeal right.",
      },
      {
        number: "Art. 50",
        summary:
          "Seven exhaustive criminal offences: (1) operating without licence; (2) false information to BNR; (3) falsifying records; (4) obstructing audits; (5) false designation claims; (6) misusing payment information; (7) unlicensed solicitation. Corporate penalty: FRW 50,000,000–200,000,000 OR dissolution.",
      },
    ],
    penalties: [
      "Art. 49 — Administrative sanctions: BNR imposes sanctions on payment service providers, operators, board members, or senior management who violate ANY provision of this Law or its implementing regulations. Amounts set by BNR regulation",
      "Art. 50 (individuals) — Seven criminal offences: imprisonment 6 months–1 year AND/OR fine FRW 5,000,000–10,000,000",
      "Art. 50 (legal persons) — Same seven criminal offences: fine of 10–20 times individual fine (FRW 50,000,000–200,000,000) OR dissolution",
    ],
    keyDeadlines: [
      "Licence lapse trigger: provider not providing services within 12 consecutive months from grant date (Art. 18)",
      "Suspension trigger: provider ceased services for more than 1 month (Art. 18)",
      "Notification to BNR of material events: after occurrence — specific timelines set by BNR regulation (Art. 21)",
      "Winding-up notification: copy of application and order lodged with BNR on same business day, no later than start of next business day (Art. 42)",
      "Voluntary winding-up: notify all other participants within 24 hours of resolution (Art. 42)",
      "Record retention: 10 years from date the record was obtained or produced (Art. 56)",
    ],
    keyObligations: [
      "Obtain BNR licence before providing any payment services (Art. 16) — banks with existing BNR licence are exempt (Art. 17)",
      "Notify BNR immediately upon any material operational event, approaching insolvency, or regulatory action by another authority (Art. 21)",
      "Maintain a permanent place of business or registered office in Rwanda (Art. 23)",
      "Obtain prior written BNR approval before outsourcing any important operational function (Art. 30)",
      "Safeguard customer funds in BNR-prescribed manner — trust account, undertaking, or guarantee (Art. 46)",
      "Notify BNR before winding up any payment system participant (Art. 42)",
      "Appoint at least one BNR-accredited external auditor (Art. 33)",
      "Comply with all AML/CFT obligations under AML Law No. 75/2019 (Art. 55)",
    ],
  },

  // ── 21. ARBITRATION AND CONCILIATION ────────────────────────────────────
  {
    id: "arbitration_conciliation_005_2008",
    name: "Arbitration and Conciliation in Commercial Matters Law",
    shortName: "Arbitration & Conciliation Law",
    number: "No. 005/2008 of 14/02/2008",
    year: 2008,
    category: "Corporate & Investment",
    regulator:
      "Commercial High Court (supervisory court for appointment disputes, challenges, and annulment of awards); KIAC (Kigali International Arbitration Centre) as primary institutional appointing authority",
    status: "verified",
    description:
      "Establishes the legal framework for arbitration and conciliation procedures in commercial matters. Applies to both domestic and international commercial arbitration and conciliation. Rwanda ratified the New York Convention by Presidential Order No. 60/01 of 31/12/2007.",
    articles: [
      {
        number: "Art. 9",
        summary:
          "Arbitration agreement must be in writing. Electronic communications satisfy the writing requirement. Reference in a contract to a document containing an arbitration clause constitutes a written arbitration agreement if the reference incorporates the clause.",
      },
      {
        number: "Art. 10",
        summary:
          "A court seised of a matter covered by an arbitration agreement must refer it to arbitration if a party requests before submitting its first substantive pleading, unless the agreement is null, void, inoperative, or incapable of performance.",
      },
      {
        number: "Art. 13",
        summary:
          "Default number of arbitrators: three. If a party fails to appoint within 15 days of written request, or two arbitrators fail to agree on the third within 15 days, the Commercial High Court makes the appointment.",
      },
      {
        number: "Art. 18",
        summary:
          "The arbitral tribunal may rule on its own jurisdiction (kompetenz-kompetenz). The arbitration clause is treated as an agreement separate from the main contract.",
      },
      {
        number: "Art. 19",
        summary:
          "Unless parties agree otherwise, the tribunal may grant interim measures maintaining/restoring status quo, preventing imminent harm, preserving assets for execution, or preserving relevant evidence.",
      },
      {
        number: "Art. 40",
        summary:
          "The tribunal decides according to the law chosen by the parties. Failing designation, Rwandan law and international conventions ratified by Rwanda apply.",
      },
      {
        number: "Art. 47",
        summary:
          "Award may be set aside by Commercial High Court only if: party lacked capacity; applicant was not given proper notice; award deals with matters outside submission; tribunal composition was irregular; or subject matter is not arbitrable / award conflicts with public policy.",
      },
      {
        number: "Art. 48",
        summary:
          "Application to set aside an award must be made within 30 days of receiving notification of the award. This is a hard deadline strictly applied by Rwandan courts.",
      },
      {
        number: "Art. 50",
        summary:
          "An arbitral award, irrespective of country of origin, is binding and shall be recognised and enforced on the basis of reciprocity. Party must supply the duly authenticated original award and arbitration agreement.",
      },
      {
        number: "Art. 53",
        summary:
          "Conciliation proceedings commence on the day parties agree. If invitation receives no acceptance within 30 days, the inviting party may treat this as rejection.",
      },
      {
        number: "Art. 59",
        summary:
          "Admissibility prohibition: parties, conciliator, and any third person involved may not rely on or introduce as evidence in other proceedings: invitation to conciliate; views or suggestions for settlement; statements made during conciliation; or conciliator proposals.",
      },
      {
        number: "Art. 63",
        summary:
          "A settlement agreement concluded by the parties is binding and may be forcefully enforced.",
      },
    ],
    penalties: [
      "Art. 29 — Party that obtained an interim measure or preliminary order that should not have been granted is liable for all costs and damages caused — assessed by the arbitral tribunal on the facts",
    ],
    keyDeadlines: [
      "15 days — party must appoint arbitrator after written request; two arbitrators must agree on third (Art. 13)",
      "7 days — written challenge to arbitrator must be filed after discovering disqualifying circumstances (Art. 15)",
      "15 days — apply to Commercial High Court after challenge rejection by tribunal (Art. 15)",
      "15 days — expiry of preliminary order from date of issuance (Art. 25)",
      "30 days — request correction, interpretation, additional award, or review of award from date of receipt (Art. 45)",
      "30 days — hard limitation period to apply to Commercial High Court to set aside an award from notification (Art. 48)",
      "30 days — conciliation invitation acceptance period; silence may be treated as rejection (Art. 53)",
    ],
    keyObligations: [
      "Ensure arbitration agreements are in writing (including electronic form) (Art. 9)",
      "Courts: refer disputes to arbitration when covered by valid arbitration agreement and party requests before first pleading (Art. 10)",
      "Arbitrators: disclose all circumstances likely to raise justifiable doubts as to impartiality or independence (Art. 14)",
      "Parties: treat each other equally and each provide a full opportunity to present their case (Art. 30)",
      "Set-aside applications: file within 30-day hard deadline from notification of award (Art. 48)",
      "Maintain confidentiality of all conciliation proceedings unless disclosure is required by law or for enforcement (Art. 58)",
      "Conciliator: may not act as arbitrator in any dispute that was the subject of the conciliation (Art. 61)",
    ],
  },

  // ── 22. PENAL CODE ──────────────────────────────────────────────────────
  {
    id: "penal_code_068_2018",
    name: "Penal Code",
    shortName: "Penal Code",
    number: "No. 068/2018 of 30/08/2018",
    year: 2018,
    category: "Corporate & Investment",
    regulator:
      "National Public Prosecution Authority (NPPA); Rwanda Investigation Bureau (RIB); Commercial High Court / Intermediate Courts / High Court",
    status: "verified",
    description:
      "Rwanda's consolidated Penal Code. Establishes general principles of criminal law and specific offences with penalties. Key corporate provisions: Art. 25 (corporate criminal liability), Arts. 83–90 (punishable persons including legal entities), Arts. 165–190 (economic crimes: fraud, embezzlement, theft, arson), Art. 276 (forgery), and Arts. 158, 163, 174, 176 (professional secrecy, discrimination, fraud, breach of trust).",
    articles: [
      {
        number: "Art. 25",
        summary:
          "CORPORATE CRIMINAL LIABILITY. Penalties applicable to public institutions, companies, cooperatives, and NGOs with legal personality: (1) fine; (2) ban on conducting professional/social activities; (3) confiscation; (4) publication of penalty; (5) dissolution; (6) permanent closure of establishments; (7) exclusion from public procurement; (8) ban on issuing cheques or credit cards; (9) placement under judicial supervision.",
      },
      {
        number: "Art. 52",
        summary:
          "Recidivism: penalties may be doubled for repeat offenders convicted within 5 years of completing a prior sentence.",
      },
      {
        number: "Art. 83",
        summary:
          "Criminal liability arises at the moment the offence is committed. It is personal — each person is liable only for their own acts.",
      },
      {
        number: "Art. 88",
        summary:
          "Public institutions, companies, cooperatives, and NGOs with legal personality are criminally liable for offences committed on their behalf, in their interest, or by their organs or representatives. Dual prosecution: both entity and individual officer may be prosecuted simultaneously.",
      },
      {
        number: "Art. 129",
        summary:
          "Blackmail (using threats of disclosure of compromising information to extort): 2–5 years imprisonment + FRW 1,000,000–3,000,000.",
      },
      {
        number: "Art. 158",
        summary:
          "Breach of professional secrecy: 1–2 years imprisonment + FRW 2,000,000–3,000,000. Applies during and after leaving the relevant function.",
      },
      {
        number: "Art. 163",
        summary:
          "Discrimination based on race, ethnicity, sex, religion, political ideology, or other protected grounds: 5–7 years imprisonment + FRW 500,000–1,000,000.",
      },
      {
        number: "Art. 174",
        summary:
          "Fraud (escroquerie): obtaining property by deceit — false identity, false premises, misuse of authority, false documents: 3–5 years imprisonment + FRW 1,000,000–3,000,000.",
      },
      {
        number: "Art. 176",
        summary:
          "Breach of trust: misappropriating property, money, or documents entrusted for a specific purpose: 1–5 years imprisonment + FRW 500,000–2,000,000.",
      },
      {
        number: "Art. 276",
        summary:
          "Forgery and use of forged documents (public or private, including electronic): 3–7 years imprisonment + FRW 1,000,000–5,000,000. Public officer forging official documents: 7–10 years.",
      },
    ],
    penalties: [
      "Art. 25 — Corporate penalties: fine, ban on activities, confiscation, publication, dissolution, permanent closure, public procurement exclusion, judicial supervision",
      "Art. 52 — Recidivism: penalties may be doubled for repeat offenders (within 5 years)",
      "Art. 129 — Blackmail: 2–5 years + FRW 1,000,000–3,000,000",
      "Art. 158 — Breach of professional secrecy: 1–2 years + FRW 2,000,000–3,000,000",
      "Art. 163 — Discrimination: 5–7 years + FRW 500,000–1,000,000",
      "Art. 171 — Extortion: 5–10 years + FRW 1,000,000–3,000,000",
      "Art. 174 — Fraud: 3–5 years + FRW 1,000,000–3,000,000",
      "Art. 176 — Breach of trust: 1–5 years + FRW 500,000–2,000,000",
      "Art. 276 — Forgery/use of forged documents: 3–7 years + FRW 1,000,000–5,000,000; public officer: 7–10 years",
      "Art. 222 — Inciting bank run: 3–5 years imprisonment",
      "Art. 236 — Defaming the President: 5–7 years + FRW 5,000,000–7,000,000",
    ],
    keyDeadlines: [
      "Art. 75 — Prescription of imprisonment penalty: life imprisonment = 30 years; >10 years = 20 years; 5–10 years = 10 years; <5 years = 5 years",
      "Art. 77 — Prescription of fine: 5 years from date judgment became final",
      "Art. 31 — Payment deadline for fine set by court: maximum 1 year from date judgment became final",
      "Art. 64 — Suspended sentence (sursis): voided if new intentional offence committed within 5 years",
      "Art. 52 — Recidivism: applies if second conviction within 5 years of completing prior sentence",
    ],
    keyObligations: [
      "Companies: ensure all acts committed on behalf of or in the interest of the company comply with criminal law (Art. 88)",
      "Directors/managers: note dual prosecution — both entity and individual officer face simultaneous criminal exposure (Art. 88)",
      "Comply with professional secrecy obligations during and after employment (Art. 158)",
      "Do not engage in or condone fraud, breach of trust, embezzlement, or forgery of corporate documents (Arts. 174, 176, 276)",
      "Do not discriminate in employment or business dealings (Art. 163)",
      "Report knowledge of planned or completed offences to authorities where disclosure could have prevented harm (Art. 243)",
      "Do not destroy or conceal evidence or records during investigations (Art. 245)",
    ],
  },

  // ── 23. CRIMINAL PROCEDURE CODE ─────────────────────────────────────────
  {
    id: "criminal_procedure_027_2019",
    name: "Criminal Procedure Code",
    shortName: "Criminal Procedure Code",
    number: "No. 027/2019 of 19/09/2019 (as amended by No. 058/2023 of 04/12/2023)",
    year: 2019,
    category: "Corporate & Investment",
    regulator:
      "National Public Prosecution Authority (NPPA); Rwanda Investigation Bureau (RIB); Commercial High Court / Primary Courts / Intermediate Courts / High Court; Court of Appeal; Supreme Court",
    status: "verified",
    description:
      "Rwanda's consolidated Code of Criminal Procedure. Governs the entire criminal process from investigation through execution of judgment. Law No. 058/2023 amended 16 articles and inserted 3 new articles. Key corporate provisions: Arts. 38–41 (communication interception), Art. 55 (search and seizure), Art. 57 (asset freeze), Art. 66 (arrest threshold), Art. 68 (rights on arrest), Art. 79 (detention time limits), Arts. 25–26 (fine without trial and plea bargaining).",
    articles: [
      {
        number: "Art. 6",
        summary:
          "Prescription of criminal action: felonies — 10 years; misdemeanours — 3 years; petty offences — 1 year. Prescription runs from date of commission or last investigation act.",
      },
      {
        number: "Art. 25",
        summary:
          "Fine without trial: for offences punishable by fine, prosecutor may offer suspect choice between court prosecution or paying a fine not exceeding the maximum. Payment extinguishes criminal action but is not an admission of guilt.",
      },
      {
        number: "Art. 26",
        summary:
          "Plea bargaining: prosecutor may propose plea bargaining after interrogation — suspect provides information and identifies co-offenders in exchange for concessions on charges and penalties.",
      },
      {
        number: "Art. 38",
        summary:
          "Communication interception for offences against national security, corruption, and embezzlement of State property: authorised by written order of Prosecutor General. Order must be issued within 48 hours; valid 3 months, renewable once only.",
      },
      {
        number: "Art. 55",
        summary:
          "Search requires a search warrant from public prosecution. Searches in dwellings: not before 6:00 a.m. or after 6:00 p.m. Exception for red-handed situations. Professional's office: in presence of professional or their authorised representative.",
      },
      {
        number: "Art. 57",
        summary:
          "Asset freeze: investigator/prosecutor may seize objects or freeze bank accounts and business shares. Bank account/share freeze valid 30 days maximum, extendable once for additional 30 days.",
      },
      {
        number: "Art. 66",
        summary:
          "Provisional detention permitted only if serious grounds exist to believe suspect committed an offence punishable by at least 2 years imprisonment. Investigator/prosecutor statement valid 5 days non-renewable.",
      },
      {
        number: "Art. 68",
        summary:
          "Rights on arrest: any person held in custody must be notified of charges and rights including right to legal counsel and private communication with counsel. All recorded in a signed statement.",
      },
      {
        number: "Art. 79",
        summary:
          "Judicial provisional detention: 30-day orders renewable in 30-day increments. Hard maximums: petty offences — not renewable after initial 30 days; misdemeanours — maximum 3 months total; felonies — maximum 6 months total.",
      },
      {
        number: "Art. 107",
        summary:
          "Burden of proof rests with the prosecution. The accused is presumed innocent until proven guilty.",
      },
      {
        number: "Art. 212",
        summary:
          "Priority order for distribution of assets in insolvency — this article governs the Art. 212 Insolvency Law distribution waterfall in the CPC context.",
      },
    ],
    penalties: [
      "Art. 66 — Maximum investigator/prosecutor detention: 5 days non-renewable",
      "Art. 79 — Maximum judicial provisional detention: petty offences = 30 days (no renewal); misdemeanours = 3 months total; felonies = 6 months total",
      "Art. 57 — Bank account/share freeze: maximum 30 days, extendable once for 30 additional days (60 days total maximum)",
      "Art. 39 — Communication interception order: valid 3 months + 1 renewal maximum",
      "Art. 233 — Parole eligibility: 1/4 of sentence served (≤ 5 years); 1/3 of sentence served (> 5 years); 15 years served (life imprisonment)",
    ],
    keyDeadlines: [
      "Art. 6 — Prescription: felonies = 10 years; misdemeanours = 3 years; petty offences = 1 year",
      "Art. 12 — Civil action from offence prescribes: 5 years from date of commission",
      "Art. 35 — Provisional arrest warrant: valid 5 days, non-renewable",
      "Art. 39 — Interception order: issued within 48 hours; valid 3 months, renewable once only",
      "Art. 57 — Bank account/share freeze: 30 days maximum, extendable once for 30 additional days",
      "Art. 65 — Red-handed procedure: investigator completes file within 72 hours; prosecutor decides within 5 days; court tries within 15 days; judgment within 5 days of closure",
      "Art. 66 — Investigator/prosecutor detention: 5 days non-renewable",
      "Art. 79 — Judicial provisional detention maximums: petty offences = 30 days; misdemeanours = 3 months; felonies = 6 months",
      "Art. 87 — Appeal against provisional detention: filed within 5 working days; appellate court decides within 5 working days",
      "Art. 174 — Opposition to in-absentia judgment: 15 days from notification",
      "Art. 181 — Regular appeal: within 30 days of notification of judgment",
      "Art. 233 — Parole eligibility thresholds: 1/4 (sentence ≤ 5 years); 1/3 (sentence > 5 years); 15 years (life)",
    ],
    keyObligations: [
      "Any person summoned by an investigator for investigation purposes must appear (Art. 20)",
      "Persons charged must cooperate fully with investigators and prosecutors (Art. 48)",
      "Witnesses must appear when summoned, take oath, and provide truthful testimony (Art. 47)",
      "Corporate officers: right to legal counsel from moment of detention — counsel access must be respected immediately (Art. 68)",
      "Do not destroy, conceal, or remove evidence during investigations or proceedings (Penal Code Art. 245)",
      "Persons present during dawn raids: allow search but demand to see valid service card and search warrant (Art. 60)",
      "Not remove or break seals on seized property or assets subject to judicial attachment (Penal Code Art. 240–241)",
    ],
  },

// ── 25. NOTARIAL PRACTICE LAW ────────────────────────────────────────────
  {
    id: "notary-law-13bis-2014",
    name: "Law Governing the Office of Notary",
    shortName: "Notarial Practice Law",
    number: "No. 13bis/2014 of 21/05/2014",
    year: 2014,
    category: "Corporate & Investment",
    regulator: "Ministry of Justice (Minister sets qualifications, fees, supervision of private notaries)",
    status: "verified",
    description:
      "Determines the organisation and practice of the office of notary in Rwanda. Establishes seven categories of notaries, their competences, authentication formalities, probative value of notarized deeds, liability, sanctions, and record-keeping obligations. Mandatory for all land transfers, investment agreements, wills, and any contract the law requires to be in authentic form. Repeals the Decree of 17 November 1953.",
    articles: [
      {
        number: "Art. 3",
        summary:
          "Seven categories of notaries: (1) Ministry notary; (2) Ambassador / First Secretary of Embassy; (3) RDB investment promotion service notary; (4) District legal affairs officer; (5) Sector complaints officer; (6) land officers — Registrar of Land Titles, Deputy Registrar, District land office head, Sector land officer; (7) private notary authorised by the Minister. Minister determines the number of notaries per office on District request.",
      },
      {
        number: "Art. 4",
        summary:
          "Qualifications for private notary: Rwandan national; legal majority; at least a bachelor's degree in law; no definitive conviction to imprisonment ≥6 months (unless erased by amnesty/rehabilitation); not dismissed from prior employment for disciplinary reasons; at least 5 years experience in the legal profession. Qualification requirements do not apply to Ambassadors or land-related notaries.",
      },
      {
        number: "Art. 5",
        summary:
          "Incompatibilities: a notary may not simultaneously hold the office of judge, prosecutor, court bailiff, or court registrar, nor any other public or private office unless specifically empowered by the Minister.",
      },
      {
        number: "Art. 9",
        summary:
          "Core competences of Ministry, District, Sector, and private notaries: authentication of deeds; authentication of signatures; certification of document authenticity; certification of copy conformity to original; issuance of copies; certification of wills for movable property; certification and authentication of complex deeds involving both movable and immovable property; issuance of other notarial deeds provided by law.",
      },
      {
        number: "Art. 10",
        summary:
          "Land-specific notarial competences (land officers): certification/authentication of wills for immovable property; certification/authentication of contracts for transfer of land and immovable property through succession, donation, sale, leasing, compensation, right-of-way, and mortgage; condominium agreements; and other land transfer deeds provided by law.",
      },
      {
        number: "Art. 11",
        summary:
          "RDB investment service notary competences: all Art. 9 competences (except wills for movables) plus all Art. 10 land competences — BUT only where the person wishes to invest in Rwanda or export goods from Rwanda.",
      },
      {
        number: "Art. 14",
        summary:
          "Territorial jurisdiction: Ministry notary and RDB notary — national territory; District notary — entire District; Sector notary — entire Sector; Ambassador/First Secretary — countries under their jurisdiction; land notaries — their registration area jurisdiction; private notary — entire national territory.",
      },
      {
        number: "Art. 18",
        summary:
          "Liability: the State provides legal assistance to and assumes liability for a public notary — EXCEPT for misconduct committed deliberately, through negligence, or for criminal convictions. A private notary is PERSONALLY liable for any misconduct committed during the performance of duties.",
      },
      {
        number: "Art. 23",
        summary:
          "Administrative sanctions for private notary (imposed by Minister, without prejudice to civil/criminal liability): (1) written warning; (2) reprimand; (3) temporary suspension from notarial duties — 1 month to 6 months; (4) definitive removal from notarial duties.",
      },
      {
        number: "Art. 24",
        summary:
          "Grounds for removal of private notary: bribery (giving, demanding, or accepting); misappropriation of property; fraud; definitive conviction to imprisonment ≥6 months; fraudulent access to the office of notary; discrimination in the exercise of duties; professional incompetence; conviction for genocide or genocide ideology.",
      },
      {
        number: "Art. 26",
        summary:
          "Authentication of contracts: a notary authenticates contracts that the law requires to be in authentic form at the time of signing. Parties may also request voluntary authentication of any contract even where the law does not require it.",
      },
      {
        number: "Art. 27",
        summary:
          "Authentic deed: a deed authenticated by a notary in accordance with this Law is legally authentic. Where an authenticated deed references a prior deed, the more recent deed must contain a declaration by the parties confirming the two form a whole or that the later deed replaces the earlier one.",
      },
      {
        number: "Art. 29",
        summary:
          "Probative value: notarized documents bear equal validity across the entire national territory unless nullified by another document or court decision. A notarized document evidencing a certain and due debt may receive an enforcement order (formule exécutoire) from the court registrar — issued only once; if lost, a replacement requires a competent court order.",
      },
      {
        number: "Art. 33",
        summary:
          "Prohibited deeds: a notary may not receive or issue deeds for themselves, or those in which they have a direct interest, or for their spouse, parents, parents-in-law, adoptive parents, children, adopted children, or siblings sharing at least one parent. Violation of items (1)–(2): deed is annulled. Violation of item (3) (deeds contrary to law and good morals): deed is void ab initio.",
      },
      {
        number: "Art. 34",
        summary:
          "Fees: notarial document issued only once required documents are submitted and fees paid. Government of Rwanda and certified indigent persons receive services free of charge. Fee amounts and the receiving entity are set by Presidential Order.",
      },
      {
        number: "Art. 36",
        summary:
          "Pre-signing verification obligations: before signing an authentic deed, the notary must verify the identity of each party, verify legal capacity to act, confirm authenticity of signatures, specify the mode of identification used, attest compliance with formalities, and record the date, place, and full names of all witnesses.",
      },
      {
        number: "Art. 37",
        summary:
          "Immovable property contracts: the notary must verify that the transferor actually owns the property. All persons registered on the land title must be present — or produce legally valid documents consenting to the transfer. CRITICAL: a notary who authenticates an immovable property transfer without verifying ownership and consent of all registered holders exposes the deed to nullification.",
      },
      {
        number: "Art. 40",
        summary:
          "Signing formalities: at signing, the notary reads out the content of the deed and explains the meaning and consequences to the parties. All parties and witnesses sign in the notary's presence. Where a party cannot sign due to disability, another person may sign on their behalf with the reason stated. Where a party is absent for non-disability reasons, a duly authorised representative signs.",
      },
      {
        number: "Art. 42",
        summary:
          "Refused notarization: a notary may not notarize a document incompatible with the law. Where notarization is refused and the person requests reasons in writing, the notary must provide written reasons.",
      },
      {
        number: "Art. 44",
        summary:
          "Court challenge of notary's decision: the document owner or any interested person may file a court case against a notary's decision where: (1) the notarized deed does not conform to truth or law; (2) the refusal to notarize has no legal justification; or (3) the notary refuses to return a document. Filed with the competent court in the notary's territorial jurisdiction.",
      },
      {
        number: "Art. 45",
        summary:
          "Record retention: authentic deeds must be kept for ONE HUNDRED (100) YEARS. The notary keeps the original of each deed with its sequential number in a register. The originating entity provides appropriate storage. A private notary's retention modalities are determined by Ministerial Order.",
      },
      {
        number: "Art. 51",
        summary:
          "Nullification: any deed authenticated by a notary in violation of the law shall be nullified by a competent court.",
      },
      {
        number: "Art. 54–55",
        summary:
          "Foreign notary deeds: deeds notarized by a foreign notary have the same probative value as in their country of issuance — but must be confirmed by the Rwanda Embassy in that country AND authenticated by the Ministry of Foreign Affairs. CRITICAL RESTRICTION: a foreign notary CANNOT authenticate contracts for the transfer of immovable property located in Rwanda. Only Rwandan-authorised notaries may notarize Rwanda land transfers.",
      },
    ],
    penalties: [
      "Art. 23 — Private notary: written warning; reprimand; suspension 1–6 months; definitive removal from notarial duties (by Minister)",
      "Art. 24 — Mandatory removal grounds: bribery; misappropriation; fraud; conviction to imprisonment ≥6 months; discrimination; professional incompetence; genocide conviction",
      "Art. 33 — Deed by notary for themselves or close family: annulment of the deed",
      "Art. 33 — Deed contrary to law and good morals: void ab initio",
      "Art. 51 — Deed authenticated contrary to law: nullification by competent court",
      "Art. 18 — Private notary: personally liable for all misconduct in performance of duties (State does not cover negligence, deliberate misconduct, or criminal conduct)",
    ],
    keyDeadlines: [
      "Art. 45 — Mandatory retention period for all authentic notarized deeds: 100 YEARS",
      "Art. 57 — Transitional period for non-compliant notaries at commencement: 12 months to meet new qualification requirements (now expired)",
      "Art. 60 — Commencement: 29 May 2014 (date of Official Gazette publication)",
    ],
    keyObligations: [
      "Any contract the law requires to be in authentic form MUST be notarized — including all land transfers (Land Law Art. 23) (Art. 26)",
      "For immovable property contracts: verify transferor ownership AND ensure all registered title holders are present or have provided written consent (Art. 37)",
      "Verify identity, legal capacity, and signature authenticity of all parties before signing any authentic deed (Art. 36)",
      "Read out the content of the deed and explain its meaning and consequences to parties at signing (Art. 40)",
      "A foreign notary CANNOT notarize Rwanda land transfer contracts — only a Rwandan-authorised notary may do so (Art. 55)",
      "Private notary: personally liable for all misconduct — State protection does not extend to deliberate misconduct, negligence, or criminal convictions (Art. 18)",
      "Maintain authentic deeds for 100 years (Art. 45)",
      "Maintain a register of all authentic deeds received; wills kept in a separate register (Arts. 46–47)",
      "Refuse to notarize deeds incompatible with the law; provide written reasons for refusal if requested (Art. 42)",
    ],
  },
  
  // ── 24. ELECTRONIC TRANSACTIONS LAW ──────────────────────────────────────
  {
    id: "electronic-transactions-22-2016",
    name: "Electronic Transactions Law",
    shortName: "Electronic Transactions",
    number: "Nº 22/2016 of 18/06/2016",
    year: 2016,
    category: "Data & Technology",
    regulator:
      "Rwanda Utilities Regulatory Authority (RURA) — electronic certification services; Ministry responsible for ICT — policy",
    status: "training",
    description:
      "Governs electronic transactions, electronic records, electronic signatures, and the legal validity of contracts concluded electronically in Rwanda. Establishes the legal framework for e-commerce, electronic evidence, and digital certification services.",
    articles: [
      {
        number: "Art. 1",
        summary:
          "Purpose: establishes the legal framework for electronic transactions and recognises their legal validity in Rwanda.",
      },
      {
        number: "Art. 5",
        summary:
          "Electronic records have legal validity: where a law requires information to be in writing, an electronic record satisfies that requirement if the content is accessible for future reference.",
      },
      {
        number: "Art. 7",
        summary:
          "Electronic signature: a signature in electronic form that is attached to or logically associated with an electronic record and identifies the signatory. An advanced electronic signature must be uniquely linked to the signatory, capable of identifying them, and created using data under the signatory's sole control.",
      },
      {
        number: "Art. 11",
        summary:
          "An electronic contract is formed when acceptance of an offer is received by the offeror. An automated information system may form a contract without human intervention — the resulting contract is not invalid solely because no human was involved.",
      },
      {
        number: "Art. 15",
        summary:
          "Electronic records are admissible as evidence in legal proceedings. The court assesses the reliability of the electronic record based on the manner in which it was generated, stored, and communicated.",
      },
      {
        number: "Art. 20",
        summary:
          "Information to be provided in electronic commerce: providers of information society services must disclose their identity, registered address, regulatory details, and key characteristics and price of services offered.",
      },
      {
        number: "Art. 25",
        summary:
          "Any person providing electronic certification services must obtain a licence from RURA.",
      },
    ],
    penalties: [
      "Penalties for violations of electronic transactions obligations are governed by ICT Law Nº 24/2016 administrative sanctions (RURA) — verify specific amounts against current RURA regulations",
    ],
    keyDeadlines: [
      "Electronic certification licence: must be obtained before commencing certification services (Art. 25)",
      "Record retention periods for electronic records: subject to applicable sector-specific retention laws (e.g. 10 years for tax records under Tax Procedures Law)",
    ],
    keyObligations: [
      "Ensure electronic contracts satisfy the same substantive requirements as written contracts (Art. 5, 11)",
      "Use electronic signatures that satisfy legal validity requirements — advanced electronic signatures for higher-risk transactions (Art. 7)",
      "Information society service providers: disclose identity, address, regulatory details, and service characteristics to customers (Art. 20)",
      "Electronic certification service providers: obtain RURA licence before commencing operations (Art. 25)",
      "Maintain electronic records in a manner ensuring their integrity and accessibility for future reference (Art. 5)",
    ],
  },
];

export function generateSystemPrompt(): string {
  const verified = LAWS.filter((l) => l.status === "verified");
  const training = LAWS.filter((l) => l.status === "training");

  const verifiedSection = verified
    .map((law) => {
      const articles = law.articles
        .map((a) => `  ${a.number}: ${a.summary}`)
        .join("\n");
      const penalties = law.penalties.map((p) => `  • ${p}`).join("\n");
      const deadlines = law.keyDeadlines.map((d) => `  • ${d}`).join("\n");
      return `\n── ${law.name} (${law.number}) ✓ GAZETTE VERIFIED\nRegulator: ${law.regulator}\n${articles}\nPenalties:\n${penalties}\nKey Deadlines:\n${deadlines}`;
    })
    .join("\n");

  const trainingSection = training
    .map((law) => {
      const obligations = law.keyObligations
        .map((o) => `  • ${o}`)
        .join("\n");
      return `\n── ${law.name} (${law.number}) ⚠ TRAINING KNOWLEDGE — verify before advising\nRegulator: ${law.regulator}\nKey obligations:\n${obligations}`;
    })
    .join("\n");

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
