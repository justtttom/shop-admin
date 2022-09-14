<template>
  <div class="common-layout">
    <el-container>
      <el-header class="bg-indigo-500 text-yellow-50">头部</el-header>
      <el-container>
        <el-aside width="300px" class="bg-yellow-300" >侧边栏</el-aside>
        <el-main class="bg-green-700">
          标签导航
          <router-view class="text-light-100">主要内容</router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
  import {FHeader} from './FHeader.vue'
  import {FMenu} from './FMenu.vue'
  import {FTagList} from './FTagList.vue'
</script>