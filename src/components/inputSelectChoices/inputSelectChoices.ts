/**
 * Created by f on 2018/5/22.
 */
import {Component, Prop} from "vue-property-decorator";
import axVue from '../../httpAnency'
import template from './inputSelectChoices.vue'
@Component({
    mixins: [template],
    components:{
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

    opensData:Array<any> = ["BevmoVal", "VIZDDSIO", "REWKEEN", "SPjeTsSun Power"];
    isPopPlaceholders:boolean = true;
    isFocused:boolean=false;
    isActive:boolean=false;


    get isValidate(): any{
         if(this.isFocused || this.value!='')   return true
         else return false

    }
    handleInput(){

    }
    handleChange(){

    }
    handleFocus(){
       this.isFocused=true;
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
