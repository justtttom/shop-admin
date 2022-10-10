<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <f-header />
      </el-header>
      <el-container>
        <el-aside :width="$store.state.asideWidth">
          <f-menu />
        </el-aside>
        <el-main class="bg-light-100">
          <f-tag-list />
          <router-view v-slot="{Component}">
            <Transition name="fade">
              <KeepAlive :max="10">
                <component :is="Component"></component>
              </KeepAlive>
            </Transition>
          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import FHeader from './components/FHeader.vue'
import FMenu from './components/FMenu.vue'
import FTagList from './components/FTagList.vue'
import 'animate.css';
</script>

<style>
.el-aside {
  transition: all 0.2s;
}
.fade-enter-from,.fade-leave-to{
  opacity: 0;
}
.fade-enter-to,.fade-leave-from{
  opacity: 1;
}
.fade-enter-active,.fade-leave-active{
  transition: all 0.3s;
}
.fade-enter-active{
  transition-delay: 0.3s;
}
</style>