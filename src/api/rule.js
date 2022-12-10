import axios from '~/axios'

export function getInfo() {
  return axios.get('/admin/rule/1')
}