<template>
    <div>
      <div class="header">
        <navtabbar>
          <div class="logo" slot="left"><p class="iconfont icon-btn_return" @click="retur()" ></p></div>
          <div class="serch" slot="cent">
            <p>手机电脑</p>
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
      <div class="sou"><input type="text" placeholder="手机"></div>
      <myswiper></myswiper>
      <tabulation></tabulation>
      <phclassify></phclassify>

    </div>
</template>

<script>
  import navtabbar from "../common/navtabbar";
import myswiper from "./phchild/myswiper";
import tabulation from "./phchild/tabulation";
import phclassify from "./phchild/phclassify";

    export default {
        name: "phone",
        components:{
            navtabbar,
            myswiper,
            tabulation,
            phclassify
        },
        methods:{
            retur(){
                    this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>
  .header{

  }
  .rious{
    padding: .6rem .7rem;
  }
  .logo p{
    font-size: .7rem;
  }
  .rious span{
    display:block;
    width: .1rem;
    height: .1rem;
    border: .02rem solid#888888;
    border-radius: 1rem;
    float: left;
    margin-left: .1rem;
  }
  .serch {
    font-size:.42rem ;
    text-align: center;
    line-height: 1.3rem;
    color: #333;

  }

  .sou{
    margin: .2rem 0 0.3rem;
  }
  .sou input{
    width:95%;
    background-color: #fff;
    height:.8rem;
    color:#ddd;
    font-size: .35rem;
    border: .1rem solid#fff;
    outline: none;
    border-radius: 1rem;
    margin-left: .12rem;
    text-align: center;
  }
</style>
