<template lang="pug">
    .loding-bader
        <!--div {{searchInfo.phone}}-->
        <!--ui-select-choices.input(:isFocus="true" v-bind:selectData.sync="searchInfo.phone" v-bind:deselectData="setPhoneSelect")-->
        <!--input-select-choices.input-select(:isFocus="true" v-bind:selectData.sync="searchInfo.email" v-bind:deselectData="setPhoneSelect")-->
            .dd {{searchInfo.email}}
            select-filters.input-select( v-bind:selectData.sync="searchInfo.email" v-bind:porpData="setPhoneSelect" v-bind:selecToDoing="'To Do'" v-bind:porpChooseData="setPhonesSelect"  v-bind:isArray="true" )

            .dd {{searchInfo.phone}}
            select-filters.input-select( v-bind:selectData.sync="searchInfo.phone"  v-bind:isArray="true" v-bind:inputselect="true" v-bind:selecToDoing="'To Do'"   )

            .dd {{searchInfo.phone}}
            select-filters.input-select( v-bind:selectData.sync="searchInfo.phone"   v-bind:inputselect="true" v-bind:selecToDoing="'To Do'"   )

            .dd {{searchInfo.phones}}
            select-filters.input-select( v-bind:selectData.sync="searchInfo.phones"  v-bind:porpChooseData="sect" v-bind:selecToDoing="'To Do'" )

        .dd {{searchInfo.phonesss}}
        pager(v-bind:totalCount="600" v-bind:customizePageSize="20"  v-bind:reloadContent.sync="searchInfo.phonesss")
        .dds(@click="skd") 点击我弹窗
        drop

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
            fz(24px);$mar(l 15px no,r 15px no,t 15px no);order-radius 6px;/*no*/
        .divtext
            $wh(w 500px,h 200px); background rgba(12, 204, 91, 0.49);
.dd
    font-size 14px;/*no*/
.dds
    font-size 12px;/*no*/

</style>

