<template>
  <div class="navbar-voyage">
    <div class="navbar-voyage__image">
      <img :src="nestedIcon" alt="nestedIcon">
    </div>
    <div class="navbar-voyage__wrapper">
      <div class="navbar-voyage__items">
        <p class="navbar-voyage__items-title">Shop all</p>
        <p class="navbar-voyage__items-title">Latest arrivals</p>
      </div>
      <div class="navbar-voyage__basket">
        <img :src="basketIcon" alt="basketIcon">
      </div>
    </div>
  </div>
</template>
<script setup>
import nestedIcon from "../assets/image/styleNest.svg"
import basketIcon from "../assets/image/basket.svg"
</script>