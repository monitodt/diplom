import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Vuetify from 'vuetify'
import vuetify from './plugins/vuetify'
import WebFont from 'webfontloader'
import firebase from 'firebase'
import firebaseConfig from './config/firebase'


Vue.use(Vuetify)

Vue.config.productionTip = false

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

Vue.$db = db

WebFont.load({ google: { families: ["Roboto:100,300,400,500,700,900"] } });

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    let vm = this
    firebase.auth().onAuthStateChanged(function(user) {
      vm.$store.dispatch("STATE_CHANGED", user)
    })
  }
}).$mount('#app')
