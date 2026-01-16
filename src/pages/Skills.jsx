import { motion } from 'framer-motion';
import { Code2, Database, Cloud, Cpu, Wrench, Sparkles, Zap, Brain, Languages, BarChart3, Star } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';

const Skills = ({ data }) => {
  const { skills } = data;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const categoryIcons = {
    'Generative AI & Agentic AI': Brain,
    'Frontend Development': Code2,
    'Backend Development': Cpu,
    'Databases': Database,
    'Cloud & DevOps': Cloud,
    'Programming Languages': Languages,
    'Tools & Other': Wrench,
    'Data Science': BarChart3,
  };

  const getCategoryIcon = (category) => categoryIcons[category] || Code2;
  const getCategoryColor = (index) => {
    const colors = ['from-cosmos-500 to-nebula-600', 'from-nebula-500 to-cosmos-600', 'from-cosmos-600 to-nebula-500'];
    return colors[index % colors.length];
  };

  return (
    <div className="page-container nebula-bg cosmic-grid">
      <div className="aurora"></div>
      <AnimatedBackground />
      <div className="content-wrapper pt-32">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.h1 variants={itemVariants} className="section-title">
            Skills & Technologies
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg text-void-600 dark:text-starlight-400 text-center max-w-3xl mx-auto mb-12">
            A comprehensive skill-set built over years of hands-on experience with modern technologies, frameworks, and development practices.
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skills && Object.entries(skills).map(([category, categoryData], index) => {
              const Icon = getCategoryIcon(category);
              // Handle both old format (array) and new format (object with rating and items)
              const skillList = Array.isArray(categoryData) ? categoryData : (categoryData?.items || []);
              const rating = Array.isArray(categoryData) ? 5 : (categoryData?.rating || 5);
              
              // Calculate stars to display
              const fullStars = Math.floor(rating);
              const hasHalfStar = rating % 1 !== 0;
              const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
              
              return (
                <motion.div
                  key={category}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="card group"
                >
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-void-200 dark:border-starlight-800/30">
                    <div className="flex items-center space-x-3">
                      <div className={`w-14 h-14 bg-gradient-to-br ${getCategoryColor(index)} rounded-2xl flex items-center justify-center shadow-glow-lg group-hover:shadow-glow transition-all`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h2 className="text-2xl font-display font-bold text-void-900 dark:text-starlight-50">
                        {category}
                      </h2>
                    </div>
                    <div className="flex items-center space-x-1">
                      {/* Full stars */}
                      {[...Array(fullStars)].map((_, i) => (
                        <Star
                          key={`full-${i}`}
                          className="w-4 h-4 text-cosmos-500 dark:text-cosmos-400 fill-cosmos-500 dark:fill-cosmos-400"
                        />
                      ))}
                      {/* Half star */}
                      {hasHalfStar && (
                        <div className="relative w-4 h-4 inline-block">
                          <Star className="w-4 h-4 text-cosmos-500 dark:text-cosmos-400 absolute top-0 left-0" />
                          <div className="absolute top-0 left-0 overflow-hidden" style={{ width: '50%' }}>
                            <Star className="w-4 h-4 text-cosmos-500 dark:text-cosmos-400 fill-cosmos-500 dark:fill-cosmos-400" />
                          </div>
                        </div>
                      )}
                      {/* Empty stars */}
                      {[...Array(emptyStars)].map((_, i) => (
                        <Star
                          key={`empty-${i}`}
                          className="w-4 h-4 text-cosmos-500 dark:text-cosmos-400"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {skillList?.map((skill, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + idx * 0.03 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-4 py-3 bg-cosmos-50/50 dark:bg-cosmos-950/20 rounded-xl border border-cosmos-200 dark:border-cosmos-800/30 hover:border-cosmos-500/50 dark:hover:border-cosmos-500/50 transition-all cursor-pointer group/item relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-cosmos-500/0 via-cosmos-500/5 to-cosmos-500/0 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                        <div className="flex items-center justify-between relative z-10">
                          <span className="text-void-700 dark:text-starlight-300 font-medium group-hover/item:text-cosmos-600 dark:group-hover/item:text-cosmos-400 transition-colors">
                            {skill}
                          </span>
                          <Zap className="w-3 h-3 text-cosmos-500 dark:text-cosmos-400 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div variants={itemVariants} className="mt-12 text-center">
            <div className="inline-flex items-center space-x-4 px-8 py-5 bg-gradient-to-r from-cosmos-500/10 via-nebula-500/10 to-cosmos-500/10 rounded-2xl border border-cosmos-500/30 backdrop-blur-sm">
              <Sparkles className="w-7 h-7 text-cosmos-500 dark:text-cosmos-400 animate-pulse" />
              <div>
                <div className="text-4xl font-display font-bold text-gradient">
                  {Object.values(skills || {}).reduce((acc, categoryData) => {
                    const skillList = Array.isArray(categoryData) ? categoryData : (categoryData?.items || []);
                    return acc + (skillList?.length || 0);
                  }, 0)}+
                </div>
                <div className="text-sm text-void-600 dark:text-starlight-400 font-medium">
                  Technologies Mastered
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
