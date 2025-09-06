import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram ,Facebook} from 'lucide-react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'amitparmar.dev@gmail.com',
      href: 'mailto:amitparmar.dev@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9979205615',
      href: 'tel:+919979205615'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Vadodara, GJ, IN',
      href: 'https://www.google.com/maps/place/Vadodara,+Gujarat/@22.3222405,73.0905129,12z/data=!3m1!4b1!4m6!3m5!1s0x395fc8ab91a3ddab:0xac39d3bfe1473fb8!8m2!3d22.3000395!4d73.2064994!16zL20vMDJrZnhr?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/amitparmar-dev', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/amit-parmar-dev/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/amitparmar4u/', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/amit.bit/', label: 'Facebook' }
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="mb-6">
            Get In <span className="text-foreground font-black">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-foreground mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card 
            className={`bg-card border-border shadow-card hover:shadow-lg transition-all duration-300 ${
              isVisible ? 'animate-slide-in' : 'opacity-0'
            }`}
          >
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-background border-border focus:border-foreground transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-background border-border focus:border-foreground transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-background border-border focus:border-foreground transition-all duration-300 min-h-32"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-foreground text-background hover:bg-muted-foreground transition-all duration-300 font-medium"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <Card className="bg-card border-border shadow-card hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Contact Info</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4 group">
                      <div className="p-3 bg-muted rounded-lg group-hover:bg-muted-foreground/10 transition-all duration-300">
                        <info.icon className="w-5 h-5 text-foreground" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{info.label}</div>
                        <a 
                          href={info.href}
                          className="text-foreground hover:text-muted-foreground transition-all duration-300"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-card hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="p-3 border-border hover:bg-foreground hover:text-background transition-all duration-300 group"
                      asChild
                    >
                      <a href={social.href} aria-label={social.label}>
                        <social.icon className="w-5 h-5 group-hover:scale-110 transition-all duration-300" />
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;