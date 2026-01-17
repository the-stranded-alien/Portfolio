import { motion } from 'framer-motion';
import { Award, Calendar, User, Building2, ExternalLink, Github, Clock, Code, Target } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import { getAssetPath } from '../utils/paths';

const Certifications = ({ data }) => {
  const { certifications, plannedCertifications } = data;

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
            Certifications & Courses
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg text-void-600 dark:text-starlight-400 text-center max-w-3xl mx-auto mb-12">
            Featured certifications out of 20+ completed courses and certifications
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications?.map((cert, index) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="card group relative overflow-hidden flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cosmos-500/5 to-nebula-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex flex-col flex-1">
                  {/* Logo */}
                  {cert.logo && (
                    <div className="mb-4 w-full h-[40%] flex justify-center items-center">
                      <div className="w-full h-full bg-white dark:bg-white rounded-xl flex items-center justify-center shadow-lg border border-void-200 dark:border-void-300 p-3">
                        <img 
                          src={getAssetPath(cert.logo)} 
                          alt={`${cert.institute || cert.title} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-xl font-display font-bold text-void-900 dark:text-starlight-50 mb-2">
                    {cert.title}
                  </h3>

                  {/* Subtitle */}
                  {cert.subtitle && (
                    <p className="text-sm text-gradient font-semibold mb-4">
                      {cert.subtitle}
                    </p>
                  )}

                  {/* Details */}
                  <div className="space-y-2 mb-4">
                    {cert.instructor && (
                      <div className="flex items-center space-x-2 text-void-600 dark:text-starlight-400">
                        <User className="w-4 h-4 text-cosmos-500 flex-shrink-0" />
                        <span className="text-sm">{cert.instructor}</span>
                      </div>
                    )}

                    {cert.institute && (
                      <div className="flex items-center space-x-2 text-void-600 dark:text-starlight-400">
                        <Building2 className="w-4 h-4 text-cosmos-500 flex-shrink-0" />
                        <span className="text-sm">{cert.institute}</span>
                      </div>
                    )}

                    <div className="flex items-center space-x-2 text-void-600 dark:text-starlight-400">
                      <Calendar className="w-4 h-4 text-cosmos-500 flex-shrink-0" />
                      <span className="text-sm">{cert.date}</span>
                      {cert.duration && (
                        <>
                          <span className="text-void-400 dark:text-starlight-600">•</span>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span className="text-sm">{cert.duration}</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Skills */}
                  {cert.skills && cert.skills.length > 0 && (
                    <div className="mb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Code className="w-4 h-4 text-cosmos-500 flex-shrink-0" />
                        <span className="text-xs font-semibold text-void-700 dark:text-starlight-300">Skills</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {cert.skills.map((skill, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 bg-cosmos-50 dark:bg-cosmos-950/30 text-cosmos-700 dark:text-cosmos-300 rounded-md border border-cosmos-200 dark:border-cosmos-800/30">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Links - Always at bottom */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-void-200 dark:border-starlight-800/30 mt-auto">
                    {cert.certificateLink && (
                      <a
                        href={cert.certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1.5 px-3 py-1.5 bg-cosmos-50 dark:bg-cosmos-950/30 text-cosmos-700 dark:text-cosmos-300 rounded-lg border border-cosmos-200 dark:border-cosmos-800/30 hover:bg-cosmos-100 dark:hover:bg-cosmos-900/50 hover:border-cosmos-500/50 transition-all text-sm font-medium"
                      >
                        <Award className="w-4 h-4" />
                        <span>Certificate</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}

                    {cert.githubLink && (
                      <a
                        href={cert.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1.5 px-3 py-1.5 bg-void-100 dark:bg-void-800 text-void-700 dark:text-starlight-300 rounded-lg border border-void-200 dark:border-starlight-800/30 hover:bg-void-200 dark:hover:bg-void-700 transition-all text-sm font-medium"
                      >
                        <Github className="w-4 h-4" />
                        <span>GitHub</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Planned Certifications Section */}
          {plannedCertifications && plannedCertifications.length > 0 && (
            <>
              <motion.div variants={itemVariants} className="mt-16 mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Target className="w-6 h-6 text-nebula-500" />
                  <h2 className="text-3xl font-display font-bold text-void-900 dark:text-starlight-50">
                    Planned Certifications
                  </h2>
                </div>
                <p className="text-void-600 dark:text-starlight-400 text-sm">
                  Upcoming certifications and courses I'm planning to complete
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {plannedCertifications.map((cert, index) => (
                  <motion.div
                    key={cert.id || index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="card group relative overflow-hidden flex flex-col opacity-75"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-nebula-500/5 to-cosmos-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative flex flex-col flex-1">
                      {/* Logo */}
                      {cert.logo && (
                        <div className="mb-4 w-full h-[40%] flex justify-center items-center">
                          <div className="w-full h-full bg-white dark:bg-white rounded-xl flex items-center justify-center shadow-lg border border-void-200 dark:border-void-300 p-3">
                            <img 
                              src={getAssetPath(cert.logo)} 
                              alt={`${cert.institute || cert.title} logo`}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </div>
                      )}

                      {/* Title */}
                      <h3 className="text-xl font-display font-bold text-void-900 dark:text-starlight-50 mb-2">
                        {cert.title}
                      </h3>

                      {/* Subtitle */}
                      {cert.subtitle && (
                        <p className="text-sm text-gradient font-semibold mb-4">
                          {cert.subtitle}
                        </p>
                      )}

                      {/* Details */}
                      <div className="space-y-2 mb-4">
                        {cert.instructor && (
                          <div className="flex items-center space-x-2 text-void-600 dark:text-starlight-400">
                            <User className="w-4 h-4 text-nebula-500 flex-shrink-0" />
                            <span className="text-sm">{cert.instructor}</span>
                          </div>
                        )}

                        {cert.institute && (
                          <div className="flex items-center space-x-2 text-void-600 dark:text-starlight-400">
                            <Building2 className="w-4 h-4 text-nebula-500 flex-shrink-0" />
                            <span className="text-sm">{cert.institute}</span>
                          </div>
                        )}

                        {cert.expectedDate && (
                          <div className="flex items-center space-x-2 text-void-600 dark:text-starlight-400">
                            <Calendar className="w-4 h-4 text-nebula-500 flex-shrink-0" />
                            <span className="text-sm">Expected: {cert.expectedDate}</span>
                          </div>
                        )}
                      </div>

                      {/* Skills */}
                      {cert.skills && cert.skills.length > 0 && (
                        <div className="mb-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <Code className="w-4 h-4 text-nebula-500 flex-shrink-0" />
                            <span className="text-xs font-semibold text-void-700 dark:text-starlight-300">Skills</span>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {cert.skills.map((skill, idx) => (
                              <span key={idx} className="text-xs px-2 py-1 bg-nebula-50 dark:bg-nebula-950/30 text-nebula-700 dark:text-nebula-300 rounded-md border border-nebula-200 dark:border-nebula-800/30">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Links - Always at bottom */}
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-void-200 dark:border-starlight-800/30 mt-auto">
                        {cert.courseLink && (
                          <a
                            href={cert.courseLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-1.5 px-3 py-1.5 bg-nebula-50 dark:bg-nebula-950/30 text-nebula-700 dark:text-nebula-300 rounded-lg border border-nebula-200 dark:border-nebula-800/30 hover:bg-nebula-100 dark:hover:bg-nebula-900/50 hover:border-nebula-500/50 transition-all text-sm font-medium"
                          >
                            <Target className="w-4 h-4" />
                            <span>Course Link</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}

                        {cert.registrationLink && (
                          <a
                            href={cert.registrationLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-1.5 px-3 py-1.5 bg-void-100 dark:bg-void-800 text-void-700 dark:text-starlight-300 rounded-lg border border-void-200 dark:border-starlight-800/30 hover:bg-void-200 dark:hover:bg-void-700 transition-all text-sm font-medium"
                          >
                            <Award className="w-4 h-4" />
                            <span>Register</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Certifications;
