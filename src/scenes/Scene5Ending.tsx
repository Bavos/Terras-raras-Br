import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {Globe} from '../components/Globe';
import {SceneFrame} from '../components/SceneFrame';
import {COLORS} from '../data/videoConstants';
import {copy} from '../data/script';

export const Scene5Ending: React.FC = () => {
  const frame = useCurrentFrame();
  const zoom = interpolate(frame, [0, 240], [1, 1.11]);
  const pulse = 1 + Math.sin(frame / 10) * 0.025;
  return (
    <SceneFrame>
      <AbsoluteFill style={{transform: `scale(${zoom})`}}>
        <div style={{position: 'absolute', left: 650, top: 90, opacity: 0.92}}><Globe size={620} intensity={1.2} /></div>
        <div style={{position: 'absolute', left: 90, top: 158, width: 1110}}>
          <h1 className="headline" style={{fontSize: 143, margin: 0, transform: `scale(${pulse})`, color: COLORS.ink}}>{copy.scene5.title}</h1>
          <div className="glass-panel body-copy" style={{fontSize: 43, borderRadius: 34, padding: 36, marginTop: 34, width: 980}}>{copy.scene5.body}</div>
          <div style={{display: 'inline-block', marginTop: 46, padding: '26px 36px', borderRadius: 999, background: COLORS.blue, color: COLORS.white, fontSize: 36, fontWeight: 900, boxShadow: '0 24px 70px rgba(0,102,255,.25)'}}>{copy.scene5.cta}</div>
        </div>
        <svg width="1920" height="1080" style={{position: 'absolute', inset: 0}}>
          {[...Array(32)].map((_, i) => <circle key={i} cx={160 + i * 58} cy={980 - ((frame * (1.8 + (i % 4) * 0.5) + i * 37) % 520)} r={4 + i % 5} fill={i % 3 === 0 ? COLORS.green : i % 3 === 1 ? COLORS.blue : COLORS.yellow} opacity="0.26" />)}
          <path d="M310 820 C760 560 1120 740 1660 390" stroke={COLORS.green} strokeWidth="5" opacity=".22" strokeDasharray="18 22" strokeDashoffset={-frame * 4} fill="none" />
        </svg>
      </AbsoluteFill>
    </SceneFrame>
  );
};
