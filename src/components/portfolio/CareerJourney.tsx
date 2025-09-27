import { motion } from "framer-motion";
import { Calendar, Code, Database, Palette, Shield } from "lucide-react";

const CareerJourney = () => {
  const journeyItems = [
    {
      year: "2023",
      title: "College Tech Projects",
      description: "Built a mini social media site with PHP & MySQL. Developed portfolio website with animations. Conducted cybersecurity workshops.",
      icon: <Database className="w-6 h-6" />,
      skills: ["PHP", "MySQL", "Web Development", "Teaching"],
      status: "Completed"
    },
    {
      year: "2024",
      title: "IT Support & Cybersecurity Enthusiast",
      description: "Worked with Kali Linux & Termux for ethical hacking. Assisted in troubleshooting & database management.",
      icon: <Shield className="w-6 h-6" />,
      skills: ["Kali Linux", "Termux", "Cybersecurity", "Database Management"],
      status: "Completed"
    },
    {
      year: "2025",
      title: "Freelance Web Developer & Multimedia Editor",
      description: "Built dynamic websites with HTML, CSS, JS, PHP. Integrated MySQL for data management. Designed UI/UX & motion graphics.",
      icon: <Code className="w-6 h-6" />,
      skills: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "UI/UX"],
      status: "Current"
    },
    {
      year: "2023-2026",
      title: "Bachelor of Computer Applications",
      description: "Currently pursuing BCA at St. Joseph's College (Autonomous). Focusing on full-stack development and multimedia technologies.",
      icon: <Calendar className="w-6 h-6" />,
      skills: ["Computer Science", "Web Development", "Multimedia"],
      status: "In Progress"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden noise-texture">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl lg:text-6xl font-orbitron font-bold mb-4 glow-text">
            THE ROADMAP
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
            Journey through my career progression and key milestones in technology
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-primary-light to-transparent" />

          {/* Journey items */}
          <div className="space-y-12">
            {journeyItems.map((item, index) => (
              <motion.div
                key={index}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Content panel */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="glass-panel p-6 rounded-xl relative">
                    {/* Status indicator */}
                    <div className={`absolute top-4 ${index % 2 === 0 ? 'left-4' : 'right-4'}`}>
                      <span className={`px-3 py-1 text-xs font-inter font-medium rounded-full ${
                        item.status === 'Current' 
                          ? 'bg-primary text-primary-foreground glow-orange' 
                          : item.status === 'In Progress'
                            ? 'bg-primary-light/20 text-primary-light border border-primary-light/30'
                            : 'bg-muted text-muted-foreground'
                      }`}>
                        {item.status}
                      </span>
                    </div>

                    {/* Year */}
                    <div className="text-2xl font-orbitron font-bold text-primary mb-2">
                      {item.year}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-orbitron font-semibold text-foreground mb-3">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground font-inter mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 text-xs font-inter bg-white/5 text-foreground rounded border border-white/10"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Center icon */}
                <div className="w-2/12 flex justify-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground glow-orange relative z-10">
                    {item.icon}
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="glass-panel inline-block px-8 py-4 rounded-lg">
            <p className="text-muted-foreground font-inter">
              <span className="text-primary font-semibold">3+ Years</span> of hands-on experience in web development
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CareerJourney;