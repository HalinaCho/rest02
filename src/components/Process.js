import useScrollAnimation from '../hooks/useScrollAnimation';
import './Process.css';

const steps = [
  { num: '01', title: '무료 상담', desc: '병원 현황과 마케팅 목표를 파악합니다.' },
  { num: '02', title: '전략 수립', desc: '채널별 맞춤 마케팅 플랜을 설계합니다.' },
  { num: '03', title: '콘텐츠 제작', desc: '전문 의료 콘텐츠를 기획·제작합니다.' },
  { num: '04', title: '운영 & 분석', desc: '월간 성과 리포트로 지속 최적화합니다.' },
];

const delayClass = ['delay-1', 'delay-2', 'delay-3', 'delay-4'];

function ProcessStep({ step, idx, total }) {
  const ref = useScrollAnimation();
  return (
    <div ref={ref} className={`process-step reveal ${delayClass[idx]}`}>
      <div className="step-number">{step.num}</div>
      {idx < total - 1 && <div className="step-line" />}
      <h3>{step.title}</h3>
      <p>{step.desc}</p>
    </div>
  );
}

function Process() {
  const headerRef = useScrollAnimation();

  return (
    <section className="process section" id="process">
      <div className="container">
        <div ref={headerRef} className="section-header reveal">
          <p className="section-label">진행 프로세스</p>
          <h2 className="section-title">
            이렇게 <span className="highlight">함께 시작</span>합니다
          </h2>
          <p className="section-subtitle">
            상담부터 운영까지, 단계별로 체계적으로 진행됩니다.
          </p>
        </div>
        <div className="process-steps">
          {steps.map((step, idx) => (
            <ProcessStep key={step.num} step={step} idx={idx} total={steps.length} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
