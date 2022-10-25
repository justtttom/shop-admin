<template>
  <div class="f-header">
    <span class="logo">
      <el-icon class="mr-3">
        <ElemeFilled />
      </el-icon>
      justin program
    </span>
    <el-tooltip effect="dark" content="折叠菜单" placement="bottom-start">
      <el-icon class="icon-btn" @click="$store.commit('handleAsideWidth')">
        <Fold v-if="$store.state.asideWidth == '250px'" />
        <Expand v-else />
      </el-icon>
    </el-tooltip>
    <el-tooltip effect="dark" content="刷新" placement="bottom-start">
      <el-icon class="icon-btn" @click="handleRefresh">
        <Refresh />
      </el-icon>
    </el-tooltip>
    <div class="ml-auto flex justify-center items-center">
      <el-tooltip effect="dark" content="全屏" placement="bottom-start">
        <el-icon class="icon-btn" @click="toggle">
          <FullScreen v-if="!isFullscreen" />
          <Aim v-else />
        </el-icon>
      </el-tooltip>
      <el-dropdown class="dropdown" @command="handleCommand">
        <span class="flex justify-center items-center">
          <el-avatar class="mr-2" :size="25" :src="$store.state.user.avatar" />
          {{ $store.state.user.username }}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="rePassword">修改密码</el-dropdown-item>
            <el-dropdown-item command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
  <form-drawer
    ref="formDrawerRef"
    title="修改密码"
    destroyOnClose
    @submit="onSubmit"
  >
    <el-form
      ref="formRef"
      :rules="rules"
      :model="form"
      label-width="90px"
      size="small"
    >
      <el-form-item prop="oldpassword" label="旧密码：">
        <el-input
          type="password"
          v-model="form.oldpassword"
          placeholder="请输入旧密码"
          show-password
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="password" label="新密码：">
        <el-input
          type="password"
          v-model="form.password"
          placeholder="请输入新密码"
          show-password
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="repassword" label="确认密码：">
        <el-input
          type="password"
          v-model="form.repassword"
          placeholder="请输入确认密码"
          show-password
        >
        </el-input>
      </el-form-item>
    </el-form>
  </form-drawer>
</template>

<script setup>
import { useFullscreen } from '@vueuse/core'
import FormDrawer from '~/components/FormDrawer.vue'
import { useRepassword, useLogout } from '~/composables/useManager'

const {
  // 是否全屏状态
  isFullscreen,
  // 切换全屏
  toggle
} = useFullscreen()

const { formDrawerRef, form, rules, formRef, onSubmit, openReasswordForm } =
  useRepassword()

const { handleLogout } = useLogout()

const handleCommand = (c) => {
  switch (c) {
    case 'logout':
      handleLogout()
      break
    case 'rePassword':
      openReasswordForm()
      break
  }
}

// 刷新页面
const handleRefresh = () => location.reload()
</script>

<style>
.f-header {
  @apply flex items-center  bg-green-400 text-white fixed top-0 left-0 right-0;
  height: 64px;
  z-index: 1000;
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

.icon-btn:hover {
  @apply bg-green-500;
}

.f-header .dropdown {
  height: 64px;
  cursor: pointer;
  @apply flex justify-center items-center text-white mx-5;
}
.el-drawer__body{
  background-color: white;
}
</style>
