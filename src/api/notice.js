import axios from "~/axios"

export function getNoticeList(page){
  return axios.get(`/admin/notice/${page}`)
}

export function addNoticeList(data){
  return axios.post(`/admin/notice`,data)
}

export function updateNoticeList(id,data){
  return axios.post(`/admin/notice/${id}`,data)
}

export function deleteNoticeList(id){
  return axios.post(`/admin/notice/${id}/delete`)
}