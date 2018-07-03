/**
 * Created by f on 2018/5/22.
 */
import {Component, Emit, Inject, Model, Prop, Provide, Vue, Watch} from "vue-property-decorator";
import axVue from '../../httpAnency'
import template from './textFile.vue'
import underline from './textFiledUnderLine.ts'

@Component({
    mixins: [template],
    components:{
        underline
    }
})
export default class TextFile extends axVue {
    @Prop({
        default: false
    })
    isUnderLine: boolean;

    @Prop({
        default: 'none'
    })
    underLinkCocor: string;

    @Prop({
        default: 'none'
    })
    focusLinkClocor: string;

    @Prop({
        default: ''
    })
    name: string;

    @Prop({
        default: ''
    })
    PopPlaceholder: string;

    @Prop({
        default: false
    })
    iserrors: boolean;

    isFocused:boolean=false;
    isValidate:boolean=false;
    value:any='';

    @Watch("value")
    ishanevalidates() {
        if(this.value) this.isValidate=true;
        else this.isValidate=false;
    }

    get valErrors(): any{
         if(this.isFocused || this.isValidate) return 'valErrors'
    }

    handleInput(){
        // console.log("handleInput")
    }
    handleChange(){
        // console.log("handleChange")
    }
    handleFocus(){
       this.isFocused=true;
    }
    handleBlur(isValidate:any){
       this.isFocused=false;
       if(!isValidate) this.$emit('update:input', this.value)
        else this.$emit('update:input', null)
    }

}