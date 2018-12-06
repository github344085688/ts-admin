/**
 * Created by f on 2018/5/4.
 */
import {Component} from 'vue-property-decorator';
import template from './warehouse.vue'
import uiSelectChoices from '../../components/uiSelectChoices/uiSelectChoices.ts'
import inputSelectChoices from '../../components/inputSelectChoices/inputSelectChoices.ts'
import selectFilters from '../../components/selectFilters/selectFilters.ts'
import pager from '../../components/pager/pager.ts'
import axVue from '../../httpAnency'
import drop from '../drop/drop.ts'


@Component({
  mixins: [template],
  components: {
    'ui-select-choices':uiSelectChoices,
    'input-select-choices':inputSelectChoices,
    'select-filters':selectFilters,
    'pager':pager,
    'drop':drop
  }
})
export default class login extends axVue {
  lodingModule:object={
    selectValue:'en'
  };
  searchInfo: object = {
    company: '',
    system: '',
    page: ''
  };

  selectChange:any='';
  slect:any=['SPjeTsSun Power'];
  setPhoneSelect:any=['SPjeTsSun Power', 'BevmoValr', 'Name Power','SPjeTsSun REWKEEN'];
  sect:any=['SPjeTsSun Power', 'BevmoValr', 'Name Power','SPjeTsSun REWKEEN'];
  setPhonesSelect:any=[{id: 'qz-0501', Name: 'BevmoVal'}, {id: 'qz-0701', Name: 'REWKEEN'}, {
    id: 'qt-00d1',
    Name: 'VIZDDSIO'
  }, {id: 'qz-45401', Name: 'SPjeTsSun Power'}];
  setEmailSelect:any=[1, 2, 3,4];
  skd(){
    this.$errorAlert({
      title:'温馨提示',
      content:'<div v-if="options.content" class="content">{{options.content}}</div><div v-if="options.content" class="content">{{options.content}}</div><div v-if="options.content" class="content">{{options.content}}</div><div v-if="options.content" class="content">{{options.content}}</div><div v-if="options.content" class="content">{{options.content}}</div> ',
      confirm:'确定',
    }).then((ord:any)=>{
      console.log(ord)
      this.$forceUpdate();
    }).catch((err:any)=>{
      console.log("error");
    })
  };
  mounted() {

  }


}
