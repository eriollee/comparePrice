// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import VueLazyload from "vue-lazyload"
import '!style-loader!css-loader!less-loader!./theme/index.less'

Vue.config.productionTip = false

Vue.use(iView)

Vue.use(VueLazyload, {
  error: 'static/error.png',//这个是请求失败后显示的图片
  loading: 'static/loading.gif',//这个是加载的loading过渡效果
  try: 2 // 这个是加载图片数量
  })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
