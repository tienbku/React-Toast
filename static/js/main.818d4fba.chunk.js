(this["webpackJsonpreact-toast-notify"]=this["webpackJsonpreact-toast-notify"]||[]).push([[0],{27:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),c=n.n(a),i=n(15),s=n.n(i),l=(n(27),n(4)),o=n(2),u=n(8),d=n(20),b=n(5),j={primarygray:{base:"text-white hover:bg-gray-600 bg-gray-500"},primaryred:{base:"text-white hover:bg-red-600 bg-red-500"},primaryorange:{base:"text-white hover:bg-oragne-600 bg-oragne-500"},primarygreen:{base:"text-white hover:bg-green-600 bg-green-500"},primaryblue:{base:"text-white hover:bg-blue-600 bg-blue-500"},secondaryblue:{base:"text-blue-500 hover:bg-gray-200 bg-gray-100"},invisible:{base:""}};function x(e){var t=e.children,n=e.variant,a=void 0===n?"primarygray":n,c=e.isloading,i=(e.loadingPlaceholder,e.icon),s=e.disabled,l=e.onClick,x=Object(d.a)(e,["children","variant","isloading","loadingPlaceholder","icon","disabled","onClick"]),f=j[a]||j.primarygray;return Object(r.jsx)("button",Object(u.a)(Object(u.a)({onClick:function(e){l&&l(e)},disabled:s||c},x),{},{className:Object(o.a)("flex-no-wrap \n        bg-transparent \n        px-1 my-auto\n        h-full  \n        font-semibold \n        border \n        rounded-md \n        outline-none focus:outline-none \n        transition \n        border-transparent \n        duration-200 ",f.base,x.className),children:Object(r.jsx)("div",{className:"p-1 text-xs md:text-sm w-full",children:i?Object(r.jsxs)("div",{className:"flex my-auto flex-nowrap gap-x-2",children:[Object(r.jsx)("div",{className:"flex mx-auto my-auto",children:Object(r.jsx)(b.a,{className:Object(o.a)("flex mx-auto justify-center"),icon:i})}),t&&Object(r.jsx)("div",{className:"flex mx-auto my-auto text-center",children:t||null})]}):t})}))}var f=n(13),m=n.n(f),h=n(16),v=n(14),O=n(6),p={Info:{base:"bg-white border-blue-500",iconstyle:"text-blue-500 ",icon:O.c,name:"Info"},Error:{base:"bg-white border-red-500 ",iconstyle:"text-red-500 ",icon:O.b,name:"Error"},Warning:{base:"bg-white border-yellow-500",iconstyle:"text-yellow-500 ",icon:O.b,name:"Warning"},Success:{base:"bg-white border-green-500",iconstyle:"text-green-500 ",icon:O.a,name:"Success"}};function y(e){var t=e.id,n=e.header,c=e.message,i=e.lifetime,s=e.onRemove,l=e.truncate,u=void 0===l?"truncate-1-lines":l,d=e.icon,j=e.type,x=j?p[j]:{base:"bg-white border-gray-600 ",iconstyle:"",icon:d,name:n};return Object(a.useEffect)((function(){i&&s&&setTimeout((function(){s(t)}),i)}),[i]),Object(r.jsx)("div",{className:Object(o.a)("flex w-full visible flex-row shadow-lg","border-l-4 rounded-md duration-100 cursor-pointer","transform transition-all hover:scale-102",x.base,j&&"max-h-40"),children:Object(r.jsxs)("div",{className:"flex flex-row p-2 flex-no-wrap w-full",children:[x.icon&&Object(r.jsx)("div",{className:Object(o.a)("flex items-center h-12 w-12","mx-auto text-xl select-none"),children:Object(r.jsx)(b.a,{className:Object(o.a)("mx-auto",x.iconstyle),icon:x.icon})}),Object(r.jsxs)("div",{className:"flex flex-col flex-no-wrap px-1 w-full",children:[Object(r.jsx)("div",{className:"flex my-auto font-bold select-none",children:x.name}),Object(r.jsx)("p",{className:Object(o.a)("-mt-0.5 my-auto break-all flex","text-gray-600 text-sm","string"===typeof c&&u),children:c})]}),Object(r.jsx)("div",{onClick:function(){return s&&s(t)},className:Object(o.a)("w-10 h-12 mr-2 items-center mx-auto","text-center leading-none text-lg"),children:Object(r.jsx)(b.a,{className:Object(o.a)("mx-auto my-auto h-full text-center text-gray-600","cursor-pointer hover:scale-105 transform "),icon:O.d})})]})})}var g={top_left:{style:"top-0 left-0"},top_right:{style:"top-0 right-0"},bottom_right:{style:"bottom-0 right-0"},bottom_left:{style:"bottom-0 left-0"},top_middle:{style:"top-0 left-1/2 -translate-x-1/2 transform"},bottom_middle:{style:"bottom-0 left-1/2 -translate-x-1/2 transform"},undefined:{style:"top-0 right-0"}};function w(e){var t=e.variant,n=void 0===t?"top_right":t,c=Object(a.useContext)(N),i=g[n]||g.top_right;function s(e){null===c||void 0===c||c.remove(e)}return Object(r.jsx)("div",{className:Object(o.a)(i.style,"fixed z-50 w-full md:max-w-sm","p-4 md:p-4 max-h-screen overflow-hidden pointer-events-none"),children:Object(r.jsx)("div",{className:Object(o.a)("flex-1 flex-col fade w-full mr-8 justify-end pointer-events-none"),children:null===c||void 0===c?void 0:c.data.map((function(e){return Object(r.jsx)("div",{className:Object(o.a)("flex py-1 w-full","transform transition-all duration-300 pointer-events-auto"),children:Object(r.jsx)(y,{id:e.id,message:e.message,type:e.type,header:e.header,icon:e.icon,truncate:e.truncate,onRemove:s,lifetime:e.lifetime})},e.id)}))})})}var N=c.a.createContext(void 0);function k(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}))}function C(e){var t=e.children,n=e.variant,c=Object(a.useState)([]),i=Object(l.a)(c,2),s=i[0],o=i[1],u=Object(a.useCallback)((function(e,t,n,r){if(e){var a={id:k(),message:e,type:t,lifetime:n||2500,truncate:r};o((function(e){return[].concat(Object(v.a)(e),[a])}))}}),[o,s]),d=Object(a.useCallback)((function(e,t,n,r){if(e){var a={id:k(),message:e,lifetime:t||2500,truncate:n,icon:r,type:void 0};o((function(e){return[].concat(Object(v.a)(e),[a])}))}}),[o,s]),b=Object(a.useCallback)((function(e,t,n){return u(e,"Error",t,n)}),[u]),j=Object(a.useCallback)((function(e,t,n){return u(e,"Warning",t,n)}),[u]),x=Object(a.useCallback)((function(e,t,n){return u(e,"Success",t,n)}),[u]),f=Object(a.useCallback)((function(e,t,n){return u(e,"Info",t,n)}),[u]),O=Object(a.useCallback)((function(){return{data:s,pushError:b,pushWarning:j,pushSuccess:x,pushInfo:f,push:u,pushCustom:d,remove:function(e){return Object(h.a)(m.a.mark((function t(){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o((function(t){return t.filter((function(t){return t.id!=e}))}));case 1:case"end":return t.stop()}}),t)})))()}}}),[s,o,b,j,x,f,u,d]);return Object(r.jsxs)(N.Provider,{value:O(),children:[Object(r.jsx)(w,{variant:n}),t]})}var _=c.a.createContext(void 0);function I(e){var t=e.children,n=e.onChange,c=e.initinal,i=e.justify_end,s=void 0!==i&&i,u=e.value,d=Object(a.useState)(!1),b=Object(l.a)(d,2),j=b[0],x=b[1],f=Object(a.useState)(c),m=Object(l.a)(f,2),h=m[0],v=m[1];Object(a.useEffect)((function(){n&&n(h)}),[h,n]);var O=Object(a.useRef)(null);!function(e,t){Object(a.useEffect)((function(){function n(n){e.current&&!e.current.contains(n.target)&&t()}return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[e])}(O,(function(){x(!1)}));var p=Object(a.useCallback)((function(e){v(e),x(!1)}),[]),y=Object(a.useCallback)((function(){return{onSelect:p}}),[]);return Object(r.jsx)(_.Provider,{value:y(),children:Object(r.jsxs)("div",{ref:O,onMouseDown:function(e){e.preventDefault(),x((function(e){return!e}))},className:Object(o.a)("flex flex-col w-full border-2 border-transparent","hover:border-gray-300 transition duration-150","focus:border-blue-500 rounded-md cursor-pointer"),children:[Object(r.jsx)("div",{className:Object(o.a)("flex px-1",s&&"justify-end"),children:u||h}),Object(r.jsx)("div",{className:" h-full relative",children:1==j&&Object(r.jsx)("div",{className:Object(o.a)("flex flex-col absolute z-10","rounded-md shadow-xl bg-white","border border-gray-200 mt-1 buttom-0"),children:t})})]})})}var S=n(17),E=n(18),L=n(21),P=n(19),T=function(e){Object(L.a)(n,e);var t=Object(P.a)(n);function n(){return Object(S.a)(this,n),t.apply(this,arguments)}return Object(E.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",Object(u.a)({},this.props))}}]),n}(c.a.Component);function M(e){var t=e.children,n=e.value,c=Object(a.useContext)(_);return Object(r.jsx)(T,{onMouseDown:function(e){e.preventDefault(),e.stopPropagation(),null===c||void 0===c||c.onSelect(n)},myval:n,className:"hover:bg-gray-100 py-0.5 px-2 cursor-pointer",children:t})}function R(e){var t=e.src,n=e.lable,c=e.icon,i=Object(a.useState)(!0),s=Object(l.a)(i,2),u=s[0],d=s[1],j=Object(a.useState)(!1),x=Object(l.a)(j,2),f=x[0],m=x[1],h=Object(a.useRef)(null);return Object(a.useEffect)((function(){var e;(null===h||void 0===h||null===(e=h.current)||void 0===e?void 0:e.complete)&&d(!1)}),[]),Object(r.jsxs)("div",{className:Object(o.a)("flex shadow-md select-none flex-no-wrap text-lg","uppercase text-gray-800 font-semibold "," mx-auto my-auto bg-gray-100","items-center justify-center w-10 h-10 rounded-full"),children:[Object(r.jsx)("div",{className:Object(o.a)("rounded-full","font-normal"),style:{display:u?"block":"none"},children:c?Object(r.jsx)(b.a,{className:"flex mx-auto justify-center",icon:c}):Object(r.jsx)("div",{children:n})}),Object(r.jsx)("div",{className:"flex w-full h-full",style:{display:u?"none":"block"},children:void 0!==t&&null!==t&&!f&&Object(r.jsx)("img",{alt:"User avatar",ref:h,className:Object(o.a)("w-full h-full rounded-full"),src:t||void 0,onLoad:function(e){return d(!1)},onError:function(e){return m(!0)}})})]})}function B(){return Object(r.jsx)("div",{className:"flex flex-col h-full",children:Object(r.jsxs)("div",{className:"flex flex-row py-2 space-x-5 items-center mx-2",children:[Object(r.jsxs)("div",{className:Object(o.a)("flex flex-col relative py-2 text-base","justify-start w-14 "),children:[Object(r.jsx)("div",{className:Object(o.a)("flex flex-col uppercase mx-auto text-white","select-none my-auto"),children:Object(r.jsx)(R,{src:"https://avatars2.githubusercontent.com/u/54806834?s=60&v=4",lable:"DK"})}),Object(r.jsx)("div",{className:Object(o.a)("flex px-2 mx-auto items-center justify-center text-center ","bottom-0 justify-center py-0.5 bg-gray-500 text-white rounded-full","break-normal text-xs leading-none mt-3 font-bold","flex -mt-2 text-xs "),children:"Dalibor"})]}),Object(r.jsxs)("div",{className:"flex flex-col text-gray-500 ",children:[Object(r.jsx)("span",{className:"font-semibold",children:"This is custom toast"}),Object(r.jsx)("p",{className:"mt-1",children:"Builded by using React hooks and context API"})]})]})})}var D=c.a.createContext(void 0),W=function(e){var t=e.children,n=Object(a.useState)({variant:"top_right"}),c=Object(l.a)(n,2),i=c[0],s=c[1];return Object(r.jsx)(D.Provider,{value:{position:i,setPosition:s},children:Object(r.jsx)(C,{variant:i.variant,children:t})})},A="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";function z(){var e=Object(a.useContext)(N),t=Object(a.useState)(1500),n=Object(l.a)(t,2),c=n[0],i=n[1],s=Object(a.useState)("top_right"),u=Object(l.a)(s,2),d=u[0],b=u[1],j=Object(a.useContext)(D);return Object(a.useEffect)((function(){null===j||void 0===j||j.setPosition({variant:d})}),[d]),Object(r.jsx)("div",{className:Object(o.a)("mx-auto relative my-auto p-5 bg-white","shadow-md rounded-md border border-gray-200 "),children:Object(r.jsxs)("div",{className:"flex flex-col my-auto h-full space-y-5",children:[Object(r.jsxs)("div",{className:"flex justify-between",children:[Object(r.jsxs)("div",{className:"flex flex-col space-y-3 w-32",children:[Object(r.jsx)(J,{name:"Duration:"}),Object(r.jsx)("div",{className:Object(o.a)("flex flex-row space-x-1 md:space-x-5 w-full","align-middle my-auto "),children:Object(r.jsxs)(I,{initinal:c,onChange:function(e){return i(e)},children:[Object(r.jsx)(M,{value:"1000",children:"1000 ms"}),Object(r.jsx)(M,{value:"2500",children:"2500 ms"}),Object(r.jsx)(M,{value:"5000",children:"5000 ms"})]})})]}),Object(r.jsxs)("div",{className:"flex flex-col space-y-3 w-32",children:[Object(r.jsx)(J,{justify_end:!0,name:"Position"}),Object(r.jsx)("div",{className:Object(o.a)("flex relative flex-row space-x-1 md:space-x-5 w-full","align-middle my-auto w-full"),children:Object(r.jsxs)(I,{justify_end:!0,value:K(d),initinal:d,onChange:function(e){return b(e)},children:[Object(r.jsx)(M,{value:"top_right",children:"Top-Right"}),Object(r.jsx)(M,{value:"top_middle",children:"Top-Middle"}),Object(r.jsx)(M,{value:"top_left",children:"Top-Left"}),Object(r.jsx)(M,{value:"bottom_right",children:"Bottom-Right"}),Object(r.jsx)(M,{value:"bottom_middle",children:"Bottom-Middle"}),Object(r.jsx)(M,{value:"bottom_left",children:"Bottom-Left"})]})})]})]}),Object(r.jsxs)("div",{className:"flex flex-col space-y-3",children:[Object(r.jsx)(J,{name:"Types:"}),Object(r.jsxs)("div",{className:Object(o.a)("flex relative flex-row space-x-1 md:space-x-5 w-full","justify-center align-middle my-auto "),children:[Object(r.jsx)(x,{variant:"primaryred",onClick:function(){return null===e||void 0===e?void 0:e.pushError("Oppps Error",c)},children:"Error"}),Object(r.jsx)(x,{variant:"primaryorange",onClick:function(){return null===e||void 0===e?void 0:e.pushWarning("Warning appear",c,"truncate-2-lines")},children:"Warning"}),Object(r.jsx)(x,{variant:"primarygreen",onClick:function(){return null===e||void 0===e?void 0:e.pushSuccess("Action success",c)},children:"Success"}),Object(r.jsx)(x,{variant:"primaryblue",onClick:function(){return null===e||void 0===e?void 0:e.pushInfo("Info message",c)},children:"Info"}),Object(r.jsx)(x,{variant:"primarygray",onClick:function(){return null===e||void 0===e?void 0:e.pushCustom(Object(r.jsx)(B,{}),c)},children:"Custom"})]})]}),Object(r.jsxs)("div",{className:"flex flex-col space-y-3",children:[Object(r.jsx)(J,{name:"Truncate:"}),Object(r.jsxs)("div",{className:Object(o.a)("flex relative flex-row space-x-1 md:space-x-5 w-full"," align-middle my-auto "),children:[Object(r.jsx)(x,{variant:"secondaryblue",onClick:function(){return null===e||void 0===e?void 0:e.pushInfo(A,c,"truncate-1-lines")},children:"1 line"}),Object(r.jsx)(x,{variant:"secondaryblue",onClick:function(){return null===e||void 0===e?void 0:e.pushInfo(A,c,"truncate-2-lines")},children:"2 lines"}),Object(r.jsx)(x,{variant:"secondaryblue",onClick:function(){return null===e||void 0===e?void 0:e.pushInfo(A,c,"truncate-3-lines")},children:"3 lines"})]})]})]})})}function J(e){var t=e.justify_end,n=e.name;return Object(r.jsx)("div",{className:Object(o.a)("flex font-bold text-gray-500 text-base uppercase",!0===t&&"justify-end "),children:n})}function K(e){switch(e){case"top_right":return"Top-Right";case"top_left":return"Top-Left";case"top_middle":return"Top-Middle";case"bottom_right":return"Bottom-Right";case"bottom_left":return"Bottom-Left";case"bottom_middle":return"Bottom-Middle"}}function U(e){var t=e.children;return Object(r.jsx)("div",{className:"flex h-screen w-screen bg-gray-100",children:t})}var q=function(){return Object(r.jsx)(W,{children:Object(r.jsx)(U,{children:Object(r.jsx)(z,{})})})};n(34);s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(q,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.818d4fba.chunk.js.map