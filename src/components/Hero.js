import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheckCircle, FiUser, FiActivity } from 'react-icons/fi';
import './Hero.css';

const tags = ['네이버 블로그', '네이버 플레이스', '인스타그램', '네이버 카페'];

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

          {/* 오른쪽: 환자 ↔ 닥브매 ↔ 병원 비주얼 */}
          <div className="hero-right">
            <div className="hv-visual">

              {/* 연결선 */}
              <div className="hv-line hv-line-l" />
              <div className="hv-line hv-line-r" />

              {/* 이동 점 */}
              <div className="hv-dot hv-dot-l1" />
              <div className="hv-dot hv-dot-l2" />
              <div className="hv-dot hv-dot-r1" />
              <div className="hv-dot hv-dot-r2" />

              {/* 환자 노드 */}
              <div className="hv-node hv-node-patient">
                <div className="hv-node-circle">
                  <FiUser />
                </div>
                <span className="hv-node-name">환자</span>
                <span className="hv-node-desc">신규 유입</span>
              </div>

              {/* 닥브매 오브 */}
              <div className="hv-orb">
                <span className="hv-orb-abbr">닥브매</span>
                <span className="hv-orb-sub">온라인 마케팅</span>
              </div>

              {/* 병원 노드 */}
              <div className="hv-node hv-node-hospital">
                <div className="hv-node-circle hv-node-circle-hosp">
                  <FiActivity />
                </div>
                <span className="hv-node-name">병원</span>
                <span className="hv-node-desc">브랜드 성장</span>
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
