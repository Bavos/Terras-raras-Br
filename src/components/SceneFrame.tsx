import React from 'react';
import {AbsoluteFill} from 'remotion';
import {Background} from './Background';
import {SourceLabel} from './SourceLabel';

export const SceneFrame: React.FC<{children: React.ReactNode}> = ({children}) => (
  <AbsoluteFill>
    <Background />
    {children}
    <SourceLabel />
  </AbsoluteFill>
);
