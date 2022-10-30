<template>
  <el-main class="image-main" v-loading="">
    <div class="top">
      <div v-for="i in 10" :key="i">{{ i }}</div>
    </div>
    <div class="bottom">
      <el-pagination background layout="prev, next" :total="total" :current-page="currentPage" :page-size="limit"
        @current-change="getData" />
    </div>
  </el-main>
</template>
<script setup >
  import { getImageList } from '~/api/image.js';
  import { ref } from 'vue';

  // 分页
const currentPage = ref(1)
const total = ref(0)
const limit = ref(10)
const list = ref([])
const loading = ref(false)

// 获取数据
function getData(p = null) {
  if (typeof p == 'number') {
    currentPage.value = p
  }
  loading.value = true;
  getImageList(currentPage.value)
    .then((res) => {
      total.value = res.totalCount
      list.value = res.list
    })
    .finally(() => [(loading.value = false)]);
}
// getData();

</script>
<style scoped>
.image-main {
  position: relative;
}
.image-main .top {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 50px;
  overflow-y: auto;
}

.image-main .bottom {
  @apply flex items-center justify-center;
  position: absolute;
  bottom: 0;
  height: 50px;
  right: 0;
  left: 0;
}
</style>