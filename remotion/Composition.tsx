import React from 'react';
import {AbsoluteFill, Sequence} from 'remotion';
import '../src/styles/global.css';
import {TransitionWipe} from '../src/components/TransitionWipe';
import {SCENES} from '../src/data/videoConstants';
import {Scene1Awakening} from '../src/scenes/Scene1Awakening';
import {Scene2HiddenGiant} from '../src/scenes/Scene2HiddenGiant';
import {Scene3Importance} from '../src/scenes/Scene3Importance';
import {Scene4Challenge} from '../src/scenes/Scene4Challenge';
import {Scene5Ending} from '../src/scenes/Scene5Ending';

export const TerrasRarasComposition: React.FC = () => (
  <AbsoluteFill>
    <Sequence from={SCENES.awakening.start} durationInFrames={SCENES.awakening.duration}>
      <Scene1Awakening />
    </Sequence>
    <Sequence from={SCENES.hiddenGiant.start} durationInFrames={SCENES.hiddenGiant.duration}>
      <Scene2HiddenGiant />
    </Sequence>
    <Sequence from={SCENES.importance.start} durationInFrames={SCENES.importance.duration}>
      <Scene3Importance />
    </Sequence>
    <Sequence from={SCENES.challenge.start} durationInFrames={SCENES.challenge.duration}>
      <Scene4Challenge />
    </Sequence>
    <Sequence from={SCENES.ending.start} durationInFrames={SCENES.ending.duration}>
      <Scene5Ending />
    </Sequence>
    <TransitionWipe at={SCENES.hiddenGiant.start} />
    <TransitionWipe at={SCENES.importance.start} />
    <TransitionWipe at={SCENES.challenge.start} />
    <TransitionWipe at={SCENES.ending.start} />
  </AbsoluteFill>
);
