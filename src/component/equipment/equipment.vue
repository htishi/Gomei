<template>
    <div>
      <div class="header">
        <navtabbar>
          <div class="logo" slot="left"><p class="iconfont icon-btn_return" @click="retur()" ></p></div>
          <div class="serch" slot="cent">
            <p>国美电器</p>
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
      <div class="sou">
        <input type="text" placeholder="空调">
      </div>
      <eqbanner></eqbanner>
      <eqmust></eqmust>
      <eqcenter></eqcenter> 
      <eqlist></eqlist>



    </div>
</template>

<script>
  import navtabbar from "../common/navtabbar";
  import eqbanner from "./eqchild/eqbanner";
  import eqmust from "./eqchild/eqmust";
  import eqcenter from "./eqchild/eqcenter";
  import eqlist from "./eqchild/eqlist";
    export default {
        name: "equipment",
        components:{
            navtabbar,
            eqbanner,
            eqmust,
            eqcenter,
            eqlist
        },
        methods:{
            retur(){
                this.$router.go(-1)
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

  .sou{
    margin: .2rem  0 .2rem 0;

  }
  .sou img{
    width:100%;
  }
  .sou input{
    width:92%;
    background-color: #fff;
    height:.8rem;
    color:#ddd;
    font-size: .35rem;
    border: .1rem solid#fff;
    outline: none;
    border-radius: 1rem;
    margin-left: .25rem;
    text-align: center;
  }
</style>
