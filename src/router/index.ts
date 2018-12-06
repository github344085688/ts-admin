import Vue, { AsyncComponent } from 'vue'
import Router, { RouteConfig, Route, NavigationGuard } from 'vue-router'

const main: AsyncComponent = (): any => import(/* webpackChunkName: "group-foo" */ '@/views/login/index.ts')
const warehouse: AsyncComponent = (): any => import(/* webpackChunkName: "warehouse" */ '../views/warehouse/warehouse.ts')
const shops: AsyncComponent = (): any => import(/* webpackChunkName: "group-fso" */ '@/components/board.vue')
const headline: AsyncComponent = (): any => import(/* webpackChunkName: "group-ao" */ '@/components/headline.vue')
// const board: AsyncComponent = r => require.ensure([], (): any => r(require('@/components/board.vue')), 'group-foo');

/*
 const enterprise = r => require.ensure([], () => r(require('@/enterprise/index')), 'group-foo');
 const drugbox = r => require.ensure([], () => r(require('@/enterprise/drug_box/index')), 'group-foo');


 const mypatient = r => require.ensure([], () => r(require('@/enterprise/drug_box/my_patient/aside')), 'group-foo');
 const patient_list = r => require.ensure([], () => r(require('@/enterprise/drug_box/my_patient/patient_list')), 'group-foo');
 const medical_examination_record = r => require.ensure([], () => r(require('@/enterprise/drug_box/my_patient/medicalreport/medical_examination_record')), 'group-foo');
 const Physical = r => require.ensure([], () => r(require('@/enterprise/drug_box/my_patient/historicalrecords/medical_examination_record')), 'group-foo');
 */

// import main from '@/views/main.vue'

Vue.use(Router)

const routes: RouteConfig[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    name: 'main',
    component:warehouse
  },
  {
    path: '/warehouse',
    name: 'warehouse',
    component: main
  },
  {
    path: '/shops',
    name: 'shops',
    component: shops
  },{
    path: '/headline',
    name: 'headline',
    component: headline
  }
]

const router: Router = new Router({
  mode: 'history',
  base: '/',
  routes
})

export default router
