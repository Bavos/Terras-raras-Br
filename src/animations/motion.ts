import {interpolate, spring} from 'remotion';

export const fadeIn = (frame: number, start: number, duration = 24) =>
  interpolate(frame, [start, start + duration], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

export const slideY = (frame: number, start: number, from: number, to = 0, duration = 32) =>
  interpolate(frame, [start, start + duration], [from, to], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

export const zoom = (frame: number, start: number, from = 0.92, to = 1, duration = 42) =>
  interpolate(frame, [start, start + duration], [from, to], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

export const springIn = (frame: number, fps: number, delay = 0) =>
  spring({frame: frame - delay, fps, config: {damping: 16, stiffness: 120, mass: 0.8}});

export const scan = (frame: number, length: number, min: number, max: number) =>
  interpolate(frame % length, [0, length], [min, max], {extrapolateRight: 'clamp'});
