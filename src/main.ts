import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import { options } from '~@/config/plugins/quasar/plugin.ts'
import Router from '~@/config/plugins/router'
import i18n from '~@/config/plugins/i18n'
import store from '~@/config/pinia'

const app = createApp(App)

app.use(Quasar, options).use(Router).use(i18n).use(store)

app.mount('#app')
