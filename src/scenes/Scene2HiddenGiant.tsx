import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {BrazilMap} from '../components/BrazilMap';
import {GrowingBars} from '../components/Charts';
import {SceneFrame} from '../components/SceneFrame';
import {COLORS} from '../data/videoConstants';
import {copy} from '../data/script';
import {fadeIn, slideY} from '../animations/motion';

export const Scene2HiddenGiant: React.FC = () => {
  const frame = useCurrentFrame();
  const count = interpolate(frame, [25, 120], [0, 11.4], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}).toFixed(1).replace('.', ',');
  const zoom = interpolate(frame, [0, 300], [0.95, 1.04]);
  return (
    <SceneFrame>
      <AbsoluteFill style={{transform: `scale(${zoom})`}}>
        <div style={{position: 'absolute', left: 78, top: 62, transform: `translateY(${slideY(frame, 0, 40)}px)`, opacity: fadeIn(frame, 0)}}>
          <h1 className="headline" style={{fontSize: 112, margin: 0}}>{copy.scene2.title}</h1>
          <div style={{fontSize: 74, fontWeight: 900, color: COLORS.green, marginTop: 24}}>{count} Milhões de Toneladas</div>
        </div>
        <div style={{position: 'absolute', left: 110, top: 288}}><BrazilMap /></div>
        <div className="glass-panel" style={{position: 'absolute', right: 110, top: 315, width: 650, borderRadius: 38, padding: 42}}>
          <div className="body-copy" style={{fontSize: 41}}>{copy.scene2.body}</div>
          <GrowingBars delay={60} />
          <div style={{fontSize: 28, fontWeight: 900, color: COLORS.blue}}>GO • MG • AM em destaque</div>
        </div>
      </AbsoluteFill>
    </SceneFrame>
  );
};
