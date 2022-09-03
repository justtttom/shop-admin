<template>
  <el-row class="min-h-screen bg-indigo-400">
    <el-col :span="16" class="flex items-center justify-center">
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
      :span="8"
      class="bg-indigo-50 flex items-center justify-center flex-col"
    >
      <h1 class="text-5xl mb-5 text-dark-50">欢迎回来！</h1>
      <div>
        <span></span>
        <span></span>
      </div>
      <div>
        <el-form :model="form" >
          <el-form-item label="账号：" >
            <el-input  v-model="form.username"  placeholder="请输入用户名"/>
          </el-form-item>
          <el-form-item label="密码：" >
            <el-input  v-model="form.password"  placeholder="请输入密码"/>
          </el-form-item>
          <el-form-item >
            <el-button type="primary" @click="onSubmit">登录</el-button>
            <el-button>注册</el-button>
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
 username:"",
 password:""
})

const onSubmit = () => {
  console.log('submit!')
}
</script>

<style></style>
