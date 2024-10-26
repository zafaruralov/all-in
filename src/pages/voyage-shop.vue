<template>
  <div class="container">
    <NavbarVoyage />
    <div class="main">
      <div class="voyage">
        <div class="voyage-clothes">
          <div class="voyage-clothes__image">
            <div class="voyage-clothes__image-main">
              <img :src="Hoodie" alt="main-image">
            </div>
            <div class="voyage-clothes__images-content">
              <div class="voyage-clothes__images-wrapper">
                <div class="voyage-clothes__images-group">
                  <img :src="item.image" alt="queue-images" v-for="item in queueImages" :key="item.id">
                </div>
                <div class="voyage-clothes__images-group">
                  <img :src="item.image" alt="queue-images" v-for="item in queueImages" :key="item.id">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="voyage-description">
          <div class="voyage-description__actions">
            <div class="voyage-header">
              <div class="voyage-header__title">Voyager Hoodie</div>
              <div class="voyage-header__description">
                <div class="voyage-header__description-discount">

                  <div class="voyage-header__description-prices">
                    <h1 class="voyage-header__description-price">$76</h1>
                    <p class="voyage-header__description-before">$95</p>
                  </div>
                  <div class="voyage-header__description-label">
                    <p>20% OFF</p>
                  </div>

                </div>
                <div class="voyage-header__description-rate">
                  <h1 class="voyage-header__description-score">
                    4.1
                  </h1>
                  <div class="voyage-header__description-stars">
                    <img :src="Stars" alt="stars">
                  </div>
                  <p class="voyage-header__description-reviews">
                    See all 62 reviews
                  </p>
                </div>
              </div>
            </div>
            <div class="voyage-desc">
              <p>The Voyager Hoodie is for the explorer at heart. Its durable fabric and roomy pockets are perfect for those who are always searching for the next adventure.</p>
            </div>
            <div class="voyage-availables">
              <div class="voyage-available">
                <p class="voyage-available-title">
                  Available Colors
                </p>
                <div class="voyage-available__colors-wrapper">
                  <div class="voyage-available__colors-color" :class="colorId === item.id ? 'choosen' : ''" v-for="item in available" :key="item.id" @click="toggleColor(item.id)">
                    <img v-show="item.id === colorId" :src="Checked" alt="checked">
                  </div>
                </div>
              </div>
              <div class="voyage-available">
                <p class="voyage-available-title">Available Sizes</p>
                <div class="voyage-available__sizes">
                  <div class="voyage-available__sizes-size" :class="item.id === sizeId ? 'choosen' : ''" v-for="item in sizes" :key="item.id" @click="toggleSize(item.id)">
                    <p>{{ item.title }}</p>
                  </div>
                </div>
              </div>
              <div class="voyage-available">
                <p class="voyage-available-title">Quantity</p>
                <div class="voyage-available__wrapper">
                  <div class="voyage-available__action">
                    <div class="voyage-available__action-act" @click="decrementQuantity">
                      <p class="voyage-available__action-minus"></p>
                    </div>
                    <h1 class="voyage-available__action-number">{{ quantity }}</h1>
                    <div class="voyage-available__action-act" @click="incrementQuantity">
                      <p class="voyage-available__action-plus"></p>
                    </div>
                  </div>
                </div>
            </div>
            </div>
            <button class="button secondary">Add to Cart</button>
          </div>
          <div class="voyage-description__subtitle" v-for="item in faq" :key="item.id"  :class="item.id === accordionId ? 'open': ''" @click="toggleAccordion(item.id)">
            <div class="voyage-description__header">
              <h1 class="voyage-description__title">
                {{ item.title }}
              </h1>
            </div>
            <li class="voyage-description__content" v-for="label in item.label">
              {{ label }}
            </li>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import NavbarVoyage from "../components/NovbarVoyage.vue"
import Stars from "../assets/image/stars.svg"
import Checked from "../assets/image/checked.svg"
import Hoodie from "../assets/image/hoodie.svg"
import Hoodie2 from "../assets/image/hoodie-2.svg"
import Hoodie3 from "../assets/image/hoodie-3.svg"
import Hoodie4 from "../assets/image/hoodie-4.svg"

const colorId = ref(1)
const sizeId = ref(1)
const quantity = ref(1)
const accordionId = ref(null)
const faq = reactive([
  {
    id: 1,
    title: "Features",
    label: [
      'Designed for comfort and durability.',
      'Soft, breathable fabric ideal for travel and adventure.',
      'Large front pocket and adjustable hood.',
      'Minimalist design pairs well with any style.',
      'Made with eco-conscious materials.'
    ]
  },
  {
    id: 2,
    title: "Fabric & Care",
    label: [
      'Machine wash cold on a gentle cycle.',
      'Tumble dry low or hang to dry.',
      'Do not use fabric softeners or bleach.',
      'Iron on a low setting if necessary.',
    ]
  },
  {
    id: 3,
    title: "Shipping",
    label: [
      'Free standard shipping on all orders - no minimum spend required.',
      'Expedited shipping available at an additional cost.',
      'Packaged in biodegradable materials to reduce environmental impact.',
    ]
  },
])

const available = reactive([
  {
    id: 1,
    color: "green"
  },
  {
    id: 2,
    color: "orange"
  }
])
const queueImages = reactive([
  {
    id: 1,
    image: Hoodie
  },
  {
    id: 2,
    image: Hoodie2
  },
  {
    id: 3,
    image: Hoodie3
  },
  {
    id: 4,
    image: Hoodie4
  },
])
const sizes = reactive([
  {
    id: 1,
    title: "XS"
  },
  {
    id: 2,
    title: "S"
  },
  {
    id: 3,
    title: "M"
  },
  {
    id: 4,
    title: "L"
  },
  {
    id: 5,
    title: "XL"
  },
])
function toggleColor(id) {
  colorId.value = id
}
function toggleSize(id) {
  sizeId.value = id
}
function decrementQuantity() {
  if(quantity.value > 0) {
    quantity.value -= 1
  }
}
function incrementQuantity() {
  quantity.value += 1
}
function toggleAccordion(id){
  if(accordionId.value === id) {
    accordionId.value = null
  }
  else {
    accordionId.value = id
  }
}
</script>