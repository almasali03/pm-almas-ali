import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CheckCircle } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  outcomes: string[];
  technologies: string[];
  deliverables: string[];
  gradient?: string;
}

const ProjectCard = ({ 
  title, 
  category, 
  description, 
  outcomes, 
  technologies, 
  deliverables,
  gradient = "from-primary/10 to-accent/10"
}: ProjectCardProps) => {
  return (
    <Card className="card-shadow hover:card-shadow-hover transition-spring group">
      <CardHeader className={`bg-gradient-to-br ${gradient} relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-500" />
        <Badge variant="secondary" className="w-fit mb-2">{category}</Badge>
        <CardTitle className="group-hover:text-primary transition-colors">{title}</CardTitle>
        <p className="text-muted-foreground">{description}</p>
      </CardHeader>
      
      <CardContent className="p-6 space-y-6">
        {/* Outcomes */}
        <div>
          <h4 className="font-semibold mb-3 text-success">Key Outcomes</h4>
          <ul className="space-y-2">
            {outcomes.map((outcome, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div>
          <h4 className="font-semibold mb-3">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Deliverables */}
        <div>
          <h4 className="font-semibold mb-3">What I Delivered</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            {deliverables.map((deliverable, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>{deliverable}</span>
              </li>
            ))}
          </ul>
        </div>

        <Button variant="ghost" className="w-full group/btn" size="sm">
          View Details
          <ArrowUpRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;