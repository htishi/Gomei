<template>
  <div>
    <div class="header">
    <slot name="left">
      <div class="logo">
      <img src="../../assets/images/logo.png" alt="">
      </div>
    </slot>
    <slot name="cent">
      <div class="serch">
        <input type="text" placeholder="美豆最高抵1万" class="">
      </div>
    </slot>
    <slot name="right">
      <div class="right">
      <div class="cart">
        <img src="../../assets/images/cart.png" alt="">
      </div>
      <div class="login">
        <router-link to="/login"><p>登录</p></router-link>
      </div>
      </div>
     </slot>
    </div>
  </div>
</template>
<script>
    export default {
        name: "navtabbar"
    }
</script>

<style scoped>
  .header{
    width:100%;
    height: 1.3rem;
    background-color: #fff;
    display: flex;
    border-bottom: .01rem solid #ddd;
  }
  .logo{
    width: 15%;
    text-align: center;
   line-height:1.3rem;

  }
  .logo img{
    margin-top: .26rem;
    width: .8rem;
    height: .8rem;
  }
  .serch{
   flex: 1;
  }
  .serch input{
    width: calc(100% - .9rem);
    height: .9rem;
    border-radius:1rem;
    border: 1px solid #f6f6f6;
    background-color: #f6f6f6;
    padding-left: .8rem;
    margin-top: .2rem;
    outline: none;
    font-size: .4rem;
  }
  .right{
    width: 26%;
  }
  .cart img{
    width: .6rem;
    height: .6rem;
    padding: .4rem;
    margin-left: .2rem;
    float: left;
  }
  .login {
    margin-top: .45rem;
    color: #888;

  }
  .login p{
    font-size: .4rem;
  }
</style>

