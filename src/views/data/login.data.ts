import Data from '~@/views/shared/data.ts'
import { object, type ObjectSchema, string } from 'yup'
import i18n from '~@/config/plugins/i18n'
import { type ILoginDto } from '~@/models/dtos/login.dto.ts'

class LoginData extends Data {
  private readonly t = i18n.global.t

  public readonly schema: ObjectSchema<ILoginDto> = object({
    email: string().required().email().label(this.t('message.email')),
    password: string().required().min(8).label(this.t('message.password'))
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
