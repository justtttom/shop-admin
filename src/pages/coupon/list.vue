<template>
  <el-card shadow="never" class="border-0">
    <!-- 新增|刷新 -->
    <ListHeader @create="handleCreate" @refresh="getData" />
    <el-table :data="tableData" stripe style="width: 100%;" v-loading="loading">
      <el-table-column prop="name" label="优惠券名称" width="350"/>
      <el-table-column prop="type" label="状态"/> 
      <el-table-column prop="value" label="优惠" />
      <el-table-column prop="total" label="发放数量" />
      <el-table-column prop="used" label="已使用" width="180" />
      <el-table-column label="操作" width="180" align="center">
        <template #default="scope">
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
import ListHeader from '~/components/ListHeader.vue'
import FormDrawer from '~/components/FormDrawer.vue'
import {
  getCouponList,
  addCoupon,
  updateCoupon,
  deleteCoupon
} from '~/api/coupon.js'
import { useInitTable, useInitForm } from '~/composables/useCommon'

// 列表、分页、删除
const {
  tableData,
  loading,
  currentPage,
  total,
  limit,
  handleDelete,
  getData
} = useInitTable({
  getlist: getCouponList,
  delete: deleteCoupon
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
    title: '',
    content: ''
  },
  rules: {
    title: [
      {
        required: true,
        message: '公告标题不能为空',
        trigger: 'blur'
      }
    ],
    content: [
      {
        required: true,
        message: '公告内容不能为空',
        trigger: 'blur'
      }
    ]
  },
  getData,
  update: updateCoupon,
  add: addCoupon
})
</script>
