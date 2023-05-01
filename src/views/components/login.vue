<template>
  <div class="login-form">
    <div class="row">
      <span
        class="text-h5 q-my-md"
        v-text="$t('message.welcome')"
      />
    </div>
    <q-card class="shadow-1">
      <vee-form
        :initial-values="initial_values"
        :validation-schema="schema"
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
                  dense
                  hide-bottom-space
                  :model-value="value"
                  v-bind="field"
                  :error-message="errorMessage"
                  :error="!!errorMessage"
                  no-error-icon
                  :label="$t('message.email')"
                  outlined
                />
              </vee-field>
            </div>

            <div class="col-12">
              <vee-field
                v-slot="{ errorMessage, value, field }"
                name="password"
              >
                <q-input
                  type="password"
                  dense
                  hide-bottom-space
                  :model-value="value"
                  v-bind="field"
                  :error-message="errorMessage"
                  :error="!!errorMessage"
                  no-error-icon
                  :label="$t('message.password')"
                  outlined
                />
              </vee-field>
            </div>

            <div class="col-12">
              <q-btn
                type="submit"
                class="full-width"
                color="primary"
                :label="$t('message.to_enter')"
              />
            </div>

            <div class="col-12">
              <q-btn
                type="reset"
                class="full-width text-grey-8"
                color="grey-3"
                :label="$t('message.clear')"
              />
            </div>
          </div>
        </q-card-section>

        <q-card-section>
          <div class="q-gutter-md flex flex-center">
            <q-btn
              icon="fa-brands fa-google"
              class="q-pa-sm"
              color="red"
              outline
              round
            />

            <q-btn
              icon="fa-brands fa-facebook-f"
              color="blue"
              outline
              class="q-pa-sm"
              round
            />
          </div>
        </q-card-section>
      </vee-form>
    </q-card>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import * as yup from 'yup'
import i18n from '~@/config/plugins/i18n'
import { Field as VeeField, Form as VeeForm } from 'vee-validate'
import { QInput } from 'quasar'

const sfd_email = ref<QInput>()

const { t } = i18n.global

const schema = yup.object({
  email: yup.string().required().email().label(t('message.email')),
  password: yup.string().required().min(8).label(t('message.password'))
})

const initial_values = {
  email: 'test',
  password: undefined
}

function submit_login (form) {
  console.log('ok', form)
}
</script>

<style lang="css" scoped src="../styles/login.css" />
