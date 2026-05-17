import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {COLORS} from '../data/videoConstants';

export const TransitionWipe: React.FC<{at: number}> = ({at}) => {
  const frame = useCurrentFrame();
  const local = frame - at;
  const opacity = interpolate(local, [-16, 0, 24], [0, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const x = interpolate(local, [-16, 24], [-2200, 2200], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return (
    <AbsoluteFill style={{opacity, pointerEvents: 'none', zIndex: 70}}>
      <svg width="1920" height="1080">
        <rect width="1920" height="1080" fill="rgba(255,255,255,.55)" />
        <path d={`M${x} -80 L${x - 360} 1160 L${x + 60} 1160 L${x + 420} -80Z`} fill={COLORS.white} opacity=".88" />
        <path d={`M${x - 120} -80 L${x - 420} 1160`} stroke={COLORS.blue} strokeWidth="9" opacity=".32" />
        <path d={`M${x + 70} -80 L${x - 230} 1160`} stroke={COLORS.green} strokeWidth="7" opacity=".26" />
        <path d={`M${x + 260} -80 L${x - 40} 1160`} stroke={COLORS.yellow} strokeWidth="6" opacity=".34" />
      </svg>
    </AbsoluteFill>
  );
};
