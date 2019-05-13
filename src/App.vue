<template>
    <div>
    <v-header></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to='yesterday'>昨天</router-link>
      </div>
      <div class="tab-item">
        <router-link to='/sevendays'>近七天</router-link>
      </div>
      <div class="tab-item">
        <router-link to= '/month'>截止当月</router-link>
      </div>
    </div>
      <router-view></router-view>
  </div>
</template>

<script>
import header from './components/header/PerationaHeader.vue';
import { Tab, Tabs } from 'vant';
export default {
  name: 'app',
  components: {
     'v-header': header
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    .tab-item
      flex: 1
      text-align: center
      & > a
        display: block
        font-size: 14px
        color: #222222
        font-weight:1000
        &.active
          border-bottom:1px solid #0079FE
          color: #0079FE

</style>
