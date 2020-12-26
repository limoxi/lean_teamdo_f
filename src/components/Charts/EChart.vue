<template>
  <a-card class="e-chart-card" :loading="loading" :bordered="false" :title="title">
    <chart
      :options="orgOptions"
      theme="macarons"
      autoresize
      style="width: 100%;height:100%;"
    ></chart>
  </a-card>

</template>

<script>
export default {
  name: 'EChart',
  props: {
    title: {
      type: String,
      default: '图表'
    },
    data: {
      type: Function,
      required: true
    },
    filters: {
      type: Object,
      default: () => { return {} }
    }
  },
  watch: {
    filters (val) {
      this.filters = val
    }
  },
  data () {
    return {
      loading: false,
      orgOptions: {}
    }
  },
  created () {
    this.loadData()
  },
  methods: {
    refresh () {
      this.loadData()
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
      this.data({ ...filters }).then(r => {
        this.orgOptions = r
      })
    }
  }
}
</script>

<style lang="less">
  .e-chart-card{
    .ant-card-body{
      padding-left: 0 !important;
      padding-right: 0 !important;
      height: 400px;
    }
  }
.echarts {
  /*width: 100%;*/
  /*height: 400px;*/
  /*width: 100% !important;*/
  /*& > div:first-child {*/
  /*  width: 100% !important;*/
  /*}*/
  /*canvas {*/
  /*  width: 100% !important;*/
  /*  height: auto !important;*/
  /*}*/
}
</style>
