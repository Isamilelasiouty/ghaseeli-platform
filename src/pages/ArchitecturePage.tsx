import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  ShieldCheck,
  Smartphone,
  CheckCircle,
  Table,
} from 'lucide-react';
import content from '../content/content.ar';
import { CountUp } from '../components/CountUp';
import { ArchitectureDiagram } from '../components/ArchitectureDiagram';
import { NextPageCard } from '../components/NextPageCard';

export const ArchitecturePage: React.FC = () => {
  const [hoveredEntity, setHoveredEntity] = useState<number | null>(null);

  const { items: nfrItems, heading: nfrHeading } = content.appendixA.section6;
  const { entities, heading: erdHeading, intro: erdIntro } = content.appendixA.section7;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
      {/* 1. Header */}
      <section className="space-y-4">
        <span className="text-xs font-bold px-3 py-1 bg-blue-50 text-blue-700 rounded-full">
          04
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-ink leading-tight">
          المتطلبات والمعمارية
        </h1>
        <p className="text-muted text-base sm:text-lg max-w-3xl leading-relaxed">
          {nfrHeading.replace(/^##\s*\d+\.\s*/, '')}
        </p>
      </section>

      {/* 2. Non-Functional Requirements (NFR) */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink">
            {nfrHeading.replace(/^##\s*\d+\.\s*/, '')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Performance with 3 ثوانٍ */}
          <div className="bg-white p-6 rounded-card border border-blue-50 shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-extrabold text-lg text-ink mb-1">
                {nfrItems[0].title}
              </h3>
              <p className="text-xs sm:text-sm text-ink/80 leading-relaxed mt-2">
                {nfrItems[0].detail}
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-blue-50">
              <span className="text-3xl font-extrabold text-blue-500 block">
                &lt; 3 <span className="text-lg">{nfrItems[0].number.slice(2)}</span>
              </span>
            </div>
          </div>

          {/* Card 2: Security & Compliance */}
          <div className="bg-white p-6 rounded-card border border-blue-50 shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-extrabold text-lg text-ink mb-1">
                {nfrItems[1].title}
              </h3>
              <p className="text-xs sm:text-sm text-ink/80 leading-relaxed mt-2">
                {nfrItems[1].detail}
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-blue-50">
              <span className="text-xs font-bold text-ok bg-ok/10 px-3 py-1 rounded-full inline-block">
                Role-Based Authorization
              </span>
            </div>
          </div>

          {/* Card 3: Usability */}
          <div className="bg-white p-6 rounded-card border border-blue-50 shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-extrabold text-lg text-ink mb-1">
                {nfrItems[2].title}
              </h3>
              <p className="text-xs sm:text-sm text-ink/80 leading-relaxed mt-2">
                {nfrItems[2].detail}
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-blue-50">
              <span className="text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full inline-block">
                Responsive UI
              </span>
            </div>
          </div>

          {/* Card 4: Reliability with 99% */}
          <div className="bg-white p-6 rounded-card border border-blue-50 shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-ok flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-extrabold text-lg text-ink mb-1">
                {nfrItems[3].title}
              </h3>
              <p className="text-xs sm:text-sm text-ink/80 leading-relaxed mt-2">
                {nfrItems[3].detail}
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-blue-50">
              <span className="text-3xl font-extrabold text-ok block">
                <CountUp end={99} suffix="%" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ERD Schema (7 Entities Connected Diagram) */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink">
            {erdHeading.replace(/^##\s*\d+\.\s*/, '')}
          </h2>
          <p className="text-muted text-sm mt-1">{erdIntro}</p>
        </div>

        <div className="bg-surface rounded-card p-6 md:p-10 border border-blue-50 shadow-soft relative overflow-hidden">
          {/* 7 Connected Entities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            {entities.map((entity, idx) => {
              const isHovered = hoveredEntity === idx;
              return (
                <motion.div
                  key={entity.name}
                  onMouseEnter={() => setHoveredEntity(idx)}
                  onMouseLeave={() => setHoveredEntity(null)}
                  whileHover={{ y: -4 }}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    isHovered
                      ? 'bg-blue-500 text-white border-blue-500 shadow-elevated'
                      : 'bg-white text-ink border-blue-50 shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold ${
                        isHovered ? 'bg-white text-blue-500' : 'bg-blue-50 text-blue-700'
                      }`}
                    >
                      <Table className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono opacity-70">
                      0{idx + 1}
                    </span>
                  </div>

                  <h4
                    className={`font-heading font-extrabold text-base mb-1 ${
                      isHovered ? 'text-white' : 'text-blue-700'
                    }`}
                    dir="ltr"
                  >
                    {entity.name}
                  </h4>

                  <p
                    className={`text-xs leading-relaxed ${
                      isHovered ? 'text-blue-50' : 'text-muted'
                    }`}
                  >
                    {entity.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Decorative Inter-entity Connectors */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <line x1="10%" y1="30%" x2="90%" y2="30%" stroke="#0A6EBD" strokeWidth="1.5" strokeDasharray="4 4" />
              <line x1="10%" y1="70%" x2="90%" y2="70%" stroke="#0A6EBD" strokeWidth="1.5" strokeDasharray="4 4" />
              <line x1="30%" y1="10%" x2="30%" y2="90%" stroke="#0A6EBD" strokeWidth="1.5" strokeDasharray="4 4" />
              <line x1="70%" y1="10%" x2="70%" y2="90%" stroke="#0A6EBD" strokeWidth="1.5" strokeDasharray="4 4" />
            </svg>
          </div>
        </div>
      </section>

      {/* 4. Technical Architecture (3-Tier Animated Diagram) */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink">
            {content.appendixA.section8.heading.replace(/^##\s*\d+\.\s*/, '')}
          </h2>
        </div>

        <ArchitectureDiagram />
      </section>

      {/* Next Page Card */}
      <NextPageCard
        prevPath="/platform-and-smart-model"
        prevTitle="المنصة والنموذج الذكي"
        nextPath="/business-model-and-limits"
        nextTitle="نموذج العمل والحدود"
      />
    </div>
  );
};

export default ArchitecturePage;
