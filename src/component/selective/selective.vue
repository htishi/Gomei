<template>
    <div>
      <div class="header">
        <navtabbar>
          <div class="logo" slot="left"><p class="iconfont icon-btn_return" @click="retur()" ></p></div>
          <div class="serch" slot="cent">
              <p>国庆电视提前购</p>
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

      <div class="top"><setop></setop></div>
     <navtab></navtab>
      <fchild></fchild>
    </div>
</template>

<script>
  import navtabbar from "../common/navtabbar";

  import setop from "./selecttchild/setop";
  import navtab from "./selecttchild/navtab";
  import fchild from "../common/fchild";
    export default {
        name: "selective",
        components:{
            navtabbar,
            setop,
            navtab,
            fchild
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
  .logo p{
    font-size: .7rem;
  }
  .rious{
    padding: .6rem .7rem;
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
</style>
