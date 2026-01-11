import { motion } from 'framer-motion';
import { GraduationCap, Calendar, BookOpen, Award, Star, Code, FolderKanban, Target, FileText } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';

const Education = ({ data }) => {
  const { education } = data;

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
            Education
          </motion.h1>

          <div className="space-y-8">
            {education?.map((edu, index) => (
              <motion.div
                key={edu.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="card group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cosmos-500/5 to-nebula-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div className="flex items-start space-x-4">
                      {edu.logo ? (
                        edu.website ? (
                          <a
                            href={edu.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-16 h-16 bg-white dark:bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg border border-void-200 dark:border-void-300 p-2 hover:shadow-xl hover:scale-105 transition-all cursor-pointer relative z-10"
                            title={`Visit ${edu.institution} website`}
                          >
                            <img 
                              src={edu.logo} 
                              alt={`${edu.institution} logo`}
                              className="w-full h-full object-contain pointer-events-none"
                            />
                          </a>
                        ) : (
                          <div className="w-16 h-16 bg-white dark:bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg border border-void-200 dark:border-void-300 p-2">
                            <img 
                              src={edu.logo} 
                              alt={`${edu.institution} logo`}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        )
                      ) : (
                        <div className="w-16 h-16 bg-gradient-to-br from-cosmos-500 to-nebula-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-glow-lg group-hover:shadow-glow transition-all">
                          <GraduationCap className="w-8 h-8 text-white" />
                        </div>
                      )}
                      <div>
                        <h2 className="text-2xl font-display font-bold text-void-900 dark:text-starlight-50 mb-1">
                          {edu.degree}
                        </h2>
                        <h3 className="text-lg text-gradient font-semibold mb-1">{edu.field}</h3>
                        <p className="text-xl font-bold text-void-900 dark:text-starlight-50 mt-2">{edu.institution}</p>
                        {edu.gpa && (
                          <div className="flex items-center space-x-2 mt-2">
                            <Award className="w-4 h-4 text-cosmos-500" />
                            <span className="text-sm font-semibold text-void-700 dark:text-starlight-300">{edu.gpa}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-void-600 dark:text-starlight-400 bg-cosmos-50 dark:bg-cosmos-950/30 px-4 py-2 rounded-full border border-cosmos-200 dark:border-cosmos-800/30">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{edu.startDate} - {edu.endDate}</span>
                    </div>
                  </div>

                  <p className="text-void-700 dark:text-starlight-300 leading-relaxed mb-6">
                    {edu.description}
                  </p>

                  {edu.highlights && edu.highlights.length > 0 && (
                    <div className="mb-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <Target className="w-5 h-5 text-nebula-500" />
                        <h4 className="text-lg font-semibold text-void-900 dark:text-starlight-100">Key Focus Areas</h4>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {edu.highlights.map((highlight, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + idx * 0.05 }}
                            whileHover={{ scale: 1.02, x: 5 }}
                            className="flex items-start space-x-3 p-3 bg-cosmos-50/50 dark:bg-cosmos-950/20 rounded-lg border border-cosmos-200 dark:border-cosmos-800/30 hover:border-cosmos-500/50 transition-all"
                          >
                            <Star className="w-4 h-4 text-cosmos-500 dark:text-cosmos-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-void-700 dark:text-starlight-300 leading-relaxed">{highlight}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {edu.subjects && edu.subjects.length > 0 && (
                    <div className="mb-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <BookOpen className="w-5 h-5 text-nebula-500" />
                        <h4 className="text-lg font-semibold text-void-900 dark:text-starlight-100">Courses</h4>
                      </div>
                      <div className="space-y-4">
                        {edu.subjects.map((semester, semesterIdx) => (
                          <div key={semesterIdx}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {semester.map((subject, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: index * 0.1 + semesterIdx * 0.1 + idx * 0.03 }}
                                  whileHover={{ scale: 1.02, y: -2 }}
                                  className="flex items-center space-x-2 p-3 bg-cosmos-50/50 dark:bg-cosmos-950/20 rounded-lg border border-cosmos-200 dark:border-cosmos-800/30 hover:border-cosmos-500/50 transition-all"
                                >
                                  <FileText className="w-4 h-4 text-cosmos-500 dark:text-cosmos-400 flex-shrink-0" />
                                  <span className="text-sm font-medium text-void-700 dark:text-starlight-300">{subject}</span>
                                </motion.div>
                              ))}
                            </div>
                            {semesterIdx < edu.subjects.length - 1 && (
                              <div className="my-4 border-t border-void-200 dark:border-starlight-800/30"></div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {edu.otherSkills && edu.otherSkills.length > 0 && (
                    <div className="mb-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <Code className="w-5 h-5 text-nebula-500" />
                        <h4 className="text-lg font-semibold text-void-900 dark:text-starlight-100">Other Skills</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {edu.otherSkills.map((skill, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 + idx * 0.03 }}
                            whileHover={{ scale: 1.05 }}
                            className="tag"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )}

                  {edu.projects && edu.projects.length > 0 && (
                    <div className="mb-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <FolderKanban className="w-5 h-5 text-nebula-500" />
                        <h4 className="text-lg font-semibold text-void-900 dark:text-starlight-100">Projects</h4>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {edu.projects.map((project, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + idx * 0.05 }}
                            whileHover={{ scale: 1.02, y: -2 }}
                            className="p-4 bg-cosmos-50/50 dark:bg-cosmos-950/20 rounded-lg border border-cosmos-200 dark:border-cosmos-800/30 hover:border-cosmos-500/50 transition-all"
                          >
                            <div className="flex items-start space-x-3 mb-2">
                              <FolderKanban className="w-4 h-4 text-cosmos-500 dark:text-cosmos-400 mt-0.5 flex-shrink-0" />
                              <div className="flex-1">
                                <h5 className="text-base font-semibold text-void-900 dark:text-starlight-50 mb-1">
                                  {typeof project === 'string' ? project : project.title}
                                </h5>
                                {typeof project === 'object' && project.subtitle && (
                                  <p className="text-sm text-gradient font-medium mb-2">{project.subtitle}</p>
                                )}
                              </div>
                            </div>
                            {typeof project === 'object' && project.description && (
                              <p className="text-sm text-void-600 dark:text-starlight-400 leading-relaxed mb-3">
                                {project.description}
                              </p>
                            )}
                            {typeof project === 'object' && project.keyTech && project.keyTech.length > 0 && (
                              <div className="flex flex-wrap gap-1.5 mt-3">
                                {project.keyTech.map((tech, techIdx) => (
                                  <span key={techIdx} className="text-xs px-2 py-1 bg-cosmos-100 dark:bg-cosmos-900/50 text-cosmos-700 dark:text-cosmos-300 rounded-full border border-cosmos-200 dark:border-cosmos-800">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
