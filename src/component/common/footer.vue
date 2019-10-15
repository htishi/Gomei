<template>
    <div>
      <div class="foote">
        <ul>
          <li><router-link to="/index"><img src="../../assets/images/foot1.png" alt=""><p>首页</p></router-link></li>
          <li><router-link to="/classify"><img src="../../assets/images/foot2.png" alt=""><p>分类</p></router-link></li>
          <li><router-link to="/selective"><img src="../../assets/images/foot3.png" alt=""><p>优选</p></router-link></li>
          <li><router-link to="/cart"><img src="../../assets/images/foot4.png" alt=""><p>购物车</p></router-link></li>
          <li><router-link to="/login"><img src="../../assets/images/foot5.png" alt=""><p>我的</p></router-link></li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "footer"
    }
</script>
<style scoped>
.foote{
  position:fixed;
  left: 0;
  right: 0;
  bottom: -.01rem;
  width: 100%;
  background-color:#f6f6f6 ;
  border-top: .02rem solid #ddd;
}
.foote ul{
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: .05rem;
}
  .foote ul li{
    width: 15%;
    padding-top: .05rem;
    margin-left: .4rem;
    text-align: center;


  }
  .foote ul li p{
    margin-top: -.05rem;
    font-size: .3rem;
  }
.foote ul li:nth-child(1) p{
  color: red;
}
.foote ul li img{
  width: 50%;
}

</style>
<style>
  *{
    margin: 0;
    padding: 0;
  }
  body{
    background-color: #f2f2f2;
  }
  a{
    list-style: none;
    text-decoration: none;
    color: #888;
    font-size: .2rem;
  }
  li{
    list-style: none;
  }
</style>
