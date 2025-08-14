import ProjectCard from "./ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProjectsSection = () => {
  const aiProjects = [
    {
      title: "Gmail → ChatGPT → Draft Reply Assistant",
      category: "AI Automation",
      description: "Speed up first‑response drafting while keeping tone and structure consistent for common inquiries.",
      outcomes: [
        "40–60% faster first-draft replies",
        "Consistent tone across all communications",
        "Eliminated copy‑paste formatting issues"
      ],
      technologies: ["Make.com", "Gmail API", "OpenAI", "JSON mode"],
      deliverables: [
        "Scenario build in Make.com",
        "Prompt design for structured output",
        "Error handling and logging",
        "Loom walkthrough for team adoption"
      ],
      gradient: "from-blue-50 to-purple-50"
    },
    {
      title: "Social Content Engine",
      category: "AI Automation",
      description: "Turn approved content ideas into platform‑specific posts (text + image) and publish reliably across social media channels.",
      outcomes: [
        "Consistently produces 3–5 posts/week",
        "Saves 8–12 hours/week in manual content creation",
        "Transparent status tracking in Google Sheets"
      ],
      technologies: ["Google Sheets", "Make.com", "OpenAI", "DALL·E", "Social APIs"],
      deliverables: [
        "Branching logic for platform-specific content",
        "Robust file handling automation",
        "Automated status updates",
        "Standard Operating Procedure (SOP)"
      ],
      gradient: "from-green-50 to-blue-50"
    }
  ];

  const productProjects = [
    {
      title: "Z2P Lending Platform (0 → 1)",
      category: "Product Leadership",
      description: "Co-founder & Chief of Product for a B2C P2P lending platform in India.",
      outcomes: [
        "Scaled from idea to 500K+ downloads",
        "60K+ loan disbursals completed",
        "Became India's 3rd largest P2P platform"
      ],
      technologies: ["Mobile App", "Credit Models", "Alternative Data", "Compliance Systems"],
      deliverables: [
        "End-to-end product development strategy",
        "Data-backed underwriting for thin-file users",
        "Comprehensive lender dashboards",
        "Regulatory compliance framework"
      ],
      gradient: "from-purple-50 to-pink-50"
    },
    {
      title: "GST Challan-to-Payment Flow",
      category: "Product Management",
      description: "Seamless GST challan generation and payment experience for PayMate enterprise clients.",
      outcomes: [
        "~USD 20M payment volume in first quarter",
        "Secured 3 new banking partnerships",
        "Streamlined enterprise payment workflow"
      ],
      technologies: ["Web Scraping", "Government APIs", "Banking Integration", "Browser Automation"],
      deliverables: [
        "In-app browser experience design",
        "Automatic challan data sync",
        "One-click payment orchestration",
        "Status capture for reconciliation"
      ],
      gradient: "from-orange-50 to-red-50"
    },
    {
      title: "KYC Onboarding Optimization",
      category: "Product Management",
      description: "Identified and solved ~60% drop-off in KYC funnel for SMEs at PayMate.",
      outcomes: [
        "Improved KYC completion by 20%",
        "Reduced manual rejections significantly",
        "Enhanced user experience through guided steps"
      ],
      technologies: ["GA4", "CleverTap", "OCR APIs", "3rd-party Identity APIs"],
      deliverables: [
        "Granular funnel analysis with data insights",
        "Guided KYC step breakdown",
        "3rd-party API integrations",
        "Tutorial and expectation-setting UI"
      ],
      gradient: "from-teal-50 to-green-50"
    },
    {
      title: "Multi-Region APAC Expansion",
      category: "Product Strategy",
      description: "Driving global expansion and enterprise revenue across 4 APAC markets.",
      outcomes: [
        "Cut APAC GTM time by 67%",
        "Successful launches in UAE, Singapore, Australia, NZ",
        "Boosted enterprise revenue and retention"
      ],
      technologies: ["Cross-border Payments", "ERP Integration", "Oracle", "SAP Taulia"],
      deliverables: [
        "Multi-region product strategy",
        "Internal routing and fallback systems",
        "Market-specific KYC/AML flows",
        "Enterprise deployment frameworks"
      ],
      gradient: "from-indigo-50 to-purple-50"
    }
  ];

  return (
    <section className="py-20 bg-background section-padding" id="projects">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="mb-4">Projects & Case Studies</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore my work in AI automation and product management, with measurable outcomes and detailed implementation insights.
          </p>
        </div>

        <Tabs defaultValue="ai" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="ai" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              AI & Automation
            </TabsTrigger>
            <TabsTrigger value="product" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              Product Management
            </TabsTrigger>
          </TabsList>

          <TabsContent value="ai" className="mt-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {aiProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="product" className="mt-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {productProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsSection;