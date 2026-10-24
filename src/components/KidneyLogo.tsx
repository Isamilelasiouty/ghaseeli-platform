import React from 'react';
import { motion } from 'framer-motion';

interface KidneyLogoProps {
  className?: string;
  size?: number;
  showIndicator?: boolean;
  watermark?: boolean;
}

export const KidneyLogo: React.FC<KidneyLogoProps> = ({
  className = '',
  size = 42,
  showIndicator = true,
  watermark = false,
}) => {
  if (watermark) {
    return (
      <div className={`relative pointer-events-none select-none ${className}`}>
        <svg
          width={size}
          height={size}
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-blue-600/10"
        >
          {/* Kidney silhouette watermark */}
          <path
            d="M60 12 C36 12, 18 28, 18 55 C18 84, 38 108, 66 108 C86 108, 102 92, 102 70 C102 52, 90 48, 78 44 C67 39, 70 28, 77 21 C81 16, 72 12, 60 12 Z"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="currentColor"
            fillOpacity="0.03"
          />
          {/* Nephron / Pelvis curve */}
          <path
            d="M62 32 C50 37, 38 49, 38 63 C38 80, 52 92, 66 92 C76 92, 84 84, 84 72 C84 60, 74 55, 67 50"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="5 4"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-xs"
      >
        {/* Anatomical Kidney Silhouette */}
        <path
          d="M24 5 C14 5, 6 13, 6 24 C6 36, 15 43, 26 43 C35 43, 42 36, 42 28 C42 20, 37 19, 32 17 C27 15, 28 10, 31 8 C32 6, 29 5, 24 5 Z"
          fill="url(#kidney-primary-grad)"
          stroke="#0284C7"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Inner Pelvic Arch */}
        <path
          d="M24 13 C18 16, 14 21, 14 26 C14 33, 19 37, 25 37 C30 37, 33 33, 33 28 C33 23, 29 21, 26 19"
          stroke="#FFFFFF"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.85"
        />

        {/* Pulse ECG Line inside Kidney */}
        <path
          d="M17 26 L20 26 L22 22 L24 30 L26 24 L28 26 L30 26"
          stroke="#FFFFFF"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <defs>
          <linearGradient id="kidney-primary-grad" x1="6" y1="5" x2="42" y2="43" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0284C7" />
            <stop offset="1" stopColor="#03548E" />
          </linearGradient>
        </defs>
      </svg>

      {/* Animated Activity Indicator Dot on top of kidney */}
      {showIndicator && (
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <motion.span
            animate={{ scale: [1, 2, 1], opacity: [0.75, 0, 0.75] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="absolute inline-flex h-full w-full rounded-full bg-ok opacity-75"
          />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-ok border-2 border-white shadow-xs" />
        </span>
      )}
    </div>
  );
};

export default KidneyLogo;
