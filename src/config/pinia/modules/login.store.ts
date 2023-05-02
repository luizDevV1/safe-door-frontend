import { defineStore } from 'pinia'
import { type ILoginDto } from '~@/models/dtos/login.dto.ts'

export const LOGIN_STORE = defineStore('login', {
  state () {
    const remember_me = typeof localStorage.getItem('sfd_remember_me') === 'string'
    const user: ILoginDto | null = null

    return {
      remember_me,
      user
    }
  },
  actions: {
    SET_REMEMBER_ME_VALUE (payload: string | undefined): void {
      if (payload === undefined || this.remember_me) {
        localStorage.removeItem('sfd_remember_me')

        this.remember_me = false

        return
      }

      localStorage.setItem('sfd_remember_me', payload)

      this.remember_me = true
    }
  },
  getters: {
    get_remember_me_value: () => localStorage.getItem('sfd_remember_me') ?? undefined
  }
})
