<template>
  <div>
      <div class="salechart" id="salechart">
         
      </div>
  </div>
    
</template>

<script>
var echarts = require('echarts');
export default {
  name: 'power',
  props: {
    salescode:String
  },
  created(){
          this.xData = ['1',2,3,4,5,6,7,8,9,10,11,12];
          this.seriesData = [52, 204, 36, 110, 10, 28,20,34,54,132,41,54];
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
      let me = this;
        let myChart = echarts.init(document.getElementById('salechart'))
        let options = {
            title: { text: '单位:平方米' ,padding:[10,10,5,10] ,
            textStyle:{
            color :'#333333',
            fontSize :'12'
        }
           },
            tooltip: {},
            legend: {
              data:['销量统计'],
              textStyle:{
                            fontSize: 16,//字体大小
                            color: '#303133'//字体颜色
                        },

            },
            xAxis: {
                data: me.xData,
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
              axisTick:{
                  lineStyle:{"type":'dotted' }  //y轴坐标刻度颜色
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
                name: '销量统计',
                type: 'line',
                data: me.seriesData,
                label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            symbol: 'circle',
            symbolSize: 8,
            lineStyle:{
              normal:{
                width:3.5
              }
            },
                areaStyle: {},
                itemStyle: {
                normal: {   
           color: "rgba(20,144,255,0.6)",//折线点的颜色
           lineStyle: {
           color: "#1490ff"
          }
        }
                }
            }],
      
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
  .salechart{
    height:300px;
    width:100%;
  }
</style>
