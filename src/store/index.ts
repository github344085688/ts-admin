/**
 * Created by f on 2018/5/11.
 */
import Vue from 'vue'
import Vuex, { ActionTree, MutationTree } from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
Vue.use(Vuex)

interface State {
  accessToken:any,
  dbMessage:object,
  AT:string
}

let state:State={
  accessToken:null,
  dbMessage:{
    dbName:'Stagesdb',
    dbTable: 'stage',
    dataKey:"user"
  },
  AT:'s'
}
export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})
