<template>
    <div>
      <div class="head">
        <navtabbar>
          <div class="logo" slot="left"><p class="iconfont icon-btn_return" @click="retu()" ></p></div>
          <div class="serch" slot="cent">
            <p>国美易卡</p>
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
      <div class="center">
        <div class="imgs">
          <img src="../../assets/images/ka/ka01.jpg" alt="">
          <img src="../../assets/images/ka/ka04.jpg" alt="">
          <img src="../../assets/images/ka/ka02.jpg" alt="">
        </div>
        <div class="tab">
          <ul class="ul1">
            <li :class="{active:index==num}" v-for="(v,index) in block" @click="add(index)">{{v.tab}}</li>
          </ul>
          <ul class="ul2" v-for="v in block">
            <li v-for="t in v.pro">
              <div class="timg">
              <img :src="t.img" alt="">
              </div>
              <p><span>{{t.self}}</span>{{t.des}}</p>
              <p class="sp2">{{t.mian}}</p>
              <span class="pa">{{t.price}}</span>
            </li>
          </ul>

        </div>
      </div>
      <fchild></fchild>
    </div>
</template>

<script>
  import navtabbar from "../common/navtabbar";
  import fchild from "../common/fchild";
    export default {
        name: "gmblock",
        components:{
            navtabbar,
            fchild
        },
        data(){
            return{
                block:"",
                num:0

            }
        },
      methods:{
            add(index){
                this.num=index;
            },
          retu(){
              this.$router.go(-1);
              console.log(11)
          }
      },
        mounted() {
            var _this = this;
            //默认去项目根路径寻找
            this.$http.get('data/gmblock.json')
                .then((response) => {
                    this.block = response.data.list;
                })
                .catch(function (error) {
                })
                .then(function () {
                });
        }
    }
</script>

<style scoped>
  .head{
    position: relative;
    z-index: 1;
  }
  .logo p{

    font-size: .7rem;
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
  .center{
    width:100%;
  }
  .center .imgs img{
    width:100%;
    display: block;
    margin-top: -.05rem;
  }
  .tab{
    padding-bottom: .9rem;
  }
  .tab .ul1{
    width:100%;
    display: flex;
    background-color: #fff;
    margin: .3rem 0;
  }
  .tab .ul1 li{
    width:20%;
    text-align: center;
    padding: .4rem 0;
    font-size: .35rem;
    position: relative;
  }
  .tab .ul2 li{
    width:95%;
    height:3.4rem;
    margin: auto;
    background-color: #fff;
    margin-bottom: .25rem;
    font-size: .35rem;
  }
  .tab .ul2 li .timg{
    width:35%;

  }
  .tab .ul2 li img{
    float:left;
    width:100%;
    margin-right: .25rem;
  }
  .tab .ul2 li p{
    padding: .25rem;
  }
  .tab .ul2 li p span{
    color:#f81a81;
    border: .01rem solid#f81a81;
    margin-right: .2rem;
    border-radius: .1rem;
  }
  .tab .ul2 li .sp2{
    color:#f81a81;
  }
  .tab .ul2 li .pa{
    font-size: .38rem;
    color:#f81a81;
  }
  .active{
    color:#f81a81;
  }
  .active:before{
    content: '';
    width:1.5rem;
    height:.02rem;
    background-color: #f81a81;
    position: absolute;
    bottom: 0;
    left:.3rem;

  }



</style>
