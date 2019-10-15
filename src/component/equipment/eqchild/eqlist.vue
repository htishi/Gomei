<template>
  <div>
    <div class="like">
      <img src="../../../assets/images/eq/eq42.png" alt="">
      <ul >
        <li v-for="v in like">
          <img :src="v.img" alt="">
          <p><span>{{v.ziy}}</span>{{v.des}}</p>
          <p class="sp2">{{v.txt}}</p>
          <span class="pa">{{v.price}}</span>
        </li>
      </ul>
    </div>
    <fchild></fchild>
  </div>

</template>

<script>
  import fchild from "../../common/fchild";
    export default {
        name: "eqlist",
        components:{
            fchild
        },
        data(){
            return{
                like:''
            }
        },
        mounted() {
            var _this = this;
            //默认去项目根路径寻找
            this.$http.get('data/equipment.json')
                .then((response) => {
                    this.like = response.data.like;

                })
                .catch(function (error) {
                })
                .then(function () {
                });

        }
    }
</script>

<style scoped>
  .like img{
    width:100%;

  }
.like ul{
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 1rem;
}
  .like ul li{
    width:45%;
    background-color: #fff;
    font-size: .2rem;
    border-radius: .2rem;
    margin-left: .25rem;
    margin-bottom: .2rem;
    padding-bottom: .2rem;
  }
  .like ul li img{
    width:100%;
    border-radius: .2rem;
  }
  .like ul li p{
    padding: .2rem .2rem;
  }
  .like ul li p span{
    color:#fff;
    font-size: .15rem;
    margin-right: .1rem;
    background-color: #f81a81;
  }
  .like ul li .sp2{
    color:#f81a81;
    font-size: .18rem;
  }
  .like ul li .pa{
    color:#f81a81;
    padding: .2rem .2rem;
  }
</style>
