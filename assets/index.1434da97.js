import{S as x,P as b,W as L,T as F,M as w,a as f,b as M,A as S,c as v,G as P,O as z,d as u,B as T,e as A,f as y,g as G}from"./vendor.f0f8b624.js";const O=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const p of o.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&l(p)}).observe(document,{childList:!0,subtree:!0});function d(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=d(e);fetch(e.href,o)}};O();const t=new x,n=new b(75,window.innerWidth/window.innerHeight),c=new L({canvas:document.querySelector("#bg")});c.setPixelRatio(window.devicePixelRatio);c.setSize(window.innerWidth,window.innerHeight);n.position.setZ(30);c.render(t,n);const j=new F(10,3,16,100),B=new w({color:16737095}),m=new f(j,B);t.add(m);const g=new M(16777215);g.position.set(25,25,25);const C=new S(16777215);t.add(g,C);new v(g);new P(200,50);const H=new z(n,c.domElement);function R(){const r=new y(.25,24,24),a=new w({color:16777215}),d=new f(r,a),[l,e,o]=Array(3).fill().map(()=>G.randFloatSpread(100));d.position.set(l,e,o),t.add(d)}Array(200).fill().forEach(R);const W=new u().load("space.jpg");t.background=W;const q=new u().load("cloud Intelligence.png"),i=new f(new T(15,15,15),new A({map:q}));t.add(i);const E=new u().load("moonSurface.jpg"),I=new u().load("normalMoon.jpeg"),s=new f(new y(3,32,32),new w({map:E,normalMap:I}));t.add(s);i.position.z=30;i.position.x=-10;s.position.z=-20;s.position.y=1;s.position.x=-10;function N(){const r=document.body.getBoundingClientRect().top;i.rotation.x+=.05,i.rotation.y+=.075,i.rotation.z+=.05,s.rotation.y+=.01,s.rotation.z+=.01,n.position.z=r*-.01,n.position.x=r*-.035,n.position.y=r*-.025}document.body.onscroll=N;function h(){requestAnimationFrame(h),m.rotation.x+=.01,m.rotation.y+=.005,m.rotation.x+=.01,H.update(),c.render(t,n)}h();
