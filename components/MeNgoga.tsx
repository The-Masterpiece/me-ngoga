// @ts-nocheck
"use client";
import { useState, useRef, useEffect } from "react";

// ═══ THEME ═══════════════════════════════════════════════════════════════════
const T = {
  bg: "#0c0c0c",
  sidebar: "#111111",
  panel: "#141414",
  card: "#1a1a1a",
  gold: "#C9A84C",
  goldBright: "#D4AF37",
  goldDim: "rgba(201,168,76,0.5)",
  border: "rgba(201,168,76,0.28)",
  borderSub: "rgba(255,255,255,0.06)",
  tp: "#F0EBE0",
  ts: "#9A9080",
  td: "#5A554C",
  high: "#D4433A",
  medium: "#B8820A",
  low: "#3D8A55",
};

// ═══ SYSTEM PROMPT ════════════════════════════════════════════════════════════
const SYSTEM_PROMPT = `You are Me Ngoga ("my advocate"), an executive legal intelligence platform for Rwanda.
You are a trusted legal counsel for corporate in-house legal teams — banks, telecoms, NGOs, and parastatals.

Your role:
- Provide precise, actionable legal guidance under Rwandan law
- Always cite the specific law, article number, and key obligations
- Flag risks clearly: HIGH / MEDIUM / LOW
- Structure answers for executives: lead with the bottom line, then the detail
- Flag when matters require human legal counsel

Laws you are trained on will be added to this system prompt progressively. For now, apply your best knowledge of Rwandan law and clearly indicate when you are drawing on general legal principles rather than a specific gazette-verified article.

Tone: authoritative, precise, concise. No hedging. No waffle. Speak like a senior advocate.`;

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
    send: <svg {...p}><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>,
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

function Chat({ moduleTitle, initialQuery = "", systemPromptExtra = "" }: any) {
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
    setMsgs(next); setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system: SYSTEM_PROMPT + (systemPromptExtra ? "\n\n" + systemPromptExtra : ""),
          messages: next.map(m => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await res.json();
      const reply = data.content?.[0]?.text || "Unable to get a response. Please try again.";
      setMsgs([...next, { role: "assistant", content: reply }]);
    } catch {
      setMsgs([...next, { role: "assistant", content: "Connection error. Please check your network and try again." }]);
    }
    setLoading(false);
  }

  function handleKey(e: any) { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(input); setInput(""); } }

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: T.panel }}>
      {/* Header */}
      <div style={{ padding: "18px 24px", borderBottom: `0.5px solid ${T.border}`, display: "flex", alignItems: "center", gap: 10 }}>
        <Icon id="shield" size={15} color={T.gold} />
        <span style={{ fontSize: 13, fontWeight: 500, color: T.ts }}>{moduleTitle}</span>
      </div>
      {/* Messages */}
      <div style={{ flex: 1, overflowY: "auto", padding: "20px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
        {msgs.length === 0 && (
          <div style={{ margin: "auto", textAlign: "center" }}>
            <Icon id="counsel" size={28} color={T.goldDim} />
            <p style={{ fontSize: 13, color: T.td, marginTop: 12 }}>Ask a legal question to begin.</p>
          </div>
        )}
        {msgs.map((m, i) => (
          <div key={i} style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start" }}>
            <div style={{
              maxWidth: "80%", padding: "12px 16px", borderRadius: m.role === "user" ? "12px 12px 2px 12px" : "12px 12px 12px 2px",
              background: m.role === "user" ? `rgba(201,168,76,0.12)` : T.card,
              border: `0.5px solid ${m.role === "user" ? T.border : T.borderSub}`,
              fontSize: 13.5, lineHeight: 1.65, color: T.tp, whiteSpace: "pre-wrap",
            }}>{m.content}</div>
          </div>
        ))}
        {loading && (
          <div style={{ display: "flex", gap: 5, padding: "12px 16px", background: T.card, borderRadius: "12px 12px 12px 2px", border: `0.5px solid ${T.borderSub}`, width: "fit-content" }}>
            {[0, 1, 2].map(i => <div key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: T.gold, opacity: 0.7, animation: `pulse 1.2s ease-in-out ${i * 0.2}s infinite` }} />)}
          </div>
        )}
        <div ref={bottomRef} />
      </div>
      {/* Input */}
      <div style={{ padding: "14px 20px", borderTop: `0.5px solid ${T.border}` }}>
        <div style={{ display: "flex", gap: 10, alignItems: "flex-end", background: T.card, border: `0.5px solid ${T.border}`, borderRadius: 10, padding: "10px 14px" }}>
          <textarea
            value={input} onChange={e => setInput(e.target.value)} onKeyDown={handleKey}
            placeholder="Type your legal question…" rows={1}
            style={{ flex: 1, background: "none", border: "none", outline: "none", resize: "none", fontSize: 13.5, color: T.tp, lineHeight: 1.5, fontFamily: "Manrope, sans-serif" }}
          />
          <button onClick={() => { sendMessage(input); setInput(""); }}
            style={{ background: T.gold, border: "none", borderRadius: 7, width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}>
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
  { label: "Board dispute", sub: "Governance", icon: "board", q: "We have a board dispute. Advise." },
  { label: "Employee dismissal", sub: "Labour Law", icon: "dismiss", q: "Legal process for employee dismissal?" },
  { label: "Regulator inquiry", sub: "Compliance", icon: "regulator", q: "We received a regulatory inquiry. What are our obligations?" },
  { label: "Data breach", sub: "Data Protection", icon: "databreach", q: "We have a data breach — obligations under Rwandan law?" },
  { label: "Contract review", sub: "Commercial", icon: "contract", q: "Commercial contract review under Rwandan law." },
];

function RailCard({ children, style = {} }: any) {
  return (
    <section style={{ background: T.card, border: `0.5px solid ${T.borderSub}`, borderRadius: 10, padding: "16px 18px", ...style }}>
      {children}
    </section>
  );
}

function Home({ onNavigate }: any) {
  const [query, setQuery] = useState("");
  const h = new Date().getHours();
  const greeting = h < 12 ? "Good morning" : h < 17 ? "Good afternoon" : "Good evening";

  return (
    <div style={{ display: "flex", height: "100%", overflow: "hidden" }}>
      {/* Main scroll area */}
      <div style={{ flex: 1, overflowY: "auto", padding: "0 0 40px" }}>
        {/* Hero */}
        <div style={{ position: "relative", height: 320, overflow: "hidden", background: "#0a0a0a" }}>
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "url('/hero-banner.png')",
            backgroundSize: "cover", backgroundPosition: "center",
          }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(12,12,12,0.3) 0%, rgba(12,12,12,0.85) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0 32px 32px" }}>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700, color: T.tp, marginBottom: 6 }}>
              {greeting}, Counsel.
            </h1>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 400, color: T.ts, marginBottom: 20 }}>
              How can I help you today?
            </h2>
            {/* Command input */}
            <div style={{ display: "flex", gap: 8, maxWidth: 560, background: "rgba(20,20,20,0.92)", border: `0.5px solid ${T.border}`, borderRadius: 10, padding: "10px 14px", backdropFilter: "blur(8px)" }}>
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

        {/* Rail cards — visible on mobile/mid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12, padding: "24px 32px 0" }}>
          {/* Risk Overview */}
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

          {/* Active Matters */}
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

          {/* Deadlines */}
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

          {/* Quick Actions */}
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
            <button onClick={() => onNavigate("counsel", "Data breach — advise on crisis response obligations")}
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

// ═══ COMPLIANCE TRACKER ════════════════════════════════════════════════════════
const COMPLIANCE_ITEMS = [
  // Company Law
  { id: 1, title: "Annual Return Filing", law: "Company Law No. 019/2023", article: "Art. 29", category: "Company Law", deadline: "31 Jan", daysLeft: 30, status: "pending", risk: "High" },
  { id: 2, title: "Board Meeting – Minimum Frequency", law: "Company Law No. 019/2023", article: "Art. 121", category: "Company Law", deadline: "Quarterly", daysLeft: 45, status: "done", risk: "Medium" },
  { id: 3, title: "Financial Statements Approval", law: "Company Law No. 019/2023", article: "Art. 158", category: "Company Law", deadline: "30 Apr", daysLeft: 60, status: "pending", risk: "High" },
  // Labour Law
  { id: 4, title: "Employment Contract Review", law: "Labour Law No. 66/2018", article: "Art. 11", category: "Labour", deadline: "Ongoing", daysLeft: 0, status: "done", risk: "Medium" },
  { id: 5, title: "Leave Policy Update", law: "Labour Law No. 66/2018", article: "Art. 57", category: "Labour", deadline: "30 Jun", daysLeft: 90, status: "pending", risk: "Low" },
  { id: 6, title: "Social Security Registration", law: "Labour Law No. 66/2018", article: "Art. 96", category: "Labour", deadline: "Ongoing", daysLeft: 0, status: "done", risk: "Medium" },
  // Data Protection
  { id: 7, title: "Privacy Policy Publication", law: "Data Protection Law No. 058/2021", article: "Art. 25", category: "Data Protection", deadline: "Ongoing", daysLeft: 0, status: "done", risk: "High" },
  { id: 8, title: "Data Processing Register", law: "Data Protection Law No. 058/2021", article: "Art. 30", category: "Data Protection", deadline: "Ongoing", daysLeft: 14, status: "pending", risk: "High" },
  { id: 9, title: "DPO Designation", law: "Data Protection Law No. 058/2021", article: "Art. 42", category: "Data Protection", deadline: "Ongoing", daysLeft: 7, status: "pending", risk: "High" },
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
          <p style={{ fontSize: 12.5, color: T.ts }}>Statutory obligations across active Rwandan laws</p>
        </div>
        {overdue > 0 && (
          <div style={{ display: "flex", alignItems: "center", gap: 7, padding: "8px 14px", background: "rgba(212,67,58,0.08)", border: `0.5px solid rgba(212,67,58,0.3)`, borderRadius: 8 }}>
            <Icon id="alert" size={13} color={T.high} />
            <span style={{ fontSize: 12, color: T.high, fontWeight: 500 }}>{overdue} item{overdue > 1 ? "s" : ""} due within 7 days</span>
          </div>
        )}
      </div>

      {/* Filters */}
      <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
        {cats.map(c => (
          <button key={c} onClick={() => setFilter(c)}
            style={{ padding: "6px 14px", borderRadius: 6, fontSize: 12, fontWeight: 500, cursor: "pointer", border: `0.5px solid ${filter === c ? T.gold : T.borderSub}`, background: filter === c ? "rgba(201,168,76,0.1)" : "none", color: filter === c ? T.gold : T.ts }}>
            {c}
          </button>
        ))}
      </div>

      {/* Items */}
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
              <p style={{ fontSize: 11, color: item.daysLeft <= 7 && item.status === "pending" ? T.high : T.ts, marginBottom: 2 }}>{item.deadline}</p>
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
      {/* List */}
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

      {/* Detail */}
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

          {/* Status bar */}
          <div style={{ display: "flex", gap: 0, marginBottom: 24, background: T.card, borderRadius: 8, overflow: "hidden", border: `0.5px solid ${T.borderSub}` }}>
            {STATUS_FLOW.map((s, i) => {
              const idx = STATUS_FLOW.indexOf(active.status);
              return (
                <div key={s} style={{ flex: 1, padding: "8px 0", textAlign: "center", fontSize: 11, fontWeight: 500, background: i <= idx ? "rgba(201,168,76,0.15)" : "none", color: i <= idx ? T.gold : T.td, borderRight: i < 3 ? `0.5px solid ${T.borderSub}` : "none" }}>
                  {s}
                </div>
              );
            })}
          </div>

          {/* Notes */}
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
      {/* List */}
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
          <button onClick={() => onNavigate("documents", "Draft new legal document")}
            style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "10px", background: "rgba(201,168,76,0.08)", border: `0.5px solid ${T.border}`, borderRadius: 8, cursor: "pointer" }}>
            <Icon id="plus" size={14} color={T.gold} />
            <span style={{ fontSize: 12, color: T.gold }}>New Document</span>
          </button>
        </div>
      </div>

      {/* Detail / Draft */}
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

// ═══ GENERIC MODULE (Chat-based) ═══════════════════════════════════════════════
function ChatModule({ title, description, icon, systemExtra = "", initialQuery = "" }: any) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {msgs => (
        <Chat moduleTitle={`${title} — Me Ngoga`} initialQuery={initialQuery} systemPromptExtra={systemExtra} />
      )}
    </div>
  );
}

// ═══ SIDEBAR ══════════════════════════════════════════════════════════════════
const NAV = [
  { id: "home", label: "Home", icon: "home" },
  { id: "counsel", label: "Counsel", icon: "counsel" },
  { id: "workforce", label: "Workforce", icon: "workforce" },
  { id: "governance", label: "Governance", icon: "governance" },
  { id: "dataprotection", label: "Data Protection", icon: "dataprotection" },
  { id: "compliance", label: "Compliance", icon: "compliance" },
  { id: "matters", label: "Matters", icon: "matters" },
  { id: "documents", label: "Documents", icon: "documents" },
  { id: "boardroom", label: "Boardroom", icon: "boardroom" },
];

// ═══ ROOT APP ═════════════════════════════════════════════════════════════════
export default function MeNgoga() {
  const [section, setSection] = useState("home");
  const [chatQuery, setChatQuery] = useState("");
  const [chatKey, setChatKey] = useState(0);
  const [mobileNav, setMobileNav] = useState(false);

  function onNavigate(sec: string, query = "") {
    setSection(sec);
    if (query) { setChatQuery(query); setChatKey(k => k + 1); }
    setMobileNav(false);
  }

  function renderSection() {
    switch (section) {
      case "home": return <Home onNavigate={onNavigate} />;
      case "counsel": return <Chat key={`counsel-${chatKey}`} moduleTitle="Legal Counsel" initialQuery={chatQuery} />;
      case "workforce": return <Chat key={`workforce-${chatKey}`} moduleTitle="Workforce & HR" initialQuery={chatQuery} systemPromptExtra="Focus on Rwandan Labour Law No. 66/2018 and Amendment No. 027/2023." />;
      case "governance": return <Chat key={`governance-${chatKey}`} moduleTitle="Corporate Governance" initialQuery={chatQuery} systemPromptExtra="Focus on Company Law No. 019/2023 and corporate governance obligations." />;
      case "dataprotection": return <Chat key={`dataprotection-${chatKey}`} moduleTitle="Data Protection" initialQuery={chatQuery} systemPromptExtra="Focus on Data Protection Law No. 058/2021 and NCSA obligations." />;
      case "compliance": return <ComplianceTracker onNavigate={onNavigate} />;
      case "matters": return <Matters onNavigate={onNavigate} />;
      case "documents": return <Documents onNavigate={onNavigate} />;
      case "boardroom": return <Chat key={`boardroom-${chatKey}`} moduleTitle="Boardroom Intelligence" initialQuery={chatQuery} systemPromptExtra="You are advising at board level. Focus on governance, fiduciary duties, strategic legal risk, and executive accountability under Rwandan company and securities law." />;
      default: return <Home onNavigate={onNavigate} />;
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
        textarea { font-family: 'Manrope', sans-serif; }
        input::placeholder, textarea::placeholder { color: ${T.td}; }
        button { font-family: 'Manrope', sans-serif; }
        @media (max-width: 768px) {
          .sidebar { transform: translateX(-100%); position: fixed !important; z-index: 100; transition: transform 0.25s ease; }
          .sidebar.open { transform: translateX(0); }
          .mobile-header { display: flex !important; }
          .main-area { margin-left: 0 !important; }
        }
      `}</style>

      <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
        {/* Mobile overlay */}
        {mobileNav && <div onClick={() => setMobileNav(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 99 }} />}

        {/* Sidebar */}
        <div className={`sidebar${mobileNav ? " open" : ""}`} style={{ width: 220, background: T.sidebar, borderRight: `0.5px solid ${T.border}`, display: "flex", flexDirection: "column", flexShrink: 0, height: "100vh" }}>
          {/* Logo */}
          <div style={{ padding: "22px 20px 18px", borderBottom: `0.5px solid ${T.border}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
              <Icon id="shield" size={18} color={T.gold} sw={1.5} />
              <div>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 700, color: T.tp, letterSpacing: "0.02em" }}>Me Ngoga</p>
                <p style={{ fontSize: 9.5, color: T.td, letterSpacing: "0.08em", textTransform: "uppercase" }}>Legal Intelligence</p>
              </div>
            </div>
          </div>

          {/* Nav */}
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

          {/* Footer */}
          <div style={{ padding: "14px 20px", borderTop: `0.5px solid ${T.border}` }}>
            <p style={{ fontSize: 10, color: T.td, lineHeight: 1.5 }}>Rwanda · Kigali</p>
            <p style={{ fontSize: 10, color: T.td }}>© 2025 Me Ngoga</p>
          </div>
        </div>

        {/* Main */}
        <div className="main-area" style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", background: T.panel }}>
          {/* Mobile header */}
          <div className="mobile-header" style={{ display: "none", alignItems: "center", gap: 12, padding: "14px 18px", borderBottom: `0.5px solid ${T.border}`, background: T.sidebar }}>
            <button onClick={() => setMobileNav(v => !v)} style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}>
              <Icon id={mobileNav ? "close" : "menu"} size={20} color={T.tp} />
            </button>
            <Icon id="shield" size={16} color={T.gold} />
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, color: T.tp, fontWeight: 700 }}>Me Ngoga</span>
          </div>

          {/* Section header — for non-home sections */}
          {section !== "home" && activeNav && (
            <div style={{ padding: "16px 24px", borderBottom: `0.5px solid ${T.border}`, display: "flex", alignItems: "center", gap: 10, background: T.panel }}>
              <Icon id={activeNav.icon} size={16} color={T.gold} />
              <span style={{ fontSize: 14, fontWeight: 500, color: T.tp }}>{activeNav.label}</span>
            </div>
          )}

          {/* Content */}
          <div style={{ flex: 1, overflow: "hidden" }}>
            {renderSection()}
          </div>
        </div>
      </div>
    </>
  );
}
