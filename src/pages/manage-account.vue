<template>
  <div class="container">
    <div class="account">
      <div class="account__header">
        <h1 class="account__header-title">
          Manage Your Account
        </h1>
        <p class="account__header-desc">
          Update your account details below for a tailored experience on our platform.
        </p>
      </div>
      <div class="account__section">
        <div class="account__image">
          <div class="account__img">
            <img src="../assets/image/avatar.jpg" alt="avatar" class="account__img-image">
          </div>
          <div class="account__image-wrapper">
            <div class="account__image-button">
              <button class="account__image-btn">
                <h1>
                  Change avatar
                </h1>
              </button>
            </div>
          <p class="account__image-desc">At least 800x800 px. JPG or PNG only.</p>
          </div>
        </div>
        <form action="account-form" class="account__form">
          <div class="account__fields">
            <div class="account__wrapper">
              <div class="input input__width">
                <label class="input__label" for="first-name">First name</label>
                <input
                  class="input__field"
                  id="first-name"
                  aria-describedby="fitst-name-error"
                  required
                  placeholder="John" />
              </div>
              <div class="input input__width">
                <label class="input__label" for="last-name">Last name</label>
                <input
                  class="input__field"
                  id="last-name"
                  aria-describedby="last-name-error"
                  required
                  placeholder="Appleseed" />
              </div>
            </div>
            <div class="input__wrapper">
              <div class="input input--width">
                <label class="input__label" for="email">Email</label>
                <input
                  class="input__field"
                  id="email"
                  aria-describedby="email-error"
                  required
                  placeholder="example@mail.com" />
              </div>
              <div class="input input--width">
                <label class="input__label" for="username">Username</label>
                <input
                  class="input__field"
                  id="username"
                  aria-describedby="username-error"
                  required
                  placeholder="johnappleseed" />
                <p class="input__field-desc">Allows others to find and interact with you easily.</p>
              </div>
            </div>
          </div>
          <div class="account__actions">
            <button class="account__action">Save changes</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
console.log("Manage Account component mounted");
</script>