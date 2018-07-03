/**
 * Created by f on 2018/5/11.
 */
import { GetterTree } from 'vuex'
import indexDb  from '../store/indexDb';
const getters: GetterTree<any, any> = {

 async getAccessToken(state){
    const {accessToken}=state;
    if(state.accessToken===null){
      await getDataFromDb(state.dbMessage).then((data)=>{
        state.accessToken=data;
      })
    }
    return state.accessToken
  }
}

function getDataFromDb(getData:object){
  return new Promise((resolve, reject)=>{
    try {
      indexDb.getDataFromDb(getData).then((data: any) => {
        console.log(data === undefined)
        if (data != undefined) {
          resolve(data.accessToken)
        } else {
          resolve('undefined');
        }
      })
    } catch (err) {
      reject(err);
    }
  })

}
export default getters;
