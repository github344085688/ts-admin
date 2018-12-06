<template lang="pug">
    .div
        text-file
        <!--.inputBox-->
        <!--input(type="text" name="lname")-->
        <!--input(@click="onAdd($event)" type="text" value="sss")-->
        <!--input(type="text" name="inputa" value="sss")-->
        <!--input(name="clsick" type="button" value="sss" )-->
        <!--input(type="button" value="提交")-->


</template>

<style lang="stylus">
    @import "../../assets/stylus/default"
    input[type=text]
        border-radius 12px

    .div
        pad()
        font-size $font-size;/*no*/
        height 200px;/*no*/
        width w=1272px
        background #ccc

        >.inputBox
            width (w/2)
            height (@height/2);/*no*/
            background #cccc82
            display flex
            pad(margin)

            >input[type=text]
                @extend input[type=text]

            >input[type=button]
                width (@width/2)
                height (@height/2)
                background #a378cc
                border none
                @extend input[type=text]
                opacity 0.5





</style>

