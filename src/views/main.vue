<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <p><router-link to="/reflected-xss">reflected-xss</router-link></p>
  <p><router-link to="/dom-based-xss">dom-based-xss</router-link></p>
</template>
