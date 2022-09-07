import Vue from 'vue'
import App from './App.vue'
import router from "./router.js"

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Vuetify from 'vuetify'//追加
import 'vuetify/dist/vuetify.min.css'//追加
import '@mdi/font/css/materialdesignicons.css'

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAnAO2Lk2tCZ3Od0S_4-r5lc7nE-nVWWgs",
  authDomain: "conepro-dcc49.firebaseapp.com",
  projectId: "conepro-dcc49",
  storageBucket: "conepro-dcc49.appspot.com",
  messagingSenderId: "967764188857",
  appId: "1:967764188857:web:e22dcbbdb55330b129c568"
};

const app = firebase.initializeApp(firebaseConfig);
export default app

Vue.config.productionTip = false
Vue.use(Vuetify);
Vue.use(BootstrapVue)

new Vue({
    router,
    vuetify: new Vuetify(),
    render: h => h(App)
  }).$mount('#app')