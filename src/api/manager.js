import axios from '~/axios'

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

export function getManagerList(
  page,
  query = {
    limit: 10,
    keyword: 'ceshi'
  }
) {
  let q = []
  for (const key in query) {
    if (query[key]) {
      q.push(`${key}=${encodeURIComponent(query[key])}`)
    }
  }
  let r = q.join('&')
  return axios.post(`admin/manager/${page}?limit=10&keyword=ceshi`, data)
}
