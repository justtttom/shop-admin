<template>
  <el-card shadow="never" class="border-0">
    <!-- 新增|刷新 -->
    <ListHeader @create="handleCreate" @refresh="getData" />
    <el-table :data="tableData" stripe style="width: 100%;" v-loading="loading">
      <el-table-column prop="name" label="角色名称" />
      <el-table-column prop="desc" label="角色描述" width="380" />
      <el-table-column label="状态" width="120">
        <template #default="{ row }">
          <el-switch
            :modelValue="row.status"
            :active-value="1"
            :inactive-value="0"
            :loading="row.statusLoading"
            :disabled="row.super == 1"
            @change="handleStatusChange($event, row)"
            style="--el-switch-on-color: #13ce66;"
          >
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="280" align="center">
        <template #default="scope">
          <el-button
            size="small"
            type="primary"
            @click="openSetRule(scope.row)"
            text
            >配置权限</el-button
          >
          <el-button
            size="small"
            type="primary"
            @click="handleEdit(scope.row)"
            text
            >修改</el-button
          >
          <el-popconfirm
            title="是否要删除该公告？"
            confirm-button-text="确定"
            cancel-button-text="取消"
            width="20"
            @confirm="handleDelete(scope.row.id)"
          >
            <template #reference>
              <el-button size="small" type="primary" text>删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <div class="flex items-center justify-center mt-5">
      <el-pagination
        background
        layout="prev, pager,next"
        :total="total"
        :current-page="currentPage"
        :page-size="limit"
        @current-change="getData"
      />
    </div>
    <!-- 新增 修改  -->
    <FormDrawer ref="formDrawerRef" :title="drawerTitle" @submit="handleSubmit">
      <el-form
        :model="form"
        ref="formRef"
        :rules="rules"
        label-width="80px"
        :inline="false"
      >
        <el-form-item label="角色名称" prop="name">
          <el-input v-model="form.name" placeholder="角色名称"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" prop="desc">
          <el-input
            v-model="form.desc"
            placeholder="角色描述"
            type="textarea"
            :rows="5"
          ></el-input>
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-switch
            v-model="form.status"
            :active-value="1"
            :inactive-value="0"
            style="--el-switch-on-color: #13ce66;"
          >
          </el-switch>
        </el-form-item>
      </el-form>
    </FormDrawer>

<!-- 权限配置 -->
    <FormDrawer ref="setRuleFormDrawerRef" title="权限配置" @submit="handleSetRuleSubmit">
      11
    </FormDrawer>
  </el-card>
</template>

<script setup>
import { ref } from 'vue'
import ListHeader from '~/components/ListHeader.vue'
import FormDrawer from '~/components/FormDrawer.vue'
import {
  getRoleList,
  addRole,
  updateRole,
  deleteRole,
  updateRoleStatus
} from '~/api/role.js'
import {
  getRuleList,
} from '~/api/rule.js'
import { useInitTable, useInitForm } from '~/composables/useCommon'

// 列表、分页、删除
const {
  tableData,
  loading,
  currentPage,
  total,
  limit,
  handleDelete,
  handleStatusChange,
  getData
} = useInitTable({
  getlist: getRoleList,
  delete: deleteRole,
  updateStatus: updateRoleStatus
})

// 新增、修改
const {
  formDrawerRef,
  formRef,
  form,
  rules,
  drawerTitle,
  handleSubmit,
  handleCreate,
  handleEdit
} = useInitForm({
  form: {
    name: '',
    staus: 1,
    desc: ''
  },
  rules: {
    name: [
      {
        required: true,
        message: '角色名称不能为空',
        trigger: 'blur'
      }
    ]
  },
  getData,
  update: updateRole,
  add: addRole
})

const setRuleFormDrawerRef = ref(null)
const openSetRule = (row)=>{
  setRuleFormDrawerRef.value.open()
  getRuleList(1).then(res=>{
    console.log(res);
  }).finally(res=>{
    
  })
}
const handleSetRuleSubmit = ()=>{

}

</script>
