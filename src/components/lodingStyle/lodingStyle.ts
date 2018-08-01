/**
 * Created by f on 2018/5/22.
 */
import {Component, Prop} from "vue-property-decorator";
import axVue from '../../httpAnency'
import template from './lodingStyle.vue'
@Component({
    mixins: [template],
    components:{
    }
})
export default class TextFile extends axVue {
    @Prop({
        default:  '5px'
    })
    wh: any;

}
