import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import VueResource from 'vue-resource'
import 'element-ui/lib/theme-default/index.css'
// import lvment from 'lvment'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueResource)
// Vue.use(lvment.Search)



new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
