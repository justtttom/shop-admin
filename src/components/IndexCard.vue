<template>
  <el-card shadow="never" class="mt-5">
    <template #header>
      <div class="flex justify-between">
        <span class="text-sm">{{ title }}</span>
        <el-tag :type="danger" effect="plain">
          {{ tip }}
        </el-tag>
      </div>
    </template>
  </el-card>
  <el-row :gutter="20">
    <el-col :span="6" :offset="0">
      <el-card shadow="hover">
        <div class="flex flex-col items-center justify-center">
          <span>3</span>
          <span>待付款</span>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup>
defineProps({
  title: String,
  tip: String,
});
</script>