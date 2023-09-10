<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();

const script = route?.query?.script ?? '';
</script>

<template>
  <div>
    <div id="target">Your script is : {{ script }}</div>
    <router-link to=""><div @click="router.go(-1)">go back</div></router-link>
  </div>
</template>
