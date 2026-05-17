import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {SceneFrame} from '../components/SceneFrame';
import {CarIcon, PhoneIcon, TurbineIcon} from '../components/Icons';
import {COLORS} from '../data/videoConstants';
import {copy} from '../data/script';

const icons = [<CarIcon key="car" />, <TurbineIcon key="turbine" />, <PhoneIcon key="phone" />];

export const Scene3Importance: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <SceneFrame>
      <div style={{position: 'absolute', left: 90, top: 80, width: 1680}}>
        <div className="body-copy" style={{fontSize: 55, width: 1420}}>{copy.scene3.body}</div>
      </div>
      <div style={{position: 'absolute', left: 100, top: 395, display: 'flex', gap: 44}}>
        {copy.scene3.cards.map((card, i) => {
          const p = interpolate(frame, [20 + i * 15, 76 + i * 15], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
          return (
            <div key={card.symbol} className="glass-panel" style={{width: 540, height: 430, borderRadius: 42, padding: 42, transform: `translateY(${(1 - p) * 80}px) rotate(${Math.sin(frame / 42 + i) * 0.8}deg)`, opacity: p}}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div style={{fontSize: 92, fontWeight: 900, color: i === 0 ? COLORS.blue : i === 1 ? COLORS.green : COLORS.yellow}}>[ {card.symbol} ]</div>
                <div style={{transform: `rotate(${Math.sin(frame / 20 + i) * 5}deg)`}}>{icons[i]}</div>
              </div>
              <div style={{fontSize: 45, fontWeight: 900, marginTop: 34}}>{card.label}</div>
              <svg width="450" height="86" style={{marginTop: 30}}><path d="M12 52 C130 8 260 92 438 28" fill="none" stroke={i === 0 ? COLORS.blue : i === 1 ? COLORS.green : COLORS.yellow} strokeWidth="8" strokeLinecap="round" strokeDasharray="18 18" strokeDashoffset={-frame * 2}/></svg>
            </div>
          );
        })}
      </div>
      <svg width="1920" height="1080" style={{position: 'absolute', inset: 0, pointerEvents: 'none'}}>
        <path d="M370 620 C720 530 1030 700 1530 575" stroke={COLORS.blue} strokeWidth="4" opacity="0.20" strokeDasharray="20 22" strokeDashoffset={-frame * 3} fill="none" />
      </svg>
    </SceneFrame>
  );
};
