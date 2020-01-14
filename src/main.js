import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
    apiKey: "AIzaSyB0oAtfelLR_eqjF4xcS0lqNZGzNRSMc6A",
    authDomain: "vue-calendar-7f3cd.firebaseapp.com",
    databaseURL: "https://vue-calendar-7f3cd.firebaseio.com",
    projectId: "vue-calendar-7f3cd",
    storageBucket: "vue-calendar-7f3cd.appspot.com",
    messagingSenderId: "1024853348374",
    appId: "1:1024853348374:web:9d980cf0c01d1d26926537"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
