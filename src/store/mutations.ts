/**
 * Created by f on 2018/5/11.
 */
import { MutationTree } from 'vuex'
import TYPES from './types'
const mutations: MutationTree<any> = {
  [TYPES.SET_USERDATA](state:any, json:any) {
    state.AT = json;
  },
}
export default mutations;
