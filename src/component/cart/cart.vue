<template>
    <div>
      <div class="head">
        <navtabbar>
          <div class="logo" slot="left"><p class="iconfont icon-btn_return" @click="retur()" ></p></div>
          <div class="serch" slot="cent">
            <h3>购物车</h3>
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
<!--      商品列表-->
      <div class="list" v-if="cartlist.length">
        <ul>
        <li v-for="(item,index) in cartlist">
            <div class="top">
              <img :src="item.logo" alt="">
              <h4>{{item.title}}</h4>
            </div>
          <div class="cent">
            <div class="checkbut">
              <p class="p1" v-if="item.selected" @click="select(item.id)"></p>
              <p class="p2" v-else @click="select(item.id)"></p>
            </div>
            <ul>
              <li>
                <img :src="item.img" alt="">
              </li>
              <li>
                <p>{{item.des}}</p>
                <span class="p2">{{item.sel}}</span>
                <p class="p3">￥{{item.price}}</p>
                <button @click="jian(index)">-</button>
                <span>{{item.count}}</span>
                <button @click="add(index)">+</button>
                <p class="p4" @click="delect(index)">删除</p>
              </li>
            </ul>
          </div>
        </li>
        </ul>
        <div class="bot" v-if="cartlist">
          <div class="selectall" @click="selectall()">
            <p class="p1" v-if="allcheck" ></p>
            <p class="p2" v-else></p>
            <span>全选</span>
          </div>
          <div class="money">合计：<span>￥{{money}}</span></div>
          <div class="jiesuan" @click="addtocart()" ><p>结算（{{num}}）</p></div>
        </div>

      </div>
      <div class="kong" v-else>
        <img src="../../assets/images/kong.png" alt="">
        <p>购物车还是空的，快去挑选商品吧</p>
      </div>
<!--      底部-->
    </div>
</template>

<script>
  import {mapState, mapGetters,mapActions} from 'vuex'
  import navtabbar from "../common/navtabbar";
    export default {
        name: "cart",
        data(){
            return{

            }
        },
        components:{
            navtabbar
        },
        computed:{
            ...mapState(['cartlist','allcheck']),
            ...mapGetters(['list' ,'money','num'])
        },
        methods:{
            retur(){
                this.$router.go(-1)
            },
            ...mapActions(['select','selectall','delect','jian','add']),
            
            addtocart(){
                this.$toast({
                  message: '成功购买',
                  iconClass: 'iconfont icon-success',
                  duration:1500,
                });
            }
        },

    }
</script>

<style scoped>
  .head{
    width:100%;
    position: fixed;
  }
  .logo p{
    font-size: .6rem;
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
  }

  .list {
    width:100%;
    padding-top: 1.6rem;
  }
  .list ul{
    width:92%;
    margin:auto;
  }
  .list ul li{
    margin-bottom: .25rem;
    font-size: .35rem;
  }
 .top{
   padding: .3rem .8rem;
   overflow: hidden;
   background-color: #fff;
 }
  .top img{
    width:8%;
    float:left;
    margin-right: .5rem;
  }
  .top h4{
    padding-top: .1rem;
  }
  .cent{
    position: relative;
  }
  .cent ul{
    width:100%;
    display: flex;
    background-color: #fff;
  }
  .cent ul li{
    padding-top: .4rem;
    font-size: .33rem;
    margin-top: .3rem;
    background-color: #fff;
  }
  .cent ul li p{
    margin-left: .3rem;
    padding-right: .1rem;
    padding-bottom: .25rem;
  }
  .cent ul li span{
    margin-left: .3rem;
    padding-right: .1rem;
  }
  .cent ul li .p2{
    background-color: #ddd;
     margin-top: .3rem;
    margin-bottom: .8rem;
  }
  .cent ul li .p3{
    color:#f81a81;
    font-size: .35rem;
    margin-top: .4rem;
  }
  .cent ul li img{
   width:76%;
    margin-left: .8rem;
  }
  .cent .p4{
    font-size: .3rem;
    color:#aaa;
    float:right;
     text-align: center;
    margin-right: .7rem;
  }
  .cent button{
    padding: .04rem .2rem;
    border: 0;
    outline: none;
  }
  .checkbut{

    position: absolute;
    top:1.7rem;
    left:.2rem;

  }
  .checkbut .p1{
    width:.4rem;
    height:.4rem;
    background-color: red;
    border-radius: 1rem;
  }
  .checkbut .p2{
    width:.4rem;
    height:.4rem;
    background-color:#fff;
    border: .02rem solid#333;
    border-radius: 1rem;
  }
  .kong {
    font-size: .4rem;
    padding-top: 2rem;
    width:100%;
    text-align: center;
    color:#aaa;
  }
  .kong img{
    width:60%;
  }

  .bot{
    width:100%;
    display: flex;
    padding: .4rem;
    position: absolute;
    bottom: 0;
    font-size: .4rem;
    overflow: hidden;
    border-top: .02rem solid#ddd;

  }
  .bot .selectall{
    width:30%;
    text-align: center;
    position: relative;
  }
  .bot .selectall .p1{
     width:.4rem;
     height:.4rem;
     background-color: red;
     border-radius: 1rem;
     border: .01rem solid red;
     position: absolute;
     top:.1rem;
     left:.2rem;
   }
  .bot .selectall .p2{
    width:.4rem;
    height:.4rem;
    background-color: #fff;
    border-radius: 1rem;
    border: .02rem solid#333;
    position: absolute;
    top:.1rem;
    left:.2rem;
  }
  .bot .money{
    width:40%;
  }
  .bot .money span{
    color:#f23568;
   }

</style>
