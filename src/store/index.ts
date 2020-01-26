import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import RootState from '@/types/root-state'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  state: {},
  mutations: {},
  actions: {},
  modules: {
  }
}

export default new Vuex.Store<RootState>(store)
