import { FiTarget, FiTrendingUp, FiShield, FiClock } from 'react-icons/fi';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './WhyUs.css';

const reasons = [
  {
    icon: <FiTarget />,
    title: '병의원 전문 노하우',
    desc: '안과, 피부과, 한의원 등 개원병의원만을 위한 마케팅 전략. 의료 특성을 이해한 콘텐츠로 신뢰도를 높입니다.',
  },
  {
    icon: <FiTrendingUp />,
    title: '데이터 기반 성과 분석',
    desc: '채널별 유입·전환 지표를 매월 리포트로 제공합니다. 숫자로 증명하는 투명한 마케팅.',
  },
  {
    icon: <FiShield />,
    title: '의료광고 법규 준수',
    desc: '의료법상 광고 심의 기준을 철저히 준수합니다. 안심하고 맡길 수 있는 합법적인 마케팅.',
  },
  {
    icon: <FiClock />,
    title: '빠른 피드백 & 유연한 운영',
    desc: '담당자 1:1 전담제로 빠른 커뮤니케이션. 병원 일정·이벤트에 맞춘 유연한 콘텐츠 대응.',
  },
];

const delayClass = ['delay-1', 'delay-2', 'delay-3', 'delay-4'];

function WhyCard({ reason, index }) {
  const ref = useScrollAnimation();
  return (
    <div ref={ref} className={`why-card reveal ${delayClass[index]}`}>
      <div className="why-icon">{reason.icon}</div>
      <div>
        <h3>{reason.title}</h3>
        <p>{reason.desc}</p>
      </div>
    </div>
  );
}

function WhyUs() {
  const textRef = useScrollAnimation();
  const cardsRef = useScrollAnimation();

  return (
    <section className="why-us section" id="why">
      <div className="container">
        <div className="why-inner">
          <div ref={textRef} className="why-text reveal from-left">
            <p className="section-label">왜 메디마케팅인가</p>
            <h2 className="section-title">
              개원의 선생님이<br />
              <span className="highlight-teal">마케팅 걱정 없이</span><br />
              진료에 집중할 수 있도록
            </h2>
            <p className="section-subtitle">
              2026년 6월 설립된 닥브매는<br />
              병원 브랜드 전문가로서 신뢰를 쌓아가고 있습니다.
            </p>
          </div>
          <div ref={cardsRef} className="why-cards">
            {reasons.map((r, i) => (
              <WhyCard key={r.title} reason={r} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
