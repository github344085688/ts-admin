<template lang="pug">
    div
       .input-select-choices
           //lo-ding
           .Select-box
                .item-Select(v-for="item in deselectData" ) {{item}}
                   .delete(v-on:click="deleteChoiceData(item)")
           .input-box
                 input(
                 type="text"
                 v-model="inputdatas"
                 v-on:blur="isActive=false"
                 v-on:focus="handleFocus($event)"
                 v-on:input="handleInput($event)"
                  )
           slot
           .open-box(v-bind:class="isActive ? 'activeClass' : ''")
                ul
                    li(v-for="item in opensData" )
                       input(type="button" v-on:click="pushDeselectDat(item)"  v-on:focus="isActive=true" v-on:blur="isActive=false" v-bind:value="item")

</template>
<style lang="stylus">
@import "../../assets/stylus/default.styl"
    .input-select-choices
        $bodall(solid 1px #ccc no);$dflex(fd row,fw nowrap,jc space-between);  width 100%; min-height 40px;/*no*/ position relative; border #ccc solid 1px;/*no*/ border-radius 4px;/*no*/ background #fff;
        &::before
            $wh(w 20px no,h 20px no);$pAbM(p,r 25px no,t 50%); margin-top -10px;/*no*/ font-size 18px;/*no*/ content "\e901";
        .Select-box
            max-width 80%;
            .item-Select
                flex 1; $pad(l 15px, r 25px no); min-width 80px; display inline-block; background #e8e8e8; margin 4px 5px;/*no*/ align-self center;border-radius 4px;/*no*/ position relative; font-size 14px; line-height 28px;/*no*/
                .delete
                    $pAbM(p,r 3px no,t 50%);margin-top -10px;/*no*/ $wh(w 18px no,h 18px no);
                    &::before
                        font-size 18px;/*no*/ content "\e900"; color #a4a4a4; line-height normal;

        .input-box
             flex 1; background rgba(210, 213, 140, 0.49); min-height 40px; min-width 100px;
             input[type=text]
                  background none; border:1px solid #ccc; outline none; display inline-block; $wh(w 100%, h 100%);box-sizing border-box; padding-left 35px;

        .PopPlaceholder
            flex 1;  display inline-block;  min-width 150px;  height 40px;/*no*/ line-height 40px;/*no*/  padding-left 40px;

        .open-box
            $pAbM(p,l 0,t 100%,r 0); margin-top 15px; max-height 150px;/*no*/  background #fff;box-shadow 0px 0px 4px #333333; border-radius 4px;/*no*/ z-index 10; height 0; overflow hidden;
            &::before
                $bod(l 8px solid transparent no,r 8px solid transparent no,b 8px solid #555555 no);$pAbM(p,l 25px no,t -9px no);content  ""; $wh(w 0,h 0);
            &::after
                $wh(w 0,h 0);$bod(l 8px solid transparent no,r 8px solid transparent no,b 8px solid #fff no);$pAbM(p,l 25px no,t -8px no);content "";
            ul
                margin 0; padding 0 15px;/*no*/
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

