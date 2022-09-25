<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <f-header/>
      </el-header>
      <el-container>
        <el-aside>
          <f-menu />
        </el-aside>
        <el-main class="bg-green-800">
          <f-tag-list />
          <router-view class="text-light-100"> </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import FHeader from './components/FHeader.vue'
import FMenu from './components/FMenu.vue'
import FTagList from './components/FTagList.vue'
const newLocal = 'el-aside';
</script>
