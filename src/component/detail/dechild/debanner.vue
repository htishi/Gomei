<template>
    <div>
      <div class="swip">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="v in topimg">
          <li>
            <img :src="v" alt="">
          </li>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
      </div>
    </div>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    export default {
        name: "debanner",
        props: {
            topimg: {
                default() {
                    return []
                }
            }
        },
        data() {
            return {
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'fraction'
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                }
            }
        },
        components: {
            swiper,
            swiperSlide
        }

    }
</script>

<style scoped>

</style>
<style>
  .swiper-slide li{
     width:100%;
    padding: 1rem 0;
    background-color: #fff;
    height:7.3rem;
  }
  .swiper-slide img{
    width:85%;
    display: block;
    margin: auto;
  }
</style>
