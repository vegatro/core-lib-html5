// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VgtForm from './components/VgtForm';
import VgtInput from './components/VgtInput';
import VgtButton from './components/VgtButton';
require('material-icons/iconfont/material-icons.css');
// import App from './App'

Vue.component('vgt-form', VgtForm);
Vue.component('vgt-input', VgtInput);
Vue.component('vgt-button', VgtButton);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#vegatro',
  // components: { App },
  // template: '<App/>'
})