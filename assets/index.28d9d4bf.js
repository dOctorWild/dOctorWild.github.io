import{S as L,P as F,W as M,T as S,M as g,a as d,b as z,A as j,c as O,G as P,O as T,d as l,B as h,e as x,f as b,g as A}from"./vendor.f0f8b624.js";const G=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const w of o.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&u(w)}).observe(document,{childList:!0,subtree:!0});function p(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(e){if(e.ep)return;e.ep=!0;const o=p(e);fetch(e.href,o)}};G();var C="/assets/cloudIntelligence.b7d56f34.png",B="/assets/earth+space.94ec130d.jpeg",E="/assets/jupiter.b89570d9.jpeg",H="/assets/normalMoon.2af0897d.jpeg",I="/assets/wideFire.124853b8.jpeg";const t=new L,n=new F(75,window.innerWidth/window.innerHeight),f=new M({canvas:document.querySelector("#bg")});f.setPixelRatio(window.devicePixelRatio);f.setSize(window.innerWidth,window.innerHeight);n.position.setZ(30);f.render(t,n);const R=new S(10,3,16,100),W=new g({color:16737095}),m=new d(R,W);t.add(m);const y=new z(16777215);y.position.set(25,25,25);const q=new j(16777215);t.add(y,q);new O(y);new P(200,50);const N=new T(n,f.domElement);function k(){const i=new b(.25,24,24),c=new g({color:16777215}),p=new d(i,c),[u,e,o]=Array(3).fill().map(()=>A.randFloatSpread(500));p.position.set(u,e,o),t.add(p)}Array(5e3).fill().forEach(k);const K=new l().load(B);t.background=K;const U=new l().load(C),r=new d(new h(65,47,47),new x({map:U}));t.add(r);const Z=new l().load(E),D=new l().load(H),J=new l().load(I),s=new d(new b(24,32,32),new g({map:Z,normalMap:D}));t.add(s);const a=new d(new h(25,25,25),new x({map:J}));t.add(a);r.position.z=60;r.position.x=39;r.position.y=50;s.position.z=-100;s.position.y=1;s.position.x=-10;a.position.z=-30;a.position.x=40;function Q(){const i=document.body.getBoundingClientRect().top;r.rotation.x+=.05,r.rotation.y+=.075,r.rotation.z+=.05,s.rotation.y+=.01,s.rotation.z+=.01,a.rotation.x+=.01,a.rotation.y+=.015,a.rotation.z+=.01,n.position.z=i*-.01,n.position.x=i*-.035,n.position.y=i*-.025}document.body.onscroll=Q;function v(){requestAnimationFrame(v),m.rotation.x+=.01,m.rotation.y+=.005,m.rotation.x+=.01,N.update(),f.render(t,n)}v();
