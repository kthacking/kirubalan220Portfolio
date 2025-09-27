import { motion } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden noise-texture">
      {/* Background radial gradient orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-primary-light/15 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between relative z-10">
        {/* Left side - Text content */}
        <div className="flex-1 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Name and title */}
            <div className="space-y-2">
              <motion.p 
                className="text-muted-foreground font-inter text-lg tracking-wider"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                HELLO, I'M
              </motion.p>
              <motion.h1 
                className="text-6xl lg:text-8xl font-orbitron font-black tracking-tighter glow-text"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                KIRUBALAN
              </motion.h1>
              <motion.div 
                className="text-4xl lg:text-6xl font-orbitron font-bold text-gradient-orange"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                BUILDING
              </motion.div>
              <motion.div 
                className="text-4xl lg:text-6xl font-orbitron font-bold text-gradient-orange"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                THE FUTURE...
              </motion.div>
            </div>

            {/* Description */}
            <motion.p 
              className="text-xl text-muted-foreground font-inter max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
            >
             A passionate innovator blending technology and creativity to craft seamless, next-gen digital experiences that push boundaries and inspire
            </motion.p>

            {/* Role tags */}
            <motion.div 
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <span className="glass-panel px-4 py-2 text-sm font-inter font-medium text-foreground">
                Full-Stack Developer
              </span>
              <span className="glass-panel px-4 py-2 text-sm font-inter font-medium text-foreground">
                Multimedia Creator
              </span>
              <span className="glass-panel px-4 py-2 text-sm font-inter font-medium text-foreground">
                BCA STUDENT
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              <a
                href="/kirubalan-resume.pdf"
                download
                className="group relative inline-flex items-center gap-2 bg-primary hover:bg-primary-light px-8 py-4 rounded-lg font-inter font-semibold text-primary-foreground transition-all duration-300 glow-orange"
              >
                <Download size={20} />
                DOWNLOAD RESUME
                <div className="absolute inset-0 bg-primary-light opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-300" />
              </a>
              
              <button className="group glass-panel px-8 py-4 rounded-lg font-inter font-semibold text-foreground hover:bg-white/5 transition-all duration-300">
                VIEW PROJECTS
                <ArrowDown className="inline-block ml-2 group-hover:translate-y-1 transition-transform" size={20} />
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Right side - Large glowing orb */}
        <div className="hidden lg:flex flex-1 justify-center items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1.2 }}
          >
            {/* Main orb */}
            <div className="w-96 h-96 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary-gold rounded-full blur-sm glow-pulse" />
              <div className="absolute inset-4 bg-gradient-to-br from-primary via-primary-light to-primary-gold rounded-full" />
              
              {/* Inner details */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 border-2 border-white/20 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/10 rounded-full animate-pulse" ></div>
              </div>
              
              {/* Floating elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-8 h-8 bg-primary-gold rounded-full blur-sm"
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute -bottom-6 -left-6 w-6 h-6 bg-primary-light rounded-full blur-sm"
                animate={{ y: [10, -10, 10] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              />
              
            </div>
          </motion.div>
          
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-muted-foreground"
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;