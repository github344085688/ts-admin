/**
 * Created by f on 2018/5/22.
 */
import {Component, Prop, Watch} from "vue-property-decorator";
import axVue from '../../httpAnency'
import template from './uiSelectChoices.vue'
@Component({
    name: 'uiSelectChoices',
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
        default: []
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

    callbackData: any = [];

    /*  opensData:Array<any> = ['BevmoVal','REWKEEN','VIZDDSIO'];*/
    /* opensData:Array<any> = [1,2,3];*/

   opensData: Array<any> = [{id: 'qz-0501', Name: 'BevmoVal'}, {id: 'qz-0701', Name: 'REWKEEN'}, {
        id: 'qt-00d1',
        Name: 'VIZDDSIO'
    }, {id: 'qz-45401', Name: 'SPjeTsSun Power'}];


    isPopPlaceholders: boolean = true;
    isFocused: boolean = false;
    isActive: boolean = false;


    mounted() {
    }

    @Watch("value")
    ishanevalidates() {
    }

    get isPlaceholder(): any {
        if (this.deselectData.length > 0 || this.isFocused) return "isPlaceholder";
    }

    get isValidate(): any {
        if (this.isFocused || this.value != '')   return true
        else return false

    }

    handleInput() {
    }

    handleChange() {
    }

    handleFocus() {
        this.isFocused = true;
        this.isActive = true;
    }

    handleBlur() {
        this.isActive = false;
        if (this.deselectData.length < 1) {
            this.isFocused = false;
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
