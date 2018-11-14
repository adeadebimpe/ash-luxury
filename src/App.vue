<template>
  <div id="app">

    <div class="container">

  

      <div v-if="!isShowingCart" id="products">
        <div class="header">
          <nav id="top-navigation" class="well">
            <div class="cart-icon" @click="isShowingCart = true">

              <a><img src="../src/assets/bag.svg" alt="Cart Bag" width="100%" />
              <span class="cart-item">{{cart.items.length }}</span></a>


            </div>
          </nav>
          <div class="header__text">

            <h3 class="header__title">Ash Luxury</h3>
            <p class="header__sub-title">Fashion & Lifestyle 📧 admin@ashluxury.com 📲 </p>
            <p class="header__sub-title">whatsapp: +234 8169761216 🌍 worldwide shipping </p>
            <p class="header__sub-title">📍22B Admiralty Way 🕙HQ opens 10am - 8pm (mon-sat)</p>
          </div>

        </div>

        <div class="product">
          <div v-for="product in products" :key="product.id" :class="['product__item' + product.id, 'product__item' ]">
            <img :src="product.avatar" class="product_image" width="100%" alt="Product Image" />
            <div class="product__item--text">
              <h5>{{product.price | currency }}</h5>
              <p>{{product.description}}</p>
              <button class="btn btn-white" @click="addProductToCart(product)"> Add to Cart</button>
              <button class="btn btn-white" @click="removeProductToCart(product)"> Remove from Cart</button>
            </div>

          </div>
        </div>
        <footer>
          <div class="wrapper">
            <a class="btn btn-black" href="#">Follow Us on Instagram</a>
          </div>
        </footer>
      </div>
      <div v-else>
        <h1 class="cart-header">Your Cart</h1>
        <div class="cart" v-if="cart.items.length > 0">
          
          <div  v-for="item in cart.items" :key="item.product.id" class="cart-item row">
            <div class="col-md-3">
              <img :src="item.product.avatar" alt="Bag" width="100%" />
            </div>
            <div class="col-md-6 cart-info">
              <h5 class="item-name"> {{item.product.name}}</h5>
              <p class="item-description"> {{ item.product.description }}</p>
              <p class="item-price">{{item.quantity * item.product.price | currency}}</p>
            </div>
            <div class="col-md-3 cart-no">

              <button class="btn btn-black" @click="increaseQuantity(item)">+</button>
              <p> {{ item.quantity }} </p>
              <button class="btn btn-black" @click="decreaseQuantity(item)">-</button>
            </div>
            <div class="cart-remove">
              <p>Remove</p>
            </div>
          </div>
          <hr>
          <div class="cart-total">
            <p>Total</p>
            <p class="cart-total-price">{{ cartTotal | currency }}</p>
          </div>
          <div class="cart-bottom">
            <h6>Continue Shopping</h6>
            <button class="btn btn-black">Checkout</button>
          </div>
        </div>
         <p v-else>Your cart is currently empty.</p>
      </div>

    </div>
  </div>
</template>

<script>
//import stylesheets
import "./scss/main.scss";
//import components

export default {
  name: "app",
  data() {
    return {
      isShowingCart: false,

      cart: {
        items: []
      },
      products: [
        {
          id: 1,
          name: "Tshirt",
          avatar: "../src/assets/tshirt.jpg",
          description: "Available in size 12, 13, 14",
          price: 120000,
          
        },
        {
          id: 2,
          name: "Tshirt",
          avatar: "../src/assets/tshirt.jpg",
          description: "Available in size 12, 13, 14",
          price: 120000,
          
        },
        {
          id: 3,
          name: "Tshirt",
          avatar: "../src/assets/tshirt.jpg",
          description: "Available in size 12, 13, 14",
          price: 120000,
          
        },

        {
          id: 4,
          name: "Tshirt",
          avatar: "../src/assets/tshirt.jpg",
          description: "Available in size 12, 13, 14",
          price: 120000,
          
        },
        {
          id: 5,
          name: "Tshirt",
          avatar: "../src/assets/chucks.png",
          description: "Available in size 12, 13, 14",
          price: 120000,
          
        },
        {
          id: 6,
          name: "Tshirt",
          avatar: "../src/assets/chucks.png",
          description: "Available in size 12, 13, 14",
          price: 120000,
          
        },
        {
          id: 7,
          name: "Tshirt",
          avatar: "../src/assets/tshirt.jpg",
          description: "Available in size 12, 13, 14",
          price: 120000,
          
        },
        {
          id: 8,
          name: "Tshirt",
          avatar: "../src/assets/tshirt.jpg",
          description: "Available in size 12, 13, 14",
          price: 120000,
        
        },
        {
          id: 9,
          name: "Tshirt",
          avatar: "../src/assets/tshirt.jpg",
          description: "Available in size 12, 13, 14",
          price: 120000,
          
        },
        {
          id: 10,
          name: "Tshirt",
          avatar: "../src/assets/tshirt.jpg",
          description: "Available in size 12, 13, 14",
          price: 120000,
         
        }
      ]
    };
  },
  methods: {
    addProductToCart: function(product) {
      var cartItem = this.getCartItem(product);

      if (cartItem != null) {
        cartItem.quantity++;
      } else {
        this.cart.items.push({
          product: product,
          quantity: 1
        });
      }

      
    },
    removeProductToCart: function(product) {
      var cartItem = this.getCartItem(product);

      if (cartItem = null) {
        cartItem.quantity == 0;
      } else {
        this.cart.items.splice({
          product: product,
          quantity: 1
        });
      }

      
    },
    increaseQuantity: function(cartItem) {
      
      cartItem.quantity++;
    },

    decreaseQuantity: function(cartItem) {
      cartItem.quantity--;
      cartItem.product.inStock++;

      if (cartItem.quantity == 0) {
        this.removeItemFromCart(cartItem);
      }
    },

    removeItemFromCart: function(cartItem) {
      var index = this.cart.items.indexOf(cartItem);

      if (index !== -1) {
        this.cart.items.splice(index, 1);
      }
    },

    checkout: function() {
      if (confirm("Are you sure that you want to purchase these products?")) {
        this.cart.items.forEach(function(item) {
          item.product.inStock += item.quantity;
        });

        this.cart.items = [];
      }
    },

    getCartItem: function(product) {
      for (var i = 0; i < this.cart.items.length; i++) {
        if (this.cart.items[i].product.id === product.id) {
          return this.cart.items[i];
        }
      }

      return null;
    }
  },

  computed: {
    

    cartTotal: function() {
      var total = 0;

      this.cart.items.forEach(function(item) {
        total += item.quantity * item.product.price;
      });

      return total;
    }
  },
  filters: {
    currency: function(value) {
      return "₦" + parseFloat(value);
    }
  }
};
</script>

<style lang="scss">
</style>
