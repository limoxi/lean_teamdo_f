<template>
  <span>
    <div class="fr">
      <a-button :icon="['ready', 'finish'].includes(status) ? 'download' : ''" :loading="loading" @click="onClickExport">
        <span v-if="['ready', 'finish', 'fail'].includes(status)">{{ status === 'fail' ? '重新导出' : '导出数据' }}</span>
        <span v-else-if="status === 'progress'" >
          <a-progress :percent="percent" size="small" status="active"/>
        </span>
      </a-button>
    </div>
    <div style="clear: both"></div>
  </span>
</template>

<script>
import PropTypes from 'ant-design-vue/lib/_util/vue-types'
import FileSaver from 'file-saver'
import XLSX from 'xlsx'
const regSubNum = /[^\[\]]*\[(.*)\][^\]]*/g
const regSub = /\[([^\[]+)\]/g
const regRem = /\[[^\[]*\[/g
export default {
  name: 'Export',
  props: {
    filters: {
      type: Object,
      default: () => { return {} }
    },
    // eslint-disable-next-line vue/require-default-prop
    columns: PropTypes.array,
    data: {
      type: Function,
      required: true
    },
    align: {
      type: String,
      default: 'right'
    },
    filename: {
      type: String,
      default: '数据'
    },
    afterLoad: {
      type: Function,
      default: undefined
    },
    pageSize: {
      type: Number,
      default: 1000
    }
  },
  data () {
    return {
      paginationLocal: {
        pageSize: this.pageSize,
        current: 1,
        hasNext: true
      },
      status: 'ready',
      loading: false,
      percent: 0
    }
  },
  watch: {
    pageSize (val) {
      Object.assign(this.paginationLocal, {
        pageSize: val
      })
    },
    filters (val) {
      this.filters = val
    }
  },
  methods: {
    async onClickExport () {
      this.status = 'progress'
      this.loading = true
      let datas = []
      while (this.paginationLocal.hasNext) {
        const result = await this.loadData()
        const pageinfo = result.pageinfo
        if (this.afterLoad) {
          await this.afterLoad(result.datas)
        }
        datas = [ ...datas, ...this.formatData(result.datas) ]
        this.paginationLocal.hasNext = pageinfo.has_next
        this.paginationLocal.current += 1
        this.percent = parseInt((pageinfo.cur_page / pageinfo.max_page) * 100)
      }
      // 处理数据
      const wb = { SheetNames: ['Sheet1'], Sheets: {}, Props: {} }
      wb.Sheets['Sheet1'] = XLSX.utils.json_to_sheet(datas) // 通过json_to_sheet转成单页(Sheet)数据
      const wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array' })
      try {
        FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), this.filename + '.xlsx')
        this.status = 'finish'
      } catch (e) {
        if (typeof console !== 'undefined') {
          console.log(e, wbout)
        }
        this.status = 'fail'
      }
      this.loading = false
      this.paginationLocal.hasNext = true
      this.paginationLocal.current = 1
      this.percent = 0
    },
    formatData (datas) {
      const newDatas = []
      datas.map(data => {
        const newData = {}
        const columns = this.columns.filter(column => { return column.hasOwnProperty('isExport') ? column.isExport : true })
        columns.map(column => {
          let value = { ...data }
          column.dataIndex.split('.').map(c => {
            const subs = c.match(regSub)
            value = value[c.replace(regSub, '')]
            if (subs) {
              subs.map(sub => {
                value = value[sub.replace(regSubNum, '$1')]
              })
            }
          })
          const customValue = column.customExportRender ? column.customExportRender(value, data) : column.customRender ? column.customRender(value, data) : ''
          newData[column.title] = customValue || customValue === 0 ? customValue : value
        })
        newDatas.push(newData)
      })

      return newDatas
    },
    loadData () {
      // 去除无效的filter
      const filters = {}
      Object.keys(this.filters).forEach(key => {
        const val = this.filters[key]
        if (['', -1, '-1'].includes(val) || (val === null) || (val === undefined)) {

        } else {
          filters[key] = this.filters[key]
        }
      })
      const parameter = Object.assign({
        pagination: {
          current: this.paginationLocal.current,
          pageSize: this.paginationLocal.pageSize
        },
        filters: {
          ...filters
        }
      })
      return this.data(parameter)
    }
  }
}
</script>

<style scoped>

</style>
