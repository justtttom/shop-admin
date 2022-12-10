<template>
  <el-card shadow="never" class="border-0">
      <!-- 新增 刷新 -->
      <ListHeader/>
      <!-- <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" /> -->
  </el-card>
</template>

<script setup >
  import ListHeader from '~/components/ListHeader.vue'
</script>