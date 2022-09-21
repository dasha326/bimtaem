import { createStore } from 'vuex'

export default createStore({
  state: {
    siteName: 'bimteam',
    phone: '+7(909) 999-99-98'
  },
  getters: {
    getSiteName(state) {
      return state.siteName;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
