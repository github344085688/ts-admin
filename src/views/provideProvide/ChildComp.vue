<template>
    <div>
        {{users}}
    </div>
</template>

<script lang="ts">

    import Vue from 'vue'
    import {Component, Inject} from 'vue-property-decorator'
    @Component({})
    export default class Child extends Vue {
        message: string = "Hello";

        @Inject('users') users:any;
    }
</script>