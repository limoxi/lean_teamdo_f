<template>
  <div :class="prefixCls">
    <div ref="editor" class="editor-wrapper"></div>
  </div>
</template>

<script>
import WEditor from 'wangeditor'
import { GaiaService } from '@/api/service'

export default {
  name: 'WangEditor',
  props: {
    prefixCls: {
      type: String,
      default: 'ant-editor-wang'
    },
    // eslint-disable-next-line
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      editor: null,
      editorContent: null
    }
  },
  watch: {
    value (val) {
      this.editorContent = val
      this.editor.txt.html(val)
      // 是否禁用编辑功能
      this.editor.$textElem.attr('contenteditable', !this.disabled)
    }
  },
  mounted () {
    this.initEditor()
  },
  methods: {
    initEditor () {
      this.editor = new WEditor(this.$refs.editor)
      this.editor.customConfig.customUploadImg = function (files, insert) {
        GaiaService.uploadImage(files[0]).then(image => {
          insert(image.path)
        })
      }
      this.editor.customConfig.onchange = (html) => {
        this.editorContent = html
        this.$emit('change', this.editorContent)
      }
      this.editor.create()
    }
  }
}
</script>

<style lang="less">
.ant-editor-wang {
  .editor-wrapper {
    text-align: left;
  }
  .w-e-toolbar{
    .w-e-menu{
      padding: 1%
    }
  }
}
</style>
