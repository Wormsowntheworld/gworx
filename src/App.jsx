import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
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
  Youtube,
  Building2,
  Users,
  Wrench,
  Speaker,
  Home as HomeIcon,
  Award,
  Globe,
  DollarSign,
  Clock,
  Shield,
  Target,
  Briefcase,
  School,
  Utensils,
  Mic2
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

// Brand images
import proelImage from './assets/proel.png'
import adamAudioImage from './assets/adamaudio.png'
import beyerdynamicImage from './assets/beyer.jpeg'
import fostexImage from './assets/fostex.png'
import artImage from './assets/ART.png'

// Installation images
import schoolInstallation from './assets/school.jpg'
import musicRoomInstallation from './assets/music-room-installation.jpg'
import restaurantInstallation from './assets/restaurant-installation.jpg'
import stageInstallation from './assets/stage.jpg'

// Navigation Component
function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home', icon: <HomeIcon className="w-4 h-4" /> },
    { path: '/about', label: 'About', icon: <Users className="w-4 h-4" /> },
    { path: '/custom-products', label: 'Custom Products', icon: <Settings className="w-4 h-4" /> },
    { path: '/vintage', label: 'Vintage', icon: <Guitar className="w-4 h-4" /> },
    { path: '/pro-audio', label: 'Pro Audio', icon: <Speaker className="w-4 h-4" /> },
    { path: '/servicing-partner', label: 'Servicing Partner (B2B)', icon: <Briefcase className="w-4 h-4" /> },
    { path: '/install', label: 'Install', icon: <Wrench className="w-4 h-4" /> },
    { path: '/contact', label: 'Contact Us', icon: <Phone className="w-4 h-4" /> }
  ]

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Gworx SG" className="w-10 h-10 rounded-full" />
            <span className="text-xl font-bold text-foreground">Gworx SG</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary flex items-center space-x-1 ${
                  location.pathname === item.path ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
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
            className="lg:hidden bg-background border-t border-border"
          >
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-2 w-full text-left px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent rounded-md"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

// Home Page Component
function HomePage() {
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
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
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
                Professional guitar repair, amplifier services, pro audio equipment, and sound engineering in Singapore. 
                Led by specialist "Goose" with over 20 years of industry experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/about">
                  <Button 
                    size="lg" 
                    className="bg-amber-600 hover:bg-amber-700 text-white w-full sm:w-auto"
                  >
                    Learn More About Us
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    Contact Us
                  </Button>
                </Link>
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

      {/* Services Overview */}
      <section className="py-20 bg-muted/30">
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
            {[
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
            ].map((service, index) => (
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
              {[
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
                  title: "APPROVAL",
                  description: "We seek your approval before work begins and carry out repairs with passion and highest attention to detail."
                },
                {
                  step: "05",
                  title: "QA AND PICKUP",
                  description: "Total customer satisfaction guarantee. We stand behind our service 100% with on-the-spot adjustments."
                }
              ].map((step, index) => (
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

      {/* Featured Custom Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Custom Work</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Watch our custom builds and modifications in action.
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
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/custom-products">
              <Button size="lg" variant="outline">
                View All Custom Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Vintage & Collectors Section */}
      <section className="py-20 bg-muted/30">
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

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
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
                <CardContent>
                  <ul className="space-y-2">
                    {[
                      "Authentic restoration techniques",
                      "Period-correct components",
                      "Fretwork and neck repairs",
                      "Electronics restoration",
                      "Finish touch-ups and refinishing"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
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
                <CardContent>
                  <ul className="space-y-2">
                    {[
                      "Rare pedal sourcing",
                      "Circuit restoration",
                      "Component replacement",
                      "Custom modifications",
                      "Collector authentication"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
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
                <CardContent>
                  <ul className="space-y-2">
                    {[
                      "Tube amplifier restoration",
                      "Transformer rewinding",
                      "Capacitor replacement",
                      "Vintage tolex restoration",
                      "Speaker reconing"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link to="/vintage">
              <Button size="lg" variant="outline">
                Learn More About Vintage Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
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
              Ready to get your equipment serviced or discuss a project? Get in touch with our expert team today.
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
                        <a href="mailto:info@gworx.sg" className="block text-muted-foreground hover:text-primary transition-colors">
                          info@gworx.sg
                        </a>
                        <a href="mailto:gsonique@gmail.com" className="block text-muted-foreground hover:text-primary transition-colors">
                          gsonique@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

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
                      "Expertise in vintage and modern equipment",
                      "Pro audio equipment and installation services",
                      "B2B partnership opportunities available"
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
    </div>
  )
}

// About Page Component
function AboutPage() {
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
      title: "APPROVAL",
      description: "We seek your approval before work begins and carry out repairs with passion and highest attention to detail."
    },
    {
      step: "05",
      title: "QA AND PICKUP",
      description: "Total customer satisfaction guarantee. We stand behind our service 100% with on-the-spot adjustments."
    }
  ]

  return (
    <div className="pt-16">
      {/* About Hero */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Gworx SG</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Singapore's premier music engineering house, dedicated to providing unparalleled service 
              to musicians from amateurs to professionals.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src={repairImage2} 
                alt="Professional music equipment repair" 
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Expert Craftsmanship & Passion</h2>
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
                <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Our Mission</h3>
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
      <section className="py-20">
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
    </div>
  )
}

// Custom Products Page Component
function CustomProductsPage() {
  const customProducts = [
    {
      id: "rShfcQpgxF4",
      title: "Custom Guitar Build",
      thumbnail: `https://img.youtube.com/vi/rShfcQpgxF4/maxresdefault.jpg`,
      url: "https://www.youtube.com/watch?v=rShfcQpgxF4",
      description: "Complete custom guitar build from concept to completion"
    },
    {
      id: "bcoDhzMkyKE", 
      title: "Custom Amplifier Project",
      thumbnail: `https://img.youtube.com/vi/bcoDhzMkyKE/maxresdefault.jpg`,
      url: "https://www.youtube.com/watch?v=bcoDhzMkyKE",
      description: "Professional amplifier modification and customization"
    },
    {
      id: "1aeIC0ZdoJ0",
      title: "Custom Effects Pedal",
      thumbnail: `https://img.youtube.com/vi/1aeIC0ZdoJ0/maxresdefault.jpg`,
      url: "https://www.youtube.com/watch?v=1aeIC0ZdoJ0",
      description: "Handcrafted effects pedal with unique specifications"
    },
    {
      id: "YsGtEsCuGoQ",
      title: "Custom Equipment Setup",
      thumbnail: `https://img.youtube.com/vi/YsGtEsCuGoQ/maxresdefault.jpg`,
      url: "https://www.youtube.com/watch?v=YsGtEsCuGoQ",
      description: "Professional equipment setup and configuration"
    }
  ]

  const openVideo = (url) => {
    window.open(url, '_blank')
  }

  return (
    <div className="pt-16">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Custom Products Showcase</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Watch our custom builds and modifications in action. Each project showcases our expertise 
              in creating unique solutions for musicians.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {customProducts.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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
                      <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-10 h-10 text-white ml-1" fill="white" />
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between text-xl">
                      {video.title}
                      <Youtube className="w-6 h-6 text-red-600" />
                    </CardTitle>
                    <CardDescription className="text-base">
                      {video.description}
                    </CardDescription>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <ExternalLink className="w-4 h-4" />
                      <span>Click to watch on YouTube</span>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Card className="p-8 bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800">
              <h2 className="text-2xl font-bold text-foreground mb-4">Need a Custom Solution?</h2>
              <p className="text-muted-foreground mb-6">
                Every musician has unique needs. Let us create something special for you.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                  Discuss Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

// Vintage Page Component
function VintagePage() {
  return (
    <div className="pt-16">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Vintage & Collectors</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specializing in vintage equipment restoration, rare procurement, and collector services 
              for discerning musicians and enthusiasts.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
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
                <CardContent>
                  <ul className="space-y-2">
                    {[
                      "Authentic restoration techniques",
                      "Period-correct components",
                      "Fretwork and neck repairs",
                      "Electronics restoration",
                      "Finish touch-ups and refinishing"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
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
                <CardContent>
                  <ul className="space-y-2">
                    {[
                      "Rare pedal sourcing",
                      "Circuit restoration",
                      "Component replacement",
                      "Custom modifications",
                      "Collector authentication"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
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
                <CardContent>
                  <ul className="space-y-2">
                    {[
                      "Tube amplifier restoration",
                      "Transformer rewinding",
                      "Capacitor replacement",
                      "Vintage tolex restoration",
                      "Speaker reconing"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-muted/30 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-center text-foreground mb-8">Why Choose Us for Vintage Equipment?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Award className="w-8 h-8" />,
                  title: "Expertise",
                  description: "20+ years of experience with vintage equipment"
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Authenticity",
                  description: "Period-correct restoration techniques and components"
                },
                {
                  icon: <Star className="w-8 h-8" />,
                  title: "Quality",
                  description: "Meticulous attention to detail and craftsmanship"
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center text-amber-600 dark:text-amber-400 mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

// Pro Audio Page Component
function ProAudioPage() {
  const brands = [
    {
      name: "Proel / Axiom",
      description: "Professional sound systems and audio equipment",
      website: "https://soundsystems.proel.com/en/",
      axiomWebsite: "https://www.axiomproaudio.com/",
      image: proelImage
    },
    {
      name: "Adam Audio",
      description: "Premium studio monitors and professional speakers",
      website: "https://www.adam-audio.com/en/",
      image: adamAudioImage
    },
    {
      name: "Beyerdynamic",
      description: "High-quality headphones and microphones",
      website: "https://global.beyerdynamic.com/",
      image: beyerdynamicImage
    },
    {
      name: "Fostex",
      description: "Professional audio equipment and studio monitors",
      website: "https://www.fostex.jp/en/",
      image: fostexImage
    },
    {
      name: "ART",
      description: "Audio processing and recording equipment",
      website: "https://artproaudio.com/",
      image: artImage
    }
  ]

  return (
    <div className="pt-16">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Pro Audio Equipment</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We represent premium pro audio brands, providing professional equipment and solutions 
              for studios, venues, and audio professionals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Brands We Represent</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {brands.map((brand, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-2 hover:border-amber-200 dark:hover:border-amber-800">
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img 
                        src={brand.image} 
                        alt={`${brand.name} equipment`} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{brand.name}</CardTitle>
                      <CardDescription>{brand.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <a 
                          href={brand.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 text-amber-600 hover:text-amber-700 transition-colors"
                        >
                          <Globe className="w-4 h-4" />
                          <span className="text-sm">Visit Website</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                        {brand.axiomWebsite && (
                          <a 
                            href={brand.axiomWebsite} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 text-amber-600 hover:text-amber-700 transition-colors block"
                          >
                            <Globe className="w-4 h-4" />
                            <span className="text-sm">Axiom Pro Audio</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12"
          >
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Professional Solutions</h3>
              <div className="space-y-4">
                {[
                  "Studio monitor systems",
                  "Professional headphones and microphones",
                  "Audio processing equipment",
                  "Sound system installations",
                  "Technical support and consultation",
                  "Equipment demonstrations"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800">
              <h3 className="text-2xl font-bold text-foreground mb-6">Why Choose Our Pro Audio Solutions?</h3>
              <div className="space-y-4">
                {[
                  "Authorized dealer for premium brands",
                  "Expert technical knowledge and support",
                  "Professional installation services",
                  "Competitive pricing for professionals",
                  "After-sales service and warranty support",
                  "Custom solutions for unique requirements"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-amber-600 flex-shrink-0" />
                    <span className="text-amber-700 dark:text-amber-300">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Need Pro Audio Equipment?</h2>
              <p className="text-muted-foreground mb-6">
                Contact us for professional audio solutions, equipment demonstrations, and expert consultation.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                  Get Professional Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

// Servicing Partner Page Component
function ServicingPartnerPage() {
  return (
    <div className="pt-16">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Servicing Partner (B2B)</h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Partner with us to establish your brand presence in Singapore. We offer comprehensive 
              servicing solutions for pro audio brands looking to expand into the Singapore market.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <Card className="p-8 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border-amber-200 dark:border-amber-800">
              <h2 className="text-3xl font-bold text-foreground mb-6">Partnership Opportunity</h2>
              <p className="text-lg text-muted-foreground mb-6">
                If you are a brand owner or master representative with Pro Audio and Warranty / After Sales Services needs in Singapore, 
                you can approach us to onboard in Singapore for your demo experience centre as well as establishing a trusted servicing 
                centre operator in Singapore.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                  <span className="text-foreground font-medium">Demo Experience Centre Setup</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                  <span className="text-foreground font-medium">Trusted Servicing Centre Operations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                  <span className="text-foreground font-medium">Local Market Expertise</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                  <span className="text-foreground font-medium">Comprehensive After-Sales Support</span>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Partnership Model</h2>
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 hover:shadow-lg transition-shadow duration-300 border-2 border-amber-200 dark:border-amber-800">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center text-amber-600 dark:text-amber-400 mb-6">
                      <Briefcase className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Investment Structure</h3>
                    <div className="bg-amber-50 dark:bg-amber-950/30 p-6 rounded-lg border border-amber-200 dark:border-amber-800 mb-6">
                      <div className="flex items-center space-x-2 mb-2">
                        <Clock className="w-5 h-5 text-amber-600" />
                        <span className="font-semibold text-amber-800 dark:text-amber-200">Annual Fee</span>
                      </div>
                      <p className="text-sm text-amber-700 dark:text-amber-300 mb-3">
                        Paid upfront for local handling services
                      </p>
                      <div className="flex items-center space-x-2">
                        <Wrench className="w-5 h-5 text-amber-600" />
                        <span className="font-semibold text-amber-800 dark:text-amber-200">Cost per repair quoted separately</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center text-amber-600 dark:text-amber-400 mb-6">
                      <Shield className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Services Included</h3>
                    <ul className="space-y-3">
                      {[
                        "Customer Service",
                        "Warranty support", 
                        "After sales services",
                        "Local handling",
                        "Local Sales Agent for Products and Spare parts"
                      ].map((service, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                          <span className="text-muted-foreground">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Interested in Partnership?</h2>
              <p className="text-muted-foreground mb-6">
                Contact us to discuss partnership opportunities and establish your brand presence in Singapore.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                  Contact Us for Partnership
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

// Install Page Component
function InstallPage() {
  const installationTypes = [
    {
      title: "Schools",
      description: "Educational facility sound systems",
      icon: <School className="w-8 h-8" />,
      features: ["Classroom audio systems", "Assembly hall installations", "PA systems", "Educational technology integration"]
    },
    {
      title: "Music Rooms",
      description: "Specialized music education spaces",
      icon: <Music className="w-8 h-8" />,
      features: ["Studio monitors", "Recording equipment", "Acoustic treatment", "Practice room systems"]
    },
    {
      title: "Restaurant Ambience",
      description: "Background music and ambience systems",
      icon: <Utensils className="w-8 h-8" />,
      features: ["Background music systems", "Zone control", "Ambient sound design", "Wireless control systems"]
    },
    {
      title: "Stage / Performance",
      description: "Live performance sound systems",
      icon: <Mic2 className="w-8 h-8" />,
      features: ["Stage monitoring", "Front of house systems", "Wireless microphone systems", "Live sound mixing"]
    }
  ]

  const expertiseAreas = [
    {
      title: "Sound Concepts",
      description: "Comprehensive audio design and planning",
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "Sound System Installation",
      description: "Professional installation and setup",
      icon: <Wrench className="w-8 h-8" />
    },
    {
      title: "Acoustic Expert Design",
      description: "Acoustic treatment and optimization",
      icon: <Volume2 className="w-8 h-8" />
    }
  ]

  return (
    <div className="pt-16">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Professional Sound Installation</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert sound system installation services for various venues and applications. 
              From concept to completion, we deliver professional audio solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Expertise</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {expertiseAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full p-8 text-center hover:shadow-lg transition-shadow duration-300 border-2 hover:border-amber-200 dark:hover:border-amber-800">
                    <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center text-amber-600 dark:text-amber-400 mx-auto mb-6">
                      {area.icon}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">{area.title}</h3>
                    <p className="text-muted-foreground">{area.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Installation Examples</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Schools",
                  description: "Educational facility sound systems",
                  image: schoolInstallation,
                  features: ["Classroom audio systems", "Assembly hall installations", "PA systems", "Educational technology integration"]
                },
                {
                  title: "Music Rooms",
                  description: "Specialized music education spaces",
                  image: musicRoomInstallation,
                  features: ["Studio monitors", "Recording equipment", "Acoustic treatment", "Practice room systems"]
                },
                {
                  title: "Restaurant Ambience",
                  description: "Background music and ambience systems",
                  image: restaurantInstallation,
                  features: ["Background music systems", "Zone control", "Ambient sound design", "Wireless control systems"]
                },
                {
                  title: "Stage / Performance",
                  description: "Live performance sound systems",
                  image: stageInstallation,
                  features: ["Stage monitoring", "Front of house systems", "Wireless microphone systems", "Live sound mixing"]
                }
              ].map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-2 hover:border-amber-200 dark:hover:border-amber-800">
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img 
                        src={type.image} 
                        alt={`${type.title} installation`} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{type.title}</CardTitle>
                      <CardDescription>{type.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {type.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-3">
                            <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Card className="p-8 bg-muted/30">
              <h2 className="text-3xl font-bold text-foreground mb-8">Our Installation Process</h2>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  {
                    step: "01",
                    title: "Consultation",
                    description: "Site assessment and requirements analysis"
                  },
                  {
                    step: "02",
                    title: "Design",
                    description: "Custom system design and acoustic planning"
                  },
                  {
                    step: "03",
                    title: "Installation",
                    description: "Professional installation and setup"
                  },
                  {
                    step: "04",
                    title: "Testing",
                    description: "System testing and optimization"
                  }
                ].map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {step.step}
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Need Professional Sound Installation?</h2>
              <p className="text-muted-foreground mb-6">
                Contact us for a consultation and let us design the perfect sound solution for your space.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                  Get Installation Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

// Contact Page Component
function ContactPage() {
  return (
    <div className="pt-16">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Contact Us</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to get your equipment serviced or discuss a project? Get in touch with our expert team today.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">New Location</h3>
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
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
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
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <div className="space-y-1">
                        <a href="mailto:info@gworx.sg" className="block text-muted-foreground hover:text-primary transition-colors">
                          info@gworx.sg
                        </a>
                        <a href="mailto:gsonique@gmail.com" className="block text-muted-foreground hover:text-primary transition-colors">
                          gsonique@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Star className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Customer Reviews</h3>
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
                  <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Service Guarantee</h3>
                  <p className="text-amber-700 dark:text-amber-300 text-sm">
                    We stand behind our service 100% and guarantee total customer satisfaction. 
                    Any adjustments can be done on-the-spot to get it just right for you.
                  </p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <img 
                  src={photo4} 
                  alt="Professional guitar repair and setup" 
                  className="rounded-lg shadow-lg w-full object-cover h-80"
                />
                
                <Card className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">Why Choose Gworx SG?</h3>
                  <div className="space-y-3">
                    {[
                      "20+ years of industry experience with specialist 'Goose'",
                      "All technicians are qualified musicians",
                      "100% customer satisfaction guarantee",
                      "Fair pricing with quality genuine components",
                      "Pickup and delivery service available",
                      "Expertise in vintage and modern equipment",
                      "Pro audio equipment and installation services",
                      "B2B partnership opportunities available"
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
    </div>
  )
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="Gworx SG" className="w-8 h-8 rounded-full" />
              <span className="text-lg font-bold text-foreground">Gworx SG</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Singapore's premier music engineering house specializing in guitar repair, 
              amplifier services, pro audio equipment, and sound engineering solutions.
            </p>
            <p className="text-sm text-muted-foreground">
              Led by specialist "Goose" with over 20 years of industry experience.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">Guitar & Amp Repair</Link></li>
              <li><Link to="/custom-products" className="hover:text-primary transition-colors">Custom Products</Link></li>
              <li><Link to="/vintage" className="hover:text-primary transition-colors">Vintage Restoration</Link></li>
              <li><Link to="/pro-audio" className="hover:text-primary transition-colors">Pro Audio Equipment</Link></li>
              <li><Link to="/install" className="hover:text-primary transition-colors">Sound Installation</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>56 Kallang Pudding Road</li>
              <li>Singapore</li>
              <li><a href="tel:+6581602111" className="hover:text-primary transition-colors">+65 8160 2111</a></li>
              <li><a href="mailto:hello@gworx.sg" className="hover:text-primary transition-colors">hello@gworx.sg</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2025 Gworx SG. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Premier Music Engineering House in Singapore
          </p>
        </div>
      </div>
    </footer>
  )
}

// Main App Component
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/custom-products" element={<CustomProductsPage />} />
          <Route path="/vintage" element={<VintagePage />} />
          <Route path="/pro-audio" element={<ProAudioPage />} />
          <Route path="/servicing-partner" element={<ServicingPartnerPage />} />
          <Route path="/install" element={<InstallPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
