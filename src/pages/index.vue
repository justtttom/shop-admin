<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6" :offset="0" v-for="(item,index) in panels" :key="index">
        <el-card shadow="hover">
          <template #header>
            <div>
              <span>{{item.title}}</span>
              <el-tag :type="item.unitColor" effect="plain">
                {{ item.value }}
              </el-tag>
            </div>
          </template>
          <!-- card body -->
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { getStatistics1 } from '~/api/index.js'

const panels = ref([])
getStatistics1().then(res => {
  panels.value = res.panels
  console.log(panels.value);
})
</script>

<style>

</style>