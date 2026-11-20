// Case studies. Facts come from the master resume; narrative is the owner's voice.

export type Metric = { value: number; prefix?: string; suffix?: string; decimals?: number; label: string };

export type CaseStudy = {
  slug: string;
  title: string;
  company: string;
  period: string;
  role: string;
  headline: Metric;
  summary: string;
  flow: string[];
  problem: string;
  noticed: string;
  bet: string;
  shipped: string[];
  outcomes: Metric[];
  lesson: string;
};

export const work: CaseStudy[] = [
  {
    slug: "orbit-ai",
    title: "From another investing app to a portfolio doctor",
    company: "NiveshPe",
    period: "2025 – Present",
    role: "Co-Founder & CPO",
    headline: { value: 150, prefix: "₹", suffix: " Cr+", label: "in synced portfolios under advisory" },
    summary:
      "Building ORBIT AI and the advisory engine behind it: sync a portfolio from anywhere, diagnose it, and get a tax-aware plan to fix it.",
    flow: ["Sync", "Diagnose", "Restructure", "Monitor"],
    problem:
      "Indian investors don't lack options. Most hold too many overlapping funds spread across several apps, and fixing that without paying exit loads and unnecessary tax is hard. Advice good enough to untangle it was mostly reserved for wealthy clients.",
    noticed:
      "Users didn't want another place to buy. They wanted to know whether everything they already owned worked together. Discovery was solved; the hard, valuable part was subtraction.",
    bet:
      "Be platform-agnostic. Sync the portfolio wherever it lives, diagnose it, and hand back a stepped, tax-aware plan, with a registered advisor in the loop for judgement calls.",
    shipped: [
      "A 7-dimension risk score and a 15-step portfolio construction pipeline across ~1,700 schemes",
      "A capital-gains tax engine, the Financial Health Report, and drift and rebalancing alerts",
      "ORBIT AI: an English/Hinglish assistant with fund lookup and advisor booking",
      "An LLM pipeline that scores market news into 21 asset × horizon signals, with human override and an audit trail",
      "15+ regulated integrations, from portfolio sync and KYC to eSign and UPI AutoPay",
    ],
    outcomes: [
      { value: 150, prefix: "₹", suffix: " Cr+", label: "in synced portfolios under advisory" },
      { value: 2300, suffix: "+", label: "monthly active users" },
      { value: 3500, suffix: "+", label: "successful orders across 13 AMCs" },
      { value: 10, prefix: "~", suffix: " wks", label: "incorporation to regulated live app" },
    ],
    lesson:
      "In wealth, features are easy to copy and quickly commoditised. Outcomes the user can see are what earn trust and retention.",
  },
  {
    slug: "apac-gtm",
    title: "Making new-market launches repeatable",
    company: "PayMate",
    period: "2019 – 2025",
    role: "Lead Product Manager (AVP)",
    headline: { value: 67, suffix: "%", label: "faster go-to-market, 90 → 30 days" },
    summary:
      "Turning each B2B payments launch from a fresh 90-day project into a 30-day playbook across APAC markets.",
    flow: ["Market research", "Compliance & KYC", "Rails & ERP", "Launch"],
    problem:
      "Every new market meant different payment rails, regulators, KYC norms and buyer habits. Each launch took about 90 days and much of it was rediscovering the same questions.",
    noticed:
      "The slow parts were predictable: regulatory approval, localised KYC and how enterprises actually pay. They could be worked out up front instead of during the build.",
    bet:
      "Treat localisation as a product: a repeatable playbook for compliance, KYC research, rails and GTM, and plug into the ERPs enterprises already use instead of asking them to change.",
    shipped: [
      "B2B payments launches across 4 APAC markets, after earlier UAE, Singapore and Australia rollouts",
      "Cross-border payments, rent collections and payments, tax modules and auto-debit across regions",
      "ERP integrations with SAP Taulia and Oracle, unlocking enterprise accounts",
      "The BharatConnect (NPCI) integration as a BBPOU",
      "Delivery across 7+ cross-functional teams and 5+ regional web and mobile platforms",
    ],
    outcomes: [
      { value: 67, suffix: "%", label: "faster go-to-market (90 → 30 days)" },
      { value: 4, label: "APAC markets launched" },
      { value: 300, suffix: "K+", label: "SME registrations in the India/UAE MVP's first year" },
      { value: 60, suffix: "%", label: "fewer OTP and bank-verification failures" },
    ],
    lesson:
      "Speed in a regulated market comes from respecting local differences early, not from cutting corners late.",
  },
  {
    slug: "z2p-underwriting",
    title: "Lending to people credit scores couldn't see",
    company: "Z2P",
    period: "2016 – 2019",
    role: "Co-Founder",
    headline: { value: 1, prefix: "<", suffix: "%", label: "NPA, underwriting on cash flow" },
    summary:
      "Co-founding one of India's first P2P lending platforms and underwriting on cash flow instead of bureau scores. Acquired by PayMate.",
    flow: ["Borrower", "Cash-flow model", "Lender match", "Recovery"],
    problem:
      "Many creditworthy borrowers had thin or no credit-bureau history, so traditional lenders either declined them or priced them badly.",
    noticed:
      "A borrower's cash flow said more about their ability to repay than a bureau score did, and community ties could make repayment more reliable.",
    bet:
      "Underwrite on cash-flow modelling, match borrowers with HNI lenders on a transparent platform, and build social recovery practices into the product.",
    shipped: [
      "The MVP, roadmap, lender portal, KYC workflows and growth channels",
      "Investment strategy and portfolio systems for 100+ HNI lenders",
      "NBFC partnerships and RBI-aligned compliance",
      "A 30+ person team across product, tech and operations",
    ],
    outcomes: [
      { value: 1, suffix: "M+", label: "downloads" },
      { value: 60, suffix: "K+", label: "loans processed" },
      { value: 100, prefix: "₹", suffix: " Cr", label: "loan book" },
      { value: 1, prefix: "<", suffix: "%", label: "NPA" },
    ],
    lesson:
      "The best risk model starts by asking what actually predicts the outcome, not what's conventionally measured.",
  },
  {
    slug: "lifecycle-engine",
    title: "A lifecycle engine for every step of the funnel",
    company: "NiveshPe",
    period: "2025 – Present",
    role: "Co-Founder & CPO",
    headline: { value: 850, prefix: "~", suffix: "K", label: "messages in 90 days" },
    summary:
      "Behaviour-triggered journeys across five channels, from sign-up to first investment to Pro subscription.",
    flow: ["Sign-up", "KYC", "Portfolio sync", "First investment", "Pro"],
    problem:
      "Investing apps lose most users between sign-up and first investment. KYC, portfolio sync, a plan and a first order are each a place to drop off.",
    noticed:
      "Each stage stalls for a different reason, so a single nudge sequence can't work. What brings back someone stuck at KYC is not what converts a synced user to Pro.",
    bet:
      "Design a journey per funnel stage, triggered by behaviour, with send windows and cadences, that exits the moment the user converts.",
    shipped: [
      "45+ live workflows and 70 templates across email, WhatsApp, push, SMS and RCS",
      "D0–D90 cadences for each funnel stage, with auto-exit on conversion",
      "A 28-message Pro upsell programme split by synced and unsynced users",
      "Transactional alerts, a daily market pulse, dip alerts and SIP nudges",
    ],
    outcomes: [
      { value: 24, suffix: "K+", label: "installs in the first 7 months" },
      { value: 8.7, suffix: "K+", decimals: 1, label: "registered users" },
      { value: 1200, suffix: "+", label: "SIP registrations" },
      { value: 80, prefix: "₹", suffix: "L+", label: "gross investments" },
    ],
    lesson:
      "Retention is designed stage by stage. The message that works depends on where the user is stuck.",
  },
];

export const getCaseStudy = (slug: string) => work.find((w) => w.slug === slug);
