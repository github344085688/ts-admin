/**
 * Created by f on 2018/5/11.
 */
import { ActionTree } from 'vuex'
import TYPES from './types'
const actions: ActionTree<any, any> = {
  setUserData(mutat:any, object:any) {
     mutat.commit(TYPES.SET_USERDATA, object);
  },
}
export default actions;
