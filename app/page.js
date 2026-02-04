"use client";
import { useState, useEffect, useCallback } from "react";
import {
  Shield,
  Zap,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Search,
  Briefcase,
  Target,
  Clock,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Star,
  Award,
  Linkedin,
  Twitter,
  Facebook,
  Github,
} from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [email, setEmail] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [direction, setDirection] = useState(0);

  const heroImages = [
    { src: "/image1.jpg", alt: "Professional networking in modern office" },
    { src: "/image2.jpg", alt: "Job interview with diverse team" },
    { src: "/image3.jpg", alt: "Team collaboration and innovation" },
    { src: "/image4.jpg", alt: "Career growth and development" },
    { src: "/image5.jpg", alt: "Remote work and digital nomad lifestyle" },
  ];

  const nextImage = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
  }, [heroImages.length]);

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length,
    );
  };

  const goToImage = (index) => {
    setCurrentImage(index);
  };

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, nextImage]);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setFormSubmitted(true);
      setEmail("");
      setTimeout(() => setFormSubmitted(false), 3000);
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 1.1,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 },
      },
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.3 },
    }),
  };

  const handleNext = () => {
    setDirection(1);
    nextImage();
  };

  const handlePrev = () => {
    setDirection(-1);
    prevImage();
  };

  const navLinks = [
    { name: "Home", href: "#home", icon: "🏠" },
    { name: "Features", href: "#features", icon: "⚡" },

    { name: "Why Us", href: "#whychoose", icon: "⭐" },
    { name: "Testimonials", href: "#testimonials", icon: "💬" },
    { name: "Pricing", href: "#pricing", icon: "💰" },
    { name: "Contact", href: "#contact", icon: "📞" },
  ];

  const features = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "Smart Search",
      description: "AI-powered job matching with 95% accuracy rate",
      color: "from-blue-500 to-cyan-500",
      stats: "95% Match Rate",
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Aggregate Platform",
      description: "Jobs from LinkedIn, Indeed, Glassdoor & 10+ more platforms",
      color: "from-purple-500 to-pink-500",
      stats: "50K+ Jobs",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Career Path",
      description: "Personalized career roadmap based on your skills",
      color: "from-orange-500 to-red-500",
      stats: "200+ Career Paths",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Real-time Updates",
      description: "Instant notifications for new opportunities",
      color: "from-green-500 to-emerald-500",
      stats: "24/7 Updates",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Verified Listings",
      description: "All jobs verified to prevent scams & fraud",
      color: "from-indigo-500 to-blue-500",
      stats: "100% Verified",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Quick Apply",
      description: "One-click application to multiple jobs",
      color: "from-yellow-500 to-amber-500",
      stats: "70% Faster",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer",
      company: "TechCorp",
      content:
        "JobApp helped me land my dream job at a FAANG company in 3 weeks. The AI matching was spot on!",
      avatar: "SC",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "Product Manager",
      company: "StartupXYZ",
      content:
        "As someone switching careers, the personalized roadmap was invaluable. Found the perfect role!",
      avatar: "MR",
      rating: 5,
    },
    {
      name: "Jessica Williams",
      role: "Marketing Director",
      company: "GlobalBrand",
      content:
        "Saved me 20+ hours per week in job searching. The aggregation feature is a game-changer.",
      avatar: "JW",
      rating: 5,
    },
    {
      name: "David Kim",
      role: "Data Scientist",
      company: "DataInsights",
      content:
        "The salary insights helped me negotiate a 30% higher offer. Highly recommended!",
      avatar: "DK",
      rating: 5,
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "Free",
      period: "forever",
      features: [
        "5 job applications/day",
        "Basic job matching",
        "Email notifications",
        "3 saved searches",
        "Community support",
      ],
      cta: "Get Started",
      popular: false,
      color: "border-gray-200",
    },
    {
      name: "Professional",
      price: "$29",
      period: "per month",
      features: [
        "Unlimited applications",
        "Advanced AI matching",
        "Priority support",
        "Salary insights",
        "Resume builder",
        "Interview prep",
      ],
      cta: "Start Free Trial",
      popular: true,
      color: "border-blue-500",
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "per month",
      features: [
        "Everything in Pro",
        "Dedicated success manager",
        "Custom integrations",
        "Team collaboration",
        "Analytics dashboard",
        "API access",
      ],
      cta: "Contact Sales",
      popular: false,
      color: "border-gray-200",
    },
  ];

  return (
    <div className="scroll-smooth font-sans bg-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <Image src="/logo1.jpg" alt="logo" width={50} height={40} />

            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              NextJobs
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.li
                key={link.name}
                whileHover={{ y: -2 }}
                className="relative"
              >
                <a
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 font-medium text-sm flex items-center gap-2 group"
                >
                  <span>{link.icon}</span>
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300" />
                </a>
              </motion.li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <motion.a
              href="/auth/signup"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Get Started Free
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`h-0.5 bg-gray-700 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`h-0.5 bg-gray-700 transition-all ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`h-0.5 bg-gray-700 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100"
            >
              <div className="container mx-auto px-6 py-4">
                <ul className="space-y-4">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="flex items-center gap-3 text-gray-700 hover:text-blue-600 font-medium py-2"
                        onClick={() => setMenuOpen(false)}
                      >
                        <span>{link.icon}</span>
                        {link.name}
                      </a>
                    </li>
                  ))}
                  <div className="pt-4 border-t border-gray-100">
                    <a
                      href="/auth/signup"
                      className="block text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-semibold mt-2"
                      onClick={() => setMenuOpen(false)}
                    >
                      Get Started Free
                    </a>
                  </div>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Enhanced Hero Section */}
      <section
        id="home"
        className="min-h-screen relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Images */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={currentImage}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0"
            >
              <Image
                src={heroImages[currentImage].src}
                alt={heroImages[currentImage].alt}
                fill
                priority
                quality={100}
                className="object-cover"
                sizes="100vw"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-blue-800/70 to-blue-900/85" />
              {/* Subtle Texture */}
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03]" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide Controls */}
        <button
          onClick={handlePrev}
          className={`absolute left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 group ${isHovered ? "opacity-100" : "opacity-0"}`}
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
        </button>

        <button
          onClick={handleNext}
          className={`absolute right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 group ${isHovered ? "opacity-100" : "opacity-0"}`}
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
        </button>

        {/* Play/Pause */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className={`absolute top-6 right-6 z-30 p-2.5 rounded-full backdrop-blur-md border border-white/20 transition-all duration-300 ${isHovered ? "opacity-100" : "opacity-0"} ${isPlaying ? "bg-white/20 hover:bg-white/30" : "bg-blue-600/80 hover:bg-blue-600"}`}
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 text-white" />
          ) : (
            <Play className="w-4 h-4 text-white" />
          )}
        </button>

        {/* Image Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className="group"
              aria-label={`Go to image ${index + 1}`}
            >
              <div className="relative">
                <div
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentImage ? "bg-white scale-125" : "bg-white/40 hover:bg-white/60"}`}
                />
                {index === currentImage && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 rounded-full border border-white"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-20 min-h-screen flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-8 border border-white/20"
              >
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-white">
                  Trusted by 10,000+ professionals worldwide
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
              >
                <span className="text-white">Find Your</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500">
                  Dream Job
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-white/90 mb-10 max-w-2xl"
              >
                AI-powered job platform that aggregates opportunities from 20+
                platforms. Smart matching, verified listings, and career
                guidance in one place.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 mb-16"
              >
                <motion.a
                  href="/auth/signup"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-yellow-500/30 transition-all duration-300 text-center flex items-center justify-center gap-3 group"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.a
                  href="#features"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-md border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 text-center flex items-center justify-center gap-3 group"
                >
                  <Play className="w-5 h-5" />
                  Watch Demo
                </motion.a>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
              >
                {[
                  { value: "50K+", label: "Jobs Available" },
                  { value: "95%", label: "Match Accuracy" },
                  { value: "24h", label: "Avg. Response Time" },
                  { value: "200+", label: "Top Companies" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-white/70 text-sm">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 right-8 hidden lg:block"
        >
          <div className="text-white/60 text-sm rotate-90 flex items-center gap-2">
            <div className="w-px h-8 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
            SCROLL
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-24 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-4"
            >
              <Zap className="w-4 h-4" />
              <span className="text-sm font-semibold">FEATURES</span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Everything You Need to{" "}
              <span className="text-blue-600">Succeed</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-gray-600 text-lg max-w-2xl mx-auto"
            >
              Powerful tools and features designed to make your job search
              efficient, effective, and enjoyable.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300" />
                <div className="relative p-8 rounded-2xl border border-gray-100 bg-white group-hover:border-blue-100 transition-all duration-300">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-blue-600">
                      {feature.stats}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                      <ArrowRight className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        id="whychoose"
        className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-4"
            >
              <Award className="w-4 h-4" />
              <span className="text-sm font-semibold">WHY CHOOSE US</span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              The Smart Choice for{" "}
              <span className="text-yellow-300">Career Growth</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-white/80 text-lg max-w-2xl mx-auto"
            >
              We combine cutting-edge technology with human expertise to deliver
              exceptional results.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {[
                {
                  icon: "🤖",
                  title: "AI-Powered Matching",
                  description:
                    "Our advanced algorithms analyze your profile to match you with perfect opportunities.",
                },
                {
                  icon: "🛡️",
                  title: "100% Verified Jobs",
                  description:
                    "Every listing is verified to ensure authenticity and prevent scams.",
                },
                {
                  icon: "⚡",
                  title: "Time-Saving Tools",
                  description:
                    "Save 20+ hours per week with our automation and aggregation features.",
                },
                {
                  icon: "📈",
                  title: "Career Insights",
                  description:
                    "Get valuable insights into salary trends and market demand.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all"
                >
                  <div className="text-3xl">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/70">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-600 to-blue-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="text-white">
                    <div className="text-2xl font-bold mb-2">
                      Average Success Rate
                    </div>
                    <div className="text-5xl font-bold text-yellow-300 mb-2">
                      89%
                    </div>
                    <p className="text-white/80">
                      of users find relevant jobs within 30 days
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl">
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-yellow-400 rounded-2xl p-6 shadow-2xl">
                <div className="text-3xl font-bold text-gray-900">10K+</div>
                <div className="text-gray-900">Success Stories</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-4"
            >
              <Star className="w-4 h-4" />
              <span className="text-sm font-semibold">TESTIMONIALS</span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Loved by <span className="text-blue-600">Job Seekers</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-gray-600 text-lg max-w-2xl mx-auto"
            >
              Join thousands of professionals who found their dream jobs with
              NextJobs.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-gradient-to-b from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-blue-100 h-full">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-8 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="py-24 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-4"
            >
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-semibold">PRICING</span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Simple, <span className="text-blue-600">Transparent</span> Pricing
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-gray-600 text-lg max-w-2xl mx-auto"
            >
              Choose the plan that fits your needs. No hidden fees, no
              surprises.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`relative rounded-2xl border-2 ${plan.color} ${plan.popular ? "ring-2 ring-blue-500" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
                    MOST POPULAR
                  </div>
                )}

                <div className="p-8">
                  <div className="text-center mb-8">
                    <div className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </div>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-5xl font-bold text-gray-900">
                        {plan.price}
                      </span>
                      <span className="text-gray-600">/{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.a
                    href={
                      plan.name === "Enterprise" ? "#contact" : "/auth/signup"
                    }
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`block text-center py-4 rounded-xl font-semibold transition-all ${plan.popular ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-xl" : "bg-gray-100 text-gray-900 hover:bg-gray-200"}`}
                  >
                    {plan.cta}
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-600">
              All plans include our core features. Need a custom solution?{" "}
              <a
                href="#contact"
                className="text-blue-600 font-semibold hover:underline"
              >
                Contact our sales team
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-br from-gray-900 to-gray-800"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-4">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm font-semibold">CONTACT US</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Get in <span className="text-blue-400">Touch</span>
                </h2>
                <p className="text-white/80 text-lg">
                  Have questions or ready to start? Our team is here to help you
                  succeed.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <a
                      href="mailto:support@nextjobs.com"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      support@nextjobs.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Phone</div>
                    <a
                      href="tel:+15551234567"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      +251 (939) 098-222
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Office</div>
                    <div className="text-white/70">
                      123 Innovation Drive
                      <br />
                      Adiss-Ababa, Bole
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                <div className="text-white font-semibold mb-4">Follow Us</div>
                <div className="flex gap-4">
                  {[
                    {
                      icon: <Linkedin className="w-5 h-5" />,
                      label: "LinkedIn",
                    },
                    { icon: <Twitter className="w-5 h-5" />, label: "Twitter" },
                    {
                      icon: <Facebook className="w-5 h-5" />,
                      label: "Facebook",
                    },
                    { icon: <Github className="w-5 h-5" />, label: "GitHub" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a message
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h3 className="text-3xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-white/80 mb-8">
              Get the latest job trends, career tips, and platform updates
              delivered to your inbox.
            </p>

            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-4"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                required
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </form>

            <AnimatePresence>
              {formSubmitted && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="mt-4 text-green-300"
                >
                  Thank you for subscribing! Check your email for confirmation.
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold">NextJobs</span>
              </div>
              <p className="text-white/70 mb-8 max-w-md">
                The intelligent job platform that aggregates opportunities from
                top platforms worldwide. Helping professionals find their dream
                careers since 2023.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Product</h4>
              <ul className="space-y-4">
                {["Features", "How It Works", "Pricing", "API", "Status"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-white/70 hover:text-white transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Company</h4>
              <ul className="space-y-4">
                {["About", "Careers", "Blog", "Press", "Partners"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-white/70 hover:text-white transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Legal</h4>
              <ul className="space-y-4">
                {["Privacy", "Terms", "Security", "Cookies", "Compliance"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-white/70 hover:text-white transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              © 2026 NextJobs. All rights reserved.
            </div>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {item}
                  </a>
                ),
              )}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
