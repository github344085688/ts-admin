/**
 * Created by f on 2018/5/4.
 */
import {Component,Provide} from 'vue-property-decorator';
import template from './provideProvide.vue'
import axVue from '../../httpAnency'
import ChildComp  from './ChildComp.vue'
import inputComp from '../../components/inputComp/inputComp.ts'
import fillsInput from '../../components/fillsInput/fillsInput.ts'

@Component({
  mixins: [template],
  components: {
    ChildComp,
    inputComp,
    fillsInput
  }
})
export default class login extends axVue {

  @Provide('users')
  users = [
    {
      name: 'test',
      id: 0
    }
  ]
  inputValue:any='';
  fillsinputValue:any=[];
  propsDatases:any="login"
}

