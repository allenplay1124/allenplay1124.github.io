(window.webpackJsonp=window.webpackJsonp||[]).push([[4,6,7,8],{320:function(t,e,r){"use strict";r.r(e);r(77);var l={name:"IconCalendar",props:{width:{type:Number,default:24},height:{type:Number,default:24}}},n=r(16),component=Object(n.a)(l,(function(){var t=this,e=t._self._c;return e("svg",{attrs:{width:t.width,height:t.height,xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z",fill:"currentColor"}})])}),[],!1,null,null,null);e.default=component.exports},321:function(t,e,r){"use strict";r.r(e);r(77);var l={name:"IconFolder",props:{width:{type:Number,default:24},height:{type:Number,default:24}}},n=r(16),component=Object(n.a)(l,(function(){var t=this,e=t._self._c;return e("svg",{attrs:{width:t.width,height:t.height,xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V6h5.17l2 2H20v10zm-6.92-3.96L12.39 17L15 15.47L17.61 17l-.69-2.96l2.3-1.99l-3.03-.26L15 9l-1.19 2.79l-3.03.26z",fill:"currentColor"}})])}),[],!1,null,null,null);e.default=component.exports},322:function(t,e,r){"use strict";r.r(e);r(77);var l={name:"IconTags",props:{width:{type:Number,default:24},height:{type:Number,default:24}}},n=r(16),component=Object(n.a)(l,(function(){var t=this,e=t._self._c;return e("svg",{attrs:{width:t.width,height:t.height,xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M12.79 21L3 11.21v2c0 .53.21 1.04.59 1.41l7.79 7.79c.78.78 2.05.78 2.83 0l6.21-6.21c.78-.78.78-2.05 0-2.83L12.79 21z",fill:"currentColor"}}),t._v(" "),e("path",{attrs:{d:"M11.38 17.41c.39.39.9.59 1.41.59c.51 0 1.02-.2 1.41-.59l6.21-6.21c.78-.78.78-2.05 0-2.83L12.62.58C12.25.21 11.74 0 11.21 0H5C3.9 0 3 .9 3 2v6.21c0 .53.21 1.04.59 1.41l7.79 7.79zM5 2h6.21L19 9.79L12.79 16L5 8.21V2z",fill:"currentColor"}}),t._v(" "),e("circle",{attrs:{cx:"7.25",cy:"4.25",r:"1.25",fill:"currentColor"}})])}),[],!1,null,null,null);e.default=component.exports},325:function(t,e,r){"use strict";var l=r(2),n=r(326).start;l({target:"String",proto:!0,forced:r(327)},{padStart:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},326:function(t,e,r){"use strict";var l=r(4),n=r(53),o=r(13),c=r(229),d=r(20),h=l(c),v=l("".slice),w=Math.ceil,f=function(t){return function(e,r,l){var c,f,x=o(d(e)),m=n(r),_=x.length,C=void 0===l?" ":o(l);return m<=_||""===C?x:((f=h(C,w((c=m-_)/C.length))).length>c&&(f=v(f,0,c)),t?x+f:f+x)}};t.exports={start:f(!1),end:f(!0)}},327:function(t,e,r){"use strict";var l=r(52);t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(l)},337:function(t,e,r){"use strict";r.r(e);r(94),r(325);var l=r(320),n=r(321),o=r(322),c={name:"HomePostLists",components:{IconCalendar:l.default,IconFolder:n.default,IconTags:o.default},props:{posts:{type:Array,required:!0}},filters:{dateFormat:function(t){var e=new Date(t),r=e.getFullYear(),l=String(e.getMonth()+1).padStart(2,"0"),n=String(e.getDate()).padStart(2,"0");return"".concat(r,"-").concat(l,"-").concat(n)}}},d=r(16),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container mx-auto my-5"},[e("div",{staticClass:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"},t._l(t.posts,(function(r,l){return e("div",{key:l,staticClass:"shadow-md rounded-lg dark:bg-slate-700 dark:shadow-cyan-500/50 p-4 hover:shadow-2xl"},[e("div",{staticClass:"w-full"},[e("nuxt-link",{attrs:{to:r.path}},[e("img",{staticClass:"rounded-lg hover:scale-105 hover:shadow-lg transition-transform duration-200 ease-in-out",attrs:{src:r.image,alt:r.title}})])],1),t._v(" "),e("div",[e("h3",{staticClass:"text-xl font-bold text-gray-900 dark:text-white border-b py-2 hover:text-blue-500"},[e("nuxt-link",{attrs:{to:r.path}},[t._v("\n                        "+t._s(r.title)+"\n                    ")])],1),t._v(" "),e("div",{staticClass:"py-2 flex flex-row"},[e("div",{staticClass:"text-gray-600 dark:text-white text-lg flex flex-row mr-2"},[e("div",{staticClass:"mr-2"},[e("IconCalendar",{attrs:{width:24,height:24}})],1),t._v(" "),e("div",[t._v("\n                            "+t._s(t._f("dateFormat")(r.pubDate))+"\n                        ")])]),t._v(" "),e("div",{staticClass:"text-gray-600 dark:text-white text-lg flex flex-row"},[e("div",{staticClass:"mr-2"},[e("IconFolder",{attrs:{width:24,height:24}})],1),t._v(" "),e("div",{staticClass:"hover:text-blue-500"},[e("nuxt-link",{attrs:{to:r.categoryData.path}},[t._v("\n                                "+t._s(r.categoryData.title)+"\n                            ")])],1)])]),t._v(" "),e("div",{staticClass:"text-gray-600 dark:text-white pt-2 text-justify text-base"},[t._v("\n                    "+t._s(r.summary)+"\n                ")]),t._v(" "),e("div",{staticClass:"flex flex-row py-4 dark:text-white"},[e("div",{staticClass:"mr-2 mt-2"},[e("IconTags",{attrs:{width:24,height:24}})],1),t._v(" "),e("div",{staticClass:"flex flex-row justify-between"},t._l(r.tagData,(function(r,l){return e("div",{key:l,staticClass:"text-base bg-gray-100 dark:bg-slate-600 rounded-full mr-2 p-2 shadow-md hover:text-blue-500 dark:hover:text-cyan-300"},[e("nuxt-link",{attrs:{to:r.path}},[t._v("\n                                "+t._s(r.title)+"\n                            ")])],1)})),0)])])])})),0)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconCalendar:r(320).default,IconFolder:r(321).default,IconTags:r(322).default})}}]);