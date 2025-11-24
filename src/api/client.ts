import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api',
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' }
})

api.interceptors.request.use((cfg) => {
  const token = localStorage.getItem('access_token')
  if (token) cfg.headers = { ...cfg.headers, Authorization: `Bearer ${token}` }
  return cfg
})

api.interceptors.response.use(res => res, err => {
  const status = err?.response?.status
  if (status === 401) {
    localStorage.removeItem('access_token')
    // optionally: window.location.href = '/login'
  }
  return Promise.reject(err)
})

export default api