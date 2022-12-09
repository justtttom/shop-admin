<template>
  <el-card shadow="never" class="border-0">
    <el-form
      :model="searchForm"
      label-width="80px"
      size="small"
      class="mb-3 flex justify-between"
    >
      <el-form-item label="关键词:">
        <el-input
          v-model="searchForm.keyword"
          placeholder="管理员昵称"
          clearable
          class="w-70"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="getData">搜索</el-button>
        <el-button @click="resetSearchForm">重置</el-button>
      </el-form-item>
    </el-form>

    
    <el-table :data="tableData" stripe style="width: 100%;" v-loading="loading">
      <el-table-column label="管理员" width="200">
        <template #default="{ row }">
          <div class="flex items-center">
            <el-avatar :size="30" :src="row.avatar">
              <img
                src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
              />
            </el-avatar>
            <div class="ml-3">
              <h6>{{ row.username }}</h6>
              <small>ID:{{ row.id }}</small>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="所属管理员" align="center">
        <template #default="{ row }">
          {{ row.role?.name || '-' }}
        </template>
      </el-table-column>
      <el-table-column label="状态" width="380">
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
      <el-table-column label="操作" width="180" align="center">
        <template #default="scope">
          <small v-if="scope.row.super == 1" class="text-sm text-gray-400">
            暂无操作
          </small>
          <div v-else>
            <el-button
              size="small"
              type="primary"
              @click="handleEdit(scope.row)"
              text
            >
              修改
            </el-button>
            <el-popconfirm
              title="是否要删除该管理员？"
              confirm-button-text="确定"
              cancel-button-text="取消"
              width="20"
              @confirm="handleDelete(scope.row.id)"
            >
              <template #reference>
                <el-button size="small" type="primary" text> 删除 </el-button>
              </template>
            </el-popconfirm>
          </div>
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
    <FormDrawer ref="formDrawerRef" :title="drawerTitle" @submit="handleSubmit">
      <el-form
        :model="form"
        ref="formRef"
        :rules="rules"
        label-width="80px"
        :inline="false"
      >
        <el-form-item label="用户名" prop="username">
          <el-input
            v-model="form.username"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="头像" prop="avatar">
          <ChooseImage v-model="form.avatar" />
        </el-form-item>
        <el-form-item label="所属角色" prop="role_id">
          <el-select
            v-model="form.role_id"
            class="m-2"
            placeholder="选择所属角色"
            size="small"
          >
            <el-option
              v-for="item in roles"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-switch
            v-model="form.status"
            :active-value="1"
            :inactive-value="0"
            @change=""
            style="--el-switch-on-color: #13ce66;"
          >
          </el-switch>
        </el-form-item>
      </el-form>
    </FormDrawer>
  </el-card>
</template>

<script setup>
import { ref } from 'vue'
import FormDrawer from '~/components/FormDrawer.vue'
import ChooseImage from '~/components/ChooseImage.vue'
import {
  getManagerList,
  updateManagerStatus,
  addManager,
  updateManager,
  deleteManager
} from '~/api/manager.js'
import { toast } from '~/composables/util.js'
import { useInitTable, useInitForm } from '~/composables/useCommon'

const roles = ref([])

//列表、分页、搜索、删除、状态更新
const {
  searchForm,
  resetSearchForm,
  tableData,
  loading,
  currentPage,
  total,
  limit,
  getData
} = useInitTable({
  searchForm: {
    keyword: ''
  },
  getlist: getManagerList,
  delete:deleteManager,
  updateStatus:updateManagerStatus,
  onGetListSuccess: (res) => {
    tableData.value = res.list.map((o) => {
      o.statusLoading = false
      return o
    })
    total.value = res.totalCount
    roles.value = res.roles
  }
})

//新增、修改
const {
  formDrawerRef,
  formRef,
  form,
  rules,
  drawerTitle,
  handleSubmit,
  handleCreate,
  handleEdit,
  handleDelete,
  handleStatusChange
} = useInitForm({
  form: {
    username: '',
    password: '',
    role_id: null,
    status: 1,
    avatar: ''
  },
  rules: {
    username: [
      {
        required: true,
        message: '用户名不能为空',
        trigger: 'blur'
      }
    ],
    password: [
      {
        required: true,
        message: '密码不能为空',
        trigger: 'blur'
      }
    ]
  },
  getData,
  update: updateManager,
  add: addManager
})
</script>
