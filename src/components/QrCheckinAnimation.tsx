import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, QrCode } from 'lucide-react';

export const QrCheckinAnimation: React.FC<{ label?: string }> = ({ label }) => {
  const [isScanned, setIsScanned] = useState(false);

  useEffect(() => {
    const cycle = setInterval(() => {
      setIsScanned((prev) => !prev);
    }, 2800);

    return () => clearInterval(cycle);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      {/* Smartphone frame */}
      <div className="relative w-44 h-72 bg-ink rounded-[28px] p-2.5 shadow-elevated border-2 border-slate-700 flex flex-col items-center justify-between">
        {/* Notch */}
        <div className="w-16 h-3.5 bg-slate-900 rounded-full mx-auto" />

        {/* Screen */}
        <div className="relative w-full h-56 bg-surface rounded-[20px] overflow-hidden flex flex-col items-center justify-center p-3 border border-blue-50">
          {!isScanned ? (
            <div className="relative flex flex-col items-center justify-center">
              <QrCode className="w-28 h-28 text-blue-900" />
              {/* Sweeping laser scanner line */}
              <motion.div
                className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent shadow-[0_0_12px_#0A6EBD]"
                animate={{
                  top: ['10%', '90%', '10%'],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: 'easeInOut',
                }}
              />
            </div>
          ) : (
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', damping: 15 }}
              className="flex flex-col items-center justify-center gap-2 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-ok/10 flex items-center justify-center">
                <CheckCircle2 className="w-12 h-12 text-ok" />
              </div>
              <span className="text-xs font-bold text-ok">QR Confirmed</span>
            </motion.div>
          )}
        </div>

        {/* Bottom home indicator */}
        <div className="w-12 h-1 bg-slate-600 rounded-full mx-auto" />
      </div>

      {label && (
        <span className="text-xs text-muted font-medium mt-3 text-center">
          {label}
        </span>
      )}
    </div>
  );
};

export default QrCheckinAnimation;
