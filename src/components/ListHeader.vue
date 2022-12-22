<template>
  <div class="flex justify-between items-center mb-4">
    <div>
      <el-button type="success" size="small" @click="$emit('create')">
      新增
    </el-button>
    <el-button type="danger" size="small" @click="$emit('create')">
      批量删除
    </el-button></div>
    <el-tooltip effect="dark" content="刷新数据" placement="top">
      <el-button text @click="$emit('refresh')">
        <el-icon :size="20">
          <Refresh />
        </el-icon>
      </el-button>
    </el-tooltip>
  </div>
</template>

<script setup>
defineEmits(['create', 'refresh'])
</script>
