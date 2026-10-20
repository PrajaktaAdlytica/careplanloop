from pathlib import Path
import re
parents={'.content-grid','.gap-grid','.evidence-grid','.fit-grid','.validation-grid','.pilot-grid','.contact-grid'}
offsets={'.timeline-heading','.month-ruler','.timeline-separation','.demo-intro','.modules-heading','.module-list','.module-workbench','.modules-detail-link','.demo-actions','.demo-main .case-explorer','.demo-intro-page','.demo-boundaries','.story-sequence'}
children={'.content-body','.fragment-board','.evidence-pane','.ecosystem','.metric-sheet','.validation-note','.pilot-gates','.inquiry-form','.gap-copy','.evidence-copy','.fit-copy','.validation-copy','.pilot-copy','.contact-copy','.fit-grid>.persona-rail'}
def split_selectors(value):
 parts=[];start=0;depth=0;quote=None;comment=False;i=0
 while i<len(value):
  c=value[i]
  if comment:
   if value[i:i+2]=='*/':comment=False;i+=2;continue
  elif quote:
   if c==quote and (i==0 or value[i-1]!='\\'):quote=None
  elif value[i:i+2]=='/*':comment=True;i+=2;continue
  elif c in "\"'":quote=c
  elif c in '([':depth+=1
  elif c in ')]':depth-=1
  elif c==',' and depth==0:parts.append(value[start:i]);start=i+1
  i+=1
 parts.append(value[start:]);return parts
for filename in ['globals.css','art-direction.css','motion-polish.css','continuity.css','spacing.css']:
 p=Path('app/'+filename);s=p.read_text()
 def rule(match):
  selectors=match[1];body=match[2]
  if selectors.lstrip().startswith('@'):return match[0]
  out=[];changed=False
  for selector in split_selectors(selectors):
   sel=selector.strip();base=sel.removeprefix('.home-atlas ')
   remove=set()
   if base in parents:remove|={'grid-template-columns','grid-template-rows','grid-template-areas'}
   if base in children or ('.chapter-index' in base and '>' in base) or base.endswith(' .chapter-index'):remove|={'grid-column','grid-row'}
   if base in offsets:remove|={'margin-left'}
   if base=='.separation-grid':remove|={'width'}
   if base=='.chapter-index':remove|={'white-space'}
   if not remove:out.append(sel+'{'+body+'}');continue
   changed=True
   declarations=[]
   for d in body.split(';'):
    if ':' not in d:continue
    if d.split(':',1)[0].strip() not in remove:declarations.append(d)
   if declarations:out.append(sel+'{'+';'.join(declarations)+'}')
  return '\n'.join(out) if changed else match[0]
 # Only declaration blocks, never @media containers.
 s=re.sub(r'([^{}]+)\{([^{}]*)\}',rule,s)
 p.write_text(s)
