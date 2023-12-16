<template>
  <div data-testid="signup-page">
    <form id="form-sign-up">
      <h1>Log In</h1>
      <Input id="username" label="Username" v-model="username" />
      <Input id="password" label="Password" v-model="password" type="password" />

      <button class="btn btn-primary" @click.prevent="submit">Log In</button>
    </form>
  </div>

  <div id="info" class="alert alert-success" v-show="signUpSuccess">
    Please check your e-mail to activate your account
  </div>

  <div v-if="responseData">
    <p>Testing: {{ responseData.data }}</p>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import axios from 'axios'
import Input from '../components/Input.vue'

const username = ref('')
const email = ref('')
const password = ref('')
const passwordRepeat = ref('')
const responseData = ref(null)
const signUpSuccess = ref(false)
const errors = ref({})


</script>