import Vue from 'vue'
import 'normalize.css/normalize.css' // 样式重置
import ElementUI from 'element-ui'
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss' // 全局样式
import App from './App'
import store from './store'
import router from './router'
import '@/icons' // icon
import '@/permission' // 权限控制
import * as filter from '@/filters'
import { mockXHR } from '../mock'
mockXHR()
// if (process.env.NODE_ENV === 'production') {
// }
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$message.error = function(params) {
  Message.closeAll()
  Message.error(params)
}
Vue.prototype.$message.success = function(params) {
  Message.closeAll()
  Message.success(params)
}
// 注册全局过滤器
Object.keys(filter).forEach(key => {
  Vue.filter(key, filter[key])
})
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
