export type AxisType = 'SE' | 'PR' | 'NA' | 'CF';

export interface Question {
  id: number;
  axis: AxisType;
  axisName: string;
  text: string;
  isReverse: boolean;
}

export interface AxisDetail {
  key: AxisType;
  name: string;
  description: string;
  highSymbol: string;
  highLabel: string;
  highDesc: string;
  lowSymbol: string;
  lowLabel: string;
  lowDesc: string;
  standardScale: string;
}

export interface PersonalityType {
  code: string;
  title: string;
  strengths: string;
  growthGuide: string;
  summary: string;
  tags: string[];
  gradient: string;
}

export const AXIS_DETAILS: Record<AxisType, AxisDetail> = {
  SE: {
    key: 'SE',
    name: '자존감 (Self-Esteem)',
    description: '자기 자신의 근본적인 존재 가치에 대한 긍정과 신뢰의 정도를 측정합니다.',
    highSymbol: 'S',
    highLabel: 'Self-Value (존재 긍정)',
    highDesc: '타인의 시선에 상관없이 내면의 근본적 가치를 존중함',
    lowSymbol: 'I',
    lowLabel: 'Insecurity (내면 불안/무가치)',
    lowDesc: '자기 가치감이 낮고 외부 평가에 민감하게 좌우됨',
    standardScale: '로젠버그 자존감 척도(RSES) 및 쿠퍼스미스 자존감 검사 반영',
  },
  PR: {
    key: 'PR',
    name: '자존심 (Self-Pride / Defensiveness)',
    description: '체면, 평판, 타인의 비판에 반응하는 내면의 방어 기제 수준을 측정합니다.',
    highSymbol: 'D',
    highLabel: 'Defensive (방어·체면 민감)',
    highDesc: '체면과 명분을 중시하며 지적이나 평가에 민감하게 방어',
    lowSymbol: 'A',
    lowLabel: 'Accepting (유연한 수용)',
    lowDesc: '타인의 지적과 실수를 담담하고 유연하게 수용함',
    standardScale: 'MMPI-2 방어성(K) 척도 및 Marlowe-Crowne 사회적 바람직성 척도 반영',
  },
  NA: {
    key: 'NA',
    name: '자기애 (Narcissistic Tendencies)',
    description: '스스로를 특별하고 우월하게 여기며 주목받고자 하는 자기 중심적 성향을 측정합니다.',
    highSymbol: 'G',
    highLabel: 'Grandeur (우월·특별함)',
    highDesc: '자신의 유능함을 높게 평가하고 주도적인 영향력을 원함',
    lowSymbol: 'M',
    lowLabel: 'Modesty (겸손·평범성)',
    lowDesc: '과시하지 않고 겸손하며 평범한 대등함을 추구',
    standardScale: 'NPI-16(Narcissistic Personality Inventory) 및 지적/현재적 자기애 척도 반영',
  },
  CF: {
    key: 'CF',
    name: '자신감 (Self-Efficacy)',
    description: '새로운 과제나 위기 상황에서 스스로 해결해낼 수 있다는 실행력과 효능감을 측정합니다.',
    highSymbol: 'E',
    highLabel: 'Efficacy (실행력·효능감)',
    highDesc: '어려운 목표도 스스로 해낼 수 있다는 강력한 추진력',
    lowSymbol: 'H',
    lowLabel: 'Hesitation (주저·회피)',
    lowDesc: '실패에 대한 두려움으로 결정을 미루고 주저함',
    standardScale: '반두라의 일반적 자기효능감 척도(GSES) 반영',
  },
};

export const REVERSE_QUESTION_IDS = [4, 6, 9, 12, 15, 49, 52, 55, 58];

export const QUESTIONS: Question[] = [
  // --- 1. 자존감 (SE 축: 1 ~ 15번) ---
  { id: 1, axis: 'SE', axisName: '자존감', text: '나는 내가 다른 사람들과 마찬가지로 가치 있는 존재라고 믿는다.', isReverse: false },
  { id: 2, axis: 'SE', axisName: '자존감', text: '실수나 실패를 하더라도 나의 근본적인 가치는 변하지 않는다고 생각한다.', isReverse: false },
  { id: 3, axis: 'SE', axisName: '자존감', text: '나는 내 모습 그대로를 긍정하고 받아들일 수 있다.', isReverse: false },
  { id: 4, axis: 'SE', axisName: '자존감', text: '때때로 나는 내가 아무 가치도 없는 사람처럼 느껴진다.', isReverse: true },
  { id: 5, axis: 'SE', axisName: '자존감', text: '타인의 칭찬이나 인정이 없어도 스스로의 가치를 유지할 수 있다.', isReverse: false },
  { id: 6, axis: 'SE', axisName: '자존감', text: '내 인생은 실패작에 가깝다는 생각이 자주 든다.', isReverse: true },
  { id: 7, axis: 'SE', axisName: '자존감', text: '나는 나 자신에 대해 대체로 만족스러운 태도를 취한다.', isReverse: false },
  { id: 8, axis: 'SE', axisName: '자존감', text: '나에게는 자랑스럽게 여길 만한 좋은 특성들이 많이 있다.', isReverse: false },
  { id: 9, axis: 'SE', axisName: '자존감', text: '남들과 비교할 때 내 자신이 초라하고 약하게 느껴질 때가 많다.', isReverse: true },
  { id: 10, axis: 'SE', axisName: '자존감', text: '나는 스스로를 꽤 괜찮은 사람이라고 솔직하게 말할 수 있다.', isReverse: false },
  { id: 11, axis: 'SE', axisName: '자존감', text: '단점이나 한계가 있더라도 내 자신을 싫어하지는 않는다.', isReverse: false },
  { id: 12, axis: 'SE', axisName: '자존감', text: '나에 대한 자신감이 쉽게 무너지고 스스로를 자책하곤 한다.', isReverse: true },
  { id: 13, axis: 'SE', axisName: '자존감', text: '어려운 상황에서도 내 존재에 대한 근본적인 믿음은 흔들리지 않는다.', isReverse: false },
  { id: 14, axis: 'SE', axisName: '자존감', text: '나는 내가 사랑받고 존중받을 자격이 충분한 사람이라고 느낀다.', isReverse: false },
  { id: 15, axis: 'SE', axisName: '자존감', text: '다시 태어날 수 있다면 지금의 나와 완전히 다른 사람이 되고 싶다.', isReverse: true },

  // --- 2. 자존심 (PR 축: 16 ~ 30번) ---
  { id: 16, axis: 'PR', axisName: '자존심', text: '남들에게 지거나 무시당하는 기분이 들면 강한 거부감이 든다.', isReverse: false },
  { id: 17, axis: 'PR', axisName: '자존심', text: '누군가 나의 오류나 실수를 지적하면 나도 모르게 방어적이 된다.', isReverse: false },
  { id: 18, axis: 'PR', axisName: '자존심', text: '타인 앞에서 나의 약점이나 무지함을 드러내는 것이 매우 꺼려진다.', isReverse: false },
  { id: 19, axis: 'PR', axisName: '자존심', text: '솔직하게 사과하는 것보다 내 체면과 명분을 지키는 것이 더 중요할 때가 있다.', isReverse: false },
  { id: 20, axis: 'PR', axisName: '자존심', text: '상대방이 나를 가볍게 여기는 듯한 언행을 하면 쉽게 화가 난다.', isReverse: false },
  { id: 21, axis: 'PR', axisName: '자존심', text: '논쟁에서 내 의견이 틀렸음을 알아도 쉽게 인정하기 어렵다.', isReverse: false },
  { id: 22, axis: 'PR', axisName: '자존심', text: '남들에게 도움을 요청하는 것은 내 자존심이 허락하지 않는다.', isReverse: false },
  { id: 23, axis: 'PR', axisName: '자존심', text: '다른 사람들보다 뒤처지거나 못해 보이는 상황을 견디기 힘들다.', isReverse: false },
  { id: 24, axis: 'PR', axisName: '자존심', text: '내가 한 행동에 대해 비판을 받으면 오랫동안 마음에 품고 반발심을 느낀다.', isReverse: false },
  { id: 25, axis: 'PR', axisName: '자존심', text: '어떤 그룹에서든 내 평판과 위신을 관리하는 데 신경을 많이 쓴다.', isReverse: false },
  { id: 26, axis: 'PR', axisName: '자존심', text: '나보다 잘난 사람을 보면 칭찬하기보다 허점을 찾고 싶은 마음이 든다.', isReverse: false },
  { id: 27, axis: 'PR', axisName: '자존심', text: '타인에게 내 단점이 노출되는 것을 막기 위해 피나는 노력을 한다.', isReverse: false },
  { id: 28, axis: 'PR', axisName: '자존심', text: '지적을 받았을 때 내 정당성을 입증하기 위해 즉각 변명이나 설명을 하게 된다.', isReverse: false },
  { id: 29, axis: 'PR', axisName: '자존심', text: '나의 체면을 손상시키는 행동을 한 사람에게는 쉽게 마음을 열지 않는다.', isReverse: false },
  { id: 30, axis: 'PR', axisName: '자존심', text: '경쟁 상황에서 지는 것은 내 자존심에 큰 상처가 된다.', isReverse: false },

  // --- 3. 자기애 (NA 축: 31 ~ 45번) ---
  { id: 31, axis: 'NA', axisName: '자기애', text: '나는 대부분의 평범한 사람들보다 특별하고 우월한 존재라고 생각한다.', isReverse: false },
  { id: 32, axis: 'NA', axisName: '자기애', text: '어느 모임에서나 사람들의 관심과 주목을 받는 것이 즐겁다.', isReverse: false },
  { id: 33, axis: 'NA', axisName: '자기애', text: '나는 남들과 다른 특별한 대우나 혜택을 받을 자격이 있다고 느낀다.', isReverse: false },
  { id: 34, axis: 'NA', axisName: '자기애', text: '나의 위대한 목표나 비전을 이해할 수 있는 사람은 그리 많지 않다.', isReverse: false },
  { id: 35, axis: 'NA', axisName: '자기애', text: '상황을 주도하고 타인을 내 뜻대로 끌어오는 것에 자신감이 있다.', isReverse: false },
  { id: 36, axis: 'NA', axisName: '자기애', text: '나의 재능과 성과는 더 넓은 세상에서 크게 인정받아야 한다.', isReverse: false },
  { id: 37, axis: 'NA', axisName: '자기애', text: '사람들이 나를 찬사하고 높게 평가해 줄 때 큰 만족감을 느낀다.', isReverse: false },
  { id: 38, axis: 'NA', axisName: '자기애', text: '나는 일반적인 규칙이나 제약에 얽매이지 않는 특별한 사람이다.', isReverse: false },
  { id: 39, axis: 'NA', axisName: '자기애', text: '리더 자리에 올라 사람들을 영향력 있게 이끄는 것이 자연스럽다.', isReverse: false },
  { id: 40, axis: 'NA', axisName: '자기애', text: '나의 유능함과 매력은 다른 사람들을 압도할 수준이라고 생각한다.', isReverse: false },
  { id: 41, axis: 'NA', axisName: '자기애', text: '중요한 결정이나 성과에서 항상 내가 중심이 되어야 만족스럽다.', isReverse: false },
  { id: 42, axis: 'NA', axisName: '자기애', text: '사람들은 나의 뛰어난 능력을 더 적극적으로 인정해야 한다.', isReverse: false },
  { id: 43, axis: 'NA', axisName: '자기애', text: '나는 보통 사람들과는 다른 차원의 성공을 거둘 운명이라고 믿는다.', isReverse: false },
  { id: 44, axis: 'NA', axisName: '자기애', text: '내 이야기나 성과를 남들에게 과시하고 자랑하는 것이 즐겁다.', isReverse: false },
  { id: 45, axis: 'NA', axisName: '자기애', text: '주변 사람들이 나를 본보기로 삼고 닮고 싶어 할 것이라 생각한다.', isReverse: false },

  // --- 4. 자신감 (CF 축: 46 ~ 60번) ---
  { id: 46, axis: 'CF', axisName: '자신감', text: '낯설고 복잡한 문제가 생겨도 나는 결국 해결책을 찾아낼 수 있다.', isReverse: false },
  { id: 47, axis: 'CF', axisName: '자신감', text: '내가 스스로 세운 목표는 무슨 일이 있어도 달성할 실행력이 있다.', isReverse: false },
  { id: 48, axis: 'CF', axisName: '자신감', text: '예상치 못한 위기 상황이 와도 당황하지 않고 대처할 수 있다.', isReverse: false },
  { id: 49, axis: 'CF', axisName: '자신감', text: '새로운 일에 도전할 때 잘해내지 못할까 봐 주저하게 된다.', isReverse: true },
  { id: 50, axis: 'CF', axisName: '자신감', text: '어려운 과제가 주어져도 내 역량으로 충분히 해낼 수 있다고 확신한다.', isReverse: false },
  { id: 51, axis: 'CF', axisName: '자신감', text: '계획을 세우면 지체 없이 바로 행동으로 옮기는 편이다.', isReverse: false },
  { id: 52, axis: 'CF', axisName: '자신감', text: '일을 시작하기도 전에 실패에 대한 두려움으로 망설일 때가 많다.', isReverse: true },
  { id: 53, axis: 'CF', axisName: '자신감', text: '내가 결정한 선택에 대해 신뢰를 갖고 밀어붙일 수 있다.', isReverse: false },
  { id: 54, axis: 'CF', axisName: '자신감', text: '새로운 분야나 기술을 배울 때 빠르고 정확하게 습득할 자신이 있다.', isReverse: false },
  { id: 55, axis: 'CF', axisName: '자신감', text: '결정을 내려야 하는 순간에 판단이 서지 않아 계속 미루곤 한다.', isReverse: true },
  { id: 56, axis: 'CF', axisName: '자신감', text: '스트레스나 장애물이 있어도 목표를 향한 추진력을 잃지 않는다.', isReverse: false },
  { id: 57, axis: 'CF', axisName: '자신감', text: '내가 속한 분야에서 실질적인 성과를 만들어내는 능력이 뛰어난 편이다.', isReverse: false },
  { id: 58, axis: 'CF', axisName: '자신감', text: '남들 앞에 서서 일을 주도하는 상황이 오면 부담스럽고 피하고 싶다.', isReverse: true },
  { id: 59, axis: 'CF', axisName: '자신감', text: '어떤 난관이 찾아와도 이를 극복하고 성장을 이뤄낼 수 있다.', isReverse: false },
  { id: 60, axis: 'CF', axisName: '자신감', text: '나는 스스로의 능력을 믿고 복잡한 과제를 주도적으로 이끌어낸다.', isReverse: false },
];

export const PERSONALITY_TYPES: Record<string, PersonalityType> = {
  SDGE: {
    code: 'SDGE',
    title: '완벽한 카리스마 리더',
    strengths: '자존감, 실행력, 우월감, 자존심 모두 우수. 압도적인 추진력과 리더십 보유.',
    growthGuide: '독선적인 태도를 경계하고 타인의 의견을 포용하는 유연함이 필요합니다.',
    summary: '높은 자아존중감과 자신감을 바탕으로 확실한 주관과 우월한 비전을 실행하는 카리스마형 인재입니다.',
    tags: ['카리스마', '압도적추진력', '비전리더', '자존감최고'],
    gradient: 'from-amber-500 via-rose-500 to-purple-600',
  },
  SDGH: {
    code: 'SDGH',
    title: '명예 추구형 이론가',
    strengths: '명분과 품격을 중시하며 확고한 비전과 깊이 있는 주관 보유.',
    growthGuide: '망설임과 주저함을 극복하고 실제 과감한 행동으로 성과를 증명할 것.',
    summary: '자신의 명예와 신념을 중요하게 생각하며 높은 이상을 그리는 전략적 이론가입니다.',
    tags: ['품격중시', '이론가', '명예로운', '깊은신념'],
    gradient: 'from-purple-600 via-indigo-600 to-blue-600',
  },
  SDME: {
    code: 'SDME',
    title: '성숙한 완벽주의자',
    strengths: '과시 없이 자신의 높은 기준에 따라 깔끔하게 성과를 내는 실속파.',
    growthGuide: '체면 의식으로 인한 타인의 비판 수용 어려움을 극복하는 겸손함이 도움이 됩니다.',
    summary: '불필요한 과시 없이 스스로의 높은 기준과 완벽함을 기하며 실질적 성공을 가져옵니다.',
    tags: ['실속파', '완벽주의', '높은기준', '내실있는'],
    gradient: 'from-emerald-500 via-teal-600 to-cyan-600',
  },
  SDMH: {
    code: 'SDMH',
    title: '고결한 원칙주의자',
    strengths: '신중하고 체면을 지키며 원칙과 품위를 지키는 진중함.',
    growthGuide: '실행력을 보완하여 과감한 도전을 시도해 보는 배짱을 키워보세요.',
    summary: '자신과 타인에 대해 품격과 예의를 지키며 원칙에 따라 안정적으로 행동합니다.',
    tags: ['원칙주의', '고결함', '진중한', '품격유지'],
    gradient: 'from-slate-600 via-gray-700 to-zinc-800',
  },
  SAGE: {
    code: 'SAGE',
    title: '겸손한 마이웨이',
    strengths: '타인 평가에 유연하며 자기 확신과 실용적 실행력으로 직진함.',
    growthGuide: '조직의 규칙이나 타인과의 협업 절차를 너무 경시하지 않도록 조율하세요.',
    summary: '남의 눈치를 보지 않고 자기 확신을 기반으로 유연하게 목표를 향해 달려가는 인재입니다.',
    tags: ['마이웨이', '겸손한실행가', '쿨함', '자기확신'],
    gradient: 'from-cyan-500 via-blue-500 to-indigo-600',
  },
  SAGH: {
    code: 'SAGH',
    title: '자족하는 아티스트',
    strengths: '타인과의 비교 의식 없이 독창적이고 깊은 내면세계를 지님.',
    growthGuide: '현실 도피를 방지하기 위해 정기적인 실행 습관과 루틴을 만들 것.',
    summary: '외부의 비판이나 방어심이 적고, 스스로의 가치를 느끼며 유유자적 탐구하는 아티스트 스타일입니다.',
    tags: ['독창적', '아티스트', '유유자적', '내면세계'],
    gradient: 'from-pink-500 via-purple-500 to-indigo-500',
  },
  SAME: {
    code: 'SAME',
    title: '건강한 실천가',
    strengths: '건강한 자아 기반 위에서 과묵하고 완벽하게 성과를 도출함.',
    growthGuide: '자신의 공로와 가치를 외부에 어필하는 노력을 병행하면 더 큰 인정을 받습니다.',
    summary: '단단한 내면과 높은 실행력을 겸비하였으며, 드러내지 않고 실질적 결실을 맺습니다.',
    tags: ['건강한자아', '실천가', '과묵한능력자', '안정감'],
    gradient: 'from-teal-500 via-emerald-600 to-green-600',
  },
  SAMH: {
    code: 'SAMH',
    title: '조용한 평화주의자',
    strengths: '스트레스에 강하고 온화하며 타인을 넓은 마음으로 포용함.',
    growthGuide: '자기 주도성을 강화하여 명확한 목표를 설정하고 소신 있게 밀어붙이세요.',
    summary: '매사 연연해하지 않고 온화하게 사람들을 품어주는 마음 평화로운 수호자입니다.',
    tags: ['평화주의', '온화함', '포용력', '스트레스제휴'],
    gradient: 'from-green-400 via-teal-500 to-blue-500',
  },
  IDGE: {
    code: 'IDGE',
    title: '방어적 과성취자',
    strengths: '뛰어난 실행력과 강한 승부욕으로 항상 눈부신 성과를 달성함.',
    growthGuide: '오직 성과로만 존재 가치를 증명하려는 내면의 불안감을 내려놓고 자아를 돌보세요.',
    summary: '불안한 자존감을 극복하기 위해 승부욕과 실행력을 극대화하여 외부 인정을 쟁취하는 타입입니다.',
    tags: ['과성취자', '승부욕', '목표지향', '열정가'],
    gradient: 'from-rose-500 via-red-600 to-orange-600',
  },
  IDGH: {
    code: 'IDGH',
    title: '취약한 나르시시스트',
    strengths: '높은 이상과 섬세한 감수성을 지녔으나 외부 비판과 평가에 민감.',
    growthGuide: '작은 성공 경험을 하나씩 차근차근 쌓아 현실적 실행력을 키우는 것이 핵심입니다.',
    summary: '스스로에 대한 이상은 매우 높지만 내면의 불안과 외부 평가에 대한 민감함으로 갈등하는 타입입니다.',
    tags: ['이상주의', '섬세한감수성', '인정욕구', '성장잠재력'],
    gradient: 'from-purple-500 via-pink-600 to-red-500',
  },
  IDME: {
    code: 'IDME',
    title: '인정 욕구형 능력자',
    strengths: '뛰어난 실력과 승부욕을 갖추어 빠르게 외부 인정을 확보함.',
    growthGuide: '타인의 평가나 시선에 지나치게 흔들리지 말고 내면의 가치에 집중하세요.',
    summary: '실력이 뛰어난 동시에 타인의 칭찬과 인정을 동력으로 삼아 빠르게 발전하는 인재입니다.',
    tags: ['능력자', '인정동력', '스피디실력', '승부사'],
    gradient: 'from-amber-500 via-orange-600 to-red-600',
  },
  IDMH: {
    code: 'IDMH',
    title: '방어적 고립자',
    strengths: '타인에게 피해를 주지 않고 자신만의 확실한 영역과 평화를 수호.',
    growthGuide: '상처받을 두려움을 극복하고 주변 사람들과 소통의 범위를 넓혀보세요.',
    summary: '외부 비판과 상처에 조심스러워하며 자신만의 성벽 안에서 조용히 자신의 삶을 지키는 타입입니다.',
    tags: ['독립적', '성벽수호', '신중함', '자기보호'],
    gradient: 'from-slate-700 via-zinc-700 to-stone-800',
  },
  IAGE: {
    code: 'IAGE',
    title: '숨은 능력자',
    strengths: '자유로운 환경에서 높은 기술적 성과와 놀라운 전문성을 도출.',
    growthGuide: '외부 평가와 무관하게 스스로에 대한 근본적인 자기 긍정감을 강화하세요.',
    summary: '겸손하고 유연하지만 뛰어난 추진력과 문제 해결 능력으로 깊이 있는 성과를 만듭니다.',
    tags: ['숨은고수', '전문성', '실력파', '자유로운능력자'],
    gradient: 'from-blue-600 via-cyan-600 to-teal-500',
  },
  IAGH: {
    code: 'IAGH',
    title: '자기중심적 공상가',
    strengths: '풍부한 상상력과 창의적이고 원대한 아이디어를 소유함.',
    growthGuide: '남 탓을 하거나 생각에 머물기보다 실질적 행동과 이행에 집중할 것.',
    summary: '머릿속에 원대하고 원대한 상상과 비전이 넘치며 독창적인 생각을 이끌어내는 상상가입니다.',
    tags: ['상상가', '아이디어뱅크', '원대한꿈', '창의적'],
    gradient: 'from-violet-600 via-purple-600 to-fuchsia-600',
  },
  IAME: {
    code: 'IAME',
    title: '묵묵한 기능인',
    strengths: '감정 기복 없이 자신에게 맡겨진 과제와 역할을 묵묵히 완수.',
    growthGuide: '스스로의 가치를 정당하게 평가받을 수 있도록 적극적으로 목소리를 내세요.',
    summary: '묵묵하고 조용하게 주어진 책임을 완성해내며 타인에게 방해를 주지 않는 묵묵한 일꾼입니다.',
    tags: ['성실함', '묵묵함', '책임감', '안정적실행'],
    gradient: 'from-stone-600 via-gray-600 to-slate-700',
  },
  IAMH: {
    code: 'IAMH',
    title: '위축된 무력감',
    strengths: '공격성이 전혀 없고 온순하며 다른 사람과 모나지 않게 어울림.',
    growthGuide: '자기 비하를 멈추고 자존감을 높이는 따뜻한 자기 돌봄(Self-Care)이 필요합니다.',
    summary: '타인에게 무해하고 온순하지만 스스로를 지지하는 힘을 키워나가는 과정이 필요한 유형입니다.',
    tags: ['온순함', '무해함', '자기돌봄필요', '따뜻한보듬'],
    gradient: 'from-slate-500 via-gray-500 to-zinc-600',
  },
};

/**
 * 60문항 점수 계산 및 4자 성격 유형 코드 도출 함수
 */
export function calculateResult(answers: Record<number, number>) {
  // 축별 점수 초기화
  let seScore = 0;
  let prScore = 0;
  let naScore = 0;
  let cfScore = 0;

  QUESTIONS.forEach((q) => {
    const rawVal = answers[q.id] || 3;
    // 역채점 처리: 1->5, 2->4, 3->3, 4->2, 5->1 (즉, 6 - rawVal)
    const finalVal = q.isReverse ? 6 - rawVal : rawVal;

    switch (q.axis) {
      case 'SE':
        seScore += finalVal;
        break;
      case 'PR':
        prScore += finalVal;
        break;
      case 'NA':
        naScore += finalVal;
        break;
      case 'CF':
        cfScore += finalVal;
        break;
    }
  });

  // Cut-off Score: 45점 기준
  // 46~75 -> High, 15~45 -> Low
  const seSymbol = seScore >= 46 ? 'S' : 'I';
  const prSymbol = prScore >= 46 ? 'D' : 'A';
  const naSymbol = naScore >= 46 ? 'G' : 'M';
  const cfSymbol = cfScore >= 46 ? 'E' : 'H';

  const typeCode = `${seSymbol}${prSymbol}${naSymbol}${cfSymbol}`;
  const personality = PERSONALITY_TYPES[typeCode] || PERSONALITY_TYPES['SAME'];

  return {
    typeCode,
    personality,
    scores: {
      SE: seScore,
      PR: prScore,
      NA: naScore,
      CF: cfScore,
    },
    symbols: {
      SE: seSymbol,
      PR: prSymbol,
      NA: naSymbol,
      CF: cfSymbol,
    },
  };
}
