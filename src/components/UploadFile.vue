<template>
  <el-upload
    drag
    :action="uploadImageAction"
    multiple
    :headers="{
      token
    }"
  >
    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
    <div class="el-upload__text">
      拖拽图片到此处或 <em>点击上传</em>
    </div>
    <template #tip>
      <div class="el-upload__tip">
        jpg/png 格式文件且小于500k
      </div>
    </template>
  </el-upload>
</template>

<script setup>
import {uploadImageAction} from '~/api/image.js'
import {getToken} from "~/composables/auth.js"
const token  = getToken()
</script>
