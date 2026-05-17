export const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export const loop = (frame: number, length: number) => ((frame % length) + length) % length;

export const polarPoint = (cx: number, cy: number, radius: number, angleDeg: number) => {
  const angle = (angleDeg * Math.PI) / 180;
  return {x: cx + Math.cos(angle) * radius, y: cy + Math.sin(angle) * radius};
};
