<template lang="pug">
    div
        .input-comp(v-bind:class="{ margintop: label }")
            .PopPlaceholder(:class='isPlaceholder')
                span {{label}}
            input(type="text"
            v-on:focus="handleFocus($event)"
            v-on:input="handleInput($event)"
            v-on:blur="handleBlur"
            v-model="inputValue"
            )


</template>
<style lang="stylus">
    @import "../../assets/stylus/default"
    .margintop
        margin-top 40px;
    .input-comp
        $bodall(solid 1px #ccc no); width 100%; min-height 40px;/*no*/ position relative; padding 0 5px;/*no*/ border #ccc solid 1px;/*no*/ border-radius 4px;/*no*/ padding-right 40px;/*no*/ box-sizing border-box; min-width 150px;/*no*/

        input[type=text]
            $pAbM(p,l 0,t 0);background none;border:none;outline none; box-sizing border-box; z-index 1; width 100%; display block; min-height 39px;/*no*/ padding 0 15px;/*no*/

        .PopPlaceholder
            $pAbM(p,l 0,t 0); z-index 0;  display inline-block; padding-left 40px;  min-width 150px;  height 40px;/*no*/ line-height 40px;/*no*/  font-size :14px;/*no*/ transition all .5s ;z-index 0
        .isPlaceholder
            top -45px;/*no*/ transition all .5s;padding-left 0px;


</style>


