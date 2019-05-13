<template>
    <div class="bignumbers">
        <div class="output"><span>{{output}}</span><span> 产量 (平方米)</span></div>
        <div class="inventory"><span>{{inventory}}</span><span>库存量 (平方米)</span></div>
        <div class="sales"><span>{{sales}}</span><span>销售量 (平方米)</span></div>
    </div>
</template>

<script>
export default {
  name: 'bignumbers',
  props: {
    code: String, //标志符
  },
  data(){
      return {
        output:Number, //产量
        inventory:Number, //库存
        sales:Number,//销售量
      }
  },
  created(){
      if(this.code === "yesterday"){
          this.output = 2789;
          this.inventory = 3131;
          this.sales = 2542
       }

       if(this.code === "sevendays"){
          this.output = 3279;
          this.inventory = 5555;
          this.sales = 5902
       }

        if(this.code === "month"){
          this.output = 32790;
          this.inventory = 8000;
          this.sales = 59020
       }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .bignumbers{
        display: flex;
        flex-direction:row;
        justify-content:space-around;
        background-color: #F5F5F5;
        border-top:20px solid #F5F5F5;
        border-bottom:20px solid #F5F5F5;
        text-align: center
    }
    .bignumbers span:nth-child(1){
        display: inline-block;
        font-size: 18px;
        color: #222222;
        margin-top: 7px;
        font-weight:500
    }
    .bignumbers span:nth-child(2){
        display: inline-block;
        font-size: 12px;
        color: #ABABAB;
        margin-top: 6px
    }
   
    .output{
        border: 1px solid #F5F5F5;
        width: 110px;
        height: 60px;
        background-color: #fff
    }
    
    .output span:nth-child(2):before{
        content:'\2022';  
		color:#58A3F7;
        position:relative;
        left:-2px;
        bottom:0px;
        font-size: 15px;
    }

    .inventory{
        border: 1px solid #F5F5F5;
        width: 110px;
        height: 60px;
        background-color: #fff
    }
    .inventory span:nth-child(2):before{
        content:'\2022';  
		color:#FEC03D;
        position:relative;
        left:-2px;
        bottom:0px;
        font-size: 15px;
    
    }
    .sales{
        border: 1px solid #F5F5F5;
        width: 110px;
        height: 60px;
        background-color: #fff
    }
    .sales span:nth-child(2):before{
        content:'\2022';  
		color:#FF6C3E;
        position:relative;
        left:-2px;
        bottom:0px;
        font-size: 15px;
    }
</style>
