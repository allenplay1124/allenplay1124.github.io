(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{140:function(e,t,n){"use strict";var r=n(0),o=n(142),d=n.n(o);n(202);r.default.use(d.a)},141:function(e,t,n){"use strict";var r=n(0),o=n(195);r.default.use(o.a,{shortname:"allenplaynet1124"})},179:function(e,t,n){var content=n(261);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(34).default)("2cb9f5a5",content,!0,{sourceMap:!1})},180:function(e,t,n){var content=n(263);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(34).default)("4bf090b0",content,!0,{sourceMap:!1})},198:function(e,t,n){"use strict";n(62);var r=n(199),o=n(200),d={components:{topBar:r.default,navbar:o.default},data:function(){return{loading:!0,loadingClass:{"loading-20":!0,"loading-40":!1,"loading-60":!1,"loading-80":!1,"loading-100":!1}}},mounted:function(){var e=this,t=(document.querySelector(".loading"),40),n=setInterval((function(){40==t&&(e.loadingClass["loading-20"]=!1,e.loadingClass["loading-40"]=!0,e.loadingClass["loading-60"]=!1,e.loadingClass["loading-80"]=!1,e.loadingClass["loading-100"]=!1),60==t&&(e.loadingClass["loading-20"]=!1,e.loadingClass["loading-40"]=!1,e.loadingClass["loading-60"]=!0,e.loadingClass["loading-80"]=!1,e.loadingClass["loading-100"]=!1),80==t&&(e.loadingClass["loading-20"]=!1,e.loadingClass["loading-40"]=!1,e.loadingClass["loading-60"]=!1,e.loadingClass["loading-80"]=!0,e.loadingClass["loading-100"]=!1),100==t&&(e.loadingClass["loading-20"]=!1,e.loadingClass["loading-40"]=!1,e.loadingClass["loading-60"]=!1,e.loadingClass["loading-80"]=!1,e.loadingClass["loading-100"]=!0),t+=20}),500);setTimeout((function(){clearInterval(n),e.loading=!1}),3e3)},methods:{setRotationOnClick:function(){this.$gsap.to(".title2",{rotation:90,x:100,duration:2})},setRotationOnLoad:function(){this.$gsap.to(".loading",{rotation:27,x:100,duration:1})}}},l=(n(262),n(23)),component=Object(l.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("header",[n("topBar"),e._v(" "),n("navbar")],1),e._v(" "),n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"loading-wrapper"},[n("div",{staticClass:"loading",class:e.loadingClass},[e._v("玩")])])]),e._v(" "),n("Nuxt")],1)}),[],!1,null,"29f9a3f4",null);t.a=component.exports},199:function(e,t,n){"use strict";n.r(t);var r={data:function(){return{darkModeSystemHover:!1,darkModeLightHover:!1,darkModeDarkHover:!1}},methods:{darkModeHoverActive:function(e){switch(e){case"system":this.darkModeSystemHover=!0,this.darkModeLightHover=!1,this.darkModeDarkHover=!1;break;case"light":this.darkModeLightHover=!0,this.darkModeSystemHover=!1,this.darkModeDarkHover=!1;break;case"dark":this.darkModeDarkHover=!0,this.darkModeSystemHover=!1,this.darkModeLightHover=!1}},darkModeHoverUnActive:function(e){switch(e){case"system":this.darkModeSystemHover=!1;break;case"light":this.darkModeLightHover=!1;break;case"dark":this.darkModeDarkHover=!1}}}},o=n(23),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"\n        dark-mode-bar\n        bg-blue-100\n        h-8\n        w-full\n        dark:bg-yellow-500 dark:text-blue-100\n        pr-5\n        pt-1\n    "},[n("div",{staticClass:"flex justify-end mx-auto"},[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.$colorMode.preference,expression:"$colorMode.preference"}],attrs:{id:"dark-mode-system",type:"radio",value:"system"},domProps:{checked:e._q(e.$colorMode.preference,"system")},on:{change:function(t){return e.$set(e.$colorMode,"preference","system")}}}),e._v(" "),n("label",{staticClass:"\n                    w-4\n                    h-4\n                    p-1\n                    rounded-full\n                    bg-gray-50\n                    dark:bg-gray-700\n                    cursor-pointer\n                ",attrs:{for:"dark-mode-system"},on:{mouseover:function(t){return e.darkModeHoverActive("system")},mouseleave:function(t){return e.darkModeHoverUnActive("system")}}},[e._v("\n                系\n            ")]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.darkModeSystemHover,expression:"darkModeSystemHover"}],staticClass:"\n                    text-xs\n                    rounded-3xl\n                    bg-blue-100\n                    p-2\n                    mt-2\n                    text-gray-500\n                    absolute\n                    right-8\n                    dark:bg-gray-700 dark:text-gray-100\n                "},[e._v("\n                依系統設定\n            ")])]),e._v(" "),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.$colorMode.preference,expression:"$colorMode.preference"}],attrs:{id:"dark-mode-light",type:"radio",value:"light"},domProps:{checked:e._q(e.$colorMode.preference,"light")},on:{change:function(t){return e.$set(e.$colorMode,"preference","light")}}}),e._v(" "),n("label",{staticClass:"\n                    w-4\n                    h-4\n                    p-1\n                    rounded-full\n                    bg-gray-50\n                    dark:bg-gray-700\n                    cursor-pointer\n                ",attrs:{for:"dark-mode-light"},on:{mouseover:function(t){return e.darkModeHoverActive("light")},mouseleave:function(t){return e.darkModeHoverUnActive("light")}}},[e._v("\n                亮\n            ")]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.darkModeLightHover,expression:"darkModeLightHover"}],staticClass:"\n                    text-xs\n                    rounded-3xl\n                    bg-blue-100\n                    p-2\n                    mt-2\n                    text-gray-500\n                    absolute\n                    right-12\n                    dark:bg-gray-700 dark:text-gray-100\n                "},[e._v("\n                亮色系\n            ")])]),e._v(" "),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.$colorMode.preference,expression:"$colorMode.preference"}],attrs:{id:"dark-mode-dark",type:"radio",value:"dark"},domProps:{checked:e._q(e.$colorMode.preference,"dark")},on:{change:function(t){return e.$set(e.$colorMode,"preference","dark")}}}),e._v(" "),n("label",{staticClass:"\n                    w-4\n                    h-4\n                    p-1\n                    rounded-full\n                    bg-gray-50\n                    dark:bg-gray-700\n                    cursor-pointer\n                ",attrs:{for:"dark-mode-dark"},on:{mouseover:function(t){return e.darkModeHoverActive("dark")},mouseleave:function(t){return e.darkModeHoverUnActive("dark")}}},[e._v("\n                暗\n            ")]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.darkModeDarkHover,expression:"darkModeDarkHover"}],staticClass:"\n                    text-xs\n                    rounded-3xl\n                    bg-blue-100\n                    p-2\n                    mt-2\n                    text-gray-500\n                    absolute\n                    right-2\n                    dark:bg-gray-700 dark:text-gray-100\n                "},[e._v("\n                暗色系\n            ")])])])])}),[],!1,null,null,null);t.default=component.exports},200:function(e,t,n){"use strict";n.r(t);var r={data:function(){return{menus:[{name:"首頁",route:"/",target:"_self"},{name:"文章列表",route:"/articles",target:"_self"},{name:"關於我",route:"/abount",target:"_self"}],isShowBarMenu:!1}},methods:{toggleBarMenu:function(){this.isShowBarMenu=!this.isShowBarMenu}}},o=(n(260),n(23)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"w-full h-16 bg-gray-100 dark:bg-gray-700"},[n("div",{staticClass:"lg:container mx-auto pt-3 flex justify-between px-4"},[n("h1",{staticClass:"text-3xl dark:text-gray-100 site-title"},[n("a",{attrs:{href:"/"}},[e._v("\n                "+e._s(this.$nuxt.$options.head.title)+"\n            ")])]),e._v(" "),n("div",{staticClass:"lg:hidden"},[n("button",{staticClass:"\n                    bg-gray-200\n                    text-2xl\n                    px-3\n                    py-2\n                    rounded-full\n                    hover:shadow\n                ",on:{click:function(t){return e.toggleBarMenu()}}},[e._v("\n                ☰\n            ")])]),e._v(" "),n("ul",{staticClass:"hidden lg:flex gap-5 text-blue-500 dark:text-yellow-500"},e._l(e.menus,(function(t,r){return n("li",{key:r,staticClass:"\n                    px-2\n                    pt-4\n                    rounded\n                    hover:shadow hover:bg-blue-200\n                    dark:hover:bg-gray-900\n                "},[n("a",{attrs:{href:t.route,target:t.target}},[e._v("\n                    "+e._s(t.name)+"\n                ")])])})),0),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isShowBarMenu,expression:"isShowBarMenu"}],staticClass:"\n                w-full\n                h-full\n                flex flex-col\n                mx-0\n                fixed\n                z-10\n                top-10\n                left-0\n                bg-gray-100\n                dark:bg-gray-700\n            "},[n("button",{staticClass:"text-right mr-3 text-xl dark:text-gray-50",attrs:{type:"button"},on:{click:function(t){return e.toggleBarMenu()}}},[e._v("\n                ྾\n            ")]),e._v(" "),n("div",{staticClass:"divide-y-2 divide-gray-500 mt-2"},[n("h1",{staticClass:"text-3xl text-center mb-2 dark:text-gray-50"},[e._v("\n                    "+e._s(this.$nuxt.$options.head.title)+"\n                ")])]),e._v(" "),n("ul",{staticClass:"flex flex-col text-center text-xl gap-y-4 mt-10"},e._l(e.menus,(function(t,r){return n("li",{key:r,staticClass:"\n                        text-gray-600\n                        hover:bg-gray-700 hover:text-gray-200\n                        dark:text-yellow-500 dark:hover:bg-gray-200\n                    "},[n("a",{attrs:{href:t.route,target:t.target}},[e._v("\n                        "+e._s(t.name)+"\n                    ")])])})),0)])])])}),[],!1,null,"8c695bd6",null);t.default=component.exports},204:function(e,t,n){n(205),e.exports=n(206)},254:function(e,t,n){var content=n(255);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(34).default)("912b7308",content,!0,{sourceMap:!1})},255:function(e,t,n){var r=n(33)((function(i){return i[1]}));r.push([e.i,".dark-mode-bar input{visibility:hidden;width:0;height:0}.dark-mode-bar .dark-mode-label-hover{display:none}.prose{max-width:100%}",""]),r.locals={},e.exports=r},256:function(e,t,n){var content=n(257);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(34).default)("4bf11a60",content,!0,{sourceMap:!1})},257:function(e,t,n){var r=n(33)((function(i){return i[1]}));r.push([e.i,".nuxt-content-container{text-align:justify;font-size:1rem;line-height:150%}.nuxt-content-container h1{font-size:2.5rem;padding-top:2rem;padding-bottom:2rem}.nuxt-content-container h2{font-size:2rem;padding-top:1.5rem;padding-bottom:1.5rem}.nuxt-content-container pre{border-radius:5px}.nuxt-content-container table{width:100%;border-collapse:separate;border-spacing:0;margin:1rem auto;color:#333}.nuxt-content-container th{padding:.5rem;background:#e7e7e7;border-bottom:1px solid #cecbcb}.nuxt-content-container td{padding:.5rem;background:#fff;border-bottom:1px solid #cecbcb}.nuxt-content-container tr:first-child th:first-child{border-top-left-radius:3px}.nuxt-content-container tr:last-child td:first-child{border-bottom-left-radius:3px}.nuxt-content-container tr:first-child th:last-child{border-top-right-radius:3px}.nuxt-content-container tr:last-child td:last-child{border-bottom-right-radius:3px}.nuxt-content-container img{width:100%;border-radius:3px}.nuxt-content-container img,.nuxt-content-container pre{margin-top:1rem;margin-bottom:1rem}.nuxt-content-container pre code{border:0;background:none}.nuxt-content-container a{color:#00c3ff;text-decoration:none}.nuxt-content-container code{border:1px solid #de526f;background:#ffe5e5;padding:3px;border-radius:5px;color:#de526f;font-weight:400}.nuxt-content-container code:after,.nuxt-content-container code:before{display:none}",""]),r.locals={},e.exports=r},260:function(e,t,n){"use strict";n(179)},261:function(e,t,n){var r=n(33)((function(i){return i[1]}));r.push([e.i,".site-title[data-v-8c695bd6]{width:150px;height:50px;background-image:url(/images/logo.png);white-space:nowrap;color:transparent}.dark .site-title[data-v-8c695bd6]{background-image:url(/images/logo-light.png)}",""]),r.locals={},e.exports=r},262:function(e,t,n){"use strict";n(180)},263:function(e,t,n){var r=n(33)((function(i){return i[1]}));r.push([e.i,'.loading-wrapper[data-v-29f9a3f4]{position:fixed;top:0;left:0;width:100%;height:100%;background:#333;z-index:99999}.loading[data-v-29f9a3f4]{position:absolute;top:50%;left:50%;margin-top:-100pt;margin-left:-100pt;font-family:"Cabin Condensed",sans-serif;font-weight:700;font-size:100pt;text-align:center}.loading-20[data-v-29f9a3f4]{background:linear-gradient(0deg,#d03030 0,#333 20%);background-clip:text;-webkit-background-clip:text}.loading-20[data-v-29f9a3f4],.loading-40[data-v-29f9a3f4]{-webkit-text-fill-color:transparent;color:transparent}.loading-40[data-v-29f9a3f4]{background:linear-gradient(0deg,#d03030 0,#333 40%);background-clip:text;-webkit-background-clip:text}.loading-60[data-v-29f9a3f4]{background:linear-gradient(0deg,#d03030 0,#333 60%);background-clip:text;-webkit-background-clip:text}.loading-60[data-v-29f9a3f4],.loading-80[data-v-29f9a3f4]{-webkit-text-fill-color:transparent;color:transparent}.loading-80[data-v-29f9a3f4]{background:linear-gradient(0deg,#d03030 0,#333 80%);background-clip:text;-webkit-background-clip:text}.loading-100[data-v-29f9a3f4]{background:linear-gradient(0deg,#d03030 0,#333);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;color:transparent}.fade-enter-active[data-v-29f9a3f4],.fade-leave-active[data-v-29f9a3f4]{transition:opacity 1s}.fade-enter-from[data-v-29f9a3f4],.fade-leave-to[data-v-29f9a3f4]{opacity:0}.fade-enter-to[data-v-29f9a3f4],.fade-leave-from[data-v-29f9a3f4]{opacity:1}',""]),r.locals={},e.exports=r},264:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return r})),n.d(t,"mutations",(function(){return o})),n.d(t,"getters",(function(){return d}));var r=function(){return{loading:!1}},o={setLoading:function(e,t){e.loading=t}},d={loading:function(e){return e.loading}}}},[[204,21,1,22]]]);