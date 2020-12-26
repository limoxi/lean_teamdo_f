
import { EsFilter, Filter } from '@/api/common'

// 用于获取filters
const filterable = function (filterType = 'default') {
  return (target, name, descriptor) => {
    const oldValue = descriptor.value
    descriptor.value = async function () {
      let filters = {}
      if (filterType === 'default') {
        filters = await Filter.getConstantFiltersByPerm()
      } else if (filterType === 'es') {
        filters = EsFilter.getStatisticFiltersByPerm()
      }
      const newArguments = [...arguments, filters]
      const result = await oldValue.apply(this, newArguments)
      return result
    }

    return descriptor
  }
}

export { filterable }
