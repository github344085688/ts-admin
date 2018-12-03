<template>
    <div class='drag-content'>
        <div class='project-content'>
            <div class='select-item' draggable='true' @dragstart='drag($event)' v-for='pjdt in projectdatas'>{{pjdt.name}}</div>
        </div>
        <div class='people-content'>
            <div class='drag-div' v-for='(ppindex,ppdt) in peopledata' @drop='drop($event)' @dragover='allowDrop($event)'>
                <div class='select-project-item'>
                    <label class='drag-people-label'>{{ppindex.name}}:</label>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="stylus">
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
        margin-bottom:0;
        padding-right:10px;
    }

</style>