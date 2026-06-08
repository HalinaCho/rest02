import { FiEdit3, FiMapPin, FiUsers, FiInstagram } from 'react-icons/fi';
import './Services.css';

const services = [
  {
    icon: <FiEdit3 />,
    color: '#1a56db',
    title: '네이버 블로그 관리',
    desc: '병원 전문 키워드 분석 및 SEO 최적화 블로그 포스팅으로 검색 상위 노출을 달성합니다.',
    items: ['키워드 전략 수립', '전문 의료 콘텐츠 제작', '주 2–4회 정기 포스팅'],
  },
  {
    icon: <FiMapPin />,
    color: '#0891b2',
    title: '네이버 플레이스 최적화',
    desc: '지역 검색에서 내 병원이 상단에 노출되도록 플레이스 프로필과 리뷰를 전략적으로 관리합니다.',
    items: ['플레이스 프로필 최적화', '사진 & 정보 업데이트', '리뷰 관리 전략'],
  },
  {
    icon: <FiUsers />,
    color: '#0e6a8a',
    title: '네이버 카페 운영',
    desc: '지역 맘카페, 건강 커뮤니티를 활용한 자연스러운 바이럴 마케팅으로 신뢰를 쌓습니다.',
    items: ['맘카페 타겟 마케팅', '건강 정보 콘텐츠 배포', '지역 커뮤니티 활성화'],
  },
  {
    icon: <FiInstagram />,
    color: '#2d7dd2',
    title: '인스타그램 마케팅',
    desc: '트렌디한 의료 콘텐츠와 릴스로 젊은 환자층을 공략하고 팔로워를 실환자로 전환합니다.',
    items: ['피드·릴스 콘텐츠 제작', '해시태그 전략', '광고 집행 & 분석'],
  },
];

function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="section-header">
          <p className="section-label">서비스</p>
          <h2 className="section-title">
            병의원 전문 온라인 마케팅<br />
            <span className="highlight">4가지 핵심 서비스</span>
          </h2>
          <p className="section-subtitle">
            개원병의원에 최적화된 채널별 마케팅 전략으로<br />
            새로운 환자를 꾸준히 유입시킵니다.
          </p>
        </div>
        <div className="services-grid">
          {services.map((svc) => (
            <div key={svc.title} className="service-card">
              <div className="service-icon" style={{ background: `${svc.color}18`, color: svc.color }}>
                {svc.icon}
              </div>
              <h3 className="service-name">{svc.title}</h3>
              <p className="service-desc">{svc.desc}</p>
              <ul className="service-items">
                {svc.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
