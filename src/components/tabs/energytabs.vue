<template>
    <div class="">
    <el-tabs v-model="activeName" type="card" >
        <el-tab-pane  label="气耗" name="first"><scfm v-if="'first' === activeName" :scfmchartcode="scfmchartcode"></scfm></el-tab-pane>
        <el-tab-pane  label="水耗" name="second"><water v-if="'second' === activeName" :waterchartcode="waterchartcode"></water></el-tab-pane>
        <el-tab-pane  label="电耗" name="three"><power v-if="'three' === activeName" :powerchartcode="powerchartcode"></power></el-tab-pane>
  </el-tabs>
    </div>
</template>

<script>
import scfm from '../../components/enery/scfm.vue';
import water from '../../components/enery/water.vue';
import power from '../../components/enery/power.vue';
 var echarts = require('echarts');
 
export default {
   
  name: 'outputtab',
  props: { 
    enerycode:String
  },
   data() {
        return {
            //默认第一个选项卡
            activeName: "first",
            powerchartcode:String,
            waterchartcode:String,
            scfmchartcode:String
        }
    },
created(){
    this.powerchartcode = this.enerycode;
    this.waterchartcode = this.enerycode;
    this.scfmchartcode = this.enerycode;
  },
  components:{
        scfm:scfm,
        water:water,
        power:power
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
