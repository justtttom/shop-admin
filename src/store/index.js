import { createStore } from 'vuex'
import { login, getInfo } from '~/api/manager'

const store = createStore({
  state () {
    return {
      // 用户信息
      user:{}
    }
  },
  mutations: {
    // 记录用户信息
    SET_USERINFO(state,user){
      state.user = user
    }
  },
  actions:{
    getInfo({commit}){
      getInfo().then(res=>{
        commit("SET_USERINFO",res)
      })
    }
  }
})

export default store