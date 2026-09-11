import React, { useState } from 'react';
import { PERSONALITY_TYPES, PersonalityType } from '../data/testData';
import { Search, Sparkles, X, Award, ShieldAlert, Play, Layers } from 'lucide-react';

interface TypeEncyclopediaProps {
  onStartTest: () => void;
}

export const TypeEncyclopedia: React.FC<TypeEncyclopediaProps> = ({ onStartTest }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filterSymbol, setFilterSymbol] = useState<string>('ALL');
  const [selectedType, setSelectedType] = useState<PersonalityType | null>(null);

  const typeList = Object.values(PERSONALITY_TYPES);

  // Filter & Search Logic
  const filteredList = typeList.filter((item) => {
    const matchesSearch =
      item.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));

    if (filterSymbol === 'ALL') return matchesSearch;
    return matchesSearch && item.code.includes(filterSymbol);
  });

  return (
    <div className="max-w-5xl mx-auto space-y-8 py-6 px-4 animate-fade-in">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 text-sm font-medium">
          <Layers className="w-4 h-4" />
          <span>16 PERSONALITY TYPES ENCYCLOPEDIA</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          16가지 성격 유형 도감
        </h1>
        <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">
          자존감(S/I), 자존심(D/A), 자기애(G/M), 자신감(E/H)의 조합으로 이뤄진 16가지 고유 유형의 특징과 성장 가이드를 탐색해 보세요.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="glass-panel p-4 rounded-2xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="유형 코드 또는 이름 검색 (예: SDGE, 완벽)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700/80 rounded-xl pl-10 pr-4 py-2 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 text-xs font-semibold">
          <span className="text-slate-400 mr-1 hidden sm:inline">필터:</span>
          {[
            { key: 'ALL', label: '전체 (16)' },
            { key: 'S', label: '존재 긍정 (S)' },
            { key: 'I', label: '내면 불안 (I)' },
            { key: 'D', label: '체면 방어 (D)' },
            { key: 'A', label: '유연 수용 (A)' },
            { key: 'E', label: '실행력 (E)' },
          ].map((btn) => (
            <button
              key={btn.key}
              onClick={() => setFilterSymbol(btn.key)}
              className={`px-3 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                filterSymbol === btn.key
                  ? 'bg-indigo-600 text-white border-indigo-400 shadow-md shadow-indigo-500/20'
                  : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredList.map((item) => (
          <div
            key={item.code}
            onClick={() => setSelectedType(item)}
            className="glass-card rounded-2xl p-5 border border-slate-800 hover:border-indigo-500/50 hover:scale-[1.02] transition-all cursor-pointer flex flex-col justify-between group space-y-4 shadow-lg"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-fuchsia-300">
                  {item.code}
                </span>
                <span className="text-xs text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20 font-medium">
                  상세보기
                </span>
              </div>
              <h3 className="font-bold text-white text-base group-hover:text-indigo-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                {item.summary}
              </p>
            </div>

            <div className="flex flex-wrap gap-1 pt-2">
              {item.tags.slice(0, 2).map((tag, idx) => (
                <span key={idx} className="text-[10px] bg-slate-900 text-slate-400 px-2 py-0.5 rounded border border-slate-800">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {filteredList.length === 0 && (
        <div className="text-center py-12 text-slate-400 text-sm">
          검색 조건에 해당되는 성격 유형이 없습니다.
        </div>
      )}

      {/* Detail Modal */}
      {selectedType && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
          <div className="glass-panel w-full max-w-xl rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedType(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white border border-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 text-center sm:text-left">
              <span className="font-mono text-xs px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 font-bold">
                TYPE CODE: {selectedType.code}
              </span>
              <h2 className="text-3xl font-extrabold text-white">
                "{selectedType.title}"
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                {selectedType.summary}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {selectedType.tags.map((tag, idx) => (
                <span key={idx} className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs text-indigo-300 font-semibold">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Strengths */}
            <div className="bg-slate-900/60 p-4 rounded-2xl border border-emerald-500/30 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <Award className="w-4 h-4" />
                <h3>주요 특징 및 핵심 강점</h3>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {selectedType.strengths}
              </p>
            </div>

            {/* Growth Guide */}
            <div className="bg-slate-900/60 p-4 rounded-2xl border border-amber-500/30 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <ShieldAlert className="w-4 h-4" />
                <h3>약점 및 성장 가이드</h3>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {selectedType.growthGuide}
              </p>
            </div>

            {/* CTA */}
            <div className="pt-2 flex items-center justify-between gap-3">
              <button
                onClick={() => setSelectedType(null)}
                className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-700 transition-colors cursor-pointer"
              >
                닫기
              </button>

              <button
                onClick={() => {
                  setSelectedType(null);
                  onStartTest();
                }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-lg shadow-indigo-500/20 transition-all cursor-pointer"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>나도 이 유형인지 테스트해보기</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
