import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "../utils/cnFunction";

const Navigation = ({ 
  navItems = [], 
  activeSection = "home",
  onNavClick = () => {},
  className = ""
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
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled 
        ? "bg-[#111827]/95 backdrop-blur-lg border-b border-[#374151]/50" 
        : "bg-transparent",
      className
    )}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          {/* <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-[#D1D5DB] flex-shrink-0"
          >
            Arshman Ahmad
          </motion.div> */}

          {/* Desktop Navigation - Show on large screens and up */}
          <div className="hidden lg:flex space-x-1 xl:space-x-2 2xl:space-x-3">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleNavClick(item.href.substring(1))}
                className={cn(
                  "text-sm xl:text-base font-medium transition-all duration-300 px-2 xl:px-3 py-2 rounded-lg relative whitespace-nowrap",
                  activeSection === item.href.substring(1)
                    ? "text-[#3B82F6] bg-[#3B82F6]/10 border border-[#3B82F6]/20"
                    : "text-[#D1D5DB] hover:text-[#3B82F6] hover:bg-[#3B82F6]/5"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/20 to-[#8B5CF6]/20 rounded-lg"
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button - Show on screens smaller than large */}
          <motion.button
            className="lg:hidden text-[#FFFFFF] p-2 rounded-lg bg-[#1F2937]/50 hover:bg-[#374151]/50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
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
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#111827]/95 backdrop-blur-lg border-t border-[#374151]/50 rounded-b-lg overflow-hidden"
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleNavClick(item.href.substring(1))}
                    className={cn(
                      "block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 text-sm font-medium",
                      activeSection === item.href.substring(1)
                        ? "text-[#3B82F6] bg-[#3B82F6]/10 border border-[#3B82F6]/20"
                        : "text-[#D1D5DB] hover:text-[#3B82F6] hover:bg-[#3B82F6]/5"
                    )}
                    whileHover={{ x: 5 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export { Navigation };
