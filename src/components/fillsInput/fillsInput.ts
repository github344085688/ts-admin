/**
 * Created by f on 2018/5/22.
 */
import {Component, Prop,Model} from "vue-property-decorator";
import axVue from '../../httpAnency'
import template from './fillsInput.vue'


@Component({
    name: "inputComp",
    mixins: [template],
    components: {},
    filters: {
        filtersDatas(value: any) {
            if (value.Name) return value.Name;
            else  return value;
        }
    }

})
export default class TextFile extends axVue {

    @Prop({
        default:''
    })
    label?:string;

    @Prop({
        default:''
    })
    isArray?:string;

    @Model('blur') blur: any;



    fillsInputValue:any=['length','lengths','salength']
    ifFocus:boolean=false

    get isPlaceholder(): any {
       if (this.fillsInputValue.length>0 || this.ifFocus) return "isPlaceholder";
    }

    handleInput(el: any) {}

    handleFocus(el: any) {
        this.ifFocus=true;
    }

    handleBlur(el: any) {
        this.ifFocus=false;
        this.fillsInputValue.push(el.target.value)
        console.log(el.target)
        this.$emit('blur', this.fillsInputValue);

    }

    deleteChoiceData(item: any) {
        this.fillsInputValue.splice(this.fillsInputValue.indexOf(item), 1);
    }
}

