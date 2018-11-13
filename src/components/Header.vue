<template>

  <div class="header">
    <nav id="top-navigation" class="well well-sm flex flex-row align-center">
      <div class="cart-icon">
        <router-link to="/cart"><img src="../assets/bag.svg" alt="Cart Bag" width="100%" /><span class="cart-item">3</span></router-link>
       
      </div>
    </nav>
    <div class="header__text">
      <h3 class="header__title">Ash Luxury</h3>
      <p class="header__sub-title">Fashion & Lifestyle 📧 admin@ashluxury.com 📲 </p>
      <p class="header__sub-title">whatsapp: +234 8169761216 🌍 worldwide shipping </p>
      <p class="header__sub-title">📍22B Admiralty Way 🕙HQ opens 10am - 8pm (mon-sat)</p>
    </div>
   
  </div>

</template>

<script>
import Cart from "./Cart.vue";

export default {
  components: {
    Cart
  },
  data() {
    return {
      isShowingCart: false,
    };
  }
};
</script>

<style lang="scss">
.header {
  margin: 100px 0px;
}
.cart-icon{
  display: flex;
  justify-content: flex-end;
  a{
    position: relative;
    img{
     width: 100%;
    }
  }
  span{
    background-color: #f5a623;
    padding: 5px 10px;
    border-radius: 100%;
    color: #000;
    position: absolute;
    top: -20px;
    left: 20px;

  }
}

</style>
