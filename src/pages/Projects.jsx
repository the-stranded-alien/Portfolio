import { motion } from 'framer-motion';
import { ExternalLink, Github, CheckCircle, Clock, Rocket, Star } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';

const Projects = ({ data }) => {
  const { projects } = data;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'completed':
        return 'text-green-600 dark:text-green-400 bg-green-500/10 border-green-500/30';
      case 'in progress':
        return 'text-cosmos-600 dark:text-cosmos-400 bg-cosmos-500/10 border-cosmos-500/30';
      case 'research':
        return 'text-nebula-600 dark:text-nebula-400 bg-nebula-500/10 border-nebula-500/30';
      default:
        return 'text-void-600 dark:text-starlight-400 bg-void-500/10 border-void-500/30';
    }
  };

  const getStatusIcon = (status) => {
    switch (status?.toLowerCase()) {
      case 'completed': return CheckCircle;
      case 'in progress': return Clock;
      default: return Rocket;
    }
  };

  return (
    <div className="page-container nebula-bg cosmic-grid">
      <div className="aurora"></div>
      <AnimatedBackground />
      <div className="content-wrapper pt-32">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.h1 variants={itemVariants} className="section-title">
            Featured Projects
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg text-void-600 dark:text-starlight-400 text-center max-w-3xl mx-auto mb-12">
            A showcase of innovative solutions and technical achievements across AI, full-stack development, and system architecture.
          </motion.p>

          <div className="space-y-8">
            {projects?.map((project, index) => {
              const StatusIcon = getStatusIcon(project.status);
              
              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="card group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cosmos-500/5 to-nebula-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-3 flex-wrap">
                          <motion.div
                            animate={{ 
                              rotate: [0, 360],
                              scale: [1, 1.2, 1],
                              opacity: [0.7, 1, 0.7]
                            }}
                            transition={{ 
                              rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                              opacity: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                            }}
                            className="flex-shrink-0 mt-1"
                          >
                            <Star className="w-6 h-6 text-nebula-500 fill-nebula-500" />
                          </motion.div>
                          <h2 className="text-2xl md:text-3xl font-display font-bold text-void-900 dark:text-starlight-50 flex-1">
                            {project.name}
                          </h2>
                          <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-semibold border ${getStatusColor(project.status)} backdrop-blur-sm`}>
                            <StatusIcon className="w-4 h-4" />
                            <span>{project.status}</span>
                          </div>
                        </div>
                        <p className="text-lg text-void-700 dark:text-starlight-300 mb-4">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {project.longDescription && (
                      <p className="text-void-600 dark:text-starlight-400 leading-relaxed mb-6">
                        {project.longDescription}
                      </p>
                    )}

                    {project.highlights && project.highlights.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-void-900 dark:text-starlight-100 mb-3 flex items-center space-x-2">
                          <Star className="w-5 h-5 text-nebula-500" />
                          <span>Project Highlights</span>
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {project.highlights.map((highlight, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 + idx * 0.05 }}
                              className="flex items-start space-x-3 p-3 bg-cosmos-50/50 dark:bg-cosmos-950/20 rounded-lg border border-cosmos-200 dark:border-cosmos-800/30"
                            >
                              <div className="w-1.5 h-1.5 bg-gradient-to-r from-cosmos-500 to-nebula-500 rounded-full mt-2 flex-shrink-0 shadow-glow" />
                              <span className="text-sm text-void-700 dark:text-starlight-300 leading-relaxed">{highlight}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {project.technologies && project.technologies.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-void-700 dark:text-starlight-300 mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <span key={idx} className="tag">{tech}</span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-3 pt-4 border-t border-void-200 dark:border-starlight-800/30">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="btn-secondary flex items-center space-x-2"
                        >
                          <Github className="w-4 h-4" />
                          <span className="text-sm">View Code</span>
                        </motion.a>
                      )}
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="btn-primary flex items-center space-x-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span className="text-sm">Live Demo</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
