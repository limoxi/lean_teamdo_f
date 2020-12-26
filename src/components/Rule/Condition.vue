<template>
  <div>
    <a-select
      :options="variables"
      style="width: 30%"
      @change="onChangeVariable"
    />
    <a-select
      defaultValue="<="
      :options="options"
      style="width: 30%"
      @change="onChangeComparison"
    />
    <a-input style="width: 30%"></a-input>
    <a-button shape="circle" size="small" @click="onClickRemove">
      <a-icon type="minus"/>
    </a-button>
  </div>
</template>

<script>
export default {
  name: 'Condition',
  model: {
    prop: 'value'
  },
  props: {
    variables: {
      type: Array,
      required: true
    }
  },

  data () {
    return {
      visible: false,
      confirmLoading: false,

      options: [{
        label: '等于',
        value: '=='
      }, {
        label: '不等于',
        value: '!='
      }, {
        label: '小于',
        value: '<'
      }, {
        label: '小于等于',
        value: '<='
      }, {
        label: '大于',
        value: '>'
      }, {
        label: '大于等于',
        value: '>='
      }, {
        label: '属于',
        value: 'in'
      }, {
        label: '不属于',
        value: 'not in'
      }]
    }
  },

  watch: {
    value: function (val) {
      console.log(val, '111111111111111111111111111111111')
      this.rule = val
    }
  },

  created () {
    // console.log(this.store, 'created')
  },

  beforeMount () {
    // console.log(this.stores, 'beforeMount')
  },

  mounted () {
    // console.log(this.stores, 'mounted')
  },

  beforeUpdate () {
  },

  methods: {
    onChangeVariable (e) {
    },

    onChangeComparison () {
    },

    onClickRemove () {
    }
  }
}
</script>

<style scoped>

</style>
