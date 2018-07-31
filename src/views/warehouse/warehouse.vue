<template lang="pug">
    .loding-bader
        <!--div {{searchInfo.phone}}-->
        <!--ui-select-choices.input(:isFocus="true" v-bind:selectData.sync="searchInfo.phone" v-bind:deselectData="setPhoneSelect")-->
        .dt
            .dd {{searchInfo.email}}
            select-filters.input-select(:isFocus="true" v-bind:selectData.sync="searchInfo.email" v-bind:porpData="setPhoneSelect" v-bind:selecToDoing="'Factory'" v-bind:porpChooseData="setPhonesSelect"   )
        .dt
            .dd {{searchInfo.phone}}
            select-filters.input-select(:isFocus="true" v-bind:selectData.sync="searchInfo.phone" v-bind:inputselect="true" v-bind:porpData="setPhonesSelect" v-bind:porpChooseData="setPhoneSelect"  )
        .dt
            .dd {{searchInfo.phones}}
            select-filters.input-select(:isFocus="true" v-bind:selectData.sync="searchInfo.phones" )
        <!--input-select-choices.input-select(:isFocus="true" v-bind:selectData.sync="searchInfo.email" v-bind:deselectData="setPhoneSelect")-->

</template>

<style lang="stylus">
@import "../../assets/stylus/default"

.loding-bader
    $wh(w 100%,h 100%);display flex;flex-direction column
    .dt
        display block;margin-top 15px;/*no*/
        .input
            fz(24px); width 60%; margin auto;
        .input-select
            fz(24px);$mar(l 75px no,r 75px no,t 30px no);height 40px;order-radius 6px;/*no*/
        .divtext
            $wh(w 500px,h 200px); background rgba(12, 204, 91, 0.49);
        .dd
         font-size 14px;/*no*/

</style>

