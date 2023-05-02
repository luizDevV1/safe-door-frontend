import Data from '~@/views/shared/data.ts'
import * as yup from 'yup'
import i18n from '~@/config/plugins/i18n'

class LoginData extends Data {
  private readonly t = i18n.global.t

  public readonly schema = yup.object({
    email: yup.string().required().email().label(this.t('message.email')),
    password: yup.string().required().min(8).label(this.t('message.password'))
  })

  constructor () {
    super()
  }

  start_log (): void {
    if (import.meta.env.MODE === 'development') {
      console.log('[START LOGIN COMPONENT]')
    }
  }
}

export default new LoginData()
