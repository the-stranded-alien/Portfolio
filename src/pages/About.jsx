import { motion } from 'framer-motion';
import { Coffee, Code, Brain, User, Target, Lightbulb, Cloud, Database, Shield, Zap, Network, Layers, Activity, Languages, ExternalLink, Globe, Github, Trophy } from 'lucide-react';
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

  // Map profile icons
  const getProfileIcon = (iconName) => {
    const iconMap = {
      'github': Github,
      'code': Code,
      'leetcode': Trophy,
    };
    
    const lowerIcon = (iconName || '').toLowerCase();
    return iconMap[lowerIcon] || Code; // Default to Code if not found
  };

  // Map interests to icons
  const getInterestIcon = (interest) => {
    const iconMap = {
      'Agentic AI & Generative AI': Brain,
      'Full-Stack Development': Code,
      'Distributed Systems': Network,
      'System Architecture': Layers,
      'Cloud & DevOps': Cloud,
      'Data Science': Target,
      'Databases': Database,
      'Data Engineering': Activity,
      'Application Security': Shield,
      'Quantum Computing': Zap
    };
    
    // Try to find exact match first
    if (iconMap[interest]) {
      return iconMap[interest];
    }
    
    // Fallback: try partial match
    const lowerInterest = interest.toLowerCase();
    if (lowerInterest.includes('ai') || lowerInterest.includes('generative')) return Brain;
    if (lowerInterest.includes('full-stack') || lowerInterest.includes('development')) return Code;
    if (lowerInterest.includes('distributed') || lowerInterest.includes('system')) return Network;
    if (lowerInterest.includes('architecture')) return Layers;
    if (lowerInterest.includes('cloud') || lowerInterest.includes('devops')) return Cloud;
    if (lowerInterest.includes('data engineering')) return Activity;
    if (lowerInterest.includes('data science')) return Target;
    if (lowerInterest.includes('database')) return Database;
    if (lowerInterest.includes('security')) return Shield;
    if (lowerInterest.includes('quantum')) return Zap;
    
    // Default fallback
    return Lightbulb;
  };

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
                  {personal?.social?.linkedin && (
                    <p className="text-void-600 dark:text-starlight-400 break-all">
                      {personal.social.linkedin.replace(/^https?:\/\//, '')}
                    </p>
                  )}
                </div>
              </div>

              {about?.profiles && about.profiles.length > 0 && (
                <div className="card group">
                  <h3 className="text-xl font-display font-bold text-void-900 dark:text-starlight-50 mb-4 flex items-center space-x-2 relative z-10">
                    <Globe className="w-5 h-5 text-cosmos-500" />
                    <span>Other Profiles</span>
                  </h3>
                  <div className="space-y-2 relative z-10">
                    {about.profiles.map((profile, index) => (
                      <motion.a
                        key={index}
                        href={profile.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                        className="flex items-center justify-between p-3 rounded-lg bg-cosmos-50/50 dark:bg-cosmos-950/20 border border-cosmos-200/50 dark:border-cosmos-800/30 hover:border-cosmos-500/50 dark:hover:border-cosmos-500/50 hover:bg-cosmos-100/50 dark:hover:bg-cosmos-900/30 transition-all group/item cursor-pointer relative z-20"
                        style={{ pointerEvents: 'auto' }}
                      >
                        <div className="flex items-center space-x-3">
                          {profile.icon && (() => {
                            const IconComponent = getProfileIcon(profile.icon);
                            return <IconComponent className="w-4 h-4 text-cosmos-500 dark:text-cosmos-400" />;
                          })()}
                          <span className="text-void-700 dark:text-starlight-300 font-medium">{profile.name}</span>
                        </div>
                        <ExternalLink className="w-4 h-4 text-void-500 dark:text-starlight-500 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              )}

              <div className="card group">
                <h3 className="text-xl font-display font-bold text-void-900 dark:text-starlight-50 mb-4">
                  Interests
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {about?.interests?.map((interest, index) => {
                    const Icon = getInterestIcon(interest);
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
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

              <div className="card group">
                <h3 className="text-xl font-display font-bold text-void-900 dark:text-starlight-50 mb-4 flex items-center space-x-2">
                  <Languages className="w-5 h-5 text-cosmos-500" />
                  <span>Languages</span>
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-cosmos-50/50 dark:bg-cosmos-950/20 border border-cosmos-200/50 dark:border-cosmos-800/30">
                    <span className="text-void-700 dark:text-starlight-300 font-medium">English</span>
                    <span className="text-sm text-void-600 dark:text-starlight-400">Professional Proficiency</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-cosmos-50/50 dark:bg-cosmos-950/20 border border-cosmos-200/50 dark:border-cosmos-800/30">
                    <span className="text-void-700 dark:text-starlight-300 font-medium">Hindi</span>
                    <span className="text-sm text-void-600 dark:text-starlight-400">Native</span>
                  </div>
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
