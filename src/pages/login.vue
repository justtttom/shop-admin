<template>
  <el-row class="login-container">
    <el-col :lg="16" :md="12" class="left">
      <div>
        <div class="title">欢迎来到 hello 学习平台 👏🏻</div>
        <div class="description">
          此站点是为了学习《vite + vue3实战商城后台开发》
        </div>
      </div>
    </el-col>
    <el-col :lg="8" :md="12" class="right">
      <h2 class="title">欢迎回来</h2>
      <div class="container">
        <span class="span-line"></span>
        <span>账号密码登录</span>
        <span class="span-line"></span>
      </div>
      <div>
        <el-form ref="formRef" :rules="rules" :model="form" class="w-[250px]">
          <el-form-item prop="username" label="账号：">
            <el-input v-model="form.username" placeholder="请输入用户名">
              <template #prefix>
                <el-icon class="el-input__icon"
                  ><el-icon><User /></el-icon
                ></el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password" label="密码：">
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
              :loading="loading"
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
import { ref, reactive } from 'vue'
import { login, getInfo } from '~/api/manager'
import { useRouter } from 'vue-router'
import {useStore} from 'vuex'
import { setToken } from '~/composables/auth'
import { toast } from '~/composables/util'

const router = useRouter()

const store = useStore()

// do not use same name with ref
const form = reactive({
  username: '',
  password: ''
})

const rules = {
  username: [
    { required: true, message: '用户名不能为空', trigger: 'blur' }
    // { min: 3, max: 5, message: '用户名长度必须是3-5个字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur' }
    // { min: 8, max: 16, message: '用户名长度必须是8-16个字符', trigger: 'blur' }
  ]
}

const formRef = ref(null)
const loading = ref(false)

const onSubmit = () => {
  formRef.value.validate((valid) => {
    if (!valid) {
      return false
    }
    loading.value = true
    login(form.username, form.password)
      .then((res) => {
        console.log(res)
        // 提示成功
        toast('登录成功')

        // 存储用户的token和用户相关信息
        setToken(res.token)

        //获取用户相关信息
        getInfo().then((res2) => {
          store.commit("SET_USERINFO",res2)
          console.log(res2)
        })

        // 跳转到后台首页
        router.push('/')
      })
      .finally(() => {
        loading.value = false
      })
  })
}
</script>

<style>
.login-container {
  @apply min-h-screen bg-indigo-400;
}
.login-container .left,
.login-container .right {
  @apply flex items-center justify-center;
}
.login-container .right {
  @apply bg-indigo-50 flex-col;
}
.left .title {
  @apply font-bold text-6xl text-light-100 mb-5;
}
.left .description {
  @apply text-2xl text-gray-300;
}
.right .title {
  @apply text-4xl text-dark-50 font-bold;
}
.right .container {
  @apply flex items-center justify-center my-5 text-gray-400 space-x-2;
}
.right .span-line {
  @apply h-[1px] w-16 bg-gray-400;
}
</style>
