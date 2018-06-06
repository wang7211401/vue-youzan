import 'css/common.css'
import './category.css'

import Vue from 'vue'
import axios from 'axios'

import Foot from 'components/Foot.vue'
import url from 'js/api.js'
import Axios from 'axios';

new Vue({
    el:'#app',
    data:{
        topLists:null,
        subData:null,
        rankData:null,
        topIndex:0
    },
    created(){
        this.getTopList()
        this.getSubList(0)
    },
    methods:{
        getTopList(){
            axios.post(url.topList).then(res =>{
                this.topLists = res.data.lists
            }).catch(error =>{
                console.log(error)
            })
        },
        getSubList(index,id){
            this.topIndex = index
            if(index === 0){
                this.getRank()
            }else{
                axios.post(url.subList,{id}).then(res =>{
                    console.log(res)
                    this.subData = res.data.data
                })
            }
        },
        getRank(){
            axios.post(url.rank).then(res =>{
                this.rankData = res.data.data
            })
        }
            
    },
    components:{
        Foot
    }
})