/**
 * Created by f on 2018/5/16.
 */
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import {ch} from './Chinese'
import {en} from './English'
import{Validator}from 'vee-validate'
import dictionary from './validation'
Vue.use(VueI18n)
const messages = {
  en: {
    ...en
  },
  zh: {
    ...ch
  }
}
const i18n = new VueI18n({
  locale: 'zh',
  messages,
})
const config = {
  delay:100,
  events: 'input|blur',
  i18n,
  i18nRootKey: 'Validator',
  dictionary:dictionary
};
export {i18n,config}
