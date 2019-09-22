import Vue from 'vue';
import Router from 'vue-router';

import Home from './Home.vue';
import Packages from './components/Packages/Packages.vue';
import Customers from './components/Customers/Customers.vue';
import Support from './components/Support/Support.vue';
import StartHosting from './components/StartHosting/StartHosting.vue';
import Error404 from './Error404.vue';

Vue.use(Router);

export default new Router({
  routes: [
      { path: '/', name: 'home', component: Home },
      { path: '/packages', name: 'packages', component: Packages },
      { path: '/customers', name: 'customers', component: Customers },
      { path: '/support', name: 'support', component: Support },
      { path: '/start-hosting', name: 'start-hosting', component: StartHosting },
      { path: '*', name: 'error404', component: Error404 }
    //   { path: '*', name: 'catch', component: {template: '<h1>Page Not Found!</h1>'} }
  ],
  mode: 'history'
})