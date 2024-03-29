import { ElNotification, ElMessage, ElMessageBox } from 'element-plus'
import nProgress from 'nprogress'

// 消息提示
export function toast(
  message,
  type = 'success',
  dangerouslyUseHTMLString = true
) {
  ElNotification({
    // title: 'Success',
    message,
    type,
    dangerouslyUseHTMLString,
    duration: 2000
  })
}

// 弹出提示框
export function showModal(content = '提示内容', type = 'warning', title = '') {
  return ElMessageBox.confirm(content, title, {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type
  })
}

// 弹出输入框
export function showPrompt(tip, value = '') {
  return ElMessageBox.prompt(tip, '', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    inputValue: value
  })
}

// 显示全屏loading
export function showFullLoading() {
  nProgress.start()
}

// 隐藏全屏loading
export function hideFullLoading() {
  nProgress.done()
}


// 将query 对象转成url参数
export function querParams(query){
  let q = []
  for (const key in query) {
    if (query[key]) {
      q.push(`${key}=${encodeURIComponent(query[key])}`)
    }
  }
  let r = q.join('&')
  r = r ? '?' + r : ''
  return r
}