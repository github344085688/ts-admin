import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {i18n,config} from './i18OrLanguage/I18nConfig'
import VeeValidate from 'vee-validate'
import setFontSize from './typings/defaultFontSize'
import RXeEvent from './directive/rx-event'
import Plugins from './plugins/plugins'
Vue.use(RXeEvent)
Vue.use(Plugins)
Vue.use(VeeValidate, config)
Vue.use(setFontSize)
Vue.config.productionTip = false;
const app: Vue = new Vue({
  el: '#app',
  i18n,
  router,
  store,
  components: {App },
  template: '<app/>'
})
export default app
