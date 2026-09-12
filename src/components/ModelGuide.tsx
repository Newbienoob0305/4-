import React from 'react';
import { Compass, ShieldCheck, Heart, Award, Zap, ArrowRight, Play, BookOpen, Layers } from 'lucide-react';
import { AXIS_DETAILS } from '../data/testData';
import { AdBanner } from './AdBanner';

interface ModelGuideProps {
  onStartTest: () => void;
}

export const ModelGuide: React.FC<ModelGuideProps> = ({ onStartTest }) => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 py-6 px-4 animate-fade-in">
      {/* Hero Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-sm font-medium">
          <BookOpen className="w-4 h-4" />
          <span>ABOUT 4-SELF MODEL</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
          인간 내면의 자아 역동을 결정짓는 <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-amber-300">
            '4자 테스트(4-Self Model)'란 무엇인가?
          </span>
        </h1>
        <p className="text-slate-300 max-w-2xl mx-auto text-base leading-relaxed">
          4자 테스트는 인간 심리의 4대 핵심 자아 요소인 **자존감, 자존심, 자기애, 자신감**의 상호작용과 밸런스를 60개 정밀 문항으로 입체 분석하는 공인 심리 진단 모델입니다.
        </p>
      </div>

      {/* Difference from MBTI */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Layers className="w-5 h-5 text-indigo-400" />
          <span>기존 성격 검사(MBTI 등)와의 차이점</span>
        </h2>
        <p className="text-slate-300 text-sm leading-relaxed">
          기존의 MBTI나 DISC 등의 검사가 주로 **외향/내향, 선호하는 행동 양식이나 일하는 스타일**을 측정하는 데 집중하는 반면, 
          <strong>4자 테스트</strong>는 자아 존중, 내면의 방어 기제, 성취 동기 간의 **구조적 역학**을 파악합니다. 이를 통해 타인의 비판에 대처하는 방식, 스스로의 가치를 느끼는 근원, 목표를 향한 실질적 실행력을 다차원적으로 도출합니다.
        </p>
      </div>

      {/* 4 Main Axes Section */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-white">4대 대립형 핵심 측정 축 (4-Self Axes)</h2>
          <p className="text-slate-400 text-sm">각 축은 15문항(총점 15~75점)으로 구성되며 45점을 기준으로 High / Low 성향이 결정됩니다.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* SE Axis */}
          <div className="glass-card p-6 rounded-3xl border border-indigo-500/30 space-y-4 relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2 text-indigo-400 font-bold text-lg">
                <Heart className="w-5 h-5" />
                <h3>자존감 (Self-Esteem, S / I 축)</h3>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-mono font-bold">SE 축</span>
            </div>
            <p className="text-slate-300 text-sm">{AXIS_DETAILS.SE.description}</p>
            <div className="grid grid-cols-2 gap-3 pt-1 text-xs">
              <div className="bg-indigo-950/40 p-3 rounded-2xl border border-indigo-500/20">
                <span className="font-bold text-indigo-300 block mb-1">S (Self-Value) • High</span>
                <p className="text-slate-400">{AXIS_DETAILS.SE.highDesc}</p>
              </div>
              <div className="bg-slate-900/60 p-3 rounded-2xl border border-slate-800">
                <span className="font-bold text-slate-400 block mb-1">I (Insecurity) • Low</span>
                <p className="text-slate-400">{AXIS_DETAILS.SE.lowDesc}</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 italic pt-1">* {AXIS_DETAILS.SE.standardScale}</p>
          </div>

          {/* PR Axis */}
          <div className="glass-card p-6 rounded-3xl border border-fuchsia-500/30 space-y-4 relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2 text-fuchsia-400 font-bold text-lg">
                <ShieldCheck className="w-5 h-5" />
                <h3>자존심 (Defensiveness, D / A 축)</h3>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-fuchsia-500/20 text-fuchsia-300 text-xs font-mono font-bold">PR 축</span>
            </div>
            <p className="text-slate-300 text-sm">{AXIS_DETAILS.PR.description}</p>
            <div className="grid grid-cols-2 gap-3 pt-1 text-xs">
              <div className="bg-fuchsia-950/40 p-3 rounded-2xl border border-fuchsia-500/20">
                <span className="font-bold text-fuchsia-300 block mb-1">D (Defensive) • High</span>
                <p className="text-slate-400">{AXIS_DETAILS.PR.highDesc}</p>
              </div>
              <div className="bg-slate-900/60 p-3 rounded-2xl border border-slate-800">
                <span className="font-bold text-slate-400 block mb-1">A (Accepting) • Low</span>
                <p className="text-slate-400">{AXIS_DETAILS.PR.lowDesc}</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 italic pt-1">* {AXIS_DETAILS.PR.standardScale}</p>
          </div>

          {/* NA Axis */}
          <div className="glass-card p-6 rounded-3xl border border-amber-500/30 space-y-4 relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-lg">
                <Award className="w-5 h-5" />
                <h3>자기애 (Narcissism, G / M 축)</h3>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-mono font-bold">NA 축</span>
            </div>
            <p className="text-slate-300 text-sm">{AXIS_DETAILS.NA.description}</p>
            <div className="grid grid-cols-2 gap-3 pt-1 text-xs">
              <div className="bg-amber-950/40 p-3 rounded-2xl border border-amber-500/20">
                <span className="font-bold text-amber-300 block mb-1">G (Grandeur) • High</span>
                <p className="text-slate-400">{AXIS_DETAILS.NA.highDesc}</p>
              </div>
              <div className="bg-slate-900/60 p-3 rounded-2xl border border-slate-800">
                <span className="font-bold text-slate-400 block mb-1">M (Modesty) • Low</span>
                <p className="text-slate-400">{AXIS_DETAILS.NA.lowDesc}</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 italic pt-1">* {AXIS_DETAILS.NA.standardScale}</p>
          </div>

          {/* CF Axis */}
          <div className="glass-card p-6 rounded-3xl border border-emerald-500/30 space-y-4 relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-lg">
                <Zap className="w-5 h-5" />
                <h3>자신감 (Self-Efficacy, E / H 축)</h3>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold">CF 축</span>
            </div>
            <p className="text-slate-300 text-sm">{AXIS_DETAILS.CF.description}</p>
            <div className="grid grid-cols-2 gap-3 pt-1 text-xs">
              <div className="bg-emerald-950/40 p-3 rounded-2xl border border-emerald-500/20">
                <span className="font-bold text-emerald-300 block mb-1">E (Efficacy) • High</span>
                <p className="text-slate-400">{AXIS_DETAILS.CF.highDesc}</p>
              </div>
              <div className="bg-slate-900/60 p-3 rounded-2xl border border-slate-800">
                <span className="font-bold text-slate-400 block mb-1">H (Hesitation) • Low</span>
                <p className="text-slate-400">{AXIS_DETAILS.CF.lowDesc}</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 italic pt-1">* {AXIS_DETAILS.CF.standardScale}</p>
          </div>
        </div>
      </div>

      {/* Ad Banner Position (Model Guide Center) */}
      <AdBanner label="모델 소개 페이지 광고 영역" />

      {/* Scoring & Cut-off Formula */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Compass className="w-5 h-5 text-purple-400" />
          <span>점수 산출 및 컷오프(Cut-off) 기준 공식</span>
        </h2>
        <div className="space-y-2 text-sm text-slate-300 leading-relaxed">
          <p>• <strong>리커트 5점 척도 응답</strong>: 1점(전혀 그렇지 않다) ~ 5점(매우 그렇다)</p>
          <p>• <strong>역채점 문항 처리</strong>: 4, 6, 9, 12, 15, 49, 52, 55, 58번 문항은 역채점 계산 (1점=5점, 2점=4점, 3점=3점, 4점=2점, 5점=1점)</p>
          <p>• <strong>축당 총점 범위</strong>: 15점 ~ 75점 (총 15문항)</p>
          <p>• <strong>기준선 (Cut-off Score = 45점)</strong>:</p>
          <ul className="list-disc list-inside space-y-1 pl-4 text-xs text-slate-400">
            <li>SE 축: 46~75점 → <strong>S</strong> (Self-Value) | 15~45점 → <strong>I</strong> (Insecurity)</li>
            <li>PR 축: 46~75점 → <strong>D</strong> (Defensive) | 15~45점 → <strong>A</strong> (Accepting)</li>
            <li>NA 축: 46~75점 → <strong>G</strong> (Grandeur) | 15~45점 → <strong>M</strong> (Modesty)</li>
            <li>CF 축: 46~75점 → <strong>E</strong> (Efficacy) | 15~45점 → <strong>H</strong> (Hesitation)</li>
          </ul>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center pt-4">
        <button
          onClick={onStartTest}
          className="px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-600 text-white font-bold text-lg shadow-xl shadow-indigo-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all inline-flex items-center gap-2 cursor-pointer"
        >
          <Play className="w-5 h-5 fill-current" />
          <span>지금 4자 테스트 시작하기</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
