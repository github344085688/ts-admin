/**
 * Created by f on 2018/5/4.
 */
import {Component} from 'vue-property-decorator';
import template from './warehouse.vue'
import uiSelectChoices from '../../components/uiSelectChoices/uiSelectChoices.ts'
import inputSelectChoices from '../../components/inputSelectChoices/inputSelectChoices.ts'
import axVue from '../../httpAnency'


@Component({
  mixins: [template],
  components: {
    'ui-select-choices':uiSelectChoices,
    'input-select-choices':inputSelectChoices,
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
  setPhoneSelect:any=['BevmoVal', 'VIZDDSIO', 'REWKEEN', 'SPjeTsSun Power'];
  setEmailSelect:any=['BevmoVal', 'VIZDDSIO', 'REWKEEN', 'SPjeTsSun Power'];

  mounted() {

  }


}
