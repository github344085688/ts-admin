<template lang="pug">
  .headline-wrap ssssaas

</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";


@Component
export default class modules extends Vue {

}
</script>

<style lang="stylus" scoped>
.headline-wrap {
  display: flex;
  align-items: center;
  padding: 10px 0;
  height: 50px;
  border-top: 1px solid #ececec;
  border-bottom: 1px solid #ececec;

  .logo {
    height: 50px;
    width: 50px;
    background-image: url('//www.dpfile.com/app/app-m-module/static/a41a9b3b0c7b20af96d3cacbfd8692c5.png');
    background-position: -142px 8px;
    background-repeat: no-repeat;
    background-size: 186px;

    &:after {
      background-image: linear-gradient(90deg, #e1e1e1, #e1e1e1 50%, transparent 0);
      background-position: 100% 0;
      background-size: 1px 100%;
      background-repeat: no-repeat;
      content: '';
      display: block;
      height: 30px;
      margin-top: 10px;
    }
  }

  .headline {
    flex: 1;
    height: 50px;

    .article {
      display: flex;
      align-items: center;

      .title {
        font-weight: bold;
        width: 81%;
        padding: 0 10px;
        box-sizing: border-box;
      }

      .img-wrap {
        img {
          height: 45px;
          width: 45px;
        }
      }
    }
  }
}
</style>
