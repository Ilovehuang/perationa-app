<template>
  <div>
      <div class="outputcharts" id="outputcharts">
         
      </div>
  </div>
    
</template>

<script>
var echarts = require('echarts');
export default {
  name: 'outputcharts',
  props: {
    outputchartcode:String
  },
   data(){
      return {
        xData:Array,
        seriesData:Array
      }
  },
  created(){
    if(this.outputchartcode === "yesterday"){
          this.xData = ['1',2,3,4,5,6,7];
          this.seriesData = [52, 204, 36, 110, 10, 28,20];
       }

       if(this.outputchartcode === "sevendays"){
          this.xData = ['1',2,3,4,5,6,7];;
          this.seriesData = [88, 204, 360, 113, 100, 28,20];;
       }

        if(this.outputchartcode === "month"){
          this.xData = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16",17,18,19,20,21,22,23,24,25,26,27,28,29,30];
          this.seriesData = [52, 204, 36, 110, 10, 28,20,20,20,20,20,90,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
       }
  },
  mounted:function(){
    this.creatE();
  },
  methods: {
    creatE:function(){
        let myChart = echarts.init(document.getElementById('outputcharts'))
        let options = {
            title: { text: '单位:平方米' ,padding:[10,10,5,10] ,
            textStyle:{
            color :'#333333',
            fontSize :'12'
              }
          },
           tooltip: {
               trigger: 'item'
           },
           legend: {
              data:['产量统计'],
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
                name: '产量统计',
                type: 'line',
                data: this.seriesData,
                label: {
                normal: {
                    show: true,
                    position: [0, -20],
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
                color: "#1890FF",//折线点的颜色
                lineStyle: {
                 color: "#1890FF"
              }
        }
        
                }
            }]
        }
        if(this.outputchartcode === "month"){
          options.dataZoom = {
            realtime:true, //拖动滚动条时是否动态的更新图表数据
            height:25,//滚动条高度
            start:40,//滚动条开始位置（共100等份）
            end:65//结束位置（共100等份）
          }
        }
        // 绘制图表
        myChart.setOption(options);
        setTimeout(function (){
	        window.onresize = function () {
	    	    myChart.resize();
	        }
	      },200)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .outputcharts{
    height:300px;
    width:100%;
  }
</style>
