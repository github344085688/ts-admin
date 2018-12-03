<template lang="pug">
    div
        <!--ChildComp(:msg="'What a good day!'")-->
        input-comp(
        class="input-comps"
        v-bind:label="'What a good day'"
        v-bind:propsDatas="propsDatases"
        v-model="inputValue"
    )
        div {{inputValue}}
        fills-input(
        class="input-comps"
        v-bind:label="'What a good day'"
        v-bind:propsDatas="propsDatases"
        v-model="fillsinputValue"
        v-bind:fill="'DN-'"
        v-bind:isArray="true"
        )
        div {{fillsinputValue}}

</template>

<style lang="stylus">
    @import "../../assets/stylus/default"
    .input-comps
        width 60%
        margin auto

</style>