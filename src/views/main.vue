<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

const script = route?.query?.script ?? '';
</script>

<template>
  <div>
    <div id="target">{{ script }}</div>
  </div>
</template>
