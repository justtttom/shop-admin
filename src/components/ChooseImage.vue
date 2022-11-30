<template>
  <div class="choose-image-btn">
    <el-icon :size="25" class="text-green-400"><Plus /></el-icon>
  </div>
  <el-dialog
    title="选择图片"
    v-model="dialogVisible"
    width="80%"
  >
    <span></span>
    <template #footer>
      <span>
        <el-button @click=" false">Cancel</el-button>
        <el-button type="primary" @click="">OK</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup>
import { ref } from 'vue'

const dialogVisible = ref(false)
</script>

<style>
.choose-image-btn {
  @apply w-[100px] h-[100px]
   rounded border flex justify-center 
   items-center cursor-pointer hover:bg-light-100;
}
</style>
