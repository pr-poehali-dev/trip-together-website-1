import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      toast({
        title: "Documents uploaded!",
        description: `${files.length} file(s) uploaded successfully`,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const features = [
    {
      icon: "GraduationCap",
      title: "Educational Focus",
      description: "Immersive learning experiences designed for students"
    },
    {
      icon: "Shield",
      title: "Safe & Secure",
      description: "Your safety is our top priority on every trip"
    },
    {
      icon: "Globe",
      title: "Global Network",
      description: "Destinations across continents and cultures"
    }
  ];

  const programs = [
    {
      name: "Canada Discovery",
      location: "Toronto, Vancouver, Montreal",
      duration: "14 days",
      price: "3400 CAD",
      description: "Explore Canadian culture, visit top universities, and experience the beauty of Canada's diverse landscapes.",
      features: [
        "University tours",
        "Cultural workshops",
        "City exploration",
        "Nature adventures"
      ],
      featured: true
    },
    {
      name: "Europe Journey",
      location: "London, Paris, Brussels",
      duration: "10 days",
      price: "2800 CAD",
      description: "Historical landmarks tour with language practice and cultural immersion across Europe's most iconic cities.",
      features: [
        "Museum visits",
        "Language sessions",
        "Historical tours",
        "Cultural activities"
      ],
      featured: false
    },
    {
      name: "Australia Experience",
      location: "Sydney, Melbourne",
      duration: "12 days",
      price: "3200 CAD",
      description: "Marine biology activities, wildlife encounters, and English language immersion in Australia's vibrant cities.",
      features: [
        "Wildlife tours",
        "Beach activities",
        "Marine biology",
        "English immersion"
      ],
      featured: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      country: "USA",
      text: "Trip Together made my study trip to Canada unforgettable! Everything was perfectly organized.",
      rating: 5
    },
    {
      name: "Miguel Rodriguez",
      country: "Spain",
      text: "Professional team, great support, and amazing experiences. Highly recommended!",
      rating: 5
    },
    {
      name: "Yuki Tanaka",
      country: "Japan",
      text: "The best decision I made was joining their program. Made friends for life!",
      rating: 5
    }
  ];

  const galleryImages = [
    "https://cdn.poehali.dev/projects/479fc8a9-e635-4227-9936-195c290440c2/files/ef65b48b-abd5-4cfe-b613-ba3e6d490ad5.jpg",
    "https://cdn.poehali.dev/projects/479fc8a9-e635-4227-9936-195c290440c2/files/52da6a2d-480b-42be-b295-78288ddf07ce.jpg"
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Plane" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-foreground">Trip Together</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'programs', 'reviews', 'about', 'gallery', 'documents', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize text-sm font-medium transition-colors ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  {['home', 'programs', 'reviews', 'about', 'gallery', 'documents', 'contact'].map((section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className="capitalize text-left text-lg font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {section}
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6">
            Explore.<br />
            Learn.<br />
            Grow.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of students on educational adventures around the world. Transform your learning experience with Trip Together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 rounded-xl" onClick={() => scrollToSection('programs')}>
              <Icon name="Plane" size={20} className="mr-2" />
              View Programs
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-xl" onClick={() => scrollToSection('contact')}>
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <Icon name={feature.icon as any} size={40} className="text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="programs" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Programs</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Carefully crafted educational journeys that combine learning with adventure
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {programs.map((program, index) => (
              <Card key={index} className={`border-none shadow-lg hover:shadow-xl transition-all ${program.featured ? 'ring-2 ring-primary' : ''}`}>
                {program.featured && (
                  <div className="bg-gradient-to-r from-primary to-secondary text-white py-3 px-6 rounded-t-xl">
                    <div className="flex items-center justify-center gap-2 font-semibold">
                      <Icon name="Star" size={20} className="fill-white" />
                      Featured Program
                    </div>
                  </div>
                )}
                <CardContent className="pt-8 pb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{program.name}</h3>
                  <div className="flex items-center text-muted-foreground mb-4">
                    <Icon name="MapPin" size={18} className="mr-2 text-primary" />
                    <span className="text-sm">{program.location}</span>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{program.description}</p>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-muted-foreground">
                      <Icon name="Clock" size={18} className="mr-2 text-primary" />
                      <span className="text-sm">{program.duration}</span>
                    </div>
                    <div className={`text-2xl font-bold px-6 py-2 rounded-full ${program.featured ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}`}>
                      ${program.price.split(' ')[0]}
                    </div>
                  </div>
                  <div className="space-y-2 mb-6">
                    {program.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <Icon name="Check" size={18} className="mr-2 text-green-500" />
                        {feat}
                      </div>
                    ))}
                  </div>
                  <Button className={`w-full rounded-xl ${program.featured ? '' : 'variant-outline'}`} onClick={() => scrollToSection('contact')}>
                    {program.featured ? 'Apply Now' : 'Learn More'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">What Students Say</h2>
            <p className="text-xl text-muted-foreground">Real experiences from real travelers</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="pt-8 pb-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="User" size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.country}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <img 
                src={galleryImages[1]} 
                alt="About us" 
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">About Trip Together</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                For over 15 years, we've been dedicated to creating unforgettable educational experiences for students worldwide. Our mission is to broaden horizons, foster cultural understanding, and inspire lifelong learning.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div>
                  <div className="text-4xl font-bold text-primary mb-1">10,000+</div>
                  <div className="text-sm text-muted-foreground">Happy Students</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-1">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-1">25+</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-1">15</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Gallery</h2>
            <p className="text-xl text-muted-foreground">Moments captured from our trips</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {galleryImages.map((img, index) => (
              <div key={index} className="relative overflow-hidden rounded-2xl shadow-lg group aspect-square">
                <img 
                  src={img} 
                  alt={`Gallery ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
              </div>
            ))}
            <div className="relative overflow-hidden rounded-2xl shadow-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center aspect-square">
              <div className="text-center text-white">
                <Icon name="Plus" size={48} className="mx-auto mb-2" />
                <p className="text-xl font-semibold">More Coming Soon!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="documents" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Upload Documents</h2>
            <p className="text-xl text-muted-foreground">Submit your travel documents securely</p>
          </div>
          <Card className="border-none shadow-lg">
            <CardContent className="pt-8 pb-8 space-y-6">
              <div className="border-2 border-dashed border-primary/30 rounded-2xl p-16 text-center hover:border-primary transition-colors bg-accent/50">
                <Icon name="Upload" size={48} className="mx-auto mb-4 text-primary" />
                <Label htmlFor="file-upload" className="cursor-pointer">
                  <span className="text-lg font-semibold text-primary block">Click to upload</span>
                  <span className="text-muted-foreground block mt-2">or drag and drop</span>
                </Label>
                <Input 
                  id="file-upload" 
                  type="file" 
                  multiple 
                  className="hidden" 
                  onChange={handleFileUpload}
                />
                <p className="text-sm text-muted-foreground mt-4">
                  Passport, visa, medical records (PDF, JPG, PNG up to 10MB)
                </p>
              </div>
              <Card className="bg-accent/50 border-none">
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center">
                    <Icon name="FileText" size={20} className="mr-2 text-primary" />
                    Required Documents:
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                    <li>• Valid passport (6 months validity)</li>
                    <li>• Travel visa (if required)</li>
                    <li>• Medical insurance certificate</li>
                    <li>• Parental consent (if under 18)</li>
                    <li>• Recent passport-size photo</li>
                  </ul>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground">Ready to start your adventure? Contact us!</p>
          </div>
          <Card className="border-none shadow-lg">
            <CardContent className="pt-8 pb-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-base">Full Name</Label>
                  <Input 
                    id="name" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="mt-2 h-12 rounded-xl"
                    required 
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-base">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="mt-2 h-12 rounded-xl"
                    required 
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-base">Phone Number</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="mt-2 h-12 rounded-xl"
                    required 
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-base">Message</Label>
                  <Textarea 
                    id="message" 
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us about your interests and questions..."
                    className="mt-2 rounded-xl"
                    required 
                  />
                </div>
                <Button type="submit" className="w-full h-12 text-lg rounded-xl">
                  <Icon name="Send" size={20} className="mr-2" />
                  Send Message
                </Button>
              </form>
              <div className="mt-8 pt-8 border-t space-y-4">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Icon name="Mail" size={20} className="text-primary" />
                  <span>info@triptogether.com</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Icon name="Phone" size={20} className="text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Icon name="MapPin" size={20} className="text-primary" />
                  <span>123 Education Street, Toronto, Canada</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Plane" size={28} />
                <span className="text-xl font-bold">Trip Together</span>
              </div>
              <p className="text-sm opacity-80">
                Creating unforgettable educational experiences since 2009
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><button onClick={() => scrollToSection('programs')} className="hover:opacity-100">Programs</button></li>
                <li><button onClick={() => scrollToSection('reviews')} className="hover:opacity-100">Reviews</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:opacity-100">About Us</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:opacity-100">Contact</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Programs</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Canada Discovery</li>
                <li>Europe Journey</li>
                <li>Australia Experience</li>
                <li>Custom Programs</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Icon name="Facebook" size={24} className="hover:scale-110 transition-transform cursor-pointer" />
                <Icon name="Instagram" size={24} className="hover:scale-110 transition-transform cursor-pointer" />
                <Icon name="Twitter" size={24} className="hover:scale-110 transition-transform cursor-pointer" />
                <Icon name="Linkedin" size={24} className="hover:scale-110 transition-transform cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm opacity-80">
            <p>&copy; 2024 Trip Together. All rights reserved. | Privacy Policy | Terms & Conditions</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
