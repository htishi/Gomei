<template>
    <div class="login">
      <div class="header">
        <span class="iconfont icon-btn_return" @click="retu"></span>
        <img src="../../assets/images/log/lg01.png" alt="">
      </div>
      <div class="center">
        <ul class="ul1">
          <li :class="{active:index==num}" @click="add(index)" v-for="(v,index) in list">{{v}}</li>
        </ul>
        <ul class="ul2" v-show="num==0">
          <input type="text" placeholder="手机号/邮箱/用户名/门店会员卡号">
          <input type="text" placeholder="请输入密码">
          <li class="li1">
            <span @click="regist">手机号快速注册</span>
            <p>找回密码</p></li>
          <li class="li2">登录</li>
        </ul>
        <ul class="ul3" v-show="num==1">
          <li class="li1"><input type="text" placeholder="手机号"></li>
          <li class="li2">
            <input type="text" placeholder="请输入验证码">
           <button>获取验证码</button>
          </li>
          <li class="li3">
            <p>同意协议注册并登录</p>
          </li>
          <li class="li4">
            <p>未注册手机登录成功将自动注册，且代表您已同意协议
            <span>《国美平台服务协议》《国美平台隐私》《美付宝服务协议》</span>
            </p>
          </li>
        </ul>
      </div>

      <div class="bot">
        <div class="top">
          <p>使用以下账户登录</p>
        </div>
        <ul>
          <li><img src="../../assets/images/log/lg03.png" alt="">
          <p>门店会员</p>
          </li>
          <li><img src="../../assets/images/log/lg04.png" alt="">
            <p>QQ</p></li>
          <li><img src="../../assets/images/log/lg05.png" alt="">
            <p>新浪微博</p></li>
          <li><img src="../../assets/images/log/lg06.png" alt="">
            <p>支付宝</p></li>
        </ul>

      </div>



    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
            return{
                list:['账号密码登录', '短信验证登录'],
                num:0
            }
        },
        methods:{
            add(index){
                this.num=index;
                console.log(index)
            },
            retu(){
                this.$router.go(-1)
            },
            regist(){
                this.$router.push('/regist')
            }


        }
    }
</script>

<style scoped>
.login{
    width:100%;
    background-color: #fff;
  }
  .header{
    background-color: #fff;
  }
  .header span{
    display: block;
    padding: .25rem;
    font-size: .8rem;
    color: #333;
  }
  .header img{
    width:30%;
   margin-left: 3rem;
  }
.center{
  width:100%;
  background-color: #fff;
}
  .center .ul1{
    width:80%;
    margin: auto;
    display: flex;
    padding-top: 1rem;
  }
  .center .ul1 li{
    width:50%;
    text-align: center;
    font-size: .45rem;
    padding-bottom: .3rem;
  }
  .active{
    color:#f81a81;
    border-bottom: .05rem solid #f20c59;
  }
  .center .ul2{
    width:80%;
    margin: auto;
    padding-top: 1rem;
  }
  .center .ul2 input{
    width:95%;
    height:1rem;
    font-size: .4rem;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    outline: none;
    padding-top: .25rem;
    padding-left: .6rem;
  }
  .center .ul2 .li1{
    margin-top: .3rem;
    color:#4abbff;
    font-size: .4rem;
  }
  .center .ul2 .li1 p{
    float:right;
  }
  .center .ul2 .li2{
    width:100%;
    font-size: .45rem;
    background-color:#ff8fc2 ;
    text-align: center;
    border-radius:1rem;
    margin-top: .9rem;
    color:#fff;
    padding: .25rem;
  }
.center .ul3{
  width:80%;
  margin: auto;
  padding-top: .65rem;
}
.center .ul3 input{
  width:95%;
  height:1rem;
  font-size: .4rem;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  outline: none;
  padding-top: .25rem;
  padding-left: .6rem;
}
.center .ul3 .li2 input{
  width:55%;
}
.center .ul3 .li2 button{
   background-color: #fff;
  border: .02rem solid#f81a81;
  border-radius: .5rem;
  padding: .2rem .55rem;
  font-size: .35rem;
  color:#f81a81;
}
.center .ul3 .li3{
  width:95%;
  font-size: .45rem;
  background-color:#ff8fc2 ;
  text-align: center;
  border-radius:1rem;
  margin-top: .5rem;
  color:#fff;
  padding: .25rem;
}
.center .ul3 .li4{
  padding-top: .3rem;
}
.center .ul3 .li4 p{
  font-size: .33rem;
  color:#aaa;
}
.center .ul3 .li4 span{
  color:#4abbff;
}
  .bot{
    width:80%;
    margin: auto;
    margin-top: 2.1rem;
  }
  .bot .top{
    width:100%;
    text-align: center;
    font-size: .35rem;
    color:#aaa;
    position: relative;
  }
.bot .top:before{
  content: '';
  width: 2.5rem;
  height:.01rem;
  background-color: #aaa;
  position: absolute;
  top:.2rem;
  left:0;
  z-index: 11;
}
.bot .top:after{
  content: '';
  width: 2.5rem;
  height:.01rem;
  background-color: #aaa;
  position: absolute;
  top:.2rem;
  right:0;
}
.bot ul{
  display: flex;
  padding: 1rem .3rem 1.6rem .3rem;
}
  .bot ul li{
    width:23%;
    margin-left: .25rem;
    font-size: .3rem;
    text-align: center;
  }
  .bot ul li img{
    width:100%;
   }


</style>
