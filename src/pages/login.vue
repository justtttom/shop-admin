<template>
  <el-row class="login-container">
    <el-col :lg="16" :md="12" class="left">
      <div>
        <div class="font-bold text-6xl text-light-100 mb-5">
          欢迎来到 hello 学习平台 👏🏻
        </div>
        <div class="text-2xl text-gray-300">
          此站点是为了学习《vite + vue3实战商城后台开发》
        </div>
      </div>
    </el-col>
    <el-col
      :lg="8"
      :md="12"
      class=" right "
    >
      <h2 class="text-4xl text-dark-50 font-bold">欢迎回来</h2>
      <div
        class="flex items-center justify-center my-5 text-gray-400 space-x-2"
      >
        <span class="h-[1px] w-16 bg-gray-400"></span>
        <span>账号密码登录</span>
        <span class="h-[1px] w-16 bg-gray-400"></span>
      </div>
      <div>
        <el-form :model="form" class="w-[250px]">
          <el-form-item label="账号：">
            <el-input v-model="form.username" placeholder="请输入用户名">
              <template #prefix>
                <el-icon class="el-input__icon"
                  ><el-icon><User /></el-icon
                ></el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item label="密码：">
            <el-input
              type="password"
              show-password
              v-model="form.password"
              placeholder="请输入密码"
            >
              <template #prefix>
                <el-icon class="el-input__icon"
                  ><el-icon><Lock /></el-icon
                ></el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              round
              color=" #626aefc9"
              class="w-[250px]"
              type="primary"
              @click="onSubmit"
              >登录</el-button
            >
            <!-- <el-button class="w-[250px]">注册</el-button> -->
          </el-form-item>
        </el-form>
      </div>
    </el-col>
  </el-row>
</template>

<script setup>
import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
  username: '',
  password: ''
})

const onSubmit = () => {
  console.log('submit!')
}
</script>

<style>
.login-container {
  @apply min-h-screen bg-indigo-400;
}
.login-container .left,.login-container .right {
  @apply flex items-center justify-center;
}
.login-container .right{
  @apply bg-indigo-50 flex-col
}
</style>
