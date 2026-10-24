import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowLeft, Users, Building2, Clock, HeartPulse, Sparkles } from 'lucide-react';
import content from '../content/content.ar';
import { CountUp } from '../components/CountUp';
import { HeartbeatLine } from '../components/HeartbeatLine';
import { NextPageCard } from '../components/NextPageCard';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-20 pb-16">
      {/* 1. Hero Section (Full Viewport) */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden rounded-b-[32px] border-b border-blue-50 bg-surface">
        {/* Background Image with White-to-transparent overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="./images/hero-dialysis.jpg"
            alt="صورة وحدة غسيل كلوي في مستشفى"
            className="w-full h-full object-cover object-center filter saturate-[0.85] brightness-[1.05]"
            loading="eager"
            width={1600}
            height={900}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl space-y-6"
          >
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-500/20 text-blue-700 text-xs font-bold shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-blue-500" />
              <span>{content.meta.srsTitle}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink tracking-tight leading-tight">
              {content.meta.brandName}
            </h1>

            {/* Full Project Name Line */}
            <p className="text-lg sm:text-xl font-bold text-blue-700 leading-relaxed">
              {content.meta.projectName}
            </p>

            {/* Meta Items from Appendix A */}
            <div className="flex flex-wrap gap-4 pt-2 text-sm text-ink/80 font-medium">
              <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-blue-50 shadow-soft">
                {content.meta.department}
              </div>
              <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-blue-50 shadow-soft">
                {content.meta.pilotScope}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 flex flex-wrap gap-4">
              <NavLink
                to="/problem-and-impact"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-blue-500 hover:bg-blue-700 text-white font-bold text-base shadow-soft hover:shadow-elevated transition-all group"
              >
                <span>المشكلة والأثر</span>
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform rtl-mirror" />
              </NavLink>
              <NavLink
                to="/platform-and-smart-model"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-white/90 hover:bg-white text-blue-700 font-semibold text-base border border-blue-50 shadow-soft hover:shadow-elevated transition-all"
              >
                <span>المنصة والنموذج الذكي</span>
              </NavLink>
            </div>
          </motion.div>
        </div>

        {/* Heartbeat Line Drawing Across Hero */}
        <div className="relative z-10 mt-auto">
          <HeartbeatLine />
        </div>
      </section>

      {/* 2. Numbers Strip (Count-Up on Scroll) - Exact wording from Appendix B */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-card border border-blue-50 p-6 sm:p-10 shadow-soft">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {/* 1: 59 ألف مريض */}
            <div className="space-y-1 p-3">
              <div className="w-10 h-10 mx-auto rounded-full bg-blue-50 flex items-center justify-center text-blue-500 mb-2">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-3xl lg:text-4xl font-extrabold text-blue-500">
                <CountUp end={59} />
              </div>
              <div className="text-xs text-muted font-medium">
                {content.appendixB.patientJourney.paragraph1.slice(120, 133)}
              </div>
            </div>

            {/* 2: 397 مركزاً حكومياً */}
            <div className="space-y-1 p-3">
              <div className="w-10 h-10 mx-auto rounded-full bg-blue-50 flex items-center justify-center text-blue-500 mb-2">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="text-3xl lg:text-4xl font-extrabold text-blue-700">
                <CountUp end={397} />
              </div>
              <div className="text-xs text-muted font-medium">
                {content.appendixB.patientJourney.paragraph1.slice(144, 163)}
              </div>
            </div>

            {/* 3: 380 مركزاً خاصاً */}
            <div className="space-y-1 p-3">
              <div className="w-10 h-10 mx-auto rounded-full bg-blue-50 flex items-center justify-center text-blue-500 mb-2">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="text-3xl lg:text-4xl font-extrabold text-blue-700">
                <CountUp end={380} />
              </div>
              <div className="text-xs text-muted font-medium">
                {content.appendixB.patientJourney.paragraph1.slice(166, 183)}
              </div>
            </div>

            {/* 4: 12 ساعة أسبوعياً */}
            <div className="space-y-1 p-3">
              <div className="w-10 h-10 mx-auto rounded-full bg-blue-50 flex items-center justify-center text-blue-500 mb-2">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-3xl lg:text-4xl font-extrabold text-ink">
                <CountUp end={12} />
              </div>
              <div className="text-xs text-muted font-medium">
                {content.appendixB.patientJourney.paragraph1.slice(28, 44)}
              </div>
            </div>

            {/* 5: 576 ساعة سنوياً */}
            <div className="space-y-1 p-3">
              <div className="w-10 h-10 mx-auto rounded-full bg-blue-50 flex items-center justify-center text-blue-500 mb-2">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-3xl lg:text-4xl font-extrabold text-ink">
                <CountUp end={576} />
              </div>
              <div className="text-xs text-muted font-medium">
                {content.appendixB.patientJourney.paragraph1.slice(100, 114)}
              </div>
            </div>

            {/* 6: وفيات 25% مقابل 7–10% عالمياً */}
            <div className="space-y-1 p-3">
              <div className="w-10 h-10 mx-auto rounded-full bg-blue-50 flex items-center justify-center text-blue-500 mb-2">
                <HeartPulse className="w-5 h-5" />
              </div>
              <div className="text-3xl lg:text-4xl font-extrabold text-danger">
                <CountUp end={25} suffix="%" />
              </div>
              <div className="text-xs text-muted font-medium">
                {content.appendixB.patientJourney.paragraph3.slice(99, 137)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. USP Block */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-card p-8 sm:p-12 shadow-elevated relative overflow-hidden">
          <div className="relative z-10 max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-50 text-xs font-semibold backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4 text-blue-50" />
              <span>{content.appendixA.section2.usp.slice(0, 20)}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold leading-snug">
              {content.appendixA.section2.usp}
            </h2>
          </div>
          <div className="absolute left-0 bottom-0 translate-x-12 translate-y-12 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
        </div>
      </section>

      {/* 4. Problem Teaser Paragraph next to Photo */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold px-3 py-1 bg-blue-50 text-blue-700 rounded-full">
              {content.appendixA.section1.heading.replace(/^##\s*\d+\.\s*/, '')}
            </span>
            <div className="space-y-4 text-ink/80 text-base leading-relaxed bg-surface p-6 rounded-2xl border border-blue-50">
              <p>{content.appendixA.section1.problem}</p>
              <p className="text-sm text-muted">{content.appendixA.section1.pilotScope}</p>
            </div>
            <div>
              <NavLink
                to="/problem-and-impact"
                className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-700 font-bold text-sm group"
              >
                <span>المشكلة والأثر</span>
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform rtl-mirror" />
              </NavLink>
            </div>
          </div>

          <div className="relative rounded-card overflow-hidden shadow-soft border border-blue-50 h-80 sm:h-96">
            <img
              src="./images/hospital-exterior.jpg"
              alt="صورة مبنى مستشفى"
              className="w-full h-full object-cover object-center"
              loading="lazy"
              width={800}
              height={600}
            />
          </div>
        </div>
      </section>

      {/* 5. Journey Cards Linking to Other Pages */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <NavLink
            to="/problem-and-impact"
            className="group bg-white p-6 rounded-card border border-blue-50 hover:border-blue-500/40 hover:shadow-elevated transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-bold text-blue-500 block mb-2">01</span>
              <h3 className="text-lg font-bold text-ink group-hover:text-blue-500 transition-colors">
                المشكلة والأثر
              </h3>
              <p className="text-xs text-muted mt-2 leading-relaxed line-clamp-3">
                {content.appendixB.patientJourney.paragraph1}
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-blue-50 flex items-center justify-between text-xs font-semibold text-blue-700">
              <span>المشكلة والأثر</span>
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform rtl-mirror" />
            </div>
          </NavLink>

          {/* Card 2 */}
          <NavLink
            to="/existing-solutions"
            className="group bg-white p-6 rounded-card border border-blue-50 hover:border-blue-500/40 hover:shadow-elevated transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-bold text-blue-500 block mb-2">02</span>
              <h3 className="text-lg font-bold text-ink group-hover:text-blue-500 transition-colors">
                الحلول القائمة
              </h3>
              <p className="text-xs text-muted mt-2 leading-relaxed line-clamp-3">
                {content.appendixA.section2.heading.replace(/^##\s*\d+\.\s*/, '')}
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-blue-50 flex items-center justify-between text-xs font-semibold text-blue-700">
              <span>الحلول القائمة</span>
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform rtl-mirror" />
            </div>
          </NavLink>

          {/* Card 3 */}
          <NavLink
            to="/platform-and-smart-model"
            className="group bg-white p-6 rounded-card border border-blue-50 hover:border-blue-500/40 hover:shadow-elevated transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-bold text-blue-500 block mb-2">03</span>
              <h3 className="text-lg font-bold text-ink group-hover:text-blue-500 transition-colors">
                المنصة والنموذج الذكي
              </h3>
              <p className="text-xs text-muted mt-2 leading-relaxed line-clamp-3">
                {content.appendixA.section5.intro}
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-blue-50 flex items-center justify-between text-xs font-semibold text-blue-700">
              <span>المنصة والنموذج الذكي</span>
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform rtl-mirror" />
            </div>
          </NavLink>

          {/* Card 4 */}
          <NavLink
            to="/requirements-and-architecture"
            className="group bg-white p-6 rounded-card border border-blue-50 hover:border-blue-500/40 hover:shadow-elevated transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-bold text-blue-500 block mb-2">04</span>
              <h3 className="text-lg font-bold text-ink group-hover:text-blue-500 transition-colors">
                المتطلبات والمعمارية
              </h3>
              <p className="text-xs text-muted mt-2 leading-relaxed line-clamp-3">
                {content.appendixA.section6.heading.replace(/^##\s*\d+\.\s*/, '')}
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-blue-50 flex items-center justify-between text-xs font-semibold text-blue-700">
              <span>المتطلبات والمعمارية</span>
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform rtl-mirror" />
            </div>
          </NavLink>

          {/* Card 5 */}
          <NavLink
            to="/business-model-and-limits"
            className="group bg-white p-6 rounded-card border border-blue-50 hover:border-blue-500/40 hover:shadow-elevated transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-bold text-blue-500 block mb-2">05</span>
              <h3 className="text-lg font-bold text-ink group-hover:text-blue-500 transition-colors">
                نموذج العمل والحدود
              </h3>
              <p className="text-xs text-muted mt-2 leading-relaxed line-clamp-3">
                {content.appendixA.section9.items[1].replace(/^-\s*/, '')}
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-blue-50 flex items-center justify-between text-xs font-semibold text-blue-700">
              <span>نموذج العمل والحدود</span>
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform rtl-mirror" />
            </div>
          </NavLink>
        </div>
      </section>

      {/* Next Page Navigation Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NextPageCard
          nextPath="/problem-and-impact"
          nextTitle="المشكلة والأثر"
        />
      </div>
    </div>
  );
};

export default HomePage;
