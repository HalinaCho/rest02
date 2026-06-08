const sharp = require('sharp');
const path = require('path');

const W = 1200;
const H = 630;

const svg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%"   stop-color="#060e1c"/>
      <stop offset="55%"  stop-color="#0a1628"/>
      <stop offset="100%" stop-color="#0c2040"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stop-color="#1a56db"/>
      <stop offset="100%" stop-color="#0891b2"/>
    </linearGradient>
    <linearGradient id="logoG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%"   stop-color="#1a56db"/>
      <stop offset="100%" stop-color="#0891b2"/>
    </linearGradient>
    <linearGradient id="textG" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stop-color="#60a5fa"/>
      <stop offset="100%" stop-color="#22d3ee"/>
    </linearGradient>
  </defs>

  <!-- 배경 -->
  <rect width="${W}" height="${H}" fill="url(#bg)"/>

  <!-- 격자 패턴 -->
  <g stroke="#ffffff" stroke-width="1" opacity="0.035">
    <line x1="0"   y1="126" x2="${W}" y2="126"/>
    <line x1="0"   y1="252" x2="${W}" y2="252"/>
    <line x1="0"   y1="378" x2="${W}" y2="378"/>
    <line x1="0"   y1="504" x2="${W}" y2="504"/>
    <line x1="240" y1="0"   x2="240" y2="${H}"/>
    <line x1="480" y1="0"   x2="480" y2="${H}"/>
    <line x1="720" y1="0"   x2="720" y2="${H}"/>
    <line x1="960" y1="0"   x2="960" y2="${H}"/>
  </g>

  <!-- 빛 번짐 -->
  <circle cx="1080" cy="560" r="320" fill="#0891b2" opacity="0.07"/>
  <circle cx="80"   cy="70"  r="180" fill="#1a56db" opacity="0.09"/>

  <!-- 하단 포인트 바 -->
  <rect x="0" y="606" width="${W}" height="24" fill="url(#accent)"/>

  <!-- 좌측 세로 강조선 -->
  <rect x="80" y="160" width="4" height="310" rx="2" fill="url(#accent)"/>

  <!-- 로고 마크 -->
  <rect x="104" y="172" width="80" height="80" rx="16" fill="url(#logoG)"/>
  <text x="144" y="238"
        font-family="Arial Black, Arial, sans-serif"
        font-size="54" font-weight="900"
        text-anchor="middle" fill="white">D</text>

  <!-- 회사명 -->
  <text x="204" y="220"
        font-family="Malgun Gothic, sans-serif"
        font-size="52" font-weight="700"
        fill="white">닥터스 브랜드 매니저</text>

  <!-- 닥브매 뱃지 -->
  <rect x="204" y="234" width="68" height="28" rx="6" fill="#0891b2"/>
  <text x="238" y="253"
        font-family="Malgun Gothic, sans-serif"
        font-size="14" font-weight="700"
        text-anchor="middle" fill="white">닥브매</text>
  <!-- 영문 -->
  <text x="284" y="253"
        font-family="Arial, sans-serif"
        font-size="14" fill="rgba(255,255,255,0.42)">Doctor&apos;s Brand Manager</text>

  <!-- 구분선 -->
  <rect x="104" y="298" width="680" height="1" fill="rgba(255,255,255,0.1)"/>

  <!-- 태그라인 -->
  <text x="104" y="354"
        font-family="Malgun Gothic, sans-serif"
        font-size="30" font-weight="400"
        fill="rgba(255,255,255,0.8)">개원병의원의 온라인 브랜드,</text>
  <text x="104" y="402"
        font-family="Malgun Gothic, sans-serif"
        font-size="30" font-weight="700"
        fill="url(#textG)">처음부터 끝까지 책임집니다</text>

  <!-- 서비스 태그 -->
  <rect x="104" y="432" width="160" height="36" rx="18" fill="rgba(8,145,178,0.18)" stroke="#0891b2" stroke-width="1"/>
  <text x="184" y="455" font-family="Malgun Gothic, sans-serif" font-size="14" font-weight="600" text-anchor="middle" fill="#22d3ee">네이버 블로그</text>

  <rect x="274" y="432" width="176" height="36" rx="18" fill="rgba(8,145,178,0.18)" stroke="#0891b2" stroke-width="1"/>
  <text x="362" y="455" font-family="Malgun Gothic, sans-serif" font-size="14" font-weight="600" text-anchor="middle" fill="#22d3ee">네이버 플레이스</text>

  <rect x="460" y="432" width="140" height="36" rx="18" fill="rgba(8,145,178,0.18)" stroke="#0891b2" stroke-width="1"/>
  <text x="530" y="455" font-family="Malgun Gothic, sans-serif" font-size="14" font-weight="600" text-anchor="middle" fill="#22d3ee">인스타그램</text>

  <rect x="610" y="432" width="140" height="36" rx="18" fill="rgba(8,145,178,0.18)" stroke="#0891b2" stroke-width="1"/>
  <text x="680" y="455" font-family="Malgun Gothic, sans-serif" font-size="14" font-weight="600" text-anchor="middle" fill="#22d3ee">네이버 카페</text>

  <!-- 우측 구분선 -->
  <rect x="870" y="152" width="1" height="420" fill="rgba(255,255,255,0.07)"/>

  <!-- 우측 통계 -->
  <text x="1040" y="258" font-family="Arial Black, Arial, sans-serif" font-size="58" font-weight="900" text-anchor="middle" fill="white">7+</text>
  <text x="1040" y="288" font-family="Malgun Gothic, sans-serif" font-size="15" text-anchor="middle" fill="rgba(255,255,255,0.42)">병의원 비즈니스 경험</text>

  <rect x="1000" y="308" width="80" height="1" fill="rgba(255,255,255,0.1)"/>

  <text x="1040" y="372" font-family="Arial Black, Arial, sans-serif" font-size="58" font-weight="900" text-anchor="middle" fill="white">4</text>
  <text x="1040" y="402" font-family="Malgun Gothic, sans-serif" font-size="15" text-anchor="middle" fill="rgba(255,255,255,0.42)">통합 마케팅 채널</text>

  <rect x="1000" y="422" width="80" height="1" fill="rgba(255,255,255,0.1)"/>

  <text x="1040" y="486" font-family="Arial Black, Arial, sans-serif" font-size="58" font-weight="900" text-anchor="middle" fill="white">5</text>
  <text x="1040" y="516" font-family="Malgun Gothic, sans-serif" font-size="15" text-anchor="middle" fill="rgba(255,255,255,0.42)">타겟 진료과</text>
</svg>`;

sharp(Buffer.from(svg))
  .png()
  .toFile(path.join(__dirname, '../public/og-image.png'))
  .then(info => console.log('✅  og-image.png 생성 완료', info))
  .catch(err => { console.error('❌  실패:', err.message); process.exit(1); });
