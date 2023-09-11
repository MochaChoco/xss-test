<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import sanitizeHtml from 'sanitize-html';

const route = useRoute();
const router = useRouter();

// query를 sanitize한다.
const script = sanitizeHtml(route?.query?.script) ?? '';
</script>

<template>
  <div>
    <div id="target">Your script is : {{ script }}</div>
    <router-link to=""><div @click="router.go(-1)">go back</div></router-link>
  </div>
</template>
