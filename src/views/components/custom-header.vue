<template>
  <q-header>
    <q-toolbar
      class="banner"
      :class="class_dark_mode"
    >
      <q-toolbar-title>
        <b
          class="text-uppercase"
          v-text="$t('message.title_system')"
        />
      </q-toolbar-title>

      <q-btn
        :icon="`fa-regular fa-${$q.dark.isActive ? 'sun' : 'moon'}`"
        flat
        round
        @click.prevent="$q.dark.toggle"
      />
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'
import { computed } from 'vue'

const q = useQuasar()

const class_dark_mode = computed(() => {
  const { isActive } = q.dark

  return Object.create({
    'shadow-4': !isActive,
    'text-dark': isActive
  })
})
</script>

<style scoped lang="css" src="../styles/header.css" />
