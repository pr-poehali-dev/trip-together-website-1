import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

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
    <div className="min-h-screen bg-gradient-to-b from-white to-accent/30">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Plane" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-primary">Trip Together</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'programs', 'reviews', 'about', 'gallery', 'documents', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-primary transition-colors ${
                    activeSection === section ? 'text-primary font-semibold' : 'text-foreground'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Your Gateway to 
                <span className="text-primary"> Educational Adventures</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Join thousands of students exploring the world through meaningful educational experiences
              </p>
              <div className="flex space-x-4">
                <Button size="lg" onClick={() => scrollToSection('programs')} className="hover:scale-105 transition-transform">
                  <Icon name="Compass" size={20} className="mr-2" />
                  Explore Programs
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')}>
                  Get Started
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">10,000+</div>
                  <div className="text-sm text-muted-foreground">Happy Students</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">25+</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">15</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={galleryImages[0]} 
                alt="Students traveling" 
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Programs</h2>
            <p className="text-xl text-muted-foreground">Carefully designed educational journeys</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow border-2 border-primary">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Icon name="MapPin" size={40} className="text-primary" />
                  <span className="text-3xl font-bold text-primary">$3,400</span>
                </div>
                <CardTitle className="text-2xl">Canada Adventure</CardTitle>
                <CardDescription>14-day immersive experience</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Icon name="Check" size={20} className="text-primary mr-2 mt-1" />
                    <span>Visit Toronto, Montreal & Vancouver</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={20} className="text-primary mr-2 mt-1" />
                    <span>University campus tours</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={20} className="text-primary mr-2 mt-1" />
                    <span>Cultural workshops & activities</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={20} className="text-primary mr-2 mt-1" />
                    <span>Accommodation & meals included</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={20} className="text-primary mr-2 mt-1" />
                    <span>24/7 support & supervision</span>
                  </li>
                </ul>
                <Button className="w-full" onClick={() => scrollToSection('contact')}>
                  Apply Now
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Icon name="GraduationCap" size={40} className="text-secondary" />
                  <span className="text-2xl font-bold text-secondary">$2,800</span>
                </div>
                <CardTitle className="text-2xl">Europe Discovery</CardTitle>
                <CardDescription>10-day cultural journey</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Icon name="Check" size={20} className="text-secondary mr-2 mt-1" />
                    <span>London, Paris & Brussels</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={20} className="text-secondary mr-2 mt-1" />
                    <span>Historical landmarks tour</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={20} className="text-secondary mr-2 mt-1" />
                    <span>Language practice sessions</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={20} className="text-secondary mr-2 mt-1" />
                    <span>Museum & gallery visits</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={20} className="text-secondary mr-2 mt-1" />
                    <span>Group activities & excursions</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full" onClick={() => scrollToSection('contact')}>
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Icon name="Palmtree" size={40} className="text-secondary" />
                  <span className="text-2xl font-bold text-secondary">$3,200</span>
                </div>
                <CardTitle className="text-2xl">Australia Experience</CardTitle>
                <CardDescription>12-day adventure program</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Icon name="Check" size={20} className="text-secondary mr-2 mt-1" />
                    <span>Sydney & Melbourne exploration</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={20} className="text-secondary mr-2 mt-1" />
                    <span>Marine biology activities</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={20} className="text-secondary mr-2 mt-1" />
                    <span>Wildlife encounters</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={20} className="text-secondary mr-2 mt-1" />
                    <span>Beach & outdoor activities</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={20} className="text-secondary mr-2 mt-1" />
                    <span>English language immersion</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full" onClick={() => scrollToSection('contact')}>
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-accent/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Students Say</h2>
            <p className="text-xl text-muted-foreground">Real experiences from real travelers</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-lg mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Icon name="User" size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.country}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={galleryImages[1]} 
                alt="About us" 
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">About Trip Together</h2>
              <p className="text-lg text-muted-foreground">
                For over 15 years, we've been dedicated to creating unforgettable educational experiences for students worldwide. Our mission is to broaden horizons, foster cultural understanding, and inspire lifelong learning.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-accent/20 rounded-lg">
                  <Icon name="Users" size={32} className="text-primary mb-2" />
                  <div className="text-2xl font-bold text-primary">10,000+</div>
                  <div className="text-sm text-muted-foreground">Happy Students</div>
                </div>
                <div className="p-4 bg-accent/20 rounded-lg">
                  <Icon name="Award" size={32} className="text-primary mb-2" />
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
                </div>
                <div className="p-4 bg-accent/20 rounded-lg">
                  <Icon name="Globe" size={32} className="text-primary mb-2" />
                  <div className="text-2xl font-bold text-primary">25+</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
                <div className="p-4 bg-accent/20 rounded-lg">
                  <Icon name="Shield" size={32} className="text-primary mb-2" />
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Safe & Secure</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-accent/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Gallery</h2>
            <p className="text-xl text-muted-foreground">Moments captured from our trips</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, index) => (
              <div key={index} className="relative overflow-hidden rounded-xl shadow-lg group">
                <img 
                  src={img} 
                  alt={`Gallery ${index + 1}`} 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
              </div>
            ))}
            <div className="relative overflow-hidden rounded-xl shadow-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center h-64">
              <div className="text-center text-white">
                <Icon name="Plus" size={48} className="mx-auto mb-2" />
                <p className="text-xl font-semibold">More Coming Soon!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="documents" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Upload Documents</h2>
            <p className="text-xl text-muted-foreground">Submit your travel documents securely</p>
          </div>
          <Card>
            <CardContent className="pt-6 space-y-6">
              <div className="border-2 border-dashed border-primary/30 rounded-lg p-12 text-center hover:border-primary transition-colors">
                <Icon name="Upload" size={48} className="mx-auto mb-4 text-primary" />
                <Label htmlFor="file-upload" className="cursor-pointer">
                  <span className="text-lg font-semibold text-primary">Click to upload</span>
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
              <div className="bg-accent/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center">
                  <Icon name="FileText" size={20} className="mr-2 text-primary" />
                  Required Documents:
                </h4>
                <ul className="space-y-1 text-sm text-muted-foreground ml-7">
                  <li>• Valid passport (6 months validity)</li>
                  <li>• Travel visa (if required)</li>
                  <li>• Medical insurance certificate</li>
                  <li>• Parental consent (if under 18)</li>
                  <li>• Recent passport-size photo</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-accent/20">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground">Ready to start your adventure? Contact us!</p>
          </div>
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required 
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required 
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required 
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us about your interests and questions..."
                    required 
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Send Message
                </Button>
              </form>
              <div className="mt-8 pt-8 border-t space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={20} className="text-primary" />
                  <span>info@triptogether.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={20} className="text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
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
                <li>Canada Adventure</li>
                <li>Europe Discovery</li>
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
