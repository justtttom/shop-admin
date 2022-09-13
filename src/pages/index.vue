<template>
  <div>
    后台首页
    {{ $store.state.user.username }}
    <el-button text @click="handleLogout">退出登录</el-button>
  </div>
</template>
<script setup>
import { showModal,toast } from '~/composables/util'
import { logout } from '~/api/manager'
import { removeToken } from '~/composables/auth'
import router from '../router';

function handleLogout() {
  showModal('是否退出登录？').then((res) => {
    logout().finally(() => {
      // 移除cookie里的 token
      removeToken()
      // 清除用户状态 vuex

      // 跳转回登录页
      router.push('/login')
      // 提示登录成功
      toast('退出登录成功！')
    })
  })
}
</script>
