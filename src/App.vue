<script setup></script>

<template>
  <router-view></router-view>
</template>

<style>
.body {
  @apply bg-gray-100;
}
#nprogress .bar {
  background: #f0eeec !important;
  height: 3px !important;
}
#nprogress .spinner-icon {
  border-top-color: #7d7bf2e6 !important;
  border-left-color: #7d7bf2e6 !important;
}
::-webkit-scrollbar {
  width: 5px;
  height: 6px;
}
::-webkit-scrollbar-corner {
  display: block;
}
::-webkit-scrollbar-thumb {
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.2);
}
::-webkit-scrollbar-thumb,
::-webkit-scrollbar-track {
  border-right-color: transparent;
  border-left-color: transparent;
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
