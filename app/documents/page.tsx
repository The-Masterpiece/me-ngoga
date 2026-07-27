"use client";

import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type TemplateId =
  | "loan-agreement"
  | "mortgage-agreement"
  | "security-interest-movable"
  | "guarantee-agreement"
  | "assignment-receivables"
  | "loan-notification-letter";

interface FieldDef {
  key: string;
  label: string;
  placeholder: string;
  type?: "text" | "textarea";
  required?: boolean;
}

interface Template {
  id: TemplateId;
  title: string;
  description: string;
  category: string;
  legalBasis: string;
  fields: FieldDef[];
}

// ─── Template definitions ─────────────────────────────────────────────────────

const TEMPLATES: Template[] = [
  {
    id: "loan-agreement",
    title: "Loan Agreement",
    description: "Bilateral loan facility agreement between lender and borrower, governed by Rwandan law.",
    category: "Lending",
    legalBasis: "Civil Law / BNR Regulatory Framework",
    fields: [
      { key: "agreementDate", label: "Agreement Date", placeholder: "e.g. 12 June 2026", required: true },
      { key: "lenderName", label: "Lender Name", placeholder: "Full legal name of lending entity", required: true },
      { key: "lenderAddress", label: "Lender Address", placeholder: "Registered address", required: true },
      { key: "lenderRegNumber", label: "Lender Registration Number", placeholder: "RDB company number", required: true },
      { key: "borrowerName", label: "Borrower Name", placeholder: "Full legal name of borrowing entity", required: true },
      { key: "borrowerAddress", label: "Borrower Address", placeholder: "Registered address", required: true },
      { key: "borrowerRegNumber", label: "Borrower Registration Number", placeholder: "RDB company number", required: true },
      { key: "currency", label: "Currency", placeholder: "RWF or USD", required: true },
      { key: "loanAmount", label: "Loan Amount (figures)", placeholder: "e.g. 500,000,000", required: true },
      { key: "loanAmountWords", label: "Loan Amount (words)", placeholder: "e.g. Five Hundred Million Rwandan Francs", required: true },
      { key: "purpose", label: "Purpose of Loan", placeholder: "e.g. construction of commercial premises", required: true },
      { key: "interestRate", label: "Interest Rate", placeholder: "e.g. 16% per annum", required: true },
      { key: "tenor", label: "Tenor", placeholder: "e.g. 60 months", required: true },
      { key: "gracePeriod", label: "Grace Period", placeholder: "e.g. 6 months on principal / None", required: true },
      { key: "repaymentSchedule", label: "Repayment Schedule", placeholder: "e.g. Equal monthly instalments of RWF X", required: true },
      { key: "securityDescription", label: "Security Description", placeholder: "e.g. First-ranking mortgage over Plot No. X", required: true, type: "textarea" },
    ],
  },
  {
    id: "mortgage-agreement",
    title: "Mortgage Agreement",
    description: "First-ranking hypothec over immovable property, compliant with Rwanda Land Law No. 43/2013.",
    category: "Security",
    legalBasis: "Law No. 43/2013 on Land in Rwanda",
    fields: [
      { key: "agreementDate", label: "Agreement Date", placeholder: "e.g. 12 June 2026", required: true },
      { key: "lenderName", label: "Mortgagee (Lender) Name", placeholder: "Full legal name", required: true },
      { key: "lenderAddress", label: "Mortgagee Address", placeholder: "Registered address", required: true },
      { key: "borrowerName", label: "Mortgagor (Borrower) Name", placeholder: "Full legal name", required: true },
      { key: "borrowerAddress", label: "Mortgagor Address", placeholder: "Registered address", required: true },
      { key: "currency", label: "Currency", placeholder: "RWF or USD", required: true },
      { key: "principalAmount", label: "Principal Amount (figures)", placeholder: "e.g. 200,000,000", required: true },
      { key: "principalAmountWords", label: "Principal Amount (words)", placeholder: "e.g. Two Hundred Million Rwandan Francs", required: true },
      { key: "mortgageRate", label: "Mortgage Interest Rate", placeholder: "e.g. 15% per annum", required: true },
      { key: "duration", label: "Duration", placeholder: "e.g. 10 years", required: true },
      { key: "propertyDescription", label: "Property Description", placeholder: "e.g. Plot No. 1234, residential house, 500 sqm", required: true, type: "textarea" },
      { key: "propertyUPI", label: "Property UPI", placeholder: "Unique Parcel Identifier from RLMUA", required: true },
      { key: "propertyLocation", label: "Property Location", placeholder: "e.g. Kicukiro District, Kigali City", required: true },
      { key: "propertyValue", label: "Assessed Property Value (figures)", placeholder: "e.g. 300,000,000", required: true },
    ],
  },
  {
    id: "security-interest-movable",
    title: "Security Interest — Movable Property",
    description: "Pledge over movable assets (equipment, vehicles, inventory) under Law No. 34/2013.",
    category: "Security",
    legalBasis: "Law No. 34/2013 on Security Interests in Movable Property",
    fields: [
      { key: "agreementDate", label: "Agreement Date", placeholder: "e.g. 12 June 2026", required: true },
      { key: "lenderName", label: "Pledgee (Lender) Name", placeholder: "Full legal name", required: true },
      { key: "pledgorName", label: "Pledgor Name", placeholder: "Full legal name", required: true },
      { key: "currency", label: "Currency", placeholder: "RWF or USD", required: true },
      { key: "loanAmount", label: "Loan Amount", placeholder: "e.g. 150,000,000", required: true },
      { key: "loanPurpose", label: "Loan Purpose", placeholder: "e.g. purchase of manufacturing equipment", required: true },
      { key: "assetDescription", label: "Description of Pledged Assets", placeholder: "e.g. Three industrial generators, Model X, Serial Nos. ABC, DEF, GHI", required: true, type: "textarea" },
      { key: "assetValue", label: "Assessed Value of Assets", placeholder: "e.g. 180,000,000", required: true },
      { key: "securedValue", label: "Secured Value (Loan + 30%)", placeholder: "e.g. 195,000,000", required: true },
      { key: "securityPeriod", label: "Security Period", placeholder: "e.g. 5 years", required: true },
    ],
  },
  {
    id: "guarantee-agreement",
    title: "Guarantee Agreement",
    description: "Personal or corporate guarantee securing a borrower's obligations to a lender.",
    category: "Security",
    legalBasis: "Rwandan Civil Law / Contract Law",
    fields: [
      { key: "agreementDate", label: "Agreement Date", placeholder: "e.g. 12 June 2026", required: true },
      { key: "lenderName", label: "Lender Name", placeholder: "Full legal name", required: true },
      { key: "lenderAddress", label: "Lender Address", placeholder: "Registered address", required: true },
      { key: "guarantorName", label: "Guarantor Name", placeholder: "Full legal name of guarantor", required: true },
      { key: "guarantorAddress", label: "Guarantor Address", placeholder: "Registered or residential address", required: true },
      { key: "borrowerName", label: "Borrower Name", placeholder: "Full legal name of the principal borrower", required: true },
      { key: "currency", label: "Currency", placeholder: "RWF or USD", required: true },
      { key: "loanAmount", label: "Loan Amount (figures)", placeholder: "e.g. 100,000,000", required: true },
      { key: "loanAmountWords", label: "Loan Amount (words)", placeholder: "e.g. One Hundred Million Rwandan Francs", required: true },
      { key: "loanAgreementDate", label: "Date of Loan Agreement", placeholder: "e.g. 1 June 2026", required: true },
    ],
  },
  {
    id: "assignment-receivables",
    title: "Assignment of Receivables",
    description: "Assignment of future receivables and account charge as security for a loan facility.",
    category: "Security",
    legalBasis: "Law No. 34/2013 on Security Interests in Movable Property",
    fields: [
      { key: "agreementDate", label: "Agreement Date", placeholder: "e.g. 12 June 2026", required: true },
      { key: "lenderName", label: "Lender Name", placeholder: "Full legal name", required: true },
      { key: "clientName", label: "Client (Assignor) Name", placeholder: "Full legal name", required: true },
      { key: "currency", label: "Currency", placeholder: "RWF or USD", required: true },
      { key: "loanAmount", label: "Loan Amount", placeholder: "e.g. 250,000,000", required: true },
      { key: "loanAgreementDate", label: "Date of Loan Agreement", placeholder: "e.g. 1 June 2026", required: true },
      { key: "collectionAccountNumber", label: "Collection Account Number", placeholder: "Bank account into which receivables are paid", required: true },
      { key: "securityRank", label: "Security Rank", placeholder: "e.g. first, second", required: true },
      { key: "securityPeriod", label: "Security Period", placeholder: "e.g. 7 years", required: true },
    ],
  },
  {
    id: "loan-notification-letter",
    title: "Loan Notification Letter",
    description: "Formal offer letter notifying a borrower of an approved loan facility with all key terms.",
    category: "Correspondence",
    legalBasis: "BNR Regulation No. 55/2022 — Financial Consumer Protection",
    fields: [
      { key: "letterDate", label: "Letter Date", placeholder: "e.g. 12 June 2026", required: true },
      { key: "lenderName", label: "Lender Name", placeholder: "Full legal name", required: true },
      { key: "lenderAddress", label: "Lender Address", placeholder: "Physical address", required: true },
      { key: "referenceNumber", label: "Reference Number", placeholder: "e.g. REF/2026/0042", required: true },
      { key: "borrowerName", label: "Borrower Name", placeholder: "Full legal name", required: true },
      { key: "borrowerAddress", label: "Borrower Address", placeholder: "Physical or postal address", required: true },
      { key: "applicationDate", label: "Application Letter Date", placeholder: "Date of borrower's application", required: true },
      { key: "currency", label: "Currency", placeholder: "RWF or USD", required: true },
      { key: "approvedAmount", label: "Approved Loan Amount", placeholder: "e.g. 500,000,000", required: true },
      { key: "loanPurpose", label: "Purpose of Loan", placeholder: "e.g. working capital financing", required: true },
      { key: "tenor", label: "Loan Tenor", placeholder: "e.g. 36 months", required: true },
      { key: "gracePeriod", label: "Grace Period", placeholder: "e.g. 3 months / None", required: true },
      { key: "interestRate", label: "Interest Rate", placeholder: "e.g. 16% per annum", required: true },
      { key: "serviceCommission", label: "Service Commission", placeholder: "e.g. 1% flat", required: true },
      { key: "managementFee", label: "Management Fee", placeholder: "e.g. 0.5% per annum", required: true },
      { key: "securityList", label: "Security and Guarantees", placeholder: "List all security to be provided", required: true, type: "textarea" },
      { key: "conditionsPrecedentSigning", label: "Conditions Precedent to Signing", placeholder: "List all CPs to be met before signing", required: true, type: "textarea" },
      { key: "conditionsPrecedentDisbursement", label: "Conditions Precedent to Disbursement", placeholder: "List all CPs to be met before drawdown", required: true, type: "textarea" },
      { key: "coolingOffPeriod", label: "Cooling-Off Period (days)", placeholder: "e.g. 30", required: true },
      { key: "offerValidityPeriod", label: "Offer Validity Period (days)", placeholder: "e.g. 60", required: true },
    ],
  },
];

// ─── Category styles ──────────────────────────────────────────────────────────

const CATEGORY_STYLES: Record<string, string> = {
  Lending: "bg-blue-900/30 text-blue-300 border border-blue-800",
  Security: "bg-amber-900/30 text-amber-300 border border-amber-800",
  Correspondence: "bg-emerald-900/30 text-emerald-300 border border-emerald-800",
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function DocumentsPage() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [formValues, setFormValues] = useState<Record<string, string>>({});
  const [generating, setGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSelectTemplate = (template: Template) => {
    setSelectedTemplate(template);
    setFormValues({});
    setError(null);
    setSuccess(false);
  };

  const handleBack = () => {
    setSelectedTemplate(null);
    setFormValues({});
    setError(null);
    setSuccess(false);
  };

  const handleChange = (key: string, value: string) => {
    setFormValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleGenerate = async () => {
    if (!selectedTemplate) return;

    const missing = selectedTemplate.fields
      .filter((f) => f.required && !formValues[f.key]?.trim())
      .map((f) => f.label);

    if (missing.length > 0) {
      setError(`Please complete the following required fields: ${missing.join(", ")}`);
      return;
    }

    setGenerating(true);
    setError(null);
    setSuccess(false);

    try {
      const res = await fetch("/api/generate-document", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ templateId: selectedTemplate.id, variables: formValues }),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Document generation failed");
      }

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${selectedTemplate.title.replace(/\s+/g, "_")}_${new Date().toISOString().split("T")[0]}.docx`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      setSuccess(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred.");
    } finally {
      setGenerating(false);
    }
  };

  // ── Template gallery ────────────────────────────────────────────────────────

  if (!selectedTemplate) {
    return (
      <div className="min-h-screen bg-[#0c0c0c] text-[#F0EBE0] px-6 py-10 max-w-6xl mx-auto">
        <div className="mb-10">
          <h1 className="font-['Playfair_Display'] text-4xl text-[#C9A84C] mb-3">
            Document Assembly
          </h1>
          <p className="text-[#F0EBE0]/70 text-base leading-relaxed max-w-2xl">
            Generate gazette-compliant Rwandan law instruments in seconds. Select a template,
            complete the variables, and download a review-ready Word document.
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs text-[#F0EBE0]/40">
            <span className="inline-block w-2 h-2 rounded-full bg-[#C9A84C]" />
            All templates are anchored to Official Gazette statutes. Review before execution.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TEMPLATES.map((tpl) => (
            <button
              key={tpl.id}
              onClick={() => handleSelectTemplate(tpl)}
              className="text-left bg-[#141414] border border-[#2a2a2a] hover:border-[#C9A84C]/50 rounded-xl p-6 transition-all duration-200 hover:bg-[#1a1a1a] group"
            >
              <div className="flex items-start justify-between mb-3">
                <span className={`text-xs font-medium px-2 py-0.5 rounded ${CATEGORY_STYLES[tpl.category]}`}>
                  {tpl.category}
                </span>
                <span className="text-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                  Open →
                </span>
              </div>
              <h2 className="font-['Playfair_Display'] text-lg text-[#F0EBE0] mb-2 group-hover:text-[#C9A84C] transition-colors">
                {tpl.title}
              </h2>
              <p className="text-[#F0EBE0]/55 text-sm leading-relaxed mb-4">
                {tpl.description}
              </p>
              <div className="text-xs text-[#F0EBE0]/30 border-t border-[#2a2a2a] pt-3">
                {tpl.legalBasis}
              </div>
            </button>
          ))}
        </div>

        <div className="mt-12 text-center text-xs text-[#F0EBE0]/25 max-w-xl mx-auto leading-relaxed">
          Documents generated by Me Ngoga are drafts for professional review. They do not
          constitute legal advice and should be reviewed by qualified counsel before execution.
        </div>
      </div>
    );
  }

  // ── Form view ───────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-[#F0EBE0] px-6 py-10 max-w-3xl mx-auto">
      <button
        onClick={handleBack}
        className="flex items-center gap-2 text-[#F0EBE0]/50 hover:text-[#C9A84C] text-sm mb-8 transition-colors"
      >
        ← Back to templates
      </button>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className={`text-xs font-medium px-2 py-0.5 rounded ${CATEGORY_STYLES[selectedTemplate.category]}`}>
            {selectedTemplate.category}
          </span>
        </div>
        <h1 className="font-['Playfair_Display'] text-3xl text-[#C9A84C] mb-2">
          {selectedTemplate.title}
        </h1>
        <p className="text-[#F0EBE0]/55 text-sm leading-relaxed">
          {selectedTemplate.description}
        </p>
        <p className="text-xs text-[#F0EBE0]/30 mt-2">
          Legal basis: {selectedTemplate.legalBasis}
        </p>
      </div>

      <div className="space-y-5">
        {selectedTemplate.fields.map((field) => (
          <div key={field.key}>
            <label className="block text-sm font-medium text-[#F0EBE0]/80 mb-1.5">
              {field.label}
              {field.required && <span className="text-[#C9A84C] ml-1">*</span>}
            </label>
            {field.type === "textarea" ? (
              <textarea
                value={formValues[field.key] || ""}
                onChange={(e) => handleChange(field.key, e.target.value)}
                placeholder={field.placeholder}
                rows={3}
                className="w-full bg-[#141414] border border-[#2a2a2a] focus:border-[#C9A84C]/60 rounded-lg px-4 py-3 text-sm text-[#F0EBE0] placeholder-[#F0EBE0]/25 outline-none transition-colors resize-none"
              />
            ) : (
              <input
                type="text"
                value={formValues[field.key] || ""}
                onChange={(e) => handleChange(field.key, e.target.value)}
                placeholder={field.placeholder}
                className="w-full bg-[#141414] border border-[#2a2a2a] focus:border-[#C9A84C]/60 rounded-lg px-4 py-3 text-sm text-[#F0EBE0] placeholder-[#F0EBE0]/25 outline-none transition-colors"
              />
            )}
          </div>
        ))}
      </div>

      {error && (
        <div className="mt-6 bg-red-900/20 border border-red-800/50 rounded-lg px-4 py-3 text-sm text-red-300">
          {error}
        </div>
      )}

      {success && (
        <div className="mt-6 bg-emerald-900/20 border border-emerald-800/50 rounded-lg px-4 py-3 text-sm text-emerald-300">
          ✓ Document generated and downloaded successfully. Review all clauses before execution.
        </div>
      )}

      <div className="mt-8 flex gap-4">
        <button
          onClick={handleGenerate}
          disabled={generating}
          className="flex-1 bg-[#C9A84C] hover:bg-[#b8963e] disabled:opacity-50 disabled:cursor-not-allowed text-[#0c0c0c] font-semibold py-3.5 px-6 rounded-lg text-sm transition-colors"
        >
          {generating ? "Generating document…" : "Generate & Download (.docx)"}
        </button>
        <button
          onClick={handleBack}
          className="px-5 py-3.5 border border-[#2a2a2a] hover:border-[#C9A84C]/40 rounded-lg text-sm text-[#F0EBE0]/60 hover:text-[#F0EBE0] transition-colors"
        >
          Cancel
        </button>
      </div>

      <p className="mt-8 text-xs text-[#F0EBE0]/25 leading-relaxed text-center">
        This document is a draft for professional review. It does not constitute legal advice.
        All generated instruments should be reviewed by qualified counsel before execution.
      </p>
    </div>
  );
}
