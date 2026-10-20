'use client';

import {useEffect, useRef, useState} from 'react';
import {Player} from '@remotion/player';
import HeldByAThread from './HeldByAThread';

export default function ThreadPlayer({width, height, lineY, onFinish}) {
  const player = useRef(null);
  const [paused, setPaused] = useState(false);
  const [failed, setFailed] = useState(false);
  const progress = useRef(null);
  useEffect(() => {
    const ref = player.current;
    if (!ref) return;
    const ended = () => onFinish();
    const pause = () => setPaused(true);
    const play = () => setPaused(false);
    const error = () => {setFailed(true); onFinish();};
    const frame = ({detail}) => {
      if (progress.current) progress.current.style.transform = `scaleX(${detail.frame / 419})`;
    };
    ref.addEventListener('ended', ended);
    ref.addEventListener('pause', pause);
    ref.addEventListener('play', play);
    ref.addEventListener('error', error);
    ref.addEventListener('frameupdate', frame);
    const visibility = () => {if (document.hidden) ref.pause();};
    document.addEventListener('visibilitychange', visibility);
    return () => {
      ref.removeEventListener('ended', ended);
      ref.removeEventListener('pause', pause);
      ref.removeEventListener('play', play);
      ref.removeEventListener('error', error);
      ref.removeEventListener('frameupdate', frame);
      document.removeEventListener('visibilitychange', visibility);
    };
  }, [onFinish]);
  if (failed) return null;
  return <>
    <Player
      ref={player}
      component={HeldByAThread}
      inputProps={{lineY, asset:'/assets/intro/held-by-a-thread.png'}}
      durationInFrames={420}
      compositionWidth={width}
      compositionHeight={height}
      fps={30}
      autoPlay
      initiallyMuted
      controls={false}
      loop={false}
      moveToBeginningWhenEnded={false}
      clickToPlay={false}
      doubleClickToFullscreen={false}
      spaceKeyToPlayOrPause={false}
      style={{width:'100%',height:'100%'}}
      renderLoading={() => <div className="thread-film-poster" />}
      errorFallback={() => <div className="thread-film-poster" />}
    />
    <div className="thread-playback">
      <button type="button" onClick={() => paused ? player.current?.play() : player.current?.pause()} aria-label={paused ? 'Play intro' : 'Pause intro'}>
        {paused ? <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m7 4 9 6-9 6Z" fill="currentColor"/></svg> : <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M7 4v12M13 4v12" stroke="currentColor" strokeWidth="2"/></svg>}
        <span>{paused ? 'Play' : 'Pause'}</span>
      </button>
      <span className="thread-progress" aria-hidden="true"><i ref={progress}/></span>
      <span className="thread-duration">00:14</span>
    </div>
  </>;
}
