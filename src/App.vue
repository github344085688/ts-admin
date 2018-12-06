<template lang="pug">
  #id
    router-view
</template>
<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  @Component
  export default class App extends Vue {
  }
</script>

<style lang="stylus">
    html
    body
      margin:0
      padding:0
      height 100%

      #id
         height 100%
    div
        box-sizing border-box

</style>
