<template>
  <el-upload
    drag
    :action="uploadImageAction"
    multiple
    :headers="{
      token
    }"
    name="img"
    :data="data"
    :on-success="uploadSuccess"
    :on-error="uploadError"
  >
    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
    <div class="el-upload__text">拖拽图片到此处或 <em>点击上传</em></div>
    <template #tip>
      <div class="el-upload__tip">
        jpg/png 格式文件且小于500k
      </div>
    </template>
  </el-upload>
</template>

<script setup>
import { uploadImageAction } from '~/api/image.js'
import { getToken } from '~/composables/auth.js'
const token = getToken()
defineProps({
  data: Object
})

const emit = defineEmits(['success'])

// 上传成功
const uploadSuccess = (response, uploadFile, uploadFiles) => {
  console.log(response);
  emit('success', { response, uploadFile, uploadFiles })
}

// 上传失败
const uploadError = (error, uploadFile, uploadFiles) => {
  console.log(error);
}
</script>
