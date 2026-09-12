import React from 'react';
import { Play, ShieldCheck, Heart, Award, Zap, Compass, CheckCircle2 } from 'lucide-react';
import { AdBanner } from './AdBanner';

interface IntroSectionProps {
  onStart: () => void;
}

export const IntroSection: React.FC<IntroSectionProps> = ({ onStart }) => {
  return (
    <div className="max-w-4xl mx-auto space-y-10 py-6 px-4 animate-fade-in">
      {/* Hero Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-sm font-medium">
          <Compass className="w-4 h-4" />
          <span>PSYCHOLOGY & SELF-ASSESSMENT FRAMEWORK</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
          내면 자아의 역동을 밝히는 <br className="hidden sm:inline" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-amber-300">
            '4자 테스트' 정밀 심리 진단
          </span>
        </h1>
        <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          자존감, 자존심, 자기애, 자신감의 상호작용 및 균형을 입체적으로 측정하여
          <br className="hidden sm:inline" />
          나의 숨겨진 강점과 16가지 고유 성격 유형을 정밀하게 도출합니다.
        </p>
      </div>

      {/* Main Start Card */}
      <div className="glass-panel rounded-3xl p-6 md:p-8 relative overflow-hidden text-center space-y-6 border border-slate-700/50 shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-fuchsia-500/10 rounded-full blur-3xl -z-10" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800 space-y-2">
            <div className="w-9 h-9 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">
              SE
            </div>
            <h3 className="font-semibold text-white text-sm">자존감 (Self-Esteem)</h3>
            <p className="text-xs text-slate-400">S (존재긍정) vs I (내면불안)</p>
          </div>

          <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800 space-y-2">
            <div className="w-9 h-9 rounded-xl bg-fuchsia-500/20 text-fuchsia-400 flex items-center justify-center font-bold">
              PR
            </div>
            <h3 className="font-semibold text-white text-sm">자존심 (Defensiveness)</h3>
            <p className="text-xs text-slate-400">D (방어·체면) vs A (유연수용)</p>
          </div>

          <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800 space-y-2">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
              NA
            </div>
            <h3 className="font-semibold text-white text-sm">자기애 (Narcissism)</h3>
            <p className="text-xs text-slate-400">G (우월·특별) vs M (겸손·평범)</p>
          </div>

          <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800 space-y-2">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
              CF
            </div>
            <h3 className="font-semibold text-white text-sm">자신감 (Self-Efficacy)</h3>
            <p className="text-xs text-slate-400">E (실행·효능) vs H (주저·회피)</p>
          </div>
        </div>

        <div className="pt-2">
          <button
            onClick={onStart}
            className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-600 text-white font-bold text-lg shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 mx-auto cursor-pointer"
          >
            <Play className="w-5 h-5 fill-current" />
            <span>60문항 정밀 진단 시작하기</span>
          </button>
          <p className="text-xs text-slate-400 mt-3 flex items-center justify-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>약 7~10분 소요 • 5점 리커트 척도 (1: 전혀 그렇지 않다 ~ 5: 매우 그렇다)</span>
          </p>
        </div>
      </div>

      {/* Ad Banner Position (Intro Bottom) */}
      <AdBanner label="메인 상단 광고 영역" />

      {/* Academic References Section */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-indigo-400" />
          <span>검증된 심리학 공인 표준 참고 척도</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 space-y-1">
            <div className="text-indigo-400 font-semibold text-sm flex items-center gap-1.5">
              <Heart className="w-4 h-4" /> 자존감 (S / I 축)
            </div>
            <p className="text-xs text-slate-300">
              로젠버그 자존감 척도(Rosenberg Self-Esteem Scale, RSES) 및 쿠퍼스미스 자존감 검사(Coopersmith Self-Esteem Inventory) 반영
            </p>
          </div>

          <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 space-y-1">
            <div className="text-fuchsia-400 font-semibold text-sm flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" /> 자존심 (D / A 축)
            </div>
            <p className="text-xs text-slate-300">
              다면적 인성검사 II(MMPI-2) 방어성(K) 척도 및 Marlowe-Crowne 사회적 바람직성 척도(MC-SDS) 변형 적용
            </p>
          </div>

          <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 space-y-1">
            <div className="text-amber-400 font-semibold text-sm flex items-center gap-1.5">
              <Award className="w-4 h-4" /> 자기애 (G / M 축)
            </div>
            <p className="text-xs text-slate-300">
              NPI-16(Narcissistic Personality Inventory) 및 지적/현재적 자기애 척도(Grandiosity Scale) 참조
            </p>
          </div>

          <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 space-y-1">
            <div className="text-emerald-400 font-semibold text-sm flex items-center gap-1.5">
              <Zap className="w-4 h-4" /> 자신감 (E / H 축)
            </div>
            <p className="text-xs text-slate-300">
              알버트 반두라의 일반적 자기효능감 척도(General Self-Efficacy Scale, GSES) 반영
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
