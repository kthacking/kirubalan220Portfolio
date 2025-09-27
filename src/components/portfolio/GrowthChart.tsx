import { motion } from "framer-motion";
import { TrendingUp, Award, Users, Star } from "lucide-react";

const GrowthChart = () => {
  const chartData = [
    { year: "2023", value: 20, projects: 3 },
    { year: "2024", value: 45, projects: 7 },
    { year: "2025", value: 75, projects: 15 },
    { year: "Future", value: 100, projects: 25 }
  ];

  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Academic Excellence",
      description: "Pursuing BCA with focus on cutting-edge technologies"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Impact",
      description: "Conducted cybersecurity workshops for fellow students"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Freelance Success",
      description: "Built reputation as reliable web developer & multimedia editor"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Continuous Growth",
      description: "Constantly learning new technologies and expanding skillset"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary to-background" />
      
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
            Achievements & Growth
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
            Career growth trajectory and key achievements over time
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Growth chart */}
          <div className="relative">
            <div className="glass-panel p-8 rounded-xl">
              <h3 className="text-2xl font-orbitron font-semibold text-foreground mb-8 text-center">
                Career Growth Metrics
              </h3>
              
              {/* Chart container */}
              <div className="relative h-80">
                {/* Y-axis labels */}
                <div className="absolute left-0 inset-y-0 flex flex-col justify-between text-sm text-muted-foreground">
                  <span>100%</span>
                  <span>75%</span>
                  <span>50%</span>
                  <span>25%</span>
                  <span>0%</span>
                </div>
                
                {/* Chart area */}
                <div className="ml-12 h-full relative">
                  {/* Grid lines */}
                  <div className="absolute inset-0">
                    {[0, 25, 50, 75, 100].map((line, index) => (
                      <div
                        key={index}
                        className="absolute w-full border-t border-white/10"
                        style={{ bottom: `${line}%` }}
                      />
                    ))}
                  </div>
                  
                  {/* Chart line */}
                  <svg className="absolute inset-0 w-full h-full overflow-visible">
                    <defs>
                      <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(18 100% 50%)" />
                        <stop offset="50%" stopColor="hsl(23 100% 58%)" />
                        <stop offset="100%" stopColor="hsl(37 100% 71%)" />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    
                    <motion.path
                      d={`M 0 ${320 - (chartData[0].value * 3.2)} L ${100} ${320 - (chartData[1].value * 3.2)} L ${200} ${320 - (chartData[2].value * 3.2)} L ${300} ${320 - (chartData[3].value * 3.2)}`}
                      stroke="url(#chartGradient)"
                      strokeWidth="3"
                      fill="none"
                      filter="url(#glow)"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                      viewport={{ once: true }}
                    />
                    
                    {/* Data points */}
                    {chartData.map((point, index) => (
                      <motion.circle
                        key={index}
                        cx={index * 100}
                        cy={320 - (point.value * 3.2)}
                        r="6"
                        fill="hsl(18 100% 50%)"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + 1 }}
                        viewport={{ once: true }}
                        className="drop-shadow-lg"
                      />
                    ))}
                  </svg>
                  
                  {/* X-axis labels */}
                  <div className="absolute -bottom-8 inset-x-0 flex justify-between text-sm text-muted-foreground">
                    {chartData.map((point, index) => (
                      <span key={index} className="font-orbitron">
                        {point.year}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Legend */}
              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-4 h-4 bg-gradient-to-r from-primary to-primary-light rounded-full" />
                  <span>Skill Development & Project Complexity</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Achievements */}
          <div className="space-y-6">
            <h3 className="text-2xl font-orbitron font-semibold text-foreground mb-8">
              Key Achievements
            </h3>
            
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 rounded-lg group hover:glow-orange transition-all duration-300"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground group-hover:bg-primary-light transition-colors">
                    {achievement.icon}
                  </div>
                  <div>
                    <h4 className="font-orbitron font-semibold text-foreground mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-muted-foreground font-inter text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom stats */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="glass-panel inline-block p-8 rounded-xl">
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-orbitron font-bold text-primary mb-2">60%</div>
                <div className="text-sm text-muted-foreground font-inter">Daily Growth</div>
              </div>
              <div>
                <div className="text-3xl font-orbitron font-bold text-primary-light mb-2">30</div>
                <div className="text-sm text-muted-foreground font-inter">Days Streak</div>
              </div>
              <div>
                <div className="text-3xl font-orbitron font-bold text-primary-gold mb-2">200</div>
                <div className="text-sm text-muted-foreground font-inter">Hours Learning</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GrowthChart;