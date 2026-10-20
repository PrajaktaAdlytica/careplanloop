import React from 'react';
import {AbsoluteFill, CanvasImage, Easing, interpolate, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'};
const ease = {...clamp, easing: Easing.bezier(.4, 0, .2, 1)};
const mix = (a, b, t) => a + (b - a) * t;

/**
 * A continuous camera move over the original photographic art direction.
 * No artificial hand animation: the person already holds the thread.
 * Website and Studio use this same frame-driven composition.
 */
export default function HeldByAThread({lineY, asset = staticFile('assets/intro/held-by-a-thread.png')}) {
  const frame = useCurrentFrame();
  const {fps, width, height} = useVideoConfig();
  const t = frame / fps;
  const portrait = width / height < 1;
  const camera = interpolate(t, [0, 3, 7, 9.8], portrait ? [1.5, 1.38, 1.06, 1] : [2.4, 2.12, 1.22, 1.05], ease);
  const focusX = interpolate(t, [0, 3, 7, 9.8], portrait ? [.40, .43, .61, .82] : [.43, .46, .52, .53], ease);
  const imageWidth = Math.max(width, height * 1672 / 941) * camera;
  const imageHeight = imageWidth * 941 / 1672;
  const left = width / 2 - focusX * imageWidth;
  const top = height * .46 - .46 * imageHeight;
  const dissolve = interpolate(t, [10, 11.8], [1, 0], ease);
  const morph = interpolate(t, [11.25, 13.45], [0, 1], ease);
  const destinationY = lineY ?? height * .24;
  // Trace the visible physical thread, then gently pull it into the hero rule.
  const points = [[530,400],[690,400],[775,453],[893,436],[1024,383],[1185,462],[1274,443],[1360,437],[1405,399],[1468,378]];
  const mapped = points.map(([x,y], index) => [
    mix(left + x / 1672 * imageWidth, width * (.07 + .86 * index / 9), morph),
    mix(top + y / 941 * imageHeight, destinationY, morph),
  ]);
  const path = `M${mapped[0].join(',')} C${mapped.slice(1,4).map(p=>p.join(',')).join(' ')} C${mapped.slice(4,7).map(p=>p.join(',')).join(' ')} C${mapped.slice(7).map(p=>p.join(',')).join(' ')}`;
  const captionStyle = {
    position: 'absolute', left: '7%', right: '7%', top: portrait ? '13%' : '15%',
    textAlign: 'center', color: '#f2eee5',
    fontFamily: '"Instrument Sans", Arial, sans-serif', fontWeight: 400,
    fontSize: portrait ? width * .058 : Math.min(width * .03, 52),
    lineHeight: 1.35, letterSpacing: '-.025em', textWrap: 'balance',
  };
  return <AbsoluteFill style={{background: '#152a22', overflow: 'hidden'}}>
    <AbsoluteFill style={{opacity: dissolve}}>
      <CanvasImage src={asset} style={{position: 'absolute', left, top, width: imageWidth, height: imageHeight}} />
      <AbsoluteFill style={{background: 'linear-gradient(180deg,rgba(9,23,17,.44),transparent 35%,transparent 65%,rgba(9,23,17,.42))'}} />
    </AbsoluteFill>
    <div style={{...captionStyle, opacity: interpolate(t, [3.1,3.8,5.5,6.15], [0,1,1,0], ease), translate: `0 ${interpolate(t,[3.1,4],[12,0],ease)}px`}}>
      A handoff is more than a connection.
    </div>
    <div style={{...captionStyle, opacity: interpolate(t, [6.5,7.2,9.2,9.9], [0,1,1,0], ease), translate: `0 ${interpolate(t,[6.5,7.4],[12,0],ease)}px`}}>
      Someone holds the next step.
    </div>
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} style={{position:'absolute',inset:0,opacity:interpolate(t,[9.9,11.25],[0,1],ease)}} aria-hidden="true">
      <path d={path} fill="none" stroke="#cda881" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx={mapped[9][0]} cy={mapped[9][1]} r={3} fill="#cda881" opacity={interpolate(t,[12.3,13.45],[0,1],ease)} />
    </svg>
  </AbsoluteFill>;
}
