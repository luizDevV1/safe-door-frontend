<template>
  <q-drawer
    :breakpoint="500"
    :class="$q.dark.isActive ? 'bg-dark' : 'bg-grey-1'"
    :mini="mini_state"
    :model-value="drawer"
    :width="200"
    bordered
    @mouseout="mini_state = true"
    @mouseover="mini_state = false"
  >
    <q-scroll-area
      :horizontal-thumb-style="{ opacity: '0' }"
      class="fit"
    >
      <q-list padding>
        <q-item
          v-ripple
          clickable
        >
          <q-item-section avatar>
            <q-icon name="inbox" />
          </q-item-section>

          <q-item-section>
            Inbox
          </q-item-section>
        </q-item>

        <q-item
          v-ripple
          active
          clickable
        >
          <q-item-section avatar>
            <q-icon name="star" />
          </q-item-section>

          <q-item-section>
            Star
          </q-item-section>
        </q-item>

        <q-item
          v-ripple
          clickable
        >
          <q-item-section avatar>
            <q-icon name="send" />
          </q-item-section>

          <q-item-section>
            Send
          </q-item-section>
        </q-item>

        <q-separator />

        <q-item
          v-ripple
          clickable
        >
          <q-item-section avatar>
            <q-icon name="drafts" />
          </q-item-section>

          <q-item-section>
            Drafts
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script lang="ts" setup>
import { menu_drawer_store } from '~@/config/pinia/modules/menu-drawer.ts'
import { storeToRefs } from 'pinia'

const store = menu_drawer_store()

const { drawer, mini_state } = storeToRefs(store)
</script>
