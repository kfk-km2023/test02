import{_ as w,r as s,o,c as r,h as k,v as N,a as t,t as f,i as V,F as h,f as y,d as _,w as b,u as n,W as E,g as z,H as I,E as L,p as B,j as M}from"./index-cdbf5580.js";import{a as T}from"./axios-aba6f0e0.js";import{a as C}from"./leaflet-src-d158b2c6.js";const O=i=>(B("data-v-2e205950"),i=i(),M(),i),U={key:0},j={class:"message is-danger"},D=O(()=>t("div",{class:"message-header"},[t("p",null,"Error")],-1)),F={class:"message-body"},H={class:"aa01"},J={class:"aa02"},W={style:{height:"600px",width:"800px"}},q={__name:"Test05View",setup(i){const c=s(!1),u=s(""),g=s(!1),d=s("港"),l=s([]),x=s([]),m=s(2);function S(){console.log("L001"),c.value=!1,u.value="",g.value=!0;var p=encodeURI(d.value);console.log(""+p),T.get("https://msearch.gsi.go.jp/address-search/AddressSearch?q="+p).then(function(e){e.data&&(e.data.error?(c.value=!0,u.value=e.data.error):(l.value=e.data,console.log(JSON.stringify(l.value)),console.log(JSON.stringify(l.value.length)),x.value=[19]))}.bind(this)).catch(function(e){c.value=!0,u.value=e}.bind(this)).finally(function(){g.value=!1}.bind(this))}return(p,e)=>(o(),r("main",null,[k(t("input",{id:"curName","onUpdate:modelValue":e[0]||(e[0]=a=>d.value=a)},null,512),[[N,d.value]]),t("button",{onClick:S},"検索"),c.value?(o(),r("div",U,[t("article",j,[D,t("div",F,f(u.value),1)])])):V("",!0),t("div",H,[t("div",J,[(o(!0),r(h,null,y(l.value,(a,v)=>(o(),r("div",{key:v},f(a.properties.title),1))),128))]),t("div",W,[_(n(L),{ref:"map",zoom:m.value,"onUpdate:zoom":e[1]||(e[1]=a=>m.value=a),center:[35,139]},{default:b(()=>[_(n(E),{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png","layer-type":"base",name:"OpenStreetMap"}),(o(!0),r(h,null,y(l.value,(a,v)=>(o(),z(n(I),{key:v,"lat-lng":n(C.latLng)(a.geometry.coordinates[1],a.geometry.coordinates[0])},null,8,["lat-lng"]))),128))]),_:1},8,["zoom"])])]),_(n(d))]))}},K=w(q,[["__scopeId","data-v-2e205950"]]);export{K as default};
