<template>
  <el-card shadow="never">
    <template #header>
      <div class="flex justify-between">
        <span class="text-sm">{{ title }}</span>
        <el-tag type="warning" effect="plain">
          {{ tip }}
        </el-tag>
      </div>
    </template>
    <el-row :gutter="20">
      <el-col :span="6" :offset="0">
        <el-card shadow="hover" class="border-0 bg-light-100">
          <div class="flex flex-col items-center justify-center">
            <span class="text-xl mb-2">3</span>
            <span class="text-xs text-gray-600">待付款</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </el-card>
</template>

<script setup>
defineProps({
  title: String,
  tip: String,
});
</script>