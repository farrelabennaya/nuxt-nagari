import{_ as d}from"./DlAUqK2U.js";import{m as i,f as _,c as o,a as s,F as u,s as m,o as n,t as c,p as f,e as h}from"./ymCw7azN.js";const v=e=>(f("data-v-1709c96a"),e=e(),h(),e),x=v(()=>s("h1",{class:"text-2xl font-bold mb-4"},"Daftar Warga",-1)),b={class:"font-semibold"},I=["src"],S={__name:"index",setup(e){const l=i([]);_(async()=>{const r=await(await fetch("http://laravel-api.test/api/warga")).json();l.value=r});const p=a=>`http://laravel-api.test/storage/${a}`;return(a,r)=>(n(),o("div",null,[x,s("ul",null,[(n(!0),o(u,null,m(l.value,t=>(n(),o("li",{key:t.id,class:"mb-2"},[s("p",b,c(t.name),1),s("p",null,c(t.address),1),s("p",null,c(t.phone),1),s("img",{src:p(t.qr_code),alt:"QR Code",class:"mt-2"},null,8,I)]))),128))])]))}},y=d(S,[["__scopeId","data-v-1709c96a"]]);export{y as default};
