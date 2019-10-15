<template>
    <div>
      <div class="nav">
        <div id="top" :class="{istop:isshow}">
			       <swiper :options="swiperOption">
			        <swiper-slide v-for="(v,index) in navtab">
			           <li :class="{active:index==num}"@click="add(index)">{{v.text}}</li>
			        </swiper-slide>
			       </swiper>
        </div>
      </div>

     <div class="list" v-for="(v,index) in prolist" >
         <img :src="v.timg" alt="" v-if="v.timg">
          <ul id="ul1">
          <li v-for="(t,index) in v.list" v-if="t.img" class="li2">
            <img :src="t.img" alt="">
            <p v-if="t.des">{{t.des}}</p>
            <span v-if="v.sheng">{{t.sheng}}</span>
            <p class="sp2">{{t.price}}</p>
            <p  class="p3" v-if="t.tit">{{t.tit}}</p>
            <p  class="p4" v-if="t.de">{{t.de}}</p>
          </li>
       </ul>
       <div class="imglist" >
         <li v-for="(t,index) in v.imglist" v-if="t.img2">
           <img :src="t.img2" alt="">
         </li>
       </div>
     </div>

      <div class="bot">
        <span>看完啦</span>
      </div>

    </div>
</template>
<script>

    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        name: "navtab",
        data(){
            return{
                swiperOption: {
                          slidesPerView: 'auto',
                          spaceBetween: 30,
                          pagination: {
                            el: '.swiper-pagination',
                            clickable: true
                          },

			},
                navtab:"",
                prolist:'',
                num:0,
                isshow:false,
            }
        },
        components:{
            swiper,
            swiperSlide
        },

        mounted() {
            var _this = this;
            //默认去项目根路径寻找
            this.$http.get('data/selective.json')
                .then((response) => {
                    this.navtab=response.data.navtab;
                    this.prolist=response.data.prolist
                })
                .catch(function (error) {
                })
                .then(function () {
                });

		   window.addEventListener('scroll',this.initheight);

        },

        methods:{
          add(index){
            this.num=index
            var heih=$('.bot').offset().top;
            $('html,body').animate({scrollTop:440},10)
            if(index==1){
              $('top').css('left','-200px')
              $('html,body').animate({scrollTop:1000},10)
            }
            if(index==2){
              $('html,body').animate({scrollTop:1395},10)
            }
            if(index==3){
              $('html,body').animate({scrollTop:1785},10)
            }

          },
          initheight(index){
            let scrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop
           let offsetTop=document.querySelector('.bot').offset

             if(scrollTop>360){
               this.isshow=true
             }else{
               this.isshow=false
             }
          },
          destroyed(){
            window.removeEventListener('scroll',this.initheight)
           },
        }
    }
</script>

<style scoped>
  .istop{
    position:fixed;
    top:0;
    left:0;
    z-index: 2222;
    background-color: #fff;
  }
	 .swiper-slide {
	    width: 15%;
	  }
	  .swiper-slide:nth-child(2n) {

	  }
	  .swiper-slide:nth-child(3n) {

	  }
  #top li{
    text-align: center;
     font-size: .36rem;
     padding-top: .29rem ;
     padding-bottom: .37rem;

  }
  .nav{
    background-color: #fff;
  }
 .nav ul {
    width: 800px;
    overflow: auto;
  }
  .nav ul li{
    width: 9%;
    float: left;
    margin-left: .2rem;
    padding-top: .25rem;
    font-size: .43rem;
    text-align: center;
    padding-bottom: .35rem;
    position: relative;
  }
  .active{
    color: #fd0175;
  }
  .active:before{
    content: "";
    width: .5rem;
    height: .03rem;
    background-color: #fd0175;
    position: absolute;
    bottom: .19rem;
    left: .5rem;
  }
  .list{
    background-color: #5d13ff;

  }

  .list ul{
    display: flex;
    padding:.28rem;
    flex-wrap: wrap;

  }
  .list img{
    width: 100%;
    margin-top: -.16rem;
    display: block;
  }
  .list ul li{
    width: 29.2%;
    margin-left: .09rem;
    margin-bottom: .09rem;
    background-color: #fff;
    padding: .15rem;
    position: relative;

  }
  .list ul li span{
    color: #aaa;
  }
  .list ul li .sp2{
    font-size: .4rem;
    color: #fd0175;
  }
  .list ul li .p3{
    font-size: .3rem;
    color: #fff;
    text-align: center;
    position:absolute;
    top: 1.9rem;
    left: .8rem;
  }
  .list ul li .p4{
    font-size: .28rem;
    color: #fff;
    text-align: center;
    position:absolute;
    top: 2.3rem;
    left: .2rem;
  }
  .imglist{
    display: flex;
    flex-wrap: wrap;
  }
  .imglist li{
    width: 33.33%;
  }
  .imglist li img{
    width: 100%;
    display: block;
  }
  .bot {
    background-color:#5d13ff ;
    color: #fff;
    padding: .4rem .4rem;
  }
  .bot span{
    display:block;
     width:5rem;
    height: .5rem;
    margin: auto;
    text-align: center;
    line-height: .5rem;
    font-size: .4rem;
    position: relative;
  }
  .bot span:before{
     content:'';
     width:1.75rem;
     height:.03rem;
     background-color: #fff;
     position: absolute;
     top:.2rem;
     left:0;
   }
  .bot span:after{
    content:'';
    width:1.75rem;
    height:.03rem;
    background-color: #fff;
    position: absolute;
    top:.2rem;
   right:0;
  }



</style>
