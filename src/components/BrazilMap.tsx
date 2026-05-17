import React from 'react';
import {useCurrentFrame} from 'remotion';
import {COLORS} from '../data/videoConstants';

const markers = [
  {id: 'GO', x: 332, y: 382, color: COLORS.yellow},
  {id: 'MG', x: 422, y: 480, color: COLORS.green},
  {id: 'AM', x: 210, y: 215, color: COLORS.blue},
];

export const BrazilMap: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = 1 + Math.sin(frame / 9) * 0.12;
  const radar = (frame * 3.2) % 720;
  return (
    <svg width="760" height="720" viewBox="0 0 720 680" style={{overflow: 'visible'}}>
      <defs>
        <filter id="mapGlow"><feGaussianBlur stdDeviation="8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <path d="M135 72 L246 55 L344 87 L417 73 L501 128 L552 225 L626 302 L579 386 L610 470 L526 523 L472 615 L376 612 L315 561 L238 545 L185 470 L128 439 L111 352 L74 292 L101 208 Z" fill="rgba(255,255,255,0.78)" stroke="rgba(0,102,255,0.35)" strokeWidth="4" filter="url(#mapGlow)" />
      <path d="M135 72 L246 55 L344 87 L417 73 L501 128 L552 225 L626 302 L579 386 L610 470 L526 523 L472 615 L376 612 L315 561 L238 545 L185 470 L128 439 L111 352 L74 292 L101 208 Z" fill="rgba(0,102,255,0.035)" />
      <circle cx="360" cy="350" r={radar} fill="none" stroke={COLORS.blue} strokeWidth="3" opacity={Math.max(0, 0.24 - radar / 3000)} />
      <polyline points="210,215 332,382 422,480" fill="none" stroke={COLORS.blue} strokeWidth="3" strokeDasharray="10 14" strokeDashoffset={-frame * 1.5} opacity="0.46" />
      {markers.map((m, index) => (
        <g key={m.id}>
          <circle cx={m.x} cy={m.y} r={38 * pulse + index * 3} fill={m.color} opacity="0.10" />
          <circle cx={m.x} cy={m.y} r="17" fill={m.color} opacity="0.92" />
          <text x={m.x + 28} y={m.y + 9} fontSize="30" fontWeight="900" fill="#10223A">{m.id}</text>
        </g>
      ))}
    </svg>
  );
};
