// @ts-nocheck
"use client";
import { useState, useRef, useEffect } from "react";
import { generateSystemPrompt } from "@/lib/laws";

// ═══ THEME ═══════════════════════════════════════════════════════════════════
const T = {
  bg: "#0c0c0c", sidebar: "#111111", panel: "#141414", card: "#1a1a1a",
  gold: "#C9A84C", goldBright: "#D4AF37", goldDim: "rgba(201,168,76,0.5)",
  border: "rgba(201,168,76,0.28)", borderSub: "rgba(255,255,255,0.06)",
  tp: "#F0EBE0", ts: "#9A9080", td: "#5A554C",
  high: "#D4433A", medium: "#B8820A", low: "#3D8A55",
};

const SYSTEM_PROMPT = generateSystemPrompt();

// ═══ ENTITY PROFILES ═════════════════════════════════════════════════════════
const ENTITIES: Record<string, { name: string; sector: string; context: string }> = {
  none: {
    name: "No entity selected",
    sector: "",
    context: "",
  },
  mtn: {
    name: "MTN Rwanda",
    sector: "Telecom",
    context: `ACTIVE CLIENT ENTITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Organisation:     MTN Rwanda PLC
Sector:           Telecommunications (regulated by RURA)
Regulator:        Rwanda Utilities Regulatory Authority (RURA)
Applicable laws:  ICT Law No. 24/2016, Data Protection Law No. 058/2021,
                  AML/CFT Law No. 75/2019, Labour Law No. 66/2018,
                  Competition Law No. 36/2012, Tax Procedures Law No. 020/2023,
                  Payment System Law No. 061/2021
Internal policies:
  — Notice period: 3 months for senior staff, 1 month for others
  — Probation: 6 months standard
  — Disciplinary: written warning → final warning → hearing → termination
  — Data: all subscriber data stored in Rwanda per Art. 50 Data Protection Law
  — DPO: appointed and registered with NCSA
  — Subscriber registration: all SIM holders registered per Art. 210 ICT Law
Signatory:        Chief Legal Officer / CEO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
All advice, documents, and letters must be calibrated to MTN Rwanda PLC.
Use "MTN Rwanda PLC" as the organisation name in all documents.
Reference RURA as the primary regulator for all telecom matters.
Reference BNR for any payment/mobile money matters (MTN MoMo is licensed by BNR).`,
  },
  bk: {
    name: "Bank of Kigali",
    sector: "Banking",
    context: `ACTIVE CLIENT ENTITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Organisation:     Bank of Kigali PLC
Sector:           Banking (regulated by BNR)
Regulator:        National Bank of Rwanda (BNR)
Applicable laws:  Banking Law No. 044/2024, AML/CFT Law No. 75/2019,
                  Data Protection Law No. 058/2021, Labour Law No. 66/2018,
                  Payment System Law No. 061/2021, Capital Markets Law No. 01/2011,
                  Tax Procedures Law No. 020/2023
Internal policies:
  — Notice period: 3 months for senior staff, 1 month for others
  — Probation: 6 months standard
  — Disciplinary: 3-step warning process before termination
  — BNR fit-and-proper: all senior appointments require BNR approval (Art. 42, Banking Law)
  — AML: full CDD and enhanced due diligence for PEPs
  — Capital adequacy: maintained per BNR regulation at all times
  — Dividend policy: no dividends without BNR satisfaction on NPL provisions
Signatory:        Head of Legal and Compliance / CEO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
All advice, documents, and letters must be calibrated to Bank of Kigali PLC.
Use "Bank of Kigali PLC" as the organisation name in all documents.
Reference BNR as the primary regulator for all banking and payment matters.`,
  },
  sonarwa: {
    name: "Sonarwa Insurance",
    sector: "Insurance",
    context: `ACTIVE CLIENT ENTITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Organisation:     Sonarwa Life Assurance Company Limited
Sector:           Insurance (regulated by BNR)
Regulator:        National Bank of Rwanda (BNR)
Applicable laws:  Insurance Law No. 030/2021, AML/CFT Law No. 75/2019,
                  Data Protection Law No. 058/2021, Labour Law No. 66/2018,
                  Tax Procedures Law No. 020/2023, Company Law No. 019/2023
Internal policies:
  — Notice period: 2 months for senior staff, 1 month for others
  — Probation: 6 months standard
  — Disciplinary: written warning → final written warning → hearing → termination
  — Solvency: minimum solvency margin maintained per BNR regulation at all times
  — Auditor: BNR-accredited external auditor appointed annually
  — AML: CDD conducted on all policyholders; enhanced due diligence for PEPs
  — Financial statements: submitted to BNR within 3 months of financial year end
Signatory:        Head of Legal / Managing Director
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
All advice, documents, and letters must be calibrated to Sonarwa Life Assurance Company Limited.
Use "Sonarwa Life Assurance Company Limited" as the organisation name in all documents.
Reference BNR as the primary regulator for all insurance and financial matters.`,
  },
  airtel: {
    name: "Airtel Rwanda",
    sector: "Telecom",
    context: `ACTIVE CLIENT ENTITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Organisation:     Airtel Rwanda Limited
Sector:           Telecommunications (regulated by RURA)
Regulator:        Rwanda Utilities Regulatory Authority (RURA)
Applicable laws:  ICT Law No. 24/2016, Data Protection Law No. 058/2021,
                  AML/CFT Law No. 75/2019, Labour Law No. 66/2018,
                  Competition Law No. 36/2012, Tax Procedures Law No. 020/2023,
                  Payment System Law No. 061/2021
Internal policies:
  — Notice period: 3 months for senior staff, 1 month for others
  — Probation: 6 months standard
  — Disciplinary: written warning → final warning → hearing → termination
  — Data: all subscriber data stored in Rwanda per Art. 50 Data Protection Law
  — DPO: appointed and registered with NCSA
  — Subscriber registration: all SIM holders registered per Art. 210 ICT Law
Signatory:        Legal Director / Managing Director
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
All advice, documents, and letters must be calibrated to Airtel Rwanda Limited.
Use "Airtel Rwanda Limited" as the organisation name in all documents.
Reference RURA as the primary regulator for all telecom matters.
Reference BNR for any payment/mobile money matters (Airtel Money is licensed by BNR).`,
  },
  bnr: {
    name: "National Bank of Rwanda",
    sector: "Regulator",
    context: `ACTIVE CLIENT ENTITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Organisation:     National Bank of Rwanda (BNR)
Sector:           Central Bank / Financial Regulator
Applicable laws:  Banking Law No. 044/2024, Insurance Law No. 030/2021,
                  Payment System Law No. 061/2021, Capital Markets Law No. 01/2011,
                  AML/CFT Law No. 75/2019, Labour Law No. 66/2018
Internal policies:
  — Notice period: as per public service statutes
  — Regulatory authority: BNR is both a regulated entity (employer) and regulator
  — Confidentiality: professional secrecy obligations apply to all BNR staff
  — Supervisory role: BNR supervises all banks, insurers, and payment service providers
Signatory:        Governor / Deputy Governor / General Counsel
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
All advice, documents, and letters must be calibrated to the National Bank of Rwanda.
Use "National Bank of Rwanda" as the organisation name in all documents.
Note: BNR is both an employer subject to labour law and a regulator — both dimensions apply.`,
  },
};

// ═══ ICONS ════════════════════════════════════════════════════════════════════
function Icon({ id, size = 20, color = T.tp, sw = 1.8 }: any) {
  const p: any = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: sw, strokeLinecap: "round", strokeLinejoin: "round", flexShrink: 0 };
  const icons: any = {
    home: <svg {...p}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
    counsel: <svg {...p}><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
    workforce: <svg {...p}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    governance: <svg {...p}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>,
    dataprotection: <svg {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    compliance: <svg {...p}><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>,
    matters: <svg {...p}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>,
    documents: <svg {...p}><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>,
    boardroom: <svg {...p}><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
    library: <svg {...p}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
    arrowup: <svg {...p}><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>,
    shield: <svg {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    alert: <svg {...p}><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
    pen: <svg {...p}><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
    filecheck: <svg {...p}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><polyline points="9 15 11 17 15 13"/></svg>,
    menu: <svg {...p}><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
    close: <svg {...p}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
    plus: <svg {...p}><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>,
    search: <svg {...p}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
    clock: <svg {...p}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    chevronright: <svg {...p}><polyline points="9 18 15 12 9 6"/></svg>,
    board: <svg {...p}><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
    dismiss: <svg {...p}><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>,
    regulator: <svg {...p}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>,
    databreach: <svg {...p}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
    contract: <svg {...p}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
    check: <svg {...p}><polyline points="20 6 9 17 4 12"/></svg>,
    building: <svg {...p}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  };
  return icons[id] || <svg {...p}><circle cx="12" cy="12" r="10"/></svg>;
}

// ═══ DONUT CHART ══════════════════════════════════════════════════════════════
function Donut() {
  const r = 30; const cx = 38; const cy = 38; const circ = 2 * Math.PI * r;
  const segs = [{ pct: 0.4, color: T.high }, { pct: 0.35, color: T.medium }, { pct: 0.25, color: T.low }];
  let offset = 0;
  return (
    <svg width={76} height={76} viewBox="0 0 76 76" style={{ flexShrink: 0 }}>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={T.borderSub} strokeWidth={8} />
      {segs.map((s, i) => {
        const dash = s.pct * circ; const gap = circ - dash;
        const rot = offset * 360 - 90; offset += s.pct;
        return <circle key={i} cx={cx} cy={cy} r={r} fill="none" stroke={s.color} strokeWidth={8} strokeDasharray={`${dash} ${gap}`} transform={`rotate(${rot} ${cx} ${cy})`} strokeLinecap="butt" />;
      })}
      <text x={cx} y={cy - 4} textAnchor="middle" fill={T.tp} fontSize="13" fontWeight="600">3</text>
      <text x={cx} y={cy + 10} textAnchor="middle" fill={T.ts} fontSize="9">HIGH</text>
    </svg>
  );
}

// ═══ CHAT COMPONENT ═══════════════════════════════════════════════════════════
type Msg = { role: "user" | "assistant"; content: string };

function Chat({ moduleTitle, initialQuery = "", systemPromptExtra = "", entityContext = "" }: any) {
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [input, setInput] = useState(initialQuery);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialQuery) { sendMessage(initialQuery); setInput(""); }
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, loading]);

  async function sendMessage(text: string) {
  if (!text.trim() || loading) return;
  const userMsg: Msg = { role: "user", content: text };
  const next = [...msgs, userMsg];
  setMsgs([...next, { role: "assistant", content: "" }]);
  setLoading(true);
  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        entityContext: entityContext || "",
        messages: next.map(m => ({ role: m.role, content: m.content })),
      }),
    });
    if (!res.ok) throw new Error("API error");
    const data = await res.json();
    setMsgs([...next, { role: "assistant", content: data.text || "No response received." }]);
  } catch {
    setMsgs([...next, { role: "assistant", content: "Connection error. Please check your network and try again." }]);
  }
  setLoading(false);
}

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: T.panel }}>
      {/* Header */}
      <div style={{ padding: "18px 24px", borderBottom: `0.5px solid ${T.border}`, display: "flex", alignItems: "center", gap: 10 }}>
        <Icon id="shield" size={15} color={T.gold} />
        <span style={{ fontSize: 13, fontWeight: 500, color: T.ts }}>{moduleTitle}</span>
        {entityContext && (
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 6, padding: "3px 10px", background: "rgba(201,168,76,0.08)", border: `0.5px solid ${T.border}`, borderRadius: 5 }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: T.gold }} />
            <span style={{ fontSize: 10.5, color: T.gold }}>
              {Object.values(ENTITIES).find(e => e.context === entityContext)?.name || "Entity active"}
            </span>
          </div>
        )}
      </div>
      {/* Messages */}
      <div style={{ flex: 1, overflowY: "auto", padding: "20px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
        {msgs.length === 0 && (
          <div style={{ margin: "auto", textAlign: "center" }}>
            <Icon id="counsel" size={28} color={T.goldDim} />
            <p style={{ fontSize: 13, color: T.td, marginTop: 12 }}>
              {entityContext
                ? `Advising ${Object.values(ENTITIES).find(e => e.context === entityContext)?.name || "entity"}. Ask a legal question.`
                : "Ask a legal question to begin."}
            </p>
          </div>
        )}
        {msgs.map((m, i) => (
          <div key={i} style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start" }}>
            <div style={{
              maxWidth: "80%", padding: "12px 16px",
              borderRadius: m.role === "user" ? "12px 12px 2px 12px" : "12px 12px 12px 2px",
              background: m.role === "user" ? `rgba(201,168,76,0.12)` : T.card,
              border: `0.5px solid ${m.role === "user" ? T.border : T.borderSub}`,
              fontSize: 13.5, lineHeight: 1.65, color: T.tp, whiteSpace: "pre-wrap",
            }}>
              {m.content}
              {m.role === "assistant" && m.content === "" && loading && (
                <div style={{ display: "flex", gap: 5 }}>
                  {[0, 1, 2].map(i => <div key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: T.gold, opacity: 0.7, animation: `pulse 1.2s ease-in-out ${i * 0.2}s infinite` }} />)}
                </div>
              )}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      {/* Input */}
      <div style={{ padding: "14px 20px", borderTop: `0.5px solid ${T.border}` }}>
        <div style={{ display: "flex", gap: 10, alignItems: "flex-end", background: T.card, border: `0.5px solid ${T.border}`, borderRadius: 10, padding: "10px 14px" }}>
          <textarea
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Type your legal question… (Shift+Enter for new line)"
            rows={3}
            style={{ flex: 1, background: "none", border: "none", outline: "none", resize: "none", fontSize: 13.5, color: T.tp, lineHeight: 1.6, fontFamily: "Manrope, sans-serif", maxHeight: 140, overflowY: "auto" }}
          />
          <button
            onClick={() => { sendMessage(input); setInput(""); }}
            style={{ background: T.gold, border: "none", borderRadius: 7, width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}>
            <Icon id="arrowup" size={15} color="#000" sw={2.5} />
          </button>
        </div>
        <p style={{ fontSize: 10, color: T.td, marginTop: 8, textAlign: "center" }}>Me Ngoga provides legal guidance. Always verify with qualified counsel for final decisions.</p>
      </div>
    </div>
  );
}

// ═══ HOME ═════════════════════════════════════════════════════════════════════
const RISK_ROWS = [
  { label: "Governance", level: "Medium", color: T.medium },
  { label: "Labour", level: "High", color: T.high },
  { label: "Compliance", level: "Medium", color: T.medium },
  { label: "Litigation", level: "Low", color: T.low },
  { label: "Reputation", level: "Medium", color: T.medium },
];

const HOME_MATTERS = [
  { title: "Redundancy Consultation", area: "Labour", risk: "High", color: T.high },
  { title: "Data Breach Investigation", area: "Data Protection", risk: "High", color: T.high },
  { title: "Shareholder Dispute", area: "Governance", risk: "Medium", color: T.medium },
  { title: "Regulator Inquiry – NCSA", area: "Compliance", risk: "Medium", color: T.medium },
];

const HOME_DEADLINES = [
  { title: "NCSA Response", sub: "Due in 5 days", date: "12 May 2025" },
  { title: "Tax Filing – Q2", sub: "Due in 12 days", date: "19 May 2025" },
  { title: "Annual General Meeting", sub: "Due in 26 days", date: "02 Jun 2025" },
];

const SCENARIOS = [
  { label: "Board dispute", sub: "Governance", icon: "board", q: "We have a board dispute. Advise on our obligations and options under Rwandan law." },
  { label: "Employee dismissal", sub: "Labour Law", icon: "dismiss", q: "What is the legal process for employee dismissal under Rwandan law?" },
  { label: "Regulator inquiry", sub: "Compliance", icon: "regulator", q: "We received a regulatory inquiry. What are our obligations and response timeline?" },
  { label: "Data breach", sub: "Data Protection", icon: "databreach", q: "We have a data breach — what are our obligations under Rwandan law?" },
  { label: "Contract review", sub: "Commercial", icon: "contract", q: "What are the key legal requirements for commercial contracts under Rwandan law?" },
];

function RailCard({ children, style = {} }: any) {
  return (
    <section style={{ background: T.card, border: `0.5px solid ${T.borderSub}`, borderRadius: 10, padding: "16px 18px", ...style }}>
      {children}
    </section>
  );
}

function Home({ onNavigate, entityContext }: any) {
  const [query, setQuery] = useState("");
  const h = new Date().getHours();
  const greeting = h < 12 ? "Good morning" : h < 17 ? "Good afternoon" : "Good evening";
  const activeEntityName = Object.values(ENTITIES).find(e => e.context === entityContext)?.name;

  return (
    <div style={{ display: "flex", height: "100%", overflow: "hidden" }}>
      <div style={{ flex: 1, overflowY: "auto", padding: "0 0 40px" }}>
        {/* Hero */}
        <div style={{ position: "relative", height: 300, overflow: "hidden", background: "#0a0a0a" }}>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #0a0a0a 0%, #111108 50%, #0a0a0a 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(12,12,12,0.2) 0%, rgba(12,12,12,0.9) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0 32px 32px" }}>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700, color: T.tp, marginBottom: 6 }}>
              {greeting}, Counsel.
            </h1>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 400, color: T.ts, marginBottom: activeEntityName ? 10 : 20 }}>
              How can I help you today?
            </h2>
            {activeEntityName && (
              <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 16 }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: T.gold }} />
                <span style={{ fontSize: 12, color: T.gold }}>Advising: {activeEntityName}</span>
              </div>
            )}
            <div style={{ display: "flex", gap: 8, maxWidth: 560, background: "rgba(20,20,20,0.95)", border: `0.5px solid ${T.border}`, borderRadius: 10, padding: "10px 14px" }}>
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={e => { if (e.key === "Enter" && query.trim()) { onNavigate("counsel", query); setQuery(""); } }}
                placeholder="Describe your legal issue or question…"
                style={{ flex: 1, background: "none", border: "none", outline: "none", fontSize: 13.5, color: T.tp, fontFamily: "Manrope, sans-serif" }}
              />
              <button
                onClick={() => { if (query.trim()) { onNavigate("counsel", query); setQuery(""); } }}
                style={{ background: T.gold, border: "none", borderRadius: 7, width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}>
                <Icon id="arrowup" size={15} color="#000" sw={2.5} />
              </button>
            </div>
          </div>
        </div>

        {/* Scenarios */}
        <div style={{ padding: "24px 32px 0" }}>
          <p style={{ fontSize: 12, color: T.td, marginBottom: 14, textTransform: "uppercase", letterSpacing: "0.08em" }}>Start with a scenario</p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {SCENARIOS.map(sc => (
              <button key={sc.label} onClick={() => onNavigate("counsel", sc.q)}
                style={{ display: "flex", alignItems: "center", gap: 9, padding: "9px 14px", background: T.card, border: `0.5px solid ${T.borderSub}`, borderRadius: 8, cursor: "pointer", transition: "border-color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = T.border)}
                onMouseLeave={e => (e.currentTarget.style.borderColor = T.borderSub)}>
                <Icon id={sc.icon} size={14} color={T.gold} sw={1.5} />
                <div style={{ textAlign: "left" }}>
                  <p style={{ fontSize: 12, fontWeight: 500, color: T.tp }}>{sc.label}</p>
                  <p style={{ fontSize: 10, color: T.td }}>{sc.sub}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Rail cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12, padding: "24px 32px 0" }}>
          <RailCard>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
              <span style={{ fontSize: 13, fontWeight: 500, color: T.tp }}>Legal Risk Overview</span>
              <span style={{ fontSize: 10, color: T.td }}>Updated 2 min ago</span>
            </div>
            <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
              <Donut />
              <div style={{ flex: 1 }}>
                {RISK_ROWS.map(r => (
                  <div key={r.label} style={{ display: "flex", justifyContent: "space-between", padding: "4px 0" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: r.color }} />
                      <span style={{ fontSize: 11.5, color: T.ts }}>{r.label}</span>
                    </div>
                    <span style={{ fontSize: 11.5, color: r.color, fontWeight: 600 }}>{r.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </RailCard>

          <RailCard>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
              <span style={{ fontSize: 13, fontWeight: 500, color: T.tp }}>Active Matters</span>
              <button onClick={() => onNavigate("matters")} style={{ background: "none", border: "none", fontSize: 11, color: T.gold, cursor: "pointer" }}>View all</button>
            </div>
            {HOME_MATTERS.map((m, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "7px 0", borderBottom: `0.5px solid ${T.borderSub}` }}>
                <div style={{ width: 2.5, height: 32, borderRadius: 2, background: m.color, flexShrink: 0 }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontSize: 12.5, color: T.tp, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{m.title}</p>
                  <p style={{ fontSize: 10.5, color: T.td }}>{m.area}</p>
                </div>
                <span style={{ fontSize: 11, color: m.color, fontWeight: 600, flexShrink: 0 }}>{m.risk}</span>
              </div>
            ))}
          </RailCard>

          <RailCard>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
              <span style={{ fontSize: 13, fontWeight: 500, color: T.tp }}>Upcoming Deadlines</span>
              <button onClick={() => onNavigate("compliance")} style={{ background: "none", border: "none", fontSize: 11, color: T.gold, cursor: "pointer" }}>View all</button>
            </div>
            {HOME_DEADLINES.map((d, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderBottom: `0.5px solid ${T.borderSub}`, gap: 8 }}>
                <div>
                  <p style={{ fontSize: 12.5, color: T.tp, marginBottom: 2 }}>{d.title}</p>
                  <p style={{ fontSize: 10.5, color: T.td }}>{d.sub}</p>
                </div>
                <span style={{ fontSize: 11, color: T.ts, flexShrink: 0 }}>{d.date}</span>
              </div>
            ))}
          </RailCard>

          <RailCard>
            <p style={{ fontSize: 13, fontWeight: 500, color: T.tp, marginBottom: 12 }}>Quick Actions</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 8 }}>
              {[{ l: "Generate Board Memo", i: "pen" }, { l: "Review Contract", i: "filecheck" }].map(a => (
                <button key={a.l} onClick={() => onNavigate("documents", a.l)}
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 7, padding: "12px 8px", background: T.panel, border: `0.5px solid ${T.borderSub}`, borderRadius: 8, cursor: "pointer" }}>
                  <Icon id={a.i} size={16} color={T.gold} />
                  <span style={{ fontSize: 11, color: T.ts, textAlign: "center", lineHeight: 1.3 }}>{a.l}</span>
                </button>
              ))}
            </div>
            <button onClick={() => onNavigate("counsel", "Data breach — advise on crisis response obligations under Rwandan law")}
              style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "11px", background: "rgba(212,67,58,0.08)", border: `0.5px solid rgba(212,67,58,0.3)`, borderRadius: 8, cursor: "pointer" }}>
              <Icon id="alert" size={14} color={T.high} />
              <span style={{ fontSize: 12, color: T.high, fontWeight: 500 }}>Crisis Response Center</span>
            </button>
          </RailCard>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "32px 32px 0" }}>
          <Icon id="shield" size={13} color={T.goldDim} />
          <span style={{ fontSize: 11, color: T.td }}>Built for leaders. Designed for clarity. Backed by law.</span>
        </div>
      </div>
    </div>
  );
}

// ═══ LAW LIBRARY ══════════════════════════════════════════════════════════════
import { LAWS, LAW_CATEGORIES } from "@/lib/laws";

function LawLibrary() {
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);
  const filtered = category === "All" ? LAWS : LAWS.filter(l => l.category === category);
  const active = LAWS.find(l => l.id === selected);

  return (
    <div style={{ display: "flex", height: "100%" }}>
      {/* Left panel */}
      <div style={{ width: 300, borderRight: `0.5px solid ${T.border}`, display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ padding: "18px 18px 14px", borderBottom: `0.5px solid ${T.borderSub}` }}>
          <h2 style={{ fontSize: 16, fontWeight: 600, color: T.tp, fontFamily: "'Playfair Display', serif", marginBottom: 4 }}>Law Library</h2>
          <p style={{ fontSize: 11, color: T.td }}>{LAWS.length} laws · {LAWS.filter(l => l.status === "verified").length} gazette-verified</p>
        </div>
        <div style={{ padding: "12px 14px", borderBottom: `0.5px solid ${T.borderSub}`, display: "flex", flexWrap: "wrap", gap: 6 }}>
          {["All", ...LAW_CATEGORIES].map(c => (
            <button key={c} onClick={() => setCategory(c)}
              style={{ padding: "4px 10px", borderRadius: 5, fontSize: 10.5, cursor: "pointer", border: `0.5px solid ${category === c ? T.gold : T.borderSub}`, background: category === c ? "rgba(201,168,76,0.1)" : "none", color: category === c ? T.gold : T.ts, whiteSpace: "nowrap" }}>
              {c}
            </button>
          ))}
        </div>
        <div style={{ flex: 1, overflowY: "auto" }}>
          {filtered.map(law => (
            <div key={law.id} onClick={() => setSelected(law.id)}
              style={{ padding: "13px 18px", borderBottom: `0.5px solid ${T.borderSub}`, cursor: "pointer", background: selected === law.id ? "rgba(201,168,76,0.05)" : "none" }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8 }}>
                <div style={{ minWidth: 0 }}>
                  <p style={{ fontSize: 12.5, color: T.tp, marginBottom: 3 }}>{law.shortName}</p>
                  <p style={{ fontSize: 10.5, color: T.td, marginBottom: 4 }}>{law.number}</p>
                  <p style={{ fontSize: 10, color: T.ts }}>{law.regulator}</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4, flexShrink: 0 }}>
                  <span style={{ fontSize: 9.5, padding: "2px 7px", borderRadius: 3, background: law.status === "verified" ? "rgba(61,138,85,0.15)" : "rgba(184,130,10,0.12)", color: law.status === "verified" ? T.low : T.medium, fontWeight: 600 }}>
                    {law.status === "verified" ? "✓ VERIFIED" : "⚠ TRAINING"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right panel */}
      {active ? (
        <div style={{ flex: 1, overflowY: "auto", padding: "24px 28px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6, flexWrap: "wrap", gap: 12 }}>
            <div>
              <h3 style={{ fontSize: 20, color: T.tp, fontFamily: "'Playfair Display', serif", marginBottom: 4 }}>{active.name}</h3>
              <p style={{ fontSize: 12, color: T.td, marginBottom: 4 }}>{active.number} · {active.year}</p>
              <p style={{ fontSize: 12, color: T.ts, marginBottom: 16 }}>{active.description}</p>
            </div>
            <span style={{ fontSize: 10, padding: "4px 10px", borderRadius: 5, background: active.status === "verified" ? "rgba(61,138,85,0.15)" : "rgba(184,130,10,0.12)", color: active.status === "verified" ? T.low : T.medium, fontWeight: 600, flexShrink: 0 }}>
              {active.status === "verified" ? "✓ GAZETTE VERIFIED" : "⚠ TRAINING KNOWLEDGE"}
            </span>
          </div>

          <div style={{ display: "flex", gap: 10, marginBottom: 20, flexWrap: "wrap" }}>
            <span style={{ fontSize: 11, padding: "3px 10px", borderRadius: 4, background: "rgba(201,168,76,0.08)", border: `0.5px solid ${T.border}`, color: T.gold }}>{active.category}</span>
            <span style={{ fontSize: 11, padding: "3px 10px", borderRadius: 4, background: T.card, border: `0.5px solid ${T.borderSub}`, color: T.ts }}>{active.regulator}</span>
          </div>

          <p style={{ fontSize: 11, color: T.ts, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 10 }}>Articles</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 24 }}>
            {active.articles.map((a, i) => (
              <div key={i} style={{ display: "flex", gap: 12, padding: "10px 14px", background: T.card, border: `0.5px solid ${T.borderSub}`, borderRadius: 7 }}>
                <span style={{ fontSize: 12, color: T.gold, fontWeight: 600, flexShrink: 0, minWidth: 80 }}>{a.number}</span>
                <span style={{ fontSize: 12.5, color: T.tp, lineHeight: 1.55 }}>{a.summary}</span>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 11, color: T.ts, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 10 }}>Key Obligations</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 24 }}>
            {active.keyObligations.map((o, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <Icon id="check" size={13} color={T.low} sw={2.5} />
                <span style={{ fontSize: 12.5, color: T.tp, lineHeight: 1.55 }}>{o}</span>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 11, color: T.ts, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 10 }}>Penalties</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 24 }}>
            {active.penalties.map((p, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "8px 12px", background: "rgba(212,67,58,0.05)", border: `0.5px solid rgba(212,67,58,0.15)`, borderRadius: 6 }}>
                <Icon id="alert" size={13} color={T.high} sw={2} />
                <span style={{ fontSize: 12.5, color: T.tp, lineHeight: 1.55 }}>{p}</span>
              </div>
            ))}
          </div>

          {active.keyDeadlines.length > 0 && (
            <>
              <p style={{ fontSize: 11, color: T.ts, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 10 }}>Key Deadlines</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {active.keyDeadlines.map((d, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <Icon id="clock" size={13} color={T.gold} sw={2} />
                    <span style={{ fontSize: 12.5, color: T.tp, lineHeight: 1.55 }}>{d}</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      ) : (
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 12 }}>
          <Icon id="library" size={28} color={T.td} />
          <p style={{ fontSize: 13, color: T.td }}>Select a law to view its articles and obligations</p>
        </div>
      )}
    </div>
  );
}

// ═══ COMPLIANCE TRACKER ════════════════════════════════════════════════════════
const COMPLIANCE_ITEMS = [
  { id: 1, title: "Annual Return Filing", law: "Company Law No. 019/2023", article: "Art. 143", category: "Company Law", deadline: "Yearly", daysLeft: 30, status: "pending", risk: "High" },
  { id: 2, title: "Beneficial Ownership Register Update", law: "Company Law No. 019/2023", article: "Art. 116", category: "Company Law", deadline: "Within 14 days of change", daysLeft: 0, status: "done", risk: "High" },
  { id: 3, title: "Records Retention (10 years)", law: "Company Law No. 019/2023", article: "Art. 111", category: "Company Law", deadline: "Ongoing", daysLeft: 0, status: "done", risk: "Medium" },
  { id: 4, title: "Employment Contracts Compliant", law: "Labour Law No. 66/2018", article: "Art. 11", category: "Labour", deadline: "Ongoing", daysLeft: 0, status: "done", risk: "Medium" },
  { id: 5, title: "PAYE Remittance to RRA", law: "Labour Law No. 66/2018", article: "PAYE", category: "Labour", deadline: "15th of each month", daysLeft: 6, status: "pending", risk: "High" },
  { id: 6, title: "RSSB Social Security Contributions", law: "Labour Law No. 66/2018", article: "RSSB", category: "Labour", deadline: "Monthly", daysLeft: 0, status: "done", risk: "Medium" },
  { id: 7, title: "NCSA Data Controller Registration", law: "Data Protection Law No. 058/2021", article: "Art. 29", category: "Data Protection", deadline: "Ongoing", daysLeft: 7, status: "pending", risk: "High" },
  { id: 8, title: "DPO Designation", law: "Data Protection Law No. 058/2021", article: "Art. 40", category: "Data Protection", deadline: "Ongoing", daysLeft: 7, status: "pending", risk: "High" },
  { id: 9, title: "Data Stored in Rwanda", law: "Data Protection Law No. 058/2021", article: "Art. 50", category: "Data Protection", deadline: "Ongoing", daysLeft: 0, status: "done", risk: "High" },
];

function ComplianceTracker({ onNavigate }: any) {
  const [filter, setFilter] = useState("All");
  const [items, setItems] = useState(COMPLIANCE_ITEMS);
  const cats = ["All", "Company Law", "Labour", "Data Protection"];
  const filtered = filter === "All" ? items : items.filter(i => i.category === filter);
  const overdue = items.filter(i => i.daysLeft > 0 && i.daysLeft <= 7 && i.status === "pending").length;

  function toggle(id: number) {
    setItems(prev => prev.map(i => i.id === id ? { ...i, status: i.status === "done" ? "pending" : "done" } : i));
  }

  return (
    <div style={{ padding: "28px 32px", overflowY: "auto", height: "100%" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24, flexWrap: "wrap", gap: 12 }}>
        <div>
          <h2 style={{ fontSize: 20, fontWeight: 600, color: T.tp, fontFamily: "'Playfair Display', serif", marginBottom: 4 }}>Compliance Tracker</h2>
          <p style={{ fontSize: 12.5, color: T.ts }}>Statutory obligations across gazette-verified Rwandan laws</p>
        </div>
        {overdue > 0 && (
          <div style={{ display: "flex", alignItems: "center", gap: 7, padding: "8px 14px", background: "rgba(212,67,58,0.08)", border: `0.5px solid rgba(212,67,58,0.3)`, borderRadius: 8 }}>
            <Icon id="alert" size={13} color={T.high} />
            <span style={{ fontSize: 12, color: T.high, fontWeight: 500 }}>{overdue} item{overdue > 1 ? "s" : ""} due within 7 days</span>
          </div>
        )}
      </div>
      <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
        {cats.map(c => (
          <button key={c} onClick={() => setFilter(c)}
            style={{ padding: "6px 14px", borderRadius: 6, fontSize: 12, fontWeight: 500, cursor: "pointer", border: `0.5px solid ${filter === c ? T.gold : T.borderSub}`, background: filter === c ? "rgba(201,168,76,0.1)" : "none", color: filter === c ? T.gold : T.ts }}>
            {c}
          </button>
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {filtered.map(item => (
          <div key={item.id} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 18px", background: T.card, border: `0.5px solid ${item.daysLeft > 0 && item.daysLeft <= 7 && item.status === "pending" ? "rgba(212,67,58,0.3)" : T.borderSub}`, borderRadius: 9 }}>
            <button onClick={() => toggle(item.id)}
              style={{ width: 18, height: 18, borderRadius: 4, border: `1.5px solid ${item.status === "done" ? T.low : T.border}`, background: item.status === "done" ? T.low : "none", flexShrink: 0, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {item.status === "done" && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>}
            </button>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontSize: 13, color: item.status === "done" ? T.td : T.tp, textDecoration: item.status === "done" ? "line-through" : "none", marginBottom: 3 }}>{item.title}</p>
              <p style={{ fontSize: 11, color: T.td }}>{item.law} · {item.article}</p>
            </div>
            <div style={{ textAlign: "right", flexShrink: 0 }}>
              <p style={{ fontSize: 11, color: item.daysLeft > 0 && item.daysLeft <= 7 && item.status === "pending" ? T.high : T.ts, marginBottom: 2 }}>{item.deadline}</p>
              <span style={{ fontSize: 10, fontWeight: 600, color: item.risk === "High" ? T.high : item.risk === "Medium" ? T.medium : T.low }}>{item.risk}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ═══ MATTERS ══════════════════════════════════════════════════════════════════
const SAMPLE_MATTERS = [
  { id: 1, title: "Redundancy Consultation", area: "Labour Law", risk: "High", status: "In Progress", client: "Amahoro Bank", opened: "02 Apr 2025", notes: ["Initial assessment completed. 23 employees affected.", "Consultation period commenced per Art. 32 Labour Law."] },
  { id: 2, title: "Data Breach Investigation", area: "Data Protection", risk: "High", status: "Open", client: "Internal", opened: "28 Apr 2025", notes: ["Breach detected in customer database.", "72-hour notification window running — NCSA must be notified."] },
  { id: 3, title: "Shareholder Dispute", area: "Governance", risk: "Medium", status: "Under Review", client: "Kigali Properties Ltd", opened: "15 Mar 2025", notes: ["Dispute over dividend distribution.", "Reviewing Articles of Association and Company Law Art. 68."] },
  { id: 4, title: "Regulator Inquiry – RURA", area: "Compliance", risk: "Medium", status: "Open", client: "Internal", opened: "01 May 2025", notes: ["RURA inquiry received re: licensing compliance.", "Response deadline: 12 May 2025."] },
];

const STATUS_FLOW = ["Open", "In Progress", "Under Review", "Closed"];

function Matters({ onNavigate }: any) {
  const [matters, setMatters] = useState(SAMPLE_MATTERS);
  const [selected, setSelected] = useState<number | null>(null);
  const [note, setNote] = useState("");
  const active = matters.find(m => m.id === selected);

  function advanceStatus(id: number) {
    setMatters(prev => prev.map(m => {
      if (m.id !== id) return m;
      const idx = STATUS_FLOW.indexOf(m.status);
      return { ...m, status: STATUS_FLOW[Math.min(idx + 1, STATUS_FLOW.length - 1)] };
    }));
  }

  function addNote(id: number) {
    if (!note.trim()) return;
    setMatters(prev => prev.map(m => m.id !== id ? m : { ...m, notes: [...m.notes, note.trim()] }));
    setNote("");
  }

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <div style={{ width: 300, borderRight: `0.5px solid ${T.border}`, overflowY: "auto", flexShrink: 0 }}>
        <div style={{ padding: "20px 20px 16px", borderBottom: `0.5px solid ${T.borderSub}` }}>
          <h2 style={{ fontSize: 16, fontWeight: 600, color: T.tp, fontFamily: "'Playfair Display', serif" }}>Matters</h2>
          <p style={{ fontSize: 11, color: T.td, marginTop: 2 }}>{matters.filter(m => m.status !== "Closed").length} active</p>
        </div>
        {matters.map(m => (
          <div key={m.id} onClick={() => setSelected(m.id)}
            style={{ padding: "14px 20px", borderBottom: `0.5px solid ${T.borderSub}`, cursor: "pointer", background: selected === m.id ? "rgba(201,168,76,0.05)" : "none" }}>
            <p style={{ fontSize: 13, color: T.tp, marginBottom: 4 }}>{m.title}</p>
            <p style={{ fontSize: 11, color: T.td, marginBottom: 6 }}>{m.area} · {m.client}</p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 4, background: "rgba(255,255,255,0.05)", color: T.ts }}>{m.status}</span>
              <span style={{ fontSize: 10, color: m.risk === "High" ? T.high : m.risk === "Medium" ? T.medium : T.low, fontWeight: 600 }}>{m.risk}</span>
            </div>
          </div>
        ))}
      </div>
      {active ? (
        <div style={{ flex: 1, overflowY: "auto", padding: "24px 28px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20, flexWrap: "wrap", gap: 12 }}>
            <div>
              <h3 style={{ fontSize: 18, color: T.tp, fontFamily: "'Playfair Display', serif", marginBottom: 4 }}>{active.title}</h3>
              <p style={{ fontSize: 12, color: T.td }}>{active.area} · {active.client} · Opened {active.opened}</p>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button onClick={() => advanceStatus(active.id)}
                style={{ padding: "7px 14px", background: "rgba(201,168,76,0.1)", border: `0.5px solid ${T.border}`, borderRadius: 7, fontSize: 12, color: T.gold, cursor: "pointer" }}>
                Advance → {STATUS_FLOW[Math.min(STATUS_FLOW.indexOf(active.status) + 1, STATUS_FLOW.length - 1)]}
              </button>
              <button onClick={() => onNavigate("counsel", `Advise on matter: ${active.title} (${active.area})`)}
                style={{ padding: "7px 14px", background: T.gold, border: "none", borderRadius: 7, fontSize: 12, color: "#000", fontWeight: 600, cursor: "pointer" }}>
                Ask Me Ngoga
              </button>
            </div>
          </div>
          <div style={{ display: "flex", marginBottom: 24, background: T.card, borderRadius: 8, overflow: "hidden", border: `0.5px solid ${T.borderSub}` }}>
            {STATUS_FLOW.map((s, i) => {
              const idx = STATUS_FLOW.indexOf(active.status);
              return (
                <div key={s} style={{ flex: 1, padding: "8px 0", textAlign: "center", fontSize: 11, fontWeight: 500, background: i <= idx ? "rgba(201,168,76,0.15)" : "none", color: i <= idx ? T.gold : T.td, borderRight: i < 3 ? `0.5px solid ${T.borderSub}` : "none" }}>
                  {s}
                </div>
              );
            })}
          </div>
          <p style={{ fontSize: 12, color: T.ts, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 12 }}>Timeline</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
            {active.notes.map((n, i) => (
              <div key={i} style={{ display: "flex", gap: 12 }}>
                <div style={{ width: 1, background: T.borderSub, flexShrink: 0, marginTop: 4 }} />
                <p style={{ fontSize: 13, color: T.tp, lineHeight: 1.6 }}>{n}</p>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <input value={note} onChange={e => setNote(e.target.value)} onKeyDown={e => e.key === "Enter" && addNote(active.id)}
              placeholder="Add a note…"
              style={{ flex: 1, background: T.card, border: `0.5px solid ${T.border}`, borderRadius: 8, padding: "9px 14px", fontSize: 13, color: T.tp, outline: "none", fontFamily: "Manrope, sans-serif" }} />
            <button onClick={() => addNote(active.id)}
              style={{ padding: "9px 16px", background: T.gold, border: "none", borderRadius: 8, fontSize: 12, color: "#000", fontWeight: 600, cursor: "pointer" }}>
              Add
            </button>
          </div>
        </div>
      ) : (
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 12 }}>
          <Icon id="matters" size={28} color={T.td} />
          <p style={{ fontSize: 13, color: T.td }}>Select a matter to view details</p>
        </div>
      )}
    </div>
  );
}

// ═══ DOCUMENTS ════════════════════════════════════════════════════════════════
const SAMPLE_DOCS = [
  { id: 1, title: "Board Resolution – Q1 2025", type: "Board Resolution", date: "15 Mar 2025", size: "42 KB", tags: ["Governance", "Board"] },
  { id: 2, title: "Employment Contract Template", type: "Contract Template", date: "02 Jan 2025", size: "78 KB", tags: ["Labour", "Template"] },
  { id: 3, title: "Data Processing Agreement", type: "Agreement", date: "20 Apr 2025", size: "56 KB", tags: ["Data Protection", "Compliance"] },
];

function Documents({ onNavigate }: any) {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<number | null>(null);
  const filtered = SAMPLE_DOCS.filter(d => d.title.toLowerCase().includes(search.toLowerCase()));
  const active = SAMPLE_DOCS.find(d => d.id === selected);

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <div style={{ width: 300, borderRight: `0.5px solid ${T.border}`, overflowY: "auto", flexShrink: 0 }}>
        <div style={{ padding: "18px 18px 14px", borderBottom: `0.5px solid ${T.borderSub}` }}>
          <h2 style={{ fontSize: 16, fontWeight: 600, color: T.tp, fontFamily: "'Playfair Display', serif", marginBottom: 12 }}>Documents</h2>
          <div style={{ display: "flex", gap: 8, alignItems: "center", background: T.card, border: `0.5px solid ${T.borderSub}`, borderRadius: 7, padding: "7px 12px" }}>
            <Icon id="search" size={13} color={T.td} />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search documents…"
              style={{ flex: 1, background: "none", border: "none", outline: "none", fontSize: 12.5, color: T.tp, fontFamily: "Manrope, sans-serif" }} />
          </div>
        </div>
        {filtered.map(d => (
          <div key={d.id} onClick={() => setSelected(d.id)}
            style={{ padding: "13px 18px", borderBottom: `0.5px solid ${T.borderSub}`, cursor: "pointer", background: selected === d.id ? "rgba(201,168,76,0.05)" : "none" }}>
            <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <Icon id="documents" size={14} color={T.gold} />
              <div>
                <p style={{ fontSize: 12.5, color: T.tp, marginBottom: 3 }}>{d.title}</p>
                <p style={{ fontSize: 10.5, color: T.td }}>{d.type} · {d.date}</p>
              </div>
            </div>
          </div>
        ))}
        <div style={{ padding: 16 }}>
          <button onClick={() => onNavigate("counsel", "Draft a new legal document")}
            style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "10px", background: "rgba(201,168,76,0.08)", border: `0.5px solid ${T.border}`, borderRadius: 8, cursor: "pointer" }}>
            <Icon id="plus" size={14} color={T.gold} />
            <span style={{ fontSize: 12, color: T.gold }}>New Document</span>
          </button>
        </div>
      </div>
      {active ? (
        <div style={{ flex: 1, overflowY: "auto", padding: "24px 28px" }}>
          <h3 style={{ fontSize: 18, color: T.tp, fontFamily: "'Playfair Display', serif", marginBottom: 6 }}>{active.title}</h3>
          <p style={{ fontSize: 12, color: T.td, marginBottom: 16 }}>{active.type} · {active.date} · {active.size}</p>
          <div style={{ display: "flex", gap: 6, marginBottom: 20, flexWrap: "wrap" }}>
            {active.tags.map(tag => (
              <span key={tag} style={{ fontSize: 11, padding: "3px 10px", borderRadius: 4, background: "rgba(201,168,76,0.08)", border: `0.5px solid ${T.border}`, color: T.gold }}>{tag}</span>
            ))}
          </div>
          <div style={{ background: T.card, border: `0.5px solid ${T.borderSub}`, borderRadius: 8, padding: "20px 24px", minHeight: 200 }}>
            <p style={{ fontSize: 13, color: T.td, textAlign: "center", marginTop: 40 }}>Document preview will appear here once integrated with your document storage.</p>
          </div>
          <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
            <button onClick={() => onNavigate("counsel", `Review and advise on: ${active.title}`)}
              style={{ padding: "8px 16px", background: T.gold, border: "none", borderRadius: 7, fontSize: 12, color: "#000", fontWeight: 600, cursor: "pointer" }}>
              Review with Me Ngoga
            </button>
          </div>
        </div>
      ) : (
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 12 }}>
          <Icon id="documents" size={28} color={T.td} />
          <p style={{ fontSize: 13, color: T.td }}>Select a document or create a new one</p>
        </div>
      )}
    </div>
  );
}

// ═══ SIDEBAR NAV ══════════════════════════════════════════════════════════════
const NAV = [
  { id: "home", label: "Home", icon: "home" },
  { id: "counsel", label: "Counsel", icon: "counsel" },
  { id: "workforce", label: "Workforce", icon: "workforce" },
  { id: "governance", label: "Governance", icon: "governance" },
  { id: "dataprotection", label: "Data Protection", icon: "dataprotection" },
  { id: "compliance", label: "Compliance", icon: "compliance" },
  { id: "matters", label: "Matters", icon: "matters" },
  { id: "documents", label: "Documents", icon: "documents" },
  { id: "library", label: "Law Library", icon: "library" },
  { id: "boardroom", label: "Boardroom", icon: "boardroom" },
];

// ═══ ROOT APP ═════════════════════════════════════════════════════════════════
export default function MeNgoga() {
  const [section, setSection] = useState("home");
  const [chatQuery, setChatQuery] = useState("");
  const [chatKey, setChatKey] = useState(0);
  const [mobileNav, setMobileNav] = useState(false);
  const [entityId, setEntityId] = useState("none");
  const activeEntity = ENTITIES[entityId];

  function onNavigate(sec: string, query = "") {
    setSection(sec);
    if (query) { setChatQuery(query); setChatKey(k => k + 1); }
    setMobileNav(false);
  }

  function renderSection() {
    const ec = activeEntity.context;
    switch (section) {
      case "home": return <Home onNavigate={onNavigate} entityContext={ec} />;
      case "counsel": return <Chat key={`counsel-${chatKey}`} moduleTitle="Legal Counsel" initialQuery={chatQuery} entityContext={ec} />;
      case "workforce": return <Chat key={`workforce-${chatKey}`} moduleTitle="Workforce & HR" initialQuery={chatQuery} entityContext={ec} systemPromptExtra="Focus on Rwandan Labour Law No. 66/2018 and Amendment No. 027/2023." />;
      case "governance": return <Chat key={`governance-${chatKey}`} moduleTitle="Corporate Governance" initialQuery={chatQuery} entityContext={ec} systemPromptExtra="Focus on Company Law No. 019/2023 and corporate governance obligations." />;
      case "dataprotection": return <Chat key={`dataprotection-${chatKey}`} moduleTitle="Data Protection" initialQuery={chatQuery} entityContext={ec} systemPromptExtra="Focus on Data Protection Law No. 058/2021 and NCSA obligations." />;
      case "compliance": return <ComplianceTracker onNavigate={onNavigate} />;
      case "matters": return <Matters onNavigate={onNavigate} />;
      case "documents": return <Documents onNavigate={onNavigate} />;
      case "library": return <LawLibrary />;
      case "boardroom": return <Chat key={`boardroom-${chatKey}`} moduleTitle="Boardroom Intelligence" initialQuery={chatQuery} entityContext={ec} systemPromptExtra={`You are the General Counsel, Corporate Secretary, Board Governance Adviser, and lead Corporate Transactions Lawyer of a multinational company operating in Rwanda.

Your task is to prepare board documents that are immediately suitable for review by Board Chairs, CEOs, Investors, Auditors, Regulators, Banks, Due diligence teams, and External counsel.

You are NOT a document generator. You are a strategic General Counsel. Every board resolution must be written at executive level and must be capable of being signed immediately after completion.

When drafting a Board Resolution:

FIRST: Perform a legal and governance review. Identify: governance risks, regulatory approvals, beneficial ownership implications, corporate actions required, filing obligations, director duties, potential conflicts of interest.

SECOND: Prepare a Board Memorandum with: 1. Executive Summary 2. Purpose of Resolution 3. Background 4. Board Findings 5. Legal and Regulatory Analysis 6. Governance Considerations 7. Risk Assessment 8. Recommendation to the Board.

THIRD: Draft the Board Resolution with: 1. Resolution Title 2. Recitals (WHEREAS) 3. Board Findings 4. Resolutions Adopted 5. Authorisations Granted 6. Corporate Actions Required 7. Regulatory Filings Required 8. Effective Date 9. Certification Clause 10. Signature Blocks.

FOURTH: Generate supporting corporate documents where applicable: Share Transfer Form, Share Register Update, Beneficial Ownership Register Update, Director Consent, Shareholder Consent, Regulatory Filing Checklist, Implementation Checklist.

WRITING STANDARD: Write like a General Counsel of a Fortune 500 company. Use concise executive language. Avoid legal jargon unless necessary. Think like a Board Secretary preparing papers for a board meeting. Think like a regulator reviewing the file. Think like an investor performing due diligence. Think like an auditor reviewing governance compliance.

OUTPUT STANDARD: The final document package should look as if prepared by McKinsey + Freshfields + Linklaters + Corporate Secretary Office + General Counsel. The result must be board-ready, regulator-ready, investor-ready, and audit-ready.

Where information is missing: insert professional placeholders, explain why the information is required, and continue preparing the complete document package. Always produce a complete board package.`} />;
      default: return <Home onNavigate={onNavigate} entityContext={ec} />;
    }
  }

  const activeNav = NAV.find(n => n.id === section);

  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: ${T.bg}; font-family: 'Manrope', sans-serif; color: ${T.tp}; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: ${T.border}; border-radius: 2px; }
        @keyframes pulse { 0%,100% { opacity: 0.3; transform: scale(0.8); } 50% { opacity: 1; transform: scale(1); } }
        textarea, input { font-family: 'Manrope', sans-serif; }
        input::placeholder, textarea::placeholder { color: ${T.td}; }
        button { font-family: 'Manrope', sans-serif; }
        select option { background: #1a1a1a; color: #F0EBE0; }
        @media (max-width: 768px) {
          .sidebar { transform: translateX(-100%); position: fixed !important; z-index: 100; transition: transform 0.25s ease; }
          .sidebar.open { transform: translateX(0); }
          .mobile-header { display: flex !important; }
          .main-area { margin-left: 0 !important; }
        }
      `}</style>

      <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
        {mobileNav && <div onClick={() => setMobileNav(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 99 }} />}

        {/* Sidebar */}
        <div className={`sidebar${mobileNav ? " open" : ""}`} style={{ width: 220, background: T.sidebar, borderRight: `0.5px solid ${T.border}`, display: "flex", flexDirection: "column", flexShrink: 0, height: "100vh" }}>
          <div style={{ padding: "22px 20px 18px", borderBottom: `0.5px solid ${T.border}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
              <Icon id="shield" size={18} color={T.gold} sw={1.5} />
              <div>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 700, color: T.tp, letterSpacing: "0.02em" }}>Me Ngoga</p>
                <p style={{ fontSize: 9.5, color: T.td, letterSpacing: "0.08em", textTransform: "uppercase" }}>Legal Intelligence</p>
              </div>
            </div>
          </div>

          <nav style={{ flex: 1, overflowY: "auto", padding: "10px 0" }}>
            {NAV.map(item => {
              const active = section === item.id;
              return (
                <button key={item.id} onClick={() => onNavigate(item.id)}
                  style={{ width: "100%", display: "flex", alignItems: "center", gap: 11, padding: "10px 20px", background: active ? "rgba(201,168,76,0.08)" : "none", border: "none", borderLeft: `2px solid ${active ? T.gold : "transparent"}`, cursor: "pointer", transition: "all 0.15s" }}
                  onMouseEnter={e => { if (!active) e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}
                  onMouseLeave={e => { if (!active) e.currentTarget.style.background = "none"; }}>
                  <Icon id={item.icon} size={15} color={active ? T.gold : T.ts} sw={active ? 2 : 1.6} />
                  <span style={{ fontSize: 13, color: active ? T.gold : T.ts, fontWeight: active ? 600 : 400 }}>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Entity selector footer */}
          <div style={{ padding: "14px 20px", borderTop: `0.5px solid ${T.border}` }}>
            <p style={{ fontSize: 9.5, color: T.td, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 6 }}>
              Advising
            </p>
            <select
              value={entityId}
              onChange={e => setEntityId(e.target.value)}
              style={{
                width: "100%",
                background: T.card,
                border: `0.5px solid ${T.border}`,
                borderRadius: 6,
                padding: "6px 10px",
                fontSize: 11.5,
                color: T.tp,
                cursor: "pointer",
                outline: "none",
                fontFamily: "Manrope, sans-serif",
                marginBottom: entityId !== "none" ? 8 : 10,
                appearance: "none",
              }}>
              <option value="none">No entity selected</option>
              <option value="mtn">MTN Rwanda</option>
              <option value="bk">Bank of Kigali</option>
              <option value="sonarwa">Sonarwa Insurance</option>
              <option value="airtel">Airtel Rwanda</option>
              <option value="bnr">National Bank of Rwanda</option>
            </select>

            {entityId !== "none" && (
              <div style={{
                display: "flex", alignItems: "center", gap: 6,
                padding: "4px 8px",
                background: "rgba(201,168,76,0.08)",
                border: `0.5px solid ${T.border}`,
                borderRadius: 5,
                marginBottom: 10,
              }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: T.gold, flexShrink: 0 }} />
                <span style={{ fontSize: 10.5, color: T.gold, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {activeEntity.name}
                </span>
                {activeEntity.sector && (
                  <span style={{ fontSize: 9.5, color: T.td, flexShrink: 0 }}>· {activeEntity.sector}</span>
                )}
              </div>
            )}

            <p style={{ fontSize: 10, color: T.td, lineHeight: 1.5 }}>Rwanda · Kigali</p>
            <p style={{ fontSize: 10, color: T.td }}>© 2025 Me Ngoga</p>
          </div>
        </div>

        {/* Main */}
        <div className="main-area" style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", background: T.panel }}>
          <div className="mobile-header" style={{ display: "none", alignItems: "center", gap: 12, padding: "14px 18px", borderBottom: `0.5px solid ${T.border}`, background: T.sidebar }}>
            <button onClick={() => setMobileNav(v => !v)} style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}>
              <Icon id={mobileNav ? "close" : "menu"} size={20} color={T.tp} />
            </button>
            <Icon id="shield" size={16} color={T.gold} />
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, color: T.tp, fontWeight: 700 }}>Me Ngoga</span>
          </div>
          {section !== "home" && activeNav && (
            <div style={{ padding: "16px 24px", borderBottom: `0.5px solid ${T.border}`, display: "flex", alignItems: "center", gap: 10, background: T.panel }}>
              <Icon id={activeNav.icon} size={16} color={T.gold} />
              <span style={{ fontSize: 14, fontWeight: 500, color: T.tp }}>{activeNav.label}</span>
              {entityId !== "none" && (
                <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 6, padding: "3px 10px", background: "rgba(201,168,76,0.08)", border: `0.5px solid ${T.border}`, borderRadius: 5 }}>
                  <div style={{ width: 5, height: 5, borderRadius: "50%", background: T.gold }} />
                  <span style={{ fontSize: 10.5, color: T.gold }}>{activeEntity.name}</span>
                </div>
              )}
            </div>
          )}
          <div style={{ flex: 1, overflow: "hidden" }}>
            {renderSection()}
          </div>
        </div>
      </div>
    </>
  );
}
