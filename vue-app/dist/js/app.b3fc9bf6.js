(function(){"use strict";var e={3491:function(e,n,t){var o=t(9242),a=t(3396);function r(e,n,t,o,r,s){const i=(0,a.up)("HeaderGlobal"),l=(0,a.up)("router-view"),c=(0,a.up)("FooterGlobal");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(i),(0,a._)("div",null,[(0,a.Wm)(l)]),(0,a.Wm)(c)],64)}var s=t(7139);const i={class:"navbar navbar-expand-lg navbar-dark bg-dark"},l={class:"container-fluid"},c=(0,a._)("a",{class:"navbar-brand",href:"#"},"Navbar",-1),u=(0,a._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,a._)("span",{class:"navbar-toggler-icon"})],-1),d={class:"collapse navbar-collapse",id:"navbarNav"},m={class:"navbar-nav me-auto mb-2 mb-lg-0"},p={class:"nav-item"},v=(0,a.Uk)("Home"),f={class:"nav-item"},g=(0,a.Uk)("Books"),h={key:0,class:"nav-item dropdown"},b=(0,a._)("a",{href:"#",class:"nav-link dropdown-toggle",id:"navBarDropDown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}," Admin ",-1),_={class:"dropdown-menu","aria-labelledby":"navBarDropDown"},k=(0,a.Uk)("Manage Users"),w=(0,a.Uk)("Add User"),y=(0,a.Uk)("Books"),S=(0,a.Uk)("Add Book"),D={class:"nav-item"},O=(0,a.Uk)("Login"),x={class:"navbar-text"};function T(e,n,t,o,r,T){const U=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("nav",i,[(0,a._)("div",l,[c,u,(0,a._)("div",d,[(0,a._)("ul",m,[(0,a._)("li",p,[(0,a.Wm)(U,{class:"nav-link active","aria-current":"page",to:"/"},{default:(0,a.w5)((()=>[v])),_:1})]),(0,a._)("li",f,[(0,a.Wm)(U,{class:"nav-link active",to:"/books"},{default:(0,a.w5)((()=>[g])),_:1})]),""!==r.store.token?((0,a.wg)(),(0,a.iD)("li",h,[b,(0,a._)("ul",_,[(0,a._)("li",null,[(0,a.Wm)(U,{class:"dropdown-item",to:"/admin/users"},{default:(0,a.w5)((()=>[k])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(U,{class:"dropdown-item",to:"/admin/users/0"},{default:(0,a.w5)((()=>[w])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(U,{class:"dropdown-item",to:"/admin/books"},{default:(0,a.w5)((()=>[y])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(U,{to:{name:"BookEdit",params:{bookId:0}},class:"dropdown-item"},{default:(0,a.w5)((()=>[S])),_:1})])])])):(0,a.kq)("",!0),(0,a._)("li",D,[""==r.store.token?((0,a.wg)(),(0,a.j4)(U,{key:0,class:"nav-link",to:"/login"},{default:(0,a.w5)((()=>[O])),_:1})):((0,a.wg)(),(0,a.iD)("a",{key:1,href:"javascript:void(0);",class:"nav-link",onClick:n[0]||(n[0]=(...e)=>T.logout&&T.logout(...e))},"Logout"))])]),(0,a._)("span",x,(0,s.zw)(r.store.user.first_name??""),1)])])])}var U=t(4870);const j=(0,U.qj)({token:"",user:{}});var B=t(2483),W=t.p+"img/StalkerLogo.19e8405b.jpg";const Z={class:"container"},q=(0,a._)("div",{class:"rov"},[(0,a._)("div",{class:"col"},[(0,a._)("img",{src:W,alt:"Stalker Books",class:"img-fluid mt-5"})])],-1),N=[q];function V(e,n){return(0,a.wg)(),(0,a.iD)("div",Z,N)}var H=t(89);const I={},A=(0,H.Z)(I,[["render",V]]);var C=A;const M={class:"container"},$={class:"rov"},F={class:"col"},P=(0,a._)("h1",{class:"mt-5"},"Login",-1),E=(0,a._)("hr",null,null,-1),L=(0,a._)("hr",null,null,-1),z=(0,a._)("input",{type:"submit",class:"btn btn-primary",value:"login"},null,-1);function G(e,n,t,o,r,s){const i=(0,a.up)("text-input"),l=(0,a.up)("form-tag");return(0,a.wg)(),(0,a.iD)("div",M,[(0,a._)("div",$,[(0,a._)("div",F,[P,E,(0,a.Wm)(l,{onMyevent:s.submitHandler,name:"myForm",event:"myevent"},{default:(0,a.w5)((()=>[(0,a.Wm)(i,{modelValue:r.email,"onUpdate:modelValue":n[0]||(n[0]=e=>r.email=e),label:"Email",type:"email",name:"email",required:"true"},null,8,["modelValue"]),(0,a.Wm)(i,{modelValue:r.password,"onUpdate:modelValue":n[1]||(n[1]=e=>r.password=e),label:"Password",type:"password",name:"password",required:"true"},null,8,["modelValue"]),L,z])),_:1},8,["onMyevent"])])])])}const J={class:"mb-3"},Y=["for"],R=["type","name","placeholder","required","min","max","value","autocomplete"];function K(e,n,t,o,r,i){return(0,a.wg)(),(0,a.iD)("div",J,[(0,a._)("label",{for:t.name,class:"form-label"},(0,s.zw)(t.label),9,Y),(0,a._)("input",{type:t.type,name:t.name,placeholder:t.placeholder,required:t.required,min:t.min,max:t.max,value:t.modelValue,autocomplete:t.name+"-new",onInput:n[0]||(n[0]=n=>e.$emit("update:modelValue",n.target.value)),class:"form-control"},null,40,R)])}var Q={name:"TextInput",props:{name:String,type:String,label:String,placeholder:String,required:String,min:String,max:String,modelValue:String}};const X=(0,H.Z)(Q,[["render",K]]);var ee=X;const ne=["event","method","action"];function te(e,n,t,r,s,i){return(0,a.wg)(),(0,a.iD)("form",{onSubmit:n[0]||(n[0]=(0,o.iM)(((...e)=>i.submit&&i.submit(...e)),["prevent"])),ref:t.name,event:t.event,autocomplete:"off",method:t.method,action:t.action,class:"needs-validation",novalidate:""},[(0,a.WI)(e.$slots,"default")],40,ne)}var oe={name:"FormTag",props:["method","action","name","event"],methods:{submit(){let e=this.$refs[this.$props.name];e.checkValidity()&&(console.log("My event name",this.$props["event"]),console.log("Name",this.$props.name),this.$emit(this.$props["event"])),e.classList.add("was-validated")}}};const ae=(0,H.Z)(oe,[["render",te]]);var re=ae,se=t(602),ie=t.n(se);let le={requireToken:function(){if(""===j.token)return on.push("/login"),!1},requestOptions:function(e){const n=new Headers;return n.append("Content-Type","application/json"),n.append("Authorization","Bearer "+j.token),{method:"POST",body:JSON.stringify(e),headers:n}}};var ce=le,ue={name:"login",components:{FormTag:re,TextInput:ee},data(){return{email:"",password:"",store:j}},methods:{submitHandler(){const e={email:this.email,password:this.password};fetch("http://localhost:8081/users/login",ce.requestOptions(e)).then((e=>e.json())).then((e=>{if(e.error)ie().alert({type:"error",text:e.message});else{console.log("Token:",e.data.token.token),j.token=e.data.token.token,j.user={id:e.data.user.id,first_name:e.data.user.first_name,last_name:e.data.user.last_name,email:e.data.user.email};let n=new Date,t=1;n.setTime(n.getTime()+24*t*60*60*1e3);const o="expires="+n.toUTCString();document.cookie="_site_data="+JSON.stringify(e.data)+"; "+o+"; path/; sameSite=strict; Secure;",on.push("/")}}))}}};const de=(0,H.Z)(ue,[["render",G]]);var me=de;const pe={class:"container"},ve=(0,a._)("div",{class:"row"},[(0,a._)("div",{class:"col"},[(0,a._)("h1",{class:"mt-3"},"Books")])],-1),fe=[ve];function ge(e,n){return(0,a.wg)(),(0,a.iD)("div",pe,fe)}const he={},be=(0,H.Z)(he,[["render",ge]]);var _e=be;const ke={class:"container"},we=(0,a._)("div",{class:"row"},[(0,a._)("div",{class:"col"},[(0,a._)("h1",{class:"mt-3"}," Book ")])],-1),ye=[we];function Se(e,n){return(0,a.wg)(),(0,a.iD)("div",ke,ye)}const De={},Oe=(0,H.Z)(De,[["render",Se]]);var xe=Oe;const Te={class:"container"},Ue=(0,a._)("div",{class:"row"},[(0,a._)("div",{class:"col"},[(0,a._)("h1",{class:"mt-3"},"Books admin")])],-1),je=[Ue];function Be(e,n){return(0,a.wg)(),(0,a.iD)("div",Te,je)}const We={},Ze=(0,H.Z)(We,[["render",Be]]);var qe=Ze;const Ne={class:"container"},Ve=(0,a._)("div",{class:"row"},[(0,a._)("div",{class:"col"},[(0,a._)("h1",{class:"mt-3"}," Book Edit ")])],-1),He=[Ve];function Ie(e,n){return(0,a.wg)(),(0,a.iD)("div",Ne,He)}const Ae={},Ce=(0,H.Z)(Ae,[["render",Ie]]);var Me=Ce;const $e={class:"container"},Fe=(0,a._)("div",{class:"row"},[(0,a._)("div",{class:"col"},[(0,a._)("h1",{class:"mt-3"}," All Users ")])],-1),Pe=[Fe];function Ee(e,n){return(0,a.wg)(),(0,a.iD)("div",$e,Pe)}const Le={},ze=(0,H.Z)(Le,[["render",Ee]]);var Ge=ze;const Je={class:"container"},Ye=(0,a._)("div",{class:"row"},[(0,a._)("div",{class:"col"},[(0,a._)("h1",{class:"mt-3"}," User ")])],-1),Re=[Ye];function Ke(e,n){return(0,a.wg)(),(0,a.iD)("div",Je,Re)}const Qe={},Xe=(0,H.Z)(Qe,[["render",Ke]]);var en=Xe;const nn=[{path:"/",name:"Home",component:C},{path:"/login",name:"Login",component:me},{path:"/book",name:"book",component:xe},{path:"/books",name:"books",component:_e},{path:"/books/:bookName",name:"book",component:xe},{path:"/admin/books",name:"booksAdmin",component:qe},{path:"/admin/books/:bookId",name:"BookEdit",component:Me},{path:"/admin/users",name:"Users",component:Ge},{path:"/admin/users/:userId",name:"User",component:en}],tn=(0,B.p7)({history:(0,B.PO)(),routes:nn});var on=tn,an={data(){return{store:j}},methods:{logout(){const e={token:j.token};fetch("http://localhost:8081/users/logout",ce.requestOptions(e)).then((e=>e.json())).then((e=>{e.error?console.log(e.message):(j.token="",j.user={},document.cookie="_site_data=; Path=/; SameSite=Strict; Secure; Expires=Thu, 01 Jan 1970 00:00:01 GMT;",on.push("/login"))}))}}};const rn=(0,H.Z)(an,[["render",T]]);var sn=rn;const ln={class:"d-flex align-items-center justify-content-center mt-5"};function cn(e,n){return(0,a.wg)(),(0,a.iD)("footer",ln," Copyright © "+(0,s.zw)((new Date).getFullYear()),1)}const un={},dn=(0,H.Z)(un,[["render",cn],["__scopeId","data-v-705adda8"]]);var mn=dn;const pn=e=>document.cookie.split("; ").reduce(((n,t)=>{const o=t.split("=");return o[0]===e?decodeURIComponent(o[1]):n}),"");var vn={name:"App",components:{HeaderGlobal:sn,FooterGlobal:mn},data(){return{store:j}},beforeMount(){let e=pn("_site_data");if(""!==e){let n=JSON.parse(e);j.token=n.token.token,j.user={id:n.user.id,first_name:n.user.first_name,last_name:n.user.last_name,email:n.user.email}}},mounted(){const e={foo:"bar"},n=new Headers;n.append("Content-Type","application/json"),n.append("Authorization","Bearer "+j.token);const t={method:"POST",body:JSON.stringify(e),headers:n};fetch("http://localhost:8081/admin/foo",t).then((e=>e.json())).then((e=>{console.log(e)}))}};const fn=(0,H.Z)(vn,[["render",r]]);var gn=fn;(0,o.ri)(gn).use(on).mount("#app")}},n={};function t(o){var a=n[o];if(void 0!==a)return a.exports;var r=n[o]={exports:{}};return e[o].call(r.exports,r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(n,o,a,r){if(!o){var s=1/0;for(u=0;u<e.length;u++){o=e[u][0],a=e[u][1],r=e[u][2];for(var i=!0,l=0;l<o.length;l++)(!1&r||s>=r)&&Object.keys(t.O).every((function(e){return t.O[e](o[l])}))?o.splice(l--,1):(i=!1,r<s&&(s=r));if(i){e.splice(u--,1);var c=a();void 0!==c&&(n=c)}}return n}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[o,a,r]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.p="/"}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,o){var a,r,s=o[0],i=o[1],l=o[2],c=0;if(s.some((function(n){return 0!==e[n]}))){for(a in i)t.o(i,a)&&(t.m[a]=i[a]);if(l)var u=l(t)}for(n&&n(o);c<s.length;c++)r=s[c],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(u)},o=self["webpackChunkvue_app"]=self["webpackChunkvue_app"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(3491)}));o=t.O(o)})();
//# sourceMappingURL=app.b3fc9bf6.js.map