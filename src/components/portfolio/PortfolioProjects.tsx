import { motion } from "framer-motion";
import { ExternalLink, Github, Palette, Database, Shield, Globe } from "lucide-react";

const PortfolioProjects = () => {
  const projects = [
    {
      title: "Social Media Platform",
      description: "Built a mini social media site using PHP and MySQL with user authentication, post creation, and real-time interactions.",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      icon: <Database className="w-6 h-6" />,
      gradient: "from-primary to-primary-light",
      featured: true
    },
    {
      title: "Portfolio Website",
      description: "Developed an animated portfolio website showcasing projects and skills with smooth transitions and responsive design.",
      technologies: ["HTML", "CSS", "JavaScript", "Animations"],
      icon: <Globe className="w-6 h-6" />,
      gradient: "from-primary-light to-primary-gold",
      featured: false
    },
    {
      title: "Cybersecurity Toolkit",
      description: "Created ethical hacking tools and conducted workshops using Kali Linux and Termux for educational purposes.",
      technologies: ["Kali Linux", "Termux", "Python", "Cybersecurity"],
      icon: <Shield className="w-6 h-6" />,
      gradient: "from-primary-gold to-primary",
      featured: false
    },
    {
      title: "UI/UX Design Projects",
      description: "Designed multiple user interfaces and created motion graphics for various clients using Photoshop and Premiere Pro.",
      technologies: ["Photoshop", "Premiere Pro", "UI/UX", "Motion Graphics"],
      icon: <Palette className="w-6 h-6" />,
      gradient: "from-primary to-primary-gold",
      featured: false
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-light/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl lg:text-6xl font-orbitron font-bold mb-4 glow-text">
            BLASTER STATISTICS
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
            Showcase of key projects and technical achievements
          </p>
        </motion.div>

        {/* Featured project */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="glass-panel p-8 lg:p-12 rounded-2xl relative overflow-hidden group">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary-light/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-orbitron font-bold text-foreground">
                    {projects[0].title}
                  </h3>
                  <span className="text-primary font-inter font-medium">Featured Project</span>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground font-inter mb-6 leading-relaxed">
                {projects[0].description}
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {projects[0].technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white/5 text-foreground rounded-lg border border-white/10 font-inter text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <button className="flex items-center gap-2 bg-primary hover:bg-primary-light px-6 py-3 rounded-lg font-inter font-semibold text-primary-foreground transition-all duration-300 glow-orange">
                  <ExternalLink size={18} />
                  View Project
                </button>
                <button className="flex items-center gap-2 glass-panel px-6 py-3 rounded-lg font-inter font-semibold text-foreground hover:bg-white/5 transition-all duration-300">
                  <Github size={18} />
                  Source Code
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(1).map((project, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 rounded-xl group hover:glow-orange transition-all duration-500 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Project icon */}
              <div className={`w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {project.icon}
              </div>
              
              {/* Project title */}
              <h3 className="text-xl font-orbitron font-semibold text-foreground mb-3">
                {project.title}
              </h3>
              
              {/* Project description */}
              <p className="text-muted-foreground font-inter text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-white/5 text-foreground rounded text-xs font-inter border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-1 bg-primary/20 text-primary rounded text-xs font-inter">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
              
              {/* Project actions */}
              <div className="flex gap-2">
                <button className="flex-1 text-center py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded font-inter text-sm font-medium transition-colors">
                  View
                </button>
                <button className="flex-1 text-center py-2 glass-panel hover:bg-white/5 text-foreground rounded font-inter text-sm font-medium transition-colors">
                  Code
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="glass-panel inline-block p-8 rounded-xl">
            <h3 className="text-2xl font-orbitron font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground font-inter mb-6 max-w-md">
              Let's collaborate and bring your digital vision to life with cutting-edge technology
            </p>
            <button className="bg-primary hover:bg-primary-light px-8 py-4 rounded-lg font-inter font-semibold text-primary-foreground transition-all duration-300 glow-orange">
              Get In Touch
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioProjects;