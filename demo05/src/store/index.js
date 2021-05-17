import {createStore} from 'vuex'

export default createStore({
    state: {
      num:0,
      title:'雷猴',
      devnum:0
    },
    mutations: {
      sub(state){
        state.devnum--
      },
      add(state,count){
        state.devnum+=count
      }
    },
    getters:{
        vxnum(state){
            return state.num *state.num
        }
    },
    actions: {
        demo(context){
            context.commit('sub')
        }
    },
    modules: {}
})
