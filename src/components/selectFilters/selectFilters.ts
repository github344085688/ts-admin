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
        default: []
    })
    porpData?: any;


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

    opensData: Array<any> = [];

    inputType:string='';
    isFocused: boolean = false;
    isActive: boolean = false;
    isSelectIng: boolean = false;

    get isPlaceholder(): any {
        if (this.porpData.length > 0 || this.isFocused || this.SelectInputValue != '') return "isPlaceholder";
    }

    get isValidate(): any {
        if (this.isFocused || this.value != '')   return true
        else return false
    }

    mounted() {
       if(this.porpChooseData) this.opensData = this.porpChooseData;
       if( this.inputselect) this.inputType="text";
       else this.inputType="button";
    }

    handleInput(el: any) {}

    handleChange() {}

    handleFocus(el: any) {
        let _this = this;
        this.isFocused = true;
        if(! this.inputselect) {
            this.isSelectIng = true;
            this.porpData.length = 0;
            this.isActive = true;
            this.isSelectIng = true;
            this.callbackData = [];
            if(this.porpChooseData){
                this.isSelectIng = false;
            }else {
                setTimeout(() => {
                    _this.isSelectIng = false;
                    _this.opensData = [1, 2, 3, 4];
                }, 500)
            }
            return false;
        }
        Observable.fromEvent(el.target, 'keyup')
            .debounceTime(1000)
            .subscribe((event: any) => {
                if (!_this.SelectInputValue) return;
                _this.porpData.length = 0;
                _this.isActive = true;
                _this.isSelectIng = true;
                _this.callbackData = [];
                setTimeout(() => {
                    _this.isSelectIng = false;
                    _this.opensData = [1, 2, 3, 4];
                }, 500)
            })
    }

    handleBlur() {
        this.isActive = false;
        if (this.porpData.length < 1) {
            this.isFocused = false;
            return false
        }
    }

    pushDeselectDat(item: any) {
        this.isActive = true;
        if (this.porpData.find((value: any) => value == item)) return false
        this.porpData.push(item);
        this.updateSelectData(this.porpData);
    }

    deleteChoiceData(item: any) {
        this.porpData.splice(this.porpData.indexOf(item), 1);
        this.updateSelectData(this.porpData);
    }

    private updateSelectData(porpData: Array<any>) {
        this.callbackData=[];
        porpData.forEach((value:any)=>{
            if (value.Name) {
                this.callbackData.push(value.id)
            }else {
                this.callbackData.push(value)
            }
        })
        this.$emit('update:selectData', this.callbackData)
    }
}

