import React from 'react';
import {Composition, registerRoot} from 'remotion';
import HeldByAThread from '../app/components/intro/HeldByAThread';
const Root = () => <>
  <Composition id="Held-by-a-Thread" component={HeldByAThread} durationInFrames={420} fps={30} width={1920} height={1080} defaultProps={{lineY:259.2}}/>
  <Composition id="Held-by-a-Thread-Mobile" component={HeldByAThread} durationInFrames={420} fps={30} width={780} height={1688} defaultProps={{lineY:385.9}}/>
</>;
registerRoot(Root);
