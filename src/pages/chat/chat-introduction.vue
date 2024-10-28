<template>
  <div class="chat-intro">
    <div class="chat-intro__wrapper" v-if="!$route.params.id">
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
    <div ref="messagesContainer" v-else class="chat-ongoing">
      <Message :messages />
    </div>
   <MessageInput @send="addMessage" />
  </div>
</template>
<script setup>
import { reactive, watch, ref } from "vue"
import { useRoute } from "vue-router"
import email from "../../assets/image/email.svg"
import writing from "../../assets/image/write-icon.svg"
import planning from "../../assets/image/planning.svg"
import assistant from "../../assets/image/assistant.svg"
import MessageInput from "../../components/MessageInput.vue"
import Message from "../../components/Message.vue"

const route = useRoute();
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
const messagesContainer = ref(null);
const messages = reactive([
  { sent: 'Hello! How can I help you?' },
  { received: 'What is the great designer UI UX in your mind?' },
])
function addMessage(newMessage) {
  messages.push({ sent: newMessage })
  scrollToBottom();
}
function scrollToBottom() {
  if (messagesContainer.value) {
    console.log("messagesContainer.value.scrollHeight", messagesContainer.value.scrollHeight)
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight * 2;
  }
}

watch(() => route.params.id, (newId) => {
  if (newId) {
    loadMessages(newId);
  }
});

function loadMessages(chatId) {
  messages.length = 0;
  if(chatId === '1') {
    messages.push(
      { sent: 'Hello! How can I help you?' },
      { received: 'What is the great designer UI UX in your mind?' },
    )
  } else if (chatId === '2') {
    messages.push(
      { received: 'As a Great UI UX Designer, there are several core competencies that are essential for success: User-Centered Design: A Senior Product Designer should be able to understand and empathize with users to design products that meet their needs and solve their problems.' },
      { sent: 'What is the main concern in design?' },
    );
  } else if (chatId === '3') {
    messages.push(
      { received: 'For chat ID 2, we focus on a different approach: Lean UX, which emphasizes collaboration and agility.' },
      { sent: 'How do you prioritize user feedback?' },
    );
  }
  scrollToBottom();
}

</script>