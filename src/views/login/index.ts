/**
 * Created by f on 2018/5/4.
 */
import {Component, Emit, Inject, Model, Prop, Provide, Vue, Watch} from 'vue-property-decorator';
import template from './index.vue'
import textFile from '../../components/inputtypeLine/textFile.ts'
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

 import dbs  from '../../store/indexDb';
 // import INDEXDB  from '../../store/db';

import {Subject} from "rxjs/Subject";
import {Subscription} from "rxjs/Subscription";

@Component({
  mixins: [template],
  components: {
    'text-file':textFile
  }
})
export default class login extends axVue {
  lodingModule:object={
    selectValue:'en'
  };

  searchInfo: object = {
    company: "VIZIO",
    system: "Client Portal",
    page: "Receipt"
  };

  selectChange:any='';
  myDB:object= {
    name: 'univisity',
    version: 4,
    db: null,
    ojstore: {
      name: 'users',//存储空间表的名字
      keypath: 'id'//主键
    }
  }

  isSubmit:boolean=false;

  @Watch('lodingModule.selectValue')
  onChildChanged(val:string, oldVal:string) {
    this.$i18n.locale=val;
  }

  @Watch('searchInfo',{deep:true})
  isSearChInFo(val:any, oldVal:any) {
    console.log(val.phone && val.email)
    if(val.phone && val.email) this.isSubmit=true
    else this.isSubmit=false
  }




  mounted() {
  }
  selectChangeVaule(val:any){
   console.log(val)
  }

  Submit(){
   console.log("ss")
  }

}
