<template>
  <div class="login-form">
    <q-card
      class="shadow-1"
    >
      <div
        class="row banner shadow-1 q-pa-xs text-bold text-white"
        v-text="$t('message.welcome')"
      />

      <vee-form
        ref="sfd_form"
        :initial-values="initial_values"
        :validation-schema="data.schema"
        @submit="submit_login"
      >
        <q-card-section>
          <div class="row q-col-gutter-sm">
            <div class="col-12">
              <vee-field
                v-slot="{ errorMessage, value, field }"
                name="email"
              >
                <q-input
                  ref="sfd_email"
                  :error="!!errorMessage"
                  :error-message="errorMessage"
                  :label="$t('message.email')"
                  :model-value="value"
                  clear-icon="fa fa-close"
                  clearable
                  dense
                  hide-bottom-space
                  no-error-icon
                  outlined
                  v-bind="field"
                />
              </vee-field>
            </div>

            <div class="col-12">
              <vee-field
                v-slot="{ errorMessage, value, field }"
                name="password"
              >
                <q-input
                  :error="!!errorMessage"
                  :error-message="errorMessage"
                  :label="$t('message.password')"
                  :model-value="value"
                  clear-icon="fa fa-close"
                  clearable
                  dense
                  hide-bottom-space
                  no-error-icon
                  outlined
                  type="password"
                  v-bind="field"
                />
              </vee-field>
            </div>

            <div class="col-12">
              <div class="flex justify-end">
                <q-checkbox
                  :label="$t('message.remember_me')"
                  :model-value="remember_me"
                  class="q-pa-none q-ma-none"
                  @update:model-value="update_remember_me_value"
                />
              </div>
            </div>

            <div class="col-12">
              <q-btn
                :label="$t('message.to_enter')"
                class="full-width banner text-white"
                type="submit"
              />
            </div>
          </div>
        </q-card-section>

        <q-card-section>
          <fieldset>
            <legend class="text-grey-6 text-bold text-italic">
              <span v-text="$t('message.or')" />
            </legend>
            <div class="q-gutter-md flex flex-center">
              <q-btn
                class="q-pa-sm"
                color="red"
                icon="fa-brands fa-google"
                outline
                round
              />

              <q-btn
                class="q-pa-sm"
                color="blue"
                icon="fa-brands fa-facebook-f"
                outline
                round
              />
            </div>
          </fieldset>
        </q-card-section>
      </vee-form>
    </q-card>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { FormContext } from 'vee-validate'
import { QBtn, QInput, useQuasar } from 'quasar'
import { storeToRefs } from 'pinia'
import { LOGIN_STORE } from '~@/config/pinia/modules/login.store.ts'
import LoginData from '~@/views/data/login.data.ts'
import { ILoginDto } from '~@/models/dtos/login.dto.ts'
import i18n from '~@/config/plugins/i18n'
import { useRouter } from 'vue-router'

const router = useRouter()
const q = useQuasar()
const data = reactive(LoginData)
const { t } = i18n.global

const sfd_email = ref<QInput>()
const sfd_form = ref<FormContext<ILoginDto>>()

const store = LOGIN_STORE()

const { remember_me } = storeToRefs(store)

const initial_values: Partial<ILoginDto> = {
  email: store.get_remember_me_value
}

function submit_login (user): void {
  store.$patch({ user })
  sfd_form.value?.resetForm()

  router.push({ name: 'HOME' })
}

async function update_remember_me_value (): Promise<void> {
  await sfd_form.value?.validateField('email').then(({ valid }) => {
    if (!valid) {
      q.notify({
        type: 'negative',
        message: `${t('message.email')} ${t('message.invalid')}`
      })

      return
    }

    store.SET_REMEMBER_ME_VALUE(String(sfd_email?.value?.modelValue))

    if (!remember_me.value) {
      sfd_form.value?.setValues({ email: undefined })
    }
  })
}
</script>

<style lang="css" scoped src="../styles/login.css" />
