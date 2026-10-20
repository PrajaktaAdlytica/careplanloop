import Icon from '../Icon';

export function TwoLanes() {
 return <div className="two-lanes-art" data-illustration>
  <div className="diagram-caption"><span>ONE RECORD / TWO DISTINCT LANES</span><span>SYNTHETIC EXAMPLE</span></div>
  <div className="lanes-ruler"><span>Source</span><span>Staff action</span><span>Human review</span></div>
  <div className="evidence-lane"><div className="lane-title"><Icon name="report"/><b>Care-team events</b></div><div className="lane-track"><span className="lane-connector" data-route-line/><div><i/><b>Report</b><small>Received</small></div><div><i/><b>Owner</b><small>Nurse role</small></div><div><i className="lane-open"/><b>Review</b><small>Pending</small></div></div></div>
  <div className="lane-separation"><span/><Icon name="pause"/><span/><small>Aligned in time. Reviewed separately.</small></div>
  <div className="evidence-lane billing-evidence"><div className="lane-title"><Icon name="clock"/><b>Staff activity</b></div><div className="lane-track"><span className="lane-connector" data-route-line/><div><i/><b>Contact</b><small>Staff entry</small></div><div><i/><b>Time</b><small>Source attached</small></div><div><i className="lane-open"/><b>Billing</b><small>For review</small></div></div></div>
  <p className="diagram-note">Illustrative only · no service qualification or billing determination.</p>
 </div>;
}

export function SystemMap() {
 return <div className="system-map" data-illustration>
  <div className="system-map-heading"><span>FIT AROUND THE CURRENT WORKFLOW</span><span>TO VALIDATE ↗</span></div>
  <svg viewBox="0 0 720 260" fill="none" aria-hidden="true"><path d="M110 64H280Q310 64 310 94V130H360M110 196H280Q310 196 310 166V130M610 64H440Q410 64 410 94V130H360M610 196H440Q410 196 410 166V130" stroke="currentColor" strokeDasharray="4 6"/><path data-draw-path pathLength="1" d="M110 64H280Q310 64 310 94V130H360H410V166Q410 196 440 196H610" stroke="#b57d5b" strokeWidth="1.5" strokeDasharray="1"/></svg>
  <div className="system-node node-one"><Icon name="reviewer"/><span>Nurses & care managers</span></div><div className="system-node node-two"><Icon name="document"/><span>EHR care plans</span></div><div className="system-node node-three"><Icon name="list-check"/><span>Outsourced CCM services</span></div><div className="system-node node-four"><Icon name="report"/><span>RPM platforms</span></div>
  <div className="system-center"><img src="/assets/careplanloop-mark-dark.svg" alt=""/><b>A shared handoff</b><small>Proposed coordination layer</small></div>
  <p>Possible workflow relationships · no connected integrations</p>
 </div>;
}

export function PageRouteArt() {
 return <svg className="page-route-art" viewBox="0 0 460 300" fill="none" aria-hidden="true"><g stroke="currentColor">{[0,1,2,3].map(i=><path key={i} d={`M${80-i*15} ${210+i*6}C-10 75 220 -20 350 65C425 118 370 206 300 233`} opacity={.18-i*.035}/>)}</g><path data-draw-path pathLength="1" d="M80 210C-10 75 220 -20 350 65C425 118 370 206 300 233" stroke="#c88965" strokeDasharray="1"/><circle cx="80" cy="210" r="5" fill="currentColor"/><circle cx="300" cy="233" r="9" stroke="#c88965"/><path d="M297 229V237M303 229V237" stroke="#c88965"/></svg>;
}
