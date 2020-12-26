<template>
  <span @click="show()">
    <slot></slot>
    <a-modal
      :title="title"
      :width="640"
      :visible="visible"
      :confirmLoading="confirmLoading"
      @ok="handleSubmit"
      @cancel="handleCancel"
    >
      <a-spin :spinning="confirmLoading">
        <a-form :form="form">
          <template v-if="resultOptions.length > 0">
            <a-form-item :label="formLabel" v-bind="formItemLayout">
              <a-radio-group
                v-decorator="['result']"
                :options="resultOptions"
              />
            </a-form-item>
          </template>

          <a-form-item
            :label="label"
            v-bind="formItemLayout"
          >
            <a-textarea
              name="content"
              ref="contentInput"
              v-decorator="[
                'content',
                {rules: [{ required: isRequired, message: '请输入'+ label }]}
              ]"
              :rows="3"
            />
          </a-form-item>
        </a-form>
      </a-spin>
    </a-modal>
  </span>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '备注'
    },
    label: {
      type: String,
      default: '备注'
    },
    content: {
      type: String,
      default: ''
    },
    formLabel: {
      type: String,
      default: '是否通过'
    },
    isRequired: {
      type: Boolean,
      default: false
    },
    resultOptions: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      formItemLayout: {
        labelCol: { xs: { span: 12 }, sm: { span: 3 } },
        wrapperCol: { xs: { span: 20 }, sm: { span: 20 } }
      },
      visible: false,
      confirmLoading: false,
      form: this.$form.createForm(this)
    }
  },

  methods: {
    show () {
      this.visible = true
      setTimeout(() => {
        this.form.setFieldsValue({
          content: this.content
        })
      }, 100)
      setTimeout(() => {
        this.$refs.contentInput.focus()
      }, 500)
    },

    close () {
      this.form.setFieldsValue({
        content: ''
      })
      this.confirmLoading = false
      this.visible = false
    },

    reset () {
      this.confirmLoading = false
    },

    handleSubmit (e) {
      const { form: { validateFields } } = this
      this.confirmLoading = true
      validateFields((errors, values) => {
        if (!errors) {
          this.$emit('ok', {
            modal: this,
            ...values
          })
        } else {
          this.confirmLoading = false
        }
      })
    },

    handleCancel () {
      this.close()
    }
  }
}
</script>
