(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{505:function(t,e,s){"use strict";var r=s(2),a=s(147),n=s(55),i=s(18),o=s(19),c=s(148),l=s(79),u=s(80)("splice"),h=Math.max,p=Math.min;r({target:"Array",proto:!0,forced:!u},{splice:function(t,e){var s,r,u,f,m,g,v=o(this),d=i(v.length),_=a(t,d),w=arguments.length;if(0===w?s=r=0:1===w?(s=0,r=d-_):(s=w-2,r=p(h(n(e),0),d-_)),d+s-r>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(u=c(v,r),f=0;f<r;f++)(m=_+f)in v&&l(u,f,v[m]);if(u.length=r,s<r){for(f=_;f<d-r;f++)g=f+s,(m=f+r)in v?v[g]=v[m]:delete v[g];for(f=d;f>d-r+s;f--)delete v[f-1]}else if(s>r)for(f=d-r;f>_;f--)g=f+s-1,(m=f+r-1)in v?v[g]=v[m]:delete v[g];for(f=0;f<s;f++)v[f+_]=arguments[f+2];return v.length=d-r+s,u}})},541:function(t,e,s){},605:function(t,e,s){t.exports=s.p+"assets/img/yesterday.8e49f298.svg"},606:function(t,e,s){t.exports=s.p+"assets/img/today.484a4d22.svg"},607:function(t,e,s){t.exports=s.p+"assets/img/tomorrow.81f0b143.svg"},608:function(t,e,s){"use strict";s(541)},634:function(t,e,s){"use strict";s.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("a",{attrs:{target:"_black",href:"https://github.com/vuepress-reco/vuepress-theme-reco"}},[e("img",{attrs:{alt:"GitHub license",src:"https://img.shields.io/github/license/vuepress-reco/vuepress-theme-reco?&logo=github"}})]),this._v(" "),e("a",{attrs:{target:"_black",href:"https://github.com/vuepress-reco/vuepress-theme-reco"}},[e("img",{attrs:{alt:"GitHub stars",src:"https://img.shields.io/github/stars/vuepress-reco/vuepress-theme-reco?style=flat&logo=github"}})]),this._v(" "),e("a",{attrs:{target:"_black",href:"https://github.com/vuepress-reco/vuepress-theme-reco"}},[e("img",{attrs:{alt:"GitHub forks",src:"https://img.shields.io/github/forks/vuepress-reco/vuepress-theme-reco?style=flat&logo=github"}})]),this._v(" "),e("a",{attrs:{target:"_black",href:"https://www.npmjs.com/package/vuepress-theme-reco"}},[e("img",{attrs:{alt:"Npm downloads",src:"https://img.shields.io/npm/dt/vuepress-theme-reco?style=flat&logo=npm"}})]),this._v(" "),e("a",{attrs:{target:"_black",href:"https://www.npmjs.com/package/vuepress-theme-reco"}},[e("img",{attrs:{alt:"Npm version",src:"https://img.shields.io/npm/v/vuepress-theme-reco.svg?style=flat&logo=npm&label=version"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"img-wrapper"},[e("img",{attrs:{src:s(605),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"img-wrapper"},[e("img",{attrs:{src:s(606),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"img-wrapper"},[e("img",{attrs:{src:s(607),alt:""}})])}],a=s(99),n=(s(149),s(33),s(78),s(53),s(40),s(10),s(266),s(57),s(82),s(56),s(14),s(16),s(103),s(145),s(271),s(264),s(505),s(265),s(150),{data:function(){return{downloads:0}},computed:{features:function(){return this.$frontmatter.features},heroImageStyle:function(){return this.$frontmatter.heroImageStyle||{maxHeight:"200px",margin:"6rem auto 1.5rem"}}},created:function(){},methods:{toThousandslsFilter:function(t){var e=String(t);if(""===e||null==e)return"";var s=/\./g.test(e)?e.slice(0,e.indexOf(".")):e,r=/\./g.test(e)?e.substring(e.indexOf(".")):"";return(+s||0).toString().replace(/^-?\d+/g,(function(t){return t.replace(/(?=(?!\b)(\d{3})+$)/g,",")}))+r},npmPackageDownloads:function(t,e){return t=this._handlePackages(t),e=this._handleDateRange(e),this._getDownloadsOfDateRange(t,e)},_getDownloadsOfDateRange:function(t,e){var s=this;return Object(a.a)(regeneratorRuntime.mark((function r(){var a,n,i,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a=0,!Array.isArray(e)){r.next=9;break}return n=[],e.map((function(e){n.push(s._fetch(t,e))})),r.next=6,Promise.all(n);case 6:return i=r.sent,a=i.reduce((function(t,e){return t+e.downloads}),0),r.abrupt("return",a);case 9:return r.next=11,s._fetch(t,e);case 11:return o=r.sent,a=o.downloads,r.abrupt("return",a);case 14:case"end":return r.stop()}}),r)})))()},_fetch:function(t,e){var s=this;return new Promise((function(r,a){fetch("".concat("https://api.npmjs.org/downloads/point/").concat(e,"/").concat(t)).then(s._parseJSON).then((function(t){r(t)})).catch((function(t){a(t)}))}))},_parseJSON:function(t){return t.json()},_handleDateRange:function(t){if(t.indexOf(":")>-1){var e=t.split(":"),s=e,r=new Date(e[1]).getTime()-new Date(e[0]).getTime(),a=parseInt(r/31536e6);if(a>0){for(var n=0;n<a;n++){var i=this._getDate(s[n]);s.splice(n+1,0,i)}for(var o=0,c=s.length;o<c-1;o++)s[o]="".concat(s[o],":").concat(s[o+1]);return s.length=a+1,s}return t}return t},_getDate:function(t){var e=t.split("-");return e[0]=Number(e[0])+1,e.join("-")},_handlePackages:function(t){return Array.isArray(t)?"-,".concat(t.join(",")):t}}}),i=(s(608),s(4)),o=Object(i.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",{staticClass:"home-page-one-wrapper"},[s("section",{staticClass:"main"},[s("div",[t.$frontmatter.heroImage?s("img",{style:t.heroImageStyle||{},attrs:{src:t.$withBase(t.$frontmatter.heroImage),alt:"hero"}}):t._e(),t._v(" "),s("p",{staticClass:"description"},[t._v(t._s(t.$description))]),t._v(" "),t._m(0),t._v(" "),s("router-link",{staticClass:"btn-about",attrs:{to:t.$frontmatter.actionLink}},[t._v(t._s(t.$frontmatter.actionText))])],1)]),t._v(" "),s("section",{staticClass:"wish yesterday"},[s("div",{staticClass:"wish-inner"},[t._m(1),t._v(" "),s("div",{staticClass:"text-wrapper"},[s("h1",[t._v(t._s(t.features[0].title))]),t._v(" "),s("p",{staticClass:"description"},[t._v(t._s(t.features[0].details))])])])]),t._v(" "),s("section",{staticClass:"wish today"},[s("div",{staticClass:"wish-inner"},[s("div",{staticClass:"text-wrapper"},[s("h1",[t._v(t._s(t.features[1].title))]),t._v(" "),s("p",{staticClass:"description"},[t._v(t._s(t.features[1].details))])]),t._v(" "),t._m(2)])]),t._v(" "),s("section",{staticClass:"wish tomorrow"},[s("div",{staticClass:"wish-inner"},[t._m(3),t._v(" "),s("div",{staticClass:"text-wrapper"},[s("h1",[t._v(t._s(t.features[2].title))]),t._v(" "),s("p",{staticClass:"description"},[t._v(t._s(t.features[2].details))])])])]),t._v(" "),s("section",{staticClass:"md-content-wrapper"},[s("Content")],1)])}),r,!1,null,"155989b8",null);e.default=o.exports}}]);