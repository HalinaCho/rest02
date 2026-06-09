import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import './Hero.css';

const tags = ['네이버 블로그', '네이버 플레이스', '인스타그램', '네이버 카페'];

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
      </div>
      <div className="container hero-content">

        <div className="hero-eyebrow">
          <span className="hero-abbr">닥브매</span>
          <span className="hero-divider" />
          <span className="hero-en">Doctor's Brand Manager</span>
        </div>

        <h1 className="hero-title">
          <span className="hero-fullname">
            <span className="abbr-hl">닥</span>터스{' '}
            <span className="abbr-hl">브</span>랜드{' '}
            <span className="abbr-hl">매</span>니저
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
      <div className="hero-scroll-hint">
        <div className="scroll-dot" />
      </div>
    </section>
  );
}

export default Hero;
