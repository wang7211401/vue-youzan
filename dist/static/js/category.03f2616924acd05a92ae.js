webpackJsonp([2],{10:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"bottom-nav"},[n("ul",[n("li",{staticClass:"active"},[n("a",{attrs:{href:"index.html"}},[n("i",{staticClass:"icon-home"}),n("div",[t._v("有赞")])])]),t._v(" "),n("li",[n("a",{attrs:{href:"category.html"}},[n("i",{staticClass:"icon-category"}),n("div",[t._v("分类")])])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://h5.youzan.com/v2/trade/cart?f_platform=yzapp&source=yzapp"}},[n("i",{staticClass:"icon-cart"}),n("div",[t._v("购物车")])])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://h5.youzan.com/v2/buyer/member"}},[n("i",{staticClass:"icon-user"}),n("div",[t._v("我")])])])])])}]}},16:function(t,a){},2:function(t,a,n){"use strict";var s={hotLists:"/index/hotLists",banner:"/index/banner",topList:"/category/topList",subList:"/category/subList",rank:"/category/rank"};for(var e in s)s.hasOwnProperty(e)&&(s[e]="http://rapapi.org/mockjsdata/24170"+s[e]);a.a=s},3:function(t,a){},4:function(t,a,n){function s(t){n(8)}var e=n(9)(n(7),n(10),s,null,null);t.exports=e.exports},40:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=n(3),e=(n.n(s),n(16)),i=(n.n(e),n(5)),o=n(1),r=n.n(o),c=n(4),u=n.n(c),l=n(2);new i.default({el:"#app",data:{topLists:null,subData:null,rankData:null,topIndex:0},created:function(){this.getTopList(),this.getSubList(0)},methods:{getTopList:function(){var t=this;r.a.post(l.a.topList).then(function(a){t.topLists=a.data.lists}).catch(function(t){console.log(t)})},getSubList:function(t,a){var n=this;this.topIndex=t,0===t?this.getRank():r.a.post(l.a.subList,{id:a}).then(function(t){console.log(t),n.subData=t.data.data})},getRank:function(){var t=this;r.a.post(l.a.rank).then(function(a){t.rankData=a.data.data})}},components:{Foot:u.a}})},7:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"Foot"}},8:function(t,a){}},[40]);
//# sourceMappingURL=category.03f2616924acd05a92ae.js.map