<template>
    <div>
      <div class="footer">
        <ul>
          <li>登录</li>
          <li>注册</li>
          <li>更多</li>
          <li>反馈</li>
        </ul>
        <div class="text">
          <p>copyright @2000-2019 gome.com.cn<br>
          客服热线：4008-708-708</p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "fchihld"
    }
</script>

<style scoped>
  .footer{
    background-color: #fff;
  }
  .footer ul{
    display: flex;
  }
  .footer ul li{
    width:22%;
    font-size: .4rem;
    color:#aaa;
    text-align: center;
    padding: .4rem;
    position: relative;
    border-bottom:  .02px solid#ddd;
  }
  .footer ul li:before{
    content: '';
    width:.04rem;
    height:.5rem;
    background-color: #ddd;
    position: absolute;
    top:.45rem;
    left:0;
  }
  .footer ul li:nth-child(1):before{
    height:0
  }
  .text{
    text-align: center;
    color:#aaa;
    font-size: .35rem;
    padding: .5rem;
  }

</style>
