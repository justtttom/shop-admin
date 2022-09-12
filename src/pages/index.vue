<template>
  <div>
    后台首页
    {{ $store.state.user.username }}
    <el-button text @click="logout">退出登录</el-button>
  </div>
</template>
<script setup>
import { ElMessage, ElMessageBox } from 'element-plus'


function logout() {
   
  }
</script>