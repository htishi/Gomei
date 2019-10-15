<template>
  <div>
    <div class="eqtop">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide><img src="../../../assets/images/eq/eq09.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../../../assets/images/eq/eq10.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../../../assets/images/eq/eq11.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../../../assets/images/eq/eq12.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../../../assets/images/eq/eq13.jpg" alt=""></swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
      <div class="tab">
        <ul>
          <li><img src="../../../assets/images/eq/eq14.png" alt=""></li>
          <li><img src="../../../assets/images/eq/eq15.png" alt=""></li>
          <li><img src="../../../assets/images/eq/eq16.png" alt=""></li>
          <li><img src="../../../assets/images/eq/eq17.png" alt=""></li>
          <li><img src="../../../assets/images/eq/eq18.png" alt=""></li>
          <li><img src="../../../assets/images/eq/eq19.png" alt=""></li>
          <li><img src="../../../assets/images/eq/eq20.png" alt=""></li>
          <li><img src="../../../assets/images/eq/eq21.png" alt=""></li>
        </ul>
      </div>






  </div>
</template>

<script>

    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        name: "eqbanner",
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
        components:{
            swiper,
            swiperSlide
        }

    }
</script>

<style scoped>
  .swiper-slide img{
    width:100%;
    display: block;

  }
  .tab ul{
    display: flex;
    flex-wrap: wrap;
    padding: .2rem 0;
  }
  .tab ul li{
    width:25%;
  }
  .tab ul li img{
    width:100%;
  }

</style>
