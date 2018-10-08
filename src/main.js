import Vue from 'vue'
import App from './App.vue'

import './tools/libs';
// 引入自己封装的router
import router from './tools/router';
// 引入Vuex相关
import store from './tools/store';


Vue.config.productionTip = false

new Vue({
  // 选择器
  el: "#app",
  // 挂载到vue
  router,
  // 渲染 App组件
  render: h => h(App),
  // 挂载仓库
  store,
 
});