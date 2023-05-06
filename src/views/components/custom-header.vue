<template>
  <q-header>
    <q-toolbar
      :class="class_dark_mode"
      class="banner"
    >
      <q-toolbar-title class="q-gutter-sm flex items-center">
        <q-btn
          flat
          icon="fa fa-bars"
          round
          size="sm"
          @click.prevent="drawer = !drawer"
        />

        <b
          class="text-uppercase"
          v-text="$t('message.title_system')"
        />
      </q-toolbar-title>

      <q-btn
        :icon="`fa-regular fa-${$q.dark.isActive ? 'sun' : 'moon'}`"
        flat
        round
        @click.prevent="toggle_dark_mode"
      />
    </q-toolbar>
  </q-header>

  <menu-drawer />
</template>

<script lang="ts" setup>
import { useQuasar } from 'quasar'
import { computed } from 'vue'
import { menu_drawer_store } from '~@/config/pinia/modules/menu-drawer.ts'
import { storeToRefs } from 'pinia'
import MenuDrawer from '~@/views/components/menu-drawer.vue'

const q = useQuasar()
const store_menu_drawer = menu_drawer_store()
const { drawer } = storeToRefs(store_menu_drawer)

const class_dark_mode = computed(() => {
  const { isActive } = q.dark

  return Object.create({
    'shadow-4': !isActive
  })
})

function toggle_dark_mode (): void {
  q.dark.toggle()

  localStorage.setItem('sfd_dark_mode', String(q.dark.isActive))
}
</script>

<style lang="css" scoped src="../styles/header.css" />
