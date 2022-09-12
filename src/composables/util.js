import { ElNotification, ElMessage, ElMessageBox } from "element-plus";


// 消息提示
export function toast(message, type = "success", dangerouslyUseHTMLString = false) {
  ElNotification({
    // title: 'Success',
    message,
    type,
    dangerouslyUseHTMLString,
    duration: 2000
  })
}

// 弹出提示框
export function showModal(content="提示内容",type="warning",title="") {
  return ElMessageBox.confirm(
    content,
    title,
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type,
    }
  )
}
