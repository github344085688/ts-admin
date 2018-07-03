<template lang="pug">
    .loding-bader
        .dd {{searchInfo.phone}}
        ui-select-choices.input(:isFocus="true" v-bind:selectData.sync="searchInfo.phone" v-bind:deselectData="setPhoneSelect")
        .dd {{searchInfo.email}}
        input-select-choices.input-select(:isFocus="true" v-bind:selectData.sync="searchInfo.email" v-bind:deselectData="setEmailSelect")

</template>

<style lang="stylus">
@import "../../assets/stylus/default"
.loding-bader
    $wh(w 100%,h 100%);display flex;flex-direction column
    .input
        fz(24px);$mar(l 75px no,r 75px no,t 30px no); background #f6f6f6; line-height 150px; padding 25px;/*no*/ $bodall(solid 1px #ccc no); min-height 150px;/*no*/ margin-top 150px;/*no*/
    .input-select
        fz(24px);$mar(l 75px no,r 75px no,t 30px no); background #48ccbf;height 40px;order-radius 6px;/*no*/
    .divtext
        $wh(w 500px,h 200px); background rgba(12, 204, 91, 0.49);
    .dd
     font-size 14px;/*no*/

</style>

