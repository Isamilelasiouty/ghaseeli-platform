import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, ShieldAlert, Sparkles, Wrench, RefreshCw } from 'lucide-react';
import content from '../content/content.ar';

type StatusType = 'In Use' | 'Sterilization' | 'Available' | 'Maintenance';

export const MachineStatusLoop: React.FC = () => {
  const [status, setStatus] = useState<StatusType>('In Use');
  const [isAutoCycling, setIsAutoCycling] = useState<boolean>(true);

  // Automated cycle between In Use -> Sterilization -> Available
  useEffect(() => {
    if (!isAutoCycling || status === 'Maintenance') return;

    const interval = setInterval(() => {
      setStatus((current) => {
        if (current === 'In Use') return 'Sterilization';
        if (current === 'Sterilization') return 'Available';
        return 'In Use';
      });
    }, 3200);

    return () => clearInterval(interval);
  }, [isAutoCycling, status]);

  const handleMaintenanceToggle = () => {
    if (status === 'Maintenance') {
      setStatus('Available');
      setIsAutoCycling(true);
    } else {
      setStatus('Maintenance');
      setIsAutoCycling(false);
    }
  };

  const getStatusConfig = (currentStatus: StatusType) => {
    switch (currentStatus) {
      case 'In Use':
        return {
          label: 'In Use',
          color: 'text-blue-700 bg-blue-50 border-blue-500/30',
          dot: 'bg-blue-500',
          icon: <Activity className="w-5 h-5 text-blue-500 animate-pulse" />,
        };
      case 'Sterilization':
        return {
          label: 'Sterilization',
          color: 'text-warn bg-warn/10 border-warn/30',
          dot: 'bg-warn',
          icon: <Sparkles className="w-5 h-5 text-warn animate-spin" />,
        };
      case 'Available':
        return {
          label: 'Available',
          color: 'text-ok bg-ok/10 border-ok/30',
          dot: 'bg-ok',
          icon: <RefreshCw className="w-5 h-5 text-ok" />,
        };
      case 'Maintenance':
        return {
          label: 'Maintenance',
          color: 'text-danger bg-danger/10 border-danger/30',
          dot: 'bg-danger',
          icon: <ShieldAlert className="w-5 h-5 text-danger animate-bounce" />,
        };
    }
  };

  const currentConfig = getStatusConfig(status);

  return (
    <div className="bg-white border border-blue-50 rounded-card p-6 shadow-soft">
      <div className="flex items-center justify-between pb-4 border-b border-blue-50">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-blue-500"></span>
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">
            بيانات محاكاة
          </span>
        </div>
        <button
          type="button"
          onClick={() => {
            setIsAutoCycling(!isAutoCycling);
            if (status === 'Maintenance') setStatus('Available');
          }}
          className="text-xs text-muted hover:text-blue-500 flex items-center gap-1 transition-colors"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isAutoCycling ? 'animate-spin' : ''}`} />
          <span>{content.appendixA.section4.modules.center.items[0].slice(5, 29)}</span>
        </button>
      </div>

      <div className="py-6 flex flex-col items-center justify-center text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={status}
            initial={{ opacity: 0, scale: 0.92, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className={`px-6 py-4 rounded-2xl border ${currentConfig.color} flex items-center gap-3 shadow-sm`}
          >
            <span className={`w-3 h-3 rounded-full ${currentConfig.dot} animate-ping`} />
            {currentConfig.icon}
            <span className="font-heading font-extrabold text-xl tracking-wide" dir="ltr">
              {currentConfig.label}
            </span>
          </motion.div>
        </AnimatePresence>

        <p className="text-xs text-muted mt-4 max-w-sm">
          {content.appendixA.section4.modules.center.items[0].replace(/^\*\*.*\*\*:\s*/, '')}
        </p>
      </div>

      {/* One-Tap Maintenance Trigger */}
      <div className="pt-4 border-t border-blue-50">
        <button
          type="button"
          onClick={handleMaintenanceToggle}
          className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
            status === 'Maintenance'
              ? 'bg-ok text-white hover:bg-ok/90'
              : 'bg-danger/10 text-danger hover:bg-danger hover:text-white border border-danger/20'
          }`}
        >
          <Wrench className="w-4 h-4" />
          <span>
            {status === 'Maintenance'
              ? 'Available'
              : content.appendixA.section4.modules.center.items[1].slice(5, 26)}
          </span>
        </button>
      </div>
    </div>
  );
};

export default MachineStatusLoop;
