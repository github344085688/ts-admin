<template lang="pug">
    .drag-content
        .project-content
            .select-item(v-on:dragstart.stop ='drag($event)' draggable='true' v-for='pjdt in projectdatas'  ) {{pjdt.name}}
        .people-content
            .drag-div( v-on:drop.stop.prevent = 'drop($event)' v-on:dragover.stop.prevent ='allowDrop($event)' v-for='(ppindex,ppdt) in peopledata' )
                .select-project-item
                    .drag-people-label {{ppindex.name}}

        .drag-content
        .project-content
            .select-item(v-on:dragstart.stop ='onDrag($event)' draggable='true' v-for='pjdt in projectdatas'  ) {{pjdt.name}}
        .people-content
            .drag-div( v-on:drop.stop.prevent = 'onDrop($event)' v-on:dragover.stop.prevent ='onAllowDrop($event)' )
                .select-project-item
                    .drag-people-label(v-for='dropesList in dropesLists' ) {{dropesList.name}}
</template>

<style lang="stylus">
    .drag-content
        font-size 12px
    .select-item {
        background-color: #5bc0de;
        display: inline-block;
        text-align: center;
        border-radius: 3px;
        margin-right: 10px;
        cursor:pointer;
        padding: 6px 20px;
        color: #fff;
    }
    .cursored{
        cursor: default;
    }
    .project-content,.people-content {
        margin: 30px 50px;
    }
    .people-content {
        margin-top: 30px;
    }
    .drag-div {
        border: 1px solid #5bc0de;
        padding:10px;
        margin-bottom: 10px;
        width: 800px;
        cursor: pointer;
    }
    .select-project-item {
        display: inline-block;
        text-align: center;
        border-radius: 3px;
    }
    .drag-people-label{
        display inline-block;
        margin 5px;
        padding:10px;
    }

</style>