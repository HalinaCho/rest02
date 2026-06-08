import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import './CtaBanner.css';

function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="container cta-inner">
        <div className="cta-text">
          <h2>닥브매와 함께 병원 브랜드를 만들어보세요</h2>
          <p>안과·피부과·한의원·치과·성형외과 — 모든 개원병의원 환영합니다.</p>
        </div>
        <Link to="/contact" className="btn-cta">
          무료 상담 신청 <FiArrowRight />
        </Link>
      </div>
    </section>
  );
}

export default CtaBanner;
