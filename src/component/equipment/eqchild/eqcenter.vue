<template>
    <div>
      <div class="active">
       <img src="../../../assets/images/eq/eq29.png" alt="">
         <ul class="ul1" v-for="v in active">
          <li v-for="t in v.limg">
            <img :src="t.img" alt="">
          </li>
          <li v-for="t in v.rimg">
             <img :src="t.img" alt="" vi>
            <div class="act" >
             <img src="../../../assets/images/eq/eq32.jpg" alt="">
             <img src="../../../assets/images/eq/eq33.jpg" alt="">
             </div>

          </li>
         </ul>
      </div>
      <div class="select">
        <img src="../../../assets/images/eq/eq34.png" alt="">
        <ul>
          <li v-for="v in select">
            <img :src="v.img" alt="">
            <p>{{v.des}}</p>
            <span>{{v.price}}</span>
          </li>
        </ul>

      </div>
      <div class="band">
       <img src="../../../assets/images/eq/eq40.jpg" alt="">
        <img src="../../../assets/images/eq/eq41.png" alt="">
        <ul class="ul1" v-for="v in band">
          <li v-for="t in v.timg">
            <img :src="t.img" alt="">
          </li>
        </ul>
        <ul class="ul2" v-for="v in band">
          <li v-for="t in v.bimg">
            <img :src="t.img" alt="">
          </li>
        </ul>

      </div>


    </div>
</template>

<script>
    export default {
        name: "eqcenter",
        data(){
            return{
                active:'',
                select:'',
                band:''

            }
        },
        mounted() {
            var _this = this;
            //默认去项目根路径寻找
            this.$http.get('data/equipment.json')
                .then((response) => {
                    this.active = response.data.active;
                    this.select = response.data.select;
                    this.band = response.data.band;
                })
                .catch(function (error) {
                })
                .then(function () {
                });

        }
    }
</script>

<style scoped>
  .active{
    width:100%;
    padding: .2rem 0;
    overflow: hidden;
  }
  .active img{
	  width:100%;
  }
  .active .ul1{
    width:100%;
    display: flex;
    flex-wrap: wrap;
  }
  .active .ul1 li{
    width:50%;

  }

  .active li img{

    display: block;
  }
 
  .act img{
    width:50%;
    background-color: #5D13FF;
    float:left;
  }
  .select img{
    width:100%;
  }
  .select{
    width:100%;
    overflow: hidden;
  }
  .select ul{
    display: flex;
    flex-wrap: wrap;
    position: relative;
    left:.2rem;
    padding-bottom: .2rem;
  }
  .select ul li {
    width: 29%;
    font-size: .35rem;
    background-color: #fff;
    margin: .05rem;
    border-radius: .2rem;
    padding: .1rem;
    position: relative;
  }
  .select ul li img{
    width:100%;
    padding: .2rem 0;
  }
  .select ul li p{
    padding-bottom: 1rem;
  }
  .select ul li span{
    display: block;
    position: absolute;
    bottom: .15rem;
    padding-bottom: .2rem;
    color:#f81a81;
    font-size: .38rem;
  }
  .band{
    width:100%;
    overflow: hidden;
    padding-bottom: .2rem;
  }
  .band img{
    width:100%;
  }
  .band .ul1{
    display: flex;

  }
  .band .ul1 li{
    width:50%;
  }
  .band .ul2{
    display: flex;
    flex-wrap: wrap;

  }
  .band .ul2 li{
    width:33%;
  }



</style>
