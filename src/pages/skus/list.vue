<template>
  <el-card shadow="never" class="border-0">
    <!-- 新增|刷新 -->
    <ListHeader
      layout="create,delete,refresh"
      @create="handleCreate"
      @refresh="getData"
      @delete="handleMutiDelete"
    />
    <el-table
      ref="mutipleTableRef"
      :data="tableData"
      stripe
      style="width: 100%;"
      v-loading="loading"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column prop="name" label="规格名称" width="180" />
      <el-table-column prop="default" label="规格值" width="280" />
      <el-table-column prop="order" label="排序" width="180" />
      <el-table-column label="状态" width="180">
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
            @click="handleEdit(scope.row)"
            text
            >修改</el-button
          >
          <el-popconfirm
            title="是否要删除该规格？"
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
    <FormDrawer
      destroyOnClose
      ref="formDrawerRef"
      :title="drawerTitle"
      @submit="handleSubmit"
    >
      <el-form
        :model="form"
        ref="formRef"
        :rules="rules"
        label-width="80px"
        :inline="false"
      >
        <el-form-item label="规格名称" prop="name">
          <el-input v-model="form.name" placeholder="规格名称"></el-input>
        </el-form-item>
        <el-form-item label="排序" prop="order">
          <el-input-number v-model="form.order" :min="1" :max="1000" />
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
        <el-form-item label="规格值" prop="default">
          <TagInput v-model="form.default" />
          {{ form.default }}
        </el-form-item>
      </el-form>
    </FormDrawer>
  </el-card>
</template>

<script setup>
import { ref } from 'vue'
import ListHeader from '~/components/ListHeader.vue'
import FormDrawer from '~/components/FormDrawer.vue'
import TagInput from '~/components/TagInput.vue'
import {
  getSkusList,
  addSkus,
  updateSkus,
  deleteSkus,
  updateSkusStatus
} from '~/api/skus.js'
import { useInitTable, useInitForm } from '~/composables/useCommon'
import { toast } from '~/composables/util.js'

// 列表、分页、删除
const {
  tableData,
  loading,
  currentPage,
  total,
  limit,
  handleDelete,
  handleStatusChange,
  getData,
  handleSelectionChange,
  handleMutiDelete
} = useInitTable({
  getlist: getSkusList,
  delete: deleteSkus,
  updateStatus: updateSkusStatus
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
    default: '',
    order: 50
  },
  rules: {
    name: [
      {
        required: true,
        message: '规格名称不能为空',
        trigger: 'blur'
      }
    ],
    default: [
      {
        required: true,
        message: '规格值不能为空',
        trigger: 'blur'
      }
    ]
  },
  getData,
  update: updateSkus,
  add: addSkus
})
</script>

<style>
.el-tree-node__content {
  padding: 0;
}
</style>
