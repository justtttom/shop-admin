<template>
  <div class="f-header">
    <span class="logo">
      <el-icon class="mr-3"><ElemeFilled /></el-icon>
      justin program
    </span>
    <el-icon class="icon-btn"><Fold /></el-icon>
    <el-icon class="icon-btn"><Refresh /></el-icon>
    <div class="ml-auto flex justify-center items-center">
      <el-icon class="icon-btn"><FullScreen /></el-icon>
      <el-dropdown class="dropdown">
        <span class="flex justify-center items-center">
          <el-avatar class="mr-2" :size="25" :src="$store.state.user.avatar" />
          {{ $store.state.user.username }}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { ArrowDown } from '@element-plus/icons-vue'
</script>
<style>
.f-header {
  @apply flex items-center  bg-indigo-400 text-white fixed top-0 left-0 right-0;
  height: 64px;
}
.logo {
  width: 250px;
  @apply flex justify-center items-center text-xl font-thin;
}
.icon-btn {
  @apply flex justify-center items-center;
  width: 42px;
  height: 64px;
  cursor: pointer;
}
.icon-btn:hover{
  @apply bg-indigo-300
}

.f-header .dropdown{
  height: 64px;
  cursor: pointer;
  @apply flex justify-center items-center text-white mx-5;
}
</style>
