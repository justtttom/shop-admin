function hasPermission(value,el=false) {
  if(!Array.isArray(value)){
    throw new Error(`需要配置权限,例如 v-permission="['getStatistics3,GET']"`)
  }
}

export default {
  install(app) {
    app.directive('permission', {
      mounted(el, binding) {
        binding.value
      }
    })
  }
}
