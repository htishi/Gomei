<template>
    <div>
      <div class="title">
        <img src="../../../assets/images/eq/eq28.png" alt="">
      </div>
      <swiper :options="swiperOption">
        <swiper-slide v-for="(v, index) in produt" :key="index">
          <ul  class="list">
          <li v-for="t in v.list">
            <img :src="t.img" alt="">
            <p>{{t.des}}</p>
            <span>{{t.price}}</span>
          </li>
          </ul>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>

    </div>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        name: "eqmust",
        components:{
            swiper,
            swiperSlide
        },
        data(){
            return{
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination'
                    }
                },
                // swiperSlides: [1, 2, 3, 4, 5]
                produt:[]
            }
        },
        mounted() {
            var _this = this;
            //默认去项目根路径寻找
            this.$http.get('data/equipment.json')
                .then((response) => {
                    this.produt = response.data.produt;
                })
                .catch(function (error) {
                })
                .then(function () {
                });

        }

    }
</script>

<style scoped>
  .title img{
    width:100%;
  }
  .list{
    display: flex;
    background-color: #fff;
    padding-bottom: .3rem;
  }
  .list li{
    width:40%;
    margin-left: .65rem;
    font-size: .35rem;
    padding:.45rem 0;
  }
  .list li img{
    width:100%;
  }
  .list li p{
    padding-bottom: .5rem;
  }
  .list li span{
    color:#f81a81;
    font-size: .45rem;
  }

</style>
