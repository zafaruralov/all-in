<template>
  <div class="message-input">
    <input type="text" v-model="message"  @keydown.enter="sendMessage" 
    class="message-input-input" placeholder="Ask me nothing ..." aria-describedby="input-for-ai">
    <button class="message-input-button" :class="message ? 'active': ''" @click="sendMessage">
      <img src="../assets/image/submit.svg" alt="submit-icon" />
       Submit
    </button>
  </div>
</template>
<script setup>
import { ref, defineEmits } from "vue"
const message = ref("")

const emit = defineEmits(['send'])

function sendMessage() {
  if (message.value.trim()) {
    emit('send', message.value)
    message.value = ''
  }
}

</script>