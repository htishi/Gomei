<template>
    <div>
      <div class="header"><navtabbar></navtabbar></div>
    <!--轮播图-->
      <div class="banner"><banner></banner></div>

      <div class="nav"><homenav></homenav></div>

      <div class="center"><homecent></homecent></div>
<!--      商品列表-->
      <div class="list"><homelist></homelist></div>

    <div class="foote"><foote></foote></div>

    </div>
</template>

<script>
  import navtabbar from "../common/navtabbar";
  import foote from "../common/footer";
  import banner from "./Homechild/banner";
  import homenav from "./Homechild/homenav";
  import homecent from "./Homechild/homecent";
  import homelist from "./Homechild/homelist";

    export default {
        name: "index",
         components:{
             navtabbar,
             foote,
             banner,
             homenav,
             homecent,
             homelist
         },
        data(){
            return{
            }
        },
        methods:{
            focus(){
                this.$router.replace({path:'/search'})//路由跳转
            }
        },
        mounted() {
            var _this = this
        //默认去项目根路径寻找
        this.$http.get('src/data/idproduct.json')
            .then((response) => {

            })
            .catch(function (error) {
            })
            .then(function () {
            });
  }
        }
</script>
<style scoped>
  .header{
    width:100%;
    position: fixed;
    z-index: 111;

  }

</style>
<style>
  .bann img{
    width: 100%;
  }
  .bann .mint-swipe-items-wrap {
    padding-bottom:46.66%;
    height:0
  }

</style>


