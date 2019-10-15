<template>
    <div>
      <div class="list">
        <div class="list-t">
          <img src="../../../assets/images/like.png" alt="">
        </div>

        <ul class="lis">
          <li v-for="v in list" @click="item(v.id)">
            <img :src="v.images" alt=""> 
            <p class="des" v-if="v.describe"><span v-if="v.support">{{v.support}}</span>{{v.describe}}</p>
            <p class="giv" v-if="v.give">
              <span class="sp1" v-if="v.roll">{{v.roll}}</span>
              <span v-if="v.give">{{v.give}}</span>
              <span class="sp3" v-if="v.energy">{{v.energy}}</span>
            </p>
            <p class="pri" v-if="v.price">￥{{v.price}}<span v-if="v.resemble">{{v.resemble}}</span></p>

            <div class="shop" v-if="v.shop">
              <img :src="v.shopi" alt="" style="width: 35%">
              <p>{{v.shopt}}</p>
              <span>{{v.shop}}</span>
            </div>
            <div class="zhi" v-if="v.zhi">
              <p>{{v.zhi}}</p>
            </div>

          </li>
        </ul>


      </div>

      <div class="footer">
        <ul>
          <li><p>登录</p></li>
          <li><p>注册</p></li>
          <li><p>更多</p></li>
          <li><p>反馈</p></li>
        </ul>
        <p class="fp">
          互联网药品信息服务资格证编号(沪)-经营性-2019-0006<br>
          营业执照经营证照增值电信业务经营许可证出版物经营许可证<br>
          网络文化经营许可证沪网文[201715537-436号 京B2-20191290<br>
          京公网安备11010502038379号 沪B2-20120004号<br>
          沪ICP备11009419号/京ICP备19011786号<br>
          网络食品销售第三方平台提供者备案:沪网食备A0015号<br>
          copyright◎2000-2019 gome.com.cn<br>
          客服热线，4008-113-333
        </p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "homelist",
        data() {
            return {
                list:[]
            }
        },

        mounted() {
            var _this = this
            //默认去项目根路径寻找
            this.$http.get('data/idproduct.json')
                .then((response) => {
                    this.list = response.data.list;
                })
                .catch(function (error) {
                })
                .then(function () {
                });

        },
        methods:{
          //点击发送id
            item(id){
              //跳转到详情页并携带id过去 详情页的路由也绑定id
                this.$router.push({path:`/detail/${id}`})
                // this.$router.push('/detail/'+this.list.id)
            }
        }
    }
</script>

<style scoped>
  .list{
    width: 94%;
    margin: auto;
    position: relative;
  }
  .list .list-t img {
    width: 100%;
  }
  .list .lis{
    width: 100%;
    column-count: 2;/*设置列数*/
    column-gap:.1rem ;
    margin: auto;

    /*!*display: flex;*!*/
    /*!*flex-wrap: wrap;*!*/
  }
  .list .lis li {
    width: 100%;
    break-inside: avoid;
    border-radius: .2rem;
    margin-bottom: .2rem;
    padding-bottom: .25rem;
    background-color: #fff;
  }
  .list .lis li img{
    width: 100%;
    border-radius: .2rem;
  }
  .list p{
    font-size:.3rem;
    padding: .1rem .2rem;
  }
  .list .des span{
    border-radius:.1rem;
    color:#fd0175;
    padding: 0 .1rem;
    border: .02rem solid #fd0175;
    margin-right: .2rem;
  }
  .list .des{
    line-height: .5rem;
    color: #333;
  }
  .list .pri{
    color: #fd0175;
    font-size: .3rem;
    font-family: '微软雅黑';
    padding: .1rem .2rem .1rem;
  }
  .list .pri span{
    border-radius:.2rem;
    padding: .02rem .2rem;
    border: .02rem solid#aaaaaa;
    font-size: .3rem;
    color: #aaa;
    float: right;
    margin-right: .2rem;

  }
  .list .giv{
    font-size: .2rem;
    padding: 0  .2rem .1rem;
  }

  .list .giv span{
    color: #fff;
    padding: 0 .05rem;
    border-radius: .05rem;
    background-color: #fe526b;
  }
  .list .giv .sp3{
    color: green;
    border: .02rem solid green;
    background-color: #fff;
  }
  .list .shop{
    background-color: #fe526b;
    margin-top: -.14rem;
    text-align: center;
    border-radius: .05rem;
    padding-bottom: .3rem;
  }
  .list .shop img{
    width: .1rem;
    border-radius: .03rem;

  }
  .list .shop p{
    color: #fff;
    font-size: .2rem;
  }
  .list .shop span{
    color: #fe526b;
    padding: .02rem .09rem;
    background-color: #fff;
    font-size: .2rem;
    border-radius: .1rem;
  }
  .list .zhi{
    font-size: .2rem;
    color: #333;
  }
  .footer{
    background-color: #fff;
    width: 100%;
    color: #888;
    margin-top: .2rem;
    overflow: hidden;
  }
  .footer ul{
    display:flex ;
    justify-content: center;
    align-items: center;
    border-top: .02rem solid#eee;
    border-bottom: .02rem solid#eee;
    padding: .2rem;

  }
  .footer ul li{
    width: 20%;
    margin-left: .2rem;
  }
  .footer ul li p{
    font-size: .38rem;
    position: relative;
  }
  .footer ul li p:before{
    content: "";
    width: 1px;
    height: 14px;
    background-color: #ddd;
    position: absolute;
    top: .15rem;
    left: -.3rem;
  }
  .footer ul li:nth-child(1) p:before{
    content: "";
    width: 0;
  }
  .footer .fp{
    width:100%;
    font-size: .16rem;
    text-align: center;
    line-height: .5rem;
    padding-bottom: 1.5rem;
  }
</style>
