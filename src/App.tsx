/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Instagram, 
  Facebook, 
  MessageCircle, 
  Menu, 
  X, 
  ChevronRight, 
  Star, 
  CheckCircle2, 
  Sparkles,
  Scissors,
  Flower2,
  Heart,
  User,
  Camera,
  Send
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const SERVICES = [
  {
    id: 1,
    title: "Facial & Skin Treatments",
    description: "Rejuvenate your skin with our premium facials and specialized skin care treatments.",
    icon: <Sparkles className="w-8 h-8 text-gold" />,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Bridal Makeup",
    description: "Look breathtaking on your special day with our professional bridal makeup services.",
    icon: <Heart className="w-8 h-8 text-gold" />,
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Haircut & Styling",
    description: "From trendy cuts to elegant styling, our experts give you the perfect look.",
    icon: <Scissors className="w-8 h-8 text-gold" />,
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "Party Makeup",
    description: "Glam up for any occasion with our stunning party makeup looks.",
    icon: <User className="w-8 h-8 text-gold" />,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    title: "Hair Spa & Treatments",
    description: "Nourish and strengthen your hair with our deep conditioning spa treatments.",
    icon: <Flower2 className="w-8 h-8 text-gold" />,
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    title: "Manicure & Pedicure",
    description: "Pamper your hands and feet with our relaxing mani-pedi sessions.",
    icon: <Sparkles className="w-8 h-8 text-gold" />,
    image: "https://images.unsplash.com/photo-1610992015732-2449b0c26670?auto=format&fit=crop&q=80&w=800"
  }
];

const GALLERY = [
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800"
];

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    text: "Geet's Salon is my go-to place for facials. The staff is so professional and the environment is very hygienic. Highly recommended!",
    rating: 5
  },
  {
    name: "Anjali Gupta",
    text: "I got my bridal makeup done here and I couldn't be happier. They understood exactly what I wanted and made me look like a dream.",
    rating: 5
  },
  {
    name: "Sneha Patil",
    text: "Best hair spa in Chembur! My hair feels so soft and healthy now. Great service and very affordable pricing.",
    rating: 5
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className={`text-2xl font-serif font-bold ${scrolled ? 'text-deep-pink' : 'text-white'}`}>
                Geet's <span className="text-gold">Salon</span>
              </span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className={`font-medium transition-colors hover:text-gold ${scrolled ? 'text-gray-700' : 'text-white'}`}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="tel:+919920060651" 
                className="bg-gold text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all"
              >
                Call Now
              </a>
            </div>

            {/* Mobile Nav Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`${scrolled ? 'text-gray-700' : 'text-white'}`}
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-pink-100 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2 text-gray-700 font-medium hover:bg-pink-50 rounded-lg"
                  >
                    {link.name}
                  </a>
                ))}
                <a 
                  href="tel:+919920060651"
                  className="block w-full text-center bg-gold text-white px-6 py-3 rounded-lg font-semibold"
                >
                  Call Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1920" 
            alt="Beauty Salon" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4">
              Geet's <span className="text-gold">Beauty Salon</span>
            </h1>
            <p className="text-xl md:text-2xl text-pink-50 font-light mb-8 italic">
              “Where Beauty Meets Confidence”
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#contact" 
                className="w-full sm:w-auto bg-gold text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform shadow-lg"
              >
                Book Appointment
              </a>
              <a 
                href="tel:+919920060651" 
                className="w-full sm:w-auto bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/30 transition-all"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800" 
                  alt="About Geet's Salon" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gold p-8 rounded-2xl shadow-xl hidden lg:block">
                <p className="text-white font-serif text-2xl font-bold">10+ Years</p>
                <p className="text-white/80 text-sm">Of Excellence</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gold font-semibold tracking-widest uppercase text-sm mb-4 block">About Us</span>
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">Experience the Art of <span className="text-deep-pink">Beauty</span></h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Welcome to Geet's Beauty Salon, your ultimate destination for premium ladies beauty services in Chembur. Our mission is to enhance your natural beauty and boost your confidence through personalized care.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                With a team of highly experienced beauticians and the use of premium quality beauty products, we ensure every client receives a luxurious and satisfying experience. We maintain the highest standards of hygiene and customer care.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-gold" />
                  <span className="font-medium">Expert Stylists</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-gold" />
                  <span className="font-medium">Premium Products</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-gold" />
                  <span className="font-medium">Hygienic Space</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-gold" />
                  <span className="font-medium">Personalized Care</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-soft-pink/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-semibold tracking-widest uppercase text-sm mb-4 block">Our Services</span>
            <h2 className="text-4xl font-serif font-bold text-gray-900">Premium Beauty <span className="text-deep-pink">Treatments</span></h2>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden service-card-hover group"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <a href="#contact" className="text-gold font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Book Now <ChevronRight size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900">Why Choose <span className="text-deep-pink">Geet's Salon?</span></h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <User className="w-10 h-10" />, title: "Experienced Beauticians", desc: "Highly skilled professionals with years of expertise." },
              { icon: <Sparkles className="w-10 h-10" />, title: "Premium Products", desc: "We use only the best international beauty brands." },
              { icon: <CheckCircle2 className="w-10 h-10" />, title: "Hygienic Environment", desc: "Strict sanitization protocols for your safety." },
              { icon: <Heart className="w-10 h-10" />, title: "Affordable Pricing", desc: "Luxury beauty services that fit your budget." }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-soft-pink/20 hover:bg-soft-pink/40 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white text-gold mb-6 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-soft-pink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold font-semibold tracking-widest uppercase text-sm mb-4 block">Our Work</span>
            <h2 className="text-4xl font-serif font-bold text-gray-900">Beauty in <span className="text-deep-pink">Focus</span></h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {GALLERY.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
              >
                <img 
                  src={img} 
                  alt={`Gallery ${index + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-deep-pink/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Camera className="text-white w-8 h-8" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900">What Our <span className="text-deep-pink">Clients Say</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-8 rounded-2xl bg-white border border-pink-100 shadow-lg relative"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-soft-pink flex items-center justify-center text-deep-pink font-bold">
                    {review.name[0]}
                  </div>
                  <span className="font-bold text-gray-900">{review.name}</span>
                </div>
                <div className="absolute top-8 right-8 text-pink-100">
                  <MessageCircle size={48} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-soft-pink/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-8">Get in <span className="text-deep-pink">Touch</span></h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-gold shadow-sm shrink-0">
                    <MapPin />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Our Location</h3>
                    <p className="text-gray-600">Narayan Gajanan Acharya Marg, Chembur West, blg, Chembur, Mumbai, Maharashtra 400071</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-gold shadow-sm shrink-0">
                    <Phone />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Call Us</h3>
                    <a href="tel:+919920060651" className="text-gray-600 hover:text-gold transition-colors">+91 9920060651</a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-gold shadow-sm shrink-0">
                    <Clock />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Working Hours</h3>
                    <p className="text-gray-600">Mon - Sat: 10:00 AM - 8:00 PM</p>
                    <p className="text-gray-600">Sunday: 10:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-12 rounded-2xl overflow-hidden shadow-xl h-64">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.212457497127!2d72.8981254752047!3d19.05441598214532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c62f34455555%3A0x8b5b5b5b5b5b5b5b!2sChembur%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1710750000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl shadow-2xl"
            >
              <h3 className="text-2xl font-serif font-bold mb-6">Send us a Message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button className="w-full bg-deep-pink text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all shadow-lg shadow-pink-100">
                  Send Message <Send size={20} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <span className="text-2xl font-serif font-bold text-white mb-6 block">
                Geet's <span className="text-gold">Salon</span>
              </span>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Your premier destination for luxury beauty treatments in Chembur. We believe in enhancing your natural beauty with professional care.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="https://wa.me/919920060651" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors">
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-gold transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-gold transition-colors">Services</a></li>
                <li><a href="#gallery" className="hover:text-gold transition-colors">Gallery</a></li>
                <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Our Services</h4>
              <ul className="space-y-4 text-gray-400">
                <li>Facial & Skin Care</li>
                <li>Bridal Makeup</li>
                <li>Hair Styling</li>
                <li>Hair Spa</li>
                <li>Manicure & Pedicure</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Contact Info</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="text-gold shrink-0" />
                  <span>Chembur West, Mumbai, Maharashtra 400071</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={20} className="text-gold shrink-0" />
                  <a href="tel:+919920060651">+91 9920060651</a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock size={20} className="text-gold shrink-0" />
                  <span>10:00 AM - 8:00 PM</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Geet's Beauty Salon. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919920060651" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}
