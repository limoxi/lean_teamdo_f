<template>
  <a-cascader
    :value="test"
    :options="options"
    :loadData="loadPersonnel"
    placeholder="请选择"
    changeOnSelect
    @change="onChange"
    :disabled="disabled"
  />
</template>

<script>
import { CorpUserService } from '@/api/service'
import PropTypes from 'ant-design-vue/lib/_util/vue-types'
export default {
  name: 'PersonnelSelector',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    isText: {
      type: Boolean,
      default: false
    },
    defaultValue: PropTypes.any,
    value: PropTypes.any,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      options: [],
      test: []
    }
  },
  async mounted () {
    await this.loadPersonnel()
  },
  watch: {
    value: function (val) {
      if (this.isText) {
        if (val.value && val.value.length > 1) {
          this.options = this.options.map(op => {
            if (op.id === val.value[0]) {
              if (!op.children) {
                op.children = [{
                  label: val.text[1],
                  value: val.value[1]
                }]
              }
            }
            return op
          })
        }
        this.test = val.value
      } else {
        this.test = val
      }
      console.log(this.test, 'this.test')
    }
  },
  methods: {
    async loadPersonnel (selectedOptions) {
      let targetOption = null
      if (selectedOptions) {
        targetOption = selectedOptions[selectedOptions.length - 1]
        targetOption.loading = true
      }
      await CorpUserService.getPersonnelSelect(targetOption).then(data => {
        if (targetOption) {
          targetOption.loading = false
          targetOption.children = [...data]
          this.options = [...this.options]
        } else {
          this.options = data
        }
      })
    },
    onChange (value, data) {
      let newValue = value
      if (this.isText) {
        newValue = {
          value: value,
          text: data.map(d => { return d.label })
        }
      }
      this.$emit('change', newValue)
    }
  }
}
</script>

<style scoped>

</style>
