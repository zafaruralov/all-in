<template>
  <div class="chat-layout">
    <sidebar class="chat-sidebar" />
    <div class="chat-body">
      <router-view />
    </div>
  </div>
</template>
<script setup>
import sidebar from "./sidebar/index.vue"
</script>