<template>
  <div class="container">
    <div class="order">
      <div class="order__image">
        <img :src="OrderConfImage" alt="">
      </div>
      <div class="order__container">
        <div class="order__header">
          <h1 class="order__header-title">
            Your order is confirmed.
          </h1>
          <p class="order__header-desc">
            Your order is now in the queue and being processed. We'll let you know when we ship it out!
          </p>
        </div>
        <div class="order__number">
          <p class="order__number-title">Order Number</p>
          <div class="order__number-desc">
            <p>9860090103751928</p>
            <img :src="CopyIcon" alt="copy-icon">
          </div>
        </div>
        <div class="order__content">
          <div class="order__content-items" v-for="item in content" :key="item.id">
            <div class="order__content-wrapper">
              <div class="order__content-left">
                <div class="order__content-image">
                  <img src="../assets/image/sarah.png" alt="sarah">
                </div>
                <div class="order__content-item">
                  <h2 class="order__content-title">
                  {{ item.title }}
                  </h2>
                  <p class="order__content-desc">
                    {{ item.desc }}
                  </p>
                  <p class="order__content-desc">
                    {{ item.quantity }}
                  </p>
                </div>
              </div>
              <div class="order__content-prices">
                <h2 v-if="item.discount" class="order__content-discount">
                  {{ item.discount }}
                </h2>
                <p class="order__content-price">
                  {{ item.price }}
                </p>
              </div>
            </div>
            <div class="order__content-border"></div>
          </div>
          <div class="order__subtotal">
            <div class="order__subtotal-wrapper">
              <div class="order__subtotal-items">
                <h2 class="order__subtotal-title">Subtotal</h2>
                <p class="order__subtotal-price">$162.50</p>
              </div>
              <div class="order__subtotal-items">
                <h2 class="order__subtotal-title">Shipping</h2>
                <p class="order__subtotal-price">FREE</p>
              </div>
              <div class="order__subtotal-items">
                <div class="order__subtotal-title">
                    Coupon discount
                  <div class="order__subtotal-button">
                    <p class="order__subtotal-label">GR8FRNTND24</p>
                  </div>
                </div>
                <p class="order__subtotal-price">-$5.00</p>
              </div>
            </div>
            <div class="order__content-border"></div>
          </div>
          <div class="order__total">
            <div class="order__subtotal-items">
                <h2 class="order__total-title">Total</h2>
                <p class="order__total-price">$157.50</p>
            </div>
          </div>
          <div class="order__address">
            <div class="order__address-wrapper">
              <p class="order__address-subtitle">Shipping address</p>
              <p class="order__address-label">
                +1 (650) 555-0198
                150 Elm Street, Apartment 3B
                Brooklyn, NY 11222
                United States
              </p>
            </div>
            <div class="order__address-payment">
              <p class="order__address-subtitle">Payment</p>
              <div class="order__address-container">
                <img :src="VisaIcon" alt="visa-image">
                <div class="order__address-visa">
                  <p class="order__address-visa-title">
                    Ending with 1234
                  </p>
                  <p class="order__address-visa-desc">
                    Expires 12 / 28
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="button primary">Continue Shopping</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue"
import OrderConfImage from "../assets/image/Image.svg"
import CopyIcon from "../assets/image/copy.svg"
import VisaIcon from "../assets/image/visa.svg"

const content = reactive([
  {
    id: 1,
    title: 'StepSoft Socks',
    desc: "Orange • Extra Small",
    quantity: "Quantity: 1",
    discount: "$25.50",
    price: "$22"
  },
  {
    id: 2,
    title: 'Elemental Sneakers',
    desc: "Beige • 6",
    quantity: "Quantity: 1",
    discount: "$80",
    price: "$100"
  },
  {
    id: 3,
    title: 'Azure attitude shades',
    desc: "Blue",
    quantity: "Quantity: 1",
    discount: "$45"
  },
  {
    id: 4,
    title: 'Urban drift bucket hat',
    desc: "White",
    quantity: "Quantity: 1",
    discount: "$12"
  },
])
</script>