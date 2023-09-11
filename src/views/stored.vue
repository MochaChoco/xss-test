<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import sanitizeHtml from 'sanitize-html';

const router = useRouter();
let tagString = ref('');

const loadData = () => {
  // 태그 string을 sanitize해준다.
  tagString.value = sanitizeHtml(
    `
  <img src="/assets/computer-virus.png" onload="window.addEventListener('popstate', function () {
      alert('url changed'); 
  });" />
  <p>이제 뒤로가기 버튼을 누를때마다 팝업창이 뜹니다.</p>
  `,
    {
      allowedTags: false, // 모든 태그 허용
    },
  );
};
</script>

<template>
  <div>
    <div class="inner" v-html="tagString"></div>
    <button @click="loadData">그림 출력</button>
    <router-link to=""><div @click="router.go(-1)">go back</div></router-link>
  </div>
</template>

<style scoped>
.inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
