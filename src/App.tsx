import React, { useEffect, useState } from 'react';
import { QUESTIONS, calculateResult, Question } from './data/testData';
import { Header, TabType } from './components/Header';
import { IntroSection } from './components/IntroSection';
import { ProgressBar } from './components/ProgressBar';
import { QuestionCard } from './components/QuestionCard';
import { ResultReport } from './components/ResultReport';
import { ModelGuide } from './components/ModelGuide';
import { TypeEncyclopedia } from './components/TypeEncyclopedia';

export function App() {
  const [activeTab, setActiveTab] = useState<TabType>('test');
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [urlTypeCode, setUrlTypeCode] = useState<string | undefined>(undefined);

  // Check URL query parameters on initial load (e.g. ?tab=encyclopedia&type=SDGE)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tabParam = params.get('tab') as TabType | null;
    const typeParam = params.get('type');

    if (tabParam === 'encyclopedia' || tabParam === 'guide') {
      setActiveTab(tabParam);
    } else if (typeParam) {
      setActiveTab('encyclopedia');
    }

    if (typeParam) {
      setUrlTypeCode(typeParam.toUpperCase());
    }
  }, []);

  const currentQuestion: Question = QUESTIONS[currentIndex];

  const handleStart = () => {
    setActiveTab('test');
    setIsStarted(true);
    setIsFinished(false);
    setCurrentIndex(0);
    setAnswers({});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setIsStarted(false);
    setIsFinished(false);
    setCurrentIndex(0);
    setAnswers({});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTab = (tab: TabType) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectAnswer = (val: number) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: val,
    }));
  };

  const handleNext = () => {
    if (currentIndex < QUESTIONS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // 60문항 완료
      setIsFinished(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // 결과 산출
  const result = isFinished ? calculateResult(answers) : null;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Header
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        onReset={handleReset}
        isStarted={isStarted}
        isFinished={isFinished}
      />

      <main className="flex-1 max-w-5xl w-full mx-auto p-4 md:py-8">
        {/* TAB 1: TEST */}
        {activeTab === 'test' && (
          <>
            {!isStarted && !isFinished && (
              <IntroSection onStart={handleStart} />
            )}

            {isStarted && !isFinished && (
              <div className="max-w-2xl mx-auto py-4">
                <ProgressBar
                  currentIndex={currentIndex}
                  totalQuestions={QUESTIONS.length}
                  currentAxis={currentQuestion.axis}
                />

                <QuestionCard
                  question={currentQuestion}
                  currentIndex={currentIndex}
                  totalCount={QUESTIONS.length}
                  currentAnswer={answers[currentQuestion.id]}
                  onSelectAnswer={handleSelectAnswer}
                  onPrev={handlePrev}
                  onNext={handleNext}
                  canPrev={currentIndex > 0}
                  canNext={answers[currentQuestion.id] !== undefined}
                />
              </div>
            )}

            {isFinished && result && (
              <ResultReport
                typeCode={result.typeCode}
                personality={result.personality}
                scores={result.scores}
                symbols={result.symbols}
                onReset={handleReset}
              />
            )}
          </>
        )}

        {/* TAB 2: 4-SELF MODEL GUIDE */}
        {activeTab === 'guide' && (
          <ModelGuide onStartTest={handleStart} />
        )}

        {/* TAB 3: 16 PERSONALITY TYPES ENCYCLOPEDIA */}
        {activeTab === 'encyclopedia' && (
          <TypeEncyclopedia
            onStartTest={handleStart}
            defaultTypeCode={urlTypeCode}
          />
        )}
      </main>

      <footer className="border-t border-slate-900 bg-slate-950/80 py-6 text-center text-xs text-slate-500">
        <div className="max-w-5xl mx-auto px-4">
          <p>© 2026 4-Self Psychology Assessment. All rights reserved.</p>
          <p className="mt-1">자존감 (SE) • 자존심 (PR) • 자기애 (NA) • 자신감 (CF) 4자 대립형 성격 모델</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
