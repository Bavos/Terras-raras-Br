import React from 'react';
import {Composition, registerRoot} from 'remotion';
import {TerrasRarasComposition} from './Composition';
import {VIDEO} from '../src/data/videoConstants';

export const RemotionRoot: React.FC = () => (
  <Composition
    id={VIDEO.id}
    component={TerrasRarasComposition}
    durationInFrames={VIDEO.durationInFrames}
    fps={VIDEO.fps}
    width={VIDEO.width}
    height={VIDEO.height}
  />
);

registerRoot(RemotionRoot);
