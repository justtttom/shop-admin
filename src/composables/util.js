import { ElNotification } from "element-plus";


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


