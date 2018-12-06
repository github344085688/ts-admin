<template lang="pug">
    .loding-bader
        header
            img.logoBoxImg(src="../../assets/img/logo.png")

        .bg-Line

        .longUpBox
            .title-box
                .items-box
                    .lin-middle
                    .lin-middle
                .items-box {{$t('message.lodings.austTiles')}}
                .items-box
                    .lin-middle
                    .lin-middle

            .login-conent
                .icon-box
                    img.user-header(src="../../assets/img/user-header.png")
                    select(v-model="lodingModule.selectValue" )
                         option(value="zh") zh
                         option(value="en") en
                .input-box
                    .title {{$t('message.lodings.alreadyMember')}}
                    .Login_Here {{$t('message.lodings.loginHere')}}
                    .line
                    .Login_Here {{searchInfo.phone}}
                    text-file.input(
                    :isFocus="true"
                    v-bind:isUnderLine="true"
                    v-bind:underLinkCocor="'#ccc'"
                    v-bind:focusLinkClocor="'red'"
                    v-bind:input.sync="searchInfo.phone"
                    v-bind:name="'phone'"
                    v-bind:PopPlaceholder= "$t('message.lodings.phone') "
                    )
                    .Login_Here {{searchInfo.email}}
                    text-file.input(
                    :isFocus="true"
                    v-bind:isUnderLine="true"
                    v-bind:underLinkCocor="'#ccc'"
                    v-bind:focusLinkClocor="'red'"
                    v-bind:input.sync="searchInfo.email"
                    v-bind:name="'email'"
                    v-bind:PopPlaceholder= "$t('message.lodings.email')"
                    )
                    <!--.Login_Here {{searchInfo.ew}}-->
                    <!--text-file.input(-->
                    <!--v-bind:input.sync="searchInfo.ew"-->
                    <!--v-bind:PopPlaceholder= "'we'"-->
                    <!--)-->
                    .button_box
                        .Remember_Me
                                input(type="checkbox" id="rememberMe" name="rememberMe" checked  )
                                label(for="rememberMe")
                                span {{$t('message.lodings.rememberMe')}}

                        button.bottons {{$t('message.lodings.reset')}}
                        button.bottons( v-bind:class="{'Submit':isSubmit}" v-bind:disabled="!isSubmit" v-on:click="Submit" ) {{$t('message.lodings.submit')}}
                    .line


</template>

<style lang="stylus">
@import "../../assets/stylus/default"
.loding-bader
    $wh(w 100%,h 100%);display flex;flex-direction column

    header
        $wh(w 100%,h 175px); background url("../../assets/img/lodUpHeaderBg.jpg")no-repeat center center; background-size 1920px 175px;position relative

        .logoBoxImg
            $wh(w 268px,h 175px);$pAbM(p,t 0,l 25px,r 0,b 0,m auto);

    .bg-Line
        $wh(w 100%,h 10px);background url("../../assets/img/login-line.jpg")repeat-x

    .longUpBox
        $wh(w 100%,'');flex 1; background #e7e8e2; background-image  url("../../assets/img/login-line.jpg");background-repeat repeat-x; background-position left bottom

        .title-box
            $wh(w 100%,h 30px);$mar(t 35px,''); $dflex(fd row,ai baseline,ac center);

            .items-box
                $wh(h 100%,'');flex 1;$pad(t 10px,'');

                .lin-middle
                    $mar(t 4px,''); height 2px;background #fcf7f5;border-top 2px solid #e7e0cf

                &:nth-of-type(2)
                    $wh(w 450px,'');$pad(l 5px no,''); text-align center;font-size 40px;line-height 30px;letter-spacing 15px;color #d36f39; font "Tahoma";font-weight bold;text-shadow 0px 2px 0px rgba(100,100,100,0.8)

        .login-conent
            $wh(w 600px,h 240px);$mar(t 60px,r auto , b 0, l auto); $dflex(fd row,'');

            .icon-box
                $wh(w 120px,'');margin 0;padding 0;align-self baseline; line-height 0

                .user-header
                    $wh(w 100px,h 50px);$mar(t 35px,'');

                select
                    min-width 100px; color #fff; padding: 0 33%; cursor pointer; height 30px;/*no*/ text-align center;  outline none; margin-top -1px/*no*/; display block;border  none; background rgba(133, 209, 243,1); appearance: none;

                    option
                        text-align center;padding 5px auto;/*no*/ height 40px;/*no*/

            .input-box
                flex 1

                .title
                    display block;font-size 25px;color rgb(141, 141, 141);text-align left;text-shadow 0px 2px 0px rgba(255,255,255,0.8)

                .Login_Here
                    display block;font-size: 53px;line-height 1.8; color: rgb(124, 124, 124);text-align: left; text-shadow 0px 2px 0px rgba(255,255,255,0.8)

                .line
                    $wh(h 2px no,''); background #ccc; margin 0; display block;border-bottom solid 1px #fff

                .input
                   height: 60px; margin-top 30px;

                .button_box
                    $wh(w 520px,''); $dflex(fd row,js space-between,fw flex-wrap ); $mar(t 25px, b 25px);

                    .Remember_Me
                        flex 15%;font-size 0;align-self center;position: relative; line-height: 20px;

                        span
                            font-size 20px;width 150px;color #7c7c7c;display inline-block;text-shadow 0px 2px 0px rgba(255,255,255,0.8); overflow: hidden; white-space: nowrap; text-overflow: ellipsis;

                        input[type=checkbox]
                            $wh(w 20px,h 20px); opacity: 0;

                        label
                            $pAbM(p,m,l 5px, t 5px); $wh(w 20px,h 20px); background-color: rgb(232, 233, 233);  box-shadow: inset 0.5px 0.866px 0.85px 0.15px rgba(0, 0, 0, 0.25); cursor pointer;

                        input:checked+label
                            background-color: #fe6d32

                        input:checked+label::after
                            $pAbM(p,m,l 6px, t 2px);content: "";$wh(w 5px,h 10px); border: 2px solid #fff; border-top: none; border-left: none;  transform: rotate(45deg)

                    .bottons
                        flex 1;fz(24px); cursor pointer;margin 0 15px;color #7c7c7c;text-align center; line-height 50px;border-radius: 4px; background-image: linear-gradient(180deg, rgba(202, 208, 209, 0.83)  50%, rgba(202, 208, 209, 0.83) 100%); box-shadow: 0px 2px 0px 0px rgba(162, 162, 162, 0.67),inset 0px 1px 0px 0px rgba(232, 232, 232, 0); text-shadow 0px 2px 0px rgba(255,255,255,0.8);border none;outline none

                    .Submit
                       color #fff;background-image: linear-gradient(180deg, rgb(255, 100, 43) 50%, #f1490d 100%); box-shadow: 0px 2px 0px 0px rgba(162, 162, 162, 0.87),inset 0px 1px 0px 0px rgba(232, 232, 232, 0); text-shadow 0px 2px 0px rgba(73,73,73,0.8)

        .inputBoxs
            $wh(w 400px,h 350px);$pAbM(p,m,l 0, r 0,b 0, t 0);

            .input
               $wh(w 100%,h 45px); $mar(t 40px, '');border #ff504a solid 1px;border-radius 60px;

</style>

