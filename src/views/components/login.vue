<template>
  <div class="login-form">
    <q-card
      class="shadow-1"
    >
      <div
        class="row banner shadow-1 q-pa-xs text-bold"
        v-text="$t('message.welcome')"
      />

      <vee-form
        ref="sfd_reset_form"
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
                  @update:model-value="store.SET_REMEMBER_ME_VALUE(String(sfd_email?.modelValue))"
                />
              </div>
            </div>

            <div class="col-12">
              <q-btn
                :label="$t('message.to_enter')"
                class="full-width banner"
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
import { Field as VeeField, Form as VeeForm, type FormActions } from 'vee-validate'
import { QBtn, QInput } from 'quasar'
import { storeToRefs } from 'pinia'
import { LOGIN_STORE } from '~@/config/pinia/modules/login.store.ts'
import LoginData from '~@/views/data/login.data.ts'
import { ILoginDto } from '~@/models/dtos/login.dto.ts'

const data = reactive(LoginData)

const sfd_email = ref<QInput>()
const sfd_reset_form = ref<FormActions<ILoginDto>>()

const store = LOGIN_STORE()

const { remember_me } = storeToRefs(store)

const initial_values: Partial<ILoginDto> = {
  email: store.get_remember_me_value,
  password: undefined
}

function submit_login (user): void {
  store.$patch({ user })
  sfd_reset_form.value?.resetForm()
}
</script>

<style lang="css" scoped src="../styles/login.css" />
