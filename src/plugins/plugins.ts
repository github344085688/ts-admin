import popupForDetermine from '../components/popupForDetermine/popupForDetermine.ts';
import Vue from 'vue';
declare module 'vue/types/vue' {
// 3. 声明为 Vue 补充的东西
  interface Vue {
    $errorAlert: any,
    $closeErrorAlert:any
  }
}


//
// declare module 'vue/types/vue' {
// // 3. 声明为 Vue 补充的东西
//   interface Vue {
//     $msgt: any,
//     $closeErrorAlert:any
//   }
// }
//
//
// export default function(Vue:any) {
//   // //添加全局API
//   Vue.prototype.$msgt = msgBox
// }







//
// declare module 'vue/types/vue' {
//   // 可以使用 `VueConstructor` 接口
//   // 来声明全局属性
//   interface VueConstructor {
//     $myGlobal: string
//   }
// }

// ComponentOptions 声明于 types/options.d.ts 之中
// declare module 'vue/types/options' {
//   interface ComponentOptions<V extends Vue> {
//      showMyName?: any
//   }
// }
const plugins = {
  install: function(vue:any) {
    Vue.mixin({
      created() {
        //this.loading = loading;
      },
      methods: {
        greetingFns: function () {
          console.log('greeting');
        }
      }
    })

    Vue.prototype.$errorAlert = (options:any) => {
      let instance :any;
      if (!instance) {
        const LoadingPlugin = Vue.extend(popupForDetermine);
        instance = new LoadingPlugin({
          el: document.createElement('div')
        });
        document.body.appendChild(instance.$el);
        // instance.$mount('#id')
      }
      instance.show = false;
      Object.assign(instance.options, options);
      return new Promise((resolve, reject) => {
        instance.show = true;
        let successBtn = instance.successBtn;
        let cancelBtn = instance.cancelBtn;
        instance.successBtn = () => {
          successBtn();
          resolve('ss');
        }
        instance.cancelBtn = () => {
          reject();
          cancelBtn();
        }
      });
    };
   },

}

export default plugins;
