<template>
  <div class="cart">
    <h1 class="cart-header">Your Cart</h1>
    <div class="cart-item row">
      <div class="col-md-3">
        <img src="../assets/chucks.png" alt="Bag" width="100%" />
      </div>
      <div class="col-md-6 cart-info">
        <h5 class="item-name"> Gucci Flops</h5>
        <p class="item-description"> Available in size 12, 10, 21</p>
        <p class="item-price">N250,000</p>
      </div>
      <div class="col-md-3 cart-no">

        <button class="btn btn-black">+</button>
        <p> 3 </p>
        <button class="btn btn-black">-</button>
      </div>

    </div>
    <hr>
    <div class="cart-total">
      <p>Total</p>
      <p class="cart-total-price">N80,000</p>
    </div>
    <div class="cart-bottom">
      <h6>Continue Shopping</h6>
      <button class="btn btn-black">Checkout</button>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {}
  };

</script>

<style lang="scss">
    .cart-header{
        background-color: #f6f6f6;
        color: #000;
        font-size: 18px;
        text-transform: uppercase;
        padding: 30px;
        text-align: center;
        margin-bottom: 50px;
    }
  .cart-no {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .cart-total {
    display: flex;
    justify-content: space-between;
    background-color: #f1f1f1;
    padding: 30px;
    margin-top: 50px;

    p{
      font-size: 18px;
      font-weight: 500;
      color: #4a4a4a
    }
    
  }
  .cart-bottom{
      display: flex;
      justify-content: center;
    
      flex-direction: column;
      margin-top: 100px;
      h6{
           font-size: 18px;
      font-weight: 500;
      color: #4a4a4a;
      text-align: center;
      

      }
      button{
          margin-top: 100px;
      }
      
  }
.item-price{
    color: #f5a623;
    font-weight: 500;
}
</style>
