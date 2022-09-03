<template>
  <el-row class="min-h-screen bg-indigo-400">
    <el-col :span="16" class="flex items-center justify-center">
      <div>
        <div class="font-bold text-6xl text-light-100 mb-5">
          欢迎来到 hello 学习平台 👏🏻
        </div>
        <div class="text-2xl text-light-50">
          此站点是为了学习《vite + vue3实战商城后台开发》
        </div>
      </div>
    </el-col>
    <el-col
      :span="8"
      class="bg-indigo-50 flex items-center justify-center flex-col"
    >
      <h2>欢迎回来！</h2>
      <div>
        <span></span>
        <span>账号密码登录</span>
        <span></span>
      </div>
      <div>
        <el-form :model="form" >
          <el-form-item label="账号：" >
            <el-input  v-model="form.name"  placeholder="请输入您的账号"/>
          </el-form-item>
          <el-form-item label="密码：" >
            <el-input  v-model="form.password"  placeholder="请输入您的密码"/>
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
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: ''
})

const onSubmit = () => {
  console.log('submit!')
}
</script>

<style></style>
