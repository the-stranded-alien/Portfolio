import { motion } from 'framer-motion';
import { useState } from 'react';
import { Download, FileText, Eye, List } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';

const Resume = ({ data }) => {
  const { personal, resume } = data;
  const [viewMode, setViewMode] = useState('pdf'); // 'pdf' or 'details'

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const handleDownload = () => {
    // Create a link to download the resume
    const link = document.createElement('a');
    link.href = resume?.pdfUrl || '/resume.pdf';
    link.download = `${personal?.name?.replace(/\s+/g, '_')}_Resume.pdf` || 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="page-container nebula-bg cosmic-grid">
      <div className="aurora"></div>
      <AnimatedBackground />
      <div className="content-wrapper pt-32">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.h1 variants={itemVariants} className="section-title">
            Resume
          </motion.h1>

          {/* View Toggle & Download */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            <div className="inline-flex bg-void-100 dark:bg-void-800 rounded-xl p-1 border border-void-300 dark:border-starlight-700">
              <button
                onClick={() => setViewMode('pdf')}
                className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  viewMode === 'pdf'
                    ? 'bg-gradient-to-r from-cosmos-600 to-nebula-600 text-white shadow-lg'
                    : 'text-void-600 dark:text-starlight-400 hover:text-cosmos-600 dark:hover:text-cosmos-400'
                }`}
              >
                <Eye className="w-4 h-4" />
                <span>PDF View</span>
              </button>
              <button
                onClick={() => setViewMode('details')}
                className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  viewMode === 'details'
                    ? 'bg-gradient-to-r from-cosmos-600 to-nebula-600 text-white shadow-lg'
                    : 'text-void-600 dark:text-starlight-400 hover:text-cosmos-600 dark:hover:text-cosmos-400'
                }`}
              >
                <List className="w-4 h-4" />
                <span>Details</span>
              </button>
            </div>

            <motion.button
              onClick={handleDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center space-x-2 shadow-glow-lg"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume (PDF)</span>
            </motion.button>
          </motion.div>

          {/* PDF Viewer */}
          {viewMode === 'pdf' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="card overflow-hidden"
            >
              <div className="bg-void-100 dark:bg-void-900 rounded-xl overflow-hidden shadow-inner">
                <div className="aspect-[8.5/11] w-full bg-white dark:bg-void-800 flex items-center justify-center">
                  <iframe
                    src={resume?.pdfUrl || '/resume.pdf'}
                    className="w-full h-full border-0"
                    title="Resume PDF"
                    style={{ minHeight: '800px' }}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-white dark:bg-void-900 pointer-events-none opacity-0 hover:opacity-0 transition-opacity">
                    <FileText className="w-16 h-16 text-cosmos-500 mb-4" />
                    <h3 className="text-xl font-display font-bold text-void-900 dark:text-starlight-50 mb-2">
                      Resume PDF
                    </h3>
                    <p className="text-void-600 dark:text-starlight-400 max-w-md">
                      To view your resume, please place your resume.pdf file in the public folder
                      and update the pdfUrl in portfolio.json to "/resume.pdf"
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-void-500 dark:text-starlight-500">
                  <strong>Note:</strong> Place your resume.pdf in the <code className="px-2 py-1 bg-void-100 dark:bg-void-800 rounded">public</code> folder and update <code className="px-2 py-1 bg-void-100 dark:bg-void-800 rounded">pdfUrl</code> in portfolio.json
                </p>
              </div>
            </motion.div>
          )}

          {/* Details View */}
          {viewMode === 'details' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto space-y-6"
            >
              <div className="card">
                <div className="text-center mb-6 pb-6 border-b border-void-200 dark:border-starlight-800/30">
                  <h2 className="text-4xl font-display font-bold text-void-900 dark:text-starlight-50 mb-2">
                    {personal?.name}
                  </h2>
                  <p className="text-xl text-gradient font-semibold mb-4">
                    {personal?.title}
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 text-void-600 dark:text-starlight-400 text-sm">
                    {personal?.email && <span>{personal.email}</span>}
                    {personal?.phone && <span>•</span>}
                    {personal?.phone && <span>{personal.phone}</span>}
                    {personal?.location && <span>•</span>}
                    {personal?.location && <span>{personal.location}</span>}
                  </div>
                </div>

                {resume?.sections?.summary && (
                  <div className="mb-6">
                    <h3 className="text-2xl font-display font-bold text-void-900 dark:text-starlight-50 mb-3">
                      Professional Summary
                    </h3>
                    <p className="text-void-700 dark:text-starlight-300 leading-relaxed">
                      {resume.sections.summary}
                    </p>
                  </div>
                )}

                {resume?.sections?.highlights && (
                  <div>
                    <h3 className="text-2xl font-display font-bold text-void-900 dark:text-starlight-50 mb-3">
                      Key Highlights
                    </h3>
                    <ul className="space-y-2">
                      {resume.sections.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-cosmos-500 to-nebula-500 rounded-full mt-2 flex-shrink-0 shadow-glow" />
                          <span className="text-void-700 dark:text-starlight-300 leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="card">
                <h3 className="text-2xl font-display font-bold text-void-900 dark:text-starlight-50 mb-6">
                  Work Experience
                </h3>
                <div className="space-y-6">
                  {data.work?.slice(0, 3).map((job, idx) => (
                    <div key={job.id} className={idx !== 0 ? 'pt-6 border-t border-void-200 dark:border-starlight-800/30' : ''}>
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-start space-x-3">
                          {job.logo && (
                            <img 
                              src={job.logo} 
                              alt={`${job.company} logo`}
                              className="w-12 h-12 object-contain flex-shrink-0 mt-1"
                            />
                          )}
                          <div>
                            <h4 className="text-xl font-semibold text-void-900 dark:text-starlight-50">{job.position}</h4>
                            <p className="text-gradient font-medium">{job.company}</p>
                          </div>
                        </div>
                        <span className="text-sm text-void-600 dark:text-starlight-400 bg-cosmos-50 dark:bg-cosmos-950/30 px-3 py-1 rounded-full">
                          {job.startDate} - {job.endDate}
                        </span>
                      </div>
                      <p className="text-void-700 dark:text-starlight-300 mb-3">{job.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card">
                <h3 className="text-2xl font-display font-bold text-void-900 dark:text-starlight-50 mb-6">
                  Education
                </h3>
                <div className="space-y-4">
                  {data.education?.map((edu, idx) => (
                    <div key={edu.id} className={idx !== 0 ? 'pt-4 border-t border-void-200 dark:border-starlight-800/30' : ''}>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="text-xl font-semibold text-void-900 dark:text-starlight-50">
                            {edu.degree} in {edu.field}
                          </h4>
                          <p className="text-gradient font-medium">{edu.institution}</p>
                        </div>
                        <span className="text-sm text-void-600 dark:text-starlight-400 bg-cosmos-50 dark:bg-cosmos-950/30 px-3 py-1 rounded-full">
                          {edu.startDate} - {edu.endDate}
                        </span>
                      </div>
                    </div>
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

export default Resume;
