/**
 * Created by f on 2018/5/4.
 */
import {Component} from 'vue-property-decorator';
import template from './warehouse.vue'
import uiSelectChoices from '../../components/uiSelectChoices/uiSelectChoices.ts'
import inputSelectChoices from '../../components/inputSelectChoices/inputSelectChoices.ts'
import selectFilters from '../../components/selectFilters/selectFilters.ts'
import axVue from '../../httpAnency'


@Component({
  mixins: [template],
  components: {
    'ui-select-choices':uiSelectChoices,
    'input-select-choices':inputSelectChoices,
    'select-filters':selectFilters,
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
  setPhoneSelect:any=['SPjeTsSun Power', 'SPjeTsSun Power', 'SPjeTsSun Power','SPjeTsSun Power'];
  setPhonesSelect:any=[{id: 'qz-0501', Name: 'BevmoVal'}, {id: 'qz-0701', Name: 'REWKEEN'}, {
    id: 'qt-00d1',
    Name: 'VIZDDSIO'
  }, {id: 'qz-45401', Name: 'SPjeTsSun Power'}];
  setEmailSelect:any=[1, 2, 3,4];

  mounted() {

  }


}
