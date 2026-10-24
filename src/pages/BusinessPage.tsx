import React from 'react';
import {
  CreditCard,
  Heart,
  AlertTriangle,
  Database,
  ExternalLink,
  Shield,
} from 'lucide-react';
import content from '../content/content.ar';
import { QrCheckinAnimation } from '../components/QrCheckinAnimation';
import { NextPageCard } from '../components/NextPageCard';

export const BusinessPage: React.FC = () => {
  const { items: modelItems, heading: modelHeading } = content.appendixA.section9;
  const { disclaimers, heading: disclaimersHeading } = content.appendixA.section10;
  const { sources } = content.appendixC;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
      {/* 1. Header */}
      <section className="space-y-4">
        <span className="text-xs font-bold px-3 py-1 bg-blue-50 text-blue-700 rounded-full">
          05
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-ink leading-tight">
          نموذج العمل والحدود
        </h1>
        <p className="text-muted text-base sm:text-lg max-w-3xl leading-relaxed">
          {modelHeading.replace(/^##\s*\d+\.\s*/, '')}
        </p>
      </section>

      {/* 2. Business Model: Two-part Visual & Flow */}
      <section className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            {/* Part 1: Free for Patients */}
            <div className="bg-white rounded-card p-6 sm:p-8 border border-blue-50 shadow-soft hover:shadow-elevated transition-all flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-ok/10 text-ok flex items-center justify-center shrink-0">
                <Heart className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold text-ok bg-ok/10 px-3 py-1 rounded-full inline-block mb-1">
                  01
                </span>
                <h3 className="text-xl font-bold text-ink">
                  {modelItems[0].replace(/^-\s*/, '')}
                </h3>
              </div>
            </div>

            {/* Part 2: Pay-Per-Confirmed Booking */}
            <div className="bg-white rounded-card p-6 sm:p-8 border border-blue-50 shadow-soft hover:shadow-elevated transition-all flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center shrink-0">
                <CreditCard className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full inline-block">
                  02
                </span>
                <p className="text-sm text-ink/80 leading-relaxed font-medium">
                  {modelItems[1].replace(/^-\s*/, '')}
                </p>
              </div>
            </div>
          </div>

          {/* QR Flow Visualization */}
          <div className="lg:col-span-5 bg-surface rounded-card p-6 border border-blue-50 flex flex-col items-center">
            <span className="text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full mb-3">
              {content.appendixA.section4.modules.center.items[2].slice(5, 30)}
            </span>
            <QrCheckinAnimation label={modelItems[1].slice(40, 110)} />
          </div>
        </div>
      </section>

      {/* 3. Disclaimers (Two Calm, Well-Spaced Cards) */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink">
            {disclaimersHeading.replace(/^##\s*\d+\.\s*/, '')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Disclaimer 1: حدود المسؤولية */}
          <div className="bg-white p-8 rounded-card border border-blue-50 shadow-soft space-y-4">
            <div className="w-12 h-12 rounded-xl bg-warn/10 text-warn flex items-center justify-center">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-extrabold text-xl text-ink">
              {disclaimers[0].title}
            </h3>
            <p className="text-sm text-ink/80 leading-relaxed">
              {disclaimers[0].content}
            </p>
          </div>

          {/* Disclaimer 2: مصدر البيانات */}
          <div className="bg-white p-8 rounded-card border border-blue-50 shadow-soft space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
              <Database className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-extrabold text-xl text-ink">
              {disclaimers[1].title}
            </h3>
            <p className="text-sm text-ink/80 leading-relaxed">
              {disclaimers[1].content}
            </p>
          </div>
        </div>
      </section>

      {/* 4. Sources Section from Appendix C */}
      <section id="sources" className="bg-surface rounded-card p-8 border border-blue-50 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500 text-white flex items-center justify-center">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-heading font-extrabold text-xl text-ink">
              المصادر
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sources.map((src) => (
            <a
              key={src.domain}
              href={src.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white rounded-xl border border-blue-50 hover:border-blue-500 hover:shadow-soft transition-all flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-blue-700 group-hover:text-blue-500" dir="ltr">
                  {src.domain}
                </span>
                <ExternalLink className="w-4 h-4 text-muted group-hover:text-blue-500 transition-colors" />
              </div>
              <p className="text-xs text-muted mt-2 leading-relaxed">
                {src.note}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Next Page Card (Loops back to Home) */}
      <NextPageCard
        prevPath="/requirements-and-architecture"
        prevTitle="المتطلبات والمعمارية"
        nextPath="/"
        nextTitle="الرئيسية"
      />
    </div>
  );
};

export default BusinessPage;
