import React from 'react';
import { Brain, Sparkles, RefreshCw, Compass, Layers, Play } from 'lucide-react';

export type TabType = 'test' | 'guide' | 'encyclopedia';

interface HeaderProps {
  activeTab: TabType;
  onSelectTab: (tab: TabType) => void;
  onReset: () => void;
  isStarted: boolean;
  isFinished: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onSelectTab,
  onReset,
  isStarted,
  isFinished,
}) => {
  return (
    <header className="w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Logo */}
        <div
          onClick={() => onSelectTab('test')}
          className="flex items-center space-x-3 cursor-pointer group"
        >
          <div className="p-2 rounded-xl bg-gradient-to-tr from-indigo-600 to-fuchsia-600 text-white shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <Brain className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-bold text-base sm:text-lg text-white tracking-wide group-hover:text-indigo-400 transition-colors">
                4자 테스트 <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">4-Self Model</span>
              </h1>
            </div>
            <p className="text-xs text-slate-400">정밀 심리 진단 성격 검사</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1 bg-slate-900/80 p-1 rounded-2xl border border-slate-800 text-xs font-semibold">
          <button
            onClick={() => onSelectTab('test')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
              activeTab === 'test'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20 font-bold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>테스트하기</span>
          </button>

          <button
            onClick={() => onSelectTab('guide')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
              activeTab === 'guide'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20 font-bold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>4자 모델 소개</span>
          </button>

          <button
            onClick={() => onSelectTab('encyclopedia')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
              activeTab === 'encyclopedia'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20 font-bold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>16가지 유형 도감</span>
          </button>
        </div>

        {/* Action Controls */}
        <div className="hidden lg:flex items-center gap-2">
          {(isStarted || isFinished) && activeTab === 'test' && (
            <button
              onClick={onReset}
              className="flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 px-3 py-1.5 rounded-lg border border-slate-700 transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>처음으로</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
