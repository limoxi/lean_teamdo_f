<template>
  <div>
    <div v-for="(conditions, index) in rule" :key="index">
      <a-card :title="index === 0 ? '条件' : '或者'">
        <a href="#" slot="extra">
          <a-button shape="circle" size="small" @click="onClickRemoveGroup">
            <a-icon type="cross"/>
          </a-button>
        </a>
        <condition
          v-for="(condition ,condIndex) in conditions"
          :key="condIndex"
          :variables="variables"
          ...condition
        />
        <a-button type="dashed" @click="onClickAddCondition(index)" style="width: 30%">
          <a-icon type="plus"/> 添加条件
        </a-button>
      </a-card>
    </div>
    <a-button type="dashed" @click="add">
      <a-icon type="plus" />添加条件组
    </a-button>
  </div>
</template>

<script>
import Condition from './Condition'
export default {
  name: 'Rule',
  components: {
    Condition
  },
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

      rule: []
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
    if (this.joinedType === '') {
      this.joinedType = this.stores.length === 0 ? 'all' : 'part'
    }
  },

  methods: {
    onChangeJoinedType (e) {
      this.joinedType = e.target.value
      if (this.joinedType === 'all') {
        this.stores = []
      }
    },

    remove (index) {
      const { form } = this
      this.stores.splice(index, 1)
      this.stores.forEach((store, index) => {
        form.getFieldDecorator(`stores[${index}]`, { initialValue: `${store}` })
      })
    },

    add () {
      this.rule.push([])
    },

    onChangeInput (e, index) {
      this.stores[index] = e.target.value
    },

    onClickRemoveGroup () {

    },

    onClickAddCondition (index) {
      console.log(this.rule[index], 'dddddddddddddd')
      this.rule[index].push({
        variable: '',
        comparison: '>=',
        value: '',
        datatype: 'str',
        choices: []
      })
    }
  }
}
</script>

<style scoped>
  .dynamic-delete-button {
    cursor: pointer;
    position: relative;
    top: 4px;
    font-size: 24px;
    color: #999;
    transition: all 0.3s;
  }
  .dynamic-delete-button:hover {
    color: #777;
  }
  .dynamic-delete-button[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }
</style>
