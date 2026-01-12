import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Award, TrendingUp, Badge } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';

const Work = ({ data }) => {
  const { work } = data;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="page-container nebula-bg cosmic-grid">
      <div className="aurora"></div>
      <AnimatedBackground />
      <div className="content-wrapper pt-32">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.h1 variants={itemVariants} className="section-title">
            Work Experience
          </motion.h1>
          
          {data.workExperience?.subtitle && (
            <motion.p 
              variants={itemVariants} 
              className="text-lg md:text-xl text-void-600 dark:text-starlight-400 text-center max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              {data.workExperience.subtitle}
            </motion.p>
          )}

          <div className="relative">
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cosmos-500 via-nebula-500 to-cosmos-500 rounded-full shadow-glow" />

            <div className="space-y-8">
              {work?.map((job, index) => (
                <motion.div
                  key={job.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="card md:ml-20 relative group"
                >
                  <div className="mb-6">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                      <div className="flex items-start space-x-4 flex-1">
                        {job.logo && (
                          job.website ? (
                            <a 
                              href={job.website} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="flex-shrink-0 w-16 h-16 bg-white dark:bg-white rounded-xl items-center justify-center shadow-lg border border-void-200 dark:border-void-300 p-2 flex hover:shadow-xl hover:scale-105 transition-all cursor-pointer relative z-10"
                              title={`Visit ${job.company} website`}
                            >
                              <img 
                                src={job.logo} 
                                alt={`${job.company} logo`}
                                className="w-full h-full object-contain pointer-events-none"
                              />
                            </a>
                          ) : (
                            <div className="flex-shrink-0 w-16 h-16 bg-white dark:bg-white rounded-xl items-center justify-center shadow-lg border border-void-200 dark:border-void-300 p-2 flex">
                              <img 
                                src={job.logo} 
                                alt={`${job.company} logo`}
                                className="w-full h-full object-contain"
                              />
                            </div>
                          )
                        )}
                        <div>
                          <div className="flex items-center flex-wrap gap-2 mb-1">
                            <h2 className="text-2xl font-display font-bold text-void-900 dark:text-starlight-50">
                              {job.position}
                            </h2>
                            {job.level && (
                              <span className="inline-flex items-center bg-cosmos-50 dark:bg-cosmos-950/50 px-1.5 py-0.5 rounded-full border border-cosmos-200 dark:border-cosmos-800/40 -mt-2">
                                <span className="w-5 h-5 rounded-full bg-gradient-to-r from-cosmos-500 to-nebula-500 text-white text-[9px] font-bold flex items-center justify-center leading-none">
                                  {job.level}
                                </span>
                              </span>
                            )}
                          </div>
                          <h3 className="text-xl text-gradient font-semibold">
                            {job.company}
                          </h3>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-void-600 dark:text-starlight-400 bg-cosmos-50 dark:bg-cosmos-950/30 px-4 py-2 rounded-full border border-cosmos-200 dark:border-cosmos-800/30">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">{job.startDate} - {job.endDate}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-void-600 dark:text-starlight-400">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{job.location}</span>
                    </div>
                  </div>

                  <p className="text-void-700 dark:text-starlight-300 leading-relaxed mb-6">
                    {job.description}
                  </p>

                  {job.achievements && job.achievements.length > 0 && (
                    <div className="mb-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <Award className="w-5 h-5 text-nebula-500" />
                        <h4 className="text-lg font-semibold text-void-900 dark:text-starlight-100">Key Achievements</h4>
                      </div>
                      <ul className="space-y-3">
                        {job.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <TrendingUp className="w-4 h-4 text-cosmos-500 mt-1 flex-shrink-0" />
                            <span className="text-void-600 dark:text-starlight-400 leading-relaxed text-justify flex-1">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {job.technologies && job.technologies.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-void-700 dark:text-starlight-300 mb-3">Skills & Tech-Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech, idx) => (
                          <span key={idx} className="tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Work;
