<template>
  <div class="flex justify-between items-center mb-4">
    <div>
      <el-button
        v-if="btns.includes('create')"
        type="success"
        size="small"
        @click="$emit('create')"
      >
        新增
      </el-button>
      <el-popconfirm
      v-if="btns.includes('delete')"
        title="是否要删除选中规格？"
        confirm-button-text="确定"
        cancel-button-text="取消"
        width="20"
        @confirm="$emit('delete')"
      >
        <template #reference>
          <el-button
            v-if="btns.includes('delete')"
            type="danger"
            size="small"
          >
            批量删除
          </el-button>
        </template>
      </el-popconfirm>
    </div>
    <el-tooltip
      v-if="btns.includes('refresh')"
      effect="dark"
      content="刷新数据"
      placement="top"
    >
      <el-button text @click="$emit('refresh')">
        <el-icon :size="20">
          <Refresh />
        </el-icon>
      </el-button>
    </el-tooltip>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  layout: {
    type: String,
    default: 'create,refresh'
  }
})

const btns = computed(() => props.layout.split(','))

defineEmits(['create', 'refresh', 'delete'])
</script>
