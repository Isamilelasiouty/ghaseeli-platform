import React from 'react';
import { NavLink } from 'react-router-dom';
import { ExternalLink, Shield } from 'lucide-react';
import content from '../content/content.ar';
import { KidneyLogo } from './KidneyLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white mt-24 border-t border-blue-700/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Project Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3.5">
              <KidneyLogo size={40} showIndicator={false} />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-heading font-extrabold text-2xl tracking-tight text-white leading-none" dir="ltr">
                    REN
                  </span>
                  <span className="font-heading font-bold text-sm text-blue-200">
                    {content.meta.brandName}
                  </span>
                </div>
                <span className="text-[10px] text-blue-200/70 font-medium block mt-0.5 tracking-wider" dir="ltr">
                  Resource · Emergency · Nephrology
                </span>
              </div>
            </div>
            <p className="text-xs text-blue-50/80 leading-relaxed">
              {content.meta.projectName}
            </p>
            <div className="flex flex-col gap-1 text-xs text-blue-50/70">
              <span>{content.meta.department}</span>
              <span>{content.meta.pilotScope}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <ul className="space-y-2 text-sm text-blue-50/80 font-medium">
              <li>
                <NavLink to="/" className="hover:text-white transition-colors">
                  الرئيسية
                </NavLink>
              </li>
              <li>
                <NavLink to="/problem-and-impact" className="hover:text-white transition-colors">
                  المشكلة والأثر
                </NavLink>
              </li>
              <li>
                <NavLink to="/existing-solutions" className="hover:text-white transition-colors">
                  الحلول القائمة
                </NavLink>
              </li>
              <li>
                <NavLink to="/platform-and-smart-model" className="hover:text-white transition-colors">
                  المنصة والنموذج الذكي
                </NavLink>
              </li>
              <li>
                <NavLink to="/requirements-and-architecture" className="hover:text-white transition-colors">
                  المتطلبات والمعمارية
                </NavLink>
              </li>
              <li>
                <NavLink to="/business-model-and-limits" className="hover:text-white transition-colors">
                  نموذج العمل والحدود
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Col 3: Sources from Appendix C */}
          <div>
            <h4 className="font-heading font-bold text-base mb-4 text-white flex items-center gap-2">
              <Shield className="w-4 h-4 text-blue-500" />
              <span>المصادر</span>
            </h4>
            <ul className="space-y-2 text-xs text-blue-50/80">
              {content.appendixC.sources.map((source) => (
                <li key={source.domain}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-white hover:underline transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-blue-500" />
                    <span dir="ltr">{source.domain}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer Bottom Note */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-blue-50/60 gap-4">
          <p className="max-w-2xl text-center md:text-right leading-relaxed">
            {content.appendixA.section10.disclaimers[0].content}
          </p>
          <span className="font-mono text-[11px]" dir="ltr">
            REN Platform &copy; 2026
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
