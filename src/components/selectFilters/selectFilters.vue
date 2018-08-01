<template lang="pug">

    div
        .select-choices(v-bind:class="{ margintop: selecToDoing }")
            .doth-Item-Select(v-for="item in viewsData" v-if="isArray" ) {{item | filtersDatas}}
                .delete(v-on:click="deleteChoiceData(item)")
            .odd-Item-Select(v-for="item in viewsData" v-if="!isArray" ) {{item | filtersDatas}}

            .PopPlaceholder(:class='isPlaceholder')
                span {{selecToDoing}}

            input(:type="inputType"
                    v-on:change="handleChange"
                    v-on:focus="handleFocus($event)"
                    v-on:input="handleInput($event)"
                    v-on:blur="handleBlur"
                    v-model="selectInputValue"
            )

            slot
            .open-box(v-bind:class="isActive ? 'activeClass' : ''")
                lo-ding.selectLoding(:wh="'12px'" v-show="isSelectIng")
                ul
                    li(v-for="item in opensData" v-show="!isSelectIng" )
                        input(type="button" v-on:click="pushDeselectDat(item)"  v-on:focus="[isFocused=true,isActive=true]" v-on:blur="[isFocused=false,isActive=false]" v-bind:value="item | filtersDatas")



</template>
<style lang="stylus">
    @import "../../assets/stylus/default"
    .margintop
        margin-top 40px;
    .select-choices
        $bodall(solid 1px #ccc no);$dflex(fd row,fw wrap,jc flex-start,ai center,ac center); width 100%; min-height 40px;/*no*/ position relative; padding 0 5px;/*no*/ border #ccc solid 1px;/*no*/ border-radius 4px;/*no*/ padding-right 40px;/*no*/ box-sizing border-box; min-width 150px;/*no*/
        &::before
            $wh(w 20px no,h 20px no);$pAbM(p,r 25px no,t 50%); margin-top -10px;/*no*/ font-size 18px;/*no*/ content "\e900";
        input
            background none;border:none;outline none;cursor pointer; box-sizing border-box; z-index 1;
            &[type=text]
                flex 1; display block; min-height 39px;/*no*/ display block;
            &[type=button]
                 $wh(w 100%,h 100%);$pAbM(p,r 0,t 0,l 0, b 0);

        .PopPlaceholder
            $pAbM(p,l 0,t 0); z-index 0;  display inline-block; padding-left 40px;  min-width 150px;  height 40px;/*no*/ line-height 40px;/*no*/  font-size :14px;/*no*/ transition all .5s
        .isPlaceholder
            top -45px;/*no*/ transition all .5s;padding-left 0px;

        .doth-Item-Select
            $pad(l 15px, r 25px no);  z-index 2; min-width 80px; display inline-block; margin 4px 5px;/*no*/ align-self center;border-radius 4px;/*no*/ position relative; font-size 14px; line-height 28px;/*no*/
            .delete
                $pAbM(p,r 3px no,t 50%);margin-top -10px;/*no*/ $wh(w 18px no,h 18px no);
                &::before
                    font-size 18px;/*no*/ content "\e901"; color #a4a4a4; line-height normal;cursor pointer;
        .odd-Item-Select
            min-width 80px; display inline-block;$pad(l 15px, r 25px no);  z-index 1;font-size 14px;margin 4px 5px;/*no*/ align-self center;border-radius 4px;/*no*/

        .open-box
            $pAbM(p,l 0,t 100%,r 0); margin-top 15px; max-height 150px;/*no*/  background #fff;box-shadow 0px 0px 4px #333333; border-radius 4px;/*no*/ z-index 10; height 0; overflow hidden;
            &::before
                $bod(l 8px solid transparent no,r 8px solid transparent no,b 8px solid #555555 no);$pAbM(p,l 25px no,t -9px no);content  ""; $wh(w 0,h 0);
            &::after
                $wh(w 0,h 0);$bod(l 8px solid transparent no,r 8px solid transparent no,b 8px solid #fff no);$pAbM(p,l 25px no,t -8px no);content "";

            ul
                margin 0; padding 0 15px;/*no*/ position relative; display block;max-height 150px;/*no*/ overflow auto;
                .selectLoding
                     $pAbM(p,l 0,t 0,r 0 , b 0); margin auto;
                >li
                    list-style-type none;fz(14px no); color #6e6e6e; min-height 30px;/*no*/ line-height 30px;/*no*/ border-bottom #ccc solid 1px;/*no*/padding 0 15px;/*no*/ position relative;
                    input[type=button]
                        $wh(w 100%,h 100%); text-align left;$pAbM(p,r 0,t 0,l 0, b 0);background #fff; border:none;outline none;cursor pointer; display block
                    &:hover
                        background #e5f2f4;
                    &:active
                        background #def4d8;
                    &:last-child
                        border-bottom none
        .activeClass
            height auto !important; overflow inherit;

</style>

