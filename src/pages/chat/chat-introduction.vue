<template>
  <div class="chat-intro">
    <div class="chat-intro__wrapper">
      <header class="chat-intro__header">
        <span>Hey, I’m Zafar AI. </span>
        Your AI assistant and companion for any occasion.
      </header>
      <section class="chat-intro__content">
        <div class="chat-intro__container" v-for="item in data" :key="item.id">
          <img :src="item.image" alt="container-image" class="chat-intro__container-image">
          <div class="chat-intro__container-subtitle">
            <h3 class="chat-intro__container-title">{{ item.title }}</h3>
            <p class="chat-intro__container-desc">{{ item.desc }}</p>
          </div>
        </div>
      </section>
    </div>
   <MessageInput />
  </div>
</template>
<script setup>
import { reactive } from "vue"
import email from "../../assets/image/email.svg"
import writing from "../../assets/image/write-icon.svg"
import planning from "../../assets/image/planning.svg"
import assistant from "../../assets/image/assistant.svg"
import MessageInput from "../../components/MessageInput.vue"
const data = reactive([
  {
    id: 1,
    image: email,
    title: "Draft email",
    desc: "Generate email for any occasion you need."
  },
  {
    id: 2,
    image: writing,
    title: "Write an Essay",
    desc: "Generate essay for any occasion you need."
  },
  {
    id: 3,
    image: planning,
    title: "Planning",
    desc: "Plan for any occasion, from holiday to family."
  },
  {
    id: 4,
    image: assistant,
    title: "Assistant",
    desc: "Become your personal assistant. Helping you."
  },
])
</script>
<style lang="">
    
</style>