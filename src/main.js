// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// Vue JS Modules
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
Vue.use(Vuetify);
Vue.use(VueRouter);

// Vue JS Components
import App from './App.vue';
import home from './home.vue';

// CSS
import 'vuetify/dist/vuetify.min.css';
import './css/hack.css';
import './css/loader.css';
import './css/main.css';

// Config (true = Development mode, false = Production mode)
Vue.config.productionTip = false;

// Router
const router = new VueRouter({
	 mode	: 'history'
	,base	: '/'
	,routes	: [
		{
			 path		: '/'
			,name		: 'home'
			,component	: home
		}
	]
	,scrollBehavior : function( to, from, savedPosition ){
		return { x:0, y:0 }
	}
});

/* eslint-disable no-new */
// Main
const app = new Vue({
	 el			: '#app'
	,router
	,template	: '<App/>'
	,components	: { App }
})
