// @ts-nocheck
"use client";

import { useState, useRef, useEffect, useCallback } from "react";

const T = {
  bg:"#0c0c0c",sidebar:"#111111",panel:"#141414",card:"#1a1a1a",cardHover:"#1f1f1f",
  border:"rgba(255,255,255,0.07)",borderMid:"rgba(255,255,255,0.10)",
  gold:"#C9A84C",goldBright:"#D4AF37",goldDim:"#8B7030",
  goldBg:"rgba(201,168,76,0.10)",goldBorder:"rgba(201,168,76,0.28)",
  tp:"#F0EBE0",ts:"#9A9080",td:"#5A554C",tm:"#3A3630",
  high:"#D4433A",highBg:"rgba(212,67,58,0.10)",highBorder:"rgba(212,67,58,0.28)",
  medium:"#B8820A",medBg:"rgba(184,130,10,0.10)",
  low:"#3D8A55",lowBg:"rgba(61,138,85,0.10)",
  serif:"'Playfair Display',Georgia,serif",sans:"'Manrope','SF Pro Display',-apple-system,sans-serif",
};

function Icon({id,size=18,color=T.td,sw=1.5}){
  const p:any={width:size,height:size,viewBox:"0 0 24 24",fill:"none",stroke:color,strokeWidth:sw,strokeLinecap:"round",strokeLinejoin:"round"};
  const I:any={
    home:<svg {...p}><path d="M3 12L12 3l9 9"/><path d="M5 10v10a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1V10"/></svg>,
    counsel:<svg {...p}><path d="M12 3v18M3 9l9-6 9 6"/><path d="M5 21h14M5 14l-2 5h4l-2-5zM19 14l-2 5h4l-2-5z"/></svg>,
    workforce:<svg {...p}><circle cx="8" cy="7" r="3"/><path d="M2 21c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="8" r="2.5"/><path d="M21 21c0-2.8-1.8-5.1-4-5.6"/></svg>,
    governance:<svg {...p}><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>,
    dataprotect:<svg {...p}><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/><circle cx="12" cy="16" r="1.2" fill={color} stroke="none"/></svg>,
    regulatory:<svg {...p}><path d="M12 2L4 6v6c0 5.3 3.5 9.7 8 11 4.5-1.3 8-5.7 8-11V6l-8-4z"/></svg>,
    litigation:<svg {...p}><path d="M14 4l6 6-9 9-6-6 9-9zM4.5 20.5l3.5-3.5"/><path d="M9 11l4 4"/></svg>,
    documents:<svg {...p}><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/><path d="M14 2v6h6M8 13h8M8 17h5"/></svg>,
    boardroom:<svg {...p}><circle cx="12" cy="8" r="4"/><path d="M4 22c0-4.4 3.6-8 8-8s8 3.6 8 8"/></svg>,
    search:<svg {...p}><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>,
    bell:<svg {...p}><path d="M18 8A6 6 0 006 8c0 4-2 6-2 6h16s-2-2-2-6"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>,
    shield:<svg {...p}><path d="M12 2l7 4v6c0 5-3.5 9.7-7 11-3.5-1.3-7-6-7-11V6l7-4z"/><path d="M9 12l2 2 4-4"/></svg>,
    arrowup:<svg {...p}><path d="M12 19V5M5 12l7-7 7 7"/></svg>,
    pen:<svg {...p}><path d="M17 3a2.83 2.83 0 014 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>,
    filecheck:<svg {...p}><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/><path d="M14 2v6h6M9 13l2 2 4-4"/></svg>,
    alert:<svg {...p}><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
    board:<svg {...p}><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857a5.002 5.002 0 019.288 0"/></svg>,
    dismiss:<svg {...p}><circle cx="9" cy="7" r="3"/><path d="M3 21v-2a4 4 0 014-4h4"/><path d="M16 11l2 2 4-4"/></svg>,
    regulator:<svg {...p}><path d="M12 2L4 6v6c0 5.3 3.5 9.7 8 11 4.5-1.3 8-5.7 8-11V6l-8-4z"/><path d="M8 12l3 3 5-5"/></svg>,
    databreach:<svg {...p}><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/><path d="M12 15v2"/></svg>,
    contract:<svg {...p}><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M8 10h8M8 14h4"/><path d="M15 16l1.5 1.5L20 14"/></svg>,
    chevdown:<svg {...p}><path d="M6 9l6 6 6-6"/></svg>,
    diamond:<svg {...p} fill={color} stroke="none"><path d="M12 2l3.5 5h5L17 12l3.5 5h-5L12 22l-3.5-5h-5L7 12 3.5 7h5L12 2z"/></svg>,
    check:<svg {...p}><path d="M20 6L9 17l-5-5"/></svg>,
    menu:<svg {...p}><path d="M3 12h18M3 6h18M3 18h18"/></svg>,
    close:<svg {...p}><path d="M18 6L6 18M6 6l12 12"/></svg>,
    clock:<svg {...p}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>,
    calendar:<svg {...p}><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>,
    plus:<svg {...p}><path d="M12 5v14M5 12h14"/></svg>,
    trash:<svg {...p}><path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/></svg>,
    eye:<svg {...p}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
    download:<svg {...p}><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>,
    folder:<svg {...p}><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2v11z"/></svg>,
    tag:<svg {...p}><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>,
    activity:<svg {...p}><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
  };
  return I[id]??<svg {...p}/>;
}

const NAV=[
  {id:"home",label:"Home",icon:"home"},
  {id:"counsel",label:"Counsel",icon:"counsel"},
  {id:"workforce",label:"Workforce",icon:"workforce"},
  {id:"governance",label:"Governance",icon:"governance"},
  {id:"dataprotection",label:"Data Protection",icon:"dataprotect"},
  {id:"tracker",label:"Compliance",icon:"calendar"},
  {id:"matters",label:"Matters",icon:"activity"},
  {id:"documents",label:"Documents",icon:"documents"},
  {id:"boardroom",label:"Boardroom",icon:"boardroom"},
];

const SYSTEM=`You are Me Ngoga — an elite AI legal counsel for Rwanda and international corporate environments. You combine the precision of a Magic Circle associate, the strategy of a General Counsel, and the focus of a crisis adviser.

RESPONSE MODES (auto-select):
DIRECT: specific questions, scenarios, documents → answer immediately, cite exact article, practical steps, no preamble.
RISK ANALYSIS: liability/disputes → (1) preliminary assessment (2) risks identified (3) exposure by track: governance/regulatory/civil/criminal (4) recommended actions.
CLARIFICATION: vague → ask 1-2 precise questions, explain what each determines.

COMMUNICATION: Clear law+facts → state directly and confidently. Hedging on settled law is misleading. Uncertain → "preliminary assessment suggests", "potential exposure under Article X", "may constitute", "subject to regulatory interpretation". Always distinguish confirmed facts vs allegations vs assumptions. Criminal liability → emphasise due process, evidence, prosecutorial determination. Penalties → cite exact figures only when confident. The supervisory authority for data protection is referred to in Law 058/2021 as the authority in charge of cyber security. Use "supervisory authority" or "NCSA" — do not fabricate regulator names.

═══ LAWS LOADED ═══════════════════════════════════════════════════

1. COMPANY LAW — Law No. 019/2023 (amending No. 007/2021)
- Art. 111: Company records must be kept for minimum 10 years
- Art. 116: Beneficial ownership register — changes filed with RDB within 14 days
- Art. 116 bis: Beneficial owner = holds ≥5% shares/voting rights, can appoint/remove directors, or exercises significant control. Must identify natural persons behind corporate structures
- Art. 143: Annual return — filed yearly with RDB, signed by 2 directors
- Art. 172: Company secretary — mandatory for public companies, must be Rwandan resident
- Art. 326: Penalty for failing to keep records — FRW 500,000 to FRW 2,000,000
- Art. 327: Penalty for failing to file returns/documents — FRW 200,000 to FRW 500,000
- Art. 352: False share/ownership information — 3–5 years imprisonment + FRW 5M–10M
- Public companies: additional governance requirements including audit committee, independent directors
- Deregistration: RDB may deregister company for persistent non-compliance; restoration possible but costly

2. LABOUR LAW — Law No. 66/2018 + Amendment No. 027/2023
- Art. 24 bis: ABSOLUTE prohibition on terminating a pregnant employee's contract — no exceptions. Applies regardless of reason including serious misconduct
- Art. 29: Employer may terminate for serious misconduct (faute lourde) but must follow documented disciplinary procedure — written notice, opportunity to respond, proportionate sanction
- Art. 43: Working hours now governed by Ministerial Order (effective 01/01/2023)
- Art. 45: Six mandatory leave types — annual, maternity/paternity, sick, circumstantial, public holiday, authorised absence. All must appear in employment contracts
- Art. 56: Maternity leave for mothers; paternity leave for fathers; additional leave for complications
- Long service (10+ years): enhanced severance obligations and heightened procedural fairness requirements for dismissal
- Dismissal procedure: documented investigation → written charges → hearing with right of representation → reasoned decision → written notification with right of appeal
- Fixed-term contracts: restrictions on successive renewals; may convert to indefinite-term
- RSSB contributions: mandatory employer + employee social security contributions, due monthly
- PAYE: Pay As You Earn tax withheld from salaries, remitted to RRA by 15th of following month

3. DATA PROTECTION — Law No. 058/2021
- Art. 3: Personal data = any info on identified/identifiable person. Sensitive data = race, health, criminal records, religion, political opinion, genetic/biometric, sexual life, family details. Financial data (bank records, loan data, credit information) falls within sensitive data
- Art. 6: Consent must be free, specific, informed, unambiguous. May be oral/written/electronic
- Art. 8: Right to withdraw consent at any time, as easily as giving it
- Art. 9: Children under 16 — parental/guardian consent required
- Art. 10-11: Sensitive data processing only with: consent, legal obligation, vital interests, public health, archiving/research. Must store separately, use encryption/pseudonymisation/tokenisation
- Art. 16-17: Must log all data operations and maintain records of all processing activities
- Art. 18-24: Data subject rights — access (30 days), objection (30 days), portability (30 days), automated decisions, restriction, erasure, rectification. Appeal to supervisory authority within 30 days of unsatisfactory response
- Art. 29: MANDATORY registration as data controller/processor with supervisory authority
- Art. 37: Principles — lawful/fair/transparent, purpose limitation, data minimisation, accuracy, storage limitation, integrity
- Art. 40: DPO required where: public/private corporate body processes data; core activities involve large-scale monitoring; large-scale sensitive data processing
- Art. 42: Must inform data subjects at collection: controller identity, purposes, recipients, voluntary/mandatory, rights, retention period, cross-border transfers
- Art. 43: Data breach — notify supervisory authority within 48 HOURS of becoming aware
- Art. 44: Full breach report to supervisory authority within 72 HOURS
- Art. 45: Notify affected data subjects if breach likely results in high risk to rights/freedoms
- Art. 48: Cross-border transfer requires: supervisory authority authorisation, data subject consent, contract performance, public interest, or legitimate interests
- Art. 49: Written contract required before any cross-border data transfer
- Art. 50: Data MUST be stored IN RWANDA. Storage outside only with specific supervisory authority certificate
- Art. 52: Retain data only until purpose fulfilled. Must DESTROY at end of retention period — cannot be reconstructed
- Art. 53: Admin fines — RWF 2M–5M or 1% of annual global turnover. Corporate bodies: 1% of turnover
- Art. 56: Unlawful access/collection/use/disclosure — 1–3 years + RWF 7M–10M
- Art. 58: Unlawful destruction/alteration — 3–5 years + RWF 7M–10M
- Art. 59: Selling personal data — 5–7 years + RWF 12M–15M
- Art. 60: Unlawful sensitive data processing — 7–10 years + RWF 20M–25M
- Art. 62: Corporate body committing offences — 5% of annual turnover
- Art. 63: Court may order confiscation of items and temporary/permanent closure
- Art. 67: Transitional period expired October 2023 — all entities must now be compliant

4. TAX LAW — Law No. 027/2022 on Tax Procedures + Income Tax Law + VAT Law
[VERIFY ARTICLE NUMBERS AGAINST GAZETTE]
- Corporate Income Tax: standard rate 30% on taxable income. Micro enterprises may qualify for reduced rates
- Personal Income Tax: progressive rates — 0% up to FRW 60,000/month, 20% on FRW 60,001–100,000, 30% above FRW 100,000
- PAYE: employers must withhold and remit by 15th of following month. Failure to remit = employer liability + penalties
- VAT: standard rate 18%. Registration mandatory for businesses with turnover exceeding FRW 20M per year. Must file monthly returns
- Withholding Tax: 15% on dividends, interest, royalties, service fees paid to non-residents (may be reduced by tax treaties). 5% on payments to resident suppliers without TIN
- Transfer Pricing: arm's length principle applies. Related party transactions must be documented. RRA may adjust non-arm's length prices
- Tax Incentives: registered investors may qualify for corporate tax holidays (up to 7 years for priority sectors), preferential rates, customs exemptions through RDB investment certificate
- Tax Administration: RRA is the sole tax authority. Tax assessments can be objected to within 30 days. Appeal to Tax Appeals Tribunal within 30 days of objection decision
- Penalties: late filing — 20% of tax due plus 1.5% monthly interest. Tax evasion — criminal prosecution, fines, imprisonment
- Tax Clearance Certificate: required for government contracts, business licensing, customs clearance
- Fiscal year: generally calendar year (January–December) unless otherwise approved by RRA

5. INVESTMENT LAW — Law No. 006/2021 on Investment Promotion and Facilitation
[VERIFY ARTICLE NUMBERS AGAINST GAZETTE]
- RDB (Rwanda Development Board): one-stop centre for business registration and investment facilitation
- Investment Certificate: required to access fiscal and non-fiscal incentives. Application to RDB with business plan, proof of capital, environmental compliance
- Minimum capital: no statutory minimum for domestic investors. Foreign investors — verify current RDB requirements (previously USD 250,000 for foreign-owned, USD 100,000 for joint ventures)
- Priority sectors: ICT, manufacturing, agriculture/agro-processing, tourism, healthcare, education, financial services, construction, mining, energy
- Incentives: corporate tax holidays (up to 7 years), preferential tax rate of 15% (vs standard 30%), VAT exemption on imported capital goods, customs duty exemptions, free land allocation in Special Economic Zones
- Special Economic Zones (SEZs): Kigali SEZ and others — reduced corporate tax (15%), VAT zero-rating on goods/services, streamlined customs
- Investment guarantees: protection against expropriation (compensation at fair market value), free transfer of funds, access to international arbitration (ICSID, ICC)
- Land: foreign investors cannot own land outright but can hold long-term leases (up to 99 years) registered with the Office of the Registrar of Land Titles
- Employment: investors must prioritise Rwandan nationals; work permits required for foreign employees through DGIE (Directorate General of Immigration and Emigration)
- Reporting: registered investors must file annual progress reports with RDB demonstrating implementation of investment plan

6. INSURANCE LAW — Law No. 002/2023 governing Insurance Business
[VERIFY ARTICLE NUMBERS AGAINST GAZETTE]
- Regulator: National Bank of Rwanda (BNR) — Insurance Supervision Department
- Licensing: all insurance companies, brokers, agents, and loss adjusters must be licensed by BNR. Operating without licence = criminal offence
- Minimum capital requirements: set by BNR regulation — varies by class of insurance (life, general, composite, microinsurance)
- Mandatory insurance: motor third-party liability insurance required for all vehicles. Medical insurance (Mutuelle de Santé for informal sector; private/employer schemes for formal sector). Construction insurance for major projects
- Policyholder protection: duty of utmost good faith, fair claims settlement, complaints mechanism, access to insurance ombudsman
- Reinsurance: mandatory cession to Africa Re or approved regional reinsurers. Excess may be placed internationally
- Investments: insurance companies must invest policyholder funds per BNR investment guidelines — prescribed asset classes and concentration limits
- Reporting: quarterly and annual financial returns to BNR. Actuarial valuation annually for life insurers
- Intermediaries: brokers must hold professional indemnity insurance. Agents must be registered through their principal insurer
- Bancassurance: banks may distribute insurance products subject to BNR approval and compliance with both banking and insurance regulations
- Anti-money laundering: insurance sector subject to AML/CFT obligations — suspicious transaction reporting to Financial Intelligence Centre

7. BANKING LAW — Law No. 048/2017 governing Banking + BNR Regulations
[VERIFY ARTICLE NUMBERS AGAINST GAZETTE]
- Regulator: National Bank of Rwanda (BNR) — primary supervisor of banks and financial institutions
- Licensing: commercial banks, microfinance institutions, and other deposit-taking institutions require BNR licence. Operating without licence = criminal offence with imprisonment and fines
- Capital adequacy: minimum paid-up capital set by BNR (FRW 5 billion for commercial banks — verify current requirement). Capital adequacy ratio: minimum 15% (may be higher by BNR directive)
- Corporate governance: banks must have Board Risk Committee, Audit Committee, and Compliance function. Board composition requirements including independent directors and fit-and-proper tests
- Related party transactions: lending to insiders/related parties restricted and must be reported to BNR. Aggregate exposure limits apply
- Large exposures: single borrower limit — typically 25% of core capital (verify current BNR prudential regulation)
- Liquidity: minimum liquidity ratio prescribed by BNR. Banks must maintain reserves with BNR
- AML/CFT: Law No. 032/2008 on Anti-Money Laundering and Counter-Terrorism Financing (as amended). Customer due diligence (KYC) mandatory. Suspicious transaction reports to Financial Intelligence Centre within 24 hours. Enhanced due diligence for PEPs (politically exposed persons). Record retention minimum 10 years after business relationship ends
- Consumer protection: transparent fee disclosure, fair lending practices, complaints handling mechanism
- BNR enforcement: can impose corrective measures, fines, management removal, license revocation, receivership, or liquidation
- Deposit insurance: deposits protected through deposit guarantee fund — verify current coverage limit
- Reporting: daily, monthly, quarterly, and annual regulatory returns to BNR. Failure to report = administrative penalty
- External audit: annual audit by BNR-approved auditor. Auditor must report material concerns directly to BNR

8. COMPETITION AND CONSUMER PROTECTION — Law No. 036/2012
[VERIFY ARTICLE NUMBERS AGAINST GAZETTE]
- Regulator: Rwanda Inspectorate, Competition and Consumer Protection Authority (RICA)
- Prohibited practices: price fixing, market allocation, bid rigging, abuse of dominant position, resale price maintenance
- Merger control: mergers and acquisitions above prescribed thresholds must be notified to RICA for approval before completion. Gun-jumping (completing before approval) = administrative penalty
- Abuse of dominance: excessive pricing, predatory pricing, exclusive dealing, tying, refusal to deal — prohibited where entity holds dominant market position
- Consumer rights: right to safety, information, choice, fair treatment, redress. Defective products — manufacturer/supplier liable
- Unfair trade practices: misleading advertising, false labelling, unconscionable conduct prohibited
- Penalties: administrative fines up to 10% of annual turnover for competition violations. Criminal sanctions for hard-core cartel conduct
- Private enforcement: affected parties can claim damages in court for competition law violations
- Sector regulators: RICA coordinates with BNR (financial services), RURA (utilities, telecoms), and other sector regulators

9. ENVIRONMENTAL LAW — Law No. 048/2018 on Environment
[VERIFY ARTICLE NUMBERS AGAINST GAZETTE]
- Regulator: Rwanda Environment Management Authority (REMA), operating under the Ministry of Environment
- Environmental Impact Assessment (EIA): mandatory for all projects listed in categories prescribed by Ministerial Order. Must obtain EIA certificate from REMA before commencing construction/operations
- Strategic Environmental Assessment (SEA): required for plans, programmes, and policies
- Polluter Pays Principle: entity causing environmental damage bears cost of remediation and compensation
- Waste management: regulated by REMA. Companies must manage waste responsibly — industrial waste requires licensed waste handler
- Emissions and effluents: standards set by regulation. Manufacturing, mining, and processing operations must comply with emission limits
- Plastic ban: Rwanda prohibits manufacture, import, sale, and use of single-use plastic bags and items (enforced strictly)
- Green building: regulations increasingly require environmental compliance in construction
- Penalties: administrative fines, criminal prosecution for environmental crimes (pollution, illegal waste dumping, operating without EIA), restoration orders, temporary or permanent closure of operations
- Environmental Fund: contributions may be required from polluting industries
- Reporting: annual environmental audits required for operations with significant environmental impact

10. PUBLIC PROCUREMENT — Law No. 062/2018 governing Public Procurement
[VERIFY ARTICLE NUMBERS AGAINST GAZETTE]
- Authority: Rwanda Public Procurement Authority (RPPA) — oversight and regulation
- Scope: applies to all procurement by government entities, state-owned enterprises, and entities using public funds
- Procurement methods: open competitive bidding (default and preferred), restricted tendering, request for quotations (below threshold), direct procurement (exceptional, must be justified), framework agreements
- Thresholds: minimum value thresholds determine procurement method — set by RPPA regulation
- Bidding requirements: public notice, minimum bidding period, sealed bids, bid security, evaluation criteria published in advance
- Domestic preference: margin of preference (typically 10-15%) for domestic suppliers/manufacturers
- Debarment: suppliers guilty of fraud, corruption, or serious contract breach may be debarred from public contracts for specified period
- Contract management: performance guarantees, milestone reporting, variation limits, payment within prescribed timeline
- Complaints and review: bidders may challenge procurement decisions — first to procuring entity, then to Independent Review Panel, then to courts
- Anti-corruption: strict prohibitions on conflicts of interest, bribery, bid rigging. Criminal sanctions apply
- Record keeping: all procurement records retained for minimum period prescribed by regulation
- PPP (Public-Private Partnerships): governed by specific framework — long-term contracts for infrastructure and service delivery

═══ END OF LAWS ═══════════════════════════════════════════════════

IMPORTANT: Laws 4-10 are loaded from training knowledge and article numbers should be verified against the Official Gazette of Rwanda. Laws 1-3 are verified against gazette publications. When citing Laws 4-10, use the provision description rather than asserting specific article numbers unless you are confident. If asked about a specific article number in Laws 4-10, note that verification against the gazette is recommended.

PRE-ANSWER CHECKLIST (run silently):
1. Is this a confirmed fact, an allegation, or an assumption?
2. Am I stating legal risk or legal certainty?
3. Could this statement later appear inaccurate before a court or regulator?
4. Have I separated governance/regulatory/civil/criminal exposure?
5. Am I preserving legal defensibility and professional credibility?
Apply proportionally — settled law gets a direct answer; disputed facts get full scrutiny.`;

// ═══ 1. COMPLIANCE TRACKER ═══════════════════════════════════════════════════
const TODAY=new Date(); TODAY.setHours(0,0,0,0);
const addD=(d,n)=>{const r=new Date(d);r.setDate(r.getDate()+n);return r;};
const addM=(d,n)=>{const r=new Date(d);r.setMonth(r.getMonth()+n);return r;};
const nextAnn=(m,day)=>{const y=TODAY.getFullYear();const d=new Date(y,m-1,day);return d<TODAY?new Date(y+1,m-1,day):d;};
const fmtD=d=>d.toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'});
const daysTo=(d:any)=>Math.ceil((d.getTime()-TODAY.getTime())/(864e5));

const DEADLINES_DATA=[
  {id:'ar',cat:'Company Law',title:'Annual return filing',detail:'Filed yearly, signed by 2 directors. Fine: FRW 200k–500k',art:'Art. 143',date:nextAnn(6,30),rec:'Annual',crit:true},
  {id:'bo',cat:'Company Law',title:'Beneficial ownership — report changes',detail:'File within 14 days of any change',art:'Art. 116',date:addD(TODAY,14),rec:'Within 14 days of change',crit:true},
  {id:'rec',cat:'Company Law',title:'Records retention review',detail:'All records kept minimum 10 years',art:'Art. 111',date:nextAnn(12,31),rec:'Annual',crit:false},
  {id:'cs',cat:'Company Law',title:'Company secretary confirmation',detail:'Public companies must maintain qualified Rwandan-resident secretary',art:'Art. 172',date:nextAnn(1,31),rec:'Annual',crit:false},
  {id:'ec',cat:'Labour Law',title:'Employment contracts audit',detail:'Verify all staff have compliant written contracts',art:'Arts. 43, 45',date:nextAnn(3,31),rec:'Annual',crit:true},
  {id:'lr',cat:'Labour Law',title:'Annual leave register update',detail:'Track and carry forward leave balances',art:'Art. 45',date:nextAnn(1,15),rec:'Jan each year',crit:false},
  {id:'rssb',cat:'Labour Law',title:'RSSB contributions — monthly',detail:'Social security due end of each month',art:'RSSB Act',date:new Date(TODAY.getFullYear(),TODAY.getMonth()+1,0),rec:'Monthly',crit:true},
  {id:'paye',cat:'Labour Law',title:'PAYE filing — monthly',detail:'Remit to RRA by 15th of following month',art:'Income Tax Law',date:new Date(TODAY.getFullYear(),TODAY.getMonth()+1,15),rec:'Monthly',crit:true},
  {id:'preg',cat:'Labour Law',title:'Pregnant employee protection check',detail:'Art. 24 bis: absolute prohibition on termination',art:'Art. 24 bis',date:nextAnn(6,30),rec:'Semi-annual',crit:true},
  {id:'dpr',cat:'Data Protection',title:'Data controller registration renewal',detail:'Apply 45 working days before expiry. No certificate = FRW 2M–5M',art:'Arts. 29, 33',date:addM(TODAY,6),rec:'Per certificate period',crit:true},
  {id:'dpo',cat:'Data Protection',title:'DPO appointment & contact review',detail:'Confirm DPO designated, details published, authority notified',art:'Arts. 40, 41',date:nextAnn(1,31),rec:'Annual',crit:true},
  {id:'dpa',cat:'Data Protection',title:'Processing records & logging audit',detail:'Verify Art. 16 logging and Art. 17 records are complete',art:'Arts. 16, 17',date:nextAnn(6,30),rec:'Semi-annual',crit:true},
  {id:'dpp',cat:'Data Protection',title:'Data retention review & purge',detail:'Destroy data past retention period — cannot be reconstructed',art:'Art. 52',date:nextAnn(12,31),rec:'Annual',crit:true},
  {id:'dpb',cat:'Data Protection',title:'Breach response procedure review',detail:'Test 48hr notification + 72hr report procedure',art:'Arts. 43, 44',date:nextAnn(3,31),rec:'Annual',crit:true},
  {id:'dpi',cat:'Data Protection',title:'Data protection impact assessment',detail:'Review DPIAs for high-risk processing',art:'Art. 38',date:nextAnn(9,30),rec:'Annual',crit:false},
  {id:'dpc',cat:'Data Protection',title:'Consent & privacy notice audit',detail:'Verify consent is valid, notices current, withdrawal easy',art:'Arts. 6, 42',date:nextAnn(6,30),rec:'Semi-annual',crit:false},
  {id:'dpx',cat:'Data Protection',title:'Cross-border transfer contracts',detail:'Written contracts for all transfers outside Rwanda',art:'Arts. 48–50',date:nextAnn(12,31),rec:'Annual',crit:true},
];

function ComplianceTracker(){
  const [done,setDone]=useState({});
  const [filter,setFilter]=useState('all');
  const toggle=id=>setDone(p=>({...p,[id]:!p[id]}));
  const status=(d,isDone)=>{if(isDone)return'done';const days=daysTo(d);return days<0?'overdue':days<=30?'soon':'ok';};
  const cats=Array.from(new Set(DEADLINES_DATA.map(d=>d.cat)));
  const filtered=DEADLINES_DATA.filter(d=>{
    const s=status(d.date,done[d.id]);
    if(filter==='all')return true;
    if(filter==='overdue')return s==='overdue';
    if(filter==='soon')return s==='soon';
    if(filter==='done')return s==='done';
    return d.cat.toLowerCase().includes(filter);
  });
  const overdue=DEADLINES_DATA.filter(d=>status(d.date,done[d.id])==='overdue').length;
  const soon=DEADLINES_DATA.filter(d=>status(d.date,done[d.id])==='soon').length;
  const completed=DEADLINES_DATA.filter(d=>done[d.id]).length;

  return(
    <div className="feature-root">
      <div className="feature-head">
        <p className="feature-label">Compliance tracker</p>
        <h2 className="serif feature-title">Deadlines & obligations</h2>
      </div>
      <div className="feature-body">
        {/* Stats */}
        <div className="tracker-stats">
          <div className="t-stat"><div className="t-stat-val" style={{color:T.high}}>{overdue}</div><div className="t-stat-lbl">Overdue</div></div>
          <div className="t-stat"><div className="t-stat-val" style={{color:T.medium}}>{soon}</div><div className="t-stat-lbl">Due ≤30 days</div></div>
          <div className="t-stat"><div className="t-stat-val" style={{color:T.low}}>{completed}</div><div className="t-stat-lbl">Completed</div></div>
          <div className="t-stat"><div className="t-stat-val" style={{color:T.gold}}>{DEADLINES_DATA.length}</div><div className="t-stat-lbl">Total</div></div>
        </div>
        {overdue>0&&<div className="tracker-alert"><Icon id="alert" size={14} color={T.high}/><span>{overdue} overdue deadline{overdue>1?'s':''}. Immediate action required.</span></div>}
        {/* Filters */}
        <div className="tracker-filters">
          {['all','overdue','soon','done','company','labour','data'].map(f=>(
            <button key={f} onClick={()=>setFilter(f)} className={"t-filter"+(filter===f?' active':'')}>{f==='all'?'All':f==='soon'?'Due soon':f==='company'?'Company Law':f==='labour'?'Labour Law':f==='data'?'Data Protection':f.charAt(0).toUpperCase()+f.slice(1)}</button>
          ))}
        </div>
        {/* Items by category */}
        {cats.map(cat=>{
          const items=filtered.filter(d=>d.cat===cat).sort((a,b)=>{
            if(done[a.id]&&!done[b.id])return 1;if(!done[a.id]&&done[b.id])return -1;return a.date-b.date;
          });
          if(!items.length)return null;
          return(
            <div key={cat} style={{marginBottom:20}}>
              <div className="tracker-cat">{cat}</div>
              {items.map(item=>{
                const s=status(item.date,done[item.id]);const days=daysTo(item.date);
                return(
                  <div key={item.id} className={"tracker-row "+s} onClick={()=>toggle(item.id)}>
                    <div className={"tracker-check "+s}>{done[item.id]&&<Icon id="check" size={10} color="#fff" sw={2.5}/>}</div>
                    <div style={{flex:1,minWidth:0}}>
                      <div className="tracker-title">{item.crit&&!done[item.id]?'★ ':''}{item.title}</div>
                      <div className="tracker-meta">{item.art} · {item.rec} · {item.detail}</div>
                    </div>
                    <div style={{textAlign:'right',flexShrink:0}}>
                      <div className={"tracker-badge "+s}>{s==='done'?'Done':s==='overdue'?Math.abs(days)+'d overdue':days===0?'Today':'In '+days+'d'}</div>
                      <div className="tracker-date">{fmtD(item.date)}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
        {filtered.length===0&&<div style={{textAlign:'center',padding:40,color:T.td}}>No deadlines match this filter.</div>}
      </div>
    </div>
  );
}

// ═══ 2. DOCUMENT LIBRARY ═════════════════════════════════════════════════════
const SAMPLE_DOCS=[
  {id:1,title:'Data Protection & Privacy Policy',type:'Policy',law:'Law 058/2021',created:'28 May 2025',status:'Final',content:'COMPANY DATA PROTECTION POLICY\n\nPursuant to Law No. 058/2021 relating to the protection of personal data and privacy...\n\n1. SCOPE\nThis policy applies to all personal data processed by the Company...\n\n2. DATA PROTECTION OFFICER\nThe Company has designated a Data Protection Officer in accordance with Article 40...\n\n3. LAWFUL PROCESSING\nPersonal data shall only be processed where one of the lawful bases under Article 46 applies...\n\n4. BREACH NOTIFICATION\nIn the event of a personal data breach, the DPO shall notify the supervisory authority within 48 hours (Article 43) and submit a full report within 72 hours (Article 44)...\n\n5. DATA LOCALISATION\nAll personal data shall be stored in Rwanda in accordance with Article 50...'},
  {id:2,title:'Dismissal Letter — Gross Negligence',type:'Letter',law:'Law 66/2018',created:'27 May 2025',status:'Draft',content:'[Company Letterhead]\n\nDate: [DATE]\n\nRe: Termination of Employment — Gross Negligence\n\nDear [Employee Name],\n\nFollowing the disciplinary hearing held on [DATE], at which you were represented by [representative], and having considered your response to the allegations...\n\nThe Company has determined that your conduct constitutes gross negligence as contemplated under the Labour Law...\n\nYour employment is terminated effective [DATE]...\n\nYou are entitled to the following: [severance details]...\n\nYou have the right to contest this decision...'},
  {id:3,title:'Board Resolution — Annual Return',type:'Resolution',law:'Law 019/2023',created:'25 May 2025',status:'Final',content:'BOARD RESOLUTION OF [COMPANY NAME]\n\nResolution passed at a duly convened meeting of the Board of Directors held on [DATE]...\n\nWHEREAS the Company is required under Article 143 of Law No. 019/2023 to file an annual return...\n\nIT IS RESOLVED THAT:\n1. The annual return for the financial year ended [DATE] be prepared and filed...\n2. The return shall be signed by two directors as required by law...\n3. The Company Secretary is authorised to file the return with RDB...'},
];

function DocumentLibrary({onNavigate}){
  const [docs,setDocs]=useState(SAMPLE_DOCS);
  const [view,setView]=useState('list');
  const [activeDoc,setActiveDoc]=useState(null);
  const [search,setSearch]=useState('');
  const [showNew,setShowNew]=useState(false);
  const [newTitle,setNewTitle]=useState('');

  const filtered=docs.filter(d=>d.title.toLowerCase().includes(search.toLowerCase())||d.type.toLowerCase().includes(search.toLowerCase()));

  if(activeDoc){
    const doc=docs.find(d=>d.id===activeDoc);
    if(!doc)return null;
    return(
      <div className="feature-root">
        <div className="feature-head" style={{display:'flex',alignItems:'center',gap:12}}>
          <button onClick={()=>setActiveDoc(null)} className="back-btn">← Back</button>
          <div style={{flex:1}}>
            <p className="feature-label">{doc.type} · {doc.law}</p>
            <h2 className="serif feature-title" style={{fontSize:'clamp(18px,2.5vw,22px)'}}>{doc.title}</h2>
          </div>
          <span className={"doc-status "+(doc.status==='Final'?'final':'draft')}>{doc.status}</span>
        </div>
        <div className="feature-body">
          <div className="doc-content">{doc.content}</div>
          <div className="doc-actions">
            <button className="doc-action-btn" onClick={()=>{const blob=new Blob([doc.content],{type:'text/plain'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=doc.title+'.txt';a.click();}}><Icon id="download" size={14} color={T.gold}/>Export</button>
            <button className="doc-action-btn" onClick={()=>{navigator.clipboard.writeText(doc.content);}}><Icon id="filecheck" size={14} color={T.gold}/>Copy</button>
            <button className="doc-action-btn" style={{marginLeft:'auto',color:T.high}} onClick={()=>{setDocs(p=>p.filter(d=>d.id!==activeDoc));setActiveDoc(null);}}><Icon id="trash" size={14} color={T.high}/>Delete</button>
          </div>
        </div>
      </div>
    );
  }

  return(
    <div className="feature-root">
      <div className="feature-head">
        <p className="feature-label">Documents</p>
        <h2 className="serif feature-title">Document library</h2>
      </div>
      <div className="feature-body">
        <div className="doc-toolbar">
          <div className="doc-search-wrap">
            <Icon id="search" size={14} color={T.td}/>
            <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search documents..."/>
          </div>
          <button className="doc-new-btn" onClick={()=>onNavigate('counsel','Draft a new legal document for our company')}><Icon id="plus" size={14} color="#000"/>New document</button>
        </div>
        <div className="doc-stats">
          <span style={{color:T.ts}}>{docs.length} documents</span>
          <span style={{color:T.low}}>{docs.filter(d=>d.status==='Final').length} final</span>
          <span style={{color:T.medium}}>{docs.filter(d=>d.status==='Draft').length} drafts</span>
        </div>
        {filtered.length===0&&<div style={{textAlign:'center',padding:40,color:T.td}}>No documents found.</div>}
        {filtered.map(doc=>(
          <div key={doc.id} className="doc-row" onClick={()=>setActiveDoc(doc.id)}>
            <div className="doc-icon-wrap"><Icon id="documents" size={18} color={T.gold}/></div>
            <div style={{flex:1,minWidth:0}}>
              <div className="doc-row-title">{doc.title}</div>
              <div className="doc-row-meta">{doc.type} · {doc.law} · {doc.created}</div>
            </div>
            <span className={"doc-status "+(doc.status==='Final'?'final':'draft')}>{doc.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ═══ 3. MATTER MANAGEMENT ════════════════════════════════════════════════════
const STATUSES=['Open','In progress','Under review','Closed'];
const STATUS_COLORS={Open:T.high,'In progress':T.medium,'Under review':T.gold,Closed:T.low};
const INITIAL_MATTERS=[
  {id:1,title:'Redundancy Consultation',area:'Labour Law',risk:'High',status:'In progress',assigned:'David N.',created:'20 May 2025',notes:['Initiated consultation process','Employee representatives notified','Awaiting MIFOTRA guidance']},
  {id:2,title:'Data Breach Investigation',area:'Data Protection',risk:'High',status:'Open',assigned:'DPO',created:'26 May 2025',notes:['Breach detected in HR database','Systems isolated','48hr NCSA deadline approaching']},
  {id:3,title:'Shareholder Dispute',area:'Governance',risk:'Medium',status:'Under review',assigned:'External Counsel',created:'15 May 2025',notes:['Minority shareholder claim received','Board briefed','Mediation proposed']},
  {id:4,title:'Annual Return Filing',area:'Company Law',risk:'Low',status:'In progress',assigned:'Company Secretary',created:'01 May 2025',notes:['Financial statements prepared','Awaiting director signatures']},
];

function MatterManagement({onNavigate}){
  const [matters,setMatters]=useState(INITIAL_MATTERS);
  const [activeMatter,setActiveMatter]=useState(null);
  const [filter,setFilter]=useState('all');
  const [showAdd,setShowAdd]=useState(false);
  const [newTitle,setNewTitle]=useState('');
  const [newArea,setNewArea]=useState('Labour Law');
  const [newRisk,setNewRisk]=useState('Medium');
  const [newNote,setNewNote]=useState('');

  const filtered=matters.filter(m=>{
    if(filter==='all')return true;
    return m.status.toLowerCase().includes(filter.toLowerCase());
  });

  const addMatter=()=>{
    if(!newTitle.trim())return;
    const m={id:Date.now(),title:newTitle,area:newArea,risk:newRisk,status:'Open',assigned:'David N.',created:fmtD(TODAY),notes:[]};
    setMatters(p=>[m,...p]);setNewTitle('');setShowAdd(false);
  };

  const updateStatus=(id,status)=>setMatters(p=>p.map(m=>m.id===id?{...m,status}:m));
  const addNote=(id)=>{
    if(!newNote.trim())return;
    setMatters(p=>p.map(m=>m.id===id?{...m,notes:[...m.notes,newNote]}:m));setNewNote('');
  };

  if(activeMatter){
    const m=matters.find(x=>x.id===activeMatter);
    if(!m)return null;
    return(
      <div className="feature-root">
        <div className="feature-head" style={{display:'flex',alignItems:'flex-start',gap:12}}>
          <button onClick={()=>setActiveMatter(null)} className="back-btn">← Back</button>
          <div style={{flex:1}}>
            <p className="feature-label">{m.area} · {m.created}</p>
            <h2 className="serif feature-title" style={{fontSize:'clamp(18px,2.5vw,22px)'}}>{m.title}</h2>
          </div>
          <div className={"matter-risk r-"+m.risk.toLowerCase()}>{m.risk}</div>
        </div>
        <div className="feature-body">
          {/* Status workflow */}
          <div className="matter-workflow">
            {STATUSES.map((s,i)=>(
              <div key={s} className={"wf-step"+(m.status===s?' active':'')+(STATUSES.indexOf(m.status)>i?' past':'')} onClick={()=>updateStatus(m.id,s)}>
                <div className="wf-dot"/><span className="wf-label">{s}</span>
                {i<STATUSES.length-1&&<div className="wf-line"/>}
              </div>
            ))}
          </div>
          {/* Details grid */}
          <div className="matter-details">
            <div className="md-row"><span className="md-label">Assigned</span><span className="md-val">{m.assigned}</span></div>
            <div className="md-row"><span className="md-label">Status</span><span className="md-val" style={{color:STATUS_COLORS[m.status]}}>{m.status}</span></div>
            <div className="md-row"><span className="md-label">Risk</span><span className="md-val" style={{color:m.risk==='High'?T.high:m.risk==='Medium'?T.medium:T.low}}>{m.risk}</span></div>
            <div className="md-row"><span className="md-label">Law area</span><span className="md-val">{m.area}</span></div>
          </div>
          {/* Timeline */}
          <div className="matter-timeline-title">Activity timeline</div>
          <div className="matter-timeline">
            {m.notes.map((n,i)=>(
              <div key={i} className="mt-item">
                <div className="mt-dot"/>
                <div className="mt-text">{n}</div>
              </div>
            ))}
            {m.notes.length===0&&<div style={{color:T.td,fontSize:13,padding:'8px 0'}}>No notes yet.</div>}
          </div>
          {/* Add note */}
          <div className="matter-add-note">
            <input value={newNote} onChange={e=>setNewNote(e.target.value)} placeholder="Add a note or update..." onKeyDown={e=>{if(e.key==='Enter')addNote(m.id);}}/>
            <button onClick={()=>addNote(m.id)} disabled={!newNote.trim()} className="send-btn-sm"><Icon id="plus" size={14} color={!newNote.trim()?T.td:"#000"} sw={2}/></button>
          </div>
          {/* Ask AI */}
          <button className="matter-ai-btn" onClick={()=>onNavigate('counsel',`Advise on the legal matter: "${m.title}" under ${m.area}. Current status: ${m.status}. Risk level: ${m.risk}. Key notes: ${m.notes.join('; ')}`)}><Icon id="counsel" size={14} color={T.gold}/>Ask Me Ngoga about this matter</button>
        </div>
      </div>
    );
  }

  return(
    <div className="feature-root">
      <div className="feature-head" style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <div><p className="feature-label">Legal matters</p><h2 className="serif feature-title">Matter management</h2></div>
        <button className="doc-new-btn" onClick={()=>setShowAdd(true)}><Icon id="plus" size={14} color="#000"/>New matter</button>
      </div>
      <div className="feature-body">
        {/* Add form */}
        {showAdd&&(
          <div className="matter-add-form">
            <input value={newTitle} onChange={e=>setNewTitle(e.target.value)} placeholder="Matter title..." className="matter-input" onKeyDown={e=>{if(e.key==='Enter')addMatter();}}/>
            <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
              <select value={newArea} onChange={e=>setNewArea(e.target.value)} className="matter-select">
                {['Labour Law','Company Law','Data Protection','Governance','Commercial','Regulatory'].map(a=><option key={a}>{a}</option>)}
              </select>
              <select value={newRisk} onChange={e=>setNewRisk(e.target.value)} className="matter-select">
                {['High','Medium','Low'].map(r=><option key={r}>{r}</option>)}
              </select>
              <button onClick={addMatter} className="matter-save">Create</button>
              <button onClick={()=>setShowAdd(false)} className="matter-cancel">Cancel</button>
            </div>
          </div>
        )}
        {/* Filters */}
        <div className="tracker-filters">
          {['all','Open','In progress','Under review','Closed'].map(f=>(
            <button key={f} onClick={()=>setFilter(f)} className={"t-filter"+(filter===f?' active':'')}>{f==='all'?'All':f}</button>
          ))}
        </div>
        {/* Stats */}
        <div className="tracker-stats" style={{gridTemplateColumns:'repeat(4,1fr)'}}>
          <div className="t-stat"><div className="t-stat-val" style={{color:T.high}}>{matters.filter(m=>m.status==='Open').length}</div><div className="t-stat-lbl">Open</div></div>
          <div className="t-stat"><div className="t-stat-val" style={{color:T.medium}}>{matters.filter(m=>m.status==='In progress').length}</div><div className="t-stat-lbl">In progress</div></div>
          <div className="t-stat"><div className="t-stat-val" style={{color:T.gold}}>{matters.filter(m=>m.status==='Under review').length}</div><div className="t-stat-lbl">In review</div></div>
          <div className="t-stat"><div className="t-stat-val" style={{color:T.low}}>{matters.filter(m=>m.status==='Closed').length}</div><div className="t-stat-lbl">Closed</div></div>
        </div>
        {/* List */}
        {filtered.map(m=>(
          <div key={m.id} className="matter-row" onClick={()=>setActiveMatter(m.id)}>
            <div className="matter-strip" style={{background:STATUS_COLORS[m.status]}}/>
            <div style={{flex:1,minWidth:0}}>
              <div className="matter-row-title">{m.title}</div>
              <div className="matter-row-meta">{m.area} · {m.assigned} · {m.created}</div>
            </div>
            <div style={{textAlign:'right',flexShrink:0}}>
              <div className={"matter-risk r-"+m.risk.toLowerCase()}>{m.risk}</div>
              <div className="matter-row-status" style={{color:STATUS_COLORS[m.status]}}>{m.status}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ═══ CHAT ════════════════════════════════════════════════════════════════════
function ChatView({section,initialQuery,navLabel}){
  const [messages,setMessages]=useState([]);const [input,setInput]=useState("");const [loading,setLoading]=useState(false);
  const br=useRef(null),fired=useRef(false);
  useEffect(()=>{br.current?.scrollIntoView({behavior:"smooth"});},[messages]);
  const send=useCallback(async(text)=>{const q=(text??input).trim();if(!q||loading)return;setInput("");const next=[...messages,{role:"user",content:q}];setMessages(next);setLoading(true);try{const res=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:next,system:SYSTEM})});const data=await res.json();setMessages(p=>[...p,{role:"assistant",content:data.content?.find(b=>b.type==="text")?.text??"No response."}]);}catch{setMessages(p=>[...p,{role:"assistant",content:"Connection error. Please check your internet connection and try again."}]);}setLoading(false);},[input,loading,messages]);
  useEffect(()=>{if(initialQuery&&!fired.current){fired.current=true;send(initialQuery);}},[]);
  const CHIPS={counsel:["Gross negligence — 15 years. Advise.","Data protection obligations?","Breach of employment contract — options?"],workforce:["Dismiss for misconduct — process?","Maternity/paternity leave entitlements","Terminate pregnant employee for performance?"],governance:["Missed annual return?","Beneficial ownership register contents?","Penalties for not keeping records"],dataprotection:["Breach notification deadlines?","When must we appoint DPO?","Store data outside Rwanda?"],boardroom:["CEO legal risk briefing","Data protection summary for board","Top governance risks"]};
  const chips=CHIPS[section]??CHIPS.counsel;
  return(
    <div className="feature-root">
      <div className="feature-head"><p className="feature-label">{navLabel}</p><h2 className="serif feature-title">How can I help you today?</h2></div>
      <div className="chat-msgs">
        {messages.length===0&&<div style={{minWidth:0}}><p style={{fontSize:11,color:T.td,marginBottom:14}}>Start with a scenario</p><div style={{display:'flex',flexWrap:'wrap',gap:8}}>{chips.map(c=><button key={c} onClick={()=>send(c)} className="chip">{c}</button>)}</div></div>}
        {messages.map((m,i)=>(<div key={i} style={{display:"flex",gap:12,justifyContent:m.role==="user"?"flex-end":"flex-start",minWidth:0}}>{m.role==="assistant"&&<div className="avatar">⚖</div>}<div className={"bubble "+(m.role==="user"?"bubble-user":"bubble-ai")}>{m.content}</div></div>))}
        {loading&&<div style={{display:"flex",gap:12}}><div className="avatar">⚖</div><div className="bubble bubble-ai" style={{display:"flex",gap:5,alignItems:"center"}}>{[0,1,2].map(d=><span key={d} className="dot" style={{animationDelay:`${d*0.2}s`}}/>)}</div></div>}
        <div ref={br}/>
      </div>
      <div className="chat-foot">
        <div className="input-wrap"><input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();send();}}} placeholder="Describe your legal issue or question..."/><button onClick={()=>send()} disabled={loading||!input.trim()} className="send-btn"><Icon id="arrowup" size={16} color={loading||!input.trim()?T.td:"#000"} sw={2.5}/></button></div>
      </div>
    </div>
  );
}

// ═══ HOME (condensed — same design) ══════════════════════════════════════════
function Donut(){const cx=50,cy=50,r=36,circ=2*Math.PI*r;const segs=[{p:22,c:T.medium},{p:28,c:T.high},{p:20,c:T.medium},{p:10,c:T.low},{p:20,c:T.medium}];let cum=0;return(<svg width={92} height={92} viewBox="0 0 100 100" style={{flexShrink:0}}><circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth={9}/>{segs.map((s,i)=>{const dash=(s.p/100)*circ;const rot=(cum/100)*360-90;cum+=s.p;return(<circle key={i} cx={cx} cy={cy} r={r} fill="none" stroke={s.c} strokeWidth={9} strokeDasharray={`${dash} ${circ-dash}`} style={{transform:`rotate(${rot}deg)`,transformOrigin:`${cx}px ${cy}px`}}/>);})}<text x={cx} y={cy-5} textAnchor="middle" fill={T.goldBright} fontSize={11} fontWeight={700} fontFamily={T.sans}>MEDIUM</text><text x={cx} y={cy+9} textAnchor="middle" fill={T.td} fontSize={8.5} fontFamily={T.sans}>Overall Risk</text></svg>);}

const RISK_ROWS=[{label:"Governance",level:"Medium",color:T.medium},{label:"Labour",level:"High",color:T.high},{label:"Compliance",level:"Medium",color:T.medium},{label:"Litigation",level:"Low",color:T.low},{label:"Reputation",level:"Medium",color:T.medium}];
const HOME_MATTERS=[{title:"Redundancy Consultation",area:"Labour",risk:"High",color:T.high},{title:"Data Breach Investigation",area:"Data Protection",risk:"High",color:T.high},{title:"Shareholder Dispute",area:"Governance",risk:"Medium",color:T.medium},{title:"Regulator Inquiry – NCSA",area:"Compliance",risk:"Medium",color:T.medium}];
const HOME_DEADLINES=[{title:"NCSA Response",sub:"Due in 5 days",date:"12 May 2025"},{title:"Tax Filing – Q2",sub:"Due in 12 days",date:"19 May 2025"},{title:"Annual General Meeting",sub:"Due in 26 days",date:"02 Jun 2025"}];
const SCENARIOS=[{label:"Board dispute",sub:"Governance",icon:"board",q:"We have a board dispute. Advise."},{label:"Employee dismissal",sub:"Labour Law",icon:"dismiss",q:"Legal process for employee dismissal?"},{label:"Regulator inquiry",sub:"Compliance",icon:"regulator",q:"We received a regulatory inquiry. Obligations?"},{label:"Data breach",sub:"Data Protection",icon:"databreach",q:"Data breach — obligations under Law 058/2021?"},{label:"Contract review",sub:"Commercial",icon:"contract",q:"Commercial contract review under Rwandan law."}];

function Home({onNavigate}){
  const [query,setQuery]=useState("");const h=new Date().getHours();const greeting=h<12?"Good morning":h<17?"Good afternoon":"Good evening";
  return(
    <div className="home-root">
      <div className="home-main">
        <div className="hero"><div className="hero-bg"/><div className="hero-glow"/>
          <div className="hero">
  <div
    className="hero-bg"
    style={{
      backgroundImage: "url('/hero-banner.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  ></div>

  <div className="hero-glow"/>

  <div className="hero-content">
          <div className="hero-content">
            <h1 className="serif hero-h1">{greeting}, David.</h1>
            <h2 className="serif hero-h2">How can I help you today?</h2>
            <p className="hero-tag">Your trusted legal counsel. Always by your side.</p>
            <div className="hero-input-wrap"><div className="hero-input"><input value={query} onChange={e=>setQuery(e.target.value)} onKeyDown={e=>{if(e.key==="Enter"&&query.trim()){onNavigate("counsel",query);setQuery("");}}} placeholder="Describe your legal issue or question..."/><button onClick={()=>{if(query.trim()){onNavigate("counsel",query);setQuery("");}}} className="hero-send"><Icon id="arrowup" size={16} color="#000" sw={2.5}/></button></div></div>
          </div>
        </div>
        <div className="scenarios"><p style={{fontSize:13,color:T.ts,marginBottom:16}}>Start with a scenario</p><div className="scenario-grid">{SCENARIOS.map(sc=><button key={sc.label} onClick={()=>onNavigate("counsel",sc.q)} className="scenario-card"><div className="scenario-icon"><Icon id={sc.icon} size={22} color={T.gold} sw={1.4}/></div><div><p style={{fontSize:12,fontWeight:500,color:T.tp,marginBottom:3,textAlign:"center"}}>{sc.label}</p><p style={{fontSize:10,color:T.td,textAlign:"center"}}>{sc.sub}</p></div></button>)}</div></div>
        <div className="rail-below"><div className="rail-below-grid">
          <section className="rail-card"><div style={{display:'flex',justifyContent:'space-between',marginBottom:16}}><span style={{fontSize:13.5,fontWeight:500,color:T.tp}}>Legal Risk Overview</span><span style={{fontSize:10,color:T.td}}>Updated 2 min ago</span></div><div style={{display:'flex',gap:14,alignItems:'center'}}><Donut/><div style={{flex:1}}>{RISK_ROWS.map(r=><div key={r.label} style={{display:'flex',justifyContent:'space-between',padding:'4.5px 0'}}><div style={{display:'flex',alignItems:'center',gap:7}}><div style={{width:6.5,height:6.5,borderRadius:'50%',background:r.color,boxShadow:`0 0 5px ${r.color}55`}}/><span style={{fontSize:11.5,color:T.ts}}>{r.label}</span></div><span style={{fontSize:11.5,color:r.color,fontWeight:600}}>{r.level}</span></div>)}</div></div></section>
          <section className="rail-card"><div style={{display:'flex',justifyContent:'space-between',marginBottom:13}}><span style={{fontSize:13.5,fontWeight:500,color:T.tp}}>Active Matters</span><button className="link-gold" onClick={()=>onNavigate('matters')}>View all</button></div>{HOME_MATTERS.map((m,i)=><div key={i} style={{display:'flex',alignItems:'center',gap:11,padding:'8px 0',borderBottom:`0.5px solid rgba(255,255,255,0.04)`}}><div style={{width:2.5,height:34,borderRadius:2,background:m.color,flexShrink:0}}/><div style={{flex:1,minWidth:0}}><p style={{fontSize:12.5,color:T.tp,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap',marginBottom:2}}>{m.title}</p><p style={{fontSize:10.5,color:T.td}}>{m.area}</p></div><span style={{fontSize:11.5,color:m.color,fontWeight:600,flexShrink:0}}>{m.risk}</span></div>)}</section>
          <section className="rail-card"><div style={{display:'flex',justifyContent:'space-between',marginBottom:13}}><span style={{fontSize:13.5,fontWeight:500,color:T.tp}}>Upcoming Deadlines</span><button className="link-gold" onClick={()=>onNavigate('tracker')}>View all</button></div>{HOME_DEADLINES.map((d,i)=><div key={i} style={{display:'flex',justifyContent:'space-between',padding:'8px 0',borderBottom:`0.5px solid rgba(255,255,255,0.04)`,gap:8}}><div><p style={{fontSize:12.5,color:T.tp,marginBottom:3}}>{d.title}</p><p style={{fontSize:10.5,color:T.td}}>{d.sub}</p></div><span style={{fontSize:11,color:T.ts,flexShrink:0,whiteSpace:'nowrap'}}>{d.date}</span></div>)}</section>
          <section className="rail-card"><p style={{fontSize:13.5,fontWeight:500,color:T.tp,marginBottom:13}}>Quick Actions</p><div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,marginBottom:8}}>{[{l:"Generate Board Memo",i:"pen"},{l:"Review Contract",i:"filecheck"}].map(a=><button key={a.l} onClick={()=>onNavigate("documents",a.l)} className="qa-btn"><Icon id={a.i} size={14} color={T.gold}/><span style={{fontSize:11,color:T.ts,textAlign:'left',lineHeight:1.3}}>{a.l}</span></button>)}</div><button onClick={()=>onNavigate("counsel","Data breach — advise on crisis response")} className="crisis-btn"><Icon id="alert" size={15} color={T.high}/><span style={{fontSize:11.5,color:T.high,fontWeight:500}}>Crisis Response Center</span></button></section>
        </div></div>
        <div className="home-footer"><Icon id="shield" size={14} color={T.goldDim}/><span style={{fontSize:11,color:T.td}}>Built for leaders. Designed for clarity. Backed by law.</span></div>
      </div>
      {/* Side rail — desktop only */}
      <aside className="rail-side">
        <section style={{borderBottom:`0.5px solid ${T.border}`,padding:'18px 20px'}}><div style={{display:'flex',justifyContent:'space-between',marginBottom:16}}><span style={{fontSize:13.5,fontWeight:500,color:T.tp}}>Legal Risk Overview</span><span style={{fontSize:10,color:T.td}}>Updated 2 min ago</span></div><div style={{display:'flex',gap:14,alignItems:'center'}}><Donut/><div style={{flex:1}}>{RISK_ROWS.map(r=><div key={r.label} style={{display:'flex',justifyContent:'space-between',padding:'4.5px 0'}}><div style={{display:'flex',alignItems:'center',gap:7}}><div style={{width:6.5,height:6.5,borderRadius:'50%',background:r.color,boxShadow:`0 0 5px ${r.color}55`}}/><span style={{fontSize:11.5,color:T.ts}}>{r.label}</span></div><span style={{fontSize:11.5,color:r.color,fontWeight:600}}>{r.level}</span></div>)}</div></div></section>
        <section style={{borderBottom:`0.5px solid ${T.border}`,padding:'17px 20px'}}><div style={{display:'flex',justifyContent:'space-between',marginBottom:13}}><span style={{fontSize:13.5,fontWeight:500,color:T.tp}}>Active Matters</span><button className="link-gold" onClick={()=>onNavigate('matters')}>View all</button></div>{HOME_MATTERS.map((m,i)=><div key={i} style={{display:'flex',alignItems:'center',gap:11,padding:'8px 0',borderBottom:`0.5px solid rgba(255,255,255,0.04)`}}><div style={{width:2.5,height:34,borderRadius:2,background:m.color,flexShrink:0}}/><div style={{flex:1,minWidth:0}}><p style={{fontSize:12.5,color:T.tp,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap',marginBottom:2}}>{m.title}</p><p style={{fontSize:10.5,color:T.td}}>{m.area}</p></div><span style={{fontSize:11.5,color:m.color,fontWeight:600,flexShrink:0}}>{m.risk}</span></div>)}</section>
        <section style={{borderBottom:`0.5px solid ${T.border}`,padding:'17px 20px'}}><div style={{display:'flex',justifyContent:'space-between',marginBottom:13}}><span style={{fontSize:13.5,fontWeight:500,color:T.tp}}>Upcoming Deadlines</span><button className="link-gold" onClick={()=>onNavigate('tracker')}>View all</button></div>{HOME_DEADLINES.map((d,i)=><div key={i} style={{display:'flex',justifyContent:'space-between',padding:'8px 0',borderBottom:`0.5px solid rgba(255,255,255,0.04)`,gap:8}}><div><p style={{fontSize:12.5,color:T.tp,marginBottom:3}}>{d.title}</p><p style={{fontSize:10.5,color:T.td}}>{d.sub}</p></div><span style={{fontSize:11,color:T.ts,flexShrink:0,whiteSpace:'nowrap'}}>{d.date}</span></div>)}</section>
        <section style={{padding:'17px 20px'}}><p style={{fontSize:13.5,fontWeight:500,color:T.tp,marginBottom:13}}>Quick Actions</p><div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,marginBottom:8}}>{[{l:"Generate Board Memo",i:"pen"},{l:"Review Contract",i:"filecheck"}].map(a=><button key={a.l} onClick={()=>onNavigate("documents",a.l)} className="qa-btn"><Icon id={a.i} size={14} color={T.gold}/><span style={{fontSize:11,color:T.ts,textAlign:'left',lineHeight:1.3}}>{a.l}</span></button>)}</div><button onClick={()=>onNavigate("counsel","Data breach — crisis response obligations")} className="crisis-btn"><Icon id="alert" size={15} color={T.high}/><span style={{fontSize:11.5,color:T.high,fontWeight:500}}>Crisis Response Center</span></button></section>
      </aside>
    </div>
  );
}

// ═══ APP ═════════════════════════════════════════════════════════════════════
export default function MeNgoga(){
  const [section,setSection]=useState("home");const [chatQuery,setChatQuery]=useState("");const [chatKey,setChatKey]=useState(0);const [mobileNav,setMobileNav]=useState(false);
  const navigate=(sec,q)=>{setSection(sec);setMobileNav(false);if(q){setChatQuery(q);setChatKey(k=>k+1);}};
  const chatSections=["counsel","workforce","governance","dataprotection","boardroom"];
  const isChat=chatSections.includes(section);
  const activeNav=NAV.find(n=>n.id===section);

  return(
    <div className="ngoga-app"><style>{CSS}</style>
      <aside className={"sidebar"+(mobileNav?" open":"")}>
        <div className="sb-logo"><div className="sb-logo-row"><div className="sb-mark"><Icon id="diamond" size={14} color={T.gold}/></div><span className="serif sb-word"><span style={{color:T.tp}}>Me </span><span style={{color:T.gold}}>Ngoga</span></span></div><p className="sb-sub">Executive Legal Intelligence<br/>for Rwanda</p></div>
        <nav className="sb-nav">{NAV.map(n=>{const active=section===n.id;return(<button key={n.id} onClick={()=>navigate(n.id)} title={n.label} className={"sb-item"+(active?" active":"")}><Icon id={n.icon} size={17} color={active?T.gold:T.td}/><span className="sb-label">{n.label}</span></button>);})}</nav>
        <div className="sb-user"><div className="sb-user-row"><div className="sb-avatar">DN</div><div className="sb-user-meta"><p style={{fontSize:13,fontWeight:500,color:T.tp}}>David N.</p><p style={{fontSize:10.5,color:T.td}}>General Counsel</p></div><Icon id="chevdown" size={14} color={T.td}/></div></div>
      </aside>
      {mobileNav&&<div className="scrim" onClick={()=>setMobileNav(false)}/>}
      <div className="main-col">
        <div className="topbar">
          <button className="mobile-menu-btn" onClick={()=>setMobileNav(o=>!o)}><Icon id={mobileNav?"close":"menu"} size={20} color={T.ts}/></button>
          <div className="topbar-search"><Icon id="search" size={15} color={T.td} sw={1.8}/><input placeholder="Search laws, matters, documents..." onKeyDown={e=>{if(e.key==="Enter"&&e.target.value.trim()){navigate("counsel",e.target.value);e.target.value="";}}}/></div>
          <div className="topbar-actions"><button className="icon-btn" style={{position:"relative"}}><Icon id="bell" size={19} color={T.td}/><span className="bell-dot"/></button><button className="icon-btn"><Icon id="shield" size={19} color={T.td}/></button></div>
        </div>
        <div className="page">
          {section==="home"&&<Home onNavigate={navigate}/>}
          {section==="tracker"&&<ComplianceTracker/>}
          {section==="documents"&&<DocumentLibrary onNavigate={navigate}/>}
          {section==="matters"&&<MatterManagement onNavigate={navigate}/>}
          {isChat&&<ChatView key={`${section}-${chatKey}`} section={section} initialQuery={section==="counsel"?chatQuery:""} navLabel={activeNav?.label??section}/>}
        </div>
      </div>
    </div>
  );
}

const CSS=`
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700&family=Playfair+Display:wght@400;500;600&display=swap');
*{box-sizing:border-box;margin:0;padding:0;}
html,body{width:100%;min-height:100%;background:#0c0c0c;}
.ngoga-app *{font-family:${T.sans};}
.ngoga-app .serif{font-family:${T.serif};}
::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.08);border-radius:4px}
input::placeholder{color:#3a3530}button{outline:none;-webkit-tap-highlight-color:transparent;border:none;background:none;cursor:pointer;}
select{background:${T.card};color:${T.tp};border:0.5px solid ${T.border};border-radius:8px;padding:8px 12px;font-size:12px;font-family:${T.sans};}
@keyframes ngp{0%,80%,100%{opacity:.25;transform:scale(.8)}40%{opacity:1;transform:scale(1.15)}}

.ngoga-app{display:grid;grid-template-columns:240px minmax(0,1fr);height:100vh;width:100vw;max-width:100%;background:${T.bg};color:${T.tp};overflow:hidden;}
.sidebar{grid-column:1;grid-row:1;background:${T.sidebar};border-right:0.5px solid ${T.border};display:flex;flex-direction:column;overflow:hidden;z-index:50;}
.sb-logo{padding:22px 20px 16px}.sb-logo-row{display:flex;align-items:center;gap:10px;margin-bottom:7px}.sb-mark{width:33px;height:33px;border-radius:8px;background:linear-gradient(145deg,#2e1f00,#1a1200);border:0.5px solid ${T.goldBorder};display:flex;align-items:center;justify-content:center;flex-shrink:0}.sb-word{font-size:22px;font-weight:500;white-space:nowrap}.sb-sub{font-size:8.5px;color:${T.td};letter-spacing:0.13em;text-transform:uppercase;padding-left:43px;line-height:1.6}
.sb-nav{flex:1;padding:6px 10px;overflow-y:auto}.sb-item{display:flex;align-items:center;gap:11px;width:100%;padding:8.5px 12px;margin-bottom:2px;border-left:2px solid transparent;border-radius:8px;color:${T.td};transition:all .15s;min-width:0}.sb-item:hover{background:rgba(255,255,255,0.035);color:${T.ts}}.sb-item.active{background:rgba(201,168,76,0.07);border-left:2px solid ${T.gold};border-radius:0 8px 8px 0;color:${T.gold}}.sb-item.active .sb-label{font-weight:500}.sb-label{font-size:13px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.sb-user{padding:12px 14px 16px;border-top:0.5px solid ${T.border}}.sb-user-row{display:flex;align-items:center;gap:10px;cursor:pointer}.sb-user-row:hover{opacity:.8}.sb-avatar{width:35px;height:35px;border-radius:8px;background:linear-gradient(145deg,#2e1f00,#3d2a08);border:0.5px solid ${T.goldBorder};display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:${T.gold};flex-shrink:0}.sb-user-meta{flex:1;min-width:0}
.scrim{display:none;position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:40}

.main-col{grid-column:2;grid-row:1;display:flex;flex-direction:column;overflow:hidden;min-width:0}
.topbar{height:52px;display:flex;align-items:center;padding:0 28px;border-bottom:0.5px solid ${T.border};gap:16px;background:rgba(0,0,0,0.35);backdrop-filter:blur(8px);flex-shrink:0;min-width:0}
.mobile-menu-btn{display:none;padding:6px;border-radius:8px;flex-shrink:0}.mobile-menu-btn:hover{background:rgba(255,255,255,0.05)}
.topbar-search{flex:1;max-width:490px;min-width:0;display:flex;align-items:center;gap:9px;background:rgba(255,255,255,0.04);border:0.5px solid ${T.border};border-radius:8px;padding:7px 13px;transition:border-color .2s}.topbar-search:focus-within{border-color:${T.goldBorder}}.topbar-search input{flex:1;min-width:0;background:none;border:none;outline:none;color:${T.tp};font-size:13px}
.topbar-actions{margin-left:auto;display:flex;align-items:center;gap:16px;flex-shrink:0}.icon-btn{padding:4px}.bell-dot{position:absolute;top:2px;right:1px;width:7px;height:7px;border-radius:50%;background:${T.high};border:2px solid ${T.bg}}
.page{flex:1;overflow:hidden;min-height:0;min-width:0}

/* Feature views (shared) */
.feature-root{display:flex;flex-direction:column;height:100%;min-height:0;background:${T.bg}}
.feature-head{padding:clamp(18px,3vw,28px) clamp(20px,4vw,40px) 18px;border-bottom:0.5px solid ${T.border};flex-shrink:0}
.feature-label{font-size:11px;color:${T.td};letter-spacing:0.12em;text-transform:uppercase;margin-bottom:7px;font-weight:500}
.feature-title{font-size:clamp(20px,3vw,26px);font-weight:400;color:${T.tp};letter-spacing:-0.01em}
.feature-body{flex:1;overflow-y:auto;min-height:0;padding:22px clamp(20px,4vw,40px)}
.back-btn{font-size:12px;color:${T.gold};padding:6px 12px;border:0.5px solid ${T.goldBorder};border-radius:8px;background:${T.goldBg};flex-shrink:0;transition:all .18s}.back-btn:hover{background:rgba(201,168,76,0.18)}

/* Tracker */
.tracker-stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;margin-bottom:16px}
.t-stat{background:${T.card};border:0.5px solid ${T.border};border-radius:10px;padding:14px 16px}.t-stat-val{font-size:24px;font-weight:500}.t-stat-lbl{font-size:11px;color:${T.td};margin-top:2px}
.tracker-alert{display:flex;align-items:center;gap:8px;background:${T.highBg};border:0.5px solid ${T.highBorder};border-radius:8px;padding:10px 14px;margin-bottom:14px;font-size:12px;color:${T.high}}
.tracker-filters{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:16px}
.t-filter{font-size:11px;padding:5px 12px;border-radius:99px;border:0.5px solid ${T.border};color:${T.ts};background:${T.card};transition:all .15s}.t-filter:hover{border-color:${T.goldBorder};color:${T.gold}}.t-filter.active{background:${T.goldBg};border-color:${T.goldBorder};color:${T.gold}}
.tracker-cat{font-size:10.5px;color:${T.td};letter-spacing:0.1em;text-transform:uppercase;margin-bottom:8px;padding-bottom:6px;border-bottom:0.5px solid ${T.border}}
.tracker-row{display:flex;align-items:flex-start;gap:12px;padding:10px 12px;border:0.5px solid ${T.border};border-radius:8px;margin-bottom:6px;background:${T.card};cursor:pointer;transition:all .15s}.tracker-row:hover{border-color:${T.borderMid}}
.tracker-row.overdue{background:${T.highBg};border-color:${T.highBorder}}.tracker-row.soon{background:${T.medBg};border-color:rgba(184,130,10,0.25)}.tracker-row.done{opacity:0.5}
.tracker-check{width:18px;height:18px;border-radius:5px;border:1.5px solid ${T.border};display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px;transition:all .15s}.tracker-check.done{background:${T.low};border-color:${T.low}}.tracker-check.overdue{border-color:${T.high}}.tracker-check.soon{border-color:${T.medium}}
.tracker-title{font-size:13px;font-weight:500;color:${T.tp};margin-bottom:3px}.tracker-row.done .tracker-title{text-decoration:line-through;color:${T.td}}
.tracker-meta{font-size:11px;color:${T.td};line-height:1.5}
.tracker-badge{font-size:10px;padding:2px 8px;border-radius:99px;font-weight:500;margin-bottom:4px;display:inline-block}
.tracker-badge.overdue{background:${T.highBg};color:${T.high}}.tracker-badge.soon{background:${T.medBg};color:${T.medium}}.tracker-badge.ok{background:${T.lowBg};color:${T.low}}.tracker-badge.done{background:rgba(255,255,255,0.04);color:${T.td}}
.tracker-date{font-size:10px;color:${T.td}}

/* Documents */
.doc-toolbar{display:flex;gap:10px;margin-bottom:14px;flex-wrap:wrap}
.doc-search-wrap{flex:1;min-width:200px;display:flex;align-items:center;gap:8px;background:${T.card};border:0.5px solid ${T.border};border-radius:8px;padding:8px 12px;transition:border-color .2s}.doc-search-wrap:focus-within{border-color:${T.goldBorder}}.doc-search-wrap input{flex:1;min-width:0;background:none;border:none;outline:none;color:${T.tp};font-size:13px}
.doc-new-btn{display:flex;align-items:center;gap:6px;padding:8px 16px;background:linear-gradient(135deg,${T.goldBright},${T.gold});border-radius:8px;color:#000;font-size:12px;font-weight:600;flex-shrink:0;transition:opacity .18s}.doc-new-btn:hover{opacity:.85}
.doc-stats{display:flex;gap:14px;font-size:11px;margin-bottom:16px}
.doc-row{display:flex;align-items:center;gap:12px;padding:12px 14px;border:0.5px solid ${T.border};border-radius:10px;margin-bottom:6px;background:${T.card};cursor:pointer;transition:all .18s}.doc-row:hover{border-color:${T.goldBorder};background:${T.cardHover}}
.doc-icon-wrap{width:38px;height:38px;border-radius:8px;background:${T.goldBg};border:0.5px solid ${T.goldBorder};display:flex;align-items:center;justify-content:center;flex-shrink:0}
.doc-row-title{font-size:13px;font-weight:500;color:${T.tp};margin-bottom:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.doc-row-meta{font-size:11px;color:${T.td}}
.doc-status{font-size:10px;padding:3px 10px;border-radius:99px;font-weight:500;flex-shrink:0}
.doc-status.final{background:${T.lowBg};color:${T.low};border:0.5px solid rgba(61,138,85,0.25)}
.doc-status.draft{background:${T.medBg};color:${T.medium};border:0.5px solid rgba(184,130,10,0.25)}
.doc-content{font-size:13.5px;line-height:1.8;color:#B8B0A0;white-space:pre-wrap;padding:20px;background:${T.card};border:0.5px solid ${T.border};border-radius:10px;margin-bottom:16px;max-height:50vh;overflow-y:auto}
.doc-actions{display:flex;gap:8px;flex-wrap:wrap}
.doc-action-btn{display:flex;align-items:center;gap:6px;padding:8px 14px;background:${T.card};border:0.5px solid ${T.border};border-radius:8px;font-size:12px;color:${T.ts};transition:all .18s}.doc-action-btn:hover{border-color:${T.goldBorder};background:${T.goldBg}}

/* Matters */
.matter-row{display:flex;align-items:center;gap:12px;padding:12px 14px;border:0.5px solid ${T.border};border-radius:10px;margin-bottom:6px;background:${T.card};cursor:pointer;transition:all .18s}.matter-row:hover{border-color:${T.goldBorder};background:${T.cardHover}}
.matter-strip{width:3px;height:40px;border-radius:2px;flex-shrink:0}
.matter-row-title{font-size:13px;font-weight:500;color:${T.tp};margin-bottom:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.matter-row-meta{font-size:11px;color:${T.td}}
.matter-risk{font-size:10px;padding:3px 10px;border-radius:99px;font-weight:600;flex-shrink:0}
.r-high{background:${T.highBg};color:${T.high};border:0.5px solid ${T.highBorder}}
.r-medium{background:${T.medBg};color:${T.medium};border:0.5px solid rgba(184,130,10,0.25)}
.r-low{background:${T.lowBg};color:${T.low};border:0.5px solid rgba(61,138,85,0.25)}
.matter-row-status{font-size:10px;margin-top:4px}
.matter-add-form{background:${T.card};border:0.5px solid ${T.goldBorder};border-radius:10px;padding:16px;margin-bottom:16px}
.matter-input{width:100%;background:none;border:none;border-bottom:0.5px solid ${T.border};outline:none;color:${T.tp};font-size:14px;padding:8px 0;margin-bottom:12px;font-family:${T.sans}}
.matter-save{padding:8px 16px;background:linear-gradient(135deg,${T.goldBright},${T.gold});border-radius:8px;color:#000;font-size:12px;font-weight:600}
.matter-cancel{padding:8px 16px;border:0.5px solid ${T.border};border-radius:8px;color:${T.ts};font-size:12px}
.matter-workflow{display:flex;align-items:center;gap:0;margin-bottom:24px;overflow-x:auto;padding:4px 0}
.wf-step{display:flex;align-items:center;gap:6px;cursor:pointer;flex-shrink:0;padding:4px 0}
.wf-dot{width:12px;height:12px;border-radius:50%;border:2px solid ${T.border};background:${T.card};transition:all .15s}
.wf-step.active .wf-dot{background:${T.gold};border-color:${T.gold};box-shadow:0 0 8px ${T.goldBg}}
.wf-step.past .wf-dot{background:${T.low};border-color:${T.low}}
.wf-label{font-size:11px;color:${T.td};white-space:nowrap}.wf-step.active .wf-label{color:${T.gold};font-weight:500}.wf-step.past .wf-label{color:${T.low}}
.wf-line{width:40px;height:1px;background:${T.border};margin:0 4px;flex-shrink:0}.wf-step.past+.wf-step .wf-line,.wf-step.past .wf-line{background:${T.low}}
.matter-details{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:24px}
.md-row{background:${T.card};border:0.5px solid ${T.border};border-radius:8px;padding:12px 14px}.md-label{font-size:11px;color:${T.td};display:block;margin-bottom:4px}.md-val{font-size:13px;font-weight:500}
.matter-timeline-title{font-size:10.5px;color:${T.td};letter-spacing:0.1em;text-transform:uppercase;margin-bottom:12px}
.matter-timeline{position:relative;padding-left:20px;margin-bottom:20px}.matter-timeline::before{content:'';position:absolute;left:5px;top:4px;bottom:4px;width:0.5px;background:${T.border}}
.mt-item{position:relative;padding:6px 0}.mt-dot{position:absolute;left:-18px;top:10px;width:7px;height:7px;border-radius:50%;background:${T.gold};border:1px solid ${T.goldBorder}}.mt-text{font-size:13px;color:${T.ts};line-height:1.5}
.matter-add-note{display:flex;gap:8px;margin-bottom:16px}.matter-add-note input{flex:1;min-width:0;background:${T.card};border:0.5px solid ${T.border};border-radius:8px;padding:10px 14px;color:${T.tp};font-size:13px;outline:none;font-family:${T.sans}}.matter-add-note input:focus{border-color:${T.goldBorder}}
.send-btn-sm{width:36px;height:36px;border-radius:8px;background:linear-gradient(135deg,${T.goldBright},${T.gold});display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all .18s}.send-btn-sm:disabled{background:rgba(255,255,255,0.05);cursor:not-allowed}
.matter-ai-btn{display:flex;align-items:center;gap:8px;padding:10px 16px;background:${T.goldBg};border:0.5px solid ${T.goldBorder};border-radius:8px;color:${T.gold};font-size:12px;font-weight:500;transition:all .18s;width:100%}.matter-ai-btn:hover{background:rgba(201,168,76,0.18)}
.matter-select{appearance:none;cursor:pointer}

/* Chat */
.chat-msgs{flex:1;overflow-y:auto;min-height:0;padding:22px clamp(20px,4vw,40px);display:flex;flex-direction:column;gap:18px}
.chip{padding:9px 15px;background:${T.card};border:0.5px solid ${T.border};border-radius:8px;color:${T.ts};font-size:12px;text-align:left;max-width:100%;transition:all .18s}.chip:hover{border-color:${T.goldBorder};color:${T.gold};background:${T.goldBg}}
.avatar{width:30px;height:30px;border-radius:8px;background:linear-gradient(135deg,#1e1600,#2a1f00);border:0.5px solid ${T.goldBorder};display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px;font-size:13px}
.bubble{max-width:min(72%,640px);padding:12px 16px;font-size:13.5px;line-height:1.72;white-space:pre-wrap;overflow-wrap:anywhere}
.bubble-user{border-radius:12px 12px 3px 12px;background:${T.goldBg};border:0.5px solid ${T.goldBorder};color:${T.tp}}
.bubble-ai{border-radius:12px 12px 12px 3px;background:rgba(255,255,255,0.03);border:0.5px solid ${T.border};color:#B8B0A0}
.dot{width:5px;height:5px;border-radius:50%;background:${T.goldDim};animation:ngp 1.2s infinite}
.chat-foot{padding:14px clamp(20px,4vw,40px) 22px;border-top:0.5px solid ${T.border};flex-shrink:0}
.input-wrap{display:flex;align-items:center;gap:10px;background:${T.card};border:0.5px solid ${T.borderMid};border-radius:11px;padding:4px 6px 4px 18px;transition:border-color .2s}.input-wrap:focus-within{border-color:${T.goldBorder}}.input-wrap input{flex:1;min-width:0;background:none;border:none;outline:none;color:${T.tp};font-size:13.5px;padding:10px 0}
.send-btn{width:36px;height:36px;border-radius:8px;background:linear-gradient(135deg,${T.goldBright},${T.gold});display:flex;align-items:center;justify-content:center;flex-shrink:0}.send-btn:disabled{background:rgba(255,255,255,0.05);cursor:not-allowed}
.link-gold{font-size:11px;color:${T.gold}}.qa-btn{padding:11px 12px;background:${T.card};border:0.5px solid ${T.border};border-radius:8px;display:flex;align-items:center;gap:8px;transition:all .18s;min-width:0}.qa-btn:hover{border-color:${T.goldBorder};background:${T.goldBg}}
.crisis-btn{width:100%;padding:11px 14px;background:${T.highBg};border:0.5px solid ${T.highBorder};border-radius:8px;display:flex;align-items:center;gap:9px;transition:all .18s}.crisis-btn:hover{background:rgba(212,67,58,0.16)}

/* Home */
.home-root{display:grid;grid-template-columns:minmax(0,1fr) 380px;height:100%;overflow:hidden}
.home-main{display:flex;flex-direction:column;min-width:0;height:100%;overflow-y:auto;overflow-x:hidden}
.rail-side{border-left:0.5px solid ${T.border};background:${T.panel};overflow-y:auto;min-width:0;display:flex;flex-direction:column}
.rail-below{display:none;padding:0 clamp(22px,4vw,44px)}.rail-below-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:14px;padding:4px 0 24px}
.rail-card{background:${T.panel};border:0.5px solid ${T.border};border-radius:12px;padding:18px 20px}
.hero{position:relative;flex-shrink:0;min-height:clamp(280px,38vh,400px);overflow:hidden}
.hero-bg{position:absolute;inset:0;background:linear-gradient(160deg,#0c0c0c 0%,#140e00 45%,#0f0a00 70%,#0c0c0c 100%)}
.hero-glow{position:absolute;inset:0;background:radial-gradient(ellipse at 35% 60%,rgba(201,168,76,0.07) 0%,transparent 55%)}
.hero-kcc{position:absolute;right:0;bottom:0;height:92%;max-width:62%;opacity:0.26;pointer-events:none}
.hero-content{position:relative;z-index:2;padding:clamp(32px,5vw,52px) clamp(22px,4vw,48px) clamp(24px,3vw,36px);max-width:780px}
.hero-h1{font-size:clamp(30px,4.6vw,46px);font-weight:400;color:${T.tp};letter-spacing:-0.01em;line-height:1.12;margin-bottom:2px;text-wrap:balance}
.hero-h2{font-size:clamp(28px,4.2vw,44px);font-weight:400;color:${T.gold};letter-spacing:-0.01em;line-height:1.12;margin-bottom:18px;text-wrap:balance}
.hero-tag{font-size:clamp(13px,1.4vw,14px);color:${T.ts};font-weight:300;margin-bottom:clamp(24px,3vw,34px)}
.hero-input-wrap{max-width:560px}.hero-input{display:flex;align-items:center;gap:12px;background:rgba(255,255,255,0.045);border:0.5px solid rgba(255,255,255,0.13);border-radius:11px;padding:12px 14px;backdrop-filter:blur(16px);transition:all .22s}.hero-input:focus-within{border-color:${T.goldBorder};background:rgba(255,255,255,0.065)}.hero-input input{flex:1;min-width:0;background:none;border:none;outline:none;color:${T.tp};font-size:14px}
.hero-send{width:36px;height:36px;border-radius:8px;background:linear-gradient(135deg,${T.goldBright},${T.gold});display:flex;align-items:center;justify-content:center;flex-shrink:0}
.scenarios{padding:6px clamp(22px,4vw,48px) clamp(28px,4vw,40px);flex-shrink:0}
.scenario-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px}
.scenario-card{padding:18px 14px 16px;background:${T.card};border:0.5px solid ${T.border};border-radius:10px;display:flex;flex-direction:column;align-items:center;gap:12px;transition:all .2s;min-width:0}.scenario-card:hover{background:${T.cardHover};border-color:${T.goldBorder}}
.scenario-icon{width:44px;height:44px;border-radius:10px;background:${T.goldBg};border:0.5px solid ${T.goldBorder};display:flex;align-items:center;justify-content:center}
.home-footer{margin-top:auto;padding:14px clamp(22px,4vw,48px);border-top:0.5px solid ${T.border};display:flex;align-items:center;gap:8px;flex-shrink:0}

@media(max-width:1279px){.ngoga-app{grid-template-columns:220px minmax(0,1fr)}.home-root{grid-template-columns:minmax(0,1fr) 320px}}
@media(max-width:1023px){.ngoga-app{grid-template-columns:200px minmax(0,1fr)}.home-root{grid-template-columns:1fr}.rail-side{display:none}.rail-below{display:block}}
@media(max-width:767px){.ngoga-app{grid-template-columns:1fr}.main-col{grid-column:1}.sidebar{grid-column:auto;grid-row:auto;position:fixed;left:0;top:0;bottom:0;width:260px;transform:translateX(-100%);transition:transform .25s ease;z-index:60}.sidebar.open{transform:translateX(0)}.scrim{display:block}.sidebar:not(.open)~.scrim{display:none}.mobile-menu-btn{display:flex}.topbar{padding:0 16px;gap:12px}.scenario-grid{grid-template-columns:repeat(2,1fr)}.matter-details{grid-template-columns:1fr}.matter-workflow{flex-wrap:wrap}}
@media(max-width:480px){.scenario-grid{grid-template-columns:1fr 1fr;gap:10px}.hero-content{padding:28px 18px 24px}.hero-h1{font-size:28px}.hero-h2{font-size:26px}.bubble{max-width:88%}.rail-below{padding:0 16px}.tracker-stats{grid-template-columns:1fr 1fr}}
`;
