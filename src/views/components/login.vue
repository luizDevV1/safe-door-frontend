<template>
  <div class="login-form">
    <div class="row">
      <span
        class="text-h5 q-my-md"
        v-text="$t('message.welcome')"
      />
    </div>
    <q-card class="shadow-1">
      <q-form @submit.prevent="submit_login">
        <q-card-section>
          <div class="row q-col-gutter-sm">
            <div class="col-12">
              <q-input
                dense
                :label="$t('message.email')"
                outlined
                :rules="[]"
              />
            </div>

            <div class="col-12">
              <q-input
                :label="$t('message.password')"
                dense
                outlined
                :rules="[]"
                type="password"
              />
            </div>

            <div class="col-12">
              <div class="flex justify-end">
                <q-checkbox
                  :model-value="remember_me"
                  :label="$t('message.remember_me')"
                  class="q-pa-none q-ma-none"
                />
              </div>
            </div>

            <div class="col-12">
              <q-btn
                type="submit"
                class="full-width"
                color="primary"
                :label="$t('message.to_enter')"
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
      </q-form>
    </q-card>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const remember_me = ref(false)

function submit_login () {
  console.log('ok')
}
</script>

<style lang="css" scoped src="../styles/login.css" />
