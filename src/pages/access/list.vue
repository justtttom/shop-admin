<template>
  <el-card shadow="never" class="border-0">
      <!-- 新增 刷新 -->
      <div class="flex justify-between items-center mb-4">
      <el-button type="success" size="small" @click=""
        >新增</el-button
      >
      <el-tooltip effect="dark" content="刷新数据" placement="top">
        <el-button text @click="">
          <el-icon :size="20">
            <Refresh />
          </el-icon>
        </el-button>
      </el-tooltip>
    </div>
  </el-card>
  
</template>