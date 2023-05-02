import '~@/config/plugins/yup'

abstract class Data {
  protected constructor () {
    this.start_log()
  }

  abstract start_log (): void
}

export default Data
