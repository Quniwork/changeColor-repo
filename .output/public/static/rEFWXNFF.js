import{d as L,q as S,i as $}from"./BHNe58bI.js";import{f as w,c as r,r as I,n as T}from"./DbjbkAeu.js";function P(){const i=L();return{apiData:w(()=>{try{if(!i.$apiData)throw new Error("API data is not defined");return i.$apiData}catch(n){return console.error("Error in useApiData:",n),{}}})}}const A=S("main",()=>{const{apiData:i}=P(),t=$(),n=t.public.imageBasePath,s=r(t.public.themeMode),c=r(t.public.themeColor),a=I({logo:null,slider:null}),g=r(null),m=e=>g.value===e?"highlight":"",h=()=>{if(typeof window<"u"){const e=document.querySelector(".ele-logo-img");if(e)if(e.tagName.toLowerCase()==="svg"){const d=e.getBoundingClientRect();a.logo=`${Math.round(d.width)}x${Math.round(d.height)}`}else e.tagName.toLowerCase()==="img"&&(e.complete?a.logo=`${e.naturalWidth}x${e.naturalHeight}`:e.onload=()=>{a.logo=`${e.naturalWidth}x${e.naturalHeight}`});const o=document.querySelector(".ele-slider-img");o&&(a.slider=`${o.naturalWidth}x${o.naturalHeight}`)}},u=r(!1),p=e=>{u.value=e,typeof window<"u"&&localStorage.setItem("isLoggedIn",e.toString())},f=e=>{s.value=e},v=e=>{c.value=e},l=r(null);try{const e=t.public.NUXT_APP_TITLE||"default",o=localStorage.getItem(`savedLogo_${e}`);o&&T(()=>{l.value=o})}catch(e){console.error("Error loading logo from localStorage:",e)}return{config:t,imageBasePath:n,apiData:i,themeMode:s,themeColor:c,themeSize:a,highlight:g,getHighlightClass:m,initializeSizeThemes:h,isLoggedIn:u,updateLoginStatus:p,updateThemeMode:f,updateThemeColor:v,previewLogo:l,setPreviewLogo:e=>{l.value=e;try{const o=t.public.NUXT_APP_TITLE||"default";e?localStorage.setItem(`savedLogo_${o}`,e):localStorage.removeItem(`savedLogo_${o}`)}catch(o){console.error("Error saving logo to localStorage:",o)}}}});export{A as u};
