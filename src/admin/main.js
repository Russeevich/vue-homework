import Vue from 'vue';
import App from './App.vue'
import { store } from './store'
import router from './router'
import 'babel-polyfill'

new Vue({
    el: "#app-root",
    router,
    store,
    render: h => h(App)
});