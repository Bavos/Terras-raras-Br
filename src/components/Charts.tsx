import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {COLORS} from '../data/videoConstants';

export const GrowingBars: React.FC<{values?: number[]; delay?: number}> = ({values = [54, 72, 46, 88, 64], delay = 0}) => {
  const frame = useCurrentFrame();
  return (
    <svg width="360" height="220" viewBox="0 0 360 220">
      {values.map((v, i) => {
        const h = interpolate(frame, [delay + i * 8, delay + 42 + i * 8], [0, v * 1.8], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
        return <rect key={i} x={36 + i * 62} y={190 - h} width="38" height={h} rx="11" fill={i % 3 === 0 ? COLORS.blue : i % 3 === 1 ? COLORS.green : COLORS.yellow} opacity="0.88" />;
      })}
      <path d="M20 190 H335" stroke="rgba(16,34,58,.24)" strokeWidth="3" />
    </svg>
  );
};
