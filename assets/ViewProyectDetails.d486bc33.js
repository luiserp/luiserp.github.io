import{u as i,f as r,o as n,a as d,c as _,b as t,t as o,d as s}from"./index.503a3729.js";const m={class:"flex justify-between flex-col gap-8 lg:flex-row mt-8"},x={class:"lg:w-4/5 overflow-hidden pt-6"},h=t("div",{class:"p-3 inline-block relative -top-5 bg-black dark:bg-ping_dark_color dark:text-black text-white"},[t("h3",{class:"ml-8 font-bold"},"Project")],-1),p={class:"lg:container ml-2 lg:ml-6 bg-slate-50 dark:bg-primary_dark_color_theme px-4 py-2 lg:px-10 lg:py-6"},g={class:"text-md sm:text-lg lg:text-2xl"},b={class:"text-lg sm:text-xl lg:text-3xl font-bold mt-3"},u={class:"mt-2 text-base sm:text-base text-justify"},f=t("p",{class:"font-bold mt-2 block"},"Tech and tools:",-1),k={class:"inline ml-2"},w={class:"flex flex-wrap"},v=["href"],y={class:"mx-2 relative -top-5"},j=["src","alt"],R={__name:"ViewProyectDetails",setup(B){const l=i(),a=r();let e=l.getters.getprojectbyId(a.params.id);const c=new URL(e.img,import.meta.url).href;return n(()=>{document.title=`Project | ${e.title}`}),(P,S)=>(d(),_("div",m,[t("div",x,[h,t("div",p,[t("h3",g,o(s(e).title),1),t("h3",b,o(s(e).short_desc),1),t("p",u,o(s(e).description),1),f,t("p",k,o(s(e).tech),1),t("div",w,[t("a",{href:s(e).github,target:"_blank",class:"btn"},"See it on Github",8,v)])])]),t("div",y,[t("img",{src:s(c),alt:s(e).title,class:"mx-auto max-w-sxs md:max-w-xl lg:ml-auto lg:mr-8"},null,8,j)])]))}};export{R as default};
