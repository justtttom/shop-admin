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
  <el-container class="bg-white rounded" style="height:70vh;">
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
      <ImageMain ref="imageMainRef" @choose="handleChoose"/>
    </el-container>
  </el-container>
    <template #footer>
      <span>
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="submit">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup>
import { ref } from 'vue'
import ImageAside from './ImageAside.vue';
import ImageMain from './ImageMain.vue';


const dialogVisible = ref(false)

const open = ()=>{
  dialogVisible.value = true
}

const submit = ()=>{
  console.log("object");
}

const ImageAsideRef = ref(null)

const handleOpenCreate = ()=>{
  ImageAsideRef.value.handleCreate()
}

const imageMainRef = ref(null)
const handleAsideChange = (image_class_id)=>{
  imageMainRef.value.loadData(image_class_id)
}

const handleOpenUpload = ()=>{
  imageMainRef.value.openUploadFile()
}

const props =  defineProps({
  modelValue:[String,Array]
})
const emit = defineEmits(["update:modelValue"])
const handleChoose = (e)=>{
  let urls = []
  e.map(o=>o.url)
}
</script>

<style>
.choose-image-btn {
  @apply w-[100px] h-[100px]
   rounded border flex justify-center 
   items-center cursor-pointer hover:bg-light-100;
}
.image-header {
  border-bottom: 1px solid #eee;
  @apply flex items-center;
}
</style>
