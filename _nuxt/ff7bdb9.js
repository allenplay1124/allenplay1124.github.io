(window.webpackJsonp=window.webpackJsonp||[]).push([[13,3,6,7,8,9],{320:function(t,e,r){"use strict";r.r(e);r(77);var l={name:"IconCalendar",props:{width:{type:Number,default:24},height:{type:Number,default:24}}},n=r(16),component=Object(n.a)(l,(function(){var t=this,e=t._self._c;return e("svg",{attrs:{width:t.width,height:t.height,xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z",fill:"currentColor"}})])}),[],!1,null,null,null);e.default=component.exports},321:function(t,e,r){"use strict";r.r(e);r(77);var l={name:"IconFolder",props:{width:{type:Number,default:24},height:{type:Number,default:24}}},n=r(16),component=Object(n.a)(l,(function(){var t=this,e=t._self._c;return e("svg",{attrs:{width:t.width,height:t.height,xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V6h5.17l2 2H20v10zm-6.92-3.96L12.39 17L15 15.47L17.61 17l-.69-2.96l2.3-1.99l-3.03-.26L15 9l-1.19 2.79l-3.03.26z",fill:"currentColor"}})])}),[],!1,null,null,null);e.default=component.exports},322:function(t,e,r){"use strict";r.r(e);r(77);var l={name:"IconTags",props:{width:{type:Number,default:24},height:{type:Number,default:24}}},n=r(16),component=Object(n.a)(l,(function(){var t=this,e=t._self._c;return e("svg",{attrs:{width:t.width,height:t.height,xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M12.79 21L3 11.21v2c0 .53.21 1.04.59 1.41l7.79 7.79c.78.78 2.05.78 2.83 0l6.21-6.21c.78-.78.78-2.05 0-2.83L12.79 21z",fill:"currentColor"}}),t._v(" "),e("path",{attrs:{d:"M11.38 17.41c.39.39.9.59 1.41.59c.51 0 1.02-.2 1.41-.59l6.21-6.21c.78-.78.78-2.05 0-2.83L12.62.58C12.25.21 11.74 0 11.21 0H5C3.9 0 3 .9 3 2v6.21c0 .53.21 1.04.59 1.41l7.79 7.79zM5 2h6.21L19 9.79L12.79 16L5 8.21V2z",fill:"currentColor"}}),t._v(" "),e("circle",{attrs:{cx:"7.25",cy:"4.25",r:"1.25",fill:"currentColor"}})])}),[],!1,null,null,null);e.default=component.exports},323:function(t,e,r){"use strict";r.r(e);var l={name:"categories-block",props:["categories"]},n=r(16),component=Object(n.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-white dark:text-slate-100 dark:bg-slate-700 dark:shadow-cyan-500/50 rounded-lg shadow-lg w-full"},[e("div",{staticClass:"text-2xl mb-2 border-l-8 pl-2 py-2 border-collapse border-blue-500 dark:border-cyan-500"},[t._v("\n        分類\n    ")]),t._v(" "),e("ul",{staticClass:"pl-5 pb-5 pt-2"},t._l(t.categories,(function(r,l){return e("li",{key:l,staticClass:"hover:text-blue-500 dark:hover:text-cyan-500 py-1"},[e("nuxt-link",{attrs:{to:r.path}},[t._v("\n                "+t._s(r.title)+"\n            ")])],1)})),0)])}),[],!1,null,null,null);e.default=component.exports},324:function(t,e,r){"use strict";r.r(e);var l={name:"tags-block",props:["tags"]},n=r(16),component=Object(n.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-white dark:text-slate-100 dark:bg-slate-700 dark:shadow-cyan-500/50 rounded-lg shadow-lg w-full"},[e("div",{staticClass:"text-2xl mb-2 border-l-8 pl-2 py-2 border-collapse border-blue-500 dark:border-cyan-500"},[t._v("\n        標籤\n    ")]),t._v(" "),e("div",{staticClass:"pl-5 pb-5 pt-2"},[t._l(t.tags,(function(r,l){return e("span",{key:l,staticClass:"text-gray-600 mr-2 my-2 p-2 rounded-lg shadow-md float-left hover:text-blue-700 dark:text-cyan-100 dark:hover:text-cyan-300 dark:shadow-cyan-500/50 border dark:border-cyan-100"},[e("nuxt-link",{attrs:{to:r.path}},[t._v("\n                "+t._s(r.title)+"\n            ")])],1)})),t._v(" "),e("div",{staticClass:"clear-both"})],2)])}),[],!1,null,null,null);e.default=component.exports},360:function(t,e,r){"use strict";r.r(e);var l=r(10),n=(r(51),r(94),r(228),r(43),r(17),r(33),r(320)),c=r(321),o=r(322),d=r(323),h=r(324),v={name:"CategorySlug",components:{IconCalendar:n.default,IconFolder:c.default,IconTags:o.default,CategoriesBlock:d.default,TagsBlock:h.default},head:function(){return{title:"文章分類：".concat(this.cate.title," | ").concat(this.$nuxt.context.app.head.title),meta:[{hid:"description",name:"description",content:this.cate.summary},{property:"og:title",content:"文章分類：".concat(this.cate.title," | ").concat(this.$nuxt.context.app.head.title)},{property:"og:image",content:this.cate.cover},{property:"og:description",content:this.cate.summary}]}},asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var r,l,n,c,o,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,l=t.params,e.next=3,r("categories").sortBy("sort","asc").fetch();case 3:return n=e.sent,e.next=6,r("tags").fetch();case 6:return c=e.sent,e.next=9,r("categories",l.slug).limit(1).fetch();case 9:return o=e.sent,e.next=12,r("articles").where({category:l.slug,status:!0}).sortBy("pubDate","desc").fetch();case 12:return(d=e.sent).map((function(t){var e=n.find((function(e){return e.slug===t.category}));t.categoryData=e;var r=[];t.tags.forEach((function(t){var e=c.find((function(e){return e.slug===t}));r.push(e)})),t.tagData=r})),e.abrupt("return",{categories:n,tags:c,cate:o,posts:d});case 15:case"end":return e.stop()}}),e)})))()}},f=r(16),component=Object(f.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container mx-auto my-3 lg:p-10 p-1"},[e("div",{staticClass:"flex flex-col md:flex-row"},[e("div",{staticClass:"flex-1 p-4 shadow-lg rounded-xl dark:shadow-cyan-500/50 border dark:border-cyan-100 my-6"},[e("div",{staticClass:"relative"},[e("div",{staticClass:"w-full md:w-auto"},[e("img",{staticClass:"w-full object-cover rounded-xl",attrs:{src:t.cate.cover}})]),t._v(" "),e("div",{staticClass:"absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-white bg-opacity-75 p-4"},[e("h1",{staticClass:"text-2xl"},[t._v(t._s(t.cate.title))]),t._v(" "),e("div",[t._v(t._s(t.cate.summary))])])]),t._v(" "),e("div",{staticClass:"container mx-auto py-4"},t._l(t.posts,(function(r,l){return e("div",{key:l,staticClass:"flex flex-col md:flex-row items-center mb-8 space-y-4 md:space-y-0 md:space-x-6 shadow-lg rounded-lg p-4 border"},[e("nuxt-link",{attrs:{to:r.path}},[e("img",{staticClass:"w-full h-auto md:w-48 md:h-32 object-cover rounded-md shadow-lg transition duration-300 ease-in-out hover:scale-105",attrs:{src:r.image}})]),t._v(" "),e("div",{staticClass:"flex-1 ml-4 md:ml-0 dark:text-slate-300"},[e("h2",{staticClass:"text-2xl hover:text-blue-500 dark:hover:text-cyan-500"},[e("nuxt-link",{attrs:{to:r.path}},[t._v("\n                                "+t._s(r.title)+"\n                            ")])],1),t._v(" "),e("div",{staticClass:"flex lg:flex-row flex-col"},[e("div",{staticClass:"flex flex-row"},[e("div",{staticClass:"mt-0.5 mr-2"},[e("IconCalendar",{attrs:{width:24,height:24}})],1),t._v(" "),e("div",[t._v("\n                                    "+t._s(t._f("dateFormat")(r.pubDate))+"\n                                ")])]),t._v(" "),e("div",{staticClass:"flex flex-row lg:mx-2"},[e("div",{staticClass:"mt-0.5 mr-2"},[e("IconFolder",{attrs:{width:24,height:24}})],1),t._v(" "),e("div",{staticClass:"hover:text-blue-500 dark:hover:text-cyan-500"},[e("nuxt-link",{attrs:{to:r.categoryData.path}},[t._v("\n                                        "+t._s(r.categoryData.title)+"\n                                    ")])],1)]),t._v(" "),e("div",{staticClass:"flex flex-row lg:mx-2"},[e("div",{staticClass:"mt-0.5 mr-2"},[e("IconTags",{attrs:{width:24,height:24}})],1),t._v(" "),e("div",{staticClass:"flex flex-row"},t._l(r.tagData,(function(r,l){return e("div",{key:l,staticClass:"mr-2 hover:text-blue-500 dark:hover:text-cyan-500"},[e("nuxt-link",{attrs:{to:r.path}},[t._v("\n                                            "+t._s(r.title)+"\n                                        ")])],1)})),0)])]),t._v(" "),e("div",{staticClass:"text-base text-justify"},[t._v("\n                            "+t._s(r.summary)+"\n                        ")]),t._v(" "),e("div",{staticClass:"text-right hover:text-blue-500 dark:hover:text-cyan-500"},[e("nuxt-link",{attrs:{to:r.path}},[t._v(" [繼續閱讀] ")])],1)])],1)})),0)]),t._v(" "),e("div",{staticClass:"w-full md:w-1/4 p-4 md:h-full lg:sticky lg:top-20"},[e("CategoriesBlock",{attrs:{categories:t.categories}}),t._v(" "),e("TagsBlock",{staticClass:"my-4",attrs:{tags:t.tags}})],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconCalendar:r(320).default,IconFolder:r(321).default,IconTags:r(322).default,CategoriesBlock:r(323).default,TagsBlock:r(324).default})}}]);