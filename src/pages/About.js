import './About.css';

function About() {
  return (
    <section className="about-page">
      <div className="page-hero">
        <div className="container">
          <p className="section-label">회사소개</p>
          <h1>
            병원의 브랜드를 만드는<br />
            <span className="gradient-text">닥터스 브랜드 매니저</span>
          </h1>
          <p>2026년 6월 1일 설립 · 개원병의원 전문 온라인 마케팅 대행사</p>
        </div>
      </div>

      <div className="container about-content section">
        <div className="about-story">
          <h2 className="section-title">우리의 이야기</h2>
          <p>
            <strong className="brand-highlight">닥터스 브랜드 매니저(닥브매)</strong>는 2026년 6월,
            개원병의원이 진료에만 집중할 수 있도록 온라인 브랜딩과 마케팅을 전담해 드리기 위해 설립되었습니다.
          </p>
          <p>
            안과·피부과·한의원·치과·성형외과 등 지역에서 개원하는 의원들은 진료에는 전문가이지만,
            온라인 마케팅에는 생소한 경우가 많습니다. 저희는 그 간극을 채웁니다.
          </p>
          <p>
            단순한 포스팅 대행이 아닌, 병원의 <em>브랜드 아이덴티티</em>를 온라인에서 일관되게
            구축합니다. 네이버 블로그·플레이스·카페·인스타그램을 통합 운영하여
            신규 환자의 유입부터 재방문까지 이어지는 디지털 마케팅 생태계를 만들어 드립니다.
          </p>

          <div className="about-ceo">
            <div className="ceo-placeholder">
              <span>프로필 사진</span>
            </div>
            <div className="ceo-info">
              <p className="ceo-label">대표</p>
              <h3 className="ceo-name">조하령</h3>
              <p className="ceo-desc">병의원 비즈니스 7년 이상의 경험을 갖춘 마케팅 PM 출신 전문가. 개원 초기부터 브랜드 전략까지, 의원의 성장 단계에 맞는 온라인 마케팅을 설계합니다.</p>
            </div>
          </div>
        </div>

        <div className="about-values">
          <div className="value-item">
            <span className="value-num">01</span>
            <h3>전문성</h3>
            <p>의료 분야 특성을 깊이 이해한 콘텐츠, 의료광고 법규를 철저히 준수하는 마케팅</p>
          </div>
          <div className="value-item">
            <span className="value-num">02</span>
            <h3>브랜딩</h3>
            <p>단순 홍보가 아닌 병원만의 정체성과 신뢰를 온라인에 쌓아가는 브랜드 전략</p>
          </div>
          <div className="value-item">
            <span className="value-num">03</span>
            <h3>투명성</h3>
            <p>채널별 유입·전환 데이터를 매월 리포트로 공유, 숫자로 증명하는 마케팅</p>
          </div>
          <div className="value-item">
            <span className="value-num">04</span>
            <h3>신뢰</h3>
            <p>단기 성과보다 장기 파트너십. 병원이 성장할수록 함께 성장하는 구조</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
