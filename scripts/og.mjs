// Genera public/og.png (preview del link al compartirlo). Correr: node scripts/og.mjs
import sharp from 'sharp';

const flor = (x, y, s, giro) => `
  <g transform="translate(${x} ${y}) rotate(${giro}) scale(${s})">
    <path d="M60 200 C 58 150, 62 120, 60 92" fill="none" stroke="#4e9a4e" stroke-width="7" stroke-linecap="round"/>
    <path d="M60 155 C 34 150, 24 132, 26 122 C 44 120, 57 134, 60 155Z" fill="#5cb85c"/>
    <path d="M60 135 C 86 130, 96 112, 94 102 C 76 100, 63 114, 60 135Z" fill="#4e9a4e"/>
    ${[0, 45, 90, 135, 180, 225, 270, 315]
      .map((g) => `<ellipse cx="60" cy="38" rx="11" ry="25" fill="#ffd23f" transform="rotate(${g} 60 68)"/>`)
      .join('')}
    <circle cx="60" cy="68" r="15" fill="#8a5a2b"/>
  </g>`;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="cielo" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#8ecfff"/>
      <stop offset="40%" stop-color="#cdeeff"/>
      <stop offset="78%" stop-color="#ffeab3"/>
      <stop offset="100%" stop-color="#ffd98a"/>
    </linearGradient>
    <radialGradient id="sol">
      <stop offset="35%" stop-color="#fff3b0"/>
      <stop offset="100%" stop-color="#ffd23f"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#cielo)"/>
  <circle cx="1040" cy="120" r="88" fill="url(#sol)" opacity=".95"/>
  <ellipse cx="200" cy="105" rx="95" ry="32" fill="#fff" opacity=".8"/>
  <ellipse cx="290" cy="120" rx="65" ry="26" fill="#fff" opacity=".8"/>
  <ellipse cx="600" cy="835" rx="900" ry="235" fill="#7cc47c"/>
  <ellipse cx="300" cy="890" rx="760" ry="235" fill="#5aa85a"/>

  ${flor(265, 185, 0.95, -14)}
  ${flor(395, 150, 1.15, -7)}
  ${flor(535, 128, 1.3, 0)}
  ${flor(700, 155, 1.12, 8)}
  ${flor(830, 190, 0.9, 15)}

  <g text-anchor="middle" font-family="Georgia, 'Times New Roman', serif">
    <text x="600" y="510" font-size="88" font-weight="700" fill="#3d2b1f">Te enviaron flores</text>
    <text x="600" y="575" font-size="38" font-style="italic" fill="#a25f14">Feliz día de la primavera</text>
  </g>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile('public/og.png');
console.log('public/og.png ✓');
