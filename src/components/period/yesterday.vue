<template>
    <div>
        <big-numbers :code="yescode"></big-numbers>
        <output-tab :outputcode="yescode"></output-tab>
        <energy-tabs :enerycode="yescode"></energy-tabs>
        <sale-chart :salescode="yescode"></sale-chart>
        <quality-chart :qualitycode="yescode"></quality-chart>
    </div>
</template>

<script>
//  var Event = new Vue();
import bignumbers from '../../components/bignumbers/bignumbers.vue';
import outputtab from '../../components/tabs/outputtab.vue'
import energytabs from '../../components/tabs/energytabs.vue'
import salechart from '../../components/sales/saleschart.vue'
import qualitychart from '../../components/quality/quality.vue'
export default {
  name: 'yesterday',
  components: {
     'big-numbers': bignumbers,
     'output-tab':outputtab,
     'energy-tabs':energytabs,
     'sale-chart':salechart,
     'quality-chart':qualitychart
  },
  props: {
    msg: String
  },
  data(){
    return {
      yescode:''
    }
  },
  created(){
    this.yescode = "yesterday"
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
