import{S as z,P as M,W as S,T as v,M as y,a as i,b as P,A as T,c as j,G as A,O as G,d as a,B as h,e as x,f as F,g as O}from"./vendor.f0f8b624.js";const B=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const g of o.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&u(g)}).observe(document,{childList:!0,subtree:!0});function f(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(e){if(e.ep)return;e.ep=!0;const o=f(e);fetch(e.href,o)}};B();const n=new z,t=new M(75,window.innerWidth/window.innerHeight),p=new S({canvas:document.querySelector("#bg")});p.setPixelRatio(window.devicePixelRatio);p.setSize(window.innerWidth,window.innerHeight);t.position.setZ(30);p.render(n,t);const C=new v(10,3,16,100),H=new y({color:16737095}),m=new i(C,H);n.add(m);const b=new P(16777215);b.position.set(25,25,25);const R=new T(16777215);n.add(b,R);new j(b);new A(200,50);const W=new G(t,p.domElement);function q(){const r=new F(.25,24,24),l=new y({color:16777215}),f=new i(r,l),[u,e,o]=Array(3).fill().map(()=>O.randFloatSpread(100));f.position.set(u,e,o),n.add(f)}Array(200).fill().forEach(q);const E=new a().load("earth+space.jpeg");n.background=E;const I=new a().load("cloud Intelligence.png"),s=new i(new h(15,15,15),new x({map:I}));n.add(s);const N=new a().load("moonSurface.jpg"),k=new a().load("normalMoon.jpeg"),K=new a().load("wideFire.jpeg"),U=new a().load("panoVermaak.jpeg"),c=new i(new F(3,32,32),new y({map:N,normalMap:k}));n.add(c);const d=new i(new h(25,25,25),new x({map:K}));n.add(d);const w=new i(new h(100,100,200),new x({map:U}));n.add(w);s.position.z=30;s.position.x=-10;c.position.z=-20;c.position.y=1;c.position.x=-10;d.position.z=-30;d.position.x=40;w.position.z=40;w.position.x=-120;w.position.y=-20;function V(){const r=document.body.getBoundingClientRect().top;s.rotation.x+=.05,s.rotation.y+=.075,s.rotation.z+=.05,c.rotation.y+=.01,c.rotation.z+=.01,d.rotation.x+=.01,d.rotation.y+=.015,d.rotation.z+=.01,t.position.z=r*-.01,t.position.x=r*-.035,t.position.y=r*-.025}document.body.onscroll=V;function L(){requestAnimationFrame(L),m.rotation.x+=.01,m.rotation.y+=.005,m.rotation.x+=.01,W.update(),p.render(n,t)}L();
