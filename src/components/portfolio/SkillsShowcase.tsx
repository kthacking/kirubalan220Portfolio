import { motion } from "framer-motion";

const SkillsShowcase = () => {
  const skills = [
    { name: "Frontend Development", percentage: 85, color: "from-primary to-primary-light" },
    { name: "Backend Development", percentage: 75, color: "from-primary-light to-primary-gold" },
    { name: "Database Management", percentage: 70, color: "from-primary-gold to-primary" },
    { name: "UI/UX Design", percentage: 80, color: "from-primary to-primary-gold" },
    { name: "Multimedia Editing", percentage: 90, color: "from-primary-light to-primary" }
  ];

  const technologies = [
    { name: "Python", level: "Advanced" },
    { name: "JavaScript", level: "Advanced" },
    { name: "PHP", level: "Intermediate" },
    { name: "Java", level: "Intermediate" },
    { name: "MySQL", level: "Advanced" },
    { name: "HTML/CSS", level: "Expert" },
    { name: "Photoshop", level: "Advanced" },
    { name: "Premiere Pro", level: "Advanced" },
    { name: "Kali Linux", level: "Basic" },
    { name: "Cybersecurity", level: "Basic" }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary-light/10 rounded-full blur-3xl" />
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
            Skill Proficiency
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
            Measuring expertise across different technology domains
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Skill bubbles */}
          <div className="space-y-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-orbitron font-semibold text-foreground">
                    {skill.name}
                  </span>
                  <span className="text-primary font-orbitron font-bold text-xl">
                    {skill.percentage}%
                  </span>
                </div>
                
                {/* Progress bar */}
                <div className="relative h-4 bg-muted/20 rounded-full overflow-hidden">
                  <motion.div
                    className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1.5, delay: index * 0.1 + 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                  </motion.div>
                  
                  {/* Glow effect */}
                  <motion.div
                    className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full blur-sm opacity-50`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1.5, delay: index * 0.1 + 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right side - Technology grid */}
          <div className="glass-panel p-8 rounded-xl">
            <h3 className="text-2xl font-orbitron font-bold text-foreground mb-6 text-center">
              Technology Stack
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  className="glass-card p-4 rounded-lg text-center group hover:glow-orange transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="font-inter font-semibold text-foreground mb-2">
                    {tech.name}
                  </div>
                  <div className={`text-sm font-inter ${
                    tech.level === 'Expert' ? 'text-primary font-bold' :
                    tech.level === 'Advanced' ? 'text-primary-light' :
                    tech.level === 'Intermediate' ? 'text-primary-gold' :
                    'text-muted-foreground'
                  }`}>
                    {tech.level}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Statistics */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { number: "3+", label: "Years Experience" },
            { number: "15+", label: "Projects Completed" },
            { number: "10+", label: "Technologies Mastered" },
            { number: "100%", label: "Client Satisfaction" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="glass-panel p-6 rounded-xl text-center"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(18 100% 50% / 0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl lg:text-4xl font-orbitron font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm font-inter text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsShowcase;