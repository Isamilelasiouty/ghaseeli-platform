import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  User,
  HeartHandshake,
  ShieldAlert,
  Settings,
  ChevronDown,
} from 'lucide-react';
import content from '../content/content.ar';
import { McdmSimulator } from '../components/McdmSimulator';
import { MachineStatusLoop } from '../components/MachineStatusLoop';
import { QrCheckinAnimation } from '../components/QrCheckinAnimation';
import { BiHeatmapCard } from '../components/BiHeatmapCard';
import { NextPageCard } from '../components/NextPageCard';

export const PlatformPage: React.FC = () => {
  const [activeRole, setActiveRole] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<'patient' | 'center' | 'admin'>('patient');

  const { roles } = content.appendixA.section3;
  const { modules } = content.appendixA.section4;

  const roleIcons = [
    <User className="w-6 h-6 text-blue-500" />,
    <HeartHandshake className="w-6 h-6 text-ok" />,
    <Settings className="w-6 h-6 text-blue-700" />,
    <ShieldAlert className="w-6 h-6 text-warn" />,
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
      {/* 1. Header */}
      <section className="space-y-4">
        <span className="text-xs font-bold px-3 py-1 bg-blue-50 text-blue-700 rounded-full">
          03
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-ink leading-tight">
          المنصة والنموذج الذكي
        </h1>
        <p className="text-muted text-base sm:text-lg max-w-3xl leading-relaxed">
          {content.appendixA.section3.heading.replace(/^##\s*\d+\.\s*/, '')}
        </p>
      </section>

      {/* 2. User Roles with Expand/Flip Animation */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink">
            {content.appendixA.section3.heading.replace(/^##\s*\d+\.\s*/, '')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role, idx) => {
            const isExpanded = activeRole === idx;
            return (
              <motion.div
                key={role.title}
                whileHover={{ y: -4 }}
                onClick={() => setActiveRole(isExpanded ? null : idx)}
                className={`bg-white p-6 rounded-card border transition-all cursor-pointer flex flex-col justify-between ${
                  isExpanded
                    ? 'border-blue-500/60 shadow-elevated bg-blue-50/20'
                    : 'border-blue-50 shadow-soft hover:shadow-elevated'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shadow-inner">
                      {roleIcons[idx]}
                    </div>
                    <span className="text-xs text-muted font-bold">0{idx + 1}</span>
                  </div>

                  <h3 className="font-heading font-extrabold text-lg text-ink mb-2">
                    {role.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-ink/80 leading-relaxed">
                    {role.permissions}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-blue-50 flex items-center justify-between text-xs font-bold text-blue-700">
                  <span>{content.appendixA.section3.heading.slice(5, 31)}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isExpanded ? 'rotate-180 text-blue-500' : ''
                    }`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. Functional Requirements Modules (3 Tabs) */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink">
            {content.appendixA.section4.heading.replace(/^##\s*\d+\.\s*/, '')}
          </h2>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-2 border-b border-blue-50 pb-4">
          <button
            type="button"
            onClick={() => setActiveTab('patient')}
            className={`px-5 py-3 rounded-xl text-sm font-bold transition-all ${
              activeTab === 'patient'
                ? 'bg-blue-500 text-white shadow-soft'
                : 'bg-surface text-ink hover:bg-blue-50'
            }`}
          >
            {modules.patient.title.replace(/^###\s*[\u0600-\u06FF]\.\s*/, '')}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('center')}
            className={`px-5 py-3 rounded-xl text-sm font-bold transition-all ${
              activeTab === 'center'
                ? 'bg-blue-500 text-white shadow-soft'
                : 'bg-surface text-ink hover:bg-blue-50'
            }`}
          >
            {modules.center.title.replace(/^###\s*[\u0600-\u06FF]\.\s*/, '')}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('admin')}
            className={`px-5 py-3 rounded-xl text-sm font-bold transition-all ${
              activeTab === 'admin'
                ? 'bg-blue-500 text-white shadow-soft'
                : 'bg-surface text-ink hover:bg-blue-50'
            }`}
          >
            {modules.admin.title.replace(/^###\s*[\u0600-\u06FF]\.\s*/, '')}
          </button>
        </div>

        {/* Tab Content Display */}
        <div className="pt-2">
          {activeTab === 'patient' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Requirements List */}
              <div className="lg:col-span-7 space-y-4">
                {modules.patient.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="p-5 bg-white rounded-2xl border border-blue-50 shadow-soft flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      ✓
                    </div>
                    <p className="text-sm text-ink/90 font-medium leading-relaxed">
                      {item.replace(/^-\s*/, '')}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Patient Visual / QR Micro Animation */}
              <div className="lg:col-span-5 bg-surface rounded-card p-6 border border-blue-50 flex flex-col items-center">
                <span className="text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full mb-4">
                  {modules.patient.items[5].replace(/^-\s*/, '')}
                </span>
                <QrCheckinAnimation label={modules.center.items[2].slice(5, 30)} />
              </div>
            </div>
          )}

          {activeTab === 'center' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Requirements List */}
              <div className="lg:col-span-7 space-y-4">
                {modules.center.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="p-5 bg-white rounded-2xl border border-blue-50 shadow-soft flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      ⚙
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-ink/90 font-medium leading-relaxed">
                        {item.replace(/^-\s*/, '')}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Machine Status Loop Interactive Component */}
              <div className="lg:col-span-5 space-y-6">
                <MachineStatusLoop />
                <div className="rounded-2xl overflow-hidden shadow-soft border border-blue-50 h-52">
                  <img
                    src="./images/dialysis-supplies.jpg"
                    alt="صورة فلاتر ومستلزمات طبية"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                    width={600}
                    height={300}
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'admin' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Requirements List */}
              <div className="lg:col-span-6 space-y-4">
                {modules.admin.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="p-5 bg-white rounded-2xl border border-blue-50 shadow-soft flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      📊
                    </div>
                    <p className="text-sm text-ink/90 font-medium leading-relaxed">
                      {item.replace(/^-\s*/, '')}
                    </p>
                  </motion.div>
                ))}

                <div className="rounded-2xl overflow-hidden shadow-soft border border-blue-50 h-52">
                  <img
                    src="./images/nurse-machine.jpg"
                    alt="صورة ممرض يفحص ماكينة الغسيل"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                    width={600}
                    height={300}
                  />
                </div>
              </div>

              {/* BI Heatmap Card Component */}
              <div className="lg:col-span-6">
                <BiHeatmapCard />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 4. MCDM Interactive Simulator Demo */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink">
            {content.appendixA.section5.heading.replace(/^##\s*\d+\.\s*/, '')}
          </h2>
        </div>

        <McdmSimulator />
      </section>

      {/* Next Page Card */}
      <NextPageCard
        prevPath="/existing-solutions"
        prevTitle="الحلول القائمة"
        nextPath="/requirements-and-architecture"
        nextTitle="المتطلبات والمعمارية"
      />
    </div>
  );
};

export default PlatformPage;
