<template>
  <div class="container">
    <div class="product">
      <div class="product__item product__item1">
        <img src="../assets/t-shirt-1710578_1280.jpg" alt="T-shirt" class="product_image" style="width:100%">
        <div class="product__item--text">
          <h5>N120,000</h5>
          <p>Available in size 12, 13, 14</p>
          <button class="btn"> Buy now</button>
        </div>
      </div>
      <div class="product__item product__item2">
        <img src="../assets/t-shirt-1710578_1280.jpg" alt="T-shirt" class="product_image" style="width:100%">
        <div class="product__item--text">
          <h5>N120,000</h5>
          <p>Available in size 12, 13, 14</p>
          <button class="btn"> Buy now</button>
        </div>
      </div>
      <div class="product__item product__item3">
        <img src="../assets/t-shirt-1710578_1280.jpg" alt="T-shirt" class="product_image" style="width:100%">
        <div class="product__item--text">
          <h5>N120,000</h5>
          <p>Available in size 12, 13, 14</p>
          <button class="btn"> Buy now</button>
        </div>
      </div>
      <div class="product__item product__item4">
        <img src="../assets/t-shirt-1710578_1280.jpg" alt="T-shirt" class="product_image" style="width:100%">
        <div class="product__item--text">
          <h5>N120,000</h5>
          <p>Available in size 12, 13, 14</p>
          <button class="btn"> Buy now</button>
        </div>
      </div>
      <div class="product__item product__item5">
        <img src="../assets/chucks-153310_640.png" alt="T-shirt" class="product_image" style="width:50%">
        <div class="product__item--text">
          <h5>N120,000</h5>
          <p>Available in size 12, 13, 14</p>
          <button class="btn"> Buy now</button>
        </div>
      </div>
      <div class="product__item product__item6">
        <img src="../assets/chucks-153310_640.png" alt="T-shirt" class="product_image" style="width:50%">
        <div class="product__item--text">
          <h5>N120,000</h5>
          <p>Available in size 12, 13, 14</p>
          <button class="btn"> Buy now</button>
        </div>
      </div>
      <div class="product__item product__item7">
        <img src="../assets/t-shirt-1710578_1280.jpg" alt="T-shirt" class="product_image" style="width:100%">
        <div class="product__item--text">
          <h5>N120,000</h5>
          <p>Available in size 12, 13, 14</p>
          <button class="btn"> Buy now</button>
        </div>
      </div>
      <div class="product__item product__item8">
        <img src="../assets/t-shirt-1710578_1280.jpg" alt="T-shirt" class="product_image" style="width:100%">
        <div class="product__item--text">
          <h5>N120,000</h5>
          <p>Available in size 12, 13, 14</p>
          <button class="btn"> Buy now</button>
        </div>
      </div>
      <div class="product__item product__item9">
        <img src="../assets/t-shirt-1710578_1280.jpg" alt="T-shirt" class="product_image" style="width:100%">
        <div class="product__item--text">
          <h5>N120,000</h5>
          <p>Available in size 12, 13, 14</p>
          <button class="btn"> Buy now</button>
        </div>
      </div>
      <div class="product__item product__item10">
        <img src="../assets/t-shirt-1710578_1280.jpg" alt="T-shirt" class="product_image" style="width:100%">
        <div class="product__item--text">
          <h5>N120,000</h5>
          <p>Available in size 12, 13, 14</p>
          <button class="btn"> Buy now</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {

  }

</script>

<style lang="scss">
  .product__item {
    position: relative;

    &:hover {
      .product_image {
        opacity: 0.3;
      }

      .product__item--text {
        opacity: 1;
      }

    }

  }

  .product_image {
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: .5s ease;
    backface-visibility: hidden;
  }

  .product__item--text {
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 20%;
    left: 20%;

    h5 {

      font-size: 18px;
      font-weight: 500;
      text-align: left;
      line-height: 2;
      color: #fff;
    }

    p {
      font-size: 14px;
      letter-spacing: 0px;
      text-align: left;
      color: #ffffff;
    }

    button {
      margin-top: 100px;
    }
  }

</style>
