import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Database, ArrowLeftRight } from 'lucide-react';
import content from '../content/content.ar';

export const ArchitectureDiagram: React.FC = () => {
  const { layers, heading, raw } = content.appendixA.section8;

  return (
    <div className="bg-white border border-blue-50 rounded-card p-6 md:p-8 shadow-soft">
      <div className="flex items-center justify-between pb-6 border-b border-blue-50">
        <div>
          <span className="text-xs font-semibold px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full">
            {heading.replace(/^##\s*\d+\.\s*/, '')}
          </span>
          <h3 className="text-xl font-bold text-ink mt-2">
            {heading.replace(/^##\s*\d+\.\s*/, '')}
          </h3>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-xs text-muted">
          <ArrowLeftRight className="w-4 h-4 text-blue-500" />
          <span>{layers.protocol}</span>
        </div>
      </div>

      {/* 3-tier Interactive Flow */}
      <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-center relative">
        {/* Layer 1: Frontend */}
        <motion.div
          whileHover={{ y: -4 }}
          className="bg-surface border-2 border-blue-500/30 rounded-2xl p-5 text-center shadow-soft relative overflow-hidden group"
        >
          <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-inner">
            <Layout className="w-6 h-6" />
          </div>
          <h4 className="text-base font-bold text-ink" dir="ltr">
            {layers.frontend}
          </h4>
        </motion.div>

        {/* Connector 1 with moving data packet (desktop) */}
        <div className="hidden md:flex flex-col items-center justify-center relative -mx-3 z-10">
          <span className="text-[11px] font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200 mb-1">
            {layers.protocol}
          </span>
          <div className="relative w-full h-1 bg-blue-200 rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 bottom-0 w-8 bg-blue-500 rounded-full shadow-[0_0_8px_#0A6EBD]"
              animate={{ left: ['-10%', '110%'] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            />
          </div>
        </div>

        {/* Layer 2: Backend */}
        <motion.div
          whileHover={{ y: -4 }}
          className="bg-surface border-2 border-blue-700/30 rounded-2xl p-5 text-center shadow-soft relative overflow-hidden group"
        >
          <div className="w-12 h-12 bg-blue-700/10 text-blue-700 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-inner">
            <Server className="w-6 h-6" />
          </div>
          <h4 className="text-base font-bold text-ink" dir="ltr">
            {layers.backend}
          </h4>
        </motion.div>

        {/* Connector 2 with moving data packet (desktop) */}
        <div className="hidden md:flex flex-col items-center justify-center relative -mx-3 z-10">
          <span className="text-[11px] font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200 mb-1">
            EF Core
          </span>
          <div className="relative w-full h-1 bg-blue-200 rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 bottom-0 w-8 bg-blue-700 rounded-full shadow-[0_0_8px_#0B4F8A]"
              animate={{ left: ['110%', '-10%'] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
            />
          </div>
        </div>

        {/* Layer 3: Database */}
        <motion.div
          whileHover={{ y: -4 }}
          className="bg-surface border-2 border-blue-900/30 rounded-2xl p-5 text-center shadow-soft relative overflow-hidden group"
        >
          <div className="w-12 h-12 bg-blue-900/10 text-blue-900 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-inner">
            <Database className="w-6 h-6" />
          </div>
          <h4 className="text-base font-bold text-ink" dir="ltr">
            {layers.database}
          </h4>
        </motion.div>
      </div>

      <div className="p-3 bg-surface rounded-xl border border-blue-50 text-xs text-muted font-mono text-center" dir="ltr">
        {raw}
      </div>
    </div>
  );
};

export default ArchitectureDiagram;
