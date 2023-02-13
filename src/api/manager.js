import axios from '~/axios'
import { querParams } from '../composables/util'

export function login(username, password) {
  return axios.post('/admin/login', {
    username,
    password
  })
}

export function getInfo() {
  return axios.post('/admin/getinfo')
}

export function logout() {
  return axios.post('/admin/logout')
}

export function updatepassword(data) {
  return axios.post('/admin/updatepassword', data)
}

export function getManagerList(page, query = {}) {
  let r = querParams(query)
  return axios.get(`admin/manager/${page}${r}`)
}

export function updateManagerStatus(id, status) {
  return axios.post(`/admin/manager/${id}/update_status`, {
    status
  })
}

export function addManager(data) {
  return axios.post(`/admin/manager`, data)
}

export function updateManager(id,data) {
  return axios.post(`/admin/manager${id}`, data)
}

export function deleteManager(id){
  return axios.post(`/admin/manager/${id}/delete`)
}