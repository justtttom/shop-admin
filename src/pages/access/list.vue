<template>
  <el-card shadow="never" class="border-0">
    <!-- 新增 刷新 -->
    <ListHeader @refresh="getData" />
    <el-tree
      :data="tableData"
      :props="{ label: 'name', children: 'child' }"
      v-loading="loading"
      node-key="id"
      :default-checked-keys="defaultExpandedkeys"
    />
  </el-card>
</template>

<script setup>
import { ref } from 'vue'
import ListHeader from '~/components/ListHeader.vue'
import { getRuleList } from '~/api/rule.js'
import { useInitTable } from '~/composables/useCommon'

const defaultExpandedkeys = ref([])
const { loading, tableData, getData } = useInitTable({
  getlist: getRuleList,
  onGetListSuccess:(res)=>{
    console.log(res);
  }
})
</script>
