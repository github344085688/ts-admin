/**
 * Created by f on 2018/5/4.
 */
import {Component, Provide} from 'vue-property-decorator';
import template from './drop.vue'
import axVue from '../../httpAnency'

@Component({
    mixins: [template],
    components: {
    }
})
export default class Drog extends axVue {

    projectdatas: Array<any> = [{
        id: 1,
        name: '葡萄',
    }, {
        id: 2,
        name: '芒果',
    }, {
        id: 3,
        name: '木瓜',
    }, {
        id: 4,
        name: '榴莲',
    }];

    peopledata: Array<any> = [{
        id: 1,
        name: '小颖',
    }, {
        id: 2,
        name: 'hover',
    }, {
        id: 3,
        name: '空巢青年三 ',
    }, {
        id: 3,
        name: '一丢丢',
    }];
    dom :any = null;

    drag(event: any) {
       this.dom = event.target;
        // console.log(event.target);
        return true;
    };

    drop(event: any, ppindex: any) {
        //event.preventDefault();
        // event.target.appendChild(this.dom);
         console.log(this.dom.innerHTML);
        return false;
    };

    allowDrop(event: any) {
        // console.log(event.target);
        event.preventDefault();
        return true;
    };
}

