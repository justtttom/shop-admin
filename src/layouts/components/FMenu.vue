<template>
  <div class="f-menu">
    <el-menu default-active="2" class="border-0">
      <template v-for="(item,index) in asideMenus" :key="index">
        <el-sub-menu v-if="item.child && item.child.length > 0" :index="item.name">
          <template #title>
            <el-icon>
              <component :is="componentId"></component>
            </el-icon>
            <span>{{item.name}}</span>
          </template>
          <el-menu-item v-for="(item2,index2) in item.child" :key="index2" :index="item2.frontpath">{{item2.name}}</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon>
            <icon-menu />
          </el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting
} from '@element-plus/icons-vue'

const asideMenus = [
  {
    name: '后台面板',
    icon: 'help',
    child: [
      {
        name: '主控台',
        frontpath: '/',
        icon: 'home-filled'
      }
    ]
  },
  {
    name: '商城管理',
    icon: 'shopping-bag',
    child: [
      {
        name: '商品管理',
        frontpath: '/goods/list',
        icon: 'shopping-cart-full'
      }
    ]
  }
]
</script>

<style>
.f-menu {
  width: 300px;
  top: 64px;
  bottom: 0;
  overflow: auto;
  @apply shadow-md fixed bg-light-50;
}
</style>
