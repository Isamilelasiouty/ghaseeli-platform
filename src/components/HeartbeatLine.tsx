import React from 'react';

export const HeartbeatLine: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full overflow-hidden pointer-events-none py-2 ${className}`}>
      <svg
        viewBox="0 0 1200 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-12 stroke-blue-500 opacity-60"
      >
        <path
          d="M0 30 L300 30 L315 10 L330 50 L345 20 L355 38 L365 30 L600 30 L720 30 L735 10 L750 50 L765 20 L775 38 L785 30 L1020 30 L1035 10 L1050 50 L1065 20 L1075 38 L1085 30 L1200 30"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="1200"
          strokeDashoffset="1200"
          className="animate-[pulseDraw_4s_ease-in-out_infinite]"
        />
      </svg>
      <style>{`
        @keyframes pulseDraw {
          0% {
            stroke-dashoffset: 1200;
            opacity: 0.2;
          }
          50% {
            stroke-dashoffset: 0;
            opacity: 0.9;
          }
          100% {
            stroke-dashoffset: -1200;
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  );
};

export default HeartbeatLine;
