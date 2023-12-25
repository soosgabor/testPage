<template>
  <div data-testid="user-page">
    <h1>User Page</h1>
    <h2 v-if="user">{{ user.username }}</h2>
    {{ props.id }}
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

let user = ref();

const props = defineProps({
  id: String,
});

onMounted(async () => {
  await getUserById();
});

const getUserById = async () => {
  try {
    user.value = await axios.get(`/api/user/${props.id}`);
    if (user.value.status === 200) {
      user.value = user.value.data;
    }
  } catch (error) {
    console.log(error);
  }
};
</script>
