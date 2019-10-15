<template>
    <div>
      <div class="head">
        <navtabbar>
          <div class="logo" slot="left"><p class="iconfont icon-btn_return" @click="retur()"></p></div>
          <div class="serch" slot="cent">
            <li v-for="(v,index) in tab" :class="{active:index==num}" @click="add(index)">{{v}}</li>
          </div>
          <div class="right" slot="right">
            <div class="rious">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </navtabbar>
      </div>
      <!-- 父子传参传给子组件 传数据 -->
      <debanner :topimg="data.topimg"></debanner>
      <deproduct :data="data" @addcart="addtocart"></deproduct>
    <defooter @addcart="addtocart"></defooter><！--接收子组件传过来点击事件 -->
    </div>
</template>

<script>

import navtabbar from "../common/navtabbar";
import debanner from "./dechild/debanner";
import deproduct from "./dechild/deproduct";
import defooter from "./dechild/defooter";
    export default {
        name: "detail",
        data(){
            return{
                tab:['商品','详情','评价'],
                num:0,
                data:{},
                list:[],
                topimg:[],
                //从index 中homelist.vue中传过来
                id:this.$route.params.id  //获取首页传过来id值

            }
        },
        methods:{
            add(index){
                this.num=index
            },
            retur(){
                this.$router.go(-1)
            },
            //实现点击购物车的时候将在购物车要展示的数据传到vuex
            addtocart(){
                const product={};
                //拿出数据
                product.img=this.data.topimg[0];
                product.des=this.data.des;
                product.sel=this.data.sel;
                product.price=this.data.price;
                product.id=this.data.id;
                product.logo=this.data.logo;
                product.title=this.data.title;
                product.selected=this.data.selected;
                product.count=this.data.count;
                this.$store.commit('addcart',product)//数据提交
            }
        },
        mounted() {
            let that= this;
            //默认去项目根路径寻找
            this.$http.get('data/idproduct.json')
                .then((response) => {
                    let list = response.data.list;
                    if(list&&list.length>0){
                      //根据获取到的id值去请求相对应的id的值
                        that.data=list[that.id];
                    }
                })
                .catch(function (error) {
                })
                .then(function () {
                });
        },
        components:{
            navtabbar,
            debanner,
            deproduct,
            defooter
        }
    }
</script>

<style scoped>
  .head{
    width:100%;
    position: fixed;
    z-index: 111;
  }
  .logo p{
    font-size: .8rem;
  }
  .rious{
    padding: .6rem .7rem;
  }
  .rious span{
    display:block;
    width: .1rem;
    height: .1rem;
    border: .02rem solid#888888;
    border-radius: 1rem;
    float: left;
    margin-left: .1rem;
  }
  .serch {
    font-size:.42rem ;
    text-align: center;
    line-height: 1.3rem;
    color: #333;
    overflow: hidden;

  }
  .serch li{
    text-align: center;
    float:left;
    font-size: .42rem;
    margin-left: 1rem;
    position: relative;
  }
  .active{
    color:#f81a81;
  }
  .active:before{
    content: '';
    width:.9rem;
    height:.025rem;
    background-color: #f81a81;
    position: absolute;
    bottom: 0;
    left:0;
  }



</style>
