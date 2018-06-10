import 'css/common.css'
import './search.css'

import Vue  from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import qs from 'qs'
import Velocity from 'velocity-animate'

// import mixin from 'js/mixin.js'

let {keyword,id} = qs.parse(location.search.substr(1))

new Vue({
    el:'.container',
    data:{
        searchList:null,
        keyword,
        show:false
    },
    created(){
        this.getSearchList()
    },
    methods:{
        getSearchList(){
          axios.post(url.searchList,{keyword,id}).then(res=>{
              this.searchList = res.data.lists
          })
        },
        move(){
            var top = document.documentElement.scrollTop == 0 ? document.body.scrollTop : document.documentElement.scrollTop;
            if(top > 100){
                this.show = true
            }else{
                this.show = false
            }
        },
        toTop(){
            Velocity(document.body,'scroll',{duration:600})
        },
    },
    filters:{
        currency(price){
            return Number(price).toFixed(2)
        }
    }

})