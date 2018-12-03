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

    successBtn(event: any) {
        this.show = false;
        let node = document.querySelector('.autu-pop-up-win');
        if (node && node.parentNode) {
            node.parentNode.removeChild(node)
        }
    }

    cancelBtn(event: any): void {
        this.show = false;
        console.log(event);

    }
}




