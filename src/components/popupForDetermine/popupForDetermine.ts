/**
 * Created by f on 2018/5/22.
 */
import {Component, Prop} from "vue-property-decorator";
import axVue from '../../httpAnency'
import template from './popupForDetermine.vue'
@Component({
    mixins: [template],
    name: 'popupForDetermine',
    components: {}
})
export default class PopupForDetermine extends axVue {
    @Prop({default: false})
    show: boolean;

    options: any ={};

    successBtn(): void {
        this.show = false;
    }

    cancelBtn(): void {
        this.show = false;
    }
}




