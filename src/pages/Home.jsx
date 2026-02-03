import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Sparkles, Rocket, Zap, Code, Target } from 'lucide-react';
import { useState, useEffect } from 'react';
import AnimatedBackground from '../components/AnimatedBackground';

const Home = ({ data }) => {
  const { personal } = data;
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  
  const buzzWords = personal?.buzzWords || [];
  
  useEffect(() => {
    if (buzzWords.length > 0) {
      const interval = setInterval(() => {
        setCurrentWordIndex((prev) => (prev + 1) % buzzWords.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [buzzWords.length]);

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
    <div className="page-container nebula-bg cosmic-grid relative">
      <div className="aurora"></div>
      <AnimatedBackground />
      
      <div className="content-wrapper pt-32 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          {/* Badge - only when explicitly shown */}
          {personal?.showAvailableForOpportunities !== false && (
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
          )}

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

          {/* Subtitle with Animated Buzz Words */}
          <motion.div 
            variants={itemVariants}
            className="text-center mb-8 max-w-4xl mx-auto"
          >
            <p className="text-xl md:text-2xl lg:text-3xl text-void-700 dark:text-starlight-300 font-display mb-4 leading-relaxed">
              {personal?.title || 'Your Professional Title'}
            </p>
            
            {buzzWords.length > 0 && (
              <div className="flex items-center justify-center gap-3 flex-wrap mt-6">
                <div className="h-8 md:h-10 flex items-center">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentWordIndex}
                      initial={{ opacity: 0, y: 20, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.8 }}
                      transition={{ duration: 0.5 }}
                      className="text-xl md:text-2xl lg:text-3xl font-display font-bold text-gradient inline-block"
                    >
                      {buzzWords[currentWordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            )}
          </motion.div>

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
            <Link to="/work">
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
          >
            <motion.div
              variants={floatingVariants}
              animate="animate"
              whileHover={{ scale: 1.05, y: -10 }}
              className="card-glow text-center group cursor-pointer"
            >
              <div className="flex justify-center mb-4">
                <div className="w-[57.6px] h-[57.6px] bg-gradient-to-br from-cosmos-500 to-nebula-600 rounded-2xl flex items-center justify-center shadow-glow-lg group-hover:shadow-glow">
                  <Zap className="w-[28.8px] h-[28.8px] text-white" />
                </div>
              </div>
              <div className="text-[43.2px] font-display font-bold text-gradient mb-2">
                5+
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
                <div className="w-[57.6px] h-[57.6px] bg-gradient-to-br from-nebula-500 to-cosmos-600 rounded-2xl flex items-center justify-center shadow-glow-lg group-hover:shadow-glow">
                  <Code className="w-[28.8px] h-[28.8px] text-white" />
                </div>
              </div>
              <div className="text-[43.2px] font-display font-bold text-gradient mb-2">
                10+
              </div>
              <div className="text-void-600 dark:text-starlight-400 font-medium">Projects & Certifications</div>
            </motion.div>

            <motion.div
              variants={floatingVariants}
              animate="animate"
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="card-glow text-center group cursor-pointer"
            >
              <div className="flex justify-center mb-4">
                <div className="w-[57.6px] h-[57.6px] bg-gradient-to-br from-cosmos-600 to-nebula-500 rounded-2xl flex items-center justify-center shadow-glow-lg group-hover:shadow-glow">
                  <Sparkles className="w-[28.8px] h-[28.8px] text-white" />
                </div>
              </div>
              <div className="text-[43.2px] font-display font-bold text-gradient mb-2">
                50+
              </div>
              <div className="text-void-600 dark:text-starlight-400 font-medium">Skills Mastered</div>
            </motion.div>

            <motion.div
              variants={floatingVariants}
              animate="animate"
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="card-glow text-center group cursor-pointer"
            >
              <div className="flex justify-center mb-4">
                <div className="w-[57.6px] h-[57.6px] bg-gradient-to-br from-nebula-600 to-cosmos-500 rounded-2xl flex items-center justify-center shadow-glow-lg group-hover:shadow-glow">
                  <Target className="w-[28.8px] h-[28.8px] text-white" />
                </div>
              </div>
              <div className="text-[43.2px] font-display font-bold text-gradient mb-2">
                500+
              </div>
              <div className="text-void-600 dark:text-starlight-400 font-medium">DSA Problems Solved</div>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default Home;
