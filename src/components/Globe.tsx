import React from 'react';
import {useCurrentFrame} from 'remotion';
import {COLORS} from '../data/videoConstants';

export const Globe: React.FC<{size?: number; intensity?: number}> = ({size = 560, intensity = 1}) => {
  const frame = useCurrentFrame();
  const spin = frame * 1.9;
  return (
    <svg width={size} height={size} viewBox="0 0 600 600" style={{overflow: 'visible'}}>
      <defs>
        <radialGradient id="globeGlow" cx="45%" cy="35%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#DDEBFF" />
          <stop offset="100%" stopColor="#BFD8FF" />
        </radialGradient>
        <filter id="glow"><feGaussianBlur stdDeviation="10" result="b" /><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <circle cx="300" cy="300" r="245" fill="url(#globeGlow)" stroke={COLORS.blue} strokeWidth="3" opacity={0.94} />
      <g transform={`rotate(${spin} 300 300)`} opacity={0.58 * intensity}>
        <path d="M188 170 C245 120 340 145 372 205 C415 285 354 330 388 398 C310 430 216 412 169 344 C116 268 135 210 188 170Z" fill={COLORS.green} opacity="0.42" />
        <path d="M390 138 C458 155 500 222 480 283 C441 280 400 253 397 207 C394 178 377 164 390 138Z" fill={COLORS.blue} opacity="0.22" />
        <path d="M230 418 C284 380 351 394 410 440 C360 490 274 500 230 418Z" fill={COLORS.yellow} opacity="0.34" />
      </g>
      {[0, 1, 2, 3].map((i) => <ellipse key={i} cx="300" cy="300" rx={244 - i * 43} ry="245" fill="none" stroke={COLORS.blue} strokeWidth="1.4" opacity="0.16" />)}
      {[0, 1, 2].map((i) => <ellipse key={i} cx="300" cy="300" rx="245" ry={82 + i * 55} fill="none" stroke={COLORS.green} strokeWidth="1.5" opacity="0.18" />)}
      <g transform={`rotate(${-frame * 0.85} 300 300)`} filter="url(#glow)">
        <ellipse cx="300" cy="300" rx="318" ry="112" fill="none" stroke={COLORS.blue} strokeWidth="4" opacity="0.35" />
        <ellipse cx="300" cy="300" rx="358" ry="150" fill="none" stroke={COLORS.green} strokeWidth="3" opacity="0.22" />
        <circle cx="618" cy="300" r="8" fill={COLORS.yellow} />
        <circle cx="-58" cy="300" r="6" fill={COLORS.blue} />
      </g>
    </svg>
  );
};
