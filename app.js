const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealTargets=document.querySelectorAll('section:not(.hero) .kicker, section:not(.hero) .title, section:not(.hero) .lead, .card, .product, .steps, .person, .trust div, .form');
revealTargets.forEach((el,i)=>{el.classList.add('reveal');el.style.transitionDelay=((i%4)*55)+'ms';});
if(!reduceMotion && 'IntersectionObserver' in window){
  const io=new IntersectionObserver((entries)=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');io.unobserve(entry.target);}}),{threshold:.12,rootMargin:'0px 0px -45px'});
  revealTargets.forEach(el=>io.observe(el));
}else{revealTargets.forEach(el=>el.classList.add('is-visible'));}
document.getElementById('leadForm').addEventListener('submit',function(e){e.preventDefault();const n=document.getElementById('notice');n.style.display='block';n.animate([{opacity:0,transform:'translateY(8px)'},{opacity:1,transform:'none'}],{duration:320,easing:'ease-out'});});