import React, { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import html2canvas from 'html2canvas';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import {
  Download,
  Share2,
  RotateCcw,
  Sparkles,
  ShieldAlert,
  Award,
  CheckCircle,
  Brain,
  Info,
} from 'lucide-react';
import { PersonalityType, AXIS_DETAILS, AxisType } from '../data/testData';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface ResultReportProps {
  typeCode: string;
  personality: PersonalityType;
  scores: Record<AxisType, number>;
  symbols: Record<AxisType, string>;
  onReset: () => void;
}

export const ResultReport: React.FC<ResultReportProps> = ({
  typeCode,
  personality,
  scores,
  symbols,
  onReset,
}) => {
  const reportRef = useRef<HTMLDivElement>(null);

  // Trigger celebration confetti on mount
  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  // Radar Chart Config
  const chartData = {
    labels: [
      '자존감 (SE)',
      '자존심 (PR)',
      '자기애 (NA)',
      '자신감 (CF)',
    ],
    datasets: [
      {
        label: '내 점수 (15~75점)',
        data: [scores.SE, scores.PR, scores.NA, scores.CF],
        backgroundColor: 'rgba(129, 140, 248, 0.25)',
        borderColor: '#818cf8',
        borderWidth: 3,
        pointBackgroundColor: '#c084fc',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#c084fc',
        pointRadius: 6,
      },
      {
        label: '기준선 (Cut-off 45점)',
        data: [45, 45, 45, 45],
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderColor: 'rgba(255, 255, 255, 0.3)',
        borderWidth: 1.5,
        borderDash: [4, 4],
        pointRadius: 0,
      },
    ],
  };

  const chartOptions = {
    scales: {
      r: {
        min: 15,
        max: 75,
        ticks: {
          stepSize: 15,
          color: '#94a3b8',
          backdropColor: 'transparent',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        angleLines: {
          color: 'rgba(255, 255, 255, 0.15)',
        },
        pointLabels: {
          color: '#e2e8f0',
          font: {
            size: 13,
            weight: 'bold' as const,
          },
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: '#cbd5e1',
          font: {
            size: 12,
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  // Image Download Function
  const handleDownloadImage = async () => {
    if (!reportRef.current) return;
    try {
      const canvas = await html2canvas(reportRef.current, {
        backgroundColor: '#020617',
        scale: 2,
      });
      const link = document.createElement('a');
      link.download = `4Self-Test-Result-${typeCode}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (err) {
      console.error('이미지 저장 중 오류 발생:', err);
      alert('이미지 저장 중 오류가 발생했습니다.');
    }
  };

  // Share link function
  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      alert('테스트 결과 링크가 클립보드에 복사되었습니다!');
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 py-6 px-4 animate-fade-in">
      {/* Action Buttons Top */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1.5 rounded-full font-medium">
          <Sparkles className="w-4 h-4" />
          <span>4자 테스트 정밀 심리 진단 리포트 Complete</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleDownloadImage}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
          >
            <Download className="w-4 h-4 text-indigo-400" />
            <span>이미지 저장</span>
          </button>

          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
          >
            <Share2 className="w-4 h-4 text-fuchsia-400" />
            <span>공유하기</span>
          </button>

          <button
            onClick={onReset}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-lg shadow-indigo-500/20 transition-all cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>다시 테스트</span>
          </button>
        </div>
      </div>

      {/* Main Report Container for Image Export */}
      <div ref={reportRef} className="space-y-8 p-4 sm:p-6 rounded-3xl bg-slate-950/60 border border-slate-800">
        {/* Result Header Hero Card */}
        <div className={`glass-panel rounded-3xl p-6 sm:p-10 relative overflow-hidden text-center space-y-6 border border-slate-700 shadow-2xl`}>
          <div className="space-y-2">
            <div className="inline-block px-4 py-1 rounded-full bg-slate-900/80 border border-slate-700 text-slate-400 font-mono text-sm tracking-wider">
              YOUR 4-SELF TYPE CODE
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-amber-300 tracking-tight py-1">
              {typeCode}
            </h1>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              "{personality.title}"
            </h2>
          </div>

          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            {personality.summary}
          </p>

          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {personality.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700/80 text-xs font-semibold text-indigo-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Radar Chart & Axis Breakdown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Radar Chart */}
          <div className="glass-panel p-6 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Brain className="w-5 h-5 text-indigo-400" />
                <span>4자 심리 역동 방사형 차트</span>
              </h3>
              <span className="text-xs text-slate-400">Cut-off 45점 기준</span>
            </div>
            <div className="h-64 sm:h-72 w-full">
              <Radar data={chartData} options={chartOptions} />
            </div>
            <p className="text-xs text-slate-400 text-center">
              * 46점 이상: High 성향 기호 적용 / 45점 이하: Low 성향 기호 적용
            </p>
          </div>

          {/* Axis Detail Progress Bars */}
          <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-4">
            <h3 className="font-bold text-white text-base border-b border-slate-800 pb-3 flex items-center gap-2">
              <Info className="w-5 h-5 text-fuchsia-400" />
              <span>측정 축별 상세 점수 및 성향</span>
            </h3>

            <div className="space-y-4">
              {(Object.keys(AXIS_DETAILS) as AxisType[]).map((axisKey) => {
                const axis = AXIS_DETAILS[axisKey];
                const score = scores[axisKey];
                const symbol = symbols[axisKey];
                const isHigh = score >= 46;
                const percent = Math.round(((score - 15) / (75 - 15)) * 100);

                return (
                  <div key={axisKey} className="bg-slate-900/60 p-3.5 rounded-2xl border border-slate-800/80 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-200">{axis.name}</span>
                      <div className="flex items-center gap-2 font-mono">
                        <span className={`px-2 py-0.5 rounded font-bold ${isHigh ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30' : 'bg-slate-800 text-slate-400'}`}>
                          {symbol} ({isHigh ? axis.highSymbol : axis.lowSymbol})
                        </span>
                        <span className="text-slate-300 font-bold">{score} / 75점</span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                      <div
                        className={`h-full rounded-full transition-all ${
                          isHigh
                            ? 'bg-gradient-to-r from-indigo-500 to-fuchsia-500'
                            : 'bg-gradient-to-r from-slate-600 to-slate-400'
                        }`}
                        style={{ width: `${percent}%` }}
                      />
                    </div>

                    <p className="text-xs text-slate-400">
                      <strong>{isHigh ? axis.highLabel : axis.lowLabel}:</strong>{' '}
                      {isHigh ? axis.highDesc : axis.lowDesc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Strengths & Growth Guide Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Core Strengths */}
          <div className="glass-card p-6 rounded-3xl border border-emerald-500/20 bg-emerald-950/10 space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-lg">
              <Award className="w-6 h-6" />
              <h3>주요 특징 및 핵심 강점</h3>
            </div>
            <p className="text-slate-200 text-sm leading-relaxed font-medium">
              {personality.strengths}
            </p>
            <div className="pt-2 flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
              <CheckCircle className="w-4 h-4" />
              <span>당신을 빛나게 만드는 대표적인 강점입니다.</span>
            </div>
          </div>

          {/* Growth Guide */}
          <div className="glass-card p-6 rounded-3xl border border-amber-500/20 bg-amber-950/10 space-y-3">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-lg">
              <ShieldAlert className="w-6 h-6" />
              <h3>약점 및 성장 가이드</h3>
            </div>
            <p className="text-slate-200 text-sm leading-relaxed font-medium">
              {personality.growthGuide}
            </p>
            <div className="pt-2 flex items-center gap-1.5 text-xs text-amber-400 font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>더 높은 성장을 위한 실천 팁입니다.</span>
            </div>
          </div>
        </div>

        {/* Academic Reference Footer */}
        <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800 text-center text-xs text-slate-500 space-y-1">
          <p>4자 테스트(4-Self Model) 정밀 심리 진단 모델 보고서 기반 웹 애플리케이션</p>
          <p>참고 척도: Rosenberg RSES • MMPI-2 Defensiveness • NPI-16 Narcissism • Bandura GSES</p>
        </div>
      </div>
    </div>
  );
};
