<template>
    <div class="chartstabs">
      <el-tabs v-model="activeName" type="card"  >
        <el-tab-pane  label="产量" name="first"><outputcharts v-if="'first' === activeName" :outputchartcode = "outputchartcode"></outputcharts ></el-tab-pane>
        <el-tab-pane  label="库存" name="second"><inventorychart v-if="'second' === activeName" :inventorychartcode = "inventorychartcode"></inventorychart></el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
import outputcharts from '../../components/production/outputcharts.vue';
import inventorychart from '../../components/production/inventorychart.vue';
import { Tab, Tabs } from 'vant';
 var echarts = require('echarts');
 
export default {
  name: 'outputtab',
  props: {
    outputcode: String,
  },
   data() {
        return {
            //默认第一个选项卡
            activeName: "first",
            outputchartcode:String,
            inventorychartcode:String
        }
    },
  created(){
    this.outputchartcode = this.outputcode
    this.inventorychartcode = this.outputcode
  },
  components:{
        outputcharts:outputcharts,
        inventorychart:inventorychart
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chartstabs .el-tabs__nav {
    white-space: nowrap;
    -webkit-transition: -webkit-transform .3s;
    transition: -webkit-transform .3s;
    transition: transform .3s;
    transition: transform .3s,-webkit-transform .3s;
    float: right !important;
    z-index: 2;
    display: block
}

</style>
