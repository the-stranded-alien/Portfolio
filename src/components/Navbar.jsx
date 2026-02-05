import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Sparkles, SunDim } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = ({ personalData }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Work', path: '/work' },
    { name: 'Education', path: '/education' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Reading', path: '/reading' },
    { name: 'Resume', path: '/resume' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white/80 dark:bg-void-950/90 backdrop-blur-xl border-b border-void-200 dark:border-starlight-800/30 shadow-xl dark:shadow-glow' 
          : 'bg-white/80 dark:bg-void-950/90 backdrop-blur-xl lg:bg-transparent lg:backdrop-blur-none border-b border-void-200 dark:border-starlight-800/30 lg:border-b-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="group flex-shrink-0">
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-cosmos-500 to-nebula-600 rounded-xl flex items-center justify-center font-display font-bold text-xl text-white shadow-lg group-hover:shadow-glow-lg transition-all duration-300 border border-cosmos-400/30">
                  {'SG'}
                </div>
                <motion.div
                  className="absolute -top-1 -right-1"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-4 h-4 text-nebula-400" />
                </motion.div>
              </div>
              <span className="text-xl font-display font-bold text-gradient hidden md:block">
                {personalData?.name || 'Portfolio'}
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 flex-shrink-0">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex-shrink-0"
              >
                <Link
                  to={item.path}
                  className={`nav-link px-3 py-2 rounded-lg text-sm whitespace-nowrap ${
                    location.pathname === item.path ? 'active' : ''
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle: Cool sliding toggle */}
            <div className="relative flex items-center bg-void-100/80 dark:bg-void-800/80 backdrop-blur-sm rounded-xl p-1 border border-void-300/50 dark:border-starlight-700/50 shadow-lg dark:shadow-glow">
              {/* Sliding indicator */}
              <motion.div
                className="absolute h-8 rounded-lg bg-gradient-to-r from-cosmos-500 to-nebula-500 shadow-glow z-0"
                initial={false}
                animate={{
                  x: theme === 'light' ? 0 : theme === 'dim' ? 32 : 64,
                  width: 32,
                }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              />
              
              {/* Theme buttons */}
              <div className="relative z-10 flex items-center">
                <motion.button
                  onClick={() => setTheme('light')}
                  className="relative flex items-center justify-center w-8 h-8 rounded-lg transition-colors duration-200"
                  aria-label="Light theme"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Moon className={`w-4 h-4 transition-colors duration-200 ${
                    theme === 'light' 
                      ? 'text-white drop-shadow-lg' 
                      : 'text-void-500 dark:text-starlight-500 hover:text-cosmos-600 dark:hover:text-cosmos-400'
                  }`} />
                </motion.button>
                
                <motion.button
                  onClick={() => setTheme('dim')}
                  className="relative flex items-center justify-center w-8 h-8 rounded-lg transition-colors duration-200"
                  aria-label="Dim theme"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SunDim className={`w-4 h-4 transition-colors duration-200 ${
                    theme === 'dim' 
                      ? 'text-white drop-shadow-lg' 
                      : 'text-void-500 dark:text-starlight-500 hover:text-cosmos-600 dark:hover:text-cosmos-400'
                  }`} />
                </motion.button>
                
                <motion.button
                  onClick={() => setTheme('dark')}
                  className="relative flex items-center justify-center w-8 h-8 rounded-lg transition-colors duration-200"
                  aria-label="Dark theme"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Sun className={`w-4 h-4 transition-colors duration-200 ${
                    theme === 'dark' 
                      ? 'text-white drop-shadow-lg' 
                      : 'text-void-500 dark:text-starlight-500 hover:text-cosmos-600 dark:hover:text-cosmos-400'
                  }`} />
                </motion.button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden theme-toggle"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden w-full"
            >
              <div className="py-4 space-y-2 border-t border-void-200 dark:border-starlight-800/30 mt-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-xl transition-all duration-300 ${
                        location.pathname === item.path
                          ? 'bg-cosmos-500/10 dark:bg-cosmos-500/20 text-cosmos-600 dark:text-cosmos-400 border-l-4 border-cosmos-500 font-semibold'
                          : 'text-void-600 dark:text-starlight-300 hover:bg-void-100 dark:hover:bg-void-800 hover:text-cosmos-600 dark:hover:text-cosmos-400'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
