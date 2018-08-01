<template lang="pug">
      v-login.loginBg
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import { State, Action, Getter } from 'vuex-class'
import loGin from './login/index.ts'
@Component({
  components: {
    'v-login':loGin
  }
})
export default class App extends Vue {
  @State accessToken: string;
//  @Action initAjax: () => void;
//  @Getter load: boolean;
  /*get isLogin(): boolean {
    return this.login;
  }*/

  mounted() {
      //console.log(this.accessToken)
  }
}
</script>

<style lang="stylus">

    .loginBg
        width 100%
        height 100%


</style>
