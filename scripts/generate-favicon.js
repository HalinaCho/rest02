const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="256" height="256">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1a56db;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0891b2;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="22" ry="22" fill="url(#grad)"/>
  <text
    x="52" y="73"
    font-family="Arial Black, Arial, sans-serif"
    font-size="62" font-weight="900"
    text-anchor="middle"
    fill="white"
    letter-spacing="-2"
  >D</text>
</svg>`;

// ICO 파일은 PNG 데이터를 감싼 포맷 — 직접 작성
async function buildIco(pngBuffer) {
  const w = 32, h = 32;
  // ICO header (6 bytes) + directory entry (16 bytes) + PNG data
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);  // reserved
  header.writeUInt16LE(1, 2);  // type: icon
  header.writeUInt16LE(1, 4);  // count: 1 image

  const entry = Buffer.alloc(16);
  entry.writeUInt8(w, 0);
  entry.writeUInt8(h, 1);
  entry.writeUInt8(0, 2);  // color palette
  entry.writeUInt8(0, 3);  // reserved
  entry.writeUInt16LE(1, 4);  // color planes
  entry.writeUInt16LE(32, 6); // bits per pixel
  entry.writeUInt32LE(pngBuffer.length, 8);
  entry.writeUInt32LE(6 + 16, 12); // offset to image data

  return Buffer.concat([header, entry, pngBuffer]);
}

async function run() {
  const sizes = [
    { size: 16,  out: null },
    { size: 32,  out: null },
    { size: 48,  out: null },
  ];

  for (const s of sizes) {
    s.out = await sharp(Buffer.from(svg.replace('width="256" height="256"', `width="${s.size}" height="${s.size}"`)))
      .resize(s.size, s.size)
      .png()
      .toBuffer();
  }

  // favicon.ico — 32x32 PNG 내장 ICO
  const ico = await buildIco(sizes[1].out);
  const icoPath = path.join(__dirname, '../public/favicon.ico');
  fs.writeFileSync(icoPath, ico);
  console.log('✅  favicon.ico 생성 완료 (32x32)');

  // favicon-192.png — PWA용
  await sharp(Buffer.from(svg.replace('width="256" height="256"', 'width="192" height="192"')))
    .resize(192, 192)
    .png()
    .toFile(path.join(__dirname, '../public/logo192.png'));
  console.log('✅  logo192.png 생성 완료');

  // favicon-512.png — PWA 스플래시
  await sharp(Buffer.from(svg.replace('width="256" height="256"', 'width="512" height="512"')))
    .resize(512, 512)
    .png()
    .toFile(path.join(__dirname, '../public/logo512.png'));
  console.log('✅  logo512.png 생성 완료');
}

run().catch(err => { console.error('❌', err.message); process.exit(1); });
