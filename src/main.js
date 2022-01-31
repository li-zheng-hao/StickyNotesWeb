import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.min.css';

import "./theme/theme/index.css"
import  "./assets/style/global.css"
import animated from 'animate.css'
// 整屏滚动库
import 'mv-full-page/lib-dist/mv-full-page.css'
import MvFullPage from 'mv-full-page'

Vue.use(MvFullPage)

// axios封装
import {getRequest, postRequest} from "@/api/api";


Vue.config.productionTip = false
Vue.use(ElementUI);
// animate css动画库
Vue.use(animated)

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
