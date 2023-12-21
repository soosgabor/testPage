<template>
  <div>
    <img
      :src="props.user.image ? '/image/' + props.user.image : '/image/profile.png'"
      alt="profile"
      width="30"
      class="rounded-circle shadow-sm"
    />
    {{ props.user.username }}
  </div>
</template>

<script setup>
const props = defineProps(["user"]);
</script>
