// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VgtForm from './components/VgtForm';
// import App from './App'

Vue.component('vgt-form', VgtForm);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#vegatro',
  // components: { App },
  // template: '<App/>'
})