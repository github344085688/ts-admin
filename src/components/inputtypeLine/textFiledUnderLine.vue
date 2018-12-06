<template lang="pug">
    div
       .field-line
          .text-field-line(:class="" v-bind:style="{ background: underLineColor }")
          .text-field-focus-line(:class="focusLineClass" v-bind:style="{ background: focusLineColor }" )
</template>
<style lang="stylus">
    @import "../../assets/stylus/default"
    .field-line
       position relative
       $wh(w 100%,h 100%)
       .text-field-line
            $pAbM(p,r 0,t 0,l 0, b 0)

       .text-field-focus-line
            $pAbM(p,r 0,t 0,l 0, b 0)
            background-color #48ccbf
            transform scaleX(0)
            transition transform .45s cubic-bezier(0.23, 1, 0.32, 1)

       .text-field-focus
         transform scaleX(1)

</style>
