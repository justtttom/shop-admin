<template>
  <div class="choose-image-btn" @click="open">
    <el-icon :size="25" class="text-green-400"><Plus /></el-icon>
  </div>
  <el-dialog
    title="选择图片"
    v-model="dialogVisible"
    width="80%"
    top="5vh"
  >
  <el-container class="bg-white rounded" :style="{ height: h + 'px' }">
    <el-header class="image-header">
      <el-button type="primary" size="small" @click="handleOpenCreate">
        新增图片分类
      </el-button>
      <el-button type="warning" size="small" @click="handleOpenUpload">
        上传图片
      </el-button>
    </el-header>
    <el-container>
      <ImageAside ref="ImageAsideRef" @change="handleAsideChange"/>
      <ImageMain ref="imageMainRef"/>
    </el-container>
  </el-container>
    <template #footer>
      <span>
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="submit">OK</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup>
import { ref } from 'vue'
import ImageAside from './ImageAside.vue';
import ImageMain from './ImageAside.vue';

const dialogVisible = ref(false)

const open = ()=>{
  dialogVisible.value = true
}

const submit = ()=>{

}
</script>

<style>
.choose-image-btn {
  @apply w-[100px] h-[100px]
   rounded border flex justify-center 
   items-center cursor-pointer hover:bg-light-100;
}
</style>
