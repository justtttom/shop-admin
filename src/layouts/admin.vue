<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <f-header />
      </el-header>
      <el-container>
        <el-aside width="300px" class="bg-yellow-300">
          <f-menu />
        </el-aside>
        <el-main class="bg-green-700">
          <f-tag-list />
          <router-view class="text-light-100"> </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import FHeader from './FHeader.vue'
import FMenu from './FMenu.vue'
import FTagList from './FTagList.vue'
</script>
