<template>
    <div>
        <big-numbers :code="moncode"></big-numbers>
        <output-tab :outputcode="moncode"></output-tab>
        <energy-tabs :enerycode="moncode"></energy-tabs>
        <sale-chart :salescode="moncode"></sale-chart>
        <quality-chart :qualitycode="moncode"></quality-chart>
    </div>
</template>

<script>
import bignumbers from '../../components/bignumbers/bignumbers.vue';
import outputtab from '../../components/tabs/outputtab.vue'
import energytabs from '../../components/tabs/energytabs.vue'
import salechart from '../../components/sales/saleschart.vue'
import qualitychart from '../../components/quality/quality.vue'
export default {
  name: 'month',
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
      moncode:''
    }
  },
  created(){
    this.moncode = "month"
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
