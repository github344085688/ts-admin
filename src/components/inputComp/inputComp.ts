/**
 * Created by f on 2018/5/22.
 */
import {Component, Prop,Model} from "vue-property-decorator";
import axVue from '../../httpAnency'
import template from './inputComp.vue'


@Component({
    name: "inputComp",
    mixins: [template],
    components: {},

})
export default class TextFile extends axVue {

    @Prop({
        default:''
    })
    label?:string;

    @Model('blur') blur: any;

    inputValue:string=''
    ifFocus:boolean=false

    get isPlaceholder(): any {
       if (this.inputValue || this.ifFocus) return "isPlaceholder";
    }

    handleInput(el: any) {}

    handleFocus(el: any) {
        this.ifFocus=true;
    }

    handleBlur() {
        this.ifFocus=false;
        console.log(this.inputValue)
        this.$emit('blur', this.inputValue);

    }
}

