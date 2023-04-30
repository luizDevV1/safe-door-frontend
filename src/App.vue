<template>
  <q-layout>
    <custom-header />

    <q-page-container>
      <q-page
        padding
      >
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import CustomHeader from '~@/views/components/custom-header.vue'
</script>
