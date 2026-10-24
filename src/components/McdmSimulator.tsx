import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, Sliders, MapPin, Zap, ShieldCheck, Star } from 'lucide-react';
import content from '../content/content.ar';

interface CenterData {
  id: string;
  name: string;
  proximity: number;
  availability: number;
  insurance: number;
  rating: number;
}

export const McdmSimulator: React.FC = () => {
  const [isEmergency, setIsEmergency] = useState(false);

  // Criteria data from content
  const criteriaData = content.appendixA.section5.criteria;

  // Active weights based on toggle
  const weights = isEmergency
    ? {
        proximity: 0.50,
        availability: 0.45,
        insurance: 0.05,
        rating: 0.00,
      }
    : {
        proximity: 0.40,
        availability: 0.35,
        insurance: 0.15,
        rating: 0.10,
      };

  // Center mock scores as specified
  const centers: CenterData[] = [
    {
      id: 'center-1',
      name: 'مركز 1',
      proximity: 10,
      availability: 4,
      insurance: 10,
      rating: 9,
    },
    {
      id: 'center-2',
      name: 'مركز 2',
      proximity: 6,
      availability: 9,
      insurance: 10,
      rating: 7,
    },
    {
      id: 'center-3',
      name: 'مركز 3',
      proximity: 7,
      availability: 8,
      insurance: 0,
      rating: 9,
    },
  ];

  // Calculate live scores
  const calculatedCenters = centers.map((c) => {
    const totalScore =
      weights.proximity * c.proximity +
      weights.availability * c.availability +
      weights.insurance * c.insurance +
      weights.rating * c.rating;
    return {
      ...c,
      score: totalScore,
    };
  });

  // Sort descending by score
  calculatedCenters.sort((a, b) => b.score - a.score);

  return (
    <div className="bg-surface border border-blue-50 rounded-card p-6 md:p-8 shadow-soft">
      {/* Header with Title and Mode Switch */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-blue-50">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full mb-2">
            <span>بيانات محاكاة</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-ink flex items-center gap-2">
            <Sliders className="w-5 h-5 text-blue-500" />
            <span>{content.appendixA.section5.heading.replace(/^##\s*\d+\.\s*/, '')}</span>
          </h3>
          <p className="text-sm text-muted mt-1 max-w-xl">
            {content.appendixA.section5.intro}
          </p>
        </div>

        {/* Mode Toggle Button */}
        <div className="flex items-center gap-2 bg-white p-1.5 rounded-xl border border-blue-50 shadow-inner">
          <button
            type="button"
            onClick={() => setIsEmergency(false)}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${
              !isEmergency
                ? 'bg-blue-500 text-white shadow-sm'
                : 'text-muted hover:text-ink'
            }`}
          >
            الوضع الافتراضي
          </button>
          <button
            type="button"
            onClick={() => setIsEmergency(true)}
            className={`px-4 py-2 text-sm font-semibold rounded-lg flex items-center gap-1.5 transition-all duration-300 ${
              isEmergency
                ? 'bg-danger text-white shadow-sm'
                : 'text-muted hover:text-ink'
            }`}
          >
            <AlertCircle className="w-4 h-4" />
            <span>وضع الطوارئ الحاد</span>
          </button>
        </div>
      </div>

      {/* Criteria Weight Bars */}
      <div className="mt-6 mb-8 bg-white p-4 rounded-xl border border-blue-50">
        <h4 className="text-sm font-bold text-ink mb-3">
          {content.appendixA.section5.tableHeaders.criterion}
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {criteriaData.map((crit, idx) => {
            const currentWeight = isEmergency ? crit.emergencyWeight : crit.defaultWeight;
            const currentWeightPct = isEmergency ? crit.emergencyWeightNum * 100 : crit.defaultWeightNum * 100;
            const icon =
              idx === 0 ? <MapPin className="w-4 h-4 text-blue-500" /> :
              idx === 1 ? <Zap className="w-4 h-4 text-ok" /> :
              idx === 2 ? <ShieldCheck className="w-4 h-4 text-blue-700" /> :
                          <Star className="w-4 h-4 text-warn" />;

            return (
              <div key={crit.name} className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1.5 font-semibold text-ink">
                    {icon}
                    {crit.name}
                  </span>
                  <span className="font-heading font-bold text-blue-700">{currentWeight}</span>
                </div>
                <div className="w-full bg-blue-50 h-2.5 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full ${
                      isEmergency && idx === 0 ? 'bg-danger' : 'bg-blue-500'
                    }`}
                    initial={false}
                    animate={{ width: `${currentWeightPct}%` }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
                <span className="text-[11px] text-muted truncate">{crit.evaluation}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Center Rank Cards with Reordering Layout Animation */}
      <div className="space-y-4">
        <AnimatePresence>
          {calculatedCenters.map((center, index) => {
            const isWinner = index === 0;
            return (
              <motion.div
                key={center.id}
                layout
                transition={{
                  type: 'spring',
                  stiffness: 350,
                  damping: 30,
                }}
                className={`p-5 rounded-xl border transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                  isWinner
                    ? 'bg-blue-50/40 border-blue-500/50 shadow-soft'
                    : 'bg-white border-blue-50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-heading font-extrabold text-base ${
                      isWinner
                        ? 'bg-blue-500 text-white shadow-sm'
                        : 'bg-blue-50 text-blue-700'
                    }`}
                  >
                    #{index + 1}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-ink text-base md:text-lg">
                        {center.name}
                      </h4>
                      {isWinner && (
                        <span className="text-xs bg-blue-50 text-blue-700 font-bold px-2 py-0.5 rounded-full border border-blue-500/20">
                          {content.appendixA.section2.usp.slice(0, 18)}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted mt-1.5">
                      <span>{criteriaData[0].name}: <strong className="text-ink">{center.proximity}/10</strong></span>
                      <span>•</span>
                      <span>{criteriaData[1].name}: <strong className="text-ink">{center.availability}/10</strong></span>
                      <span>•</span>
                      <span>{criteriaData[2].name}: <strong className="text-ink">{center.insurance}/10</strong></span>
                      <span>•</span>
                      <span>{criteriaData[3].name}: <strong className="text-ink">{center.rating}/10</strong></span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-4 border-t md:border-t-0 pt-3 md:pt-0 border-blue-50">
                  <div className="text-right">
                    <div className="text-xs text-muted">{content.appendixA.section5.tableHeaders.evaluationMethod.slice(0, 12)}</div>
                    <div className="font-heading font-extrabold text-2xl text-blue-700">
                      {center.score.toFixed(2)}
                      <span className="text-xs font-normal text-muted mr-1">/ 10</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default McdmSimulator;
