import { ElNotification,ElMessage, ElMessageBox } from "element-plus";


// 消息提示
export function toast(message,type="success",dangerouslyUseHTMLString=false) {
  ElNotification({
    // title: 'Success',
    message,
    type,
    dangerouslyUseHTMLString,
    duration: 2000
  })
}

const open = () => {
  ElMessageBox.confirm(
    'proxy will permanently delete the file. Continue?',
    'Warning',
    {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning',
    }
  )
    .then(() => {
      ElMessage({
        type: 'success',
        message: 'Delete completed',
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: 'Delete canceled',
      })
    })
}
