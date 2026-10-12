// Knot Washed demo: three clickable phases (stone, knots, half).
const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('[data-knot]').forEach(initKnot);

function initKnot(sec){
  const buttons=[...sec.querySelectorAll('[data-phase]')];
  const steps=[...sec.querySelectorAll('.kstep')];
  const imgs=[...sec.querySelectorAll('.knot-imgs img')];
  const meters=[...sec.querySelectorAll('[data-meter]')];
  const level={v:100}; let tween=null, phase=0;

  function paint(){
    meters.forEach(m=>{
      m.querySelector('b').textContent=Math.round(level.v)+' %';
      m.querySelector('i').style.transform=`scaleX(${level.v/100})`;
      m.classList.toggle('is-low',level.v<=51);
    });
  }
  function go(k){
    phase=k;
    buttons.forEach((b,i)=>b.setAttribute('aria-pressed',String(i===k)));
    steps.forEach((s,i)=>s.classList.toggle('is-on',i===k));
    imgs.forEach((im,i)=>im.classList.toggle('is-on',i===k));
    const to=k===2?50:100;
    if(tween) tween.kill();
    if(window.gsap && !REDUCED) tween=gsap.to(level,{v:to,duration:1.1,ease:'power3.out',onUpdate:paint});
    else { level.v=to; paint(); }
  }
  buttons.forEach((b,i)=>b.addEventListener('click',()=>go(i)));
  sec.addEventListener('keydown',e=>{
    if(!e.target.closest('[data-phase]')) return;
    if(e.key==='ArrowRight'){go(Math.min(2,phase+1)); buttons[phase].focus(); e.preventDefault();}
    if(e.key==='ArrowLeft'){go(Math.max(0,phase-1)); buttons[phase].focus(); e.preventDefault();}
  });
  go(0);
}
