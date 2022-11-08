import axios from "~/axios"

export function getNoticeList(){
  return axios.get("/admin/notice/:page")
}
