export const VIDEO = {
  id: 'TerrasRarasBrasil',
  fps: 30,
  width: 1920,
  height: 1080,
  durationInFrames: 1380,
  output: 'downloads/final/terras_raras_brasil_2026_v1.mp4',
} as const;

export const COLORS = {
  blue: '#0066FF',
  green: '#00C853',
  yellow: '#FFD600',
  white: '#FFFFFF',
  ink: '#10223A',
  muted: '#667085',
  softGray: '#F3F7FB',
  panel: 'rgba(255,255,255,0.72)',
} as const;

export const SOURCES_LABEL = 'Fontes: ANM, Serviço Geológico Brasileiro, ABPM';

export const SCENES = {
  awakening: {start: 0, duration: 240},
  hiddenGiant: {start: 240, duration: 300},
  importance: {start: 540, duration: 300},
  challenge: {start: 840, duration: 300},
  ending: {start: 1140, duration: 240},
} as const;
