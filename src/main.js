import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.min.css';

import "./theme/theme/index.css"
import  "./assets/style/global.css"
import {getRequest, postRequest} from "@/api/api";
Vue.config.productionTip = false
Vue.use(ElementUI);

// init some global param
// 事件总线
Vue.prototype.$EventBus = new Vue();
Vue.prototype.postRequest=postRequest;
Vue.prototype.getRequest=getRequest;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
