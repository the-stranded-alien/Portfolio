import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Sparkles, Rocket, Zap, Code } from 'lucide-react';

const Home = ({ data }) => {
  const { personal } = data;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="page-container nebula-bg cosmic-grid">
      <div className="aurora"></div>
      
      <div className="content-wrapper pt-32 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <motion.div 
              className="inline-flex items-center space-x-2 px-5 py-2.5 bg-cosmos-500/10 dark:bg-cosmos-500/20 border border-cosmos-500/30 dark:border-cosmos-500/40 rounded-full backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5 text-cosmos-500 dark:text-cosmos-400" />
              </motion.div>
              <span className="text-sm font-semibold text-cosmos-700 dark:text-cosmos-300 tracking-wide">
                Available for exciting opportunities
              </span>
            </motion.div>
          </motion.div>

          {/* Main Heading with Cosmic Effect */}
          <motion.div variants={itemVariants} className="text-center mb-6">
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="block text-void-900 dark:text-starlight-50 mb-3">
                Hi, I'm
              </span>
              <span className="block text-gradient glow-text relative">
                {personal?.name || 'Your Name'}
                <motion.div
                  className="absolute -right-8 -top-8 hidden lg:block"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Rocket className="w-16 h-16 text-nebula-400 opacity-50" />
                </motion.div>
              </span>
            </motion.h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl text-void-700 dark:text-starlight-300 text-center font-display mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            {personal?.title || 'Your Professional Title'}
          </motion.p>

          {/* Bio */}
          <motion.p 
            variants={itemVariants}
            className="text-lg text-void-600 dark:text-starlight-400 text-center max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            {personal?.bio || 'Your professional bio goes here'}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-20"
          >
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139, 92, 246, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center space-x-2 group"
              >
                <span>View My Work</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            
            <Link to="/resume">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Floating Stat Cards */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
          >
            <motion.div
              variants={floatingVariants}
              animate="animate"
              whileHover={{ scale: 1.05, y: -10 }}
              className="card-glow text-center group cursor-pointer"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-cosmos-500 to-nebula-600 rounded-2xl flex items-center justify-center shadow-glow-lg group-hover:shadow-glow">
                  <Zap className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-5xl font-display font-bold text-gradient mb-2">
                7+
              </div>
              <div className="text-void-600 dark:text-starlight-400 font-medium">Years Experience</div>
            </motion.div>

            <motion.div
              variants={floatingVariants}
              animate="animate"
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="card-glow text-center group cursor-pointer"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-nebula-500 to-cosmos-600 rounded-2xl flex items-center justify-center shadow-glow-lg group-hover:shadow-glow">
                  <Code className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-5xl font-display font-bold text-gradient mb-2">
                {data.projects?.length || 10}+
              </div>
              <div className="text-void-600 dark:text-starlight-400 font-medium">Projects Completed</div>
            </motion.div>

            <motion.div
              variants={floatingVariants}
              animate="animate"
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="card-glow text-center group cursor-pointer"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-cosmos-600 to-nebula-500 rounded-2xl flex items-center justify-center shadow-glow-lg group-hover:shadow-glow">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-5xl font-display font-bold text-gradient mb-2">
                {Object.keys(data.skills || {}).reduce((acc, category) => 
                  acc + (data.skills[category]?.length || 0), 0)}+
              </div>
              <div className="text-void-600 dark:text-starlight-400 font-medium">Skills Mastered</div>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="flex justify-center mt-24"
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center space-y-3 text-void-500 dark:text-starlight-500"
            >
              <span className="text-sm font-medium tracking-wide">Scroll to explore</span>
              <div className="w-7 h-12 border-2 border-cosmos-500/30 dark:border-cosmos-500/50 rounded-full flex justify-center p-1.5 backdrop-blur-sm">
                <motion.div
                  animate={{ y: [0, 16, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-2 h-2 bg-cosmos-500 dark:bg-cosmos-400 rounded-full shadow-glow"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
