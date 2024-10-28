<template>
  <div class="message" v-for="item in messages" :key="item?.id">
    <div v-if="item.sent" class="message-sent">
      <p class="message-sent__sent">
        {{ item.sent }}
      </p>
    </div>
    <div v-else class="message-received">
      <!-- TODO: must to add icon and copy button -->
       <p class="message-received__received">
         {{ item.received }}
        </p>
    </div>
  </div>
</template>
<script setup>
defineProps({
  messages: Array
})
</script>