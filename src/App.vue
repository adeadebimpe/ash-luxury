<template>
  <div id="app">

    <div class="wrapper">



      <div v-if="!isShowingCart" id="products">
        <div class="header">
          <div class="container">
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

        </div>

        <div class="product">
          <div class="container">
            <div v-for="product in products" :key="product.id" :class="['product__item' + product.id, 'product__item' ]"
              @click="showModal = true">
              <img :src="product.avatar" class="product_image" width="100%" alt="Product Image" />
              <div class="product__item--text">
                <h5>{{product.price | currency }}</h5>
                <p>{{product.description}}</p>
                <button class="btn btn-white" @click="addProductToCart(product)" v-once> Add to Cart</button>
                <button class="btn btn-danger" @click="removeProductFromCart(product)"> Remove from Cart</button>

              </div>

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
        <div class="container">
          
          <div class="cart" v-if="cart.items.length > 0">

            <div v-for="item in cart.items" :key="item.product.id" class="cart-item row">
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
              <!--<div class="cart-remove">
              <button >Remove</button>
            </div>-->
            </div>
            <hr>
            <div class="cart-total">
              <p>Total</p>
              <p class="cart-total-price">{{ cartTotal | currency }}</p>
            </div>
            <div class="cart-bottom">
              <h6>Continue Shopping</h6>
              <button class="btn btn-black" @click="checkout">Checkout</button>
            </div>
          </div>
          <p v-else>Your cart is currently empty.</p>
        </div>
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
        showModal: false,
        cart: {
          items: []
        },
        products: [{
            id: 1,
            name: "Food",
            avatar: "../src/assets/FOOD.jpg",
            description: "Available in size 12, 13, 14",
            price: 120000,

          },
          {
            id: 2,
            name: "Jeans",
            avatar: "../src/assets/jeans.jpg",
            description: "Available in size 12, 13, 14",
            price: 120000,

          },
          {
            id: 3,
            name: "lens",
            avatar: "../src/assets/lens.jpg",
            description: "Available in size 12, 13, 14",
            price: 120000,

          },

          {
            id: 4,
            name: "makeup",
            avatar: "../src/assets/makeup.jpg",
            description: "Available in size 12, 13, 14",
            price: 120000,

          },
          {
            id: 5,
            name: "Truck",
            avatar: "../src/assets/truck.jpg",
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
            name: "Camera",
            avatar: "../src/assets/camera.jpg",
            description: "Available in size 12, 13, 14",
            price: 120000,

          },
          {
            id: 8,
            name: "Tissot",
            avatar: "../src/assets/tissot.jpg",
            description: "Available in size 12, 13, 14",
            price: 120000,

          },
          {
            id: 9,
            name: "Apple",
            avatar: "../src/assets/apple.jpg",
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

      //add product to cart
      addProductToCart: function (product) {
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
      //remove product to cart
      removeProductFromCart: function (product) {
        var cartItem = this.getCartItem(product);

        /** if (cartItem != null) {
          this.cart.items.splice(product);
          
        } else {
          cartItem.quantity == 0;
        } */
        this.cart.items.splice(product);


      },
      //increase the quantity of cart item
      increaseQuantity: function (cartItem) {

        cartItem.quantity++;
      },
      //decrease the quantity of cart item
      decreaseQuantity: function (cartItem) {
        cartItem.quantity--;
        cartItem.product.inStock++;

        if (cartItem.quantity == 0) {
          this.removeItemFromCart(cartItem);
        }
      },

      removeItemFromCart: function (cartItem) {
        var index = this.cart.items.indexOf(cartItem);

        if (index !== -1) {
          this.cart.items.splice(index, 1);
        }
      },

      /**  checkout: function () {
        this.$http.post('http://www.mocky.io/v2/5be477442f00004900d9f521', {
          product = this.cart.items;

        });
        this.cart.items = [];
      },*/
      //get cart item
      getCartItem: function (product) {
        for (var i = 0; i < this.cart.items.length; i++) {
          if (this.cart.items[i].product.id === product.id) {
            return this.cart.items[i];
          }
        }

        return null;
      },

    },

    computed: {


      cartTotal: function () {
        var total = 0;

        this.cart.items.forEach(function (item) {
          total += item.quantity * item.product.price;
        });

        return total;
      }
    },
    filters: {
      currency: function (value) {
        return "₦" + parseFloat(value);
      }
    }
  };

</script>

<style lang="scss">
</style>
