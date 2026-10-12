// Knot Washed demo: particle swarm (three.js), driven by three clickable phases.
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';

const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('[data-knot]').forEach(initKnot);

function initKnot(sec){
  const canvas=sec.querySelector('canvas');
  const steps=[...sec.querySelectorAll('.kstep')], meters=[...sec.querySelectorAll('[data-meter]')];
  const buttons=[...sec.querySelectorAll('[data-phase]')];
  const mobile = innerWidth<820;
  const COUNT = mobile ? 9000 : 20000;

  const renderer=new THREE.WebGLRenderer({canvas,antialias:false,alpha:false,powerPreference:'high-performance'});
  renderer.setPixelRatio(Math.min(2,devicePixelRatio)); renderer.setClearColor(0x0E1A33,1);
  const scene=new THREE.Scene();
  const camera=new THREE.PerspectiveCamera(42,1,.1,100); camera.position.set(0,0,mobile?15:12.5);

  // particle targets, built once (no allocations inside the frame loop)
  const posA=new Float32Array(COUNT*3), posB=new Float32Array(COUNT*3), rnd=new Float32Array(COUNT*4);
  const SOLID = Math.floor(COUNT*.42);
  const stones=[]; for(let s=0;s<9;s++){stones.push([(Math.random()-.5)*6.4,(Math.random()-.5)*4.2,(Math.random()-.5)*3, .55+Math.random()*.55]);}
  function torusKnot(t,p,q,R,r,out){const qt=q*t, pt=p*t; out[0]=(R+r*Math.cos(qt))*Math.cos(pt); out[1]=(R+r*Math.cos(qt))*Math.sin(pt); out[2]=r*Math.sin(qt);}
  const a=[0,0,0];
  for(let i=0;i<COUNT;i++){
    const i3=i*3; const r0=Math.random(), r1=Math.random(), r2=Math.random();
    rnd[i*4]=r0; rnd[i*4+1]=r1; rnd[i*4+2]=r2; rnd[i*4+3]= i<SOLID?1:0;
    if(i<SOLID){
      // pumice stones: noisy porous blobs
      const s=stones[i%stones.length]; const u=Math.acos(2*r0-1), v=r1*Math.PI*2; const rr=s[3]*(.72+.28*Math.cbrt(r2))*(1+.18*Math.sin(u*7+v*5));
      posA[i3]=s[0]+rr*Math.sin(u)*Math.cos(v); posA[i3+1]=s[1]+rr*Math.sin(u)*Math.sin(v)*.85; posA[i3+2]=s[2]+rr*Math.cos(u);
      // knot: tube around a (2,3) torus knot
      const t=(i/SOLID)*Math.PI*2; torusKnot(t,2,3,2.35,1.05,a);
      const ang=r1*Math.PI*2, tube=.34*Math.sqrt(r2);
      posB[i3]=a[0]+Math.cos(ang)*tube; posB[i3+1]=a[1]+Math.sin(ang)*tube; posB[i3+2]=a[2]+Math.sin(ang*1.3)*tube;
    } else {
      // water: drum shell
      const ang=r0*Math.PI*2, rad=4.3+(r1-.5)*1.4+Math.sin(ang*6)*.12, z=(r2-.5)*3.4;
      posA[i3]=Math.cos(ang)*rad; posA[i3+1]=Math.sin(ang)*rad; posA[i3+2]=z;
      posB[i3]=Math.cos(ang)*(rad*.98); posB[i3+1]=Math.sin(ang)*(rad*.98); posB[i3+2]=z*.9;
    }
  }
  const geo=new THREE.BufferGeometry();
  geo.setAttribute('position',new THREE.BufferAttribute(posA,3));
  geo.setAttribute('aB',new THREE.BufferAttribute(posB,3));
  geo.setAttribute('aR',new THREE.BufferAttribute(rnd,4));
  const uniforms={uTime:{value:0},uMorph:{value:0},uDrain:{value:0},uPix:{value:renderer.getPixelRatio()},uSize:{value:mobile?2.6:2.2}};
  const mat=new THREE.ShaderMaterial({uniforms,transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,
  vertexShader:`
  uniform float uTime,uMorph,uDrain,uPix,uSize; attribute vec3 aB; attribute vec4 aR; varying float vA; varying float vSolid; varying float vM;
  mat2 rot(float a){float c=cos(a),s=sin(a);return mat2(c,-s,s,c);}
  void main(){
    float solid=aR.w; vSolid=solid;
    float m=smoothstep(aR.x*.35, aR.x*.35+.65, uMorph); vM=m;
    vec3 p=mix(position,aB,m);
    if(solid<.5){ p.xy=rot(uTime*.35 + aR.y*.2)*p.xy; p+=vec3(sin(uTime*1.3+aR.z*30.)*.05, cos(uTime*1.1+aR.x*30.)*.05, 0.);
      float drains=step(.5,fract(aR.y*13.7));
      float dr=smoothstep(aR.z*.4, aR.z*.4+.6, uDrain)*drains;
      p.y-=dr*dr*9.; p.x*=1.+dr*.3;
      vA=(1.-dr)*.8;
    } else {
      vec3 tumble=p; tumble.xz=rot(uTime*.18)*tumble.xz; tumble.xy=rot(uTime*.07)*tumble.xy;
      vec3 stoneT=p+vec3(0.,sin(uTime*.9+aR.y*6.)*.15,0.);
      p=mix(stoneT,tumble,m);
      vA=.95;
    }
    vec4 mv=modelViewMatrix*vec4(p,1.); gl_Position=projectionMatrix*mv;
    gl_PointSize=uSize*uPix*(solid>.5? (1.35+ .3*m) : 1.25)*(12./-mv.z);
  }`,
  fragmentShader:`
  varying float vA; varying float vSolid; varying float vM;
  void main(){ vec2 c=gl_PointCoord-.5; float d=length(c); if(d>.5) discard; float f=smoothstep(.5,.0,d);
    vec3 water=vec3(.62,.72,.95), pumice=vec3(.78,.74,.68), knot=vec3(.79,.60,.36);
    vec3 col = vSolid>.5 ? mix(pumice,knot,vM) : water;
    gl_FragColor=vec4(col, vA*f);
  }`});
  const pts=new THREE.Points(geo,mat); scene.add(pts);

  function resize(){const w=sec.clientWidth,h=sec.clientHeight; renderer.setSize(w,h,false); camera.aspect=w/h; camera.updateProjectionMatrix();
    pts.position.x = w>820 ? 3.0 : 0; pts.position.y = w>820 ? -.6 : 2.1; pts.scale.setScalar(w>820?.84:.62);}
  resize(); addEventListener('resize',resize);

  let vis=false;
  // meters follow the drain value
  const pctEls=meters.map(m=>m.querySelector('b')), bars=meters.map(m=>m.querySelector('i'));
  function paint(){
    const val = 100 - 50*uniforms.uDrain.value;
    pctEls.forEach(e=>e.textContent=Math.round(val)+' %'); bars.forEach(b=>b.style.transform=`scaleX(${val/100})`);
    meters.forEach(m=>m.classList.toggle('is-low',val<=51));
    if(REDUCED || !vis) renderer.render(scene,camera);
  }

  // phases: 0 = pumice, 1 = knots, 2 = half the water
  let phase=0, tween=null;
  function go(k){
    phase=k;
    steps.forEach((s,i)=>s.classList.toggle('is-on',i===k));
    buttons.forEach((b,i)=>{b.setAttribute('aria-pressed',String(i===k)); const bar=b.querySelector('i'); if(bar){bar.style.transition='none'; bar.style.transform='scaleX(0)';}});
    const to={m:k>=1?1:0, d:k>=2?1:0};
    const bar=buttons[k]&&buttons[k].querySelector('i');
    const dur=REDUCED?0:1.8;
    if(tween) tween.kill();
    if(window.gsap){
      const st={m:uniforms.uMorph.value,d:uniforms.uDrain.value};
      tween=gsap.to(st,{m:to.m,d:to.d,duration:dur,ease:'power2.inOut',onUpdate:()=>{uniforms.uMorph.value=st.m; uniforms.uDrain.value=st.d; paint();}});
      if(bar && dur){ gsap.fromTo(bar,{scaleX:0},{scaleX:1,duration:dur,ease:'power2.inOut'}); }
    } else { uniforms.uMorph.value=to.m; uniforms.uDrain.value=to.d; paint(); }
  }
  buttons.forEach((b,i)=>b.addEventListener('click',()=>go(i)));
  sec.addEventListener('keydown',e=>{
    if(!e.target.closest('[data-phase]')) return;
    if(e.key==='ArrowRight'){go(Math.min(2,phase+1)); buttons[phase].focus(); e.preventDefault();}
    if(e.key==='ArrowLeft'){go(Math.max(0,phase-1)); buttons[phase].focus(); e.preventDefault();}
  });

  // render only while visible
  const clock=new THREE.Clock();
  function loop(){ if(!vis) return; uniforms.uTime.value=clock.getElapsedTime(); renderer.render(scene,camera); requestAnimationFrame(loop); }
  new IntersectionObserver(es=>{vis=es[0].isIntersecting; if(vis && !REDUCED) loop();},{threshold:0}).observe(sec);
  go(0); paint();
}
