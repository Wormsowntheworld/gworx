import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Menu, 
  X, 
  Guitar, 
  Volume2, 
  Settings, 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle,
  ArrowRight,
  Music,
  Headphones,
  Mic,
  Zap,
  ExternalLink,
  Play,
  Youtube
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'

// Import images
import logo from './assets/logo.jpg'
import repairImage1 from './assets/search_images/oHlr8aD0psaf.jpg'
import repairImage2 from './assets/search_images/ouRUy3ca9tgI.jpg'
import studioImage1 from './assets/search_images/L17VETwQ4Vf5.jpg'
import vintageGuitars from './assets/search_images/XZCiXAintxHL.jpg'
import vintagePedals from './assets/search_images/p5cVTlc3zM0C.jpg'
import ampRepair from './assets/search_images/4i1465gQEu8X.jpg'

// New photos
import photo1 from './assets/Photo1.jpg'
import photo2 from './assets/photo2.jpg'
import photo4 from './assets/photo4.jpg'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'custom-products', 'vintage', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    {
      icon: <Guitar className="w-8 h-8" />,
      title: "Guitar Services",
      description: "Complete guitar repair, setup, re-fretting, wiring, and restoration services",
      features: ["Guitar Repairs", "Setups & Adjustments", "Re-fretting", "Electronics & Wiring", "Restoration"]
    },
    {
      icon: <Volume2 className="w-8 h-8" />,
      title: "Amplifier Services", 
      description: "Tube amplifier repair, custom tolex, cabs, and professional modifications",
      features: ["Tube Amp Repair", "Custom Tolex", "Cabinet Work", "Modifications", "Maintenance"]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Equipment Solutions",
      description: "Pedal board setups, rare equipment procurement, and custom solutions",
      features: ["Pedal Board Setup", "Rare Procurement", "Custom Solutions", "Equipment Tuning", "Overhauls"]
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Sound Engineering",
      description: "Professional sound engineering studio and acoustic design services",
      features: ["Studio Services", "Sound Stage Design", "Event Audio", "Venue Acoustics", "Consultation"]
    }
  ]

  const processSteps = [
    {
      step: "01",
      title: "LISTENING",
      description: "We listen to your problem and create a job number for accurate communication and reference."
    },
    {
      step: "02", 
      title: "DIAGNOSE",
      description: "We diagnose and check what needs repair. Small consultation fee allows accurate assessment of your needs and budget."
    },
    {
      step: "03",
      title: "ESTIMATE / QUOTE", 
      description: "We provide fair pricing based on quality genuine original components."
    },
    {
      step: "04",
      title: "QA AND PICKUP",
      description: "Total customer satisfaction guarantee. We stand behind our service 100% with on-the-spot adjustments."
    },
    {
      step: "05",
      title: "APPROVAL",
      description: "We seek your approval before work begins and carry out repairs with passion and highest attention to detail."
    }
  ]

  const customProducts = [
    {
      id: "rShfcQpgxF4",
      title: "Custom Guitar Build",
      thumbnail: `https://img.youtube.com/vi/rShfcQpgxF4/maxresdefault.jpg`,
      url: "https://www.youtube.com/watch?v=rShfcQpgxF4"
    },
    {
      id: "bcoDhzMkyKE", 
      title: "Custom Amplifier Project",
      thumbnail: `https://img.youtube.com/vi/bcoDhzMkyKE/maxresdefault.jpg`,
      url: "https://www.youtube.com/watch?v=bcoDhzMkyKE"
    },
    {
      id: "1aeIC0ZdoJ0",
      title: "Custom Effects Pedal",
      thumbnail: `https://img.youtube.com/vi/1aeIC0ZdoJ0/maxresdefault.jpg`,
      url: "https://www.youtube.com/watch?v=1aeIC0ZdoJ0"
    },
    {
      id: "YsGtEsCuGoQ",
      title: "Custom Equipment Setup",
      thumbnail: `https://img.youtube.com/vi/YsGtEsCuGoQ/maxresdefault.jpg`,
      url: "https://www.youtube.com/watch?v=YsGtEsCuGoQ"
    }
  ]

  const openVideo = (url) => {
    window.open(url, '_blank')
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Gworx SG" className="w-10 h-10 rounded-full" />
              <span className="text-xl font-bold text-foreground">Gworx SG</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Gworx' },
                { id: 'services', label: 'Services' },
                { id: 'custom-products', label: 'Custom Products' },
                { id: 'vintage', label: 'Vintage/Collectors' },
                { id: 'contact', label: 'Contact Us' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background border-t border-border"
            >
              <div className="px-4 py-2 space-y-1">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'about', label: 'About Gworx' },
                  { id: 'services', label: 'Services' },
                  { id: 'custom-products', label: 'Custom Products' },
                  { id: 'vintage', label: 'Vintage/Collectors' },
                  { id: 'contact', label: 'Contact Us' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent rounded-md"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-950/20 dark:to-orange-950/20" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmNTllMGIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-4 bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                <Star className="w-4 h-4 mr-1" />
                Premier Music Engineering House
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Expert Music Equipment
                <span className="text-amber-600 dark:text-amber-400"> Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Professional guitar repair, amplifier services, and sound engineering in Singapore. 
                Led by specialist "Goose" with over 20 years of industry experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection('services')}
                  className="bg-amber-600 hover:bg-amber-700 text-white"
                >
                  Explore Our Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => scrollToSection('contact')}
                >
                  Contact Us
                </Button>
              </div>
              
              {/* Relocation Notice */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-8 p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg"
              >
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-amber-600" />
                  <span className="font-semibold text-amber-800 dark:text-amber-200">New Location Update</span>
                </div>
                <p className="text-sm text-amber-700 dark:text-amber-300 mt-1">
                  We've relocated in Mid 2025 to our new address: <strong>56 Kallang Pudding Road, Singapore</strong>
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src={photo1} 
                  alt="Guitar repair workshop" 
                  className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 object-cover h-64"
                />
                <img 
                  src={photo2} 
                  alt="Sound engineering studio" 
                  className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mt-8 object-cover h-64"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-amber-600 text-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">20+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Gworx SG</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Singapore's premier music engineering house, dedicated to providing unparalleled service 
              to musicians from amateurs to professionals.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src={repairImage2} 
                alt="Professional music equipment repair" 
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">Expert Craftsmanship & Passion</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We are a full service repair shop with highly trained technicians that take pride and passion 
                into every piece of gear that comes through our doors. Led by specialist "Goose" with over 20 years 
                in the industry, we bring unmatched expertise to every project.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "All team members are musicians and qualified technicians",
                  "Experienced in handling everything from vintage to modern equipment", 
                  "We love to be challenged on the technical details",
                  "Passionate about delivering the best for musicians"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-amber-50 dark:bg-amber-950/30 p-6 rounded-lg border border-amber-200 dark:border-amber-800">
                <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Our Mission</h4>
                <p className="text-amber-700 dark:text-amber-300 text-sm">
                  "We want musicians to be equipped with the best quality products supported by 
                  unparalleled service and fair pricing. We do only the best for musicians."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From guitar repairs to sound engineering, we provide comprehensive solutions 
              for all your music equipment needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-2 hover:border-amber-200 dark:hover:border-amber-800">
                  <CardHeader>
                    <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center text-amber-600 dark:text-amber-400 mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Service Process */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-muted/30 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-center text-foreground mb-12">Our Service Process</h3>
            <div className="grid md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Custom Products Section */}
      <section id="custom-products" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Custom Products Showcase</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Watch our custom builds and modifications in action. Click on any video to see our craftsmanship.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {customProducts.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="cursor-pointer hover:shadow-lg transition-all duration-300 border-2 hover:border-amber-200 dark:hover:border-amber-800 group"
                  onClick={() => openVideo(video.url)}
                >
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <img 
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`
                      }}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 text-white ml-1" fill="white" />
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between text-lg">
                      {video.title}
                      <Youtube className="w-5 h-5 text-red-600" />
                    </CardTitle>
                    <CardDescription className="flex items-center space-x-2">
                      <ExternalLink className="w-4 h-4" />
                      <span>Click to watch on YouTube</span>
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vintage/Collectors Section */}
      <section id="vintage" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Vintage & Collectors</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specializing in vintage equipment restoration, rare procurement, and collector services 
              for discerning musicians and enthusiasts.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={vintageGuitars} 
                    alt="Vintage guitar collection" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Guitar className="w-5 h-5 text-amber-600" />
                    <span>Vintage Guitars</span>
                  </CardTitle>
                  <CardDescription>
                    Restoration and maintenance of vintage and classic guitars with authentic parts and techniques.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={vintagePedals} 
                    alt="Vintage pedals collection" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Zap className="w-5 h-5 text-amber-600" />
                    <span>Vintage Pedals</span>
                  </CardTitle>
                  <CardDescription>
                    Rare pedal procurement, restoration, and custom modifications for collectors and professionals.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={ampRepair} 
                    alt="Classic amplifier repair" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Volume2 className="w-5 h-5 text-amber-600" />
                    <span>Classic Amplifiers</span>
                  </CardTitle>
                  <CardDescription>
                    Expert restoration of vintage tube amplifiers with period-correct components and techniques.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Contact Us</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to get your equipment serviced? Get in touch with our expert team today.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">New Location</h4>
                      <p className="text-muted-foreground">56 Kallang Pudding Road</p>
                      <p className="text-muted-foreground">Singapore</p>
                      <Badge className="mt-2 bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                        Relocated Mid 2025
                      </Badge>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                      <a href="tel:+6581602111" className="text-muted-foreground hover:text-primary transition-colors">
                        +65 8160 2111
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email</h4>
                      <div className="space-y-1">
                        <a href="mailto:hello@gworx.sg" className="block text-muted-foreground hover:text-primary transition-colors">
                          hello@gworx.sg
                        </a>
                        <a href="mailto:gsonique@gmail.com" className="block text-muted-foreground hover:text-primary transition-colors">
                          gsonique@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Google Reviews Section */}
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Star className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Customer Reviews</h4>
                      <a 
                        href="https://maps.app.goo.gl/XJkLfrMu8WF4Jn1U6" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <span>GworX Google Reviews</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        See what our customers say about our services
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
                  <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Service Guarantee</h4>
                  <p className="text-amber-700 dark:text-amber-300 text-sm">
                    We stand behind our service 100% and guarantee total customer satisfaction. 
                    Any adjustments can be done on-the-spot to get it just right for you.
                  </p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <img 
                  src={photo4} 
                  alt="Professional guitar repair and setup" 
                  className="rounded-lg shadow-lg w-full object-cover h-80"
                />
                
                <Card className="p-6">
                  <h4 className="font-semibold text-foreground mb-4">Why Choose Gworx SG?</h4>
                  <div className="space-y-3">
                    {[
                      "20+ years of industry experience with specialist 'Goose'",
                      "All technicians are qualified musicians",
                      "100% customer satisfaction guarantee",
                      "Fair pricing with quality genuine components",
                      "Pickup and delivery service available",
                      "Expertise in vintage and modern equipment"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img src={logo} alt="Gworx SG" className="w-8 h-8 rounded-full" />
              <span className="text-lg font-bold text-foreground">Gworx SG</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground mb-1">
                Premier Music Engineering House in Singapore
              </p>
              <p className="text-sm text-muted-foreground">
                © 2025 Gworx SG. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

