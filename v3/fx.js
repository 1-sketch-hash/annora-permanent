"use strict";
/* Эффекты дизайна «Noir Atelier»: плавные появления, слова манифеста, шапка, бегущая строка,
   перетаскивание киноплёнки. Контент и тексты — в app.js; здесь только поведение.
   Без inline-скриптов (CSP), всё идемпотентно: вызывается и после смены языка. */
(function(){
  const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>Array.from(r.querySelectorAll(s));
  const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
  const root=document.documentElement;
  root.classList.add("fx");

  /* --- шапка: прозрачная над hero, стеклянная после прокрутки --- */
  const hdr=$("#hdr");
  const setHdr=()=>hdr.classList.toggle("solid",scrollY>40);
  setHdr();

  /* --- плавные появления --- */
  const REVEAL=[".sec-head > *",".about-head > *",".about-body > *",".facts li",".train-txt > *",".t-photos .ph",
    ".format",".block > h3",".incl li",".kit-ph .ph",".kit-txt > *",".struct summary",".training > .btns",
    ".models > div",".why > .eyebrow",".why > h2",".mq",".rev blockquote",".contact-in > *",".svc-foot > *"].join(",");
  const io="IntersectionObserver" in window ? new IntersectionObserver(es=>{
    es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } });
  },{rootMargin:"0px 0px -8% 0px",threshold:.08}) : null;
  const seenIo="IntersectionObserver" in window ? new IntersectionObserver(es=>{
    es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("seen"); seenIo.unobserve(e.target); } });
  },{threshold:.3}) : null;

  function arm(){
    const idx=new Map();
    $$(REVEAL).forEach(el=>{
      if(el.dataset.rv) return;
      el.dataset.rv="1";
      const p=el.parentElement, n=idx.get(p)||0; idx.set(p,n+1);
      el.style.setProperty("--d",Math.min(n,6)*.09+"s");
      el.classList.add("rv");
      if(io) io.observe(el); else el.classList.add("in");
    });
    $$(".card").forEach(c=>{ if(c.dataset.seen) return; c.dataset.seen="1"; if(seenIo) seenIo.observe(c); else c.classList.add("seen"); });
  }

  /* --- манифест: слова загораются по мере прокрутки --- */
  const mf=$("#manifestText"), msec=$("#manifest");
  let words=[];
  function splitManifest(){
    if(!mf || mf.querySelector(".w")) return;
    const txt=mf.textContent.trim(); if(!txt) return;
    mf.setAttribute("aria-label",txt);
    mf.textContent="";
    words=txt.split(/\s+/).map((w,i,a)=>{
      const s=document.createElement("span"); s.className="w"; s.setAttribute("aria-hidden","true");
      s.textContent=w; mf.appendChild(s); if(i<a.length-1) mf.appendChild(document.createTextNode(" ")); return s;
    });
    paintManifest();
  }
  function paintManifest(){
    if(!words.length) return;
    const r=msec.getBoundingClientRect(), vh=innerHeight;
    const p=Math.max(0,Math.min(1,(vh*.82-r.top)/(r.height*.8)));
    const on=reduce?words.length:Math.round(p*words.length*1.05);
    words.forEach((w,i)=>w.classList.toggle("on",i<on));
  }

  /* --- бегущая строка преимуществ: дубль набора для бесшовной петли --- */
  function marquee(){
    const ul=$("#adv"); if(!ul||reduce) return;
    $$("li",ul).slice().forEach(li=>{ const c=li.cloneNode(true); c.setAttribute("aria-hidden","true"); ul.appendChild(c); });
  }

  /* --- киноплёнка: перетаскивание мышью (на телефоне работает обычная прокрутка) --- */
  const gal=$("#gallery");
  let down=false,moved=false,sx=0,sl=0;
  gal.addEventListener("pointerdown",e=>{ if(e.pointerType!=="mouse"||e.button!==0) return; down=true; moved=false; sx=e.clientX; sl=gal.scrollLeft; });
  addEventListener("pointermove",e=>{
    if(!down) return;
    const dx=e.clientX-sx;
    if(!moved && Math.abs(dx)>6){ moved=true; gal.classList.add("drag"); }
    if(moved) gal.scrollLeft=sl-dx;
  });
  addEventListener("pointerup",()=>{ if(!down) return; down=false; gal.classList.remove("drag"); });
  gal.addEventListener("click",e=>{ if(moved){ e.stopPropagation(); e.preventDefault(); moved=false; } },true);

  /* --- прокрутка --- */
  let tick=false;
  addEventListener("scroll",()=>{
    if(tick) return; tick=true;
    requestAnimationFrame(()=>{ tick=false; setHdr(); paintManifest(); });
  },{passive:true});
  addEventListener("resize",paintManifest);

  function setup(){ splitManifest(); marquee(); arm(); }
  document.addEventListener("rendered",setup);
  setup();
})();
