// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import {VgtNetwork} from './lib/VgtNetwork';

import Vue from 'vue';
import VgtForm from './components/VgtForm';
import VgtInput from './components/VgtInput';
import VgtButton from './components/VgtButton';
import VgtLink from './components/VgtLink';
import VgtList from './components/VgtList';
import VgtListItem from './components/VgtListItem';
import VgtCard from './components/VgtCard';
import VgtDrawer from './components/VgtDrawer';
import VgtDrawerItem from './components/VgtDrawerItem';
import VgtLoading from './components/VgtLoading';
require('material-icons/iconfont/material-icons.css');

Vue.component('vgt-form', VgtForm);
Vue.component('vgt-input', VgtInput);
Vue.component('vgt-button', VgtButton);
Vue.component('vgt-link', VgtLink);
Vue.component('vgt-list', VgtList);
Vue.component('vgt-list-item', VgtListItem);
Vue.component('vgt-card', VgtCard);
Vue.component('vgt-drawer', VgtDrawer);
Vue.component('vgt-drawer-item', VgtDrawerItem);
Vue.component('vgt-loading', VgtLoading);

Vue.config.productionTip = false;

const Vegatro = {
    Network: VgtNetwork
};

export {Vegatro};

window.Vegatro = Vegatro;

window.initializeVgtApp = function(){
    new Vue({
        el: '#vegatro',
        // components: { App },
        // template: '<App/>'
    });
};

if(process.env.NODE_ENV === 'development'){
    initializeVgtApp();
}

(function(history){
    var pushState = history.pushState;
    history.pushState = function(state) {
        if (typeof history.onpushstate == "function") {
            history.onpushstate({state: state});
        }

        return pushState.apply(history, arguments);
    }
})(window.history);

window.onpopstate = history.onpushstate = function(e) {
    console.log('push', e);

    new VgtNetwork().loadPartial(e.state.url, e.state.target, e.state.container, e.state.callback);
};