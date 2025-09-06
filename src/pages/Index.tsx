import PortfolioNavigation from '@/components/PortfolioNavigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PortfolioNavigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      
      <footer className="py-8 px-6 border-t border-border bg-background">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 <a href="https://www.linkedin.com/in/pratham-parmar" target="_blank" rel="noopener noreferrer">Pratham Parmar</a>. All rights reserved. Built with passion and creativity.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
