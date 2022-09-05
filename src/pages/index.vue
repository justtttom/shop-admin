<template>
  <div>
    后台首页<el-button @click="addCount">{{ count }}</el-button>
    <!-- <HelloWord/> -->
  </div>
</template>

<script setup>
import { ref,reactive } from 'vue'
// import HelloWord from '~/components/HelloWorld.vue'
let count = ref(1)

function addCount() {
  console.log('addCount')
  count.value++
  console.log(count.value)
}

const form = reactive({
  
})
</script>
