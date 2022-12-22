import axios from '~/axios'

export function getSkusList(page) {
  return axios.get(`/admin/goods/skus/${page}`)
}

export function addSkus(data){
  return axios.post(`/admin/skus`,data)
}

export function updateSkus(id,data){
  return axios.post(`/admin/skus/+id`,data)
}


export function deleteSkus(ids){
  return axios.post(`/admin/skus/delete_all`,ids)
}

export function updateSkusStatus(id, status) {
  return axios.post(`/admin/skus/${id}/update_status`, {
    status
  })
}