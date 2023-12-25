<template>
  <div class="container" data-testid="login-page">
    <form class="card mt-5" id="form-sign-up">
      <div class="card-header">
        <h1 class="text-center">Log In</h1>
      </div>
      <div class="card-body">
        <Input id="e-mail" label="E-mail" v-model="email" />
        <Input id="password" label="Password" v-model="password" type="password" />

        <div class="text-center">
          <button
            class="btn btn-primary mt-3"
            :disabled="isDisabled"
            @click.prevent="submit"
          >
            <span v-if="apiProgress" class="spinner-border spinner-border-sm"></span>
            Log In
          </button>
        </div>
      </div>
    </form>
    <div id="error" v-if="loginError">{{ loginError }}</div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import axios from "axios";
import Input from "../components/Input.vue";

const email = ref("");
const password = ref("");
const apiProgress = ref(false);
const loginSuccess = ref(false);
const loginError = ref("");
const responseData = ref(null);
const errors = ref({});

const isDisabled = computed(() => {
  if (!email.value || !password.value) return true;
  return false;
});

const submit = async () => {
  errors.value = {};
  let user = {
    email: email.value,
    password: password.value,
  };
  try {
    apiProgress.value = true;
    responseData.value = await axios.post("/api/auth", user);
    loginSuccess.value = true;
    apiProgress.value = false;
    loginError.value = responseData.value.data.msg;
    if (!loginError.value) {
      loginError.value = "Sikeres belépés";
    }
  } catch (error) {
    if (error) {
      console.log(error);
      errors.value = error.response.data.msg;
      loginSuccess.value = false;
    }
  }
};
</script>
