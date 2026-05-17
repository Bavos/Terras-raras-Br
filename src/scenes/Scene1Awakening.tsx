import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {Globe} from '../components/Globe';
import {SceneFrame} from '../components/SceneFrame';
import {COLORS} from '../data/videoConstants';
import {copy} from '../data/script';
import {fadeIn, slideY, springIn} from '../animations/motion';

export const Scene1Awakening: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const titleSpring = springIn(frame, fps, 8);
  const camera = interpolate(frame, [0, 240], [0.92, 1.08], {extrapolateRight: 'clamp'});
  return (
    <SceneFrame>
      <AbsoluteFill style={{transform: `scale(${camera})`}}>
        <div style={{position: 'absolute', right: 120, top: 140, opacity: 0.95}}><Globe size={680} /></div>
        <div style={{position: 'absolute', left: 105, top: 138, width: 1040}}>
          <div style={{fontSize: 38, fontWeight: 900, color: COLORS.blue, letterSpacing: 7, opacity: fadeIn(frame, 0)}}>ESPECIAL MINERAIS CRÍTICOS</div>
          <h1 className="headline" style={{fontSize: 142, margin: '30px 0 28px', transform: `translateY(${(1 - titleSpring) * 70}px) scale(${0.94 + titleSpring * 0.06})`, opacity: titleSpring}}>{copy.scene1.title}</h1>
          <div className="glass-panel body-copy" style={{fontSize: 42, padding: '32px 38px', borderRadius: 34, width: 920, opacity: fadeIn(frame, 34), transform: `translateY(${slideY(frame, 34, 45)}px)`}}>{copy.scene1.body}</div>
        </div>
        {[...Array(12)].map((_, i) => <div key={i} style={{position: 'absolute', left: 1220 + Math.cos((frame + i * 24) / 26) * (170 + i * 7), top: 470 + Math.sin((frame + i * 24) / 26) * (92 + i * 4), width: 10 + i % 4, height: 10 + i % 4, borderRadius: 99, background: i % 2 ? COLORS.green : COLORS.blue, opacity: 0.28}} />)}
      </AbsoluteFill>
    </SceneFrame>
  );
};
