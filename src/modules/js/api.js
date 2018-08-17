let url ={
    hotLists:'/index/hotLists',
    banner:'/index/banner',
    topList:'/category/topList',
    subList:'/category/subList',
    rank:'/category/rank',
    searchList:'/search/list',
    details:'/goods/details',
    deal:'/goods/deal',
    cartAdd:'/cart/add',
    cartRemove:'/cart/remove',
    cartMremove:'/cart/mremove',
    cartReduce:'/cart/reduce',
    cartLists:'/cart/list',
    cartUpdate:'cart/update',
    addressLists: '/address/list',
    addressAdd: '/address/add',
    addressRemove: '/address/remove',
    addressUpdate: '/address/update',
    addressSetDefault: '/address/setDefault'
}

let host = 'http://rap2api.taobao.org/app/mock/32786'
// let host = 'http://rapapi.org/mockjsdata/24170'

for(let key in url){
    if(url.hasOwnProperty(key)){
        url[key] = host + url[key]
    }
}

export default url