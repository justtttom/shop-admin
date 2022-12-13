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
        <div class="custom-tree-node ">
          <el-tag :type="data.menu ? '' : 'info'" size="small">
            {{ data.menu ? '菜单' : '权限' }}
          </el-tag>
          <el-icon v-if="data.icon" :size="16" class="ml-2">
          <component :is="data.icon"/>
          </el-icon>
          <span>{{data.name}}</span>

          <div class="ml-auto">
          <el-switch :modelValue="data.status" :active-value="1" :inactive-value="0"/>
          <el-button text type="primary" size="small" @click="handleEdit">修改</el-button>
          <el-button text type="primary" size="small" @click="handleCreate">增加</el-button>
          <el-button text type="primary" size="small"  >删除</el-button>
          </div>
        </div>
      </template>
    </el-tree>

    <FormDrawer ref="formDrawerRef" :title="drawerTitle" @submit="handleSubmit">
      <el-form
        :model="form"
        ref="formRef"
        :rules="rules"
        label-width="80px"
        :inline="false"
      >
        <el-form-item label="公告标题" prop="title">
          <el-input v-model="form.title" placeholder="公告标题"></el-input>
        </el-form-item>
        <el-form-item label="公告内容" prop="content">
          <el-input
            v-model="form.content"
            placeholder="公告内容"
            type="textarea"
            :rows="5"
          ></el-input>
        </el-form-item>
      </el-form>
    </FormDrawer>
  </el-card>
</template>

<script setup>
import { ref } from 'vue'
import ListHeader from '~/components/ListHeader.vue'
import FormDrawer from '~/components/FormDrawer.vue'
import { getRuleList,addRule,updateRule } from '~/api/rule.js'
import { useInitTable,useInitForm } from '~/composables/useCommon'

const defaultExpandedkeys = ref([])

const { loading, tableData, getData } = useInitTable({
  getlist: getRuleList,
  onGetListSuccess: (res) => {
    tableData.value = res.list
    defaultExpandedkeys.value = res.list.map((o) => o.id)
    console.log(res)
  }
})

const {formDrawerRef,
    formRef,
    form,
    rules,
    editId,
    drawerTitle,
    handleSubmit,
    resetForm,
    handleCreate,
    handleEdit} = useInitForm({
  add:addRule,
  update:updateRule
})
</script>

<style>
.custom-tree-node{
  flex:1;
  display: flex;
  align-items: center;
  font-size: 14px;
  padding-right: 8px;
}
.el-tree-node__content{
  padding: 20px 0;
}
</style>