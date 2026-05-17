import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {COLORS} from '../data/videoConstants';
import {scan} from '../animations/motion';

export const Background: React.FC = () => {
  const frame = useCurrentFrame();
  const x = scan(frame, 180, -280, 2200);
  return (
    <AbsoluteFill className="light-stage">
      <svg width="1920" height="1080" style={{position: 'absolute', inset: 0}}>
        <defs>
          <pattern id="grid" width="72" height="72" patternUnits="userSpaceOnUse">
            <path d="M72 0H0V72" fill="none" stroke="rgba(0,102,255,0.07)" strokeWidth="1" />
          </pattern>
          <filter id="softBlur"><feGaussianBlur stdDeviation="8" /></filter>
        </defs>
        <rect width="1920" height="1080" fill="url(#grid)" opacity="0.75" />
        <path d={`M${x} -60 L${x - 380} 1140`} stroke={COLORS.blue} strokeWidth="3" opacity="0.08" />
        <path d={`M${x + 90} -60 L${x - 290} 1140`} stroke={COLORS.green} strokeWidth="2" opacity="0.08" />
        {[...Array(34)].map((_, i) => {
          const px = (i * 163 + frame * (0.35 + (i % 3) * 0.18)) % 1980;
          const py = (i * 89 + Math.sin((frame + i * 18) / 28) * 24) % 1080;
          return <circle key={i} cx={px} cy={py} r={2 + (i % 4)} fill={i % 3 === 0 ? COLORS.blue : i % 3 === 1 ? COLORS.green : COLORS.yellow} opacity="0.16" />;
        })}
      </svg>
    </AbsoluteFill>
  );
};
