import { FiCheck, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Services.css';

const packages = [
  {
    tier: 'BASIC',
    name: '케어 플랜',
    nameEn: 'Care Plan',
    tagline: '온라인 마케팅을 막 시작하는 병원',
    price: '월 OO만원',
    priceNote: '(가격 업데이트 예정)',
    highlight: false,
    channels: [
      { name: '네이버 블로그', desc: '월 OO회 포스팅' },
      { name: '네이버 플레이스', desc: '프로필 최적화 + 관리' },
    ],
    features: [
      '키워드 분석 & 전략 수립',
      '월간 성과 리포트',
      '1:1 담당 매니저 배정',
      '콘텐츠 기획 회의 월 1회',
    ],
    notIncluded: ['네이버 카페 운영', '인스타그램 마케팅'],
  },
  {
    tier: 'STANDARD',
    name: '그로스 플랜',
    nameEn: 'Growth Plan',
    tagline: '본격적으로 환자를 늘리고 싶은 병원',
    price: '월 OO만원',
    priceNote: '(가격 업데이트 예정)',
    highlight: true,
    channels: [
      { name: '네이버 블로그', desc: '월 OO회 포스팅' },
      { name: '네이버 플레이스', desc: '프로필 최적화 + 리뷰 관리' },
      { name: '네이버 카페', desc: '지역 커뮤니티 마케팅' },
    ],
    features: [
      '키워드 분석 & 전략 수립',
      '월간 성과 리포트',
      '1:1 담당 매니저 배정',
      '콘텐츠 기획 회의 월 2회',
      '이벤트·프로모션 기획 지원',
    ],
    notIncluded: ['인스타그램 마케팅'],
  },
  {
    tier: 'PREMIUM',
    name: '브랜드 플랜',
    nameEn: 'Brand Plan',
    tagline: '병원 브랜드를 완성하고 싶은 병원',
    price: '월 OO만원',
    priceNote: '(가격 업데이트 예정)',
    highlight: false,
    channels: [
      { name: '네이버 블로그', desc: '월 OO회 포스팅' },
      { name: '네이버 플레이스', desc: '프로필 최적화 + 리뷰 관리' },
      { name: '네이버 카페', desc: '지역 커뮤니티 마케팅' },
      { name: '인스타그램', desc: '피드·릴스 제작 + 광고' },
    ],
    features: [
      '키워드 분석 & 전략 수립',
      '월간 성과 리포트 (심층 분석)',
      '1:1 담당 매니저 배정',
      '콘텐츠 기획 회의 월 4회',
      '이벤트·프로모션 기획 지원',
      '브랜드 아이덴티티 가이드 제공',
      '광고 집행 및 성과 분석',
    ],
    notIncluded: [],
  },
];

const delayClass = ['delay-1', 'delay-2', 'delay-3', 'delay-4'];

function PackageCard({ pkg, index }) {
  const ref = useScrollAnimation();
  return (
    <div ref={ref} className={`package-card reveal ${delayClass[index]} ${pkg.highlight ? 'featured' : ''}`}>
      {pkg.highlight && <div className="featured-badge">가장 인기</div>}

      <div className="pkg-header">
        <span className="pkg-tier">{pkg.tier}</span>
        <h2 className="pkg-name">{pkg.name}</h2>
        <p className="pkg-name-en">{pkg.nameEn}</p>
        <p className="pkg-tagline">{pkg.tagline}</p>
      </div>

      <div className="pkg-price">
        <span className="price-amount">{pkg.price}</span>
        <span className="price-note">{pkg.priceNote}</span>
      </div>

      <div className="pkg-channels">
        <p className="pkg-section-label">포함 채널</p>
        <ul>
          {pkg.channels.map((ch) => (
            <li key={ch.name}>
              <FiCheck className="check-icon" />
              <div>
                <strong>{ch.name}</strong>
                <span>{ch.desc}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="pkg-features">
        <p className="pkg-section-label">공통 제공</p>
        <ul>
          {pkg.features.map((f) => (
            <li key={f}><FiCheck className="check-icon" />{f}</li>
          ))}
        </ul>
      </div>

      {pkg.notIncluded.length > 0 && (
        <div className="pkg-excluded">
          {pkg.notIncluded.map((item) => (
            <span key={item} className="excluded-item">— {item}</span>
          ))}
        </div>
      )}

      <Link
        to="/contact"
        className={`pkg-cta ${pkg.highlight ? 'pkg-cta-featured' : ''}`}
      >
        이 플랜으로 상담하기 <FiArrowRight />
      </Link>
    </div>
  );
}

function ChannelCard({ ch, index }) {
  const ref = useScrollAnimation();
  return (
    <div ref={ref} className={`channel-card reveal ${delayClass[index]}`}>
      <h3>{ch.name}</h3>
      <ul>
        {ch.items.map((item) => (
          <li key={item}><FiCheck />{item}</li>
        ))}
      </ul>
    </div>
  );
}

const channelDetails = [
  { name: '네이버 블로그', items: ['진료과 특화 키워드 분석', 'SEO 최적화 포스팅 작성', '의료정보·후기 콘텐츠 기획', '검색 순위 모니터링'] },
  { name: '네이버 플레이스', items: ['프로필 사진·정보 최적화', '진료시간·편의시설 관리', '방문자 리뷰 대응 전략', '플레이스 광고 연계'] },
  { name: '네이버 카페', items: ['지역 맘카페 타겟 게시', '건강정보 콘텐츠 배포', '지역 커뮤니티 신뢰 구축', '바이럴 확산 전략'] },
  { name: '인스타그램', items: ['피드·릴스 콘텐츠 제작', '해시태그 & 위치 태그 전략', '팔로워→환자 전환 캠페인', '메타 광고 집행 & 분석'] },
];

function Services() {
  const channelHeaderRef = useScrollAnimation();

  return (
    <div className="services-page">
      <div className="page-hero">
        <div className="container">
          <p className="section-label">서비스 & 패키지</p>
          <h1>병원에 딱 맞는<br /><span className="gradient-text">플랜을 선택하세요</span></h1>
          <p>채널 수와 운영 깊이에 따라 3가지 플랜으로 구성됩니다.<br />세부 내용은 상담 후 병원 상황에 맞게 조정합니다.</p>
        </div>
      </div>

      <section className="packages-section section">
        <div className="container">
          <div className="packages-grid">
            {packages.map((pkg, i) => (
              <PackageCard key={pkg.tier} pkg={pkg} index={i} />
            ))}
          </div>
          <p className="packages-note">
            * 모든 플랜은 최소 3개월 계약입니다. 병원 규모·진료과에 따라 커스텀 구성도 가능합니다.
          </p>
        </div>
      </section>

      <section className="channels-detail section" style={{ background: 'var(--light-gray)' }}>
        <div className="container">
          <div ref={channelHeaderRef} className="section-header reveal">
            <p className="section-label">채널별 상세</p>
            <h2 className="section-title">각 채널에서 <span className="highlight">무엇을 해드리나요</span></h2>
            <p className="section-subtitle">모든 콘텐츠는 의료광고 심의 기준을 준수하여 제작됩니다.</p>
          </div>
          <div className="channels-grid">
            {channelDetails.map((ch, i) => (
              <ChannelCard key={ch.name} ch={ch} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
