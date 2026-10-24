import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProblemPage } from './pages/ProblemPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { PlatformPage } from './pages/PlatformPage';
import { ArchitecturePage } from './pages/ArchitecturePage';
import { BusinessPage } from './pages/BusinessPage';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
        className="w-full"
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/problem-and-impact" element={<ProblemPage />} />
          <Route path="/existing-solutions" element={<SolutionsPage />} />
          <Route path="/platform-and-smart-model" element={<PlatformPage />} />
          <Route path="/requirements-and-architecture" element={<ArchitecturePage />} />
          <Route path="/business-model-and-limits" element={<BusinessPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

export function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white text-ink font-body selection:bg-blue-50 selection:text-blue-700">
        <Navbar />
        <main id="main-content" className="flex-1 w-full">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
