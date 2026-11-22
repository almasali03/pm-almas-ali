// Every claim on the site must exist in the master resume.

export const profile = {
  name: "Almas Ali",
  role: "Product leader · AI & forward-deployed product",
  location: "Bhopal, India · working remotely since 2019",
  email: "almasali03@gmail.com",
  linkedin: "https://www.linkedin.com/in/alialmas",
  // Set to "/resume.pdf" once the updated resume is in /public.
  resumeUrl: null as string | null,
  siteUrl: "https://almasali.vercel.app",
};

export const hero = {
  headline: "I start with the problem, not the feature.",
  intro:
    "Product leader and two-time fintech co-founder. I build AI products and work alongside customers to take them from first conversation to live, across India, APAC and the Middle East.",
  stats: [
    { value: 10, suffix: "+", label: "years building products" },
    { value: 2, suffix: "", label: "fintechs co-founded" },
    { value: 4, suffix: "", label: "APAC markets launched" },
  ],
};

export const principles = [
  {
    title: "Find the real constraint first.",
    body: "Most product problems are a constraint in disguise. Name it precisely and the solution space shrinks to something you can actually ship.",
    proof: "At Z2P, lending on cash flow instead of credit scores held NPA under 1%.",
  },
  {
    title: "Get close to the customer before writing the spec.",
    body: "Payment rails, regulators and habits differ by market. The fastest launch is the one that respects those differences up front.",
    proof: "Localising for each market cut PayMate's go-to-market from 90 to 30 days.",
  },
  {
    title: "Make it real, then hand it over well.",
    body: "A working prototype settles debates a document can't. Then the job is a clean hand-off: specs, edge cases and success metrics engineering can trust.",
    proof: "NiveshPe went from incorporation to a regulated live app in about 10 weeks.",
  },
];

export const builds = [
  {
    title: "Accounts autopilot for restaurants",
    status: "Live",
    problem: "Small restaurants run on daily WhatsApp messages, not accounting software.",
    what: "A WhatsApp AI agent that turns staff's daily Hinglish messages into a ledger, with cash checks, supplier dues, payroll, P&L, bank matching and reminders, and answers the owner's questions.",
  },
  {
    title: "Embedded investing for B2B partners",
    status: "In sales pitches",
    problem: "Partners couldn't picture investing inside their own product.",
    what: "Clickable white-label flows (portfolio sync, SIPs, baskets, bonds, pre-IPO, KYC at checkout) plus a partner MIS dashboard, reskinned per partner.",
  },
  {
    title: "Search & answer-engine site for a freight forwarder",
    status: "Launching",
    problem: "Needed to be found in both search and AI answer engines.",
    what: "A site built from teardowns of 18 competitor sites, with content structured for both search and AI answer engines.",
  },
];

export type Role = {
  company: string;
  title: string;
  period: string;
  summary: string;
};

export const experience: Role[] = [
  {
    company: "NiveshPe",
    title: "Co-Founder & Chief Product Officer",
    period: "Aug 2025 – Present",
    summary:
      "AMFI-registered, AI-assisted wealth platform. Own product vision through go-live: advisory engine, ORBIT AI, 15+ regulated integrations and the full lifecycle stack.",
  },
  {
    company: "PayMate",
    title: "Lead Product Manager (AVP)",
    period: "Apr 2024 – Jul 2025",
    summary:
      "B2B payments launches across 4 APAC markets, GTM cut by 67%. ERP integrations (SAP Taulia, Oracle) and the BharatConnect (NPCI) integration; 7+ cross-functional teams.",
  },
  {
    company: "PayMate",
    title: "Senior Manager, Product Delivery",
    period: "Jun 2022 – Mar 2024",
    summary:
      "Cut OTP and bank-verification failures by 60%; lifted KYC conversion by 20%; led UAE, Singapore and Australia rollouts.",
  },
  {
    company: "PayMate",
    title: "Senior Manager, Product & Operations",
    period: "Nov 2019 – May 2022",
    summary:
      "MVP for India and UAE with 300K+ SME registrations in year one; an industry-first in-app GST challan flow; co-created the “Sherlock” fraud engine.",
  },
  {
    company: "Z2P (acquired by PayMate)",
    title: "Co-Founder & Chief Lending and Investment Officer",
    period: "Aug 2016 – Oct 2019",
    summary:
      "Built one of India's top P2P lending platforms: 1M+ downloads, 60K+ loans, a ₹100 Cr loan book, 100+ HNI lenders and a 30+ person team.",
  },
];

export const credentials = [
  {
    title: "AI Product Strategy & Build Lab",
    by: "Curious PM · 2025",
    href: "https://almas.curious.pm/certificate/ai-product-strategy-build-lab",
  },
  { title: "NISM Series V-A & V-D", by: "Mutual fund distribution · 2026" },
  { title: "Global Shaper", by: "World Economic Forum · 2017–2024" },
  { title: "Product demos", by: "SIDEC Malaysia & Global Fintech Fest · 2024" },
  { title: "Best Fintech in Madhya Pradesh", by: "Chief Minister's Award · 2017" },
  { title: "B.Tech", by: "VIT University, Vellore · 2016" },
];

// Logos: `icon` is a simple-icons export in brand colour; `img` is a file in /public/logos.
// `imgDark` swaps the file in dark mode; `invertDark` inverts a black mark in dark mode.
// `use` is where/how the tool was used (from the master resume), or its purpose if the resume only lists it.
export type Tool = { name: string; use: string; icon?: string; img?: string; imgDark?: string; invertDark?: boolean };

export const toolkit: { label: string; purpose: string; tools: Tool[] }[] = [
  {
    label: "AI models & agents",
    purpose: "The models and building blocks behind AI features.",
    tools: [
      { name: "Claude", icon: "siClaude", use: "AI agents & assistants, incl. restaurant accounts agent" },
      { name: "OpenAI API", img: "/logos/openai.svg", invertDark: true, use: "Chatbot and job-search agent builds" },
      { name: "MCP", icon: "siModelcontextprotocol", use: "Agent connecting Jira, Slack and Notion" },
      { name: "ElevenLabs", icon: "siElevenlabs", use: "Voice assistants with memory" },
    ],
  },
  {
    label: "Prototyping & design",
    purpose: "Working versions engineers can build from.",
    tools: [
      { name: "Figma", icon: "siFigma", use: "Flows, wireframes and UI specs" },
      { name: "React Native", icon: "siReact", use: "Clickable app prototypes used as build specs" },
      { name: "Expo", icon: "siExpo", use: "Shipping those prototypes to real phones" },
    ],
  },
  {
    label: "Workflow automation",
    purpose: "Connecting tools so ops run without manual work.",
    tools: [
      { name: "n8n", icon: "siN8n", use: "Multi-step automations and AI workflows" },
      { name: "Zapier", icon: "siZapier", use: "No-code app-to-app automations" },
      { name: "Make", icon: "siMake", use: "Visual automation scenarios" },
    ],
  },
  {
    label: "APIs & cloud",
    purpose: "Integrating partners and running what I build.",
    tools: [
      { name: "Postman", icon: "siPostman", use: "Documented & tested 15+ regulated APIs at NiveshPe" },
      { name: "WhatsApp Business API", icon: "siWhatsapp", use: "Restaurant accounts agent and NiveshPe user journeys" },
      { name: "AWS", img: "/logos/aws.svg", imgDark: "/logos/aws-dark.svg", use: "Hosting the restaurant accounts agent" },
      { name: "DigitalOcean", icon: "siDigitalocean", use: "Cloud servers for hosting apps and agents" },
      { name: "Vercel", icon: "siVercel", use: "Deploying this site, with a preview link per change" },
    ],
  },
  {
    label: "Product analytics",
    purpose: "What users actually do inside the product.",
    tools: [
      { name: "Amplitude", img: "/logos/amplitude.png", use: "Set up product analytics at NiveshPe" },
      { name: "Google Analytics 4", icon: "siGoogleanalytics", use: "Web & app analytics stack at PayMate" },
      { name: "Firebase", icon: "siFirebase", use: "App analytics stack at PayMate" },
      { name: "Mixpanel", icon: "siMixpanel", use: "Event-based funnel and retention analysis" },
    ],
  },
  {
    label: "Attribution & deep linking",
    purpose: "Which ad or link brought each user in.",
    tools: [
      { name: "Branch", img: "/logos/branch.png", invertDark: true, use: "Attribution & deep links at PayMate and NiveshPe" },
      { name: "Linkrunner", img: "/logos/linkrunner.png", use: "Install attribution for NiveshPe's paid campaigns" },
    ],
  },
  {
    label: "Lifecycle & engagement",
    purpose: "Messages that move users to the next step.",
    tools: [
      { name: "SuprSend", img: "/logos/suprsend.png", use: "45+ workflows across 5 channels at NiveshPe" },
      { name: "CleverTap", img: "/logos/clevertap.png", use: "Segmentation & targeted campaigns at PayMate" },
    ],
  },
  {
    label: "Paid acquisition",
    purpose: "Buying installs at a cost the business can afford.",
    tools: [
      { name: "Meta Ads", icon: "siMeta", use: "NiveshPe campaigns under ₹80 per install" },
      { name: "Google Ads", icon: "siGoogleads", use: "NiveshPe app-install campaigns" },
    ],
  },
  {
    label: "Reporting, support & CRM",
    purpose: "Business reporting and the customer back office.",
    tools: [
      { name: "Power BI", img: "/logos/powerbi.png", use: "MIS dashboards and business reporting" },
      { name: "Zoho", icon: "siZoho", use: "CRM and sales pipeline" },
      { name: "Freshworks", img: "/logos/freshworks.png", use: "Customer support ticketing" },
    ],
  },
  {
    label: "Delivery & docs",
    purpose: "Planning sprints and keeping teams aligned.",
    tools: [
      { name: "Jira", icon: "siJira", use: "Sprints & backlogs as Product Owner at PayMate" },
      { name: "Confluence", icon: "siConfluence", use: "PRDs, specs and team documentation" },
      { name: "Linear", icon: "siLinear", use: "Issue tracking and product roadmaps" },
    ],
  },
];

export const skills: { label: string; items: string[] }[] = [
  {
    label: "Product",
    items: [
      "0→1 product strategy",
      "Prototyping",
      "PRDs & roadmapping",
      "GTM & pricing",
      "Funnel & activation",
      "Product analytics",
      "Experimentation",
      "Regulated launches",
    ],
  },
  {
    label: "AI products",
    items: [
      "LLM pipelines",
      "Prompt design",
      "AI assistants with tool use",
      "RAG & voice AI",
      "Human-in-the-loop review",
      "Prototype → engineering hand-off",
    ],
  },
  {
    label: "Fintech domain",
    items: [
      "Mutual fund distribution",
      "KYC / KRA / CKYC / eSign",
      "UPI AutoPay & eNACH",
      "B2B & cross-border payments",
      "P2P lending",
      "Fraud & risk",
      "SEBI / AMFI / RBI compliance",
    ],
  },
  {
    label: "Product marketing",
    items: [
      "Lifecycle & CRM",
      "Subscription conversion",
      "Omnichannel journeys",
      "Paid acquisition",
      "ASO & SEO",
      "Referral & field GTM",
    ],
  },
];
