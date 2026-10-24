import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';
import content from '../content/content.ar';
import { CountUp } from '../components/CountUp';
import { NextPageCard } from '../components/NextPageCard';

export const ProblemPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const journeySteps = [
    {
      id: 0,
      image: './images/patient-dialysis.jpg',
      alt: 'صورة مريض يتلقى جلسة غسيل كلوي',
      text: content.appendixB.patientJourney.paragraph1,
    },
    {
      id: 1,
      image: './images/waiting-room.jpg',
      alt: 'صورة قاعة انتظار في المستشفى',
      text: content.appendixB.patientJourney.paragraph2,
    },
    {
      id: 2,
      image: './images/elderly-patient.jpg',
      alt: 'صورة مريض كبير السن',
      text: content.appendixB.patientJourney.paragraph3,
    },
  ];

  const stats = [
    {
      label: content.appendixB.nationalImportance.problemScale.title,
      val: 59,
      suffix: content.appendixB.patientJourney.paragraph1.slice(123, 133), // ألف مريض
      sub: content.appendixB.patientJourney.paragraph1.slice(115, 183),
    },
    {
      label: content.appendixB.patientJourney.paragraph1.slice(144, 163), // 397 مركزاً حكومياً
      val: 63.3,
      suffix: '%',
      sub: content.appendixB.patientJourney.paragraph1.slice(144, 163),
    },
    {
      label: content.appendixB.patientJourney.paragraph1.slice(166, 183), // 380 مركزاً خاصاً
      val: 28.3,
      suffix: '%',
      sub: content.appendixB.patientJourney.paragraph1.slice(166, 183),
    },
    {
      label: content.appendixB.nationalImportance.problemScale.title,
      val: 115,
      suffix: content.appendixB.patientJourney.paragraph1.slice(123, 133), // ألف مريض
      sub: content.appendixB.nationalImportance.problemScale.text.slice(178, 260),
    },
    {
      label: content.appendixB.nationalImportance.problemScale.text.slice(262, 280), // 13 جلسة شهرياً
      val: 13,
      suffix: '',
      sub: content.appendixB.nationalImportance.problemScale.text.slice(262, 305),
    },
    {
      label: content.appendixB.nationalImportance.problemScale.text.slice(290, 305), // 156 جلسة سنوياً
      val: 156,
      suffix: '',
      sub: content.appendixB.nationalImportance.problemScale.text.slice(262, 305),
    },
    {
      label: content.appendixB.nationalImportance.patientBurden.title,
      val: 78,
      suffix: content.appendixB.nationalImportance.stateBurden.text.slice(83, 92), // ألف جنيه
      sub: content.appendixB.nationalImportance.stateBurden.text.slice(22, 114),
    },
    {
      label: content.appendixB.nationalImportance.stateBurden.title,
      val: 4.6,
      suffix: content.appendixB.nationalImportance.stateBurden.text.slice(133, 150), // مليار جنيه سنوياً
      sub: content.appendixB.nationalImportance.stateBurden.text.slice(116, 185),
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
      {/* 1. Header Section */}
      <section className="space-y-4">
        <span className="text-xs font-bold px-3 py-1 bg-blue-50 text-blue-700 rounded-full">
          01
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-ink leading-tight">
          المشكلة والأثر
        </h1>
        <p className="text-muted text-base sm:text-lg max-w-3xl leading-relaxed">
          {content.appendixA.section1.problem}
        </p>
      </section>

      {/* 2. Pinned Patient Journey Story */}
      <section className="space-y-8 bg-surface rounded-card p-6 sm:p-10 border border-blue-50">
        <div className="flex items-center justify-between border-b border-blue-50 pb-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-ink">
              {content.appendixB.patientJourney.heading.replace(/\*\*/g, '')}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            {journeySteps.map((step, idx) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`w-8 h-8 rounded-full text-xs font-bold transition-all ${
                  activeStep === idx
                    ? 'bg-blue-500 text-white shadow-soft'
                    : 'bg-white text-muted hover:text-ink border border-blue-50'
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Photos Cross-Fade */}
          <div className="lg:col-span-6 relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-soft border border-blue-50">
            {journeySteps.map((step, idx) => (
              <motion.img
                key={step.id}
                src={step.image}
                alt={step.alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: activeStep === idx ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            ))}
          </div>

          {/* Text Steps Carousel */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              {journeySteps.map((step, idx) => (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    activeStep === idx
                      ? 'bg-white border-blue-500/40 shadow-soft'
                      : 'bg-transparent border-transparent hover:bg-white/50 opacity-60'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        activeStep === idx
                          ? 'bg-blue-500 text-white'
                          : 'bg-blue-50 text-blue-700'
                      }`}
                    >
                      {idx + 1}
                    </span>
                    <h3 className="font-bold text-ink text-base sm:text-lg">
                      {idx === 0 ? content.appendixB.patientJourney.paragraph1.slice(0, 44) :
                       idx === 1 ? content.appendixB.patientJourney.paragraph2.slice(0, 48) :
                                   content.appendixB.patientJourney.paragraph3.slice(0, 52)}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-ink/80 leading-relaxed pr-9">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Big Animated Stat Cards */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink">
            {content.appendixB.nationalImportance.heading.replace(/^##\s*/, '')}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="bg-white p-6 rounded-card border border-blue-50 shadow-soft hover:shadow-elevated transition-all"
            >
              <span className="text-xs font-semibold text-muted block mb-2">
                {stat.label}
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-700 mb-2">
                <CountUp end={stat.val} decimals={stat.val % 1 !== 0 ? 1 : 0} />
                <span className="text-xl sm:text-2xl text-blue-500 mr-1 font-bold">
                  {stat.suffix}
                </span>
              </div>
              <p className="text-xs text-ink/70 leading-relaxed">{stat.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Distribution Split Bar */}
        <div className="bg-surface p-6 rounded-2xl border border-blue-50 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-bold text-ink">
            <span>{content.appendixB.patientJourney.paragraph1.slice(144, 183)}</span>
            <div className="flex items-center gap-4 text-xs font-medium">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-blue-700" />
                {content.appendixB.patientJourney.paragraph1.slice(144, 163)} (63.3%)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-blue-500" />
                {content.appendixB.patientJourney.paragraph1.slice(166, 183)} (28.3%)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-blue-50 border border-blue-200" />
                8.4%
              </span>
            </div>
          </div>

          <div className="w-full h-4 bg-blue-50 rounded-full overflow-hidden flex shadow-inner">
            <motion.div
              className="h-full bg-blue-700"
              initial={{ width: 0 }}
              whileInView={{ width: '63.3%' }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeOut' }}
            />
            <motion.div
              className="h-full bg-blue-500"
              initial={{ width: 0 }}
              whileInView={{ width: '28.3%' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            />
            <motion.div
              className="h-full bg-blue-200"
              initial={{ width: 0 }}
              whileInView={{ width: '8.4%' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            />
          </div>
        </div>
      </section>

      {/* 4. "من المشكلة إلى الأثر" Flow */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink">
            {content.appendixB.problemToImpact.heading.replace(/\*\*/g, '')}
          </h2>
        </div>

        <div className="space-y-3">
          {content.appendixB.problemToImpact.rows.map((row, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white rounded-2xl border border-blue-50 p-5 shadow-soft hover:shadow-elevated transition-all grid grid-cols-1 md:grid-cols-3 gap-4 items-center"
            >
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-danger/10 text-danger flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  ✕
                </span>
                <div>
                  <span className="text-[11px] text-muted font-bold block mb-0.5">
                    {content.appendixB.problemToImpact.tableHeaders.suffering}
                  </span>
                  <p className="text-sm font-semibold text-ink">{row.suffering}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-blue-50/50 p-3 rounded-xl border border-blue-50">
                <span className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  ✦
                </span>
                <div>
                  <span className="text-[11px] text-blue-700 font-bold block mb-0.5">
                    {content.appendixB.problemToImpact.tableHeaders.offering}
                  </span>
                  <p className="text-sm font-semibold text-ink">{row.offering}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-ok/10 text-ok flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  ✓
                </span>
                <div>
                  <span className="text-[11px] text-ok font-bold block mb-0.5">
                    {content.appendixB.problemToImpact.tableHeaders.expectedImpact}
                  </span>
                  <p className="text-sm font-bold text-ok">{row.expectedImpact}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Target KPIs Table */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink">
            {content.appendixB.kpis.heading.replace(/\*\*/g, '')}
          </h2>
        </div>

        <div className="bg-white rounded-card border border-blue-50 overflow-hidden shadow-soft">
          <div className="overflow-x-auto">
            <table className="w-full text-right text-sm">
              <thead className="bg-surface text-ink font-heading font-bold border-b border-blue-50 text-xs">
                <tr>
                  <th className="py-4 px-6">{content.appendixB.kpis.tableHeaders.indicator}</th>
                  <th className="py-4 px-6">{content.appendixB.kpis.tableHeaders.currentStatus}</th>
                  <th className="py-4 px-6 text-blue-700">{content.appendixB.kpis.tableHeaders.target}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-50">
                {content.appendixB.kpis.rows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-surface/60 transition-colors">
                    <td className="py-4 px-6 font-semibold text-ink">{row.indicator}</td>
                    <td className="py-4 px-6 text-muted">{row.currentStatus}</td>
                    <td className="py-4 px-6">
                      <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-extrabold text-sm border border-blue-500/20">
                        {row.target}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. Estimation Logic & Methodology Note */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink">
            {content.appendixB.estimationLogic.heading.replace(/\*\*/g, '')}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.appendixB.estimationLogic.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-card border border-blue-50 shadow-soft space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-sm">
                0{idx + 1}
              </div>
              <p className="text-xs sm:text-sm text-ink/80 leading-relaxed">
                {item.replace(/^-\s*/, '')}
              </p>
            </div>
          ))}
        </div>

        {/* Methodology Calm Note Box */}
        <div className="bg-surface p-6 rounded-2xl border border-blue-50 flex items-start gap-4">
          <Info className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-muted leading-relaxed">
            {content.appendixB.methodologyNote.text.replace(/^\*\*.*\*\*:\s*/, '')}
          </p>
        </div>
      </section>

      {/* 7. "ما تحله المنصة" & "الخلاصة" */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink">
            {content.appendixB.nationalImportance.whatPlatformSolves.heading.replace(/\*\*/g, '')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: للمريض */}
          <div className="bg-white p-6 rounded-card border border-blue-50 shadow-soft hover:shadow-elevated transition-all space-y-3">
            <span className="text-xs font-bold px-3 py-1 bg-blue-50 text-blue-700 rounded-full inline-block">
              {content.appendixB.nationalImportance.whatPlatformSolves.patient.slice(5, 12)}
            </span>
            <p className="text-sm text-ink/80 leading-relaxed">
              {content.appendixB.nationalImportance.whatPlatformSolves.patient.replace(/^- \*\*للمريض:\*\*\s*/, '')}
            </p>
          </div>

          {/* Card 2: للمراكز */}
          <div className="bg-white p-6 rounded-card border border-blue-50 shadow-soft hover:shadow-elevated transition-all space-y-3">
            <span className="text-xs font-bold px-3 py-1 bg-blue-50 text-blue-700 rounded-full inline-block">
              {content.appendixB.nationalImportance.whatPlatformSolves.centers.slice(5, 12)}
            </span>
            <p className="text-sm text-ink/80 leading-relaxed">
              {content.appendixB.nationalImportance.whatPlatformSolves.centers.replace(/^- \*\*للمراكز:\*\*\s*/, '')}
            </p>
          </div>

          {/* Card 3: للدولة */}
          <div className="bg-white p-6 rounded-card border border-blue-50 shadow-soft hover:shadow-elevated transition-all space-y-3">
            <span className="text-xs font-bold px-3 py-1 bg-blue-50 text-blue-700 rounded-full inline-block">
              {content.appendixB.nationalImportance.whatPlatformSolves.state.slice(5, 11)}
            </span>
            <p className="text-sm text-ink/80 leading-relaxed">
              {content.appendixB.nationalImportance.whatPlatformSolves.state.replace(/^- \*\*للدولة:\*\*\s*/, '')}
            </p>
          </div>
        </div>

        {/* Conclusion Box */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-8 rounded-card shadow-elevated">
          <span className="text-xs font-bold text-blue-50 uppercase tracking-wider block mb-2">
            {content.appendixB.nationalImportance.conclusion.title}
          </span>
          <p className="text-base sm:text-lg font-bold leading-relaxed">
            {content.appendixB.nationalImportance.conclusion.text.replace(/^\*\*الخلاصة:\*\*\s*/, '')}
          </p>
        </div>
      </section>

      {/* Next Page Card */}
      <NextPageCard
        prevPath="/"
        prevTitle="الرئيسية"
        nextPath="/existing-solutions"
        nextTitle="الحلول القائمة"
      />
    </div>
  );
};

export default ProblemPage;
