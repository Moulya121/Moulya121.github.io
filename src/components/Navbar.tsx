import { motion } from 'framer-motion';

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start' // Aligns to top of viewport
    });
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end h-16">
          <div className="flex space-x-6">
            {['overview', 'skills', 'projects', 'activities', 'contact'].map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                className="relative text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium capitalize transition-colors group"
                whileHover={{ scale: 1.05 }}
              >
                <span className="relative">
                  {item === 'overview' ? 'About Me' : item}
                  <span className="absolute left-0 bottom-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300"></span>
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}