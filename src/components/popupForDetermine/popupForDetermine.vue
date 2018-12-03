<template>
    <div class="autu-pop-up-win" v-show="show">
        <div class="position-re">
            <div class="modification">
                <div v-if="options.title" class="title">{{options.title}}</div>
                <div v-if="options.content" class="content">{{options.content}}</div>
                <div class="bottom_box">
                    <div v-if="options.cancel" class="bottom cancel " @click="cancelBtn">{{options.cancel}}</div>
                    <div v-if="options.confirm" class="bottom sure" @click="successBtn">{{options.confirm}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="stylus">
    .autu-pop-up-win
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.25);
        z-index: 2;
        .position-re
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: Center;
        .modification
            display inline-block;
            background: #fff;
            max-width 800px
            min-width 400px
            .title
                font-size 14px;
                line-height: 38px;
                background: #2E323C;
                color: #fff;
                padding: 8px 20px;
                box-sizing: border-box;
                word-wrap: break-word;
            .content
                padding: 20px;
                flex: 1;
                width: 100%;
                color: #000;
                font-size: 14px;
                word-wrap: break-word;
            .bottom_box
                width: 100%;
                box-sizing border-box
                font-size: 14px;
                word-wrap: break-word
                display flex
                flex-direction row-reverse
                justify-content flex-start
                align-items center
                padding 20px
                .cancel
                    margin-right 25px
                    display inline-block
                    order 1
                .sure
                    display inline-block
                    order 0
                .bottom
                    padding 8px 10px
                    border-radius 4px
                    -moz-box-shadow 0px 2px 5px #C9C9C9
                    -webkit-box-shadow 0px 2px 5px #C9C9C9
                    box-shadow 0px 2px 5px #C9C9C9
                    cursor pointer
                    transition: all 0.8s;
                    -moz-transition: all 0.8s;
                    -webkit-transition: all 0.8s;
                    &:hover
                        -moz-box-shadow 0px 2px 5px #567049
                        -webkit-box-shadow 0px 2px 5px #567049
                        box-shadow 0px 2px 5px #567049
                        transition: all 0.8s;
                        -moz-transition: all 0.8s;
                        -webkit-transition: all 0.8s;
</style>

