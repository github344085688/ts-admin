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
    }];
    dom :any = null;

    dragTarget:string = '';
    dropesLists:Array<any> = [{
        name: '小颖',
    }];


    drag(event: any) {
       this.dom = event.target;
        // console.log(event.target);
        return true;
    };

    drop(event: any, ppindex: any) {
        //event.preventDefault();
         event.target.appendChild(this.dom);
         console.log(event.target);
        return false;
    };

    allowDrop(event: any) {
        event.preventDefault();
        return true;
    };
    onDrag(event: any) {
        this.dragTarget = event.target.innerText;
        return true;
    };
    onDrop(event: any, ppindex: any) {
        if (this.dropesLists.findIndex((item: any) => item.name === this.dragTarget) > -1) return;
         this.dropesLists.push({ name: this.dragTarget });
    }

    onAllowDrop(event: any) {
        event.preventDefault();
    }

}

