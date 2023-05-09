<template>
  <div>
    <page title="title">
      <div class="q-gutter-lg">
        <div class="row q-col-gutter-md">
          <div class="col-4">
            <q-input
              :label="$t('message.profile')"
              dense
              model-value=""
            />
          </div>

          <div class="col-8">
            <q-input
              :label="$t('message.description')"
              dense
              model-value=""
            />
          </div>

          <div class="col-12">
            <q-btn
              class="float-right banner text-white"
              label="Pesquisar"
            />
          </div>
        </div>

        <q-table
          :columns="columns"
          class="shadow-0 border-gradient-top"
        >
          <template #no-data>
            <no-data-table />
          </template>
        </q-table>
      </div>
    </page>
  </div>
</template>

<script lang="ts" setup>
import Page from '~@/views/components/page.vue'
import { QTableColumnBuilder } from '~@/views/utils/qtable-column-builder.ts'
import { QTableColumn } from 'quasar'
import NoDataTable from '~@/views/components/no-data-table.vue'
import i18n from '~@/config/plugins/i18n'

const { t } = i18n.global

const columns: Array<QTableColumn<any>> = new QTableColumnBuilder()
  .create_column('profile', t('message.profile'))
  .create_column('description', t('message.description'))
  .build(true, 2)
</script>

<style lang="css" src="../styles/home.css" />
