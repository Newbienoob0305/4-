import React, { useEffect, useState } from 'react';
import { Question } from '../data/testData';
import { ChevronLeft, ChevronRight, Keyboard, Check } from 'lucide-react';
import { AdBanner } from './AdBanner';

interface QuestionCardProps {
  question: Question;
  currentIndex: number;
  totalCount: number;
  currentAnswer?: number;
  onSelectAnswer: (val: number) => void;
  onPrev: () => void;
  onNext: () => void;
  canPrev: boolean;
  canNext: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  currentIndex,
  totalCount,
  currentAnswer,
  onSelectAnswer,
  onPrev,
  onNext,
  canPrev,
  canNext,
}) => {
  const [autoAdvance, setAutoAdvance] = useState<boolean>(true);

  const options = [
    { value: 1, label: '전혀 그렇지 않다', color: 'hover:border-rose-500/50 hover:bg-rose-500/10' },
    { value: 2, label: '그렇지 않다', color: 'hover:border-orange-500/50 hover:bg-orange-500/10' },
    { value: 3, label: '보통이다', color: 'hover:border-slate-500/50 hover:bg-slate-500/10' },
    { value: 4, label: '그렇다', color: 'hover:border-blue-500/50 hover:bg-blue-500/10' },
    { value: 5, label: '매우 그렇다', color: 'hover:border-emerald-500/50 hover:bg-emerald-500/10' },
  ];

  const handleSelect = (val: number) => {
    onSelectAnswer(val);
    if (autoAdvance) {
      setTimeout(() => {
        onNext();
      }, 200);
    }
  };

  // Keyboard shortcut listener (1~5: select, ArrowLeft: prev, ArrowRight: next)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key >= '1' && e.key <= '5') {
        const val = parseInt(e.key, 10);
        handleSelect(val);
      } else if (e.key === 'ArrowLeft' && canPrev) {
        onPrev();
      } else if (e.key === 'ArrowRight' && canNext) {
        onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, canPrev, canNext, autoAdvance]);

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
      {/* Top Controller & Auto-Advance Toggle */}
      <div className="flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-full border border-slate-800">
          <Keyboard className="w-3.5 h-3.5 text-indigo-400" />
          <span className="hidden sm:inline">단축키: 숫자 1~5 / 좌우 방향키</span>
          <span className="sm:hidden">키보드 1~5 가능</span>
        </div>

        <label className="flex items-center gap-2 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={autoAdvance}
            onChange={(e) => setAutoAdvance(e.target.checked)}
            className="w-4 h-4 rounded accent-indigo-500 cursor-pointer"
          />
          <span>선택 시 자동 넘김</span>
        </label>
      </div>

      {/* Main Question Box */}
      <div className="glass-panel rounded-3xl p-6 sm:p-10 space-y-8 border border-slate-700/60 shadow-2xl relative">
        <div className="flex items-center justify-between">
          <span className="px-3.5 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 font-bold text-xs">
            {question.axisName} 진단 축 (#{question.id})
          </span>
          <span className="text-xs text-slate-400 font-mono">Q.{question.id}</span>
        </div>

        {/* Question Text */}
        <h2 className="text-xl sm:text-2xl font-bold text-white text-center leading-relaxed py-2 min-h-[4rem] flex items-center justify-center">
          "{question.text}"
        </h2>

        {/* 5-Point Likert Options */}
        <div className="space-y-3 pt-2">
          {options.map((opt) => {
            const isSelected = currentAnswer === opt.value;
            return (
              <button
                key={opt.value}
                onClick={() => handleSelect(opt.value)}
                className={`w-full py-4 px-5 rounded-2xl border text-left font-medium transition-all flex items-center justify-between group cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-indigo-400 shadow-lg shadow-indigo-500/20 scale-[1.01]'
                    : `bg-slate-900/60 text-slate-200 border-slate-800 ${opt.color}`
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold font-mono transition-colors ${
                      isSelected
                        ? 'bg-white text-indigo-700'
                        : 'bg-slate-800 text-slate-400 group-hover:bg-indigo-500/20 group-hover:text-indigo-300'
                    }`}
                  >
                    {opt.value}
                  </span>
                  <span className="text-sm sm:text-base">{opt.label}</span>
                </div>

                {isSelected && (
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={onPrev}
          disabled={!canPrev}
          className={`flex items-center gap-2 px-5 py-3 rounded-xl border text-sm font-semibold transition-all cursor-pointer ${
            canPrev
              ? 'bg-slate-900 hover:bg-slate-800 text-slate-200 border-slate-700'
              : 'opacity-40 cursor-not-allowed text-slate-600 border-slate-800'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span>이전 문항</span>
        </button>

        <button
          onClick={onNext}
          disabled={!canNext && currentAnswer === undefined}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all cursor-pointer ${
            currentAnswer !== undefined
              ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/20'
              : 'bg-slate-800 text-slate-400 border border-slate-700'
          }`}
        >
          <span>{currentIndex === totalCount - 1 ? '결과 보기' : '다음 문항'}</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Ad Banner Position (In-Test Bottom) */}
      <AdBanner label="문항 진행 중 광고 영역" className="my-4" />
    </div>
  );
};
