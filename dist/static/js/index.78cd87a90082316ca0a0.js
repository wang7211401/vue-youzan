webpackJsonp([2],{0:function(t,e,n){"use strict";var a={hotLists:"/index/hotLists",banner:"/index/banner",topList:"/category/topList",subList:"/category/subList",rank:"/category/rank",searchList:"/search/list",details:"/goods/details",deal:"/goods/deal",cartAdd:"/cart/add",cartRemove:"/cart/remove",cartMremove:"/cart/mremove",cartReduce:"/cart/reduce",cartLists:"/cart/list",cartUpdate:"cart/update"};for(var i in a)a.hasOwnProperty(i)&&(a[i]="http://rapapi.org/mockjsdata/24170"+a[i]);e.a=a},100:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(7),i=(n.n(a),n(74)),s=(n.n(i),n(5)),r=n(1),o=n.n(r),c=n(0),l=n(16),u=n.n(l),d=n(17),f=n.n(d),p=n(78);n.n(p);s.default.use(p.InfiniteScroll),new s.default({el:"#app",data:{pageNum:1,pageSize:6,lists:null,loading:!1,allLoaded:!1,bannerLists:null},created:function(){this.getLists(),this.getBanner()},methods:{getLists:function(){var t=this;this.allLoaded||(this.loading=!0,o.a.post(c.a.hotLists,{pageNum:this.pageNum,pageSize:this.pageSize}).then(function(e){console.log(e);var n=e.data.lists;n.length<t.pageSize&&(t.allLoaded=!0),t.lists?t.lists=t.lists.concat(n):t.lists=n,t.loading=!1}))},getBanner:function(){var t=this;o.a.get(c.a.banner).then(function(e){t.bannerLists=e.data.lists})}},components:{Foot:u.a,Swipe:f.a}})},16:function(t,e,n){function a(t){n(37)}var i=n(22)(n(25),n(39),a,null,null);t.exports=i.exports},17:function(t,e,n){function a(t){n(36)}var i=n(22)(n(26),n(38),a,null,null);t.exports=i.exports},25:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(11),i=n.n(a),s=i.a.parse(location.search.substr(1)),r=s.index,o=[{name:"有赞",href:"index.html",icon:"icon-home"},{name:"分类",href:"category.html",icon:"icon-category"},{name:"购物车",href:"cart.html",icon:"icon-cart"},{name:"我",href:"member.html",icon:"icon-user"}];e.default={name:"Foot",data:function(){return{navConfig:o,curIndex:parseInt(r)||0}},methods:{navChange:function(t,e){location.href=t.href+"?index="+e}}}},26:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(61),i=n.n(a),s=n(35);n.n(s);e.default={props:{lists:{type:Array,required:!0}},created:function(){},mounted:function(){this.init()},methods:{init:function(){new i.a(".swiper-container",{loop:!0,pagination:".swiper-pagination"})}}}},35:function(t,e){},36:function(t,e){},37:function(t,e){},38:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"swiper-container"},[n("div",{staticClass:"swiper-wrapper"},t._l(t.lists,function(t){return n("div",{staticClass:"swp-page swiper-slide"},[n("a",{staticClass:"js-no-follow",attrs:{href:t.clickUrl}},[n("img",{staticClass:"goods-main-photo fadeIn",attrs:{src:t.image}})])])})),t._v(" "),n("div",{staticClass:"swiper-pagination"})])},staticRenderFns:[]}},39:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bottom-nav"},[n("ul",t._l(t.navConfig,function(e,a){return n("li",{class:{active:a===t.curIndex},on:{click:function(n){t.navChange(e,a)}}},[n("a",[n("i",{class:e.icon}),t._v(" "),n("div",[t._v(t._s(e.name))])])])}))])},staticRenderFns:[]}},7:function(t,e){},74:function(t,e){}},[100]);
//# sourceMappingURL=index.78cd87a90082316ca0a0.js.map