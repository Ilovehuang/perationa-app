import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import 'lib-flexible'
Vue.config.productionTip = false
import '../static/css/reset.css'
import 'font-awesome/css/font-awesome.css'
import echarts from 'echarts'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant);
Vue.use(ElementUI)
Vue.use(echarts)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
