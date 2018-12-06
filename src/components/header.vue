<template lang="pug">
  header
    .city(@click="load") {{ $t("message.lodings.enterprise_edition") }}
    .user
      input(type="text" name="phone"  v-validate="'required|phone'" class="form-control" placeholder="密码")
      span(v-show="errors.has('phone')" class="help is-danger") {{ errors.first('phone') }}
    img(src="../assets/img/ee58716805cacb11b0f24b9f768364fb.jpg" style="width:auto; height:auto;")
    img(src="../assets/img/87d159bf5e8ca09d2df1000014cf7a81.jpg" height="830" width="650px")
    img(src="../assets/img/4cb4ccd81090f1a03c77cc7b18d89841.jpg" class="bigimg" )
</template>

<script lang="ts">
  import {Component} from 'vue-property-decorator'
  import axVue from '../httpAnency'
  import { State, Action, Getter } from "vuex-class"
  import VeeValidate, {Validator}from 'vee-validate'
//  import dbs  from '../store/indexDb'
//  import dbs  from '../store/indexDb'
  @Component
  export default class header extends axVue {
    @State accessToken: string;
    @State AT: string;
    dash: object = {
      dash: 3
    }
    mounted() {
      this.$store.dispatch('setUserData','ddds')
          console.log(this.AT)
        setTimeout(()=>{
          console.log(this.AT)
        },100)
    //
      this.apis$.post('/dashclear.php', this.dash).subscribe(
        res => {
          console.log(res)
        },
        err => {
        },
        () => {
        }
      )
    }
    load() {
      return this.$store.getters.getAccessToken
    }
  }
</script>

<style lang="stylus" scoped>
    .city
        width 500px
        height 200px
        display: flex
     .bigimg
         /*no*/
         width 500px;
         height 200px
  .is-danger{color:red}
 /* header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    height: 50px;
    line-height: 50px;
    background-color: #f63;
    color: #ffffff;
    text-align: center;
    z-index: 9;

    .city {
      position: relative;
      width: 20%;
    }

    .search-wrap {
      position: absolute;
      width: 60%;
      left: 0;
      right: 0;
      top: 10px;
      margin: auto;
      height: 30px;
      line-height: 30px;
      color: #b8b8b8;
      border-radius: 25px;
      background-color: #FFF;
      transition: width 0.1s ease;

      span {
        display: inline-block;
        position: absolute;
        width: 120px;
        left: 50%;
        transform: translateX(-50%);
        transition: all 0.2s ease;
      }

      input {
        position: absolute;
        left: 15px;
        padding: 0;
        margin: 0;
        width: 90%;
        color: #999;
        background: none;
        border: none;
        height: 30px;
        outline: none;
        caret-color: #f63;
      }
    }

    .user {
      position: absolute;
      right: 0;
      width: 20%;
      z-index: 99;
      height: 50px;

      .icon {
        background-repeat: no-repeat;
        background-position: left -67px;
        background-size: 250px;
        width: 28px;
        height: 100%;
        margin: 0 auto;
      }
    }
  }*/
</style>

