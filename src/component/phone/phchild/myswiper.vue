<template>
  <div>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide><img src="../../../assets/images/ph01.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="../../../assets/images/ph02.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="../../../assets/images/ph03.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="../../../assets/images/ph04.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="../../../assets/images/ph05.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="../../../assets/images/ph06.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="../../../assets/images/ph07.jpg" alt=""></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>

    <div class="nav">
      <ul>
        <li><img src="../../../assets/images/ph09.jpg" alt="">
        <p>手机通讯</p>
        </li>
        <li><img src="../../../assets/images/ph10.jpg" alt="">
          <p>电脑办公</p>
        </li>
        <li><img src="../../../assets/images/ph11.jpg" alt="">
          <p>智能数码</p>
        </li>
        <li><img src="../../../assets/images/ph12.jpg" alt="">
          <p>国美智能</p>
        </li>
      </ul>

    </div>
  </div>

</template>

<script>

    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        name: "myswiper",
        data(){
            return{
                swiperOption: {
                    pagination: '.swiper-pagination1',
                    slidesPerView: 1,
                    spaceBetween: 30,
                    centeredSlides: false,
                    spaceBetween: 0,
                    onSlideChangeEnd: swiper => {
                        //这个位置放swiper的回调方法
                        this.page = swiper.realIndex+1;
                        this.index = swiper.realIndex;
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    //自动播放
                    autoplay:{
                        delay:3000,
                        disableOnInteraction:false
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    //循环
                    loop:true
                }
            }
        },
        //定义swiper对象
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper;
            }
        },

        components:{
            swiper,
            swiperSlide
        }
    }
</script>

<style scoped>
.nav{
   background-color:#dae9fe;
  padding-bottom: .6rem;
 }
  .nav ul{
    display: flex;
    background-color: #fff;
    position: relative;
   top:.3rem;

  }
  .nav ul li{
    width:25%;
    font-size: .4rem;
    text-align: center;
    padding: .25rem;
  }
.nav ul li img{
  width:100%
}

</style>
<style>
  .swiper-slide img{
     width:100%;
     display: block;

   }
</style>
