import { motion } from "framer-motion";
import { Download, Mail, Phone, MapPin, Github, Linkedin, Instagram, ExternalLink } from "lucide-react";

const ContactFooter = () => {
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, label: "GitHub", href: "#" },
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", href: "#" },
    { icon: <Instagram className="w-5 h-5" />, label: "Instagram", href: "#" },
    { icon: <Mail className="w-5 h-5" />, label: "Email", href: "mailto:kirubalan220@gmail.com" }
  ];

  return (
    <footer className="py-20 relative overflow-hidden">
      {/* Background with noise texture */}
      <div className="absolute inset-0 bg-gradient-to-t from-background-secondary via-background to-background noise-texture" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-primary-light/15 rounded-full blur-2xl animate-pulse delay-1000" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-orbitron font-bold mb-6 glow-text">
              LET'S BUILD
              <br />
              <span className="text-gradient-orange">SOMETHING AMAZING</span>
            </h2>
            
            <p className="text-xl text-muted-foreground font-inter mb-8 leading-relaxed">
              Ready to transform your ideas into digital reality? 
              Let's discuss your next project and create something extraordinary together.
            </p>

            {/* Contact details */}
            <div className="space-y-4 mb-8">
              <motion.div 
                className="flex items-center gap-4 p-4 glass-panel rounded-lg group hover:glow-orange transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center group-hover:bg-primary-light transition-colors">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-inter font-medium text-foreground">Phone</div>
                  <div className="text-muted-foreground">+91 6385430428</div>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center gap-4 p-4 glass-panel rounded-lg group hover:glow-orange transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center group-hover:bg-primary-light transition-colors">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-inter font-medium text-foreground">Email</div>
                  <div className="text-muted-foreground">kirubalan220@gmail.com</div>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center gap-4 p-4 glass-panel rounded-lg group hover:glow-orange transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center group-hover:bg-primary-light transition-colors">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-inter font-medium text-foreground">Location</div>
                  <div className="text-muted-foreground">Tamil Nadu, India</div>
                </div>
              </motion.div>
            </div>

            {/* Resume download */}
            <motion.a
              href="/kirubalan-resume.pdf"
              download
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary-light px-8 py-4 rounded-lg font-inter font-semibold text-primary-foreground transition-all duration-300 glow-orange group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              DOWNLOAD FULL RESUME
              <ExternalLink className="w-4 h-4 opacity-70" />
            </motion.a>
          </motion.div>

          {/* Right side - Large contact orb */}
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Main contact orb */}
              <div className="w-80 h-80 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary-gold rounded-full blur-sm glow-pulse" />
                <div className="absolute inset-6 bg-gradient-to-br from-primary via-primary-light to-primary-gold rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <div className="font-orbitron font-bold text-white text-xl mb-2">
                      GET IN TOUCH
                    </div>
                    <div className="font-inter text-white/80 text-sm">
                      Let's create together
                    </div>
                  </div>
                </div>
                
                {/* Floating contact elements */}
                <motion.div 
                  className="absolute -top-6 -right-6 w-12 h-12 bg-primary-gold rounded-full flex items-center justify-center"
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                >
                  <Phone className="w-6 h-6 text-white" />
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-8 -left-8 w-10 h-10 bg-primary-light rounded-full flex items-center justify-center"
                  animate={{ y: [5, -5, 5] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                >
                  <MapPin className="w-5 h-5 text-white" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social media and footer */}
        <motion.div
          className="border-t border-white/10 pt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Social links */}
          <div className="flex justify-center mb-8">
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 glass-panel rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-orange transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer text */}
          <div className="text-center space-y-4">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm text-muted-foreground font-inter">
              <span>© 2025 Kirubalan V. All rights reserved.</span>
              <div className="flex gap-6">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
              </div>
            </div>
            
            <div className="text-xs text-muted-foreground/60 font-inter">
              Built with React, TypeScript, Tailwind CSS & Framer Motion  Designed & Developed by Kirubalan” → professional touch
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default ContactFooter;