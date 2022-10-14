<template>
  <el-card shadow="never" class="mt-5">
    <template #header>
      <div class="flex flex-1 justify-center items-center">
        <span class="text-sm">订单统计</span>
        <div>
          <el-check-tag
            v-for="(item, index) in options"
            :key="index"
            :checked="current == item.value"
            style="margin-right: 8px"
          >
            {{ item.text }}
          </el-check-tag>
        </div>
      </div>
    </template>
  </el-card>
</template>

<script setup>
import { ref } from 'vue'

const current = ref("week");
const options = [
  {
    text: "近一个月",
    value: "month",
  },
  {
    text: "近一周",
    value: "week",
  },
  {
    text: "近24小时",
    value: "hour",
  },
];
</script>