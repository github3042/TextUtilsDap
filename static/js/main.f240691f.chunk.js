(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),o=a(14),n=a.n(o),l=(a(22),a(9)),r=(a(23),a(0));function i(e){var t={color:"dark"===e.mode?"white":"black",backgroundColor:"dark"===e.mode?"#04232C":"white"};return Object(r.jsxs)("div",{className:"container my-3",children:[Object(r.jsx)("h1",{className:"my-3",style:{color:"dark"===e.mode?"white":"black"},children:"About Us"}),Object(r.jsxs)("div",{className:"accordion",id:"accordionExample",children:[Object(r.jsxs)("div",{className:"accordion-item",children:[Object(r.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(r.jsx)("button",{className:"accordion-button",style:t,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:Object(r.jsx)("strong",{children:"Analyze your text"})})}),Object(r.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(r.jsxs)("div",{className:"accordion-body",style:t,children:[Object(r.jsx)("strong",{children:"This is the first item's accordion body."})," It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(r.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(r.jsxs)("div",{className:"accordion-item",children:[Object(r.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(r.jsx)("button",{className:"accordion-button collapsed",style:t,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:Object(r.jsx)("strong",{children:" Free to use"})})}),Object(r.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(r.jsxs)("div",{className:"accordion-body",style:t,children:[Object(r.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(r.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(r.jsxs)("div",{className:"accordion-item",children:[Object(r.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(r.jsx)("button",{className:"accordion-button collapsed",style:t,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:Object(r.jsx)("strong",{children:"Browser Compatible"})})}),Object(r.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(r.jsxs)("div",{className:"accordion-body",style:t,children:[Object(r.jsx)("strong",{children:"This is the third item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(r.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]})]})]})}function d(e){return Object(r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"/navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(r.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(r.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(r.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(r.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Mode"})]})]})]})})}function h(e){return Object(r.jsx)("div",{style:{height:"40px"},children:e.alert&&Object(r.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(r.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),":",e.alert.msg]})})}function b(e){var t=Object(s.useState)(""),a=Object(l.a)(t,2),c=a[0],o=a[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"container ",style:{color:"dark"===e.mode?"white":"#000752"},children:[Object(r.jsxs)("div",{className:"mb-3",children:[Object(r.jsx)("h2",{className:"mb-2",children:e.heading}),Object(r.jsx)("textarea",{className:"form-control",value:c,style:{backgroundColor:"dark"===e.mode?"#045F5F":"white",color:"dark"===e.mode?"white":"#000752",border:"2px solid black",textDecorationColor:"none"},onChange:function(e){o(e.target.value)},id:"myBox",rows:"8"})]}),Object(r.jsx)("button",{disabled:0===c.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=c.toUpperCase();o(t),e.showAlert(" Converted to UpperCase!","success")},children:"Convert to UpperCase"}),Object(r.jsx)("button",{disabled:0===c.length,className:"btn btn-primary mx-1 my-1",onClick:function(t){var a=c.toLowerCase();o(a),e.showAlert(" Converted to LowerCase!","success")},children:"Convert to LowerCase"}),Object(r.jsx)("button",{disabled:0===c.length,className:"btn btn-primary mx-1 my-1 ",onClick:function(t){var a=c.split(/[ ]+/);o(a.join(" ")),e.showAlert(" Extra Spaces has been Removed!","success")},children:"Remove Extra Spaces"}),Object(r.jsx)("button",{disabled:0===c.length,className:"btn btn-primary mx-1 my-1 ",onClick:function(){o(" "),e.showAlert(" Text has been Cleared!","success")},children:"Clear Text"}),Object(r.jsx)("button",{disabled:0===c.length,className:"btn btn-primary mx-1 my-1 ",onClick:function(t){var a=document.getElementById("myBox");a.select(),navigator.clipboard.writeText(a.value),document.getSelection().removeAllRanges(),e.showAlert(" Text has been Copied!","success")},children:"Copy Text"})]}),Object(r.jsxs)("div",{className:"container my-2",style:{color:"dark"===e.mode?"white":"#000752"},children:[Object(r.jsx)("h2",{children:"Your text summary"}),Object(r.jsxs)("p",{children:[c.split(" ").filter((function(e){return 0!==e.length})).length," words and ",c.length," characters"]}),Object(r.jsxs)("p",{children:[.008*c.split(" ").filter((function(e){return 0!==e.length})).length," Minutes read"]}),Object(r.jsx)("h3",{children:"Preview"}),Object(r.jsx)("p",{children:c.length>0?c:"Nothing to preview.."})]})]})}d.defaultProps={title:" Set title hear ",aboutText:"About"};var j=a(15),m=a(2);var u=function(){var e=Object(s.useState)("light"),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(s.useState)(null),n=Object(l.a)(o,2),u=n[0],p=n[1],x=function(e,t){p({msg:e,type:t}),setTimeout((function(){p(null)}),1500)};return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(j.a,{children:[Object(r.jsx)(d,{title:"TextUtilse",mode:a,toggleMode:function(){"light"===a?(c("dark"),document.body.style.backgroundColor="#151B54",x(" Dark mode has been enabled","success")):(c("light"),document.body.style.backgroundColor="white",x(" Light mode has been enabled","success"))}}),Object(r.jsx)(h,{alert:u}),Object(r.jsx)("div",{className:"container my-3",children:Object(r.jsxs)(m.c,{children:[Object(r.jsx)(m.a,{exact:!0,path:"/About",children:Object(r.jsx)(i,{mode:a})}),Object(r.jsx)(m.a,{exact:!0,path:"/",children:Object(r.jsx)(b,{showAlert:x,heading:"TextUtils- Word Counter, Character Counter, Remove Extra Spaces",mode:a})})]})})]})})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,o=t.getLCP,n=t.getTTFB;a(e),s(e),c(e),o(e),n(e)}))};n.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(u,{})}),document.getElementById("root")),p()}},[[30,1,2]]]);
//# sourceMappingURL=main.f240691f.chunk.js.map