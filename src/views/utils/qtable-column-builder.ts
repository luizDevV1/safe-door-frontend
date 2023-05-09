import { type QTableColumn } from 'quasar'
import i18n from '~@/config/plugins/i18n'

declare type TFunctionFormatColumn = (str: string) => string
declare type TFunctionFormatColumnTypeDate = (str?: string, time?: boolean) => string

export class QTableColumnBuilder<T extends object> {
  private readonly column: Array<QTableColumn<T>> = []

  public create_column (
    key: keyof T | string,
    label: string,
    fn?: TFunctionFormatColumn
  ): this {
    this.column.push({
      label,
      name: String(key),
      align: 'left',
      field: (row) => row,
      format: (val) => fn?.(val[key]) ?? String(val[key] ?? '')
    })

    return this
  }

  public create_column_type_date (
    key: keyof T | string,
    label: string,
    have_time = false,
    fn?: TFunctionFormatColumnTypeDate
  ): this {
    this.column.push({
      label,
      name: String(key),
      align: 'left',
      field: (row) => row,
      format: (val) => fn?.(val[key], have_time) ?? String(val[key])
    })

    return this
  }

  public build (have_action = false, amount = 1): Array<QTableColumn<T>> {
    if (have_action) this.create_action_column(amount)

    return this.column
  }

  private create_action_column (amount: number): void {
    this.column.push({
      label: i18n.global.t('message.action', amount),
      name: 'action',
      align: 'center',
      field: (row) => row,
      format: () => ''
    })
  }
}
