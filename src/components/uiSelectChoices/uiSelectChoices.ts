/**
 * Created by f on 2018/5/22.
 */
import {Component, Prop} from "vue-property-decorator";
import axVue from '../../httpAnency'
import template from './uiSelectChoices.vue'
@Component({
    mixins: [template],
    components:{
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

    opensData:Array<any> = ["BevmoVal", "VIZDDSIO", "REWKEEN", "SPjeTsSun Power"];
    isPopPlaceholders:boolean = true;
    isFocused:boolean=false;
    isActive:boolean=false;

    get isPlaceholder():any{
        if(this.deselectData.length>0 || this.isFocused ) return "isPlaceholder";
    }

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
       this.isActive=true;
    }
    handleBlur(){
        this.isActive=false;
        if(this.deselectData.length<1){
            this.isFocused=false;
        return false
        }



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
