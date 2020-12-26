<template>
  <div>
    <a-divider orientation="left">参与店铺</a-divider>
    <a-form :form="form">
      <a-form-item label="店铺" v-bind="formItemLayout">
        <a-radio-group
          :options="joinedTypeOptions"
          v-decorator="['joinedType', { initialValue: stores.length === 0 ? 'all' : 'part', rules: [{required: true, message: '请选择'}]}]"
          @change="onChangeJoinedType"
        />
      </a-form-item>
      <a-form-item
        v-if="joinedType === 'part'"
        v-for="(k, index) in stores"
        :key="index"
        v-bind="formItemLayout"
        label="参与的店铺"
        :required="false"
      >
        <a-input
          :ref="`stores${index}`"
          v-decorator="[
            `stores[${index}]`,
            {
              initialValue: `${k}`,
              validateTrigger: ['change', 'blur'],
              rules: [
                {
                  required: true,
                  message: '输入值长度必须大于等于1',
                },
              ],
            },
          ]"
          placeholder="输入参与店铺的用户名"
          style="width: 60%; margin-right: 8px"
          @change="onChangeInput($event, index)"
          @blur="onBlurCheckStoreName($event, index)"
        />
        <a-icon
          class="dynamic-delete-button"
          type="minus-circle-o"
          @click="() => remove(index)"
        />
      </a-form-item>
      <a-form-item v-if="joinedType === 'part'" v-bind="formItemLayoutWithOutLabel">
        <a-button @click="add">
          <a-icon type="plus" />添加店铺
        </a-button>
      </a-form-item>
      <a-form-item v-if="joinedType === 'part'" v-bind="formItemLayoutWithOutLabel" help="上传csv文件，第一列放置店铺用户名">
        <span>导入店铺: </span>
        <template>
          <a-upload
            action=""
            :beforeUpload="beforeUpload"
            :showUploadList="false"
          >
            <a-button> <a-icon type="upload" />选择文件</a-button>
          </a-upload>
        </template>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  name: 'JoinedStore',
  props: {
    value: {
      type: Array,
      required: true
    }
  },

  data () {
    return {
      formItemLayout: {
        labelCol: {
          xs: { span: 12 }, sm: { span: 4 }
        },
        wrapperCol: {
          xs: { span: 12 }, sm: { span: 20 }
        }
      },
      formItemLayoutWithOutLabel: {
        wrapperCol: {
          xs: { span: 12, offset: 0 }, sm: { span: 20, offset: 4 }
        }
      },
      visible: false,
      confirmLoading: false,

      form: this.$form.createForm(this),
      joinedTypeOptions: [{
        value: 'all',
        label: '所有门店'
      }, {
        value: 'part',
        label: '自选门店'
      }],
      joinedType: '',
      stores: []
    }
  },

  watch: {
    value: function (val) {
      this.stores = val
      this.joinedType = this.stores.length === 0 ? 'all' : 'part'
      const { form } = this
      form.setFieldsValue({
        joinedType: this.joinedType
      })
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
      const { form } = this
      form.getFieldDecorator(`stores[${this.stores.length}]`, { initialValue: '' })
      this.stores.push('')
    },

    beforeUpload (file) {
      const { form } = this
      const reader = new FileReader()
      reader.readAsText(file)
      reader.onload = () => {
        const relArr = reader.result.split('\r\n')
        if (relArr && relArr.length > 1) {
          for (let key = 0; key < relArr.length; key++) {
            const values = relArr[key]
            if (values) {
              const objArr = values.split(',')
              const name = objArr[0]
              form.getFieldDecorator(`stores[${this.stores.length}]`, { initialValue: `${name}` })
              this.stores.push(name)
            }
          }
        }
      }
      return false
    },

    onChangeInput (e, index) {
      this.stores[index] = e.target.value
    },

    onBlurCheckStoreName (e, index) {
      const { form } = this
      const name = e.target.value
      const stores = this.stores.filter((ele, i) => i !== index)
      if (stores.includes(name)) {
        this.stores[index] = ''
        // this.$refs[`stores${index}`][0].stateValue = ''
        // // form.setFieldsValue(`stores[${index}]`, { initialValue: '' })
        // console.log(this.$refs[`stores${index}`][0].$attrs, 'dddddddddddddddddddd')
        setTimeout(() => {
          form.setFieldsValue({
            stores: this.stores
          })
        }, 1)

        this.$message.error('重复的店铺名!')
      }
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
