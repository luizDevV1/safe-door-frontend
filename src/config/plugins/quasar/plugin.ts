import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'
import '@quasar/extras/material-icons-round/material-icons-round.css'
import '@quasar/extras/material-icons-sharp/material-icons-sharp.css'
import '@quasar/extras/roboto-font/roboto-font.css'
import 'quasar/src/css/index.sass'
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'
import quasarLang from 'quasar/lang/pt-BR'
import { Cookies, Dialog, Loading, Notify } from 'quasar'

export const options = {
  plugins: {
    Notify,
    Cookies,
    Dialog,
    Loading
  },
  lang: quasarLang,
  animations: 'all',
  extras: ['material-icons', 'mdi', 'fontawesome-v6'],
  framework: {
    iconSet: 'fontawesome-v6'
  }
}
