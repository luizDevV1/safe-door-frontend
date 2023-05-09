<template>
  <q-card
    class="q-ma-sm full-width bg-yellow-1 shadow-0 no-data-table-card"
    square
  >
    <q-card-section class="flex flex-center">
      <q-icon
        class="q-mr-sm"
        color="warning"
        name="fa fa-warning"
        size="sm"
      />

      <b
        class="text-grey-8"
        style="font-size: 1.1rem"
      >
        <!-- TODO: i18n -->
        Nenhum registro para ser exibido.
      </b>
    </q-card-section>
  </q-card>
</template>

<style lang="css" scoped src="../styles/no-data-table.css" />
