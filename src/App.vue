<template>
  <q-layout>
    <custom-header />

    <q-page-container>
      <q-page
        padding
      >
        <router-view v-slot="{ Component, route }">
          <transition
            :duration="300"
            mode="out-in"
            name="fade"
          >
            <div :key="String(route.name)">
              <component :is="Component" />
            </div>
          </transition>
        </router-view>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import CustomHeader from '~@/views/components/custom-header.vue'
import { onMounted } from 'vue'
import { useQuasar } from 'quasar'

const q = useQuasar()

async function get_sfd_dark_mode (): Promise<boolean> {
  return localStorage.getItem('sfd_dark_mode') === 'true'
}

onMounted(() => {
  get_sfd_dark_mode().then((r) => {
    console.log(r)

    q.dark.set(r)
  })
})
</script>
