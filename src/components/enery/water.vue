<template>
  <div>
      <div class="waterchart" id="waterchart">
         
      </div>
  </div>
</template>

<script>
var echarts = require('echarts');
export default {
  name: 'water',
  props: {
    waterchartcode: String
  },
created(){
    if(this.waterchartcode === "yesterday"){
          this.xData = ['1',2,3,4,5,6,7];
          this.seriesData = [50, 20, 36, 11, 100, 20,2];
       }

       if(this.waterchartcode === "sevendays"){
          this.xData = ['1',2,3,4,5,6,7];;
          this.seriesData = [8, 20, 38, 113, 10, 28,20];;
       }

        if(this.waterchartcode === "month"){
          this.xData = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16",17,18,19,20,21,22,23,24,25,26,27,28,29,30];
          this.seriesData = [52, 204, 360, 110, 100, 28,20,70,20,20,20,90,130,140,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
       }

  },
   data(){
      return {
        xData:Array,
        seriesData:Array
      }
  },
  mounted:function(){
    this.creatE();
  },
  methods: {

    creatE:function(){
        let waterChart = echarts.init(document.getElementById('waterchart'))
        let options = {
            title: { text: '单位:吨' ,padding:[10,10,5,10] ,
            textStyle:{
            color :'#333333',
            fontSize :'12'
        }
           },
            tooltip: {},
            legend: {
              data:['水耗统计'],
              textStyle:{
                            fontSize: 16,//字体大小
                            color: '#303133'//字体颜色
                        },

            },
            xAxis: {
                data: this.xData,
                type: 'category',
                boundaryGap: false,
                "axisLabel":{
    	         	interval: 0
    	       },
             axisLine: { //设置轴线的配置
              lineStyle: { //轴线的线条颜色
               color: '#eaeaea',
             },
           },
           axisLabel: {  //设置刻度值
        textStyle: {
           color: '#333333',
        },
      }
            },
            yAxis: {
              type: 'value',
              "axisLine":{       //y轴
                "show":false
              },
              splitLine:{
                lineStyle: {
                type: 'dotted',
             // color: ['#aaa', 'red'],    //设置网格线的颜色，可单独设置
               color: '#f4f4f4',
                },
              }
            },
            series: [{
                name: '水耗统计',
                type: 'line',
                data: this.seriesData,
                label: {
                normal: {
                    show: true,
                    position: 'top'
                },
            },
            symbol: 'circle',
            symbolSize: 8,
            lineStyle:{
              normal:{
                width:3.5
              }
            },
            itemStyle: {
                normal: {
                color: "#4EAAFF",//折线点的颜色
                lineStyle: {
                 color: "#4EAAFF"
              }
        }
        
                }
            }]
        }
        if(this.waterchartcode === "month"){
          options.dataZoom = {
          realtime:true, //拖动滚动条时是否动态的更新图表数据
          height:25,//滚动条高度
          start:40,//滚动条开始位置（共100等份）
          end:65//结束位置（共100等份）
          }
        }
        // 绘制图表
        waterChart.setOption(options);
        setTimeout(function (){
	        window.onresize = function () {
	    	    waterChart.resize();
	        }
	      },200)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .waterchart{
    height:300px;
    width:100%;
  }
</style>
