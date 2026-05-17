import React from 'react';
import {COLORS} from '../data/videoConstants';

export const CarIcon = () => (
  <svg viewBox="0 0 220 130" width="220" height="130"><path d="M38 76 L62 40 H150 L184 76 Z" fill="rgba(0,102,255,.10)" stroke={COLORS.blue} strokeWidth="6"/><rect x="25" y="72" width="170" height="34" rx="17" fill="white" stroke={COLORS.blue} strokeWidth="6"/><circle cx="66" cy="110" r="16" fill={COLORS.green}/><circle cx="155" cy="110" r="16" fill={COLORS.green}/><path d="M112 52 l-20 28 h24 l-15 30" fill="none" stroke={COLORS.yellow} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

export const TurbineIcon = () => (
  <svg viewBox="0 0 220 150" width="220" height="150"><line x1="110" y1="74" x2="110" y2="142" stroke={COLORS.blue} strokeWidth="8" strokeLinecap="round"/><circle cx="110" cy="70" r="13" fill={COLORS.green}/><path d="M110 68 C78 31 70 14 82 8 C105 20 113 45 110 68Z" fill="rgba(0,200,83,.28)" stroke={COLORS.green} strokeWidth="4"/><path d="M113 72 C165 64 189 70 190 84 C164 98 135 88 113 72Z" fill="rgba(0,102,255,.18)" stroke={COLORS.blue} strokeWidth="4"/><path d="M107 74 C91 122 76 143 64 137 C62 107 82 87 107 74Z" fill="rgba(255,214,0,.34)" stroke={COLORS.yellow} strokeWidth="4"/></svg>
);

export const PhoneIcon = () => (
  <svg viewBox="0 0 150 180" width="150" height="180"><rect x="30" y="12" width="90" height="156" rx="20" fill="white" stroke={COLORS.blue} strokeWidth="7"/><rect x="43" y="34" width="64" height="106" rx="8" fill="rgba(0,200,83,.10)"/><circle cx="75" cy="153" r="6" fill={COLORS.yellow}/><path d="M52 57 H98 M52 82 H86 M52 107 H101" stroke={COLORS.green} strokeWidth="6" strokeLinecap="round" opacity=".75"/></svg>
);

export const DocumentIcon = () => (
  <svg viewBox="0 0 180 220" width="180" height="220"><path d="M32 12 H116 L150 47 V204 H32 Z" fill="white" stroke={COLORS.blue} strokeWidth="6"/><path d="M116 12 V50 H150" fill="none" stroke={COLORS.blue} strokeWidth="6"/><path d="M55 82 H124 M55 112 H132 M55 142 H108" stroke={COLORS.green} strokeWidth="7" strokeLinecap="round"/><circle cx="130" cy="170" r="16" fill={COLORS.yellow}/></svg>
);
