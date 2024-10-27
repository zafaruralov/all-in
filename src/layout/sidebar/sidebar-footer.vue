<template>
  <div class="chat-footer">
    <div class="chat-footer__new">
      <img :src="importentStar" alt="importent-star" class="chat-footer__new-icon">
      <p class="chat-footer__new-title">Start new chat</p>
    </div>
    <div class="chat-footer__sign" v-if="false">
      <div class="chat-footer__header">
        <h1 class="chat-footer__header-title">
          Let’s create an account
        </h1>
        <p class="chat-footer__header-desc">
          Save your chat history, share chat, and personalize your experience.
        </p>
      </div>
      <div class="chat-footer__wrapper">
        <button class="button secondary">Sign in</button>
        <button class="button primary">Create account</button>
      </div>
    </div>
    <div v-else class="chat-footer__acc">
      <div class="chat-footer__acc-wrapper">
        <img :src="profilePhoto" alt="profile icon" class="chat-footer__acc-icon">
        <p class="chat-footer__acc-fullname">Zafarjon Uralov</p>
      </div>
      <img :src="profileSetting" alt="profile-setting" class="chat-footer__acc-control">
    </div>
  </div>
</template>
<script setup>
import importentStar from "../../assets/image/importent-star.svg"
import profilePhoto from "../../assets/image/download.png"
import profileSetting from "../../assets/image/profile-setting.svg"
</script>