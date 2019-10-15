<template>
    <div>
      <div class="header">
         <navtabbar>
             <div class="logo" slot="left"><p class="iconfont icon-btn_return" @click="retur()" ></p></div>
             <div class="serch" slot="cent">
               <input class="inp" type="text" placeholder="买爆品最高返800元">
             </div>
             <div class="right" slot="right">
               <div class="rious">
                 <span></span>
                 <span></span>
                 <span></span>
               </div>
             </div>
         </navtabbar>
      </div>

      <div class="tab">
          <div class="ul1">
            <div class="over">
            <li  :id="index" v-for="(v,index) in detialList" :key="index" v-on:click="add(index)" :class="{active:index ==num}">
              <a href="#" >{{v.list}}</a>
            </li>
            </div>

          </div>
        <ul class="ul2" v-for="(v,index) in detialList" v-show="index==num" :key="index">
          <li v-for="(t,index) in v.detial">
            <img :src="t.timg" alt="" v-if="t.timg">
            <div class="til">{{t.title}}</div>
            <div class="bott" v-for="(v,index) in t.prud">
              <img :src="v.imgs" alt="">
              <p v-if="v.txt">{{v.txt}}</p>
            </div>
          </li>
        </ul>
      </div>

    </div>
</template>

<script>
  import navtabbar from "../common/navtabbar";
    export default {
        name: "classify",
        components:{
            navtabbar
        },
       data(){
            return{
                detialList:'',
                num:0
            }
       },
        methods:{
            add(index){
                this.num = index;
                console.log(index);

               // var anchor=this.$el.querySelector('index');
               // let b=document.body.scrollTop= anchor.offsetTop;
               // // alert(111)
               // //  document.querySelector("#index").scrollIntoView(true)
               // //   let aa=document.querySelector('index').offsetTop;
               //   console.log(b)
               //  var h=$('.ul1 li').eq(index).offset().top-245;
               //  $('.ul1 li').eq(index).animate({'scrollTop':-h}, 100)
               //  console.log(h)


            },
            retur(){
                this.$router.go(-1)
                // this.$router.replace('/home')//替换页面
                // this.$router.push('/home')在历史记录里新增一条记录
            }
        },

        mounted() {
            var _this = this
            //默认去项目根路径寻找
            this.$http.get('data/classify.json')
                .then((response) => {
                    this. detialList=response.data. detialList
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

  }
  .rious{
   padding: .6rem .2rem;
  }
  .logo p{
    font-size: .7rem;
  }
.rious span{
  display:block;
  width: .1rem;
  height: .1rem;
  border: .02rem solid#888888;
  border-radius: 100%;
  float: left;
  margin-left: .02rem;
}
  .right{
    width: 12%;
  }

  .tab{
    width: 100%;
    /*height:100vh;*/
    height: calc(100vh - 1.5rem);
    display: flex;
    background-color: #fff;
  }
  .tab .ul1{
    width: 21.8%;
    padding-top: 0rem;
    overflow: auto;
    background-color:#f0f0f0;



  }

  .tab .ul1 li{
    text-align: center;
    position: relative;
    padding:  0 .3rem;

  }
  .tab .ul1 li a{
    display: block;
    padding: .32rem 0;
    font-size: .39rem;
    border-bottom: .02rem solid#ddd;
  }
 .active{
    color:#f6548a;
   background-color: #fff;
  }
  .active:before{
    content: '';
    width: .04rem;
    height: 1.18rem;
    background-color: #fd0175;
    position: absolute;
    top: 0;
    left: 0;
  }

  .tab .ul2{
    width: 78.2%;
    /*height: calc(100%- 60px);*/
    padding-top: .1rem;
    overflow: auto;
    padding-bottom: 1rem;
  }
  .tab .ul2 li{
    font-size: .3rem;
    color: #888888;
    padding: 0 .2rem;
    display: flex;
    flex-wrap: wrap;
  }
  .tab .ul2 li .til{
    width:100%;
    margin-top: .3rem;
  }
  .tab .ul2 li .bott{
    background-color:#f8f8f8 ;
    width: 30%;
    margin: .2rem  0 0 0;
    padding: .3rem 0;
    margin-left: .2rem;
    text-align: center;
    position: relative;
    left: -.1rem;
  }
  .tab .ul2 li:nth-child(6){
     margin: -.1rem 0;
  }
  .tab .ul2 li .bott img{
    width: 90%;
  }







</style>
