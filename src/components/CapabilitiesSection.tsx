import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Lightbulb, 
  BarChart3, 
  Zap, 
  Brain, 
  Settings, 
  MessageCircle 
} from "lucide-react";

const CapabilitiesSection = () => {
  const capabilities = [
    {
      icon: Lightbulb,
      title: "Product",
      description: "End-to-end product development and strategy",
      skills: [
        "Discovery & Research",
        "PRDs & Documentation", 
        "User Journey Mapping",
        "Prioritization Frameworks",
        "A/B Experiments"
      ],
      gradient: "from-blue-500/10 to-purple-500/10"
    },
    {
      icon: BarChart3,
      title: "Analytics",
      description: "Data-driven decision making and optimization",
      skills: [
        "GA4 & Firebase",
        "Mixpanel & CleverTap",
        "Conversion Funnel Analysis",
        "Cohort Analysis",
        "KPI Dashboard Design"
      ],
      gradient: "from-green-500/10 to-blue-500/10"
    },
    {
      icon: Brain,
      title: "AI & Automation",
      description: "Practical AI implementation and workflow automation",
      skills: [
        "Custom GPT Development",
        "Prompt Engineering",
        "OpenAI API Integration",
        "Approval Workflows",
        "AI Content Generation"
      ],
      gradient: "from-purple-500/10 to-pink-500/10"
    },
    {
      icon: Zap,
      title: "Automation Tools",
      description: "Building efficient automated workflows",
      skills: [
        "Make.com & Zapier",
        "HTTP/Webhooks",
        "Google Workspace APIs",
        "Slack/Email Integration",
        "Error Handling & Logging"
      ],
      gradient: "from-orange-500/10 to-red-500/10"
    },
    {
      icon: Settings,
      title: "Delivery",
      description: "Process documentation and project execution",
      skills: [
        "SOP Documentation",
        "Process Automation",
        "Quality Assurance",
        "Team Training",
        "Early-stage Delivery"
      ],
      gradient: "from-teal-500/10 to-green-500/10"
    },
    {
      icon: MessageCircle,
      title: "Communication",
      description: "Clear documentation and team collaboration",
      skills: [
        "Technical Documentation",
        "Stakeholder Management",
        "Cross-functional Leadership",
        "User Training Materials",
        "Process Walkthroughs"
      ],
      gradient: "from-indigo-500/10 to-purple-500/10"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle section-padding">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="mb-4">Capabilities</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning product management, AI automation, and data analytics—focused on delivering measurable outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <Card key={index} className="card-shadow hover:card-shadow-hover transition-spring group">
              <CardHeader className={`bg-gradient-to-br ${capability.gradient} relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12 group-hover:scale-110 transition-transform duration-500" />
                <div className="flex items-center gap-3 relative z-10">
                  <div className="p-3 rounded-lg bg-white/80">
                    <capability.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{capability.title}</CardTitle>
                </div>
                <p className="text-muted-foreground relative z-10">{capability.description}</p>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="space-y-2">
                  {capability.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="mr-2 mb-2 text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;