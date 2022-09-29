<template>
  <div class="f-tag-list" :style="{ left: $store.state.asideWidth }">
    <el-tabs
      v-model="editableTabsValue"
      type="card"
      editable
      style="min-width:100px;"
    >
      <el-tab-pane
        v-for="item in editableTabs"
        :key="item.name"
        :label="item.title"
        :name="item.name"
      >
      </el-tab-pane>
    </el-tabs>
    <span class="tag-btn">
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>关闭菜单</el-dropdown-item>
            <el-dropdown-item>打开菜单</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </span>
  </div>
</template>
<script setup>
import { ref } from 'vue'

let tabIndex = 2
const editableTabsValue = ref('2')
const editableTabs = ref([
  {
    title: 'Tab 1',
    name: '1',
    content: 'Tab 1 content'
  },
  {
    title: 'Tab 2',
    name: '2',
    content: 'Tab 2 content'
  },
  {
    title: 'Tab 1',
    name: '3',
    content: 'Tab 1 content'
  },
  {
    title: 'Tab 2',
    name: '4',
    content: 'Tab 2 content'
  },
  {
    title: 'Tab 1',
    name: '5',
    content: 'Tab 1 content'
  },
  {
    title: 'Tab 2',
    name: '6',
    content: 'Tab 2 content'
  },
  {
    title: 'Tab 1',
    name: '5',
    content: 'Tab 1 content'
  },
  {
    title: 'Tab 2',
    name: '6',
    content: 'Tab 2 content'
  }
])


</script>
<style scoped>
.f-tag-list {
  @apply fixed bg-gray-200 flex items-center px-2;
  top: 64px;
  right: 0;
  height: 44px;
  z-index: 100;
}
.tag-btn {
  @apply bg-white rounded ml-auto flex items-center justify-center px-2;
  width: 32px;
  height: 32px;
}
:deep(.el-tabs__new-tab){
  display: none;
}
:deep(.el-tabs__header ){
  @apply  mb-0 mt-1;
}
:deep(.el-tabs__nav) {
  border: 0!important;
}
:deep(.el-tabs__item) {
  border: 0!important;
  height: 32px;
  line-height: 32px;
  @apply bg-white mx-1 rounded;
}
:deep(.el-tabs__nav-next),:deep(.el-tabs__nav-prev){
  line-height: 32px;
}
:deep(.is-disabled){
  cursor: not-allowed;
  @apply text-red-300;
}
</style>
