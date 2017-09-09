// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'
import firebase from 'firebase'

Vue.use(VueFire)
Vue.config.productionTip = false

var config = {
  apiKey: 'AIzaSyDIQuNU-VJBsIo58R3yvvFeCJZ9f4jwGHk',
  authDomain: 'kanban-ab936.firebaseapp.com',
  databaseURL: 'https://kanban-ab936.firebaseio.com',
  projectId: 'kanban-ab936',
  storageBucket: '',
  messagingSenderId: '330180731111'
}

firebase.initializeApp(config)
Vue.prototype.$db = firebase.database()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
