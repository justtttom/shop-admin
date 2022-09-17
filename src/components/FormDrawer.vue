<template>
  <el-drawer
    v-model="showDrawer"
    title="修改密码"
    size="35%"
    :close-on-click-modal="false"
  >
    <div class="formDrawer"></div>
  </el-drawer>
</template>

<script setup>
import { ref } from 'vue'
const showDrawer = ref(false)

// 打开
const open = () => (showDrawer.value = true)

// 关闭
const close = () => (showDrawer.value = false)

// 向父组件暴露以下方法
defineExpose({
  open,
  close
})
</script>
