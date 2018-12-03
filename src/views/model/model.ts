/**
 * Created by f on 2018/5/4.
 */
import {Component} from 'vue-property-decorator';
import template from './model.vue'
import axVue from '../../httpAnency'
import MyCheckbox from './MyCheckBox.vue'

@Component({
  mixins: [template],
  components: {
    MyCheckbox
  }
})
export default class login extends axVue {


  mounted() {

  }

  checkbox = {
    label: 'Fancy checkbox',
    id: 'checkbox-id',
    checked: true
  }

}

