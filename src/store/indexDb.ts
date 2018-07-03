
class indexdb {

  /***
   *
   * 创建数据库名称
   * @param arg {dbMeme,tableName}
   * @returns {Promise<T>} return (success Or err)
   */
  async craetionDb(...arg: any[]) {
    try {
      let craetion = await new Promise((resolve, reject) => {
        let openRequest = indexedDB.open(arg[0].dbName, 1);
        openRequest.onupgradeneeded = (e: any) => {
          let thisDB = e.target.result;
          if (!thisDB.objectStoreNames.contains(arg[0].dbTable)) {
            thisDB.createObjectStore(arg[0].dbTable, {keyPath: "keyname"}).createIndex('Indexkey', 'keyname', {unique: false});
          }
          e.target.result.close();
          resolve(" the database already exists")
        };
        openRequest.onsuccess = (e: any) => {
          resolve("success")
        };
        openRequest.onerror = (e: any) => {
          reject('err' + e);
        };
      })
      return craetion;
    } catch (err) {
      console.log(err);
    }
  }

  /***
   *creater  new transaction
   * @param arg {dbMeme,tableName,setData}
   * @returns {Promise<T>}return (success Or err)
   */

  async setDataToDb(...arg: any[]) {
    try {
      let setData = await new Promise((resolve, reject) => {
        let openRequest = indexedDB.open(arg[0].dbName, 1);
        openRequest.onsuccess = (e: any) => {
          for (let key in arg[0].data) {
            setStages(arg[0].data[key].keyname, arg[0].data[key])
          }
          function setStages(name: any, data: any) {
            let store = e.target.result.transaction([arg[0].dbTable], "readwrite").objectStore(arg[0].dbTable);
            let index = store.index("Indexkey");
            index.get(name).onsuccess = (e: any) => {
              let student = e.target.result;
              if (student == undefined) {
                store.add(data);
              } else {
                store.put(data);
              }
            };
          }

          resolve("success");
          e.target.result.close();
        }
        openRequest.onerror = (e: any) => {
          reject('err' + e);
          e.target.result.close();
        };
      })
      return setData;

    } catch (err) {
      console.log(err)
    }
  }

  /***
   * {dbMeme,tableName,dataKey}
   * @param arg
   * @returns {Promise<T>} return (data or err)
   */
  getDataFromDb(...arg: any[]) {
    return new Promise((resolve, reject) => {
      try{
        let openRequest = indexedDB.open(arg[0].dbName, 1);
        openRequest.onsuccess = (e: any) => {
          try {
            let store = e.target.result.transaction([arg[0].dbTable], "readwrite").objectStore(arg[0].dbTable);
            let index = store.index("Indexkey");
            index.get(arg[0].dataKey).onsuccess = (e: any) => {
                resolve(e.target.result);
            }
            e.target.result.close();
          }catch (err){
            console.log(err);
          }
        }
        openRequest.onerror = (e: any) => {
          reject('err' + e);
          e.target.result.close();
        };
      }catch (err){
        console.log(err);
      }
    })
  }

  /***
   * {dbMeme,tableName,dataKey}
   * @param arg
   * @returns {Promise<void>}return (success Or err)
   */
 async clearDataTodb(...arg: any[]) {
    try{
      let clearData=await new Promise((resolve, reject)=>{
        let openRequest = indexedDB.open(arg[0].dbName, 1);
        openRequest.onsuccess = (e: any) => {
          if (e.target.result == undefined) {
            reject('err');
          } else {
            e.target.result.transaction([arg[0].dbTable], "readwrite").objectStore(arg[0].dbTable).clear();
            resolve('success');
          }
          e.target.result.close();
        }
        openRequest.onerror = (e: any) => {
          reject('err' + e);
          e.target.result.close();
        };
      })
    }catch (err){
      console.log(err)

    }

 }
}
let dbs = new indexdb();
export default dbs;
