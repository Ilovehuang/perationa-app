<template>
    <div>
        <big-numbers :code="sevcode"></big-numbers>
        <output-tab :outputcode="sevcode"></output-tab>
        <energy-tabs :enerycode="sevcode"></energy-tabs>
        <sale-chart :salescode="sevcode"></sale-chart>
        <quality-chart :qualitycode="sevcode"></quality-chart>
    </div>
</template>

<script>
import bignumbers from '../../components/bignumbers/bignumbers.vue';
import outputtab from '../../components/tabs/outputtab.vue'
import energytabs from '../../components/tabs/energytabs.vue'
import salechart from '../../components/sales/saleschart.vue'
import qualitychart from '../../components/quality/quality.vue'

export default {
  name: 'sevendays',
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
      sevcode:''
    }
  },
  created(){
    this.sevcode = "sevendays"
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
