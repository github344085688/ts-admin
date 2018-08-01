<template lang="pug">
   .pager(v-show="totalCount")
        .paginate {{showingFrom }} to {{ showingTo }} of {{totalCount}} Results
        .paginate Show: {{customizePageSize}}
            select-filters.input-select( v-bind:selectData.sync="customizePageSize" v-bind:porpData="[totalCount]"  v-bind:porpChooseData="pageSizeOptions"  )
        .paginate
            ul
                li(@click="loadFirstPage")
                    span(class="icon-003")
                li(v-bind:class="{'prev disabled':pager.activedPage === 1}" v-on:click="loadPrevPage")
                    span(class="icon-004")
                li(v-for="page in pages" v-bind:key="page.number" v-bind:class="{'active':page.active}" v-on:click="loadPage(page.number)") {{page.number | filtersPage}}

                li(class="transforms" v-bind:class="{'next disabled':pager.activedPage == pager.totalPage}" v-on:click="loadNextPage")
                    span(class="icon-004")
                li(class="transforms" v-on:click="loadLastPage")
                    span(class="icon-003")
</template>
<style lang="stylus">
    @import "../../assets/stylus/default"
    .pager
        font-size 16px/*no*/
        width 100%
        letter-spacing 0.6px/*no*/
        text-align right
        margin 20px 0px /*no*/
        $dflex(fd row-reverse,fw wrap,jc flex-start,ai stretch ,ac flex-start)
        .paginate
            text-align center;
            padding 20px 0;/*no*/
            line-height inherit
            .input-select
                margin-left 15px

            &:nth-of-type(1)
                order 3
                line-height 38px;/*no*/
            &:nth-of-type(2)
                order 2
                padding 0 35px;
                $dflex(fd row,fw nowrap,jc flex-start,ai center ,ac center)

            &:nth-of-type(3)
                order 1
                min-width 350px;/*no*/
                ul
                    padding 0
                    margin  0
                    $dflex(fd row,fw nowrap,jc flex-start,ai center ,ac center)
                    li
                        list-style-type none
                        border 1px solid #ddd
                        padding 15px 0
                        border-radius 6px
                        flex 1
                        width 50px
                        margin 0 3px
                        cursor pointer
                        &:hover
                            background #f1f7f4
                    .transforms
                            transform:rotate(180deg);

</style>
