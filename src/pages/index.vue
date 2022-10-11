<template>
  <div>
    后台首页
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { getStatistics1 } from '~/api/index.js'

const panels = ref([])
getStatistics1().then(res => {
  panels.value = res.panels
  console.log(panels.value);
})
</script>
