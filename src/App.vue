<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import { Button } from '@/components/ui/button'

</script>

<template>
  <div id="app">
    <router-view></router-view> <!-- 这里渲染匹配的路由组件 -->
  </div>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
