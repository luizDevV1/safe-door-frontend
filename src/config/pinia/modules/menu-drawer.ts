import { defineStore } from 'pinia'

export const menu_drawer_store = defineStore('menu_drawer', {
  state () {
    return {
      drawer: false,
      mini_state: false
    }
  }
})
