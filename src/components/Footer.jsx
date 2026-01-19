import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Globe, Rocket } from 'lucide-react';

const Footer = ({ personalData }) => {

  const socialLinks = [
    { icon: Github, url: personalData?.social?.github, label: 'GitHub', color: 'hover:text-white hover:bg-[#333]' },
    { icon: Linkedin, url: personalData?.social?.linkedin, label: 'LinkedIn', color: 'hover:text-white hover:bg-[#0077b5]' },
    { icon: Twitter, url: personalData?.social?.twitter, label: 'Twitter', color: 'hover:text-white hover:bg-[#1da1f2]' },
    { icon: Globe, url: personalData?.social?.website, label: 'Website', color: 'hover:text-cosmos-600 dark:hover:text-cosmos-400' },
  ];

  return (
    <footer className="relative bg-void-50 dark:bg-void-900 border-t border-void-200 dark:border-starlight-800/30 mt-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cosmos-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-nebula-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 pb-2 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-9 h-9 bg-gradient-to-br from-cosmos-500 to-nebula-600 rounded-lg flex items-center justify-center">
                <Rocket className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-lg font-display font-bold text-gradient">
                {personalData?.name}
              </h3>
            </div>
            <p className="text-void-600 dark:text-starlight-400 text-sm leading-relaxed">
              {personalData?.tagline}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-base font-display font-semibold mb-3 text-void-900 dark:text-starlight-100">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {['Home', 'About', 'Work', 'Projects', 'Resume'].map((link) => (
                <Link
                  key={link}
                  to={`/${link.toLowerCase() === 'home' ? '' : link.toLowerCase()}`}
                  className="text-void-600 dark:text-starlight-400 hover:text-cosmos-600 dark:hover:text-cosmos-400 text-sm transition-colors duration-200"
                >
                  {link}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-base font-display font-semibold mb-3 text-void-900 dark:text-starlight-100">
              Connect
            </h3>
            <div className="flex flex-wrap gap-3 mb-3">
              {socialLinks.map((social, index) => 
                social.url && (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-11 h-11 bg-void-100 dark:bg-void-800 rounded-xl flex items-center justify-center transition-all duration-300 border border-void-300 dark:border-starlight-700 ${social.color} group`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-void-600 dark:text-starlight-400 group-hover:text-current transition-colors" />
                  </motion.a>
                )
              )}
            </div>
            {personalData?.email && (
              <a 
                href={`mailto:${personalData.email}`}
                className="flex items-center space-x-2 text-void-600 dark:text-starlight-400 hover:text-cosmos-600 dark:hover:text-cosmos-400 transition-colors text-sm group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>{personalData.email}</span>
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
