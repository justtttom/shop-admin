<template>
  <el-aside width="220px" class="image-aside">
    <div class="top">
      <div class="aside-list">
        <span>分类标题</span>
        <el-button class="ml-auto px-1" text type="primary" size="small">
          <el-icon :size="12"><Edit /></el-icon>
        </el-button>
        <el-button text type="primary" size="small">
          <el-icon :size="12"><Close /></el-icon>
        </el-button>
      </div>
    </div>
    <div class="bottom">分页区域</div>
  </el-aside>
</template>

<style scoped>
.image-aside {
  border-right: 1px solid #eee;
  position: relative;
}
.image-aside .top {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 50px;
  overflow-y: auto;
}
.image-aside .bottom {
  @apply flex items-center justify-center;
  position: absolute;
  bottom: 0;
  height: 50px;
  right: 0;
  left: 0;
}
.aside-list{
  border-bottom: 1px solid #f4f4f4;
  cursor: pointer;
  @apply flex items-center p-3 text-sm text-gray-600;
}
</style>