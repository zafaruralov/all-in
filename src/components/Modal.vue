<template>
  <div class="modal__box">
      <div class="modal__overlay"></div>
      <div class="modal__holder">
        <div class="modal" :class="{
          'fscreen': isModalFullscreen,
          'show': isModalOpen,
          'opened': modalOpened,
          'closed': isModalClosed,
          [modalDirection ? 'mdl-direction' - modalDirection : 'mdl-direction-default']:true
        }" :style="{ width: modalWidth + 'px', minHeight: modalHeight + 'px' }">
          <div class="modal__header"
          :class="[
            { [modalState ? modalState : 'modal__main']: true },
            { [modalHeaderSize ? modalHeaderSize : '']: true }
          ]">
            <h2 class="modal__header-title" v-html="modalTitle"></h2>
            <spam class="modal__header-close"></spam>
          </div>
          <div v-if="true" v-html="modalBody" class="modal__body"></div>
          <div v-else class="modal__body">
            <slot></slot>
            <p style="line-height: 1.4; font-size: 48px; text-align: center; font-weight: bold; margin: auto">
              Template body html content <br />
              goes here to be displayed
            </p>
          </div>
          <div class="modal__footer">
            <button v-for="(item, index) in modalActions" 
            :key="`${index}-${item.text}`" class="modal__footer-action"
            :class="[
              {
                disabled: item.disabled,
                [item.size ? 'mdl-' + item.size : 'mdl-medium']:true,
                [item.mode ? 'mdl-' + item.mode : 'mdl-main']:true,
                [item.state ? 'mdl-' + item.state : '']:true
              }
            ]" @click="item.handler">
              <p>
                {{ item.text }}
              </p>
            </button>
          </div>
        </div>
      </div>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from "vue"
defineProps({
  onClose: {
    type: Function,
    default: () => {}
  }
})
const isModalOpen = ref(false)
const isModalFullscreen = ref(false)
const modalDirection = ref(null)
const modalWidth = ref(900)
const modalHeight = ref(400)
const modalTitle = ref("Default title of modal")
const modalState = ref(null)
const modalBody = ref(null)
const modalHeaderSize = ref('medium')
const modalOpened = ref(false)
const modalClosed = ref(false)
const modalActions = reactive([
  {
    text: "No",
    size: "medium",
    mode: "secondary",
    state: "danger",
    disabled: false,
    handler: modalHide
  },
  {
    text: "Yes",
    size: "medium",
    state: "danger",
    disabled: false,
    handler: this.modalHide
  }
])
onMounted(() => {
  setupEscapeKeyListener()
})
onBeforeUnmount(() => {
  removeEscapeKeyListener()
})

const modalHide = () => {
  modalClosed.value = true
  setTimeout(() => {
    modalOpened.value = false
    isModalOpen.value = false
    removeEscapeKeyListener()
    onClose()
  }, 500)
}
function modalShow(opts) {
  setTimeout(() => {
    this.isModalOpen = true
    this.modalOpened = true
  }, 50)
}

function handleEscapeKey(event) {
  if(event.key === "Escape") {
    modalHide()
  }
}
function setupEscapeKeyListener() {
  document.addEventListener("keydown", handleEscapeKey)
}

function removeEscapeKeyListener() {
  document.removeEventListener('keydown', handleEscapeKey)
}
</script>