import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ChevronRight, MapPin, Phone, Award, TrendingUp, CheckCircle, Target, BarChart3, Palette, Lightbulb, FileText, MessageCircle } from "lucide-react";
function ImageWithFallback(props: any) {
  const [didError, setDidError] = useState(false);
  const {
    src,
    alt,
    style,
    className,
    ...rest
  } = props;
  return didError ? <div className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`} style={style}>
      <div className="flex items-center justify-center w-full h-full">
        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==" alt="Error loading image" {...rest} data-original-url={src} />
      </div>
    </div> : <img src={src} alt={alt} className={className} style={style} {...rest} onError={() => setDidError(true)} />;
}
interface PortfolioProps {
  name?: string;
  title?: string;
  profileImage?: string;
  primaryColor?: string;
  darkMode?: boolean;
}
export default function Portfolio({
  name = "Almas Ali",
  title = "Product Manager",
  profileImage = "/lovable-uploads/b133800e-d0b1-425e-8871-633105dd7fe1.png",
  primaryColor = "#4f46e5",
  darkMode = false
}: PortfolioProps) {
  // State hooks
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState(darkMode ? "dark" : "light");
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Section refs
  const sections = ["home", "about", "skills", "projects", "contact"];
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const sectionRefs = {
    home: homeRef,
    about: aboutRef,
    skills: skillsRef,
    projects: projectsRef,
    contact: contactRef
  };

  // Event handlers
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = sectionRefs[sectionId as keyof typeof sectionRefs]?.current;
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  const openProjectModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = sectionRefs[section as keyof typeof sectionRefs]?.current;
        if (!element) continue;
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  // Theme effect
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeProjectModal();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  // Content data
  const projects = [{
    id: 1,
    title: "P2P Lending Platform Development",
    subtitle: "Scaling a P2P Lending Platform",
    description: "Co-founded and scaled one of India's largest P2P lending platforms, achieving significant loan volumes with a low default rate. The platform attracted high-net-worth individuals through well-developed investment strategies and portfolio systems.",
    impact: ["500K+ app downloads on Google Playstore", "60,000+ loans facilitated", "3rd largest P2P company in India by 2019", "Only 1.6% default rate"],
    problem: "The project aimed to address the lack of accessible and efficient lending solutions in India, providing a platform for peer-to-peer lending with robust security and investment options.",
    contributions: "As Co-Founder, I utilized skills in product management, analytics and prototyping to design and launch the platform. I managed compliance, built partnerships, onboarded technology vendors, and led product pitches to investors and strategic partners.",
    outcome: "The platform achieved over 500k app downloads on the Google Playstore, facilitated over 60,000 loans and investments, and became the 3rd largest P2P company in India by 2019. This success underscored the platform's impact on the lending landscape.",
    technologies: ["Product Development", "MVP Design", "FinTech", "Investment Strategy", "Product Management", "Compliance"],
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    demo: "#"
  }, {
    id: 2,
    title: "Industry-first in-app GST Payments",
    subtitle: "PayMate GST Credit Card Payment Solution",
    description: "Developed India's first mobile app enabling GST payments through credit cards, providing SMEs with working capital flexibility and cash flow management solutions.",
    impact: ["$2.4M revenue in first quarter", "30-50 days working capital extension", "Industry-first innovation", "3 bank partnerships for scale"],
    problem: "SMEs faced cash flow challenges paying GST due immediately, lacking working capital flexibility. No solution existed to pay GST via credit cards in India.",
    contributions: "Developed India's first mobile app enabling GST payments through credit cards. Created seamless 12-step user flow integrating GST Portal with ICICI Bank partnership. Features included multi-GSTIN management, automated KYC, payment reminders, and flexible settlement options.",
    outcome: "Launched first-of-its-kind solution providing 30-50 days working capital extension. Achieved $2.4M revenue in first quarter with 3 bank partnerships for scale. Delivered complete mobile-first experience with PCI DSS compliance, serving SMEs nationwide.",
    technologies: ["Payment Solutions", "GST Integration", "Financial Innovation", "Credit Cards", "Mobile-First Design"],
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    demo: "#"
  }, {
    id: 3,
    title: "Onboarding Optimization",
    subtitle: "Enhancing Onboarding Rates for PayMate App",
    description: "Optimized the onboarding and KYC process for the PayMate app, aimed at facilitating credit card payments for SMBs in India.",
    impact: ["20% increase in KYC completion rates", "Reduced manual rejections", "Improved user onboarding experience", "Decreased drop-off rate from 60%"],
    problem: "The high drop-off rate during the KYC process was a major issue, hindering user onboarding and affecting overall app usage.",
    contributions: "I analyzed the onboarding funnel to identify critical drop-off points. Through user cohort analysis and interviews, I pinpointed key pain areas. Collaborating with the support team, I proposed solutions such as simplifying KYC steps, integrating third-party verification APIs, and providing an overview page with guidance.",
    outcome: "The project led to a 20% increase in KYC completion rates and a reduction in manual rejections by the operations team, significantly enhancing the user onboarding experience.",
    technologies: ["User Experience", "Data Analysis", "A/B Testing", "Conversion Rate Optimization", "User Research"],
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    demo: "#"
  }, {
    id: 4,
    title: "Social Media Content Engine",
    subtitle: "AI Automation – Personal Project",
    description: "Turn approved content ideas into platform-specific posts (text + image) and publish reliably across social media channels.",
    impact: ["Consistently produces 3–5 posts/week", "Saves 8–12 hours/week in manual content creation", "Transparent status tracking in Google Sheets"],
    problem: "Content creators spend significant time repurposing ideas into platform-specific formats and manually scheduling posts, leading to inefficiencies and inconsistent publishing.",
    contributions: "Designed & built an automated workflow using Google Sheets as a content tracker, Make.com for orchestration, OpenAI for text generation, DALL·E for image generation, and Social APIs for publishing. Implemented branching logic for platform-specific copy, robust file-handling, automated status updates, and alerting, plus authored a clear SOP for future operators.",
    outcome: "The engine now produces 3–5 posts every week, saves 8–12 hours of manual work, and provides full transparency via real-time status updates in Google Sheets.",
    technologies: ["Google Sheets", "Make.com", "OpenAI", "DALL·E", "Social Media APIs"],
    image: "https://images.unsplash.com/photo-1515378934055-12adf0ca3894?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    demo: "#"
  }];
  const strengths = [{
    title: "Outcome-First Delivery",
    description: "Measurable results, clear scope, milestones, acceptance criteria.",
    icon: Target
  }, {
    title: "Data-Driven Product Decisions",
    description: "Using both qualitative + quantitative data, product analytics, conversion funnels, experimentation.",
    icon: BarChart3
  }, {
    title: "UI/UX & Prototyping Acumen",
    description: "Concept to clickable prototype, intuitive user experiences.",
    icon: Palette
  }, {
    title: "Problem-Solving",
    description: "Breaking down complex issues, deep analysis, cross-functional insights.",
    icon: Lightbulb
  }];
  const skills = [{
    category: "Product Management",
    items: ["Product Strategy", "Analytics", "Product Ownership", "Agile", "Roadmapping", "Product-Led Growth", "UI/UX Prototyping", "User Research", "A/B Testing"]
  }, {
    category: "Leadership & Business",
    items: ["Cross-Functional Leadership", "Stakeholder Management", "Strategic Planning", "Vendor Management", "Budget Optimization"]
  }, {
    category: "Technical",
    items: ["JIRA & Confluence", "Firebase", "GA4", "Clevertap", "Mixpanel", "Figma", "PowerBI", "CRM Systems"]
  }, {
    category: "AI & Emerging Tech",
    items: ["Custom GPT Development", "Prompt Engineering", "OpenAI API Integration", "Workflows Automation", "Website Development", "Make.com/n8n/Zapier"]
  }];
  const achievements = ["Scaled India's top-rated lending app to 500K+ downloads and USD 30M+ in disbursement volume", "Launched FinTech products in 4 APAC markets, cutting launch time by 67%", "Innovated industry-first in-app Tax Receipts Payments solutions, leading to $2.4Mn Q1 revenue", "Increased app rating from 3.7 to 4.3 and cut crash rate by 45%", "Lifted onboarding funnel conversions by 20% and KYC approvals by 10%"];
  const experience = [{
    title: "Lead Product Manager",
    company: "PayMate India Limited",
    period: "Apr 2024 – Present",
    location: "Remote",
    description: ["Led FinTech product launches across 4 APAC regions, cutting GTM time by 67%", "Expanded product suite with cross-border payments, rent collections/payments, tax modules", "Led ERP integrations (SAP Taulia, Oracle), unlocking enterprise accounts", "Revamped 5+ regional web/mobile applications using Agile framework"]
  }, {
    title: "Senior Manager - Product Delivery",
    company: "PayMate India Limited",
    period: "Jun 2022 – Mar 2024",
    location: "Remote",
    description: ["Reduced OTP and bank verification failures by 60% via fallback vendor systems", "Improved KYC funnel by 20%, registration by 6%, and card flow by 4%", "Led UAE, Singapore, and Australia rollouts with strong compliance", "Built automated MIS for real-time reports, saving 15% manual reporting hours"]
  }, {
    title: "Senior Manager - Product & Operations",
    company: "PayMate India Limited",
    period: "Nov 2019 – May 2022",
    location: "Mumbai",
    description: ["Launched MVP app for India and UAE, driving 300K+ SME registrations in first year", "Conceptualized & launched industry-first in-app GST payments, unlocking new revenue streams", "Co-created 'Sherlock' fraud engine with AI/ML-based behavioral analytics", "Improved PAN KYC approvals by 10%, boosting conversion rates"]
  }, {
    title: "Co-Founder & Chief Lending Officer",
    company: "Z2P",
    period: "Aug 2016 – Oct 2019",
    location: "Bhopal",
    description: ["Designed & launched India's 3rd largest P2P lending platform by disbursement volume", "Scaled operations to 60K+ loans, 500K+ downloads, with only 1.6% default rate", "Built MVP, owned product roadmap, UI, and user growth channels", "Managed compliance, NBFC partnerships, and technology vendor onboarding"]
  }];

  // Theme styles
  const themeStyles = {
    accentColor: primaryColor
  };
  return <div className={`w-full min-h-full font-sans ${theme === "dark" ? "dark" : ""}`}>
      <div className="w-full min-h-full bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <a href="#" className="text-xl font-bold" style={{
            color: themeStyles.accentColor
          }}>
              {name.split(" ")[0]}<span className="text-gray-800 dark:text-white">Ali</span>
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {sections.map(section => <button key={section} onClick={() => scrollToSection(section)} className={`capitalize transition-colors duration-300 ${activeSection === section ? `font-medium` : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"}`} style={activeSection === section ? {
              color: themeStyles.accentColor
            } : {}}>
                  {section}
                </button>)}
              <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                {theme === "light" ? "🌙" : "☀️"}
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleTheme} className="p-2 mr-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                {theme === "light" ? "🌙" : "☀️"}
              </button>
              <button onClick={toggleMenu} className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
              <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
                {sections.map(section => <button key={section} onClick={() => scrollToSection(section)} className={`py-2 capitalize transition-colors duration-300 ${activeSection === section ? `font-medium` : "text-gray-600 dark:text-gray-300"}`} style={activeSection === section ? {
              color: themeStyles.accentColor
            } : {}}>
                    {section}
                  </button>)}
              </div>
            </div>}
        </nav>
        
        {/* Hero Section */}
        <section ref={homeRef} id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 px-4">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div>
                <p className="text-sm md:text-base uppercase tracking-wider mb-2" style={{
                color: themeStyles.accentColor
              }}>
                  Hello, I'm
                </p>
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
                  {name}
                </h1>
                <h2 className="text-xl md:text-2xl mb-3 text-gray-600 dark:text-gray-300">
                  {title} with FinTech Expertise
                </h2>
                <div className="flex items-center mb-6">
                  <div className="flex items-center mr-4">
                    <MapPin size={16} className="mr-1 text-gray-500 dark:text-gray-400" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">Bhopal, India</span>
                  </div>
                  <div className="flex items-center">
                    <Phone size={16} className="mr-1 text-gray-500 dark:text-gray-400" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">+91 9677136490</span>
                  </div>
                </div>
                <p className="text-base md:text-lg mb-8 text-gray-600 dark:text-gray-300 max-w-lg">
                  Product Manager with 8+ years of experience leading end-to-end delivery of digital products across India, APAC and EMEA. 
                  Proven track record in launching multi-region products, optimizing user funnels, and aligning with backend platforms.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button onClick={() => scrollToSection("projects")} className="px-6 py-3 rounded-md font-medium transition-all duration-300" style={{
                  backgroundColor: themeStyles.accentColor,
                  color: "#ffffff"
                }}>
                    View My Work
                  </button>
                  <button onClick={() => scrollToSection("contact")} className="px-6 py-3 rounded-md font-medium border-2 transition-all duration-300 text-gray-800 dark:text-white border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">
                    Contact Me
                  </button>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
                  <ImageWithFallback src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg" style={{
                backgroundColor: themeStyles.accentColor
              }}>
                  <span>7+</span>
                  <span className="text-xs">Years Exp</span>
                </div>
              </div>
            </div>
          
          </div>
        </section>
        
        
        
        {/* About Section */}
        <section ref={aboutRef} id="about" className="py-16 md:py-24 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h2>
              <div className="w-24 h-1 mx-auto rounded" style={{
              backgroundColor: themeStyles.accentColor
            }}></div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Professional Summary
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Product Manager with 8+ years of experience leading end-to-end delivery of digital products across India, APAC and EMEA. Proven track record in launching multi-region products, optimizing user funnels, integrating CRM systems, and aligning with backend platforms like ERPs.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Skilled in scaling mobile-first B2B and B2C platforms, driving user growth, and improving conversion rates. Hands-on Agile practitioner with a strong user-first mindset, cross-functional leadership, and a passion for building high-impact, data-driven products.
                </p>
                <div className="mb-8">
                  <h4 className="font-bold mb-3 text-gray-800 dark:text-gray-200">Key Achievements</h4>
                  <div className="space-y-3">
                    {achievements.map((achievement, index) => <div key={index} className="flex items-start">
                        <CheckCircle className="flex-shrink-0 mt-1 mr-2" size={16} style={{
                      color: themeStyles.accentColor
                    }} />
                        <p className="text-gray-600 dark:text-gray-300 text-sm">{achievement}</p>
                      </div>)}
                  </div>
                </div>

                {/* Core Strengths placed under About Me */}
                <div className="mb-10">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Core Strengths</h3>
                  <div className="flex flex-col gap-6">
                    {strengths.map((strength, index) => {
                    const IconComp = strength.icon;
                    return <div key={index} className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md flex items-start">
                          <IconComp size={24} className="mt-0.5 mr-3 flex-shrink-0" style={{
                        color: themeStyles.accentColor
                      }} />
                          <div>
                            <h4 className="text-lg font-bold mb-1 text-gray-900 dark:text-white">{strength.title}</h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">{strength.description}</p>
                          </div>
                        </div>;
                  })}
                  </div>
                </div>
                <a href="#" className="inline-flex items-center px-6 py-3 rounded-md font-medium transition-all duration-300" style={{
                backgroundColor: themeStyles.accentColor,
                color: "#ffffff"
              }}>
                  Download Resume
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                  </svg>
                </a>
              </div>
              
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Work Experience
                </h3>
                <div className="space-y-6">
                  {experience.map((job, index) => <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white">{job.title}</h4>
                          <p className="text-base text-gray-700 dark:text-gray-300">{job.company}</p>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{job.period}</span>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{job.location}</p>
                      <ul className="space-y-2">
                        {job.description.map((point, i) => <li key={i} className="flex items-start">
                            <ChevronRight size={16} className="mt-1 mr-2" style={{
                        color: themeStyles.accentColor
                      }} />
                            <span className="text-sm text-gray-600 dark:text-gray-300">{point}</span>
                          </li>)}
                      </ul>
                    </div>)}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Skills Section */}
        <section ref={skillsRef} id="skills" className="py-16 md:py-24 px-4 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Skills & Expertise</h2>
              <div className="w-24 h-1 mx-auto rounded" style={{
              backgroundColor: themeStyles.accentColor
            }}></div>
              <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                A comprehensive toolkit built through 8+ years of hands-on experience in product management, leadership, and emerging technologies.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skillGroup, index) => <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
                  <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white" style={{
                color: themeStyles.accentColor
              }}>
                    {skillGroup.category}
                  </h3>
                  <div className="space-y-2">
                    {skillGroup.items.map((skill, i) => <div key={i} className="text-sm text-gray-600 dark:text-gray-300 py-1 px-2 bg-gray-100 dark:bg-gray-800 rounded">
                        {skill}
                      </div>)}
                  </div>
                </div>)}
            </div>
            
            <div className="mt-16">
              <h3 className="text-xl font-bold mb-6 text-center text-gray-900 dark:text-white">Certifications & Achievements</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full mb-4" style={{
                  backgroundColor: `${themeStyles.accentColor}20`
                }}>
                    <Award size={32} style={{
                    color: themeStyles.accentColor
                  }} />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Certifications</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2 text-center">
                    <li>Google Analytics (GA4) Certified</li>
                    <li>AI-Powered Interactive Dashboards</li>
                    <li>Prompt Engineering Foundations</li>
                    <li>Agile Scrum Methodologies Certified</li>
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full mb-4" style={{
                  backgroundColor: `${themeStyles.accentColor}20`
                }}>
                    <TrendingUp size={32} style={{
                    color: themeStyles.accentColor
                  }} />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Leadership</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2 text-center">
                    <li>Led 7+ cross-functional teams</li>
                    <li>Managed RFP/RFI bids for MasterCard, RBI</li>
                    <li>Directed multi-region product launches</li>
                    <li>Co-founded top-rated P2P lending platform</li>
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full mb-4" style={{
                  backgroundColor: `${themeStyles.accentColor}20`
                }}>
                    <svg className="w-8 h-8" style={{
                    color: themeStyles.accentColor
                  }} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Recognition</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2 text-center">
                    <li>Delivered App Demo — SIDEC (Malaysia)</li>
                    <li>Speaker at Global FinTech Fest (India)</li>
                    <li>Best Fintech Company in State (MP, India)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Projects Section */}
        <section ref={projectsRef} id="projects" className="py-16 md:py-24 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Featured Projects</h2>
              <div className="w-24 h-1 mx-auto rounded" style={{
              backgroundColor: themeStyles.accentColor
            }}></div>
              <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Here are some of my key product initiatives that showcase my expertise in FinTech, product strategy, and user experience optimization.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map(project => <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
                  <div className="h-48 overflow-hidden">
                    <ImageWithFallback src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">{project.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{project.subtitle}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Key Impact</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {project.impact.map((item, i) => <div key={i} className="flex items-start">
                            <CheckCircle size={14} className="mt-0.5 mr-1 flex-shrink-0" style={{
                        color: themeStyles.accentColor
                      }} />
                            <span className="text-xs text-gray-600 dark:text-gray-300">{item}</span>
                          </div>)}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => <span key={i} className="px-2 py-1 text-xs rounded-full text-white" style={{
                    backgroundColor: themeStyles.accentColor
                  }}>
                          {tech}
                        </span>)}
                    </div>
                    
                    <div className="flex justify-end">
                      <button onClick={() => openProjectModal(project)} className="flex items-center text-sm font-medium transition-colors" style={{
                    color: themeStyles.accentColor
                  }}>
                        View Details <ChevronRight size={16} className="ml-1" />
                      </button>
                    </div>
                  </div>
                </div>)}
            </div>
            
            <div className="mt-16 bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Other Notable Projects</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="p-3 rounded-full mr-4" style={{
                  backgroundColor: `${themeStyles.accentColor}20`
                }}>
                    <svg className="w-6 h-6" style={{
                    color: themeStyles.accentColor
                  }} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1 text-gray-900 dark:text-white">Cross-Border Payments Platform</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Expanded product suite with cross-border payments, enabling transactions across multiple currencies and regions.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 rounded-full mr-4" style={{
                  backgroundColor: `${themeStyles.accentColor}20`
                }}>
                    <svg className="w-6 h-6" style={{
                    color: themeStyles.accentColor
                  }} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1 text-gray-900 dark:text-white">"Sherlock" Fraud Detection Engine</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Co-created AI/ML-based behavioral analytics system for real-time risk flagging, reducing fraud incidents.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 rounded-full mr-4" style={{
                  backgroundColor: `${themeStyles.accentColor}20`
                }}>
                    <svg className="w-6 h-6" style={{
                    color: themeStyles.accentColor
                  }} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1 text-gray-900 dark:text-white">Automated MIS Reporting System</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Built automated dashboards for real-time reports, saving 15% manual reporting hours weekly across teams.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 rounded-full mr-4" style={{
                  backgroundColor: `${themeStyles.accentColor}20`
                }}>
                    <FileText size={24} style={{
                    color: themeStyles.accentColor
                  }} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1 text-gray-900 dark:text-white">Invoice Management System</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Led invoice management system from scratch and partnered with NPCI for BharatConnect B2B pilot program, enhancing the company's industry reputation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section ref={contactRef} id="contact" className="py-16 md:py-24 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Get In Touch</h2>
              <div className="w-24 h-1 mx-auto rounded" style={{
              backgroundColor: themeStyles.accentColor
            }}></div>
              <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Interested in discussing Product, scope of AI in Product, or potential opportunities? Feel free to reach out!</p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Send Me a Message</h3>
                  <div>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                      <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white" placeholder="Your name" />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                      <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white" placeholder="Your email" />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                      <input type="text" id="subject" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white" placeholder="Subject" />
                    </div>
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                      <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white" placeholder="Your message"></textarea>
                    </div>
                    <button type="button" className="w-full px-6 py-3 rounded-md font-medium transition-all duration-300 text-white" style={{
                    backgroundColor: themeStyles.accentColor
                  }}>
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 h-full">
                  <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 p-3 rounded-full" style={{
                      backgroundColor: `${themeStyles.accentColor}20`
                    }}>
                        <Mail size={24} style={{
                        color: themeStyles.accentColor
                      }} />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-base font-medium text-gray-900 dark:text-white">Email</h4>
                        <a href="mailto:almasali03@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                          almasali03@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 p-3 rounded-full" style={{
                      backgroundColor: `${themeStyles.accentColor}20`
                    }}>
                        <MessageCircle size={24} style={{
                        color: themeStyles.accentColor
                      }} />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-base font-medium text-gray-900 dark:text-white">Chat on WhatsApp</h4>
                        <a href="http://wa.me/+919677136490" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                          +91 9677136490
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 p-3 rounded-full" style={{
                      backgroundColor: `${themeStyles.accentColor}20`
                    }}>
                        <MapPin size={24} style={{
                        color: themeStyles.accentColor
                      }} />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-base font-medium text-gray-900 dark:text-white">Location</h4>
                        <p className="text-gray-600 dark:text-gray-300">Bhopal, India</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Willing to Relocate</p>
                      </div>
                    </div>
                    
                    <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                      <h4 className="text-base font-medium mb-4 text-gray-900 dark:text-white">Connect With Me</h4>
                      <div className="flex space-x-4">
                        <a href="https://www.linkedin.com/in/almasali03/" className="p-3 rounded-full transition-colors" style={{
                        backgroundColor: `${themeStyles.accentColor}20`
                      }}>
                          <Linkedin size={20} style={{
                          color: themeStyles.accentColor
                        }} />
                        </a>
                        <a href="https://github.com/almasali03" className="p-3 rounded-full transition-colors" style={{
                        backgroundColor: `${themeStyles.accentColor}20`
                      }}>
                          <Github size={20} style={{
                          color: themeStyles.accentColor
                        }} />
                        </a>
                        <a href="mailto:almasali03@gmail.com" className="p-3 rounded-full transition-colors" style={{
                        backgroundColor: `${themeStyles.accentColor}20`
                      }}>
                          <Mail size={20} style={{
                          color: themeStyles.accentColor
                        }} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <div className="container mx-auto text-center">
            <p className="text-gray-600 dark:text-gray-300">
              © {new Date().getFullYear()} {name}. Built with React, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </footer>

        {/* Project Modal */}
        <AnimatePresence>
          {isModalOpen && selectedProject && <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50" onClick={closeProjectModal}>
              <motion.div initial={{
            scale: 0.9,
            opacity: 0
          }} animate={{
            scale: 1,
            opacity: 1
          }} exit={{
            scale: 0.9,
            opacity: 0
          }} className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedProject.title}</h2>
                  <button onClick={closeProjectModal} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                    <X size={24} className="text-gray-500 dark:text-gray-400" />
                  </button>
                </div>
                
                <div className="p-6">
                  <div className="mb-6">
                    <ImageWithFallback src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover rounded-lg" />
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Project Overview</h3>
                      <p className="text-gray-600 dark:text-gray-300">{selectedProject.description}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Problem Statement</h3>
                      <p className="text-gray-600 dark:text-gray-300">{selectedProject.problem}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">My Contributions</h3>
                      <p className="text-gray-600 dark:text-gray-300">{selectedProject.contributions}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Outcome & Impact</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{selectedProject.outcome}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {selectedProject.impact.map((item: string, i: number) => <div key={i} className="flex items-center">
                            <CheckCircle size={16} className="mr-2 flex-shrink-0" style={{
                        color: themeStyles.accentColor
                      }} />
                            <span className="text-sm text-gray-600 dark:text-gray-300">{item}</span>
                          </div>)}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Technologies & Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech: string, i: number) => <span key={i} className="px-3 py-1 text-sm rounded-full text-white" style={{
                      backgroundColor: themeStyles.accentColor
                    }}>
                            {tech}
                          </span>)}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>}
        </AnimatePresence>
      </div>
    </div>;
}