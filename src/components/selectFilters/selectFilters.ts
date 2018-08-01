/**
 * Created by f on 2018/5/22.
 */
import {Component, Prop} from "vue-property-decorator";
import axVue from '../../httpAnency'
import template from './selectFilters.vue'
import loDing from '../lodingStyle/lodingStyle.ts'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/fromEvent'
import 'rxjs/add/operator/throttleTime'
import 'rxjs/add/operator/debounceTime'

@Component({
    name: "inputSelectChoices",
    mixins: [template],
    components: {
        "lo-ding": loDing
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
        default: true
    })
    select?: any;

    @Prop({
        default: false
    })
    isArray?: any;

    @Prop({
        default: false
    })
    inputselect?: any;


    @Prop({
        default: ''
    })
    selecToDoing?: string;

    @Prop({
        default: null
    })
    porpChooseData?: any;

    @Prop({
        default: null
    })
    porpData?: any;


    @Prop({
        default: ''
    })
    PopPlaceholder?: string;

    @Prop({
        default: ''
    })
    value: string;

    viewsData:Array<any> = [];
    selectInputValue: string = '';
    callbackData: any = null;
    opensData: Array<any> = [];
    inputType:string='';
    isFocused: boolean = false;
    isActive: boolean = false;
    isSelectIng: boolean = false;

    get isPlaceholder(): any {
        if (this.viewsData.length > 0 || this.isFocused || this.selectInputValue != '') return "isPlaceholder";
    }

    get isValidate(): any {
        if (this.isFocused || this.value != '')   return true;
        else return false
    }

    mounted() {
       if(this.porpData) this.viewsData = this.porpData ;
       if(this.porpChooseData) this.opensData = this.porpChooseData;
       if(this.inputselect) this.inputType="text";
       else this.inputType="button";
    }

    handleInput(el: any) {}

    handleChange() {}

    handleFocus(el: any) {
        this.isFocused = true;
        if(! this.inputselect) {
            this.isSelectIng = true;
            this.viewsData.length = 0;
            this.isActive = true;
            this.isSelectIng = true;
            this.callbackData =null;
            if(this.porpChooseData){
                this.isSelectIng = false;
            }else {
                this.getopensData("dd")
            }
            return false;
        }
        Observable.fromEvent(el.target, 'keyup')
            .debounceTime(1000)
            .subscribe((event: any) => {
                if (! this.selectInputValue) return;
                this.viewsData.length = 0;
                this.isActive = true;
                this.isSelectIng = true;
                this.callbackData =null;
                this.getopensData("dd")
            })
    }

    handleBlur() {
        this.isActive = false;
        if (this.viewsData.length < 1) {
            this.isFocused = false;
            return false
        }
    }

    pushDeselectDat(item: any) {
        if (this.isArray){
            if (this.viewsData.find((value: any) => value == item)) return false
            this.viewsData.push(item);
            this.isActive = true;
            this.updateSelectData(this.viewsData);
            return false
        }
        this.isActive=false;
        this.isFocused=false;
        this.viewsData = [item];
        this.updateSelectData(item);
    }

    deleteChoiceData(item: any) {
        if (this.isArray){
            this.viewsData.splice(this.viewsData.indexOf(item), 1);
            this.updateSelectData(this.viewsData);
        }

    }

    private updateSelectData(viewsData: any) {

        if(Array.isArray(viewsData)){
            this.callbackData=[];
            viewsData.forEach((value:any)=>{
                if (value.Name) {
                    this.callbackData.push(value.id)
                }else {
                    this.callbackData.push(value)
                }
            })
        }else {
            if(viewsData.Name){
                this.callbackData = viewsData.id;
            }else {
                this.callbackData =viewsData;
            }
        }

        this.$emit('update:selectData', this.callbackData)
    }

    private getopensData(api:string) {
        let _this = this;
        setTimeout(() => {
            _this.isSelectIng = false;
            _this.opensData = [1, 2, 3, 4];
        }, 500)
    }
}

