<script setup></script>

<template>
  <router-view></router-view>
</template>

<style>
.body{
  @apply bg-gray-100
}
#nprogress .bar {
  background: #f0eeec !important;
  height: 3px !important;
}
#nprogress .spinner-icon {
  border-top-color: #7d7bf2e6 !important;
  border-left-color: #7d7bf2e6 !important;
}
</style>
