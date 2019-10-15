export default {

    state:{
      name:'zhangsan'
    },
    mutations:{

      update(state,payload){
        state.name=payload
      }
    },
    actions:{},
    getters:{
      fullname(state){
        return state.name+'122222'
      }
    }


}
