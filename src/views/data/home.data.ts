import Data from '~@/views/shared/data.ts'

class HomeData extends Data {
  constructor () {
    super()
  }

  start_log (): void {
    console.log('HOME')
  }
}

export default new HomeData()
