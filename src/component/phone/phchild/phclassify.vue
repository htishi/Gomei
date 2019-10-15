<template>
    <div>
      <div class="classify">
        <img src="../../../assets/images/pht06.jpg" alt="">
        <div class="classtop">
        <div class="tab" :class="{'isfixd':istop}" @click="retop()">
          <ul>
            <li v-for="(v,index) in classify" @click="add(index)" :class="{active:index==num}">
              {{v. tile}}
            </li>
          </ul>
        </div>
        <div class="list">
          <ul v-for="(v,index) in classify" v-show="index==num">
            <li v-for="i in v.list">
              <img :src="i.imgs" alt="">
              <p><span>{{i.self}}</span>{{i.dec}}</p>
              <p class="sp2">{{i.price}}</p>
              <span class="pa">{{i.buy}}</span>
            </li>
          </ul>
        </div>
        </div>
      </div>
      <fchild></fchild>
    </div>
</template>

<script>
import fchild from "../../common/fchild";
    export default {
        name: "phclassify",
        data(){
            return{
                classify:'',
                num:0,

                istop:false
            }
        },
        components:{
            fchild
        },
        methods:{
            add(index){
                this.num=index;

            },

            initheight(){
              let scrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop
               //let offsetTop=document.querySelector('.tab').offset

               if(scrollTop>2000){
                 this.istop=true
               }else{
                 this.istop=false
               }
            },
           retop(){
                var heih=$('.classtop').offset().top;
              $('html,body').animate({scrollTop:heih},10)


},
          destroyed(){
          window.removeEventListener('scroll',this.initheight)
        }

        },
        mounted() {
                var _this = this;
                //默认去项目根路径寻找
                this.$http.get('data/phone.json')
                    .then((response) => {
                        this.classify = response.data.classify;

                    })
                    .catch(function (error) {
                    })
                    .then(function () {
                    });
               window.addEventListener('scroll',this.initheight);
               // this.$nextTick(()=>{
               //   this.offsetTop=document.querySelector('.tab').offsetTop
               //     console.log(this.offsetTop)
               // })
        }

    }
</script>

<style scoped>
  .isfixd{
    position: fixed;
    top:0;
    left:0;
    z-index: 222;
  }
  .classify{
    background-color: #dae9fe;
    width:100%;
    overflow: hidden;
  }
  .classify img{
	  width:100%;
  }
  .tab{
    width:12rem;
    overflow: auto;
  }
.tab ul{
  display: flex;
  background-color: #fff;
  margin-bottom: .2rem;
}
  .tab ul li{
    font-size: .39rem;
    margin-left: .35rem;
    padding: .3rem 0;
  }
  .list ul{
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 1rem;
  }
  .list ul li{
    width:46%;
    margin-left: .2rem;
    background-color: #fff;
    position: relative;
    left: .1rem;
    margin-top: .16rem;
  }
  .list ul li p{
    padding: .15rem;
    font-size: .23rem;
  }
  .list ul li p span{
    background-color: #f81a81;
    color:#fff;
   margin-right: .22rem;
  }
  .list ul li .sp2{
    color:#f81a81;
    padding-top: .25rem;
    font-size: .28rem;
  }
  .list ul li .pa{
    background-color: #f81a81;
    color:#fff;
    display: block;
    width:4.2rem;
    text-align: center;
    border-radius: 1rem;
    font-size: .39rem;
    margin: auto;
    padding: .15rem 0;
    margin-bottom: .23rem;
  }
  .list ul li img{
    width:100%;
  }
  .active{
    color:#f81a81;
    border-bottom:.02rem solid#f81a81 ;
  }

</style>
