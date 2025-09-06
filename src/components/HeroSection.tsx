import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import heroImage from '@/assets/hero.png';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Creative Developer & Designer";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center overflow-hidden bg-background pt-24 md:pt-0">
      {/* Subtle pattern overlay for visual interest */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }} />
      </div>
      
      {/* Main content container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-left animate-fade-in">
            <h1 className="mb-6">
              <span className="block text-foreground mb-2 font-medium text-lg tracking-wide">Hey There, I'm</span>
              <span className="block text-foreground font-black tracking-tight">
                Amit Parmar
              </span>
            </h1>
            
            <div className="text-xl md:text-2xl text-muted-foreground mb-8 h-8 font-medium">
              <span className="border-r-2 border-foreground animate-pulse">
                {displayText}
              </span>
            </div>
            
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed font-normal">
              I craft beautiful digital experiences through innovative design and clean code. 
              Passionate about creating solutions that make a difference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button 
                size="lg" 
                className="bg-foreground text-background hover:bg-muted-foreground transition-all duration-300 font-medium"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300 font-medium"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>
          </div>
          
          {/* Right side - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md lg:max-w-lg relative">
              {/* Multiple shadow layers to follow portrait contours */}
              <div 
                className="absolute inset-0"
                style={{
                  filter: 'blur(15px)',
                  background: `url(${heroImage}) center/contain no-repeat`,
                  opacity: 0.2,
                  transform: 'scale(1.05)',
                  zIndex: 1
                }}
              ></div>
              <div 
                className="absolute inset-0"
                style={{
                  filter: 'blur(10px)',
                  background: `url(${heroImage}) center/contain no-repeat`,
                  opacity: 0.15,
                  transform: 'scale(1.02)',
                  zIndex: 2
                }}
              ></div>
              
              {/* Main image */}
              <div className="relative z-10">
                <img 
                  src={heroImage} 
                  alt="Amit Parmar - Creative Developer & Designer"
                  className="w-full h-auto object-contain"
                  style={{
                    filter: 'drop-shadow(0 0 15px rgba(0, 0, 0, 0.25)) drop-shadow(0 0 25px rgba(0, 0, 0, 0.15))'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll down button - positioned absolutely at bottom center */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <Button
          variant="ghost"
          size="sm"
          onClick={scrollToAbout}
          className="animate-bounce text-muted-foreground hover:text-foreground"
        >
          <ArrowDown className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;