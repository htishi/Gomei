<template>
    <div>
      <div class="tline">
        <div class="top-t">
          <ul v-for="(v,i) in  tlinei">
            <li>
              <div class="img1">
                <img :src="v.timg">
              </div>
              <div class="img2">
                <img :src="v.timg1">
              </div>
              <div class="img3">
                <img :src="v.timg2">
              </div>
            </li>
          </ul>
        </div>

        <div class="wrap">
          <div class="con-t">
            <img src="../../../assets/images/tline.png" alt="">
            <p><span>国美黄金</span>投资金条 优惠购金</p>
          </div>
          <div class="con-left">
            <li>
              <div class="le-top">
                <img src="../../../assets/images/seck.png" alt="">
                <span>02:02:53</span>
              </div>
              <div v-for="(v,i) in  seck" class="limg">
                <img :src="v.img" alt=""><br>
                <p>{{v.price}}</p>
                <span>{{v.oldp}}</span>
              </div>
            </li>
            <li v-for="(v,i) in  topline" class="other">
              <h4>{{v.title}}</h4>
              <p>{{v.describe}}</p>
              <img :src="v.img" alt="">
            </li>
          </div>
        </div>
      </div>

      <div class="cent-img">
        <img src="../../../assets/images/tline03.jpg" alt="">
      </div>

      <div class="wrap">
        <div class="select-top">
          <img src="../../../assets/images/schoo.png" alt="">
          <router-link to=""><p>更多></p></router-link>
        </div>
        <ul class="select-con">
          <li v-for="(v,i) in selet"><img :src="v.img1" alt=""></li>
          <li v-for="(v,i) in selet">
            <p>{{v.title}}<span>今日好货</span></p>
            <img :src="v.img2" alt="">
            <img :src="v.img3" alt="">
          </li>
        </ul>
        <div class="select-bot">
          <li><h4>电脑办公</h4> <p>近30天<br>月销2983</p></li>
          <li v-for="(v,i) in selet">
            <div v-for="(t,i) in v.selbot" class="sel-t">
              <img :src="t.img4" alt="">
              <p>{{t.price}}</p>
            </div>
          </li>
        </div>

      </div>

      <div class="top-t">
        <ul v-for="(v,i) in  tlinei">
          <li>
            <div class="img2">
              <img :src="v.timg3" >
            </div>
            <div class="img3">
              <img :src="v.timg4" >
            </div>
            <div class="img1">
              <img :src="v.timg5" >
            </div>
          </li>
        </ul>
      </div>

      <div class="active" v-for="v in active" >
        <div class="wrap">
          <h2><img :src="v.timg" alt=""></h2>
          <div class="act-img">
            <div v-for="a in v.acts" class="act">
              <p>{{a.title}}</p>
              <span>{{a.describe}}</span>
              <img :src="a.imgs" alt="">
            </div>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "homecent",
        data(){
            return{
                tlinei:'',
                seck:'',
                topline:'',
                selet:[],
                active:'',
            }
        },
        mounted() {
            var _this = this
            //默认去项目根路径寻找
            this.$http.get('data/idproduct.json')
                .then((response) => {
                    this.tlinei = response.data.tlinei;
                    this.seck=response.data.seck;
                    this.topline=response.data.topline;
                    this.selet=response.data.selet;
                    this.active=response.data.active;
                })
                .catch(function (error) {
                })
                .then(function () {
                });

        }

    }
</script>

<style scoped>

  .top-t ul li{
    width: 94%;
    margin: auto;
  }
  .top-t ul img{
    padding: .1rem 0 0 0;
  }
  .top-t ul .img1 img{
    width: 100%;
    margin: auto;
  }
  .top-t ul .img2 img{
    width: 48.9%;
    float: left;
  }
  .top-t ul .img3 img{
    width: 48.9%;
    padding-left: .05rem;

  }
  .tline{
    width: 100%;
    overflow: hidden;
  }
  .wrap{
    background-color:#fff;
    width: 94%;
    border-radius: .1rem;
    margin: auto;
    margin-top:.1rem;
    overflow: hidden;
    position: relative;
  }
  .con-t{
    overflow: hidden;

  }
  .con-t img{
    width: 22%;
    float: left;
    padding: .25rem .1rem;
  }
  .con-t p{
    padding-top: .2rem;
    margin-left: .2rem;
    font-size: .2rem;
    color: #333;
    margin-right: .15rem;
  }
  .con-t p span{

    background-color:#ffdce7;
    color: red;
    padding:0 .1rem;
    margin-right: .08rem;
    border-radius: .05rem;
    margin-left: .1rem;
  }
  .con-t p span:before{
    content: "";
    display: block;
    width: .01rem;
    height: .17rem;
    background-color: #ddd;
    position: absolute;
    top: .16rem;
    left: 1rem;
  }
  .con-left{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .con-left li{
    width: 49.8%;
    padding-top: .15rem;
    border-top: .02rem solid#ddd;
    overflow: hidden;
    font-size: .39rem;

  }
  .con-left li:nth-child(1){
    border-right: .02rem solid#ddd;
  }
  .con-left li:nth-child(3){
    border-right: 1px solid#ddd;
  }
  .le-top{
    width: 100%;
    overflow: hidden;
    padding-bottom: .2rem;
  }
  .le-top img {
    width: 45%;
    padding-right: .2rem;
    margin-bottom: .01rem;
    float: left;
  }
  .le-top span{
    display: block;
    width: 30%;
    border:.01rem solid red;
    font-size: .3rem;
    color:red;
    float: left;
    padding: .03rem .03rem 0 .03rem;
    margin-left: .03rem;
    border-radius: .03rem;
  }
  .limg {
    width: 30%;
    float: left;
    font-size:.3rem;
    font-weight: bold;
    color: #333;
    padding-left: .08rem;
    padding-bottom: .15rem;

  }
  .limg img{
    width: 100%;
  }
  .limg span{
    color: #aaa;
    text-decoration: line-through;
  }
  .other img{
    width: 100%;
  }
  .other h4{
    padding-left: .1rem;
  }
  .other p{
    padding-left: .1rem;
    padding-top: .03rem;
    font-size: .22rem;
    color: #888;
  }
  .cent-img{
    text-align: center;
    padding: .2rem 0 0 0;

  }
  .cent-img img{
    width: 95%;
  }
  .select-top{
    width: 100%;
  }
  .select-top img{
    width: 100%;
  }
  .select-top p{
    position: absolute;
    right:.15rem;
    top: .2rem;
    font-size: .24rem;
  }
  .select-con{
    width: 100%;
    overflow: hidden;
  }
  .select-con li{
    width: 49%;
    float: left;
    font-size: .35rem;
  }
  .select-con li img{
    width: 100%;
  }
  .select-con li:nth-child(2){
    padding-bottom: .37rem;
    border-top: .01rem solid #eee;
    border-bottom:.01rem solid #eee ;
  }
  .select-con li:nth-child(2) img{
    width: 38%;
    padding-left: .1rem;
    padding-top: .25rem;
  }
  .select-con li:nth-child(2) p{
    padding-top: .2rem;
    padding-left: .15rem;
  }
  .select-con li:nth-child(2) p span{
    font-size: .2rem;
    background-color:#4abbff ;
    padding: .01rem .04rem .01rem .04rem;
    margin-left: .15rem;
    border-radius: .03rem;
    color: #fff;
  }
  .select-bot{
    width: 100%;
    overflow: hidden;
  }

  .select-bot li:nth-child(1){
    width: 30%;
    background: url("../../../assets/images/下载.png ")no-repeat;
    background-size:100% 100%;
    text-align: center;
    margin-left: .2rem;
    float: left;
  }
  .select-bot li:nth-child(1) h4{
    padding: .2rem;
  }
  .select-bot li:nth-child(1) p{
    padding: .4rem;
    font-size: .25rem;
    color: #888888;
  }
  .select-bot li:nth-child(2) {
    width: 67%;
    overflow: hidden;
    font-size: .3rem;
    padding-bottom: .2rem;
  }
  .select-bot .sel-t{
    width: 29%;
    float: left;
    margin-left: .2rem;
    padding-top: .15rem;
  }
  .select-bot li:nth-child(2) img{
    width: 100%;
  }
  .select-bot li:nth-child(2) p{
    font-size: .3rem;
    color: #888;
    float: left;
    padding-top: .05rem;
  }
  .active{
    width: 100%;
    margin-bottom: .15rem;
    display: flex;
  }
  .active h2 img{
    width: 100%;
  }
  .act-img{
    width: 100%;
    display: flex;

  }
  .act-img .act{
    width: 50%;
    border-top: .02rem solid #eee;
  }
  .act-img .act:nth-child(1) {
    border-right: 1px solid #eee;
  }
  .act-img img{
    width: 100%;
    padding-top: .1rem;
  }
  .act-img .act p,span{
    font-size: .3rem;
    padding: .13rem 0 0 .13rem;
  }
  .act-img .act span{
    font-size: .25rem;
    color: #333;
  }


</style>
