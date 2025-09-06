import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<{ [key: string]: number }>({});
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    { name: 'React/Next.js', level: 95, category: 'Frontend' },
    { name: 'TypeScript', level: 90, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 92, category: 'Frontend' },
    { name: 'Node.js', level: 88, category: 'Backend' },
    { name: 'Python', level: 85, category: 'Backend' },
    { name: 'PostgreSQL', level: 80, category: 'Backend' },
    { name: 'Figma', level: 93, category: 'Design' },
    { name: 'Adobe Creative Suite', level: 87, category: 'Design' },
    { name: 'UI/UX Design', level: 90, category: 'Design' }
  ];

  const categories = ['Frontend', 'Backend', 'Design'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate progress bars
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedValues(prev => ({
                ...prev,
                [skill.name]: skill.level
              }));
            }, index * 100);
          });
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
    <section ref={sectionRef} id="skills" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="mb-6">
            My <span className="text-foreground font-black">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-foreground mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and creative abilities across different domains.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {categories.map((category, categoryIndex) => (
            <Card 
              key={category}
              className={`bg-card border-border shadow-card hover:shadow-lg transition-all duration-300 ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-center text-foreground">
                  {category}
                </h3>
                <div className="space-y-6">
                  {skills
                    .filter(skill => skill.category === category)
                    .map((skill, skillIndex) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">
                            {animatedValues[skill.name] || 0}%
                          </span>
                        </div>
                        <Progress 
                          value={animatedValues[skill.name] || 0} 
                          className="h-2 bg-secondary"
                        />
                      </div>
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

export default SkillsSection;