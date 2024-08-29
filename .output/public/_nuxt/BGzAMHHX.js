import{A as V}from"./Dl1Rth-w.js";import{_ as O}from"./CrH4gh9h.js";import{j as C,k as J,l as x,m as S,f as F,c as n,b as j,a,t as i,n as H,q as m,y as _,x as d,v as b,F as k,s as h,o as r,p as q,e as $}from"./ymCw7azN.js";import{u as z}from"./2TKp5wxK.js";import{_ as G}from"./DlAUqK2U.js";import"./CPXeGkS5.js";const u=v=>(q("data-v-836a46fb"),v=v(),$(),v),W={class:"flex overflow-hidden bg-white pt-16"},Q={id:"main-content",class:"h-full w-full bg-gray-50 relative overflow-y-auto sm:ml-64"},X=u(()=>a("main",null,[a("div",{class:"pt-6 px-4 ml-5 mr-5"},[a("h1",{class:"text-lg font-bold mb-4"},"Create Kepala Keluarga")])],-1)),Y={class:"min-h-screen flex"},Z={class:"w-full"},ee={class:"card bg-white p-10 rounded-lg shadow-md md:w-3/5 mx-auto lg:w-1/3"},ae={class:"text-center text-2xl font-semibold"},te={class:"mb-5"},se=u(()=>a("label",{for:"keluarga_id",class:"block text-sm font-medium text-gray-700"},"Keluarga ID",-1)),le={key:0,class:"text-red-500"},oe={class:"mb-5"},ne=u(()=>a("label",{for:"nama",class:"block text-sm font-medium text-gray-700"},"Nama",-1)),re={key:0,class:"text-red-500"},ie={class:"mb-5"},ue=u(()=>a("label",{for:"nik",class:"block text-sm font-medium text-gray-700"},"NIK",-1)),de={key:0,class:"text-red-500"},ce={class:"mb-5"},me=u(()=>a("label",{for:"tempat_lahir",class:"block text-sm font-medium text-gray-700"},"Tempat Lahir",-1)),pe={key:0,class:"text-red-500"},ge={class:"mb-5"},_e=u(()=>a("label",{for:"tanggal_lahir",class:"block text-sm font-medium text-gray-700"},"Tanggal Lahir",-1)),be={key:0,class:"text-red-500"},ke={class:"mb-5"},he=u(()=>a("label",{for:"agama",class:"block text-sm font-medium text-gray-700"},"Agama",-1)),ve=u(()=>a("option",{disabled:"",value:""},"Pilih Agama",-1)),fe=["value"],ye={key:0,class:"text-red-500"},xe={class:"mb-5"},we=u(()=>a("label",{for:"jenis_kelamin",class:"block text-sm font-medium text-gray-700"},"Jenis Kelamin",-1)),Ae=u(()=>a("option",{disabled:"",value:""},"Pilih Jenis Kelamin",-1)),Te=["value"],Ke={key:0,class:"text-red-500"},Ie={class:"mb-5"},Pe=u(()=>a("label",{for:"pendidikan",class:"block text-sm font-medium text-gray-700"},"Pendidikan",-1)),Se=u(()=>a("option",{disabled:"",value:""},"Pilih Pendidikan",-1)),je=["value"],Be={key:0,class:"text-red-500"},De={class:"mb-5"},Me=u(()=>a("label",{for:"pekerjaan",class:"block text-sm font-medium text-gray-700"},"Pekerjaan",-1)),Ee=u(()=>a("option",{disabled:"",value:""},"Pilih Pekerjaan",-1)),Le=["value"],Ne={key:0,class:"text-red-500"},Ue={class:"mb-5"},Re=u(()=>a("label",{for:"status_perkawinan",class:"block text-sm font-medium text-gray-700"},"Status Perkawinan",-1)),Ve=u(()=>a("option",{disabled:"",value:""},"Pilih Status Perkawinan",-1)),Oe=["value"],Ce={key:0,class:"text-red-500"},Je={class:"flex justify-between"},Fe={key:2,type:"submit",class:"text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"},He={__name:"createKepalaKeluarga",setup(v){const w=z(),A=C(),T=J(),K=parseInt(T.query.jumlah_kk,10)||1,l=x(Array.from({length:K},()=>({keluarga_id:T.query.keluarga_id||"",nama:"",nik:"",tempat_lahir:"",tanggal_lahir:"",agama:"",jenis_kelamin:"",pendidikan:"",pekerjaan:"",status_perkawinan:"",hubungan_keluarga:"Kepala Keluarga"}))),s=x(Array.from({length:K},()=>({}))),f=x({message:"",show:!1}),I=S(!1),e=S(0),B=["Islam","Kristen","Katolik","Hindu","Buddha","Khonghucu"],D=["Laki-laki","Perempuan"],M=["TIDAK / BELUM SEKOLAH","TAMAT SD / SEDERAJAT","SLTA / SEDERAJAT","SLTP/SEDERAJAT","BELUM TAMAT SD/SEDERAJAT","DIPLOMA IV/ STRATA I","DIPLOMA I / II","AKADEMI/ DIPLOMA III/S. MUDA","STRATA II","STRATA III"],E=["Belum Ditentukan","Belum/Tidak Bekerja","Pelajar/Mahasiswa","Mengurus Rumah Tangga","Buruh Harian Lepas","Buruh Peternakan","Buruh Tani/Perkebunan","Guru","Tentara Nasional Indonesia (TNI)","Kepolisian RI (POLRI)","Karyawan BUMD","Karyawan BUMN","Karyawan Honorer","Karyawan Swasta","Mekanik","Pedagang","Pegawai Negeri Sipil (PNS)","Pensiunan","Perancang Busana","Perawat","Perdagangan","Petani/Pekebun","Peternak","Sopir","Tabib","Transportasi","Tukang Batu","Tukang Cukur","Tukang Jahit","Tukang Kayu","Tukang Las/Pandai Besi","Wiraswasta"],L=["Belum Kawin","Kawin","Cerai Hidup","Cerai Mati"],y=c=>{f.message=c,f.show=!0,setTimeout(()=>{f.show=!1},3e3)},N=async c=>{const o=w.getToken;try{return(await(await fetch(`http://laravel-api.test/api/check-nik?nik=${c}`,{method:"GET",headers:{Accept:"application/json",Authorization:`Bearer ${o}`}})).json()).exists}catch(p){return console.error("Request failed:",p),!1}},U=async c=>{if(await N(l[c].nik)){y("NIK sudah ada"),s[c].nik=["NIK sudah ada"];return}const o=w.getToken;I.value=!0,s[c]={};try{const p=await fetch("http://laravel-api.test/api/anggota_keluargas",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:`Bearer ${o}`},body:JSON.stringify(l[c])}),g=await p.json();if(p.ok)await fetch(`http://laravel-api.test/api/keluargas/${l[c].keluarga_id}`,{method:"PUT",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:`Bearer ${o}`},body:JSON.stringify({kepala_keluarga:g.id})}),y("Kepala Keluarga berhasil ditambahkan!"),c===l.length-1?setTimeout(()=>{A.push({path:"/admin/nagari/alamat/create",query:{keluarga_id:l[0].keluarga_id}})},1500):P();else if(g.errors)s[c]=g.errors;else throw new Error(g.message||"Gagal menambahkan Kepala Keluarga")}catch(p){console.error("Request failed:",p)}finally{I.value=!1}},P=()=>{e.value<l.length-1&&e.value++},R=()=>{e.value>0&&e.value--};return F(()=>{l[0].keluarga_id||(y("Keluarga ID tidak tersedia"),A.push("/admin/nagari/keluarga"))}),(c,o)=>{const p=V,g=O;return r(),n("div",null,[j(p),a("div",W,[j(g),a("div",Q,[X,a("div",Y,[a("div",Z,[a("div",ee,[a("h3",ae," Form Data Kepala Keluarga "+i(e.value+1),1),a("form",{onSubmit:o[10]||(o[10]=H(t=>U(e.value),["prevent"])),class:"max-w-sm mx-auto"},[a("div",te,[se,m(a("input",{id:"keluarga_id",type:"text","onUpdate:modelValue":o[0]||(o[0]=t=>l[e.value].keluarga_id=t),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",readonly:""},null,512),[[_,l[e.value].keluarga_id]]),s[e.value]&&s[e.value].keluarga_id?(r(),n("span",le,i(s[e.value].keluarga_id[0]),1)):d("",!0)]),a("div",oe,[ne,m(a("input",{id:"nama","onUpdate:modelValue":o[1]||(o[1]=t=>l[e.value].nama=t),type:"text",class:"bg-gray-50 border border-gray-300 mt-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"},null,512),[[_,l[e.value].nama]]),s[e.value]&&s[e.value].nama?(r(),n("span",re,i(s[e.value].nama[0]),1)):d("",!0)]),a("div",ie,[ue,m(a("input",{id:"nik","onUpdate:modelValue":o[2]||(o[2]=t=>l[e.value].nik=t),type:"text",class:"block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2"},null,512),[[_,l[e.value].nik]]),s[e.value]&&s[e.value].nik?(r(),n("span",de,i(s[e.value].nik[0]),1)):d("",!0)]),a("div",ce,[me,m(a("input",{id:"tempat_lahir","onUpdate:modelValue":o[3]||(o[3]=t=>l[e.value].tempat_lahir=t),type:"text",class:"block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2"},null,512),[[_,l[e.value].tempat_lahir]]),s[e.value]&&s[e.value].tempat_lahir?(r(),n("span",pe,i(s[e.value].tempat_lahir[0]),1)):d("",!0)]),a("div",ge,[_e,m(a("input",{id:"tanggal_lahir","onUpdate:modelValue":o[4]||(o[4]=t=>l[e.value].tanggal_lahir=t),type:"date",class:"block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2"},null,512),[[_,l[e.value].tanggal_lahir]]),s[e.value]&&s[e.value].tanggal_lahir?(r(),n("span",be,i(s[e.value].tanggal_lahir[0]),1)):d("",!0)]),a("div",ke,[he,m(a("select",{id:"agama","onUpdate:modelValue":o[5]||(o[5]=t=>l[e.value].agama=t),class:"block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2"},[ve,(r(),n(k,null,h(B,t=>a("option",{key:t,value:t},i(t),9,fe)),64))],512),[[b,l[e.value].agama]]),s[e.value]&&s[e.value].agama?(r(),n("span",ye,i(s[e.value].agama[0]),1)):d("",!0)]),a("div",xe,[we,m(a("select",{id:"jenis_kelamin","onUpdate:modelValue":o[6]||(o[6]=t=>l[e.value].jenis_kelamin=t),class:"block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2"},[Ae,(r(),n(k,null,h(D,t=>a("option",{key:t,value:t},i(t),9,Te)),64))],512),[[b,l[e.value].jenis_kelamin]]),s[e.value]&&s[e.value].jenis_kelamin?(r(),n("span",Ke,i(s[e.value].jenis_kelamin[0]),1)):d("",!0)]),a("div",Ie,[Pe,m(a("select",{id:"pendidikan","onUpdate:modelValue":o[7]||(o[7]=t=>l[e.value].pendidikan=t),class:"block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2"},[Se,(r(),n(k,null,h(M,t=>a("option",{key:t,value:t},i(t),9,je)),64))],512),[[b,l[e.value].pendidikan]]),s[e.value]&&s[e.value].pendidikan?(r(),n("span",Be,i(s[e.value].pendidikan[0]),1)):d("",!0)]),a("div",De,[Me,m(a("select",{id:"pekerjaan","onUpdate:modelValue":o[8]||(o[8]=t=>l[e.value].pekerjaan=t),class:"block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2"},[Ee,(r(),n(k,null,h(E,t=>a("option",{key:t,value:t},i(t),9,Le)),64))],512),[[b,l[e.value].pekerjaan]]),s[e.value]&&s[e.value].pekerjaan?(r(),n("span",Ne,i(s[e.value].pekerjaan[0]),1)):d("",!0)]),a("div",Ue,[Re,m(a("select",{id:"status_perkawinan","onUpdate:modelValue":o[9]||(o[9]=t=>l[e.value].status_perkawinan=t),class:"block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2"},[Ve,(r(),n(k,null,h(L,t=>a("option",{key:t,value:t},i(t),9,Oe)),64))],512),[[b,l[e.value].status_perkawinan]]),s[e.value]&&s[e.value].status_perkawinan?(r(),n("span",Ce,i(s[e.value].status_perkawinan[0]),1)):d("",!0)]),a("div",Je,[e.value>0?(r(),n("button",{key:0,type:"button",onClick:R,class:"text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"}," Kembali ")):d("",!0),e.value<l.length-1?(r(),n("button",{key:1,type:"button",onClick:P,class:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"}," Selanjutnya ")):d("",!0),e.value===l.length-1?(r(),n("button",Fe," Konfirmasi ")):d("",!0)])],32)])])])])])])}}},Xe=G(He,[["__scopeId","data-v-836a46fb"]]);export{Xe as default};
