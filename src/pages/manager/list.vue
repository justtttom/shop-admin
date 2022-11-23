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
        <el-button type="primary" @click="getData">搜索</el-button>
        <el-button @click="resetSearchForm">重置</el-button>
      </el-form-item>
    </el-form>

    <!-- 新增 刷新 -->
    <div class="flex justify-between items-center mb-4">
      <el-button type="primary" size="small" @click="handleCreate"
        >新增</el-button
      >
      <el-tooltip effect="dark" content="刷新数据" placement="top">
        <el-button text @click="getData">
          <el-icon :size="20">
            <Refresh />
          </el-icon>
        </el-button>
      </el-tooltip>
    </div>
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
          >
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180" align="center">
        <template #default="scope">
          <small v-if="scope.row.super == 1" class="text-sm text-gray-400">
            暂无操作
          </small>
          <div v-else >
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
                <el-button size="small" type="primary" @click="" text>
                  删除
                </el-button>
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
        <el-form-item label="用户名" prop="title">
          <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="content">
          <el-input
            v-model="form.content"
            placeholder="请输入密码"
            type="textarea"
            :rows="1"
          ></el-input>
        </el-form-item>
        <el-form-item label="头像" prop="content">
          <el-input
            v-model="form.content"
            placeholder="+"
            type="textarea"
            :rows="5"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="content">
          <el-input
            v-model="form.content"
            placeholder="公告内容"
            type="textarea"
            :rows="5"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="content">
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
import { ref, reactive, computed } from 'vue'
import FormDrawer from '~/components/FormDrawer.vue'
import { getManagerList, updateManagerStatus,addManager,
  updateManager,
  deleteManager } from '~/api/manager.js'

import { toast } from '~/composables/util.js'

const searchForm = reactive({
  keyword: ''
})
const resetSearchForm = () => {
  searchForm.keyword = ''
  getData()
}

const tableData = ref([])
const loading = ref(false)

// 分页
const currentPage = ref(1)
const total = ref(0)
const limit = ref(10)

// 获取数据
function getData(p = null) {
  if (typeof p == 'number') {
    currentPage.value = p
  }
  loading.value = true
  getManagerList(currentPage.value, searchForm)
    .then((res) => {
      tableData.value = res.list.map((o) => {
        o.statusLoading = false
        return o
      })
      total.value = res.totalCount
    })
    .finally(() => {
      loading.value = false
    })
}

getData()

const formDrawerRef = ref(null)
const formRef = ref(null)
const form = reactive({
  title: '',
  content: ''
})
const rules = {
  title: [],
  content: []
}
const editId = ref(0)
const drawerTitle = computed(() => (editId.value ? '修改' : '新增'))

const handleSubmit = () => {
  formRef.value.validate((valid) => {
    if (!valid) return
    formDrawerRef.value.showLoading()

    const fun = editId.value
      ? updateManager(editId.value, form)
      : addManager(form)

    fun
      .then((res) => {
        toast(drawerTitle.value + '成功!')
        // 修改刷新当前页，新增刷新第一页
        getData(editId.value ? false : 1)
        formDrawerRef.value.close()
      })
      .finally(() => {
        formDrawerRef.value.hideLoading()
      })
  })
}

// 重置表单
function resetForm(row = false) {
  if (formRef.value) formRef.value.clearValidate()
  if (row) {
    for (const key in form) {
      form[key] = row[key]
    }
  }
}

// 新增
const handleCreate = () => {
  editId.value = 0
  resetForm({
    title: '',
    content: ''
  })
  formDrawerRef.value.open()
}

// 修改
const handleEdit = (row) => {
  editId.value = row.id
  resetForm(row)
  formDrawerRef.value.open()
}

// 删除
const handleDelete = (id) => {
  loading.value = true
  deleteManager(id)
    .then((res) => {
      toast('删除成功！')
      getData()
    })
    .finally(() => {
      loading.value = false
    })
}

// 修改状态
const handleStatusChange = (status, row) => {
  row.statusLoading = true
  updateManagerStatus(row.id, status)
    .then((res) => {
      toast('修改状态成功！')
      row.status = status
    })
    .finally(() => {
      row.statusLoading = false
    })
}
</script>
