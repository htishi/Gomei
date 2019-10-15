<template>
    <div id="setop">
      <div class="nav" v-for="(v,i) in protop">
        <ul >
          <img src="../../../assets/images/se01.png" alt="">
          <li v-for="t in v.top">
            <span>{{t.titme}}</span>
            <p>{{t.txt}}</p>
          </li>
        </ul>
        <div class="ban" v-for="t in v.ban">
          <img :src="t.img1" alt="">
         <ol>
          <li v-for="s in t.text">
            {{s.text1}}
          </li>
         </ol>
        </div>
        <div class="bot"  v-for="t in v.ban">
          <img :src="t.img2" alt="">
          <li v-for="a in t.bot">
            <img :src="a.imga" alt="">
          </li>
        </div>
      </div>

    </div>
</template>

<script>

    export default {
        name: "setop",
        data(){
            return{
                protop:""
            }
        },
        mounted() {
            var _this = this;
            //默认去项目根路径寻找
            this.$http.get('data/selective.json')
                .then((response) => {
                    this.protop=response.data.protop
                })
                .catch(function (error) {
                })
                .then(function () {
                });
        }

    }
</script>

<style scoped>
  #setop{
    background-color:#5d12ff ;
  }
  .nav{
  width: 100%;

  }
  .nav ul img{
    width: 100%;
    position: absolute;
    z-index: -1;
  }
  .nav ul{
    display: flex;
    flex-direction: row-reverse;
    position: relative;
    z-index: 12;
    color: #fff;
    font-size: .35rem;
  }
  .nav ul:before{
    content: "";
    width: 1.3rem;
    height: 1.3rem;
    background: url("../../../assets/images/se02.png") no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: 0;
    left: .4rem;
  }
  .nav ul li{
    width: 19%;
    padding-left: .1rem;
  }
  .nav .ban img{
    width: 100%;
  }
  .nav ol{
    height: .6rem;
    overflow: hidden;
    position: absolute;
    top: 5.7rem;
    left: 1.2rem;

  }
  .nav ol li{
    color:#1017c0;
    font-size: .45rem;
  }
  .bot{
    overflow: hidden;
    margin-top: -.5rem;
  }
  .bot img{
   width: 100%;
  }
  .bot li{
   width: 31%;
    float: left;
    margin-left: .19rem;
    padding: .3rem 0;
  }
  .bot li img{
    width: 100%;
  }
</style>
<style>
</style>
