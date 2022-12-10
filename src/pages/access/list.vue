<template>
  <el-card shadow="never" class="border-0">
      <!-- 新增 刷新 -->
      <ListHeader @refresh="getData"/>
      <!-- <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" /> -->
  </el-card>
</template>

<script setup >
  import ListHeader from '~/components/ListHeader.vue'
  import {getRuleList} from '~/api/rule.js'
  import {useInitTable} from '~/composables/useCommon'

  const {
    loading,
    tableData,
    getData,
  } = useInitTable({
    getList:getRuleList,
  })
</script>