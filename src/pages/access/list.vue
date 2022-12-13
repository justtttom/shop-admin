<template>
  <el-card shadow="never" class="border-0">
    <!-- 新增 刷新 -->
    <ListHeader @refresh="getData" />
    <el-tree
      :data="tableData"
      :props="{ label: 'name', children: 'child' }"
      v-loading="loading"
      node-key="id"
      :default-expanded-keys="defaultExpandedkeys"
    >
      <template #default="{ node, data }">
        <div>
          <el-tag :type="data.menu ? '' : 'info'" size="small">
            {{ data.menu ? '菜单' : '权限' }}
          </el-tag>
          <el-icon v-if="data.icon" :size="16" class="ml-2">
          <component :is="data.icon"/>
          </el-icon>
          <span>{{data.name}}</span>
        </div>
      </template>
    </el-tree>
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
  onGetListSuccess: (res) => {
    tableData.value = res.list
    defaultExpandedkeys.value = res.list.map((o) => o.id)
    console.log(res)
  }
})
</script>
