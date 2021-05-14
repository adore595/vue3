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
    actions: {},
    modules: {}
})
