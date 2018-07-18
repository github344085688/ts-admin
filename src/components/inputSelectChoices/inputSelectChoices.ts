/**
 * Created by f on 2018/5/22.
 */
import {Component, Prop} from "vue-property-decorator";
import axVue from '../../httpAnency'
import template from './inputSelectChoices.vue'
import loDing from '../lodingStyle/lodingStyle.ts'
import { Observable } from 'rxjs/Observable'
import { Subject } from "rxjs/Subject";
import 'rxjs/add/observable/fromEvent'
import 'rxjs/add/operator/throttleTime'
import 'rxjs/add/operator/debounceTime'


/*import 'rxjs/add/observable/of'
import 'rxjs/add/observable/interval'
import 'rxjs/add/operator/pluck'
import 'rxjs/add/operator/startWith'
import 'rxjs/add/operator/delay'*/
@Component({
    mixins: [template],
    components:{
        'lo-ding':loDing
    }
})



export default class TextFile extends axVue {
    @Prop({
        default:  ["Bevmo", "VIZIO", "KEEN", "Sun Power"]
    })
    deselectData: any;

    @Prop({
        default: 'phone'
    })
    inputName: string;

    @Prop({
        default: ''
    })
    PopPlaceholder: string;

    @Prop({
        default: ''
    })
    value: string;
    signIn:any='asdasdasd';

    opensData:Array<any> = ["BevmoVal", "VIZDDSIO", "REWKEEN", "SPjeTsSun Power"];
    isPopPlaceholders:boolean = true;
    isFocused:boolean=false;
    isActive:boolean=false;


    // : Subject<void> = new Subject();

    get isValidate(): any{
         if(this.isFocused || this.value!='')   return true
         else return false

    }

    ss(aa:any){
        console.log(aa)
    }
    mounted() {
        // inputPromise.then((o:any)=>console.log(o))
        // this.inputInSub.then((response:any) => { console.log(response) })
    }

 /*   interval =
    subscriptions() {
      this.interval
    }

*/
    deselectDatass(){
        alert('已回调')
                 console.log(this)//这里就是改组件的VueComponent对象
    }

    inputInSub(){

    };
    inputdatas:string='kjddj'

    handleFocus(ent:any){
        this.isFocused=true;

    }
    handleChange(){

    }
    handleInput(ent:any){


    }
    handleBlur(){
       this.isFocused=false;

    }
    pushDeselectDat(item:any){
        this.isActive=true;
       if(this.deselectData.find((value:any) => value ==item)) return
       else this.deselectData.push(item);
    }
    deleteChoiceData(items:any){
        this.deselectData.splice(this.deselectData.indexOf(items),1);
        this.$emit('update:selectData', this.deselectData)
    }


}
