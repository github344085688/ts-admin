<template lang="pug">
    .sk-three-bounce
        .sk-bounce-1(:style="{width:wh,height:wh}")
        .sk-bounce-2(:style="{width:wh,height:wh}")
        .sk-bounce-3(:style="{width:wh,height:wh}")
    </div>
</template>
<style lang="stylus">
    .sk-three-bounce
        display inline-block; width 8em; margin auto; text-align center;
        &>div
           background-color #337ab7; border-radius 100%; display inline-block; -webkit-animation sk-three-bounce 1.4s ease-in-out 0s infinite both; animation sk-three-bounce 1.4s ease-in-out 0s infinite both; margin-left 5px;
        .sk-bounce-1
            -webkit-animation-delay -0.32s; animation-delay -0.32s;
        .sk-bounce-2
            -webkit-animation-delay -0.16s; animation-delay -0.16s;

    @-webkit-keyframes sk-three-bounce {
        0%, 80%, 100% {
            -webkit-transform: scale(0);
            transform: scale(0);
        }
        40% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }

    @keyframes sk-three-bounce {
        0%, 80%, 100% {
            -webkit-transform: scale(0);
            transform: scale(0);
        }
        40% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }
</style>

