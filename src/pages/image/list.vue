<template>
  <el-container class="bg-white rounded" :style="{ height: h + 'px' }">
    <el-header class="image-header">Header</el-header>
    <el-container>
      <el-aside width="220px" class="image-aside">Aside</el-aside>
      <el-main class="image-main">Main</el-main>
    </el-container>
  </el-container>
</template>

<script setup>
const windowHeight = window.innerHeight || document.body.clientHeight;
const h = windowHeight - 60 - 44 - 40;
</script>