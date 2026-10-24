import React from 'react';
import { ShieldCheck, Check, Sparkles, Building } from 'lucide-react';
import content from '../content/content.ar';
import { NextPageCard } from '../components/NextPageCard';

export const SolutionsPage: React.FC = () => {
  const { tableHeaders, systems, usp, heading } = content.appendixA.section2;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* 1. Header */}
      <section className="space-y-4">
        <span className="text-xs font-bold px-3 py-1 bg-blue-50 text-blue-700 rounded-full">
          02
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-ink leading-tight">
          الحلول القائمة
        </h1>
        <p className="text-muted text-base sm:text-lg max-w-3xl leading-relaxed">
          {heading.replace(/^##\s*\d+\.\s*/, '')}
        </p>
      </section>

      {/* 2. Comparison Table (Desktop) & Stacked Cards (Mobile) */}
      <section className="space-y-8">
        {/* Desktop Table View */}
        <div className="hidden lg:block bg-white rounded-card border border-blue-50 overflow-hidden shadow-soft">
          <table className="w-full text-right text-sm">
            <thead className="bg-surface text-ink font-heading font-bold border-b border-blue-50 text-xs">
              <tr>
                <th className="py-4 px-6 w-1/4">{tableHeaders.system}</th>
                <th className="py-4 px-6 w-1/3">{tableHeaders.highlights}</th>
                <th className="py-4 px-6 bg-blue-50/60 text-blue-700 font-extrabold">
                  {tableHeaders.gap}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-blue-50">
              {systems.map((sys, idx) => (
                <tr key={idx} className="hover:bg-surface/50 transition-colors">
                  <td className="py-5 px-6 font-bold text-ink flex items-center gap-2">
                    <Building className="w-4 h-4 text-muted" />
                    <span>{sys.name}</span>
                  </td>
                  <td className="py-5 px-6 text-ink/80 leading-relaxed">
                    {sys.highlights}
                  </td>
                  <td className="py-5 px-6 bg-blue-50/30 text-ink/90 font-medium leading-relaxed border-r border-blue-100">
                    <span className="text-blue-500 font-bold ml-1.5">•</span>
                    {sys.gap}
                  </td>
                </tr>
              ))}

              {/* Winning Row for Ghaseeli built only from USP text */}
              <tr className="bg-gradient-to-r from-blue-50 via-blue-50/80 to-blue-50/40 border-t-2 border-blue-500">
                <td className="py-6 px-6 font-heading font-extrabold text-blue-700 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs">
                    ★
                  </div>
                  <span className="text-base font-extrabold">{content.meta.brandName}</span>
                </td>
                <td className="py-6 px-6 font-bold text-blue-700">
                  {usp.replace(/^نقطة التميز \(USP\):\s*/, '').slice(0, 48)}
                </td>
                <td className="py-6 px-6 bg-blue-100/50 text-blue-900 font-bold leading-relaxed border-r border-blue-200">
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span>{usp.replace(/^نقطة التميز \(USP\):\s*/, '')}</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile Stacked Cards View */}
        <div className="lg:hidden space-y-4">
          {systems.map((sys, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-card border border-blue-50 shadow-soft space-y-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-blue-50">
                <h3 className="font-bold text-ink text-base">{sys.name}</h3>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-surface text-muted">
                  0{idx + 1}
                </span>
              </div>

              <div>
                <span className="text-xs text-muted block mb-1 font-semibold">
                  {tableHeaders.highlights}:
                </span>
                <p className="text-sm text-ink/80 leading-relaxed">{sys.highlights}</p>
              </div>

              <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100/70">
                <span className="text-xs text-blue-700 font-bold block mb-1">
                  {tableHeaders.gap}:
                </span>
                <p className="text-xs sm:text-sm text-ink/90 leading-relaxed font-medium">
                  {sys.gap}
                </p>
              </div>
            </div>
          ))}

          {/* Mobile Winning Card for Ghaseeli */}
          <div className="bg-gradient-to-br from-blue-700 to-blue-900 text-white p-6 rounded-card shadow-elevated space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-50" />
              <h3 className="font-heading font-extrabold text-lg text-white">
                {content.meta.brandName}
              </h3>
            </div>
            <p className="text-xs text-blue-50/90 leading-relaxed font-medium">
              {usp}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Highlighted USP Statement Card */}
      <section>
        <div className="bg-white border-2 border-blue-500/20 rounded-card p-8 sm:p-10 shadow-soft flex flex-col md:flex-row items-center gap-8">
          <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center shrink-0 shadow-inner">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <span className="text-xs font-bold text-blue-500 uppercase tracking-wider block">
              {usp.slice(0, 20)}
            </span>
            <p className="text-base sm:text-lg font-bold text-ink leading-relaxed">
              {usp}
            </p>
          </div>
        </div>
      </section>

      {/* Next Page Card */}
      <NextPageCard
        prevPath="/problem-and-impact"
        prevTitle="المشكلة والأثر"
        nextPath="/platform-and-smart-model"
        nextTitle="المنصة والنموذج الذكي"
      />
    </div>
  );
};

export default SolutionsPage;
