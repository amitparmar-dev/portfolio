import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution built with React and Node.js, featuring real-time inventory management and secure payment processing.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "bg-gradient-primary",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team communication features.",
      tags: ["Vue.js", "Firebase", "Tailwind CSS"],
      image: "bg-gradient-secondary",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio website with smooth animations, dark mode support, and optimized performance for all devices.",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      image: "bg-gradient-primary",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather application with location-based forecasts, data visualization, and personalized weather alerts.",
      tags: ["JavaScript", "Chart.js", "REST API"],
      image: "bg-gradient-secondary",
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="mb-6">
            Featured <span className="text-foreground font-black">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-foreground mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating exceptional digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`bg-card border-border shadow-card hover:shadow-lg transition-all duration-300 group overflow-hidden ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="h-48 bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-foreground/5 group-hover:bg-foreground/10 transition-all duration-300"></div>
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Button size="sm" variant="secondary" className="h-8 w-8 p-0 bg-background border border-border hover:bg-foreground hover:text-background">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="h-8 w-8 p-0 bg-background border border-border hover:bg-foreground hover:text-background">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-muted-foreground transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 text-xs bg-muted text-foreground rounded-full border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`text-center mt-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <Button 
            variant="outline" 
            size="lg"
            className="border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;