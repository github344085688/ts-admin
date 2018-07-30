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
    name:"inputSelectChoices",
    mixins: [template],
    components:{
        "lo-ding":loDing
    },
    filters: {
        filtersDatas(value: any) {
            if (value.Name) return value.Name;
            else  return value;
        }
    }
})
export default class TextFile extends axVue {
    @Prop({
        default:  []
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

    SelectInputValue: string = '';

    callbackData: any = [];

    // "BevmoVal", "VIZDDSIO", "REWKEEN", "SPjeTsSun Power"
   /* opensData:Array<any> =["BevmoVal", "VIZDDSIO", "REWKEEN", "SPjeTsSun Power"];*/
   /* opensData:Array<any> =["BevmoVal", "VIZDDSIO", "REWKEEN", "SPjeTsSun Power"];*/
    opensData: Array<any> = [{id: 'qz-0501', Name: 'BevmoVal'}, {id: 'qz-0701', Name: 'REWKEEN'}, {
        id: 'qt-00d1',
        Name: 'VIZDDSIO'
    }, {id: 'qz-45401', Name: 'SPjeTsSun Power'}];


    isPopPlaceholders:boolean = true;
    isFocused:boolean=false;
    isActive:boolean=false;
    isSelectIng:boolean=false;

    get isPlaceholder():any{
        if(this.deselectData.length>0 || this.isFocused || this.SelectInputValue!='') return "isPlaceholder";
    }

    get isValidate(): any{
        if(this.isFocused || this.value!='')   return true
        else return false

    }

    mounted() {


    }
    handleInput(el:any){
        console.log(el.target);


    }
    handleChange(){

    }
    handleFocus(el:any){
        this.isFocused=true;
        let _this=this;

        Observable.fromEvent(el.target,'keyup')
            .debounceTime(1000)
            .subscribe((event:any)=>{
                if(!_this.SelectInputValue) return;
                _this.deselectData.length = 0;
                _this.isActive=true;
                _this.isSelectIng=true;
                setTimeout(()=>{
                    _this.isSelectIng=false;
                    _this.opensData==[1, 2, 3, 4];
                },500)


            })
    }
    handleBlur(){
        this.isActive=false;
        if(this.deselectData.length<1){
            this.isFocused=false;
            return false
        }
    }

    pushDeselectDat(item: any) {
        this.isActive = true;
        if (this.deselectData.find((value: any) => value == item)) return false
        this.deselectData.push(item);
        if (item.Name) {
            this.callbackData.push(item.id);
        }
        else {
            this.callbackData.push(item);
        }
        this.$emit('update:selectData', this.callbackData)
    }

    deleteChoiceData(item: any) {
        this.deselectData.splice(this.deselectData.indexOf(item), 1);
        if (item.Name) {
            this.callbackData.splice(this.callbackData.indexOf(item.id), 1);
        }
        else {
            this.callbackData.splice(this.callbackData.indexOf(item), 1);
        }
        this.$emit('update:selectData', this.callbackData)
    }

}

