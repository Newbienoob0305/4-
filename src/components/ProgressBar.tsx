import React from 'react';
import { AxisType } from '../data/testData';

interface ProgressBarProps {
  currentIndex: number;
  totalQuestions: number;
  currentAxis: AxisType;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentIndex,
  totalQuestions,
  currentAxis,
}) => {
  const percentage = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  const axisBadges: { key: AxisType; label: string; color: string }[] = [
    { key: 'SE', label: '1. 자존감 (1~15)', color: 'from-indigo-500 to-blue-500' },
    { key: 'PR', label: '2. 자존심 (16~30)', color: 'from-fuchsia-500 to-pink-500' },
    { key: 'NA', label: '3. 자기애 (31~45)', color: 'from-amber-500 to-orange-500' },
    { key: 'CF', label: '4. 자신감 (46~60)', color: 'from-emerald-500 to-teal-500' },
  ];

  return (
    <div className="w-full space-y-3 mb-6">
      {/* Step Indicators */}
      <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
        {axisBadges.map((badge) => {
          const isActive = currentAxis === badge.key;
          return (
            <div
              key={badge.key}
              className={`py-1.5 px-2 rounded-xl text-center text-xs font-semibold transition-all border ${
                isActive
                  ? 'bg-slate-800 text-white border-indigo-500/50 shadow-md shadow-indigo-500/10'
                  : 'bg-slate-900/40 text-slate-500 border-slate-800/60'
              }`}
            >
              <span className="hidden sm:inline">{badge.label}</span>
              <span className="sm:hidden">{badge.key}</span>
            </div>
          );
        })}
      </div>

      {/* Main Progress Bar Container */}
      <div className="flex items-center justify-between text-xs text-slate-400 font-medium px-1">
        <span>진도율 <strong className="text-white font-bold">{percentage}%</strong></span>
        <span>문항 <strong className="text-indigo-400 font-bold">{currentIndex + 1}</strong> / {totalQuestions}</span>
      </div>

      {/* Track */}
      <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800 p-0.5">
        <div
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
