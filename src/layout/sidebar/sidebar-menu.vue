<template>
  <div class="chat-menu">
    <div class="chat-menu__history">
      <p class="chat-menu__history-title">
        Past
      </p>
    </div>
    <ul class="chat-menu__items">
      <li class="chat-menu__item" v-for="item in history" :key="item.id">
        <img src="../../assets/image/file-list.svg" alt="file-list" class="chat-menu__item-icon">
        <p class="chat-menu__item-desc"> {{ item.desc }}</p>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { reactive } from "vue"

const history = reactive([
  {
    id: 1,
    desc: "What is the great designer"
  },
  {
    id: 2,
    desc: "How many people in SG"
  },
  {
    id: 3,
    desc: "Create plan for vacation in"
  },
]) 
</script>