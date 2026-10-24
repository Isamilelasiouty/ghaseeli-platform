import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Map } from 'lucide-react';
import content from '../content/content.ar';

export const BiHeatmapCard: React.FC = () => {
  const [hoveredCell, setHoveredCell] = useState<number | null>(null);

  // 24 simulated cells using whitelisted labels or numeric percentages
  const gridData = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    val: Math.floor(65 + ((i * 13) % 30)),
  }));

  const getColorClass = (val: number) => {
    if (val > 88) return 'bg-blue-700 text-white';
    if (val > 80) return 'bg-blue-500 text-white';
    if (val > 72) return 'bg-blue-500/70 text-white';
    return 'bg-blue-50 text-blue-700';
  };

  return (
    <div className="bg-white border border-blue-50 rounded-card p-6 shadow-soft">
      <div className="flex items-center justify-between pb-4 border-b border-blue-50">
        <div className="flex items-center gap-2">
          <Map className="w-5 h-5 text-blue-500" />
          <h4 className="font-bold text-ink text-base">
            {content.appendixA.section4.modules.admin.items[1].slice(5, 29)}
          </h4>
        </div>
        <span className="text-xs bg-blue-50 text-blue-700 font-semibold px-2 py-0.5 rounded-full">
          بيانات محاكاة
        </span>
      </div>

      <p className="text-xs text-muted my-3 leading-relaxed">
        {content.appendixA.section4.modules.admin.items[1].replace(/^\*\*.*\*\*:\s*/, '')}
      </p>

      {/* Stylized Abstract Grid Heatmap */}
      <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 pt-2">
        {gridData.map((cell) => {
          const isHovered = hoveredCell === cell.id;
          return (
            <motion.div
              key={cell.id}
              onMouseEnter={() => setHoveredCell(cell.id)}
              onMouseLeave={() => setHoveredCell(null)}
              whileHover={{ scale: 1.08 }}
              className={`h-12 rounded-lg ${getColorClass(
                cell.val
              )} flex flex-col items-center justify-center cursor-pointer transition-all duration-200 border border-white/40 shadow-sm relative`}
            >
              <span className="text-[10px] font-heading font-extrabold">{cell.val}%</span>
              {isHovered && (
                <div className="absolute -top-7 inset-x-auto z-10 bg-blue-900 text-white text-[10px] py-0.5 px-2 rounded whitespace-nowrap shadow-md">
                  {cell.val}%
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      <div className="flex items-center justify-between pt-4 mt-2 border-t border-blue-50 text-[11px] text-muted">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded bg-blue-50 border border-blue-200" />
          <span>60% - 70%</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded bg-blue-500" />
          <span>70% - 85%</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded bg-blue-700" />
          <span>&gt; 85%</span>
        </div>
      </div>
    </div>
  );
};

export default BiHeatmapCard;
