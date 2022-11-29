<template>
  <div class="choose-image-btn">
    <el-icon :size="25"><Plus /></el-icon>
  </div>
</template>

<style>
.choose-image-btn{
  @apply w-[100px] h-[100px]
   rounded border flex justify-center 
   items-center cursor-pointer hover:bg-light-100;
}
</style>