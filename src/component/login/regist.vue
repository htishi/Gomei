<template>
    <div>
      <div class="regist">
      <div class="header">
        <span class="iconfont icon-btn_return" @click="retu"></span>
        <p>用户注册</p>
      </div>
        <div class="center">
        <ul>
          <li><input type="text" placeholder="请输入手机号"></li>
          <li><button>同意协议并注册</button></li>
          <li>
            <p>我已阅读并同意以下协议，接受免除或限制责任，诉讼管辖约定等条款，愿意同步创建账户</p>
            <span>《国美平台服务协议》《国美平台隐私》《美付宝服务协议》</span>
          </li>
        </ul>
      </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "regist",
        data(){
            return{

            }
        },
        methods:{
            retu(){
                this.$router.go(-1)
            }
        }

    }
</script>

<style scoped>
  .regist{
    height:100vh;
    background-color: #fff;
  }
  .header{
    overflow: hidden;
  }
  .header span{
    display: block;
    padding: .25rem;
    font-size: .8rem;
    color: #333;
    float: left;
  }
  .header p{
    font-size: .45rem;
    line-height: 1.3rem;
    text-align: center;
    margin-right: 1rem;
  }
  .center ul{
    width:82%;
    margin: auto;
    margin-top: 1rem;
  }
  .center ul li input{
    width:82%;
    padding: .4rem .8rem;
    border-right: 0;
    border-left:0 ;
    border-top: 0;
    border-bottom: .01rem solid#aaa;
    font-size: .4rem;
    outline: none;
  }
  .center ul li button{
    width:100%;
    background-color:#ff8fc2;
    padding: .36rem;
    text-align: center;
    border-radius: .8rem;
    border:0;
    margin-top: .8rem;
    color:#fff;
    font-size: .43rem;
  }
  .center ul li p{
    margin-top: .4rem;
    font-size: .35rem;
    color:#aaa;
    padding-bottom: .2rem;
  }
  .center ul li span{
    color:#4abbff;
    margin-top: .2rem;
  }

</style>
