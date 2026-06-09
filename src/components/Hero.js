import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheckCircle, FiEdit3, FiMapPin, FiUsers, FiInstagram } from 'react-icons/fi';
import './Hero.css';

const tags = ['네이버 블로그', '네이버 플레이스', '인스타그램', '네이버 카페'];

const channels = [
  { icon: <FiEdit3 />, name: '네이버 블로그', desc: 'SEO 최적화 포스팅' },
  { icon: <FiMapPin />, name: '네이버 플레이스', desc: '지역 검색 상위 노출' },
  { icon: <FiUsers />, name: '네이버 카페', desc: '지역 커뮤니티 마케팅' },
  { icon: <FiInstagram />, name: '인스타그램', desc: '피드·릴스 콘텐츠' },
];

function Hero() {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setExpanded(true), 600);
    return () => clearTimeout(t);
  }, []);

  const cx = expanded ? 'expand-text expanded' : 'expand-text';

  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
      </div>

      <div className="container hero-content">
        <div className="hero-inner">

          {/* 왼쪽: 텍스트 */}
          <div className="hero-left">
            <div className="hero-eyebrow">
              <span className="hero-abbr">닥브매</span>
              <span className="hero-divider" />
              <span className="hero-en">Doctor's Brand Manager</span>
            </div>

            <h1 className="hero-title">
              <span className="hero-fullname">
                <span className="abbr-hl">닥</span><span className={cx} style={{ transitionDelay: '0s' }}>터스&nbsp;</span><span className="abbr-hl">브</span><span className={cx} style={{ transitionDelay: '0.14s' }}>랜드&nbsp;</span><span className="abbr-hl">매</span><span className={cx} style={{ transitionDelay: '0.28s' }}>니저</span>
              </span>
              <span className="hero-tagline">
                병원의 온라인 브랜드,<br />
                <span className="gradient-text">처음부터 끝까지 책임집니다</span>
              </span>
            </h1>

            <p className="hero-desc">
              안과 · 피부과 · 한의원 · 치과 · 성형외과<br />
              개원병의원 전문 온라인 마케팅 대행사
            </p>

            <div className="hero-tags">
              {tags.map((tag) => (
                <span key={tag} className="hero-tag">
                  <FiCheckCircle /> {tag}
                </span>
              ))}
            </div>

            <div className="hero-actions">
              <Link to="/contact" className="btn-primary">
                무료 상담 신청 <FiArrowRight />
              </Link>
              <Link to="/services" className="btn-outline">
                서비스 알아보기
              </Link>
            </div>
          </div>

          {/* 오른쪽: 채널 관리 카드 */}
          <div className="hero-right">
            <div className="hv-card">
              <div className="hv-card-header">
                <span className="hv-card-title">채널 통합 관리</span>
                <span className="hv-live-badge">● 운영중</span>
              </div>
              <div className="hv-channels">
                {channels.map((ch) => (
                  <div key={ch.name} className="hv-channel-item">
                    <span className="hv-icon">{ch.icon}</span>
                    <div className="hv-channel-info">
                      <strong>{ch.name}</strong>
                      <span>{ch.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="hv-card-footer">
                <span>매월 성과 리포트 제공</span>
                <FiArrowRight className="hv-arrow" />
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="hero-scroll-hint">
        <div className="scroll-dot" />
      </div>
    </section>
  );
}

export default Hero;
