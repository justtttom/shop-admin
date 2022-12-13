import axios from '~/axios'

export function getRuleList(page) {
  return axios.get(`/admin/rule/${page}`)
}

export function addRule(data){
  return axios.post(`/admin/notice`,data)
}

export function updateRule(id,data){
  return axios.post(`/admin/notice/${id}`,data)
}