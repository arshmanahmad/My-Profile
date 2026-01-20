import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "../utils/cnFunction";
const Navigation = ({
  navItems = [],
  activeSection = "home",
  onNavClick = () => {},
  className = "",
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    onNavClick(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-slate-900/80 backdrop-blur-2xl border-b border-slate-700/50 shadow-2xl shadow-slate-900/50"
          : "bg-transparent",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="flex justify-between items-center py-2 sm:py-3 md:py-4 gap-2 md:gap-4">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("home");
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white flex-shrink-0 drop-shadow-lg max-w-[40%] xs:max-w-[45%] sm:max-w-[35%] md:max-w-[30%] lg:max-w-none hover:opacity-80 transition-opacity cursor-pointer"
          >
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-400 bg-clip-text text-transparent truncate block">
              Arshman Ahmad
            </span>
          </motion.a>

          {/* Desktop Navigation - Show ONLY on medium screens and up (768px+) */}
          {navItems.length > 0 && (
            <div className="hidden md:flex items-center flex-1 justify-end space-x-1 md:space-x-1.5 lg:space-x-2 xl:space-x-3 min-w-0 ml-2 lg:ml-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleNavClick(item.href.substring(1))}
                  className={cn(
                    "text-xs md:text-sm lg:text-base font-semibold transition-all duration-300 px-2 md:px-2.5 lg:px-3 xl:px-4 py-1.5 md:py-2 rounded-lg lg:rounded-xl relative whitespace-nowrap z-10 focus-ring backdrop-blur-sm border border-transparent flex-shrink-0",
                    activeSection === item.href.substring(1)
                      ? "text-white bg-blue-600/30 border-blue-500/50 shadow-lg shadow-blue-500/30"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50 hover:border-slate-700/50"
                  )}
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-current={
                    activeSection === item.href.substring(1)
                      ? "page"
                      : undefined
                  }
                >
                  <span className="relative z-10">{item.name}</span>
                  {activeSection === item.href.substring(1) && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-indigo-600/30 to-sky-600/30 rounded-lg lg:rounded-xl backdrop-blur-sm border border-blue-500/30"
                      layoutId="activeTab"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          )}

          {/* Mobile Menu Button - Show ONLY on screens smaller than medium (< 768px) */}
          {navItems.length > 0 && (
            <motion.button
              className="md:hidden text-white p-2.5 sm:p-3 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-colors border border-slate-700/50 backdrop-blur-sm min-w-[44px] min-h-[44px] flex items-center justify-center flex-shrink-0 ml-auto"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          )}
        </div>

        {/* Mobile Navigation - Show only on screens smaller than medium (< 768px) AND when menu is open */}
        {navItems.length > 0 && (
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden bg-slate-900/95 backdrop-blur-2xl border-t border-slate-700/50 rounded-b-xl overflow-hidden shadow-2xl mt-1"
              >
                <div className="px-3 sm:px-4 py-3 sm:py-4 space-y-1.5 sm:space-y-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      onClick={() => handleNavClick(item.href.substring(1))}
                      className={cn(
                        "block w-full text-left px-4 py-2.5 sm:py-3 rounded-xl transition-all duration-300 text-sm sm:text-base font-medium backdrop-blur-sm min-h-[44px] flex items-center border border-transparent",
                        activeSection === item.href.substring(1)
                          ? "text-white bg-blue-600/30 border-blue-500/50 shadow-lg"
                          : "text-slate-300 hover:text-white hover:bg-slate-800/50 hover:border-slate-700/50"
                      )}
                      whileHover={{ x: 5, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </nav>
  );
};

export { Navigation };
