<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <div class="container">
    <p><router-link to="/reflected-xss">reflected-xss</router-link></p>
    <p><router-link to="/stored-xss">stored-xss</router-link></p>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
</style>
