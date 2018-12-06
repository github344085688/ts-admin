/**
 * Created by f on 2018/5/4.
 */
import {Component, Emit, Inject, Model, Prop, Provide, Vue, Watch} from 'vue-property-decorator';
import template from './index.vue'
// import textFile from '../../components/inputtypeLine/textFile.ts'
import axVue from '../../httpAnency'
// import session from '../../store/sesionDb'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/startWith'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/throttleTime'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/take'
import 'rxjs/add/operator/delay'
import 'rxjs/add/operator/shareReplay'
import 'rxjs/add/operator/takeUntil'
import 'rxjs/add/operator/pluck'
import 'rxjs/add/operator/pairwise'
import 'rxjs/add/operator/distinct'
import 'rxjs/add/operator/distinctUntilChanged'



@Component({
    mixins: [template],
    components: {
       /* 'text-file':textFile*/
    }
})
export default class login extends axVue {
    myDB:object= {
        name: 'univisity',
        version: 4,
        db: null,
        ojstore: {
            name: 'users',//存储空间表的名字
            keypath: 'id'//主键
        }
    }
    mounted() {

    }

    onAdd(el: any) {
        /*  var usermsg = [{
         keyname: "user",
         usermsg: 'dssssssssssssssssssssssssssta',
         languages: 'aaan',
         pp:"s;dkf;klsd"
         }];
         dbs.setDataToDb({
         dbname: 'Stagesdb',
         dbtable: 'stage',
         data: usermsg
         }).then((x:any)=>{console.log(x)})
         dbs.getDataFromDb({
         dbneme: 'Stagesdb',
         dbtable: 'stage',
         datanem: 'user',

         }).then((x:any)=>{console.log(x)})*/
        /*    dbs.clearDataTodb(  {
         dbneme: 'Stagesdb',
         dbtable: 'stage',
         }).then((x:any)=>console.log(x))*/

        /* dbs.getDataFromDb({
         dbneme: 'Stagesdb',
         dbtable: 'stage',
         datanem: 'user',

         }).then((x:any)=>{console.log(x)})*/
        /*dbs.getDataFromDb({
         dbname: 'Stagesdb',
         dbtable: 'stage',
         data: usermsg
         }).then((x:any)=>{console.log(x)});
         */

        /*  this.$store.dispatch("addUser", {
         db: null,
         name: 'users',
         data: user
         }
         );*/
        /*  let foo = new Observable(subscriber => {
         console.log('start')
         let i:number = 0
         let timer = setInterval(() => subscriber.next(i++), 1000)
         return () => {
         clearInterval(timer)
         console.log('end')
         }

         })
         let foo2 = foo.map((i:number) => i * 2)
         let subscription = foo2.subscribe((i:number) => console.log(i))
         setTimeout(() => subscription.unsubscribe(), 2500)

         */
        /*let ss=   new Observable(subscribe => {

         console.log('start')
         try{
         let i:number = 0
         let timer = setInterval(() => subscribe.next(i++), 1000)
         return () => {
         clearInterval(timer)
         console.log('end')
         }

         }catch(err){
         subscribe.error(err);

         }

         })
         ss.subscribe(
         x => console.log('Observer got a next value: ' + x),
         err => console.error('Observer got an error: ' + err),
         () => console.log('Observer got a complete notification')
         );*/
        /*
         var dom = el.target;
         var type = dom.type;

         Observable.fromEvent(dom, type)
         .filter((event: any) => event.target.value.length > 2)
         .map((event: any) => event.target.value)
         .subscribe(value => console.log(value));*/
        /* .do((event)=>{
         console.log("value",event);
         //this.numberic(event)
         })
         //.map((event)=>event.target.value)
         .subscribe((value)=>{
         console.log("value",value);
         })*/
        // this.numberic($event);

    }
    subject():void{
        /* dbs.craetionDb({
         dbname: 'Stagesdb',
         dbtable: 'stage'
         }).then((x:any)=>{console.log(x)})*/
        // this.$store.dispatch("openDb", this.myDB);



        // console.lo
        //
        // session.getIndexDb({
        //  dbneme: 'Stagesdb',
        //  dbtable: 'stage',
        //  datanem: 'user',
        //  }).then((x:any)=>{
        //   console.log(x)
        //    })

        /* session.clearSessionData({
         dbneme: 'Stagesdb',
         dbtable: 'stage',
         }).then((x:any)=>{ console.log(x)});*/
        // 过滤掉小于3个字符长度的目标值
        //input.filter((event:any) => event.target.value.length > 5)
        // 延迟事件
        // .delay(5000)
        // 每200ms只能通过一个事件
        // input.throttleTime(500)
        // 停止输入后200ms方能通过最新的那个事件
        //  .debounceTime(1200)
        // 在3次事件后停止事件流
        // .take(3)
        // 直到其他 observable 触发事件才停止事件流
        //let btn=document.querySelector('button')
        // 直到其他 observable 触发事件才停止事件流
        /*  let input = Observable.fromEvent(document.getElementsByName('inputa'), 'input')
         let stopStream = Observable.fromEvent(document.getElementsByName('clsick'), 'input');
         input.takeUntil(stopStream)
         .map((event: any) => event.target.value)
         .subscribe(value => console.log(value));*/

        // 传递一个新的值
        //input.map((event:any) => 'event.target.value')
        // 通过提取属性传递一个新的值
        let input = Observable.fromEvent(document.getElementsByName('inputa'), 'input')
        //input.pluck('target', 'value')
        // 传递之前的两个值
        // input.pluck('target', 'value').pairwise()

        // 只会通过唯一的值
        // input.pluck('target', 'value').distinct()
        input.pluck('data').distinctUntilChanged()
            .subscribe((value:any) => console.log(value));
    }

}
