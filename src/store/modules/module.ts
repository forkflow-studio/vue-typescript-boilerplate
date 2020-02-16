import { Module } from 'vuex'
import RootState from '@/types/root-state'
import { ModuleState } from '@/types/module'
import moduleGetters from '../getters/module'
import moduleMutations from '../mutations/module'
import moduleActions from '../actions/module'

const module: Module<ModuleState, RootState> = {
  namespaced: true,
  state: {
    foo: false,
    bar: ''
  },
  getters: moduleGetters,
  mutations: moduleMutations,
  actions: moduleActions
}

export default module
