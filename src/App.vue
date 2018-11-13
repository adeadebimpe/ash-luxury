<template>
  <div id="app">
    
    <div class="container">
      
      <router-view></router-view>
    
    </div>
  </div>
</template>

<script>
//import stylesheets
import './scss/main.scss';
//import components

export default {
  name: 'app',
  data () {
   return {
        
      };
  }
}
</script>

<style lang="scss">

</style>
