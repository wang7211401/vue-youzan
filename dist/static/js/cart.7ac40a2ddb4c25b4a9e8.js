webpackJsonp([5],{0:function(t,e,i){"use strict";var n={hotLists:"/index/hotLists",banner:"/index/banner",topList:"/category/topList",subList:"/category/subList",rank:"/category/rank",searchList:"/search/list",details:"/goods/details",deal:"/goods/deal",cartAdd:"/cart/add",cartRemove:"/cart/remove",cartMremove:"/cart/mremove",cartReduce:"/cart/reduce",cartLists:"/cart/list",cartUpdate:"cart/update",addressLists:"/address/list",addressAdd:"/address/add",addressRemove:"/address/remove",addressUpdate:"/address/update",addressSetDefault:"/address/setDefault"};for(var o in n)n.hasOwnProperty(o)&&(n[o]="http://rapapi.org/mockjsdata/24170"+n[o]);e.a=n},105:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(68),o=(i.n(n),i(69)),s=(i.n(o),i(70)),r=(i.n(s),i(2)),d=i(1),c=i.n(d),a=i(0),h=i(24),u=i.n(h),f=(i(67),i(17));new r.default({el:".container",data:{lists:null,total:0,editingShop:null,editingShopIndex:-1,removePopup:!1,removeData:null,removeMsg:""},computed:{allSelected:{get:function(){return!(!this.lists||!this.lists.length)&&this.lists.every(function(t){return t.checked})},set:function(t){this.lists.forEach(function(e){e.checked=t,e.goodsList.forEach(function(e){e.checked=t})})}},selectLists:function(){if(this.lists&&0===this.lists.length&&(this.total=0),this.lists&&this.lists.length){var t=[],e=0;return this.lists.forEach(function(i){i.goodsList.forEach(function(i){i.checked&&(t.push(i),e+=i.price*i.number)})}),this.total=e,t}},allRemoveSelected:{get:function(){return!!this.editingShop&&this.editingShop.removeChecked},set:function(t){this.editingShop&&(this.editingShop.removeChecked=t,this.editingShop.goodsList.forEach(function(e){e.removeChecked=t}))}},removeLists:function(){if(this.editingShop){var t=[];return this.editingShop.goodsList.forEach(function(e){e.removeChecked&&t.push(e)}),t}return[]}},created:function(){this.getLists()},methods:{getLists:function(){var t=this;c.a.post(a.a.cartLists).then(function(e){var i=e.data.cartList;i.forEach(function(t){t.checked=!0,t.removeChecked=!1,t.editing=!1,t.editingMsg="编辑",t.goodsList.forEach(function(t){t.checked=!0,t.removeChecked=!1})}),t.lists=i})},selectGood:function(t,e){var i=this.editingShop?"removeChecked":"checked";e[i]=!e[i],t[i]=t.goodsList.every(function(t){return t[i]})},selectShop:function(t){var e=this.editingShop?"removeChecked":"checked";t[e]=!t[e],t.goodsList.forEach(function(i){i[e]=t[e]})},selectAll:function(){var t=this.editingShop?"allRemoveSelected":"allSelected";this[t]=!this[t]},edit:function(t,e){t.editing=!t.editing,t.editingMsg=t.editing?"完成":"编辑",this.lists.forEach(function(i,n){e!==n&&(i.editing=!1,i.editingMsg=t.editing?"":"编辑")}),this.editingShop=t.editing?t:null,this.editingShopIndex=t.editing?e:-1},start:function(t,e){e.startX=t.changedTouches[0].clientX},end:function(t,e,i,n){var o=t.changedTouches[0].clientX,s="0";i.startX-o>100&&(s="-60px"),o-i.startX>100&&(s="0px"),u()(this.$refs["goods-"+e+"-"+n],{left:s})},reduce:function(t){1!==t.number&&c.a.post(a.a.cartReduce,{id:t.id,number:1}).then(function(e){t.number--})},add:function(t){c.a.post(a.a.cartAdd,{id:t.id,number:1}).then(function(e){t.number++})},remove:function(t,e,i,n){this.removePopup=!0,this.removeData={shop:t,shopIndex:e,good:i,goodIndex:n},this.removeMsg="确定要删除该商品吗？"},removeList:function(){this.removePopup=!0,this.removeMsg="确定将所选 "+this.removeLists.length+" 个商品删除?"},removeConfirm:function(){var t=this;if("确定要删除该商品吗？"===this.removeMsg){var e=this.removeData,n=e.shop,o=e.shopIndex,s=e.good,r=e.goodIndex;i.i(f.a)(a.a.cartRemove,{id:s.id}).then(function(e){n.goodsList.splice(r,1),console.log(n.goodsList.length),n.goodsList.length||(t.lists.splice(o,1),t.removeShop()),t.removePopup=!1})}else{var d=[];this.removeLists.forEach(function(t){d.push(t.id)}),c.a.post(a.a.cartMremove,{ids:d}).then(function(e){var i=[];t.editingShop.goodsList.forEach(function(e){-1===t.removeLists.findIndex(function(t){return t.id===e.id})&&i.push(e)}),i.length?t.editingShop.goodsList=i:(t.lists.splice(t.editingShopIndex,1),t.removeShop()),t.removePopup=!1})}},removeShop:function(){this.editingShop=null,this.editingShopIndex=-1,this.lists.forEach(function(t){t.editing=!1,t.editingMsg="编辑"})}},filters:{number:function(t){return t.toFixed(2)}}})},17:function(t,e,i){"use strict";function n(t,e){return new s.a(function(i,n){d.a.post(t,e).then(function(t){var e=t.data.status;i(t)}).catch(function(t){n(t)})})}var o=i(48),s=i.n(o),r=i(1),d=i.n(r);e.a=n},67:function(t,e,i){"use strict";var n=i(49),o=i.n(n),s=i(50),r=i.n(s),d=i(17),c=i(0);!function(){function t(){o()(this,t)}r()(t,null,[{key:"add",value:function(t){return i.i(d.a)(c.a.cartAdd,{id:t,number:1})}},{key:"reduce",value:function(t){return i.i(d.a)(c.a.cartReduce,{id:t,number:1})}},{key:"remove",value:function(t){var e=[];t.forEach(function(t){e.push(t.id)})}}])}()},68:function(t,e){},69:function(t,e){},70:function(t,e){}},[105]);
//# sourceMappingURL=cart.7ac40a2ddb4c25b4a9e8.js.map