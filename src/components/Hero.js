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

          {/* 오른쪽: 수직 연결 비주얼 */}
          <div className="hero-right">
            <div className="hv-visual">

              {/* 환자 */}
              <div className="hv-row">
                <div className="hv-cell">
                  <div className="hv-node-circle">
                    <FiUser />
                  </div>
                </div>
                <div className="hv-row-text">
                  <strong>환자</strong>
                  <span>온라인으로 병원을 검색</span>
                </div>
              </div>

              {/* 상단 연결선 */}
              <div className="hv-connector">
                <div className="hv-vdot" style={{ animationDelay: '0s' }} />
                <div className="hv-vdot" style={{ animationDelay: '1s' }} />
              </div>

              {/* 닥브매 오브 */}
              <div className="hv-row">
                <div className="hv-cell">
                  <div className="hv-orb">
                    <span className="hv-orb-abbr">닥브매</span>
                    <span className="hv-orb-sub">온라인 마케팅</span>
                  </div>
                </div>
                <div className="hv-row-text">
                  <strong>닥브매 채널 운영</strong>
                  <span>블로그 · 플레이스<br />카페 · 인스타그램</span>
                </div>
              </div>

              {/* 하단 연결선 */}
              <div className="hv-connector">
                <div className="hv-vdot" style={{ animationDelay: '0.5s' }} />
                <div className="hv-vdot" style={{ animationDelay: '1.5s' }} />
              </div>

              {/* 병원 */}
              <div className="hv-row">
                <div className="hv-cell">
                  <div className="hv-node-circle hv-node-circle-hosp">
                    <FiActivity />
                  </div>
                </div>
                <div className="hv-row-text">
                  <strong>병원</strong>
                  <span>신뢰 브랜드 & 환자 증가</span>
                </div>
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
