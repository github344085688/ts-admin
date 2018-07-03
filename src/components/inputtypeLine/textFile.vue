<template lang="pug">
     .inputbox
        .text-field-content(:class="{'errors':iserrors}")
            slot
                input(
                type="text"
                v-on:change="handleChange"
                v-on:focus="handleFocus"
                v-on:input="handleInput"
                v-on:blur="handleBlur(errors.has(name))"
                v-bind:name="name"
                v-validate ="'required|'+name"
                v-model="value"
                autocomplete="off"
                )
            slot
                underline.text-field-underline(
                :focus="isFocused"
                v-if="isUnderLine"
                v-bind:underLineColor="underLinkCocor"
                v-bind:focusLineColor="focusLinkClocor"
                )
            slot
                .validateBox(:class="valErrors")
                    span(v-show="!errors.has(name)") {{PopPlaceholder}}
                    span(v-show="errors.has(name)") {{errors.first(name)}}


</template>
<style lang="stylus">
    @import "../../assets/stylus/default"
.inputbox
    background #fff

    .text-field-content
        $wh(w 100%, h 100%)
        position relative
        line-height 0

        input[type=text]
            $pAbM(p,t 0,l 0,r 0,b 0)
            $wh(w 100%,h 100%)
            background none
            box-sizing border-box
            $pad(l 15px,r 15px)
            display block
            outline none
            border none
            z-index 2

        .text-field-underline
            $wh(w 100%,h 2px no)
            position absolute
            bottom  0
            z-index 1

        .validateBox
            font-size 16px;/*no*/
            $pAbM(p,t 30px,l 15px)
            transition top .5s
            z-index 0
        .valErrors
            color darkblue
            transition top .5s
            top -16px
    .errors
        border  1px solid red



</style>

