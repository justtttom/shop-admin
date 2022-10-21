<template>
    <div class="aside-list">
      <span class="truncate">分类标题</span>
      <el-button class="ml-auto px-1" text type="primary" size="small">
        <el-icon :size="12"><Edit /></el-icon>
      </el-button>
      <el-button text type="primary" size="small">
        <el-icon :size="12"><Close /></el-icon>
      </el-button>
    </div>
    <div class="aside-list active">
        <span class="truncate">分类标题</span>
        <el-button class="ml-auto px-1" text type="primary" size="small">
          <el-icon :size="12"><Edit /></el-icon>
        </el-button>
        <el-button text type="primary" size="small">
          <el-icon :size="12"><Close /></el-icon>
        </el-button>
      </div>
</template>

<style scoped>
.aside-list {
  border-bottom: 1px solid #f4f4f4;
  cursor: pointer;
  @apply flex items-center p-3 text-sm text-gray-600;
}
.aside-list:hover,
.active {
  @apply bg-blue-50;
}
</style>