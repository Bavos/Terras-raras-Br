import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {GrowingBars} from '../components/Charts';
import {DocumentIcon} from '../components/Icons';
import {SceneFrame} from '../components/SceneFrame';
import {COLORS} from '../data/videoConstants';
import {copy} from '../data/script';
import {fadeIn} from '../animations/motion';

export const Scene4Challenge: React.FC = () => {
  const frame = useCurrentFrame();
  const glitch = Math.sin(frame * 1.7) * (frame < 52 ? 8 : 1.2);
  return (
    <SceneFrame>
      <AbsoluteFill>
        <div style={{position: 'absolute', left: 92, top: 92, width: 1100}}>
          <h1 className="headline" style={{fontSize: 124, margin: 0, color: COLORS.ink, transform: `translateX(${glitch}px)`, textShadow: `${-glitch}px 0 rgba(0,102,255,.18), ${glitch / 2}px 0 rgba(0,200,83,.18)`}}>{copy.scene4.title}</h1>
          <div className="body-copy" style={{fontSize: 43, marginTop: 34, opacity: fadeIn(frame, 20)}}>{copy.scene4.body}</div>
        </div>
        <div style={{position: 'absolute', left: 120, top: 580, display: 'flex', gap: 30}}>
          {copy.scene4.keywords.map((k, i) => <div key={k} className="glass-panel" style={{borderRadius: 30, padding: '26px 36px', fontSize: 40, fontWeight: 900, color: i ? COLORS.green : COLORS.blue, transform: `scale(${1 + Math.sin(frame / 12 + i) * 0.025})`}}>{k}</div>)}
        </div>
        <div style={{position: 'absolute', right: 170, top: 165, transform: `translateX(${Math.sin(frame / 28) * 14}px)`}}><DocumentIcon /></div>
        <div className="glass-panel" style={{position: 'absolute', right: 112, top: 430, width: 610, height: 420, borderRadius: 42, padding: 38}}>
          <div style={{fontSize: 31, fontWeight: 900, color: COLORS.muted}}>CAPITAL • PESQUISA • LICENCIAMENTO</div>
          <GrowingBars values={[34, 58, 76, 92, 84]} delay={30} />
          <svg width="520" height="82"><path d="M14 66 L115 42 L215 50 L318 20 L494 34" fill="none" stroke={COLORS.green} strokeWidth="7" strokeLinecap="round"/><circle cx="318" cy="20" r="13" fill={COLORS.yellow}/></svg>
        </div>
        {[...Array(5)].map((_, i) => <div key={i} style={{position: 'absolute', right: 520 + i * 70, top: 260 + Math.sin(frame / 18 + i) * 20, width: 72, height: 72, borderRadius: 99, border: `2px solid ${i % 2 ? COLORS.green : COLORS.blue}`, opacity: 0.18, transform: `rotate(${frame + i * 30}deg)`}} />)}
      </AbsoluteFill>
    </SceneFrame>
  );
};
