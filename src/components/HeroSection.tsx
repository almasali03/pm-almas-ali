import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";
import { ArrowRight, Mail, FileText } from "lucide-react";
const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroBackground})`
    }}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent/90" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 section-padding container-width text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-6 leading-tight">
            <span className="block text-white/90 text-xl lg:text-2xl font-normal mb-2">
              Almas Ali
            </span>
            <span className="block text-white font-bold">Product Manager</span>
            <span className="block text-white/80 text-2xl lg:text-3xl xl:text-4xl font-normal mt-2">and upcoming AI Product Builder</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">I design and deliver simple, reliable products and systems that drive revenue
Combining 8+ years of product management experience 
with a passion for practical AI powered solutions</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" onClick={scrollToProjects} className="min-w-[180px]">
              <FileText className="mr-2 h-5 w-5" />
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <Button variant="outline" size="lg" onClick={scrollToContact} className="min-w-[180px] border-white/30 text-white hover:bg-white hover:text-primary">
              <Mail className="mr-2 h-5 w-5" />
              Contact
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-white/60" />
          <div className="text-sm">Scroll to explore</div>
        </div>
      </div>
    </section>;
};
export default HeroSection;