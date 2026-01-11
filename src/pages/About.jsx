import { motion } from 'framer-motion';
import { Heart, Coffee, Code, Brain, User, Target, Lightbulb } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';

const About = ({ data }) => {
  const { about, personal } = data;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const interestIcons = [Brain, Code, Coffee, Heart, Lightbulb, Target];

  return (
    <div className="page-container nebula-bg cosmic-grid">
      <div className="aurora"></div>
      <AnimatedBackground />
      <div className="content-wrapper pt-32">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.h1 variants={itemVariants} className="section-title">
            About Me
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
              <div className="card group">
                <div className="flex items-center space-x-3 mb-4">
                  <User className="w-6 h-6 text-cosmos-500" />
                  <h2 className="text-2xl font-display font-bold text-void-900 dark:text-starlight-50">
                    Who I Am
                  </h2>
                </div>
                <p className="text-lg text-void-700 dark:text-starlight-300 leading-relaxed">
                  {about?.description}
                </p>
              </div>

              <div className="card group">
                <div className="flex items-center space-x-3 mb-6">
                  <Target className="w-6 h-6 text-nebula-500" />
                  <h2 className="text-2xl font-display font-bold text-void-900 dark:text-starlight-50">
                    Career Highlights
                  </h2>
                </div>
                <div className="space-y-4">
                  {about?.highlights?.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-3 p-3 rounded-lg bg-cosmos-50/50 dark:bg-cosmos-950/20 border border-cosmos-200/50 dark:border-cosmos-800/30"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-cosmos-500 to-nebula-500 rounded-full mt-2 flex-shrink-0 shadow-glow" />
                      <p className="text-void-700 dark:text-starlight-300 leading-relaxed">{highlight}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="card group">
                <h3 className="text-xl font-display font-bold text-void-900 dark:text-starlight-50 mb-4 flex items-center space-x-2">
                  <Coffee className="w-5 h-5 text-cosmos-500" />
                  <span>Get in Touch</span>
                </h3>
                <div className="space-y-3">
                  {personal?.email && (
                    <a href={`mailto:${personal.email}`} className="block text-void-600 dark:text-starlight-400 hover:text-cosmos-600 dark:hover:text-cosmos-400 transition-colors">
                      {personal.email}
                    </a>
                  )}
                  {personal?.phone && (
                    <a href={`tel:${personal.phone}`} className="block text-void-600 dark:text-starlight-400 hover:text-cosmos-600 dark:hover:text-cosmos-400 transition-colors">
                      {personal.phone}
                    </a>
                  )}
                  {personal?.location && (
                    <p className="text-void-600 dark:text-starlight-400">{personal.location}</p>
                  )}
                </div>
              </div>

              <div className="card group">
                <h3 className="text-xl font-display font-bold text-void-900 dark:text-starlight-50 mb-4">
                  Interests
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {about?.interests?.slice(0, 6).map((interest, index) => {
                    const Icon = interestIcons[index % interestIcons.length];
                    return (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="flex flex-col items-center p-4 bg-gradient-to-br from-cosmos-50 to-nebula-50 dark:from-cosmos-950/30 dark:to-nebula-950/30 rounded-xl border border-cosmos-200 dark:border-cosmos-800/30 hover:border-cosmos-500/50 dark:hover:border-cosmos-500/50 transition-all cursor-pointer group/item"
                      >
                        <Icon className="w-6 h-6 text-cosmos-600 dark:text-cosmos-400 mb-2 group-hover/item:scale-110 transition-transform" />
                        <span className="text-xs text-void-700 dark:text-starlight-300 text-center font-medium">{interest}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
