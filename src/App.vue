<template>
  <q-layout>
    <q-header>
      <q-toolbar
        :class="class_dark_mode"
      >
        <q-toolbar-title>
          <span v-text="$t('message.title_system')" />
        </q-toolbar-title>

        <q-btn
          icon="fa fa-moon"
          @click.prevent="$q.dark.toggle"
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page padding>
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useQuasar } from 'quasar'

const q = useQuasar()

const class_dark_mode = computed(() => {
  const { isActive } = q.dark

  return Object.create({
    banner: isActive,
    'shadow-4': !isActive
  })
})

defineExpose({
  class_dark_mode
})
</script>
