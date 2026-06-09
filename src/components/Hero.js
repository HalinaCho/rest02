import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheckCircle, FiTrendingUp, FiEdit3, FiShield, FiBarChart2 } from 'react-icons/fi';
import './Hero.css';

const tags = ['네이버 블로그', '네이버 플레이스', '인스타그램', '네이버 카페'];

const chips = [
  { icon: <FiTrendingUp />, label: '검색 상위 노출', cls: 'hv-chip-1' },
  { icon: <FiEdit3 />,      label: '콘텐츠 전략',   cls: 'hv-chip-2' },
  { icon: <FiBarChart2 />,  label: '성과 분석',      cls: 'hv-chip-3' },
  { icon: <FiShield />,     label: '법규 준수',      cls: 'hv-chip-4' },
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

          {/* 오른쪽: 디자인 비주얼 */}
          <div className="hero-right">
            <div className="hv-visual">
              {/* 장식 링 */}
              <div className="hv-ring hv-ring-1" />
              <div className="hv-ring hv-ring-2" />

              {/* 중앙 오브 */}
              <div className="hv-orb">
                <span className="hv-orb-abbr">닥브매</span>
                <span className="hv-orb-sub">Brand Manager</span>
              </div>

              {/* 플로팅 칩 */}
              {chips.map((c) => (
                <div key={c.label} className={`hv-chip ${c.cls}`}>
                  {c.icon}
                  <span>{c.label}</span>
                </div>
              ))}
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
