import { useState } from 'react';
import { FiMail, FiSend } from 'react-icons/fi';
import './Contact.css';

function Contact() {
  const [form, setForm] = useState({ name: '', hospital: '', phone: '', service: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="contact-page">
      <div className="page-hero">
        <div className="container">
          <p className="section-label">문의하기</p>
          <h1>무료 상담 신청</h1>
          <p>병원에 맞는 마케팅 전략을 무료로 제안드립니다.</p>
        </div>
      </div>
      <div className="container contact-content section">
        <div className="contact-info">
          <h2>연락처</h2>
          <div className="contact-item">
            <FiMail />
            <div>
              <strong>이메일</strong>
              <p>contact@medimarketing.kr</p>
            </div>
          </div>
          <div className="contact-note">
            <p>📋 상담 신청 후 <strong>1 영업일 내</strong> 회신드립니다.</p>
            <p>📅 운영시간: 평일 09:00 – 18:00</p>
          </div>
        </div>
        <div className="contact-form-wrap">
          {sent ? (
            <div className="form-success">
              <div className="success-icon">✓</div>
              <h3>상담 신청이 완료되었습니다!</h3>
              <p>1 영업일 내에 연락드리겠습니다.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>담당자 성함 *</label>
                  <input name="name" value={form.name} onChange={handleChange} required placeholder="홍길동" />
                </div>
                <div className="form-group">
                  <label>병원명 *</label>
                  <input name="hospital" value={form.hospital} onChange={handleChange} required placeholder="○○안과의원" />
                </div>
              </div>
              <div className="form-group">
                <label>연락처 *</label>
                <input name="phone" value={form.phone} onChange={handleChange} required placeholder="010-0000-0000" />
              </div>
              <div className="form-group">
                <label>관심 서비스</label>
                <select name="service" value={form.service} onChange={handleChange}>
                  <option value="">선택해주세요</option>
                  <option>네이버 블로그 관리</option>
                  <option>네이버 플레이스 최적화</option>
                  <option>네이버 카페 운영</option>
                  <option>인스타그램 마케팅</option>
                  <option>통합 패키지</option>
                </select>
              </div>
              <div className="form-group">
                <label>문의 내용</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="마케팅 관련 고민이나 문의사항을 자유롭게 적어주세요." />
              </div>
              <button type="submit" className="btn-submit">
                <FiSend /> 상담 신청하기
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
