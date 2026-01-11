import { motion } from 'framer-motion';
import { BookOpen, FileText, Calendar, User, ExternalLink, Tag, PenTool } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';

const Reading = ({ data }) => {
  const books = data?.books || [];
  const papers = data?.papers || [];
  const blogs = data?.blogs || [];

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
            Reading & Resources
          </motion.h1>

          {/* Blogs Section */}
          {blogs.length > 0 && (
            <motion.div variants={itemVariants} className="mb-16">
              <div className="flex items-center space-x-3 mb-8">
                <PenTool className="w-8 h-8 text-nebula-500" />
                <h2 className="text-3xl md:text-4xl font-display font-bold text-void-900 dark:text-starlight-50">
                  Blogs
                </h2>
              </div>

              <div className="card max-w-4xl mx-auto">
                <div className="space-y-6">
                  {blogs.map((blog, index) => (
                    <motion.div
                      key={blog.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`flex flex-col md:flex-row md:items-start gap-4 pb-6 ${
                        index !== blogs.length - 1 ? 'border-b border-void-200 dark:border-starlight-800/30' : ''
                      }`}
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-cosmos-600 to-nebula-500 rounded-lg flex items-center justify-center shadow-glow">
                          <PenTool className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                          <div className="flex-1">
                            <h3 className="text-xl font-display font-bold text-void-900 dark:text-starlight-50 mb-1">
                              {blog.title}
                            </h3>
                            <div className="flex items-center space-x-4 text-void-500 dark:text-starlight-500 text-sm mb-2">
                              {blog.author && (
                                <div className="flex items-center space-x-1">
                                  <User className="w-4 h-4" />
                                  <span>{blog.author}</span>
                                </div>
                              )}
                              {blog.date && (
                                <div className="flex items-center space-x-1">
                                  <Calendar className="w-4 h-4" />
                                  <span>{blog.date}</span>
                                </div>
                              )}
                            </div>
                          </div>
                          {blog.category && (
                            <span className="px-2 py-1 bg-cosmos-50 dark:bg-cosmos-950/30 text-cosmos-700 dark:text-cosmos-300 rounded-md border border-cosmos-200 dark:border-cosmos-800/30 text-xs font-medium flex-shrink-0">
                              {blog.category}
                            </span>
                          )}
                        </div>
                        {blog.description && (
                          <p className="text-sm text-void-600 dark:text-starlight-400 leading-relaxed mb-3">
                            {blog.description}
                          </p>
                        )}
                        {blog.link && (
                          <a
                            href={blog.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-1.5 text-sm text-cosmos-600 dark:text-cosmos-400 hover:text-cosmos-700 dark:hover:text-cosmos-300 font-medium transition-colors"
                          >
                            <span>Read Blog</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Books Section */}
          {books.length > 0 && (
            <motion.div variants={itemVariants} className="mb-16">
              <div className="flex items-center space-x-3 mb-8">
                <BookOpen className="w-8 h-8 text-nebula-500" />
                <h2 className="text-3xl md:text-4xl font-display font-bold text-void-900 dark:text-starlight-50">
                  Books I have read
                </h2>
              </div>

              <div className="card max-w-4xl mx-auto">
                <div className="space-y-6">
                  {books.map((book, index) => (
                    <motion.div
                      key={book.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`flex flex-col md:flex-row md:items-start gap-4 pb-6 ${
                        index !== books.length - 1 ? 'border-b border-void-200 dark:border-starlight-800/30' : ''
                      }`}
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-cosmos-500 to-nebula-600 rounded-lg flex items-center justify-center shadow-glow">
                          <BookOpen className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                          <div className="flex-1">
                            <h3 className="text-xl font-display font-bold text-void-900 dark:text-starlight-50 mb-1">
                              {book.title}
                            </h3>
                            {book.author && (
                              <div className="flex items-center space-x-2 text-void-600 dark:text-starlight-400 mb-2">
                                <User className="w-4 h-4 text-cosmos-500 flex-shrink-0" />
                                <span className="text-sm font-medium">{book.author}</span>
                              </div>
                            )}
                          </div>
                          <div className="flex items-center space-x-3 flex-shrink-0">
                            {book.year && (
                              <div className="flex items-center space-x-1 text-void-500 dark:text-starlight-500">
                                <Calendar className="w-4 h-4" />
                                <span className="text-sm">{book.year}</span>
                              </div>
                            )}
                            {book.category && (
                              <span className="px-2 py-1 bg-cosmos-50 dark:bg-cosmos-950/30 text-cosmos-700 dark:text-cosmos-300 rounded-md border border-cosmos-200 dark:border-cosmos-800/30 text-xs font-medium">
                                {book.category}
                              </span>
                            )}
                          </div>
                        </div>
                        {book.description && (
                          <p className="text-sm text-void-600 dark:text-starlight-400 leading-relaxed mb-3">
                            {book.description}
                          </p>
                        )}
                        {book.link && (
                          <a
                            href={book.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-1.5 text-sm text-cosmos-600 dark:text-cosmos-400 hover:text-cosmos-700 dark:hover:text-cosmos-300 font-medium transition-colors"
                          >
                            <span>Read Book</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Papers Section */}
          {papers.length > 0 && (
            <motion.div variants={itemVariants} className="mb-16">
              <div className="flex items-center space-x-3 mb-8">
                <FileText className="w-8 h-8 text-nebula-500" />
                <h2 className="text-3xl md:text-4xl font-display font-bold text-void-900 dark:text-starlight-50">
                  Papers I have read
                </h2>
              </div>

              <div className="card max-w-4xl mx-auto">
                <div className="space-y-6">
                  {papers.map((paper, index) => (
                    <motion.div
                      key={paper.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`flex flex-col md:flex-row md:items-start gap-4 pb-6 ${
                        index !== papers.length - 1 ? 'border-b border-void-200 dark:border-starlight-800/30' : ''
                      }`}
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-nebula-500 to-cosmos-600 rounded-lg flex items-center justify-center shadow-glow">
                          <FileText className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                          <div className="flex-1">
                            <h3 className="text-xl font-display font-bold text-void-900 dark:text-starlight-50 mb-1">
                              {paper.title}
                            </h3>
                            {paper.authors && (
                              <div className="flex items-start space-x-2 text-void-600 dark:text-starlight-400 mb-2">
                                <User className="w-4 h-4 text-cosmos-500 flex-shrink-0 mt-0.5" />
                                <span className="text-sm font-medium">{paper.authors}</span>
                              </div>
                            )}
                            <div className="flex items-center space-x-4 text-void-500 dark:text-starlight-500 text-sm mb-2">
                              {paper.venue && <span>{paper.venue}</span>}
                              {paper.venue && paper.year && <span>•</span>}
                              {paper.year && (
                                <div className="flex items-center space-x-1">
                                  <Calendar className="w-4 h-4" />
                                  <span>{paper.year}</span>
                                </div>
                              )}
                            </div>
                          </div>
                          {paper.category && (
                            <span className="px-2 py-1 bg-nebula-50 dark:bg-nebula-950/30 text-nebula-700 dark:text-nebula-300 rounded-md border border-nebula-200 dark:border-nebula-800/30 text-xs font-medium flex-shrink-0">
                              {paper.category}
                            </span>
                          )}
                        </div>
                        {paper.description && (
                          <p className="text-sm text-void-600 dark:text-starlight-400 leading-relaxed mb-3">
                            {paper.description}
                          </p>
                        )}
                        {paper.link && (
                          <a
                            href={paper.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-1.5 text-sm text-nebula-600 dark:text-nebula-400 hover:text-nebula-700 dark:hover:text-nebula-300 font-medium transition-colors"
                          >
                            <span>Read Paper</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

        </motion.div>
      </div>
    </div>
  );
};

export default Reading;
