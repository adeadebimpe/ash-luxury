import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Cart from './components/Cart.vue'
import Items from './components/Items.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Items },
  { path: '/cart', component: Cart },
 
]

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',

  render: h => h(App),
  router,
})
