import Vue from 'vue'
import App from './App.vue'
import "amfe-flexible"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/iconfont/iconfont.js'
import './assets/iconfont/iconfont.css'

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
}).$mount('#app')
