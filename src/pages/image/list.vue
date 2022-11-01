<template>
  <el-container class="bg-white rounded" :style="{ height: h + 'px' }">
    <el-header class="image-header">
      <el-button type="primary" size="small" @click="handleOpenCreate">
        新增图片分类
      </el-button>
      
    </el-header>
    <el-container>
      <ImageAside ref="ImageAsideRef" @change="handleAsideChange"/>
      <ImageMain ref="imageMainRef"/>
    </el-container>
  </el-container>
</template>

<script setup>
import { ref } from 'vue';
import ImageAside from '~/components/ImageAside.vue'
import ImageMain from '~/components/ImageMain.vue'

const windowHeight = window.innerHeight || document.body.clientHeight;
const h = windowHeight - 60 - 44 - 40;

const ImageAsideRef = ref(null)

const handleOpenCreate = ()=>{
  ImageAsideRef.value.handleCreate()
}

const imageMainRef = ref(null)
const handleAsideChange = (image_class_id)=>{
  imageMainRef.value.loadData(image_class_id)
}
</script>

<style scoped>
.image-header {
  border-bottom: 1px solid #eee;
  @apply flex items-center;
}
</style>