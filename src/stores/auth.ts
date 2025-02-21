import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: localStorage.getItem('token') || ''
  }),
  getters: {
    isAuthenticated: (state) => !!state.token
  },
  actions: {
    login(userData: any) {
      this.user = userData
      this.token = userData.token
      localStorage.setItem('token', userData.token)
    },
    logout() {
      this.user = null
      this.token = ''
      localStorage.removeItem('token')
    }
  }
})