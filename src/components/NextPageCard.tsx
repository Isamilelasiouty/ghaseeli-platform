import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface NextPageCardProps {
  prevPath?: string;
  prevTitle?: string;
  nextPath: string;
  nextTitle: string;
}

export const NextPageCard: React.FC<NextPageCardProps> = ({
  prevPath,
  prevTitle,
  nextPath,
  nextTitle,
}) => {
  return (
    <div className="mt-20 pt-10 border-t border-blue-50 flex flex-col sm:flex-row items-center justify-between gap-4">
      {prevPath && prevTitle ? (
        <NavLink
          to={prevPath}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-blue-50 bg-white text-muted hover:text-ink hover:bg-surface text-sm font-semibold transition-all shadow-sm"
        >
          <ArrowRight className="w-4 h-4 rtl-mirror" />
          <span>السابق</span>: <span className="text-ink font-bold">{prevTitle}</span>
        </NavLink>
      ) : (
        <div />
      )}

      <NavLink
        to={nextPath}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold transition-all shadow-soft hover:shadow-elevated group"
      >
        <span>التالي</span>: <span>{nextTitle}</span>
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform rtl-mirror" />
      </NavLink>
    </div>
  );
};

export default NextPageCard;
