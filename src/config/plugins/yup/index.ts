import { setLocale } from 'yup'
import i18n from '~@/config/plugins/i18n'

const t = i18n.global.t

setLocale({
  mixed: {
    default: t('message.this_field_is_required'),
    required: t('message.this_field_is_required')
  },
  string: {
    email: '${path} '.concat(t('message.invalid')),
    min: '${path} ' + t('message.must_have_at_least').toLowerCase() + ' ${min} ' + t('message.characters').toLowerCase()
  }
})
