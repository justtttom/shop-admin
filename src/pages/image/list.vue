<template>
  <el-container class="bg-white rounded" :style="{ height: h + 'px' }">
    <el-header class="image-header bg-green-400">Header</el-header>
    <el-container>
      <el-aside width="220px" class="image-aside bg-orange-400">
        <div class="top">
          <div v-for="i in 100" :key="i">{{ i }}</div>
        </div>
        <div class="bottom">分页区域</div>
      </el-aside>
      <el-main class="image-main">
        <div class="top">
          <div v-for="i in 100" :key="i">{{ i }}</div>
        </div>
        <div class="bottom">分页区域</div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
const windowHeight = window.innerHeight || document.body.clientHeight;
const h = windowHeight - 60 - 44 - 40;
</script>

<style scoped>
.image-header {
  border-bottom: 1px solid #eee;
  @apply flex items-center;
}
.image-aside {
  border-right: 1px solid #eee;
  position: relative;
}
.image-main {
  position: relative;
}
.image-aside .top,.image-main .top{
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 50px;
  overflow-y: auto;
}

.image-aside .bottom,.image-main .bottom{
  @apply flex items-center justify-center;
  position: absolute;
  bottom: 0;
  height: 50px;
  right: 0;
  left: 0;
}
</style>