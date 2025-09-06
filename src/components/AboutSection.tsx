import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="mb-6">
            About <span className="text-foreground font-black">Me</span>
          </h2>
          <div className="w-20 h-1 bg-foreground mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`${isVisible ? 'animate-slide-in' : 'opacity-0'}`}>
            <Card className="bg-card border-border shadow-card hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  With over 5 years of experience in web development and design, I've had the privilege 
                  of working with diverse clients and projects. My passion lies in creating digital 
                  experiences that not only look beautiful but also solve real-world problems.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in the power of clean code, thoughtful design, and continuous learning. 
                  Every project is an opportunity to push boundaries and create something extraordinary.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'} delay-300`}>
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-card border-border shadow-card hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-foreground mb-2 group-hover:scale-110 transition-all duration-300">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border shadow-card hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-foreground mb-2 group-hover:scale-110 transition-all duration-300">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border shadow-card hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-foreground mb-2 group-hover:scale-110 transition-all duration-300">30+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border shadow-card hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-foreground mb-2 group-hover:scale-110 transition-all duration-300">24/7</div>
                  <div className="text-sm text-muted-foreground">Availability</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;