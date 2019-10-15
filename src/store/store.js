import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);


// var cartlist=JSON.parse(localStorage.getItem('carlist')||'[]');

//创建对象
const store=new Vuex.Store({

  state:{
    // 存储购物车数据，刷新会丢失 保存到本地
      cartlist:localStorage["cartlist"]?JSON.parse(localStorage["cartlist"]):[],
    // cartlist:[],
    money:0,//总价
    allcheck:true,//全选
    num:0  //计算数量
  },

 //计算属性
  getters:{
    //购物车列表
  //   list(state){
  //     if(state.allcheck){
  //       state.cartlist.forEach((item)=>{
  //         item.selected=true
  //       })
  //     }
  //     localStorage.setItem("search",JSON.stringify(state.cartlist));
  //     return state.cartlist
  //   }
  //
  //计算总价
    money(state){
     let money=0
     state.cartlist.forEach((item,index)=>{
       if(item.selected){
         // money +=item.price
          money+=item.count*item.price
       }
     })
     return state.money=parseFloat(money)
   },
   //结算数量
   num(state){
      let num=0;
      state.cartlist.forEach((item,index)=>{
       if(item.selected){
          num+=item.count
       }
     })
      return state.num=num
    }
   },
   //同步
  mutations:{
    //添加商品
    addcart(state,payload){
     let oldproduct=null;
      for(let item of state.cartlist){
        if(item.id==payload.id){
          oldproduct=item;
        }
      }
      // let oldproduct=state.cartlist.find(item=>item.id===payload.id)
      //判断是否存在 ，存在数量+1
      if(oldproduct){
        oldproduct.count+=1;
      }else{
        payload.count=1;
        state.cartlist.push(payload)
      }

      localStorage.setItem('cartlist', JSON.stringify(state.cartlist))

    },
    //购物车单选
    SELECT(state,id){
      let index=state.cartlist.findIndex(item=>{
        return item.id==id
      });
      //切换
      state.cartlist[index].selected=!state.cartlist[index].selected;
      let flag=state.cartlist.some((item)=>{
        return item.selected==false
      });
      if(!flag){//如果全部选中，则全选状态也改变
        state.allcheck=true
      }else{
        state.allcheck=false
      }
    },

    //全选
    SELECTALL(state){
      state.allcheck=!state.allcheck;
      if(state.allcheck){
        state.cartlist.forEach((item)=>{//循环查询数据源的每一个元素
          item.selected=true
        })
      }else{
        state.cartlist.forEach((item)=>{
          item.selected=false
        })
      }

    },
    //删除
    DELECT(state,id){
      // let index=state.cartlist.findIndex(item=>{
      //   return item.id==id
      // });
       console.log(id)
      state.cartlist.splice(id,1)
      //  var list=[]
      // state.cartlist.forEach((id)=>{
         // state.cartlist.splice(id,1)
       //    })

},
     //商品数量减
     JIAN(state,id){
       if(state.cartlist[id].count<=1){
         return state.cartlist[id].count=1
       }else{
         return state.cartlist[id].count--
       }
     },

     //商品数量加
    ADD(state,id){
      // let index=state.cartlist.findIndex(item=>{
      //   return item.id==id
      // });
      console.log(id)
      return state.cartlist[id].count++
    }

  },

  //异步触发mutations里面的方法
actions:{
    select({commit},id){
      commit('SELECT',id)
    },
  selectall({commit}){
    commit('SELECTALL')
  },
  delect({commit}, id){
    commit('DELECT',id)
  },
  jian({commit},id){
    commit('JIAN',id)
  },
  add({commit},id){
    commit('ADD',id)
   },




}



  // //分模块
  // modules:{
  //    a:modulesA
  // }


});
// store.subscribe((mutations,state)=>{
//   localStorage.setItem('cartlist',JSON.stringify((state.cartlist))
// });

export default store
