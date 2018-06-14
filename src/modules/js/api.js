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
    cartUpdate:'cart/update'
}


let host = 'http://rapapi.org/mockjsdata/24170'

for(let key in url){
    if(url.hasOwnProperty(key)){
        url[key] = host + url[key]
    }
}

export default url