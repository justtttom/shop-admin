<template>
  <el-aside width="220px" class="image-aside" v-loading="loading">
    <div class="top">
      <AsideList :active="activeId == item.id" v-for="(item, index) in list" :key="index"> {{ item.name }} </AsideList>
    </div>
    <div class="bottom">
      <el-pagination background layout="prev, next" :total="total" />
    </div>
  </el-aside>
</template>
<script setup>
import { ref } from "vue";
import AsideList from "./AsideList.vue";
import { getImageClassList } from "~/api/image_class.js";

// 加载动画
const loading = ref(false);
const list = ref([])
const activeId = ref(0)

// 分页
const currentPage = ref(1)
const total = ref(0)
const limit = ref(10)

// 获取数据
function getData() {
  loading.value = true;
  getImageClassList(currentPage.value)
    .then((res) => {
      total.value = res.totalCount
      list.value = res.list
      let item = list.value[1]
      if (item) {
        activeId.value = item.id
      }
    })
    .finally(() => [(loading.value = false)]);
}
getData();
</script>
<style scoped>
.image-aside {
  border-right: 1px solid #eee;
  position: relative;
}

.image-aside .top {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 50px;
  overflow-y: auto;
}

.image-aside .bottom {
  @apply flex items-center justify-center;
  position: absolute;
  bottom: 0;
  height: 50px;
  right: 0;
  left: 0;
}
</style>