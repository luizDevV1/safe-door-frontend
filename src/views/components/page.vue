<template>
  <div>
    <div>
      <p
        class="text-h5"
        v-text="_title"
      />
    </div>

    <q-card
      class="border-gradient-top shadow-0"
      square
    >
      <q-card-section>
        <slot>
          <div class="text-grey-6 text-center">
            <span>NO CONTENT</span>
          </div>
        </slot>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts" setup>

import { computed } from 'vue'

interface Props {
    title?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'PAGE_NO_TITLE'
})

const _title = computed(() => props.title)
</script>

<style lang="css" scoped src="../styles/page.css" />
