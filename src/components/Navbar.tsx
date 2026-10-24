import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Activity } from 'lucide-react';
import content from '../content/content.ar';

export const Navbar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navItems = [
    { label: 'الرئيسية', path: '/' },
    { label: 'المشكلة والأثر', path: '/problem-and-impact' },
    { label: 'الحلول القائمة', path: '/existing-solutions' },
    { label: 'المنصة والنموذج الذكي', path: '/platform-and-smart-model' },
    { label: 'المتطلبات والمعمارية', path: '/requirements-and-architecture' },
    { label: 'نموذج العمل والحدود', path: '/business-model-and-limits' },
  ];

  return (
    <>
      {/* Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:right-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-500 focus:text-white focus:rounded-lg focus:shadow-elevated"
      >
        Skip to main content
      </a>

      {/* Sticky Navigation Header */}
      <header className="sticky top-0 z-40 w-full bg-white/85 backdrop-blur-md border-b border-blue-50 transition-all duration-200">
        {/* Scroll Progress Bar */}
        <div
          className="absolute top-0 right-0 h-1 bg-blue-500 transition-all duration-150 ease-out z-50"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <NavLink
            to="/"
            className="flex items-center gap-3 text-ink hover:text-blue-500 transition-colors group"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all shadow-soft">
              <Activity className="w-6 h-6" />
            </div>
            <div>
              <span className="font-heading font-extrabold text-xl text-blue-700 block leading-tight">
                {content.meta.brandName}
              </span>
              <span className="text-[10px] text-muted block -mt-0.5">
                {content.meta.department}
              </span>
            </div>
          </NavLink>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-semibold rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'text-blue-500 bg-blue-50/80 font-bold'
                      : 'text-ink/80 hover:text-blue-500 hover:bg-surface'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-ink hover:bg-surface hover:text-blue-500 transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-20 z-30 bg-white border-b border-blue-50 shadow-elevated lg:hidden px-6 py-6"
          >
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-4 py-3 text-base font-semibold rounded-xl transition-all ${
                      isActive
                        ? 'text-blue-500 bg-blue-50 font-bold'
                        : 'text-ink hover:bg-surface'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
