import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Clock, User } from "lucide-react";

const ContactSection = () => {
  const keywords = [
    "Custom GPT", "Make.com automations", "Workflow automation", 
    "Email drafting assistant", "Social content automation", "KYC", 
    "FinTech product management", "Payment solutions", "B2B SaaS", 
    "GA4", "OpenAI", "Zapier"
  ];

  return (
    <section className="py-20 bg-background section-padding" id="contact">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="mb-4">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to build something amazing together? I specialize in AI automation, product strategy, and turning complex ideas into simple, reliable systems.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Card */}
            <Card className="card-shadow hover:card-shadow-hover transition-spring">
              <CardHeader className="bg-gradient-to-br from-primary/10 to-accent/10">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-primary/20">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Get In Touch</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-5 w-5" />
                  <span>almas@example.com</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Clock className="h-5 w-5" />
                  <span>India/APAC Timezone</span>
                </div>
                <Button variant="default" className="w-full mt-4">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Email
                </Button>
              </CardContent>
            </Card>

            {/* Bio Card */}
            <Card className="card-shadow hover:card-shadow-hover transition-spring">
              <CardHeader className="bg-gradient-to-br from-success/10 to-primary/10">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-success/20">
                    <User className="h-6 w-6 text-success" />
                  </div>
                  <CardTitle>Short Bio</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-muted-foreground">
                  Product Manager (8+ years) actively exploring and building as an AI Product Builder. 
                  I ship reliable automations and customer-centric products with clear documentation, 
                  measurable outcomes, and fast turnaround.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Keywords */}
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="text-center">Areas of Expertise</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-2 justify-center">
                {keywords.map((keyword, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {keyword}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;