import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import content from '../content/content.ar';
import { KidneyLogo } from './KidneyLogo';

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
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-blue-50/80 shadow-xs transition-all duration-200">
        {/* Scroll Progress Bar */}
        <div
          className="absolute top-0 right-0 h-1 bg-gradient-to-l from-blue-500 to-blue-700 transition-all duration-150 ease-out z-50"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand: Kidney Logo + REN + منصة غسيلي */}
          <NavLink
            to="/"
            className="flex items-center gap-3.5 text-ink hover:text-blue-500 transition-colors group"
          >
            <KidneyLogo size={42} showIndicator={true} />

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-heading font-extrabold text-2xl tracking-tight text-blue-700 leading-none" dir="ltr">
                  REN
                </span>
                <span className="text-xs font-bold text-ink/80 block">
                  {content.meta.brandName}
                </span>
              </div>
              <span className="text-[10px] text-muted font-medium block mt-0.5 tracking-wider" dir="ltr">
                Resource · Emergency · Nephrology
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
                  `px-3.5 py-2 text-sm font-bold rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'text-blue-500 bg-blue-50 font-extrabold shadow-2xs'
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
                    `px-4 py-3 text-base font-bold rounded-xl transition-all ${
                      isActive
                        ? 'text-blue-500 bg-blue-50 font-extrabold'
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
