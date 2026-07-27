import { NextRequest, NextResponse } from "next/server";

// ─── Types ────────────────────────────────────────────────────────────────────

type TemplateId =
  | "loan-agreement"
  | "mortgage-agreement"
  | "security-interest-movable"
  | "guarantee-agreement"
  | "assignment-receivables"
  | "loan-notification-letter";

interface GenerateRequest {
  templateId: TemplateId;
  variables: Record<string, string>;
}

// ─── Document builders ────────────────────────────────────────────────────────

async function buildDocument(templateId: TemplateId, vars: Record<string, string>) {
  const {
    Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
    AlignmentType, BorderStyle, WidthType, ShadingType,
    HeadingLevel, LevelFormat, UnderlineType,
  } = await import("docx");

  const v = (key: string, fallback = `[${key}]`) => vars[key] || fallback;

  const FONT = "Arial";
  const GOLD = "C9A84C";
  const BLACK = "0C0C0C";
  const LIGHT_GREY = "F2F2F2";

  const cellBorder = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
  const allBorders = { top: cellBorder, bottom: cellBorder, left: cellBorder, right: cellBorder };

  const para = (text: string, opts?: {
    bold?: boolean; size?: number; center?: boolean; spacing?: number;
    color?: string; underline?: boolean; italic?: boolean;
  }) =>
    new Paragraph({
      alignment: opts?.center ? AlignmentType.CENTER : AlignmentType.JUSTIFIED,
      spacing: { after: opts?.spacing ?? 160 },
      children: [
        new TextRun({
          text,
          bold: opts?.bold,
          size: opts?.size ?? 22,
          font: FONT,
          color: opts?.color ?? BLACK,
          underline: opts?.underline ? { type: UnderlineType.SINGLE } : undefined,
          italics: opts?.italic,
        }),
      ],
    });

  const heading = (text: string, level: 1 | 2 | 3 = 1) =>
    new Paragraph({
      heading: level === 1 ? HeadingLevel.HEADING_1 : level === 2 ? HeadingLevel.HEADING_2 : HeadingLevel.HEADING_3,
      spacing: { before: 240, after: 160 },
      children: [new TextRun({ text, bold: true, size: level === 1 ? 28 : 24, font: FONT, color: BLACK })],
    });

  const divider = () =>
    new Paragraph({
      spacing: { before: 120, after: 120 },
      border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: GOLD, space: 1 } },
      children: [],
    });

  const blank = (lines = 1) =>
    Array.from({ length: lines }, () => new Paragraph({ children: [new TextRun("")] }));

  const clauseTitle = (num: string, title: string) =>
    new Paragraph({
      spacing: { before: 200, after: 100 },
      children: [
        new TextRun({ text: `${num}. `, bold: true, size: 22, font: FONT }),
        new TextRun({ text: title.toUpperCase(), bold: true, size: 22, font: FONT, underline: { type: UnderlineType.SINGLE } }),
      ],
    });

  const subClause = (num: string, text: string) =>
    new Paragraph({
      spacing: { after: 120 },
      indent: { left: 400 },
      children: [
        new TextRun({ text: `${num}  `, bold: true, size: 22, font: FONT }),
        new TextRun({ text, size: 22, font: FONT }),
      ],
    });

  const sigBlock = (partyLabel: string, partyName: string) => [
    new Paragraph({
      spacing: { before: 400, after: 100 },
      children: [new TextRun({ text: partyLabel.toUpperCase(), bold: true, size: 22, font: FONT })],
    }),
    new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: `On behalf of: ${partyName}`, size: 22, font: FONT })] }),
    new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "SIGNED: ___________________________", size: 22, font: FONT })] }),
    new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "NAME: _____________________________", size: 22, font: FONT })] }),
    new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "DESIGNATION: ______________________", size: 22, font: FONT })] }),
    new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "DATE: _____________________________", size: 22, font: FONT })] }),
    new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "STAMP: ____________________________", size: 22, font: FONT })] }),
    new Paragraph({ spacing: { after: 120 }, children: [new TextRun({ text: "SIGNED BEFORE A DULY AUTHORISED NOTARY", size: 22, font: FONT, italics: true })] }),
    divider(),
  ];

  const titlePage = (docTitle: string, date: string, party1Label: string, party1Name: string, party2Label: string, party2Name: string) => [
    ...blank(3),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 200 },
      children: [new TextRun({ text: docTitle.toUpperCase(), bold: true, size: 36, font: FONT, color: BLACK })],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 400 },
      children: [new TextRun({ text: `Dated ${date}`, size: 22, font: FONT, italics: true })],
    }),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 80 }, children: [new TextRun({ text: "between", size: 22, font: FONT })] }),
    ...blank(1),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 80 }, children: [new TextRun({ text: party1Name.toUpperCase(), bold: true, size: 24, font: FONT })] }),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 300 }, children: [new TextRun({ text: `(${party1Label})`, size: 22, font: FONT, italics: true })] }),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 300 }, children: [new TextRun({ text: "and", size: 22, font: FONT })] }),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 80 }, children: [new TextRun({ text: party2Name.toUpperCase(), bold: true, size: 24, font: FONT })] }),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 200 }, children: [new TextRun({ text: `(${party2Label})`, size: 22, font: FONT, italics: true })] }),
    divider(),
    ...blank(2),
  ];

  const builders: Record<TemplateId, () => Promise<InstanceType<typeof Document>>> = {

    "loan-agreement": async () => {
      const lender = v("lenderName");
      const borrower = v("borrowerName");
      const amount = v("loanAmount");
      const amountWords = v("loanAmountWords");
      const currency = v("currency", "RWF");
      const purpose = v("purpose");
      const interestRate = v("interestRate");
      const tenor = v("tenor");
      const gracePeriod = v("gracePeriod", "None");
      const repaymentSchedule = v("repaymentSchedule");
      const securityDesc = v("securityDescription");
      const date = v("agreementDate");
      const lenderAddress = v("lenderAddress");
      const borrowerAddress = v("borrowerAddress");
      const lenderReg = v("lenderRegNumber");
      const borrowerReg = v("borrowerRegNumber");

      return new Document({
        styles: {
          default: { document: { run: { font: FONT, size: 22 } } },
          paragraphStyles: [
            { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true, run: { size: 28, bold: true, font: FONT }, paragraph: { spacing: { before: 240, after: 160 }, outlineLevel: 0 } },
            { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true, run: { size: 24, bold: true, font: FONT }, paragraph: { spacing: { before: 180, after: 120 }, outlineLevel: 1 } },
          ],
        },
        sections: [{
          properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
          children: [
            ...titlePage("LOAN AGREEMENT", date, "AS LENDER", lender, "AS BORROWER", borrower),
            heading("PARTIES"),
            para(`This Loan Agreement (the "Agreement") is entered into as of ${date}:`),
            ...blank(1),
            para(`1. ${lender}, a company duly incorporated and registered under the laws of Rwanda, registered under number ${lenderReg}, with its registered address at ${lenderAddress} (hereinafter the "Lender");`),
            ...blank(1),
            para(`2. ${borrower}, a company duly incorporated and registered under the laws of Rwanda, registered under number ${borrowerReg}, with its registered address at ${borrowerAddress} (hereinafter the "Borrower").`),
            ...blank(1),
            para(`The Lender and the Borrower shall individually be referred to as a "Party" and collectively as the "Parties".`),
            divider(),
            heading("RECITALS"),
            para(`WHEREAS, the Borrower has applied to the Lender for a loan facility of ${currency} ${amount} (${amountWords}) for the purpose of ${purpose};`),
            para(`WHEREAS, the Lender has agreed to provide the Loan subject to the terms and conditions of this Agreement;`),
            para(`NOW, THEREFORE, the Parties agree as follows:`),
            divider(),
            heading("AGREED TERMS"),
            clauseTitle("1", "Definitions"),
            subClause("1.1", `"Loan" means ${currency} ${amount} (${amountWords}).`),
            subClause("1.2", `"Interest Rate" means ${interestRate} per annum on the outstanding principal.`),
            subClause("1.3", `"Tenor" means ${tenor} from the date of first disbursement.`),
            subClause("1.4", `"Repayment Schedule" means ${repaymentSchedule}.`),
            subClause("1.5", `"Security" means ${securityDesc}.`),
            subClause("1.6", `"Event of Default" has the meaning given in Clause 8.`),
            clauseTitle("2", "The Loan"),
            subClause("2.1", `Subject to the terms hereof, the Lender agrees to advance to the Borrower the Loan of ${currency} ${amount} (${amountWords}).`),
            subClause("2.2", `The Loan shall be used exclusively for ${purpose}. Diversion requires prior written consent of the Lender.`),
            subClause("2.3", `Disbursement is conditional on fulfilment of all conditions precedent in Clause 3.`),
            clauseTitle("3", "Conditions Precedent"),
            subClause("3.1", `The Lender's obligation to disburse is conditional upon receipt of:`),
            subClause("3.1.1", `Executed Loan Agreement and all Security documents;`),
            subClause("3.1.2", `Evidence of registration of all Security interests under applicable Rwandan law;`),
            subClause("3.1.3", `All required approvals, consents and authorisations;`),
            subClause("3.1.4", `Such other documents as the Lender may reasonably require.`),
            clauseTitle("4", "Interest"),
            subClause("4.1", `Interest accrues on the outstanding principal at ${interestRate} per annum.`),
            subClause("4.2", `Interest is calculated on actual days elapsed over a 365-day year.`),
            subClause("4.3", `Default interest accrues at 2% per annum above the Interest Rate on overdue amounts.`),
            clauseTitle("5", "Repayment"),
            subClause("5.1", `The Borrower shall repay the Loan per the Repayment Schedule: ${repaymentSchedule}.`),
            subClause("5.2", `Grace Period: ${gracePeriod}.`),
            subClause("5.3", `Prepayment is permitted on 30 days' written notice, subject to any applicable prepayment fee.`),
            subClause("5.4", `All payments shall be in ${currency} by electronic funds transfer to the Lender's designated account.`),
            clauseTitle("6", "Security"),
            subClause("6.1", `The Borrower shall provide as continuing security: ${securityDesc}.`),
            subClause("6.2", `The Borrower shall execute all documents necessary to perfect the Security under Rwandan law.`),
            clauseTitle("7", "Representations and Warranties"),
            subClause("7.1", `The Borrower represents and warrants that it is duly incorporated under Rwandan law; has full authority to enter this Agreement; this Agreement is its legal, valid and binding obligation; no Event of Default is continuing; and all information provided is true and complete.`),
            clauseTitle("8", "Events of Default"),
            subClause("8.1", `Events of Default include: failure to pay any amount due; breach of any term unremedied within 30 days of notice; any representation becoming untrue; insolvency or liquidation; and any Security becoming unenforceable.`),
            subClause("8.2", `Upon an Event of Default the Lender may declare all amounts immediately due and enforce the Security.`),
            clauseTitle("9", "Governing Law and Jurisdiction"),
            subClause("9.1", `This Agreement is governed by the laws of the Republic of Rwanda.`),
            subClause("9.2", `Disputes shall first be referred to amicable resolution for 30 days, failing which to the competent courts of Rwanda.`),
            clauseTitle("10", "General"),
            subClause("10.1", `This Agreement is the entire agreement between the Parties on its subject matter and supersedes all prior agreements.`),
            subClause("10.2", `Amendments require writing signed by both Parties.`),
            subClause("10.3", `Invalidity of any provision does not affect the remainder.`),
            divider(),
            heading("EXECUTION"),
            para("IN WITNESS WHEREOF, this Agreement has been duly executed as of the date first written above."),
            ...blank(1),
            ...sigBlock("THE LENDER", lender),
            ...sigBlock("THE BORROWER", borrower),
          ],
        }],
      });
    },

    "mortgage-agreement": async () => {
      const lender = v("lenderName");
      const borrower = v("borrowerName");
      const principal = v("principalAmount");
      const principalWords = v("principalAmountWords");
      const currency = v("currency", "RWF");
      const mortgageRate = v("mortgageRate");
      const duration = v("duration");
      const propertyDesc = v("propertyDescription");
      const propertyUPI = v("propertyUPI");
      const propertyLocation = v("propertyLocation");
      const propertyValue = v("propertyValue");
      const date = v("agreementDate");
      const lenderAddress = v("lenderAddress");
      const borrowerAddress = v("borrowerAddress");

      return new Document({
        styles: { default: { document: { run: { font: FONT, size: 22 } } } },
        sections: [{
          properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
          children: [
            ...titlePage("MORTGAGE AGREEMENT", date, "AS MORTGAGEE", lender, "AS MORTGAGOR", borrower),
            heading("PARTIES"),
            para(`This Mortgage Agreement (the "Agreement") is entered into as of ${date} between:`),
            para(`1. ${lender}, with address at ${lenderAddress} (hereinafter the "Mortgagee");`),
            para(`2. ${borrower}, with address at ${borrowerAddress} (hereinafter the "Mortgagor").`),
            divider(),
            heading("RECITALS"),
            para(`WHEREAS, the Mortgagee has agreed to provide a loan of ${currency} ${principal} (${principalWords}) to the Mortgagor;`),
            para(`WHEREAS, as a condition of the loan, the Mortgagor has agreed to grant a mortgage over the Property in favour of the Mortgagee;`),
            para(`NOW, THEREFORE, IT IS HEREBY AGREED AS FOLLOWS:`),
            divider(),
            heading("AGREED TERMS"),
            clauseTitle("1", "Definitions"),
            subClause("1.1", `"Loan" means ${currency} ${principal} (${principalWords}).`),
            subClause("1.2", `"Interest Rate" means ${mortgageRate} per annum.`),
            subClause("1.3", `"Duration" means ${duration} from the date of first disbursement.`),
            subClause("1.4", `"Property" means the immovable property described as: ${propertyDesc}, situated at ${propertyLocation}, UPI: ${propertyUPI}, assessed value: ${currency} ${propertyValue}.`),
            subClause("1.5", `"Secured Obligations" means all amounts due under the Loan Agreement including principal, interest, fees and enforcement costs.`),
            clauseTitle("2", "Covenant to Pay"),
            subClause("2.1", `The Mortgagor unconditionally covenants to pay the Loan together with all interest, fees and charges per the Loan Agreement.`),
            clauseTitle("3", "Creation of Mortgage"),
            subClause("3.1", `As continuing first-ranking security for the Secured Obligations, the Mortgagor grants to the Mortgagee a mortgage (hypothèque) over the Property.`),
            subClause("3.2", `This mortgage is created under Law No. 43/2013 of 16/06/2013 on Land in Rwanda, as amended.`),
            subClause("3.3", `The Secured Value is ${currency} ${principal} plus 30%. Interest accrues until full repayment.`),
            clauseTitle("4", "Registration"),
            subClause("4.1", `The Mortgagor irrevocably authorises the Mortgagee to register this mortgage at the National Land Authority and to take all acts necessary to perfect and maintain registration.`),
            subClause("4.2", `All registration costs shall be borne by the Mortgagor.`),
            clauseTitle("5", "Representations and Warranties"),
            subClause("5.1", `The Mortgagor warrants: it is sole legal owner of the Property with valid RLMUA title; the Property is free from encumbrances save as disclosed; no disputes are pending; and the Property complies with all planning and zoning laws.`),
            clauseTitle("6", "Undertakings"),
            subClause("6.1", `The Mortgagor shall maintain the Property in good repair; insure it against material risks with the Mortgagee noted as loss payee; not sell, transfer, lease or subdivide without prior written consent; not create further security without consent; and immediately notify the Mortgagee of any claims or orders affecting the Property.`),
            clauseTitle("7", "Enforcement"),
            subClause("7.1", `Upon an Event of Default under the Loan Agreement, the Mortgagee may take possession; sell by public auction or private treaty; appoint a receiver; or take any other action available under Rwandan law.`),
            clauseTitle("8", "Application of Proceeds"),
            subClause("8.1", `Enforcement proceeds shall be applied: first to costs of enforcement; second to all Secured Obligations; surplus to the Mortgagor.`),
            clauseTitle("9", "Release"),
            subClause("9.1", `Upon full discharge of all Secured Obligations, the Mortgagee shall execute all documents to release and de-register this mortgage at the cost of the Mortgagor.`),
            clauseTitle("10", "Governing Law"),
            subClause("10.1", `This Agreement is governed by the laws of Rwanda. Disputes are referred first to amicable resolution for 30 days, then to competent Rwandan courts.`),
            divider(),
            heading("EXECUTION"),
            para("IN WITNESS WHEREOF, this Agreement has been duly executed as of the date first written above."),
            ...blank(1),
            ...sigBlock("THE MORTGAGEE (LENDER)", lender),
            ...sigBlock("THE MORTGAGOR (BORROWER)", borrower),
          ],
        }],
      });
    },

    "security-interest-movable": async () => {
      const lender = v("lenderName");
      const pledgor = v("pledgorName");
      const loanAmount = v("loanAmount");
      const currency = v("currency", "RWF");
      const assetDescription = v("assetDescription");
      const assetValue = v("assetValue");
      const securedValue = v("securedValue");
      const loanPurpose = v("loanPurpose");
      const securityPeriod = v("securityPeriod");
      const date = v("agreementDate");

      return new Document({
        styles: { default: { document: { run: { font: FONT, size: 22 } } } },
        sections: [{
          properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
          children: [
            ...titlePage("SECURITY INTEREST IN MOVABLE PROPERTY AGREEMENT", date, "AS PLEDGOR", pledgor, "AS PLEDGEE", lender),
            heading("PARTIES"),
            para(`This Security Interest in Movable Property Agreement (the "Agreement") is made as of ${date} between:`),
            para(`1. ${pledgor} (hereinafter the "Pledgor"); and`),
            para(`2. ${lender} (hereinafter the "Pledgee").`),
            para(`Capitalised terms not defined herein have the meaning in the Loan Agreement between the Parties.`),
            divider(),
            heading("RECITALS"),
            para(`WHEREAS, pursuant to a loan agreement dated ${date}, the Pledgee agreed to advance ${currency} ${loanAmount} to finance ${loanPurpose};`),
            para(`WHEREAS, to secure repayment of all sums owed, the Parties agree as follows:`),
            divider(),
            clauseTitle("1", "Covenant to Pay"),
            subClause("1.1", `The Pledgor shall pay all Secured Liabilities when due under the Loan Agreement.`),
            clauseTitle("2", "Creation of Security"),
            subClause("2.1", `The Pledgor grants to the Pledgee a continuing first-ranking security interest over: ${assetDescription} (the "Pledged Assets"), including any replacement or substituted assets.`),
            subClause("2.2", `This pledge is created under Law No. 34/2013 of 24/05/2013 on security interests in movable property.`),
            subClause("2.3", `Assessed value of Pledged Assets: ${currency} ${assetValue}. Secured Value: ${currency} ${securedValue} (Loan plus 30%). Interest accrues until full repayment.`),
            clauseTitle("3", "Registration"),
            subClause("3.1", `The Pledgor irrevocably authorises the Pledgee to register a first-ranking security interest over the Pledged Assets for ${securityPeriod}. All registration costs are borne by the Pledgor.`),
            clauseTitle("4", "Warranties"),
            subClause("4.1", `The Pledgor warrants: this Agreement creates valid enforceable security; the Pledgor is sole owner of all Pledged Assets; the Pledged Assets are free from encumbrances; and no other security interests exist over them.`),
            clauseTitle("5", "Disposal Restrictions"),
            subClause("5.1", `Without prior written consent of the Pledgee, the Pledgor shall not create any other security interest over, or sell, transfer or dispose of, any Pledged Asset.`),
            clauseTitle("6", "Undertakings"),
            subClause("6.1", `The Pledgor shall not allow depreciation of the Pledged Assets or impairment of the security ranking; shall insure all Pledged Assets against material risks; and shall immediately notify the Pledgee of any court order or attachment affecting the Pledged Assets.`),
            clauseTitle("7", "Enforcement"),
            subClause("7.1", `Upon default, the Pledgee may take possession and sell the Pledged Assets by public auction or otherwise per the Law on Security Interests in Movable Property.`),
            clauseTitle("8", "Application of Proceeds"),
            subClause("8.1", `Proceeds applied: first to enforcement costs; second to Secured Liabilities; surplus to the Pledgor.`),
            clauseTitle("9", "Release"),
            subClause("9.1", `Upon full repayment, the Pledgee shall release the Pledged Assets from this security at the Pledgor's cost.`),
            clauseTitle("10", "Governing Law"),
            subClause("10.1", `Governed by the laws of Rwanda. Disputes to amicable resolution for 30 days, then competent Rwandan courts.`),
            divider(),
            heading("EXECUTION"),
            para("IN WITNESS WHEREOF, this Agreement has been duly executed as of the date first written above."),
            ...blank(1),
            ...sigBlock("THE PLEDGOR", pledgor),
            ...sigBlock("THE PLEDGEE (LENDER)", lender),
            divider(),
            heading("APPENDIX A — DESCRIPTION OF PLEDGED ASSETS"),
            para(assetDescription),
          ],
        }],
      });
    },

    "guarantee-agreement": async () => {
      const lender = v("lenderName");
      const guarantor = v("guarantorName");
      const borrower = v("borrowerName");
      const loanAmount = v("loanAmount");
      const loanAmountWords = v("loanAmountWords");
      const currency = v("currency", "RWF");
      const loanDate = v("loanAgreementDate");
      const date = v("agreementDate");
      const lenderAddress = v("lenderAddress");
      const guarantorAddress = v("guarantorAddress");

      return new Document({
        styles: { default: { document: { run: { font: FONT, size: 22 } } } },
        sections: [{
          properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
          children: [
            ...titlePage("GUARANTEE AGREEMENT", date, "AS LENDER", lender, "AS GUARANTOR", guarantor),
            heading("PARTIES"),
            para(`This Guarantee Agreement (the "Agreement") is made as of ${date} between:`),
            para(`1. ${lender}, with address at ${lenderAddress} (hereinafter the "Lender"); and`),
            para(`2. ${guarantor}, with address at ${guarantorAddress} (hereinafter the "Guarantor").`),
            divider(),
            heading("RECITALS"),
            para(`WHEREAS, pursuant to a Loan Agreement dated ${loanDate} between the Lender and ${borrower} (the "Borrower"), the Lender agreed to advance ${currency} ${loanAmount} (${loanAmountWords}), conditional upon this Guarantee;`),
            para(`WHEREAS, the Guarantor has agreed to guarantee full payment of the Loan, interest and all related costs;`),
            para(`NOW, THEREFORE, IT IS HEREBY AGREED AS FOLLOWS:`),
            divider(),
            clauseTitle("1", "Covenant to Pay"),
            subClause("1.1", `Upon written demand, the Guarantor unconditionally promises to pay: the Loan Amount plus all interest and moneys due from the Borrower; and all costs and legal expenses of enforcement.`),
            clauseTitle("2", "Continuing Security"),
            subClause("2.1", `This Guarantee is a continuing security unaffected by death, liquidation, insolvency, restructuring or change in ownership of the Borrower or any co-guarantor.`),
            subClause("2.2", `This Guarantee is not discharged by partial repayment.`),
            clauseTitle("3", "No Prior Demand"),
            subClause("3.1", `The Lender has no obligation to first demand payment from the Borrower before enforcing this Guarantee.`),
            clauseTitle("4", "Effect of Other Securities"),
            subClause("4.1", `This Guarantee is additional to and not affected by any other guarantee or security held by the Lender.`),
            clauseTitle("5", "Set-Off"),
            subClause("5.1", `The Lender may at any time set off any sum held in the Guarantor's accounts towards satisfaction of the Borrower's indebtedness.`),
            clauseTitle("6", "Joint and Several Liability"),
            subClause("6.1", `Where executed by more than one Guarantor, liability is joint and several. The Lender may demand from any one or all Guarantors without releasing any other.`),
            clauseTitle("7", "Payments"),
            subClause("7.1", `All payments shall be made free and clear of any deduction or withholding in the currency of the Loan.`),
            clauseTitle("8", "Governing Law"),
            subClause("8.1", `Governed by the laws of Rwanda. Disputes to amicable resolution for 30 days, then competent Rwandan courts.`),
            clauseTitle("9", "Commencement"),
            subClause("9.1", `This Guarantee commences from the date on the first page hereof.`),
            divider(),
            heading("EXECUTION"),
            para("IN WITNESS WHEREOF, this Agreement has been duly executed as of the date first written above."),
            ...blank(1),
            ...sigBlock("THE LENDER", lender),
            ...sigBlock("THE GUARANTOR", guarantor),
          ],
        }],
      });
    },

    "assignment-receivables": async () => {
      const lender = v("lenderName");
      const client = v("clientName");
      const loanAmount = v("loanAmount");
      const currency = v("currency", "RWF");
      const loanDate = v("loanAgreementDate");
      const collectionAccount = v("collectionAccountNumber");
      const securityRank = v("securityRank", "first");
      const securityPeriod = v("securityPeriod");
      const date = v("agreementDate");

      return new Document({
        styles: { default: { document: { run: { font: FONT, size: 22 } } } },
        sections: [{
          properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
          children: [
            ...titlePage("ASSIGNMENT OF RECEIVABLES AND ACCOUNT CHARGE AGREEMENT", date, "AS LENDER", lender, "AS CLIENT", client),
            heading("PARTIES"),
            para(`This Assignment of Receivables and Account Charge Agreement (the "Agreement") is made as of ${date} between:`),
            para(`1. ${lender} (hereinafter the "Lender"); and`),
            para(`2. ${client} (hereinafter the "Client").`),
            divider(),
            heading("RECITALS"),
            para(`WHEREAS, under a Loan Agreement dated ${loanDate}, the Lender agreed to extend ${currency} ${loanAmount} to the Client;`),
            para(`WHEREAS, as security for the Secured Obligations, the Client assigns to the Lender the Assigned Rights;`),
            para(`NOW, THEREFORE, IT IS HEREBY AGREED AS FOLLOWS:`),
            divider(),
            clauseTitle("1", "Definitions"),
            subClause("1.1", `"Assigned Rights" means all present and future rights and interests of the Client in the Receivables, including all rights to receive payment.`),
            subClause("1.2", `"Collection Account" means account number ${collectionAccount} held by the Client with the Lender, into which all Receivables shall be paid.`),
            subClause("1.3", `"Receivables" means all amounts owed to the Client, present and future, by its customers and debtors.`),
            subClause("1.4", `"Secured Obligations" means all obligations of the Client under the Loan Agreement.`),
            clauseTitle("2", "Assignment and Covenant to Pay"),
            subClause("2.1", `The Client covenants to pay the Loan and perform all Secured Obligations per the Loan Agreement.`),
            subClause("2.2", `As continuing security, the Client assigns to the Lender by way of ${securityRank}-ranking security all present and future rights in the Assigned Rights for ${securityPeriod}.`),
            clauseTitle("3", "Collection Account"),
            subClause("3.1", `The Client irrevocably instructs its customers to pay all Receivables into the Collection Account.`),
            subClause("3.2", `The Client shall not change the Collection Account without prior written consent of the Lender.`),
            subClause("3.3", `The Client charges deposits to the Collection Account by way of first fixed charge in favour of the Lender.`),
            subClause("3.4", `The Lender may without notice set off deposits in the Collection Account towards the Secured Obligations.`),
            subClause("3.5", `The Client shall not withdraw from the Collection Account unless the balance equals at least the next scheduled repayment.`),
            clauseTitle("4", "No Further Securities"),
            subClause("4.1", `The Client shall not create any other security over the Receivables without prior written consent of the Lender.`),
            clauseTitle("5", "Registration"),
            subClause("5.1", `The Client irrevocably authorises the Lender to register this Agreement under Law No. 34/2013 of 24/05/2013 on security interests in movable property. All registration costs are borne by the Client.`),
            clauseTitle("6", "Termination"),
            subClause("6.1", `This Agreement terminates automatically upon full performance of all Secured Obligations. The Client shall procure de-registration of the security.`),
            clauseTitle("7", "Governing Law"),
            subClause("7.1", `Governed by the laws of Rwanda. Disputes to amicable resolution for 30 days, then competent Rwandan courts.`),
            divider(),
            heading("EXECUTION"),
            para("IN WITNESS WHEREOF, this Agreement has been duly executed as of the date first written above."),
            ...blank(1),
            ...sigBlock("THE LENDER", lender),
            ...sigBlock("THE CLIENT", client),
          ],
        }],
      });
    },

    "loan-notification-letter": async () => {
      const lenderName = v("lenderName");
      const lenderAddress = v("lenderAddress");
      const refNumber = v("referenceNumber");
      const borrowerName = v("borrowerName");
      const borrowerAddress = v("borrowerAddress");
      const applicationDate = v("applicationDate");
      const approvedAmount = v("approvedAmount");
      const currency = v("currency", "RWF");
      const loanPurpose = v("loanPurpose");
      const tenor = v("tenor");
      const gracePeriod = v("gracePeriod");
      const interestRate = v("interestRate");
      const serviceCommission = v("serviceCommission", "As per schedule");
      const managementFee = v("managementFee", "As per schedule");
      const securityList = v("securityList");
      const cpSigning = v("conditionsPrecedentSigning");
      const cpDisbursement = v("conditionsPrecedentDisbursement");
      const letterDate = v("letterDate");
      const coolingOffPeriod = v("coolingOffPeriod", "30");
      const offerValidityPeriod = v("offerValidityPeriod", "60");

      const tableRow = (label: string, value: string) =>
        new TableRow({
          children: [
            new TableCell({
              borders: allBorders,
              width: { size: 4500, type: WidthType.DXA },
              margins: { top: 80, bottom: 80, left: 120, right: 120 },
              shading: { fill: LIGHT_GREY, type: ShadingType.CLEAR },
              children: [new Paragraph({ children: [new TextRun({ text: label, bold: true, font: FONT, size: 22 })] })],
            }),
            new TableCell({
              borders: allBorders,
              width: { size: 4500, type: WidthType.DXA },
              margins: { top: 80, bottom: 80, left: 120, right: 120 },
              children: [new Paragraph({ children: [new TextRun({ text: value, font: FONT, size: 22 })] })],
            }),
          ],
        });

      return new Document({
        styles: { default: { document: { run: { font: FONT, size: 22 } } } },
        sections: [{
          properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
          children: [
            para(lenderName, { bold: true }),
            para(lenderAddress),
            ...blank(1),
            para(letterDate),
            para(refNumber),
            ...blank(1),
            para(borrowerName, { bold: true }),
            para(borrowerAddress),
            ...blank(1),
            para("Dear Sir/Madam,", { bold: true }),
            ...blank(1),
            new Paragraph({
              spacing: { after: 160 },
              children: [new TextRun({ text: "RE: NOTIFICATION OF APPROVAL OF LOAN FACILITY", bold: true, underline: { type: UnderlineType.SINGLE }, font: FONT, size: 22 })],
            }),
            ...blank(1),
            para(`Reference is made to your Loan Application Letter dated ${applicationDate}, requesting a credit facility of ${currency} ${approvedAmount} from ${lenderName} in favour of ${borrowerName}.`),
            para(`We are pleased to inform you that the Lender has approved a Term Loan Facility of ${currency} ${approvedAmount} for the purpose of ${loanPurpose}.`),
            para("The Loan Facility shall be provided on the following conditions:"),
            ...blank(1),
            heading("1. DURATION AND REPAYMENT"),
            para(`The Loan shall be repaid within ${tenor}, including a Grace Period of ${gracePeriod} on both principal and interest.`),
            ...blank(1),
            heading("2. FINANCIAL TERMS"),
            new Table({
              width: { size: 9000, type: WidthType.DXA },
              columnWidths: [4500, 4500],
              rows: [
                tableRow("Interest Rate", interestRate),
                tableRow("Service Commission", serviceCommission),
                tableRow("Management Fee", managementFee),
                tableRow("Penalty Charges", "2% per annum above interest rate on overdue amounts"),
              ],
            }),
            ...blank(1),
            heading("3. SECURITY AND GUARANTEES"),
            para(securityList),
            ...blank(1),
            heading("4. CONDITIONS PRECEDENT TO SIGNING"),
            para(cpSigning),
            ...blank(1),
            heading("5. CONDITIONS PRECEDENT TO DISBURSEMENT"),
            para(cpDisbursement),
            ...blank(1),
            heading("6. COOLING-OFF PERIOD"),
            para(`You are entitled to a ${coolingOffPeriod}-day period from signature of the Loan Agreement to request changes or cancellation. This right lapses upon disbursement.`),
            ...blank(1),
            heading("7. OFFER VALIDITY"),
            para(`This offer is valid for ${offerValidityPeriod} days from the date of this letter. The Lender reserves the right to withdraw this offer at any time.`),
            ...blank(2),
            para("Yours Sincerely,"),
            ...blank(2),
            para("_______________________________          _______________________________"),
            para("Authorised Signatory                              Authorised Signatory"),
            para(lenderName),
            divider(),
            ...blank(1),
            new Paragraph({
              spacing: { after: 160 },
              children: [new TextRun({ text: "BORROWER ACKNOWLEDGEMENT", bold: true, underline: { type: UnderlineType.SINGLE }, font: FONT, size: 22 })],
            }),
            para(`I/We hereby consent to the terms of this offer on behalf of ${borrowerName}:`),
            ...blank(1),
            para("SIGNED: ___________________________"),
            para("NAME: _____________________________"),
            para("TITLE: _____________________________"),
            para("DATE: _____________________________"),
            para("STAMP: ____________________________"),
          ],
        }],
      });
    },
  };

  return builders[templateId]();
}

// ─── Route handler ────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const body: GenerateRequest = await req.json();
    const { templateId, variables } = body;

    if (!templateId || !variables) {
      return NextResponse.json({ error: "templateId and variables are required" }, { status: 400 });
    }

    const validTemplates: TemplateId[] = [
      "loan-agreement", "mortgage-agreement", "security-interest-movable",
      "guarantee-agreement", "assignment-receivables", "loan-notification-letter",
    ];

    if (!validTemplates.includes(templateId)) {
      return NextResponse.json({ error: "Invalid templateId" }, { status: 400 });
    }

    const { Packer } = await import("docx");
    const doc = await buildDocument(templateId, variables);
    const buffer = await Packer.toBuffer(doc);

    const templateNames: Record<TemplateId, string> = {
      "loan-agreement": "Loan_Agreement",
      "mortgage-agreement": "Mortgage_Agreement",
      "security-interest-movable": "Security_Interest_Movable_Property",
      "guarantee-agreement": "Guarantee_Agreement",
      "assignment-receivables": "Assignment_of_Receivables",
      "loan-notification-letter": "Loan_Notification_Letter",
    };

    const filename = `${templateNames[templateId]}_${new Date().toISOString().split("T")[0]}.docx`;

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Content-Length": buffer.length.toString(),
      },
    });
  } catch (error) {
    console.error("Document generation error:", error);
    return NextResponse.json({ error: "Document generation failed" }, { status: 500 });
  }
}
