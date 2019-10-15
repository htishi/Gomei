<template>
    <div>
      <div class="top">
        <li>
        <p><span>{{data.support}}</span>{{data.des}}</p>
        <p class="sp2">{{data.expl}}</p>
        <p class="sp3">￥{{data.price}}</p>
        </li>
        <div class="share">
          <img src="../../../assets/images/share.png" alt="">
          <p>分享</p>
        </div>
      </div>
      <div class="center">
        <ul>
          <li class="li1">
            <p>已选<span>{{data.sel}}</span></p>
            <p class="sp2">推荐 <span>增至服务</span></p>
            <p class="iconfont icon-arrow sp3" @click="show"></p>
            <div class="demo" v-show="isshow">
               <div class=close @click="close()">
                <span>X</span>
                </div>
                <div class="top">
                   <img :src="data.images" alt="">
                   <p v-show="num==0">{{data.price}}</p>
                   <p v-show="num==1">{{data.price2}}</p>
                   <span>有货</span>
                </div>
                <div class="cent">
                  <p>颜色版本</p>
                  <li v-for="(v,index) in data.color" :class="{col:index==num}" @click="clik(index)">
                    {{v.ch}}
                  </li>
                   <div class="cunt">
                     <li><p>数量</p>
                         <span>-</span>
                         <span class="sp2">{{data.count}}</span>
                         <span>+</span>
                     </li>
                   </div>
                </div>
                <div class="bot">
                      <p>增值服务</p>
                      <li v-for="v in data.baox">
                        <p>  {{v.txt}}</p>
                         <div class="txt" v-for="a in v.year" >
                              <p>{{a.text}}</p>
                              <span>{{a.pri}}</span>
                         </div>

                      </li>
                </div>
                <div class="demof">
                    <button @click="addtocart"><p>加入购物车</p></button>
                    <button class="but2"><p> 立即购买</p></button>
                </div>
            </div>
          </li>
          <li class="li2">
            <p class="p1">送至</p>
            <p class="p2"><span>朝阳外街道，免运费</span>{{data.add}}</p>
          </li>
          <li class="li3">
            <p>朝阳区门店 <span>{{data.sh}}</span></p>
            <div class="people">
              <img :src="data.img" alt="">
              <p>{{data.nam}}</p>
              <p>{{data.se}}</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="like">
        <p>猜你喜欢</p>
        <swiper :options="swiperOption">
          <swiper-slide v-for="(v, index) in data.like" :key="index">
            <ul  class="list">
              <li v-for="t in v.list">
                <img :src="t.img" alt="">
                <p>{{t.pri}}</p>
                <span>{{t.des}}</span>
              </li>
            </ul>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="bot">
        <ul>
          <li><p>商品介绍</p></li>
          <li><p>规格参数</p></li>
          <li><p>包装售后</p></li>
        </ul>
        <div class="img">
          <img :src="v" alt="" v-for="v in data.botimg">
        </div>
      </div>


    </div>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        name: "deproduct",
        props: {
            data: {
                default() {
                    return []
                }
            }
        },
        data(){
            return{
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination'
                    }
                },
                isshow:false,
                num:0,

            }
        },
        methods:{
          show(){
            this.isshow=true
          },
          clik(index){
            this.num=index;
          },
          close(){
             this.isshow=false
          },
          
          addtocart(){
              this.$emit('addcart')
              this.$toast({
                message: '已经加入购物车',
                iconClass: 'iconfont icon-success',
                duration:1500,
              });
        }
        },
        components:{
            swiper,
            swiperSlide
        },
    }
</script>

<style scoped>
  .top{
    background-color: #fff;
    position: relative;
    padding: .28rem;
  }
  .top li{
    width:80%;
    line-height: .5rem;

  }
  .top li p{
    font-size: .3rem
  }
  .top li p span{
    color:#fff;
    font-size: .25rem;
    background-color: #f81a81;
    margin-right: .15rem;
  }
  .top li .sp2{
    font-size: .15rem;
    color:#f81a81;
  }
  .top li .sp3{
    padding-top: .4rem;
    padding-bottom: .1rem;
    font-size: .55rem;
    color: #f20c59;
  }
  .top .share{
    width:18%;
    font-size: .35rem;
    text-align: center;
    color: #333;

    border-left:.02rem solid#ddd ;
    position: absolute;
    top:.3rem;
    right:0;
  }
  .top .share p{
    padding-top: .25rem;
  }
.center ul{
  width:100%;
  overflow: hidden;
}
  .center ul li{
    background-color: #fff;
    margin: .3rem 0;
    padding: .35rem .29rem;
  }
  .center ul li p{
    color:#aaa;
    font-size: .27rem;
  }
  .center ul li p span{
    color:#000;
    padding-left: .25rem;
  }

  .center ul li .sp2{
    padding-top: .2rem;
  }
  .center ul li .sp2 span{
    color: #4abbff;
  }
  .center ul .li1{
    position: relative;
  }
  .center ul .li1 .sp3{
    width:.6rem;
    height:.6rem;
     font-size: .6rem;
    position: absolute;
    top:.7rem;
    right:.5rem;
  }

  .center ul .li2 .p1{
    float:left;
    height: .7rem;
    padding-right: .4rem;
    font-size: .3rem;
  }
  .center ul .li2 .p2 span{
    padding-right: .32rem;
  }
.people{
  width:100%;
  background-color:#f9f9f9 ;
  overflow: hidden;
  padding: .5rem .2rem;
}
  .people img{
    width:20%;
    float: left;
    border-radius:100%;
    margin-right: .3rem;
  }
  .people p{
    font-size: .23rem;
    color:#333;
    padding-top: .2rem;
  }
.like{
  background-color: #fff;
  font-size: .26rem;
  padding: .3rem;
  overflow: hidden;
}
  .like ul{
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    padding-bottom: .7rem;
  }
  .like ul li{
    width:28%;
    height: 3.6rem;
    margin-left: .3rem;
  }
  .like ul li p{
    font-size: .37rem;
    padding: .3rem 0;
  }
  .like ul li span{
    font-size: .3rem;
    color: #aaa;
  }
  .like ul li img{
    width:100%;
  }

  .bot ul {
    display: flex;
    border-bottom:.02rem solid#ddd ;
    border-top:.02rem solid #ddd ;
    background-color: #fff;
    margin-top: .3rem;
  }
  .bot ul li{
    width:30%;
    margin-left: .2rem;
    text-align:center ;
    padding: .4rem;
    font-size: .38rem;
    position: relative;
    color:#aaa
  }
  .bot ul li:before{
    content: '';
    width:.02rem;
    height:.8rem;
    background-color: #ddd;
    position:absolute;
    top:.2rem;
    left:-.2rem
  }
  .bot ul li:nth-child(1):before{
    height:0;
  }
  .bot ul li:nth-child(1){
    color:#000;
  }
  .img img{
    width:100%;
    display: block;
    margin-top: -.02rem;
  }
  .demo{
    width:85%;
    height:100vh;
    background-color: #fff;
    position: fixed;
    top:0;
    right:0;
    z-index: 222;
  }
  .close{
    overflow: hidden;
  }
  .close span{
    font-size: .5rem;
    float:right;
    margin-right:.7rem;
    margin-top: .5rem;
  }
  .demo .top{
    overflow: hidden;
    font-size: .4rem;
    color:#F20C59;
    border-bottom: .01rem solid#ddd;
  }
   .demo .top p{
     font-size: .4rem;
     color:#F20C59;
     margin-top: .5rem;
    }
  .demo .top img{
    width:30%;
    float:left;
    margin-right: .4rem;
  }
   .demo .cent{
     padding: .3rem ;

      border-bottom: .01rem solid#ddd;
   }
  .demo .cent p{
    color:#000;
    font-size: .33rem;
  }
   .demo .cent li{
     height:.4rem;
   }
   .demo .cent li{
     width:50%;
     border: .01rem solid#ddd;
     padding: .2rem;
    }
    .demo .cent .col{
      color:#F20C59;
      border: .01rem solid #F20C59;
    }
    .demo .cunt li{
      border: 0rem;
      font-size: .4rem;
      padding: .2rem .6rem;

    }
     .demo .cunt li p{
       float:left;
       margin-right: 1rem;
       }
    .demo .cunt li span{
          border: .01rem solid#aaa;
          padding: .1rem .2rem;
          background-color: #ddd;
     }
     .demo .cunt li .sp2{
       background-color: #fff;
       padding: .1rem .3rem;
     }
     .demo .bot{
       padding:.2rem .3rem;

     }
      .demo .bot li{
        border: 0px;
        color:#aaa;
        overflow: hidden;
       }
      .demo .bot li .txt{
        width:37%;
        float:left;
         border: .01rem solid#ddd;
         margin-top: .2rem;
         margin-left: .5rem;
         padding: .1rem;
       }
     .demo .demof{
          display: flex;


      }
       .demo .demof p{
         color:#fff;
         font-size: .4rem;
       }
      .demo .demof button{
        width:50%;
        height:1.2rem;
        background-color: #fcb103;
        border: 0;
        text-align: center;
        }
        .demo .demof li{
          width:50%;
          background-color: #F20C59;
        }
        .demo .demof .but2{
          background-color: #F20C59;
          }







</style>
