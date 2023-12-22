<template>
  <div data-testid="user-page">
    <h1 v-if="user">{{ user.username }}</h1>
    {{ $route.params.id }}
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
let user = ref();

onBeforeMount(async () => {
  const x = await getUserById(route.params.id);
  console.log(`x = ${x}`);
});

const getUserById = async (id) => {
  try {
    user.value = await axios.get("https://hoaxify-backend.onrender.com/api/user/" + id);
    console.log(user.value);
    if (user.value.status === 200) {
      user.value = user.value.data;
    }
  } catch (error) {
    console.log(error);
  }
};
</script>
