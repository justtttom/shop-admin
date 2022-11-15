<template>
  <el-card shadow="never" class="border-0">
    <div class="flex justify-between items-center mb-4">
      <el-button type="primary" size="small" @click="handleCreate">新增</el-button>
      <el-tooltip effect="dark" content="刷新数据" placement="top">
        <el-button text @click="getData">
          <el-icon :size="20">
            <Refresh />
          </el-icon>
        </el-button>
      </el-tooltip>
    </div>
    <el-table :data="tableData" stripe style="width: 100%" v-loading="loading">
      <el-table-column label="管理员" width="200">
        <template #default="{ row }">
          <div class="flex items-center">
            <el-avatar :size="30" :src="row.avatar">
              <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
            </el-avatar>
            <div class="ml-3">
              <h6>{{row.username}}</h6>
              <small>ID:{{row.id}}</small>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="create_time" label="所属管理员" width="160" />
      <el-table-column prop="" label="状态" width="200" />
      <el-table-column label="操作" width="380" align="center">
        <template #default="scope">
          <el-button size="small" type="primary" @click="handleEdit(scope.row)" text>修改</el-button>
          <el-popconfirm title="是否要删除该公告？" confirm-button-text="确定" cancel-button-text="取消" width="20"
            @confirm="handleDelete(scope.row.id)">
            <template #reference>
              <el-button size="small" type="primary" @click="" text>删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <div class="flex items-center justify-center mt-5">
      <el-pagination background layout="prev, pager,next" :total="total" :current-page="currentPage" :page-size="limit"
        @current-change="getData" />
    </div>
    <FormDrawer ref="formDrawerRef" :title="drawerTitle" @submit="handleSubmit">
      <el-form :model="form" ref="formRef" :rules="rules" label-width="80px" :inline="false">
        <el-form-item label="公告标题" prop="title">
          <el-input v-model="form.username" placeholder="公告标题"></el-input>
        </el-form-item>
        <el-form-item label="公告内容" prop="content">
          <el-input v-model="form.content" placeholder="公告内容" type="textarea" :rows="5"></el-input>
        </el-form-item>
      </el-form>
    </FormDrawer>
  </el-card>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import FormDrawer from '~/components/FormDrawer.vue'
import { getManagerList } from '~/api/manager.js'
import {
  getNoticeList,
  addNoticeList,
  updateNoticeList,
  deleteNoticeList
} from '~/api/notice.js'
import { toast } from '~/composables/util.js'

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
  getManagerList(currentPage.value, { limit: 10, keyword: "" })
    .then((res) => {
      console.log(res);
      tableData.value = res.list
      total.value = res.roles
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
      ? updateNoticeList(editId.value, form)
      : addNoticeList(form)

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
  deleteNoticeList(id)
    .then((res) => {
      toast('删除成功！')
      getData()
      console.log(res)
    })
    .finally(() => {
      loading.value = false
    })
}
</script>
