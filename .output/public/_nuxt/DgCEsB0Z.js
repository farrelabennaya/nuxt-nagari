import{_ as v,a as V}from"./DH8iKwkT.js";import{_ as y}from"./DqlRUhvi.js";import{u as b}from"./2TKp5wxK.js";import{l as g,m as k,c as d,a as s,n as S,b as l,w as i,h as e,t as m,x as _,q as U,v as N,o as n,d as c}from"./ymCw7azN.js";import"./DlAUqK2U.js";const P={class:"min-h-screen flex items-center"},R={class:"w-full"},B={class:"card bg-white p-20 rounded-lg shadow-xl md:w-3/5 mx-auto lg:w-1/3"},Y=s("h3",{class:"text-center text-2xl font-semibold"},"User Registration",-1),E={class:"mb-5"},A={key:0,class:"text-red-500"},C={class:"mb-5"},D={key:0,class:"text-red-500"},F={class:"mb-5"},M={key:0,class:"text-red-500"},T={class:"mb-5"},q={key:0,class:"text-red-500"},I={class:"mb-5"},L=s("option",{value:"",disabled:""},"Select a role",-1),W=s("option",{value:"1"},"Admin",-1),$=s("option",{value:"2"},"Petugas",-1),j=s("option",{value:"3"},"Warga",-1),z=[L,W,$,j],G={key:0,class:"text-red-500"},H={key:0,class:"text-red-500 mt-5 block"},ee={__name:"register",setup(J){const w=b(),t=g({name:null,email:null,password:null,password_confirmation:null,role_id:null}),o=k({}),h=async()=>{try{await w.register(t)}catch(u){u.data&&u.data.errors?o.value=u.data.errors:o.value={general:[u.message]}}};return(u,a)=>{const p=v,f=V,x=y;return n(),d("div",P,[s("div",R,[s("div",B,[Y,s("form",{onSubmit:S(h,["prevent"]),class:"max-w-sm mx-auto"},[s("div",E,[l(p,{for:"name"},{default:i(()=>[c("Your Name")]),_:1}),l(f,{id:"name",type:"text",placeholder:"Your name",modelValue:e(t).name,"onUpdate:modelValue":a[0]||(a[0]=r=>e(t).name=r)},null,8,["modelValue"]),e(o).name?(n(),d("span",A,m(e(o).name[0]),1)):_("",!0)]),s("div",C,[l(p,{for:"email"},{default:i(()=>[c("Your Email")]),_:1}),l(f,{id:"email",type:"email",placeholder:"Email address",modelValue:e(t).email,"onUpdate:modelValue":a[1]||(a[1]=r=>e(t).email=r)},null,8,["modelValue"]),e(o).email?(n(),d("span",D,m(e(o).email[0]),1)):_("",!0)]),s("div",F,[l(p,{for:"password"},{default:i(()=>[c("Your Password")]),_:1}),l(f,{id:"password",type:"password",placeholder:"Password",modelValue:e(t).password,"onUpdate:modelValue":a[2]||(a[2]=r=>e(t).password=r)},null,8,["modelValue"]),e(o).password?(n(),d("span",M,m(e(o).password[0]),1)):_("",!0)]),s("div",T,[l(p,{for:"password_confirmation"},{default:i(()=>[c("Retype Password")]),_:1}),l(f,{id:"password_confirmation",type:"password",placeholder:"Retype password",modelValue:e(t).password_confirmation,"onUpdate:modelValue":a[3]||(a[3]=r=>e(t).password_confirmation=r)},null,8,["modelValue"]),e(o).password_confirmation?(n(),d("span",q,m(e(o).password_confirmation[0]),1)):_("",!0)]),s("div",I,[l(p,{for:"role"},{default:i(()=>[c("Role")]),_:1}),U(s("select",{id:"role","onUpdate:modelValue":a[4]||(a[4]=r=>e(t).role_id=r),class:"w-full p-2 border rounded"},z,512),[[N,e(t).role_id]]),e(o).role_id?(n(),d("span",G,m(e(o).role_id[0]),1)):_("",!0)]),l(x,null,{default:i(()=>[c("Register")]),_:1}),e(o).general?(n(),d("span",H,m(e(o).general[0]),1)):_("",!0)],32)])])])}}};export{ee as default};
