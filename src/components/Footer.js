import { Link } from 'react-router-dom';
import { FiInstagram, FiBriefcase, FiMail, FiPhone } from 'react-icons/fi';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-mark">D</span>
              <div className="footer-logo-text">
                <span className="footer-logo-abbr">닥브매</span>
                <span className="footer-logo-full">닥터스 브랜드 매니저</span>
              </div>
            </div>
            <p className="footer-tagline">
              개원병의원의 브랜드를 만들어 드립니다.<br />
              <em>Doctor's Brand Manager</em>
            </p>
            <div className="footer-social">
              <a href="#instagram" aria-label="인스타그램"><FiInstagram /></a>
              <a href="#naver" aria-label="네이버 블로그"><FiBriefcase /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>서비스</h4>
            <ul>
              <li><Link to="/services#blog">네이버 블로그 관리</Link></li>
              <li><Link to="/services#place">네이버 플레이스 최적화</Link></li>
              <li><Link to="/services#cafe">네이버 카페 운영</Link></li>
              <li><Link to="/services#instagram">인스타그램 마케팅</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>회사</h4>
            <ul>
              <li><Link to="/about">회사소개</Link></li>
              <li><Link to="/portfolio">포트폴리오</Link></li>
              <li><Link to="/blog">마케팅 블로그</Link></li>
              <li><Link to="/contact">문의하기</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>연락처</h4>
            <ul>
              <li><FiPhone /> <span>문의는 이메일로 받습니다</span></li>
              <li><FiMail /> <span>contact@doctorsbm.kr</span></li>
            </ul>
            <p className="footer-hours">평일 09:00 – 18:00</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 닥터스 브랜드 매니저. All rights reserved.</p>
          <p>사업자등록번호: 000-00-00000 | 대표: 조하령</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
