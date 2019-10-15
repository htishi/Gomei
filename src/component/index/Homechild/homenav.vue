<template>
    <div>
      <ul class="nnav">
        <li><router-link to="/phone"><img src="../../../assets/images/phone.png" alt=""><p>手机电脑</p></router-link></li>
        <li><router-link to="/equipment"><img src="../../../assets/images/elect.png" alt=""><p>国美电器</p></router-link></li>
        <li><router-link to=""><img src="../../../assets/images/mark.png" alt=""><p>国美超市</p></router-link></li>
        <li><router-link to=""><img src="../../../assets/images/group.png" alt=""><p>美店组团</p></router-link></li>
        <li><router-link to="/gmblock"><img src="../../../assets/images/stages.png" alt=""><p>分期购</p></router-link></li>
        <li><router-link to=""><img src="../../../assets/images/recharge.png" alt=""><p>充值服务</p></router-link></li>
        <li><router-link to=""><img src="../../../assets/images/home.png" alt=""><p>国美家装</p></router-link></li>
        <li><router-link to=""><img src="../../../assets/images/legum.png" alt=""><p>领美豆</p></router-link></li>
        <li><router-link to=""><img src="../../../assets/images/srew.png" alt=""><p>国美管家</p></router-link></li>
        <li><router-link to=""><img src="../../../assets/images/me.png" alt=""><p>我的</p></router-link></li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "homenav"
    }
</script>

<style scoped>
  .nnav{
    display: flex;
    flex-wrap: wrap;
    padding-top: .25rem;
  }
  .nnav li{
    width: 20%;
    text-align: center;
    padding-bottom: .3rem;
  }
  .nnav li img{
    width: 100%;
  }
  .nnav li p{
    color:#333 ;
    font-size: .34rem;
  }
</style>
