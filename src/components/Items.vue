<template>
  <div class="wrapper">
  <Header />
    <div id="products" class="product">
      <div v-for="product in products" :key="product.id" :class="['product__item' + product.id, 'product__item' ]">
        <img v-bind:src="product.avatar" class="product_image" width="100%" alt="Product Image" />
        <div class="product__item--text">
          <h5>{{product.price | currency }}</h5>
          <p>{{product.description}}</p>
          <button class="btn btn-white" @click="addProductToCart(product)"> Buy now</button>
        </div>

      </div>
    </div>
  <Footer />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
  components: {
    Header,
    Footer
  },
  props: ["isShowingCart"],
  data() {
    return {
      cart: {
        items: []
      },
      products: [
        {
          id: 1,
          avatar: "../src/assets/tshirt.jpg",
          description: "Available in size 12, 13, 14",
          price: 120000,
          inStock: 50
        },
        {
          id: 2,
          avatar: "../src/assets/tshirt.jpg",
          description: "Available in size 12, 13, 14",
          price: 120000,
          inStock: 50
        },
        {
          id: 3,
          avatar: "../src/assets/tshirt.jpg",
          description: "Available in size 12, 13, 14",
          price: 120000,
          inStock: 50
        },

        {
          id: 4,
          avatar: "../src/assets/tshirt.jpg",
          description: "Available in size 12, 13, 14",
          price: 120000,
          inStock: 50
        },
        {
          id: 5,
          avatar: "../src/assets/chucks.png",
          description: "Available in size 12, 13, 14",
          price: 120000,
          inStock: 50
        },
        {
          id: 6,
          avatar: "../src/assets/chucks.png",
          description: "Available in size 12, 13, 14",
          price: 120000,
          inStock: 50
        },
        {
          id: 7,
          avatar: "../src/assets/tshirt.jpg",
          description: "Available in size 12, 13, 14",
          price: 120000,
          inStock: 50
        },
        {
          id: 8,
          avatar: "../src/assets/tshirt.jpg",
          description: "Available in size 12, 13, 14",
          price: 120000,
          inStock: 50
        },
        {
          id: 9,
          avatar: "../src/assets/tshirt.jpg",
          description: "Available in size 12, 13, 14",
          price: 120000,
          inStock: 50
        },
        {
          id: 10,
          avatar: "../src/assets/tshirt.jpg",
          description: "Available in size 12, 13, 14",
          price: 120000,
          inStock: 50
        }
      ]
    };
  },
  filters: {
    currency: function(value) {
      return "₦" + parseFloat(value).toFixed(2);
    }
  },
  methods: {
    addProductToCart: function(product) {
      this.cart.items.push({
        product: product,
        quantity: 1
      });
    }
  }
};
</script>

<style lang="scss">
</style>
