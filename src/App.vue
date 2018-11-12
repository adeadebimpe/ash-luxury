<template>
  <div id="app">
    <div class="container">
      <Header />
    <Items />
    <Footer />
    </div>
  </div>
</template>

<script>
//import stylesheets
import './scss/main.scss';
//import components
import Header from './components/Header.vue';
import Items from './components/Items.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {
    Header,
    Items,
    Footer,

  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">

</style>
