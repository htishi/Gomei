<template>
  <div>
    <div class="footer">
      <ul>
        <li> <span class="iconfont icon-8"></span>
          <p>店铺</p>
        </li>
        <li><span class="iconfont icon-shoucang"></span>
          <p>收藏</p></li>
        <li><router-link to="/cart"><span class="iconfont icon-3"></span>
          <p>购物车</p></router-link></li>
        <button @click="addtocart"><p>加入购物车</p></button>
        <li><p> 立即购买</p></li>
      </ul>
    </div>

  </div>
</template>

<script>
    export default {
        name: "defooter",
        
        methods:{
            addtocart(){
                this.$emit('addcart')
                this.$toast({
                  message: '已经加入购物车',
                  iconClass: 'iconfont icon-success',
                  duration:1500,
                });
            }
        }
    }
</script>

<style scoped>
  .footer{
    width:100%;
    background-color: #fff;
    border-top: .02rem solid#ddd;
    position: fixed;
    left:0;
    bottom: 0;
    z-index: 22;
  }
  .footer ul{
    display: flex;
  }
  .footer ul li{
    width:11%;
    text-align: center;
    padding: .2rem;
    font-size: .33rem;
  }
  .footer ul li a{
    font-size: .33rem;
    color:#333;
  }
  .footer ul li span{
    color:#aaa;
    font-size: .7rem;
  }
  .footer button{
    width:25.9%;
    color:#fff;
    background-color:#fbc405 ;
    line-height: 1.1rem;
    font-size: .39rem;
    border: 0px;
  }
  .footer ul li:nth-child(5){
    width:25%;
    color:#fff;
    background-color:#fa1e83 ;
    line-height: 1.1rem;
    font-size: .39rem;
  }

</style>
