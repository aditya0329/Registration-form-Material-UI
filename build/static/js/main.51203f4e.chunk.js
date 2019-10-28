(window["webpackJsonpfrontend-ui"]=window["webpackJsonpfrontend-ui"]||[]).push([[0],{63:function(e,t,a){e.exports=a(81)},68:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(9),o=a.n(i),l=(a(68),a(24)),s=a(124),c=a(120),m=a(15),u=Object(r.createContext)([{},function(){}]),d=function(e){var t=Object(r.useState)({user:{username:"",email:"",password:"",confirmPassword:"",birthdate:(new Date).toISOString().slice(0,10),bio:"",website:"",acceptTerms:!1,newsletter:!1},errors:{}}),a=Object(m.a)(t,2),i=a[0],o=a[1];return n.a.createElement(u.Provider,{value:[i,o]},e.children)},p=a(129),g=function(e){var t=Object(r.useContext)(u),a=Object(m.a)(t,1)[0].user;return n.a.createElement(c.a,{container:!0,spacing:2},n.a.createElement(c.a,{item:!0,xs:12},n.a.createElement(p.a,{id:"bio",label:"Bio",value:a.bio,name:"bio",placeholder:"Type few words about you",variant:"outlined",margin:"normal",multiline:!0,InputLabelProps:{shrink:!0},inputProps:{maxLength:200},fullWidth:!0,rows:3})),n.a.createElement(c.a,{item:!0,xs:12},n.a.createElement(p.a,{id:"website",label:"Website",name:"website",type:"url",value:a.website,placeholder:"Type URL address of your website",helperText:"URL address should start with http://... or https://...",variant:"outlined",margin:"normal",InputLabelProps:{shrink:!0},fullWidth:!0})))},b=a(133),h=function(e){var t=Object(r.useContext)(u),a=Object(m.a)(t,1)[0],i=a.user,o=a.errors,l=new Date;return l.setFullYear(l.getFullYear()-18),n.a.createElement(c.a,{container:!0,spacing:2},n.a.createElement(c.a,{item:!0,xs:12},n.a.createElement(p.a,{placeholder:"Type your username here",name:"username",label:"Username",value:i.username,variant:"outlined",InputLabelProps:{shrink:!0},required:!0,inputProps:{minLength:3,maxLength:20},error:!!o.username,fullWidth:!0})),n.a.createElement(c.a,{item:!0,xs:12},n.a.createElement(p.a,{placeholder:"Type your email here",name:"email",label:"Email",value:i.email,type:"email",variant:"outlined",margin:"normal",InputLabelProps:{shrink:!0},error:!!o.email,required:!0,fullWidth:!0})),n.a.createElement(c.a,{item:!0,xs:12},n.a.createElement(p.a,{type:"date",name:"birthdate",id:"birthdate",label:"Birthdate",defaultValue:i.birthdate,helperText:"You need to be at least 18 years old",variant:"outlined",margin:"normal",InputLabelProps:{shrink:!0},inputProps:{min:"1920-01-01",max:l.toISOString().slice(0,10)},error:!!o.birthdate,required:!0,fullWidth:Object(b.a)("sm")})),n.a.createElement(c.a,{item:!0,xs:12,lg:6},n.a.createElement(p.a,{placeholder:"Type your password here",name:"password",label:"Password",value:i.password,type:"password",variant:"outlined",margin:"normal",InputLabelProps:{shrink:!0},required:!0,error:!!o.password,inputProps:{minLength:6,maxLength:20},fullWidth:!0})),n.a.createElement(c.a,{item:!0,xs:12,lg:6},n.a.createElement(p.a,{placeholder:"Re-type your password here",label:"Password",name:"confirmPassword",value:i.confirmPassword,type:"password",variant:"outlined",margin:"normal",InputLabelProps:{shrink:!0},error:!!o.confirmPassword,inputProps:{minLength:6,maxLength:20},required:!0,fullWidth:!0})))},E=a(54),f=a(125),v=a(131),w=Object(s.a)((function(e){return{summary:{padding:e.spacing(3),border:"1px solid #ddd",marginBottom:e.spacing(2)}}})),y=function(e){var t=w(),a=Object(r.useContext)(u),i=Object(m.a)(a,1)[0],o=i.user,l=o.username,s=o.email,d=o.birthdate,p=o.bio,g=o.website;return n.a.createElement(r.Fragment,null,n.a.createElement(c.a,{container:!0,className:t.summary},n.a.createElement(c.a,{item:!0,xs:12},n.a.createElement(E.a,{variant:"h4"},"Summary")),n.a.createElement(c.a,{item:!0,xs:12},n.a.createElement(E.a,{variant:"h6"},"Username"),n.a.createElement(E.a,{variant:"body2"},l)),n.a.createElement(c.a,{item:!0,xs:12},n.a.createElement(E.a,{variant:"h6"},"Email"),n.a.createElement(E.a,{variant:"body2"},s)),n.a.createElement(c.a,{item:!0,xs:12},n.a.createElement(E.a,{variant:"h6"},"Birthdate"),n.a.createElement(E.a,{variant:"body2"},d)),n.a.createElement(c.a,{item:!0,xs:12},n.a.createElement(E.a,{variant:"h6"},"Bio"),n.a.createElement(E.a,{variant:"body2"},p||"-")),n.a.createElement(c.a,{item:!0,xs:12},n.a.createElement(E.a,{variant:"h6"},"Website"),n.a.createElement(E.a,{variant:"body2"},g||"-"))),n.a.createElement(c.a,{container:!0},n.a.createElement(c.a,{item:!0,xs:12},n.a.createElement(f.a,{control:n.a.createElement(v.a,{checked:i.user.newsletter,color:"primary",name:"newsletter"}),label:"Sign me up for Newsletter, to receive regular updates."})),n.a.createElement(c.a,{item:!0,xs:12},n.a.createElement(f.a,{control:n.a.createElement(v.a,{checked:i.user.acceptTerms,required:!0,color:"primary",name:"acceptTerms"}),label:"I accept terms and conditions"}))))},O=a(126),x=Object(s.a)((function(e){return{root:{padding:e.spacing(3),border:"1px solid #ddd",marginBottom:e.spacing(2),textAlign:"center"},title:{padding:e.spacing(5,0)}}})),j=function(){var e=x();return n.a.createElement(r.Fragment,null,n.a.createElement(E.a,{variant:"h5",className:e.title},"Congratulation! You completed registration process."),n.a.createElement(O.a,{variant:"contained",color:"primary",onClick:function(){window.location.reload()}},"Reload"))},P=a(130),k=a(136),C=a(128),N=a(53),S=a.n(N),L=a(134),I=a(127),B=a(132),T=a(135);function W(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function D(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?W(a,!0).forEach((function(t){Object(l.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):W(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var q=Object(s.a)((function(e){var t;return{root:(t={padding:0},Object(l.a)(t,e.breakpoints.up("md"),{padding:e.spacing(8,12)}),Object(l.a)(t,e.breakpoints.up("sm"),{padding:e.spacing(4,6)}),t),center:{textAlign:"center"},content:{padding:e.spacing(3,0,3,5)},buttonsContainer:{margin:e.spacing(2,0)},button:{marginRight:e.spacing(2)},error:{backgroundColor:e.palette.error.dark},message:{display:"flex",alignItems:"center"},icon:{marginRight:e.spacing(1)}}})),R=["Basic information","User details","Summary"],U=function(e){var t=n.a.useState(!1),a=Object(m.a)(t,2),i=a[0],o=a[1],s=q(),c=n.a.useState(0),d=Object(m.a)(c,2),p=d[0],b=d[1],f=n.a.useState({}),v=Object(m.a)(f,1)[0],w=n.a.useState(!1),x=Object(m.a)(w,2),N=x[0],W=x[1],U=Object(r.useContext)(u),F=Object(m.a)(U,2),V=F[0],Y=F[1],A=function(){b((function(e){return e-1}))},H=function(e){e.preventDefault(),p<R.length-1?b((function(e){return e+1})):o(!0)},M=function(e){v[e.target.name]=e.target.validationMessage,Y(D({},V,{errors:D({},v)})),W(!0)},J=function(e){if("confirmPassword"===e.target.name&&e.target.value!==V.user.password?e.target.setCustomValidity("Passwords are not matching"):e.target.setCustomValidity(""),"password"===e.target.name){var t=e.target.form.querySelector("input[name='confirmPassword']");e.target.value===V.user.confirmPassword?(delete v[t.name],t.setCustomValidity("")):(t.setCustomValidity("Passwords are not matching"),v[t.name]=t.validationMessage)}e.target.validity.valid?delete v[e.target.name]:v[e.target.name]=e.target.validationMessage;var a="checkbox"===e.target.type?e.target.checked:e.target.value;Y(D({},V,{user:D({},V.user,Object(l.a)({},e.target.name,a)),errors:D({},v)}))};return n.a.createElement(r.Fragment,null,!i&&n.a.createElement(P.a,{className:s.root},n.a.createElement(L.a,{activeStep:p,orientation:"vertical"},R.map((function(e,t){var a={};return 1===t&&(a.optional=n.a.createElement(E.a,{variant:"caption"},"Optional")),n.a.createElement(I.a,{key:t},n.a.createElement(B.a,a,e),n.a.createElement(T.a,null,n.a.createElement("form",{onSubmit:H,onInvalid:M,onChange:J,className:s.content},function(e){switch(e){case 0:return n.a.createElement(h,null);case 1:return n.a.createElement(g,null);case 2:return n.a.createElement(y,null);default:return"Unknown step"}}(p),n.a.createElement("div",{className:s.buttonsContainer},n.a.createElement(O.a,{disabled:0===p,className:s.button,variant:"contained",onClick:A},"Back"),p<R.length-1&&n.a.createElement(O.a,{type:"submit",className:s.button,variant:"contained",color:"primary"},"Next"),p===R.length-1&&n.a.createElement(O.a,{type:"submit",className:s.button,variant:"contained",color:"primary"},"Submit")))))})))),n.a.createElement(k.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},resumeHideDuration:3e3,autoHideDuration:3e3,onClose:function(){W(!1)},open:N},n.a.createElement(C.a,{className:(s.error,s.error),message:n.a.createElement("span",{className:s.message},n.a.createElement(S.a,{className:s.icon}),"Please correct the data")})),i&&n.a.createElement(P.a,{className:(s.root,s.center)},n.a.createElement(j,null)))},F=Object(s.a)((function(e){return{root:Object(l.a)({minHeight:"100vh",alignContent:"stretch"},e.breakpoints.down("sm"),{alignContent:"flex-start"}),header:Object(l.a)({padding:e.spacing(5),display:"flex",flexDirection:"column",justifyContent:"center",textAlign:"center",backgroundColor:e.palette.primary.main},e.breakpoints.down("sm"),{flexGrow:1}),title:{color:e.palette.primary.contrastText,marginBottom:e.spacing(1)},subtitle:{color:e.palette.primary.light},toolbar:{justifyContent:"center"}}}));var V=function(){var e=F();return n.a.createElement(d,null,n.a.createElement(c.a,{container:!0,className:e.root},n.a.createElement(c.a,{item:!0,className:e.header,xs:12,md:4},n.a.createElement(E.a,{variant:"h3",className:e.title},"Registration"),n.a.createElement(E.a,{variant:"h5",className:e.subtitle},"Complete all 3 steps to finish registration process")),n.a.createElement(c.a,{item:!0,xs:12,md:8},n.a.createElement(U,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[63,1,2]]]);
//# sourceMappingURL=main.51203f4e.chunk.js.map