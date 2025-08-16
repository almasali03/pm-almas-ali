import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CheckCircle, Target, BarChart3, Palette, Lightbulb } from "lucide-react";
const AboutSection = () => {
  const strengths = [{
    icon: Target,
    title: "Outcome-First Delivery",
    description: "Measurable results, clear scope, milestones, acceptance criteria."
  }, {
    icon: BarChart3,
    title: "Data-Driven Product Decisions",
    description: "Using both qualitative + quantitative data, product analytics, conversion funnels, experimentation."
  }, {
    icon: Palette,
    title: "UI/UX & Prototyping Acumen",
    description: "Concept to clickable prototype, intuitive user experiences."
  }, {
    icon: Lightbulb,
    title: "Problem-Solving",
    description: "Breaking down complex issues, deep analysis, cross-functional insights."
  }];
  const highlights = ["Launched products across 4 APAC markets in 30 days", "Reduced verification failures by 60%, improved KYC conversion by 20%", "Built an AI content engine saving 8–12 hours/week; consistently producing 3–5 posts/week"];
  return <section className="py-20 bg-gradient-subtle section-padding" id="about">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="mb-4">About</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">I'm an 8+ year Product Manager, actively exploring and building as an AI Product Builder. I've launched products across India, EMEA & APAC in FinTech/SaaS,
led cross‑functional teams, and delivered measurable outcomes.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Core Strengths */}
          <div>
            <h3 className="mb-8 text-center md:text-left">Core Strengths</h3>
            <div className="space-y-6">
              {strengths.map((strength, index) => <Card key={index} className="p-6 card-shadow hover:card-shadow-hover transition-smooth">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <strength.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{strength.title}</h4>
                      <p className="text-muted-foreground">{strength.description}</p>
                    </div>
                  </div>
                </Card>)}
            </div>
          </div>

          {/* Experience Snapshot */}
          <div>
            <h3 className="mb-8 text-center md:text-left">Experience Snapshot</h3>
            <Card className="p-8 card-shadow hover:card-shadow-hover transition-smooth">
              <div className="space-y-6">
                <div>
                  <Badge variant="secondary" className="mb-3">Roles</Badge>
                  <p className="text-sm text-muted-foreground">
                    Product Manager → Lead PM (actively exploring AI Product Building)
                  </p>
                </div>
                
                <div>
                  <Badge variant="secondary" className="mb-3">Markets</Badge>
                  <p className="text-sm text-muted-foreground">India/APAC</p>
                </div>
                
                <div>
                  <Badge variant="secondary" className="mb-3">Impact Highlights</Badge>
                  <ul className="space-y-3">
                    {highlights.map((highlight, index) => <li key={index} className="flex items-start gap-3 text-sm">
                        <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>)}
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;