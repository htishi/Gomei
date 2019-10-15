import Vue from 'vue'
import App from './App.vue'
//路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import router from './assets/js/router'
//axsio
import axios from 'axios'
Vue.prototype.$http=axios;

//mint-ui
//全局引入
import Mint from 'mint-ui'
Vue.use (Mint);
import 'mint-ui/lib/style.css'
import 'mint-ui/lib/index'

//css样式
import './assets/css/basa.css'

//px转化
import 'lib-flexible'
//vuex
import store from "./store/store";

//swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper);
import "../node_modules/swiper/css/swiper.css"

//tu
import "./assets/css/iconfont.css"

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});
