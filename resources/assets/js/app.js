
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import vueConfig from 'vue-config' 
import config from './app_conf.js';
Vue.use(vueConfig, config)

import App from './components/App.vue';
import store from './store/index';


new Vue({
  	store,
	el: '#app',
  	render: h => h(App)

});
