import './goods_common.css'
import './goods_custom.css'
import './goods.css'
import './goods_theme.css'
import './goods_mars.css'
import './goods_sku.css'

import Vue from 'vue'
import url from 'js/api.js'
import axios from 'axios'
import qs from 'qs'
import Swipe from 'components/Swipe.vue'

let {id} = qs.parse(location.search.substr(1))

let detailTop = ['商品详情','本店成交']

new Vue({
    el:'#app',
    data:{
        details:null,
        detailTop,
        tabIndex:0,
        dealLists:null,
        SwipeLists:[],
        showSku:false,
        skuType:1,
        skuNum:1,
        isAddCart:false,
        showAddMessage:false
    },
    created(){
        this.getDetails()
    },
    methods:{
        getDetails(){
            axios.post(url.details,{id}).then(res=>{
                let data = res.data.data
                console.log(data)
                data.skuList.forEach(sku => {
                    let lists = []
                    sku.lists.forEach(item=>{
                        lists.push({
                            active:false,
                            tag:item
                        })
                    })
                    sku.lists = lists
                });

                this.details = data
                data.imgs.forEach(item=>{
                    this.SwipeLists.push({
                        clickUrl:'',
                        image:item
                    })
                })
            })
        },
        changeTabIndex(index){
            this.tabIndex = index
            if(index === 1){
                this.getDeal()
            }
        },
        getDeal(){
            axios.post(url.deal,{id}).then(res=>{
                console.log(res)
                this.dealLists = res.data.data.lists
            })
        },
        chooseSku(index){
            this.showSku = true
            this.skuType = index
        },
        changeSkuNum(num){
            if(num < 0 && this.skuNum ===1) return
            this.skuNum += num
        },
        addCart(){
            axios(url.cartAdd, {id, number: this.skuNum}).then(res => {
                if(res.data.status === 200 ){
                  this.isAddCart = true
                  this.showSku = false
                  this.showAddMessage = true
                  setTimeout(() => {
                    this.showAddMessage = false
                  },2000)
                }
            })
        }
    },
    components:{
        Swipe
    },
    filters:{
        number(price){
            return Number(price).toFixed(2)
        }
    },
    watch:{
        showSku(val){
            document.body.style.overflow = val ? 'hidden' : 'auto'
            document.body.style.height = val ? '100%' : 'auto'
            document.querySelector('html').style.overflow = val ? 'hidden' : 'auto'
            document.querySelector('html').style.height = val ? '100%' : 'auto'
        }
    }
})