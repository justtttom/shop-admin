<template>
   <el-card shadow="never" class="border-0">
    <!-- 新增 刷新 -->
    <ListHeader @create="handleCreate" @refresh="getData" />
  </el-card>
</template>

<script setup >
  import { useInitTable, useInitForm } from '~/composables/useCommon'
  import ListHeader from '~/components/ListHeader.vue'
</script>