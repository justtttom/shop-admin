<template>
  <el-card shadow="hover" class="border-0">
    <div class="flex justify-between items-center mb-4">
      <el-button type="primary" size="small" @click="">新增</el-button>
      <el-tooltip
        class="box-item"
        effect="dark"
        content="点击刷新"
        placement="top-start"
      >
        <el-button text>
          <el-icon><RefreshRight /></el-icon>
        </el-button>
      </el-tooltip>
    </div>
  </el-card>
  
</template>