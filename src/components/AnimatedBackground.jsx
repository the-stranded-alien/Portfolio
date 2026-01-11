import { motion, AnimatePresence } from 'framer-motion';
import { Laptop, Computer, Smartphone, Brain, Cpu, MemoryStick, Database } from 'lucide-react';
import { useState, useEffect } from 'react';

const AnimatedBackground = () => {
  const icons = [Laptop, Computer, Smartphone, Brain, Cpu, Database, MemoryStick];
  
  const generateRandomPosition = () => {
    // Generate position on edges (avoid center 60-70%)
    // Left edge: 0-20%, Right edge: 80-100%
    // Top edge: 0-20%, Bottom edge: 80-100%
    const side = Math.random();
    let x, y;
    
    if (side < 0.25) {
      // Left side
      x = Math.random() * 20; // 0-20%
      y = Math.random() * 100; // 0-100% (full height)
    } else if (side < 0.5) {
      // Right side
      x = Math.random() * 20 + 80; // 80-100%
      y = Math.random() * 100; // 0-100% (full height)
    } else if (side < 0.75) {
      // Top side
      x = Math.random() * 100; // 0-100% (full width)
      y = Math.random() * 20; // 0-20%
    } else {
      // Bottom side
      x = Math.random() * 100; // 0-100% (full width)
      y = Math.random() * 20 + 80; // 80-100%
    }
    
    return {
      x,
      y,
      rotation: Math.random() * 360,
      iconIndex: Math.floor(Math.random() * icons.length),
      size: Math.random() * 24 + 20, // 20px to 44px
      delay: Math.random() * 2,
      id: Math.random().toString(36).substr(2, 9), // Unique ID for each icon
    };
  };

  // Initialize with positions immediately
  const [positions, setPositions] = useState(() => 
    Array.from({ length: 16 }, generateRandomPosition)
  );

  // Update positions randomly
  useEffect(() => {

    // Update positions randomly every 8-12 seconds
    const interval = setInterval(() => {
      setPositions(prev => prev.map(() => ({
        ...generateRandomPosition(),
        id: Math.random().toString(36).substr(2, 9) // New ID for smooth transition
      })));
    }, 8000 + Math.random() * 4000); // 8-12 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Planets - Corner Positions */}
      {/* Large Planet - Top Left Corner */}
      <motion.div
        className="absolute left-2 top-2 hidden lg:block pointer-events-none"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      >
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <div className="w-36 h-36 rounded-full bg-gradient-to-br from-cosmos-500/40 to-nebula-600/40 blur-xl border-2 border-cosmos-400/30 shadow-lg shadow-cosmos-500/20" />
        </motion.div>
      </motion.div>

      {/* Medium Planet - Top Right Corner */}
      <motion.div
        className="absolute right-2 top-2 hidden xl:block pointer-events-none"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <motion.div
          animate={{ 
            rotate: -360,
            y: [0, -15, 0]
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-nebula-500/40 to-cosmos-500/40 blur-lg border-2 border-nebula-400/30 shadow-lg shadow-nebula-500/20" />
        </motion.div>
      </motion.div>

      {/* Medium Planet - Bottom Right Corner */}
      <motion.div
        className="absolute right-2 bottom-2 hidden lg:block pointer-events-none"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.7 }}
      >
        <motion.div
          animate={{ 
            rotate: 360,
            x: [0, 10, 0]
          }}
          transition={{ 
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            x: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cosmos-600/40 to-nebula-500/40 blur-md border-2 border-cosmos-500/30 shadow-lg shadow-cosmos-600/20" />
        </motion.div>
      </motion.div>

      {/* Medium Planet - Bottom Left Corner */}
      <motion.div
        className="absolute left-2 bottom-2 hidden xl:block pointer-events-none"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.9 }}
      >
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 18, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <div className="w-26 h-26 rounded-full bg-gradient-to-br from-nebula-600/40 to-cosmos-500/40 blur-lg border-2 border-nebula-500/30 shadow-lg shadow-nebula-600/20" />
        </motion.div>
      </motion.div>

      {/* Floating Tech Icons */}
      <AnimatePresence mode="popLayout">
        {positions.map((pos) => {
          const IconComponent = icons[pos.iconIndex];
          const colors = [
            'text-cosmos-400',
            'text-nebula-400',
            'text-cosmos-500',
            'text-nebula-500',
            'text-cosmos-600',
            'text-nebula-600',
          ];
          const colorClass = colors[pos.iconIndex % colors.length];
          
          return (
            <motion.div
              key={pos.id}
              className="absolute hidden md:block pointer-events-none z-10"
              style={{
                left: `${pos.x}%`,
                top: `${pos.y}%`,
              }}
              initial={{ 
                opacity: 0,
                scale: 0.3,
                rotate: pos.rotation
              }}
              animate={{ 
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.2, 1],
                rotate: pos.rotation + 360,
                y: [0, -30, 0]
              }}
              exit={{ 
                opacity: 0,
                scale: 0.3,
                transition: { 
                  duration: 0.8,
                  ease: "easeInOut"
                }
              }}
              transition={{ 
                opacity: { 
                  duration: 2.5, 
                  repeat: Infinity, 
                  ease: "easeInOut"
                },
                scale: { 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut", 
                  delay: pos.delay
                },
                rotate: { 
                  duration: 12 + Math.random() * 6, 
                  repeat: Infinity, 
                  ease: "linear", 
                  delay: pos.delay
                },
                y: { 
                  duration: 4 + Math.random() * 2, 
                  repeat: Infinity, 
                  ease: "easeInOut", 
                  delay: pos.delay
                },
                default: {
                  duration: 1,
                  ease: "easeOut"
                }
              }}
            >
              <IconComponent 
                className={`${colorClass}`}
                style={{ 
                  width: `${pos.size}px`, 
                  height: `${pos.size}px`,
                  filter: 'drop-shadow(0 0 10px rgba(139, 92, 246, 0.5))',
                  opacity: 0.7
                }}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </>
  );
};

export default AnimatedBackground;
