import{u as i,f as n,o as r,a as d,c as _,b as t,t as o,d as s}from"./index.c20ffc77.js";const m={class:"flex justify-between flex-col gap-16 sm:flex-row mt-8 lg:mt-0"},h={class:"lg:w-4/5"},x=t("div",{class:"p-3 inline-block relative -top-5 bg-black text-white"},[t("h3",{class:"ml-8 font-bold"},"Project")],-1),g={class:"container ml-2 lg:ml-6 bg-slate-50 px-4 py-2 lg:px-24 lg:py-6"},p={class:"text-md sm:text-lg lg:text-2xl"},b={class:"text-lg sm:text-xl lg:text-3xl font-bold mt-3"},u={class:"mt-2 text-sm sm:text-base text-justify"},f=t("p",{class:"font-bold mt-2 block"},"Tech and tools:",-1),v={class:"inline ml-2"},y={class:"flex flex-wrap"},k=["href"],w={class:"mx-2 relative -top-5"},j=["src","alt"],R={__name:"ViewProyectDetails",setup(B){const l=i(),c=n();let e=l.getters.getprojectbyId(c.params.id);const a=new URL(e.img,import.meta.url).href;return r(()=>{document.title=`Project | ${e.title}`}),(P,S)=>(d(),_("div",m,[t("div",h,[x,t("div",g,[t("h3",p,o(s(e).title),1),t("h3",b,o(s(e).short_desc),1),t("p",u,o(s(e).description),1),f,t("p",v,o(s(e).tech),1),t("div",y,[t("a",{href:s(e).github,target:"_blank",class:"bg-gray-50 hover:bg-gray-800 text-center hover:text-white font-bold border-2 border-black block lg:inline-block mt-2 mr-4 px-3 py-1 transition"},"See it on Github",8,k)])])]),t("div",w,[t("img",{src:s(a),alt:s(e).title,class:"mx-auto lg:max-w-2xl lg:ml-auto lg:mr-8"},null,8,j)])]))}};export{R as default};
