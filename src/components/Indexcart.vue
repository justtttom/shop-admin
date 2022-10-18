<template>
  <el-card shadow="never">
    <template #header>
      <div class="flex justify-between">
        <span class="text-sm">{{title }}</span>
        <el-tag :type="danger" effect="plain">
          {{tip}}
        </el-tag>
      </div>
    </template>
  </el-card>
</template>

<script setup>
  defineProps({
    title:string,
    tip:string,
  })
</script>