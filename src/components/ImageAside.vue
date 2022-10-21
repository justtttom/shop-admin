<template>
  <el-aside width="220px" class="image-aside">
    <div class="top">
      <AsideList> 分类标题 </AsideList>
      <AsideList active> 分类标题 </AsideList>
    </div>
    <div class="bottom">分页区域</div>
  </el-aside>
</template>
<script setup>
import AsideList from "./AsideList.vue";
import { getImageClassList } from "~/api/image_class.js";

// 加载动画

// 获取数据
function getData() {
  getImageClassList(1).then(res=>{
    console.log(res);
  })
}
getData()
</script>
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
</style>