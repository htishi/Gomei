<template>
    <div>
      <div class="lis" v-for="v in produt">
        <img :src="v.img" alt="">
        <ul class="ul1">
          <li v-for="t in v.list" v-if="t.imgs">
           <img :src="t.imgs" alt="" v-if="t.imgs">
            <p v-if="t.dec">{{t.dec}}</p>
            <p class="sp" v-if="t.price">{{t.price}}</p>
            <span v-if="t.buy">{{t.buy}}</span>
          </li>
        </ul>
        <ul class="ul2">
          <li v-for="i in v.list">
            <img :src="i.img2" alt="" v-if="i.img2"></li>
        </ul>
      </div>
      <div class="active">
        <img src="../../../assets/images/pht03.jpg" alt="">
        <ul v-for="v in active">
         <li><img :src="v.img" alt=""></li>

          <li v-for="t in v.imgs">
            <img :src="t.img1" alt="">
          </li>
          <li class="actlist" v-for="t in v.actp">
            <img :src="t.imgs" alt="">
            <p>{{t.dec}}</p>
            <span>{{t.price}}</span>
          </li>
        </ul>
      </div>
     <div class="recom">
       <img src="../../../assets/images/pht04.jpg" alt="">
        <ul v-for="v in recom" class="ul1">
          <li><img :src="v.img" alt=""></li>
          <li>
          <div class="rimg" v-for="t in v.imgs">
             <img :src="t.img1" alt="">
          </div>
          </li>
        </ul>
        <img src="../../../assets/images/pht04.jpg" alt="">
       <ul class="rec" v-for="v in recom">
         <li v-for="t in v.recs">
           <img :src="t.img" alt="">
         </li>
       </ul>
      </div>


    </div>
</template>

<script>
    export default {
        name: "tabulation",

        data(){
            return{
                produt:'',
                active:'',
                recom:''
                }
            },

    mounted() {
        var _this = this;
        //默认去项目根路径寻找
        this.$http.get('data/phone.json')
            .then((response) => {
                this.produt = response.data.produt;
                this.active = response.data.active;
                this.recom = response.data.recom
            })
            .catch(function (error) {
            })
            .then(function () {
            });
    }
    }
</script>

<style scoped>
  .lis{
    background-color:#dae9fe;
  }
  .lis img{
    width:100%
  }
  .lis .ul1{
    display: flex;
    flex-wrap: wrap;
    padding: .15rem .15rem;

  }
  .lis .ul1 li{
    width:29.5%;
    margin-left: .07rem;
    margin-top: .1rem;
    background-color: #fff;
    padding: .15rem .15rem;
  }
  .lis .ul1 li p{
       font-size: .19rem;
  }
  .lis .ul1 li .sp{
    font-size: .4rem;
    color:#f81a81;
    padding: .25rem 0;
  }
  .lis .ul1 li span{
    display: block;
    width:2rem;
    color:#fff;
    margin: auto;
    font-size: .3rem;
    border-radius: 1rem;
    background-color: #f81a81;
    text-align: center;
    padding: .15rem .2rem;
  }
  .lis .ul2{
    display: flex;
  }
  .lis .ul2 li{
    width:25%;
    margin-bottom: .2rem;
  }
  .lis .ul2 li img{
    width:100%;
  }
  .active{
    background-color:#dae9fe;
    overflow: hidden;
  }

  .active img{
    width:100%;
  }
  .active ul{
    flex-wrap: wrap;
    background-color: #f81a81;
  }
  .active ul li{
     width: 50%;
     float:left
  }
  .active ul li img{
    width:100%;
    display: block;
  }
  .active ul .actlist {
    height: 5rem;
    width:30%;
    margin: .3rem 0;
    margin-left: .15rem;
    position: relative;
    left:.2rem;
    background-color: #fff;
  }
  .actlist p{
    font-size: .3rem;
    padding: .15rem;

  }
  .actlist span{
    position: absolute;
    bottom: .18rem;
    font-size: .39rem;
    color:#f81a81;
  }
  .recom{

    overflow: hidden;
  }
  .recom img{
    width:100%;
  }
  .recom .ul1{
    display: flex;
    flex-wrap: wrap;
  }
  .recom .ul1 li:nth-child(1){
    width:41%;

   }
   .recom .ul1 li:nth-child(2){
     width:57%;
     }
      .recom .ul1 li .rimg img{
        width:49%;
        float:left;
      }
   .recom .ul1 li .ring{
     width:100%;
     background-color: #5D13FF;

   }

  .recom .rec{
    display: flex;
    flex-wrap: wrap;
    padding-bottom: .2rem;

  }
  .recom .rec li{
    width:25%;
    margin: 0;
  }
  .rec li img{
    width:100%;
    display :block;
  }


</style>
