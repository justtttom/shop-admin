<template>
  <el-card shadow="hover" class="border-0">
    <div class="flex justify-between items-center mb-4">
      <el-button type="primary" size="small" @click="">新增</el-button>
      <el-tooltip effect="dark" content="刷新数据" placement="top-start">
        <el-button text>
          <el-icon :size="20"><Refresh /></el-icon>
        </el-button>
      </el-tooltip>
    </div>
    <el-table :data="tableData" stripe style="width: 100%;">
      <el-table-column prop="date" label="公告标题" width="180" />
      <el-table-column prop="name" label="发布时间" width="180" />
      <el-table-column prop="address" label="操作" />
    </el-table>
  </el-card>
</template>

<script setup>
  
</script>